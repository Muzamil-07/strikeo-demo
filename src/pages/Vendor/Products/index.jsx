import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { MdKeyboardArrowRight } from "react-icons/md";
import ClipLoader from "react-spinners/ClipLoader";
import noImage from "../../../assets/images/noImage.png";
import http from "../../../api";
import { toast } from "react-toastify";
import Product from "./Product";
import Pagination from "../../../components/Pagination";
import format from "../../../utils/format";

const Products = () => {
  const user = useSelector((state) => state.user);
  const productDetailBody = {
    name: "",
    gender: "",
    company: user.details.company.id,
    brand: "",
    category: "",
    subCategory: "",
    description: "",
    image: "",
    file: "",
    subImages: [
      {
        image: "",
        file: "",
      },
      {
        image: "",
        file: "",
      },
      {
        image: "",
        file: "",
      },
      {
        image: "",
        file: "",
      },
    ],
    amount: 0,
    costPrice: 0,
    discount: 0,
    sku: "",
    sizes: [],
    colors: ["#000000", "#ffffff"],
    tags: [],
  };

  const [view, setView] = useState("list");
  const [categories, setCategories] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedData, setPaginatedData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isToggling, setIsToggling] = useState(false);

  const itemsPerPage = 10;

  const statusColor = {
    Pending: ["gray", "500/10"],
    Rejected: ["red", "600/10"],
    Published: ["blue", "700/10"],
  };
  const createStatusBadge = (status) =>
    `inline-flex items-center rounded-md bg-${statusColor[status][0]}-50 px-2 py-1 text-xs font-medium text-${statusColor[status][0]}-700 ring-1 ring-inset ring-${statusColor[status][0]}-${statusColor[status][1]}`;

  const updateView = (view, product) => {
    setView(view);
    if (view === "list" || view === "add-product") {
      setSelectedProduct(productDetailBody);
    } else if (view === "view-product" && product) {
      logView(product);
      setSelectedProduct(product);
    }
  };

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected + 1);
  };

  const toggleProductActivation = (product) => {
    if (isToggling) return;
    if (product?.isActive) {
      blockProduct(product);
    } else {
      unblockProduct(product);
    }
  };

  const logView = async (product) => {
    try {
      const res = await http.post("/company/logs", {
        company: user.details.company.id,
        type: "Viewed Product",
        "Viewed Product": {
          name: product.name,
          category: product.category.name,
          message: `viewed product ${product.name} of category ${product.category.name}.`,
        },
      });
    } catch (error) {
      //
    }
  };

  const blockProduct = async (product) => {
    setIsToggling(true);
    try {
      const res = await http.put("/product/block/" + product?.id, {
        category: product.category.name,
      });
      toast.success("Product inactivated successfully.");
      getProducts(currentPage);
    } catch (error) {
      toast.error("Failed to block product.");
    }
    setIsToggling(false);
  };

  const unblockProduct = async (product) => {
    setIsToggling(true);
    try {
      const res = await http.put("/product/unblock/" + product?.id, {
        category: product.category.name,
      });
      toast.success("Product activated successfully.");
      getProducts(currentPage);
    } catch (error) {
      toast.error("Failed to unblock product.");
    }
    setIsToggling(false);
  };

  const getProducts = () => {
    http
      .get("/product/authenticated")
      .then((res) => {
        setPaginatedData(res.data.data);
      })
      .catch(() => {
        //
      });
  };

  // const getCategories = () => {
  //   http
  //     .get("/category?all=true")
  //     .then(res => {
  //       setCategories(res.data.data);
  //     })
  //     .catch(() => {
  //       //
  //     });
  // };
  function createNestedCategories(categories) {
    // Helper function to process each category and its sub-levels
    function processCategory(category) {
      // Create an object with the name of the current category or subcategory
      const result = { name: category.name };

      // Check for subcategories and recursively process them
      if (category.subCategories) {
        category.subCategories.forEach((subCategory) => {
          const processedSubCategory = processCategory(subCategory);
          for (const [key, value] of Object.entries(processedSubCategory)) {
            // Directly add subcategory objects without 'subCategories' key
            result[key] = value;
          }
        });
      }

      // Check for sub-subcategories and add them directly to the result
      if (category.subSubCategories) {
        category.subSubCategories.forEach((subSubCategory) => {
          // Add sub-subcategory objects without 'subSubCategories' key
          result[subSubCategory.id] = { name: subSubCategory.name };
        });
      }

      // Create a new key for the parent category or subcategory using its ID, and assign the constructed object
      const categoryKey = category.id || category._id;
      return { [categoryKey]: result };
    }

    // Process each top-level category and accumulate the results
    return categories.reduce((acc, category) => {
      const processedCategory = processCategory(category);
      return { ...acc, ...processedCategory };
    }, {});
  }

  const [categoryTree, setCategoryTree] = useState([]);

  const getCategories = () => {
    http
      .get("/category/all")
      .then((res) => {
        setCategoryTree(createNestedCategories(res.data.data));
      })
      .catch(() => {
        toast.error("Something went wrong.");
      });
  };

  const getPageData = async () => {
    setIsLoading(true);
    await Promise.all([getProducts(currentPage), getCategories()])
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    getPageData();
  }, []);

  return (
    <>
      <div className="flex-grow px-5 md:px-24 py-4">
        {isLoading || !paginatedData.products ? (
          <div className="flex justify-center items-center h-full">
            <ClipLoader size={60} color="#201F20" />
          </div>
        ) : view === "list" ? (
          <>
            <caption className="py-5 text-xl font-semibold text-left text-black-900 bg-white dark:text-white dark:bg-gray-800 flex justify-between">
              <div className="flex justify-between w-full">
                <div>
                  Products
                  <p className="mt-1 text-sm font-normal text-black-500 dark:text-black-400">
                    Keep track of all your products.
                  </p>
                </div>
                {user?.details?.role?.type === "StrikeO" &&
                user?.details?.role?.name === "SuperAdmin" ? (
                  <button
                    className="text-white bg-primary text-sm px-3 py-1 rounded-md h-12"
                    onClick={() => updateView("add-product")}
                  >
                    Add New Product
                  </button>
                ) : user?.details?.role?.type === "Vendor" &&
                  user?.details?.role?.vendorPermissions.includes(
                    "Create Products"
                  ) ? (
                  <button
                    className="text-white bg-primary text-sm px-3 py-1 rounded-md h-12"
                    onClick={() => updateView("add-product")}
                  >
                    Add New Product
                  </button>
                ) : (
                  <></>
                )}
              </div>
            </caption>
            <div className="max-h-[85%] relative overflow-x-auto border shadow-md sm:rounded-lg">
              <table className="md:w-full w-[900px] text-sm text-left text-black-500 dark:text-black-400">
                {paginatedData.products?.length === 0 ? (
                  <thead className="text-md text-black-700 uppercase bg-gray-50 flex justify-center py-3">
                    <tr>
                      <th>No product available to show.</th>
                    </tr>
                  </thead>
                ) : (
                  <>
                    <thead className="text-xs text-black-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-black-400">
                      <tr>
                        <th className="px-6 py-3">Product</th>
                        <th className="px-6 py-3">SKU</th>

                        <th className="px-6 py-3">Category</th>
                        <th className="px-6 py-3">Amount</th>
                        <th className="px-6 py-3">Price</th>
                        <th className="px-6 py-3">Status</th>
                        <th className="px-6 py-3">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {paginatedData.products &&
                        paginatedData.products.map((product) => (
                          <tr
                            key={product.id}
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                          >
                            <td className="px-6 py-4 font-medium text-black-900 whitespace-nowrap dark:text-white">
                              <div className="flex items-center gap-2">
                                <div className="shrink-0">
                                  <img
                                    className="h-[40px] w-[40px] object-contain rounded-full"
                                    src={
                                      product.image ? product.image : noImage
                                    }
                                    alt="Current profile photo"
                                  />
                                </div>
                                <div>{product.name}</div>
                              </div>
                            </td>

                            <td className="px-6 py-4">{product.sku}</td>
                            <td className="px-6 py-4">
                              {product.category?.name}
                            </td>
                            <td className="px-6 py-4">{product.amount}</td>
                            <td className="px-6 py-4">
                              {format.formatMoney(product.costPrice)}
                            </td>
                            <td className="px-6 py-4">
                              <span
                                className={createStatusBadge(product?.status)}
                              >
                                {product?.status}
                              </span>
                            </td>
                            <td className="pl-6 py-4">
                              <div className="flex gap-2">
                                <label className="relative inline-flex items-center cursor-pointer">
                                  <input
                                    type="checkbox"
                                    onChange={() =>
                                      toggleProductActivation(product)
                                    }
                                    checked={product?.isActive}
                                    className="sr-only peer"
                                  />
                                  <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                </label>
                                <MdKeyboardArrowRight
                                  className="text-black-500 cursor-pointer hover:text-black-900 dark:text-black-400 dark:hover:text-white text-2xl pl-2"
                                  onClick={() =>
                                    updateView("view-product", product)
                                  }
                                />
                              </div>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </>
                )}
              </table>
            </div>
            {paginatedData && paginatedData.totalPages > 1 && (
              <nav
                className="flex items-center flex-wrap md:gap-0 gap-4 justify-between pt-4"
                aria-label="Table navigation"
              >
                <span className="text-sm font-normal text-black-500 dark:text-black-400">
                  Showing{" "}
                  <span className="font-semibold ">
                    {(currentPage - 1) * itemsPerPage + 1}-
                    {Math.min(
                      currentPage * itemsPerPage,
                      paginatedData.totalProducts
                    )}
                  </span>{" "}
                  of{" "}
                  <span className="font-semibold ">
                    {paginatedData.totalProducts}
                  </span>
                </span>
                <Pagination
                  totalItems={paginatedData.totalProducts}
                  itemsPerPage={itemsPerPage}
                  onPageChange={handlePageChange}
                />
              </nav>
            )}
          </>
        ) : view === "add-product" ? (
          <Product
            view={view}
            updateView={updateView}
            getProducts={getProducts}
            categories={categories}
            selectedProduct={selectedProduct}
            setSelectedProduct={setSelectedProduct}
            categoryTree={categoryTree}
          />
        ) : view === "view-product" ? (
          <Product
            view={view}
            updateView={updateView}
            getProducts={getProducts}
            categories={categories}
            selectedProduct={selectedProduct}
            setSelectedProduct={setSelectedProduct}
            categoryTree={categoryTree}
          />
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Products;

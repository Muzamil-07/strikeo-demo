import { useState, useEffect } from "react";
// import { MdKeyboardArrowRight } from "react-icons/md";
import ClipLoader from "react-spinners/ClipLoader";
// import noImage from "../../../assets/images/noImage.png";
import http from "../../../api";
import { toast } from "react-toastify";
import Product from "./Product";
import ConfirmationModal from "./ConfirmationModal";
// import DataTable from "./Table";
import { useDebounce } from "use-debounce";
import { Box, Typography } from "@mui/material";
import { ProductsTabs } from "./Tabs";
import PublishedProducts from "./PublishedProducts";
import Reviewproducts from "./ReviewProducts";

const Products = () => {
  const productDetailBody = {
    name: "",
    brand: "",
    category: "",
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
    salePrice: 0,
    discount: 0,
    sku: "",
    sizes: [],
    colors: ["#000000", "#ffffff"],
    tags: [],
  };

  const [isPaginationLoading, setIsPaginationLoading] = useState(false);
  const [view, setView] = useState("list");
  const [categories, setCategories] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedData, setPaginatedData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [categoryTree, setCategoryTree] = useState(null)

  //   const [isToggling, setIsToggling] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [searchText, setSearchText] = useState("");
  const [searchedProduct] = useDebounce(searchText, 1000);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [categoryName] = useDebounce(selectedCategory, 1000);
  const [tabIndex, setTabIndex] = useState(0);

  const itemsPerPage = 7;

  const openModal = (product) => {
    setIsModalOpen(true);
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct({});
  };

  const updateView = (view, product) => {
    setView(view);
    if (view === "list" || view === "add-product") {
      setSelectedProduct(productDetailBody);
    } else if (view === "update-product" && product) {
      setSelectedProduct({
        ...product,
        salePrice: product.salePrice ?? product.costPrice,
      });
    }
  };

  const handlePageChange = (page) => {
    if (page === currentPage) return;
    if (searchedProduct) {
      getFilterProducts({ page });
    } else {
      getProducts(page);
    }
  };

  function createNestedCategories(categories) {
    // Helper function to process each category and its sub-levels
    function processCategory(category) {
      // Create an object with the name of the current category or subcategory
      const result = { name: category.name };
  
      // Check for subcategories and recursively process them
      if (category.subCategories) {
        category.subCategories.forEach(subCategory => {
          const processedSubCategory = processCategory(subCategory);
          for (const [key, value] of Object.entries(processedSubCategory)) {
            // Directly add subcategory objects without 'subCategories' key
            result[key] = value;
          }
        });
      }
  
      // Check for sub-subcategories and add them directly to the result
      if (category.subSubCategories) {
        category.subSubCategories.forEach(subSubCategory => {
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
  

  useEffect(() => {
    const getCategories = () => {
      http
        .get(
          "/category/all"
        )
        .then(res => {
          setCategoryTree(createNestedCategories(res.data.data));
        })
        .catch(() => {
          toast.error("Something went wrong.");
        });
    };
    getCategories();
  }, []);
  // const toggleProductActivation = (product) => {
  // 	if (isToggling) return;
  // 	if (product?.isActive) {
  // 		blockProduct(product);
  // 	} else {
  // 		unblockProduct(product);
  // 	}
  // };

  // const logView = async (product) => {
  // 	try {
  // 		const res = await http.post("/company/logs", {
  // 			company: user.details.company.id,
  // 			type: "Viewed Product",
  // 			"Viewed Product": {
  // 				name: product.name,
  // 				category: product.category.name,
  // 				message: `viewed product ${product.name} of category ${product.category.name}.`,
  // 			},
  // 		});
  // 	} catch (error) {
  // 	}
  // };

  // const blockProduct = async (product) => {
  // 	setIsToggling(true);
  // 	try {
  // 		const res = await http.put("/product/block/" + product?.id, {
  // 			category: product.category.name,
  // 		});
  // 		toast.success("Product inactivated successfully.");
  // 		getProducts(currentPage);
  // 	} catch (error) {
  // 		toast.error("Failed to block product.");
  // 	}
  // 	setIsToggling(false);
  // };

  // const unblockProduct = async (product) => {
  // 	setIsToggling(true);
  // 	try {
  // 		const res = await http.put("/product/unblock/" + product?.id, {
  // 			category: product.category.name,
  // 		});
  // 		toast.success("Product activated successfully.");
  // 		getProducts(currentPage);
  // 	} catch (error) {
  // 		toast.error("Failed to unblock product.");
  // 	}
  // 	setIsToggling(false);
  // };

  const rejectProduct = async (id) => {
    try {
      const res = await http.put("/product/reject/" + id);
      toast.success("Product rejected successfully.");
      getProducts(currentPage);
    } catch (error) {
      toast.error("Failed to reject product.");
    }
  };

  const getFilterProducts = ({
    page,
    searchingText = searchedProduct || "",
    category = categoryName || "",
  }) => {
    setIsPaginationLoading(true);
    http
      .get(
        `/product/filterProducts?page=${
          page || "1"
        }&limit=${itemsPerPage}&status=${
          tabIndex === 1 ? "Published" : "UnPublished"
        }&search=${searchingText}&category=${category}`
      )
      .then((res) => {
        setPaginatedData(res.data.data);
        setCurrentPage(res.data.data.currentPage);
      })
      .catch((e) => {
        console.log(`while fetching filter products=> `, e);
      })
      .finally(() => {
        setIsPaginationLoading(false);
      });
  };

  const getProducts = (page) => {
    setIsPaginationLoading(true);
    http
      .get(
        `/product/authenticated?page=${
          page ? page : "1"
        }&limit=${itemsPerPage}&status=${
          tabIndex === 1 ? "Published" : "UnPublished"
        }`
      )
      .then((res) => {
        setPaginatedData(res.data.data);
        setCurrentPage(res.data.data.currentPage);
      })
      .catch((e) => {
        console.log(`while fetching products=> `, e);
      })
      .finally(() => {
        setIsPaginationLoading(false);
      });
  };

  const getPageData = async (page = 1) => {
    await Promise.all([getProducts(page || currentPage)])
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    if (searchedProduct) {
      getFilterProducts({});
    } else {
      getPageData(1);
    }
  }, [searchedProduct, tabIndex]);

  return (
    <>
      <Box sx={{ px: 7, py: 4 }} width={"100%"} height={"100%"}>
        {isLoading || !paginatedData.products ? (
          <Box
            display={"flex"}
            justifyContent="center"
            alignItems="center"
            width={"100%"}
            height={"100%"}
          >
            <ClipLoader size={60} color="#201F20" />
          </Box>
        ) : view === "list" ? (
          <>
            <Typography variant="h6" fontWeight={"bold"} display="block">
              Products
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              Keep track of all products & publish them.
            </Typography>
            <ProductsTabs tabIndex={tabIndex} setTabIndex={setTabIndex} />
            {tabIndex === 0 ? (
              <Reviewproducts
                paginatedData={paginatedData}
                searchText={searchText}
                setSearchText={setSearchText}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                getProducts={getProducts}
                currentPage={currentPage}
                updateView={updateView}
                setCurrentPage={setCurrentPage}
                handlePageChange={handlePageChange}
                isPaginationLoading={isPaginationLoading}
                openModal={openModal}
                itemsPerPage={itemsPerPage}
              />
            ) : tabIndex === 1 ? (
              <>
                <PublishedProducts
                  itemsPerPage={itemsPerPage}
                  paginatedData={paginatedData}
                  searchText={searchText}
                  setSearchText={setSearchText}
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                  getProducts={getProducts}
                  currentPage={currentPage}
                  updateView={updateView}
                  setCurrentPage={setCurrentPage}
                  handlePageChange={handlePageChange}
                  isPaginationLoading={isPaginationLoading}
                  setIsPaginationLoading={setIsPaginationLoading}
                  openModal={openModal}
                />
              </>
            ) : (
              <></>
            )}
          </>
        ) : view === "update-product" ? (
          <Product
          tabIndex={tabIndex}
            view={view}
            updateView={updateView}
            getProducts={getProducts}
            categories={categories}
            selectedProduct={selectedProduct}
            categoryTree={categoryTree}
            setSelectedProduct={setSelectedProduct}
          />
        ) : (
          <></>
        )}
      </Box>
      {isModalOpen && (
        <ConfirmationModal
          closeModal={closeModal}
          selectedProduct={selectedProduct}
          rejectProduct={rejectProduct}
        />
      )}
    </>
  );
};

export default Products;

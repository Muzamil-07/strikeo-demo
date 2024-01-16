import { useState, useEffect } from "react";
import AdminSidebar from "../../../components/AdminSidebar";
import { useSelector } from "react-redux";
import { MdModeEdit } from "react-icons/md";
import ClipLoader from "react-spinners/ClipLoader";
import http from "../../../api";
import { toast } from "react-toastify";
import { GoAlert } from "react-icons/go";
import { useDebounce } from "use-debounce";
import Pagination from "../../../components/Pagination";

const Categories = () => {
  const [category, setCategory] = useState({
    name: "",
    subCategories: [],
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedData, setPaginatedData] = useState({});

  const [searchText, setSearchText] = useState("");
  const [searchedCategory] = useDebounce(searchText, 1000);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [actionLoader, setActionLoader] = useState(false);

  const itemsPerPage = 10;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const user = useSelector((state) => state.user);

  const openModal = (mode, category) => {
    if (category) setCategory(category);
    if (mode === "edit") {
      setIsEditModalOpen(true);
    }  else {
      setIsModalOpen(true);
    }
  };

  const closeModal = (mode) => {
    setCategory({
      name: "",
      subCategories: [],
    });
    setError(null);
    setActionLoader(false);
    if (mode === "edit") {
      setIsEditModalOpen(false);
    }  else {
      setIsModalOpen(false);
    }
  };

  const handlePageChange = (page) => {
    if (page === currentPage) return;
    getCategories(page);
  };

  const checkDisable = (action) => {
    let newError = "";

    if (!category || category.name?.trim() === "") {
      newError = "Please enter the name of category!";
    }

    if (category?.subCategories?.length > 0) {
      // check duplicates
      let duplicates = category?.subCategories?.filter(
        (item, index) => {
          if (typeof item === "object") {
            return category?.subCategories?.findIndex((subItem, subIndex) => subItem.name === item.name && index !== subIndex) !== -1
          } else {
            return category?.subCategories?.findIndex((subItem, subIndex) => subItem === item && index !== subIndex) !== -1
          }
        }
      );
      if (duplicates.length > 0) {
        toast.error("Duplicate sub categories are not allowed.");
        return;
      }
    }

    setError(newError);

    if (!newError && action === "add") {
      addCategory();
    }

    if (!newError && action === "edit") {
      updateCategory(!category?.isActive);
    }
  };

  const getCategories = (page) => {
    http
      .get(
        "/category?page=" +
          (page ? page : "1") +
          (searchedCategory ? "&name=" + searchedCategory : "")
      )
      .then((res) => {
        setCurrentPage(res.data.data.currentPage);
        setPaginatedData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addNewSubCategory = () => {
    setCategory({
      ...category,
      subCategories: [...category?.subCategories, ""],
    });
  };

  const deleteSubCategory = (index) => {
    let newSubCategories = [...category?.subCategories];
    newSubCategories.splice(index, 1);
    setCategory({
      ...category,
      subCategories: newSubCategories,
    });
  };

  const addCategory = () => {
    setActionLoader(true);

    http
      .post("/category", { name: category.name, subCategories: category.subCategories })
      .then(() => {
        toast.success("Category added successfully.");
        getCategories(currentPage);
        closeModal();
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something went wrong.");
      })
      .finally(() => setActionLoader(false));
  };

  const toggleCategoryActivation = (category, isActive) => {
    setActionLoader(true);
    http
      .put("/category/" + category.id, { isActive })
      .then(() => {
        toast.success(
          `${category.name} category ${
            isActive ? "activated" : "disabled"
          } successfully.`
        );
        getCategories(currentPage);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something went wrong.");
      })
      .finally(() => setActionLoader(false));
  };

  const updateCategory = () => {
    setActionLoader(true);
    http
      .put("/category/" + category.id, { name: category.name, subCategories: category.subCategories })
      .then(() => {
        toast.success("Category updated successfully.");
        getCategories(currentPage);
        closeModal("edit");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something went wrong.");
      })
      .finally(() => setActionLoader(false));
  };

  const deleteCategory = (id) => {
    setActionLoader(true);
    http
      .delete("/category/" + id)
      .then(() => {
        toast.success("Category deleted successfully.");
        getCategories(currentPage);
        closeModal("delete");
      })
      .catch((err) => {
        console.log(err);
        if (
          err.response.data.message ===
          "Category has products. You can't delete it!"
        ) {
          toast.error("Category has products. You can't delete it!");
        } else {
          toast.error("Something went wrong.");
        }
      })
      .finally(() => setActionLoader(false));
  };

  const getPageData = async () => {
    setIsLoading(true);
    await Promise.all([getCategories(currentPage)])
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    getCategories();
  }, [searchedCategory]);

  useEffect(() => {
    getPageData();
  }, []);
  return (
    <>
      <div
        className="w-full flex flex-col flex-grow bg-white text-gray-500"
        style={{ paddingLeft: "220px" }}
      >
        <div className="flex flex-grow">
          <AdminSidebar />
          <div className="flex-grow px-5 md:px-24 py-4">
            {isLoading || !paginatedData.categories ? (
              <div className="flex justify-center items-center h-full">
                <ClipLoader size={60} color="#201F20" />
              </div>
            ) : (
              <>
                <caption className="pt-4 pb-4 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800 flex justify-between">
                  <div className="flex justify-between w-full">
                    <div>
                      Manage Categories
                      <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                        Keep track of all your product categories at one place.
                      </p>
                    </div>
                    {user?.details?.role?.type === "StrikeO" &&
                    user?.details?.role?.name === "SuperAdmin" ? (
                      <button
                        className="text-white bg-primary text-sm px-3 py-1 rounded-md h-12"
                        onClick={() => openModal("add")}
                      >
                        Add New Category
                      </button>
                    ) : (
                      <></>
                    )}
                  </div>
                </caption>
                <div className="mb-5">
                  <h3 className="text-primary text-lg font-semibold">
                    Search Filters
                  </h3>
                  <p className="text-sm mb-2">
                    With the help of filters, you can easily find categories.
                  </p>
                  <div>
                    <label
                      htmlFor="default-search"
                      className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                    >
                      Search
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 start-0 flex items-center ps-3 cursor-pointer">
                        <svg
                          className="w-4 h-4 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 20"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                          />
                        </svg>
                      </div>
                      <input
                        type="text"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        id="default-search"
                        className="block px-4 py-2 ps-10 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search category..."
                      />
                    </div>
                  </div>
                </div>
                <div className="max-h-[83%] relative overflow-x-auto border shadow-md sm:rounded-lg">
                  <table className="md:w-full w-[900px] text-sm text-left text-gray-500 dark:text-gray-400">
                    {paginatedData?.categories?.length === 0 ? (
                      <thead className="text-md text-gray-700 uppercase bg-gray-50 flex justify-center p-3">
                        <tr>
                          <th>No Category available to show.</th>
                        </tr>
                      </thead>
                    ) : (
                      <>
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                          <tr>
                            <th className="px-6 py-3">Category</th>
                            <th className="px-6 py-3">Products</th>
                            {user?.details?.role?.type === "StrikeO" &&
                            user?.details?.role?.name === "SuperAdmin" ? (
                              <th className="px-6 py-3">Action</th>
                            ) : user?.details?.role === "employee" &&
                              user?.details?.roleDetails?.permissions.includes(
                                "Update Categories"
                              ) ? (
                              <th className="px-6 py-3">Action</th>
                            ) : (
                              <></>
                            )}
                          </tr>
                        </thead>
                        <tbody>
                          {paginatedData.categories &&
                            paginatedData.categories.map((category) => (
                              <tr
                                key={category.id}
                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                              >
                                <td className="px-6 py-4">{category?.name}</td>
                                <td className="px-6 py-4">
                                  {category && category.products?.length}
                                </td>
                                {user?.details?.role?.type === "StrikeO" &&
                                user?.details?.role?.name === "SuperAdmin" ? (
                                  <td className="pl-6 py-4">
                                    <div className="flex gap-2">
                                      <label className="relative inline-flex items-center cursor-pointer">
                                        <input
                                          type="checkbox"
                                          onChange={() =>
                                            toggleCategoryActivation(
                                              category,
                                              !category.isActive
                                            )
                                          }
                                          checked={category.isActive}
                                          className="sr-only peer"
                                        />
                                        <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
                                      </label>
                                      <MdModeEdit
                                        className="cursor-pointer text-xl"
                                        onClick={() =>
                                          openModal("edit", category)
                                        }
                                      />
                                    </div>
                                  </td>
                                ) : (
                                  <></>
                                )}
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
                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      Showing{" "}
                      <span className="font-semibold ">
                        {(currentPage - 1) * itemsPerPage + 1}-
                        {Math.min(
                          currentPage * itemsPerPage,
                          paginatedData.totalCategories
                        )}
                      </span>{" "}
                      of{" "}
                      <span className="font-semibold ">
                        {paginatedData.totalCategories}
                      </span>
                    </span>
                    <Pagination
                      totalItems={paginatedData.totalCategories}
                      itemsPerPage={itemsPerPage}
                      onPageChange={handlePageChange}
                    />
                  </nav>
                )}
              </>
            )}
          </div>
        </div>
        {/* <Footer /> */}
      </div>

      {/* Modal for adding category */}
      {isModalOpen && (
        <>
          <div
            className="fixed left-0 top-0 bg-black bg-opacity-50 z-[1055] h-full w-full overflow-y-auto overflow-x-hidden outline-none"
            onClick={closeModal}
          ></div>
          <div className="fixed max-w-[550px] m-auto  inset-0 flex items-center justify-center z-[1065]">
            <div className="p-7 bg-white text-black relative shadow-lg rounded-2xl shadow-primary-500/50 w-full">
              <button
                type="button"
                className="absolute top-3 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={closeModal}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <h3 className="text-2xl font-medium text-center pb-4">
                Add Category
              </h3>
              <form
                className="overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="flex flex-col gap-4 pr-2">
                  <label>Name Of Category *</label>
                  <input
                    required
                    type="text"
                    value={category?.name}
                    onChange={(e) =>
                      setCategory({ ...category, name: e.target.value })
                    }
                    className="outline-none border border-gray-400 rounded-md text-black bg-white px-3 py-3 w-full"
                  />
                  {error && <div className="text-red-500 text-sm">{error}</div>}
                </div>
                <div className="flex flex-col gap-4 pr-2 mt-6">
                  <div className="flex justify-between items-center">
                    <label>Sub Categories</label>
                    <button type="button" className="flex items-center justify-center gap-4 px-4 py-2 bg-primary hover:opacity-90 text-white rounded-lg disabled:bg-opacity-30 disabled:cursor-not-allowed" onClick={addNewSubCategory}>Add New</button>
                  </div>
                  {category?.subCategories?.length === 0 ? (<div className="text-center bg-slate-100 rounded-md py-2">
                    No sub categories added yet.
                  </div>): <div className="grid grid-cols-4 gap-8 overflow-y-auto max-h-[350px]">
                    {category?.subCategories?.map((subCategory, index) => (
                      <div className="col-span-2 relative" key={index}>
                        <input
                          required
                          type="text"
                          value={subCategory}
                          onChange={(e) => {
                            let newSubCategories = [...category?.subCategories];
                            newSubCategories[index] = e.target.value;
                            setCategory({
                              ...category,
                              subCategories: newSubCategories,
                            });
                          }}
                          className="outline-none border-b border-gray-400 text-black bg-white px-3 py-3 w-[80%]"
                        />
                        <button type="button" className="absolute top-3 right-2 text-xl" onClick={() => deleteSubCategory(index)
                        }>x</button>
                      </div>
                    ))}
                  </div>}
                </div>
              </form>

              <div className="flex justify-end gap-3 items-center">
                <button
                  disabled={actionLoader}
                  onClick={() => checkDisable("add")}
                  className="flex items-center justify-center gap-4 mt-4 px-4 w-full py-2 bg-primary hover:opacity-90 text-white rounded-lg disabled:bg-opacity-30 disabled:cursor-not-allowed"
                >
                  {actionLoader && <ClipLoader size={20} color="#fff" />}
                  Add Category
                </button>
              </div>
            </div>
          </div>
        </>
      )}
      {/* Modal for editing category */}
      {isEditModalOpen && (
        <>
          <div
            className="fixed left-0 top-0 bg-black bg-opacity-50 z-[1055] h-full w-full overflow-y-auto overflow-x-hidden outline-none"
            onClick={() => closeModal("edit")}
          ></div>
          <div className="fixed max-w-[550px] m-auto  inset-0 flex items-center justify-center z-[1065]">
            <div className="p-7 bg-white text-black relative shadow-lg h-{} rounded-2xl shadow-primary-500/50 w-full">
              <h3 className="text-2xl font-medium text-center pb-4">
                Edit Category
              </h3>
              <form
                className="overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
                onSubmit={(e) => e.preventDefault()}
              >
                <button
                  type="button"
                  className="absolute top-3 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={() => closeModal("edit")}
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
                <div className="flex flex-col gap-4 pr-2">
                  <label>Name Of Category *</label>
                  <input
                    required
                    type="text"
                    value={category?.name}
                    onChange={(e) =>
                      setCategory({ ...category, name: e.target.value })
                    }
                    className="outline-none border border-gray-400 rounded-md text-black bg-white px-3 py-3 w-full"
                  />
                  {error && <div className="text-red-500 text-sm">{error}</div>}
                </div>
                <div className="flex flex-col gap-4 pr-2 mt-6">
                  <div className="flex justify-between items-center">
                    <label>Sub Categories</label>
                    <button type="button" className="flex items-center justify-center gap-4 px-4 py-2 bg-primary hover:opacity-90 text-white rounded-lg disabled:bg-opacity-30 disabled:cursor-not-allowed" onClick={addNewSubCategory}>Add New</button>
                  </div>
                  {category?.subCategories?.length === 0 ? (<div className="text-center bg-slate-100 rounded-md py-2">
                    No sub categories added yet.
                  </div>): <div className="grid grid-cols-4 gap-8 overflow-y-auto max-h-[350px]">
                    {category?.subCategories?.map((subCategory, index) => (
                      <div className="col-span-2 relative" key={index}>
                        <input
                          required
                          type="text"
                          value={typeof subCategory === "object" ? subCategory.name : subCategory}
                          onChange={(e) => {
                            let newSubCategories = [...category?.subCategories];
                            newSubCategories[index] = e.target.value;
                            setCategory({
                              ...category,
                              subCategories: newSubCategories,
                            });
                          }}
                          className="outline-none border-b border-gray-400 text-black bg-white px-3 py-3 w-[80%]"
                        />
                        <button type="button" className="absolute top-3 right-2 text-xl" onClick={() => deleteSubCategory(index)
                        }>x</button>
                      </div>
                    ))}
                  </div>}
                </div>
              </form>

              <div className="flex justify-end gap-3 items-center">
                {/* <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg" onClick={() => closeModal("edit")}>
									Close
								</button> */}
                <button
                  disabled={actionLoader}
                  onClick={() => checkDisable("edit")}
                  className="flex items-center justify-center gap-4 mt-4 w-full px-4 py-2 bg-primary hover:opacity-90 text-white rounded-lg disabled:bg-opacity-30 disabled:cursor-not-allowed"
                >
                  {actionLoader && <ClipLoader size={20} color="#fff" />}
                  Save
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Categories;

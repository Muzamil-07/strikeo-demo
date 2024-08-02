import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { MdModeEdit } from "react-icons/md";
import ClipLoader from "react-spinners/ClipLoader";
import http from "../../../api";
import { toast } from "react-toastify";
import { useDebounce } from "use-debounce";
import { TablePagination } from "../../../components/TablePagination/TablePagination";
import CategoriesModel from "./CategoriesModel";

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedData, setPaginatedData] = useState({});
  const [isPaginationLoading, setIsPaginationLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [searchedCategory] = useDebounce(searchText, 1000);

  const [isLoading, setIsLoading] = useState(false);
  const [actionLoader, setActionLoader] = useState(false);

  const itemsPerPage = 10;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const user = useSelector((state) => state.user);

  const openModal = (_category) => {
    if (_category) {
      setSelectedCategory(_category);
      setIsEditModalOpen(true);
    } else {
      setIsModalOpen(true);
    }
  };

  const handlePageChange = (page) => {
    if (page === currentPage) return;
    getCategories(page);
  };

  const getCategories = (page) => {
    setIsPaginationLoading(true);
    http
      .get(
        "/category?page=" +
          (page ? page : "1") +
          (searchedCategory ? "&name=" + searchedCategory : "") +
          ("&limit=" + itemsPerPage)
      )
      .then((res) => {
        setCurrentPage(res.data.data.currentPage);
        setPaginatedData(res.data.data);
      })
      .catch(() => {
        //
      })
      .finally(() => setIsPaginationLoading(false));
  };

  const toggleCategoryActivation = (category, isActive) => {
    setActionLoader(true);
    const _categoryId = category.id || category._id;
    http
      .patch("/category/" + _categoryId, { isActive })
      .then(() => {
        toast.success(
          `${category.name} category ${
            isActive ? "activated" : "disabled"
          } successfully.`
        );
        getCategories(currentPage);
      })
      .catch(() => {
        toast.error("Something went wrong.");
      })
      .finally(() => setActionLoader(false));
  };

  const getPageData = async () => {
    setIsLoading(true);
    await Promise.all([getCategories(currentPage)])
      .catch(() => {
        //
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    getPageData();
  }, [searchedCategory]);

  return (
    <>
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
                    onClick={() => openModal()}
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
                              {category?.product_count}
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
                                      checked={category?.isActive}
                                      className="sr-only peer"
                                    />
                                    <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                    <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
                                  </label>
                                  <MdModeEdit
                                    className="cursor-pointer text-xl"
                                    onClick={() => openModal(category?._id)}
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

            <TablePagination
              handlePageChange={handlePageChange}
              totalItems={paginatedData.totalCategories || 0}
              itemsPerPage={itemsPerPage}
              currentPage={currentPage}
              isLoading={isPaginationLoading}
            />
          </>
        )}
      </div>

      {/* Modal for adding category */}
      {isModalOpen && (
        <CategoriesModel
          modalState={{ get: isModalOpen, set: setIsModalOpen }}
        />
      )}
      {/* Modal for editing category */}
      {isEditModalOpen && (
        <>
          <CategoriesModel
            modalState={{ get: isEditModalOpen, set: setIsEditModalOpen }}
            categoryId={selectedCategory}
          />
        </>
      )}
    </>
  );
};

export default Categories;

import { useEffect, useRef, useState } from "react";
import http from "../../../api";
import ClipLoader from "react-spinners/ClipLoader";
import { useDebounce } from "use-debounce";
import AdminSidebar from "../../../components/AdminSidebar";
import Pagination from "../../../components/Pagination";

const ActivityLogs = () => {
  const isMounted = useRef(false);

  const [paginatedData, setPaginatedData] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [view, setView] = useState("list");

  const itemsPerPage = 8;

  const [searchText, setSearchText] = useState("");
  const [searchedLogs] = useDebounce(searchText, 1000);

  function formatDate(isoDateString) {
    const date = new Date(isoDateString); // Convert the ISO string to a Date object

    const twoDigits = (num) => num.toString().padStart(2, "0");

    const day = twoDigits(date.getDate());
    const month = twoDigits(date.getMonth() + 1); // Months are zero-indexed
    const year = date.getFullYear();
    const hours = twoDigits(date.getHours());
    const minutes = twoDigits(date.getMinutes());
    const seconds = twoDigits(date.getSeconds());

    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  }

  const handlePageChange = (page) => {
    if (page === currentPage) return;
    getLogs(page);
  };

  const getLogs = async (page) => {
    try {
      const res = await http.get(
        `company/logs?limit=8&page=` +
          (page ? page : "1") +
          (searchedLogs ? "&search=" + searchedLogs : "")
      );

      // console.log("Orders received: ", res.data.data);

      setCurrentPage(res.data.data.currentPage);
      setPaginatedData(res.data.data);
    } catch (error) {
      console.log("Failed to fetch user orders: ", error);
    }
  };

  const getPageData = async () => {
    setIsLoading(true);
    await Promise.all([getLogs(currentPage)])
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    getPageData();
  }, []);

  useEffect(() => {
    if (isMounted.current) {
      getLogs();
    } else {
      isMounted.current = true;
    }
  }, [searchedLogs]);

  return (
    <div
      className="w-full flex flex-col flex-grow bg-white text-black-500"
      style={{ paddingLeft: "220px" }}
    >
      <div className="flex flex-grow">
        <AdminSidebar />
        <div className="flex-grow px-5 md:px-24 py-4">
          {isLoading || !paginatedData.activities ? (
            <div className="flex justify-center items-center h-full">
              <ClipLoader size={60} color="#201F20" />
            </div>
          ) : view === "list" ? (
            <>
              <caption className="pt-4 pb-4 text-lg font-semibold text-left text-black-900 bg-white dark:text-white dark:bg-gray-800 flex justify-between">
                <div className="flex justify-between w-full">
                  <div className="text-xl  text-black-900 ">
                    Activity Logs
                    <p className="mt-1 text-sm font-normal text-black-500 dark:text-black-400">
                      Watch activities of your employees.
                    </p>
                  </div>
                </div>
              </caption>
              <div className="mb-5">
                <h3 className="text-primary text-lg font-semibold">
                  Search Filters
                </h3>
                <p className="text-sm mb-2">
                  With the help of filters, you can easily find activities.
                </p>
                <div>
                  <label
                    htmlFor="default-search"
                    className="mb-2 text-sm font-medium text-black-900 sr-only dark:text-white"
                  >
                    Search
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 cursor-pointer">
                      <svg
                        className="w-4 h-4 text-black-500 dark:text-black-400"
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
                      placeholder="Search user..."
                    />
                  </div>
                </div>
              </div>
              <div className="max-h-[83%] relative overflow-x-auto border shadow-md sm:rounded-lg">
                <table className="md:w-full w-[900px] text-sm text-left text-black-500 dark:text-black-400">
                  {paginatedData.activities?.length === 0 ? (
                    <thead className="text-md text-black-700 uppercase bg-gray-50 flex justify-center p-3">
                      <tr>
                        <th>No log available to show.</th>
                      </tr>
                    </thead>
                  ) : (
                    <>
                      {paginatedData.activities && (
                        <thead className="text-xs text-black-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-black-400">
                          <tr>
                            <th className="px-6 py-3">Logged At</th>
                            <th className="px-6 py-3">Activity</th>
                          </tr>
                        </thead>
                      )}
                      <tbody>
                        {paginatedData.activities &&
                          paginatedData.activities.map((activity, i) => (
                            <tr
                              key={i}
                              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                            >
                              <td className="px-6 py-4">
                                {formatDate(activity?.createdAt)}
                              </td>
                              <td className="px-6 py-4">
                                {activity?.employeeName +
                                  " " +
                                  activity?.[activity.type]?.message}
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
                        paginatedData.totalActivities
                      )}
                    </span>{" "}
                    of{" "}
                    <span className="font-semibold ">
                      {paginatedData.totalActivities}
                    </span>
                  </span>
                  <Pagination
                    totalItems={paginatedData.totalActivities}
                    itemsPerPage={itemsPerPage}
                    onPageChange={handlePageChange}
                  />
                </nav>
              )}
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default ActivityLogs;

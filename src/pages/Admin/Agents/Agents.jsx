import { useState, useEffect } from "react";
import AdminSidebar from "../../../components/AdminSidebar";
import { useSelector } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import http from "../../../api";
import { useDebounce } from "use-debounce";
import AddForm from "../../../components/AddForm";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { MdKeyboardArrowRight } from "react-icons/md";
import Profile from "../../../components/Profile";
import Pagination from "../../../components/Pagination";

const Agents = () => {
  const user = useSelector((state) => state.user);

  const [view, setView] = useState("list");
  const [selectedAgent, setSelectedAgent] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedData, setPaginatedData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const [searchText, setSearchText] = useState("");
  const [searchedAgent] = useDebounce(searchText, 1000);

  const itemsPerPage = 10;

  const updateView = (view, agent) => {
    setView(view);
    if (view === "list") {
      setSelectedAgent();
    } else if (view === "single-agent" && agent) {
      setSelectedAgent(agent);
    }
  };

  const getAgents = async () => {
    try {
      const res = await http.get("/agent");

      setCurrentPage(res.data.data.currentPage);
      setPaginatedData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getPageData = async () => {
    setIsLoading(true);
    await Promise.all([getAgents(currentPage)])
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    getPageData();
  }, []);

  return (
    <div
      className="w-full flex flex-col flex-grow bg-white text-black-500"
      style={{ paddingLeft: "220px" }}
    >
      <div className="flex flex-grow">
        <AdminSidebar />
        <div className="flex-grow px-5 md:px-24 py-4">
          {isLoading || !paginatedData.agents ? (
            <div className="flex justify-center items-center h-full">
              <ClipLoader size={60} color="#201F20" />
            </div>
          ) : view === "list" ? (
            <>
              <caption className="pt-4 pb-4 text-xl font-semibold text-left text-black-900 bg-white dark:text-white dark:bg-gray-800 flex justify-between">
                <div className="flex justify-between w-full">
                  <div>
                    Manage Agents
                    <p className="mt-1 text-sm font-normal text-black-500 dark:text-black-400">
                      Manage agents in one central hub.
                    </p>
                  </div>
                  <button
                    className="text-white bg-primary text-sm px-3 py-1 rounded-md h-12"
                    onClick={() => updateView("add-agent")}
                  >
                    Add New Agent
                  </button>
                </div>
              </caption>
              <div className="mb-5">
                <h3 className="text-primary text-lg font-semibold">
                  Search Filters
                </h3>
                <p className="text-sm mb-2">
                  With the help of filters, you can easily find agents.
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
                      placeholder="Search agent..."
                    />
                  </div>
                </div>
              </div>
              <div className="max-h-[83%] relative overflow-x-auto border shadow-md sm:rounded-lg">
                <table className="md:w-full w-[900px] text-sm text-left text-black-500 dark:text-black-400">
                  {paginatedData.agents?.length === 0 ? (
                    <thead className="text-md text-black-700 uppercase bg-gray-50 flex justify-center p-3">
                      <tr>
                        <th>No Agent available to show.</th>
                      </tr>
                    </thead>
                  ) : (
                    <>
                      {paginatedData.agents && (
                        <thead className="text-xs text-black-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-black-400">
                          <tr>
                            <th className="px-6 py-3">Name</th>
                            <th className="px-6 py-3">Country</th>
                            <th className="px-6 py-3">City</th>
                            <th className="px-6 py-3">Phone</th>
                            <th className="px-6 py-3">Action</th>
                          </tr>
                        </thead>
                      )}
                      <tbody>
                        {paginatedData.agents &&
                          paginatedData.agents.map((agent) => (
                            <tr
                              key={agent.id}
                              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                            >
                              <td className="px-6 py-4">
                                <div className="flex gap-2">
                                  <span>
                                    {agent?.firstName + " " + agent?.lastName}
                                  </span>
                                </div>
                              </td>
                              <td className="px-6 py-4">{agent?.country}</td>
                              <td className="px-6 py-4">{agent?.city}</td>
                              <td className="px-6 py-4">
                                {agent?.contact?.phone}
                              </td>
                              <td className="pl-6 py-4">
                                <div className="flex gap-2">
                                  {agent.id !== user?.details?.id &&
                                    user?.details?.role?.type === "Vendor" &&
                                    user?.details?.role?.vendorPermissions.includes(
                                      "Update Employees"
                                    ) && (
                                      <label className="relative inline-flex items-center cursor-pointer">
                                        <input
                                          type="checkbox"
                                          onChange={(e) =>
                                            toggleEmployeeActivaition(agent)
                                          }
                                          checked={agent?.isActive}
                                          className="sr-only peer"
                                        />
                                        <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                      </label>
                                    )}
                                  <MdKeyboardArrowRight
                                    className="text-black-500 cursor-pointer hover:text-black-900 dark:text-black-400 dark:hover:text-white text-2xl pl-2"
                                    onClick={() =>
                                      updateView("single-agent", agent)
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
                        paginatedData.totalAgents
                      )}
                    </span>{" "}
                    of{" "}
                    <span className="font-semibold ">
                      {paginatedData.totalAgents}
                    </span>
                  </span>
                  <Pagination
                    totalItems={paginatedData.totalAgents}
                    itemsPerPage={itemsPerPage}
                    onPageChange={handlePageChange}
                  />
                </nav>
              )}
            </>
          ) : view === "add-agent" ? (
            <div className="py-4">
              <div className="grid grid-cols-1">
                <div className="flex items-center gap-4">
                  <HiArrowNarrowLeft
                    className="text-black-500 cursor-pointer hover:text-black-900 dark:text-black-400 dark:hover:text-white text-4xl pl-2"
                    onClick={() => updateView("list")}
                  />
                  GO BACK
                </div>
              </div>
              <AddForm
                userType="agent"
                getUsers={getAgents}
                updateView={updateView}
              />
            </div>
          ) : view === "single-agent" ? (
            <div className="py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <HiArrowNarrowLeft
                    className="text-black-500 cursor-pointer hover:text-black-900 dark:text-black-400 dark:hover:text-white text-4xl pl-2"
                    onClick={() => updateView("list")}
                  />
                  {selectedAgent?.firstName + " " + selectedAgent?.lastName}
                </div>
              </div>
              <Profile
                userType="agent"
                getUsers={getAgents}
                loggedInUser={user}
                selectedUser={selectedAgent}
                setSelectedUser={setSelectedAgent}
              />
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Agents;

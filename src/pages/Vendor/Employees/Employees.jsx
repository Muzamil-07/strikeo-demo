import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { toast } from "react-toastify";
import http from "../../../api";
import ClipLoader from "react-spinners/ClipLoader";
import { useDebounce } from "use-debounce";
import Profile from "../../../components/Profile";
import AddForm from "../../../components/AddForm";
import Pagination from "../../../components/Pagination";

const Employees = () => {
  const user = useSelector(state => state.user);
  const defaultSelectedUser = {
    firstName: "",
    lastName: "",
    alias: "",
    gender: "male",
    country: "",
    dob: "",
    contact: {
      phone: "",
      secondaryPhone: "",
      email: "",
      address: "",
    },
    emergencyContact: {
      phone: "",
      name: "",
    },
    profileImage: "",
    file: "",
    roleId: "",
  };
  const [selectedUser, setSelectedUser] = useState(defaultSelectedUser);
  const errorsBody = {
    firstName: null,
    lastName: null,
    alias: null,
    gender: null,
    country: null,
    dob: null,
    contact: {
      phone: null,
      email: null,
      address: null,
    },
    profileImage: null,
    roleId: null,
  };
  const [errors, setErrors] = useState(errorsBody);
  const [roles, setRoles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedData, setPaginatedData] = useState({});

  const [searchText, setSearchText] = useState("");
  const [searchedEmployee] = useDebounce(searchText, 1000);

  const [isLoading, setIsLoading] = useState(false);
  const [view, setView] = useState("list");
  const [actionLoader, setActionLoader] = useState({
    add: false,
    edit: false,
    delete: false,
  });
  const itemsPerPage = 10;

  const updateView = (view, user) => {
    setView(view);
    if (view === "list") {
      setSelectedUser(defaultSelectedUser);
    } else if (view === "single-user" && user) {
      logView(user);
      setSelectedUser(user);
    }
  };

  const logView = async user => {
    try {
      const res = await http.post("/company/logs", {
        company: user.company.id,
        type: "Viewed Employee",
        "Viewed Employee": {
          name: user.firstName + " " + user.lastName,
          message: `viewed ${user.firstName + " " + user.lastName} profile.`,
        },
      });
    } catch (error) {
      //
    }
  };

  const toggleEmployeeActivaition = employee => {
    toggleActivation(employee);
  };

  const handlePageChange = page => {
    if (page === currentPage) return;
    getEmployees(page);
  };

  const getEmployees = page => {
    http
      .get("/company/employees?page=" + (page ? page : "1"))
      .then(res => {
        setCurrentPage(res.data.data.currentPage);
        setPaginatedData(res.data.data);
      })
      .catch(() => {
        //
      });
  };

  const toggleActivation = employee => {
    try {
      const res = http.put("/company/employee/toggle-activation/" + employee?.id);

      toast.success(`Employee ${employee?.isActive ? "blocked" : "unblocked"} successfully.`);
      getEmployees(currentPage);
    } catch (error) {
      toast.error("Something went wrong.");
    }
  };

  const getRoles = () => {
    http
      .get("/role/vendor?all=true")
      .then(res => {
        setRoles(res.data.data?.roles);
      })
      .catch(() => {
        //
      });
  };

  const getPageData = async () => {
    setIsLoading(true);
    await Promise.all([getEmployees(currentPage), getRoles()])
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    getPageData();
  }, []);

  return (
    <>
      <div className="flex-grow px-5 md:px-24 py-4">
        {isLoading || !paginatedData.employees ? (
          <div className="flex justify-center items-center h-full">
            <ClipLoader size={60} color="#201F20" />
          </div>
        ) : view === "list" ? (
          <>
            <caption className="pt-4 pb-4 text-lg font-semibold text-left text-black-900 bg-white dark:text-white dark:bg-gray-800 flex justify-between">
              <div className="flex justify-between w-full">
                <div className="text-black-900 text-xl">
                  Manage Employees
                  <p className="mt-1 text-sm font-normal text-black-500 dark:text-black-400">
                    Manage employees in one central hub.
                  </p>
                </div>
                {user?.details?.role?.type === "Vendor" &&
                  user?.details?.role?.vendorPermissions.includes("Create Employees") && (
                    <button
                      className="text-white bg-primary text-sm px-3 py-1 rounded-md h-12"
                      onClick={() => updateView("add-user")}
                    >
                      Add New Employee
                    </button>
                  )}
              </div>
            </caption>
            <div className="mb-5">
              <h3 className="text-primary text-lg font-semibold">Search Filters</h3>
              <p className="text-sm mb-2">
                With the help of filters, you can easily find employees.
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
                    onChange={e => setSearchText(e.target.value)}
                    id="default-search"
                    className="block px-4 py-2 ps-10 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search employee..."
                  />
                </div>
              </div>
            </div>
            <div className="max-h-[83%] relative overflow-x-auto border shadow-md sm:rounded-lg">
              <table className="md:w-full w-[900px] text-sm text-left text-black-500 dark:text-black-400">
                {paginatedData.employees?.length === 0 ? (
                  <thead className="text-md text-black-700 uppercase bg-gray-50 flex justify-center p-3">
                    <tr>
                      <th>No Employee available to show.</th>
                    </tr>
                  </thead>
                ) : (
                  <>
                    {paginatedData.employees && (
                      <thead className="text-xs text-black-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-black-400">
                        <tr>
                          <th className="px-6 py-3">Name</th>
                          <th className="px-6 py-3">Email</th>
                          <th className="px-6 py-3">Role</th>
                          <th className="px-6 py-3">Action</th>
                        </tr>
                      </thead>
                    )}
                    <tbody>
                      {paginatedData.employees &&
                        paginatedData.employees.map(employee => (
                          <tr
                            key={employee.id}
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                          >
                            <td className="px-6 py-4">
                              <div className="flex gap-2">
                                <span>{employee?.firstName + " " + employee?.lastName}</span>
                                {employee?.isVerified ? (
                                  <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
                                    Completed
                                  </span>
                                ) : (
                                  <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
                                    Incomplete
                                  </span>
                                )}
                              </div>
                            </td>
                            <td className="px-6 py-4">{employee?.contact?.email}</td>
                            <td className="px-6 py-4">{employee?.role?.name}</td>
                            <td className="pl-6 py-4">
                              <div className="flex gap-2">
                                {employee.id !== user?.details?.id &&
                                  user?.details?.role?.type === "Vendor" &&
                                  user?.details?.role?.vendorPermissions.includes(
                                    "Update Employees"
                                  ) && (
                                    <label className="relative inline-flex items-center cursor-pointer">
                                      <input
                                        type="checkbox"
                                        onChange={() => toggleEmployeeActivaition(employee)}
                                        checked={employee?.isActive}
                                        className="sr-only peer"
                                      />
                                      <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                    </label>
                                  )}
                                <MdKeyboardArrowRight
                                  className="text-black-500 cursor-pointer hover:text-black-900 dark:text-black-400 dark:hover:text-white text-2xl pl-2"
                                  onClick={() => updateView("single-user", employee)}
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
                    {Math.min(currentPage * itemsPerPage, paginatedData.totalCategories)}
                  </span>{" "}
                  of <span className="font-semibold ">{paginatedData.totalCategories}</span>
                </span>
                <Pagination
                  totalItems={paginatedData.totalCategories}
                  itemsPerPage={itemsPerPage}
                  onPageChange={handlePageChange}
                />
              </nav>
            )}
          </>
        ) : view === "add-user" ? (
          <div className="py-4">
            <div className="grid grid-cols-1">
              <div className="flex items-center gap-4">
                <HiArrowNarrowLeft
                  className="text-black-500 cursor-pointer hover:text-black-900 dark:text-black-400 dark:hover:text-white text-4xl pl-2"
                  onClick={() => {
                    updateView("list");
                    setErrors(errorsBody);
                  }}
                />
                GO BACK
              </div>
            </div>
            <AddForm
              userType="employee"
              roles={roles}
              getUsers={getEmployees}
              updateView={updateView}
            />
          </div>
        ) : view === "single-user" ? (
          <div className="py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <HiArrowNarrowLeft
                  className="text-black-500 cursor-pointer hover:text-black-900 dark:text-black-400 dark:hover:text-white text-4xl pl-2"
                  onClick={() => updateView("list")}
                />
                {selectedUser?.firstName + " " + selectedUser?.lastName}
              </div>
            </div>
            <Profile
              userType="employee"
              getUsers={getEmployees}
              loggedInUser={user}
              selectedUser={selectedUser}
              setSelectedUser={setSelectedUser}
            />
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Employees;

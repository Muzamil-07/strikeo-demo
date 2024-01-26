import { useState, useEffect } from "react";
import AdminSidebar from "../../../components/AdminSidebar";
import { useNavigate } from "react-router-dom";
import http from "../../../api";
import { toast } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader";
import { HiArrowNarrowLeft } from "react-icons/hi";
import UserTabs from "./UserTabs";
import { useDebounce } from "use-debounce";
import UsersTable from "./UsersTable";

const Users = () => {
  const defaultUser = {
    username: "",
    email: "",
    password: "",
    roleId: "",
  };
  const navigate = useNavigate();
  const [selectedUser, setSelectedUser] = useState(defaultUser);
  const [view, setView] = useState("list");
  const [roles, setRoles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedData, setPaginatedData] = useState({});

  const [searchText, setSearchText] = useState("");
  const [searchedUser] = useDebounce(searchText, 1000);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isRoleModalOpen, setIsRoleModalOpen] = useState(false);
  const updateView = (view, user) => {
    setView(view);
    if (view === "list") {
      setSelectedUser(defaultUser);
    } else if (view === "single-user" && user) {
      setSelectedUser(user);
    } else if (view === "edit-user" && user) {
      setSelectedUser({
        ...user,
        updated: {
          ...user,
        },
      });
    }
  };
  //   const openModal = (mode, role) => {
  //     if (role) setSelectedUser(role);
  //     if (mode === "delete") {
  //       setIsDeleteModalOpen(true);
  //     } else if (mode === "edit") {
  //       setIsEditModalOpen(true);
  //     } else if (mode === "view") {
  //       setIsViewModalOpen(true);
  //     } else {
  //       if (roles && roles.length === 0) {
  //         setIsRoleModalOpen(true);
  //       } else {
  //         setSelectedUser({
  //           roleId: roles[0]?.id,
  //         });
  //         setIsModalOpen(true);
  //       }
  //     }
  //   };
  const closeModal = (mode) => {
    setSelectedUser({
      username: "",
      email: "",
      password: "",
      roleId: "",
    });
    if (mode === "delete") {
      setIsDeleteModalOpen(false);
    } else if (mode === "edit") {
      setIsEditModalOpen(false);
    } else if (mode === "view") {
      setIsViewModalOpen(false);
    } else if (mode === "role") {
      setIsRoleModalOpen(false);
    } else {
      setIsModalOpen(false);
    }
  };
  const checkDisable = () => {
    if (
      !selectedUser ||
      !selectedUser.username ||
      selectedUser.username.trim() === "" ||
      !selectedUser.email ||
      selectedUser.email.trim() === "" ||
      !selectedUser.password ||
      selectedUser.password.trim() === "" ||
      !selectedUser.roleId ||
      selectedUser.roleId.trim() === ""
    )
      return true;
  };
  const checkDisableEdited = () => {
    // console.log(selectedUser, "selectedUser");
    if (
      !selectedUser ||
      !selectedUser.username ||
      selectedUser.username.trim() === "" ||
      !selectedUser.email ||
      selectedUser.email.trim() === "" ||
      !selectedUser.roleId ||
      selectedUser.roleId.trim() === ""
    )
      return true;
  };
  const getUsers = (page) => {
    http
      .get(
        "/user/all?page=" +
          (page ? page : "1") +
          (searchedUser ? "&search=" + searchedUser : "")
      )
      .then((res) => {
        // console.log(res.data.data, "res.data.data");
        setCurrentPage(res.data.data.currentPage);
        setPaginatedData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addUser = () => {
    if (checkDisable()) {
      toast.error("Please fill all required fields!");
      return;
    }

    const EMAIL_REGEX = /^\S+@\S+\.\S+$/;

    if (!EMAIL_REGEX.test(selectedUser.email)) {
      toast.error("Please enter a valid email address!");
      return;
    }

    http
      .post("/admin/user", selectedUser)
      .then(() => {
        // console.log(res.data, "res.data");
        toast.success("User added successfully.");
        getUsers(currentPage);
        closeModal();
      })
      .catch((err) => {
        console.log(err);
        if (err.response?.data?.message === "Email taken!") {
          toast.error("Email already taken.");
        } else if (err.response?.data?.message === "Username taken!") {
          toast.error("Username already taken.");
        } else {
          toast.error("Something went wrong.");
        }
      });
  };

  const updateUser = () => {
    if (checkDisableEdited()) {
      toast.error("Please enter details in required fields!");
      return;
    }

    http
      .put("/admin/user/" + selectedUser.id, selectedUser)
      .then(() => {
        // console.log(res.data, "res.data");
        toast.success("User updated successfully.");
        getUsers(currentPage);
        closeModal("edit");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something went wrong.");
      });
  };

  const deleteUser = (id) => {
    http
      .delete("/admin/user/" + id)
      .then(() => {
        // console.log(res.data, "res.data");
        toast.success("User deleted successfully.");
        closeModal("delete");
        getUsers(currentPage);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something went wrong.");
      });
  };

  const getPageData = async () => {
    setIsLoading(true);
    await Promise.all([getUsers(currentPage)])
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchedUser]);

  useEffect(() => {
    getPageData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div
        className="w-full flex flex-col flex-grow bg-white text-black-500"
        style={{ paddingLeft: "220px" }}
      >
        <div className="flex flex-grow">
          <AdminSidebar />
          <div className="flex-grow px-5 md:px-16 py-4">
            {isLoading || !paginatedData.users ? (
              <div className="flex justify-center items-center h-full">
                <ClipLoader size={60} color="#201F20" />
              </div>
            ) : view === "list" ? (
              <>
                <caption className="pt-4 pb-4 text-xl font-semibold text-left text-black-900 bg-white dark:text-white dark:bg-gray-800 flex justify-between">
                  <div className="flex justify-between w-full">
                    <div>
                      Manage Users
                      <p className="mt-1 text-sm font-normal text-black-500 dark:text-black-400">
                        Effortlessly control user accounts in one central hub.
                      </p>
                    </div>
                    {/* <button
									className="text-white bg-primary text-sm px-3 py-1 rounded-md h-12"
									onClick={() => openModal("add")}>
									Add New User
								</button> */}
                  </div>
                </caption>
                <UsersTable
                  paginatedData={paginatedData}
                  getUsers={getUsers}
                  currentPage={currentPage}
                  updateView={updateView}
                  searchText={searchText}
                  setSearchText={setSearchText}
                />
              </>
            ) : view === "single-user" ? (
              <div className="py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <HiArrowNarrowLeft
                      className="text-black-500 cursor-pointer hover:text-black-900 dark:text-black-400 dark:hover:text-white text-4xl pl-2"
                      onClick={() => updateView("list")}
                    />
                    {selectedUser?.username}
                  </div>
                </div>
                <div className="px-2 mt-8">
                  <UserTabs
                    getUsers={getUsers}
                    currentPage={currentPage}
                    setSelectedUser={setSelectedUser}
                    selectedUser={selectedUser}
                  />
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
        {/* <Footer /> */}
      </div>
      {/* Modal for adding User */}
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
                className="absolute top-3 right-2.5 bg-transparent hover:bg-gray-200 hover:text-black-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
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
                Add User
              </h3>
              <form
                className="overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="flex flex-col gap-4 pr-2">
                  <label>Email*</label>
                  <input
                    required
                    type="text"
                    value={selectedUser?.email}
                    onChange={(e) =>
                      setSelectedUser({
                        ...selectedUser,
                        email: e.target.value,
                      })
                    }
                    className="outline-none border border-gray-400 rounded-md text-black bg-white px-3 py-3 mb-2 w-full"
                  />
                  <label>Username*</label>
                  <input
                    required
                    type="text"
                    value={selectedUser?.username}
                    onChange={(e) =>
                      setSelectedUser({
                        ...selectedUser,
                        username: e.target.value,
                      })
                    }
                    className="outline-none border border-gray-400 rounded-md text-black bg-white px-3 py-3 mb-2 w-full"
                  />
                  <label>Password*</label>
                  <input
                    required
                    type="text"
                    value={selectedUser?.password}
                    onChange={(e) =>
                      setSelectedUser({
                        ...selectedUser,
                        password: e.target.value,
                      })
                    }
                    className="outline-none border border-gray-400 rounded-md text-black bg-white px-3 py-3 mb-2 w-full"
                  />

                  <label>Role</label>

                  <select
                    required
                    defaultValue={roles && roles[0]?.id}
                    onChange={(e) =>
                      setSelectedUser({
                        ...selectedUser,
                        roleId: e.target.value,
                      })
                    }
                    className="w-full focus:ring-1 focus:outline-none ring-1 focus:ring-blue-500 font-medium rounded-lg text-sm items-center flex justify-between px-3 py-2 ml-1 mb-1 h-[40px]"
                    aria-label="Select Role"
                  >
                    {roles &&
                      roles.map((role) => (
                        <option key={role.id} value={role.id}>
                          {role.name}
                        </option>
                      ))}
                  </select>
                </div>
              </form>

              <div className="flex justify-end gap-3 items-center">
                <button
                  disabled={checkDisable()}
                  onClick={addUser}
                  className="mt-4 px-4 w-full py-2 bg-blue-500 text-white rounded-lg disabled:bg-blue-300 disabled:cursor-not-allowed"
                >
                  Add User
                </button>
              </div>
            </div>
          </div>
        </>
      )}
      {/* Modal for editing user */}
      {isEditModalOpen && (
        <>
          <div
            className="fixed left-0 top-0 bg-black bg-opacity-50 z-[1055] h-full w-full overflow-y-auto overflow-x-hidden outline-none"
            onClick={() => closeModal("edit")}
          ></div>
          <div className="fixed max-w-[550px] m-auto  inset-0 flex items-center justify-center z-[1065]">
            <div className="p-7 bg-white text-black relative shadow-lg h-{} rounded-2xl shadow-primary-500/50 w-full">
              <h3 className="text-2xl font-medium text-center pb-4">
                Edit User
              </h3>
              <form
                className="overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
                onSubmit={(e) => e.preventDefault()}
              >
                <button
                  type="button"
                  className="absolute top-3 right-2.5 bg-transparent hover:bg-gray-200 hover:text-black-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
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
                  <label>Email*</label>
                  <input
                    required
                    type="text"
                    value={selectedUser?.email}
                    onChange={(e) =>
                      setSelectedUser({
                        ...selectedUser,
                        email: e.target.value,
                      })
                    }
                    className="outline-none border border-gray-400 rounded-md text-black bg-white px-3 py-3 mb-2 w-full"
                  />
                  <label>Username*</label>
                  <input
                    required
                    type="text"
                    value={selectedUser?.username}
                    onChange={(e) =>
                      setSelectedUser({
                        ...selectedUser,
                        username: e.target.value,
                      })
                    }
                    className="outline-none border border-gray-400 rounded-md text-black bg-white px-3 py-3 mb-2 w-full"
                  />
                  <label>Password*</label>
                  <input
                    required
                    type="text"
                    placeholder="Enter new password"
                    value={selectedUser?.password}
                    onChange={(e) =>
                      setSelectedUser({
                        ...selectedUser,
                        password: e.target.value,
                      })
                    }
                    className="outline-none border border-gray-400 rounded-md text-black bg-white px-3 py-3 mb-2 w-full"
                  />

                  <label>Role</label>

                  <select
                    required
                    defaultValue={selectedUser?.roleDetails?.id}
                    onChange={(e) =>
                      setSelectedUser({
                        ...selectedUser,
                        roleId: e.target.value,
                      })
                    }
                    className="w-full focus:ring-1 focus:outline-none ring-1 focus:ring-blue-500 font-medium rounded-lg text-sm items-center flex justify-between px-3 py-2 ml-1 mb-1 h-[40px]"
                    aria-label="Select Role"
                  >
                    {roles &&
                      roles.map((role) => (
                        <option key={role.id} value={role.id}>
                          {role.name}
                        </option>
                      ))}
                  </select>
                </div>
              </form>

              <div className="flex justify-end gap-3 items-center">
                <button
                  disabled={checkDisableEdited()}
                  onClick={updateUser}
                  className="mt-4 w-full px-4 py-2 bg-blue-500 text-white rounded-lg disabled:bg-blue-300 disabled:cursor-not-allowed"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </>
      )}
      {/* Modal for user detail */}
      {isViewModalOpen && (
        <>
          <div
            className="fixed left-0 top-0 bg-black bg-opacity-50 z-[1055] h-full w-full overflow-y-auto overflow-x-hidden outline-none"
            onClick={() => closeModal("view")}
          ></div>
          <div className="fixed max-w-[550px] m-auto inset-0 flex items-center justify-center z-[1065]">
            <div className="p-7 bg-white text-black relative shadow-lg rounded-2xl shadow-primary-500/50 w-full">
              <button
                type="button"
                className="absolute top-3 right-2.5 bg-transparent hover:bg-gray-200 hover:text-black-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={() => closeModal("view")}
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
              <h3 className="text-2xl font-medium text-center mb-4">
                View Role
              </h3>
              <form
                className="overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="flex flex-col gap-4 pr-2">
                  <div>
                    Name Of Role :{" "}
                    <span className="font-medium">{selectedUser?.name}</span>
                  </div>

                  <div>Permissions:</div>
                  <ol>
                    {selectedUser?.permissions?.map((permission, index) => (
                      <li key={index} className="font-medium">
                        {permission}
                      </li>
                    ))}
                  </ol>
                </div>
              </form>

              {/* <div className="flex justify-end gap-3 items-center">
								<button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg" onClick={() => closeModal("view")}>
									Close
								</button>
							</div> */}
            </div>
          </div>
        </>
      )}
      {/* Modal for deleting user */}
      {isDeleteModalOpen && (
        <>
          <div
            className=" fixed left-0 top-0 bg-black bg-opacity-25 z-[1055] h-full w-full overflow-y-auto overflow-x-hidden outline-none"
            onClick={() => closeModal("delete")}
          ></div>
          <div className="fixed max-w-[550px] m-auto  inset-0 flex items-center justify-center z-[1065]">
            <div className="bg-white p-7 relative shadow-lg rounded-2xl shadow-primary-500/50 w-full">
              <button
                type="button"
                className="absolute top-3 right-2.5 bg-transparent hover:bg-gray-200 text-black-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={() => closeModal("delete")}
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
              <h3 className="text-2xl font-medium text-center text-black">
                Delete User
              </h3>
              <div className="mt-4 pb-4 text-black-400">
                Are you sure you want to delete this user?
              </div>

              <div className="flex justify-center gap-3 items-center">
                <button
                  onClick={() => deleteUser(selectedUser?.id)}
                  className="px-4 py-2 bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 text-white rounded-lg disabled:bg-blue-300 disabled:cursor-not-allowed"
                >
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  Yes, I'm sure
                </button>
                <button
                  className="text-black-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-black-900 focus:z-10 dark:bg-gray-700 dark:text-black-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                  onClick={() => closeModal("delete")}
                >
                  No, cancel
                </button>
              </div>
            </div>
          </div>
        </>
      )}
      {/* Modal for Role Redirect */}
      {isRoleModalOpen && (
        <>
          <div
            className=" fixed left-0 top-0 bg-black bg-opacity-25 z-[1055] h-full w-full overflow-y-auto overflow-x-hidden outline-none"
            onClick={() => closeModal("role")}
          ></div>
          <div className="fixed max-w-[550px] m-auto  inset-0 flex items-center justify-center z-[1065]">
            <div className="bg-white p-7 relative shadow-lg rounded-2xl shadow-primary-500/50 w-full">
              <button
                type="button"
                className="absolute top-3 right-2.5 bg-transparent hover:bg-gray-200 text-black-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={() => closeModal("role")}
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
              <h3 className="text-2xl font-medium text-center text-black">
                Add Role
              </h3>
              <div className="mt-4 pb-4 text-black-400">
                No role found. Please add role first to start adding users!
              </div>

              <div className="flex justify-center gap-3 items-center">
                <button
                  onClick={() => navigate("/admin/roles")}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-blue-800 text-white rounded-lg disabled:bg-blue-300 disabled:cursor-not-allowed"
                >
                  Add Role
                </button>
                <button
                  className="text-black-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-black-900 focus:z-10 dark:bg-gray-700 dark:text-black-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                  onClick={() => closeModal("role")}
                >
                  No, cancel
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Users;

import { useState, useEffect } from "react";
import http from "../../../api";
import { toast } from "react-toastify";
import permissions from "../../../data/permissions";
import ClipLoader from "react-spinners/ClipLoader";
import { MdModeEdit } from "react-icons/md";
import { useDebounce } from "use-debounce";
import { TablePagination } from "../../../components/TablePagination/TablePagination";

const Roles = () => {
  const defaultRole = {
    name: "",
    vendorPermissions: [],
    isActive: true,
  };
  const errorsBody = {
    name: "",
    vendorPermissions: "",
  };
  //   const [view, setView] = useState("list");
  const [selectedRole, setSelectedRole] = useState(defaultRole);
  const [errors, setErrors] = useState(errorsBody);
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedData, setPaginatedData] = useState({});

  const [searchText, setSearchText] = useState("");
  const [searchedRole] = useDebounce(searchText, 1000);

  const [isLoading, setIsLoading] = useState(false);
  const [actionLoader, setActionLoader] = useState({
    add: false,
    edit: false,
    delete: false,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const itemsPerPage = 8;

  //   const updateView = (view, role) => {
  //     setView(view);
  //     if (view === "list") {
  //       setSelectedRole(defaultRole);
  //     } else if (view === "single-user" && role) {
  //       setSelectedRole(role);
  //     } else if (view === "edit-user" && role) {
  //       setSelectedRole({
  //         ...role,
  //         updated: {
  //           ...role,
  //         },
  //       });
  //     }
  //   };

  //   const updateSelectedRole = (event, permission) => {
  //     if (event.target.checked) {
  //       setSelectedRole({
  //         ...selectedRole,
  //         updated: {
  //           ...selectedRole.updated,
  //           vendorPermissions: [
  //             ...selectedRole.updated.vendorPermissions,
  //             permission,
  //           ],
  //         },
  //       });
  //     } else {
  //       setSelectedRole({
  //         ...selectedRole,
  //         updated: {
  //           ...selectedRole.updated,
  //           vendorPermissions: selectedRole.updated.vendorPermissions.filter(
  //             (p) => p !== permission
  //           ),
  //         },
  //       });
  //     }
  //   };

  const openModal = (mode, role) => {
    if (role) setSelectedRole(role);
    if (mode === "delete") {
      setIsDeleteModalOpen(true);
    } else if (mode === "edit") {
      setIsEditModalOpen(true);
    } else if (mode === "view") {
      setIsViewModalOpen(true);
    } else {
      setIsModalOpen(true);
    }
  };

  const closeModal = (mode) => {
    setErrors(errorsBody);
    setActionLoader({ add: false, edit: false, delete: false });
    setSelectedRole({
      name: "",
      vendorPermissions: [],
    });
    if (mode === "delete") {
      setIsDeleteModalOpen(false);
    } else if (mode === "edit") {
      setIsEditModalOpen(false);
    } else if (mode === "view") {
      setIsViewModalOpen(false);
    } else {
      setIsModalOpen(false);
    }
  };

  const handleAddPermissions = (event, permission) => {
    if (!event.target.checked) {
      setSelectedRole({
        ...selectedRole,
        vendorPermissions: selectedRole.vendorPermissions.filter(
          (p) => p !== permission
        ),
      });
    } else {
      setSelectedRole({
        ...selectedRole,
        vendorPermissions: [...selectedRole.vendorPermissions, permission],
      });
    }
  };

  const handlePageChange = (page) => {
    if (page === currentPage) return;
    getRoles(page);
  };

  const checkDisable = (action) => {
    const newErrors = {};

    if (!selectedRole) return;

    if (selectedRole.name.trim() === "") {
      newErrors.name = "Please enter the name of role!";
    }

    if (selectedRole.vendorPermissions.length === 0) {
      newErrors.vendorPermissions = "Please select at least one permission!";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    if (action === "add") {
      addRole();
    } else if (action === "edit") {
      updateRole();
    }
  };

  const getRoles = (page) => {
    http
      .get(
        "/role/admin?page=" +
          (page ? page : "1") +
          (searchedRole ? "&name=" + searchedRole : "")
      )
      .then((res) => {
        setCurrentPage(res.data.data.currentPage);
        setPaginatedData(res.data.data);
      })
      .catch(() => {
        //
      });
  };

  const addRole = () => {
    setActionLoader({ ...actionLoader, add: true });
    http
      .post("/role", selectedRole)
      .then(() => {
        toast.success("Role added successfully.");
        getRoles(currentPage);
        closeModal();
      })
      .catch(() => {
        toast.error("Something went wrong.");
      })
      .finally(() => setActionLoader({ ...actionLoader, add: false }));
  };

  const toggleRoleActivation = (role, isActive) => {
    setActionLoader({ ...actionLoader, edit: true });
    http
      .put("/role/" + role.id, { isActive })
      .then(() => {
        toast.success(
          `${role.name} role ${
            isActive ? "activated" : "disabled"
          } successfully.`
        );
        getRoles(currentPage);
      })
      .catch(() => {
        toast.error("Something went wrong.");
      })
      .finally(() => setActionLoader({ ...actionLoader, edit: false }));
  };

  const updateRole = () => {
    setActionLoader({ ...actionLoader, edit: true });
    http
      .put("/role/" + selectedRole.id, selectedRole)
      .then(() => {
        // setSelectedRole({
        // 	...selectedRole,
        // 	permissions: selectedRole.updated.permissions,
        // });
        toast.success("Role updated successfully.");
        getRoles(currentPage);
      })
      .catch(() => {
        toast.error("Something went wrong.");
      })
      .finally(() => setActionLoader({ ...actionLoader, edit: false }));
  };

  const deleteRole = (id) => {
    setActionLoader({ ...actionLoader, delete: true });
    http
      .delete("/role/" + id)
      .then(() => {
        toast.success("Role deleted successfully.");
        closeModal("delete");
        getRoles(currentPage);
      })
      .catch(() => {
        toast.error("Something went wrong.");
      })
      .finally(() => setActionLoader({ ...actionLoader, delete: false }));
  };

  const getPageData = async () => {
    setIsLoading(true);
    await Promise.all([getRoles(currentPage)])
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    getRoles();
  }, [searchedRole]);

  useEffect(() => {
    getPageData();
  }, []);
  return (
    <>
      <div className="flex-grow px-5 md:px-24 py-4">
        {isLoading || !paginatedData.roles ? (
          <div className="flex justify-center items-center h-full">
            <ClipLoader size={60} color="#201F20" />
          </div>
        ) : (
          <>
            <caption className="py-4 font-semibold text-left text-black-900 bg-white dark:text-white dark:bg-gray-800 flex justify-between">
              <div className="flex justify-between w-full">
                <div className="text-xl text-black-900">
                  Role Management
                  <p className="mt-1 text-sm font-normal text-black-500 dark:text-black-400">
                    Efficiently manage user roles & streamline management
                    process.
                  </p>
                </div>
                <button
                  className="text-white bg-primary text-sm px-3 py-1 rounded-md h-12"
                  onClick={() => openModal("add")}
                >
                  Add New Role
                </button>
              </div>
            </caption>
            <div className="mb-5">
              <h3 className="text-primary text-lg font-semibold">
                Search Filters
              </h3>
              <p className="text-sm mb-2">
                With the help of filters, you can easily find roles.
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
                    placeholder="Search role by name..."
                  />
                </div>
              </div>
            </div>
            <div className="max-h-[83%] relative overflow-x-auto border shadow-md sm:rounded-lg">
              <table className="md:w-full w-[900px] text-sm text-left text-black-500 dark:text-black-400">
                {paginatedData.roles?.length === 0 ? (
                  <thead className="text-md text-black-700 uppercase bg-gray-50 flex justify-center p-3">
                    <tr>
                      <th>No Role available to show.</th>
                    </tr>
                  </thead>
                ) : (
                  <>
                    <thead className="text-xs text-black-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-black-400">
                      <tr>
                        <th className="px-6 py-3">Role</th>
                        <th className="px-6 py-3">Permissions</th>
                        <th className="px-6 py-3">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {paginatedData.roles &&
                        paginatedData.roles.map((role) => (
                          <tr
                            key={role.id}
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                          >
                            <td className="px-6 py-4">{role?.name}</td>
                            <td className="px-6 py-4 max-w-[350px] truncate">
                              {role.vendorPermissions &&
                                role.vendorPermissions.map(
                                  (permission, index) =>
                                    `${permission}${
                                      index !==
                                      role.vendorPermissions.length - 1
                                        ? ", "
                                        : ""
                                    }`
                                )}
                            </td>
                            <td className="pl-6 py-4">
                              <div className="flex gap-2">
                                <label className="relative inline-flex items-center cursor-pointer">
                                  <input
                                    type="checkbox"
                                    onChange={() =>
                                      toggleRoleActivation(role, !role.isActive)
                                    }
                                    checked={role.isActive}
                                    className="sr-only peer"
                                  />
                                  <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                  <span className="ms-3 text-sm font-medium text-black-900 dark:text-black-300"></span>
                                </label>
                                <MdModeEdit
                                  className="cursor-pointer text-xl"
                                  onClick={() => openModal("edit", role)}
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
            
                
                <TablePagination
                  handlePageChange={handlePageChange}
                  totalItems={paginatedData.totalCategories || 0}
                  itemsPerPage={itemsPerPage}
                  currentPage={currentPage}
                  isLoading={false}
                />
              
            
          </>
        )}
      </div>
      {/* Modal for adding Role */}
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
                Add Role
              </h3>

              <form
                className="overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="flex flex-col gap-4 pr-2">
                  <label>Name Of Role *</label>
                  <input
                    required
                    type="text"
                    value={selectedRole?.name}
                    onChange={(e) =>
                      setSelectedRole({ ...selectedRole, name: e.target.value })
                    }
                    className="outline-none border border-gray-400 rounded-md text-black bg-white px-3 py-3 w-full"
                  />
                  {errors.name && (
                    <div className="text-red-500 text-sm">{errors.name}</div>
                  )}

                  <label>Permissions</label>

                  <div className="relative">
                    <button
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                      className="w-full focus:ring-1 focus:outline-none ring-1 focus:ring-blue-500 font-medium rounded-lg text-sm text-center items-center flex justify-between px-3 py-2 ml-1 mb-1 h-[40px]"
                      type="button"
                    >
                      Select Permissions
                      <svg
                        className="w-2.5 h-2.5 ml-2.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </button>
                    {errors.vendorPermissions && (
                      <div className="mt-4 px-1 text-red-500 text-sm">
                        {errors.vendorPermissions}
                      </div>
                    )}

                    {isMenuOpen && (
                      <div className="bg-white rounded-lg shadow dark:bg-gray-700 w-full ring-1 ring-gray-200 ml-1 mb-1 h-60 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
                        <ul>
                          {permissions.map((permission, index) => (
                            <li key={permission}>
                              <div className="flex h-10 items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                <input
                                  id={`checkbox-${index}`}
                                  type="checkbox"
                                  checked={selectedRole?.vendorPermissions?.includes(
                                    permission
                                  )}
                                  onChange={(e) =>
                                    handleAddPermissions(e, permission)
                                  }
                                  className="text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                />
                                <label
                                  htmlFor={`checkbox-${index}`}
                                  className="w-full ml-2 text-sm font-medium text-black-900 rounded dark:text-black-300 cursor-pointer"
                                >
                                  {permission}
                                </label>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </form>

              <div className="flex justify-end gap-3 items-center">
                <button
                  disabled={!actionLoader || actionLoader.add}
                  onClick={() => checkDisable("add")}
                  className="flex items-center justify-center gap-4 mt-4 px-4 w-full py-2 bg-primary hover:opacity-90 text-white rounded-lg disabled:bg-opacity-30 disabled:cursor-not-allowed"
                >
                  {actionLoader.add && <ClipLoader size={20} color="#201F20" />}
                  Add Role
                </button>
              </div>
            </div>
          </div>
        </>
      )}
      {/* Modal for editing product */}
      {isEditModalOpen && (
        <>
          <div
            className="fixed left-0 top-0 bg-black bg-opacity-50 z-[1055] h-full w-full overflow-y-auto overflow-x-hidden outline-none"
            onClick={() => closeModal("edit")}
          ></div>

          <div className="fixed max-w-[550px] m-auto  inset-0 flex items-center justify-center z-[1065]">
            <div className="p-7 bg-white text-black relative shadow-lg h-{} rounded-2xl shadow-primary-500/50 w-full">
              <h3 className="text-2xl font-medium text-center pb-4">
                Edit Role
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
                  <label>Name Of Role *</label>
                  <input
                    required
                    type="text"
                    value={selectedRole?.name}
                    onChange={(e) =>
                      setSelectedRole({ ...selectedRole, name: e.target.value })
                    }
                    className="outline-none border border-gray-400 rounded-md text-black bg-white px-3 py-3 w-full"
                  />
                  {errors.name && (
                    <div className="text-red-500 text-sm">{errors.name}</div>
                  )}

                  <label>Permissions</label>

                  <div className="relative">
                    <button
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                      className="w-full focus:ring-1 focus:outline-none ring-1 focus:ring-blue-500 font-medium rounded-lg text-sm text-center items-center flex justify-between px-3 py-2 ml-1 mb-1 h-[40px]"
                      type="button"
                    >
                      Select Permissions
                      <svg
                        className="w-2.5 h-2.5 ml-2.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </button>
                    {errors.vendorPermissions && (
                      <div className="mt-4 mb-2 px-1 text-red-500 text-sm">
                        {errors.vendorPermissions}
                      </div>
                    )}

                    {isMenuOpen && (
                      <div className="bg-white rounded-lg shadow dark:bg-gray-700 w-full ring-1 ring-gray-200 ml-1 mb-1 h-60 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
                        <ul>
                          {permissions.map((permission, index) => (
                            <li key={permission}>
                              <div className="flex h-10 items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                <input
                                  id={`checkbox-${index}`}
                                  type="checkbox"
                                  checked={selectedRole?.vendorPermissions?.includes(
                                    permission
                                  )}
                                  onChange={(e) =>
                                    handleAddPermissions(e, permission)
                                  }
                                  className="text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                />
                                <label
                                  htmlFor={`checkbox-${index}`}
                                  className="w-full ml-2 text-sm font-medium text-black-900 rounded dark:text-black-300 cursor-pointer"
                                >
                                  {permission}
                                </label>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </form>

              <div className="flex justify-end gap-3 items-center">
                <button
                  disabled={!actionLoader || actionLoader.edit}
                  onClick={() => checkDisable("edit")}
                  className="flex items-center justify-center gap-4 mt-4 w-full px-4 py-2 bg-primary hover:opacity-90 text-white rounded-lg disabled:bg-opacity-30 disabled:cursor-not-allowed"
                >
                  {actionLoader.edit && (
                    <ClipLoader size={20} color="#ffffff" />
                  )}
                  Save
                </button>
              </div>
            </div>
          </div>
        </>
      )}
      {/* Modal for role detail */}
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
                    <span className="font-medium">{selectedRole?.name}</span>
                  </div>

                  <div>Permissions:</div>
                  <ol>
                    {selectedRole?.vendorPermissions?.map((permission) => (
                      <li key={permission} className="font-medium">
                        {permission}
                      </li>
                    ))}
                  </ol>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
      {/* Modal for deleting product */}
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
                Delete Role
              </h3>
              <div className="mt-4 pb-4 text-black-400">
                Are you sure you want to delete this role?
              </div>

              <div className="flex justify-center gap-3 items-center">
                <button
                  disabled={!actionLoader || actionLoader.delete}
                  onClick={() => deleteRole(selectedRole?.id)}
                  className="flex items-center justify-center gap-4 px-4 py-2 bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 text-white rounded-lg disabled:bg-opacity-30 disabled:cursor-not-allowed"
                >
                  {actionLoader.delete && (
                    <ClipLoader size={20} color="#ffffff" />
                  )}
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
    </>
  );
};

export default Roles;

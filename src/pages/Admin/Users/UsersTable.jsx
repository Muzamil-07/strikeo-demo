/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { MdKeyboardArrowRight } from "react-icons/md";
import { toast } from "react-toastify";
import http from "../../../api";
import Pagination from "../../../components/Pagination";

export default function UsersTable({
  paginatedData,
  getUsers,
  currentPage,
  updateView,
  searchText,
  setSearchText,
}) {
  const savedUser = useSelector((state) => state.user);
  const itemsPerPage = 7;
  const handlePageChange = (page) => {
    if (page === currentPage) return;
    getUsers(page);
  };
  const toggleUserActivaition = (user) => {
    if (user?.isActive) {
      blockUser(user?.id);
    } else {
      unblockUser(user?.id);
    }
  };
  const blockUser = (id) => {
    http
      .post("/admin/user/block/" + id)
      .then(() => {
        // console.log(res.data, "user activation");
        toast.success("User blocked successfully.");
        getUsers(currentPage);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something went wrong.");
      });
  };
  const unblockUser = (id) => {
    http
      .post("/admin/user/unblock/" + id)
      .then(() => {
        // console.log(res.data, "user activation");
        toast.success("User unblocked successfully.");
        getUsers(currentPage);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something went wrong.");
      });
  };
  return (
    <>
      <div className="mb-5">
        <h3 className="text-primary text-lg font-semibold">Search Filters</h3>
        <p className="text-sm mb-2">
          With the help of filters, you can easily find users.
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
              placeholder="Search user by name..."
            />
          </div>
        </div>
      </div>
      <div className="max-h-[620px] relative overflow-x-auto border shadow-md sm:rounded-lg">
        <table className="md:w-full w-[900px] text-sm text-left text-gray-500 dark:text-gray-400">
          {paginatedData.users?.length === 0 ? (
            <thead className="text-md text-gray-700 uppercase bg-gray-50 flex justify-center p-3">
              <tr>
                <th>No User available to show.</th>
              </tr>
            </thead>
          ) : (
            <>
              {paginatedData.users && (
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th className="px-6 py-3">Full Name</th>
                    <th className="px-6 py-3">Username</th>
                    <th className="px-6 py-3">Email</th>
                    {/* <th className="px-6 py-3">Model</th> */}
                    <th className="px-6 py-3">Total Orders</th>
                    {savedUser?.details?.role?.type === "StrikeO" &&
                    savedUser?.details?.role?.name === "SuperAdmin" ? (
                      <th className="px-6 py-3">Action</th>
                    ) : savedUser?.details?.role?.type === "employee" &&
                      savedUser?.details?.roleDetails?.permissions.includes(
                        "Update Users"
                      ) ? (
                      <th className="px-6 py-3">Action</th>
                    ) : (
                      <></>
                    )}
                  </tr>
                </thead>
              )}
              <tbody>
                {paginatedData.users &&
                  paginatedData.users.map((user, i) => (
                    <tr
                      key={i}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                      <td className="px-6 py-4">
                        {user.firstName
                          ? user.firstName + " " + user.lastName
                          : "N/A"}
                      </td>
                      <td className="px-6 py-4">
                        {user.username || user.email.split("@")[0]}
                      </td>
                      <td className="px-6 py-4">{user.email || "N/A"}</td>
                      {/* <td className="px-6 py-4">{user?.model}</td> */}
                      <td className="px-6 py-4">{user?.totalOrders}</td>
                      <td className="pl-6 py-4">
                        <div className="flex gap-2">
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              onChange={() => toggleUserActivaition(user)}
                              checked={user?.isActive}
                              className="sr-only peer"
                            />
                            <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                          </label>
                          <MdKeyboardArrowRight
                            className="text-gray-500 cursor-pointer hover:text-gray-900 dark:text-gray-400 dark:hover:text-white text-2xl pl-2"
                            onClick={() => updateView("single-user", user)}
                          />
                        </div>
                      </td>
                      {/* {savedUser?.details?.role === "admin" ? (
																) : savedUser?.details?.role === "employee" &&
																  savedUser?.details?.roleDetails?.permissions.includes("Update Users") ? (
																	<td className="pl-6 py-4">
																		{user.isActive ? (
																			<BiBlock
																				onClick={() => blockUser(user.id)}
																				className="ml-4 inline-block text-2xl cursor-pointer text-red-600 dark:text-red-500"
																			/>
																		) : (
																			<CgUnblock
																				onClick={() => unblockUser(user.id)}
																				className="ml-4 inline-block text-2xl cursor-pointer text-blue-600 dark:text-blue-500"
																			/>
																		)}
																	</td>
																) : (
																	<></>
																)} */}
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
              {Math.min(currentPage * itemsPerPage, paginatedData.totalUsers)}
            </span>{" "}
            of{" "}
            <span className="font-semibold ">{paginatedData.totalUsers}</span>
          </span>
          <Pagination
            totalItems={paginatedData.totalUsers}
            itemsPerPage={itemsPerPage}
            onPageChange={handlePageChange}
          />
        </nav>
      )}
    </>
  );
}

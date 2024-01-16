import { useState } from "react";
import AdminSidebar from "../../../components/AdminSidebar";
import http from "../../../api";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import { useDebounce } from "use-debounce";
import OrdersTable from "../../../components/Orders";

const Orders = () => {
  const statusOptions = [
    "Pending",
    "Processing",
    "Shipped",
    "Delivered",
    "Cancelled",
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedData, setPaginatedData] = useState({});
  const [selectedOrder, setSelectedOrder] = useState();
  const [openMenuIndex, setOpenMenuIndex] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isStatusModalOpen, setIsStatusModalOpen] = useState(false);
  const [status, setStatus] = useState("");

  const [statusFilter, setStatusFilter] = useState("Pending");

  const [searchText, setSearchText] = useState("");
  const [searchTextValue] = useDebounce(searchText, 1000);

  const [isLoading, setIsLoading] = useState(false);
  const [actionLoader, setActionLoader] = useState(false);

  const user = useSelector((state) => state.user);

  const handleOpen = (mode, order) => {
    setSelectedOrder(order);
    if (mode === "status") {
      setStatus(order.status);
      setIsStatusModalOpen(true);
    }
  };

  const handleClose = (mode) => {
    setSelectedOrder();
    if (mode === "status") {
      setIsStatusModalOpen(false);
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMenuClick = (index) => {
    if (openMenuIndex === index) {
      setOpenMenuIndex(null);
    } else {
      setOpenMenuIndex(index);
    }
  };

  const handleStatusChange = (e) => {
    setStatusFilter(e.target.value);
  };

  const formatNumber = (number) => {
    if (typeof number !== "number" || isNaN(number)) {
      return "";
    }

    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  function formatMongooseDate(mongooseDateString) {
    const date = new Date(mongooseDateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const formattedDate = `${day}-${month}-${year.toString().slice(-2)}`;
    return formattedDate;
  }

  const getOrders = async (page) => {
    try {
      const res = await http.get(
        `/order/all?search=${searchTextValue}&page=${page}&status=${statusFilter}`
      );
      // console.log(res.data.data);
      setCurrentPage(res.data.data.currentPage);
      setPaginatedData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const changeStatus = async (order) => {
    setActionLoader(true);
    try {
      const res = await http.post(`/order/status/${order.id}`, { status });
      // console.log(res.data.data);

      toast.success("Status changed successfully");
      handleClose("status");
      getOrders(currentPage);
    } catch (error) {
      console.log(error);
    } finally {
      setActionLoader(false);
    }
  };

  const getPageData = async () => {
    setIsLoading(true);
    await Promise.all([getOrders(currentPage)])
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  // useEffect(() => {
  // 	getOrders(1);
  // }, [searchTextValue, statusFilter]);

  // useEffect(() => {
  // 	getPageData();
  // }, []);

  return (
    <div
      className="w-full flex h-screen flex-grow bg-white text-gray-500"
      style={{ paddingLeft: "220px" }}
    >
      <div className="flex flex-grow">
        <AdminSidebar />
        <div className="flex-grow px-5 md:px-24 py-4">
          <OrdersTable company={user?.details?.company} />
        </div>
      </div>
      {/* <Footer /> */}

      {isStatusModalOpen && (
        <>
          <div
            className=" fixed left-0 top-0 bg-black bg-opacity-25 z-[1055] h-full w-full overflow-y-auto overflow-x-hidden outline-none"
            onClick={() => handleClose("status")}
          ></div>
          <div className="fixed max-w-[550px] m-auto  inset-0 flex items-center justify-center z-[1065]">
            <div className="bg-white p-7 relative shadow-lg rounded-2xl shadow-primary-500/50 w-full">
              <button
                type="button"
                className="absolute top-3 right-2.5 bg-transparent hover:bg-gray-200 text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={() => handleClose("status")}
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
                Change Order Status
              </h3>
              <div className="mt-4 pb-4 text-black">Choose Status: </div>

              <select
                required
                defaultValue={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full outline-none border border-gray-400 rounded-md text-black bg-white px-3 py-3 w-ful"
                aria-label="Default select example"
              >
                {statusOptions &&
                  statusOptions.map((statusOption) => (
                    <option key={statusOption} value={statusOption}>
                      {statusOption}
                    </option>
                  ))}
              </select>

              <div className="flex justify-center gap-3 items-center mt-2">
                <button
                  disabled={actionLoader}
                  onClick={() => changeStatus(selectedOrder)}
                  className="flex items-center justify-center gap-4 px-4 py-2 bg-primary hover:opacity-90 focus:ring-4 focus:outline-none text-white rounded-lg disabled:cursor-not-allowed disabled:bg-opacity-30"
                >
                  {actionLoader && <ClipLoader size={20} color="#fff" />}
                  Change Status
                </button>
                <button
                  className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                  onClick={() => handleClose("status")}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Orders;

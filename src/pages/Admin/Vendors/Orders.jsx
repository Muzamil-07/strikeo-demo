/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import http from "../../../api";
import { useDebounce } from "use-debounce";
import ClipLoader from "react-spinners/ClipLoader";
import { MdKeyboardArrowRight } from "react-icons/md";
import OrderTab from "./OrderTab";
import format from "./../../../utils/format";
import Pagination from "../../../components/Pagination";

const Orders = ({ user, company }) => {
	const statusOptions = ["All","Pending", "Processing", "Shipped", "Delivered", "Cancelled"];
	const [status, setStatus] = useState(null);
	const [mode, setMode] = useState("list");
	const [selectedOrderId, setSelectedOrderId] = useState("");
	const [currentPage, setCurrentPage] = useState(1);
	const [paginatedData, setPaginatedData] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const [searchText, setSearchText] = useState("");
	const [searchedOrder] = useDebounce(searchText, 1000);
	const statusColor = {
		Pending: ["gray", "500/10"],
		Processing: ["blue", "700/10"],
		Shipped: ["yellow", "600/20"],
		Delivered: ["green", "600/20"],
		Cancelled: ["red", "600/10"],
		Progressing: ["blue", "700/10"],
		Completed: ["green", "600/20"],
	};
	const createStatusBadge = (status) =>
		`inline-flex items-center rounded-md bg-${statusColor[status][0]}-50 px-2 py-1 text-xs font-medium text-${statusColor[status][0]}-700 ring-1 ring-inset ring-${statusColor[status][0]}-${statusColor[status][1]}`;

	const itemsPerPage = 5;
	const handlePageChange = (page) => {
		if (page === currentPage) return;
		getOrders(page);
	};
	const getOrders = async (page) => {
		try {
			const res = await http.get(
				"order?limit=5&page=" +
					(page ? page : "1") +
					(searchedOrder ? "&search=" + searchedOrder : "") +
					(status ? "&status=" + status : "") +
					(user ? "&user=" + user.id : "") +
					(company ? "&company=" + company.id : "")
			);
			setCurrentPage(res.data.data.currentPage);
			setPaginatedData(res.data.data);
		} catch (error) {
			console.log("Failed to fetch user orders: ", error);
		}
	};
	const getPageData = async () => {
		setIsLoading(true);
		await Promise.all([getOrders(currentPage)])
			.catch((err) => console.log(err))
			.finally(() => setIsLoading(false));
	};

	useEffect(() => {
		getOrders();
	}, [searchedOrder, status]);

	return isLoading || !paginatedData.orders ? (
		<div className="flex justify-center items-center h-full">
			<ClipLoader size={60} color="#201F20" />
		</div>
	) : mode === "list" ? (
		<>
			<div className="flex justify-between mb-5">
			<div>
				<h3 className="text-primary text-lg font-semibold">Search Filters</h3>
				<p className="text-sm mb-2">With the help of filters, you can easily find orders.</p>
			<div className="flex">
			<div>
					<label htmlFor="default-search" className="mb-2 text-sm font-medium text-black-900 sr-only dark:text-white">
						Search
					</label>
					<div className="relative">
						<div className="absolute inset-y-0 start-0 flex items-center ps-3 cursor-pointer">
							<svg
								className="w-4 h-4 text-gray-500 dark:text-gray-400"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 20 20">
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
							placeholder="Search orders..."
						/>
					</div>
				</div>
				<div className="ml-5">
					<select
						required
						defaultValue={status}
						onChange={(e) => setStatus(e.target.value==="All"?null:e.target.value)}
						className="block px-4 py-2 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50"
						aria-label="Default select example">
						{statusOptions &&
							statusOptions.map((statusOption) => (
								<option key={statusOption} value={statusOption}>
									{statusOption}
								</option>
							))}
					</select>
				</div>
			</div>
				</div>
			</div>
			<div className="max-h-[620px] relative overflow-x-auto border shadow-md sm:rounded-lg">
				<table
					className="md:w-full w-[900px] text-sm text-left text-gray-500 dark:text-gray-400"
					style={{ textAlign: "center" }}>
					{paginatedData.orders?.length === 0 ? (
						<thead className="text-md text-gray-700 uppercase bg-gray-50 flex justify-center p-3">
							<tr>
								<th>No Orders delivered yet.</th>
							</tr>
						</thead>
					) : (
						<>
							{paginatedData.orders && (
								<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
									<tr>
										<th className="px-6 py-3">Order #</th>
										<th className="px-6 py-3">User</th>
										<th className="px-6 py-3">Items</th>
										<th className="px-6 py-3">Total Amount</th>
										<th className="px-6 py-3">Ordered On</th>
										<th className="px-6 py-3">Payment Method</th>
										<th className="px-6 py-3">Status</th>
										<th className="px-6 py-3">Action</th>
									</tr>
								</thead>
							)}
							<tbody>
								{paginatedData.orders &&
									paginatedData.orders.map((order, index) => {
										const filteredOrder = order.orders.find((_order) => _order.company.id === company.id);
										let totalItems = 0;
										if (filteredOrder) {
											totalItems = filteredOrder.items.reduce((accumulator, object) => {
												return accumulator + object.details.quantity;
											}, 0);
										}
										return (
											<tr
												key={`order-${index}`}
												className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
												<td className="px-6 py-4">{order.orderNumber}</td>
												<td className="px-6 py-4 w-1/6">
													{user
														? order.orders.map((_order, i) => `${i === 0 ? "" : ", "}` + _order.company.name)
														: `${order?.customer?.firstName} ${order?.customer?.lastName}`}
												</td>
												<td className="px-6 py-4">{totalItems}</td>
												<td className="px-6 py-4 w-1/6">
													{format.formatMoney(
														order.orders.filter((_order) => _order.company.id === company.id)[0].vendorBill
													)}
												</td>
												<td className="px-6 py-4">{format.formatDate(order?.orderedAt)}</td>
												<td className="px-6 py-4">{order?.payment.method}</td>
												<td className="px-6 py-4">
													<span className={createStatusBadge(order?.orders?.[0]?.status)}>
														{order?.orders?.[0]?.status}
													</span>
												</td>
												<td className="px-6 py-4">
													<MdKeyboardArrowRight
														className="text-gray-500 cursor-pointer hover:text-gray-900 dark:text-gray-400 dark:hover:text-white text-2xl pl-2"
														onClick={() => {
															setMode("order");
															setSelectedOrderId(order.id);
														}}
													/>
												</td>
											</tr>
										);
									})}
							</tbody>
						</>
					)}
				</table>
			</div>
			{paginatedData && paginatedData.totalPages > 1 && (
				<nav className="flex items-center flex-wrap md:gap-0 gap-4 justify-between pt-4" aria-label="Table navigation">
					<span className="text-sm font-normal text-gray-500 dark:text-gray-400">
						Showing{" "}
						<span className="font-semibold ">
							{(currentPage - 1) * itemsPerPage + 1}-{Math.min(currentPage * itemsPerPage, paginatedData.totalOrders)}
						</span>{" "}
						of <span className="font-semibold ">{paginatedData.totalOrders}</span>
					</span>
					<Pagination
						totalItems={paginatedData.totalOrders}
						itemsPerPage={itemsPerPage}
						onPageChange={handlePageChange}
					/>
				</nav>
			)}
		</>
	) : (
		selectedOrderId && <OrderTab orderId={selectedOrderId} companyName={company.name} />
	);
};

export default Orders;

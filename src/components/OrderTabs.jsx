/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import http from "../api";
import ClipLoader from "react-spinners/ClipLoader";
import format from "../utils/format";
import { useFormik } from "formik";
import { toast } from "react-toastify";

const OrderTabs = ({ orderId }) => {
	//   const [activeTabIndex, setActiveTabIndex] = useState(0);
	const [order, setOrder] = useState();
	const [mode, setMode] = useState("view");
	const [agentList, setAgentList] = useState();
	const [actionLoader, setActionLoader] = useState({
		profile: false,
	});
	const statusColor = {
		Pending: ["gray", "500/10"],
		Processing: ["blue", "700/10"],
		Shipped: ["yellow", "600/20"],
		Delivered: ["green", "600/20"],
		Cancelled: ["red", "600/10"],
		Progressing: ["blue", "700/10"],
		Completed: ["green", "600/20"],
	};
	const statusOps = ["Pending", "Processing", "Shipped", "Delivered", "Cancelled"];
	const createStatusBadge = (status) =>
		`inline-flex items-center rounded-md bg-${statusColor[status][0]}-50 px-2 py-1 text-xs font-medium text-${statusColor[status][0]}-700 ring-1 ring-inset ring-${statusColor[status][0]}-${statusColor[status][1]}`;

	const initialValues = {
		agent: order?.orders[0].agent ? order?.orders[0].agent.id : null,
		status: order?.orders[0].status ? order?.orders[0].status : "",
	};

	const formik = useFormik({
		initialValues: initialValues,
		enableReinitialize: true,
		onSubmit: async (values) => {
			const { status, agent } = values;
			const selectedAgent = agentList.find((agt) => agt.id === agent);
			setActionLoader({ ...actionLoader, profile: true });
			try {
				await http.patch(`order/${orderId}`, { status, agent, selectedAgent, order });
				toast.success("Order updated successfully!");
				setMode("view");
				getOrder();
			} catch (error) {
				toast.error("Failed to update order!");
			}
			setActionLoader({ ...actionLoader, profile: false });
		},
	});

	const getAgents = async (country, city) => {
		try {
			const res = await http.get(`/agent?country=${country}&city=${city}`);
			setAgentList(res.data.data.agents);
		} catch (error) {
			//
		}
	};

	const getOrder = async () => {
		const res = await http.get(`order/${orderId}`);
		if (res.status === 200) {
			const { country, city } = res.data.data.orders[0].company;
			getAgents(country, city);
			setOrder(res.data.data);
		}
	};

	useEffect(() => {
		getOrder();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	if (!order)
		return (
			<div className="flex justify-center items-center h-full">
				<ClipLoader size={60} color="#201F20" />
			</div>
		);
	return (
		<div className="p-3 rounded flex flex-col gap-5">
			{/* <div className="mb-3 flex justify-between items-center">
				<div>
					<h3 className="text-xl font-semibold">Order Details</h3>
				</div>
			</div> */}
			{/* <div className="flex justify-between"> */}
			<div className={"flex mb-5 gap-5  justify-between"}>
				<div className="w-full flex flex-col gap-4">
					<div className="flex justify-between">
						<div className="pt-4">
							<h3 className="text-xl text-black font-semibold">Order Details</h3>
							<p>This will be displayed on user profile.</p>
						</div>
						<div className="flex items-center ">
							{mode === "view" ? (
								<button
									className="text-white bg-primary text-sm px-6 py-2 rounded-md"
									onClick={() => {
										setMode("edit");
									}}>
									EDIT
								</button>
							) : (
								<div className="flex gap-2">
									<button
										className="text-white bg-secondary text-sm px-6 py-2 rounded-md"
										onClick={() => {
											setMode("view");
											// setUser({ ...selectedSale, password: "" });
										}}>
										CANCEL
									</button>
									<button
										disabled={!actionLoader || actionLoader.profile}
										className="flex items-center justify-center gap-4 px-6 py-2 bg-primary hover:opacity-90 text-white rounded-lg disabled:bg-opacity-30 disabled:cursor-not-allowed"
										onClick={() => formik.handleSubmit()}>
										{actionLoader.profile && <ClipLoader size={20} color="#201F20" />}
										SAVE
									</button>
								</div>
							)}
						</div>
					</div>
					<div className="flex items-center gap-4">
						<span className="font-semibold w-36">Order No. </span>
						<span>{order?.orderNumber}</span>
					</div>
					<div className="flex items-center gap-4">
						<span className="font-semibold w-36">Date </span>
						<span>{format.formatDate(order?.orderedAt)}</span>
					</div>
					<div className="flex items-center gap-4">
						<span className="font-semibold w-36">Total </span>
						<span>{format.formatMoney(order.orders[0].vendorBill)}</span>
					</div>

					<div className="flex justify-between">
						<div className="flex items-center ">
							<div className="font-semibold w-36">Status </div>
							{mode === "edit" ? (
								<select
									required
									name="status"
									value={formik.values.status}
									onChange={formik.handleChange}
									className="block px-4 py-2 text-sm text-primary border-[1.3px] border-gray-300 rounded-lg bg-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
									{statusOps.map((status) => (
										<option key={status} value={status}>
											{status}
										</option>
									))}
								</select>
							) : (
								<span className={createStatusBadge(order.orders[0].status)}>{order.orders[0].status}</span>
							)}
						</div>
						<div className="flex items-center">
							<div className="font-semibold w-36">Agent</div>
							{mode === "edit" ? (
								<select
									required
									name="agent"
									value={formik.values.agent}
									onChange={formik.handleChange}
									className="block px-4 py-2 text-sm text-primary border-[1.3px] border-gray-300 rounded-lg bg-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
									<option value={null}>Select Agent</option>
									{agentList?.map((agent) => (
										<option key={agent.id} value={agent.id}>{`${agent.firstName} ${agent.lastName}`}</option>
									))}
								</select>
							) : order?.orders[0].agent ? (
								<div className={"flex flex-col items-center justify-center"}>
									<p>{`${order?.orders[0].agent.firstName} ${order?.orders[0].agent.lastName}`}</p>
									<p>{`( ${order?.orders[0].agent.contact.phone} )`}</p>
								</div>
							) : (
								<p>N/A</p>
							)}
						</div>
					</div>
				</div>
			</div>
			<div className="max-h-[250px] relative overflow-x-auto border shadow-md sm:rounded-lg">
				<table className="md:w-full w-[900px] text-sm text-left text-gray-500 dark:text-gray-400">
					<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
						<tr>
							<th className="px-6 py-3">Item</th>
							<th className="px-6 py-3">Brand</th>
							<th className="px-6 py-3">Color</th>
							<th className="px-6 py-3">Size</th>
							<th className="px-6 py-3">Quantity</th>
							<th className="px-6 py-3">Rate</th>
							<th className="px-6 py-3">Amount</th>
						</tr>
					</thead>
					<tbody>
						{order?.orders.map((order) =>
							order.items.map((product) => (
								<tr
									key={product.id}
									className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
									<td className="px-6 py-4">
										<div className="flex gap-2">{product.product.name}</div>
									</td>
									<td className="px-6 py-4">
										<div className="flex gap-2">{product.product.brand}</div>
									</td>
									<td className="px-6 py-4">
										<div className="flex gap-2">
											{product.details.color ? (
												<div
													style={{
														width: 20,
														height: 20,
														borderRadius: 4,
														backgroundColor: product.details.color,
													}}></div>
											) : (
												"N/A"
											)}
										</div>
									</td>
									<td className="px-6 py-4">{product.details.size}</td>
									<td className="px-6 py-4">{product.details.quantity}</td>
									<td className="px-6 py-4">{format.formatMoney(product.product.costPrice.toLocaleString())}</td>
									<td className="pl-6 py-4">
										{format.formatMoney((product.details.quantity * product.product.costPrice).toLocaleString())}
									</td>
								</tr>
							))
						)}
					</tbody>
				</table>
			</div>
			<div className="pt-4">
				<h3 className="text-xl font-semibold text-black">Customer & Shippling Details</h3>
			</div>
			<div className="flex items-center gap-4">
				<span className="font-semibold w-36">Name</span>
				<span>{`${order?.shippingDetails.firstName} ${order?.shippingDetails.lastName}`}</span>
			</div>
			<div className="flex items-center gap-4">
				<span className="font-semibold w-36">Phone</span>
				<span>{order?.shippingDetails.phone}</span>
			</div>
			<div className="flex items-center gap-4">
				<span className="font-semibold w-36">Country</span>
				<span>{order?.shippingDetails.country}</span>
			</div>
			<div className="flex items-center gap-4">
				<span className="font-semibold w-36">City</span>
				<span>{order?.shippingDetails.city}</span>
			</div>
			<div className="flex items-center gap-4">
				<span className="font-semibold w-36">Zip Code/Postal Code</span>
				<span>{order?.shippingDetails.zipCode}</span>
			</div>
			<div className="flex items-center gap-4">
				<span className="font-semibold w-36">Address</span>
				<span>{order?.shippingDetails.address}</span>
			</div>
		</div>
	);
};

export default OrderTabs;

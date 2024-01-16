/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import http from "../../../api";
import format from "./../../../utils/format";

const OrderTab = ({ orderId, companyName }) => {
	//   const [activeTabIndex, setActiveTabIndex] = useState(0);
	const [order, setOrder] = useState();
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
	function formatDate(mongooseDate) {
		mongooseDate = new Date(mongooseDate);

		const day = mongooseDate.getDate();
		const year = mongooseDate.getFullYear();
		const monthNames = [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December",
		];
		const month = monthNames[mongooseDate.getMonth()];
		return `${day} ${month} ${year}`;
	}
	const getOrder = async () => {
		const res = await http.get(`order/${orderId}`);
		if (res.status === 200) {
			// console.log(res.data.data);
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
			<div className="flex mb-5">
				<div className="flex flex-col gap-4 w-full">
					<div className="">
						<h3 className="text-lg font-semibold">Order Details</h3>
					</div>
					<div className="flex items-center gap-4">
						<span className="font-semibold w-36">Order No. </span>
						<span>{order?.orderNumber}</span>
					</div>
					<div className="flex items-center gap-4">
						<span className="font-semibold w-36">Date </span>
						<span>{formatDate(order?.orderedAt)}</span>
					</div>
					<div className="flex items-center gap-4">
						<span className="font-semibold w-36">Customer Name </span>
						<span>{`${order?.customer.firstName} ${order?.customer.lastName}`}</span>
					</div>
					<div className="flex items-center gap-4">
						<span className="font-semibold w-36">Total Amount</span>
						<span>{format.formatMoney(order?.orders[0].vendorBill)}</span>
					</div>
					<div className="flex justify-between">
						<div className="flex items-center gap-4">
							<span className="font-semibold w-36">Status </span>
							{order?.isCompleted ? (
								<span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
									Completed
								</span>
							) : (
								<span className={createStatusBadge(order?.orders[0].status)}>
									{order?.orders[0].status}
								</span>
							)}
						</div>
						<div className="flex items-center gap-4">
							<span className="font-semibold w-36">Agent </span>
							{order?.orders[0].agent ? (
								<div className={"flex flex-col items-center"}>
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
						{order?.orders
							.filter((order) => order.company.name === companyName)
							.map((order) =>
								order.items.map((product) => (
									<tr
										key={product.id}
										className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
										<td className="px-6 py-4">
											<div className="flex gap-2">{product.product.name}</div>
										</td>
										<td className="px-6 py-4">
											<div className="flex gap-2">{product.product.brand || "N/A"}</div>
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
										<td className="px-6 py-4">
											<div className="flex gap-2">{product.details.size || "N/A"}</div>
										</td>
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
				<h3 className="text-lg font-semibold">Customer & Shippling Details</h3>
			</div>
			<div className="flex items-center gap-4">
				<span className="font-semibold w-36">Name</span>
				<span>{`${order?.customer.firstName} ${order?.customer.lastName}`}</span>
			</div>
			<div className="flex items-center gap-4">
				<span className="font-semibold w-36">Phone</span>
				<span>+923176956007</span>
			</div>
			<div className="flex items-center gap-4">
				<span className="font-semibold w-36">Country</span>
				<span>Pakistan</span>
			</div>
			<div className="flex items-center gap-4">
				<span className="font-semibold w-36">City</span>
				<span>Lahore</span>
			</div>
			<div className="flex items-center gap-4">
				<span className="font-semibold w-36">Zip Code/Postal Code</span>
				<span>54000</span>
			</div>
			<div className="flex items-center gap-4">
				<span className="font-semibold w-36">Address</span>
				<span>140 Canal Bank Scheme Lahore Shalimar Link Road Mughalpura</span>
			</div>
		</div>
	);
};

export default OrderTab;

import React, { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import Rating from "./Rating";

function Tabs({ data, onTabChange, productToReview, setProductToReview }) {
	const [activeTabIndex, setActiveTabIndex] = useState(0);

	function formatDate(mongooseDate) {
		mongooseDate = new Date(mongooseDate);

		const day = mongooseDate.getDate();
		const year = mongooseDate.getFullYear();

		// Create an array of month names
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

		const month = monthNames[mongooseDate.getMonth()]; // getMonth() returns a zero-based index

		return `${day} ${month} ${year}`;
	}

	const handleRatingChange = (rating) => {
		setProductToReview({
			...productToReview,
			rating,
		});
	};

	return (
		<div className="text-black mb-4">
			<ul className="flex flex-wrap mb-5 text-sm font-medium text-center border-b border-gray-200">
				{data.map((tab, index) => (
					<li
						key={index}
						onClick={() => {
							onTabChange(index);
							setActiveTabIndex(index);
						}}
						className="mr-2">
						<button
							className={
								"inline-block p-4 border-b-2 rounded-t-lg " +
								(index !== activeTabIndex
									? "border-transparent hover:text-gray-600 hover:border-gray-300"
									: "text-blue-600 border-blue-600")
							}>
							{tab.title}
						</button>
					</li>
				))}
			</ul>
			{/* <div>{data[activeTabIndex].content}</div> */}
			{data[activeTabIndex].isLoading ? (
				<div className="text-center">
					<ClipLoader size={20} />
				</div>
			) : data[activeTabIndex].orders?.length === 0 ? (
				<div className="text-center">{data[activeTabIndex].emptyText}</div>
			) : productToReview ? (
				<div className="bg-slate-50 p-3 rounded">
					<div className="flex gap-4 mb-4">
						<div className="flex items-center">
							<img
								src={productToReview.product.image}
								alt={productToReview.product.name}
								className="w-20 h-20 object-cover rounded"
							/>
						</div>
						<div>
							<h3 className="font-medium text-lg">
								{productToReview.product.name} {productToReview.product.category.name}
							</h3>
							<div className="text-sm text-secondary">Purchased on {formatDate(productToReview.orderedAt)}</div>
							<div className="text-sm text-secondary mt-2 flex flex-wrap items-center gap-2">
								<span>Quantity: {productToReview.details.quantity}</span>
								<span>Size: {productToReview.details.size}</span>
								<span className="flex items-center gap-1">
									Color:{" "}
									<span
										className="inline-block w-4 h-4 rounded-full"
										style={{ backgroundColor: productToReview.details.color }}></span>
								</span>
							</div>
						</div>
					</div>
					<div className="mb-2 flex items-center gap-6">
						Select Rating : <Rating rating={0} selector={true} onRatingChange={handleRatingChange} />
					</div>
					<div className="flex flex-col gap-3">
						<div>Add Review :</div>
						<textarea
							value={productToReview.review}
							onChange={(e) => setProductToReview({ ...productToReview, review: e.target.value })}
							className="border-2 rounded p-2"
							cols="30"
							rows="10"></textarea>
					</div>
				</div>
			) : (
				<>
					{data[activeTabIndex].orders.map((order) => (
						<div className="mb-4">
							{order.items.map((item) => {
								return item.isReviewed && activeTabIndex === 1 ? (
									<div className="bg-slate-50 p-3 rounded">
										<div className="flex gap-5">
											<div className="flex items-center">
												<img
													src={item.product.image}
													alt={item.product.name}
													className="w-20 h-20 object-cover rounded"
												/>
											</div>
											<div>
												<h3 className="font-medium text-lg">
													{item.product.name} {item.product.category.name}
												</h3>
												<div className="text-sm text-secondary">Purchased on {formatDate(order.orderedAt)}</div>
												<div className="text-sm text-secondary mt-2 flex flex-wrap items-center gap-2">
													<span>Quantity: {item.details.quantity}</span>
													<span>Size: {item.details.size}</span>
													<span className="flex items-center gap-1">
														Color:{" "}
														<span
															className="inline-block w-4 h-4 rounded-full"
															style={{ backgroundColor: item.details.color }}></span>
													</span>
												</div>
											</div>
										</div>
										<div>
											<div className="flex items-center gap-5">
												Rating : <Rating rating={item.review.rating} />
											</div>
											<div className="flex flex-col text-black">
												<div>Review :</div> <div className="text-secondary">{item.review.description}</div>
											</div>
										</div>
									</div>
								) : !item.isReviewed && activeTabIndex === 0 ? (
									<div className="bg-slate-50 p-3 rounded flex gap-2">
										<div className="w-1/5 flex items-center">
											<img
												src={item.product.image}
												alt={item.product.name}
												className="w-20 h-20 object-cover rounded"
											/>
										</div>
										<div className="w-[60%]">
											<h3 className="font-medium text-lg">
												{item.product.name} {item.product.category.name}
											</h3>
											<div className="text-sm text-secondary">Purchased on {formatDate(order.orderedAt)}</div>
											<div className="text-sm text-secondary mt-2 flex flex-wrap items-center gap-2">
												<span>Quantity: {item.details.quantity}</span>
												<span>Size: {item.details.size}</span>
												<span className="flex items-center gap-1">
													Color:{" "}
													<span
														className="inline-block w-4 h-4 rounded-full"
														style={{ backgroundColor: item.details.color }}></span>
												</span>
											</div>
										</div>
										<div className="w-1/5 flex items-center">
											<button
												onClick={() =>
													setProductToReview({
														...item,
														orderId: order.id,
														orderedAt: order.orderedAt,
														rating: 0,
														review: "",
													})
												}
												className="bg-primary hover:opacity-90 text-white px-2 py-1 rounded">
												Review
											</button>
										</div>
									</div>
								) : (
									<></>
								);
							})}
						</div>
					))}
				</>
			)}
		</div>
	);
}

export default Tabs;

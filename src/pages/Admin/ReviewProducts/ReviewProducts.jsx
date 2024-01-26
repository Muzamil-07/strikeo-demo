import { useState, useEffect } from "react";
import AdminSidebar from "../../../components/AdminSidebar";
import { MdKeyboardArrowRight } from "react-icons/md";
import ClipLoader from "react-spinners/ClipLoader";
import noImage from "../../../assets/images/noImage.png";
import http from "../../../api";
import { toast } from "react-toastify";
import Product from "./Product";
import { TbShoppingCartCancel } from "react-icons/tb";
import ConfirmationModal from "./ConfirmationModal";
import Pagination from "../../../components/Pagination";

const ReviewProducts = () => {
	const productDetailBody = {
		name: "",
		brand: "",
		category: "",
		description: "",
		image: "",
		file: "",
		subImages: [
			{
				image: "",
				file: "",
			},
			{
				image: "",
				file: "",
			},
			{
				image: "",
				file: "",
			},
			{
				image: "",
				file: "",
			},
		],
		amount: 0,
		salePrice: 0,
		discount: 0,
		sku: "",
		sizes: [],
		colors: ["#000000", "#ffffff"],
		tags: [],
	};

	const [view, setView] = useState("list");
	const [categories, setCategories] = useState([]);
	const [selectedProduct, setSelectedProduct] = useState({});
	const [currentPage, setCurrentPage] = useState(1);
	const [paginatedData, setPaginatedData] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	//   const [isToggling, setIsToggling] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const itemsPerPage = 7;

	const openModal = (product) => {
		setIsModalOpen(true);
		setSelectedProduct(product);
	};

	const closeModal = () => {
		setIsModalOpen(false);
		setSelectedProduct({});
	};

	const statusColor = {
		Pending: ["gray", "500/10"],
		Rejected: ["red", "600/10"],
		Published: ["blue", "700/10"],
	};
	const createStatusBadge = (status) =>
		`inline-flex items-center rounded-md bg-${statusColor[status][0]}-50 px-2 py-1 text-xs font-medium text-${statusColor[status][0]}-700 ring-1 ring-inset ring-${statusColor[status][0]}-${statusColor[status][1]}`;

	const updateView = (view, product) => {
		setView(view);
		if (view === "list" || view === "add-product") {
			setSelectedProduct(productDetailBody);
		} else if (view === "update-product" && product) {
			setSelectedProduct({
				...product,
				salePrice: product.salePrice ?? product.costPrice,
			});
		}
	};

	const handlePageChange = (page) => {
		if (page === currentPage) return;
		getProducts(page);
	};

	// const toggleProductActivation = (product) => {
	// 	if (isToggling) return;
	// 	if (product?.isActive) {
	// 		blockProduct(product);
	// 	} else {
	// 		unblockProduct(product);
	// 	}
	// };

	// const logView = async (product) => {
	// 	try {
	// 		const res = await http.post("/company/logs", {
	// 			company: user.details.company.id,
	// 			type: "Viewed Product",
	// 			"Viewed Product": {
	// 				name: product.name,
	// 				category: product.category.name,
	// 				message: `viewed product ${product.name} of category ${product.category.name}.`,
	// 			},
	// 		});
	// 	} catch (error) {
	// 		console.log(error, "error");
	// 	}
	// };

	// const blockProduct = async (product) => {
	// 	setIsToggling(true);
	// 	try {
	// 		const res = await http.put("/product/block/" + product?.id, {
	// 			category: product.category.name,
	// 		});
	// 		toast.success("Product inactivated successfully.");
	// 		getProducts(currentPage);
	// 	} catch (error) {
	// 		console.log(error);
	// 		toast.error("Failed to block product.");
	// 	}
	// 	setIsToggling(false);
	// };

	// const unblockProduct = async (product) => {
	// 	setIsToggling(true);
	// 	try {
	// 		const res = await http.put("/product/unblock/" + product?.id, {
	// 			category: product.category.name,
	// 		});
	// 		toast.success("Product activated successfully.");
	// 		getProducts(currentPage);
	// 	} catch (error) {
	// 		console.log(error);
	// 		toast.error("Failed to unblock product.");
	// 	}
	// 	setIsToggling(false);
	// };

	const rejectProduct = async (id) => {
		try {
			const res = await http.put("/product/reject/" + id);
			toast.success("Product rejected successfully.");
			getProducts(currentPage);
		} catch (error) {
			toast.error("Failed to reject product.");
		}
	};

	const getProducts = (page) => {
		http
			.get("/product/authenticated" + "?page=" + (page ? page : "1") + "&limit=" + itemsPerPage)
			.then((res) => {
				setPaginatedData(res.data.data);
				setCurrentPage(res.data.data.currentPage);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const getPageData = async () => {
		setIsLoading(true);
		await Promise.all([getProducts(currentPage)])
			.catch((err) => console.log(err))
			.finally(() => setIsLoading(false));
	};

	useEffect(() => {
		getPageData();
	}, []);
	
	return (
		<>
			<div className="w-full flex flex-col flex-grow bg-white text-black-500" style={{ paddingLeft: "220px" }}>
				<div className="flex flex-grow">
					<AdminSidebar />
					<div className="flex-grow px-5 md:px-24 py-4">
						{isLoading || !paginatedData.products ? (
							<div className="flex justify-center items-center h-full">
								<ClipLoader size={60} color="#201F20" />
							</div>
						) : view === "list" ? (
							<>
								<caption className="py-5 text-xl font-semibold text-left text-black-900 bg-white dark:text-white dark:bg-gray-800 flex justify-between">
									<div className="flex justify-between w-full">
										<div>
											Review Products
											<p className="mt-1 text-sm font-normal text-black-500 dark:text-black-400">
												Keep track of all products & publish them.
											</p>
										</div>
									</div>
								</caption>
								<div className="max-h-[80%] relative overflow-x-auto border shadow-md sm:rounded-lg">
									<table className="md:w-full w-[900px] text-sm text-left text-black-500 dark:text-black-400">
										{paginatedData.products?.length === 0 ? (
											<thead className="text-md text-black-700 uppercase bg-gray-50 flex justify-center py-3">
												<tr>
													<th>No product available to show.</th>
												</tr>
											</thead>
										) : (
											<>
												<thead className="text-xs text-black-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-black-400">
													<tr>
														<th className="px-6 py-3">Product</th>

														<th className="px-6 py-3">Category</th>
														<th className="px-6 py-3">Cost Price</th>
														<th className="px-6 py-3">Sales Price</th>
														<th className="px-6 py-3">Action</th>
													</tr>
												</thead>
												<tbody>
													{paginatedData.products &&
														paginatedData.products.map((product) => (
															<tr
																key={product.id}
																className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
																<td className="px-6 py-4 font-medium text-black-900 whitespace-nowrap dark:text-white">
																	<div className="flex items-center gap-2">
																		<div className="shrink-0">
																			<img
																				className="h-[40px] w-[40px] object-contain rounded-full"
																				src={product.image ? product.image : noImage}
																				alt="Current profile photo"
																			/>
																		</div>
																		<div>{product.name}</div>
																	</div>
																</td>

																<td className="px-6 py-4">{product.category?.name}</td>
																<td className="px-6 py-4">{product.costPrice} T.K.</td>
																<td className="px-6 py-4">{product.salePrice ? product.salePrice + " T.K." : "N/A"}</td>
																<td className="pl-6 py-4">
																	{product.status === "Pending" ? (
																		<div className="flex gap-2">
																			<TbShoppingCartCancel
																				onClick={() => openModal(product)}
																				className="text-red-500 cursor-pointer hover:text-red-700 dark:text-black-400 dark:hover:text-white text-2xl pl-2"
																			/>
																			<MdKeyboardArrowRight
																				className="text-black-500 cursor-pointer hover:text-black-900 dark:text-black-400 dark:hover:text-white text-2xl pl-2"
																				onClick={() => updateView("update-product", product)}
																			/>
																		</div>
																	) : product.status === "Rejected" ? (
																		<span className={createStatusBadge(product?.status)}>Rejected</span>
																	) : (
																		<span className={createStatusBadge(product?.status)}>{product?.status}</span>
																	)}
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
										aria-label="Table navigation">
										<span className="text-sm font-normal text-black-500 dark:text-black-400">
											Showing{" "}
											<span className="font-semibold ">
												{(currentPage - 1) * itemsPerPage + 1}-
												{Math.min(currentPage * itemsPerPage, paginatedData.totalProducts)}
											</span>{" "}
											of <span className="font-semibold ">{paginatedData.totalProducts}</span>
										</span>
										<Pagination
											totalItems={paginatedData.totalProducts}
											itemsPerPage={itemsPerPage}
											onPageChange={handlePageChange}
										/>
									</nav>
								)}
							</>
						) : view === "update-product" ? (
							<Product
								view={view}
								updateView={updateView}
								getProducts={getProducts}
								categories={categories}
								selectedProduct={selectedProduct}
								setSelectedProduct={setSelectedProduct}
							/>
						) : (
							<></>
						)}
					</div>
				</div>
			</div>
			{isModalOpen && (
				<ConfirmationModal closeModal={closeModal} selectedProduct={selectedProduct} rejectProduct={rejectProduct} />
			)}
		</>
	);
};

export default ReviewProducts;

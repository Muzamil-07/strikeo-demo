import React, { useState } from "react";

const Pagination = ({ totalItems, itemsPerPage, onPageChange, pageNeighbours = 1 }) => {
	const [currentPage, setCurrentPage] = useState(1);
	const totalPages = Math.ceil(totalItems / itemsPerPage);

	// Helper method for creating a range of numbers
	const range = (from, to, step = 1) => {
		let i = from;
		const range = [];

		while (i <= to) {
			range.push(i);
			i += step;
		}

		return range;
	};

	const fetchPageNumbers = () => {
		const totalNumbers = pageNeighbours * 2 + 3;
		const totalBlocks = totalNumbers + 2;

		if (totalPages > totalBlocks) {
			const startPage = Math.max(2, currentPage - pageNeighbours);
			const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours);
			let pages = range(startPage, endPage);

			const hasLeftSpill = startPage > 2;
			const hasRightSpill = totalPages - endPage > 1;
			const spillOffset = totalNumbers - (pages.length + 1);

			switch (true) {
				// handle: (1) « 5 6 ... 10
				case hasLeftSpill && !hasRightSpill: {
					const extraPages = range(startPage - spillOffset, startPage - 1);
					pages = ["...", ...extraPages, ...pages];
					break;
				}

				// handle: 1 ... 5 6 « (10)
				case !hasLeftSpill && hasRightSpill: {
					const extraPages = range(endPage + 1, endPage + spillOffset);
					pages = [...pages, ...extraPages, "..."];
					break;
				}

				// handle: (1) « 4 5 6 » (10)
				case hasLeftSpill && hasRightSpill:
				default: {
					pages = ["...", ...pages, "..."];
					break;
				}
			}

			return [1, ...pages, totalPages];
		}

		return range(1, totalPages);
	};

	const goToPage = (page) => {
		const pageNumber = Math.max(0, Math.min(page, totalPages));
		setCurrentPage(pageNumber);
		onPageChange(pageNumber);
	};

	const handleClick = (page) => {
		goToPage(page);
	};

	const handleMoveLeft = (evt) => {
		goToPage(Math.max(currentPage - 5, 1));
	};

	const handleMoveRight = (evt) => {
		goToPage(Math.min(currentPage + 5, totalPages));
	};

	const pages = fetchPageNumbers();

	return (
		<>
			<nav aria-label="Pagination">
				<ul className="inline-flex space-x-2 text-sm h-8">
					<li>
						<button
							disabled={currentPage === 1}
							onClick={() => handleClick(currentPage - 1)}
							className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-700">
							Previous
						</button>
					</li>
					{pages.map((page, index) => {
						if (page === "...") {
							// Left side ellipsis
							if (index === 1) {
								// index 1 would be the left "..."
								return (
									<li key={index}>
										<button
											className="flex rounded-md items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-700"
											onClick={handleMoveLeft}>
											{page}
										</button>
									</li>
								);
							} else {
								// Right side ellipsis
								return (
									<li key={index}>
										<button
											className="flex rounded-md items-center justify-center px-3 h-8 leading-tight text-gray-500 border border-gray-300 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white hover:bg-gray-100 bg-white"
											onClick={handleMoveRight}>
											{page}
										</button>
									</li>
								);
							}
						} else {
							return (
								<li key={index}>
									<button
										className={`flex rounded-md items-center justify-center px-3 h-8 leading-tight text-gray-500 border border-gray-300 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
											currentPage === page ? "bg-blue-500 text-white hover:bg-opacity-70" : "hover:bg-gray-100 bg-white"
										}`}
										onClick={(e) => handleClick(page)}>
										{page}
									</button>
								</li>
							);
						}
					})}
					<li>
						<button
							disabled={currentPage === totalPages}
							onClick={() => handleClick(currentPage + 1)}
							className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-700">
							Next
						</button>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default Pagination;

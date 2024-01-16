import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import { checkImage } from "../utils/image";
import { productPlaceholder } from "../assets";

const Product = ({ product }) => {
	return (
		<div className="flex flex-col gap-2 w-full md:w-[30%] pb-4 md:pb-0">
			<Link to={`/item/${product.id}`}>
				<img
					src={checkImage(product.image) ?? productPlaceholder}
					alt={product.name + " " + product.category.name}
					className="w-24 h-24 object-contain cursor-pointer"
				/>
				<div className="flex flex-col items-start mt-1">
					<h2>{product.name}</h2>
					{/* <div>Part Number: 8-97100-344-2</div> */}
					{/* <div>Shop: {product.shop}</div> */}
					<div>Brand: {product.brand}</div>
					<div className="font-medium text-xl mb-1">TK. {product.salePrice}</div>
					{product.averageRating ? (
						<Rating rating={product.averageRating} />
					) : (
						// <div className="text-sm flex items-center gap-2 py-2">
						<Rating rating={0} />
						// </div>
					)}
				</div>
			</Link>
		</div>
	);
};

export default Product;

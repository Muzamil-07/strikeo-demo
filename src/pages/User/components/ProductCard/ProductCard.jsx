/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { Card, Rating } from "flowbite-react";
import ImageContainer from "../../../../components/ImageContainer";

const ProductCard = ({ product, item, category }) => {
  let { id, image, name, description, salePrice, ratings, reviews } = product;
  const starElements = Array.from({ length: 5 }, (_, index) => (
    <Rating.Star key={index} filled={index < ratings} />
  ));

  return (
    <>
      <Link to={`/products/${id}`} state={{ item, category }}>
        <Card className="min-h-56 max-h-56 max-w-full overflow-hidden m-1.5 hover:bg-slate-100/85 opacity-90">
          <ImageContainer src={image} width={100} height={100} />
          <div className="mt-0">
            <h5
              title={name}
              className="text-xs font-semibold text-ellipsis tracking-tight text-gray-900 dark:text-white"
            >
              {name.slice(0,30)}
               {name.length > 30 && " ..."}
            </h5>
            {/* <small
              title={description}
              className="text-black opacity-50 text-xs"
            >
              {description.slice(0, 100)} {name.length > 30 && " ..."}
            </small> */}
            <div className="flex text-xs mt-3 justify-between items-center">
              {/* <Rating>{starElements}</Rating> */}
              <span className=" rounded bg-cyan-100 px-2 py-1  font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                {ratings || 0}.0 | {" 0 Reviews"}
              </span>
              <span className="text-xs pb-1 font-bold text-gray-900 dark:text-white">
                {salePrice} TK
              </span>
            </div>
          </div>
        </Card>
      </Link>
    </>
  );
};

export default ProductCard;

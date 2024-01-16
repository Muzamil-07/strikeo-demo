/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import { Accordion, Card, Rating } from "flowbite-react";
import { useGetRelatedProductsQuery } from "../../../services/nodeApi";
import { ClipLoader } from "react-spinners";
import ImageContainer from "../../../components/ImageContainer";

export default function RelatedProducts({ id, state }) {
  const { data, isLoading: isRelatedProductsLoading } =
    useGetRelatedProductsQuery({ id });
  if (isRelatedProductsLoading)
    return (
      <div className="flex justify-center items-center h-full">
        <ClipLoader size={40} color="white" />
      </div>
    );
  return (
    <Accordion className="border-none">
      <Accordion.Panel>
        <Accordion.Title className="flex justify-center text-lg text-white py-3">
          Related Products
        </Accordion.Title>
        <Accordion.Content>
          <div className="flex max-w-[900px] gap-3 overflow-auto info-scroll">
            {data.data
              .filter((prod) => prod._id !== id)
              .map((item, index) => {
                const starElements = Array.from({ length: 5 }, (_, index) => (
                  <Rating.Star
                    key={index}
                    filled={index < item.averageRating}
                  />
                ));
                return (
                  <NavLink
                    key={index}
                    to={`/products/${item._id ? item._id : item.id}`}
                    state={{
                      category: state.category,
                      item: state.item,
                    }}
                  >
                    <Card className="w-[8rem] h-[10rem] m-3 bg-gradient-to-r from-teal-200 to-lime-200">
                      <ImageContainer
                        src="/apple-watch.png"
                        width={80}
                        height={80}
                      />
                      <div className="flex flex-col text-center">
                        <div className="text-xs text-black font-bold">
                          {item.name}
                        </div>
                        <div className="text-xs text-black">
                          {item.salePrice} T.K.
                        </div>
                        <Rating>{starElements}</Rating>
                      </div>
                    </Card>
                  </NavLink>
                );
              })}
          </div>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
}

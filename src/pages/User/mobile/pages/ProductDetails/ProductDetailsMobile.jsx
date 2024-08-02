import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner";
import { ProductRating } from "../../theme/themes";
import Stack from "@mui/material/Stack";
import ButtonGroup from "@mui/material/ButtonGroup";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import { Spinner } from "flowbite-react";
import LoadingButton from "@mui/lab/LoadingButton";
import RelatedProducts from "./RelatedProducts";
import Reviews from "./Reviews";
import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import {
  useAddItemToCartMutation,
  useAddItemToFavouritesMutation,
  useGetFavouritesQuery,
  useGetProductQuery,
  useRemoveItemFromFavouritesMutation,
} from "../../../../../services/nodeApi";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setFavourites } from "./../../../../../redux/slices/Favourite";
import CircularProgress from "@mui/material/CircularProgress";
import Slider from "react-slick";

const QuantitySelector = ({ handleDecrement, quantity, handleIncrement }) => {
  return (
    <div className="mt-1">
      <label
        htmlFor="quantity-input"
        className="block mb-2 text-sm font-medium  dark:text-white"
        // className="bg-gradient-to-r from-teal-200 to-lime-200 text-transparent bg-clip-text"
      >
        Choose quantity:
      </label>
      <div className="relative flex items-center max-w-[8rem]">
        <button
          type="button"
          id="decrement-button"
          onClick={handleDecrement}
          className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-8 focus:outline-none"
        >
          <svg
            className="w-3 h-3 text-gray-900 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 2"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h16"
            />
          </svg>
        </button>
        <input
          type="text"
          id="quantity-input"
          aria-describedby="helper-text-explanation"
          className="border-x-0 border-gray-300 h-8 text-center text-sm block w-full py-2.5 dark:border-gray-600 dark:placeholder-gray-400 text-black"
          placeholder="999"
          value={quantity}
          readOnly
          required
        />
        <button
          type="button"
          id="increment-button"
          onClick={handleIncrement}
          className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-8 focus:outline-none"
        >
          <svg
            className="w-3 h-3 text-gray-900 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 1v16M1 9h16"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

const settings = {
  dots: true,
  arrows: true,
  fade: true,
  className: "center",
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 1,
  speed: 2000,
  autoplay: false,
};
function containsNonEmptyString(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].trim() !== "") {
      return true;
    }
  }
  return false;
}

const ProductDetailsMobile = () => {
  const { state } = useLocation();
  if (!state) <Navigate to="/" />;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectedImage, setSelectedImage] = useState("");
  const [favouriteItem, setFavouriteItem] = useState(null);
  const [selectedSize, setSelectedSize] = useState();
  const [selectedColor, setSelectedColor] = useState();
  const [quantity, setQuantity] = useState(1);

  const [addItemToCart, { isLoading: isAddToCartLoading }] =
    useAddItemToCartMutation();
  const [addItemToFavourites, { isLoading: isAddtoFavLoading }] =
    useAddItemToFavouritesMutation();
  const [removeItemFromFavourites, { isLoading: isRremoveFromFavLoading }] =
    useRemoveItemFromFavouritesMutation();

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const { id } = useParams();
  const { data: productData, isLoading: isProductsLoading } =
    useGetProductQuery({ id });
  const { data: favouriteData, isLoading: isFavouriteLoading } =
    useGetFavouritesQuery();

  const handleAddToCart = async () => {
    if (!Cookies.get("jwt")) return navigate("/login");

    const response = await addItemToCart({
      productId: id,
      quantity,
      selectedSize: selectedSize,
      selectedColor: selectedColor,
    });
    if ("error" in response) {
      toast.error("Something went wrong! Try again");
    } else {
      toast.success("Item has been added to cart successfully!");
    }
  };
  const handleAddToFavourite = async () => {
    const response = await addItemToFavourites(id);
    if ("error" in response) {
      toast.error("Something went wrong! Try again");
    } else {
      toast.success("Item has been added to your favourite list!");
    }
  };
  const handleRemoveFromFavourite = async () => {
    const response = await removeItemFromFavourites(id);
    if ("error" in response) {
      toast.error("Something went wrong! Try again");
    } else {
      toast.success("Item has been removed from your favourite list!");
    }
  };

  useEffect(() => {
    if (productData) {
      setSelectedImage(
        productData.data.image.replace(
          "http://localhost:3000/",
          "http://localhost:8000/"
        )
      );
      setSelectedSize(productData.data.sizes[0]);
      setSelectedColor(productData.data.colors[0]);
    }
    if (favouriteData) {
      dispatch(setFavourites(favouriteData.data));
      setFavouriteItem(favouriteData.data.find((el) => el.id === id));
    }
  }, [dispatch, favouriteData, id, productData]);
  return (
    <>
      <Navbar />
      <Box pt={10} bgcolor="#111">
        {isProductsLoading || isFavouriteLoading || !productData ? (
          <div
            className="flex justify-center items-center"
            style={{ height: "100vh" }}
          >
            <CircularProgress />
          </div>
        ) : (
          <>
            {productData &&
            productData.data &&
            containsNonEmptyString(productData.data.subImages) ? (
              <Slider {...settings} style={{ background: "#111" }}>
                {productData.data.subImages.map((item, index) => (
                  <Box key={index} sx={{ width: "100%", marginInline: "auto" }}>
                    <img
                      src={item}
                      alt={"client.name"}
                      style={{
                        width: "100%",
                        height: "auto",
                      }}
                      onError={(e) => {
                        e.target.src = "/placeholder.jpg";
                      }}
                    />
                  </Box>
                ))}
              </Slider>
            ) : (
              <Box style={{ background: "#111" }}>
                <Box sx={{ width: "100%", marginInline: "auto" }}>
                  <img
                    src={"/placeholder.jpg"}
                    alt={"client.name"}
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                  />
                </Box>
              </Box>
            )}

            <Box
              sx={{
                backgroundColor: "#111",
                paddingInline: "1rem",
                paddingTop: "1.7rem",
              }}
            >
              <Typography variant="h5" sx={{ color: "white" }}>
                {productData?.data.name}
              </Typography>
              <Typography sx={{ color: "grey" }}>
                {productData?.data.description}
              </Typography>

              <Stack direction="row" spacing={2}>
                <ProductRating
                  value={productData?.data.averageRating}
                  readOnly
                  size="small"
                />
                <span className="ml-3 rounded px-2.5 py-0.5 text-xs font-semibold text-black-800 bg-[#DD8560]">
                  {productData?.data.averageRating || 0}.0
                </span>
              </Stack>
              <QuantitySelector
                quantity={quantity}
                handleDecrement={handleDecrement}
                handleIncrement={handleIncrement}
              />

              <div className="mt-5">
                <div className="text-xl text-[white] font-semibold inline">
                  Sizes:
                </div>

                <ButtonGroup className="ml-3">
                  {productData?.data.sizes.map((size, i) => {
                    return (
                      <button
                        key={`size-${i}`}
                        onClick={() => setSelectedSize(size)}
                        className={`mr-2 ${
                          selectedSize === size
                            ? "text-black bg-[#DD8560]"
                            : "bg-[gray] text-black"
                        }  hover:bg-gray-400 px-2 py-1 rounded-sm text-[black]`}
                      >
                        {size}
                      </button>
                    );
                  })}
                </ButtonGroup>
              </div>

              <div className="mt-5">
                <div className="text-xl mr-3 text-[white] font-semibold inline">
                  Colors:
                </div>

                <ButtonGroup>
                  {productData?.data.colors.map((color, i) => {
                    return (
                      <button
                        key={`size-${i}`}
                        onClick={() => setSelectedColor(color)}
                        style={{
                          background: color,
                          border:
                            selectedColor === color
                              ? "4px solid #DD8560"
                              : "none",
                        }}
                        className={`mr-2 p-6 rounded-[50%] `}
                      ></button>
                    );
                  })}
                </ButtonGroup>
              </div>

              <Stack direction="row" spacing={2} my={3}>
                <Typography
                  variant="h5"
                  sx={{ color: "white", fontWeight: "bold" }}
                >
                  {productData?.data.salePrice}{" "}
                  <span style={{ color: "#DD8560" }}>T.K.</span>
                </Typography>
                {!favouriteItem ? (
                  isAddtoFavLoading ? (
                    <Spinner size="sm" />
                  ) : (
                    <button className="ml-3" onClick={handleAddToFavourite}>
                      <IoMdHeartEmpty className="fill-[#DD8560] h-6 w-6" />
                    </button>
                  )
                ) : isRremoveFromFavLoading ? (
                  <Spinner size="sm" />
                ) : (
                  <button className="ml-3" onClick={handleRemoveFromFavourite}>
                    <IoMdHeart className="fill-white-700 h-6 w-6" />
                  </button>
                )}
              </Stack>
              <LoadingButton
                variant="contained"
                loading={isAddToCartLoading}
                onClick={handleAddToCart}
                sx={{ fontWeight: "bold", marginBottom: "1rem" }}
              >
                Add to cart
              </LoadingButton>
              {/******************* REVIEWS **************/}
              <Reviews reviews={productData?.data.reviews} />
              {/******************* RELATED PRODUCTS **************/}
              <RelatedProducts id={productData?.data.id} />
            </Box>
            {/* BANNER FOR 3D MODEL */}
            <Banner category={"jacket"} />
          </>
        )}
      </Box>
    </>
  );
};

export default ProductDetailsMobile;

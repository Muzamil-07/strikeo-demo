import { useState, useRef, useEffect } from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ReactPaginate from "react-paginate";
import { cartLogo } from "../../../assets";
import { heartEmpty } from "../../../assets";
import { useSearchParams } from "react-router-dom";
import Product from "../../../components/Product";
import ShoppingCart from "../../../components/Cart";
import Favourites from "../../../components/Favourites";
import { gsap } from "gsap";
import { useDispatch, useSelector } from "react-redux";
import http from "../../../api";
import { setCart } from "../../../redux/slices/Cart";
import { setUser } from "../../../redux/slices/User";
import { toast } from "react-toastify";
import Model from "../../../models";
import DotLoader from "react-spinners/DotLoader";

const Shop = () => {
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [searchText, SetSeatchText] = useState("");
  const jacketRef = useRef(null);
  const productsRef = useRef(null);
  const modelRef = useRef(null);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isFavouritesOpen, setIsFavouritesOpen] = useState(false);

  const [favourites, setFavourites] = useState([]);
  const jacketPosition = useSelector((state) => state.jacketPosition);
  const cart = useSelector((state) => state.cart);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const itemsPerPage = 6;
  const pageCount = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = filteredProducts.slice(startIndex, endIndex);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected + 1);
  };

  const [items, setItems] = useState([
    {
      id: "1",
      name: "Item 1",
      salePrice: 19.99,
      imageUrl: "https://via.placeholder.com/150",
    },
  ]);

  const handleRemoveItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    setItems([]);
    setIsCartOpen(false);
  };

  const getUserFavourites = async () => {
    try {
      const res = await http.get("/user/favourites");

      setFavourites(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getProducts = () => {
    http
      .get("/product/authenticated?category=" + searchParams.get("category"))
      .then((res) => {
        // console.log(res.data.data, "res.data.data");
        setProducts(res.data.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getPageData = async () => {
    setIsLoading(true);
    await Promise.all([getProducts(), getUserFavourites()])
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  const removeFromCart = async (id) => {
    try {
      const res = await http.post("/cart/remove/", {
        productId: id,
      });

      // console.log(res.data.data, "--------- Cart Details ---------");

      dispatch(setCart(res.data.data));
      toast.success(`Item removed from cart!`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemoveFav = async (product) => {
    try {
      const res = await http.post("/user/favourites/remove/" + product.id);

      dispatch(setUser(res.data.data));
      getUserFavourites();

      toast.success(`${product.name} removed from favourites!`);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPageData();
  }, [searchParams]);

  useEffect(() => {
    const divElement = jacketRef.current;
    const divElement2 = productsRef.current;
    const pageWidth = window.innerWidth;

    // console.log(jacketRef.current, pageWidth);

    const { x, y } = { ...jacketPosition };

    // Model Animation
    gsap.set(divElement, { x, opacity: 0.3 });
    // gsap
    // .set(divElement, { height: "100%" }, "start")
    // .from(divElement, 0.7, { height: 0, ease: "power4.out" }, "start+=0.001");
    const tl = gsap.timeline({
      defaults: { duration: 2.5, ease: "power3.out" },
    });
    tl.to(divElement, { x: 0, opacity: 1 });

    // Products Drawer Animation
    gsap.set(divElement2, { x: pageWidth });
    const tl2 = gsap.timeline({
      defaults: { duration: 1.8, ease: "power3.out" },
    });
    tl2.to(divElement2, { x: "0%", opacity: 1 }).delay(0.2);

    // tl2.eventCallback("onComplete", () => {
    // 	modelRef.current.classList.add("pl-8");
    // });

    return () => {
      tl.reverse();
      tl2.reverse();
    };
  }, []);

  return (
    <div className="w-full flex flex-col h-full">
      <Header />
      <div className="flex justify-between items-center flex-col md:flex-row h-[80%] overflow-hidden">
        <div
          ref={jacketRef}
          className="flex items-center w-[25%] justify-center h-full"
        >
          <div
            ref={modelRef}
            className="mx-auto cursor-pointer flex justify-start items-center w-[90%] h-[65%]"
          >
            <Model
              modelProps={[
                {
                  modelName: "Jacket.jsx",
                  modelRotation: [0, -Math.PI / 2, 0],
                },
              ]}
              cameraPosition={[0, 0, 1]}
              groupPosition={[0, -1.5, 0]}
              showModelPage={true}
            />
          </div>
          {/* <img src={jacket} alt="jacket" className="mx-auto md:mx-0 w-[50%] md:w-96 cursor-pointer" /> */}
        </div>
        <div ref={productsRef} className="flex flex-col lg:w-[60%] h-full">
          <div className="flex flex-col lg:mb-4 lg:gap-3">
            <div className="flex justify-between items-end px-4 py-2 md:py-0 md:px-0">
              {!isLoading ? (
                <div>
                  Showing {filteredProducts.length === 0 ? 0 : startIndex + 1} -{" "}
                  {Math.min(endIndex, filteredProducts.length)} of{" "}
                  {filteredProducts.length}
                </div>
              ) : (
                <div></div>
              )}
              <div className="w-[45%] md:pr-8 md:w-auto">
                <input
                  type="text"
                  placeholder="Search"
                  onChange={(e) => SetSeatchText(e.target.value)}
                  className="outline-none border border-gray-400 text-black w-full rounded-md px-2 py-1 md:px-3 md:py-2"
                />
              </div>
            </div>
            <hr />
          </div>
          {isLoading ? (
            <div className="flex justify-center items-center h-full">
              <DotLoader color="#c87d15" />
            </div>
          ) : (
            <>
              <div className="flex justify-between h-[60%] md:h-[70%] py-4 pl-6 md:py-0 md:pl-0">
                {paginatedData && paginatedData.length > 0 ? (
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start md:gap-8 w-full md:w-5/6 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
                    {paginatedData.map((product, index) => (
                      <Product key={index} product={product} />
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col justify-center items-center w-full md:w-5/6">
                    <div className="text-2xl font-bold">No products found!</div>
                    <div className="text-lg">
                      Try another category or search
                    </div>
                  </div>
                )}
                <div className="flex flex-col justify-center items-center md:items-end md:pr-8 gap-4 w-[10%] md:w-1/6">
                  <div className="relative">
                    <img
                      src={cartLogo}
                      onClick={() => setIsCartOpen(true)}
                      alt="logo"
                      className="w-6 cursor-pointer dark:filter-none filter invert"
                    />
                    {cart.items && cart.items.length > 0 && (
                      <div className="bg-white text-black w-5 h-5 rounded-full flex justify-center items-center absolute -top-3 -right-2">
                        {cart.items.length}
                      </div>
                    )}
                  </div>
                  <div className="relative">
                    <img
                      src={heartEmpty}
                      onClick={() => setIsFavouritesOpen(true)}
                      alt="logo"
                      className="w-6 cursor-pointer dark:filter-none filter invert"
                    />
                    {favourites && favourites.length > 0 && (
                      <div className="bg-white text-black w-5 h-5 rounded-full flex justify-center items-center absolute -top-3 -right-2">
                        {favourites.length}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {products && products.length > 0 && (
                <div className="flex justify-center">
                  <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    breakLabel={"..."}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageChange}
                    containerClassName={
                      "pagination flex justify-center md:mt-5 md:mb-8 gap-4"
                    }
                    activeClassName={"bg-orange-200"}
                    previousClassName={`px-3 py-2 rounded-md bg-yellow-50 text-black hover:bg-yellow-200`}
                    nextClassName={`px-3 py-2 rounded-md bg-yellow-50 text-black hover:bg-yellow-200`}
                    pageClassName={
                      "px-3 min-w-[35px] text-center py-2 rounded-md bg-yellow-50 text-yellow-800 hover:bg-yellow-200"
                    }
                    breakClassName={
                      "px-3 py-2 rounded-md bg-yellow-50 text-black hover:bg-yellow-200"
                    }
                    disabledClassName={
                      "[&>*]:opacity-50 [&>*]:cursor-not-allowed [&>*]:bg-white hover:bg-white"
                    }
                  />
                </div>
              )}
            </>
          )}
        </div>
      </div>
      <Footer />
      {isCartOpen && (
        <ShoppingCart
          items={products.slice(0, 3)}
          removeItem={removeFromCart}
          onClose={() => setIsCartOpen(false)}
          onCheckout={handleCheckout}
        />
      )}
      {isFavouritesOpen && (
        <Favourites
          favourites={favourites}
          onClose={() => setIsFavouritesOpen(false)}
          removeItem={handleRemoveFav}
        />
      )}
    </div>
  );
};

export default Shop;

import { Suspense, useEffect, useState } from "react";
import { tiktok } from "../../../assets";
import { instagram } from "../../../assets";
import { facebook } from "../../../assets";
import { cartLogo } from "../../../assets";
import { heartEmpty } from "../../../assets";
import Model from "./../../../models";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setJacketPosition } from "../../../redux/slices/JacketPosition";
import ShoppingCart from "../../../components/Cart";
import Favourites from "./../../../components/Favourites";
import { setCart } from "./../../../redux/slices/Cart";
import { setUser } from "./../../../redux/slices/User";
import DotLoader from "react-spinners/DotLoader";
import props from "./../../../data/props";
import http from "./../../../api";
import { toast } from "react-toastify";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isFavouritesOpen, setIsFavouritesOpen] = useState(false);

  const [favourites, setFavourites] = useState([]);

  //   const handleRemoveItem = (id) => {
  //     setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  //   };

  const handleCheckout = () => {
    // console.log("Checkout:", items);
    // setItems([]);
    setIsCartOpen(false);
  };

  const handleJacketClick = (event) => {
    // console.log("listening");
    const { left, top, width, height } = event.target.getBoundingClientRect();
    const jacketPosition = { x: left + width / 2, y: top + height / 2 };
    dispatch(setJacketPosition(jacketPosition));
    navigate("/shop?category=jacket");
  };

  const removeFromCart = async (id) => {
    try {
      const res = await http.post("/cart/remove/", {
        productId: id,
      });

      console.log(res.data.data, "--------- Cart Details ---------");

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

  const getUserFavourites = async () => {
    try {
      const res = await http.get("/user/favourites");

      setFavourites(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserFavourites();
  }, [user]);

  return (
    <>
      <div className="w-full flex flex-col flex-grow">
        <Header />
        <div className="flex justify-between flex-grow px-5 md:px-8 pb-8">
          <div className="flex flex-col justify-center gap-3 pr-2 md:pr-0">
            <img
              src={tiktok}
              alt="logo"
              className="w-6 md:w-8 cursor-pointer"
            />
            <img
              src={instagram}
              alt="logo"
              className="w-6 md:w-8 cursor-pointer"
            />
            <img
              src={facebook}
              alt="logo"
              className="w-6 md:w-8 cursor-pointer"
            />
          </div>
          <div className="flex-grow grid grid-cols-1 md:grid-cols-2">
            <div className="hidden md:flex items-center justify-end lg:pr-0 md:pr-4">
              <div className="lg:h-full lg:w-full md:w-[220px] md:h-[80%] pl-36">
                <Suspense
                  fallback={
                    <div className="flex justify-center items-center h-full">
                      <DotLoader color="#c87d15" />
                    </div>
                  }
                >
                  <Model
                    modelProps={[props[user.details.model]]}
                    cameraPosition={[0, -0.4, 2]}
                    groupPosition={[0, -0.9, 0]}
                  />
                </Suspense>
              </div>
            </div>
            <div className="flex justify-center items-center md:items-start">
              <div className="relative w-full h-[70%] -mt-5 md:h-full">
                <Suspense
                  fallback={
                    <div className="flex justify-center items-center h-full">
                      <DotLoader color="#c87d15" />
                    </div>
                  }
                >
                  {/* Single scene models */}
                  {/* <div className="lg:pr-14 h-full cursor-pointer">
								<Model
									modelProps={[
										{
											modelName: "Helmet.jsx",
											modelScale: [55, 55, 55],
											modelPosition: [0, 60, 0],
											modelRotation: [0.3, 0, 0],
										},
										{
											modelName: "Jacket.jsx",
											modelScale: [40, 40, 40],
											modelPosition: [0, -35, 0],
											modelRotation: [0, -Math.PI / 2, 0],
										},
										{
											modelName: "Jeans.jsx",
											modelScale: [0.5, 0.5, 0.5],
											modelPosition: [0, -38, 0],
										},
										{
											modelName: "Boots.jsx",
											modelScale: [30, 30, 30],
											modelPosition: [0, -50, 0],
										},
										{
											modelName: "MotoGloves.jsx",
											modelScale: [0.32, 0.32, 0.32],
											modelPosition: [-25, 18, 0],
											modelRotation: [0.3, 0, 2.35],
										},
										{
											modelName: "MotoGloves.jsx",
											modelScale: [0.32, 0.32, 0.32],
											modelPosition: [25, 20, 0],
											modelRotation: [1, 8, -4.3],
											// modelRotation: [0, Math.PI, 90],
										},
										// {
										// 	modelName: "Yamaha.jsx",
										// },
									]}
									cameraPosition={[0, 0, 100]}
									groupPosition={[0, 0, 0]}
								/>
							</div> */}
                  {/* Individual scene models */}
                  <div className="h-[100px] w-[80px] cursor-pointer -mb-3 mx-auto">
                    <Model
                      modelProps={[
                        {
                          modelName: "Helmet.jsx",
                          modelScale: [5, 5, 5],
                          modelRotation: [0.3, 0, 0],
                        },
                      ]}
                      cameraPosition={[0, 0, 2]}
                      groupPosition={[0, 0, 0]}
                      showModelPage={true}
                    />
                  </div>
                  <div className="h-[40px] w-[60px] cursor-pointer -mb-3 mx-auto">
                    <Model
                      modelProps={[
                        {
                          modelName: "Sunglass.jsx",
                          modelScale: [1.5, 1.5, 1.5],
                          modelRotation: [0.7, 0, 0.1],
                        },
                      ]}
                      cameraPosition={[0, 0, 2]}
                      groupPosition={[0, 0.8, 0]}
                      showModelPage={true}
                    />
                  </div>
                  <div className="h-[80px] w-[100px] mx-auto relative">
                    <div className="cursor-pointer">
                      <Model
                        modelProps={[
                          {
                            modelName: "Bandana.jsx",
                            modelScale: [50, 50, 50],
                            modelRotation: [0, 0, 0],
                          },
                        ]}
                        cameraPosition={[0, -10, 300]}
                        groupPosition={[0, -910, 0]}
                        showModelPage={true}
                      />
                    </div>
                  </div>
                  <div className="h-[170px] flex relative">
                    <div className="h-[70px] w-[60px] absolute bottom-3 left-48 cursor-pointer">
                      <Model
                        modelProps={[
                          {
                            modelName: "MotoGloves.jsx",
                            modelRotation: [-1, 0, 2.3],
                          },
                        ]}
                        cameraPosition={[0, 0, 55]}
                        groupPosition={[30, 10, 0]}
                        showModelPage={true}
                      />
                    </div>
                    <div
                      className="w-[195px] -mt-4 mx-auto cursor-pointer"
                      onClick={handleJacketClick}
                    >
                      <Model
                        modelProps={[
                          {
                            modelName: "Jacket.jsx",
                            modelRotation: [0, -Math.PI / 2, 0],
                          },
                        ]}
                        cameraPosition={[0, 0, 0.7]}
                        groupPosition={[0, -1.5, 0]}
                        showModelPage={true}
                      />
                    </div>
                    <div className="h-[70px] w-[60px] absolute bottom-2 right-48 cursor-pointer">
                      <Model
                        modelProps={[
                          {
                            modelName: "MotoGloves.jsx",
                            modelRotation: [0, -4, 2],
                          },
                        ]}
                        cameraPosition={[0, 0, 60]}
                        groupPosition={[-24, 14, 0]}
                        showModelPage={true}
                      />
                    </div>
                  </div>
                  <div className="h-[230px] w-[100px] mx-auto -mt-9 cursor-pointer">
                    <Model
                      modelProps={[
                        {
                          modelName: "Jeans.jsx",
                        },
                      ]}
                      cameraPosition={[0, 0, 75]}
                      groupPosition={[0, -45, 0]}
                      showModelPage={true}
                    />
                  </div>
                  <div className="h-[100px] w-[80px] mx-auto -mt-9 cursor-pointer">
                    <Model
                      modelProps={[
                        {
                          modelName: "Boots.jsx",
                          modelRotation: [0.1, 0, 0],
                        },
                      ]}
                      cameraPosition={[0, 0, 0.6]}
                      groupPosition={[0, 0.06, 0]}
                      showModelPage={true}
                    />
                  </div>
                </Suspense>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 md:pr-8">
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
        <Footer />
        {isCartOpen && (
          <ShoppingCart
            // items={products.slice(0, 3)}
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
    </>
  );
};

export default Home;

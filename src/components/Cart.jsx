import ShoppingCartItem from "./CartItem";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { RxCrossCircled } from "react-icons/rx";
import { Button } from "flowbite-react";

const ShoppingCart = ({ removeItem, onClose, setIsCartOpen }) => {
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const containerRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      containerRef.current.classList.remove(
        "transform-none",
        "translate-x-full"
      );
    }, 50);

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-[100]">
        <div
          ref={containerRef}
          className="w-full md:w-[30rem] z-[20000] h-[70%] p-4 bg-white absolute bottom-0 right-0 flex flex-col justify-between transition-transform duration-500 translate-x-full"
        >
          <div>
            <div className="flex justify-between text-black">
              <div className="pb-2 border-b-2 border-black w-[85%]">
                <h3 className="text-2xl font-semibold">Shopping Cart</h3>
              </div>

              <div onClick={onClose} className="cursor-pointer">
                <RxCrossCircled className="w-6 h-6" />
              </div>
            </div>
            <div className="overflow-y-auto mt-3">
              {cart.items.length > 0 ? (
                cart.items.map((item) => (
                  <ShoppingCartItem
                    key={item.id}
                    item={item}
                    removeItem={removeItem}
                  />
                ))
              ) : (
                <div className="text-black text-sm text-center">
                  Your cart is empty.
                </div>
              )}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between p-4 border-b-2 border-black text-black">
              <span>Subtotal </span>
              <span>TK. {cart.bill}</span>
            </div>
            <div className="pt-4 text-center">
              {cart.items.length > 0 ? (
                <div className="flex justify-center">
                  <Button
                    onClick={() => navigate("/checkout")}
                    gradientDuoTone="pinkToOrange"
                  >
                    Checkout
                  </Button>
                </div>
              ) : (
                <div className="flex justify-center">
                  <Button
                    className=""
                    onClick={() => {
                      setIsCartOpen(false);
                      navigate("/experience");
                    }}
                    gradientDuoTone="tealToLime"
                  >
                    Add Products
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;

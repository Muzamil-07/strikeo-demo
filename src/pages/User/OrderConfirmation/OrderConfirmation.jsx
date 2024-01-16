import { logo } from "../../../assets";
import { useNavigate, useSearchParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../../../redux/slices/Theme";

const OrderConfirmation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const success = searchParams.get("success");

  return (
    <div className="w-full md:h-full flex flex-col dark:bg-primary">
      <div className="py-10 md:pt-14 md:pb-2 flex justify-center relative">
        <img
          src={logo}
          alt="logo"
          className="w-28 md:w-34 dark:filter-none filter invert"
        />
        <button
          type="button"
          className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1 absolute right-10 top-10"
          onClick={() => dispatch(toggleTheme())}
        >
          <svg
            className="dark:hidden w-8 h-8"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
          </svg>
          <svg
            className="hidden dark:block w-8 h-8"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <div className="w-full flex-grow py-12 px-10 md:px-44">
        <div className=" h-full">
          <h3 className="pb-4 text-2xl font-medium text-center">
            Order Status
          </h3>
          <div className="flex flex-col md:justify-center md:flex-row">
            <div className="w-[80%] mx-auto md:mx-0 pt-6">
              <div className="flex flex-col flex-grow h-full justify-center items-center gap-12">
                {success === "true" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-20 w-20 text-green-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a8 8 0 100 16 8 8 0 000-16zM7.293 9.707a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l5-5a1 1 0 00-1.414-1.414L9 10.586 7.293 9.707z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-20 w-20 text-red-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a8 8 0 100 16 8 8 0 000-16zM8.707 9.293a1 1 0 00-1.414 1.414L8.586 12 7.293 13.293a1 1 0 101.414 1.414L10 13.414l1.293 1.293a1 1 0 001.414-1.414L11.414 12l1.293-1.293a1 1 0 00-1.414-1.414L10 10.586 8.707 9.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}

                <div>
                  {success === "true"
                    ? "Your order has been placed successfully."
                    : "Order couldn't be placed!"}
                </div>
                <button
                  onClick={() => navigate("/")}
                  className="ml-4 text-tertiary text-lg"
                >
                  Go To Homepage
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;

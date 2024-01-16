import { Suspense, useState } from "react";
import { logo } from "../../../assets";
import { useNavigate } from "react-router-dom";
import Loader from "../../../components/Loader";
import Model from "../../../models";
import { useSelector } from "react-redux";
import props from "../../../data/props";
import DotLoader from "react-spinners/DotLoader";
import { toggleTheme } from "../../../redux/slices/Theme";
import { useDispatch } from "react-redux";

const Welcome = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const user = useSelector((state) => state.user);

  // useEffect(() => {
  // 	console.log(user);
  // }, [user]);

  return (
    <div className="w-full flex flex-col flex-grow">
      {isLoading ? (
        <Loader setIsLoading={setIsLoading} />
      ) : (
        <>
          <div className="py-10 md:py-14 md:pb-5 flex justify-center relative">
            <img
              src={logo}
              alt="logo"
              className="w-28 md:w-44 dark:filter-none filter invert"
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
          <div className="flex flex-col flex-grow items-center lg:w-1/3 gap-4 mx-auto px-4">
            {user && (
              <h3 className="pb-6 text-2xl font-medium text-center">
                Welcome back{" "}
                {user.details?.username || user.details?.email.split("@")[0]}!
              </h3>
            )}
            <div className="h-96">
              <Suspense
                fallback={
                  <div className="flex justify-center items-center h-full">
                    <DotLoader color="#c87d15" />
                  </div>
                }
              >
                <Model
                  modelProps={[props[user.details.model]]}
                  cameraPosition={[0, -0.4, 1.5]}
                  groupPosition={[0, -0.9, 0]}
                />
              </Suspense>
            </div>
            {/* <img src={character} alt="logo" className="w-[300px] md:w-[220px] md:h-[80%] cursor-pointer" /> */}
            <button
              className="border border-white rounded-xl px-28 py-4 bg-primary hover:opacity-90 text-white dark:hover:bg-neutral-900"
              onClick={() => navigate("/choose-category")}
            >
              Shop Now
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Welcome;

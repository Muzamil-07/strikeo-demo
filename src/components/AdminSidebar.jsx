/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from "react";
import { logo } from "../assets";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/slices/User";
import { toast } from "react-toastify";
import {
  BsBoxFill,
  BsFillBagCheckFill,
  BsPersonFillGear,
} from "react-icons/bs";
import { SlCalculator } from "react-icons/sl";
import {
  IoLogOutOutline,
  IoPersonCircleOutline,
  IoAnalyticsOutline,
} from "react-icons/io5";
import { CgInsights } from "react-icons/cg";
import { MdCategory } from "react-icons/md";
import { MdRateReview } from "react-icons/md";
import { FaUserTie, FaUsers } from "react-icons/fa";
import { RxCounterClockwiseClock } from "react-icons/rx";
import { BsShop } from "react-icons/bs";

const AdminSidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");
  const [showNotice, setShowNotice] = useState(true);
  const closeNotice = ()=> setShowNotice(false);
  const user = useSelector((state) => state.user);
  const vendorView = useSelector((state) => state.vendorView);

  const handleLogout = () => {
    dispatch(logout());
    toast.success("You have been logged out!");
    navigate("/admin/login");
  };

  // useEffect(() => {
  // 	// if(user?.details?.role?.type === "StrikeO" && user?.details?.role?.name === "SuperAdmin") setIsVendorView(true);
  // }, [user]);

  useEffect(() => {
    setActiveLink(location.pathname.split("/")[2]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col items-center fixed h-full inset-x-0 top-0 z-[99] bg-primary w-[250px] flex-shrink-0">
      <img
        src={logo}
        alt="logo"
        className="w-20 md:w-32 cursor-pointer my-10"
        onClick={() => navigate("/products")}
      />
      <div className="flex flex-col flex-grow w-full items-start text-white">
        <div className="px-8 flex flex-col w-full gap-6">
          {user?.details?.role?.type === "Vendor" &&
          user?.details?.role?.vendorPermissions.includes("View Sales") ? (
            <Link
              to="/vendor/insights"
              className={`cursor-pointer flex items-center rounded-md px-3 py-2 hover:bg-gray-700 ${
                location.pathname.includes("insights") ? "bg-gray-700" : ""
              }`}
            >
              <div className="w-6 mr-4 inline-block pl-1">
                <CgInsights className="text-3xl" size={"1.3rem"} />
              </div>
              Insights
            </Link>
          ) : (
            <></>
          )}
          {user?.details?.role?.type === "StrikeO" &&
          user?.details?.role?.name === "SuperAdmin" &&
          vendorView?.enabled ? (
            <Link
              to="/vendor/products"
              className={`cursor-pointer hover:bg-gray-700 rounded-md px-3 py-2 ${
                activeLink === "products" ? "bg-gray-700" : ""
              }`}
            >
              <div className="w-6 mr-4 inline-block pl-1">
                <BsBoxFill className="" size={"1rem"} />
              </div>
              Products
            </Link>
          ) : user?.details?.role?.type === "Vendor" &&
            user?.details?.role?.vendorPermissions.includes("View Products") ? (
            <Link
              to="/vendor/products"
              className={`cursor-pointer hover:bg-gray-700 rounded-md px-3 py-2 ${
                activeLink === "products" ? "bg-gray-700" : ""
              }`}
            >
              <div className="w-6 mr-4 inline-block pl-1">
                <BsBoxFill className="" size={"1rem"} />
              </div>
              Products
            </Link>
          ) : (
            <></>
          )}

          {user?.details?.role?.type === "StrikeO" &&
          user?.details?.role?.name === "SuperAdmin" &&
          vendorView?.enabled ? (
            <Link
              to="/vendor/orders"
              className={`cursor-pointer hover:bg-gray-700 rounded-md px-3 py-2 ${
                activeLink === "orders" ? "bg-gray-700" : ""
              }`}
            >
              <div className="w-6 mr-4 inline-block pl-1">
                <BsFillBagCheckFill className=" text-xl" size={"1.1rem"} />
              </div>
              Orders
            </Link>
          ) : user?.details?.role?.type === "Vendor" &&
            user?.details?.role?.vendorPermissions.includes("View Orders") ? (
            <Link
              to="/vendor/orders"
              className={`cursor-pointer hover:bg-gray-700 rounded-md px-3 py-2 ${
                activeLink === "orders" ? "bg-gray-700" : ""
              }`}
            >
              <div className="w-6 mr-4 inline-block pl-1">
                <BsFillBagCheckFill className=" text-xl" size={"1.1rem"} />
              </div>
              Orders
            </Link>
          ) : (
            <></>
          )}

          {user?.details?.role?.type === "StrikeO" &&
            user?.details?.role?.name === "SuperAdmin" && (
              <Link
                to="/admin/vendors"
                className={`cursor-pointer flex items-center rounded-md px-3 py-2 hover:bg-gray-700 ${
                  activeLink === "vendors" ? "bg-gray-700" : ""
                }`}
              >
                <div className="w-6 mr-4 inline-block pl-1">
                  <BsShop className=" text-3xl" size={"1.3rem"} />
                </div>
                Vendors
              </Link>
            )}

          {user?.details?.role?.type === "StrikeO" &&
            user?.details?.role?.name === "SuperAdmin" && (
              <Link
                to="/admin/categories"
                className={`cursor-pointer flex items-center rounded-md px-3 py-2 hover:bg-gray-700 ${
                  activeLink === "categories" ? "bg-gray-700" : ""
                }`}
              >
                <div className="w-6 mr-4 inline-block">
                  <MdCategory className=" text-3xl" size={"1.5rem"} />
                </div>
                Categories
              </Link>
            )}

          {user?.details?.role?.type === "StrikeO" &&
            user?.details?.role?.name === "SuperAdmin" && (
              <Link
                to="/admin/roles"
                className={`cursor-pointer flex items-center rounded-md px-3 py-2 hover:bg-gray-700 ${
                  activeLink === "roles" ? "bg-gray-700" : ""
                }`}
              >
                <div className="w-6 mr-4 inline-block">
                  <BsPersonFillGear className=" text-3xl" size={"1.5rem"} />
                </div>
                Roles
              </Link>
            )}

          {user?.details?.role?.type === "StrikeO" &&
          user?.details?.role?.name === "SuperAdmin" &&
          vendorView?.enabled ? (
            <Link
              to="/vendor/employees"
              className={`cursor-pointer flex items-center rounded-md px-3 py-2 hover:bg-gray-700 ${
                activeLink === "employees" ? "bg-gray-700" : ""
              }`}
            >
              <div className="w-6 mr-4 inline-block pl-1">
                <FaUserTie className=" text-3xl" size={"1.3rem"} />
              </div>
              Employees
            </Link>
          ) : user?.details?.role?.type === "Vendor" &&
            user?.details?.role?.vendorPermissions.includes(
              "View Employees"
            ) ? (
            <Link
              to="/vendor/employees"
              className={`cursor-pointer flex items-center rounded-md px-3 py-2 hover:bg-gray-700 ${
                activeLink === "employees" ? "bg-gray-700" : ""
              }`}
            >
              <div className="w-6 mr-4 inline-block pl-1">
                <FaUserTie className=" text-3xl" size={"1.3rem"} />
              </div>
              Employees
            </Link>
          ) : (
            <></>
          )}

          {user?.details?.role?.type === "StrikeO" &&
            user?.details?.role?.name === "SuperAdmin" && (
              <Link
                to="/admin/users"
                className={`cursor-pointer flex items-center rounded-md px-3 py-2 hover:bg-gray-700 ${
                  activeLink === "users" ? "bg-gray-700" : ""
                }`}
              >
                <div className="w-6 mr-4 inline-block pl-1">
                  <FaUsers className=" text-3xl" size={"1.3rem"} />
                </div>
                Users
              </Link>
            )}
          {user?.details?.role?.type === "StrikeO" &&
            user?.details?.role?.name === "SuperAdmin" && (
              <Link
                to="/admin/sales"
                className={`cursor-pointer flex items-center rounded-md px-3 py-2 hover:bg-gray-700 ${
                  activeLink === "sales" ? "bg-gray-700" : ""
                }`}
              >
                <div className="w-6 mr-4 inline-block pl-1">
                  <SlCalculator className=" text-3xl" size={"1.3rem"} />
                </div>
                Sales
              </Link>
            )}
          {user?.details?.role?.type === "StrikeO" &&
            user?.details?.role?.name === "SuperAdmin" && (
              <Link
                to="/admin/agents"
                className={`cursor-pointer flex items-center rounded-md px-3 py-2 hover:bg-gray-700 ${
                  activeLink === "agents" ? "bg-gray-700" : ""
                }`}
              >
                <div className="w-6 h-6 mr-4 inline-block pl-1">
                  <svg
                    id="SvgjsSvg1001"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xmlns:svgjs="http://svgjs.com/svgjs"
                  >
                    <defs id="SvgjsDefs1002"></defs>
                    <g id="SvgjsG1008">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 64 64"
                        width="25"
                        height="25"
                      >
                        <path
                          fill="none"
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M32 33c2.806 1.825 3.87 5.809 5.167 9.5a1.9 1.9 0 0 1-1.8 2.5h0a1.9 1.9 0 0 1-1.8-1.3l-1.307-3.916A7 7 0 0 0 25.619 35h-5.033a3.19 3.19 0 0 1-3.186-3.182v-.178a3.152 3.152 0 0 1 .248-1.231 55.382 55.382 0 0 1 5.111-9.878 5.242 5.242 0 0 1 3.709-2.244 2.361 2.361 0 0 1 2.638 1.3 2.9 2.9 0 0 1 .057 2.124l-.885 2.656A2 2 0 0 0 30.175 27h4.144a1.5 1.5 0 0 1 1.423 1.974h0A1.5 1.5 0 0 1 34.319 30h-6.036a4 4 0 0 1-3.8-2.735L24.4 27M41.03 48h-9.77M41.4 52h-14"
                          className="colorStroke414042 svgStroke"
                        ></path>
                        <path
                          fill="none"
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12.98 41a11.19 11.19 0 0 1 7.64-3h3.25a6 6 0 0 1 5.77 4.35L32.4 52H12.18a2.787 2.787 0 0 1-2.78-2.78A11.054 11.054 0 0 1 10.69 44m2.71 8a6 6 0 0 0 12 0m32.63-3.82v.01A5.94 5.94 0 0 1 59.4 52a6 6 0 0 1-12 0v-.06m-2 .06h-6c2.623-4.372 3.083-11.718 2.374-18.917A3.886 3.886 0 0 1 44.4 29h0c1.569 5.583 3.089 11.209 6.09 15.55M38.4 26l3 1"
                          className="colorStroke414042 svgStroke"
                        ></path>
                        <path
                          fill="none"
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M45.43 52.64c-.02-.21-.03-.42-.03-.64A8 8 0 0 1 60 47.49Z"
                          className="colorStroke414042 svgStroke"
                        ></path>
                        <rect
                          width="6"
                          height="8"
                          x="29.4"
                          y="10"
                          fill="none"
                          stroke="#fff"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          rx="3"
                          class="colorStroke414042 svgStroke"
                        ></rect>
                        <path
                          fill="none"
                          stroke="#fff"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15.46 13.765 23.4 18l-7.058 13.235L8.4 27zM49.4 27.917c0 1.61-.933 2.916-2.083 2.916S44.4 29.111 44.4 27.5s1.766-2.5 2.917-2.5 2.083 1.306 2.083 2.917ZM6 41h11M7 49h5M15 49h2M11 10h8M6 20h9M7 17h1"
                          class="colorStroke414042 svgStroke"
                        ></path>
                      </svg>
                    </g>
                  </svg>
                </div>
                Agents
              </Link>
            )}

          {user?.details?.role?.type === "StrikeO" &&
            user?.details?.role?.name === "SuperAdmin" && (
              <Link
                to="/admin/review-products"
                className={`cursor-pointer flex items-center rounded-md px-3 py-2 hover:bg-gray-700 ${
                  activeLink === "review-products" ? "bg-gray-700" : ""
                }`}
              >
                <div className="w-6 mr-4 inline-block">
                  <MdRateReview className=" text-3xl" size={"1.5rem"} />
                </div>
                Review Products
              </Link>
            )}

          {user?.details?.role?.type === "StrikeO" &&
            user?.details?.role?.name === "SuperAdmin" && (
              <Link
                to="/admin/analytics"
                className={`cursor-pointer flex items-center rounded-md px-3 py-2 hover:bg-gray-700 ${
                  activeLink === "analytics" ? "bg-gray-700" : ""
                }`}
              >
                <div className="w-6 mr-4 inline-block">
                  <IoAnalyticsOutline className=" text-3xl" size={"1.5rem"} />
                </div>
                Analytics
              </Link>
            )}

          {/* {user?.details?.role?.type === "StrikeO" && user?.details?.role?.name === "SuperAdmin" && (
						<Link
							to="/admin/sales"
							className={`cursor-pointer flex items-center rounded-md px-3 py-2 hover:bg-gray-700 ${
								activeLink === "sales" ? "bg-gray-700" : ""
							}`}>
							<div className="w-6 mr-4 inline-block">
								<CiWallet className=" text-3xl" size={"1.5rem"} />
							</div>
							Sales
						</Link>
					)} */}

          {user?.details?.role?.type === "Vendor" &&
            user?.details?.role?.name === "Admin" && (
              <Link
                to="/vendor/logs"
                className={`cursor-pointer flex items-center rounded-md px-3 py-2 hover:bg-gray-700 ${
                  activeLink === "logs" ? "bg-gray-700" : ""
                }`}
              >
                <div className="w-6 mr-4 inline-block">
                  <RxCounterClockwiseClock
                    className=" text-3xl"
                    size={"1.5rem"}
                  />
                </div>
                Activity Logs
              </Link>
            )}
        </div>
        {user && user?.details?.role?.type === "Vendor" && showNotice && (
          <div
            id="dropdown-cta"
            class="mx-5 p-4 mt-6 rounded-lg bg-gray-700"
            role="alert"
          >
            <div class="flex items-center mb-3">
              <span class="bg-primary text-white text-sm font-semibold me-2 px-2.5 py-0.5 rounded">
                Notice
              </span>
              <button
                type="button"
                class="ms-auto -mx-1.5 -my-1.5 bg-primary inline-flex justify-center items-center w-6 h-6 text-white-900 rounded-lg focus:ring-1 focus:ring-gray-400 p-1 hover:bg-gray-500 h-6 w-6  "
                onClick={closeNotice}
                aria-label="Close"
              >
                <span class="sr-only">Close</span>
                <svg
                  class="w-2.5 h-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
              </button>
            </div>
            <p class="mb-3 text-sm text-white-700">
              This is a beta version of website. A new version will soon be
              released.
            </p>
            <p class="mb-3 text-sm text-white-700">
              For any query, contact at following email:
            </p>
            <div class="text-sm text-white-700 underline font-medium hover:text-gray-300 ">
              {" "}
              <a href="mailto: support@strikeo.com">support@strikeo.com</a>
            </div>
          </div>
        )}
        <div className="w-full mt-auto">
          <div className="flex items-center mt-8 bg-gray-800 py-3 px-3 gap-3">
            <IoPersonCircleOutline className="inline-block text-3xl" />
            <div>
              <p className="text-sm">{`${user?.details?.firstName} ${user?.details?.lastName ?? ""}`}</p>
              <p className="text-xs">
                {user?.details?.role?.type === "StrikeO"
                  ? user?.details?.email
                  : user?.details?.contact?.email}
              </p>
            </div>
            <IoLogOutOutline
              className="inline-block ml-auto text-2xl cursor-pointer"
              onClick={() => handleLogout()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;

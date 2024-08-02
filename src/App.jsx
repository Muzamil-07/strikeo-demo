import { lazy, useEffect, useState, Suspense } from "react";
import "@fontsource/tenor-sans";
import "animate.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { persistStore } from "redux-persist";
import { Routes, Route, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import Cookies from "js-cookie";
import { store as reduxStore } from "./redux/store";
import ProtectedRoute from "./components/ProtectedRoute";
const ProductDetails = lazy(() => import("./pages/User/ProductDetails"));
const Billing = lazy(() => import("./pages/User/Billing"));
import AdminLogin from "./pages/Admin/Login";
const Products = lazy(() => import("./pages/Vendor/Products"));
const Categories = lazy(() => import("./pages/Admin/Categories"));
const VendorOrders = lazy(() => import("./pages/Vendor/Orders"));
const Roles = lazy(() => import("./pages/Admin/Roles"));
const Users = lazy(() => import("./pages/Admin/Users"));
const UserOrders = lazy(() => import("./pages/User/Orders"));
const UserOrdersMobile = lazy(() => import("./pages/User/mobile/pages/Orders"));
import Reset from "./pages/Reset";
import OrderConfirmation from "./pages/User/OrderConfirmation";
const Employees = lazy(() => import("./pages/Vendor/Employees"));
import http from "./api";
const Checkout = lazy(() => import("./pages/User/Checkout"));
const Vendors = lazy(() => import("./pages/Admin/Vendors"));
const Sales = lazy(() => import("./pages/Admin/Sales"));
import CreatePassword from "./pages/CreatePassword";
const ActivityLogs = lazy(() => import("./pages/Vendor/ActivityLogs"));
const Agents = lazy(() => import("./pages/Admin/Agents"));
const ReviewProducts = lazy(() => import("./pages/Admin/ReviewProducts"));
const Insights = lazy(() => import("./pages/Vendor/Insights"));
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/Term&conditions";
import RefundPolicy from "./pages/RefundPolicy";
import Faq from "./pages/Faq";
import JoinMarketplace from "./pages/JoinMarketplace";
import Contact from "./pages/Contact";
const ProductsPage = lazy(() => import("./pages/User/Products"));
import Experience from "./pages/User/Experience/Experience";
import Login from "./pages/User/Login/Login";
import Register from "./pages/User/Register/Register";
const ReviewUserProducts = lazy(() => import("./pages/User/ReviewProducts"));
import { isMobileDevice } from "./pages/User/Experience/utils/trackDevice";
const ProductsPageMobile = lazy(() =>
  import("./pages/User/mobile/pages/Products/ProductsPageMobile")
);
const ProductDetailsMobile = lazy(() =>
  import("./pages/User/mobile/pages/ProductDetails/ProductDetailsMobile")
);
const CheckoutMobile = lazy(() => import("./pages/User/mobile/pages/Checkout"));
const ReviewProductsMobile = lazy(() =>
  import("./pages/User/mobile/pages/ReviewProducts/ReviewProductsMobile")
);
import { theme } from "./pages/User/mobile/theme/themes";
import CookiesPage from "./pages/Cookies";
import PrivacyPolicyMobile from "./pages/User/mobile/pages/PrivacyPolicy";
import CookiesMobile from "./pages/User/mobile/pages/CookiesMobile";
import PageContainer from "./components/PageContainer/PageContainer";
import AboutMobile from "./pages/User/mobile/pages/About/AboutMobile";
import TermsAndConditionsMobile from "./pages/User/mobile/pages/Term&conditions/TermsAndConditionsMobile";
import RefundPolicyMobile from "./pages/User/mobile/pages/RefundPolicy";

function App() {
  const user = useSelector((state) => state.user);
  const location = useLocation();
  const allowedAdminRoles = ["StrikeO", "admin", "employee", "Vendor"];
  const [clientToken, setClientToken] = useState(null);
  const [load, setLoad] = useState(true);
  const getClientToken = async () => {
    try {
      const res = await http.get("/payment/client-token");
      setClientToken(res.data.data);
    } catch (error) {
      //
    }
  };
  const purgeStore = async () => {
    const persistor = persistStore(reduxStore);
    await persistor.purge();
  };
  useEffect(() => {
    getClientToken();
    if (!Cookies.get("jwt")) {
      purgeStore();
    }
  }, []);
  const isMobile = isMobileDevice();
  return (
    <div
      className={`w-screen flex flex-col overflow-x-hidden h-screen
     `}
    >
      {location.pathname === "/" && load && (
        <div
          style={{
            background: "black",
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 99999999,
          }}
        >
          <img
            src={isMobile ? "port.gif" : "logo.gif"}
            // className='logo'
            style={{ width: isMobile ? "280px" : "600px" }}
          />
        </div>
      )}
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route
            path="/checkout"
            element={
              isMobile ? (
                <Suspense>
                  <ProtectedRoute>
                    <CheckoutMobile />
                  </ProtectedRoute>
                </Suspense>
              ) : (
                <Suspense>
                  <ProtectedRoute>
                    <Checkout clientToken={clientToken} />
                  </ProtectedRoute>
                </Suspense>
              )
            }
          />
          <Route
            path=""
            element={
              // <Suspense
              //   fallback={
              //     <div
              //       style={{
              //         background: 'black',
              //         position: 'absolute',
              //         top: 0,
              //         left: 0,
              //         width: '100vw',
              //         height: '100vh',
              //         zIndex: 99999999
              //       }}
              //     >
              //       <ReactPlayer
              //         url={isMobile ? '/port.webm' : '/logo.webm'}
              //         playing
              //         muted
              //         controls={false}
              //         width='100vw'
              //         height='100vh'
              //         playsinline
              //         style={{
              //           objectFit: 'cover',
              //           position: 'fixed',
              //           top: 0,
              //           left: 0
              //         }}
              //         loop
              //       />
              //     </div>
              //     <div class='logo-container' style={{ background: 'black' }}>
              //       <img
              //         src='/bike_logo.png'
              //         alt='Logo'
              //         class='logo'
              //         style={{ width: isMobile ? '100px' : '180px' }}
              //       />
              //     </div>
              //   }
              // >
              // </Suspense>
              <Experience setLoad={setLoad} />
            }
          />
          <Route
            path="/about"
            element={
              isMobile ? (
                <Suspense>
                  <AboutMobile />
                </Suspense>
              ) : (
                <Suspense>
                  <About />
                </Suspense>
              )
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/products/category/:category"
            element={
              isMobile ? (
                <Suspense>
                  <ProductsPageMobile />
                </Suspense>
              ) : (
                <Suspense>
                  <ProductsPage />
                </Suspense>
              )
            }
          />
          <Route
            path="/products/:id"
            element={
              isMobile ? (
                <Suspense>
                  <ProductDetailsMobile />
                </Suspense>
              ) : (
                <Suspense>
                  <ProductDetails />
                </Suspense>
              )
            }
          />
          <Route path="/faq" element={<Faq />} />
          <Route
            path="/cookies"
            element={isMobile ? <CookiesMobile /> : <CookiesPage />}
          />
          <Route path="/join-marketplace" element={<JoinMarketplace />} />
          <Route
            path="/privacy-policy"
            element={isMobile ? <PrivacyPolicyMobile /> : <PrivacyPolicy />}
          />
          <Route
            path="/terms-conditions"
            element={
              isMobile ? <TermsAndConditionsMobile /> : <TermsConditions />
            }
          />
          <Route
            path="/refund-policy"
            element={isMobile ? <RefundPolicyMobile /> : <RefundPolicy />}
          />
          <Route
            path="/review-products"
            element={
              isMobile ? (
                <Suspense>
                  <ProtectedRoute>
                    <ReviewProductsMobile />
                  </ProtectedRoute>
                </Suspense>
              ) : (
                <Suspense>
                  <ProtectedRoute>
                    <ReviewUserProducts />
                  </ProtectedRoute>
                </Suspense>
              )
            }
          />

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset-password" element={<Reset />} />
          <Route path="/create-password" element={<CreatePassword />} />
          <Route path="/order" element={<OrderConfirmation />} />

          <Route
            path="/orders"
            element={
              isMobile ? (
                <Suspense>
                  <ProtectedRoute>
                    <UserOrdersMobile />
                  </ProtectedRoute>
                </Suspense>
              ) : (
                <Suspense>
                  <ProtectedRoute>
                    <UserOrders />
                  </ProtectedRoute>
                </Suspense>
              )
            }
          />
          {user.isLoggedIn && (
            <>
              {/* <Route
              path="/checkout"
              element={<Checkout clientToken={clientToken} />}
            /> */}
              <Route
                path="/billing/details"
                element={
                  <Suspense>
                    <Billing />
                  </Suspense>
                }
              />
            </>
          )}
          {user.isLoggedIn &&
            allowedAdminRoles.includes(user.details?.role?.type) && (
              <>
                {/* Admin Routes */}

                <Route path="/" element={<PageContainer />}>
                  <Route
                    path="/admin/review-products"
                    element={
                      <Suspense>
                        <ReviewProducts />
                      </Suspense>
                    }
                  />
                  <Route
                    path="/admin/categories"
                    element={
                      <Suspense>
                        <Categories />
                      </Suspense>
                    }
                  />
                  <Route
                    path="/admin/roles"
                    element={
                      <Suspense>
                        <Roles />
                      </Suspense>
                    }
                  />
                  <Route
                    path="/admin/users"
                    element={
                      <Suspense>
                        <Users />
                      </Suspense>
                    }
                  />
                  <Route
                    path="/admin/vendors"
                    element={
                      <Suspense>
                        <Vendors />
                      </Suspense>
                    }
                  />
                  <Route
                    path="/admin/agents"
                    element={
                      <Suspense>
                        <Agents />
                      </Suspense>
                    }
                  />
                  <Route path="/admin/analytics" element={<>Analytics</>} />
                  {/* Vendor Routes */}
                  <Route
                    path="/vendor/products"
                    element={
                      <Suspense>
                        <Products />
                      </Suspense>
                    }
                  />
                  <Route
                    path="/vendor/employees"
                    element={
                      <Suspense>
                        <Employees />
                      </Suspense>
                    }
                  />
                  <Route
                    path="/vendor/orders"
                    element={
                      <Suspense>
                        <VendorOrders />
                      </Suspense>
                    }
                  />
                  <Route
                    path="/admin/sales"
                    element={
                      <Suspense>
                        <Sales />
                      </Suspense>
                    }
                  />
                  <Route
                    path="/vendor/logs"
                    element={
                      <Suspense>
                        <ActivityLogs />
                      </Suspense>
                    }
                  />
                  <Route
                    path="/vendor/insights"
                    element={
                      <Suspense>
                        <Insights />
                      </Suspense>
                    }
                  />
                </Route>
              </>
            )}
          <Route path="/admin/login" element={<AdminLogin />} />
        </Routes>
        <ToastContainer
          position="bottom-center"
          autoClose={3500}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          draggable
          theme="light"
          className="z-[200000000]"
        />
      </ThemeProvider>
    </div>
  );
}

export default App;

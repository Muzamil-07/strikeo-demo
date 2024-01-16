import { useEffect, useState } from 'react'
import 'animate.css'
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation
} from 'react-router-dom'
import Home from './pages/User/Home'
// import Register from "./pages/User/Register";
import Shop from './pages/User/Shop'
import Welcome from './pages/User/Welcome'
import ProductDetails from './pages/User/ProductDetails'
import Billing from './pages/User/Billing'
// import Login from "./pages/User/Login";
import AdminLogin from './pages/Admin/Login'
import { useSelector, useDispatch } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import { setUser } from './redux/slices/User'
import { setCart } from './redux/slices/Cart'
import { refreshTheme } from './redux/slices/Theme'
import UserService from './services/User'
import CartService from './services/Cart'
import Products from './pages/Vendor/Products'
import Categories from './pages/Admin/Categories'
import VendorOrders from './pages/Vendor/Orders'
import Roles from './pages/Admin/Roles'
import Users from './pages/Admin/Users'
import UserOrders from './pages/User/Orders'
import Reset from './pages/Reset'
import OrderConfirmation from './pages/User/OrderConfirmation'
import Profile from './pages/Profile'
import Employees from './pages/Vendor/Employees'
import { setCategories } from './redux/slices/Category'
import http from './api'
import Checkout from './pages/User/Checkout'
import Vendors from './pages/Admin/Vendors'
import Sales from './pages/Admin/Sales'
import CreatePassword from './pages/CreatePassword'
import ActivityLogs from './pages/Vendor/ActivityLogs'
import Agents from './pages/Admin/Agents'
import { setBillingAddress } from './redux/slices/Billing'
import ReviewProducts from './pages/Admin/ReviewProducts'
import Insights from './pages/Vendor/Insights'
import LandingPage from './pages/User/Landing'
import About from './pages/About'
import PrivacyPolicy from './pages/PrivacyPolicy'
import RefundPolicy from './pages/RefundPolicy'
import Faq from './pages/Faq'
import JoinMarketplace from './pages/JoinMarketplace'
import Cookies from './pages/Cookies'
import Contact from './pages/Contact'
import ProductsPage from './pages/User/Products'
import Experience from './pages/User/Experience/Experience'
import Login from './pages/User/Login/Login'
import Register from './pages/User/Register/Register'
import ReviewUserProducts from './pages/User/ReviewProducts'

function App () {
  const user = useSelector(state => state.user)
  const theme = useSelector(state => state.theme)

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const location = useLocation()

  const allowedAdminRoles = ['StrikeO', 'admin', 'employee', 'Vendor']
  const [isAuthenticating, setIsAuthenticating] = useState(true)
  const [clientToken, setClientToken] = useState(null)

  // const getUser = async () => {
  //   try {
  //     const res = await UserService.getContext()
  //     // eslint-disable-next-line no-unused-vars
  //     const { role, ...details } = res.data.data
  //     dispatch(setUser(res.data.data))
  //     if (role?.type === 'StrikeO') {
  //       if (
  //         location.pathname.startsWith('/admin') &&
  //         location.pathname !== '/admin/login'
  //       ) {
  //         navigate(location.pathname)
  //       } else {
  //         navigate('/admin/categories')
  //       }
  //     } else if (role?.type === 'Vendor') {
  //       navigate('/vendor/insights')
  //     } else if (role === 'employee') {
  //       navigate('/vendor/products')
  //     } else if (role === 'user' && !location.pathname.startsWith('/admin')) {
  //       if (['/', '/register', '/login'].includes(location.pathname)) {
  //         navigate('/welcome')
  //         return
  //       }
  //       navigate(location.pathname + location.search)
  //     }
  //   } catch (error) {
  //     console.log(error)
  //   }
  //   setIsAuthenticating(false)
  // }

  // const getUserCart = async () => {
  //   try {
  //     const res = await CartService.getCart(user.details.id)
  //     dispatch(setCart(res.data.data))
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // const getCategories = () => {
  //   http
  //     .get('/category?all=true')
  //     .then(res => {
  //       dispatch(
  //         setCategories({
  //           categories: res.data.data,
  //           selectedCategory: res.data.data[0]?.name
  //         })
  //       )
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }

  const getClientToken = async () => {
    try {
      const res = await http.get('/payment/client-token')
      setClientToken(res.data.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getClientToken()
  }, [])

  // useEffect(() => {
  //   if (user && user.details && user.details?.role?.type === 'User') {
  //     getUserCart()
  //     dispatch(
  //       setBillingAddress({
  //         ...user.details.billing,
  //         email: user.details.email
  //       })
  //     )
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [user])

  // useEffect(() => {
  //   const token = localStorage.getItem('token')
  //   dispatch(refreshTheme())

  //   getCategories()

  //   if (token) {
  //     getUser()
  //   } else {
  //     setIsAuthenticating(false)
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

  return (
    <div
      className={`w-screen flex flex-col overflow-x-hidden font-poppins text-sm md:text-base bg-[url('/loading.png')] h-screen bg-cover bg-no-repeat bg-center bg-fixed
     `}
    >
      <Routes>
        <Route
          path='/checkout'
          element={<Checkout clientToken={clientToken} />}
        />
        {user.isLoggedIn && (
          <Route path='/choose-category' element={<Home />} />
        )}
        <Route path='' element={<LandingPage />} />
        <Route path='/experience' element={<Experience />} />
        {/* <Route path="/test" element={<Test />} /> */}
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/products/category/:category' element={<ProductsPage />} />
        <Route path='/products/:id' element={<ProductDetails />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/cookies' element={<Cookies />} />
        <Route path='/join-marketplace' element={<JoinMarketplace />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/refund-policy' element={<RefundPolicy />} />
        <Route path='/review-products' element={<ReviewUserProducts />} />

        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/reset-password' element={<Reset />} />
        <Route path='/create-password' element={<CreatePassword />} />
        <Route path='/order' element={<OrderConfirmation />} />
        {user.isLoggedIn && (
          <>
            <Route path='/welcome' element={<Welcome />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/orders' element={<UserOrders />} />
            {/* <Route
              path="/checkout"
              element={<Checkout clientToken={clientToken} />}
            /> */}
            <Route path='/billing/details' element={<Billing />} />
          </>
        )}
        {user.isLoggedIn &&
          allowedAdminRoles.includes(user.details?.role?.type) && (
            <>
              {/* Admin Routes */}
              <Route
                path='/admin/review-products'
                element={<ReviewProducts />}
              />
              <Route path='/admin/categories' element={<Categories />} />
              <Route path='/admin/roles' element={<Roles />} />
              <Route path='/admin/users' element={<Users />} />
              <Route path='/admin/vendors' element={<Vendors />} />
              <Route path='/admin/agents' element={<Agents />} />
              <Route path='/admin/analytics' element={<>Analytics</>} />
              {/* Vendor Routes */}
              <Route path='/vendor/products' element={<Products />} />
              <Route path='/vendor/employees' element={<Employees />} />
              <Route path='/vendor/orders' element={<VendorOrders />} />
              <Route path='/admin/sales' element={<Sales />} />
              <Route path='/vendor/logs' element={<ActivityLogs />} />
              <Route path='/vendor/insights' element={<Insights />} />
            </>
          )}
        <Route path='/admin/login' element={<AdminLogin />} />
        {!isAuthenticating && (
          <Route path='*' element={<Navigate to='/register' replace />} />
        )}
      </Routes>
      <ToastContainer
        position='bottom-center'
        autoClose={3500}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        theme='light'
        className='z-[200000000]'
      />
    </div>
  )
}

export default App

import { Suspense, useEffect, useState, lazy } from 'react'
import 'animate.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import Landing from './pages/User/Landing'
// Lazy load components
const Home = lazy(() => import('./pages/User/Home'))
const Welcome = lazy(() => import('./pages/User/Welcome'))
const ProductDetails = lazy(() => import('./pages/User/ProductDetails'))
const Billing = lazy(() => import('./pages/User/Billing'))
const Shop = lazy(() => import('./pages/User/Shop'))
const AdminLogin = lazy(() => import('./pages/Admin/Login'))
const Products = lazy(() => import('./pages/Vendor/Products'))
const Categories = lazy(() => import('./pages/Admin/Categories'))
const VendorOrders = lazy(() => import('./pages/Vendor/Orders'))
const Roles = lazy(() => import('./pages/Admin/Roles'))
const Users = lazy(() => import('./pages/Admin/Users'))
const UserOrders = lazy(() => import('./pages/User/Orders'))
const Reset = lazy(() => import('./pages/Reset'))
const OrderConfirmation = lazy(() => import('./pages/User/OrderConfirmation'))
const Profile = lazy(() => import('./pages/Profile'))
const Employees = lazy(() => import('./pages/Vendor/Employees'))
const http = lazy(() => import('./api'))
const Checkout = lazy(() => import('./pages/User/Checkout'))
const Vendors = lazy(() => import('./pages/Admin/Vendors'))
const Sales = lazy(() => import('./pages/Admin/Sales'))
const CreatePassword = lazy(() => import('./pages/CreatePassword'))
const ActivityLogs = lazy(() => import('./pages/Vendor/ActivityLogs'))
const Agents = lazy(() => import('./pages/Admin/Agents'))
const ReviewProducts = lazy(() => import('./pages/Admin/ReviewProducts'))
const Insights = lazy(() => import('./pages/Vendor/Insights'))
const LandingPage = lazy(() => import('./pages/User/Landing'))
const About = lazy(() => import('./pages/About'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const RefundPolicy = lazy(() => import('./pages/RefundPolicy'))
const Faq = lazy(() => import('./pages/Faq'))
const JoinMarketplace = lazy(() => import('./pages/JoinMarketplace'))
const Cookies = lazy(() => import('./pages/Cookies'))
const Contact = lazy(() => import('./pages/Contact'))
const ProductsPage = lazy(() => import('./pages/User/Products'))
const Experience = lazy(() => import('./pages/User/Experience/Experience'))
const Login = lazy(() => import('./pages/User/Login/Login'))
const Register = lazy(() => import('./pages/User/Register/Register'))
const ReviewUserProducts = lazy(() => import('./pages/User/ReviewProducts'))

function App () {
  const user = useSelector(state => state.user)

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
  // const [contentVisibility, setContentVisibility] = useState(false)

  return (
    <div
      className={`w-screen flex flex-col overflow-x-hidden font-poppins text-sm md:text-base bg-[url('/loading.webp')] h-screen bg-cover bg-no-repeat bg-center bg-fixed
     `}
    >
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path='/checkout'
            element={<Checkout clientToken={clientToken} />}
          />
          {user.isLoggedIn && (
            <Route path='/choose-category' element={<Home />} />
          )}
          <Route path='' element={<Landing />} />
          <Route path='/experience' element={<Experience />} />
          {/* <Route path="/test" element={<Test />} /> */}
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route
            path='/products/category/:category'
            element={<ProductsPage />}
          />
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
      </Suspense>
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

import { Suspense, useCallback, useEffect, useState } from 'react'
import { logo } from '../../../assets'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import UserService from '../../../services/User'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useDispatch } from 'react-redux'
import { login } from '../../../redux/slices/User'
import { toggleTheme } from '../../../redux/slices/Theme'
import { environment } from '../../../constants'
import http from '../../../api'
import { Modal } from 'flowbite-react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { useLoginUserMutation } from '../../../services/nodeApi'
import Cook from 'js-cookie'
import { setBillingAddress } from '../../../redux/slices/Billing'

const Login = () => {
  const Cookies = Cook.withAttributes({
    path: '/',
    sameSite: 'Strict',
    secure: true
  })

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [searchParams, setSearchParams] = useSearchParams()
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(true)
  const [modelIndex, setModelIndex] = useState(1)
  const [listener, setListener] = useState(null)
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const toastOptions = {
    position: 'bottom-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark'
  }

  const [errors, setErrors] = useState({
    email: null,
    password: null
  })
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false)

  const [loginUser] = useLoginUserMutation()

  const handleClose = () => {
    setEmail('')
    setEmailError('')
    setIsEmailModalOpen(false)
  }

  // const handleOpen = () => {
  //   setIsEmailModalOpen(true)
  // }

  const handleInputChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const validateForm = () => {
    let errs = {}

    if (!form.email) {
      errs.email = 'Email cannot be empty'
    }

    if (!form.password) {
      errs.password = 'Password cannot be empty'
    }

    const EMAIL_REGEX = /^\S+@\S+\.\S+$/

    if (!EMAIL_REGEX.test(form.email)) {
      errs.email = 'Invalid email address'
    }

    return errs
  }

  const validateEmail = () => {
    let err = ''

    if (!email) {
      err = 'Email cannot be empty'
      setEmailError(err)
      return
    }

    const EMAIL_REGEX = /^\S+@\S+\.\S+$/

    if (!EMAIL_REGEX.test(email)) {
      err = 'Invalid email address'
      setEmailError(err)
      return
    }

    setEmailError(err)
  }

  const handleForgotPassword = e => {
    e.preventDefault()
    setIsEmailModalOpen(true)
  }

  const resetPassword = async e => {
    e.preventDefault()

    if (emailError) {
      return
    }

    try {
      const res = await http.post('/user/forgot-password', {
        email
      })

      handleClose()
      toast.success('Email sent successfully!')
    } catch (error) {
      console.log(error)
      if (error.response?.data?.message === 'Email not found!') {
        toast.error('Email not found!')
      } else {
        toast.error('Something went wrong!')
      }
    }
  }

  const handleSubmit = async e => {
    e.preventDefault()

    const errs = validateForm()

    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    } else {
      setErrors({})

      const response = await loginUser({
        email: form.email,
        password: form.password
      })

      if ('error' in response) {
        toast.error(response.error.data.message, toastOptions)
      } else {
        const { token, role, ...details } = response.data.data

        if (role.type === 'User') {
          Cookies.set('jwt', token)
          dispatch(login({ token, details }))
          const billingDetails = details.billing
          if (billingDetails) dispatch(setBillingAddress(billingDetails))
          toast.success('Logged in successfully')
          navigate('/experience', { replace: true })
        } else {
          toast.error('Login failed!')
        }
      }
    }
  }

  const handler = useCallback(e => {
    handleMessage(e)
    e.returnValue = true
  }, [])

  const oAuthProviderWindow = (url, provider) => {
    setListener(() => handler)
    window.open(
      url,
      'Login',
      'location=1,status=1,scrollbars=1, width=400,height=400'
    )
    window.addEventListener('message', handler)
  }

  const handleMessage = (message, provider) => {
    if (message.data?.user?.token) {
      const { token, role, ...details } = message.data?.user
      dispatch(login({ token, details }))
      const billingDetails = details.billing
      if (billingDetails) dispatch(setBillingAddress(billingDetails))
      Cookies.set('jwt', token)

      let successMessage
      // if (message.data.linked) {
      //   successMessage = `${provider} account linked successfully`
      // } else {
      successMessage = 'Logged in successfully'
      // }
      toast.success(successMessage)
      navigate('/experience', { replace: true })

      window.removeEventListener('message', listener)
      setListener(null)
    }

    if (message.data?.error) {
      toast.error(message.data.error)
      window.removeEventListener('message', listener)
      setListener(null)
    }
  }

  const continueWithGoogle = async e => {
    e.preventDefault()

    try {
      oAuthProviderWindow(environment.api_url + '/user/auth/google', 'Google')
    } catch (error) {
      console.log(error.response?.data?.message ?? error)

      toast.error('Something went wrong')
    }
  }

  const continueWithFacebook = async e => {
    e.preventDefault()

    try {
      oAuthProviderWindow(
        environment.api_url + '/user/auth/facebook',
        'Facebook'
      )
    } catch (error) {
      console.log(error.response?.data?.message ?? error)

      toast.error('Something went wrong')
    }
  }

  const verifyUser = async () => {
    try {
      const email = searchParams.get('email')
      const token = searchParams.get('token')

      const res = await http.post('/user/verify-email', {
        email,
        token
      })

      toast.success('Email verified successfully!')
    } catch (error) {
      console.log(error.response?.data?.message ?? error)

      if (error.response?.data?.message) {
        toast.error(error.response.data.message)
      }
    }
  }

  // useEffect(() => {
  //   if (listener) {
  //     window.addEventListener('message', listener)

  //     return () => {
  //       window.removeEventListener('message', listener)
  //     }
  //   }
  // }, [listener])

  useEffect(() => {
    const email = searchParams.get('email')
    const token = searchParams.get('token')

    if (email && token) {
      verifyUser()
    }
  }, [])

  return (
    <Modal show={true} size={'5xl'} className='bg-black bg-opacity-80'>
      <Modal.Body className='bg-theme_quaternary rounded-lg'>
        <div className='pb-4'>
          <h3 className='text-theme_primary text-center font-bold text-3xl'>
            Log In
          </h3>
        </div>
        <div className='space-y-2 px-72'>
          <form className='login-form flex flex-col gap-6'>
            <div>
              <input
                type='email'
                placeholder='Email*'
                name='email'
                onChange={handleInputChange}
                className='border-0 border-b border-theme_primary py-1 bg-transparent w-full focus:ring-0'
              />
              {errors.email && (
                <p className='text-red-500 text-sm'>{errors.email}</p>
              )}
            </div>
            <div className='relative'>
              <input
                type='password'
                name='password'
                placeholder='Password*'
                onChange={handleInputChange}
                className='border-0 border-b border-theme_primary py-1 bg-transparent w-full focus:ring-0'
              />
              <button
                type='button'
                className='absolute right-4 top-1 text-theme_secondary'
              >
                <FaEyeSlash size='1.5rem' />
              </button>
              {errors.password && (
                <p className='text-red-500 text-sm'>{errors.password}</p>
              )}
            </div>
            <div className='flex items-center gap-4'>
              <input
                type='checkbox'
                className='rounded bg-theme_secondary focus:ring-0'
              />
              <span className='text-theme_primary text-sm'>
                Keep me Signed in
              </span>
            </div>
            <div className='flex flex-col space-y-2'>
              <button
                type='button'
                className='bg-theme_primary text-white px-4 py-2 rounded-md'
                onClick={handleSubmit}
              >
                Log in
              </button>
            </div>
          </form>
          <div className='py-2'>
            <button>Forgot Password?</button>
          </div>
          <div className='flex items-center gap-4 mx-auto'>
            <hr className='w-40 border-transparent bg-theme_primary' />
            <span>Or</span>
            <hr className='w-40 border-transparent bg-theme_primary' />
            {/* <hr className="w-28 border-transparent bg-theme_primary" />
          <span>Or continue With</span>
          <hr className="w-24 border-transparent bg-theme_primary" /> */}
          </div>
          <div className='flex items-center justify-center gap-4 py-2'>
            {/* <span>Continue With</span> */}
            <div className='flex gap-2'>
              <button
                onClick={e => continueWithGoogle(e)}
                className={`self-start flex items-center justify-center bg-[#848484] border border-gray-300 rounded-full shadow-md px-2 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 w-10 h-10 font-bold text-3xl`}
              >
                G
              </button>
              <button
                onClick={e => continueWithFacebook(e)}
                className={`self-start flex items-center bg-[#848484] justify-center border border-gray-300 rounded-full shadow-md px-2 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 w-10 h-10 font-bold text-3xl`}
              >
                f
              </button>
            </div>
          </div>
          <div className='flex justify-center items-center gap-2'>
            <span>Don't have an account?</span>
            <Link to='/register' className='underline font-semibold'>
              Sign up!
            </Link>
          </div>
        </div>
        <ToastContainer
          position='bottom-center'
          autoClose={3500}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          draggable
          theme='light'
        />
      </Modal.Body>
    </Modal>
  )
}

export default Login

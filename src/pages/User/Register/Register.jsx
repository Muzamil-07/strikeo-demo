import { Suspense, useCallback, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import 'react-toastify/dist/ReactToastify.css'
import { Modal } from 'flowbite-react'
import { FaEyeSlash } from 'react-icons/fa'
import { useUserSignupMutation } from '../../../services/nodeApi'
import { ToastContainer, toast } from 'react-toastify'
import { environment } from '../../../constants'
import { setBillingAddress } from '../../../redux/slices/Billing'

const Register = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  // const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  const [userSignup] = useUserSignupMutation()

  const [isFormInvalid, setIsFormInvalid] = useState(false)
  const [listener, setListener] = useState(null)

  const toastOptions = {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light'
  }
  // const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  // const [listener, setListener] = useState(null);

  // const [modelIndex, setModelIndex] = useState(1);
  // const models = {
  //   0: "Man In Pant Coat",
  //   1: "Tigerman",
  //   2: "Man In Suit",
  //   3: "Man with Bag",
  //   4: "Man In Jeans",
  //   5: "Arab Man",
  // };
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const [errors, setErrors] = useState({
    firstName: null,
    lastName: null,
    email: null,
    password: null,
    confirmPassword: null
  })

  // const handleClose = () => {
  //   setIsEmailModalOpen(false);
  // };

  // const handleOpen = () => {
  //   setIsEmailModalOpen(true);
  // };

  const handleInputChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const validateForm = () => {
    let errs = {}

    if (!form.firstName.trim()) {
      errs.firstName = 'Enter first name'
    }

    if (!form.lastName.trim()) {
      errs.lastName = 'Enter last name'
    }

    if (form.password.length < 5) {
      errs.password = 'Password length must be greater than 4'
    }
    if (form.password !== form.confirmPassword) {
      errs.confirmPassword = 'Passwords do not match'
    }
    if (form.email.length < 1) {
      errs.email = 'Email cannot be empty'
    }
    const EMAIL_REGEX = /^\S+@\S+\.\S+$/

    if (!EMAIL_REGEX.test(form.email)) {
      errs.email = 'Invalid email address'
    }

    return errs
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
      successMessage = 'Registered successfully!'
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
      oAuthProviderWindow(
        environment.api_url + '/user/auth/google?signup=true',
        'Google'
      )
    } catch (error) {
      console.log(error.response?.data?.message ?? error)

      toast.error('Something went wrong')
    }
  }

  const continueWithFacebook = async e => {
    e.preventDefault()

    try {
      oAuthProviderWindow(
        environment.api_url + '/user/auth/facebook?signup=true',
        'Facebook'
      )
    } catch (error) {
      console.log(error.response?.data?.message ?? error)

      toast.error('Something went wrong')
    }
  }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const errs = validateForm();

  //   if (Object.keys(errs).length > 0) {
  //     setErrors(errs);
  //     setIsFormInvalid(true);
  //   } else {
  //     setErrors({});
  //     try {
  //       const response = await UserService.register(form, models[modelIndex]);

  //       handleOpen();
  //       // toast.success("You've successfully registered!");
  //       // navigate("/login");
  //     } catch (error) {
  //       console.log(error.response?.data?.message ?? error);

  //       if (error.response?.data?.message === "User already exists") {
  //         toast.error("User already exists!");
  //       }
  //     }
  //   }
  // };

  // const handleMessage = (message, provider) => {
  //   if (message.data?.user?.token) {
  //     const { token, role, ...details } = message.data?.user;
  //     dispatch(login({ token, details }));

  //     let successMessage;
  //     if (message.data.signup) {
  //       successMessage = "Signed up successfully";
  //     } else if (message.data.linked) {
  //       successMessage = `${provider} account linked successfully`;
  //     } else {
  //       successMessage = "Logged in successfully";
  //     }
  //     toast.success(successMessage);
  //     navigate("/welcome", { replace: true });

  //     // Assuming this removes the event listener, you don't need to store the function in a state.
  //     window.removeEventListener("message", listener);
  //     setListener(null);
  //   }

  //   if (message.data?.error) {
  //     toast.error(message.data.error);
  //   }
  // };

  // const oAuthProviderWindow = (url, provider, model) => {
  //   const handler = (e) => handleMessage(e, provider);
  //   setListener(() => handler);
  //   window.open(
  //     `${url}?model=${model}`,
  //     "Login",
  //     "location=1,status=1,scrollbars=1, width=400,height=400"
  //   );
  //   window.addEventListener("message", handler);
  // };

  // const continueWithGoogle = async (e) => {
  //   e.preventDefault();
  //   try {
  //     oAuthProviderWindow(
  //       environment.api_url + "/user/auth/google",
  //       "Google",
  //       models[modelIndex]
  //     );
  //   } catch (error) {
  //     console.log(error.response?.data?.message ?? error);
  //     toast.error("Something went wrong");
  //   }
  // };

  // const continueWithFacebook = async (e) => {
  //   e.preventDefault();
  //   try {
  //     oAuthProviderWindow(
  //       environment.api_url + "/user/auth/facebook",
  //       "Facebook",
  //       models[modelIndex]
  //     );
  //   } catch (error) {
  //     console.log(error.response?.data?.message ?? error);
  //     toast.error("Something went wrong");
  //   }
  // };

  useEffect(() => {
    if (isFormInvalid) {
      const errs = validateForm()
      console.log('ERRORROROS', errs)
      setErrors(errs)
    }
  }, [form])

  // useEffect(() => {
  //   if (listener) {
  //     window.addEventListener("message", listener);

  //     return () => {
  //       window.removeEventListener("message", listener);
  //     };
  //   }
  // }, [listener]);

  const handleSubmit = async () => {
    const errs = validateForm()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      setIsFormInvalid(true)
    } else {
      setErrors({})
      setIsFormInvalid(false)

      const response = await userSignup({ ...form, model: 'Tigerman' })

      if ('error' in response) {
        toast.error(response.error.data.message, toastOptions)
      } else {
        toast.success('Verification email has been sent!', toastOptions)
      }
      console.log('RESPONSE:', response)
    }

    console.log('VALUES:', form, errs)
  }
  return (
    <Modal
      show={true}
      // onClose={closeSignUpModal}
      size={'5xl'}
      className='bg-black bg-opacity-80 z-20'
    >
      <Modal.Body className='bg-theme_quaternary rounded-lg'>
        <div className='pb-4'>
          <h3 className='text-theme_primary text-center font-bold text-3xl'>
            Sign up
          </h3>
        </div>
        <div className='signup-form space-y-6 px-72'>
          <form className='flex flex-col gap-6'>
            <div>
              <input
                type='text'
                placeholder='First name*'
                onChange={handleInputChange}
                name='firstName'
                className='border-0 border-b border-theme_primary py-1 bg-transparent w-full focus:ring-0'
              />
              {errors.firstName && (
                <p className='text-red-500 text-sm'>{errors.firstName}</p>
              )}
            </div>
            <div>
              <input
                type='text'
                placeholder='Last name*'
                onChange={handleInputChange}
                name='lastName'
                className='border-0 border-b border-theme_primary py-1 bg-transparent w-full focus:ring-0'
              />
              {errors.lastName && (
                <p className='text-red-500 text-sm'>{errors.lastName}</p>
              )}
            </div>
            <div>
              <input
                name='email'
                type='email'
                onChange={handleInputChange}
                placeholder='Email*'
                className='border-0 border-b border-theme_primary py-1 bg-transparent w-full focus:ring-0'
              />
              {errors.email && (
                <p className='text-red-500 text-sm'>{errors.email}</p>
              )}
            </div>
            <div className='relative'>
              <input
                name='password'
                type='password'
                onChange={handleInputChange}
                placeholder='Password*'
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
            <div className='relative'>
              <input
                name='confirmPassword'
                type='password'
                onChange={handleInputChange}
                placeholder='Repeat Password*'
                className='border-0 border-b border-theme_primary py-1 bg-transparent w-full focus:ring-0'
              />
              <button
                type='button'
                className='absolute right-4 top-1 text-theme_secondary'
              >
                <FaEyeSlash size='1.5rem' />
              </button>
              {errors.confirmPassword && (
                <p className='text-red-500 text-sm'>{errors.confirmPassword}</p>
              )}
            </div>
            <div className='flex items-center gap-4'>
              <input
                type='checkbox'
                className='rounded bg-theme_secondary focus:ring-0'
              />
              <span className='text-theme_primary text-sm'>
                I agree to the
                <button type='button' className='underline font-semibold'>
                  Terms and Conditions
                </button>
              </span>
            </div>
            <div className='flex flex-col space-y-2'>
              <button
                type='button'
                onClick={handleSubmit}
                className='bg-theme_primary text-white px-4 py-2 rounded-md'
              >
                Sign up
              </button>
            </div>
          </form>
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
            <span>Already have an account?</span>
            <Link to='/login' className='underline font-semibold'>
              Log in!
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

export default Register

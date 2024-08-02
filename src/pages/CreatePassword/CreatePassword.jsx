import { useState } from 'react'
import { logo } from '../../assets'
import { useNavigate, useSearchParams } from 'react-router-dom'
// import UserService from "../../services/User";
import { toast } from 'react-toastify'
// import { toggleTheme } from "../../redux/slices/Theme";
import http from './../../api'

const CreatePassword = () => {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const [form, setForm] = useState({
    password: '',
    cPassword: ''
  })

  const [errors, setErrors] = useState({
    password: '',
    cPassword: ''
  })

  const handleInputChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const validateForm = () => {
    let errs = {}

    if (form.password.length < 4) {
      errs.password = 'Password must be at least 4 characters long'
    }

    if (!form.password) {
      errs.password = 'Password cannot be empty'
    }

    if (form.password !== form.cPassword) {
      errs.cPassword = 'Passwords do not match'
    }

    if (!form.cPassword) {
      errs.cPassword = 'Confirm Password cannot be empty'
    }

    return errs
  }

  const handleSubmit = async e => {
    e.preventDefault()

    const errs = validateForm()

    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    } else {
      setErrors({})

      try {
        const email = searchParams.get('email')
        const token = searchParams.get('token')

        const res = await http.post('/vendor/create-password', {
          email,
          token,
          password: form.password
        })

        toast.success('Password has been saved successfully!')
        navigate('/admin/login')
      } catch (error) {
        if (error.response?.data?.message) {
          toast.error(error.response.data.message)
        }
      }
    }
  }

  return (
    <div className='w-full md:h-full flex flex-col dark:bg-primary bg-white'>
      <div className='py-10 md:pt-14 md:pb-2 flex justify-center relative'>
        <img
          src={logo}
          alt='logo'
          className='w-28 md:w-34 dark:filter-none filter invert'
        />
        {/* <button
					type="button"
					className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1 absolute right-10 top-10"
					onClick={() => dispatch(toggleTheme())}>
					<svg
						className="dark:hidden w-8 h-8"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg">
						<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
					</svg>
					<svg
						className="hidden dark:block w-8 h-8"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
							fill-rule="evenodd"
							clip-rule="evenodd"></path>
					</svg>
				</button> */}
      </div>
      <div className='w-full flex-grow py-12 px-10 md:px-44'>
        <div className=' h-full'>
          <h3 className='py-8 text-2xl font-medium text-center'>
            Welcome to Strike'O
          </h3>
          <div className='flex flex-col md:justify-center md:flex-row'>
            <div className='w-[80%] mx-auto md:w-[30%] md:mx-0 pt-6'>
              <form>
                <div className='flex flex-col gap-4'>
                  <label htmlFor='password'>Password</label>
                  <input
                    required
                    type='password'
                    name='password'
                    id='password'
                    className='outline-none border border-gray-400 rounded-md text-black bg-white px-3 py-3 w-full'
                    onChange={handleInputChange}
                  />
                  {errors.password && (
                    <p className='text-red-500 text-sm'>{errors.password}</p>
                  )}
                  <label htmlFor='cPassword'>Confirm Password</label>
                  <input
                    required
                    type='password'
                    name='cPassword'
                    id='cPassword'
                    className='outline-none border border-gray-400 rounded-md text-black bg-white px-3 py-3 w-full'
                    onChange={handleInputChange}
                  />
                  {errors.cPassword && (
                    <p className='text-red-500 text-sm'>{errors.cPassword}</p>
                  )}
                  <button
                    className='border border-white bg-primary hover:opacity-90 text-white rounded-xl px-8 py-4 my-4'
                    onClick={handleSubmit}
                  >
                    Create Password
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreatePassword

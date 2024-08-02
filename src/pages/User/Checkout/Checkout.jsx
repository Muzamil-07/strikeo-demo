import { NavLink, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from 'flowbite-react'
import Navbar from "./../mobile/components/Navbar"
import Payment from '../../../components/Payment'
import { setBillingAddress } from '../../../redux/slices/Billing'
import countries from '.././../../data/countries.json'
import cities from '.././../../data/cities.json'
import React, { useEffect, useState } from 'react'
import { useUpdateUserMutation } from '../../../services/nodeApi'
import { setUser } from '../../../redux/slices/User'
import validator from 'validator'

const CheckoutProductCard = ({ item }) => {
  return (
    <div className='grid grid-cols-12 my-10'>
      <div className='col-span-2'>
        <img
          src={item.details?.product?.image}
          alt='helmet.png'
          className='object-cover'
          style={{ width: 60 }}
        />
      </div>
      <div className='col-span-3 pt-2'>
        <p>{item.product?.name}</p>
        <p className='max-w-[6rem] text-ellipsis overflow-hidden whitespace-nowrap'>
          {item.product?.description}
        </p>
      </div>
      <div className='col-span-2 pt-2'>
        <p>Qty</p>
        <p>{item.details?.quantity}</p>
      </div>
      <div className='col-span-3 pt-4'>
        <p className='text-2xl'>
          {item.details?.price} <span className='text-sm'>T.K</span>
        </p>
      </div>
    </div>
  )
}

const Checkout = ({ clientToken }) => {
  const dispatch = useDispatch()

  const [checkoutStep, setCheckoutStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [isFormValidating, setIsFormValidating] = useState(false)
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    phone: ''
  })

  const user = useSelector(state => state.user)
  const cart = useSelector(state => state.cart)
  const billingDetails = useSelector(state => state.billing)

  const [updateUser] = useUpdateUserMutation()

  const sortedCountries = countries.sort((a, b) => a.name.localeCompare(b.name))
  const selectedCountry = countries.find(
    country => country.name === billingDetails?.country
  )
  const states =
    cities[
      selectedCountry?.name?.split(' ').join('_') +
        '-' +
        selectedCountry?.isoCode
    ]
  const statesAvailable = Object.keys(states || {})
    .sort((a, b) => a.localeCompare(b))
    .map(state => state.split('-')[0])
  const citiesAvailable = Object.values(states || {})
    .flatMap(stateCities => stateCities.map(city => city))
    .sort((a, b) => a.name.localeCompare(b.name))

  const handleInputChange = (e, field) => {
    if (field === 'country') {
      dispatch(
        setBillingAddress({
          [field]: e.target.value,
          state: '',
          city: '',
          zipCode: ''
        })
      )
    } else if (field === 'state') {
      dispatch(
        setBillingAddress({ [field]: e.target.value, city: '', zipCode: '' })
      )
    } else {
      dispatch(setBillingAddress({ [field]: e.target.value }))
    }
  }

  const validateCheckout = () => {
    const newErrors = {}
    if (!billingDetails.firstName || !billingDetails.firstName.trim()) {
      newErrors.firstName = 'First name is required!'
    }

    if (!billingDetails.lastName || !billingDetails.lastName.trim()) {
      newErrors.lastName = 'Last name is required!'
    }

    if (!billingDetails.country || !billingDetails.country.trim()) {
      newErrors.country = 'Country is required!'
    }

    if (!billingDetails.address || !billingDetails.address.trim()) {
      newErrors.address = 'Address is required!'
    }

    if (!billingDetails.city) {
      newErrors.city = 'City is required!'
    }

    if (!billingDetails.state) {
      newErrors.state = 'State is required!'
    }

    if (!billingDetails.zipCode || !billingDetails.zipCode.trim()) {
      newErrors.zipCode = 'ZIP Code is required!'
    }

    if (!billingDetails.phone || !billingDetails.phone.trim()) {
      newErrors.phone = 'Phone is required!'
    } else {
      if (!validator.isMobilePhone(billingDetails.phone)) {
        newErrors.phone = 'Phone is invalid!'
      }
    }

    if (!billingDetails.email || !billingDetails.email.trim()) {
      newErrors.email = 'Email is required!'
    } else {
      if (!validator.isEmail(billingDetails.email)) {
        newErrors.email = 'Email is invalid!'
      }
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return true
    } else {
      setErrors({})
      return false
    }
  }

  const proceedToCheckout = async () => {
    const isCheckoutInvalid = validateCheckout()
    setIsFormValidating(true)
    if (isCheckoutInvalid) return
    if (user) {
      setIsLoading(true)
      const res = await updateUser({
        id: user.details.id,
        billing: billingDetails
      })

      dispatch(setUser(res.data.data))
      setIsLoading(false)
      setCheckoutStep(2)
    }
  }

  useEffect(() => {
    if (isFormValidating) {
      validateCheckout()
    }
  }, [billingDetails])

  return (
    <>
    <Navbar bgLight/>
    <div className="bg-[url('/strikeo.webp')] h-screen bg-cover bg-no-repeat bg-center bg-fixed text-white px-24">
      <div className='fixed left-0 top-0 bg-black bg-opacity-60 z-[1055] h-full w-full overflow-y-auto overflow-x-hidden outline-none' />
      <div className='fixed inset-0 z-[1065] h-full py-16'>
        <div className='h-full w-11/12 mx-auto rounded-2xl bg-primary bg-opacity-70 px-20 mt-8 pt-10'>
          <div>
            <p className='text-4xl mb-5'>Checkout</p>
          </div>
          {cart?.items?.length === 0 ? (
            <p className='text-center'>Cart is empty.</p>
          ) : (
            <div className='grid grid-cols-12 gap-5'>
              {checkoutStep === 1 && (
                <div className='col-span-6'>
                  <div
                    className='pr-5'
                    style={{ maxHeight: '65vh', overflowY: 'auto' }}
                  >
                    <p className='text-md'>Shipping Details</p>
                    <div className='grid grid-cols-12 gap-6'>
                      <div className='col-span-6'>
                        <div className='relative z-0 mt-7'>
                          <input
                            type='text'
                            id='floating_standard'
                            className='block py-2.5 px-0 w-full text-sm text-white focus:text-blue-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                            placeholder=' '
                            value={billingDetails?.firstName}
                            onChange={e => handleInputChange(e, 'firstName')}
                          />
                          <label
                            htmlFor='floating_standard'
                            className='absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto'
                          >
                            First Name*
                          </label>
                          {errors.firstName && (
                            <span className='text-red-500 text-sm'>
                              {errors.firstName}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className='col-span-6'>
                        <div className='relative z-0 mt-7'>
                          <input
                            type='text'
                            id='floating_standard'
                            className='block py-2.5 px-0 w-full text-sm text-white focus:text-blue-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                            placeholder=' '
                            value={billingDetails?.lastName}
                            onChange={e => handleInputChange(e, 'lastName')}
                          />
                          <label
                            htmlFor='floating_standard'
                            className='absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto'
                          >
                            Last Name*
                          </label>
                          {errors.lastName && (
                            <span className='text-red-500 text-sm'>
                              {errors.lastName}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className='grid grid-cols-12 gap-6'>
                      <div className='col-span-6'>
                        <div className='relative z-0 mt-7'>
                          <input
                            type='text'
                            id='floating_standard'
                            className='block py-2.5 px-0 w-full text-sm text-white focus:text-blue-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                            placeholder=' '
                            value={billingDetails?.phone}
                            onChange={e => handleInputChange(e, 'phone')}
                          />
                          <label
                            htmlFor='floating_standard'
                            className='absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto'
                          >
                            Contact*
                          </label>
                          {errors.phone && (
                            <span className='text-red-500 text-sm'>
                              {errors.phone}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className='col-span-6'>
                        <div className='relative z-0 mt-7'>
                          <input
                            type='text'
                            id='floating_standard'
                            className='block py-2.5 px-0 w-full text-sm text-white focus:text-blue-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                            placeholder=' '
                            value={billingDetails?.email}
                            onChange={e => handleInputChange(e, 'email')}
                          />
                          <label
                            htmlFor='floating_standard'
                            className='absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto'
                          >
                            Email*
                          </label>
                          {errors.email && (
                            <span className='text-red-500 text-sm'>
                              {errors.email}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className='grid grid-cols-12 gap-6'>
                      <div className='col-span-12'>
                        <div className='relative z-0 mt-7'>
                          <input
                            type='text'
                            id='floating_standard'
                            className='block py-2.5 px-0 w-full text-sm text-white focus:text-blue-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                            placeholder=' '
                            value={billingDetails?.address}
                            onChange={e => handleInputChange(e, 'address')}
                          />
                          <label
                            htmlFor='floating_standard'
                            className='absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto'
                          >
                            Address Line*
                          </label>
                          {errors.address && (
                            <span className='text-red-500 text-sm'>
                              {errors.address}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className='grid grid-cols-12 gap-6'>
                      <div className='col-span-12'>
                        <div className='relative z-0 mt-7'>
                          <select
                            type='text'
                            id='floating_standard'
                            className='block py-2.5 px-0 w-full text-sm text-white focus:text-blue-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                            placeholder=' '
                            value={billingDetails?.country}
                            onChange={e => handleInputChange(e, 'country')}
                          >
                            <option className='text-gray-900' value=''>
                              Select Country
                            </option>
                            {sortedCountries.map((country, index) => (
                              <option
                                className='text-gray-900'
                                key={`country-${index}`}
                                value={country.name}
                              >
                                {country.name}
                              </option>
                            ))}
                          </select>
                          <label
                            htmlFor='floating_standard'
                            className='absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto'
                          >
                            Country*
                          </label>
                          {errors.country && (
                            <span className='text-red-500 text-sm'>
                              {errors.country}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className='grid grid-cols-12 gap-6'>
                      <div className='col-span-12'>
                        <div className='relative z-0 mt-7'>
                          <select
                            type='text'
                            id='floating_standard'
                            className='block py-2.5 px-0 w-full text-sm text-white focus:text-blue-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                            placeholder=' '
                            disabled={!billingDetails?.country}
                            value={billingDetails.state}
                            onChange={e => handleInputChange(e, 'state')}
                          >
                            <option className='text-gray-900' value=''>
                              Select State
                            </option>
                            {statesAvailable?.map(state => (
                              <option
                                className='text-gray-900'
                                key={state}
                                value={state}
                              >
                                {state}
                              </option>
                            ))}
                          </select>
                          <label
                            htmlFor='floating_standard'
                            className='absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto'
                          >
                            State*
                          </label>
                          {errors.state && (
                            <span className='text-red-500 text-sm'>
                              {errors.state}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className='grid grid-cols-12 gap-6'>
                      <div className='col-span-12'>
                        <div className='relative z-0 mt-7'>
                          <select
                            type='text'
                            id='floating_standard'
                            className='block py-2.5 px-0 w-full text-sm text-white focus:text-blue-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                            placeholder=' '
                            disabled={
                              !billingDetails?.country || !billingDetails?.state
                            }
                            value={billingDetails?.city}
                            onChange={e => handleInputChange(e, 'city')}
                          >
                            <option className='text-gray-900' value=''>
                              Select City
                            </option>
                            {citiesAvailable?.map(city => (
                              <option
                                className='text-gray-900'
                                key={city.name}
                                value={city.name}
                              >
                                {city.name}
                              </option>
                            ))}
                          </select>
                          <label
                            htmlFor='floating_standard'
                            className='absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto'
                          >
                            City*
                          </label>
                          {errors.city && (
                            <span className='text-red-500 text-sm'>
                              {errors.city}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className='grid grid-cols-12 gap-6'>
                      <div className='col-span-12'>
                        <div className='relative z-0 mt-7'>
                          <input
                            type='text'
                            id='floating_standard'
                            className='block py-2.5 px-0 w-full text-sm text-white focus:text-blue-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                            placeholder=' '
                            value={billingDetails?.zipCode}
                            onChange={e => handleInputChange(e, 'zipCode')}
                          />
                          <label
                            htmlFor='floating_standard'
                            className='absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto'
                          >
                            Zip Code*
                          </label>
                          {errors.zipCode && (
                            <span className='text-red-500 text-sm'>
                              {errors.zipCode}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className='grid grid-cols-12 gap-6'>
                      <div className='col-span-12'>
                        <div className='relative z-0 mt-7'>
                          <textarea
                            // rows={4}
                            id='floating_standard'
                            className='block py-2.5 px-0 w-full text-sm text-white focus:text-blue-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                            placeholder=' '
                            value={billingDetails?.instruction}
                            onChange={e => handleInputChange(e, 'instruction')}
                          />
                          <label
                            htmlFor='floating_standard'
                            className='absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto'
                          >
                            Delivery Instructions
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='flex justify-center pt-6'>
                    <Button
                      isProcessing={isLoading}
                      disabled={isLoading}
                      onClick={proceedToCheckout}
                      className='flex justify-center gap-2 items-center py-[0.5rem] px-24 me-2 mb-2 font-medium'
                      gradientDuoTone='tealToLime'
                    >
                      Proceed to Checkout
                    </Button>
                  </div>
                </div>
              )}
              {checkoutStep === 2 && (
                <div className='col-span-6'>
                  <div className='pr-5'>
                    <p className='text-md'>Payment Options</p>
                    <div className="flex flex-col gap-3 md:pr-4 w-full h-[80%] md:h-auto overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
                      {clientToken && <Payment clientToken={clientToken} />}{' '}
                    </div>
                  </div>
                  <div className='flex justify-center pt-4'>
                    <Button
                      onClick={() => setCheckoutStep(1)}
                      className='flex justify-center gap-2 items-center py-[0.5rem] px-24 me-2 mb-2 text-sm font-medium'
                      gradientDuoTone='tealToLime'
                    >
                      Edit Shipping Details
                    </Button>
                  </div>
                </div>
              )}
              <div className='col-span-1'></div>
              <div className='col-span-5'>
                <div>
                  <p className='text-2xl mb-5'>Your Order</p>
                  <div style={{ maxHeight: '43vh', overflowY: 'auto' }}>
                    {cart.items &&
                      cart.items.map((item, index) => (
                        <React.Fragment key={index}>
                          <CheckoutProductCard item={item} />
                        </React.Fragment>
                      ))}
                  </div>
                  <div className='grid grid-cols-12 mt-8'>
                    <div className='col-span-6'>
                      <div className='flex flex-col'>
                        <p>Subtotal</p>
                        <p>Shipping Charges</p>
                        <p className='font-bold'>Total</p>
                      </div>
                    </div>
                    <div className='col-span-6 text-right'>
                      <div className='flex flex-col'>
                        <p>{cart.bill} T.K</p>
                        <p>0 T.K</p>
                        <p className='font-bold'>{cart.bill} T.K</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    </>
  )
}

export default Checkout

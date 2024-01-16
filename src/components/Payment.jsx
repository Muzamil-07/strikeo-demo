import React, { useState } from 'react'
import {
  PayPalButtons,
  usePayPalHostedFields,
  PayPalHostedFieldsProvider,
  PayPalHostedField,
  PayPalScriptProvider
} from '@paypal/react-paypal-js'
import http from '../api'
import CartService from '../services/Cart'
import ClipLoader from 'react-spinners/ClipLoader'
import { toast } from 'react-toastify'
import { setCart } from '../redux/slices/Cart'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import validator from 'validator'

const Payment = ({ clientToken }) => {
  const navigate = useNavigate()
  const { cardFields } = usePayPalHostedFields()
  // const cardHolderName = useRef(null);

  // console.log(clientToken, "Client Token");

  const initialOptions = {
    clientId: import.meta.env.VITE_PAYPAL_CLIENT_ID,
    dataClientToken: clientToken,
    components: 'hosted-fields,buttons'
  }

  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const billingDetails = useSelector(state => state.billing)

  const [paymentMethod, setPaymentMethod] = useState('paypal')
  const [isPlacingOrder, setIsPlacingOrder] = useState(false)
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false)

  const handleClose = () => {
    setIsEmailModalOpen(false)
    navigate('/')
  }

  const handleOpen = () => {
    setIsEmailModalOpen(true)
  }

  const getUserCart = async () => {
    try {
      const res = await CartService.getCart(user.details.id)
      dispatch(setCart(res.data.data))
    } catch (error) {
      console.log(error)
    }
  }

  const cardHandler = () => {
    // console.log(cardFields, "Card Fields");
    if (typeof cardFields.submit !== 'function') return // validate that \`submit()\` exists before using it
    //if (errorMsg) showErrorMsg(false);
    cardFields
      .submit({
        // The full name as shown in the card and billing addresss
        // These fields are optional for Sandbox but mandatory for production integration
        // cardholderName: cardHolderName?.current?.value,
      })
      .then(async data => console.log(data, 'Submit Handler'))
      .catch(orderData => {
        console.log(
          `Sorry, your transaction could not be processed...${JSON.stringify(
            orderData
          )}`
        )
      })
  }

  const onCreateOrder = async () => {
    try {
      const res = await http.post('/payment/create-order')

      // console.log(res.data.data);

      return res.data.data
    } catch (error) {
      console.error(error)
      toast.error("Couldn't initiate payment. Please try again later.")
    }
  }

  const onApproveOrder = async (data, actions) => {
    // console.log("Approving order", data, actions);
    try {
      const res = await http.post('/payment/capture/' + data.orderID, {
        ...billingDetails
      })

      // console.log("Capture result", res.data.data);
      // Three cases to handle:
      //   (1) Recoverable INSTRUMENT_DECLINED -> call actions.restart()
      //   (2) Other non-recoverable errors -> Show a failure message
      //   (3) Successful transaction -> Show confirmation or thank you message

      const errorDetail = res.data.data?.details?.[0]

      if (errorDetail?.issue === 'INSTRUMENT_DECLINED') {
        // (1) Recoverable INSTRUMENT_DECLINED -> call actions.restart()
        // recoverable state, per https://developer.paypal.com/docs/checkout/standard/customize/handle-funding-failures/
        return actions.restart()
      } else if (errorDetail) {
        // (2) Other non-recoverable errors -> Show a failure message
        throw new Error(
          `${errorDetail.description} (${res.data.data.debug_id})`
        )
      } else {
        // (3) Successful transaction -> Show confirmation or thank you message
        // Or go to another URL:  actions.redirect('thank_you.html');
        const transaction = res.data.data.purchase_units[0].payments.captures[0]
        getUserCart()
        navigate('/orders')
        toast.success('Payment successful!')
        // setMessage(`Transaction ${transaction.status}: ${transaction.id}. See console for all available details`);
        // console.log("Capture result", res.data.data, JSON.stringify(res.data.data, null, 2));
      }
    } catch (error) {
      console.error(error)
      // setMessage(`Sorry, your transaction could not be processed...${error}`);
      toast.error('Sorry, your transaction could not be processed!')
    }
  }

  const placeOrder = async () => {
    if (checkDisabled()) {
      toast.error('Missing billing details!')
      return
    }

    setIsPlacingOrder(true)
    try {
      const res = await http.post('/order', {
        ...billingDetails
      })

      getUserCart()
      handleOpen()
    } catch (error) {
      console.log(error)
      toast.error(error.response.data.message)
    } finally {
      setIsPlacingOrder(false)
    }
  }

  const checkDisabled = () => {
    const newErrors = {}
    if (!billingDetails.firstName) {
      newErrors.firstName = 'First name is required!'
    }

    if (!billingDetails.lastName) {
      newErrors.lastName = 'Last name is required!'
    }

    if (!billingDetails.country) {
      newErrors.country = 'Country is required!'
    }

    if (!billingDetails.address) {
      newErrors.address = 'Address is required!'
    }

    if (!billingDetails.city) {
      newErrors.city = 'City is required!'
    }

    if (!billingDetails.state) {
      newErrors.state = 'State is required!'
    }

    if (!billingDetails.zipCode) {
      newErrors.zipCode = 'ZIP Code is required!'
    }

    if (!billingDetails.phone) {
      newErrors.phone = 'Phone is required!'
    } else {
      if (!validator.isMobilePhone(billingDetails.phone)) {
        newErrors.phone = 'Phone is invalid!'
      }
    }

    if (Object.keys(newErrors).length > 0) {
      console.log(newErrors)
      // setErrors(newErrors);
      return true
    } else {
      // setErrors({});
      return false
    }
  }

  return (
    <div>
      <div className='py-6'>
        <div className='accordion'>
          <div className='flex items-center mt-5 flex-wrap'>
            <input
              type='radio'
              id='accordion1'
              name='accordion'
              className='accordion-toggle w-4 h-4 border-none outline-none accent-black'
              checked={paymentMethod === 'paypal'}
              onChange={() => setPaymentMethod('paypal')}
            />
            <label
              for='accordion1'
              className={
                'accordion-header pl-4 ' +
                (paymentMethod !== 'bank' ? 'text-secondary' : '')
              }
            >
              Direct Bank Transfer
            </label>
            <div className='accordion-content mb-3'>
              <p className='py-3 text-secondary'>
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order will not be
                shipped until the funds have cleared in our account.
              </p>
              <PayPalScriptProvider options={initialOptions}>
                <div className='w-[400px] mx-auto'>
                  <PayPalButtons
                    fundingSource='paypal'
                    createOrder={onCreateOrder}
                    onApprove={onApproveOrder}
                    // disabled={isCheckoutDisabled}
                    // onInit={function (data, actions) {
                    // 	actions.disable();
                    // }}
                    onInit={(data, actions) => {
                      console.log('Paypal button is initialized')
                    }}
                    onClick={(data, actions) => {
                      console.log('Paypal button is clicked')
                    }}
                    onError={err => console.log('Paypal error', err)}
                    onCancel={() => console.log('User cancelled the purchase!')}
                  />
                  <div className='flex items-center'>
                    <div className='w-[45%] border-b border-white'></div>
                    <span className='mx-6'>or</span>
                    <div className='w-[45%] border-b border-white'></div>
                  </div>
                  <div className='mt-2'>
                    <PayPalHostedFieldsProvider createOrder={onCreateOrder}>
                      <div>
                        <PayPalHostedField
                          id='card-number'
                          hostedFieldType='number'
                          options={{
                            selector: '#card-number',
                            placeholder: 'Card Number'
                          }}
                          style={{
                            padding: '12px',
                            width: '100%',
                            border: '1px solid #ccc',
                            borderRadius: '4px',
                            boxSizing: 'border-box',
                            margin: '8px 2px',
                            resize: 'vertical',
                            height: '40px',
                            background: 'white',
                            fontSize: '14px'
                          }}
                        />

                        <div className='flex gap-4'>
                          <PayPalHostedField
                            id='expiration-date'
                            hostedFieldType='expirationDate'
                            options={{
                              selector: '#expiration-date',
                              placeholder: 'Expiration Date'
                            }}
                            style={{
                              padding: '12px',
                              width: '100%',
                              border: '1px solid #ccc',
                              borderRadius: '4px',
                              boxSizing: 'border-box',
                              margin: '8px 2px',
                              resize: 'vertical',
                              height: '40px',
                              background: 'white',
                              fontSize: '14px'
                            }}
                          />
                          <PayPalHostedField
                            id='cvv'
                            hostedFieldType='cvv'
                            options={{
                              selector: '#cvv',
                              placeholder: 'CVV'
                            }}
                            style={{
                              padding: '12px',
                              width: '50%',
                              border: '1px solid #ccc',
                              borderRadius: '4px',
                              boxSizing: 'border-box',
                              margin: '8px 2px',
                              resize: 'vertical',
                              height: '40px',
                              background: 'white',
                              fontSize: '14px'
                            }}
                          />
                        </div>
                      </div>
                      <div className='mt-2'>
                        <button
                          onClick={cardHandler}
                          className='bg-transparent border px-2 py-2 rounded-full w-full'
                        >
                          Pay With Card
                        </button>
                      </div>
                    </PayPalHostedFieldsProvider>
                  </div>
                </div>
              </PayPalScriptProvider>
            </div>
          </div>

          <div className='flex items-center mt-5 flex-wrap'>
            <input
              type='radio'
              id='accordion3'
              name='accordion'
              className='accordion-toggle w-4 h-4 border-none outline-none accent-black'
              checked={paymentMethod === 'cash'}
              onChange={() => setPaymentMethod('cash')}
            />
            <label
              for='accordion3'
              className={
                'accordion-header pl-4 ' +
                (paymentMethod !== 'cash' ? 'text-secondary' : '')
              }
            >
              Cash On Delivery
            </label>
            <div className='accordion-content mb-12'>
              <p className='py-3 text-secondary'>
                Our delivery partner will bring your order to the address you
                provided.
              </p>
              <div className='mt-4'>
                <button
                  onClick={placeOrder}
                  className='border border-white rounded-xl px-28 py-4 flex items-center justify-center gap-4 mx-auto'
                >
                  {isPlacingOrder ? (
                    <>
                      <ClipLoader size={20} color='#fff' />{' '}
                      <span>Placing Order....</span>
                    </>
                  ) : (
                    <span>Place order</span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
        <p className='pb-8 text-justify'>
          <span className='text-base font-medium'>Note:</span> Your personal
          data will be used to support your experience throughout this website,
          to manage access to your account, and for other purposes described in
          our privacy policy.
        </p>
      </div>

      {isEmailModalOpen && (
        <>
          <div className=' fixed left-0 top-0 bg-black bg-opacity-25 z-[1055] h-full w-full overflow-y-auto overflow-x-hidden outline-none'></div>
          <div className='fixed max-w-[550px] m-auto  inset-0 flex items-center justify-center z-[1065]'>
            <div className='bg-white p-7 relative shadow-lg rounded-2xl shadow-primary-500/50 w-full'>
              <h3 className='text-2xl font-medium text-center text-black'>
                Confirm Order
              </h3>
              <p className='text-center text-gray-500 my-2'>
                Please check your mail to confirm the order!
              </p>

              <div className='flex justify-center items-center mt-4'>
                <button
                  onClick={handleClose}
                  className='px-4 py-2 bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 text-white rounded-lg'
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Payment

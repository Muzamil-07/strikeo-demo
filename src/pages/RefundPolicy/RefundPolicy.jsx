import React from 'react'
import { NavLink } from 'react-router-dom'

const RefundPolicy = () => {
  return (
    <div className="bg-[url('/strikeo.webp')] h-screen bg-cover bg-no-repeat bg-center bg-fixed text-white px-24">
      <div className='fixed left-0 top-0 bg-black bg-opacity-60 z-[1055] h-full w-full overflow-y-auto overflow-x-hidden outline-none'></div>
      <div className='fixed inset-0 z-[1065] h-full py-10'>
        <div className='h-full w-3/5 mx-auto rounded-2xl bg-primary bg-opacity-70 pl-8 pr-6 py-8'>
          <div className='text-2xl font-semibold flex justify-center items-start relative'>
            <NavLink to='/'>
              <svg
                className='w-6 h-6 text-white absolute left-0'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='white'
                viewBox='0 0 14 10'
              >
                <path
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M13 5H1m0 0 4 4M1 5l4-4'
                />
              </svg>
            </NavLink>
            <h3 className='text-4xl'>Return & Refund Policy</h3>
          </div>
          <div className='mt-8 pb-12 flex flex-col gap-4 text-justify overflow-y-auto max-h-[90%] pr-6 info-scroll text-secondary'>
            <p>
              At StrikeO, we hope every product delights you. However, should
              you need to return an item, we make the process straightforward.
              Please first contact our Support Team at +8801615333900 or{' '}
              <a
                href='mailto:support@strikeo.com'
                className='text-white opacity-80 underline'
              >
                support@strikeo.com
              </a>{' '}
              so we can start your return right away and get you back on the
              road.
            </p>
            <section>
              <h3 className='text-lg font-semibold text-white opacity-80 mb-2'>
                Return Guidelines
              </h3>
              <ul className='info-page-list'>
                <li>
                  Unworn items returned within 30 days of delivery qualify for a
                  refund. Please note any usage, defects or missing tags may
                  impact refund value.
                </li>
                <li>
                  Start the return process within 14 days of requesting a Return
                  Merchandise Authorization (RMA) number from our team. Returns
                  without an RMA may be rejected.
                </li>
                <li>
                  Return items in original condition and packaging whenever
                  possible. Reuse or replace packaging to prevent damage.
                </li>
                <li>
                  Clearly label return shipments with your order details and RMA
                  number to reach our warehouse successfully. Keep the tracking
                  number handy.
                </li>
              </ul>
            </section>
            <section>
              <h3 className='text-lg font-semibold text-white opacity-80 mb-2'>
                Refund Method
              </h3>
              <p>
                Once returned items reach us, they undergo inspection (up to 72
                hours) before refunds are initiated. Refunds are generally
                credited within 5-7 business days after the returned items are
                approved. Here is the method:
              </p>
              <ul className='info-page-list my-2'>
                <li>
                  <span className='text-white opacity-80'>
                    Online Payments:
                  </span>{' '}
                  Original mode (credit card, PayPal etc.)
                </li>
                <li>
                  <span className='text-white opacity-80'>COD Orders:</span>{' '}
                  Cheque or account transfer
                </li>
                <li>
                  <span className='text-white opacity-80'>
                    Gift Card Redemptions:
                  </span>{' '}
                  Gift card balance
                </li>
              </ul>
              <p>
                Please allow additional time for the refund to fully reflect in
                your account based on your bank’s processing procedure.
              </p>
            </section>
            <section>
              <h3 className='text-lg font-semibold text-white opacity-80'>
                Bearing Shipping Charges
              </h3>
              <p>
                We cover return shipping fees if goods arrive damaged or fail to
                match your order. In other cases, customers bear return shipping
                charges. Reimbursements for return shipping may be provided on a
                case basis out of goodwill. Please get in touch with details.
              </p>
            </section>
            <section>
              <h3 className='text-lg font-semibold text-white opacity-80'>
                Sale, Discount and Personalized Items
              </h3>
              <p>
                Custom merchandise and engraved/printed items cannot be returned
                or refunded as they are made to order. Sale items are final
                purchase but you may begin the returns process if they arrive
                damaged or faulty.
              </p>
              <p className='mt-2'>
                We trust these policies deliver convenience and assurance as you
                shop with StrikeO. We always aim to optimize our service
                standards further. Please send any feedback to{' '}
                <a
                  href='mailto:support@strikeo.com'
                  className='text-white opacity-80 underline'
                >
                  support@strikeo.com
                </a>
                . Now let’s get you ready to ride on!
              </p>
            </section>
            <section>
              <h3 className='text-lg font-semibold text-white opacity-80'>
                How We Refund
              </h3>
              <p>
                At StrikeO, we make the returns and refunds process simple so
                you can get back to riding with minimal hassle. Here is a
                breakdown of how refunds work when you return items to us:
              </p>
              <div>
                <h4 className='font-medium text-white opacity-80 my-2'>
                  Initiating Returns
                </h4>
                <p>
                  To start a return, contact our Support Team at +8801615333900
                  or{' '}
                  <a
                    href='mailto:support@strikeo.com'
                    className='text-white opacity-80 underline'
                  >
                    support@strikeo.com
                  </a>
                  . Provide your order details and items to be returned. We will
                  efficiently guide you through the next steps.
                </p>
              </div>
              <div>
                <h4 className='font-medium text-white opacity-80 my-2'>
                  Return Shipping
                </h4>
                <p>
                  We provide a prepaid shipping label for all qualified returns
                  so you can send items back at zero extra cost. Attach the
                  label and ship through your carrier of choice to our Returns
                  Center. Please reuse original packaging when possible.
                </p>
              </div>
              <div>
                <h4 className='font-medium text-white opacity-80 my-2'>
                  Inspection and Processing
                </h4>
                <p>
                  Once returned items reach our facility, they undergo quick
                  inspection (24-48 hours) before refunds get initiated. We
                  verify correct quantities, ensure items are in new condition,
                  check for defects and process any reimbursements owed.
                </p>
              </div>
              <div>
                <h4 className='font-medium text-white opacity-80 my-2'>
                  Credit Card Refunds
                </h4>
                <p>
                  For credit card purchases, refunds get credited back to the
                  original card used for payment. This is done within 5-7
                  business days after we approve returned products. The refund
                  should reflect in your account per your bank's procedures.
                </p>
              </div>
              <div>
                <h4 className='font-medium text-white opacity-80 my-2'>
                  PayPal Refunds
                </h4>
                <p>
                  If you paid via PayPal, refunds are issued to your PayPal
                  balance. You can then transfer this amount to your linked bank
                  account if desired. PayPal refunds typically disburse 3 to 5
                  business days after being approved.
                </p>
              </div>
            </section>
            <p className='text-secondary'>
              We hope this clearly explains how StrikeO refunds function. Please
              reach out to{' '}
              <a
                href='mailto:support@strikeo.com'
                className='text-white opacity-80 underline'
              >
                support@strikeo.com
              </a>{' '}
              for any other questions. Ride safely!
            </p>
            <section className='flex flex-col gap-2'>
              <h3 className='text-lg font-semibold text-white opacity-80'>
                How We Handle Returns
              </h3>
              <p>
                At StrikeO, we make returns easy in case an item doesn't meet
                expectations or proves faulty. Here is how our return system
                works:
              </p>
              <p>
                How to Start a Return If you need to return an item, simply
                contact our Support Team at +8801615333900 or{' '}
                <a
                  href='mailto:support@strikeo.com'
                  className='text-white opacity-80 underline'
                >
                  support@strikeo.com
                </a>
                . Provide your order ID and details of the item(s) to be
                returned. We will efficiently guide you through next steps.
              </p>
              <p>
                Returning for Change of Mind Unworn, unwashed items can be
                returned within 30 days of delivery for a full refund. We deduct
                return shipping fees from the refund amount unless we caused
                error. Sign in to your account to print a prepaid return label
                or schedule a no-label ParcelPoint dropoff.
              </p>
              <p>
                Returning Faulty/Damaged Goods Notify us of defects within 30
                days of receiving your order. We cover return shipping costs and
                import fees for faulty returns. Items can be returned in any
                secure packaging. Once received and verified, we process full
                refunds including reasonable shipping fees you may have
                incurred.
              </p>
              <p>
                How Refunds are Issued Most refunds process back to the original
                payment method used for purchase. This happens 5 to 10 business
                days after the returned goods reach and are approved by our
                warehouse. Please refer to our Refunds Policy page for more
                details.
              </p>
              <p>
                We handle returns in accordance with consumer protection
                regulations. Reach out if you face any issues. Our priority is
                delivering exceptional service to keep you riding safely for the
                long run.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RefundPolicy

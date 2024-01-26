import React from 'react'
import { NavLink } from 'react-router-dom'

const Contact = () => {
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
            <h3 className='text-4xl'>Contact Us</h3>
          </div>
          <div className='mt-8 pb-12 flex flex-col gap-4 text-justify overflow-y-auto max-h-[90%] pr-6 info-scroll text-secondary'>
            <p>
              At StrikeO, we're committed to ensuring your satisfaction and
              addressing any concerns you may have. Whether you're facing an
              issue with your purchase or are interested in exploring business
              opportunities, our dedicated Support Team is here to assist you.
            </p>
            <section>
              <h3 className='text-lg font-semibold text-white opacity-80 mb-2'>
                Contacting Our Support Team
              </h3>
              <p>For immediate assistance, please reach out to us at:</p>
              <ul className='info-page-list'>
                <li>
                  <span className='text-white opacity-80'>Phone:</span>{' '}
                  +8801615333900
                </li>
                <li>
                  <span className='text-white opacity-80'>Email:</span>{' '}
                  <a
                    href='mailto:support@strikeo.com'
                    className='text-white opacity-80 underline'
                  >
                    support@strikeo.com
                  </a>
                </li>
              </ul>
              <p>
                Our team is well-equipped to handle a variety of inquiries,
                ranging from return processes to general queries about our
                biking gears. We understand the importance of getting you back
                on the road quickly and smoothly, and we're here to make sure
                that happens.
              </p>
            </section>
            <section>
              <h3 className='text-lg font-semibold text-white opacity-80'>
                Feedback and Suggestions
              </h3>
              <p>
                Your experience with StrikeO matters to us. We're constantly
                striving to improve our services and offerings. If you have any
                feedback or suggestions, please don't hesitate to send them to{' '}
                <a
                  href='mailto:support@strikeo.com'
                  className='text-white opacity-80 underline'
                >
                  support@strikeo.com
                </a>
                . Your input is invaluable in helping us serve you better.
              </p>
            </section>
            <section>
              <h3 className='text-lg font-semibold text-white opacity-80'>
                Business Opportunities
              </h3>
              <p className='mt-2'>
                If you're interested in partnering with us or exploring business
                opportunities, we're just an email or phone call away. Our team
                is excited to discuss potential collaborations that can drive
                mutual growth and success.
              </p>
            </section>
            <p className='text-secondary'>
              Thank you for choosing StrikeO. Let's gear up for a great ride
              together!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

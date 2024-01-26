import React from 'react'
import { NavLink } from 'react-router-dom'

const JoinMarketplace = () => {
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
            <h3 className='text-4xl'>Join Our Marketplace</h3>
          </div>
          <div className='mt-8 pb-12 flex flex-col gap-4 text-justify overflow-y-auto max-h-[90%] pr-6 info-scroll'>
            <p className='text-secondary'>
              At StrikeO, we connect shoppers around the world with unique
              lifestyle products and accessories that celebrate freedom of
              expression. As we expand our catalog across fashion apparel,
              automotive gear and more, we welcome passionate sellers to join
              our Marketplace.
            </p>
            <p className='text-secondary'>
              As a StrikeO Seller, you gain access to our global community
              seeking stylish, functional and innovative merchandise for life’s
              everyday adventures. We provide the platform and logistics - you
              provide amazing finds our customers love.
            </p>
            <section className='text-secondary'>
              <h3 className='text-lg font-semibold text-white opacity-80 mb-2'>
                Benefits of Selling with StrikeO
              </h3>
              <ul className='info-page-list'>
                <li>
                  <span className='text-white opacity-80'>Global Reach:</span>{' '}
                  Exposure to StrikeO’s growing lifestyle community
                </li>
                <li>
                  <span className='text-white opacity-80'>
                    High Conversion Rates:
                  </span>{' '}
                  Industry-leading conversion and valuable customer insights
                </li>
                <li>
                  <span className='text-white opacity-80'>
                    Fully Featured Platform:
                  </span>{' '}
                  Easy inventory and order management, sales analytics, and more
                </li>
                <li>
                  <span className='text-white opacity-80'>
                    Fulfillment Services:
                  </span>{' '}
                  Let us expertly store, pack and ship your products
                </li>
                <li>
                  <span className='text-white opacity-80'>
                    Customer Service:
                  </span>{' '}
                  We handle returns, refunds and maintain our high support
                  standards
                </li>
              </ul>
            </section>
            <section className='text-secondary'>
              <h3 className='text-lg font-semibold text-white opacity-80'>
                Types of Products We Accept
              </h3>
              <p className='my-2'>
                We welcome sellers with unique, designed-to-inspire products
                across categories such as:
              </p>
              <ul className='info-page-list'>
                <li>
                  <span className='text-white opacity-80'>
                    Fashion Apparel:
                  </span>{' '}
                  Boots, jackets, helmets, clothing, accessories and more
                </li>
                <li>
                  <span className='text-white opacity-80'>
                    Automotive Gear:
                  </span>{' '}
                  Interior gadgets, batteries, tyres, exterior styling, parts
                  and maintenance
                </li>
                <li>
                  <span className='text-white opacity-80'>
                    Outdoor/Adventure:
                  </span>{' '}
                  Camping, hiking, travel clothing and equipment
                </li>
                <li>
                  <span className='text-white opacity-80'>Arts & Crafts:</span>{' '}
                  Handmade jewelry, custom artwork, creative hobbies
                </li>
              </ul>
            </section>
            <p className='text-secondary'>
              And much more! Please refer to our seller guidelines for
              specifics.
            </p>
            <p className='text-secondary'>Ready to Begin?</p>
            <p className='text-secondary'>
              If you have fresh merchandise ideas tailored to our diverse
              lifestyle customer base and meet our seller standards, we invite
              you to grow with StrikeO. Let’s begin an exciting partnership!
            </p>
            <p className='text-secondary'>
              Contact us at sellers@strikeo.com or click below to sign up. We
              have plans for every type of business.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JoinMarketplace

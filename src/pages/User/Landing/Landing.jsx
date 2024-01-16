import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import bikeLogo from '../../../assets/images/bike_logo.png'
import LandingFooter from '../../../components/LandingFooter'
import LandingHeader from '../../../components/LandingHeader'

const Landing = () => {
  const navigate = useNavigate()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [remainingDays, setRemainingDays] = useState(0)
  const [remainingHours, setRemainingHours] = useState(0)
  const [remainingMins, setRemainingMins] = useState(0)
  const [remainingSecs, setRemainingSecs] = useState(0)

  const toggleModal = () => {
    // setIsModalOpen(!isModalOpen);
    navigate('/experience')
  }

  const calculateTimeLeft = () => {
    const difference = new Date('2024-01-15') - new Date()
    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        mins: Math.floor((difference / 1000 / 60) % 60),
        secs: Math.floor((difference / 1000) % 60)
      }
    }

    setRemainingDays(timeLeft.days)
    setRemainingHours(timeLeft.hours)
    setRemainingMins(timeLeft.mins)
    setRemainingSecs(timeLeft.secs)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      calculateTimeLeft()
    }, 1000)
    return () => clearTimeout(timer)
  })

  return (
    <div className="bg-[url('/strikeo.png')] bg-blend-darken h-screen grid grid-rows-6 bg-contain  bg-center bg-fixed text-white px-24 landing-page">
      <div className='row-span-1'>
        <LandingHeader toggleModal={toggleModal} />
      </div>
      <div className='row-span-3 flex flex-col justify-end items-start gap-4'>
        <h2 className='text-7xl font-bold'>STRIKE O</h2>
        <p className='text-xl'>
          Join our pack of free spirits, where community rules and <br />{' '}
          innovation meets the road!
        </p>
        <button
          onClick={toggleModal}
          className='flex justify-between items-center gap-6 text-xl font-medium py-2 px-3  rounded-[15px] border-[.5px] hover:text-[#C4C4C4]  hover:border-[#C4C4C4] backdrop-blur'
        >
          <span>Order Now</span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
          >
            <path
              fill='gray'
              d='M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6z'
            />
          </svg>
        </button>
      </div>
      <div className='row-span-2 flex justify-end items-center pl-24 pr-16 text-xl font-semibold'>
        <div className='flex items-center gap-12 px-12 py-4 rounded-xl border bg-[#C4C4C4] bg-opacity-10 backdrop-blur'>
          <span>{remainingDays} Days</span>
          <span>{remainingHours} Hours</span>
          <span>{remainingMins} Mins</span>
          <span className='w-20'>{remainingSecs} Secs</span>
        </div>
      </div>
      <LandingFooter />

      {isModalOpen && (
        <>
          <div
            className=' fixed left-0 top-0 bg-black bg-opacity-70 z-[1055] h-full w-full overflow-y-auto overflow-x-hidden outline-none'
            onClick={toggleModal}
          ></div>
          <div className='fixed max-w-[550px] m-auto  inset-0 flex items-center justify-center z-[1065]'>
            <div className='py-7 px-4 relative shadow-lg rounded-2xl shadow-primary-500/50 w-full bg-primary bg-opacity-90'>
              <div className='mt-4 pb-4 text-lg text-center text-black-400 opacity-80'>
                StrikeO's grand opening is just around the corner—stay tuned for
                the big reveal!
              </div>

              <div className='flex justify-center gap-3 items-center'>
                <button
                  className='border border-[#C19932] bg-primary hover:opacity-90 text-white rounded-xl px-6 py-2'
                  onClick={toggleModal}
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

export default Landing

import React from 'react'
import { Link } from 'react-router-dom'
import { facebook, instagram, tiktok } from '../../../../assets'
import { FaFacebook } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa6'
import { FaTiktok } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer
      style={{ zIndex: 10000 }}
      className='fixed bottom-0 left-0 z-20 w-full px-12 bg-transparent text-white opacity-70'
    >
      <div className='flex justify-between font-medium py-6  text-white'>
        <span className='text-sm sm:text-center dark:text-gray-400'>
          © Copyright 2024, Devfum All Rights Reserved
        </span>
        <div className='flex justify-center gap-5'>
          <Link to='#' className='cursor-pointer w-6'>
            <FaFacebook color='white' size={25} />
          </Link>
          <Link to='#' className='cursor-pointer'>
            <FaInstagram color='white' size={25} />
          </Link>
          <Link to='#' className='cursor-pointer'>
            <FaTiktok color='white' size={25} />
          </Link>
        </div>
        <ul className='flex gap-4 flex-wrap items-center text-sm'>
          <li>
            <Link to='/privacy-policy' className='cursor-pointer'>
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link to='/terms-of-service' className='cursor-pointer'>
              Terms of Service
            </Link>
          </li>
          <li>
            <Link to='/cookies' className='cursor-pointer'>
              Cookie Policy
            </Link>
          </li>
          <li>
            <Link to='/shipping' className='cursor-pointer'>
              Shipping Policy
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer

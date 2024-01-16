import React from 'react'
import { NavLink } from "react-router-dom"

const LandingHeader = ({toggleModal}) => {
  return (
    <div className="flex justify-center items-start gap-20 pt-12 relative text-xl">
        {/* <div className="absolute left-0 text-white">
            <img src={bikeLogo} alt="logo" className="w-28" />
        </div> */}
        <NavLink to="/about" className="font-semibold">About</NavLink>
        <button onClick={toggleModal} className="font-semibold">Store</button>
        <NavLink to="/products" className="font-semibold">Products</NavLink>
        <NavLink to="/contact" className="font-semibold">Contact</NavLink>
    </div>
  )
}

export default LandingHeader
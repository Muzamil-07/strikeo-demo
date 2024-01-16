import React from 'react'
import { NavLink } from "react-router-dom"

const LandingFooter = () => {
  return (
    <div className="fixed bottom-6 text-lg text-gray-200 opacity-80">
            <NavLink to="/cookies" className="px-4">
                Cookies
            </NavLink>
            <NavLink to="/privacy-policy" className="px-4">
                Privacy Policy
            </NavLink>
            <NavLink to="/faq" className="px-4">
                FAQ
            </NavLink>
            <NavLink to="/refund-policy" className="px-4">
                Return & Refund
            </NavLink>
            <NavLink to="/join-marketplace" className="px-4">
                Join Our Marketplace
            </NavLink>
        </div>
  )
}

export default LandingFooter
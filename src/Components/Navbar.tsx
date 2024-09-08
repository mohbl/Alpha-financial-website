import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-4 text-gray-900">
      <div className="container flex items-center justify-between mx-auto">
      <img src={logo} className='h-20'></img>
        <div>
          <ul className="items-center hidden space-x-8 text-[17px] font-semibold md:flex">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/about-us" className="hover:underline">About Us</Link></li>
          <li><Link to="/services" className="hover:underline">Services</Link></li>
          <li><Link to="" className="hover:underline">FaQ's</Link></li>
          <li><Link to="" className="hidden px-3 py-3 text-white bg-gray-800 rounded-md md:inline-block hover:scale-110">Call Us anytime </Link></li>
         </ul>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="mt-4 md:hidden">
          <ul className="space-y-2">
            <li><Link to="/" className="block hover:underline">Home</Link></li>
            <li><Link to="/about-us" className="block hover:underline">About Us</Link></li>
            <li><Link to="/services" className="block hover:underline">Services</Link></li>
            <li><Link to="/contact" className="block px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
              Contact Us
            </Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import React from 'react'
import { assets } from '../assets/assets';

const Navbar = () => {
  return (
    <div className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center relative">
        
        {/* Logo (Left) */}
        <a href="/" className="flex items-center">
          <img src={assets.logo} alt="Logo" className="h-12 w-70" />
        </a>

        {/* Navigation Links (Centered) */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-10 text-xl pl-5">
          <a href="/" className="text-black hover:text-blue-600 font-medium">Home</a>
          <a href="/event" className="text-black hover:text-blue-600 font-medium">Events</a>
          <a href="/about" className="text-black hover:text-blue-600 font-medium">About</a>
          <a href="/leaders" className="text-black hover:text-blue-600 font-medium">Leaders</a>
          <a href="/support" className="text-black hover:text-blue-600 font-medium">Support</a>
        </div>

        {/* Sign In Button (Right) */}
        <div className='pr-10'>
        <a href="/signin" className="ml-auto bg-black text-white px-5 py-2 rounded-3xl hover:bg-gray-800">
          Sign In
        </a>
        </div>

      </div>
    </div>
  );
};

export default Navbar;

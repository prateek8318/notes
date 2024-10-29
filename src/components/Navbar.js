import React, { useState } from 'react';
import { FaHome, FaInfoCircle, FaSignInAlt } from 'react-icons/fa'; 

function Navbar() {
  return (
    <div>
      <nav className="bg-gradient-to-r from-teal-400 to-gray-800 text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex justify-between items-center">
              <a href="#" className="text-white px-3 py-2 text-3xl mb-2 font-bold">Notes</a>
            </div>
            <div className="hidden md:flex space-x-4"> 
              <a href="/home" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md flex items-center">
                <FaHome className="mr-2" /> Home
              </a>
              <a href="/about" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md flex items-center">
                <FaInfoCircle className="mr-2" /> About
              </a>
              <a href="/signin" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md flex items-center">
                <FaSignInAlt className="mr-2" /> SignIn
              </a>
            </div>
            <div className="md:hidden">
              <button
               
                className="text-white hover:bg-blue-700 px-3 py-2 rounded-md"
              >
                Menu
              </button>
            </div>
          </div>
        </div>
        
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="/home" className="block text-white hover:bg-blue-700 px-3 py-2 rounded-md flex items-center">
                <FaHome className="mr-2" /> Home
              </a>
              <a href="/about" className="block text-white hover:bg-blue-700 px-3 py-2 rounded-md flex items-center">
                <FaInfoCircle className="mr-2" /> About
              </a>
            </div>
          </div>
      
      </nav>
    </div>
  );
}

export default Navbar;
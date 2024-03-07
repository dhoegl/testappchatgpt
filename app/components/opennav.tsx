'use state'
import React from 'react'
import { useState } from 'react';
import { FaBars, FaTimes, FaChurch } from "react-icons/fa";

const OpenNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
    <div>
            <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <span className="sr-only">Open main menu</span>
              {isOpen ? <FaBars className="block h-6 w-6" /> : <FaTimes className="block h-6 w-6" />}
            </button>
      
    </div>
  )
}

export default OpenNav

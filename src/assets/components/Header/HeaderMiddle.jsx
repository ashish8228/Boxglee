import React from 'react'
import logo from "../../Image/logohd.png"
import { FaSearch } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";


const HeaderMiddle = () => {
  return (
    <div className='border-b-[0.8px] border-[#dfe3e8]'>
      <div className="max-w-350  mx-auto flex items-center justify-between py-1">
        {/* Left  */}
        <div className='flex flex-[2_0_0]'>

        </div>

        {/* Center */}
        <div>
          <img
            src={logo}
            alt="Logo"
            className="max-w-47.5 cursor-pointer"
          />

        </div>

        {/* Right */}
        <div className="flex flex-[2_0_0] items-center justify-end gap-4 text-[14px] ">
          <div className="flex items-center" data-quick-search="true" data-quick-search-meta="true" >
            <div className="flex-col items-start mx-auto px-4">
              <form className="flex items-center w-full h-full" action="/search" method="get" autoComplete="off" >
                <div className="flex w-full border border-gray-300 rounded-md overflow-hidden">
                  <input type="text" name="q" autoComplete="off" placeholder="Search" aria-label="Search" maxLength="150" className="w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  <button type="submit" aria-label="Search" className="flex items-center justify-center px-4 text-gray-600 hover:text-blue-600" >
                    <FaSearch className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>
          </div>
          <a href="">Account</a>
          <a href="" className='flex items-center gap-2'>Cart 
            <span className=''><FaShoppingBag className="w-5 h-5 text-gray-700" /></span></a>
        </div>
      </div>
    </div>
  )
}

export default HeaderMiddle
import React from 'react'
import { CiShoppingCart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDropdown } from "react-icons/io";

function NavBar() {
  return (
    <nav className='w-screen flex p-4 gap-8 fixed bg-white items-center justify-between  text-xl'>
        <h1 className=' font-bold'>Khatri</h1>
            <ul className='flex items-center justify-center gap-2 border-x-2 p-4 border-black'>
                <li className=' border-black text-xl'>
                    <select name="name" id="" className=''>
                        <option value="">AUD</option>
                        <option value="">USD</option>
                        <option value="">INR</option>
                        <option value="">EUR</option>
                        <option value="">GBP</option>
                        <option value="">JPY</option>
                        <option value="">CAD</option>
                    </select>
                </li>
                <li className=' p-3 border-black '>
                    <CiSearch className='w-6 h-6'/>
                </li>
                <li className='  text-2xl border-black'>
                    <CiShoppingCart className='w-6 h-6'/>
                </li>
            </ul>
            <p className="hamburger"></p>
    </nav>
  )
}

export default NavBar
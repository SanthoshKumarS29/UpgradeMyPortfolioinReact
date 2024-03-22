import React, { useState } from 'react'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {

const [nav,setNav]=useState(false)
const handleNav =()=>{
    setNav(!nav)
}
  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black'>
        <h1 className='w-full lg:text-4xl font-bold text-[#7a50eb] text-2xl'>SANTHOSH.</h1>
        <ul className='hidden text-xl md:flex lg:flex gap-5'>
            <li className='p-4 cursor-pointer hover:text-[#7a50eb] duration-300'><a href="/">Home</a></li>
            <li className='p-4 cursor-pointer hover:text-[#7a50eb] duration-300'><a href="/about">About</a></li>
            <li className='p-4 cursor-pointer hover:text-[#7a50eb] duration-300'><a href="/skills">Skills</a></li>
            <li className='p-4 cursor-pointer hover:text-[#7a50eb] duration-300'><a href="/education">Education</a></li>
            <li className='p-4 cursor-pointer hover:text-[#7a50eb] duration-300'><a href="/projects">Projects</a></li>
            <li className='p-4 cursor-pointer hover:text-[#7a50eb] duration-300'><a href="/contact">Contact</a></li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <AiOutlineMenu size={20}/>: <AiOutlineClose size={20}/>}
        </div>
        <div className={nav ? 'fixed z-40 left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-300':'fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#7a50eb] m-5 pt-2'>SANTHOSH</h1>
            <ul className='uppercase p-4'>
            <li className='p-4 cursor-pointer border-b border-gray-600 hover:bg-[#7a50eb] text-white duration-300'><a href="/">Home</a></li>
            <li className='p-4 cursor-pointer border-b border-gray-600 hover:bg-[#7a50eb] text-white duration-300'><a href="/about">About</a></li>
            <li className='p-4 cursor-pointer border-b border-gray-600 hover:bg-[#7a50eb] text-white duration-300'><a href="/skills">Skills</a></li>
            <li className='p-4 cursor-pointer border-b border-gray-600 hover:bg-[#7a50eb] text-white duration-300'><a href="/education">Education</a></li>
            <li className='p-4 cursor-pointer border-b border-gray-600 hover:bg-[#7a50eb] text-white duration-300'><a href="/projects">Projects</a></li>            
            <li className='p-4 cursor-pointer border-b border-gray-600 hover:bg-[#7a50eb] text-white duration-300'><a href="/contact">Contact</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar

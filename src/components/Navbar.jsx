'useclient'
import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import {FaFacebook,FaTwitter,FaInstagram,FaPinterest,FaYoutube,} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';



const Navbar = () => {
 

  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false)
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo)
  };

  return (
    <div className='flex w-full justify-between items-center h-20 px-4 absolute z-10 text-black bg-slate-50'>
      <div className='cursor-pointer'>
        <h1 onClick={handleNav} className={logo ? 'hidden' : 'block'}>BOOKIE</h1>
      </div>
      <ul className='hidden md:flex'>
   <li>
    <NavLink to='/' className='p-4 cursor-pointer text-lg' > Home</NavLink>
   </li>
   <li>
    <NavLink to='/about' className='p-4 cursor-pointer text-lg' > About Us</NavLink>
   </li>
   <li>
    <NavLink to='/contact' className='p-4 cursor-pointer text-lg' >Contact</NavLink>
   </li>
   
      </ul>
      <div className='flex gap-3'>
      
      <div className='hidden  gap-5 cursor-pointer md:flex'>
       <NavLink to='/login' className=' bg-blue-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0'>Login</NavLink>
      </div>
      </div>

     
      <div onClick={handleNav} className='md:hidden z-10'>
        {nav ? <AiOutlineClose className='text-black' size={20} /> : <HiOutlineMenuAlt4 size={20} />}
      </div>


      <div onClick={handleNav} className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
        <ul>
          <h1>BOOKIE</h1>
          <li>
    <NavLink to='/' className='border-b' > Home</NavLink>
   </li>
   <li>
    <NavLink to='/about' className='border-b' > About Us</NavLink>
   </li>
   <li>
    <NavLink to='/contact' className='border-b' >Contact</NavLink>
   </li>
  
          <div className='flex justify-between my-6'>
            <FaFacebook className='icon' />
            <FaTwitter className='icon' />
            <FaYoutube className='icon' />
            <FaPinterest className='icon' />
            <FaInstagram className='icon' />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
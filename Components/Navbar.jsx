// Navbar.js
'use client'
import React from 'react';
import  Button from '@mui/material/Button';


const Navbar = () => {
  return (
    <nav id='navbar' className=" flex p-4">
      <div className="container mx-auto flex flex-row items-center justify-between w-screen ">
        <img src="/JandPay Logo.png" alt="" />
        <ul id='list' className="hidden md:block">
          <li className='m-4'><a href="#" className="text-slate-900 hover:text-gray-300 font-medium">Home </a></li>
          <li className='m-4'><a href="#" className="text-slate-900 hover:text-gray-300 font-medium">About</a></li>
          <li className='m-4'><a href="#" className="text-slate-900 hover:text-gray-300 font-medium">Services</a></li>
          <li className='m-4'><a href="#" className="text-slate-900 hover:text-gray-300 font-medium">Contact</a></li>

        </ul>
          <Button id='nav-sign' className='text-white  absolute right-4 rounded-xl w-8 px-2 p-2 bg-slate-800'>Sign In</Button>
      </div>
    </nav>
  );
};

export default Navbar;

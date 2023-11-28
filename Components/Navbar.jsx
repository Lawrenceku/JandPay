// Navbar.js
'use client'
import React from 'react';
import  Button from '@mui/material/Button';
import Link from 'next/link';

import JandPayLogo from './JandPay Logo 2.svg';
import { LogoutOutlined, SearchOutlined } from '@mui/icons-material';

const Navbar = () => {
  return (
    <nav id='navbar' className=" flex p-4">
      <div className="container mx-auto flex flex-row items-center justify-between w-screen ">
        <div className='logo-container'>
        <img className='h-4 w-4' src="/JandPay Logo_black.png" alt="" />
        </div>
        <ul id='list' className="hidden md:block">
          <li id='list1'  className='m-4'><a href="#" className="text-slate-900 hover:text-gray-300 font-medium">Home </a></li>
          <li id='list2' className='m-4'><a href="#" className="text-slate-900 hover:text-gray-300 font-medium">About</a></li>
          <li id='list3'  className='m-4'><a href="#" className="text-slate-900 hover:text-gray-300 font-medium">Services</a></li>
          <li id='list4'  className='m-4'><a href="#" className="text-slate-900 hover:text-gray-300 font-medium">Contact</a></li>

        </ul>
        <Link href='/Register'>
          <Button id='nav-sign' className='text-white  absolute right-4 rounded-xl w-8  bg-slate-800'>Sign In</Button>
          </Link>
      </div>
    </nav>
  );
};

export default Navbar;
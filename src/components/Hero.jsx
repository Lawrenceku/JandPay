'use client'
import React from 'react';
import { Button, Typography } from '@mui/material';
import Link from 'next/link';
import Image from "next/image";


const Hero = () => {
  return (
    <div id='hero' className='flex p-8 '>
      <div id='hero-content' className='w-80 py-4  flex flex-col'>
        <Typography className='mt-4' variant="h2" gutterBottom>
        Where Payments Know <span style={{color:'red'}}>No Borders</span>.
        </Typography>
        <Typography variant="subtitle1" paragraph>
        Join us on a journey where financial boundaries dissolve, and your transactions are 
        as limitless as your ambitions. Discover a world where currencies converge, 
        and financial possibilities are boundless – welcome to JandPay, where your payments 
        transcend borders with ease.
        </Typography>
        <div id='line' className='flex pt-4 mt-8 h-10'>
        <Link href='/Register'>
        <Button id='sign-up' className='rounded-xl  px-4 bg-slate-800 m-2 h-100 hover:bg-slate-900 hover:shadow-sm' variant="contained" >
          Get Started
        </Button>
        </Link>
        <Link href='/Sign-In'>
        <Button id='sign-in' className='rounded-xl shadow m-2  px-4 bg-transparent border-1 text-slate-800 border-slate-800 hover:bg-transparent hover:shadow-sm' variant="outlined" >
          Sign In
        </Button>
        </Link>
        </div>
      </div>
      <Image id='hero-img' className='' width={300} height={300} src="/hero-img.png" alt="" />
    </div>
  );
};

export default Hero;

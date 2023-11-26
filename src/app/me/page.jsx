'use client'
import React from "react";
import Link from "next/link";


const Me=()=>{
return(
    <>
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className="  backdrop-blur-md  bg-black/50 flex items-center h-24 p-4 ">
            <img src="https://static-00.iconduck.com/assets.00/profile-circle-icon-1023x1024-ucnnjrj1.png" className='rounded h-8 '  alt="pfp" /><p className="ml-2 text-gray-100 ">Hello User 001</p>
            <img className='h-6 w-6 absolute right-4' src="https://cdn.onlinewebfonts.com/svg/img_454470.png" alt="" />
        </div>
        <div className="flex font-bold flex-col items-bottom">
            <div className="shadow-sm py-4 px-2">
                <p>Transaction History</p>
            </div>
            <div className="shadow-sm py-4 px-2">
                <p>Earn Rewards</p>
            </div>
            <div className="shadow-sm py-4 px-2">
                <p>Refer Friends</p>
            </div>
            <div className="shadow-sm py-4 px-2">
                <p>Customer Care</p>
            </div>
            <div className="shadow-sm py-4 px-2">
                <p>Report Scam</p>
            </div>
            <div className="shadow-sm py-4 px-2">
                <p>Sign Out</p>
            </div>
        </div>
    </div>
    <footer id="bottom-nav" className="w-full h-16 bottom-0 fixed bg-white/10 backdrop-blur-md flex font-medium justify-around items-center">
            <Link href="/home"  >
                <div className="hover:text-gray-400 hover:fill-gray-400  flex flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z"/></svg><p>Home </p>
               </div>
              </Link>
              <Link href='/finance'>
                <div className="hover:text-gray-400 hover:fill-gray-400  flex flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 16h10v1h-10v-1zm0-1h10v-1h-10v1zm15-13v22h-20v-22h3c1.229 0 2.18-1.084 3-2h8c.82.916 1.771 2 3 2h3zm-11 1c0 .552.448 1 1 1s1-.448 1-1-.448-1-1-1-1 .448-1 1zm9 1h-4l-2 2h-3.898l-2.102-2h-4v18h16v-18zm-13 9h10v-1h-10v1zm0-2h10v-1h-10v1z"/></svg>
                    <p>Finance</p></div>
              </Link>
              <Link href='/me'>
                <div className=" text-gray-400 fill-gray-400 flex flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z"/></svg>                  <p>Me</p></div>
              </Link>
           </footer>
    </>
)
}

export default Me
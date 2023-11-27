'use client'
import React, {useState} from'react';
import Link from "next/link";
//import {name} from './App'


var availableBalance = "*****"
function Dashboard(){
     const [isVisible, setState]= useState(true)

    const toggleVisibility =()=>{
        setState(!isVisible)
        if (isVisible==true){
            availableBalance="*****"
        }
        else{
            availableBalance='₦100.00'
        }
    } 
return(
    <>
    <div className='h-screen sm:px-8 px-2 bg-gradient-to-r from-cyan-500 to-blue-500 flex flex-col'>
        <div className='text-gray-900  text-xl py-8 font-bold flex '>
            <img src="https://static-00.iconduck.com/assets.00/profile-circle-icon-1023x1024-ucnnjrj1.png" className='rounded h-8'  alt="pfp" />
            <p className='absolute ml-12'>Hello, User 001</p>
         <img className='h-6 w-6 ml-24 absolute right-8' src="https://cdn.onlinewebfonts.com/svg/img_454470.png" alt="" />
         <p className='text-red-600 text-4xl absolute right-8 top-0'>.</p>
        </div>
        <div className='font-bolder text-gray-100 flex rounded-3xl w-full p-4 h-auto flex-col  backdrop-blur-md  bg-black/70'>
            <div className='flex flex-col'>
             <div className='flex '>
                <p className=''>Available Balance</p>
                <svg width="19" height="19" fill='#f7fafc' className='m-1 cursor-pointer' onClick={toggleVisibility} clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m17.069 6.546 2.684-2.359c.143-.125.32-.187.497-.187.418 0 .75.34.75.75 0 .207-.086.414-.254.562l-16.5 14.501c-.142.126-.319.187-.496.187-.415 0-.75-.334-.75-.75 0-.207.086-.414.253-.562l2.438-2.143c-1.414-1.132-2.627-2.552-3.547-4.028-.096-.159-.144-.338-.144-.517s.049-.358.145-.517c2.111-3.39 5.775-6.483 9.853-6.483 1.815 0 3.536.593 5.071 1.546zm2.319 1.83c.966.943 1.803 2.014 2.474 3.117.092.156.138.332.138.507s-.046.351-.138.507c-2.068 3.403-5.721 6.493-9.864 6.493-1.297 0-2.553-.313-3.729-.849l1.247-1.096c.795.285 1.626.445 2.482.445 3.516 0 6.576-2.622 8.413-5.5-.595-.932-1.318-1.838-2.145-2.637zm-3.434 3.019c.03.197.046.399.046.605 0 2.208-1.792 4-4 4-.384 0-.756-.054-1.107-.156l1.58-1.389c.895-.171 1.621-.821 1.901-1.671zm-.058-3.818c-1.197-.67-2.512-1.077-3.898-1.077-3.465 0-6.533 2.632-8.404 5.5.853 1.308 1.955 2.567 3.231 3.549l1.728-1.519c-.351-.595-.553-1.289-.553-2.03 0-2.208 1.792-4 4-4 .925 0 1.777.315 2.455.843zm-2.6 2.285c-.378-.23-.822-.362-1.296-.362-1.38 0-2.5 1.12-2.5 2.5 0 .36.076.701.213 1.011z" fill-rule="nonzero"/></svg>
             </div>
            <p className='text-2xl'>{availableBalance}</p>
            </div>
            <div className='text-sm text-green-600  mt-8 px-2 sm:px-0  left-0 flex w-full flex-4 justify-around'>
                <div className='flex flex-col'><p className='bg-gray-100 w-18 rounded h-9 text-2xl flex justify-center items-center font-bold text-center'><svg width="24" height="24" clip-rule="evenodd" fill-rule="evenodd" fill='#000'stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12.002 2c5.518 0 9.998 4.48 9.998 9.998 0 5.517-4.48 9.997-9.998 9.997-5.517 0-9.997-4.48-9.997-9.997 0-5.518 4.48-9.998 9.997-9.998zm0 1.5c-4.69 0-8.497 3.808-8.497 8.498s3.807 8.497 8.497 8.497 8.498-3.807 8.498-8.497-3.808-8.498-8.498-8.498zm-.747 7.75h-3.5c-.414 0-.75.336-.75.75s.336.75.75.75h3.5v3.5c0 .414.336.75.75.75s.75-.336.75-.75v-3.5h3.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-3.5v-3.5c0-.414-.336-.75-.75-.75s-.75.336-.75.75z" fill-rule="nonzero"/></svg></p><p className='text-gray-100'>Add Money</p></div>
                <div className='flex flex-col'><p className='bg-gray-100 w-18 rounded h-9 text-2xl flex justify-center items-center font-bold text-center'><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill='#000' fill-rule="evenodd" clip-rule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 2c5.519 0 10 4.481 10 10s-4.481 10-10 10-10-4.481-10-10 4.481-10 10-10zm2 12v-3l5 4-5 4v-3h-9v-2h9zm-4-6v-3l-5 4 5 4v-3h9v-2h-9z"/></svg></p><p className='text-gray-100'>Transfer</p></div>
                <div className='flex flex-col'><p className='bg-gray-100 w-18 rounded h-9 text-2xl flex justify-center items-center font-bold text-center'><svg width="24" height="24" clip-rule="evenodd" fill='#000' fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m2.009 11.998c0-5.518 4.48-9.998 9.998-9.998s9.998 4.48 9.998 9.998c0 5.517-4.48 9.997-9.998 9.997s-9.998-4.48-9.998-9.997zm1.5 0c0 4.69 3.808 8.497 8.498 8.497s8.498-3.807 8.498-8.497-3.808-8.498-8.498-8.498-8.498 3.808-8.498 8.498zm4.716 1.528s1.505 1.501 3.259 3.254c.146.147.338.22.53.22s.384-.073.53-.22c1.754-1.752 3.258-3.254 3.258-3.254.145-.145.217-.335.217-.526 0-.192-.074-.384-.221-.53-.292-.293-.766-.295-1.057-.004l-1.977 1.977v-6.693c0-.414-.336-.75-.75-.75s-.75.336-.75.75v6.693l-1.979-1.978c-.289-.289-.761-.287-1.054.006-.147.147-.221.339-.222.53 0 .191.071.38.216.525z" fill-rule="nonzero"/></svg></p><p className='text-gray-100'>Receive</p></div>
            </div>
        </div>
        <div className=' w-full  my-4 flex flex-row flex-wrap items-center text-white font'>
            <div className='shadow bg-black/70 backdrop-blur-md  rounded-3xl flex flex-col flex-grow p-2 my-8 h-60 justify-center items-center mx-4 w-72  text-center'>
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path fill='#fff' d="M4.82 19.407c-2.966-1.857-4.94-5.153-4.94-8.907 0-5.795 4.705-10.5 10.5-10.5 3.605 0 6.789 1.821 8.68 4.593 2.966 1.857 4.94 5.153 4.94 8.907 0 5.795-4.705 10.5-10.5 10.5-3.599 0-6.778-1.815-8.67-4.579l-.01-.014zm8.68-15.407c5.243 0 9.5 4.257 9.5 9.5s-4.257 9.5-9.5 9.5-9.5-4.257-9.5-9.5 4.257-9.5 9.5-9.5zm.5 15h-1.021v-.871c-2.343-.302-2.599-2.179-2.599-2.744h1.091c.025.405.157 1.774 2.182 1.774.599 0 1.088-.141 1.453-.419.361-.276.536-.612.536-1.029 0-.793-.513-1.367-2.07-1.718-2.368-.536-2.923-1.398-2.923-2.533 0-1.509 1.223-2.216 2.33-2.406v-1.054h1.021v1.015c2.491.195 2.695 2.215 2.695 2.771h-1.098c0-1.161-.918-1.766-1.996-1.766-1.077 0-1.854.532-1.854 1.408 0 .781.439 1.165 1.994 1.554 1.879.473 2.999 1.101 2.999 2.681 0 1.744-1.509 2.393-2.74 2.493v.844zm2.85-15.453c-1.696-1.58-3.971-2.547-6.47-2.547-5.243 0-9.5 4.257-9.5 9.5 0 2.633 1.073 5.017 2.806 6.739l-.004-.01c-.44-1.159-.682-2.416-.682-3.729 0-5.795 4.705-10.5 10.5-10.5 1.171 0 2.298.192 3.35.547z"/></svg>                <p className='font-medium'>Lorem Ipsum</p><p className='text-sm '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, laudantium?</p></div>
            <div className='shadow bg-black/70 backdrop-blur-md  rounded-3xl flex flex-col justify-center items-center flex-grow p-2 my-8 h-60 w-72 mx-4 text-center'>
            <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path fill='#fff'  d="M12 20c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm-3.659-3.254c1.013-.781 2.282-1.246 3.659-1.246 1.376 0 2.645.464 3.657 1.245l-.572.821c-.85-.667-1.921-1.066-3.085-1.066s-2.237.399-3.087 1.068l-.572-.822zm-2.859-4.105c1.825-1.346 4.079-2.141 6.518-2.141 2.437 0 4.691.794 6.515 2.139l-.572.821c-1.662-1.232-3.718-1.96-5.943-1.96-2.226 0-4.284.729-5.946 1.962l-.572-.821zm-2.858-4.104c2.635-1.91 5.875-3.037 9.376-3.037 3.499 0 6.737 1.125 9.371 3.034l-.571.821c-2.472-1.796-5.513-2.855-8.8-2.855-3.288 0-6.331 1.06-8.804 2.858l-.572-.821zm-2.624-3.768c3.402-2.375 7.54-3.769 12-3.769 4.458 0 8.593 1.392 11.994 3.765l-.571.82c-3.239-2.259-7.178-3.585-11.423-3.585-4.248 0-8.188 1.327-11.429 3.589l-.571-.82z"/></svg>
                <p className=' font-medium'>Lorem, ipsum dolor.</p><p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non iusto aliquam eligendi recusandae! Blanditiis, beatae!</p></div>
            <div  className='shadow bg-black/70 backdrop-blur-md  rounded-3xl flex flex-col justify-center items-center flex-grow p-2 my-8 h-60 w-72 mx-4 text-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill='#fff' d="M17 12c-3.313 0-6 2.687-6 6s2.687 6 6 6 6-2.687 6-6-2.687-6-6-6zm.5 8.474v.526h-.5v-.499c-.518-.009-1.053-.132-1.5-.363l.228-.822c.478.186 1.114.383 1.612.27.574-.13.692-.721.057-1.005-.465-.217-1.889-.402-1.889-1.622 0-.681.52-1.292 1.492-1.425v-.534h.5v.509c.362.01.768.073 1.221.21l-.181.824c-.384-.135-.808-.257-1.222-.232-.744.043-.81.688-.29.958.856.402 1.972.7 1.972 1.773.001.858-.672 1.315-1.5 1.432zm1.624-10.179c1.132-.223 2.162-.626 2.876-1.197v.652c0 .499-.386.955-1.007 1.328-.581-.337-1.208-.6-1.869-.783zm-2.124-5.795c2.673 0 5-1.007 5-2.25s-2.327-2.25-5-2.25c-2.672 0-5 1.007-5 2.25s2.328 2.25 5 2.25zm.093-2.009c-.299-.09-1.214-.166-1.214-.675 0-.284.334-.537.958-.593v-.223h.321v.211c.234.005.494.03.784.09l-.116.342c-.221-.051-.467-.099-.708-.099l-.072.001c-.482.02-.521.287-.188.399.547.169 1.267.292 1.267.74 0 .357-.434.548-.967.596v.22h-.321v-.208c-.328-.003-.676-.056-.962-.152l.147-.343c.244.063.552.126.828.126l.208-.014c.369-.053.443-.3.035-.418zm-11.093 13.009c1.445 0 2.775-.301 3.705-.768.311-.69.714-1.329 1.198-1.899-.451-1.043-2.539-1.833-4.903-1.833-2.672 0-5 1.007-5 2.25s2.328 2.25 5 2.25zm.093-2.009c-.299-.09-1.214-.166-1.214-.675 0-.284.335-.537.958-.593v-.223h.321v.211c.234.005.494.03.784.09l-.117.342c-.22-.051-.466-.099-.707-.099l-.072.001c-.482.02-.52.287-.188.399.547.169 1.267.292 1.267.74 0 .357-.434.548-.967.596v.22h-.321v-.208c-.329-.003-.676-.056-.962-.152l.147-.343c.244.063.552.126.828.126l.208-.014c.368-.053.443-.3.035-.418zm4.003 8.531c-.919.59-2.44.978-4.096.978-2.672 0-5-1.007-5-2.25v-.652c1.146.918 3.109 1.402 5 1.402 1.236 0 2.499-.211 3.549-.611.153.394.336.773.547 1.133zm-9.096-3.772v-.651c1.146.917 3.109 1.401 5 1.401 1.039 0 2.094-.151 3.028-.435.033.469.107.926.218 1.37-.888.347-2.024.565-3.246.565-2.672 0-5-1.007-5-2.25zm0-2.5v-.652c1.146.918 3.109 1.402 5 1.402 1.127 0 2.275-.176 3.266-.509-.128.493-.21 1.002-.241 1.526-.854.298-1.903.483-3.025.483-2.672 0-5-1.007-5-2.25zm11-11v-.652c1.146.918 3.109 1.402 5 1.402 1.892 0 3.854-.484 5-1.402v.652c0 1.243-2.327 2.25-5 2.25-2.672 0-5-1.007-5-2.25zm0 5v-.652c.713.571 1.744.974 2.876 1.197-.661.183-1.287.446-1.868.783-.622-.373-1.008-.829-1.008-1.328zm0-2.5v-.651c1.146.917 3.109 1.401 5 1.401 1.892 0 3.854-.484 5-1.401v.651c0 1.243-2.327 2.25-5 2.25-2.672 0-5-1.007-5-2.25z"/></svg>
                <p className='font-medium'>Lorem, ipsum dolor.</p><p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, dignissimos, est architecto veniam accusantium quaerat blanditiis nesciunt voluptatum ab eveniet voluptate nihil nemo obcaecati itaque in pariatur iusto officiis libero.</p></div>

        </div>
    </div>
    <footer id="bottom-nav" className="w-full h-16 bottom-0 fixed bg-white/20 backdrop-blur-md flex font-medium justify-around items-center">
            <Link href="/home"  >
                <div className=" text-gray-400 fill-gray-400 flex flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z"/></svg><p>Home </p>
               </div>
              </Link>
              <Link href='/finance'>
                <div className="hover:text-gray-400 hover:fill-gray-400 flex flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 16h10v1h-10v-1zm0-1h10v-1h-10v1zm15-13v22h-20v-22h3c1.229 0 2.18-1.084 3-2h8c.82.916 1.771 2 3 2h3zm-11 1c0 .552.448 1 1 1s1-.448 1-1-.448-1-1-1-1 .448-1 1zm9 1h-4l-2 2h-3.898l-2.102-2h-4v18h16v-18zm-13 9h10v-1h-10v1zm0-2h10v-1h-10v1z"/></svg>
                    <p>Finance</p></div>
              </Link>
              <Link href='/me'>
                <div className="hover:text-gray-400 hover:fill-gray-400 flex flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z"/></svg>                  <p>Me</p></div>
              </Link>
           </footer>
    </>
)
}

export default Dashboard;
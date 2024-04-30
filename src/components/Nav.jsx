import React from 'react'
import logo from '../assets/logo.jpg'


import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div>
     <div className='w-auto h-[90px] relative bg-[#1F1F1F]'>
       <a href='/'><img src={logo} className='w-[50px] absolute left-7 top-4 ' /></a> 
       <ul className='flex relative text-white justify-between items-center text-2xl'>
       <Link to="/" className='absolute top-6 left-[550px] text-2xl font-Inter '>Home</Link>
       <Link to='/about' className='absolute top-6 left-[900px] text-2xl font-Inter '>About</Link>
       <Link to='/contact' className='absolute top-6 left-[1050px] text-2xl font-Inter '>Contact Us</Link>
       

       <div class="group relative cursor-pointer py-2">
        
        <div class="flex absolute left-[700px] items-center justify-between bg-inherit px-1">
          <a
            class="menu-hover my-2 py-2 text-2xl font-Inter text-white lg:mx-1"
            onClick=""
          >
            Courses
          </a>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="0.5"
              stroke="currentColor"
              class="h-4 w-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </div>
        <div
          class="invisible absolute z-10 text-xl font-Inter left-[700px] top-[60px] flex w-[150px] flex-col bg- py-1 px-4 bg-[#1F1F1F] text-white shadow-xl group-hover:visible"
          onClick=""
        >
          <Link to='/btech'>
          <h1
            class="my-2 block border-b border-gray-100 py-1 font-semibold text-white hover:text-gray-400 md:mx-2"
            >B-TECH</h1
          >
          </Link>
          <Link to="/medical">
          <h1
            class="my-2 block border-b border-gray-100 py-1 font-semibold text-white hover:text-gray-400 md:mx-2"
            >MEDICAL</h1
          >
          </Link>
          <Link to="/llb">
          <h1
            class="my-2 block border-b border-gray-100 py-1 font-semibold text-white hover:text-gray-400 md:mx-2"
            >LLB
          </h1>
          </Link>
          <Link to="/mba">
          <h1
            class="my-2 block border-b border-gray-100 py-1 font-semibold text-white hover:text-gray-400 md:mx-2"
            >MBA
          </h1>
          </Link>
 
         
          
          
        </div>
      </div>
       </ul>
       <button type="button" class="text-white absolute right-[80px] bg-[#9E2222] font-xl font-Inter bottom-6 rounded-[8px] text-sm px-5 py-2.5 text-center me-2 mb-2 hover:text-gray-300">Lets's Talk</button>
       
       
       


     </div>
    
       
       
    </div>
  )
}

import React from 'react'
import vector from '../assets/Vector.png'
import vector1 from '../assets/Vector1.png'
import { Link } from 'react-router-dom'



export default function Routeicons({heading,page,page2}) {
  return (
    <div className='relative font-Inter w-auto '>
            <div className='absolute left-[700px] top-10'>
            <h1 className='font-bold text-4xl'>{heading}</h1>
            <Link to='/'><img src={vector} className='absolute top-14'></img>  </Link>
            <img src={vector1} className='absolute top-14 left-6'></img>  
            <img src={vector1} className='absolute top-14 left-7'></img>  
            <Link to={page}><p className='absolute top-14 left-10 font-bold text-xs '>{page}</p></Link>
            <img src={vector1} className='absolute top-14 left-6'></img>  
            {page2 && <img src={vector1} className='absolute top-14 left-[110px]'></img>}
           {page2 && <img src={vector1} className='absolute top-14 left-[114px]'></img> }  
           {page2 &&  <p className='absolute top-14 left-[125px] font-bold text-xs '>{page2}</p> } 

            
          
            </div>
            

        </div>
  )
}

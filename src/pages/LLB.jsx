import React from 'react'
import Routeicons from '../components/Routeicons'
import Nav from '../components/Nav'
import bvp from '../assets/BVP.png'
import christ from '../assets/Christ.png'
import mit from '../assets/MIT.png'
import symbi from '../assets/Symbiosis.png'

import { Link } from 'react-router-dom'

function Box({ image, title,page }) {
    return (
        <div>  
      <div className="border flex  justify-center rounded-md p-4 shadow-md m-2">
      <Link  to={page}>  <img src={image} alt={title} className="w-40 h-40 object-center object-cover items-center" /></Link>
      
      </div>
     
      <Link  to={page}>   <h3 className="text-lg underline text-center font-bold">{title}</h3></Link>
        
      </div>
     
    );
  }
export default function LLB() {
    const boxData = [
        { image: bvp , title: 'BVP Law College',page:"/" },
        { image: christ, title: 'Christ University' },
        { image: mit , title: 'MIT' },
        { image: symbi, title: 'Symbiosis' },
        
       
        // ... add more box data objects as needed
      ];
  return (
    <div>
        <Nav/>
      
      <Routeicons heading="LLB" page="COURSES" page2="LLB"/>
      <div className="  flex-wrap justify-center container absolute top-[200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 "> 
      {boxData.map((box, index) => (
        <Box key={index} {...box} /> 
      ))}
      
    </div>
    </div>
  )
}

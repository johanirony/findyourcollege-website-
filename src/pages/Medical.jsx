import React from 'react'
import Routeicons from '../components/Routeicons'
import Nav from '../components/Nav'
import bvp from '../assets/BVP.png'
import ACS from '../assets/ACS.png'
import DY from '../assets/DY_Patil-PNG.png'
import JNM from '../assets/JNM.png'
import KJ from '../assets/kj.png'
import MGI from '../assets/MGI.png'
import MGM from '../assets/MGM.png'
import NKP from '../assets/NKP.png'
import Laxmi from '../assets/laxmi.png'
import balaji from '../assets/balaji-medical.png'

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
export default function Medical() {
    const boxData = [
        { image: bvp , title: 'BVP',page:"/" },
        { image: ACS , title: 'ACS Medical College and Hospital' },
        { image: DY , title: 'DY Patil' },
        { image: JNM , title: 'Jawaharlal Nehru Medical College' },
        { image: KJ , title: 'KJ Somaiya' },
        { image: MGI , title: 'Mahatma Gandhi Institute of Medical Sciences (MGIMS)' },
        { image: MGM , title: 'MAHATMA GANDHI MISSION TRUST' },
        { image: NKP , title: 'VSPM Academy of Higher Education ' },
        { image: Laxmi , title: 'Shri Lakshmi Narayan Institute of Medical Science ' },
        { image: balaji , title: 'Shree Balaji Medical College and Hospital ' },

        
        { image: symbi, title: 'Symbiosis' },
        
        
       
        // ... add more box data objects as needed
      ];
  return (
    <div>
        <Nav/>
      
      <Routeicons heading="Medical" page="COURSES" page2="Medical"/>
      <div className="  flex-wrap justify-center container absolute top-[200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 "> 
      {boxData.map((box, index) => (
        <Box key={index} {...box} /> 
      ))}
      
    </div>
    </div>
  )
}

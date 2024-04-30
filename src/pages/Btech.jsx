import React from 'react'
import Routeicons from '../components/Routeicons'
import Nav from '../components/Nav'
import bvp from '../assets/BVP.png'
import aissms from '../assets/AISSMS.png'
import dy from '../assets/DY_Patil-PNG.png'
import jspm from '../assets/JSPM.png'
import kj from '../assets/kj.png'
import modern from '../assets/Modern College.png'
import pccoe from '../assets/PCCOE.png'
import pes from '../assets/PES Modern.png'
import pvg from '../assets/PVG.png'
import rv from '../assets/RV.png'
import rajiv from '../assets/Rajiv Gandhi.png'
import sinhagad from '../assets/Sinhgad Institutes.png'
import srm from '../assets/SRM.png'
import viit from '../assets/VIIT.png'
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
export default function Btech() {
    const boxData = [
        { image: bvp , title: 'BVP College of Engineering',page:"/btech/bvp" },
        { image: aissms, title: 'All India Shri Shivaji Memorial Society (AISSMS)' ,page:"/btech/aissms" },
        { image: dy , title: 'D.Y Patil' ,page:"/btech/dypatil" },
        { image: jspm , title:'JSPM',page:"/btech/jspm" },
        { image: kj , title: "K J Somaiya",page:"/btech/kj"},
        { image: modern , title: " Modern College of Engineering",page:"/btech/modern"},
        {image:pccoe,title:"Pimpri Chinchwad College of Engineering (PCCoE)",page:"/btech/pccoe"},
        { image: pes, title: 'Progressive Education Societys Modern College of Engineering (PESMCOE)' ,page:"/btech/pes"},
        { image: pvg , title:"PVG College",page:"/btech/pvg"},
        { image: rv , title:"R.V. College of Engineering",page:"/btech/rv"},
        { image: rajiv , title:"RAJIV GANDHI College",page:"/btech/rajiv"},
        { image: sinhagad, title:"Sinhgad College of Engineering",page:"/btech/sinhagad"},
        { image: srm , title:"SRM Institute of Science and Technology",page:"/btech/srm"},
        { image: viit , title:"Vishwakarma Institute of Information Technology",page:"/btech/viit"},
        { image: viit , title:"Vishwakarma Institute Technology",page:"/btech/vit"},
        { image: mit , title:"MIT ADT",page:"/btech/mitadt"},
        { image: mit , title:"MIT College Alandi",page:"/btech/mitalandi"},
        { image: mit , title:"MIT Pune",page:"/btech/mitpne"},
        { image: mit , title:"MIT WPU",page:"/btech/mitwpu"},
        { image: symbi, title: 'Symbiosis',page:"/btech/symbiosis"},
        
       
        // ... add more box data objects as needed
      ];
  return (
    <div>
        <Nav/>
      
      <Routeicons heading="B-TECH" page="COURSES" page2="B.TECH"/>
      <div className="  flex-wrap justify-center container absolute top-[200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 "> 
      {boxData.map((box, index) => (
        <Box key={index} {...box} /> 
      ))}
      
    </div>
    </div>
  )
}

import React from 'react'

import aissms from "../assets/aissmsbtech.jpg"
import Nav from '../components/Nav'
import Routeicons from '../components/Routeicons'


export default function AissmsBtech() {
 
  return (
    <div>
        
    <div className=' flex flex-col justify-between font-Inter' >
      <div>
      <Nav/>
      </div>
        
        <div>
      
        <Routeicons heading="Aissms" page="/btech" page2="Aissms"/>
        
        </div>
        <div className='pt-[100px] text-xl mx-5 mt-10 grid grid-cols-2 font-Inter divide-x justify-between '>
            
    <div className=' w-50%  mx-5 mt-5 items-start '>
      <h1 className='font-bold text-3xl '>Overview</h1><br></br>
      <p>The All India Shri Shivaji Memorial Society (AISSMS) was established in 1917 by Late H H Shrimant Shri Shahu Chhatrapati Maharaj of Kolhapur to promote the noble cause of education. The AISSMS COE, Pune is a co-education Institute established in 1992. The College of Engineering is affiliated to the University of Pune. It conducts AICTE approved courses leading to the degree of Bachelor of Engineering (BE) in eight engineering streams and Master of Engineering (ME) in Seven engineering streams.</p>
      
      <br></br>
      

    </div>
    <div className='w-50% p-10 mx-5 '>
      
      <img src={aissms}></img>


    </div>
  </div>
  </div>
  <div className=' font-Inter p-10 mx-5 text-xl'>
    <h1 className='font-bold text-3xl'>Courses Offered</h1>
    <ol className='list-disc font-normal'>
        <li>B.Tech Chemical</li>
        <li>B.Tech Civil</li>
        <li>B.Tech Computer</li>
        <li>B.Tech Electrical</li>
        <li>B.Tech Electronics and Tele.</li>
        <li>B.Tech Mechanical</li>
        <li>B.Tech Mechanical &#40;Sandwich&#41;</li>
        <li>B.Tech Production &#40;Sandwich&#41;</li>

     
    </ol>
  </div>
  <div className='px-10 mx-5 text-xl justify-between font-Inter'>
    <h1 className='font-bold text-3xl'>Eligiblity Criteria</h1>
    <p className='py-5'>AISSMS COE Pune offers admission to UG, PG and doctoral programmes. AISSMS COE Pune admissions are offered in the two streams: Engineering and Architecture, Management and Business Administration. Candidates seeking AISSMS COE Pune UG admissions must first take the MHT CET, followed by counselling. Candidates with valid JEE Main scores are also eligible to apply for UG admissions. MHT CET counselling and seat allotment are being conducted as a Centralised Admission Process &#40;CAP&#41;. All India Shri Shivaji Memorial Society College of Engineering PG admissions are made on the basis of GATE scores, followed by the counselling process.</p>
    <br></br>
    <ol className='list-disc'>
        <li>AISSMS COE Pune Application Process</li>
        <li>Visit the AISSMS COE Pune's official website.</li>
        <li>Fill out the online quick admission form and upload all required documents. </li>
        <li>Choose your assigned CAP-I/CAP-II branch from the dropdown menu.</li>
        <li>Enter your DTE application number correctly and carefully.</li>
        <li>Upload documents in the required format.</li>
    </ol>
    
    

  
  </div>
  <div className='p-5 mx-10 font-Inter text-xl justify-between'>
    <h1 className='font-bold  text-3xl'>Placements</h1>
    <p className='py-5'>All India Shri Shivaji Memorial Society College of Engineering has a Centre for Information Training and Placement that handles student training and placement. The centre is in charge of the placements at All India Shri Shivaji Memorial Society College of Engineering. The centre offers undergraduate and postgraduate students career counselling and industry training. According to the AISSMS COE Pune Placement Report NIRF data, out of 822 eligible students for AISSMS COE Pune UG placements, 491 were offered job offers with a median salary of Rs. 3,50,000 while 141 opted for higher studies.</p>
  </div>
  <div className='px-10 mx-5 font-Inter text-xl justify-between'>
    <h1 className='font-bold  text-3xl'>Companies Visited</h1>
    <ol className='list-decimal p-5 mx-5'>
   <li>Neilsoft India Pvt Ltd</li>
   <li>Johnson Control</li>
   <li>Brose India Automotive</li>
   <li>Praj Industries Pune</li>
   <li>Academor</li>
   <li>Siemens</li>
   <li>SIMIN</li>
      
      

    </ol>
  </div>
  </div>

  )
}

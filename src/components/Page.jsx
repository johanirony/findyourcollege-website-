import React from 'react'
import bvp from '../assets/bvpbtech.png'
import Nav from './Nav'
import Routeicons from './Routeicons'




export default function Page({heading,page,page2,overview,overviewL1,overviewL2,elgilist1,elgilist2,elgilist3,elgilist4,elgilist5,elgilist6,elgilist7,elgilist8,elgilist9,elgilist10,overviewL3,placement,placement1,image,course1,course2,course3,course4,course5,course6,course7,course8,course9,course10,eligiblity0,eligiblity1,eligiblity2,eligiblity3,eligiblityM1,eligiblityM2,eligiblityM3,nri1,nri2,company1,company2,company3,company4,company5,company6,company7}) {
   
  return (
    <div>
        
    <div className=' flex flex-col justify-between font-Inter' >
      <div>
      <Nav/>
      </div>
        
        <div>
      
        <Routeicons heading={heading} page={page} page2={page2}/>
        
        </div>
        <div className='pt-[100px] text-xl mx-5 mt-10 grid grid-cols-2 font-Inter divide-x justify-between '>
            
    <div className=' w-50%  mx-5 mt-5 items-start '>
      <h1 className='font-bold text-3xl '>Overview</h1><br></br>
      <p>{overview}</p>
      {overviewL1 && <h1 className='font-bold py-5 text-3xl '>Key Features</h1>}
      <ol className='list-disc text-lg'>
       {overviewL1 && <li>{overviewL1}</li>}
       {overviewL2 && <li>{overviewL2}</li>}
        {overviewL3 && <li>{overviewL3}</li>}
      </ol>
      <br></br>
      {placement1 && <h1 className='font-bold'>Placement Statistics -</h1>}
      <br></br>
     {placement1 && <p>{placement1}</p>}
     

    </div>
    <div className='w-50% p-10 mx-5 '>
      
      <img src={image}></img>


    </div>
  </div>
  </div>
  <div className=' font-Inter p-10 mx-5 text-xl'>
    <h1 className='font-bold text-3xl'>Courses Offered</h1>
    <ol className='list-disc font-normal py-5'>
      {course1 && <li>{course1}</li>}
      {course2 && <li>{course2}</li>}
      {course3 && <li>{course3}</li>}
      {course4 && <li>{course4}</li>}
      {course5 && <li>{course5}</li>}
      {course6 && <li>{course6}</li>}
      {course7 && <li>{course7}</li>}
      {course8 && <li>{course8}</li>}
      {course9 && <li>{course9}</li>}
      {course10 && <li>{course10}</li>}
     
    </ol>

  </div>
  <div className='px-10 mx-5 text-xl justify-between font-Inter'>
    <h1 className='font-bold text-3xl'>Eligiblity Criteria</h1>
    <ol className='py-5 list-disc'>
    {elgilist1 && <li>{elgilist1}</li>}
      {elgilist2 && <li>{elgilist2}</li>}
      {elgilist3 && <li>{elgilist3}</li>}
      {elgilist4 && <li>{elgilist4}</li>}
      {elgilist5 && <li>{elgilist5}</li>}
      {elgilist6 && <li>{elgilist6}</li>}
      {elgilist7 && <li>{elgilist7}</li>}
      {elgilist8 && <li>{elgilist8}</li>}
      {elgilist9 && <li>{elgilist9}</li>}
      {elgilist10 && <li>{elgilist10}</li>}
    </ol>

  { eligiblity0 &&  <p className='py-5'>{eligiblity0}</p>}
    {eligiblityM1 && <div><h1 className='font-bold'>(1) Maharashtra State Candidature Candidates:</h1>
    <ol className='list-decimal p-5 mx-5'>
      <li> {eligiblityM1}</li>
      <li> {eligiblityM2}</li>
      <h1 className='font-bold text-center'>OR</h1>
      <li>
      {eligiblityM3}

      </li>
    </ol>
    <h1 className='font-bold'>(2) All India Candidature Candidates, Union Territory of Jammu and Kashmir and Union Territory of Ladakh Migrant Candidature Candidates:</h1>
    <ol className='list-decimal p-5 mx-5'>
    <li> {eligiblity1}</li>
      <li> {eligiblity2}.</li>
      <h1 className='font-bold text-center'>OR</h1>
      <li>
      {eligiblity3}

      </li>
    </ol>
    {nri1 && <div>
    <h1 className='font-bold'>(3) NRI / OCI / PIO, Children of Indian workers in the Gulf countries, Foreign National:</h1>
    <ol className='list-decimal p-5 mx-5'>
      <li>{nri1}
</li>
       <li>
       {nri2}
       </li>
    </ol>
    </div>}
   </div>}
    

  
  </div>
  {placement && <div className='p-5 mx-10 font-Inter text-xl justify-between'>
    <h1 className='font-bold  text-3xl'>Placements</h1>
    <p className='py-5'>{placement}
  
</p>
  </div>}
  <div className='px-10 mx-5 font-Inter text-xl justify-between'>
    <h1 className='font-bold  text-3xl'>Companies Visited</h1>
    <ol className='list-decimal p-5 mx-5'>
    {company1 && <li>{company1}</li>}
      {company2 && <li>{company2}</li>}
      {company3 && <li>{company3}</li>}
      {company4 && <li>{company4}</li>}
      {company5 && <li>{company5}</li>}
      {company6 && <li>{company6}</li>}
      {company7 && <li>{company7}</li>}
      
      

    </ol>
  </div>
  </div>

  )
}

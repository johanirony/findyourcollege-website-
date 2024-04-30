import React from 'react'
import Nav from '../components/Nav'
import bg from '../assets/bg1.jpg'
import bvp from '../assets/BVP.png'
import Symbi from '../assets/Symbiosis.png'
import DY from '../assets/DY_Patil-PNG.png'
import MIT from '../assets/MIT.png'
import KJ from '../assets/kj.png'
import MGM from '../assets/MGM.png'






export default function Home() {
    
    
  return (
    <div>
       <Nav/>
       <div className='w-auto relative'>
        <img src={bg} className='w-full relative brightness-50' ></img>
        

        <h1 className='absolute top-[110px] font-Inter text-white font-bold left-[500px] text-6xl'>FIND MY ADMISSION</h1>
        <h1 className='absolute top-[210px] font-Inter text-white font-normal left-[500px] text-2xl'>DIRECT ADMISSION THROUGH MANAGEMENT QUOTA</h1>
        <button type="button" class="text-white absolute left-[750px] bottom-[700px] bg-[#9E2222] font-xl font-Inter bottom-6 rounded-[8px] text-sm px-5 py-2.5 text-center me-2 mb-2 hover:text-gray-300">Details... </button>
        <h1 className='absolute  bottom-[310px] font-Inter text-white font-bold left-[680px] text-3xl'>KNOCK KNOCK!!!</h1>
        <h1 className='absolute bottom-[210px] font-Inter text-white font-bold left-[380px] text-5xl'>"UNLOCK YOUR DREAM COLLEGE..."</h1>
        <h1 className='absolute bottom-[150px] font-Inter text-white font-bold left-[750px] text-2xl'>WITH US</h1>
       </div>
       <div className='w-auto h-auto relative font-Inter  bg-white'>
        <h1 className=' absolute top-20 left-20 text-4xl font-semibold ' >Top Colleges</h1>
        <br></br>
        <p className='absolute top-[150px] left-20 text-2xl text-[#828282] font-normal'>Here are some reputed and renowned colleges in Pune - Mumbai<br></br>
where we can pursue admission guidance for various courses. </p>
<div className="container absolute top-[250px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
<div className="flex flex-col items-center p-4 border rounded-md shadow-md hover:shadow-lg">
        
        <img src={MIT} className="w-24 h-24 object-cover rounded-md mb-2" />
  
        <h3 className="text-3xl underline font-black mb-1">MIT Pune</h3>
        
      </div>
      <div className="flex flex-col items-center p-4 border rounded-md shadow-md hover:shadow-lg">
        
        <img src={Symbi} className="w-24 h-24 object-cover rounded-md mb-2" />
  
        <h3 className="text-3xl underline font-black mb-1">Symbiosis Pune</h3>
        
      </div>
      <div className="flex flex-col items-center p-4 border rounded-md shadow-md hover:shadow-lg">
        
        <img src={DY} className="w-24 h-24 object-cover rounded-md mb-2" />
  
        <h3 className="text-3xl underline font-black mb-1">D.Y Patil,Pune</h3>
       
      </div>
      <div className="flex flex-col items-center p-4 border rounded-md shadow-md hover:shadow-lg">
        
        <img src={bvp} className="w-24 h-24 object-cover rounded-md mb-2" />
  
        <h3 className="text-3xl underline font-black mb-1">BVP Pune</h3>
        
      </div>
      <div className="flex flex-col items-center p-4 border rounded-md shadow-md hover:shadow-lg">
        
        <img src={KJ} className="w-24 h-24 object-cover rounded-md mb-2" />
  
        <h3 className="text-3xl underline font-black mb-1">K.J Somaiya</h3>
       
      </div>
      <div className="flex flex-col items-center p-4 border rounded-md shadow-md hover:shadow-lg">
        
        <img src={MGM} className="w-24 h-24 object-cover rounded-md mb-2" />
  
        <h3 className="text-3xl underline font-black mb-1">MGIMS,Pune</h3>
        
      </div>

     
      
    </div>
   

       </div>
       <div className='w-auto h-auto relative font-Inter bg-white'>
       <h1 className=' absolute top-[700px] left-20 text-4xl font-semibold ' >Reviews</h1>
       <p className='absolute top-[750px] left-20 text-2xl text-[#828282] font-normal'>Past Experience of Students</p>
       <div className="container absolute top-[800px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
       <div className="border rounded-md shadow-md p-6">
      {/* Review */}
      <div className="mb-4">
        <p className="text-gray-700 italic">"This is the worst engineering college"</p>
      </div>

      {/* Profile Section */}
      <div className="flex items-center">
        <img 
          src={bvp} 
           
          className="w-10 h-10 rounded-full object-cover mr-4" 
        />
        <div>
          <h4 className="font-medium">Rameez</h4>
          <p className="text-gray-500">BVP</p>
        </div>
      </div>
    </div>
    <div className="border rounded-md shadow-md p-6">
      {/* Review */}
      <div className="mb-4">
        <p className="text-black underline italic">"This is the worst engineering college"</p>
      </div>

      {/* Profile Section */}
      <div className="flex items-center">
        <img 
          src={bvp} 
           
          className="w-10 h-10 rounded-full object-cover mr-4" 
        />
        <div>
          <h4 className="font-medium">Rameez</h4>
          <p className="text-gray-500">BVP</p>
        </div>
      </div>
    </div>
    <div className="border rounded-md shadow-md p-6">
      {/* Review */}
      <div className="mb-4">
        <p className="text-gray-700 italic">"This is the worst engineering college"</p>
      </div>

      {/* Profile Section */}
      <div className="flex items-center">
        <img 
          src={bvp} 
           
          className="w-10 h-10 rounded-full object-cover mr-4" 
        />
        <div>
          <h4 className="font-medium">Rameez</h4>
          <p className="text-gray-500">BVP</p>
        </div>
      </div>
    </div>
    {/* <Foot/>
     */}
       
       
      
    </div>
    
    
   




       </div>
       
       
       
       
       
    </div>
  )
}

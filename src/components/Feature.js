import React from 'react';
import image1 from '../images/features/image1.png';
import image2 from '../images/features/image2.png';
import image3 from '../images/features/image3.png';
import image4 from '../images/features/image4.png';
const Feature = () => {
  return (
    <div className='bg-[#F3F4F5] min-h-[100px]'>
        <div className='w-[75%] mx-auto text-center flex-colum items-center'><br/>
            <h3 className=' justify-center text-3xl'>Feature on</h3><br/><br/>
            <div className='flex w-[80%] mx-auto items-center justify-around' >
               <div className='w-[10%]'>
                    <img src={image1} className='bg-cover'/>
               </div>
               <div className='w-[15%]'>
                    <img src={image2} className='bg-cover'/>
               </div>
               <div className='w-[15%]'>
                    <img src={image3} className='bg-cover'/>
               </div>
               
               <div className='w-[15%]'>
                    <img src={image4} className='bg-cover text-[#696969]'/>
               </div>
            </div><br/>
        </div>
    </div>
  )
 }  
  export default Feature;
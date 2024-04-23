import React from 'react';
import image1 from '../images/funtionImage/image1.png';
import { TiTick } from "react-icons/ti";
const Codeblocks = ({
    position,heading,para,list1,list2,list3,image
}) => {
  return (
    <div className='w-[65%] mx-auto min-h-[500px] ' >
        <div className={`flex ${position} justify-between gap-16 items-center ` }>
            <div className='w-[50%]'>
                <img src={image} className='bg-cover'/>
            </div>
            
            <div className='w-[60%] flex-column items-center justify-center' >
                <h1 className='text-5xl font-semibold'>{heading}</h1><br/>
                <p className='text-lg'>{para}</p><br/>
                <span className='flex items-center font-medium'>
                    <TiTick/> 
                    {list1}
                </span><br/>
                <span className='flex items-center font-medium'>
                    <TiTick/> 
                    {list2}
                </span><br/>
                <span className='flex items-center font-medium'>
                    <TiTick/> 
                    {list3}
                </span>
            </div>
        </div>
    </div>
  )
 }  
  export default Codeblocks;
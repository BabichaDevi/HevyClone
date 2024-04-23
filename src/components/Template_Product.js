import React from 'react';

const Template_Product = ({
    position,heading,para,image,button_list
}) => {
  return (
    <div className='w-[75%] mx-auto min-h-[500px] ' >
    <div className={`flex ${position} justify-between gap-16 items-center ` }>
        <div className='w-[50%]'>
            <img src={image} className='bg-cover' alt=''/>
        </div>

        <div className='w-[60%] flex-column items-center justify-center' >
            <h1 className='text-5xl font-semibold'>{heading}</h1><br/>
            <h3 className='text-lg'>{para}</h3><br/>
            <button className='bg-[#1D83EA] px-7 py-3 rounded-full text-[#FFFFFF]'>{button_list}</button>
        </div>
    </div>
</div>
  )
 }  
  export default Template_Product;
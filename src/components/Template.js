import React from 'react';

const Template = ({heading,list1,list2,list3,list4,list5}) => {
  return (
    <div className='w-[20%] '>
        <h1 className='text-lg'>{heading}</h1><br/>
        <div className='text-[#1D83EA]  '>
            <h1>{list1}</h1><br/>
            <h1>{list2}</h1><br/>
            <h1>{list3}</h1><br/>
            <h1>{list4}</h1><br/>
            <h1>{list5}</h1>
        </div>
    </div>
  )
 }  
  export default Template;
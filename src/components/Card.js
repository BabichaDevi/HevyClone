import React from 'react';

const Card = ({image,name,position,desc}) => {
  return (
        <div className='w-[45%] min-h-[400px]  bg-slate-400 flex-wrap'>   
            <img src={image}/>
            <h2>{name}</h2>
            <h2>{position}</h2>
            <p>{desc}</p>
            
        </div>   
    
  )
 }  
  export default Card;
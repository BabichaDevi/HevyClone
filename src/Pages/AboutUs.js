import React from 'react';
import image1 from '../images/features/image1.png'
import image2 from '../images/features/image2.png'
import image3 from '../images/features/image3.png'
import Team from '../components/Team';
import RejisterMain from '../components/RejisterMain';
import Footer from '../components/Footer';

const AboutUs = () => {
  return (
    <div className='w-[75%] mx-auto min-h-screen'>
            <div className=' mt-[100px] text-center'>
                <h1 className='text-5xl  font-semibold'>About Us</h1><br/>
                <h3 className='text-lg text-[#9B9B9B]'>Hevy is a free weight lifting workout tracker that lets athletes intuitively log their workouts, track progress with insightful</h3>
                <h3 className='text-lg text-[#9B9B9B]'>analytics and be part of a growing community of gym athletes.​</h3>
            </div>
            {/* feature */}
            <h3 className='text-center mt-[60px] text-3xl  font-semibold'>Feature on</h3><br/><br/>
            <div className='flex w-[80%] mx-auto items-center justify-around' >
               <div className='w-[20%]'>
                    <img src={image1} className='bg-cover'/>
               </div>
               <div className='w-[20%]'>
                    <img src={image2} className='bg-cover'/>
               </div>
               <div className='w-[20%]'>
                    <img src={image3} className='bg-cover'/>
               </div>
               
               
            </div>

            {/* story */}
            <br/>
            <Team/><br/>
            <RejisterMain/><br/>
            <Footer/>
    </div>
  )
 }  
  export default AboutUs;
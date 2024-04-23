import React from 'react';
import image1 from '../images/register/image1.png';
import image2 from '../images/register/image2.png';
import iconapple from '../images/icon-apple.svg';
import icongoogle from '../images/icon-googleplay.svg';

const RejisterMain = () => {
  return (
    <div className='w-[85%] mx-auto flex-column justify-around'> 
        <h1 className='text-5xl font-bold'>Ready to get started?</h1>  <br/>
        <div className='w-[100%] min-h-[500px] flex  gap-6'>
            {/* right */}

            <div className='w-[50%]  bg-[#F3F4F5] p-5 flex-row '>
                <h1 className='text-3xl font-semibold'>Hevy App</h1>
                <h2 className='text-2xl  text-[#1D88EC]'>For Personal Use</h2><br/>
                <p className='text-lg'>Log your workouts and track your progress on Hevy app while being part of an amazing community of +2 million gym athletes.</p><br/><br/>

                <div className='w-[60%] mx-auto '>
                
                    <img src={image1} width={500} alt=''/>
                </div>
                <div className='flex mx-auto w-[80%]  justify-evenly '>
                    <img src={iconapple} alt=''width={175}/>
                    <img src={icongoogle} alt=''width={175}/>
                </div>
            </div>

            {/* left */}
            <div className='w-[50%] bg-[#F3F9FF]  p-5 flex-row'>
                <h1 className='text-3xl font-semibold'>Hevy Coach</h1>
                <h2  className='text-2xl  text-[#1D88EC]'>For Personal Trainers and Coaches</h2><br/>
                <p className='text-lg'>World class personal trainer software for you to build and assign workout programs for your clients, and track their progress.</p><br/><br/>

                <div className='w-[100%] mx-auto '>
                    <img src={image2} width={800} alt=''/>
                </div><br/>
                <div className='flex mx-auto w-[30%] py-3 justify-center bg-[#1D83EA] rounded-full'>
                    <button className='text-[#FFFBFC]'>Learn More</button>
                </div>

            </div>
        </div>
    </div>
  )
 }  
  export default RejisterMain;
import React from 'react';
import iconapple from '../images/icon-apple.svg';
import icongoogle from '../images/icon-googleplay.svg';
import mainpage1 from '../images/main_image-1.png';
const Track = () => {
  return (
    <div className=' w-[75%] mx-auto h-screen   '>
        
        <div className='flex w-[100%] h-screen  items-center  '>
            {/* left */}
            <div className='w-[50%]   '>
                <h1 className=' text-7xl'>Track workouts</h1>
                <h1 className=' text-7xl text-[#1D83EA]'>make progress</h1><br/>
                <p className=' text-2xl'>Hevy is a free workout tracker & planner for iOS and Android. Build routines and track progress with friends.</p><br/><br/>

                <p className='text-lg'>Get the app for free</p><br/>

                <div className='flex gap-5'>
                    <img src={iconapple} alt=''width={175}/>
                    <img src={icongoogle} alt=''width={175}/>
                </div><br/><br/>
                <div className=" h-[1px] bg-[#EAEAEA]"></div>
                {/* like */}
                <br/>
                <div>
                    <p>The #1 workout tracker. Loved by +3 million athletes like you</p>
                    <p></p>
                    <p className='text-[#54595F]'>4.9 App Store & 4.9 Google Play (+45,000 ratings)</p>
                </div>
            </div>
            {/* right */}
            <div className='w-[60%] '>
                <br/>
                <img src={mainpage1} width={500}/>
            </div>

            

        </div>
    </div>
  )
 }  
  export default Track;
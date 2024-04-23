import React from 'react';
import main from '../images/Team/main.jpg';
import Card from './Card';
import imagem1 from "../images/Team/image1.jpg"
import imagem2 from "../images/Team/image2.jpg"
import RejisterMain from './RejisterMain';
const Team = () => {
  return (
    <div className='w-[100%] mx-auto'>
        <div className=' w-[90%] mx-auto bg-slate-300'>
            <img src={main} className='bg-cover w-[100%]' alt=''/>
        </div><br/>
        <div className='w-[100%]'>
            <h1 className='text-center text-5xl'>Our Story</h1>
        </div><br/>
        <p className='text-lg'>Our journey began in 2019 when we were unhappy about existing workout trackers in the market, and decided to build a more complete platform that allowed users to interact with their friends. Since then, we’ve been building Hevy thanks to the amazing community.</p><br/>

        <p className='text-lg'>Our mission is to provide gym athletes with the tools to become more successful at reaching their fitness goals.</p><br/>

        <p className='text-lg'>Unlike other fitness apps, Hevy has a hands-off approach, we don’t tell athletes how to work out, that’s totally up to them; we simply provide them with the tools to be more successful in their training. To do this, we have 3 main areas of focus:

        </p><br/>
        <div className='w-[90%] mx-auto text-lg'>
            <p>1.Seamless workout logging. Any serious athlete knows they need to document their performance to make sure they’re always improving. Generally for weight lifters, this is done with a pen and paper and people have been reluctant to switch to a mobile interface for data input. Hevy’s workout logging interface is simple yet powerful, and boasts all of the advanced features a seasoned weigh-lifter would expect.</p><br/>
            <p className='text-lg'>
                2.Insightful performance analytics. Users give us a lot of data while logging their workouts, and it’s our job to crunch that data and display it back to them through meaningful analytics that will help them track their progress and analyze their performance.
            </p><br/>
            <p className='text-lg'>
            3.Community. Hevy is building a community of gym athletes and strives to bring to our users all the benefits of working out socially. These include getting inspiration on friend’s gym routines, being held accountable by friendly competition and not to mention it’s just fun to connect with people over fitness.
            </p>
        </div><br/>

        <p className='text-lg'>We can’t wait to keep developing and improving Hevy for our amazing athletes!</p><br/>
        <p className='text-lg'>Developed remotely all over the world.</p><br/>
        
        
    </div>
  )
 }  
  export default Team;
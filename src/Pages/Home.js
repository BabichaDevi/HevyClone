import React from 'react';
import Track from '../components/Track';
import Feature from '../components/Feature';
import Codeblocks from '../components/Codeblocks';
import RejisterMain from '../components/RejisterMain';
import Footer from '../components/Footer';
import image1 from '../images/funtionImage/image1.png'
import image2 from '../images/funtionImage/image2.png'
import image3 from '../images/funtionImage/image3.png'
import image4 from '../images/funtionImage/image4.png'
import image5 from '../images/funtionImage/image1.png'
const Home = () => {
  return (
    <div>
        <div className=" h-[1px] bg-[#EAEAEA]"></div>
        <Track/>
        <Feature/>
        <br/><br/><br/>
        
        <Codeblocks
            position={"flex-row"}
            heading={"Log workouts"}
            image={image1}
            para={"A workout tracker that just works. Everything you need to log your workouts and smash your goals."}
            list1={"Intuitive Workout Logging"}
            list2={"Advanced Routine Planner"}
            list3={"Mark Warmup, Drop and Failure Sets"}
        /><br/><br/>

        <Codeblocks
            position={"flex-row-reverse"}
            image={image2}
            heading={"Measure your progress"}
            
            para={"Staying motivated is easier when you can see how far you’ve come."}
            list1={"Advanced Exercise Charts"}
            list2={"Personal Records"}
            list3={"Calculate One Rep Max"}
        /><br/><br/>

        <Codeblocks
            position={"flex-row"}
            image={image3}
            heading={"Join the community"}
            
            para={"Follow and compete with other athletes to stay motivated."}
            list1={"Follow Other Athletes"}
            list2={"Like and Comment on Workouts"}
            list3={"Save Athlete's Routines"}
        /><br/><br/>
        
        <Codeblocks
            position={"flex-row-reverse"}
            image={image4}
            heading={"Apple Watch App"}
            
            para={"Leave your phone in the locker room, and track your workouts completely from your Apple Watch. Easily sync your routines and focus on your workout."}
            list1={"Simple Interface"}
            list2={"Sync App Routines"}
            list3={"Workout Offline"}
        /><br/><br/>
        <Codeblocks
            position={"flex-row"}
            image={image5}
            heading={"Also on desktop"}
            
            para={"Use Hevy on the desktop and get a big screen view of your routines, exercise progress, and see your friend's workouts!"}
            list1={"Use Heavy on  web -> hevy.com"}
            list2={"Create And plan Routines"}
            list3={"Analyze exercise Progress"}
        /><br/><br/>

          <RejisterMain/>

          <br/><br/>
          <Footer/>
          <br/><br/>

    </div>
  )
 }  
  export default Home;
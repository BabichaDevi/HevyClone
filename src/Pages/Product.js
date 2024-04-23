import React from 'react';
import Template_Product from '../components/Template_Product';
import image1 from '../images/Product/image1.png'
import image2 from '../images/Product/image2.jpg'
import RejisterMain from '../components/RejisterMain';
import Footer from '../components/Footer';



const Product = () => {
  return (
    <div className=''>
        <Template_Product  position={"flex-row-reverse"} para={"Hevy is a gym workout tracker & planner app for iOS and Android. Easily plan your weight lifting routines, track your exercise progress, and join a growing community of gym athletes. Explore use cases, product features, as well as frequently asked questions and tutorials!"} heading={"Product"} image={image1} button_list={"Download App"} /><br/>

        <Template_Product  position={"flex-row"} para={"Hevy can be useful for a variety of use cases, such as bodybuilding, powerlifting, calisthenics, or just regular gym goers! The powerful thing about Hevy is that we don’t tell you how to work out, we’re just a tool to help you organize your training, track your results and get motivated by the amazing Hevy community."} heading={"Use Cases"} image={image2} button_list={"See All Use Cases"} />

        <RejisterMain/><br/>
        <Footer/><br/><br/>

        
    </div>
  )
 }  
  export default Product;
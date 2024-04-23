import React from 'react';
import logo from '../images/hevy-logo.svg'
import { TiSocialInstagram } from "react-icons/ti";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import Template from './Template';
const Footer = ({text}) => {
  return (
    <div>
        <div className='w-[75%] mx-auto min-h-[200px]  flex items-center gap-7 pt-7'>

            {/* 1st */}

            <div className='    h-[250px] '>
                <div className='w-[40%]'>
                    <img src={logo} className='bg-cover'/>
               </div><br/>
               <p>Simply the best workout tracking app.</p><br/>

                {/* social media */}
                <div className='flex gap-3'>
                    <TiSocialInstagram  className=' text-3xl'/>
                    <FaFacebook  className=' text-3xl'/>
                    <FaLinkedin className=' text-3xl' />
                    <FaTwitter className=' text-3xl'/>
                </div>
            </div>
            
            {/* 2nd */}
            <Template
                heading={"PRODUCT"}
                list1={"Reviews"}
                list2={"Affiliate Program"}
                list3={"Use Cases"}
                list4={"FAQ"}
                list5={"Hevy Coach"}
            />
            {/* 3rd */}
            <Template
                heading={"COMPANY"}
                list1={"About"}
                list2={"Contact Us"}
                list3={"Careers"}
                list4={"Press & Media"}
                list5={"As Seen On"}
            />
            {/* 4th */}
            <Template
                heading={"RESOURCES"}
                list1={"Blog"}
                list2={"Guides"}
                list3={"Exercise Library"}
                list4={"Compound vs Isolation"}
                
            />

                {/* 5th */}
            <Template
                heading={"GUIDES"}
                list1={"Best 3 day Workout Splits"}
                list2={"4 day workout Split"}
                list3={"5 day workout Split"}
                list4={"Upper / Lower Split"}

                
            />
        </div>
    </div>
  )
 }  
  export default Footer;
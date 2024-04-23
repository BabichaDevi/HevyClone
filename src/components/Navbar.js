import React from 'react';
import logo from '../images/hevy-logo.svg';
import Button from './Button';
import {Link, NavLink} from "react-router-dom"
 const Navbar = () => {
  return (
    <div className='w-[75%] mx-auto h-[68px]   flex items-center  text-lg font-semibold'>
        <div className='w-[80%] items-center flex'>
            <nav className=' flex w-[80%]  justify-between items-center'>
                
                <img src={logo} width="25%" alt='' className=' font-thin'/>

                <ul className=' flex justify-evenly w-[75%] ml-11 '>
                    <li>
                        <NavLink to="/"  activeClassName="active">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Product">Product</NavLink>
                    </li>
                    <li>Articles</li>
                    <li>Heavy Coach</li>
                    <li>
                        <NavLink to="/AboutUs">About Us</NavLink>
                    </li>
                </ul>
            </nav>
        </div>


        {/* button */}
        <div className=' flex  w-[20%] justify-evenly p-3'>
            <Button  text="Login"/>
            <Button  text="Sign up" className="rounded "/>
        </div>

        
    </div>
 )
}
export default Navbar;
import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaCampground } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import image from '../image/image.png'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div className='bg-slate-800 text-white overflow-hidden container-fluid'>
        <div id='home' className='grid  sm:grid-cols-1 lg:grid-cols-2 md:grid-cols-2  gap-4 '>
            
            <div className='p-5 mx-auto'>
                <img className='object-cover img-fluid  mt-15 myimg' src={image} alt="" />
            </div>
            <div className='mt-15 p-20'>
                <h1 className='text-lg font-bold'>Hello It's Me  </h1>
                <h1 className='text-5xl font-bold tracking-in-contract'>Ajay Kumar Tyagi</h1>
                <h1 className='text-3xl font-bold mt-3 typed tracking-in-expand ' >And I'm a Full Stack Developer</h1>
                <p className='mt-3'>A full stack developer handles both front-end and back-end development, working with technologies like HTML, CSS, JavaScript, databases, and server-side languages, ensuring seamless integration and deployment of web applications.</p>
                    <div className='flex mt-10 gap-4' >
               <a href="https://www.facebook.com/ajaytyagi.annu"><FaFacebook className='w-10 h-8 bg-cyan-400 rounded-full hover:bg-orange-500' /></a> 
                <a href=""><FaInstagram className='w-10 h-8 bg-cyan-400 rounded-full hover:bg-orange-500' /></a>
               <a href="https://github.com/ajaytyagi7"><FaGithub  className='w-10 h-8 bg-cyan-400 rounded-full hover:bg-orange-500'/></a> 
                <a href="https://www.linkedin.com/in/ajay-kumar-tyagi-8a750924a/"><FaLinkedin className='w-10 h-8 bg-cyan-400 rounded-full hover:bg-orange-500' /></a>
                </div>
                <button className='btn mt-5   fw-bold'>More About</button>
               

            </div>
        </div>
        <div id='about' className='grid  sm:grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4 p-5'>
        <div className='mt-7 p-4'>
            <h1 id='' className='text-5xl font-bold '>About Me</h1>
            <h1 className='text-xl font-bold'>Full Stack Developer</h1>
            <p className='mt-3'>I Am a skilled web developer with over 1 year. My passion in creating capativating website design and impelementing them through frontend developement
              .I take pride in staying up to date with the latest web technologies and tools. I am a quick learner and a team player who is always ready to take on new challenges.
              Throughout my career ,I have developed visiually a deep understanding of the web development process and have a keen eye for detail. I am always looking for ways to improve my skills and learn new technologies.
              I am a skilled web developer with over 1 year. My passion in creating capativating website design and impelementing them through frontend developement
              .I take pride in staying up to date with the latest web technologies and tools. I am a quick learner and a team player who is always ready to take on new challenges.
              Throughout my career ,I have developed visiually a deep understanding of the web development process and have a keen eye for detail. I am always looking for ways to improve my skills and learn new technologies.
            </p>
            <button className='btn mt-5  fw-bold'>More About  </button>
          </div>
          <div className='p-4 mx-auto'>
              <img className='object-cover img-fluid myimg mt-15 ' src={image} alt="" />
          </div>
          
        </div>
        <h1 id='services' className='text-center text-5xl mt-5 font-bold'>My Services</h1>
        <div className='grid  sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-20 p-11'>
        <div className='card  p-5 bg-slate-700 text-white shadow-3xl'>
        <FaCode  className='w-10 h-10 mx-auto'/>
        <h1 className='text-2xl font-bold  mx-auto'>Web Development</h1>
        <p className='mx-auto ' >Web development services encompass designing, building, and maintaining websites, involving front-end and back-end development, user experience design, database management, and ensuring functionality, responsiveness, and performance across devices.</p>

        </div>
        <div className='card p-5 bg-slate-700 text-white shadow-2xl'>
        <FaCampground className='w-10 h-10 mx-auto' />
        <h1 className='text-2xl font-bold mx-auto'>UI/UX</h1>
        <p className='mx-auto'>UI User Interface design focuses on creating visually appealing, intuitive, and responsive interfaces for websites and applications, ensuring an engaging and user-friendly experience through layout, typography, color schemes, and interactive elements.</p>

        </div>
        <div className='card p-5 bg-slate-700 text-white shadow-2xl hover:'>
        <FaApple className='w-10 h-10 mx-auto' />
        <h1 className='text-2xl font-bold mx-auto'>Apple</h1>
        <p className='mx-auto'>Apple's web development services include crafting responsive, high-performance websites and applications, integrating advanced technologies, seamless UI/UX design, and ensuring compatibility across Apple devices for an optimal user experience.</p>

        </div>
        
        </div>
        <h1 id='project' className='text-center text-5xl font-bold'>Latest Project</h1>
        <div>
        <div className='grid  sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-20 p-11 group'>
          <div className='card cursor-pointer group-hover:blur-sm hover:!blur-none'>
            <img className='object-cover' src="https://img.freepik.com/free-photo/join-us-new-business-launch-plan-concept_53876-124943.jpg?t=st=1717392257~exp=1717395857~hmac=362ace1d4f1ba42ec9270d035bf273613e45564ce69d4eec03e45cab3708aa41&w=996" alt="" />
            <div className='p-5 bg-cyan-400 '>
              <h1 className='text-2xl font-bold'>Job Portal</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aliquam obcaecati voluptates,
                  numquam ex earum ea placeat voluptatibus ipsa! Sed?</p>
                 <a href="https://off-beat-campus.vercel.app/"><button className=' btn mt-3  fw-bold hover:bg-orange-500'>View</button></a> 

              </div>
          </div>
          <div className='card cursor-pointer group-hover:blur-sm hover:!blur-none'>
            <img className='object-cover' src="https://img.freepik.com/free-photo/people-taking-photos-food_23-2149303525.jpg?t=st=1717392299~exp=1717395899~hmac=9fd55060dd4ba0fa87ad07f75cea7f3cdf28dbad89f62165dc928352e41e1044&w=996" alt="" />
            <div className='p-5 bg-cyan-400'>
              <h1 className='text-2xl font-bold'>Restaurants Table Booking</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aliquam obcaecati voluptates,
                  numquam ex earum ea placeat voluptatibus ipsa! Sed?</p>
                 <a href="https://github.com/ajaytyagi7/BookaTable"><button className=' btn  mt-3 fw-bold hover:bg-orange-500'>View</button></a> 

              </div>
          </div>
          <div className='card cursor-pointer group-hover:blur-sm hover:!blur-none'>
            <img className='object-cover' src="https://img.freepik.com/free-photo/wrapped-gifts-arrangement-with-copy-space_23-2148667050.jpg?t=st=1717392346~exp=1717395946~hmac=8c5239aae0754b1e8aa600e1dcdca361cb624be31f922c2a01fc0ad1150afca3&w=996" alt="" />
            <div className='p-5 bg-cyan-400'>
              <h1 className='text-2xl font-bold'>Gift E-commerce</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aliquam obcaecati voluptates,
                  numquam ex earum ea placeat voluptatibus ipsa! Sed?</p>
                  <a href="https://github.com/ajaytyagi7/Gift"><button className=' btn fw-bold mt-3 hover:bg-orange-500'>View</button></a>
              </div>
          </div>
          </div>
        </div>
        <h1 id='contact' className='text-5xl font-bold text-center mt-3'>Contact Me</h1>
        <div className='grid  sm:grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4 mt-5 p-10'>
         <div className='p-10'>
         <h1 className='text-lg font-bold'>Let's Work Together</h1>
          <p>Let's work together to create responsive, high-performance websites with seamless UI/UX design, ensuring optimal functionality across all devices.
        </p>
         <div className='flex mt-2'>
          <MdContactMail className='w-5 h-4 mt-2 bg  '  />
           <p>ajaytyagi9120@gmail.com</p>
          </div>
          <div className='flex mt-2'>
          <IoCallOutline className='w-5 h-4 mt-2'/>
          <p>+91-9120851241</p>
          
          </div>
          <a className='Download-button w-50  fw-bold mt-4' href="https://drive.google.com/file/d/1Vmwq9-uJQyJYe50T3ax1hgkxnNQYRgjH/view?usp=sharing">Download CV</a>

         </div>
         <div>
          <form>
          <input type="text" placeholder='Name' className='p-3 w-full bg-slate-700 text-white border' />
          <input type="text" placeholder='Email' className='p-3 w-full bg-slate-700 text-white mt-5 border' />
          <textarea className='w-full bg-slate-700 p-3 text-white mt-5 border' placeholder='Message' name="" id=""></textarea>
          <button className='btn  fw-bold mt-4'>Send Message</button>
          </form>
         </div>
         </div><hr />
         <div className='p-4'>
         <p className='text-center '>© 2024 Portfolio.in Cookie Policy / Privacy / Terms / Data Processing / Accessibility</p>

         </div>
    </div>
  )
}

export default Home
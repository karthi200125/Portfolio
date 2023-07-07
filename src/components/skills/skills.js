import React from 'react'
import aboutimg from '../photos/pic-2.jpg'
import './skills.css'
import {AiOutlineInstagram}from 'react-icons/ai'
import {AiFillGithub}from 'react-icons/ai'
import {AiOutlineLinkedin}from 'react-icons/ai'
import { Link } from "react-scroll";
import Resume from './resume.pdf';


function Skills() {
  return (
    <section className="section" id="skills">
      <div className='container mx-auto '>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center'>          
            <img className='flex-1 bg-about bg-contain bg-no-repeat h-[400px] about-img rounded-full'src={aboutimg}></img>                    
          <div className='flex-1'>
          <h2 className='h2 text-accent'>About Me</h2>
          <h3 className='h3 mb-4'>Junior Full Stack Developer</h3>
          <p className='aboutp mb-6'>
            <b>B.E (Electrical And Electronics Enginerring)</b>
            CGPA : 7.7 <br/>
            2022 Graduate , TAMILNADU , INDIA 
          </p>      
          <p>            
          I'm a passionate Full Stack Developer specializing in frontend development. With strong leadership, 
          problem-solving, and communication skills, I deliver exceptional outcomes. Let's collaborate to create 
          remarkable projects. Explore my portfolio for examples of my work.
          </p>
          <a href={Resume} download>
          <button className='btn text-white'>Download RESUME</button>
        </a>

          {/* <Link to="contact"><button className='btn'>Contact Me</button></Link>   */}
        
<div className='icons'>        
<a href="https://www.instagram.com/duet_karthick/"><AiOutlineInstagram href=""className='icon1' size={30}/></a>
        <a href="https://github.com/karthi200125"><AiFillGithub className='icon2'size={30}/></a>
        <a href="https://www.linkedin.com/in/karthi-keyan-694827236/"><AiOutlineLinkedin className='icon3'size={30}/></a>
</div>
          </div>
        </div>
      </div>
</section>

  )
}

export default Skills
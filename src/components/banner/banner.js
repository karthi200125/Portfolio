import { TypeAnimation } from 'react-type-animation';
import './banner.css'
import headerImg from "../photos/header-img.svg";
import TrackVisibility from 'react-on-screen';
import {AiOutlineInstagram}from 'react-icons/ai'
import {AiFillGithub}from 'react-icons/ai'
import {AiOutlineLinkedin}from 'react-icons/ai'
import { Link } from "react-scroll";


function Banner(){
    return(
        <section className="banner min-h-[85vh] lg:min-h-[78vh] flex items-center" id="home">
            <div className="container mx-auto">
                <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
                    <div className="flex-1 text-center font-secondary lg:text-left">
                        <h1 className="name text-[55px] font-bold leading-[0.8] lg:text">
                            KARTHI<span> KEYAN</span>
                        </h1>
                        <div className='mb-6 text-[36px] lg:text-[60px]'>
                            <span className='mr-4'>Hi, <br/>I am a</span>
                            <br/>
    <TypeAnimation className="lettermove"
      sequence={[        
        'Full Stack Developer',
        2000,
        'Web Developer', 
        2000,
        'Java Developer',
        2000 
        
      ]}
      speed={50}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
    />    
    <div className="max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0 "> 
     <Link to="contact"><button className='bannerbtn btn '>Contact me</button></Link>
     <div className='icons'>        
        <a href="https://www.instagram.com/"><AiOutlineInstagram href=""className='icon1' size={30}/></a>
        <a href="https://github.com/karthi200125"><AiFillGithub className='icon2'size={30}/></a>
        <a href="https://www.linkedin.com/in/karthi-keyan-694827236/"><AiOutlineLinkedin className='icon3'size={30}/></a>
</div>


     </div>

                        </div>
                    </div>
                    <div className="lg:flex flex-1 max-w-[450px] lg:max-w-[482px] ">
                        <TrackVisibility className="updownimage">            
                  <img src={headerImg} alt="Header Img"/>                
            </TrackVisibility>
                    </div>
                </div>

            </div>
        </section>
        
        
    )
}
export default Banner
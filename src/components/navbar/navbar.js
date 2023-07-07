import React from "react"
import { AiFillHome,AiOutlineUserAdd,AiFillDownSquare } from 'react-icons/ai';
import { BsFillBriefcaseFill,BsFillClipboardCheckFill } from 'react-icons/bs';
import { Link } from "react-scroll";

function Navbar(){
    return(
        <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
          <div className="container mx-auto">
            <div className="w-full bg-black/20 h-[66px] backdrop-blur-2x1 rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2x1 text-white/50">
              <Link to="home" activeClass="active"spy={true} className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
              <AiFillHome/>
              </Link >
              <Link to="skills" activeClass="active"spy={true} className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
              <AiOutlineUserAdd/>
              </Link>
              <Link to="about" activeClass="active"spy={true} className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
              <BsFillBriefcaseFill/>
              </Link>
              <Link to="project" activeClass="active"spy={true} className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
              <BsFillClipboardCheckFill/>
              </Link >
              <Link to="contact" activeClass="active"spy={true} className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
              <AiFillDownSquare/>
              </Link >
            </div>
          </div>
        
        </nav>
    )
}
export default Navbar
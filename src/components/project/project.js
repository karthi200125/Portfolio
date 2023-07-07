import React from "react"
import img1 from '../photos/cc.png'
import img2 from '../photos/ecom.png'
import img3 from '../photos/portfolio-2.png'
import img4 from '../photos/SN.png'
import img5 from '../photos/tt.png'
import img6 from '../photos/Pizza-shop.png'
import img7 from '../photos/RB.png'
import img8 from '../photos/Gym.png'
import img9 from '../photos/chat.png'
import img10 from '../photos/social.jpg'

import './project.css'


function Project(){
    return(
        <section className="project"id="project">
           <div className="container mx-auto">

            <div className="flex flex-col lg:flex-row gap-x-10">
                <div className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
                    {/* text */}
                    <div className="leading-tight text-accent">
                        <h2 className="projecth2">MY PROJECTS</h2>
                        <p className="projectp max-w-sm mb-16">
                        Developed all This Projects , i Gained Lots of Hands On Experince .
                        
                        </p>
                        <button className="projectbtn btn ">Projects</button>
                    </div>
                    {/* image */}
                    <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">                    
                        <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                        <img className="group-hover:scale-125 transition-all duration-500" src={img10}/>
                        <div className="absolute -bootom -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50"><span className="text-gradient"><a className="visitsite"href=" https://karthi200125.github.io/Fitness-Website/">Visit Site</a></span></div>
                        <div className="absolute -bootom -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                            <span className="text-3x1 text-white">Real Time Social Media Website</span>
                        </div>
                    </div>
                    <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">                    
                        <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                        <img className="group-hover:scale-125 transition-all duration-500" src={img8}/>
                        <div className="absolute -bootom -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50"><span className="text-gradient"><a className="visitsite"href=" https://karthi200125.github.io/Fitness-Website/">Visit Site</a></span></div>
                        <div className="absolute -bootom -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                            <span className="text-3x1 text-white">Fitness Website</span>
                        </div>
                    </div>
                    <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">                    
                        <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                        <img className="group-hover:scale-125 transition-all duration-500" src={img6}/>
                        <div className="absolute -bootom -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50"><span className="text-gradient"><a className="visitsite"href=" https://karthi200125.github.io/Pizza_Shop/">Visit Site</a></span></div>
                        <div className="absolute -bootom -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                            <span className="text-3x1 text-white">Pizza Shop</span>
                        </div>
                    </div>
                    <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">                    
                        <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                        <img className="group-hover:scale-125 transition-all duration-500" src={img3}/>
                        <div className="absolute -bootom -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50"><span className="text-gradient"><a className="visitsite"href="https://karthi200125.github.io/Portfolio-2/">Visit Site</a></span></div>
                        <div className="absolute -bootom -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                            <span className="text-3x1 text-white">Personal Portfolio - 2</span>
                        </div>
                    </div>
                </div>
                
                <div className="flex-1 flex flex-col gap-y-10">

                <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">                    
                        <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                        <img className="group-hover:scale-125 transition-all duration-500" src={img2}/>
                        <div className="absolute -bootom -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50"><span className="text-gradient"><a className="visitsite"href="https://visionary-cajeta-568342.netlify.app/">Visit Site</a></span></div>
                        <div className="absolute -bootom -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                            <span className="text-3x1 text-white">Full Stack E-Commerce Shopping Mart</span>
                        </div>
                    </div>    
                    <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">                    
                        <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                        <img className="group-hover:scale-125 transition-all duration-500" src={img9}/>
                        <div className="absolute -bootom -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50"><span className="text-gradient"><a className="visitsite"href="https://649c43665afb4f112aabb10c--earnest-cassata-a5735e.netlify.app/">Visit Site</a></span></div>
                        <div className="absolute -bootom -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                            <span className="text-3x1 text-white">Real Time Chatting App </span>
                        </div>
                    </div>    
                
                    <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">                    
                        <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                        <img className="group-hover:scale-125 transition-all duration-500" src={img7}/>
                        <div className="absolute -bootom -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50"><span className="text-gradient"><a className="visitsite"href="https://karthi200125.github.io/Resume_Builder/">Visit Site</a></span></div>
                        <div className="absolute -bootom -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                            <span className="text-3x1 text-white">Resume Builder</span>
                        </div>
                    </div>

                    <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">                    
                        <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                        <img className="group-hover:scale-125 transition-all duration-500" src={img1}/>
                        <div className="absolute -bootom -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50"><span className="text-gradient"><a className="visitsite"href="https://karthi200125.github.io/currency-converter/">Visit Site</a></span></div>
                        <div className="absolute -bootom -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                            <span className="text-3x1 text-white">Currency Converter</span>
                        </div>
                    </div>    
                    <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">                    
                        <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                        <img className="group-hover:scale-125 transition-all duration-500" src={img5}/>
                        <div className="absolute -bootom -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50"><span className="text-gradient"><a className="visitsite"href=" https://karthi200125.github.io/Tic-Tac-Toe/">Visit Site</a></span></div>
                        <div className="absolute -bootom -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                            <span className="text-3x1 text-white">Tac Toe game</span>
                        </div>
                    </div>
                    <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">                    
                        <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                        <img className="group-hover:scale-125 transition-all duration-500" src={img4}/>
                        <div className="absolute -bootom -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50"><span className="text-gradient"><a className="visitsite"href="https://karthi200125.github.io/snakee/">Visit Site</a></span></div>
                        <div className="absolute -bootom -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                            <span className="text-3x1 text-white">Snake game</span>
                        </div>
                    </div>    
                </div>
            
            </div>
        </div>    
        </section>
        
        
    )
}
export default Project
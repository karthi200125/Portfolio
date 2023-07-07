import './about.css'
import logo from '../photos/skills2.jpg'

function About(){
    return(
        <section className="home-container min-h-[85vh] lg:min-h-[78vh] flex items-center" id="about">
            <div className="container mx-auto">
            <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
            <div className="flex-1 text-center font-secondary lg:text-left">
             <h2 className='skillsh2'>SKILLS</h2>
            <div className="logo">
                <div className="main-img">
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                </div>
                <img className="skillslogo"src={logo} alt=""></img>
            </div>  
            
{/* skills percentage */}
            </div>
            <div className="lg:flex flex-1 max-w-[400px] lg:max-w-[500px] ">                      
          <div className="container skilcon">
            <div className="row">
                <div className="col-12">
                    <div className='body'>
                    <div className='skills-wraper'>
                        
                        <div className='skill'>
                           <div className='content'>
                            <span>90%</span><span>Html</span>
                           </div>
                        </div>
                        <div className='skill'>
                           <div className='content'>
                            <span>75%</span><span>Css</span>
                           </div>
                        </div>
                        <div className='skill'>
                           <div className='content'>
                            <span>65%</span><span>Javscript</span>
                           </div>
                        </div>
                        <div className='skill'>
                           <div className='content'>
                            <span>80%</span><span>Java</span>
                           </div>
                        </div>
                        <div className='skill'>
                           <div className='content'>
                            <span>70%</span><span>Bootstrap</span>
                           </div>                           
                        </div>
                        <div className='skill'>
                           <div className='content'>
                            <span>70%</span><span>React-js</span>
                           </div>
                        </div>
                        <div className='skill'>
                           <div className='content'>
                            <span>75%</span><span>MYSQL</span>
                           </div>
                        </div>
                        <div className='skill'>
                           <div className='content'>
                            <span>70%</span><span>jQuery</span>
                           </div>                        
                        </div>
                        <div className='skill'>
                           <div className='content'>
                            <span>80%</span><span>Git</span>
                           </div>
                        </div>
                        
                        <div className='skill'>
                           <div className='content'>
                            <span>70%</span><span>C</span>
                           </div>
                        </div>
                        <div className='skill'>
                           <div className='content'>
                            <span>60%</span><span>Node Js</span>
                           </div>
                        </div>
                        <div className='skill'>
                           <div className='content'>
                            <span>80%</span><span>Sass</span>
                           </div>
                        </div>

                    </div>
                    </div>
                </div>
            </div>
        </div>
            </div>
        </div>
            
            </div>  
        </section>
    )
}
export default About
import './App.css';
import Navbar from './components/navbar/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/about/about';
import Banner from './components/banner/banner';
import Contact from './components/contact/contact';
import Project from './components/project/project';
import Skills from './components/skills/skills';

function App() {
  return (
    <div className="app bg-site bg-no-repeat bg-cover overflow-hidden">
           <Navbar/>
           <Banner/>
           <Skills/>
           <About/>
           <Project/>
           <Contact/>
    </div>
  );
}

export default App;

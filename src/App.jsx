import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';

const App = () => {
  return (
    <div className="relative min-h-screen">
      <div className="absolute top-0 left-0 w-full h-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] z-0">
      </div>

      <div className="relative z-10">       
          <Navbar />
        <div id='home'>
          <Home />
        </div>
        <div id='about'>
          <About />
        </div>
        <div id='skills'>
          <Skills />
        </div>
        <div id='exp'>
          <Experience />
        </div>
        <div id='projects'>
          <Projects />
        </div>
      </div>
    </div>
  )
}

export default App;


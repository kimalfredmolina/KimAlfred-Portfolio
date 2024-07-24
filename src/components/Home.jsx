import { FaFacebook, FaInstagram, FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa';
import profilePic from '../assets/kim.jpg';
import { FaDownload } from "react-icons/fa6";
import background from '../assets/devbg.gif';

const Home = () => {
  return (
    <div 
      id="home" 
      className="min-h-screen flex flex-col items-center justify-center bg-neutral-700 text-white font-poppins"
      style={{ 
        backgroundImage: `url(${background})`, 
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center' 
      }}>
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black">Hey!👋 this is</h1>
        <h2 className="text-6xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-2 bg-gradient-to-r from-yellow-400 via-neutral-950 to-rose-900 bg-clip-text text-4xl tracking-tight text-transparent">Kim Alfred A. Molina</h2>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mt-2">Computer Science Student</p> 
      </div>
      <div className="mb-8">
        <img src={profilePic} alt="Profile" className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full border-8 border-black" />
      </div>
      <div className="flex space-x-4 mb-8">
        <a href="#" target="_blank" rel="noopener noreferrer" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl hover:text-blue-600 transition-colors duration-300">
          <FaFacebook />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl hover:text-rose-700 transition-colors duration-300">
          <FaInstagram />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl hover:text-black transition-colors duration-300">
          <FaGithub />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl hover:text-blue-600 transition-colors duration-300">
          <FaLinkedin />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl hover:text-orange-600 transition-colors duration-300">
          <FaStackOverflow />
        </a>
      </div>
      <div className="flex space-x-4">
        <button className="group relative">
          <div className="relative z-10 inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-transparent px-6 font-medium text-neutral-600 transition-all duration-300 group-hover:-translate-x-3 group-hover:-translate-y-3">
            <a href="/path/to/your/cv.pdf" download className="text-white hover:text-red-600 transition-colors duration-300">Download CV</a>  <FaDownload color='white'/>
          </div>
          <div className="absolute inset-0 z-0 h-full w-full rounded-md transition-all duration-300 group-hover:-translate-x-3 group-hover:-translate-y-3 group-hover:[box-shadow:5px_5px_#a3a3a3,10px_10px_#d4d4d4,15px_15px_#e5e5e5]"></div>
        </button>
      </div>
    </div>
  );
}

export default Home;

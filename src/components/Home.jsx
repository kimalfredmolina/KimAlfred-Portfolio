import React from 'react';
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa';
import profilePic from '../assets/kim.jpg';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-700 text-white font-poppins">
      <div className="text-center mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black">Hey! this is</h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-2">Kim Alfred A. Molina</h2>
        <p className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">Developer</p> 
      </div>
      <div className="mb-8">
        <img src={profilePic} alt="Profile" className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full border-8 border-black" />
      </div>
      <div className="flex space-x-4 mb-8">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl hover:text-blue-600 transition-colors duration-300">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl hover:text-rose-900 transition-colors duration-300">
          <FaInstagram />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl hover:text-black transition-colors duration-300">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl hover:text-blue-600 transition-colors duration-300">
          <FaLinkedin />
        </a>
        <a href="https://stackoverflow.com" target="_blank" rel="noopener noreferrer" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl hover:text-orange-600 transition-colors duration-300">
          <FaStackOverflow />
        </a>
      </div>
      <div className="flex space-x-4">
        <a href="/path/to/your/cv.pdf" download className="bg-black text-white py-2 px-4 rounded-full flex items-center space-x-2 border border-white hover:bg-stone-700 transition duration-300">
          <span>Download CV</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5 3a1 1 0 012 0v7h6V3a1 1 0 112 0v7a1 1 0 01-.293.707L10.414 14H9.586l-4.293-4.293A1 1 0 015 10V3zM3 16a1 1 0 011-1h12a1 1 0 011 1v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-1z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Home;

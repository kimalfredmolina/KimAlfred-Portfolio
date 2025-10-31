import { FaFacebook, FaInstagram, FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa';
import { BiLogoGmail } from "react-icons/bi";
import profilePic from '../assets/kim.jpg';
import cv from '../assets/Kim Alfred.pdf'
import { FaDownload } from "react-icons/fa6";
import background from '../assets/code.gif';
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: {x: -100, opacity:0},
  visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay}
  }
})

const Home = () => {
  return (
    <div 
      id="home" 
      className="min-h-screen flex flex-col items-center justify-center text-white font-poppins px-4 sm:px-6 md:px-8 lg:px-10"
      style={{ 
        backgroundImage: `url(${background})`, 
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center' }}>

      {/* Text */}
      <div className="text-center mb-8">
        <motion.h1 
          variants={container(0)}
          initial="hidden"
          animate="visible"
          className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          Hey!👋 this is
        </motion.h1>

        <motion.h2 
          variants={container(1)}
          initial="hidden"
          animate="visible"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mt-2 bg-gradient-to-r from-rose-700 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Kim Alfred A. Molina
        </motion.h2>

        <motion.p 
          variants={container(1.5)}
          initial="hidden"
          animate="visible"
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl mt-2">
          Computer Science Student
        </motion.p>         
      </div>

      {/* Picture */}
      <div className="mb-8">
        <motion.img
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }} 
          src={profilePic} 
          alt="Profile" 
          className="w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-60 lg:h-60 rounded-full border-8 border-purple-400"/>
      </div>

      {/* Icons */}
      <div className="flex flex-wrap justify-center space-x-4 mb-8">
        <motion.a 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          href="https://www.facebook.com/kimalfred.amolina" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl hover:text-blue-600 transition-colors duration-300">
          <FaFacebook />
        </motion.a>

        <motion.a 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          href="https://www.instagram.com/kim_alfredkim/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl hover:text-rose-700 transition-colors duration-300">
          <FaInstagram />
        </motion.a>

        <motion.a 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          href="https://github.com/kimalfredmolina" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl hover:text-black transition-colors duration-300">
          <FaGithub />
        </motion.a>

        <motion.a 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          href="https://www.linkedin.com/in/kim-alfred-molina-323455276/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl hover:text-blue-600 transition-colors duration-300">
          <FaLinkedin />
        </motion.a>

        <motion.a 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          href="https://stackoverflow.com/users/23153926/kim-alfred-a-molina" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl hover:text-orange-600 transition-colors duration-300">
          <FaStackOverflow />
        </motion.a>

        <motion.a 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          href="#contact" 
          rel="noopener noreferrer" 
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl hover:text-rose-600 transition-colors duration-300">
          <BiLogoGmail />
        </motion.a>
      </div>
      
      <div className="flex space-x-4">
        <button className="group relative">
          <div className="relative z-10 inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-transparent px-6 font-medium text-neutral-600 transition-all duration-300 group-hover:-translate-x-3 group-hover:-translate-y-3">
            <a href={cv} download className="text-white hover:text-purple-600 transition-colors duration-300">Download CV</a>  
            <FaDownload color='white'/>
          </div>
          <div className="absolute inset-0 z-0 h-full w-full rounded-md transition-all duration-300 group-hover:-translate-x-3 group-hover:-translate-y-3 group-hover:[box-shadow:5px_5px_#a3a3a3,10px_10px_#d4d4d4,15px_15px_#e5e5e5]"></div>
        </button>
      </div>
    </div>
  );
}

export default Home;

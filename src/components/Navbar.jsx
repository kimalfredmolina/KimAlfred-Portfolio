import { useState } from 'react';
import { motion } from "framer-motion";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'; 
import logo from '../assets/k.png';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div className="fixed top-0 left-0 w-full text-lime-400 z-50 font-poppins bg-transparent">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <a href="https://www.facebook.com/kimalfred.amolina">
              <img src={logo} alt="Logo" className="h-12" />
            </a>
          </div>
          <div className="hidden md:flex flex-1 justify-center items-center space-x-8 lg:space-x-12 text-lg lg:text-2xl">
            <a href="#home" className="hover:text-red-600 font-bold duration-300">Home</a>
            <a href="#about" className="hover:text-red-600 font-bold duration-300">About</a>
            <a href="#skills" className="hover:text-red-600 font-bold duration-300">Technologies</a>
            <a href="#exp" className="hover:text-red-600 font-bold duration-300">Experience</a>
            <a href="#projects" className="hover:text-red-600 font-bold duration-300">Projects</a>
            <a href="#contact" className="hover:text-red-600 font-bold duration-300">Contact</a>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleNav} className="focus:outline-none">
              {navOpen ? <AiOutlineClose className="text-3xl" /> : <AiOutlineMenu className="text-3xl" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-gray-800 text-lime-400 text-lg absolute w-full left-0 top-20 z-40 shadow-lg">
          <div className="flex flex-col items-center py-4 space-y-4">
            <a href="#home" onClick={toggleNav} className="hover:text-red-600 font-bold duration-300">Home</a>
            <a href="#about" onClick={toggleNav} className="hover:text-red-600 font-bold duration-300">About</a>
            <a href="#skills" onClick={toggleNav} className="hover:text-red-600 font-bold duration-300">Technologies</a>
            <a href="#exp" onClick={toggleNav} className="hover:text-red-600 font-bold duration-300">Experience</a>
            <a href="#projects" onClick={toggleNav} className="hover:text-red-600 font-bold duration-300">Projects</a>
            <a href="#contact" onClick={toggleNav} className="hover:text-red-600 font-bold duration-300">Contact</a>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;

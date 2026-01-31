import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Moon, Sun, Download } from 'lucide-react';
import Profile from '../assets/kim2.jpg'
import BannerGif from '../assets/code.gif'
import cv from '../assets/Kim Alfred Molina - Resume.pdf';
import BurgerMenu from '../constants/BurgerMenu'

export default function ProfileCard({ isDark, setIsDark }) {

  const [copied, setCopied] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  
  const fullName = "Kim Alfred Molina";
  const email = "kimalfredmolina1224@gmail.com";

  // Typing animation effect
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullName.length) {
        setDisplayedText(fullName.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsTypingComplete(true);
        clearInterval(typingInterval);
      }
    }, 150); // Typing speed

    return () => clearInterval(typingInterval);
  }, []);

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  };

  // Function to scroll to specific section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMenuOpen(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.06
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 4,
      y: 2,
      transition: { duration: 2 }
    }
  };

  return (
    <div className={`transition-colors duration-500 ${
      isDark ? 'bg-[#1e293b]' : 'bg-gray-50'
    }`}>

      <BurgerMenu
        isDark={isDark}
        setIsDark={setIsDark}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        scrollToSection={scrollToSection}
      />

      <motion.div
        id="profile"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-6 py-12"
      >
        {/* Banner Section */}
        <motion.div
          variants={itemVariants}
          className={`relative h-60 mb-20 rounded-lg flex items-center justify-center transition-colors duration-500 ${
            isDark ? 'bg-[#334155]' : 'bg-gray-200'
          }`}
        >
        <img
            src={BannerGif}
            alt="Banner GIF"
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
        />
          
          {/* Profile Picture */}
          <motion.div
            variants={itemVariants}
            className="absolute -bottom-16 left-6"
          >
            <div className={`w-40 h-40 rounded-full border-4 overflow-hidden ${
              isDark ? 'border-[#1e293b]' : 'border-white'
            }`}>
              <img
                src={Profile}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Profile Info */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div>
                <h1 className={`text-4xl font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {displayedText}
                  <span className={`inline-block w-4 h-1 ml-1 ${isDark ? 'bg-white' : 'bg-gray-900'} ${isTypingComplete ? 'animate-pulse' : ''}`}></span>
                </h1>
                <p className={`text-lg font-semibold ${isDark ? 'text-red-400' : 'text-red-600'}`}>
                  Full Stack Developer
                </p>
              </div>
              
              {/* Social Links */}
              <div className="flex gap-2 ml-6">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/kimalfredmolina"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2.5 rounded-full transition-colors duration-300 ${
                    isDark 
                      ? 'bg-[#334155] hover:bg-[#475569] text-white' 
                      : 'bg-gray-800 hover:bg-gray-900 text-white'
                  }`}
                >
                  <Github size={18} />
                </motion.a>
                
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.linkedin.com/in/kim-alfred-molina-323455276/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-300"
                >
                  <Linkedin size={18} />
                </motion.a>

                <div className="relative">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleCopyEmail}
                    className="p-2.5 rounded-full bg-red-600 hover:bg-red-700 text-white transition-colors duration-300"
                  >
                    <Mail size={18} />
                  </motion.button>

                  <AnimatePresence>
                    {copied && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        className={`absolute -bottom-10 left-1/2 -translate-x-1/2
                          whitespace-nowrap text-xs px-3 py-1 rounded-md shadow-md
                          ${isDark ? 'bg-black text-white' : 'bg-gray-900 text-white'}`}
                      >
                        Kim Alfred Email address copied!
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Download Button - Right Side */}
            <a
              href={cv}
              download="Kim_Alfred_Molina_Resume.pdf"
              className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-lg"
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`relative z-10 flex h-12 w-full items-center justify-center gap-2 rounded-lg px-6 font-medium transition-colors duration-300 ${
                  isDark
                    ? 'bg-neutral-950 text-neutral-200 border border-gray-600'
                    : 'bg-neutral-900 text-neutral-100 border border-gray-300'
                }`}
              >
                {/* Text */}
                <span className="transition-transform duration-500 group-hover:-translate-y-[150%] group-hover:opacity-0 flex items-center gap-2">
                  <Download size={18} />
                  Download Resume
                </span>
                {/* Icon slides up */}
                <span className="absolute translate-y-[150%] opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <Download size={22} />
                </span>
              </motion.div>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
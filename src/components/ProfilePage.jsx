import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Moon, Sun, Download } from 'lucide-react';
import Profile from '../assets/kim2.jpg'
import BannerGif from '../assets/code.gif'

export default function ProfileCard({ isDark, setIsDark }) {

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
      {/* Toggle Button - Fixed Position */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsDark(!isDark)}
        className={`fixed top-6 right-6 p-2.5 rounded-full transition-all duration-300 z-50 ${
          isDark 
            ? 'bg-[#475569] text-yellow-400 hover:bg-[#64748b]' 
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        {isDark ? <Sun size={18} /> : <Moon size={18} />}
      </motion.button>

      <motion.div
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
                  Kim Alfred Molina
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
              </div>
            </div>

            {/* Download Button - Right Side */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-lg px-6 font-medium transition-colors duration-500
                ${
                  isDark
                    ? 'bg-neutral-950 text-neutral-200 border border-gray-600'
                    : 'bg-neutral-900 text-neutral-100 border border-gray-300'
                }`}
            >
              {/* Text */}
              <div className="translate-y-0 opacity-100 transition duration-500 group-hover:-translate-y-[150%] group-hover:opacity-0 flex items-center gap-2">
                <Download size={18} />
                Download Resume
              </div>

              {/* Icon (slides up) */}
              <div className="absolute translate-y-[150%] opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <Download size={22} />
              </div>
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
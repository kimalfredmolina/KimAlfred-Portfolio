import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';
import { GitHubCalendar } from 'react-github-calendar';

const AboutPage = ({ isDark }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.5 },
    },
  };

  const cardBg = isDark ? 'bg-gradient-to-br from-[#2d3748] to-[#1e293b]' : 'bg-gradient-to-br from-white to-gray-50';
  const headingColor = isDark ? 'text-red-400' : 'text-red-600';
  const textColor = isDark ? 'text-gray-300' : 'text-gray-700';
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(currentYear);

  return (
    <div
      id="about" className={`transition-colors duration-500 ${
        isDark ? 'bg-[#1e293b]' : 'bg-gray-50'
      }`}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-6 py-4 grid lg:grid-cols-2 gap-4"
      >
        {/* About Me */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          whileHover={{ y: -4 }}
          className={`relative p-7 rounded-2xl ${cardBg} ${
            isDark 
              ? 'shadow-[0_8px_30px_rgb(0,0,0,0.4)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.5)]' 
              : 'shadow-[0_2px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)]'
          } transition-all duration-300 overflow-hidden`}
        >
          {/* Accent line */}
          <div className={`absolute top-4 left-0 w-1 h-16 rounded-r-full ${
            isDark ? 'bg-gradient-to-b from-lime-400 to-lime-500' : 'bg-gradient-to-b from-red-500 to-red-600'
          }`} />
          
          <h2 className={`text-xl font-bold mb-5 ${headingColor} tracking-tight`}>
            About Me
          </h2>

          <div className={`space-y-3 ${textColor}`}>
            <p className="text-sm leading-relaxed">
              Computer Science student with experience in full-stack web and
              mobile development. Skilled in building responsive interfaces,
              managing databases, developing application features, and improving
              UI/UX using React, React Native, Firebase, and modern web
              technologies.
            </p>
          </div>
        </motion.div>

        {/* Right Column */}
        <div className="space-y-4">
          {/* Education */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1.5 }}
            whileHover={{ y: -4 }}
            className={`relative p-7 rounded-2xl ${cardBg} ${
              isDark 
                ? 'shadow-[0_8px_30px_rgb(0,0,0,0.4)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.5)]' 
                : 'shadow-[0_2px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)]'
            } transition-all duration-300 overflow-hidden`}
          >
            {/* Accent line */}
            <div className={`absolute top-4 left-0 w-1 h-16 rounded-r-full ${
              isDark ? 'bg-gradient-to-b from-lime-400 to-lime-500' : 'bg-gradient-to-b from-red-500 to-red-600'
            }`} />
            
            <h2 className={`text-xl font-bold mb-5 ${headingColor} tracking-tight`}>
              Education
            </h2>

            <div className={`space-y-2 ${textColor}`}>
              <p className="font-semibold text-lg leading-tight">
                Bachelor of Science in Computer Science
              </p>
              <p className={`text-md ${isDark ? 'text-red-400' : 'text-red-500'} font-medium`}>
                Taguig City University
              </p>

              <div className="pt-2">
                <span className={`inline-flex items-center text-sm font-semibold ${
                  isDark 
                    ? 'text-gray-900 bg-gradient-to-r from-lime-400 to-lime-500' 
                    : 'text-white bg-gradient-to-r from-red-500 to-red-600'
                } px-4 py-1.5 rounded-full shadow-md`}>
                  2022 – 2026
                </span>
              </div>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1.5 }}
            whileHover={{ y: -4 }}
            className={`relative p-7 rounded-2xl ${cardBg} ${
              isDark 
                ? 'shadow-[0_8px_30px_rgb(0,0,0,0.4)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.5)]' 
                : 'shadow-[0_2px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)]'
            } transition-all duration-300 overflow-hidden`}
          >
            {/* Accent line */}
            <div className={`absolute top-4 left-0 w-1 h-16 rounded-r-full ${
              isDark ? 'bg-gradient-to-b from-lime-400 to-lime-500' : 'bg-gradient-to-b from-red-500 to-red-600'
            }`} />
            
            <h2 className={`text-xl font-bold mb-5 ${headingColor} tracking-tight`}>
              Contact
            </h2>

            <div className="space-y-3">
              <motion.div 
                whileHover={{ x: 4 }}
                className="flex items-center gap-3 group"
              >
                <div className={`p-2.5 rounded-xl ${
                  isDark 
                    ? 'bg-gradient-to-br from-lime-400 to-lime-500' 
                    : 'bg-gradient-to-br from-red-500 to-red-600'
                } shadow-md group-hover:shadow-lg transition-shadow duration-300`}>
                  <Phone size={16} className={isDark ? 'text-gray-900' : 'text-white'} />
                </div>
                <span className={`text-sm ${textColor} font-medium`}>
                  +63 927 732 4896
                </span>
              </motion.div>

              <motion.div 
                whileHover={{ x: 4 }}
                className="flex items-center gap-3 group"
              >
                <div className={`p-2.5 rounded-xl ${
                  isDark 
                    ? 'bg-gradient-to-br from-lime-400 to-lime-500' 
                    : 'bg-gradient-to-br from-red-500 to-red-600'
                } shadow-md group-hover:shadow-lg transition-shadow duration-300`}>
                  <Mail size={16} className={isDark ? 'text-gray-900' : 'text-white'} />
                </div>
                <span className={`text-sm ${textColor} font-medium`}>
                  kimalfredmolina1224@gmail.com
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* GitHub Activity */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 pb-12 mt-2"
      >
        <motion.div
          variants={itemVariants}
          className={`relative p-8 rounded-2xl ${cardBg} ${
            isDark 
              ? 'shadow-[0_8px_30px_rgb(0,0,0,0.4)]' 
              : 'shadow-[0_2px_20px_rgba(0,0,0,0.06)]'
          } overflow-hidden`}
        >
          {/* Accent line */}
          <div className={`absolute top-4 left-0 w-1 h-20 rounded-r-full ${
            isDark ? 'bg-gradient-to-b from-lime-400 to-lime-500' : 'bg-gradient-to-b from-red-500 to-red-600'
          }`} />
          
          {/* Header with Year Selector */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-6">
            <div>
              <h2 className={`text-2xl font-bold ${headingColor} mb-2 tracking-tight`}>
                GitHub Activity
              </h2>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {selectedYear === currentYear ? 'Current year activity' : `Activity for ${selectedYear}`}
              </p>
            </div>

            {/* Year Selector */}
            <div className="flex gap-2 flex-wrap">
              {[2026, 2025, 2024, 2023, 2022].map((year) => (
                <motion.button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 text-sm rounded-xl transition-all duration-200 font-semibold
                    ${
                      selectedYear === year
                        ? isDark
                          ? 'bg-gradient-to-r from-lime-400 to-lime-500 text-gray-900 shadow-lg'
                          : 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg'
                        : isDark
                          ? 'bg-[#1f2937] text-gray-300 hover:bg-[#374151] shadow-md'
                          : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                    }`}
                >
                  {year}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Calendar Container */}
          <div className="relative min-h-[170px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedYear}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="absolute inset-0 w-full"
              >
                {/* Desktop */}
                <div className="hidden md:block">
                  <div className="flex justify-center">
                    <GitHubCalendar
                      username="kimalfredmolina"
                      year={selectedYear}
                      colorScheme={isDark ? 'dark' : 'light'}
                      blockSize={12}
                      blockMargin={4}
                      fontSize={13}
                    />
                  </div>
                </div>

                {/* Tablet */}
                <div className="hidden sm:block md:hidden overflow-x-auto pb-4">
                  <div className="min-w-[650px]">
                    <GitHubCalendar
                      username="kimalfredmolina"
                      year={selectedYear}
                      colorScheme={isDark ? 'dark' : 'light'}
                      blockSize={11}
                      blockMargin={3}
                      fontSize={13}
                    />
                  </div>
                </div>

                {/* Mobile */}
                <div className="block sm:hidden overflow-x-auto pb-4">
                  <div className="min-w-[600px]">
                    <GitHubCalendar
                      username="kimalfredmolina"
                      year={selectedYear}
                      colorScheme={isDark ? 'dark' : 'light'}
                      blockSize={11}
                      blockMargin={3}
                      fontSize={12}
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutPage;
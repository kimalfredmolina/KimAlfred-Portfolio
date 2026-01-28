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

  const cardBg = isDark ? 'bg-[#2d3748]' : 'bg-gray-100';
  const cardBorder = isDark ? 'border border-gray-600' : 'border border-gray-300';
  const headingColor = isDark ? 'text-red-400' : 'text-red-600';
  const textColor = isDark ? 'text-gray-300' : 'text-gray-800';
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(currentYear);

  return (
    <div
      className={`transition-colors duration-500 ${
        isDark ? 'bg-[#1e293b]' : 'bg-white'
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
          className={`p-7 rounded-xl ${cardBg} ${cardBorder}`}
        >
          <h2 className={`text-xl font-bold mb-4 ${headingColor}`}>
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
            className={`p-7 rounded-xl ${cardBg} ${cardBorder}`}
          >
            <h2 className={`text-xl font-bold mb-4 ${headingColor}`}>
              Education
            </h2>

            <div className={`space-y-1 ${textColor}`}>
              <p className="font-semibold text-lg">
                Bachelor of Science in Computer Science
              </p>
              <p className="text-md text-red-400">
                Taguig City University
              </p>

              <span className="inline-block mt-3 text-md font-medium text-gray-900 bg-lime-400 px-3 py-1 rounded-md">
                2022 – 2026
              </span>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1.5 }}
            className={`p-7 rounded-xl ${cardBg} ${cardBorder}`}
          >
            <h2 className={`text-xl font-bold mb-4 ${headingColor}`}>
              Contact
            </h2>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-md bg-lime-400">
                  <Phone size={16} className="text-gray-900" />
                </div>
                <span className={`text-sm ${textColor}`}>
                  +63 927 732 4896
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-md bg-lime-400">
                  <Mail size={16} className="text-gray-900" />
                </div>
                <span className={`text-sm ${textColor}`}>
                  kimalfredmolina1224@gmail.com
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* GitHub Activity - Improved */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 pb-12 mt-2"
      >
        <motion.div
          variants={itemVariants}
          className={`p-8 rounded-xl ${cardBg} ${cardBorder} shadow-lg`}
        >
          {/* Header with Year Selector */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-6">
            <div>
              <h2 className={`text-2xl font-bold ${headingColor} mb-2`}>
                GitHub Activity
              </h2>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {selectedYear === currentYear ? 'Current year activity' : `Activity for ${selectedYear}`}
              </p>
            </div>

            {/* Year Selector - Horizontal on larger screens */}
            <div className="flex gap-2 flex-wrap">
              {[2026, 2025, 2024, 2023, 2022].map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`px-4 py-2 text-sm rounded-lg transition-all duration-200 font-medium
                    ${
                      selectedYear === year
                        ? 'bg-lime-500 text-gray-900 shadow-md scale-105'
                        : isDark
                          ? 'bg-[#1f2937] text-gray-300 hover:bg-[#374151] hover:scale-105'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:scale-105'
                    }`}
                >
                  {year}
                </button>
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
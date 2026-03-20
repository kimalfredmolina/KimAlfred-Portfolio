import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, GraduationCap, User, Github } from 'lucide-react';
import { GitHubCalendar } from 'react-github-calendar';

const AboutPage = ({ isDark }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.4, staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
  };

  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0, date: '', count: 0 });

  const renderBlock = useCallback((block, activity) => {
    return React.cloneElement(block, {
      onMouseEnter: (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setTooltip({
          visible: true,
          x: rect.left + rect.width / 2,
          y: rect.top - 10,
          date: activity.date,
          count: activity.count,
        });
      },
      onMouseLeave: () => setTooltip((prev) => ({ ...prev, visible: false })),
    });
  }, []);

  return (
    <div
      id="about"
      className={`transition-colors duration-500 ${isDark ? 'bg-[#1e293b]' : 'bg-gray-50'}`}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-6 py-6 space-y-4"
      >
        {/* About Me + Right column */}
        <div className="grid lg:grid-cols-2 gap-4">

          {/* About Me */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -4 }}
            className={`relative p-7 rounded-2xl overflow-hidden transition-all duration-300
              ${isDark
                ? 'bg-gradient-to-br from-[#2d3748] to-[#1e293b] shadow-[0_8px_30px_rgb(0,0,0,0.4)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.5)]'
                : 'bg-gradient-to-br from-white to-gray-50 shadow-[0_2px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)]'
              }`}
          >
            <div className={`absolute top-4 left-0 w-1 h-16 rounded-r-full ${isDark ? 'bg-gradient-to-b from-lime-400 to-lime-500' : 'bg-gradient-to-b from-red-500 to-red-600'}`} />

            <div className="flex items-center gap-2 mb-4">
              <div className={`p-1.5 rounded-lg shadow-sm ${isDark ? 'bg-gradient-to-br from-lime-400 to-lime-500' : 'bg-gradient-to-br from-red-500 to-red-600'}`}>
                <User size={13} className={isDark ? 'text-gray-900' : 'text-white'} />
              </div>
              <span className={`text-[11px] font-bold uppercase tracking-widest ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>About Me</span>
            </div>

            <h2 className={`text-xl font-bold mb-1 tracking-tight ${isDark ? 'text-red-400' : 'text-red-600'}`}>
              Hi, I'm Kim Alfred 👋
            </h2>
            <p className={`text-xs font-semibold mb-4 ${isDark ? 'text-lime-400' : 'text-red-500'}`}>
              Full-Stack Developer · CS Student
            </p>

            <div className={`border-t mb-4 ${isDark ? 'border-white/10' : 'border-gray-100'}`} />

            <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Computer Science student with experience in full-stack web and mobile development.
              Skilled in building responsive interfaces, managing databases, developing application
              features, and improving UI/UX using React, React Native, Firebase, and modern web
              technologies.
            </p>
          </motion.div>

          {/* Right column */}
          <div className="space-y-4">

            {/* Education */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -4 }}
              className={`relative p-7 rounded-2xl overflow-hidden transition-all duration-300
                ${isDark
                  ? 'bg-gradient-to-br from-[#2d3748] to-[#1e293b] shadow-[0_8px_30px_rgb(0,0,0,0.4)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.5)]'
                  : 'bg-gradient-to-br from-white to-gray-50 shadow-[0_2px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)]'
                }`}
            >
              <div className={`absolute top-4 left-0 w-1 h-16 rounded-r-full ${isDark ? 'bg-gradient-to-b from-lime-400 to-lime-500' : 'bg-gradient-to-b from-red-500 to-red-600'}`} />

              <div className="flex items-center gap-2 mb-4">
                <div className={`p-1.5 rounded-lg shadow-sm ${isDark ? 'bg-gradient-to-br from-lime-400 to-lime-500' : 'bg-gradient-to-br from-red-500 to-red-600'}`}>
                  <GraduationCap size={13} className={isDark ? 'text-gray-900' : 'text-white'} />
                </div>
                <span className={`text-[11px] font-bold uppercase tracking-widest ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Education</span>
              </div>

              <div className="flex items-start justify-between gap-3">
                <div>
                  <h2 className={`text-base font-bold leading-snug mb-1 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    B.S. Computer Science
                  </h2>
                  <p className={`text-sm font-semibold ${isDark ? 'text-red-400' : 'text-red-500'}`}>
                    Taguig City University
                  </p>
                </div>
                <span className={`inline-flex items-center text-xs font-bold px-3 py-1.5 rounded-full shadow-md whitespace-nowrap flex-shrink-0
                  ${isDark ? 'bg-gradient-to-r from-lime-400 to-lime-500 text-gray-900' : 'bg-gradient-to-r from-red-500 to-red-600 text-white'}`}>
                  2022 – 2026
                </span>
              </div>

              <div className={`border-t mt-4 mb-3 ${isDark ? 'border-white/10' : 'border-gray-100'}`} />

              <div className="flex items-center gap-2">
                <MapPin size={13} className={isDark ? 'text-gray-400' : 'text-gray-500'} />
                <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Taguig City, Philippines</span>
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -4 }}
              className={`relative p-7 rounded-2xl overflow-hidden transition-all duration-300
                ${isDark
                  ? 'bg-gradient-to-br from-[#2d3748] to-[#1e293b] shadow-[0_8px_30px_rgb(0,0,0,0.4)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.5)]'
                  : 'bg-gradient-to-br from-white to-gray-50 shadow-[0_2px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)]'
                }`}
            >
              <div className={`absolute top-4 left-0 w-1 h-16 rounded-r-full ${isDark ? 'bg-gradient-to-b from-lime-400 to-lime-500' : 'bg-gradient-to-b from-red-500 to-red-600'}`} />

              <div className="flex items-center gap-2 mb-5">
                <div className={`p-1.5 rounded-lg shadow-sm ${isDark ? 'bg-gradient-to-br from-lime-400 to-lime-500' : 'bg-gradient-to-br from-red-500 to-red-600'}`}>
                  <Mail size={13} className={isDark ? 'text-gray-900' : 'text-white'} />
                </div>
                <span className={`text-[11px] font-bold uppercase tracking-widest ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Contact</span>
              </div>

              <div className="space-y-3">
                {[
                  { icon: Phone, label: '+63 927 732 4896' },
                  { icon: Mail,  label: 'kimalfredmolina1224@gmail.com' },
                ].map(({ icon: Icon, label }) => (
                  <motion.div key={label} whileHover={{ x: 4 }} className="flex items-center gap-3 group">
                    <div className={`p-2 rounded-xl shadow-md flex-shrink-0 group-hover:shadow-lg transition-shadow duration-300
                      ${isDark ? 'bg-gradient-to-br from-red-400 to-red-500' : 'bg-gradient-to-br from-red-500 to-red-600'}`}>
                      <Icon size={15} className={isDark ? 'text-gray-900' : 'text-white'} />
                    </div>
                    <span className={`text-sm font-medium truncate ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>

        {/* GitHub Activity */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            variants={itemVariants}
            className={`relative p-8 rounded-2xl overflow-hidden transition-all duration-300
              ${isDark
                ? 'bg-gradient-to-br from-[#2d3748] to-[#1e293b] shadow-[0_8px_30px_rgb(0,0,0,0.4)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.5)]'
                : 'bg-gradient-to-br from-white to-gray-50 shadow-[0_2px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)]'
              }`}
          >
            <div className={`absolute top-4 left-0 w-1 h-20 rounded-r-full ${isDark ? 'bg-gradient-to-b from-lime-400 to-lime-500' : 'bg-gradient-to-b from-red-500 to-red-600'}`} />

            {/* Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-xl shadow-md ${isDark ? 'bg-gradient-to-br from-lime-400 to-lime-500' : 'bg-gradient-to-br from-red-500 to-red-600'}`}>
                  <Github size={16} className={isDark ? 'text-gray-900' : 'text-white'} />
                </div>
                <div>
                  <h2 className={`text-xl font-bold tracking-tight ${isDark ? 'text-red-400' : 'text-red-600'}`}>
                    GitHub Activity
                  </h2>
                  <p className={`text-xs mt-0.5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    {selectedYear === currentYear ? 'Current year activity' : `Activity for ${selectedYear}`}
                  </p>
                </div>
              </div>

              <div className="flex gap-2 flex-wrap">
                {[2026, 2025, 2024, 2023, 2022].map((year) => (
                  <motion.button
                    key={year}
                    onClick={() => setSelectedYear(year)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-1.5 text-sm rounded-xl font-semibold transition-all duration-200
                      ${selectedYear === year
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

            <div className={`border-t mb-6 ${isDark ? 'border-white/10' : 'border-gray-100'}`} />

            {/* Calendar */}
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
                  <div className="hidden md:flex justify-center">
                    <GitHubCalendar username="kimalfredmolina" year={selectedYear} colorScheme={isDark ? 'dark' : 'light'} blockSize={12} blockMargin={4} fontSize={13} renderBlock={renderBlock} />
                  </div>
                  <div className="hidden sm:block md:hidden overflow-x-auto pb-4">
                    <div className="min-w-[650px]">
                      <GitHubCalendar username="kimalfredmolina" year={selectedYear} colorScheme={isDark ? 'dark' : 'light'} blockSize={11} blockMargin={3} fontSize={13} renderBlock={renderBlock} />
                    </div>
                  </div>
                  <div className="block sm:hidden overflow-x-auto pb-4">
                    <div className="min-w-[600px]">
                      <GitHubCalendar username="kimalfredmolina" year={selectedYear} colorScheme={isDark ? 'dark' : 'light'} blockSize={11} blockMargin={3} fontSize={12} renderBlock={renderBlock} />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {tooltip.visible && (
                <div
                  className={`fixed px-3 py-2 rounded-lg text-xs font-semibold pointer-events-none z-50
                    ${isDark ? 'bg-gray-900 text-gray-100 border border-lime-400' : 'bg-gray-800 text-white border border-red-500'}`}
                  style={{ left: `${tooltip.x}px`, top: `${tooltip.y}px`, transform: 'translate(-50%, -100%)', whiteSpace: 'nowrap' }}
                >
                  <div className="font-bold">{tooltip.count} contribution{tooltip.count !== 1 ? 's' : ''}</div>
                  <div className={isDark ? 'text-gray-400' : 'text-gray-300'}>{tooltip.date}</div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default AboutPage;
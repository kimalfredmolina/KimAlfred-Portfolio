import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../constants/experiences';
import { getIconPath } from '../constants/icons';

const SkillsPage = ({ isDark }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const skills = {
    '• Programming Languages': [
      { name: 'HTML' }, { name: 'CSS' }, { name: 'JavaScript' },
      { name: 'TypeScript' }, { name: 'Python' }, { name: 'PHP' },
      { name: 'Java' }, { name: 'C#' }, { name: 'VB.Net' },
    ],
    '• Frameworks': [
      { name: 'React.js' }, { name: 'React Native' }, { name: 'Tailwind CSS' },
      { name: 'Django' }, { name: 'Node.js' }, { name: 'Express.js' }, { name: 'Next.js' },
    ],
    '• Database Management': [
      { name: 'MySQL' }, { name: 'Firebase' }, { name: 'MongoDB' }, { name: 'PostgreSQL' },
    ],
    '• Tools': [
      { name: 'Git' }, { name: 'Github' }, { name: 'Postman' }, { name: 'Figma' },
      { name: 'Jest' }, { name: 'Expo' }, { name: 'ClickUp' },
    ],
    '• DevOps': [
      { name: 'Docker' }, { name: 'Github Actions' }, { name: 'CI/CD' },
    ],
    '• Software Engineering': [
      { name: 'SDLC' }, { name: 'Agile' },
    ],
  };

  return (
    <div
      id="skills"
      className={`transition-colors duration-500 ${isDark ? 'bg-[#1e293b]' : 'bg-gray-50'}`}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-6 py-8 grid lg:grid-cols-2 gap-6 items-start"
      >
        {/* ── Skills Card ── */}
        <motion.div
          variants={itemVariants}
          whileHover={{ y: -4 }}
          className={`relative p-8 rounded-2xl overflow-hidden transition-all duration-300
            ${isDark
              ? 'bg-gradient-to-br from-[#2d3748] to-[#1e293b] shadow-[0_8px_30px_rgb(0,0,0,0.4)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.5)]'
              : 'bg-gradient-to-br from-white to-gray-50 shadow-[0_2px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)]'
            }`}
        >
          <div className={`absolute top-4 left-0 w-1 h-20 rounded-r-full ${isDark ? 'bg-gradient-to-b from-lime-400 to-lime-500' : 'bg-gradient-to-b from-red-500 to-red-600'}`} />

          <h2 className={`text-2xl font-bold mb-6 tracking-tight ${isDark ? 'text-red-400' : 'text-red-600'}`}>
            Technical Skills
          </h2>

          <div className="space-y-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h3 className={`text-base font-bold mb-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className={`group flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium shadow-sm transition-all duration-200
                        ${isDark
                          ? 'bg-[#1f2937] text-gray-300 hover:bg-lime-500/10 hover:text-lime-400 hover:border hover:border-lime-400'
                          : 'bg-gray-100 text-gray-700 hover:bg-red-500/10 hover:text-red-500 hover:border hover:border-red-500'
                        }`}
                    >
                      {getIconPath(skill.name) && (
                        <img src={getIconPath(skill.name)} alt={skill.name} className="w-5 h-5 object-contain" />
                      )}
                      <span>{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Experience Card ── */}
        <motion.div
          variants={itemVariants}
          whileHover={{ y: -4 }}
          className={`relative p-8 rounded-2xl overflow-hidden transition-all duration-300 h-fit
            ${isDark
              ? 'bg-gradient-to-br from-[#2d3748] to-[#1e293b] shadow-[0_8px_30px_rgb(0,0,0,0.4)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.5)]'
              : 'bg-gradient-to-br from-white to-gray-50 shadow-[0_2px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)]'
            }`}
        >
          <div className={`absolute top-4 left-0 w-1 h-20 rounded-r-full ${isDark ? 'bg-gradient-to-b from-lime-400 to-lime-500' : 'bg-gradient-to-b from-red-500 to-red-600'}`} />

          <h2 className={`text-2xl font-bold mb-6 tracking-tight ${isDark ? 'text-red-400' : 'text-red-600'}`}>
            Experience
          </h2>

          <div className="space-y-8">
            {EXPERIENCES.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`relative pl-6 border-l-2 last:border-transparent ${isDark ? 'border-gray-600' : 'border-gray-300'}`}
              >
                {/* Timeline dot with ring */}
                <div className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full shadow-md ring-[3px]
                  ${isDark ? 'bg-lime-400 ring-[#1e293b]' : 'bg-red-500 ring-white'}`}
                />

                {/* Top row: role + year badge */}
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className={`text-lg font-bold leading-snug ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    {experience.role}
                  </h3>
                  <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full shadow-md whitespace-nowrap flex-shrink-0
                    ${isDark ? 'bg-lime-400 text-gray-900' : 'text-white bg-gradient-to-r from-red-500 to-red-600'}`}
                  >
                    {index === 0 && (
                      <span className="relative flex h-2 w-2">
                        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isDark ? 'bg-gray-900' : 'bg-white'}`} />
                        <span className={`relative inline-flex rounded-full h-2 w-2 ${isDark ? 'bg-gray-900' : 'bg-white'}`} />
                      </span>
                    )}
                    {experience.year}
                  </span>
                </div>

                {/* Company */}
                <p className={`text-sm font-semibold mb-2 ${isDark ? 'text-lime-500' : 'text-red-600'}`}>
                  {experience.company}
                </p>

                {/* Divider */}
                <div className={`border-t mb-3 ${isDark ? 'border-white/10' : 'border-gray-200'}`} />

                {/* Description */}
                <p className={`text-sm mb-4 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {experience.description}
                </p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`flex items-center gap-1.5 text-xs font-medium px-2.5 py-1.5 rounded-md shadow-sm
                        ${isDark ? 'bg-[#1f2937] text-gray-300' : 'bg-gray-100 text-gray-700'}`}
                    >
                      {getIconPath(tech) && (
                        <img src={getIconPath(tech)} alt={tech} className="w-4 h-4 object-contain" />
                      )}
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SkillsPage;
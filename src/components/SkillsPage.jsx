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

  const cardBg = isDark ? 'bg-gradient-to-br from-[#2d3748] to-[#1e293b]' : 'bg-gradient-to-br from-white to-gray-50';
  const headingColor = isDark ? 'text-red-400' : 'text-red-600';
  const textColor = isDark ? 'text-gray-300' : 'text-gray-700';
  const companyColor = isDark ? 'text-lime-400' : 'text-lime-600';
  const techBg = isDark ? 'bg-[#1f2937]' : 'bg-gray-100';
  const techText = isDark ? 'text-gray-300' : 'text-gray-700';

  const skills = {
    '• Programming Languages': [
        { name: 'HTML' },
        { name: 'CSS' },
        { name: 'JavaScript' },
        { name: 'Python' },
        { name: 'PHP' },
        { name: 'Java' },
        { name: 'TypeScript' },
        { name: 'C#' },
        { name: 'VB.Net' },
    ],
    '• Frameworks': [
        { name: 'React' },
        { name: 'React Native' },
        { name: 'Tailwind CSS' },
        { name: 'Django' },
        { name: 'Node.js' },
    ],
    '• Database Management': [
        { name: 'MySQL' },
        { name: 'Firebase' },
        { name: 'MongoDB' },
        { name: 'PostgreSQL' },

    ],
    '• DevOps / Tools': [
        { name: 'Git' },
        { name: 'Github' },
        { name: 'Figma' },
        { name: 'CI/CD' },
        { name: 'Jest' },
    ],
    '• Software Engineering': [
        { name: 'SDLC' },
        { name: 'Agile' },
    ],
  };

  return (
    <div
      className={`transition-colors duration-500 min-h-screen ${
        isDark ? 'bg-[#1e293b]' : 'bg-gray-50'
      }`}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-6 py-8 grid lg:grid-cols-2 gap-6 items-start"
      >
        {/* Skills Section */}
        <motion.div
          variants={itemVariants}
          whileHover={{ y: -4 }}
          className={`relative p-8 rounded-2xl ${cardBg} ${
            isDark
              ? 'shadow-[0_8px_30px_rgb(0,0,0,0.4)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.5)]'
              : 'shadow-[0_2px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)]'
          } transition-all duration-300 overflow-hidden`}
        >
          {/* Accent line */}
          <div
            className={`absolute top-4 left-0 w-1 h-20 rounded-r-full ${
              isDark ? 'bg-gradient-to-b from-lime-400 to-lime-500' : 'bg-gradient-to-b from-red-500 to-red-600'
            }`}
          />

          <h2 className={`text-2xl font-bold mb-6 ${headingColor} tracking-tight`}>
            Skills
          </h2>

          <div className="space-y-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h3 className={`text-base font-bold mb-3 ${textColor}`}>
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
                      className={`group flex items-center gap-2 px-3 py-2 rounded-lg ${techBg} ${techText} text-sm font-medium shadow-sm transition-all duration-200
                                ${
                                    isDark
                                    ? 'hover:bg-lime-500/10 hover:text-lime-400 hover:border hover:border-lime-400'
                                    : 'hover:bg-red-500/10 hover:text-red-500 hover:border hover:border-red-500'
                                }
                                `}
                    >
                      {getIconPath(skill.name) && (
                        <img 
                          src={getIconPath(skill.name)} 
                          alt={skill.name}
                          className="w-5 h-5 object-contain"
                        />
                      )}
                      <span>{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          variants={itemVariants}
          whileHover={{ y: -4 }}
          className={`relative p-8 rounded-2xl ${cardBg} ${
            isDark
              ? 'shadow-[0_8px_30px_rgb(0,0,0,0.4)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.5)]'
              : 'shadow-[0_2px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)]'
          } transition-all duration-300 overflow-hidden h-fit`}
        >
          {/* Accent line */}
          <div
            className={`absolute top-4 left-0 w-1 h-20 rounded-r-full ${
              isDark ? 'bg-gradient-to-b from-lime-400 to-lime-500' : 'bg-gradient-to-b from-red-500 to-red-600'
            }`}
          />

          <h2 className={`text-2xl font-bold mb-6 ${headingColor} tracking-tight`}>
            Experience
          </h2>

          <div className="space-y-6">
            {EXPERIENCES.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative pl-6 border-l-2 border-gray-300 dark:border-gray-600 last:border-transparent"
              >
                {/* Timeline dot */}
                <div
                  className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full ${
                    isDark ? 'bg-lime-400' : 'bg-red-500'
                  } shadow-md`}
                />

                {/* Year badge */}
                <div className="mb-2">
                  <span
                    className={`inline-flex items-center text-xs font-bold ${
                      isDark
                        ? 'text-gray-900 bg-gradient-to-r from-lime-400 to-lime-500'
                        : 'text-white bg-gradient-to-r from-red-500 to-red-600'
                    } px-3 py-1 rounded-full shadow-md`}
                  >
                    {experience.year}
                  </span>
                </div>

                {/* Role */}
                <h3 className={`text-lg font-bold ${textColor} mb-1`}>
                  {experience.role}
                </h3>

                {/* Company */}
                <p className={`text-sm font-semibold ${companyColor} mb-2`}>
                  {experience.company}
                </p>

                {/* Description */}
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-3 leading-relaxed`}>
                  {experience.description}
                </p>

                {/* Technologies with Icons */}
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`flex items-center gap-1.5 text-xs font-medium ${techBg} ${techText} px-2.5 py-1.5 rounded-md shadow-sm`}
                    >
                      {getIconPath(tech) && (
                        <img 
                          src={getIconPath(tech)} 
                          alt={tech}
                          className="w-4 h-4 object-contain"
                        />
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
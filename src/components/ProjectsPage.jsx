import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2 } from 'lucide-react';
import { getIconPath } from '../constants/icons';
import { projects } from '../constants/projects'


const ProjectsPage = ({ isDark }) => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div
      id="projects"
      className={`transition-colors duration-500 ${
        isDark ? 'bg-[#1e293b]' : 'bg-gray-50'
      }`}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-90px" }}
        className="max-w-7xl mx-auto px-6 py-20"
      >
        {/* Section Header */}
        <motion.div
          variants={cardVariants}
          className="mb-12 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <Code2
              size={28}
              className={isDark ? 'text-red-400' : 'text-red-600'}
            />
            <h2
              className={`text-3xl md:text-4xl font-bold ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
            >
              My Projects
            </h2>
          </div>
          <p
            className={`text-base max-w-2xl mx-auto ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            A collection of projects showcasing my skills in full-stack development
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className={`group rounded-lg overflow-hidden flex flex-col transition-all duration-300
                  ${
                    isDark
                      ? 'bg-[#334155] border border-gray-700 hover:border-lime-400 hover:shadow-[0_0_0_1px_rgba(163,230,53,0.4)]'
                      : 'bg-white border border-gray-200 hover:border-red-500 hover:shadow-[0_0_0_1px_rgba(239,68,68,0.35)]'
                  }
              `}
            >
              {/* Project Image */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              {/* Project Content */}
              <div className="p-5 flex flex-col flex-grow">
                <h3
                  className={`text-lg font-bold mb-2 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {project.title}
                </h3>
                <p
                  className={`text-xs mb-5 line-clamp-4 ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  {project.description}
                </p>

                {/* Technologies with Icons */}
                <div className="flex flex-wrap gap-3 mb-4">
                  {project.technologies.map((tech, index) => {
                    const icon = getIconPath(tech);
                    if (!icon) return null;
                    return (
                      <div
                        key={index}
                        title={tech}
                        className={`flex items-center justify-center w-8 h-8 transition-all duration-200 hover:scale-110`}
                      >
                        <img
                          src={icon}
                          alt={tech}
                          className="w-6 h-6 object-contain"
                        />
                      </div>
                    );
                  })}
                </div>

                {/* Spacer to push buttons to bottom */}
                <div className="flex-grow"></div>

                {/* Action Buttons - Fixed at bottom */}
                <div className="flex gap-2 mt-auto">
                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-md transition-colors duration-300 ${
                      isDark
                        ? 'bg-[#475569] hover:bg-[#64748b] text-white'
                        : 'bg-gray-800 hover:bg-gray-900 text-white'
                    }`}
                  >
                    <Github size={14} />
                    <span className="text-xs font-medium">Code</span>
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-md bg-red-600 hover:bg-red-700 text-white transition-colors duration-300"
                  >
                    <ExternalLink size={14} />
                    <span className="text-xs font-medium">Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Section */}
        <motion.div
          variants={cardVariants}
          className="mt-12 text-center"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/kimalfredmolina"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-colors duration-300 ${
              isDark
                ? 'bg-neutral-950 text-neutral-200 border border-gray-600 hover:bg-neutral-900'
                : 'bg-neutral-900 text-neutral-100 border border-gray-300 hover:bg-neutral-800'
            }`}
          >
            <Github size={18} />
            View More on GitHub
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProjectsPage;
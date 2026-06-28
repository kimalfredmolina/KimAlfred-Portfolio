import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, FolderOpenDot, X } from 'lucide-react';
import { getIconPath } from '../constants/icons';
import { projects } from '../constants/projects'


const ProjectsPage = ({ isDark }) => {
  const [selectedProject, setSelectedProject] = useState(null);

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

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: 'easeOut' }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.2 }
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
        className="max-w-7xl mx-auto px-6 py-4"
      >
        {/* Section Header */}
        <motion.div
          variants={cardVariants}
          className="mb-12 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-3 text-red-600">
            <FolderOpenDot
              size={28}
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
            Personal projects and collaborative work where I contributed to building and designing websites, showcasing my development skills and experience.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, 3).map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className={`group rounded-lg overflow-hidden flex flex-col transition-all duration-300 cursor-pointer
                  ${
                    isDark
                      ? 'bg-[#334155] border border-gray-700 hover:border-red-600 hover:shadow-[0_0_0_1px_rgba(239,68,68,0.35)]'
                      : 'bg-white border border-gray-200 hover:border-red-600 hover:shadow-[0_0_0_1px_rgba(239,68,68,0.35)]'
                  }
              `}
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Image */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">Click to expand</span>
                </div>
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
                    onClick={(e) => e.stopPropagation()}
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
                    onClick={(e) => e.stopPropagation()}
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

        {/* View All My Projects Button */}
        <motion.div variants={cardVariants} className="mt-12 text-center">
          <Link
            to="/allprojects"
            className={`group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md px-6 font-medium transition-colors duration-500
              ${
                isDark
                  ? 'bg-neutral-950 text-neutral-200 hover:bg-neutral-900'
                  : 'bg-neutral-900 text-neutral-100 hover:bg-neutral-800'
              }`}
          >
            {/* Default Content */}
            <div className="flex items-center gap-2 translate-x-0 opacity-100 transition-all duration-500
                            group-hover:-translate-x-[150%] group-hover:opacity-0">
              <FolderOpenDot size={18} />
              <span>View all my Projects</span>
            </div>

            {/* Hover Content */}
            <div className="absolute flex items-center gap-2 translate-x-[150%] opacity-0 transition-all duration-500
                            group-hover:translate-x-0 group-hover:opacity-100">
              <span>Explore</span>
              <ArrowRight size={20} />
            </div>
          </Link>
        </motion.div>
      </motion.div>

      {/* Expanded Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              className={`relative max-w-5xl w-full rounded-lg overflow-hidden shadow-2xl ${
                isDark ? 'bg-[#334155]' : 'bg-white'
              }`}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className={`absolute top-4 right-4 z-10 p-2 rounded-full transition-colors duration-200 ${
                  isDark
                    ? 'bg-black/50 hover:bg-black/70 text-white'
                    : 'bg-white/90 hover:bg-white text-gray-900'
                }`}
              >
                <X size={24} />
              </button>

              {/* Project Image */}
              <div className="relative bg-gradient-to-br from-gray-100 to-gray-200">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full max-h-[60vh] object-contain"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"%3E%3Crect fill="%23e5e7eb" width="800" height="600"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" fill="%239ca3af"%3EProject Image%3C/text%3E%3C/svg%3E';
                  }}
                />
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                          isDark ? 'bg-red-600/20 text-red-400' : 'bg-red-50 text-red-600'
                        }`}
                      >
                        {selectedProject.category}
                      </span>
                    </div>
                    <h3
                      className={`text-2xl font-bold mb-2 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      {selectedProject.title}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}
                    >
                      {selectedProject.description}
                    </p>
                  </div>

                  <div className="flex flex-col gap-2 shrink-0">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors duration-300 ${
                        isDark
                          ? 'bg-[#475569] hover:bg-[#64748b] text-white'
                          : 'bg-gray-800 hover:bg-gray-900 text-white'
                      }`}
                    >
                      <Github size={16} />
                      <span className="text-sm font-medium">Code</span>
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-md bg-red-600 hover:bg-red-700 text-white transition-colors duration-300"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm font-medium">Demo</span>
                    </motion.a>
                  </div>
                </div>

                {/* Tech Stack */}
                <div>
                  <p className={`text-xs font-semibold uppercase tracking-wider mb-3 ${
                    isDark ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech, index) => {
                      const icon = getIconPath(tech);
                      return (
                        <div
                          key={index}
                          title={tech}
                          className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium ${
                            isDark
                              ? 'bg-[#475569] text-gray-200'
                              : 'bg-gray-100 text-gray-700'
                          }`}
                        >
                          {icon && (
                            <img
                              src={icon}
                              alt={tech}
                              className="w-4 h-4 object-contain"
                            />
                          )}
                          {tech}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectsPage;
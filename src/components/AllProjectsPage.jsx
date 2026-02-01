import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink, Github, FolderOpenDot, ArrowLeft } from 'lucide-react';
import { projects } from '../constants/projects';
import { getIconPath } from '../constants/icons';

const AllProjectsPage = ({ isDark }) => {
    const navigate = useNavigate();
    const [showScrollTop, setShowScrollTop] = useState(false);

    // Define variants first
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

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        
        document.body.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        
        document.documentElement.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const handleBackToProjects = () => {
        navigate('/');

        setTimeout(() => {
            const section = document.getElementById('projects');
            section?.scrollIntoView({ behavior: 'smooth' });
        }, 50);
    };

    // Scroll to top on component mount
    useEffect(() => {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
            setShowScrollTop(scrollPosition > 200); //px
        };

        window.addEventListener('scroll', handleScroll);
        document.body.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.body.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            className={`min-h-screen transition-colors duration-500 ${
                isDark ? 'bg-[#1e293b]' : 'bg-gray-50'
            }`}
        >
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-7xl mx-auto px-6 py-20"
            >
                {/* Back Button */}
                <motion.div variants={cardVariants} className="mb-8">
                    <button
                        onClick={handleBackToProjects}
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${
                            isDark
                                ? 'text-gray-300 hover:text-white hover:bg-[#334155]'
                                : 'text-gray-700 hover:text-gray-900 hover:bg-gray-200'
                        }`}
                    >
                        <ArrowLeft size={18} />
                        Back to Home
                    </button>
                </motion.div>

                {/* Header */}
                <motion.div
                    variants={cardVariants}
                    className="text-center mb-14"
                >
                    <div className="flex justify-center items-center gap-3 mb-3">
                        <FolderOpenDot
                            size={30}
                            className={isDark ? 'text-red-400' : 'text-red-600'}
                        />
                        <h1
                            className={`text-3xl md:text-4xl font-bold ${
                                isDark ? 'text-white' : 'text-gray-900'
                            }`}
                        >
                            All Projects
                        </h1>
                    </div>
                    <p
                        className={`text-base ${
                            isDark ? 'text-gray-400' : 'text-gray-600'
                        }`}
                    >
                        Full collection of my development work
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
                                        ? 'bg-[#334155] border border-gray-700 hover:border-red-600 hover:shadow-[0_0_0_1px_rgba(239,68,68,0.35)]'
                                        : 'bg-white border border-gray-200 hover:border-red-600 hover:shadow-[0_0_0_1px_rgba(239,68,68,0.35)]'
                                }
                            `}
                        >
                            {/* Project Image */}
                            <div className="relative h-40 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t to-transparent" />
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
                                                className="flex items-center justify-center w-8 h-8 transition-all duration-200 hover:scale-110"
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

                                {/* Action Buttons */}
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
            </motion.div>

            {/* Scroll To Top Button - OUTSIDE motion.div */}
            {showScrollTop && (
                <motion.button
                    onClick={handleScrollToTop}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.25 }}
                    className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 p-3 rounded-full shadow-lg backdrop-blur-md ${
                        isDark
                            ? 'bg-neutral-950/90 text-neutral-200 hover:bg-neutral-900'
                            : 'bg-white text-neutral-900 hover:bg-gray-100'
                    }`}
                >
                    <ArrowLeft size={20} className="rotate-90" />
                </motion.button>
            )}
        </div>
    );
};

export default AllProjectsPage;
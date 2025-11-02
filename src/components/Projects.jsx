import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import pic1 from "../assets/process.png"
import pic2 from "../assets/empsys.png"
import pic3 from "../assets/blog.png"
import pic4 from "../assets/cmd.png"
import pic5 from "../assets/stud.png"
import pic6 from "../assets/genshin.png"
import pic7 from "../assets/atm.png"
import pic8 from "../assets/book.png"
import pic9 from "../assets/horizon.png"
import pic10 from "../assets/portfolio.png"
import pic11 from "../assets/webai.png"
import pic12 from "../assets/bookingsys.png"
import pic13 from "../assets/emc.png"
import pic14 from "../assets/buildify.png"
import pic15 from "../assets/fithub.jpg"
import pic16 from "../assets/docu.jpg"
import pic17 from "../assets/cictchatroom.jpg"
/*icon png's*/
import icon1 from "../assets/icons/html.png"
import icon2 from "../assets/icons/css.png"
import icon3 from "../assets/icons/js.png"
import icon4 from "../assets/icons/java.png"
import icon5 from "../assets/icons/mysql.png"
import icon6 from "../assets/icons/firebase.png"
import icon7 from "../assets/icons/react.png"
import icon8 from "../assets/icons/tail.svg"
import icon9 from "../assets/icons/django.svg"
import icon10 from "../assets/icons/figma.png"
import icon11 from "../assets/icons/android.png"
import icon12 from "../assets/icons/php.png"
import icon13 from "../assets/icons/csharp.png"
import icon14 from "../assets/icons/microsql.png"

const ProjectCard = ({ image, title, description, icons, link, category }) => {
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-xl shadow-2xl overflow-hidden flex flex-col h-full border border-gray-700 hover:border-purple-500 transition-all duration-300 group"
    >
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500" 
        />
        <div className="absolute top-3 right-3 bg-purple-600/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold">
          {category}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
            {title}
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            {description}
          </p>
        </div>
        
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {icons.map((icon, index) => (
              <div 
                key={index}
                className="bg-gray-700/50 p-2 rounded-lg hover:bg-purple-600/30 transition-colors"
              >
                <img 
                  src={icon} 
                  alt={`icon-${index}`} 
                  className="w-6 h-6" 
                />
              </div>
            ))}
          </div>
          
          <a 
            href={link}
            target="_blank"
            rel="noopener noreferrer" 
            className="group/btn relative inline-flex h-12 w-full items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-6 font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50"
          >
            <div className="translate-x-0 opacity-100 transition group-hover/btn:-translate-x-[150%] group-hover/btn:opacity-0">
              View Project
            </div>
            <div className="absolute translate-x-[150%] opacity-0 transition group-hover/btn:translate-x-0 group-hover/btn:opacity-100">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6">
                <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
              </svg>
            </div>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = [
    { name: 'All', icon: '🎯' },
    { name: 'Web Development', icon: '💻' },
    { name: 'Mobile Apps', icon: '📱' },
    { name: 'Desktop Apps', icon: '🖥️' },
    { name: 'UI/UX Design', icon: '🖼️' },
    { name: 'Graphic Designs', icon: '🎨' }
  ];

  const projects = [
    {
        image: pic13,
        title: 'EMC Training Portal Website',
        description: 'This Raspberry Pi-based system integrates a fingerprint sensor (R307) and webcam to automate activity monitoring. Users register with their personal details and fingerprint, which are securely stored in Firebase.',
        icons: [icon7, icon8, icon6],
        link: 'https://emctrainingportal.online/login',
        category: 'Web Development'
    },
    {
        image: pic1,
        title: 'Process Scheduling Solver & Tutorial',
        description: 'Process Scheduling Solver! This tool provides solutions for various process scheduling algorithms to help manage and optimize system resources efficiently.',
        icons: [icon1, icon2, icon3],
        link: 'https://github.com/kimalfred/Process-Scheduling-Solver',
        category: 'Web Development'
    },
    {
        image: pic14,
        title: 'Buildify - Content Management System',
        description: 'A dynamic website builder that empowers users to create stunning web pages with a block-based interface and real-time preview functionality.',
        icons: [icon12, icon1, icon3, icon8, icon5],
        link: 'https://github.com/kimalfredmolina/Buildify',
        category: 'Web Development'
    },
    {
        image: pic11,
        title: 'Lumina Insight AI Mental Health Therapy',
        description: 'A Web Base AI Integration system with a voice recognition for user and text-to-voice responds of AI',
        icons: [icon7, icon8],
        link: 'https://github.com/kimalfredmolina/Lumina-Insight-AI-Mental-Health-Therapy',
        category: 'Web Development'
    },
    {
        image: pic10,
        title: 'Kim Alfred Portfolio Website',
        description: 'My Personal Portfolio Website using ReactJS and TailwindCSS',
        icons: [icon7, icon8],
        link: 'https://github.com/kimalfred/KimAlfred-Portfolio',
        category: 'Web Development'
    },
    {
        image: pic15,
        title: 'FitHub - Set Workout Tracker App',
        description: 'FitHub - Set Workout Tracker is an Android app designed to help users organize and track their workout routines efficiently.',
        icons: [icon4, icon6, icon11],
        link: 'https://github.com/kimalfredmolina/FitHub-Set-Workout-Tracker',
        category: 'Mobile Apps'
    },
    {
        image: pic2,
        title: 'Employee Management System',
        description: 'The Employee Management System is a comprehensive application designed to manage various employee-related functions in an organization.',
        icons: [icon4, icon5],
        link: 'https://github.com/kimalfred/Employee-Management-System',
        category: 'Desktop Apps'
    },
    {
        image: pic16,
        title: 'TCU Document Management System',
        description: 'TCU Document Management System is a comprehensive solution for managing and organizing documents within an organization.',
        icons: [icon13, icon1, icon2, icon3, icon14],
        link: 'https://github.com/kimalfredmolina/TCU-CICT-Document-Management-System',
        category: 'Web Development'
    },
    {
        image: pic12,
        title: 'Tonic and Trim Barbershop Booking System',
        description: 'Tonic and Trim is a booking system for Barbershops that allows customers to schedule appointments, view available time slots, and manage bookings.',
        icons: [icon12, icon1, icon2, icon3, icon5],
        link: 'https://github.com/kimalfredmolina/Barber-Shop-Booking-System',
        category: 'Web Development'
    },
    {
        image: pic3,
        title: 'Travel Blog Website',
        description: 'Simple Philippine Travel Blog website, showcasing beautiful and most tourist attractions in the Philippines.',
        icons: [icon7, icon8],
        link: 'https://github.com/kimalfred/Travel-Blog',
        category: 'Web Development'
    },
    {
        image: pic17,
        title: 'TCU CICT Lounge',
        description: 'TCU CICT Lounge is an online platform for TCU CICT student to communicate, share ideas, and access resources related to their academic journey.',
        icons: [icon7, icon8, icon9],
        link: 'https://github.com/kimalfredmolina/TCU-CICT-Lounge',
        category: 'Web Development'
    },
    {
        image: pic4,
        title: 'Command Prompt Tutorial Website',
        description: 'Discover The Ease Of Mastering Command Prompt With Our Step-By-Step Tutorials On Our Website. Our User-Friendly Guides Make CMD Accessible To All Skill Levels.',
        icons: [icon1, icon2, icon3],
        link: 'https://github.com/kimalfred/CMD-Tutorial-Website',
        category: 'Web Development'
    },
    {
        image: pic9,
        title: 'HorizontalX Operating System Design',
        description: 'HorizonX is a groundbreaking advancement in user interfaces and system functionalities, seamlessly blending the best features of both Windows and Mac OS.',
        icons: [icon10],
        link: 'https://www.figma.com/community/file/1377651731493359499/horizontalx-operating-system',
        category: 'UI/UX Design'
    },
    {
        image: pic5,
        title: 'Student Profile Management System',
        description: 'Simple Student Profile Management System Using Django & HTML',
        icons: [icon9, icon1],
        link: 'https://github.com/kimalfred/Student-Profile-Management',
        category: 'Web Development'
    },
    {
        image: pic6,
        title: 'Genshin Infograph Website',
        description: 'Simple Genshin Character Infograph Website HTML, CSS, and Javascript',
        icons: [icon1, icon2, icon3],
        link: 'https://github.com/kimalfred/Genshin-Characters',
        category: 'Web Development'
    },
    {
        image: pic7,
        title: 'ATM Interface System',
        description: 'User-friendly and intuitive interface using Java Swing. Making the UI resemble a real ATM familiarity was the difficult part of this project.',
        icons: [icon4, icon5],
        link: 'https://github.com/kimalfred/ATM-Interface-System',
        category: 'Desktop Apps'
    },
    {
        image: pic8,
        title: 'Online Flight Reservation System',
        description: 'Online Flight Reservation System using Java and MySQL. Users were able to easily manage their accounts, examine their booking history, and make appointments',
        icons: [icon4, icon5],
        link: 'https://github.com/kimalfred/Reservation-System',
        category: 'Desktop Apps'
    },
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div id="projects" className="py-14 pb-16">
      <div className="container mx-auto px-4 ">
        <motion.h2 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="my-20 text-center text-5xl sm:text-6xl font-bold text-white"
        >
          Projects
        </motion.h2>

        {/* Filter Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveFilter(category.name)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === category.name
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/50 scale-105'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Project Count */}
        <motion.p 
          key={activeFilter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-gray-400 mb-8"
        >
          Showing {filteredProjects.length} {activeFilter === 'All' ? 'projects' : `${activeFilter.toLowerCase()} projects`}
        </motion.p>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={`${project.title}-${index}`}
                image={project.image}
                title={project.title}
                description={project.description}
                icons={project.icons}
                link={project.link}
                category={project.category}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-gray-400 text-xl">No projects found in this category</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Projects;
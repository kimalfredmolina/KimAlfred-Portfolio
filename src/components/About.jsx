import { FaUser, FaGraduationCap, FaAward, FaCode, FaLaptopCode, FaMobileAlt, FaPalette } from "react-icons/fa";
import { MdEmail, MdSchool } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiSparkles } from "react-icons/hi";
import profilepic from "../assets/kim2.jpg";
import { motion } from "framer-motion";

const About = () => {
  const contactInfo = [
    {
      icon: <FaUser size={24} />,
      label: "Name",
      value: "Kim Alfred A. Molina"
    },
    {
      icon: <BsFillTelephoneFill size={24} />,
      label: "Telephone",
      value: "01983123"
    },
    {
      icon: <MdEmail size={24} />,
      label: "Email",
      value: "kimalfredmolina1224@gmail.com"
    }
  ];

  const skills = [
    { icon: <FaCode />, title: "Web Development", description: "Building responsive and dynamic websites" },
    { icon: <FaMobileAlt />, title: "Mobile Apps", description: "Creating Android applications" },
    { icon: <FaPalette />, title: "UI/UX Design", description: "Designing user-friendly interfaces" },
    { icon: <FaLaptopCode />, title: "Full Stack", description: "Frontend & Backend development" }
  ];

  /*const achievements = [
    { icon: "🏆", title: "Dean's Lister", description: "Consistent academic excellence" },
    { icon: "💡", title: "Problem Solver", description: "Strong analytical & coding skills" },
    { icon: "🎯", title: "Goal-Oriented", description: "Dedicated to continuous learning" }
  ];*/

  return (
    <div id="about" className="py-14 relative overflow-hidden">
      {/* Background Gradient Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-4">
        {/* Title */}
        <motion.h2 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="my-20 text-center text-5xl sm:text-6xl font-bold text-white"
        >
          About
        </motion.h2>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-start gap-8 max-w-7xl mx-auto">
          
          {/* Left Side - Profile & Skills */}
          <div className="lg:w-2/5 space-y-6">
            
            {/* Profile Image Section */}
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.5 }}
              className="flex justify-center">
              <div className="relative group w-full">
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                
                {/* Image */}
                <img 
                  src={profilepic} 
                  alt="Profile Picture" 
                  className="relative rounded-2xl border-2 border-gray-700 group-hover:border-purple-500 w-full h-auto object-cover shadow-2xl transition-all duration-300" 
                />
                
                {/* Decorative Corners */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-2xl opacity-50"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-pink-500 to-purple-500 rounded-full blur-2xl opacity-50"></div>
              </div>
            </motion.div>

            {/* Quick Stats Card
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 shadow-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300">
              
              <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
                <HiSparkles className="text-purple-400" size={24} />
                Highlights
              </h3>

              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 p-3 bg-gray-700/30 rounded-xl hover:bg-gray-700/50 transition-all duration-300">
                    <span className="text-2xl">{achievement.icon}</span>
                    <div>
                      <p className="text-white font-semibold text-sm">{achievement.title}</p>
                      <p className="text-gray-400 text-xs">{achievement.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div> */}

            {/* Skills Card */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 shadow-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300">
              
              <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
                <FaCode className="text-purple-400" size={22} />
                Specializations
              </h3>

              <div className="grid grid-cols-1 gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 p-3 bg-gray-700/30 rounded-xl hover:bg-purple-600/20 hover:border-purple-500/50 border border-transparent transition-all duration-300 group">
                    <div className="text-purple-400 group-hover:text-pink-400 transition-colors duration-300 mt-1">
                      {skill.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-semibold text-sm">{skill.title}</p>
                      <p className="text-gray-400 text-xs">{skill.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Status Badge */}
            <motion.div
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-4 border border-purple-500/30 backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-white font-semibold">Available for opportunities</span>
                </div>
                <MdSchool className="text-purple-400" size={24} />
              </div>
            </motion.div>

          </div>

          {/* Right Side - Content */}
          <div className="lg:w-3/5 space-y-6">
            
            {/* About Me Card */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300">
              
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                About Me
              </h2>

              <div className="space-y-4 text-gray-300">
                <p className="text-base sm:text-lg leading-relaxed">
                  I'm <span className="text-purple-400 font-semibold">Kim Alfred</span>, a passionate web developer who can build websites from scratch. 
                  Whether you're looking to establish your online presence, list your services, or create a new online store.
                </p>

                <p className="text-base sm:text-lg leading-relaxed">
                  I am currently pursuing a <span className="text-purple-400 font-semibold">Bachelor of Science in Computer Science</span> at Taguig City University, 
                  where I have consistently achieved high academic standing as a <span className="text-pink-400 font-semibold">Dean's Lister</span>. My rigorous coursework and dedication have 
                  equipped me with a strong foundation in computer science principles, programming, and problem-solving skills.
                </p>
              </div>
            </motion.div>

            {/* Contact Info Card */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300">
              
              <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
                <span className="text-purple-400">📧</span> Contact Information
              </h3>

              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-gray-700/30 rounded-xl hover:bg-gray-700/50 transition-all duration-300 group">
                    
                    <div className="text-purple-400 group-hover:text-pink-400 transition-colors duration-300">
                      {contact.icon}
                    </div>
                    
                    <div className="flex-1">
                      <p className="text-sm text-gray-400 font-medium">{contact.label}</p>
                      <p className="text-base sm:text-lg text-white font-semibold">{contact.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education Card */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300">
              
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-white flex items-center gap-3">
                <FaGraduationCap className="text-purple-400" size={32} />
                Education
              </h3>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="mt-1 text-purple-400">
                    <FaAward size={20} />
                  </div>
                  <div>
                    <p className="text-lg sm:text-xl font-bold text-white">
                      Bachelor of Science in Computer Science
                    </p>
                    <p className="text-base sm:text-lg text-gray-300 font-medium mt-1">
                      Taguig City University
                    </p>
                    <div className="flex items-center gap-3 mt-2 flex-wrap">
                      <span className="px-4 py-1 bg-purple-600/30 text-purple-300 rounded-full text-sm font-semibold border border-purple-500/30">
                        2022-2026
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Bottom Decorative Element */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 flex justify-center">
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full"></div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
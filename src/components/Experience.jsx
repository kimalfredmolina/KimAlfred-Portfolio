import { motion } from "framer-motion";
import { EXPERIENCES } from "../constants";

const Experience = () => {
  return (
    <div id="exp" className="border-neutral-900 pb-16 py-14">
      <motion.h2 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="my-20 text-center text-5xl sm:text-6xl font-bold text-white"
        >
          Experience
        </motion.h2>

      <div className="container mx-auto px-4 max-w-6xl">
        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500"></div>

          {EXPERIENCES.map((experience, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-12 relative"
            >
              <div className="flex flex-col lg:flex-row lg:justify-start items-start lg:items-start gap-6 lg:gap-8">
                
                {/* Year Section */}
                <motion.div 
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -100 }}
                  transition={{ duration: 1 }}
                  className="w-full lg:w-1/4 text-center lg:text-right relative z-10"
                >
                  <div className="inline-block lg:block">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 rounded-full shadow-lg shadow-purple-500/30">
                      <p className="text-xl font-bold text-white">{experience.year}</p>
                    </div>
                  </div>
                </motion.div>

                {/* Timeline Dot */}
                <div className="hidden lg:block absolute left-1/4 top-4 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transform -translate-x-1/2 shadow-lg shadow-purple-500/50 z-10">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-ping opacity-75"></div>
                </div>

                {/* Content Section */}
                <motion.div 
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: 100 }}
                  transition={{ duration: 1 }}
                  className="w-full lg:w-3/4 lg:pl-8"
                >
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 sm:p-8 shadow-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300 group hover:shadow-purple-500/20">
                    
                    {/* Role and Company */}
                    <div className="mb-4">
                      <h3 className="text-2xl sm:text-3xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-2 group-hover:from-purple-300 group-hover:to-pink-300 transition-all">
                        {experience.role}
                      </h3>
                      <p className="text-lg sm:text-xl text-gray-300 font-medium flex items-center gap-2">
                        <span className="text-purple-400">@</span>
                        {experience.company}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6">
                      {experience.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: techIndex * 0.05 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="px-4 py-2 rounded-lg bg-gradient-to-r from-gray-700 to-gray-800 text-sm font-semibold text-gray-200 border border-gray-600 hover:border-purple-500 hover:text-purple-300 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 cursor-default"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {/* Decorative Corner */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Decorative Element */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-16 flex justify-center"
        >
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
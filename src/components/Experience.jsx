import { motion } from "framer-motion";
import { EXPERIENCES } from "../constants";

const Experience = () => {
  return(
    <div id="exp" className="border-neutrl-900 pb-4 mt-16">
        <motion.h2 
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0 , y: -100}}
        transition={{duration: 1.5}}
        className="my-20 text-center text-5xl sm:text-6xl font-bold text-white">Experience</motion.h2>
        <div>
            {EXPERIENCES.map((experience, index) =>(
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                    <motion.div 
                    whileInView={{opacity: 1, x: 0}}
                    initial={{opacity: 0 , x: -100}}
                    transition={{duration: 1}}
                    className="w-full lg:w-1/4 text-center lg:text-left mb-4 lg:mb-0">
                        <p className="mb-2 text-xl font-semibold text-white">{experience.year}</p>
                    </motion.div>

                    <motion.div 
                    whileInView={{opacity: 1, x: 0}}
                    initial={{opacity: 0, x: 100}}
                    transition={{duration: 1}}
                    className="w-full max-w-xl lg:w-3/4 ml-2">
                        <h6 className="mb-2 font-bold text-green-500 text-2xl">
                            {experience.role} -{" "}
                            <span className="text-lg text-white"> 
                            {experience.company}</span>
                        </h6>
                        <p className="text-base sm:text-lg text-white mb-4">
                    {experience.description}
                    </p>
                    <div className="flex flex-wrap">{experience.technologies.map((tech, index) => (
                    <span
                        key={index}
                        className="mr-2 mb-2 mt-4 rounded bg-gray-800 px-2 py-1 text-sm font-medium text-white hover:text-red-600 transition-colors duration-300">
                        {tech}
                    </span>
                        ))}
                    </div>
                    </motion.div>
                </div> 
            ))}
        </div>
    </div>
  );
};

export default Experience
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: { y: -10},
    animate: {
        y: [10, -10],
        transition:{
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

const Skills = () => {
  const languagesFrameworks = [
    { name: "HTML5", color: "#E34F26", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", color: "#1572B6", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", color: "#F7DF1E", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", color: "#61DAFB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "TypeScript", color: "#3178C6", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Tailwind CSS", color: "#06B6D4", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "PHP", color: "#777BB4", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { name: "Java", color: "#007396", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "Python", color: "#3776AB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Django", color: "#092E20", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
    { name: "Visual Basic", color: "#5C2D91", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualbasic/visualbasic-original.svg" },
    { name: "C#", color: "#5C2D91", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" },
  ];

  const toolsDevOps = [
    { name: "Firebase", color: "#FFCA28", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    { name: "MySQL", color: "#4479A1", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Figma", color: "#F24E1E", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "Android", color: "#3DDC84", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" },
    { name: "Vercel", color: "#C21325", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original-wordmark.svg" },
    { name: "GitHub", color: "#181717", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Git", color: "#F05032", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Jest", color: "#C21325", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" },
    { name: "Github Actions", color: "#C21325", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg" },
  ];

  return (
    <div id="skills" className="text-white py-10">
        <motion.h2 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="my-20 text-center text-5xl sm:text-6xl font-bold text-white"
        >
          Skills
        </motion.h2>
        
        <motion.div 
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: 100}}
        transition={{duration: 1}}
        className="mt-8 text-4xl font-semibold mb-8 text-center text-white">
          Languages and Frameworks
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-6 px-4">
            {languagesFrameworks.map((skill, index) => (
              <motion.div 
                key={skill.name}
                variants={iconVariants(2.5 + (index % 2) * 0.5)}
                initial="initial"
                animate="animate"
                whileHover={{ scale: 1.1 }}
                className="group relative rounded-2xl border-4 border-neutral-800 hover:border-purple-500 p-6 bg-gradient-to-br from-gray-800 to-gray-900 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30"
              >
                <img 
                  src={skill.logo} 
                  alt={skill.name}
                  className="w-16 h-16 object-contain"
                  style={{ filter: 'brightness(1)' }}
                />
                {/* Tooltip */}
                <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-purple-500/30">
                  {skill.name}
                </div>
              </motion.div>
            ))}
        </div>

        <motion.div 
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: -100}}
        transition={{duration: 1}}
        className="mt-24 text-4xl font-semibold text-center text-white">
          Tools & DevOps
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-6 mt-8 px-4">
            {toolsDevOps.map((tool, index) => (
              <motion.div 
                key={tool.name}
                variants={iconVariants(2.5 + (index % 2) * 0.5)}
                initial="initial"
                animate="animate"
                whileHover={{ scale: 1.1 }}
                className="group relative rounded-2xl border-4 border-neutral-800 hover:border-purple-500 p-6 bg-gradient-to-br from-gray-800 to-gray-900 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30"
              >
                <img 
                  src={tool.logo} 
                  alt={tool.name}
                  className="w-16 h-16 object-contain"
                  style={{ filter: 'brightness(1)' }}
                />
                {/* Tooltip */}
                <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-purple-500/30">
                  {tool.name}
                </div>
              </motion.div>
            ))}
        </div>

        {/* Bottom Decorative Element */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 flex justify-center">
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full"></div>
        </motion.div>
    </div>
  );
};

export default Skills;
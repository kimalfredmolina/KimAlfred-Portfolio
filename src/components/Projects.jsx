import { motion } from "framer-motion";
/*bg png's*/
import pic1 from "../assets/process.png"
import pic2 from "../assets/empsys.png"
import pic3 from "../assets/blog.png"
import pic4 from "../assets/cmd.png"
import pic5 from "../assets/stud.png"
/*icon png's*/
import icon1 from "../assets/icons/html.png"
import icon2 from "../assets/icons/css.png"
import icon3 from "../assets/icons/js.png"
import icon4 from "../assets/icons/java.png"
import icon5 from "../assets/icons/mysql.png"
import icon6 from "../assets/icons/py.webp"
import icon7 from "../assets/icons/react.png"
import icon8 from "../assets/icons/tail.svg"
import icon9 from "../assets/icons/django.svg"

const ProjectCard = ({ image, title, description, icons, link }) => {
  return (
    <motion.div 
      whileInView={{opacity: 1, y: 0}}
      initial={{opacity: 0 , y: -100}}
      transition={{duration: 1.5}}
      className="bg-gray-700 text-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4 flex flex-col flex-grow justify-between">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="mt-2">{description}</p>
          <div className="flex mt-4 space-x-2">
            {icons.map((icon, index) => (
              <img key={index} src={icon} alt={`icon-${index}`} className="w-6 h-6" />
            ))}
          </div>
          <a href={link} class="mt-8 group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 font-medium text-neutral-200 duration-500"><div class="translate-x-0 opacity-100 transition group-hover:-translate-x-[150%] group-hover:opacity-0">
              View Project on Github
          </div><div class="absolute translate-x-[150%] opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></div>
          </a>
        </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
        image: pic1,
        title: 'Process Scheduling Solver & Tutorial ',
        description: 'Process Scheduling Solver! This tool provides solutions for various process scheduling algorithms to help manage and optimize system resources efficiently.',
        icons: [ icon1 , icon2, icon3],
        link: 'https://github.com/kimalfred/Process-Scheduling-Solver',
    },
    {
        image: pic2,
        title: 'Employee Management System',
        description: 'The Employee Management System is a comprehensive application designed to manage various employee-related functions in an organization.',
        icons: [ icon4, icon5],
        link: 'https://github.com/kimalfred/Employee-Management-System',
    },
    {
        image: icon6 ,
        title: 'Voice Recognition',
        description: 'Simple Python voice recognition that User can use voice command to communicate with their computer.',
        icons: [ icon6 ],
        link: 'https://github.com/kimalfred/Python-Voice-Recognition',
    },
    {
        image: pic3,
        title: 'Travel Blog Website',
        description: 'Simple Philippine Travel Blog website, showcasing beautiful and most tourist attractions in the Philippines.',
        icons: [ icon7, icon8 ],
        link: 'https://github.com/kimalfred/Travel-Blog',
    },
    {
      image: pic4,
      title: 'Command Prompt Tutorial Website',
      description: 'Discover The Ease Of Mastering Command Prompt With Our Step-By-Step Tutorials On Our Website. Our User-Friendly Guides Make CMD Accessible To All Skill Levels.',
      icons: [ icon1, icon2, icon3],
      link: 'https://github.com/kimalfred/CMD-Tutorial-Website',
    },
    {
      image: pic5,
      title: 'Student Profile Managemnet System',
      description: 'Simple Student Profile Management System Using Django & HTML',
      icons: [ icon9, icon1 ],
      link: 'https://github.com/kimalfred/Student-Profile-Management',
    },
  ];

  return (
    <div className="mt-16">
      <div className="container mx-auto">
        <motion.h2 
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0 , y: -100}}
        transition={{duration: 1.5}}
        className="my-20 text-center text-6xl font-bold text-white">Projects</motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              icons={project.icons}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

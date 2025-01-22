import { motion } from "framer-motion";
/*bg png's*/
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
import icon10 from "../assets/icons/figma.png"

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
          <a href={link} className="mt-8 group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 font-medium text-neutral-200 duration-500">
              <div className="translate-x-0 opacity-100 transition group-hover:-translate-x-[150%] group-hover:opacity-0">
                  View Project
              </div>
              <div className="absolute translate-x-[150%] opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6">
                      <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                  </svg>
              </div>
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
        image: pic11 ,
        title: 'Lumina Insight AI Mental Health Therapy',
        description: 'A Web Base AI Integration system with a voice recognition for user and text-to-voice responds of AI ',
        icons: [ icon7, icon8 ],
        link: 'https://github.com/kimalfredmolina/Lumina-Insight-AI-Mental-Health-Therapy',
    },
    {
        image: pic10,
        title: 'Kim Alfred Portfolio Website',
        description: 'My Personal Portfolio Website using ReactJS and TailwindCSS',
        icons: [ icon7, icon8 ],
        link: 'https://github.com/kimalfred/KimAlfred-Portfolio',
    },
    {
        image: pic2,
        title: 'Employee Management System',
        description: 'The Employee Management System is a comprehensive application designed to manage various employee-related functions in an organization.',
        icons: [ icon4, icon5],
        link: 'https://github.com/kimalfred/Employee-Management-System',
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
        image: pic9,
        title: 'HorizontalX Operating System Design',
        description: 'HorizonX is a groundbreaking advancement in user interfaces and system functionalities, seamlessly blending the best features of both Windows and Mac OS.',
        icons: [ icon10 ],
        link: 'https://www.figma.com/community/file/1377651731493359499/horizontalx-operating-system',
    },
    {
        image: pic5,
        title: 'Student Profile Management System',
        description: 'Simple Student Profile Management System Using Django & HTML',
        icons: [ icon9, icon1 ],
        link: 'https://github.com/kimalfred/Student-Profile-Management',
    },
    {
        image: pic6,
        title: 'Genshin Infograph Website',
        description: 'Simple Genshin Character Infograph Website HTML, CSS, and Javascript',
        icons: [ icon1, icon2, icon3 ],
        link: 'https://github.com/kimalfred/Genshin-Characters',
    },
    {
        image: pic7,
        title: 'ATM Interface System',
        description: 'User-friendly and intuitive interface using Java Swing. Making the UI resemble a real ATM familiarity was the difficult part of this project.',
        icons: [ icon4, icon5 ],
        link: 'https://github.com/kimalfred/ATM-Interface-System',
    },
    {
        image: pic8,
        title: 'Online Flight Reservation System',
        description: 'Online Flight Reservation System using Java and MySQL. Users were able to easily manage their accounts, examine their booking history, and make appointments',
        icons: [ icon4, icon5 ],
        link: 'https://github.com/kimalfred/Reservation-System',
    },
  ];

  return (
    <div id="projects" className="mt-16">
      <div className="container mx-auto px-4">
        <motion.h2 
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0 , y: -100}}
        transition={{duration: 1.5}}
        className="my-20 text-center text-5xl sm:text-6xl font-bold text-white">Projects</motion.h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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

import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import profilepic from "../assets/kim2.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div id="about" className="mt-16">
        <div className="text-white w-full text-center">
            <motion.h1 
            whileInView={{opcaity: 1, y: 0}}
            initial={{ opcaity: 1, y: -100}}
            transition={{duration: 1.5}}
            className="text-6xl font-bold">About</motion.h1>
        </div>
        <div className="bg-foreground text-white py-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
            <motion.img 
            whileInView={{ opacity: 1, x: 0}}
            initial={{ opacity: 0, x: -100}}
            transition={{ duration: 1.5}}
            src={profilepic} alt="Profile Picture" className="rounded-lg border-2 border-primary mx-auto w-1/4 h-96 object-cover" />
            <div className="md:w-1/2 p-4">

                <motion.h2 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100}}
                transition={{ duration: 1}}
                className="text-4xl font-bold">About Me
                </motion.h2>

            <motion.p 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100}}
            transition={{ duration: 1}}
            className="mt-4 text-white font-normal">
                I'm Kim Alfred, a passionate web developer who can build websites from scratch. 
                Whether you're looking to establish your online presence, list your services, or create a new online store.
            </motion.p>

            <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100}}
            transition={{ duration: 1}} 
            className="mt-4 text-white font-normal">
                I am currently pursuing a Bachelor of Science in Computer Science at Taguig City University, 
                where I have consistently achieved high academic standing as a Dean's Lister. My rigorous coursework and dedication have 
                equipped me with a strong foundation in computer science principles, programming, and problem-solving skills.
            </motion.p>

            <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100}}
            transition={{ duration: 1}}
            className="ml-8 mt-8 text-xl flex items-center">
                <FaUser size={30} color="green" className="mr-4"/><span className="text-xl mr-4 font-bold">Name:</span> <spam className="text-lg text-2xl font-semibold">Kim Alfred A. Molina</spam>
            </motion.div> 

            <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100}}
            transition={{ duration: 1}}
            className="ml-8 mt-4 text-xl flex items-center">
                <BsFillTelephoneFill size={30} color="green" className="mr-4"/><span className="text-xl mr-4 font-bold">Telephone:</span> <spam className="text-lg text-2xl font-semibold">01983123</spam>
            </motion.div> 

            <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100}}
            transition={{ duration: 1}}
            className="ml-8 mt-4 text-xl flex items-center">
                <MdEmail size={30} color="green" className="mr-4"/><span className="text-xl mr-4 font-bold">Email:</span> <spam className="text-lg text-2xl font-semibold">kimalfredmolina1224@gmail.com</spam>
            </motion.div>

            <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100}}
            transition={{ duration: 1}}
            className="md:w-1/2 p-4 mt-8">
                <h2 className="text-4xl font-bold">Education</h2>
                <p className="mt-4 font-medium text-lg">Bachelor of Science in Computer Science</p>
                <p className="font-medium text-lg">Taguig City University</p>
                <p className="font-medium text-base">2022-2026</p>
            </motion.div>      
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

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
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="text-5xl sm:text-6xl font-bold">
          About
        </motion.h1>
      </div>

      <div className="bg-foreground text-white py-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          
          <motion.img 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5 }}
            src={profilepic} 
            alt="Profile Picture" 
            className="rounded-lg border-2 border-primary mx-auto w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4 h-auto object-cover mb-8 md:mb-0" />

          <div className="md:w-1/2 p-4 text-center md:text-left">
            
            <motion.h2 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="text-3xl sm:text-4xl font-bold">
              About Me
            </motion.h2>

            <motion.p 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="mt-4 text-base sm:text-lg md:text-xl font-normal">
              I'm Kim Alfred, a passionate web developer who can build websites from scratch. 
              Whether you're looking to establish your online presence, list your services, or create a new online store.
            </motion.p>

            <motion.p 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="mt-4 text-base sm:text-lg md:text-xl font-normal">
              I am currently pursuing a Bachelor of Science in Computer Science at Taguig City University, 
              where I have consistently achieved high academic standing as a Dean's Lister. My rigorous coursework and dedication have 
              equipped me with a strong foundation in computer science principles, programming, and problem-solving skills.
            </motion.p>

            <div className="mt-8">
              <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                className="flex items-center justify-center md:justify-start text-xl">
                <FaUser size={30} color="green" className="mr-4"/>
                <span className="font-bold">Name:</span>
                <span className="ml-4 font-semibold text-lg sm:text-xl">Kim Alfred A. Molina</span>
              </motion.div>

              <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                className="flex items-center justify-center md:justify-start mt-4 text-xl">
                <BsFillTelephoneFill size={30} color="green" className="mr-4"/>
                <span className="font-bold">Telephone:</span>
                <span className="ml-4 font-semibold text-lg sm:text-xl">01983123</span>
              </motion.div>

              <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                className="flex items-center justify-center md:justify-start mt-4 text-xl">
                <MdEmail size={30} color="green" className="mr-4"/>
                <span className="font-bold">Email:</span>
                <span className="ml-4 font-semibold text-lg sm:text-xl">kimalfredmolina1224@gmail.com</span>
              </motion.div>
            </div>

            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="mt-8">
              <h2 className="text-3xl sm:text-4xl font-bold">Education</h2>
              <p className="mt-4 font-medium text-base sm:text-lg md:text-xl">Bachelor of Science in Computer Science</p>
              <p className="font-medium text-base sm:text-lg md:text-xl">Taguig City University</p>
              <p className="font-medium text-base">2022-2026</p>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

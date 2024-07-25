import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { FaPhp } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiVisualstudio } from "react-icons/si";
import { SiDjango } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { FaFigma } from "react-icons/fa6";
import { FaGitAlt } from "react-icons/fa";
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
  return (
    <div className="text-white py-10">
        <motion.h2 
        whileInView={{opcaity: 1, y: 0}}
        initial={{ opcaity: 1, y: -100}}
        transition={{duration: 1.5}}
        className="my-20 text-center text-6xl font-bold"> Technologies</motion.h2>
        
        <motion.div 
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0 , x: 100}}
        transition={{duration: 1}}
        className="mt-8 text-4xl font-semibold mb-8 text-center">Languages</motion.div>

        <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.div 
            whileInView={{ opacity: 1, x: 0}}
            initial={{ opacity: 0, x:1.5}}
            transition={{ duration: 1.5}}
            className="flex flex-wrap justify-center gap-4">
                <motion.div 
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4 ">
                    <FaHtml5 className="text-6xl text-orange-600"/>
                </motion.div>

                <motion.div 
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaCss3Alt className="text-6xl text-blue-500"/>
                </motion.div>

                <motion.div
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiJavascriptFill className="text-6xl text-yellow-300"/>
                </motion.div>

                <motion.div
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaReact className="text-6xl text-cyan-500"/>
                </motion.div>

                <motion.div
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiTailwindcss className="text-6xl text-emerald-400"/>
                </motion.div>

                <motion.div 
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaPhp className="text-6xl text-blue-500"/>
                </motion.div>

                <motion.div 
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaJava className="text-6xl text-sky-600"/>
                </motion.div>

                <motion.div 
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaPython className="text-6xl text-yellow-400"/>
                </motion.div>
           
                <motion.div 
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiDjango className="text-6xl text-lime-600"/>
                </motion.div>

                <motion.div 
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiVisualstudio className="text-6xl text-purple-700"/>
                </motion.div> 

                </motion.div>
        </div>

        <motion.div 
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0 , x: -100}}
        transition={{duration: 1}}
        className="mt-16 text-4xl font-semibold text-center">Dev Ops</motion.div>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <motion.div 
            whileInView={{ opacity: 1, x: 0}}
            initial={{ opacity: 0, x:1.5}}
            transition={{ duration: 1.5}}
            className="flex flex-wrap justify-center gap-4">
                <motion.div 
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <GrMysql className="text-6xl text-blue-600"/>
                </motion.div>

                <motion.div 
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaFigma className="text-6xl text-orange-600"/>
                </motion.div>

                <motion.div 
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaGitAlt className="text-6xl text-red-700"/>
                </motion.div> 

                </motion.div>             
            </div>

    </div>
    );
};

export default Skills
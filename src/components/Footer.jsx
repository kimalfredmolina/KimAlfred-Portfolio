import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="pb-20">
      <motion.h2 
        whileInView={{opacity: 1, y:0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 0.5}}
        className="text-white text-6xl font-bold text-center mb-16"
      >
        Get in Touch
      </motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p 
          whileInView={{opacity: 1, x:0}}
          initial={{opacity: 0, x: -100}}
          transition={{duration: 1}}
          className="my-4 text-white"
        >
          Central Signal Village Taguig City, Philippines
        </motion.p>
        <motion.p 
          whileInView={{opacity: 1, x:0}}
          initial={{opacity: 0, x: 100}}
          transition={{duration: 1}}
          className="my-4 text-white"
        >
          0-923196123
        </motion.p>
        <a href="mailto:kimalfredmolina1224@gmail.com" className="border-b text-white">
          kimalfredmolina1224@gmail.com
        </a>
        <div className="flex mt-4 justify-center">
          <a href="https://facebook.com" className="mx-2 text-white">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://instagram.com" className="mx-2 text-white">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://github.com" className="mx-2 text-white">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com" className="mx-2 text-white">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://stackoverflow.com" className="mx-2 text-white">
            <i className="fab fa-stack-overflow"></i>
          </a>
        </div>
      </div>
      <div className="text-center mt-4 text-white">
        &copy; {currentYear} Kim Alfred Molina. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;

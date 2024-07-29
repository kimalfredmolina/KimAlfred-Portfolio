import logo from '../assets/k.png';

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full text-lime-400 z-50 font-poppins bg-transparent">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <a href="#">
              <img src={logo} alt="Logo" className="h-12" />
            </a>
          </div>
          <div className="flex-1 flex justify-center items-center space-x-12 text-2xl">
            <a href="#home" className="hover:text-red-600 font-bold duration-300">Home</a>
            <a href="#about" className="hover:text-red-600 font-bold duration-300">About</a>
            <a href="#skills" className="hover:text-red-600 font-bold duration-300">Technologies</a>
            <a href="#exp" className="hover:text-red-600 font-bold duration-300">Experience</a>
            <a href="#projects" className="hover:text-red-600 font-bold duration-300">Projects</a>
            <a href="#contact" className="hover:text-red-600 font-bold duration-300">Contact</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;


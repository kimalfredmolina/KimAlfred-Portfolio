import logo from '../assets/k.png';

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full text-teal-500 z-50 font-poppins bg-transparent">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <a href="#">
              <img src={logo} alt="Logo" className="h-12" />
            </a>
          </div>
          <div className="flex-1 flex justify-center items-center space-x-12 text-2xl">
            <a href="#" className="hover:text-yellow-400 font-bold duration-300">Home</a>
            <a href="#" className="hover:text-yellow-400 font-bold duration-300">About</a>
            <a href="#" className="hover:text-yellow-400 font-bold duration-300">Technologies</a>
            <a href="#" className="hover:text-yellow-400 font-bold duration-300">Experience</a>
            <a href="#" className="hover:text-yellow-400 font-bold duration-300">Projects</a>
            <a href="#" className="hover:text-yellow-400 font-bold duration-300">Contact</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;


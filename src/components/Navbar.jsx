import logo from '../assets/k.png';

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full text-white z-50 font-poppins bg-neutral-700">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <a href="#">
              <img src={logo} alt="Logo" className="h-12" />
            </a>
          </div>
          <div className="flex-1 flex justify-center items-center space-x-12 text-lg">
            <a href="#" className="hover:text-black font-bold">Home</a>
            <a href="#" className="hover:text-black font-bold">About</a>
            <a href="#" className="hover:text-black font-bold">Skills</a>
            <a href="#" className="hover:text-black font-bold">Experience</a>
            <a href="#" className="hover:text-black font-bold">Projects</a>
            <a href="#" className="hover:text-black font-bold">Contact</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;


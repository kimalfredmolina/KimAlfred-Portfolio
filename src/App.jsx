import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';

const App = () => {
  return (
    <div className="relative min-h-screen">
      <div className="absolute top-0 left-0 w-full h-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] z-0">
      </div>

      <div className="relative z-10">
        <Navbar />
        <Home />
        <About />
      </div>
    </div>
  )
}

export default App;


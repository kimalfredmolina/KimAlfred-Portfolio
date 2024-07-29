import logo1 from "../assets/logo/fb.png"
import logo2 from "../assets/logo/insta.webp"
import logo3 from "../assets/logo/github.webp"
import logo4 from "../assets/logo/linkedin.webp"
import logo5 from "../assets/logo/stack.png"

const Contact = () => {
  return (
    <div id="contact" className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4">
        <h2 className="text-white text-5xl font-bold text-center mb-16">Contact Me</h2>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-white mb-8 md:mb-0 md:w-1/2">
            <h3 className="text-2xl mb-4">Let’s Discuss on something cool together on...</h3>
            <div className="flex space-x-4 mb-8">
              <a href="https://www.facebook.com/kimalfred.amolina"><img src={logo1} alt="Facebook" className="w-8 h-8"/></a>
              <a href="https://www.instagram.com/kim_alfredkim/"><img src={logo2} alt="Instagram" className="w-8 h-8"/></a>
              <a href="https://github.com/kimalfred"><img src={logo3} alt="Github" className="w-8 h-8"/></a>
              <a href="https://www.linkedin.com/in/kim-alfred-molina-323455276/"><img src={logo4} alt="LinkedIn" className="w-8 h-8"/></a>
              <a href="https://stackoverflow.com/users/23153926/kim-alfred-a-molina"><img src={logo5} alt="StackOverflow" className="w-8 h-8"/></a>
            </div>
            <p className="text-xl mb-4">I’m interested in...</p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-gray-700 text-white py-2 px-4 rounded hover:text-red-600 transition-colors duration-300">Web Development</button>
              <button className="bg-gray-700 text-white py-2 px-4 rounded hover:text-red-600 transition-colors duration-300">Tech Trending’s</button>
              <button className="bg-gray-700 text-white py-2 px-4 rounded hover:text-red-600 transition-colors duration-300">Blog Website</button>
              <button className="bg-gray-700 text-white py-2 px-4 rounded hover:text-red-600 transition-colors duration-300">Ecommerce Website</button>
              <button className="bg-gray-700 text-white py-2 px-4 rounded hover:text-red-600 transition-colors duration-300">Backend</button>
            </div>
          </div>
          <div className="bg-gray-700 p-8 rounded-lg md:w-1/2 w-full">
            <form>
              <div className="mb-4">
                <label className="block text-white text-sm font-bold mb-2" htmlFor="name">Name</label>
                <input className="w-full px-3 py-2 text-gray-700 bg-white rounded" id="name" type="text" placeholder="Your Name"/>
              </div>
              <div className="mb-4">
                <label className="block text-white text-sm font-bold mb-2" htmlFor="email">Email</label>
                <input className="w-full px-3 py-2 text-gray-700 bg-white rounded" id="email" type="email" placeholder="Your Email"/>
              </div>
              <div className="mb-4">
                <label className="block text-white text-sm font-bold mb-2" htmlFor="subject">Subject</label>
                <input className="w-full px-3 py-2 text-gray-700 bg-white rounded" id="subject" type="text" placeholder="Your Subject"/>
              </div>
              <div className="mb-4">
                <label className="block text-white text-sm font-bold mb-2" htmlFor="message">Message</label>
                <textarea className="w-full px-3 py-2 text-gray-700 bg-white rounded" id="message" rows="5" placeholder="Your Message"></textarea>
              </div>
              <div className="flex justify-center">
                <button class="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 font-medium text-neutral-200 duration-500"><div class="translate-y-0 opacity-100 transition group-hover:-translate-y-[150%] group-hover:opacity-0">
                    Send Email
                </div><div class="absolute translate-y-[150%] opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6"><path d="M7.5 2C7.77614 2 8 2.22386 8 2.5L8 11.2929L11.1464 8.14645C11.3417 7.95118 11.6583 7.95118 11.8536 8.14645C12.0488 8.34171 12.0488 8.65829 11.8536 8.85355L7.85355 12.8536C7.75979 12.9473 7.63261 13 7.5 13C7.36739 13 7.24021 12.9473 7.14645 12.8536L3.14645 8.85355C2.95118 8.65829 2.95118 8.34171 3.14645 8.14645C3.34171 7.95118 3.65829 7.95118 3.85355 8.14645L7 11.2929L7 2.5C7 2.22386 7.22386 2 7.5 2Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></div></button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

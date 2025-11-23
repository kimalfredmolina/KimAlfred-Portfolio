import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from 'emailjs-com';
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa';
import { MdEmail, MdPerson, MdSubject, MdMessage } from 'react-icons/md';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const socialLinks = [
    { icon: <FaFacebook size={24} />, url: "https://www.facebook.com/kimalfred.amolina", label: "Facebook", color: "hover:text-blue-500" },
    { icon: <FaInstagram size={24} />, url: "https://www.instagram.com/kim_alfredkim/", label: "Instagram", color: "hover:text-pink-500" },
    { icon: <FaGithub size={24} />, url: "https://github.com/kimalfred", label: "Github", color: "hover:text-gray-400" },
    { icon: <FaLinkedin size={24} />, url: "https://www.linkedin.com/in/kim-alfred-molina-323455276/", label: "LinkedIn", color: "hover:text-blue-400" },
    { icon: <FaStackOverflow size={24} />, url: "https://stackoverflow.com/users/23153926/kim-alfred-a-molina", label: "StackOverflow", color: "hover:text-orange-500" }
  ];

  const interests = [
    "Web Development",
    "Tech Trending's",
    "Blog Website",
    "Ecommerce Website",
    "Backend"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.send(
      'service_46rgdfm',
      'template_ndyo47j',
      formData,
      'KmdcuCE96WnVklega'
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Email sent successfully! 🎉');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    })
    .catch((err) => {
      console.error('FAILED...', err);
      alert('Failed to send email. Please try again.');
      setIsSubmitting(false);
    });
  };

  return (
    <div id="contact" className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Title */}
        <motion.h2 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="my-20 text-center text-5xl sm:text-6xl font-bold text-white"
        >
          Contact Me
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* Left Side - Info */}
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="space-y-8">
            
            {/* Connect Section */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                Let's Connect! 🚀
              </h3>
              <p className="text-gray-300 mb-6 text-lg">
                Feel free to reach out through any of these platforms. I'm always excited to discuss new projects and opportunities!
              </p>
              
              {/* Social Links */}
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    transition={{ delay: index * 0.1 }}
                    className={`bg-gray-700/50 p-4 rounded-xl text-white ${social.color} transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 border border-gray-600 hover:border-purple-500`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Interests Section */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-purple-400">💡</span>
                I'm Interested In
              </h3>
              <div className="flex flex-wrap gap-3">
                {interests.map((interest, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 border border-purple-500/50 text-white py-2 px-4 rounded-lg hover:from-purple-600/50 hover:to-pink-600/50 transition-all duration-300 cursor-default font-medium"
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <MdEmail className="text-purple-400" size={24} />
                Quick Contact
              </h3>
              <p className="text-gray-300 text-sm">
                <span className="text-purple-400 font-semibold">Email:</span> kimalfredmolina1224@gmail.com
              </p>
              <p className="text-gray-300 text-sm mt-2">
                <span className="text-purple-400 font-semibold">Response Time:</span> Usually within 24 hours
              </p>
            </div>

          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300">
            
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-purple-400">📬</span>
              Send Me a Message
            </h3>

            <div className="space-y-6">
              {/* Name Input */}
              <div>
                <label className="block text-white text-sm font-semibold mb-2 flex items-center gap-2" htmlFor="name">
                  <MdPerson className="text-purple-400" />
                  Name
                </label>
                <input
                  className="w-full px-4 py-3 text-white bg-gray-700/50 rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300"
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-white text-sm font-semibold mb-2 flex items-center gap-2" htmlFor="email">
                  <MdEmail className="text-purple-400" />
                  Email
                </label>
                <input
                  className="w-full px-4 py-3 text-white bg-gray-700/50 rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Subject Input */}
              <div>
                <label className="block text-white text-sm font-semibold mb-2 flex items-center gap-2" htmlFor="subject">
                  <MdSubject className="text-purple-400" />
                  Subject
                </label>
                <input
                  className="w-full px-4 py-3 text-white bg-gray-700/50 rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300"
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label className="block text-white text-sm font-semibold mb-2 flex items-center gap-2" htmlFor="message">
                  <MdMessage className="text-purple-400" />
                  Message
                </label>
                <textarea
                  className="w-full px-4 py-3 text-white bg-gray-700/50 rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300 resize-none"
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell me about your project or idea..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-4">
                <button
                  onClick={handleSubmit}
                  className="group relative inline-flex h-12 w-full sm:w-auto items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-8 font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
                  type="button"
                  disabled={isSubmitting}
                >
                  <div className="translate-y-0 opacity-100 transition group-hover:-translate-y-[150%] group-hover:opacity-0">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </div>
                  <div className="absolute translate-y-[150%] opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"> 
                      <path d="M7.5 2C7.77614 2 8 2.22386 8 2.5L8 11.2929L11.1464 8.14645C11.3417 7.95118 11.6583 7.95118 11.8536 8.14645C12.0488 8.34171 12.0488 8.65829 11.8536 8.85355L7.85355 12.8536C7.75979 12.9473 7.63261 13 7.5 13C7.36739 13 7.24021 12.9473 7.14645 12.8536L3.14645 8.85355C2.95118 8.65829 2.95118 8.34171 3.14645 8.14645C3.34171 7.95118 3.65829 7.95118 3.85355 8.14645L7 11.2929L7 2.5C7 2.22386 7.22386 2 7.5 2Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
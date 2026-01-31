import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, X, ArrowRight, ExternalLink } from 'lucide-react';
import { certificates } from '../constants/certificates';

const CertificatesPage = ({ isDark }) => {
  const [selectedCert, setSelectedCert] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: 'easeOut' }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.2 }
    }
  };

  return (
    <div
      id="certificates"
      className={`transition-colors duration-500 ${
        isDark ? 'bg-[#1e293b]' : 'bg-gray-50'
      }`}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-90px" }}
        className="max-w-7xl mx-auto px-6 py-4"
      >
        {/* Section Header */}
        <motion.div 
          variants={cardVariants}
          className="mb-12 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-3 text-red-600">
            <Award
              size={28}/>
            <h2
              className={`text-3xl md:text-4xl font-bold ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
            >
              My Certificates
            </h2>
          </div>
          <p
            className={`text-base max-w-2xl mx-auto ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            Academic & Professional certifications showcasing my continuous learning journey related to development
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.slice(0, 3).map((cert) => (
            <motion.div
              key={cert.id}
              variants={cardVariants}
              className={`group rounded-lg overflow-hidden flex flex-col transition-all duration-300 cursor-pointer
                  ${
                    isDark
                      ? 'bg-[#334155] border border-gray-700 hover:border-red-600 hover:shadow-[0_0_0_1px_rgba(239,68,68,0.35)]'
                      : 'bg-white border border-gray-200 hover:border-red-600 hover:shadow-[0_0_0_1px_rgba(239,68,68,0.35)]'
                  }
              `}
              onClick={() => setSelectedCert(cert)}
            >
              {/* Certificate Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23e5e7eb" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="18" fill="%239ca3af"%3ECertificate Image%3C/text%3E%3C/svg%3E';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">Click to expand</span>
                </div>
              </div>

              {/* Certificate Content */}
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex items-start gap-2 mb-2 text-red-600">
                  <Award
                    size={18}
                  />
                  <h3
                    className={`text-lg font-bold leading-tight ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {cert.title}
                  </h3>
                </div>
                
                <p
                  className={`text-sm mb-1 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  {cert.issuer}
                </p>
                
                <p
                  className={`text-xs mb-4 ${
                    isDark ? 'text-gray-400' : 'text-gray-500'
                  }`}
                >
                  {cert.date}
                </p>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill, index) => (
                    <span
                      key={index}
                      className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                        isDark
                          ? 'bg-[#475569] text-gray-200'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Spacer */}
                <div className="flex-grow"></div>

                {/* Verify Button */}
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className={`flex items-center justify-center gap-1.5 px-3 py-2 rounded-md transition-colors duration-300 bg-red-600 hover:bg-red-700 text-white`}
                >
                  <ExternalLink size={14} />
                  <span className="text-xs font-medium">Verify Credential</span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Certificates Button */}
        <motion.div variants={cardVariants} className="mt-12 text-center">
          <Link
            to="/allcertificates"
            className={`group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md px-6 font-medium transition-colors duration-500
              ${
                isDark
                  ? 'bg-neutral-950 text-neutral-200 hover:bg-neutral-900'
                  : 'bg-neutral-900 text-neutral-100 hover:bg-neutral-800'
              }`}
          >
            {/* Default Content */}
            <div className="flex items-center gap-2 translate-x-0 opacity-100 transition-all duration-500
                            group-hover:-translate-x-[150%] group-hover:opacity-0">
              <Award size={18} />
              <span>View All my Certificates</span>
            </div>

            {/* Hover Content */}
            <div className="absolute flex items-center gap-2 translate-x-[150%] opacity-0 transition-all duration-500
                            group-hover:translate-x-0 group-hover:opacity-100">
              <span>Explore</span>
              <ArrowRight size={20} />
            </div>
          </Link>
        </motion.div>
      </motion.div>

      {/* Expanded Certificate Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              className={`relative max-w-5xl w-full rounded-lg overflow-hidden shadow-2xl ${
                isDark ? 'bg-[#334155]' : 'bg-white'
              }`}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
                className={`absolute top-4 right-4 z-10 p-2 rounded-full transition-colors duration-200 ${
                  isDark
                    ? 'bg-black/50 hover:bg-black/70 text-white'
                    : 'bg-white/90 hover:bg-white text-gray-900'
                }`}
              >
                <X size={24} />
              </button>

              {/* Certificate Image */}
              <div className="relative bg-gradient-to-br from-gray-100 to-gray-200">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="w-full max-h-[70vh] object-contain"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"%3E%3Crect fill="%23e5e7eb" width="800" height="600"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" fill="%239ca3af"%3ECertificate Image%3C/text%3E%3C/svg%3E';
                  }}
                />
              </div>

              {/* Certificate Info */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3
                      className={`text-2xl font-bold mb-2 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      {selectedCert.title}
                    </h3>
                    <p
                      className={`text-base mb-1 ${
                        isDark ? 'text-gray-300' : 'text-gray-700'
                      }`}
                    >
                      {selectedCert.issuer}
                    </p>
                    <p
                      className={`text-sm ${
                        isDark ? 'text-gray-400' : 'text-gray-500'
                      }`}
                    >
                      {selectedCert.date}
                    </p>
                  </div>
                  
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={selectedCert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors duration-300 bg-red-600 hover:bg-red-700 text-white`}
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm font-medium">Verify</span>
                  </motion.a>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {selectedCert.skills.map((skill, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1.5 rounded-full text-sm font-medium ${
                        isDark
                          ? 'bg-[#475569] text-gray-200'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CertificatesPage;
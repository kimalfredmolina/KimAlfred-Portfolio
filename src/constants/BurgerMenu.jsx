import { motion, AnimatePresence } from 'framer-motion'
import { Home, Code2, Menu, X, User, FolderOpenDot, Award, Moon, Sun } from 'lucide-react'

export default function BurgerMenu({
  isDark,
  setIsDark,
  menuOpen,
  setMenuOpen,
  scrollToSection
}) {

  /* Container animation */
  const menuContainer = {
    hidden: {
      opacity: 0,
      y: -10
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 14,
        staggerChildren: 0.08
      }
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.2 }
    }
  }

  /* Button animation */
  const menuItem = {
    hidden: {
      opacity: 0,
      y: -8,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 18
      }
    },
    exit: {
      opacity: 0,
      y: -8,
      scale: 0.9,
      transition: { duration: 0.15 }
    }
  }

  const menuItems = [
    { icon: Home, section: 'profile' },
    { icon: User, section: 'about' },
    { icon: Code2, section: 'skills' },
    { icon: FolderOpenDot, section: 'projects' },
    { icon: Award, section: 'certificates' }
  ]

  return (
    <>
      {/* Theme Toggle */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsDark(!isDark)}
        className={`fixed top-6 right-6 z-50 w-12 h-12 rounded-full flex items-center justify-center transition-all ${
          isDark
            ? 'bg-[#475569] text-yellow-400 hover:bg-[#64748b]'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        {isDark ? <Sun size={18} /> : <Moon size={18} />}
      </motion.button>

      {/* Burger Button */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setMenuOpen(!menuOpen)}
        className={`fixed top-20 right-6 z-50 w-12 h-12 rounded-full flex items-center justify-center transition-all ${
          isDark
            ? 'bg-[#475569] text-white hover:bg-[#64748b]'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        {menuOpen ? <X size={18} /> : <Menu size={18} />}
      </motion.button>

      {/* Smooth Vertical Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            variants={menuContainer}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-[136px] right-6 z-40 flex flex-col items-center gap-3"
          >
            {menuItems.map(({ icon: Icon, section }) => (
              <motion.button
                key={section}
                variants={menuItem}
                whileHover={{ scale: 1.12 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(section)}
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                  isDark
                    ? 'bg-[#475569] text-white hover:bg-[#64748b]'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                <Icon size={20} />
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

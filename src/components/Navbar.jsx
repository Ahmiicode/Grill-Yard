import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import logoImg from '../assets/mainn.png'

const leftLinks = [
  { name: 'Home', path: '/' },
  { name: 'Menu', path: '#menu' },
]

const rightLinks = [
  { name: 'About', path: '#about' },
  { name: 'Contact', path: '#contact' },
]

export default function Navbar() {
  const [loading, setLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const allLinks = [...leftLinks, ...rightLinks]

  const handleLogoClick = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="bg-gray-900 text-yellow-400 px-4 md:px-8 py-5 flex justify-between items-center sticky top-0 z-50 shadow-lg"
      >
        {/* Hamburger Menu Button (Mobile) */}
        <div className="md:hidden z-60">
          <button
            onClick={toggleMenu}
            className="text-yellow-400 focus:outline-none"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <div
              className="w-6 h-0.5 bg-yellow-400 mb-1.5 transition-all duration-300"
              style={{ transform: isOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none' }}
            ></div>
            <div
              className="w-6 h-0.5 bg-yellow-400 mb-1.5 transition-opacity duration-300"
              style={{ opacity: isOpen ? 0 : 1 }}
            ></div>
            <div
              className="w-6 h-0.5 bg-yellow-400 transition-all duration-300"
              style={{ transform: isOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none' }}
            ></div>
          </button>
        </div>

        {/* Left Links (Desktop) */}
        <ul className="hidden md:flex space-x-12 text-lg font-semibold">
          {leftLinks.map(({ name, path }) => (
            <motion.li
              key={name}
              whileHover={{ scale: 1.1 }}
              className="relative cursor-pointer"
            >
              <a href={path} className="hover:text-yellow-300">{name}</a>
            </motion.li>
          ))}
        </ul>

        {/* Centered Logo */}
        <div
          onClick={handleLogoClick}
          className="cursor-pointer select-none flex justify-center items-center mx-auto md:mx-0"
          aria-label="Home Logo"
          title="Grill Yard"
        >
          <motion.img
            src={logoImg}
            alt="Grill Yard Logo"
            className="w-16 h-16 md:w-20 md:h-20 object-contain"
            whileHover={{ scale: 1.1, rotate: 10 }}
            whileTap={{ scale: 0.95, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 300 }}
          />
        </div>

        {/* Right Links (Desktop) */}
        <ul className="hidden md:flex space-x-12 text-lg font-semibold">
          {rightLinks.map(({ name, path }) => (
            <motion.li
              key={name}
              whileHover={{ scale: 1.1 }}
              className="relative cursor-pointer"
            >
              <a href={path} className="hover:text-yellow-300">{name}</a>
            </motion.li>
          ))}
        </ul>

        {/* Spacer for mobile layout */}
        <div className="md:hidden w-6"></div>
      </motion.nav>

    <AnimatePresence>
  {isOpen && (
    <motion.div
      key="mobile-menu"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 bg-gray-900 bg-opacity-95 z-40 pt-24 flex items-center justify-center"
      onClick={toggleMenu}
    >
      <motion.ul
        className="flex flex-col items-center space-y-6"
        initial="hidden"
        animate="visible"
      >
        {allLinks.map(({ name, path }, index) => (
          <motion.li
            key={name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.08 }}
          >
            <a
              href={path}
              onClick={() => setIsOpen(false)}
              className="bg-yellow-400 text-gray-900 text-lg px-8 py-3 rounded-full font-semibold shadow-md hover:bg-yellow-300 transition-all duration-200"
            >
              {name}
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  )}
</AnimatePresence>


      {/* Loading Overlay */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-gray-900 flex flex-col justify-center items-center z-50"
          >
            <motion.img
              src={logoImg}
              alt="Loading Logo"
              className="w-28 h-28 mb-6 object-contain"
              animate={{ rotate: [0, 360] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            />
            <motion.p
              className="text-yellow-400 text-xl font-semibold tracking-wide"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ repeat: Infinity, repeatType: "mirror", duration: 1.5 }}
            >
              Loading...
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

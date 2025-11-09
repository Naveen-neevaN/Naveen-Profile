import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ThemeSwitch from './ThemeSwitch'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? 'glass' : 'bg-transparent'
      }`}
    >
      <div className="section-container py-4">
        <nav className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-accent">
            Your Name
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="nav-link">
              About
            </a>
            <a href="#skills" className="nav-link">
              Skills
            </a>
            <a href="#projects" className="nav-link">
              Projects
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </div>
          
          <div className="flex items-center gap-4">
            <ThemeSwitch />
            <button className="md:hidden">
              {/* Add mobile menu button here */}
            </button>
          </div>
        </nav>
      </div>
    </motion.header>
  )
}

export default Header
'use client'

import { useState } from 'react'
import { Menu, X, Brain, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Presidents', href: '#presidents' },
    { name: 'Events', href: '#events' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-primary-200/50 shadow-lg">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Enhanced Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3"
          >
            <div className="p-3 bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl shadow-lg">
              <Brain className="h-7 w-7 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-gradient-premium">USAAIO</span>
              <span className="text-xs font-medium text-slate-600 -mt-1">North Carolina</span>
            </div>
          </motion.div>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-slate-700 hover:text-primary-600 font-semibold transition-all duration-300 relative group py-2 px-3 rounded-lg hover:bg-primary-50"
              >
                {item.name}
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-primary-600 to-accent-600 group-hover:w-full transition-all duration-300 rounded-full"></span>
              </motion.a>
            ))}
            
            {/* Resources Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                <span>Resources</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                    className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2"
                  >
                    <a href="/syllabus" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      Contest Syllabus
                    </a>
                    <a href="/problems" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      Past Problems
                    </a>
                    <a href="/rules" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      Contest Rules
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.a
              href="/register"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="btn-primary shadow-glow"
            >
              Register Now
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-200"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors rounded-lg"
                  >
                    {item.name}
                  </a>
                ))}
                <div className="px-4 py-2">
                  <a href="/register" className="btn-primary w-full block text-center">Register Now</a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navbar

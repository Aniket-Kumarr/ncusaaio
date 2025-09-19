'use client'

import { motion } from 'framer-motion'
import { 
  Brain, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Instagram,
  Youtube,
  Github,
  ArrowUp
} from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const footerLinks = {
    organization: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Mission', href: '#about' },
      { name: 'Presidents', href: '#presidents' },
      { name: 'Leadership Team', href: '#team' },
      { name: 'Careers', href: '#careers' },
      { name: 'Press & Media', href: '#press' }
    ],
    programs: [
      { name: 'Events & Workshops', href: '#events' },
      { name: 'AI Education', href: '#education' },
      { name: 'Research Projects', href: '#research' },
      { name: 'Startup Accelerator', href: '#accelerator' },
      { name: 'Mentorship Program', href: '#mentorship' }
    ],
    resources: [
      { name: 'AI Tools & Libraries', href: '#tools' },
      { name: 'Research Papers', href: '#papers' },
      { name: 'Learning Resources', href: '#learning' },
      { name: 'Industry Reports', href: '#reports' },
      { name: 'Newsletter', href: '#newsletter' }
    ],
    community: [
      { name: 'Join USAAIO NC', href: '#join' },
      { name: 'Member Directory', href: '#directory' },
      { name: 'Discussion Forums', href: '#forums' },
      { name: 'Volunteer Opportunities', href: '#volunteer' },
      { name: 'Partner Organizations', href: '#partners' }
    ]
  }

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Github, href: '#', label: 'GitHub' }
  ]

  const quickStats = [
    { number: '500+', label: 'Active Members' },
    { number: '50+', label: 'AI Projects' },
    { number: '15+', label: 'Cities Served' },
    { number: '100+', label: 'Events Hosted' }
  ]

  return (
    <footer className="bg-gradient-dark text-white">
      {/* Main Footer Content */}
      <div className="container-custom py-20">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Enhanced Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-4 mb-8">
              <div className="p-3 bg-gradient-to-r from-primary-600 to-accent-500 rounded-xl shadow-lg">
                <Brain className="h-10 w-10 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-gradient">USAAIO NC</span>
                <span className="text-sm text-primary-300 -mt-1">North Carolina</span>
              </div>
            </div>
            
            <p className="text-slate-300 mb-8 leading-relaxed text-lg">
              North Carolina's premier artificial intelligence organization, fostering innovation, 
              collaboration, and growth in the AI ecosystem across all of North Carolina. 
              Join us in building the future of technology.
            </p>

            {/* Enhanced Quick Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {quickStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center group"
                >
                  <div className="text-3xl font-bold text-gradient group-hover:scale-110 transition-transform">{stat.number}</div>
                  <div className="text-sm text-slate-400 group-hover:text-primary-300 transition-colors">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Enhanced Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-3 bg-slate-800/50 backdrop-blur-sm text-slate-300 rounded-xl hover:bg-primary-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
                  aria-label={social.label}
                >
                  <social.icon className="h-6 w-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Organization Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-white">Organization</h3>
            <ul className="space-y-3">
              {footerLinks.organization.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Programs Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-white">Programs</h3>
            <ul className="space-y-3">
              {footerLinks.programs.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Resources & Community Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Resources */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Resources</h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.5 }}
                  >
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Community */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Community</h3>
              <ul className="space-y-3">
                {footerLinks.community.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.5 }}
                  >
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-gray-800"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-primary-400" />
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-white">hello@usaaio-nc.org</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-primary-400" />
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <p className="text-white">+1 (919) 555-0123</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-primary-400" />
              <div>
                <p className="text-sm text-gray-400">Address</p>
                <p className="text-white">RTP Innovation Center, Durham, NC</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-gray-400 text-sm"
            >
              © 2024 USAAIO NC. All rights reserved. | Privacy Policy | Terms of Service
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center space-x-4"
            >
              <span className="text-gray-400 text-sm">Made with ❤️ in North Carolina</span>
              <button
                onClick={scrollToTop}
                className="p-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200"
                aria-label="Scroll to top"
              >
                <ArrowUp className="h-4 w-4" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

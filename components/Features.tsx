'use client'

import { motion } from 'framer-motion'
import { 
  Users, 
  Lightbulb, 
  Code, 
  GraduationCap, 
  Globe, 
  Shield,
  Zap,
  Target
} from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: Users,
      title: 'Expert Community',
      description: 'Connect with 500+ AI professionals, researchers, and enthusiasts across North Carolina.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Hub',
      description: 'Collaborate on cutting-edge AI projects and breakthrough research initiatives.',
      color: 'from-blue-600 to-blue-700'
    },
    {
      icon: Code,
      title: 'Technical Excellence',
      description: 'Access to state-of-the-art AI tools, frameworks, and development resources.',
      color: 'from-blue-400 to-blue-500'
    },
    {
      icon: GraduationCap,
      title: 'Learning & Growth',
      description: 'Continuous education through workshops, seminars, and certification programs.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Connect with AI communities worldwide and stay updated on global trends.',
      color: 'from-blue-600 to-blue-700'
    },
    {
      icon: Shield,
      title: 'Trusted Platform',
      description: 'Secure, reliable infrastructure for collaboration and knowledge sharing.',
      color: 'from-blue-400 to-blue-500'
    },
    {
      icon: Zap,
      title: 'Fast Innovation',
      description: 'Accelerate your AI projects with our rapid prototyping and testing environment.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Target,
      title: 'Focused Solutions',
      description: 'Specialized AI solutions for healthcare, finance, education, and more.',
      color: 'from-blue-600 to-blue-700'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
            Why Choose USAAIO NC?
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need to{' '}
            <span className="text-gradient">Succeed in AI</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive platform provides all the tools, resources, and connections 
            you need to excel in artificial intelligence and machine learning.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="card h-full hover:shadow-2xl transition-all duration-300 group-hover:border-blue-200">
                <div className="flex flex-col items-center text-center space-y-4">
                  {/* Icon */}
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${feature.color} shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Join the AI Revolution?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Become part of North Carolina's most innovative AI community and start 
              building the future today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Get Started Now
              </button>
              <button className="btn-secondary">
                Schedule a Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features

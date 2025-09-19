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
    <section className="section-padding bg-gradient-to-br from-slate-50 via-white to-primary-50/30">
      <div className="container-custom">
        {/* Enhanced Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-100 to-accent-100 text-primary-800 rounded-full text-sm font-semibold mb-6 border border-primary-200/50 shadow-lg">
            <span className="w-3 h-3 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full mr-3 shadow-lg"></span>
            Why Choose USAAIO NC?
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-8">
            Everything You Need to{' '}
            <span className="text-gradient-premium">Succeed in AI</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Our comprehensive platform provides all the tools, resources, and connections 
            you need to excel in artificial intelligence and machine learning across North Carolina.
          </p>
        </motion.div>

        {/* Enhanced Features Grid */}
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
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <div className="card-premium h-full hover:shadow-3xl transition-all duration-500 group-hover:border-primary-200/70">
                <div className="flex flex-col items-center text-center space-y-6">
                  {/* Enhanced Icon */}
                  <div className={`p-6 rounded-3xl bg-gradient-to-r ${feature.color} shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                    <feature.icon className="h-10 w-10 text-white" />
                  </div>
                  
                  {/* Enhanced Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary-700 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-20"
        >
          <div className="card-premium max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-slate-900 mb-6">
              Ready to Join the AI Revolution?
            </h3>
            <p className="text-slate-600 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
              Become part of North Carolina's most innovative AI community and start 
              building the future today. Join 500+ professionals across the state.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="/register" className="btn-primary shadow-glow">
                Get Started Now
              </a>
              <a href="#contact" className="btn-secondary">
                Schedule a Demo
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features

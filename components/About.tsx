'use client'

import { motion } from 'framer-motion'
import { 
  MapPin, 
  Users, 
  Award, 
  TrendingUp,
  CheckCircle,
  Star,
  Heart,
  Target,
  Trophy,
  Globe
} from 'lucide-react'

const About = () => {
  const stats = [
    { icon: Users, number: '393', label: '2025 Participants', color: 'text-blue-600' },
    { icon: Award, number: '76', label: 'Round 2 Qualifiers', color: 'text-blue-600' },
    { icon: TrendingUp, number: '19.3%', label: 'Qualification Rate', color: 'text-blue-600' },
    { icon: Trophy, number: '8', label: 'Team USA Members', color: 'text-blue-600' },
  ]

  const values = [
    {
      icon: Heart,
      title: 'Student Development',
      description: 'Fostering the next generation of AI leaders through competitive excellence and educational opportunities.'
    },
    {
      icon: Target,
      title: 'International Excellence',
      description: 'Representing the United States in global AI competitions and establishing leadership in AI education.'
    },
    {
      icon: CheckCircle,
      title: 'Academic Integrity',
      description: 'Maintaining the highest standards of fairness and academic excellence in all competitions.'
    }
  ]

  const achievements = [
    'Organizes USA-North America AI Olympiad (USA-NA-AIO)',
    'Enables USA to be founding country of IOAI and IAIO',
    '2025 Team USA earned 3 Silver, 3 Bronze, 1 Honorable Mention',
    'Partnerships with MIT, Temple University, Google, Jane Street',
    'Round 2 hosted at MIT with academic and career support',
    'Free Google Colab Pro+ GPU access for qualifiers'
  ]

  return (
    <section id="about" className="section-padding bg-gradient-primary">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                <Globe className="h-4 w-4 mr-2" />
                USA AI Olympiad Organization
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Leading the{' '}
                <span className="text-gradient">AI Olympiad Movement</span> in America
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                USAAIO is the premier organization for AI education and competition in the United States, 
                organizing the USA-North America AI Olympiad (USA-NA-AIO) for K-12 students. We enable 
                the United States to be a founding country of international AI Olympiads.
              </p>
            </div>

            {/* Mission Statement */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To organize and promote AI education and competition for K-12 students across the United States 
                and Canada, preparing the next generation of AI leaders through rigorous academic challenges 
                and international representation.
              </p>
            </div>

            {/* Values */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Our Core Values</h3>
              <div className="space-y-4">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <value.icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{value.title}</h4>
                      <p className="text-gray-600 text-sm">{value.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Stats & Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-white rounded-2xl p-6 text-center shadow-lg border border-white/20"
                >
                  <div className="flex justify-center mb-3">
                    <div className="p-3 bg-blue-100 rounded-xl">
                      <stat.icon className={`h-6 w-6 ${stat.color}`} />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Key Achievements */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Achievements</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.5 }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm leading-relaxed">{achievement}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 text-white text-center"
            >
              <h3 className="text-xl font-bold mb-2">Ready to Compete?</h3>
              <p className="text-blue-100 mb-4">
                Join the 2026 USA-NA-AIO and represent your country
              </p>
              <button className="bg-white text-blue-600 font-semibold py-2 px-6 rounded-lg hover:bg-gray-100 transition-colors">
                Register Now
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Section - Impact */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8">
            Our Impact in AI Education
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="text-4xl font-bold text-blue-600 mb-2">3</div>
              <div className="text-xl font-semibold text-gray-900 mb-2">International Olympiads</div>
              <p className="text-gray-600">
                IOAI, IAIO, and USA-NA-AIO competitions
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="text-4xl font-bold text-blue-600 mb-2">K-12</div>
              <div className="text-xl font-semibold text-gray-900 mb-2">Student Focus</div>
              <p className="text-gray-600">
                Elementary through high school students
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="text-4xl font-bold text-blue-600 mb-2">MIT</div>
              <div className="text-xl font-semibold text-gray-900 mb-2">Academic Partner</div>
              <p className="text-gray-600">
                Round 2 venue and academic support
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

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
    <section id="about" className="section-padding bg-gradient-to-br from-slate-50 via-white to-primary-50/30">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Column - Enhanced Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-100 to-accent-100 text-primary-800 rounded-full text-sm font-semibold border border-primary-200/50 shadow-lg">
                <Globe className="h-5 w-5 mr-3" />
                North Carolina's Premier AI Organization
              </div>
              
              <h2 className="text-5xl lg:text-6xl font-bold text-slate-900">
                Leading the{' '}
                <span className="text-gradient-premium">AI Olympiad Movement</span> Across North Carolina
              </h2>
              
              <p className="text-xl text-slate-600 leading-relaxed">
                USAAIO NC is the premier organization for AI education and competition in North Carolina, 
                organizing the USA-North America AI Olympiad (USA-NA-AIO) for K-12 students. We enable 
                the United States to be a founding country of international AI Olympiads while fostering 
                innovation across all of North Carolina.
              </p>
            </div>

            {/* Enhanced Mission Statement */}
            <div className="card-premium">
              <h3 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h3>
              <p className="text-slate-700 leading-relaxed text-lg">
                To organize and promote AI education and competition for K-12 students across North Carolina 
                and the United States, preparing the next generation of AI leaders through rigorous academic 
                challenges and international representation.
              </p>
            </div>

            {/* Enhanced Values */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-slate-900">Our Core Values</h3>
              <div className="space-y-6">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-start space-x-6 group"
                  >
                    <div className="p-4 bg-gradient-to-r from-primary-100 to-accent-100 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                      <value.icon className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 group-hover:text-primary-700 transition-colors">{value.title}</h4>
                      <p className="text-slate-600 leading-relaxed">{value.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Enhanced Stats & Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-10"
          >
            {/* Enhanced Stats Grid */}
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  className="card-premium text-center group"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-gradient-to-r from-primary-100 to-accent-100 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className={`h-8 w-8 ${stat.color}`} />
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-slate-900 mb-2 group-hover:text-primary-700 transition-colors">{stat.number}</div>
                  <div className="text-sm font-semibold text-slate-600 group-hover:text-primary-600 transition-colors">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Enhanced Key Achievements */}
            <div className="card-premium">
              <h3 className="text-3xl font-bold text-slate-900 mb-8">Key Achievements</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.5 }}
                    className="flex items-start space-x-4 group"
                  >
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-slate-700 leading-relaxed group-hover:text-slate-900 transition-colors">{achievement}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Enhanced Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl p-8 text-white text-center shadow-glow"
            >
              <h3 className="text-2xl font-bold mb-4">Ready to Compete?</h3>
              <p className="text-primary-100 mb-6 text-lg">
                Join the 2026 USA-NA-AIO and represent North Carolina
              </p>
              <a href="/register" className="bg-white text-primary-600 font-semibold py-3 px-8 rounded-xl hover:bg-primary-50 transition-all duration-300 shadow-lg hover:shadow-xl inline-block">
                Register Now
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced Bottom Section - Impact */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24 text-center"
        >
          <h3 className="text-4xl font-bold text-slate-900 mb-12">
            Our Impact in AI Education Across North Carolina
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="card-premium group"
            >
              <div className="text-5xl font-bold text-gradient mb-4 group-hover:scale-110 transition-transform">3</div>
              <div className="text-2xl font-bold text-slate-900 mb-3">International Olympiads</div>
              <p className="text-slate-600 leading-relaxed">
                IOAI, IAIO, and USA-NA-AIO competitions
              </p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="card-premium group"
            >
              <div className="text-5xl font-bold text-gradient mb-4 group-hover:scale-110 transition-transform">K-12</div>
              <div className="text-2xl font-bold text-slate-900 mb-3">Student Focus</div>
              <p className="text-slate-600 leading-relaxed">
                Elementary through high school students across NC
              </p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="card-premium group"
            >
              <div className="text-5xl font-bold text-gradient mb-4 group-hover:scale-110 transition-transform">MIT</div>
              <div className="text-2xl font-bold text-slate-900 mb-3">Academic Partner</div>
              <p className="text-slate-600 leading-relaxed">
                Round 2 venue and academic support
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

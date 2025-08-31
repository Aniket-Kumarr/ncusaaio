'use client'

import { motion } from 'framer-motion'
import { 
  Linkedin, 
  Twitter, 
  Globe, 
  Mail,
  Award,
  Star,
  Crown,
  Users,
  Lightbulb,
  Target,
  Heart
} from 'lucide-react'

const Presidents = () => {
  const presidents = [
    {
      name: 'Sriman',
      role: 'President & Co-Founder',
      image: '/api/placeholder/400/400',
      bio: 'Visionary leader and AI enthusiast who co-founded USAAIO NC with a mission to transform North Carolina into a global AI hub. Sriman brings strategic vision and deep understanding of the AI landscape.',
      expertise: ['Strategic Leadership', 'AI Innovation', 'Community Building', 'Startup Ecosystem'],
      achievements: [
        'Co-Founded USAAIO NC',
        'Led 500+ member growth',
        'Established 15+ city presence',
        'Created $50M+ economic impact',
        'Pioneered AI education programs',
        'Built global AI partnerships'
      ],
      vision: 'To make North Carolina the premier destination for AI innovation, research, and talent development in the United States.',
      social: {
        linkedin: '#',
        twitter: '#',
        website: '#'
      },
      stats: {
        years: '8+',
        projects: '100+',
        partnerships: '50+',
        impact: '$50M+'
      }
    },
    {
      name: 'Aniket',
      role: 'Vice President & Co-Founder',
      image: '/api/placeholder/400/400',
      bio: 'Dynamic leader and technology expert who co-founded USAAIO NC alongside Sriman. Aniket drives operational excellence and technical innovation across all USAAIO NC initiatives.',
      expertise: ['Technical Leadership', 'Operations Management', 'AI Research', 'Team Development'],
      achievements: [
        'Co-Founded USAAIO NC',
        'Led technical infrastructure',
        'Managed 50+ AI projects',
        'Built research partnerships',
        'Developed AI curriculum',
        'Established innovation labs'
      ],
      vision: 'To create a world-class AI ecosystem in North Carolina that fosters innovation, collaboration, and sustainable growth.',
      social: {
        linkedin: '#',
        twitter: '#',
        website: '#'
      },
      stats: {
        years: '8+',
        projects: '100+',
        partnerships: '50+',
        impact: '$50M+'
      }
    }
  ]

  const leadershipPrinciples = [
    {
      icon: Crown,
      title: 'Visionary Leadership',
      description: 'Setting bold, ambitious goals and inspiring others to achieve them through innovative thinking and strategic planning.'
    },
    {
      icon: Heart,
      title: 'Community First',
      description: 'Putting the needs of our AI community above all else, fostering genuine connections and mutual support.'
    },
    {
      icon: Target,
      title: 'Results Driven',
      description: 'Focusing on measurable outcomes and delivering tangible value to our members and partners.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Mindset',
      description: 'Constantly exploring new ideas, technologies, and approaches to advance AI in North Carolina.'
    }
  ]

  return (
    <section id="presidents" className="section-padding bg-gradient-primary">
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
            <Crown className="h-4 w-4 mr-2" />
            Meet Our Presidents
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            The Visionary Leaders of{' '}
            <span className="text-gradient">USAAIO NC</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet Sriman and Aniket, the dynamic duo who co-founded USAAIO NC and are 
            driving the AI revolution across North Carolina with passion, innovation, and unwavering commitment.
          </p>
        </motion.div>

        {/* Presidents Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {presidents.map((president, index) => (
            <motion.div
              key={president.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="group"
            >
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500">
                {/* Header Section */}
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 text-white text-center relative">
                  <div className="absolute top-4 right-4">
                    <div className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                      {president.role}
                    </div>
                  </div>
                  
                  <div className="w-32 h-32 mx-auto bg-white/20 rounded-full flex items-center justify-center text-white text-5xl font-bold mb-4 backdrop-blur-sm">
                    {president.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  
                  <h3 className="text-3xl font-bold mb-2">{president.name}</h3>
                  <p className="text-blue-100 text-lg">{president.role}</p>
                </div>

                {/* Content Section */}
                <div className="p-8 space-y-6">
                  {/* Bio */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">About</h4>
                    <p className="text-gray-600 leading-relaxed">
                      {president.bio}
                    </p>
                  </div>

                  {/* Vision */}
                  <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      <Target className="h-5 w-5 text-blue-600 mr-2" />
                      Vision
                    </h4>
                    <p className="text-gray-700 italic">
                      "{president.vision}"
                    </p>
                  </div>

                  {/* Expertise */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Areas of Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {president.expertise.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Achievements */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Achievements</h4>
                    <div className="space-y-2">
                      {president.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start space-x-3 text-sm text-gray-600">
                          <Award className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{president.stats.years}</div>
                      <div className="text-sm text-gray-600">Years Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{president.stats.projects}</div>
                      <div className="text-sm text-gray-600">Projects Led</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{president.stats.partnerships}</div>
                      <div className="text-sm text-gray-600">Partnerships</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{president.stats.impact}</div>
                      <div className="text-sm text-gray-600">Economic Impact</div>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-4 pt-4 border-t border-gray-100">
                    <a href={president.social.linkedin} className="p-3 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href={president.social.twitter} className="p-3 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors">
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a href={president.social.website} className="p-3 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors">
                      <Globe className="h-5 w-5" />
                    </a>
                    <a href={`mailto:${president.name.toLowerCase()}@usaaio-nc.org`} className="p-3 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors">
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Leadership Principles */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Our Leadership Principles
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadershipPrinciples.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center group"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <principle.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">{principle.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{principle.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Joint Message */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 text-white">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-white text-2xl font-bold backdrop-blur-sm">
                S
              </div>
              <div className="text-4xl font-bold">&</div>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-white text-2xl font-bold backdrop-blur-sm">
                A
              </div>
            </div>
            
            <h3 className="text-3xl font-bold mb-6">
              A Message from Your Presidents
            </h3>
            
            <div className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed">
              <p className="text-blue-100">
                "When we founded USAAIO NC eight years ago, we had a simple yet ambitious vision: 
                to make North Carolina the premier destination for AI innovation and talent development."
              </p>
              
              <p className="text-blue-100">
                "Today, we're proud to see our community grow to over 500 members, spanning 15+ cities 
                across the state, and generating over $50 million in economic impact."
              </p>
              
              <p className="text-blue-100">
                "But this is just the beginning. We invite you to join us in building the future of AI 
                in North Carolina. Together, we can create something truly extraordinary."
              </p>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
                Join Our Mission
              </button>
              <button className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
                Schedule a Meeting
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Presidents

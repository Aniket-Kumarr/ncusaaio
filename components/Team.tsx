'use client'

import { motion } from 'framer-motion'
import { 
  Linkedin, 
  Twitter, 
  Globe, 
  Mail,
  Award,
  Users,
  Star,
  Heart
} from 'lucide-react'

const Team = () => {
  const leadership = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Executive Director',
      image: '/api/placeholder/300/300',
      bio: 'Former AI Research Lead at Google, PhD in Computer Science from MIT. Leading AI innovation in NC for over 8 years.',
      expertise: ['Machine Learning', 'AI Ethics', 'Research Leadership'],
      social: {
        linkedin: '#',
        twitter: '#',
        website: '#'
      },
      achievements: ['Forbes 30 Under 30', 'NC AI Pioneer Award', '100+ Research Papers']
    },
    {
      name: 'Michael Rodriguez',
      role: 'Chief Technology Officer',
      image: '/api/placeholder/300/300',
      bio: 'Ex-Microsoft AI architect with 15+ years experience. Expert in scalable AI systems and enterprise solutions.',
      expertise: ['AI Architecture', 'Cloud Computing', 'Enterprise AI'],
      social: {
        linkedin: '#',
        twitter: '#',
        website: '#'
      },
      achievements: ['Microsoft MVP', 'AI Innovation Award', '50+ Patents']
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Head of Research',
      image: '/api/placeholder/300/300',
      bio: 'Professor at UNC Chapel Hill, specializing in natural language processing and AI safety.',
      expertise: ['NLP', 'AI Safety', 'Academic Research'],
      social: {
        linkedin: '#',
        twitter: '#',
        website: '#'
      },
      achievements: ['NSF Grant Recipient', 'Top AI Researcher', 'Published Author']
    }
  ]

  const advisors = [
    {
      name: 'Dr. James Wilson',
      role: 'Strategic Advisor',
      company: 'NC Innovation Council',
      image: '/api/placeholder/200/200',
      expertise: 'Government Relations & Policy'
    },
    {
      name: 'Lisa Thompson',
      role: 'Industry Advisor',
      company: 'TechNC Ventures',
      image: '/api/placeholder/200/200',
      expertise: 'Startup Investment & Growth'
    },
    {
      name: 'Dr. Robert Kim',
      role: 'Academic Advisor',
      company: 'Duke University',
      image: '/api/placeholder/200/200',
      expertise: 'AI Education & Curriculum'
    }
  ]

  const teamStats = [
    { icon: Users, number: '25+', label: 'Team Members' },
    { icon: Award, number: '50+', label: 'Awards Won' },
    { icon: Star, number: '15+', label: 'Years Experience' },
    { icon: Heart, number: '100%', label: 'Passion for AI' }
  ]

  return (
    <section id="team" className="section-padding bg-gradient-primary">
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
            <Users className="h-4 w-4 mr-2" />
            Meet Our Team
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            The Minds Behind{' '}
            <span className="text-gradient">USAAIO NC</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our diverse team of AI experts, researchers, and industry leaders are 
            passionate about advancing artificial intelligence in North Carolina.
          </p>
        </motion.div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {teamStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-white/20">
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-blue-100 rounded-xl">
                    <stat.icon className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Leadership Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Leadership Team
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {leadership.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group"
              >
                <div className="card h-full hover:shadow-2xl transition-all duration-300 group-hover:border-blue-200">
                  {/* Profile Image */}
                  <div className="relative mb-6">
                    <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white text-4xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                      <div className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                        {member.role}
                      </div>
                    </div>
                  </div>

                  {/* Member Info */}
                  <div className="text-center mb-6">
                    <h4 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {member.name}
                    </h4>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {member.bio}
                    </p>
                  </div>

                  {/* Expertise */}
                  <div className="mb-6">
                    <h5 className="font-semibold text-gray-900 mb-3 text-center">Expertise</h5>
                    <div className="flex flex-wrap justify-center gap-2">
                      {member.expertise.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h5 className="font-semibold text-gray-900 mb-3 text-center">Key Achievements</h5>
                    <div className="space-y-2">
                      {member.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                          <Award className="h-4 w-4 text-blue-500 flex-shrink-0" />
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-4">
                    <a href={member.social.linkedin} className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href={member.social.twitter} className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors">
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a href={member.social.website} className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors">
                      <Globe className="h-5 w-5" />
                    </a>
                    <a href={`mailto:${member.name.toLowerCase().replace(' ', '.')}@usaaio-nc.org`} className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors">
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Advisory Board */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Advisory Board
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {advisors.map((advisor, index) => (
              <motion.div
                key={advisor.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="card hover:shadow-xl transition-all duration-300">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                    {advisor.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{advisor.name}</h4>
                  <p className="text-blue-600 font-medium mb-1">{advisor.role}</p>
                  <p className="text-gray-600 text-sm mb-3">{advisor.company}</p>
                  <p className="text-gray-700 text-sm">{advisor.expertise}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Join the Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Want to Join Our Team?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              We're always looking for passionate AI professionals, researchers, and 
              enthusiasts to join our mission of advancing AI in North Carolina.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors">
                View Open Positions
              </button>
              <button className="border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
                Send Resume
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Team

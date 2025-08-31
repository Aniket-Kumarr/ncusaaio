'use client'

import { motion } from 'framer-motion'
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Users, 
  ExternalLink,
  Star,
  TrendingUp,
  Award,
  Trophy,
  GraduationCap
} from 'lucide-react'

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: '2026 USA-NA-AIO Round 1',
      date: 'January 30, 2026',
      time: '12:00 PM - 3:00 PM',
      location: 'Online Contest',
      attendees: 'Open Registration',
      type: 'Competition',
      featured: true,
      description: 'The first round of the USA-North America AI Olympiad. Open to K-12 students in the U.S. and Canada. Top performers advance to Round 2 at MIT.',
      highlights: ['Online Contest', '3 Hours Duration', 'Eastern Time Zone', 'Advance to MIT Round 2']
    },
    {
      id: 2,
      title: '2026 USA-NA-AIO Round 2',
      date: 'March/April 2026',
      time: 'Full Day Event',
      location: 'MIT Campus',
      attendees: 'Round 1 Qualifiers',
      type: 'Competition',
      featured: true,
      description: 'The second round hosted at MIT. Features academic sessions, career panels, and the main competition. Top performers advance to the USAAIO Camp.',
      highlights: ['MIT Venue', 'Academic Sessions', 'Career Panels', 'USAAIO Camp Qualification']
    },
    {
      id: 3,
      title: 'USAAIO Camp 2026',
      date: 'June 2026',
      time: 'Full Program',
      location: 'MIT',
      attendees: 'Round 2 Qualifiers',
      type: 'Training Camp',
      featured: false,
      description: 'Intensive training camp for the top performers from Round 2. Prepares students for international competitions and Team USA selection.',
      highlights: ['Intensive Training', 'Team USA Selection', 'International Prep', 'MIT Resources']
    },
    {
      id: 4,
      title: '2026 IOAI Competition',
      date: 'August 2026',
      time: 'International Event',
      location: 'UAE',
      attendees: '8 Team USA Members',
      type: 'International',
      featured: false,
      description: 'International Olympiad in Artificial Intelligence. Team USA will compete against teams from around the world.',
      highlights: ['International Competition', 'Team USA Representation', 'Global Recognition', 'Medal Opportunities']
    }
  ]

  const eventTypes = [
    { name: 'Competitions', count: '3 Rounds', color: 'from-blue-500 to-blue-600' },
    { name: 'Training Camps', count: '1/year', color: 'from-blue-600 to-blue-700' },
    { name: 'International', count: '2/year', color: 'from-blue-400 to-blue-500' },
    { name: 'Academic', count: 'Year-round', color: 'from-blue-500 to-blue-600' }
  ]

  return (
    <section id="events" className="section-padding bg-white">
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
            <Trophy className="h-4 w-4 mr-2" />
            AI Olympiad Competitions
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Join Our{' '}
            <span className="text-gradient">AI Competitions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Participate in the USA-North America AI Olympiad and represent the United States 
            in international AI competitions. Open to K-12 students across the U.S. and Canada.
          </p>
        </motion.div>

        {/* Event Types Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {eventTypes.map((type, index) => (
            <motion.div
              key={type.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${type.color} rounded-2xl mx-auto mb-4 flex items-center justify-center`}>
                <Trophy className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{type.name}</h3>
              <p className="text-2xl font-bold text-blue-600">{type.count}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Events */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Featured Competitions
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {upcomingEvents.filter(event => event.featured).map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="card hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {event.type}
                    </div>
                    {event.featured && (
                      <div className="flex items-center space-x-1 text-blue-600">
                        <Star className="h-4 w-4 fill-current" />
                        <span className="text-sm font-medium">Featured</span>
                      </div>
                    )}
                  </div>
                </div>

                <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {event.title}
                </h4>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {event.description}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3 text-sm text-gray-600">
                    <Calendar className="h-4 w-4 text-blue-600" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-gray-600">
                    <Clock className="h-4 w-4 text-blue-600" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-gray-600">
                    <MapPin className="h-4 w-4 text-blue-600" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-gray-600">
                    <Users className="h-4 w-4 text-blue-600" />
                    <span>{event.attendees}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h5 className="font-semibold text-gray-900 mb-2">Highlights:</h5>
                  <div className="grid grid-cols-2 gap-2">
                    {event.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button className="btn-primary w-full group">
                  Register Now
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* All Events Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            All Upcoming Events
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="card hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium">
                    {event.type}
                  </div>
                  {event.featured && (
                    <Star className="h-4 w-4 text-blue-500 fill-current" />
                  )}
                </div>

                <h4 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {event.title}
                </h4>
                
                <div className="space-y-2 mb-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-blue-600" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-blue-600" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-blue-600" />
                    <span>{event.attendees}</span>
                  </div>
                </div>

                <button className="btn-secondary w-full text-sm">
                  Learn More
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Compete?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Registration for the 2026 USA-NA-AIO is now open! Join hundreds of K-12 students 
              competing for a chance to represent the United States internationally.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Register for 2026 USA-NA-AIO
              </button>
              <button className="btn-secondary">
                View Contest Rules
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Events

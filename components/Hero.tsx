'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Users, Lightbulb, TrendingUp, Brain, Trophy, GraduationCap, Star, Award, Zap } from 'lucide-react'

const Hero = () => {
  const stats = [
    { icon: Users, number: '500+', label: 'Active Members', color: 'from-primary-500 to-primary-600' },
    { icon: Trophy, number: '8', label: 'Team USA Members', color: 'from-accent-500 to-accent-600' },
    { icon: TrendingUp, number: '19.3%', label: 'Qualification Rate', color: 'from-primary-600 to-primary-700' },
    { icon: GraduationCap, number: 'K-12', label: 'Student Focus', color: 'from-accent-600 to-accent-700' },
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-primary-200 to-accent-200 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-bounce-gentle"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-accent-200 to-primary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-bounce-gentle" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-gradient-to-br from-primary-300 to-accent-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-bounce-gentle" style={{ animationDelay: '2s' }}></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        {/* Floating geometric shapes */}
        <motion.div
          animate={{ 
            y: [-20, 20, -20],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-20 w-16 h-16 bg-gradient-to-br from-primary-400/20 to-accent-400/20 rounded-lg backdrop-blur-sm"
        />
        <motion.div
          animate={{ 
            y: [20, -20, 20],
            rotate: [360, 180, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-32 left-32 w-12 h-12 bg-gradient-to-br from-accent-400/20 to-primary-400/20 rounded-full backdrop-blur-sm"
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-100 to-accent-100 text-primary-800 rounded-full text-sm font-semibold border border-primary-200/50 shadow-lg">
                <Star className="w-4 h-4 text-primary-600 mr-2" />
                North Carolina's Premier AI Organization
              </div>
              
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-gradient-premium">Empowering</span> the Next Generation of{' '}
                <span className="text-gradient">AI Leaders</span> Across North Carolina
              </h1>
              
              <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                USAAIO NC organizes the USA-North America AI Olympiad (USA-NA-AIO) for K-12 students, 
                enabling the United States to be a founding country of international AI Olympiads while 
                fostering innovation across all of North Carolina.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <a href="/register" className="btn-primary flex items-center justify-center group shadow-glow">
                Register for 2026 USA-NA-AIO
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#about" className="btn-secondary flex items-center justify-center group">
                <Award className="mr-2 h-5 w-5" />
                Learn About Olympiad
              </a>
            </motion.div>

            {/* Enhanced Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-12"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center group"
                >
                  <div className="flex justify-center mb-4">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${stat.color} shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110`}>
                      <stat.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-slate-900 group-hover:text-primary-700 transition-colors">{stat.number}</div>
                  <div className="text-sm font-medium text-slate-600 group-hover:text-primary-600 transition-colors">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Enhanced Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Main AI Brain Visualization */}
              <div className="relative w-full h-96 lg:h-[600px] bg-gradient-to-br from-primary-500 via-primary-600 to-accent-600 rounded-3xl shadow-premium overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-accent-600/20"></div>
                
                {/* Enhanced Neural Network */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-80 h-80">
                    {/* Central Brain Icon */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 1, duration: 1 }}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-2xl"
                    >
                      <Brain className="h-10 w-10 text-primary-600" />
                    </motion.div>
                    
                    {/* Nodes */}
                    {[...Array(12)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1.2 + i * 0.1, duration: 0.5 }}
                        className="absolute w-6 h-6 bg-white rounded-full shadow-xl flex items-center justify-center"
                        style={{
                          left: `${50 + 45 * Math.cos(i * Math.PI / 6)}%`,
                          top: `${50 + 45 * Math.sin(i * Math.PI / 6)}%`,
                        }}
                      >
                        <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                      </motion.div>
                    ))}
                    
                    {/* Animated Connections */}
                    {[...Array(16)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 1.5 + i * 0.05, duration: 0.8 }}
                        className="absolute h-1 bg-gradient-to-r from-white/80 to-white/40 origin-left rounded-full"
                        style={{
                          left: '50%',
                          top: '50%',
                          width: '45%',
                          transform: `rotate(${i * 22.5}deg)`,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Enhanced Floating Elements */}
                <motion.div
                  animate={{ 
                    y: [-15, 15, -15],
                    rotate: [0, 360, 0]
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-8 right-8 w-20 h-20 bg-white/20 rounded-2xl backdrop-blur-sm flex items-center justify-center"
                >
                  <Zap className="h-8 w-8 text-white" />
                </motion.div>
                <motion.div
                  animate={{ 
                    y: [15, -15, 15],
                    rotate: [360, 0, 360]
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-8 left-8 w-16 h-16 bg-accent-400/30 rounded-full backdrop-blur-sm flex items-center justify-center"
                >
                  <Trophy className="h-6 w-6 text-white" />
                </motion.div>
              </div>

              {/* Enhanced Floating Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="absolute -top-8 -left-8 card-premium max-w-xs"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-gradient-to-r from-green-400 to-green-500 rounded-full shadow-lg"></div>
                  <div className="text-sm font-semibold text-slate-700">2026 Registration Open</div>
                </div>
                <div className="text-xs text-slate-500 mt-1">Join 500+ NC students</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 1.4, duration: 0.8 }}
                className="absolute -bottom-8 -right-8 card-premium max-w-xs"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-gradient">MIT</div>
                  <div className="text-xs text-slate-600 font-medium">Round 2 Venue</div>
                  <div className="text-xs text-slate-500 mt-1">Academic Excellence</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.6, duration: 0.8 }}
                className="absolute top-1/2 -right-12 card-premium max-w-xs"
              >
                <div className="text-center">
                  <div className="text-lg font-bold text-primary-600">NC</div>
                  <div className="text-xs text-slate-600 font-medium">Statewide Impact</div>
                  <div className="text-xs text-slate-500 mt-1">15+ Cities</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero

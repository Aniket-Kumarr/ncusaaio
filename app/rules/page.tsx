'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, FileText, Clock, Users, Shield, AlertTriangle, CheckCircle, XCircle } from 'lucide-react'
import Link from 'next/link'

const Rules = () => {
  const eligibilityRules = [
    {
      category: 'Age Requirements',
      icon: Users,
      rules: [
        'Students must be enrolled in grades K-12 during the 2025-2026 academic year',
        'Elementary Division: Grades K-5',
        'Middle School Division: Grades 6-8',
        'High School Division: Grades 9-12'
      ]
    },
    {
      category: 'Geographic Eligibility',
      icon: Shield,
      rules: [
        'Open to students from the United States and Canada',
        'Students must be legal residents of their respective countries',
        'International students studying in US/Canada are eligible',
        'Proof of enrollment and residency may be required'
      ]
    },
    {
      category: 'Academic Requirements',
      icon: FileText,
      rules: [
        'No minimum GPA requirement',
        'Students must have basic programming knowledge',
        'Recommended: Completion of introductory computer science course',
        'Parent/guardian consent required for students under 18'
      ]
    }
  ]

  const competitionRules = [
    {
      title: 'Individual Competition',
      description: 'All rounds are individual competitions. No team collaboration allowed during contest time.',
      icon: Users
    },
    {
      title: 'Time Limits',
      description: 'Strict time limits apply. Submissions after the deadline will not be accepted.',
      icon: Clock
    },
    {
      title: 'Code Submission',
      description: 'All code must be submitted through the official platform. No external submissions accepted.',
      icon: FileText
    },
    {
      title: 'Academic Integrity',
      description: 'All work must be original. Plagiarism or cheating will result in immediate disqualification.',
      icon: Shield
    }
  ]

  const prohibitedActions = [
    'Sharing solutions with other participants during the contest',
    'Using pre-written code libraries not explicitly allowed',
    'Accessing external resources during the contest (except documentation)',
    'Collaborating with other participants in any form',
    'Using AI tools to generate complete solutions',
    'Submitting work that is not your own',
    'Attempting to hack or disrupt the contest platform',
    'Violating any of the terms and conditions'
  ]

  const allowedResources = [
    'Official programming language documentation',
    'Basic mathematical formulas and algorithms',
    'Your own notes and reference materials',
    'Standard libraries and frameworks (Python, NumPy, Pandas, etc.)',
    'Online documentation for allowed libraries',
    'Your own previously written code (if original)'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-primary-50/30">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-accent-600 text-white py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center space-x-4 mb-8"
          >
            <Link href="/" className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
              <ArrowLeft className="h-6 w-6" />
            </Link>
            <div>
              <h1 className="text-4xl font-bold">Contest Rules</h1>
              <p className="text-primary-100 mt-2">USA-North America AI Olympiad 2026</p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container-custom py-16">
        {/* Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="card-premium text-center">
            <FileText className="h-16 w-16 text-primary-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Official Contest Rules</h2>
            <p className="text-xl text-slate-600 leading-relaxed max-w-4xl mx-auto">
              Please read these rules carefully before participating in the USA-NA-AIO. 
              All participants must agree to these terms and conditions. Violations may 
              result in disqualification from the competition.
            </p>
          </div>
        </motion.div>

        {/* Eligibility Rules */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Eligibility Requirements</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {eligibilityRules.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card-premium"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-primary-100 to-accent-100 rounded-xl">
                    <category.icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{category.category}</h3>
                </div>
                <ul className="space-y-3">
                  {category.rules.map((rule, ruleIndex) => (
                    <li key={ruleIndex} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">{rule}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Competition Rules */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Competition Rules</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {competitionRules.map((rule, index) => (
              <motion.div
                key={rule.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card-premium"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-r from-primary-100 to-accent-100 rounded-xl">
                    <rule.icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{rule.title}</h3>
                    <p className="text-slate-600">{rule.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Prohibited Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="card-premium">
            <div className="flex items-center space-x-4 mb-8">
              <div className="p-3 bg-red-100 rounded-xl">
                <XCircle className="h-8 w-8 text-red-600" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">Prohibited Actions</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {prohibitedActions.map((action, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start space-x-3"
                >
                  <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">{action}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Allowed Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="card-premium">
            <div className="flex items-center space-x-4 mb-8">
              <div className="p-3 bg-green-100 rounded-xl">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">Allowed Resources</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {allowedResources.map((resource, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">{resource}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Contest Schedule */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Contest Schedule</h2>
          <div className="space-y-6">
            {[
              {
                round: 'Registration Opens',
                date: 'January 15, 2026',
                description: 'Online registration begins for all participants'
              },
              {
                round: 'Registration Closes',
                date: 'March 15, 2026',
                description: 'Last day to register for the competition'
              },
              {
                round: 'Round 1: Online Qualifier',
                date: 'March 30, 2026',
                description: '3-hour online competition for all registered participants'
              },
              {
                round: 'Round 2: Regional Finals',
                date: 'April 27, 2026',
                description: '6-hour competition at MIT for top qualifiers'
              },
              {
                round: 'Round 3: National Finals',
                date: 'May 25, 2026',
                description: '8-hour final competition with awards ceremony'
              }
            ].map((event, index) => (
              <motion.div
                key={event.round}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card-premium"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{event.round}</h3>
                      <p className="text-slate-600">{event.description}</p>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 text-right">
                    <div className="text-lg font-semibold text-primary-600">{event.date}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Important Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card-premium bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200"
        >
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-yellow-100 rounded-xl">
              <AlertTriangle className="h-8 w-8 text-yellow-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Important Notice</h3>
              <p className="text-slate-700 leading-relaxed">
                By participating in the USA-NA-AIO, you agree to abide by all contest rules and regulations. 
                The organizing committee reserves the right to disqualify any participant who violates these rules. 
                All decisions by the judges are final and binding. For questions or clarifications, 
                please contact us at <a href="mailto:rules@usaaio-nc.org" className="text-primary-600 hover:underline">rules@usaaio-nc.org</a>.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mt-16"
        >
          <div className="card-premium max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Ready to Compete?</h2>
            <p className="text-slate-600 mb-6">
              Make sure you understand all the rules before registering for the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register" className="btn-primary">
                Register Now
              </Link>
              <Link href="/syllabus" className="btn-secondary">
                View Syllabus
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Rules

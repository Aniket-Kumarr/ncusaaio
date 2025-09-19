'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, User, Mail, Phone, School, Calendar, Shield, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    school: '',
    grade: '',
    parentEmail: '',
    parentPhone: '',
    division: '',
    experience: '',
    agreeToTerms: false,
    agreeToPrivacy: false
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Registration submitted successfully! You will receive a confirmation email shortly.')
  }

  const divisions = [
    { value: 'elementary', label: 'Elementary Division (K-5)' },
    { value: 'middle', label: 'Middle School Division (6-8)' },
    { value: 'high', label: 'High School Division (9-12)' }
  ]

  const experienceLevels = [
    { value: 'beginner', label: 'Beginner - New to AI/ML' },
    { value: 'intermediate', label: 'Intermediate - Some experience' },
    { value: 'advanced', label: 'Advanced - Extensive experience' }
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
              <h1 className="text-4xl font-bold">Register for USA-NA-AIO 2026</h1>
              <p className="text-primary-100 mt-2">Join the premier AI competition in North America</p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          {/* Registration Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="card-premium mb-12"
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Registration Information</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-100 to-accent-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Calendar className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Registration Period</h3>
                  <p className="text-slate-600">January 15 - March 15, 2026</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-100 to-accent-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <School className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Eligibility</h3>
                  <p className="text-slate-600">K-12 students in US & Canada</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-100 to-accent-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Free to Participate</h3>
                  <p className="text-slate-600">No registration fees required</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Registration Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="card-premium"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Registration Form</h2>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                  <User className="h-6 w-6 mr-2 text-primary-600" />
                  Personal Information
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* School Information */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                  <School className="h-6 w-6 mr-2 text-primary-600" />
                  School Information
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      School Name *
                    </label>
                    <input
                      type="text"
                      name="school"
                      value={formData.school}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Current Grade *
                    </label>
                    <select
                      name="grade"
                      value={formData.grade}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select Grade</option>
                      {Array.from({ length: 13 }, (_, i) => (
                        <option key={i} value={`grade-${i}`}>
                          {i === 0 ? 'Kindergarten' : `Grade ${i}`}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Competition Division *
                    </label>
                    <select
                      name="division"
                      value={formData.division}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select Division</option>
                      {divisions.map(division => (
                        <option key={division.value} value={division.value}>
                          {division.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      AI/ML Experience Level
                    </label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select Experience Level</option>
                      {experienceLevels.map(level => (
                        <option key={level.value} value={level.value}>
                          {level.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Parent/Guardian Information */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                  <Shield className="h-6 w-6 mr-2 text-primary-600" />
                  Parent/Guardian Information
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Parent/Guardian Email *
                    </label>
                    <input
                      type="email"
                      name="parentEmail"
                      value={formData.parentEmail}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Parent/Guardian Phone
                    </label>
                    <input
                      type="tel"
                      name="parentPhone"
                      value={formData.parentPhone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Terms and Conditions */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-6">Terms and Conditions</h3>
                <div className="space-y-4">
                  <label className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleInputChange}
                      required
                      className="mt-1 h-5 w-5 text-primary-600 border-slate-300 rounded focus:ring-primary-500"
                    />
                    <span className="text-slate-700">
                      I agree to the <Link href="/rules" className="text-primary-600 hover:underline">Contest Rules and Terms of Service</Link> *
                    </span>
                  </label>
                  <label className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      name="agreeToPrivacy"
                      checked={formData.agreeToPrivacy}
                      onChange={handleInputChange}
                      required
                      className="mt-1 h-5 w-5 text-primary-600 border-slate-300 rounded focus:ring-primary-500"
                    />
                    <span className="text-slate-700">
                      I agree to the <Link href="/privacy" className="text-primary-600 hover:underline">Privacy Policy</Link> and consent to the processing of my personal data *
                    </span>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <button
                  type="submit"
                  className="btn-primary text-lg px-12 py-4 shadow-glow"
                >
                  Register for USA-NA-AIO 2026
                </button>
                <p className="text-sm text-slate-600 mt-4">
                  You will receive a confirmation email within 24 hours
                </p>
              </div>
            </form>
          </motion.div>

          {/* Additional Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12"
          >
            <div className="card-premium">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">What Happens Next?</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">
                    1
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Confirmation Email</h3>
                  <p className="text-slate-600">You'll receive a confirmation email with your registration details</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">
                    2
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Study Materials</h3>
                  <p className="text-slate-600">Access to syllabus, past problems, and study resources</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">
                    3
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Contest Day</h3>
                  <p className="text-slate-600">Participate in the online qualifier on March 30, 2026</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Register

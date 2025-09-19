'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, BookOpen, Brain, Code, Database, Target, Clock, Users, Award } from 'lucide-react'
import Link from 'next/link'

const Syllabus = () => {
  const topics = [
    {
      category: 'Machine Learning Fundamentals',
      icon: Brain,
      topics: [
        'Supervised Learning (Linear/Logistic Regression, Decision Trees, Random Forests)',
        'Unsupervised Learning (Clustering, Dimensionality Reduction)',
        'Neural Networks and Deep Learning',
        'Model Evaluation and Validation',
        'Feature Engineering and Selection'
      ]
    },
    {
      category: 'Data Science & Analysis',
      icon: Database,
      topics: [
        'Data Preprocessing and Cleaning',
        'Exploratory Data Analysis (EDA)',
        'Statistical Analysis and Hypothesis Testing',
        'Data Visualization Techniques',
        'Time Series Analysis'
      ]
    },
    {
      category: 'Programming & Implementation',
      icon: Code,
      topics: [
        'Python Programming for AI/ML',
        'NumPy, Pandas, Scikit-learn',
        'TensorFlow/PyTorch for Deep Learning',
        'Data Structures and Algorithms',
        'API Development and Integration'
      ]
    },
    {
      category: 'AI Applications',
      icon: Target,
      topics: [
        'Computer Vision and Image Processing',
        'Natural Language Processing (NLP)',
        'Reinforcement Learning',
        'AI Ethics and Responsible AI',
        'Real-world AI Problem Solving'
      ]
    }
  ]

  const competitionStructure = [
    {
      round: 'Round 1: Online Qualifier',
      duration: '3 hours',
      format: 'Individual',
      description: 'Multiple choice and coding problems covering fundamental AI/ML concepts',
      topics: ['Basic ML algorithms', 'Data preprocessing', 'Python programming', 'Statistics']
    },
    {
      round: 'Round 2: Regional Finals',
      duration: '6 hours',
      format: 'Individual',
      description: 'Advanced problem-solving with real datasets and complex AI challenges',
      topics: ['Deep learning', 'Advanced algorithms', 'Data analysis', 'Model optimization']
    },
    {
      round: 'Round 3: National Finals',
      duration: '8 hours',
      format: 'Individual + Team',
      description: 'Comprehensive AI project development and presentation',
      topics: ['Full AI pipeline', 'Project management', 'Presentation skills', 'Team collaboration']
    }
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
              <h1 className="text-4xl font-bold">Contest Syllabus</h1>
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
            <BookOpen className="h-16 w-16 text-primary-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Syllabus Overview</h2>
            <p className="text-xl text-slate-600 leading-relaxed max-w-4xl mx-auto">
              The USA-NA-AIO covers comprehensive artificial intelligence and machine learning topics 
              designed to challenge students from elementary through high school. Our curriculum aligns 
              with international standards and prepares students for global AI competitions.
            </p>
          </div>
        </motion.div>

        {/* Topics Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {topics.map((category, index) => (
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
                <h3 className="text-2xl font-bold text-slate-900">{category.category}</h3>
              </div>
              <ul className="space-y-3">
                {category.topics.map((topic, topicIndex) => (
                  <li key={topicIndex} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-slate-700">{topic}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Competition Structure */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Competition Structure</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {competitionStructure.map((round, index) => (
              <motion.div
                key={round.round}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card-premium text-center"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{round.round}</h3>
                  <div className="flex items-center justify-center space-x-4 text-sm text-slate-600 mb-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{round.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{round.format}</span>
                    </div>
                  </div>
                </div>
                <p className="text-slate-700 mb-6">{round.description}</p>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3">Key Topics:</h4>
                  <ul className="space-y-2 text-sm text-slate-600">
                    {round.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-center space-x-2">
                        <Award className="h-4 w-4 text-primary-600" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card-premium"
        >
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-8">Study Resources</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Recommended Books</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-slate-700">"Hands-On Machine Learning" by Aurélien Géron</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-slate-700">"Python Machine Learning" by Sebastian Raschka</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-slate-700">"Deep Learning" by Ian Goodfellow</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Online Platforms</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-slate-700">Coursera Machine Learning Course (Andrew Ng)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-slate-700">Kaggle Learn (Free micro-courses)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-slate-700">Google Colab (Free GPU access for qualifiers)</span>
                </li>
              </ul>
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
              Register for the 2026 USA-NA-AIO and test your AI skills against the best students in North America.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register" className="btn-primary">
                Register Now
              </Link>
              <Link href="/problems" className="btn-secondary">
                View Past Problems
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Syllabus

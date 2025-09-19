'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Code, Download, Eye, Calendar, Trophy, Users, Clock } from 'lucide-react'
import Link from 'next/link'

const Problems = () => {
  const pastProblems = [
    {
      year: '2025',
      round: 'Round 1 - Online Qualifier',
      difficulty: 'Intermediate',
      participants: 1200,
      duration: '3 hours',
      problems: [
        {
          title: 'Image Classification Challenge',
          description: 'Build a CNN to classify 10 different types of flowers using a dataset of 10,000 images.',
          points: 100,
          tags: ['Computer Vision', 'Deep Learning', 'CNN']
        },
        {
          title: 'Sentiment Analysis',
          description: 'Create a model to predict sentiment of movie reviews using NLP techniques.',
          points: 80,
          tags: ['NLP', 'Text Processing', 'Classification']
        },
        {
          title: 'Stock Price Prediction',
          description: 'Predict next-day stock prices using historical data and market indicators.',
          points: 90,
          tags: ['Time Series', 'Regression', 'Finance']
        }
      ]
    },
    {
      year: '2025',
      round: 'Round 2 - Regional Finals',
      difficulty: 'Advanced',
      participants: 150,
      duration: '6 hours',
      problems: [
        {
          title: 'Autonomous Vehicle Navigation',
          description: 'Develop an AI system for path planning and obstacle avoidance in a simulated environment.',
          points: 150,
          tags: ['Reinforcement Learning', 'Robotics', 'Path Planning']
        },
        {
          title: 'Medical Diagnosis Assistant',
          description: 'Create a system to assist in diagnosing diseases from medical images and patient data.',
          points: 120,
          tags: ['Medical AI', 'Computer Vision', 'Classification']
        },
        {
          title: 'Natural Language Generation',
          description: 'Build a system to generate creative stories based on given prompts.',
          points: 100,
          tags: ['NLP', 'Text Generation', 'Creative AI']
        }
      ]
    },
    {
      year: '2024',
      round: 'National Finals',
      difficulty: 'Expert',
      participants: 24,
      duration: '8 hours',
      problems: [
        {
          title: 'AI-Powered Climate Modeling',
          description: 'Develop a comprehensive model to predict climate patterns and extreme weather events.',
          points: 200,
          tags: ['Climate Science', 'Time Series', 'Deep Learning']
        },
        {
          title: 'Multi-Modal AI System',
          description: 'Create a system that processes both text and images to answer complex questions.',
          points: 180,
          tags: ['Multi-Modal', 'Vision-Language', 'Integration']
        }
      ]
    }
  ]

  const sampleProblems = [
    {
      id: 1,
      title: 'Beginner: Iris Classification',
      description: 'Classify iris flowers into three species using the classic iris dataset.',
      difficulty: 'Easy',
      points: 50,
      timeLimit: '30 minutes',
      solution: `import pandas as pd
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score

# Load the dataset
iris = load_iris()
X, y = iris.data, iris.target

# Split the data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train the model
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# Make predictions
predictions = model.predict(X_test)
accuracy = accuracy_score(y_test, predictions)
print(f"Accuracy: {accuracy:.2f}")`
    },
    {
      id: 2,
      title: 'Intermediate: House Price Prediction',
      description: 'Predict house prices using features like size, location, and amenities.',
      difficulty: 'Medium',
      points: 75,
      timeLimit: '1 hour',
      solution: `import pandas as pd
import numpy as np
from sklearn.ensemble import GradientBoostingRegressor
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import mean_squared_error

# Load and preprocess data
data = pd.read_csv('house_prices.csv')
X = data.drop('price', axis=1)
y = data['price']

# Scale features
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# Split data
X_train, X_test, y_train, y_test = train_test_split(X_scaled, y, test_size=0.2)

# Train model
model = GradientBoostingRegressor(n_estimators=100, learning_rate=0.1)
model.fit(X_train, y_train)

# Evaluate
predictions = model.predict(X_test)
mse = mean_squared_error(y_test, predictions)
print(f"RMSE: {np.sqrt(mse):.2f}")`
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
              <h1 className="text-4xl font-bold">Past Problems</h1>
              <p className="text-primary-100 mt-2">USA-North America AI Olympiad Archive</p>
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
            <Code className="h-16 w-16 text-primary-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Problem Archive</h2>
            <p className="text-xl text-slate-600 leading-relaxed max-w-4xl mx-auto">
              Explore past problems from the USA-NA-AIO to understand the competition format, 
              difficulty levels, and types of challenges you'll face. Practice with real problems 
              from previous years to prepare for the 2026 competition.
            </p>
          </div>
        </motion.div>

        {/* Past Problems */}
        <div className="space-y-12 mb-16">
          {pastProblems.map((contest, index) => (
            <motion.div
              key={`${contest.year}-${contest.round}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card-premium"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {contest.year} {contest.round}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
                    <div className="flex items-center space-x-1">
                      <Trophy className="h-4 w-4" />
                      <span>{contest.difficulty}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{contest.participants} participants</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{contest.duration}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 lg:mt-0">
                  <button className="btn-secondary flex items-center space-x-2">
                    <Download className="h-4 w-4" />
                    <span>Download All Problems</span>
                  </button>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {contest.problems.map((problem, problemIndex) => (
                  <motion.div
                    key={problemIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: (index * 0.1) + (problemIndex * 0.05) }}
                    className="bg-slate-50 rounded-xl p-6 hover:bg-slate-100 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="font-bold text-slate-900 text-lg">{problem.title}</h4>
                      <span className="bg-primary-100 text-primary-800 px-2 py-1 rounded-full text-sm font-medium">
                        {problem.points} pts
                      </span>
                    </div>
                    <p className="text-slate-600 mb-4 text-sm">{problem.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {problem.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-primary-50 text-primary-700 px-2 py-1 rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-2">
                      <button className="btn-outline text-sm px-3 py-1">
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </button>
                      <button className="btn-outline text-sm px-3 py-1">
                        <Download className="h-4 w-4 mr-1" />
                        Download
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sample Problems */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Sample Problems with Solutions</h2>
          <div className="space-y-8">
            {sampleProblems.map((problem, index) => (
              <motion.div
                key={problem.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card-premium"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{problem.title}</h3>
                    <p className="text-slate-600 mb-4">{problem.description}</p>
                    <div className="flex flex-wrap items-center gap-4 text-sm">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">
                        {problem.difficulty}
                      </span>
                      <span className="text-slate-600">{problem.points} points</span>
                      <span className="text-slate-600">{problem.timeLimit}</span>
                    </div>
                  </div>
                  <button className="btn-primary mt-4 lg:mt-0">
                    Try Problem
                  </button>
                </div>
                <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-green-400 text-sm">
                    <code>{problem.solution}</code>
                  </pre>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Practice Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card-premium"
        >
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-8">Practice Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-100 to-accent-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Code className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Coding Practice</h3>
              <p className="text-slate-600 mb-4">Practice with our interactive coding environment</p>
              <button className="btn-outline">Start Coding</button>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-100 to-accent-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Mock Contests</h3>
              <p className="text-slate-600 mb-4">Take timed practice contests to simulate real competition</p>
              <button className="btn-outline">Take Mock Contest</button>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-100 to-accent-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Study Groups</h3>
              <p className="text-slate-600 mb-4">Join study groups with other participants</p>
              <button className="btn-outline">Join Group</button>
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
              Register for the 2026 USA-NA-AIO and put your AI skills to the test.
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

export default Problems

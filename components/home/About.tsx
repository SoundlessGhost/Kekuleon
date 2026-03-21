'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Check, Target, Eye, Zap } from 'lucide-react'
import { aboutContent } from '@/lib/data'

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="section bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-1/3 h-1/2 bg-gradient-radial from-primary/5 to-transparent -translate-y-1/2" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm text-primary font-medium">{aboutContent.intro.subtitle}</span>
              </div>
              
              <h2 className="heading-xl mb-6">
                {aboutContent.intro.title.split(' ').map((word, i) => (
                  <span key={i} className={i === 1 ? 'text-gradient-primary' : ''}>
                    {word}{' '}
                  </span>
                ))}
              </h2>

              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {aboutContent.intro.description}
              </p>

              <p className="text-gray-600 leading-relaxed mb-8">
                {aboutContent.intro.highlight}
              </p>

              <Link href="/about" className="btn btn-primary group rounded-full">
                Learn More About Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Right Content - Problem & Solution */}
          <div className="space-y-6">
            {/* Problem Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card p-6 border-l-4 border-l-red-500"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-3">
                <Target className="w-5 h-5 text-red-500" />
                {aboutContent.problem.title}
              </h3>
              <ul className="space-y-3">
                {aboutContent.problem.points.slice(0, 3).map((point, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500/50 mt-2 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Solution Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="card p-6 border-l-4 border-l-primary"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-3">
                <Zap className="w-5 h-5 text-primary" />
                {aboutContent.solution.title}
              </h3>
              <ul className="space-y-3">
                {aboutContent.solution.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Mission Preview */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="card p-6 bg-white border border-gray-200"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-3">
                <Eye className="w-5 h-5 text-primary" />
                Our Mission
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {aboutContent.mission.slice(0, 150)}...
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

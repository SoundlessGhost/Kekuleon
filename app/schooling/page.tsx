'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { GraduationCap, BookOpen, Globe, Award, Users, Check, ArrowRight } from 'lucide-react'
import { schoolingContent } from '@/lib/data'

export default function SchoolingPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh-gradient opacity-60" />
        <div className="grid-pattern" />
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <GraduationCap className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">{schoolingContent.subtitle}</span>
            </div>
            
            <h1 className="heading-display mb-6">
              <span className="text-gradient-primary">{schoolingContent.title}</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              {schoolingContent.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="container-custom">
          <div className="grid grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="stat-number">{schoolingContent.currentStatus.enrolled}+</div>
              <div className="stat-label">Current Students</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="stat-number">{schoolingContent.currentStatus.target}+</div>
              <div className="stat-label">Target Capacity</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="stat-number">{schoolingContent.currentStatus.scholarshipPercent}%</div>
              <div className="stat-label">Scholarship Fund</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="heading-xl mb-4">Program Highlights</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{schoolingContent.highlight}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {schoolingContent.benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card p-6 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  {index === 0 && <BookOpen className="w-7 h-7 text-primary" />}
                  {index === 1 && <GraduationCap className="w-7 h-7 text-primary" />}
                  {index === 2 && <Globe className="w-7 h-7 text-primary" />}
                  {index === 3 && <Award className="w-7 h-7 text-primary" />}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Components */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-xl mb-6">Training Components</h2>
              <p className="text-gray-600 mb-8">
                Our comprehensive curriculum prepares students for academic excellence and international opportunities.
              </p>
              
              <div className="space-y-4">
                {schoolingContent.components.map((component, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg"
                  >
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-700">{component}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card p-8 border-l-4 border-l-primary"
            >
              <Award className="w-12 h-12 text-primary mb-6" />
              <h3 className="heading-md mb-4">Scholarship Opportunities</h3>
              <p className="text-gray-600 mb-6">
                KRTC conducts merit-based scholarship examinations. Minimum {schoolingContent.currentStatus.scholarshipPercent}% 
                of net annual surplus is allocated to scholarships for deserving students.
              </p>
              <Link href="/contact" className="btn btn-primary rounded-full">
                Apply Now <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

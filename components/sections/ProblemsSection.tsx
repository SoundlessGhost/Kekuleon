'use client'

import { motion } from 'framer-motion'
import { AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations'
import { problems } from '@/lib/constants'

const solutions = [
  'Hands-on laboratory training with modern instruments',
  'Industry collaboration and practical exposure',
  'Merit-based scholarships for talented students',
  'IELTS and German language preparation',
  'Structured community service programs',
]

export default function ProblemsSection() {
  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="text-sm text-primary font-medium">The Challenge</span>
            </span>
            <h2 className="heading-xl mb-4">
              Why This <span className="text-gradient-primary">Initiative</span> Is Needed
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Bangladesh produces a large number of science graduates every year, 
              but most lack access to modern laboratory instruments and practical training.
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Problems */}
          <FadeIn direction="left">
            <div className="card p-8 border-l-4 border-l-red-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">The Problems</h3>
              </div>
              <StaggerContainer className="space-y-4">
                {problems.map((problem, index) => (
                  <StaggerItem key={index}>
                    <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border border-red-100">
                      <div className="w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-red-500 text-xs font-bold">{index + 1}</span>
                      </div>
                      <p className="text-gray-600 text-sm">{problem}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </FadeIn>

          {/* Solutions */}
          <FadeIn direction="right" delay={0.2}>
            <div className="card p-8 border-l-4 border-l-green-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Our Solutions</h3>
              </div>
              <StaggerContainer className="space-y-4">
                {solutions.map((solution, index) => (
                  <StaggerItem key={index}>
                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border border-green-100">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-600 text-sm">{solution}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              <motion.div 
                className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20"
                whileHover={{ scale: 1.02 }}
              >
                <p className="text-primary text-sm font-medium">
                  KRTC converts academic knowledge into usable skills through 
                  practical training and industry collaboration.
                </p>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

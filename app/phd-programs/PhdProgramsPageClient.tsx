'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import { phdContent } from '@/lib/data'

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  return (
    <section ref={ref} className={className}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </section>
  )
}

export default function PhDProgramsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
              {phdContent.subtitle}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-5">
              {phdContent.title}
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              {phdContent.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features + Departments */}
      <Section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Program Features</h2>
              <ul className="space-y-3">
                {phdContent.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Departments</h2>
              <ul className="space-y-3">
                {phdContent.departments.map((dept, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                    <span className="text-gray-700">{dept}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* International Collaboration */}
      <Section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {phdContent.collaboration.title}
            </h2>
            <p className="text-gray-600 mb-8">{phdContent.collaboration.description}</p>
            <ul className="space-y-3 mb-10">
              {phdContent.collaboration.opportunities.map((opp, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  <span className="text-gray-700">{opp}</span>
                </li>
              ))}
            </ul>
            <Link href="/contact" className="btn btn-primary group">
              Inquire About PhD Programs
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}

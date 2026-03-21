'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Target, Eye, Zap, Check, Users, Award, Globe, Heart } from 'lucide-react'
import { aboutContent, siteConfig, team, locationBenefits } from '@/lib/data'

export default function AboutPage() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <>
      {/* Hero Section */}
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
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-sm text-primary font-medium">About KRTC</span>
            </div>
            
            <h1 className="heading-display mb-6">
              About <span className="text-gradient-primary">Kekuleon</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              {aboutContent.intro.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section ref={ref} className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="card p-8 border-t-4 border-t-primary"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h2 className="heading-md">Our Mission</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">{aboutContent.mission}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="card p-8 border-t-4 border-t-primary"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Eye className="w-7 h-7 text-primary" />
                </div>
                <h2 className="heading-md">Our Vision</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">{aboutContent.vision}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Registration No.', value: siteConfig.registration.number, icon: Award },
              { label: 'Established', value: siteConfig.registration.date, icon: Globe },
              { label: 'Company Type', value: 'Private Limited', icon: Users },
              { label: 'Capital', value: 'TK 100 Crore', icon: Heart },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="card p-6 text-center"
              >
                <item.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <div className="text-sm text-gray-500 mb-1">{item.label}</div>
                <div className="font-semibold text-gray-900">{item.value}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="heading-xl text-center mb-12">Leadership Team</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-8"
              >
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Users className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-primary text-sm mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

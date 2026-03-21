'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'
import { siteConfig } from '@/lib/constants'
import { FadeIn } from '@/components/animations'

export default function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-primary" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '30px 30px',
        }} />
      </div>

      <div className="container-custom relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <FadeIn direction="left">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Start Your Scientific Journey?
              </h2>
              <p className="text-white/90 text-lg max-w-xl">
                Join KRTC and bridge the gap between theory and practice. 
                Apply for our programs or contact us for more information.
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.2}>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link 
                href="/contact" 
                className="btn bg-white text-primary hover:bg-light-100 hover:shadow-lg group"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a 
                href={`tel:${siteConfig.phone}`}
                className="btn bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Us Now
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

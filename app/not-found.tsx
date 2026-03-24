'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Home, ArrowLeft, Search, FlaskConical } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-24 h-24 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-8"
          >
            <FlaskConical className="w-12 h-12 text-primary" />
          </motion.div>

          {/* 404 Text */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-6"
          >
            <span className="text-8xl md:text-9xl font-bold text-gradient-primary">404</span>
          </motion.div>

          {/* Message */}
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h1>
          <p className="text-gray-600 mb-8 leading-relaxed">
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back to exploring KRTC's programs.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-colors"
            >
              <Home className="w-5 h-5" />
              Go Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </button>
          </div>

          {/* Quick Links */}
          <div className="p-6 bg-white rounded-2xl border border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link
                href="/about"
                className="flex items-center justify-center gap-2 p-3 bg-gray-50 rounded-xl text-sm text-gray-700 hover:bg-primary/10 hover:text-primary transition-colors"
              >
                About KRTC
              </Link>
              <Link
                href="/services"
                className="flex items-center justify-center gap-2 p-3 bg-gray-50 rounded-xl text-sm text-gray-700 hover:bg-primary/10 hover:text-primary transition-colors"
              >
                Our Services
              </Link>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 p-3 bg-gray-50 rounded-xl text-sm text-gray-700 hover:bg-primary/10 hover:text-primary transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

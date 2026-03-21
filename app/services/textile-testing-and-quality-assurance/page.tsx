'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Scissors,
  ArrowRight,
  ArrowLeft,
  Check,
  GraduationCap,
  Building2,
  Users,
  Microscope,
  BookOpen,
  Globe,
  Award,
  Palette,
  Sparkles,
  Ruler,
  Droplets,
  Sun,
  Shirt,
} from 'lucide-react'

export default function TextilePage() {
  const department = {
    title: 'Textile Testing and Quality Assurance',
    shortTitle: 'Textile',
    icon: Scissors,
    heroDescription: 'Master fabric testing, quality control, and compliance standards essential for Bangladesh\'s thriving RMG industry.',
    overview: 'The Textile Testing department at KRTC addresses the critical need for skilled quality control professionals in Bangladesh\'s Ready-Made Garments (RMG) sector. Our comprehensive programs cover fabric testing, color analysis, and international compliance standards, preparing students for rewarding careers in one of the country\'s largest export industries.',
  }

  const keyFeatures = [
    { icon: Palette, title: 'Color Analysis', description: 'Spectrophotometry and color matching to international standards.' },
    { icon: Droplets, title: 'Fastness Testing', description: 'Comprehensive wash, light, and rubbing fastness evaluation.' },
    { icon: Ruler, title: 'Physical Testing', description: 'Tensile strength, tear resistance, and dimensional stability.' },
    { icon: Globe, title: 'Global Compliance', description: 'Training aligned with ISO, AATCC, and buyer requirements.' },
  ]

  const trainingPrograms = [
    { title: 'Fabric Testing Fundamentals', duration: '3 months', level: 'Beginner', description: 'Introduction to textile fibers, fabrics, and basic testing methods.' },
    { title: 'Color Measurement & Analysis', duration: '2 months', level: 'Intermediate', description: 'Spectrophotometry, color matching, and shade evaluation.' },
    { title: 'Physical & Chemical Testing', duration: '3 months', level: 'Advanced', description: 'Comprehensive fabric performance and durability testing.' },
    { title: 'Quality Compliance & Auditing', duration: '2 months', level: 'Professional', description: 'International standards, buyer compliance, and audit preparation.' },
  ]

  const industryServices = [
    { title: 'Fabric Testing', description: 'Complete physical and chemical analysis of textile materials.' },
    { title: 'Color Fastness Testing', description: 'Wash, light, rubbing, and perspiration fastness evaluation.' },
    { title: 'Compliance Testing', description: 'Testing for buyer requirements and export standards.' },
    { title: 'Defect Analysis', description: 'Identification and root cause analysis of fabric defects.' },
  ]

  const careerOpportunities = [
    'QC Manager',
    'Lab Supervisor',
    'Fabric Inspector',
    'Color Technician',
    'Compliance Officer',
    'Testing Engineer',
    'Quality Auditor',
    'Production QC',
  ]

  const equipment = [
    'Spectrophotometer',
    'Crockmeter (Rubbing Fastness)',
    'Launderometer',
    'Tensile Strength Tester',
    'Martindale Abrasion Tester',
    'Light Fastness Tester',
    'GSM Cutter',
    'Fabric Inspection Machine',
  ]

  const researchAreas = [
    'Sustainable Textiles',
    'Smart Fabrics',
    'Dyeing Technology',
    'Finishing Processes',
    'Recycled Materials',
    'Performance Textiles',
  ]

  const whyChoose = [
    'Direct pathway to RMG industry employment',
    'Training by experienced quality professionals',
    'Industry partnerships for internship placement',
    'Certification recognized by major buyers',
    'Hands-on experience with actual fabric samples',
    'Scholarship for textile engineering students',
  ]

  // Weave pattern colors
  const weaveColors = ['#4F46E5', '#6366F1', '#818CF8', '#A5B4FC']

  return (
    <>
      {/* Hero Section - Woven Fabric Theme */}
      <section className="pt-32 pb-28 relative overflow-hidden bg-gradient-to-br from-indigo-950 via-indigo-900 to-violet-900">
        {/* Woven Pattern Background */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="weave" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="10" height="10" fill="#818CF8" opacity="0.5"/>
                <rect x="10" y="10" width="10" height="10" fill="#818CF8" opacity="0.5"/>
                <rect x="0" y="10" width="10" height="10" fill="#6366F1" opacity="0.3"/>
                <rect x="10" y="0" width="10" height="10" fill="#6366F1" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#weave)"/>
          </svg>
        </div>

        {/* Floating Thread Lines */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-0.5 bg-gradient-to-r from-transparent via-indigo-400/30 to-transparent"
              style={{
                width: '150%',
                left: '-25%',
                top: `${10 + i * 12}%`,
                transform: `rotate(${-5 + i * 2}deg)`,
              }}
              animate={{
                x: ['-10%', '10%', '-10%'],
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-indigo-200/70 mb-8">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <span>/</span>
              <span className="text-violet-300">{department.shortTitle}</span>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                {/* Fabric Swatch Badge */}
                <div className="inline-flex items-center gap-4 mb-8">
                  <div className="grid grid-cols-2 gap-0.5 w-12 h-12">
                    {weaveColors.map((color, i) => (
                      <motion.div
                        key={i}
                        className="w-full h-full"
                        style={{ backgroundColor: color }}
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
                      />
                    ))}
                  </div>
                  <div className="px-5 py-2 bg-violet-500/20 border border-violet-400/30 rounded-full backdrop-blur-sm">
                    <span className="text-violet-200 font-medium">Quality Assurance</span>
                  </div>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  {department.title}
                </h1>
                <p className="text-xl text-indigo-100/80 leading-relaxed mb-8">
                  {department.heroDescription}
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-500 to-indigo-500 text-white font-bold rounded-full hover:shadow-lg hover:shadow-violet-500/30 transition-all">
                    Enroll Now
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="#programs" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-indigo-400/40 text-white font-semibold rounded-full hover:bg-indigo-400/20 transition-all">
                    View Programs
                  </Link>
                </div>
              </div>

              {/* Fabric Swatch Visual */}
              <div className="hidden lg:block">
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { color: 'from-indigo-400 to-indigo-600', label: 'Wash Fastness' },
                      { color: 'from-violet-400 to-violet-600', label: 'Color Match' },
                      { color: 'from-purple-400 to-purple-600', label: 'Light Fastness' },
                      { color: 'from-blue-400 to-blue-600', label: 'Tensile Test' },
                      { color: 'from-indigo-500 to-violet-500', label: 'GSM Check' },
                      { color: 'from-violet-500 to-purple-500', label: 'Rub Fastness' },
                    ].map((swatch, i) => (
                      <motion.div
                        key={i}
                        className="group relative"
                        whileHover={{ scale: 1.05, rotate: 2 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className={`aspect-square bg-gradient-to-br ${swatch.color} rounded-lg shadow-lg flex items-end p-3`}>
                          <span className="text-white/80 text-xs font-medium">{swatch.label}</span>
                        </div>
                        {/* Thread detail */}
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 border-2 border-white/30 rounded-full" />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Fabric Fold Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-20">
            <path d="M0 80L360 40L720 80L1080 40L1440 80V80H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Overview - Fabric Card Style */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="flex gap-1">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-2 h-6 bg-indigo-500 rounded-full" style={{ opacity: 1 - i * 0.2 }} />
                  ))}
                </div>
                <span className="text-indigo-600 font-semibold uppercase tracking-wider text-sm">Department Overview</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Empowering Bangladesh's RMG Industry
              </h2>
              
              <p className="text-gray-600 leading-relaxed text-lg mb-8">
                {department.overview}
              </p>

              {/* Tag swatches */}
              <div className="flex flex-wrap gap-3">
                {['RMG Industry', 'Quality Control', 'Export Standards', 'Color Science', 'Fabric Testing'].map((tag, i) => (
                  <span key={i} className="px-4 py-2 bg-gradient-to-r from-indigo-50 to-violet-50 border border-indigo-200 rounded-full text-indigo-700 text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {keyFeatures.map((feature, index) => {
                const FeatureIcon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="group p-6 bg-gradient-to-br from-white to-indigo-50/50 rounded-2xl border border-indigo-100 hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-100/50 transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <FeatureIcon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-500 text-sm">{feature.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Training Programs - Swatch Cards */}
      <section id="programs" className="py-20 bg-gradient-to-br from-indigo-50 via-violet-50 to-purple-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm mb-4">
              <Shirt className="w-4 h-4 text-indigo-600" />
              <span className="text-indigo-700 font-medium text-sm">Training Programs</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry-Ready Training
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive programs designed for the RMG industry's quality control needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {trainingPrograms.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all">
                  {/* Color bar header */}
                  <div className={`h-2 bg-gradient-to-r ${
                    index === 0 ? 'from-indigo-400 to-indigo-600' :
                    index === 1 ? 'from-violet-400 to-violet-600' :
                    index === 2 ? 'from-purple-400 to-purple-600' :
                    'from-blue-400 to-indigo-500'
                  }`} />
                  
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{program.title}</h3>
                    </div>
                    
                    <p className="text-gray-600 mb-6">{program.description}</p>
                    
                    <div className="flex items-center gap-4">
                      <span className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full font-semibold text-sm">
                        {program.duration}
                      </span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-500 text-sm">{program.level}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Services & Equipment */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-6 h-6 text-indigo-600" />
                <h2 className="text-2xl font-bold text-gray-900">Industry Services</h2>
              </div>
              
              <p className="text-gray-600 mb-8">
                Professional testing services for the textile and garments industry.
              </p>

              <div className="space-y-4">
                {industryServices.map((service, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4 p-5 bg-gradient-to-r from-indigo-50/50 to-white rounded-2xl border border-indigo-100 hover:border-indigo-300 transition-all"
                  >
                    <div className="grid grid-cols-2 gap-0.5 w-6 h-6 flex-shrink-0 mt-1">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className={`w-full h-full ${i % 2 === 0 ? 'bg-indigo-500' : 'bg-violet-400'}`} />
                      ))}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{service.title}</h3>
                      <p className="text-gray-500 text-sm">{service.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-700 rounded-3xl p-8 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <Microscope className="w-6 h-6 text-violet-200" />
                  <h3 className="text-xl font-bold">Testing Equipment</h3>
                </div>
                
                <div className="grid grid-cols-1 gap-3">
                  {equipment.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="flex items-center gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                        <Sun className="w-4 h-4 text-violet-200" />
                      </div>
                      <span className="text-indigo-50">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-20 bg-gradient-to-br from-violet-100 via-indigo-100 to-purple-100">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Career Opportunities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join Bangladesh's thriving RMG industry with our specialized quality training.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {careerOpportunities.map((career, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, rotate: 1 }}
                className="group"
              >
                <div className="px-6 py-4 bg-white rounded-2xl shadow-sm hover:shadow-lg border border-indigo-100 hover:border-indigo-300 transition-all flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-medium text-gray-700">{career}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research & Why Choose */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Research Areas</h2>
              <div className="grid grid-cols-2 gap-4">
                {researchAreas.map((area, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-gradient-to-r from-indigo-50 to-violet-50 rounded-xl border border-indigo-100">
                    <BookOpen className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium text-sm">{area}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-indigo-600 to-violet-700 rounded-3xl p-8 text-white"
            >
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <Award className="w-6 h-6 text-violet-200" />
                Why Choose This Department?
              </h3>
              <div className="space-y-4">
                {whyChoose.map((reason, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-indigo-100">{reason}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 relative overflow-hidden">
        {/* Woven pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="cta-weave" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="10" height="10" fill="white"/>
                <rect x="10" y="10" width="10" height="10" fill="white"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cta-weave)"/>
          </svg>
        </div>

        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Weave Your Success Story
            </h2>
            <p className="text-indigo-100 max-w-2xl mx-auto mb-8 text-lg">
              Join KRTC's Textile department and become part of Bangladesh's proud RMG industry. Scholarships available.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-700 font-bold rounded-full hover:bg-indigo-50 transition-colors shadow-lg">
                Apply Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/schooling" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors">
                Scholarship Info
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Department Navigation */}
      <section className="py-6 bg-gray-50 border-t border-gray-200">
        <div className="container-custom">
          <div className="flex justify-between items-center">
            <Link href="/services/materials" className="group flex items-center gap-3 text-gray-600 hover:text-indigo-600 transition-colors">
              <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center group-hover:bg-indigo-500 transition-colors">
                <ArrowLeft className="w-5 h-5 text-indigo-600 group-hover:text-white transition-colors" />
              </div>
              <div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">Previous</div>
                <div className="font-semibold">Materials</div>
              </div>
            </Link>

            <Link href="/services" className="px-6 py-2 bg-white border border-gray-200 text-gray-700 font-medium rounded-full hover:border-indigo-300 hover:text-indigo-600 transition-colors">
              All Departments
            </Link>

            <Link href="/services/nursing" className="group flex items-center gap-3 text-gray-600 hover:text-indigo-600 transition-colors">
              <div className="text-right">
                <div className="text-xs text-gray-400 uppercase tracking-wider">Next</div>
                <div className="font-semibold">Nursing</div>
              </div>
              <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center group-hover:bg-indigo-500 transition-colors">
                <ArrowRight className="w-5 h-5 text-indigo-600 group-hover:text-white transition-colors" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Layers,
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
  Recycle,
  Factory,
  Cog,
  Link2,
  Zap,
} from 'lucide-react'

export default function PolymerPage() {
  const department = {
    title: 'Polymer Processing and Plastics Technology',
    shortTitle: 'Polymer',
    icon: Layers,
    heroDescription: 'Master polymer science, plastic processing techniques, and sustainable material solutions with industry-standard equipment and expert guidance.',
    overview: 'The Polymer Processing department at KRTC provides hands-on training in plastic materials, processing techniques, and quality control. Our programs cover everything from basic polymer science to advanced manufacturing processes, preparing students for careers in the growing plastics and polymer industry.',
  }

  const keyFeatures = [
    { icon: Factory, title: 'Processing Lab', description: 'Hands-on training with injection molding, extrusion, and blow molding.' },
    { icon: Recycle, title: 'Sustainability Focus', description: 'Training in recycling technologies and eco-friendly materials.' },
    { icon: Cog, title: 'Industry Equipment', description: 'Work with actual machinery used in polymer industries.' },
    { icon: Globe, title: 'Global Standards', description: 'Training aligned with international polymer testing standards.' },
  ]

  const trainingPrograms = [
    { title: 'Polymer Processing Techniques', duration: '4 months', level: 'Intermediate', description: 'Injection molding, extrusion, blow molding, and thermoforming.' },
    { title: 'Material Testing & Analysis', duration: '3 months', level: 'Advanced', description: 'Physical, mechanical, and thermal property testing.' },
    { title: 'Quality Control in Plastics', duration: '2 months', level: 'Professional', description: 'QC methods, defect analysis, and process optimization.' },
    { title: 'Sustainable Polymer Solutions', duration: '2 months', level: 'All Levels', description: 'Biodegradable materials, recycling, and circular economy.' },
  ]

  const industryServices = [
    { title: 'Material Testing', description: 'Comprehensive polymer testing including tensile, impact, and thermal analysis.' },
    { title: 'Process Optimization', description: 'Consultation on improving manufacturing efficiency and reducing waste.' },
    { title: 'Product Development', description: 'Support for new plastic product design and prototyping.' },
    { title: 'Quality Certification', description: 'Testing and certification for export-quality plastic products.' },
  ]

  const careerOpportunities = [
    'Process Engineer',
    'Quality Controller',
    'Production Supervisor',
    'R&D Technician',
    'Mold Designer',
    'Materials Engineer',
    'Plant Manager',
    'Technical Sales',
  ]

  const equipment = [
    'Injection Molding Machine',
    'Single Screw Extruder',
    'Blow Molding Unit',
    'Universal Testing Machine (UTM)',
    'Melt Flow Index Tester',
    'DSC & TGA Analyzer',
    'Impact Tester',
    'Heat Deflection Tester',
  ]

  const researchAreas = [
    'Biopolymer Development',
    'Polymer Nanocomposites',
    'Recycling Technologies',
    'Process Simulation',
    'Additive Manufacturing',
    'Polymer Blends & Alloys',
  ]

  const whyChoose = [
    'Real industrial machinery for hands-on training',
    'Industry partnerships for internships and placement',
    'Focus on sustainable and eco-friendly solutions',
    'Training by experienced industry professionals',
    'Small batch sizes ensure quality learning',
    'Scholarships for engineering graduates',
  ]

  return (
    <>
      {/* Hero Section - Industrial Chain Theme */}
      <section className="pt-32 pb-24 relative overflow-hidden bg-gradient-to-br from-orange-900 via-amber-800 to-orange-800">
        {/* Chain Link Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="chains" width="60" height="30" patternUnits="userSpaceOnUse">
                <ellipse cx="15" cy="15" rx="12" ry="8" fill="none" stroke="white" strokeWidth="2"/>
                <ellipse cx="45" cy="15" rx="12" ry="8" fill="none" stroke="white" strokeWidth="2"/>
                <line x1="27" y1="15" x2="33" y2="15" stroke="white" strokeWidth="2"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#chains)"/>
          </svg>
        </div>

        {/* Animated Chain Links */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute flex items-center"
              style={{
                left: `${-10 + i * 30}%`,
                top: `${20 + i * 20}%`,
              }}
              animate={{
                x: [0, 20, 0],
              }}
              transition={{
                duration: 6 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {[...Array(5)].map((_, j) => (
                <div key={j} className="flex items-center">
                  <div className="w-12 h-8 rounded-full border-4 border-orange-400/20 bg-transparent" />
                  <div className="w-4 h-1 bg-orange-400/20 -mx-2" />
                </div>
              ))}
            </motion.div>
          ))}
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-orange-200/70 mb-8">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <span>/</span>
              <span className="text-amber-400">{department.shortTitle}</span>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                {/* Chain Badge */}
                <div className="inline-flex items-center gap-4 mb-6">
                  <div className="flex items-center">
                    <div className="w-10 h-6 rounded-full border-4 border-amber-400 bg-transparent" />
                    <div className="w-6 h-2 bg-amber-400 -mx-1" />
                    <div className="w-10 h-6 rounded-full border-4 border-amber-400 bg-transparent" />
                  </div>
                  <div className="px-4 py-2 bg-amber-500/20 border border-amber-400/30 rounded-lg backdrop-blur-sm">
                    <span className="text-amber-300 font-medium text-sm">Industrial Processing</span>
                  </div>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  {department.title}
                </h1>
                <p className="text-xl text-orange-100/80 leading-relaxed mb-8">
                  {department.heroDescription}
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-amber-500/30 transition-all">
                    Enroll Now
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="#programs" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-amber-400/40 text-white font-semibold rounded-lg hover:bg-amber-400/20 transition-all">
                    View Programs
                  </Link>
                </div>
              </div>

              {/* Industrial Stats */}
              <div className="hidden lg:block">
                <div className="space-y-4">
                  {[
                    { value: '4', label: 'Processing Techniques', icon: Cog },
                    { value: '8+', label: 'Testing Equipment', icon: Microscope },
                    { value: '100%', label: 'Industry Focus', icon: Factory },
                    { value: '6', label: 'Research Areas', icon: Zap },
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                      className="flex items-center gap-6 p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/10"
                    >
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                        <stat.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-white">{stat.value}</div>
                        <div className="text-orange-200/70 text-sm">{stat.label}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Angular Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-20">
            <path d="M0 100L720 50L1440 100V100H0V100Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Overview - Connected Cards */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Link2 className="w-6 h-6 text-amber-600" />
                <span className="text-amber-600 font-semibold uppercase tracking-wider text-sm">Department Overview</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Building the Polymer Industry's Future
              </h2>
              
              <p className="text-gray-600 leading-relaxed text-lg mb-8">
                {department.overview}
              </p>

              {/* Connected feature cards */}
              <div className="space-y-0">
                {keyFeatures.map((feature, index) => {
                  const FeatureIcon = feature.icon;
                  return (
                    <div key={index} className="relative">
                      {/* Connector line */}
                      {index < keyFeatures.length - 1 && (
                        <div className="absolute left-7 top-full w-0.5 h-4 bg-gradient-to-b from-amber-300 to-orange-300 z-10" />
                      )}
                      <div className="group flex items-start gap-4 p-4 bg-gradient-to-r from-amber-50 to-white border-l-4 border-amber-500 hover:bg-amber-50 transition-colors">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                          <FeatureIcon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                          <p className="text-gray-500 text-sm">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Visual Element */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-orange-100 to-amber-100 rounded-3xl p-8 relative overflow-hidden">
                {/* Polymer chain visual */}
                <div className="flex items-center justify-center py-12">
                  <motion.div
                    className="flex items-center"
                    animate={{ rotateY: [0, 10, 0, -10, 0] }}
                    transition={{ duration: 8, repeat: Infinity }}
                  >
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="flex items-center">
                        <div className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg ${
                          i % 2 === 0 
                            ? 'bg-gradient-to-br from-amber-500 to-orange-500' 
                            : 'bg-gradient-to-br from-orange-400 to-amber-400'
                        }`}>
                          <span className="text-white font-bold text-lg">
                            {['C', 'H', 'C', 'H', 'C'][i]}
                          </span>
                        </div>
                        {i < 4 && <div className="w-8 h-2 bg-gradient-to-r from-amber-600 to-orange-600 -mx-1" />}
                      </div>
                    ))}
                  </motion.div>
                </div>
                
                <div className="text-center mt-6">
                  <div className="text-gray-700 font-semibold">Polymer Chain Structure</div>
                  <div className="text-gray-500 text-sm">Interactive molecular visualization</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section id="programs" className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-lg mb-4">
              <Cog className="w-4 h-4 text-amber-600" />
              <span className="text-amber-700 font-medium text-sm">Training Programs</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry-Ready Training
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive programs covering all aspects of polymer processing and plastics technology.
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
                <div className="bg-white rounded-xl p-6 border-2 border-transparent hover:border-amber-400 shadow-sm hover:shadow-xl transition-all h-full">
                  {/* Chain link header */}
                  <div className="flex items-center gap-4 mb-4 pb-4 border-b border-gray-100">
                    <div className="flex items-center">
                      <div className="w-8 h-5 rounded-full border-3 border-amber-500 bg-transparent" />
                      <div className="w-4 h-1.5 bg-amber-500 -mx-0.5" />
                      <div className="w-8 h-5 rounded-full border-3 border-orange-500 bg-transparent" />
                    </div>
                    <span className="text-amber-600 font-bold">0{index + 1}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h3>
                  <p className="text-gray-600 mb-6">{program.description}</p>
                  
                  <div className="flex items-center gap-4">
                    <span className="px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 rounded-lg font-semibold text-sm">
                      {program.duration}
                    </span>
                    <span className="text-gray-500 text-sm">{program.level}</span>
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
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Factory className="w-6 h-6 text-amber-600" />
                <h2 className="text-2xl font-bold text-gray-900">Industry Services</h2>
              </div>
              
              <p className="text-gray-600 mb-8">
                Professional testing and consultancy for the polymer and plastics industry.
              </p>

              <div className="space-y-4">
                {industryServices.map((service, index) => (
                  <div key={index} className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl hover:bg-amber-50 transition-colors">
                    <div className="flex items-center flex-shrink-0">
                      <div className="w-3 h-2 rounded-full border-2 border-amber-500" />
                      <div className="w-2 h-0.5 bg-amber-500" />
                      <div className="w-3 h-2 rounded-full border-2 border-orange-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{service.title}</h3>
                      <p className="text-gray-500 text-sm">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gradient-to-br from-orange-800 to-amber-900 rounded-3xl p-8 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <Cog className="w-6 h-6 text-amber-400 animate-spin-slow" />
                  <h3 className="text-xl font-bold">Processing Equipment</h3>
                </div>
                
                <div className="space-y-3">
                  {equipment.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="flex items-center gap-4 p-4 bg-white/10 rounded-xl border border-white/10 hover:bg-white/20 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                        <Layers className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-orange-50">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-20 bg-gradient-to-br from-amber-100 to-orange-100">
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
              Join Bangladesh's growing polymer and plastics industry with our specialized training.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {careerOpportunities.map((career, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group"
              >
                <div className="bg-white rounded-xl p-6 text-center border-2 border-transparent hover:border-amber-400 shadow-sm hover:shadow-lg transition-all">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center mx-auto mb-4 group-hover:from-amber-500 group-hover:to-orange-500 transition-all">
                    <Users className="w-6 h-6 text-amber-600 group-hover:text-white transition-colors" />
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
                  <div key={index} className="flex items-center gap-3 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-200">
                    <BookOpen className="w-5 h-5 text-amber-600 flex-shrink-0" />
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
              className="bg-gradient-to-br from-amber-600 to-orange-600 rounded-3xl p-8 text-white"
            >
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <Award className="w-6 h-6 text-amber-200" />
                Why Choose This Department?
              </h3>
              <div className="space-y-4">
                {whyChoose.map((reason, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-amber-50">{reason}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-600 via-amber-600 to-orange-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="cta-chains" width="60" height="30" patternUnits="userSpaceOnUse">
                <ellipse cx="15" cy="15" rx="12" ry="8" fill="none" stroke="white" strokeWidth="1"/>
                <ellipse cx="45" cy="15" rx="12" ry="8" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cta-chains)"/>
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
              Shape Your Career in Polymers
            </h2>
            <p className="text-orange-100 max-w-2xl mx-auto mb-8 text-lg">
              Join KRTC's Polymer department and become part of Bangladesh's growing plastics industry. Scholarships available.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-orange-700 font-bold rounded-lg hover:bg-amber-50 transition-colors shadow-lg">
                Apply Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/schooling" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
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
            <Link href="/services/pharmaceutical" className="group flex items-center gap-3 text-gray-600 hover:text-amber-600 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center group-hover:bg-amber-500 transition-colors">
                <ArrowLeft className="w-5 h-5 text-amber-600 group-hover:text-white transition-colors" />
              </div>
              <div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">Previous</div>
                <div className="font-semibold">Pharmaceutical</div>
              </div>
            </Link>

            <Link href="/services" className="px-6 py-2 bg-white border border-gray-200 text-gray-700 font-medium rounded-lg hover:border-amber-300 hover:text-amber-600 transition-colors">
              All Departments
            </Link>

            <Link href="/services/materials" className="group flex items-center gap-3 text-gray-600 hover:text-amber-600 transition-colors">
              <div className="text-right">
                <div className="text-xs text-gray-400 uppercase tracking-wider">Next</div>
                <div className="font-semibold">Materials</div>
              </div>
              <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center group-hover:bg-amber-500 transition-colors">
                <ArrowRight className="w-5 h-5 text-amber-600 group-hover:text-white transition-colors" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

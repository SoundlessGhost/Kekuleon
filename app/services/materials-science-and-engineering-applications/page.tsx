'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Gem,
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
  Hammer,
  Wrench,
  Box,
  Grid3X3,
  ScanLine,
  Hexagon,
} from 'lucide-react'

export default function MaterialsPage() {
  const department = {
    title: 'Materials Science and Engineering',
    shortTitle: 'Materials',
    icon: Gem,
    heroDescription: 'Explore material characterization, testing methodologies, and engineering applications with advanced instrumentation and expert guidance.',
    overview: 'The Materials Science department at KRTC offers comprehensive training in material testing, characterization, and failure analysis. Our programs combine theoretical foundations with practical laboratory experience, preparing students for careers in manufacturing, quality control, and research and development.',
  }

  const keyFeatures = [
    { icon: Microscope, title: 'Advanced Testing', description: 'State-of-the-art equipment for mechanical and structural analysis.' },
    { icon: ScanLine, title: 'Failure Analysis', description: 'Learn to identify and analyze material failures systematically.' },
    { icon: Grid3X3, title: 'Metallography', description: 'Microstructure examination and preparation techniques.' },
    { icon: Globe, title: 'ASTM Standards', description: 'Training aligned with international testing standards.' },
  ]

  const trainingPrograms = [
    { title: 'Material Testing Methods', duration: '3 months', level: 'Intermediate', description: 'Tensile, hardness, impact, and fatigue testing techniques.' },
    { title: 'Metallography & Microscopy', duration: '2 months', level: 'Advanced', description: 'Sample preparation, polishing, etching, and microstructure analysis.' },
    { title: 'Non-Destructive Testing', duration: '3 months', level: 'Professional', description: 'Ultrasonic, radiographic, and magnetic particle testing.' },
    { title: 'Failure Analysis', duration: '2 months', level: 'Advanced', description: 'Root cause analysis and failure prevention strategies.' },
  ]

  const industryServices = [
    { title: 'Material Testing', description: 'Comprehensive mechanical testing including tensile, hardness, and impact.' },
    { title: 'Microstructure Analysis', description: 'Optical and electron microscopy for material characterization.' },
    { title: 'Failure Investigation', description: 'Expert analysis of material failures with detailed reporting.' },
    { title: 'Quality Certification', description: 'Testing and certification for industrial materials.' },
  ]

  const careerOpportunities = [
    'Materials Engineer',
    'Quality Inspector',
    'NDT Technician',
    'Metallurgist',
    'Research Analyst',
    'Production Engineer',
    'Lab Supervisor',
    'Technical Consultant',
  ]

  const equipment = [
    'Universal Testing Machine (UTM)',
    'Hardness Testers (Rockwell, Vickers, Brinell)',
    'Impact Testing Machine',
    'Optical Microscope',
    'XRF Analyzer',
    'Ultrasonic Thickness Gauge',
    'Surface Roughness Tester',
    'Digital Image Analysis System',
  ]

  const researchAreas = [
    'Metal Alloy Development',
    'Composite Materials',
    'Corrosion Studies',
    'Surface Engineering',
    'Heat Treatment Optimization',
    'Welding Metallurgy',
  ]

  const whyChoose = [
    'Industry-standard testing equipment and facilities',
    'Training by certified materials engineers',
    'Strong industry connections for job placement',
    'Hands-on experience with real industrial samples',
    'Certification recognized in manufacturing sector',
    'Scholarship support for engineering students',
  ]

  return (
    <>
      {/* Hero Section - Blueprint/Metallic Theme */}
      <section className="pt-32 pb-24 relative overflow-hidden bg-gradient-to-br from-slate-900 via-gray-800 to-zinc-900">
        {/* Blueprint Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="blueprint" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#60A5FA" strokeWidth="0.5"/>
                <circle cx="0" cy="0" r="2" fill="#60A5FA" opacity="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#blueprint)"/>
          </svg>
        </div>

        {/* Floating Geometric Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${10 + i * 15}%`,
                top: `${15 + (i % 3) * 25}%`,
              }}
              animate={{
                rotate: [0, 90, 180, 270, 360],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 20 + i * 5,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <Hexagon className="w-16 h-16 text-blue-400/20 stroke-1" />
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
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <span>/</span>
              <span className="text-blue-400">{department.shortTitle}</span>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                {/* Technical Badge */}
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 border-2 border-blue-400 flex items-center justify-center">
                    <Gem className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="px-4 py-2 border border-gray-600 bg-gray-800/50 backdrop-blur-sm">
                    <span className="text-gray-300 font-mono text-sm tracking-wider">MATERIALS ENGINEERING</span>
                  </div>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  {department.title}
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                  {department.heroDescription}
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="group inline-flex items-center gap-2 px-8 py-4 bg-blue-500 text-white font-bold hover:bg-blue-400 transition-all">
                    Enroll Now
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="#programs" className="inline-flex items-center gap-2 px-8 py-4 border border-gray-500 text-white font-semibold hover:border-blue-400 hover:text-blue-400 transition-all">
                    View Programs
                  </Link>
                </div>
              </div>

              {/* Technical Specs Panel */}
              <div className="hidden lg:block">
                <div className="border border-gray-700 bg-gray-800/30 backdrop-blur-sm p-6">
                  <div className="text-xs text-gray-500 font-mono mb-4">// DEPARTMENT SPECIFICATIONS</div>
                  
                  <div className="space-y-4">
                    {[
                      { label: 'PROGRAMS', value: '4', unit: 'ACTIVE' },
                      { label: 'EQUIPMENT', value: '8+', unit: 'UNITS' },
                      { label: 'STANDARDS', value: 'ASTM', unit: 'ISO' },
                      { label: 'TRAINING', value: '100%', unit: 'PRACTICAL' },
                    ].map((spec, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                        className="flex items-center justify-between p-4 border border-gray-700 hover:border-blue-500/50 transition-colors"
                      >
                        <span className="text-gray-400 font-mono text-sm">{spec.label}</span>
                        <div className="text-right">
                          <span className="text-2xl font-bold text-white">{spec.value}</span>
                          <span className="text-gray-500 text-sm ml-2">{spec.unit}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Sharp Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-16">
            <path d="M0 60H1440V30L720 0L0 30V60Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Overview - Blueprint Style */}
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
                <div className="w-8 h-0.5 bg-slate-800" />
                <span className="text-slate-600 font-mono uppercase tracking-wider text-sm">Overview</span>
                <div className="w-8 h-0.5 bg-slate-800" />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Engineering Excellence in Material Science
              </h2>
              
              <p className="text-gray-600 leading-relaxed text-lg mb-8">
                {department.overview}
              </p>

              <div className="grid grid-cols-2 gap-4">
                {keyFeatures.map((feature, index) => {
                  const FeatureIcon = feature.icon;
                  return (
                    <div key={index} className="p-5 border-2 border-gray-200 hover:border-slate-400 transition-colors bg-gray-50">
                      <FeatureIcon className="w-8 h-8 text-slate-700 mb-3" />
                      <h3 className="font-bold text-gray-900 mb-1">{feature.title}</h3>
                      <p className="text-gray-500 text-sm">{feature.description}</p>
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
              <div className="border-2 border-gray-200 p-8 bg-gradient-to-br from-gray-50 to-white">
                {/* Crystal Structure Visual */}
                <div className="aspect-square relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="relative w-48 h-48"
                      animate={{ rotateY: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      {/* Cube vertices */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">Fe</span>
                      </div>
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-slate-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">C</span>
                      </div>
                      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-8 h-8 bg-slate-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">Cr</span>
                      </div>
                      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-8 h-8 bg-slate-400 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">Ni</span>
                      </div>
                      {/* Connecting lines */}
                      <svg className="absolute inset-0 w-full h-full">
                        <line x1="50%" y1="15%" x2="15%" y2="50%" stroke="#64748B" strokeWidth="2" />
                        <line x1="50%" y1="15%" x2="85%" y2="50%" stroke="#64748B" strokeWidth="2" />
                        <line x1="50%" y1="85%" x2="15%" y2="50%" stroke="#64748B" strokeWidth="2" />
                        <line x1="50%" y1="85%" x2="85%" y2="50%" stroke="#64748B" strokeWidth="2" />
                      </svg>
                    </motion.div>
                  </div>
                </div>
                
                <div className="text-center mt-6 border-t border-gray-200 pt-4">
                  <div className="text-gray-700 font-mono font-semibold">Crystal Lattice Structure</div>
                  <div className="text-gray-400 text-sm">Material composition visualization</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Training Programs - Technical Cards */}
      <section id="programs" className="py-20 bg-gray-100">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-200 mb-4">
              <Wrench className="w-4 h-4 text-slate-600" />
              <span className="text-slate-700 font-mono text-sm">TRAINING_PROGRAMS</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technical Training Programs
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive programs designed to develop expertise in materials testing and analysis.
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
                <div className="bg-white border-l-4 border-slate-500 p-6 hover:shadow-xl transition-all h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-slate-100 flex items-center justify-center font-mono font-bold text-slate-600">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{program.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{program.description}</p>
                  
                  <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                    <div className="px-3 py-1 bg-slate-100 text-slate-700 font-mono text-sm">
                      {program.duration}
                    </div>
                    <div className="text-gray-400 text-sm">|</div>
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
                <Hammer className="w-6 h-6 text-slate-600" />
                <h2 className="text-2xl font-bold text-gray-900">Industry Services</h2>
              </div>
              
              <p className="text-gray-600 mb-8">
                Professional material testing and analysis services for industrial applications.
              </p>

              <div className="space-y-4">
                {industryServices.map((service, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 border-l-2 border-slate-300 hover:border-slate-600 hover:bg-gray-50 transition-all">
                    <div className="w-2 h-2 bg-slate-500 mt-2 flex-shrink-0" />
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
              <div className="bg-gradient-to-br from-slate-800 to-gray-900 p-8 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <Box className="w-6 h-6 text-blue-400" />
                  <h3 className="text-xl font-bold font-mono">TESTING_EQUIPMENT</h3>
                </div>
                
                <div className="space-y-3">
                  {equipment.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="flex items-center gap-4 p-3 border border-gray-700 hover:border-blue-500/50 transition-colors"
                    >
                      <span className="text-blue-400 font-mono text-sm">[{String(index + 1).padStart(2, '0')}]</span>
                      <span className="text-gray-300 text-sm">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-20 bg-gray-100">
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
              Build your career in manufacturing, quality control, and materials engineering.
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
                <div className="bg-white border-2 border-gray-200 p-6 text-center hover:border-slate-500 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 border-2 border-gray-200 flex items-center justify-center mx-auto mb-4 group-hover:border-slate-500 group-hover:bg-slate-500 transition-all">
                    <Users className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
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
              <div className="grid grid-cols-2 gap-3">
                {researchAreas.map((area, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 border-l-2 border-slate-400">
                    <BookOpen className="w-5 h-5 text-slate-600 flex-shrink-0" />
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
              className="bg-gradient-to-br from-slate-700 to-gray-800 p-8 text-white"
            >
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <Award className="w-6 h-6 text-blue-400" />
                Why Choose This Department?
              </h3>
              <div className="space-y-4">
                {whyChoose.map((reason, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 border border-blue-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-blue-400" />
                    </div>
                    <span className="text-gray-300">{reason}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800 via-gray-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="cta-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cta-grid)"/>
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
              Build Your Engineering Career
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-lg">
              Join KRTC's Materials Science department and develop expertise in material testing and analysis.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="group inline-flex items-center gap-2 px-8 py-4 bg-blue-500 text-white font-bold hover:bg-blue-400 transition-colors">
                Apply Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/schooling" className="inline-flex items-center gap-2 px-8 py-4 border border-gray-600 text-white font-semibold hover:border-blue-400 hover:text-blue-400 transition-colors">
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
            <Link href="/services/polymer" className="group flex items-center gap-3 text-gray-600 hover:text-slate-700 transition-colors">
              <div className="w-10 h-10 border-2 border-gray-300 flex items-center justify-center group-hover:border-slate-500 group-hover:bg-slate-500 transition-colors">
                <ArrowLeft className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </div>
              <div>
                <div className="text-xs text-gray-400 uppercase tracking-wider font-mono">Previous</div>
                <div className="font-semibold">Polymer</div>
              </div>
            </Link>

            <Link href="/services" className="px-6 py-2 bg-white border-2 border-gray-200 text-gray-700 font-medium hover:border-slate-400 transition-colors">
              All Departments
            </Link>

            <Link href="/services/textile" className="group flex items-center gap-3 text-gray-600 hover:text-slate-700 transition-colors">
              <div className="text-right">
                <div className="text-xs text-gray-400 uppercase tracking-wider font-mono">Next</div>
                <div className="font-semibold">Textile</div>
              </div>
              <div className="w-10 h-10 border-2 border-gray-300 flex items-center justify-center group-hover:border-slate-500 group-hover:bg-slate-500 transition-colors">
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

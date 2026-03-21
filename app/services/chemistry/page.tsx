'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  FlaskConical,
  ArrowRight,
  Check,
  GraduationCap,
  Building2,
  Users,
  Microscope,
  BookOpen,
  Globe,
  Award,
  Beaker,
  Atom,
  TestTube,
} from 'lucide-react'

export default function ChemistryPage() {
  const department = {
    title: 'Chemistry and Applied Chemical Sciences',
    shortTitle: 'Chemistry',
    icon: FlaskConical,
    heroDescription: 'Master advanced analytical techniques, research methodology, and laboratory instrumentation with hands-on training from industry experts.',
    overview: 'The Chemistry and Applied Chemical Sciences department at KRTC is designed to bridge the gap between theoretical knowledge and practical application. We provide comprehensive training in analytical chemistry, applied chemistry, material chemistry, and polymer chemistry. Our programs are tailored for students preparing for higher education, researchers seeking laboratory exposure, and professionals requiring specialized skills.',
  }

  const keyFeatures = [
    { icon: Microscope, title: 'Modern Laboratory', description: 'State-of-the-art analytical instruments and equipment for hands-on training.' },
    { icon: GraduationCap, title: 'Expert Faculty', description: 'Learn from experienced researchers and industry professionals.' },
    { icon: Building2, title: 'Industry Linkage', description: 'Direct collaboration with chemical and pharmaceutical industries.' },
    { icon: Globe, title: 'International Standards', description: 'Training aligned with global analytical chemistry practices.' },
  ]

  const trainingPrograms = [
    { title: 'Instrumental Analysis Techniques', duration: '3 months', level: 'Intermediate', description: 'Learn UV-Vis, HPLC, GC, and spectroscopic methods.' },
    { title: 'Research Methodology', duration: '2 months', level: 'All Levels', description: 'Scientific writing, data analysis, and research ethics.' },
    { title: 'Quality Control & Assurance', duration: '2 months', level: 'Professional', description: 'Industry-standard QC/QA practices and documentation.' },
    { title: 'Environmental Chemistry', duration: '3 months', level: 'Advanced', description: 'Water, soil, and air quality analysis techniques.' },
  ]

  const industryServices = [
    { title: 'Chemical Analysis', description: 'Comprehensive chemical testing for industries including water, soil, and product analysis.' },
    { title: 'Quality Control Testing', description: 'Purity testing, contamination analysis, and quality certification.' },
    { title: 'R&D Collaboration', description: 'Joint research projects with industrial partners for product development.' },
    { title: 'Consultancy Services', description: 'Expert consultation on chemical processes and laboratory setup.' },
  ]

  const careerOpportunities = [
    'Quality Control Analyst',
    'Research Scientist',
    'Laboratory Manager',
    'Environmental Analyst',
    'Chemical Process Engineer',
    'Academic Researcher',
    'Pharmaceutical Analyst',
    'Food Safety Analyst',
  ]

  const equipment = [
    'UV-Visible Spectrophotometer',
    'High Performance Liquid Chromatography (HPLC)',
    'Gas Chromatography (GC)',
    'Atomic Absorption Spectroscopy (AAS)',
    'pH Meters and Conductivity Meters',
    'Analytical Balances',
    'Centrifuges and Rotary Evaporators',
    'Fume Hoods and Safety Equipment',
  ]

  const researchAreas = [
    'Analytical Method Development',
    'Environmental Monitoring',
    'Material Characterization',
    'Green Chemistry Applications',
    'Polymer Analysis',
    'Food and Pharmaceutical Analysis',
  ]

  const whyChoose = [
    'Hands-on experience with modern analytical instruments',
    'Industry-recognized certification upon completion',
    'Small batch sizes for personalized attention',
    'Flexible scheduling for working professionals',
    'Direct pathway to research and industry positions',
    'Scholarship opportunities for deserving students',
  ]

  return (
    <>
      {/* Hero Section - Hexagonal Scientific Theme */}
      <section className="pt-32 pb-24 relative overflow-hidden bg-gradient-to-br from-teal-900 via-teal-800 to-cyan-900">
        {/* Hexagonal Pattern Background */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
                <polygon points="25,0 50,14.4 50,43.4 25,57.7 0,43.4 0,14.4" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-white"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexagons)"/>
          </svg>
        </div>
        
        {/* Floating Atoms Animation */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${15 + i * 15}%`,
                top: `${20 + (i % 3) * 25}%`,
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Atom className="w-8 h-8 text-cyan-400/30" />
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
            <div className="flex items-center gap-2 text-sm text-teal-200/70 mb-8">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <span>/</span>
              <span className="text-cyan-400">{department.shortTitle}</span>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                {/* Hexagonal Badge */}
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-teal-500 rotate-45 rounded-xl" />
                    <FlaskConical className="w-8 h-8 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  </div>
                  <div className="px-4 py-2 bg-cyan-500/20 border border-cyan-400/30 rounded-full backdrop-blur-sm">
                    <span className="text-cyan-300 font-medium text-sm">Applied Sciences Department</span>
                  </div>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  {department.title}
                </h1>
                <p className="text-xl text-teal-100/80 leading-relaxed mb-8">
                  {department.heroDescription}
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-500/30 transition-all">
                    Enroll Now
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="#programs" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all backdrop-blur-sm">
                    View Programs
                  </Link>
                </div>
              </div>

              {/* Hexagonal Stats Grid */}
              <div className="hidden lg:block">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: '8+', label: 'Lab Instruments' },
                    { value: '4', label: 'Programs' },
                    { value: '100%', label: 'Practical Training' },
                    { value: '6', label: 'Research Areas' },
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                      className="relative group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 rounded-2xl rotate-3 group-hover:rotate-6 transition-transform" />
                      <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
                        <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                        <div className="text-teal-200/70 text-sm">{stat.label}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Overview Section - Lab Card Style */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full" />
                <span className="text-teal-600 font-semibold uppercase tracking-wider text-sm">Department Overview</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Transforming Science Education Through Practice
              </h2>
              
              <p className="text-gray-600 leading-relaxed text-lg mb-8">
                {department.overview}
              </p>

              <div className="flex flex-wrap gap-3">
                {['Analytical Chemistry', 'Research Methods', 'Lab Training', 'Quality Control', 'Environmental Testing'].map((tag, i) => (
                  <span key={i} className="px-4 py-2 bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-200 rounded-full text-teal-700 text-sm font-medium">
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
              className="lg:col-span-2 space-y-4"
            >
              {keyFeatures.map((feature, index) => {
                const FeatureIcon = feature.icon;
                return (
                  <div
                    key={index}
                    className="group p-5 bg-gradient-to-r from-gray-50 to-white border border-gray-100 rounded-2xl hover:border-teal-300 hover:shadow-lg hover:shadow-teal-100/50 transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <FeatureIcon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                        <p className="text-gray-500 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Training Programs - Hexagonal Cards */}
      <section id="programs" className="py-20 bg-gradient-to-br from-gray-50 to-teal-50/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 rounded-full mb-4">
              <TestTube className="w-4 h-4 text-teal-600" />
              <span className="text-teal-700 font-medium text-sm">Training Programs</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry-Focused Programs
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive training designed to build practical skills and prepare you for successful careers in chemistry.
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
                className="group relative"
              >
                <div className="absolute -top-3 -right-3 w-24 h-24 bg-gradient-to-br from-teal-200/40 to-cyan-200/40 rounded-3xl rotate-12 group-hover:rotate-45 transition-transform duration-500" />
                
                <div className="relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-teal-300 hover:shadow-xl transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-100 to-cyan-100 flex items-center justify-center">
                        <span className="text-teal-600 font-bold">{String(index + 1).padStart(2, '0')}</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">{program.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{program.description}</p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-4">
                      <span className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-sm font-medium">
                        {program.duration}
                      </span>
                      <span className="text-gray-500 text-sm">
                        Level: <span className="text-gray-700 font-medium">{program.level}</span>
                      </span>
                    </div>
                    <ArrowRight className="w-5 h-5 text-teal-500 group-hover:translate-x-1 transition-transform" />
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
                <Building2 className="w-6 h-6 text-teal-600" />
                <h2 className="text-2xl font-bold text-gray-900">Industry Services</h2>
              </div>
              
              <p className="text-gray-600 mb-8">
                Professional testing, research, and consultancy services for industries requiring specialized expertise.
              </p>

              <div className="space-y-4">
                {industryServices.map((service, index) => (
                  <div key={index} className="group flex items-start gap-4 p-4 rounded-xl hover:bg-teal-50/50 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 mt-2 group-hover:scale-150 transition-transform" />
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
              <div className="bg-gradient-to-br from-teal-900 to-cyan-900 rounded-3xl p-8 text-white h-full">
                <div className="flex items-center gap-3 mb-6">
                  <Beaker className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-xl font-bold">Laboratory Equipment</h3>
                </div>
                
                <div className="grid grid-cols-1 gap-3">
                  {equipment.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="flex items-center gap-3 p-3 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                        <Atom className="w-4 h-4 text-cyan-400" />
                      </div>
                      <span className="text-teal-50 text-sm">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-cyan-50">
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
              Our training prepares you for diverse career paths in industry, research, and academia.
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
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-white rounded-2xl p-6 text-center border border-gray-100 group-hover:border-transparent group-hover:text-white transition-all">
                  <Users className="w-8 h-8 text-teal-500 mx-auto mb-3 group-hover:text-white transition-colors" />
                  <span className="font-medium text-gray-700 group-hover:text-white transition-colors">{career}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Areas & Why Choose */}
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
              <p className="text-gray-600 mb-6">
                Our department supports advanced research and PhD supervision in cutting-edge areas.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {researchAreas.map((area, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl border border-teal-100">
                    <BookOpen className="w-5 h-5 text-teal-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm font-medium">{area}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white"
            >
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <Award className="w-6 h-6 text-cyan-400" />
                Why Choose This Department?
              </h3>
              <div className="space-y-4">
                {whyChoose.map((reason, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-white" />
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
      <section className="py-20 bg-gradient-to-br from-teal-600 via-teal-700 to-cyan-800 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-64 h-64 bg-white/5 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-teal-100 max-w-2xl mx-auto mb-8 text-lg">
              Join KRTC's Chemistry department and gain the practical skills needed for a successful career. Scholarship opportunities available.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-teal-700 font-bold rounded-full hover:bg-cyan-50 transition-colors">
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
            <div />
            <Link href="/services" className="px-6 py-2 bg-white border border-gray-200 text-gray-700 font-medium rounded-full hover:border-teal-300 hover:text-teal-600 transition-colors">
              All Departments
            </Link>
            <Link href="/services/pharmaceutical" className="group flex items-center gap-3 text-gray-600 hover:text-teal-600 transition-colors">
              <div className="text-right">
                <div className="text-xs text-gray-400 uppercase tracking-wider">Next</div>
                <div className="font-semibold">Pharmaceutical</div>
              </div>
              <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center group-hover:bg-teal-500 transition-colors">
                <ArrowRight className="w-5 h-5 text-teal-600 group-hover:text-white transition-colors" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

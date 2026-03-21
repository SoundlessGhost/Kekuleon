'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Pill,
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
  ClipboardCheck,
  Factory,
} from 'lucide-react'

export default function PharmaceuticalPage() {
  const department = {
    title: 'Pharmaceutical Sciences and Drug Development',
    shortTitle: 'Pharmaceutical',
    icon: Pill,
    heroDescription: 'Develop expertise in drug development, pharmaceutical analysis, and quality control with industry-standard training and research opportunities.',
    overview: 'The Pharmaceutical Sciences department focuses on preparing students and professionals for careers in the pharmaceutical industry. Bangladesh\'s pharmaceutical sector is one of the fastest-growing in the region, and there is a critical need for trained professionals who can meet international standards. Our programs cover drug development, quality control, analytical testing, and regulatory compliance.',
  }

  const keyFeatures = [
    { icon: Microscope, title: 'Drug Analysis Lab', description: 'Specialized equipment for pharmaceutical testing and analysis.' },
    { icon: ClipboardCheck, title: 'GMP Training', description: 'Good Manufacturing Practice standards and compliance training.' },
    { icon: Factory, title: 'Industry Partners', description: 'Collaboration with leading pharmaceutical companies in Bangladesh.' },
    { icon: Award, title: 'Certification', description: 'Industry-recognized certifications for career advancement.' },
  ]

  const trainingPrograms = [
    { title: 'Pharmaceutical Analysis', duration: '3 months', level: 'Intermediate', description: 'Drug testing, dissolution studies, and stability analysis.' },
    { title: 'Quality Control in Pharma', duration: '2 months', level: 'Professional', description: 'QC protocols, documentation, and regulatory requirements.' },
    { title: 'Formulation Development', duration: '4 months', level: 'Advanced', description: 'Drug formulation, dosage forms, and pre-formulation studies.' },
    { title: 'Regulatory Affairs', duration: '2 months', level: 'Professional', description: 'Drug registration, compliance, and regulatory documentation.' },
  ]

  const industryServices = [
    { title: 'Drug Testing Services', description: 'Comprehensive analytical testing for pharmaceutical products.' },
    { title: 'Stability Studies', description: 'Accelerated and real-time stability testing as per ICH guidelines.' },
    { title: 'Method Validation', description: 'Analytical method development and validation services.' },
    { title: 'Contract Research', description: 'R&D support for pharmaceutical companies.' },
  ]

  const careerOpportunities = [
    'Quality Control Analyst',
    'Quality Assurance Officer',
    'Research Scientist',
    'Production Pharmacist',
    'Regulatory Affairs Specialist',
    'Drug Safety Associate',
    'Formulation Scientist',
    'Medical Science Liaison',
  ]

  const equipment = [
    'Dissolution Testing Apparatus',
    'HPLC with UV and PDA Detectors',
    'Spectrophotometers',
    'Stability Chambers',
    'Friability and Hardness Testers',
    'Karl Fischer Titrator',
    'Particle Size Analyzer',
    'Microbiological Testing Equipment',
  ]

  const researchAreas = [
    'Novel Drug Delivery Systems',
    'Bioavailability Studies',
    'Herbal Medicine Standardization',
    'Generic Drug Development',
    'Pharmaceutical Nanotechnology',
    'Pharmacokinetics Research',
  ]

  const whyChoose = [
    'Training aligned with Bangladesh pharmaceutical industry needs',
    'Practical experience with industry-standard equipment',
    'Direct recruitment pathways with pharma companies',
    'Research opportunities with leading institutions',
    'International collaboration for advanced training',
    'Affordable programs with scholarship options',
  ]

  const services = [
    'Drug development research',
    'Pharmaceutical analysis and quality control',
    'Analytical and quality control services',
    'Short-term training in pharmaceutical instrumentation',
    'Research supervision (UG, PG, PhD)',
    'Industry collaboration programs',
  ]

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
          >
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <span>/</span>
              <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
              <span>/</span>
              <span className="text-primary">{department.shortTitle}</span>
            </div>
            
            <div className="flex items-start gap-6 mb-6">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <department.icon className="w-10 h-10 text-primary" />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-sm text-primary font-medium">Department</span>
                </div>
                <h1 className="heading-display mb-4">{department.title}</h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
                  {department.heroDescription}
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <Link href="/contact" className="btn btn-primary rounded-full">
                Enroll Now <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link href="#programs" className="btn btn-outline-dark rounded-full">
                View Programs
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-lg mb-6">Department Overview</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {department.overview}
              </p>
              
              <div className="space-y-3">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </div>
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
                const FeatureIcon = feature.icon
                return (
                  <div key={index} className="card p-6 text-center hover:border-primary/30 transition-all">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <FeatureIcon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-500">{feature.description}</p>
                  </div>
                )
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Training Programs Section */}
      <section id="programs" className="section bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="heading-xl mb-4">Training Programs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Industry-focused training programs designed to build practical skills for the pharmaceutical sector.
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
                className="card p-6 hover:border-primary/30 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">{program.title}</h3>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                    {program.duration}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">Level:</span>
                  <span className="text-sm font-medium text-gray-700">{program.level}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Services Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-lg mb-6">Industry Services</h2>
              <p className="text-gray-600 mb-8">
                We provide professional testing and R&D services for pharmaceutical companies.
              </p>
              
              <div className="space-y-6">
                {industryServices.map((service, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-5 h-5 text-primary" />
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
              <div className="card p-8 bg-gray-50">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Laboratory Equipment</h3>
                <div className="grid grid-cols-1 gap-3">
                  {equipment.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg">
                      <Pill className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Career Opportunities Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="heading-xl mb-4">Career Opportunities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our training prepares you for diverse career paths in the pharmaceutical industry.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-4 gap-4">
            {careerOpportunities.map((career, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="card p-4 text-center hover:border-primary/30 transition-all"
              >
                <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                <span className="text-gray-700 font-medium">{career}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Areas Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-lg mb-6">Research Areas</h2>
              <p className="text-gray-600 mb-6">
                Our department supports advanced research and PhD supervision in pharmaceutical sciences.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {researchAreas.map((area, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                    <BookOpen className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-700">{area}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card p-8 border-l-4 border-l-primary"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Why Choose This Department?</h3>
              <div className="space-y-4">
                {whyChoose.map((reason, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{reason}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-xl text-white mb-6">Ready to Start Your Journey?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Join KRTC's Pharmaceutical Sciences department and gain the practical skills needed for a successful career.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn btn-primary rounded-full">
                Apply Now <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link href="/schooling" className="btn border border-white/20 text-white hover:bg-white/10 rounded-full">
                Scholarship Info
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-8 bg-gray-50 border-t border-gray-100">
        <div className="container-custom">
          <div className="flex justify-between items-center">
            <Link 
              href="/services/chemistry"
              className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <div>
                <div className="text-sm text-gray-400">Previous</div>
                <div className="font-medium">Chemistry</div>
              </div>
            </Link>
            
            <Link href="/services" className="btn btn-sm btn-outline-dark rounded-full">
              All Departments
            </Link>
            
            <Link 
              href="/services/polymer"
              className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors text-right"
            >
              <div>
                <div className="text-sm text-gray-400">Next</div>
                <div className="font-medium">Polymer Processing</div>
              </div>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

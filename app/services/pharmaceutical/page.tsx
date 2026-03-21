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
  Stethoscope,
  Shield,
  Activity,
  Heart,
  FileCheck,
  FlaskConical,
} from 'lucide-react'

export default function PharmaceuticalPage() {
  const department = {
    title: 'Pharmaceutical Sciences and Drug Development',
    shortTitle: 'Pharmaceutical',
    icon: Pill,
    heroDescription: 'Comprehensive training in drug development, quality control, regulatory compliance, and pharmaceutical manufacturing from industry experts.',
    overview: 'The Pharmaceutical Sciences department at KRTC provides rigorous training in drug formulation, quality assurance, and regulatory affairs. Our programs combine theoretical knowledge with hands-on laboratory experience, preparing students for careers in the pharmaceutical industry, research institutions, and regulatory agencies.',
  }

  const keyFeatures = [
    { icon: Shield, title: 'GMP Standards', description: 'Training aligned with Good Manufacturing Practice guidelines.' },
    { icon: FileCheck, title: 'Regulatory Focus', description: 'Understanding of DGDA and international regulatory requirements.' },
    { icon: Microscope, title: 'Advanced Labs', description: 'Modern pharmaceutical testing and formulation facilities.' },
    { icon: Globe, title: 'Global Standards', description: 'Curriculum aligned with WHO and FDA guidelines.' },
  ]

  const trainingPrograms = [
    { title: 'Drug Formulation & Development', duration: '4 months', level: 'Advanced', description: 'Solid, liquid, and semi-solid dosage form development.' },
    { title: 'Quality Control Analysis', duration: '3 months', level: 'Intermediate', description: 'Analytical testing methods for pharmaceutical products.' },
    { title: 'Regulatory Affairs', duration: '2 months', level: 'Professional', description: 'Drug registration, documentation, and compliance.' },
    { title: 'Stability Studies', duration: '2 months', level: 'Advanced', description: 'ICH guidelines and stability testing protocols.' },
  ]

  const industryServices = [
    { title: 'Drug Testing', description: 'Complete pharmaceutical analysis including assay, dissolution, and impurity testing.' },
    { title: 'Stability Studies', description: 'ICH-compliant stability testing for pharmaceutical products.' },
    { title: 'Method Development', description: 'Analytical method development and validation services.' },
    { title: 'Regulatory Consultancy', description: 'Guidance on drug registration and compliance requirements.' },
  ]

  const careerOpportunities = [
    'Quality Control Manager',
    'Regulatory Affairs Officer',
    'Formulation Scientist',
    'Production Manager',
    'Validation Specialist',
    'Clinical Research Associate',
    'Medical Representative',
    'Pharmacovigilance Officer',
  ]

  const equipment = [
    'Dissolution Testing Apparatus',
    'HPLC with UV/PDA Detector',
    'Tablet Hardness Tester',
    'Friability Tester',
    'Disintegration Apparatus',
    'Karl Fischer Titrator',
    'Stability Chambers',
    'Particle Size Analyzer',
  ]

  const researchAreas = [
    'Novel Drug Delivery Systems',
    'Bioequivalence Studies',
    'Herbal Drug Standardization',
    'Nanotechnology in Pharma',
    'Generic Drug Development',
    'Pharmacokinetics Research',
  ]

  const whyChoose = [
    'Industry-experienced faculty from leading pharma companies',
    'Hands-on training with pharmaceutical equipment',
    'Job placement support with partner companies',
    'Certification recognized by pharmaceutical industry',
    'Small batch sizes for quality learning',
    'Scholarship for pharmacy graduates',
  ]

  return (
    <>
      {/* Hero Section - Clinical Premium Theme */}
      <section className="pt-32 pb-28 relative overflow-hidden bg-gradient-to-b from-blue-950 via-blue-900 to-indigo-900">
        {/* Pill Pattern Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-16 bg-white rounded-full rotate-45" />
          <div className="absolute top-40 right-20 w-24 h-12 bg-white rounded-full -rotate-12" />
          <div className="absolute bottom-32 left-1/4 w-28 h-14 bg-white rounded-full rotate-30" />
          <div className="absolute top-1/3 right-1/3 w-20 h-10 bg-white rounded-full rotate-60" />
        </div>

        {/* Animated Pills */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${10 + i * 20}%`,
                top: `${15 + (i % 3) * 30}%`,
              }}
              animate={{
                y: [0, -15, 0],
                rotate: [0, 10, 0],
              }}
              transition={{
                duration: 5 + i,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="w-16 h-8 rounded-full bg-gradient-to-r from-blue-400/20 to-indigo-400/20 backdrop-blur-sm border border-white/10" />
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
            <div className="flex items-center gap-2 text-sm text-blue-200/70 mb-8">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <span>/</span>
              <span className="text-blue-300">{department.shortTitle}</span>
            </div>

            <div className="max-w-4xl">
              {/* Capsule Badge */}
              <div className="inline-flex items-center gap-3 mb-8">
                <div className="flex">
                  <div className="w-8 h-16 bg-blue-500 rounded-l-full" />
                  <div className="w-8 h-16 bg-indigo-400 rounded-r-full" />
                </div>
                <div className="px-6 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full backdrop-blur-sm">
                  <span className="text-blue-200 font-medium">Pharmaceutical Sciences</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {department.title}
              </h1>
              <p className="text-xl text-blue-100/80 leading-relaxed mb-8 max-w-3xl">
                {department.heroDescription}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-900 font-bold rounded-full hover:bg-blue-50 transition-all shadow-lg shadow-white/20">
                  Enroll Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="#programs" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-blue-400/40 text-white font-semibold rounded-full hover:bg-blue-400/20 transition-all">
                  View Programs
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Curved Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-white" style={{ clipPath: 'ellipse(70% 100% at 50% 100%)' }} />
      </section>

      {/* Stats Bar */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '4', label: 'Training Programs', icon: GraduationCap },
              { value: '8+', label: 'Lab Equipment', icon: Microscope },
              { value: 'GMP', label: 'Standards', icon: Shield },
              { value: '100%', label: 'Practical Focus', icon: Activity },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-gray-500 text-sm">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6">
                <Heart className="w-4 h-4 text-blue-600" />
                <span className="text-blue-700 font-medium text-sm">Department Overview</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Shaping the Future of Pharmaceutical Excellence
              </h2>
              
              <p className="text-gray-600 leading-relaxed text-lg mb-8">
                {department.overview}
              </p>

              <div className="grid grid-cols-2 gap-4">
                {keyFeatures.map((feature, index) => {
                  const FeatureIcon = feature.icon;
                  return (
                    <div key={index} className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
                      <FeatureIcon className="w-8 h-8 text-blue-600 mb-3" />
                      <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                      <p className="text-gray-500 text-sm">{feature.description}</p>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Pill Shaped Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative">
                {/* Large Capsule */}
                <div className="w-full h-96 flex items-center justify-center">
                  <div className="flex shadow-2xl">
                    <div className="w-40 h-80 bg-gradient-to-b from-blue-600 to-blue-700 rounded-l-full flex items-center justify-center">
                      <Pill className="w-16 h-16 text-white/50 rotate-90" />
                    </div>
                    <div className="w-40 h-80 bg-gradient-to-b from-indigo-400 to-indigo-500 rounded-r-full flex items-center justify-center">
                      <FlaskConical className="w-16 h-16 text-white/50" />
                    </div>
                  </div>
                </div>
                {/* Floating mini pills */}
                <motion.div
                  className="absolute top-10 right-10"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="flex">
                    <div className="w-6 h-12 bg-pink-400 rounded-l-full" />
                    <div className="w-6 h-12 bg-pink-300 rounded-r-full" />
                  </div>
                </motion.div>
                <motion.div
                  className="absolute bottom-20 left-10"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <div className="flex">
                    <div className="w-5 h-10 bg-emerald-400 rounded-l-full" />
                    <div className="w-5 h-10 bg-emerald-300 rounded-r-full" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Training Programs - Pill Cards */}
      <section id="programs" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Training Programs
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Industry-focused programs designed by pharmaceutical experts to prepare you for real-world challenges.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {trainingPrograms.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-[2rem] p-8 border border-gray-100 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100/50 transition-all h-full">
                  <div className="flex items-center gap-4 mb-6">
                    {/* Pill indicator */}
                    <div className="flex">
                      <div className="w-4 h-8 bg-blue-500 rounded-l-full" />
                      <div className="w-4 h-8 bg-indigo-400 rounded-r-full" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{program.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{program.description}</p>
                  
                  <div className="flex items-center gap-6">
                    <div className="px-4 py-2 bg-blue-50 rounded-full">
                      <span className="text-blue-700 font-semibold">{program.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                      <span className="w-2 h-2 rounded-full bg-indigo-400" />
                      {program.level}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Services */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Industry Services</h2>
              <p className="text-gray-600 mb-8">
                Professional pharmaceutical testing and consultancy services meeting international standards.
              </p>

              <div className="space-y-4">
                {industryServices.map((service, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-blue-50/50 transition-colors">
                    <div className="w-3 h-6 rounded-full bg-gradient-to-b from-blue-500 to-indigo-500 flex-shrink-0 mt-1" />
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
              className="lg:col-span-3"
            >
              <div className="bg-gradient-to-br from-blue-900 to-indigo-900 rounded-[2rem] p-8 text-white">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <Stethoscope className="w-6 h-6 text-blue-300" />
                  Laboratory Equipment
                </h3>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  {equipment.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="flex items-center gap-3 p-4 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-colors"
                    >
                      <div className="flex flex-shrink-0">
                        <div className="w-2 h-4 bg-blue-400 rounded-l-full" />
                        <div className="w-2 h-4 bg-indigo-300 rounded-r-full" />
                      </div>
                      <span className="text-blue-50 text-sm">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-blue-50">
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
              Launch your career in the pharmaceutical industry with our comprehensive training.
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
                className="group"
              >
                <div className="px-6 py-4 bg-white rounded-full border border-gray-200 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-100/50 transition-all flex items-center gap-3">
                  <div className="flex">
                    <div className="w-2 h-4 bg-blue-500 rounded-l-full group-hover:bg-blue-600 transition-colors" />
                    <div className="w-2 h-4 bg-indigo-400 rounded-r-full group-hover:bg-indigo-500 transition-colors" />
                  </div>
                  <span className="font-medium text-gray-700 group-hover:text-blue-700 transition-colors">{career}</span>
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
              <div className="space-y-3">
                {researchAreas.map((area, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl hover:from-blue-100 hover:to-indigo-100 transition-colors">
                    <BookOpen className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{area}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[2rem] p-8 text-white"
            >
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <Award className="w-6 h-6 text-blue-200" />
                Why Choose This Department?
              </h3>
              <div className="space-y-4">
                {whyChoose.map((reason, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-blue-100">{reason}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-32 h-16 bg-white/5 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 60 - 30}deg)`,
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
              Start Your Pharmaceutical Career
            </h2>
            <p className="text-blue-100 max-w-2xl mx-auto mb-8 text-lg">
              Join KRTC's Pharmaceutical department and gain industry-ready skills. Scholarships available for deserving candidates.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-700 font-bold rounded-full hover:bg-blue-50 transition-colors shadow-lg">
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
            <Link href="/services/chemistry" className="group flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                <ArrowLeft className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">Previous</div>
                <div className="font-semibold">Chemistry</div>
              </div>
            </Link>

            <Link href="/services" className="px-6 py-2 bg-white border border-gray-200 text-gray-700 font-medium rounded-full hover:border-blue-300 hover:text-blue-600 transition-colors">
              All Departments
            </Link>

            <Link href="/services/polymer" className="group flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors">
              <div className="text-right">
                <div className="text-xs text-gray-400 uppercase tracking-wider">Next</div>
                <div className="font-semibold">Polymer</div>
              </div>
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                <ArrowRight className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Heart,
  ArrowRight,
  ArrowLeft,
  Check,
  GraduationCap,
  Building2,
  Users,
  Stethoscope,
  BookOpen,
  Globe,
  Award,
  Activity,
  HeartPulse,
  Syringe,
  Thermometer,
  Cross,
  Sparkles,
  Plane,
  Languages,
} from 'lucide-react'

export default function NursingPage() {
  const department = {
    title: 'Nursing and Healthcare Sciences',
    shortTitle: 'Nursing',
    icon: Heart,
    heroDescription: 'Comprehensive healthcare training combining clinical skills, compassionate care, and international opportunities including pathways to Germany.',
    overview: 'The Nursing and Healthcare department at KRTC prepares caring professionals for rewarding careers in healthcare. Our programs combine clinical training with community health education, and offer unique pathways for international opportunities including nursing positions in Germany through our specialized language preparation program.',
  }

  const keyFeatures = [
    { icon: Stethoscope, title: 'Clinical Training', description: 'Hands-on training in nursing procedures and patient care.' },
    { icon: Heart, title: 'Compassionate Care', description: 'Building empathy and communication skills for healthcare.' },
    { icon: Globe, title: 'Germany Pathway', description: 'German language training (A1-B2) for nursing abroad.' },
    { icon: Cross, title: 'Health Benefit Card', description: 'Community healthcare access through our unique card system.' },
  ]

  const trainingPrograms = [
    { title: 'Basic Nursing Care', duration: '6 months', level: 'Beginner', description: 'Foundation course covering patient care, vital signs, and basic procedures.' },
    { title: 'Clinical Practice Training', duration: '4 months', level: 'Intermediate', description: 'Advanced procedures, medication administration, and emergency care.' },
    { title: 'Community Healthcare', duration: '3 months', level: 'All Levels', description: 'Public health, preventive care, and community outreach programs.' },
    { title: 'German Language for Nursing', duration: '6 months', level: 'A1-B2', description: 'Intensive German preparation for nursing positions in Germany.' },
  ]

  const industryServices = [
    { title: 'Health Benefit Card System', description: 'Community healthcare access program providing affordable medical services.' },
    { title: 'Community Health Camps', description: 'Regular health awareness and screening programs for local communities.' },
    { title: 'First Aid Training', description: 'Corporate and community first aid and emergency response training.' },
    { title: 'Healthcare Consultancy', description: 'Guidance for healthcare facility setup and staff training.' },
  ]

  const careerOpportunities = [
    'Staff Nurse',
    'Community Health Worker',
    'Nursing Assistant',
    'Home Care Provider',
    'Clinic Coordinator',
    'Health Educator',
    'Germany Nursing',
    'Emergency Care',
  ]

  const equipment = [
    'Patient Simulation Mannequins',
    'Vital Signs Monitors',
    'IV Training Equipment',
    'Wound Care Supplies',
    'CPR Training Kits',
    'Injection Practice Models',
    'Medical Diagnostic Tools',
    'First Aid Supplies',
  ]

  const researchAreas = [
    'Community Health Models',
    'Preventive Healthcare',
    'Nursing Education',
    'Patient Care Standards',
    'Healthcare Technology',
    'Mental Health Care',
  ]

  const whyChoose = [
    'Unique pathway to nursing careers in Germany',
    'Health Benefit Card system for community service',
    'Hands-on clinical training with simulations',
    'Experienced healthcare professionals as instructors',
    'Partnerships with local healthcare facilities',
    'Scholarship support for nursing students',
  ]

  const germanyProgram = {
    title: 'Germany Nursing Opportunity',
    description: 'Our specialized program prepares you for nursing positions in Germany, one of Europe\'s most sought-after healthcare destinations.',
    levels: ['A1 - Basic German', 'A2 - Elementary', 'B1 - Intermediate', 'B2 - Professional'],
    benefits: ['High earning potential in Euros', 'Excellent working conditions', 'Path to permanent residency', 'World-class healthcare experience'],
  }

  return (
    <>
      {/* Hero Section - Soft Healthcare Caring Theme */}
      <section className="pt-32 pb-28 relative overflow-hidden bg-gradient-to-br from-emerald-800 via-teal-700 to-cyan-800">
        {/* Soft Organic Shapes Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large soft circles */}
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 -right-32 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 left-1/3 w-72 h-72 bg-teal-400/10 rounded-full blur-3xl" />
        </div>

        {/* Floating Hearts Animation */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${5 + i * 12}%`,
                top: `${20 + (i % 4) * 20}%`,
              }}
              animate={{
                y: [0, -15, 0],
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            >
              <Heart className={`${i % 2 === 0 ? 'w-6 h-6' : 'w-4 h-4'} text-white fill-current`} />
            </motion.div>
          ))}
        </div>

        {/* Pulse Line */}
        <div className="absolute bottom-1/3 left-0 right-0">
          <svg className="w-full h-24 opacity-10" viewBox="0 0 1440 96" fill="none">
            <motion.path
              d="M0 48 L200 48 L250 20 L280 75 L310 30 L340 60 L370 48 L1440 48"
              stroke="white"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </svg>
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-emerald-200/70 mb-8">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <span>/</span>
              <span className="text-emerald-300">{department.shortTitle}</span>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                {/* Heart Badge */}
                <div className="inline-flex items-center gap-4 mb-8">
                  <div className="relative">
                    <motion.div
                      animate={{ scale: [1, 1.15, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="w-14 h-14 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg shadow-rose-500/30"
                    >
                      <HeartPulse className="w-7 h-7 text-white" />
                    </motion.div>
                  </div>
                  <div className="px-5 py-2.5 bg-white/10 border border-white/20 rounded-full backdrop-blur-sm">
                    <span className="text-emerald-100 font-medium">Healthcare & Community</span>
                  </div>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  {department.title}
                </h1>
                <p className="text-xl text-emerald-100/90 leading-relaxed mb-8">
                  {department.heroDescription}
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-emerald-700 font-bold rounded-full hover:bg-emerald-50 transition-all shadow-lg shadow-white/20">
                    <Heart className="w-5 h-5 fill-current" />
                    Join Our Program
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="#germany" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all backdrop-blur-sm">
                    <Plane className="w-5 h-5" />
                    Germany Pathway
                  </Link>
                </div>
              </div>

              {/* Healthcare Visual */}
              <div className="hidden lg:flex justify-center">
                <div className="relative">
                  {/* Main circle */}
                  <motion.div
                    className="w-72 h-72 rounded-full bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm border border-white/20 flex items-center justify-center"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="w-48 h-48 rounded-full bg-gradient-to-br from-emerald-400/30 to-teal-400/30 flex items-center justify-center">
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Cross className="w-20 h-20 text-white" />
                      </motion.div>
                    </div>
                  </motion.div>
                  
                  {/* Orbiting icons */}
                  {[
                    { icon: Stethoscope, angle: 0 },
                    { icon: Syringe, angle: 90 },
                    { icon: Thermometer, angle: 180 },
                    { icon: Activity, angle: 270 },
                  ].map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={i}
                        className="absolute w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center"
                        style={{
                          top: `calc(50% + ${Math.sin(item.angle * Math.PI / 180) * 160}px - 24px)`,
                          left: `calc(50% + ${Math.cos(item.angle * Math.PI / 180) * 160}px - 24px)`,
                        }}
                        animate={{ 
                          y: [0, -5, 0],
                        }}
                        transition={{ duration: 2, delay: i * 0.5, repeat: Infinity }}
                      >
                        <Icon className="w-6 h-6 text-emerald-600" />
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Soft Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-24">
            <path d="M0 100C240 60 480 80 720 70C960 60 1200 80 1440 60V100H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Health Benefit Card Highlight */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-rose-50 via-pink-50 to-red-50 rounded-3xl p-8 md:p-12 border border-rose-100"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-100 rounded-full mb-6">
                  <Sparkles className="w-4 h-4 text-rose-600" />
                  <span className="text-rose-700 font-medium text-sm">Unique Initiative</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Health Benefit Card System</h2>
                <p className="text-gray-600 mb-6">
                  KRTC's innovative Health Benefit Card provides community members with affordable access to healthcare services, creating a sustainable model for community wellness.
                </p>
                <ul className="space-y-3">
                  {['Affordable healthcare access', 'Community wellness programs', 'Preventive health services', 'Emergency care support'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700">
                      <div className="w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center">
                        <Heart className="w-3 h-3 text-rose-500 fill-current" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-center">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="w-72 h-44 bg-gradient-to-br from-rose-500 via-pink-500 to-red-500 rounded-2xl shadow-2xl shadow-rose-200 p-6 text-white relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-4">
                      <Heart className="w-8 h-8 fill-current" />
                      <span className="font-bold text-lg">KRTC Health</span>
                    </div>
                    <div className="text-rose-100 text-sm mb-2">Benefit Card</div>
                    <div className="text-2xl font-bold tracking-wider">•••• •••• •••• 1234</div>
                    <div className="mt-3 text-sm text-rose-100">Community Healthcare Access</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-gradient-to-b from-white to-emerald-50/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <HeartPulse className="w-6 h-6 text-emerald-600" />
                <span className="text-emerald-600 font-semibold uppercase tracking-wider text-sm">Department Overview</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Caring for Communities with Compassion
              </h2>
              
              <p className="text-gray-600 leading-relaxed text-lg mb-8">
                {department.overview}
              </p>

              <div className="flex flex-wrap gap-3">
                {['Patient Care', 'Clinical Skills', 'Community Health', 'Germany Pathway', 'Health Education'].map((tag, i) => (
                  <span key={i} className="px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full text-emerald-700 text-sm font-medium">
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
                    className="group p-6 bg-white rounded-3xl shadow-sm border border-gray-100 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-100/50 transition-all"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-emerald-200">
                      <FeatureIcon className="w-7 h-7 text-white" />
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

      {/* Germany Pathway Section */}
      <section id="germany" className="py-20 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="flex gap-1">
                    <div className="w-6 h-4 bg-black rounded-sm" />
                    <div className="w-6 h-4 bg-red-600 rounded-sm" />
                    <div className="w-6 h-4 bg-yellow-400 rounded-sm" />
                  </div>
                  <span className="text-amber-700 font-semibold">Germany Nursing Opportunity</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Your Pathway to Nursing in Germany
                </h2>
                
                <p className="text-gray-600 leading-relaxed text-lg mb-8">
                  {germanyProgram.description}
                </p>

                {/* Language Levels */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {germanyProgram.levels.map((level, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      className="flex items-center gap-2"
                    >
                      <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                        <Languages className="w-4 h-4 text-amber-600" />
                      </div>
                      <span className="text-gray-700 font-medium">{level}</span>
                      {i < germanyProgram.levels.length - 1 && (
                        <ArrowRight className="w-4 h-4 text-amber-400" />
                      )}
                    </motion.div>
                  ))}
                </div>

                <Link href="/contact" className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-full hover:shadow-lg hover:shadow-amber-500/30 transition-all">
                  <Plane className="w-5 h-5" />
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {germanyProgram.benefits.map((benefit, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="bg-white p-6 rounded-2xl shadow-sm border border-amber-100 hover:shadow-lg transition-all"
                  >
                    <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center mb-4">
                      <Check className="w-5 h-5 text-amber-600" />
                    </div>
                    <p className="text-gray-700 font-medium">{benefit}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Training Programs */}
      <section id="programs" className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full mb-4">
              <GraduationCap className="w-4 h-4 text-emerald-600" />
              <span className="text-emerald-700 font-medium text-sm">Training Programs</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Compassionate Care Training
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive programs combining clinical skills with compassionate patient care.
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
                <div className="bg-gradient-to-br from-white to-emerald-50/30 rounded-3xl p-8 border border-emerald-100 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-100/50 transition-all h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-200"
                    >
                      <Heart className="w-6 h-6 text-white fill-current" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-900">{program.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{program.description}</p>
                  
                  <div className="flex items-center gap-4">
                    <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full font-semibold text-sm">
                      {program.duration}
                    </span>
                    <span className="px-3 py-1 bg-teal-50 text-teal-600 rounded-full text-sm">
                      {program.level}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Services & Equipment */}
      <section className="py-20 bg-emerald-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Building2 className="w-6 h-6 text-emerald-600" />
                <h2 className="text-2xl font-bold text-gray-900">Community Services</h2>
              </div>
              
              <p className="text-gray-600 mb-8">
                Healthcare services and programs supporting community wellness.
              </p>

              <div className="space-y-4">
                {industryServices.map((service, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4 p-5 bg-white rounded-2xl shadow-sm border border-emerald-100 hover:shadow-lg transition-all"
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center flex-shrink-0">
                      <Heart className="w-5 h-5 text-white fill-current" />
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
              <div className="bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 rounded-3xl p-8 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <Stethoscope className="w-6 h-6 text-emerald-200" />
                  <h3 className="text-xl font-bold">Training Equipment</h3>
                </div>
                
                <div className="grid grid-cols-1 gap-3">
                  {equipment.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="flex items-center gap-4 p-4 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                        <Activity className="w-4 h-4 text-emerald-200" />
                      </div>
                      <span className="text-emerald-50">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-20 bg-white">
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
              Build a rewarding career in healthcare with opportunities locally and internationally.
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
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <div className="px-6 py-4 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-full border border-emerald-200 hover:border-emerald-400 hover:shadow-lg transition-all flex items-center gap-3">
                  <Heart className="w-5 h-5 text-emerald-500 fill-current group-hover:scale-110 transition-transform" />
                  <span className="font-medium text-gray-700">{career}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research & Why Choose */}
      <section className="py-20 bg-gradient-to-b from-white to-emerald-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Focus Areas</h2>
              <div className="grid grid-cols-2 gap-4">
                {researchAreas.map((area, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-emerald-100 shadow-sm">
                    <BookOpen className="w-5 h-5 text-emerald-600 flex-shrink-0" />
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
              className="bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-600 rounded-3xl p-8 text-white"
            >
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <Award className="w-6 h-6 text-emerald-200" />
                Why Choose This Department?
              </h3>
              <div className="space-y-4">
                {whyChoose.map((reason, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Heart className="w-3 h-3 text-white fill-current" />
                    </div>
                    <span className="text-emerald-50">{reason}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 relative overflow-hidden">
        {/* Soft circles */}
        <div className="absolute inset-0">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center"
            >
              <Heart className="w-10 h-10 text-white fill-current" />
            </motion.div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Start Your Healthcare Journey
            </h2>
            <p className="text-emerald-100 max-w-2xl mx-auto mb-8 text-lg">
              Join KRTC's Nursing department and make a difference in people's lives. Germany pathway and scholarships available.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-emerald-700 font-bold rounded-full hover:bg-emerald-50 transition-colors shadow-lg">
                <Heart className="w-5 h-5 fill-current" />
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
            <Link href="/services/textile" className="group flex items-center gap-3 text-gray-600 hover:text-emerald-600 transition-colors">
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center group-hover:bg-emerald-500 transition-colors">
                <ArrowLeft className="w-5 h-5 text-emerald-600 group-hover:text-white transition-colors" />
              </div>
              <div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">Previous</div>
                <div className="font-semibold">Textile</div>
              </div>
            </Link>

            <Link href="/services" className="px-6 py-2 bg-white border border-gray-200 text-gray-700 font-medium rounded-full hover:border-emerald-300 hover:text-emerald-600 transition-colors">
              All Departments
            </Link>

            <Link href="/services/chemistry" className="group flex items-center gap-3 text-gray-600 hover:text-emerald-600 transition-colors">
              <div className="text-right">
                <div className="text-xs text-gray-400 uppercase tracking-wider">Next</div>
                <div className="font-semibold">Chemistry</div>
              </div>
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center group-hover:bg-emerald-500 transition-colors">
                <ArrowRight className="w-5 h-5 text-emerald-600 group-hover:text-white transition-colors" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

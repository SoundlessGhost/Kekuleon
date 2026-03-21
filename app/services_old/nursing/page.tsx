'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Heart,
  ArrowRight,
  ArrowLeft,
  Check,
  Building2,
  Users,
  BookOpen,
  Globe,
  Award,
  Stethoscope,
  Languages,
  HeartHandshake,
} from 'lucide-react'

export default function NursingPage() {
  const department = {
    title: 'Nursing and Community Healthcare',
    shortTitle: 'Nursing & Healthcare',
    icon: Heart,
    heroDescription: 'Pursue a rewarding career in healthcare with professional nursing training, community service experience, and international placement opportunities.',
    overview: 'The Nursing and Community Healthcare department combines professional nursing education with direct community service. We train compassionate healthcare professionals while providing essential services to underserved populations. Our programs include German language preparation for students seeking international nursing opportunities in Germany and other countries.',
  }

  const keyFeatures = [
    { icon: Stethoscope, title: 'Clinical Training', description: 'Hands-on clinical practice with community healthcare exposure.' },
    { icon: HeartHandshake, title: 'Community Service', description: 'Direct service to underprivileged families through Health Benefit Cards.' },
    { icon: Languages, title: 'German Language', description: 'Language preparation for international nursing opportunities.' },
    { icon: Globe, title: 'Global Opportunities', description: 'Pathways to nursing careers in Germany and abroad.' },
  ]

  const trainingPrograms = [
    { title: 'Basic Nursing Care', duration: '6 months', level: 'Beginner', description: 'Fundamentals of patient care, hygiene, and vital signs.' },
    { title: 'Clinical Practice', duration: '4 months', level: 'Intermediate', description: 'Hospital procedures, medication, and patient management.' },
    { title: 'Community Healthcare', duration: '3 months', level: 'All Levels', description: 'Primary healthcare, preventive care, and health education.' },
    { title: 'German for Nurses', duration: '6 months', level: 'All Levels', description: 'German language training for international nursing careers.' },
  ]

  const industryServices = [
    { title: 'Community Health Camps', description: 'Regular health check-ups and awareness programs in villages.' },
    { title: 'Home Healthcare', description: 'Nursing care services for elderly and patients at home.' },
    { title: 'Health Benefit Card', description: 'Subsidized healthcare for underprivileged families.' },
    { title: 'Health Education', description: 'Community awareness programs on hygiene and preventive care.' },
  ]

  const careerOpportunities = [
    'Staff Nurse',
    'Community Health Worker',
    'Home Care Nurse',
    'Nursing Assistant',
    'Healthcare Coordinator',
    'International Nurse (Germany)',
    'Clinic Manager',
    'Health Educator',
  ]

  const equipment = [
    'Patient Simulation Mannequins',
    'Vital Signs Monitors',
    'Injection and IV Training Kits',
    'Wound Care Supplies',
    'Basic Diagnostic Equipment',
    'First Aid Training Kits',
    'Medical Beds and Wheelchairs',
    'Sterilization Equipment',
  ]

  const researchAreas = [
    'Community Health Interventions',
    'Nursing Education Methods',
    'Healthcare Access Studies',
    'Preventive Care Programs',
    'Geriatric Nursing',
    'Rural Healthcare Delivery',
  ]

  const whyChoose = [
    'Combination of training and community service',
    'German language preparation for overseas opportunities',
    'Health Benefit Card system for social impact',
    'Clinical practice with community exposure',
    'Affordable training with scholarship options',
    'Growing demand for trained healthcare workers',
  ]

  const services = [
    'Nursing education and training programs',
    'Community-based healthcare services',
    'Clinical practice with academic instruction',
    'Advanced nursing research',
    'German language preparation',
    'Health Benefit Card System',
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh-gradient opacity-60" />
        <div className="grid-pattern" />
        
        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
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
                <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">{department.heroDescription}</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <Link href="/contact" className="btn btn-primary rounded-full">Enroll Now <ArrowRight className="w-4 h-4 ml-2" /></Link>
              <Link href="#programs" className="btn btn-outline-dark rounded-full">View Programs</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="heading-lg mb-6">Department Overview</h2>
              <p className="text-gray-600 leading-relaxed mb-6">{department.overview}</p>
              <div className="space-y-3">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-2 gap-4">
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

      {/* Health Benefit Card Highlight */}
      <section className="py-12 bg-primary/5">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="card p-8 border-l-4 border-l-primary bg-white">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <HeartHandshake className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Health Benefit Card System</h3>
                <p className="text-gray-600 mb-4">
                  KRTC provides Health Benefit Cards to selected underprivileged families, giving them access to defined healthcare and nursing services. 
                  This program combines student training with direct community impact, ensuring that our nursing students gain real-world experience while serving those in need.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm">Free Health Check-ups</span>
                  <span className="px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm">Subsidized Treatment</span>
                  <span className="px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm">Preventive Care</span>
                  <span className="px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm">Health Education</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Training Programs */}
      <section id="programs" className="section bg-gray-50">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="heading-xl mb-4">Training Programs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive nursing training with international opportunities.</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {trainingPrograms.map((program, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="card p-6 hover:border-primary/30 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">{program.title}</h3>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">{program.duration}</span>
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

      {/* Germany Opportunity Highlight */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 text-white mb-4">
                  <Globe className="w-4 h-4" />
                  <span className="text-sm font-medium">International Opportunity</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Nursing Career in Germany</h3>
                <p className="text-gray-600 mb-6">
                  Germany has a high demand for qualified nurses. Our German language program prepares you for nursing positions in Germany with comprehensive language training (A1-B2 levels) and cultural orientation.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">6-month intensive German course</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Cultural and professional orientation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Placement support in German hospitals</span>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center">
                <div className="w-48 h-48 rounded-full bg-blue-600/10 flex items-center justify-center">
                  <Languages className="w-24 h-24 text-blue-600" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Community Services */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="heading-lg mb-6">Community Services</h2>
              <p className="text-gray-600 mb-8">Healthcare services for underserved communities.</p>
              <div className="space-y-6">
                {industryServices.map((service, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Heart className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{service.title}</h3>
                      <p className="text-gray-500 text-sm">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="card p-8 bg-white">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Training Facilities</h3>
                <div className="grid grid-cols-1 gap-3">
                  {equipment.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <Stethoscope className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="heading-xl mb-4">Career Opportunities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Diverse career paths in healthcare locally and internationally.</p>
          </motion.div>
          
          <div className="grid md:grid-cols-4 gap-4">
            {careerOpportunities.map((career, index) => (
              <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="card p-4 text-center hover:border-primary/30 transition-all">
                <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                <span className="text-gray-700 font-medium">{career}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research & Why Choose */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="heading-lg mb-6">Research Areas</h2>
              <p className="text-gray-600 mb-6">Research in community health and nursing education.</p>
              <div className="grid grid-cols-2 gap-4">
                {researchAreas.map((area, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-lg">
                    <BookOpen className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-700">{area}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="card p-8 border-l-4 border-l-primary bg-white">
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

      {/* CTA */}
      <section className="section bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="container-custom text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="heading-xl text-white mb-6">Start Your Healthcare Career</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">Join KRTC's Nursing department for a meaningful career in healthcare with local and international opportunities.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn btn-primary rounded-full">Apply Now <ArrowRight className="w-4 h-4 ml-2" /></Link>
              <Link href="/schooling" className="btn border border-white/20 text-white hover:bg-white/10 rounded-full">Scholarship Info</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-8 bg-gray-50 border-t border-gray-100">
        <div className="container-custom">
          <div className="flex justify-between items-center">
            <Link href="/services/textile" className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <div><div className="text-sm text-gray-400">Previous</div><div className="font-medium">Textile Testing</div></div>
            </Link>
            <Link href="/services" className="btn btn-sm btn-outline-dark rounded-full">All Departments</Link>
            <div />
          </div>
        </div>
      </section>
    </>
  )
}

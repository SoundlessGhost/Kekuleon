'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  FlaskConical,
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
  Beaker,
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

  const services = [
    'Advanced analytical chemistry research',
    'Research methodology training',
    'Laboratory instrumentation training',
    'Instrumental analysis techniques',
    'Quality control and assurance methods',
    'Environmental chemistry applications',
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
            {/* Breadcrumb */}
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
              Industry-focused training programs designed to build practical skills and prepare you for successful careers.
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
                We provide professional testing, research, and consultancy services for industries requiring specialized expertise.
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
                      <Beaker className="w-5 h-5 text-primary flex-shrink-0" />
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
              Our training prepares you for diverse career paths in industry, research, and academia.
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
                Our department supports advanced research and PhD supervision in cutting-edge areas relevant to industry and academia.
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
              Join KRTC's Chemistry department and gain the practical skills needed for a successful career. 
              Scholarship opportunities available for deserving students.
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

      {/* Navigation Between Departments */}
      <section className="py-8 bg-gray-50 border-t border-gray-100">
        <div className="container-custom">
          <div className="flex justify-between items-center">
            <div />
            
            <Link 
              href="/services"
              className="btn btn-sm btn-outline-dark"
            >
              All Departments
            </Link>
            
            <Link 
              href="/services/pharmaceutical"
              className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors text-right"
            >
              <div>
                <div className="text-sm text-gray-400">Next</div>
                <div className="font-medium">Pharmaceutical</div>
              </div>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

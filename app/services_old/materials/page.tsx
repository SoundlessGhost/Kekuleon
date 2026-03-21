'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Atom,
  ArrowRight,
  ArrowLeft,
  Check,
  GraduationCap,
  Building2,
  Users,
  Microscope,
  BookOpen,
  Award,
} from 'lucide-react'

export default function MaterialsPage() {
  const department = {
    title: 'Materials Science and Engineering Applications',
    shortTitle: 'Materials Science',
    icon: Atom,
    heroDescription: 'Explore material characterization, performance analysis, and engineering applications with cutting-edge analytical instruments and expert guidance.',
    overview: 'The Materials Science department provides advanced training in material testing, characterization, and performance analysis. Materials science is fundamental to industries ranging from construction to electronics, and our programs equip students with the skills to analyze, develop, and improve materials. We serve students, researchers, and industries requiring materials expertise.',
  }

  const keyFeatures = [
    { icon: Atom, title: 'Advanced Analysis', description: 'Structural, thermal, and mechanical characterization capabilities.' },
    { icon: Microscope, title: 'Microscopy Lab', description: 'Optical and electron microscopy for microstructure analysis.' },
    { icon: Building2, title: 'Multi-Industry', description: 'Applications across construction, electronics, and manufacturing.' },
    { icon: GraduationCap, title: 'Research Focus', description: 'PhD-level research support and supervision.' },
  ]

  const trainingPrograms = [
    { title: 'Material Characterization', duration: '3 months', level: 'Intermediate', description: 'Thermal, mechanical, and structural analysis techniques.' },
    { title: 'Microscopy Techniques', duration: '2 months', level: 'Advanced', description: 'Sample preparation, imaging, and analysis methods.' },
    { title: 'Metallography', duration: '2 months', level: 'Professional', description: 'Metal structure analysis and phase identification.' },
    { title: 'Composites Testing', duration: '3 months', level: 'Advanced', description: 'Testing of composite materials and failure analysis.' },
  ]

  const industryServices = [
    { title: 'Material Testing', description: 'Comprehensive mechanical and physical property testing.' },
    { title: 'Failure Analysis', description: 'Investigation of material failures and recommendations.' },
    { title: 'Material Selection', description: 'Consultation on optimal material choices for applications.' },
    { title: 'Quality Certification', description: 'Testing and certification for construction and manufacturing.' },
  ]

  const careerOpportunities = [
    'Materials Engineer',
    'Quality Analyst',
    'Research Scientist',
    'Testing Lab Manager',
    'Product Development Engineer',
    'Failure Analysis Specialist',
    'Technical Consultant',
    'Academic Researcher',
  ]

  const equipment = [
    'Universal Testing Machine',
    'Hardness Testers (Rockwell, Brinell, Vickers)',
    'Metallurgical Microscope',
    'XRF Analyzer',
    'Impact Testing Machine',
    'Salt Spray Chamber',
    'Thickness Gauges',
    'Surface Roughness Tester',
  ]

  const researchAreas = [
    'Advanced Composites',
    'Nanomaterials',
    'Corrosion Studies',
    'Biomaterials',
    'Smart Materials',
    'Surface Engineering',
  ]

  const whyChoose = [
    'Comprehensive material analysis capabilities',
    'Industry-standard testing facilities',
    'Cross-industry applications',
    'Research collaboration with universities',
    'Certification programs recognized by industry',
    'Experienced faculty from research backgrounds',
  ]

  const services = [
    'Material testing and characterization',
    'Performance analysis',
    'Applied materials research',
    'Short-term training in analytical instruments',
    'Advanced research supervision',
    'Industry collaboration for materials development',
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

      {/* Training Programs */}
      <section id="programs" className="section bg-gray-50">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="heading-xl mb-4">Training Programs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Specialized training in material testing and characterization.</p>
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

      {/* Industry Services */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="heading-lg mb-6">Industry Services</h2>
              <p className="text-gray-600 mb-8">Professional material testing and analysis services.</p>
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
            
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="card p-8 bg-gray-50">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Laboratory Equipment</h3>
                <div className="grid grid-cols-1 gap-3">
                  {equipment.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg">
                      <Atom className="w-5 h-5 text-primary flex-shrink-0" />
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
      <section className="section bg-gray-50">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="heading-xl mb-4">Career Opportunities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Careers in materials engineering and testing.</p>
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
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="heading-lg mb-6">Research Areas</h2>
              <p className="text-gray-600 mb-6">Advanced research in materials science and engineering.</p>
              <div className="grid grid-cols-2 gap-4">
                {researchAreas.map((area, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                    <BookOpen className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-700">{area}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="card p-8 border-l-4 border-l-primary">
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
            <h2 className="heading-xl text-white mb-6">Ready to Start Your Journey?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">Join KRTC's Materials Science department for advanced training in materials analysis.</p>
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
            <Link href="/services/polymer" className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <div><div className="text-sm text-gray-400">Previous</div><div className="font-medium">Polymer Processing</div></div>
            </Link>
            <Link href="/services" className="btn btn-sm btn-outline-dark rounded-full">All Departments</Link>
            <Link href="/services/textile" className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors text-right">
              <div><div className="text-sm text-gray-400">Next</div><div className="font-medium">Textile Testing</div></div>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

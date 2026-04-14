"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Check,
  X,
  Phone,
  MessageCircle,
} from "lucide-react";

// --- Data (all content preserved) ---
const department = {
  title: "Polymer and Plastic Processing Technologies",
  shortTitle: "Polymer Processing",
  heroDescription:
    "Master polymer processing techniques, plastic manufacturing, and quality control with hands-on training on industrial equipment.",
  overview:
    "The Polymer Processing department at KRTC provides comprehensive training in plastic manufacturing, polymer testing, and quality control. Our programs prepare students for careers in Bangladesh's growing plastic and packaging industry, with pathways to higher education abroad in polymer science and materials engineering.",
};

const keyFeatures = [
  "Processing Techniques — Injection molding, extrusion, and blow molding training",
  "Quality Testing — Polymer testing and quality control methodologies",
  "Sustainable Practices — Recycling and eco-friendly polymer processing",
  "Industry Standards — Training aligned with ISO and ASTM standards",
];

const trainingTopics = [
  "Polymer Chemistry Fundamentals", "Injection Molding", "Extrusion Processing",
  "Blow Molding Techniques", "Quality Control & Testing", "Mold Design Basics",
  "Process Optimization", "Polymer Identification", "Recycling Technologies",
  "Industrial Safety",
];

const equipment = [
  "Injection Molding Machine", "Single Screw Extruder",
  "Blow Molding Machine", "MFI (Melt Flow Index) Tester",
  "Universal Testing Machine", "Impact Tester",
  "Moisture Analyzer", "Color Matching Cabinet",
];

const researchAreas = [
  "Biodegradable Polymers", "Polymer Composites", "Recycling Technologies",
  "Process Optimization", "Packaging Innovation", "Quality Enhancement",
];

const careerPathways = [
  {
    title: "Higher Education Abroad",
    description: "Pursue advanced degrees at international universities",
    opportunities: ["PhD in Polymer Science", "Masters in Plastics Engineering", "Research Fellowship Programs", "Materials Engineering Certification"],
  },
  {
    title: "Academic Career Path",
    description: "Build a career in teaching and research institutions",
    opportunities: ["University Lecturer", "Research Scientist", "Polymer Researcher", "Lab Director"],
  },
  {
    title: "Industry Career Path",
    description: "Join leading plastic manufacturing companies",
    opportunities: ["Process Engineer", "Quality Control Manager", "Production Supervisor", "R&D Specialist"],
  },
];

const communityServices = [
  { title: "Plastic Recycling Awareness", description: "Community education programs on plastic waste management and recycling." },
  { title: "SME Support Program", description: "Technical assistance for small plastic manufacturing businesses." },
  { title: "Student Industry Tours", description: "Factory visits and industry exposure for polytechnic students." },
  { title: "Environmental Workshops", description: "Training on sustainable practices and eco-friendly alternatives." },
];

const whyChoose = [
  "Hands-on training on industrial equipment",
  "Industry-experienced instructors",
  "Direct pathway to international higher education",
  "Strong connections with plastic industry",
  "Focus on sustainable and green technologies",
  "Scholarship support for deserving students",
];

// --- Section wrapper ---
function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section ref={ref} className={className}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </section>
  );
}

export default function PolymerPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalStep, setModalStep] = useState<"info" | "form" | "success">("info");
  const [selectedProgram, setSelectedProgram] = useState<"short" | "long">("short");

  const openModal = () => { setIsModalOpen(true); setModalStep("info"); };
  const closeModal = () => { setIsModalOpen(false); setModalStep("info"); };

  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-16 bg-white">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <span>/</span>
              <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
              <span>/</span>
              <span className="text-gray-600">{department.shortTitle}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-5 max-w-3xl">
              {department.title}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl">
              {department.heroDescription}
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <button onClick={openModal} className="btn btn-primary group">
                Apply Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <Link href="#programs" className="btn btn-outline-dark">View Programs</Link>
            </div>

            {/* Key features as text */}
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
              {keyFeatures.map((f) => (
                <div key={f} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  {f}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview + Research Areas */}
      <Section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="heading-lg mb-5">Department Overview</h2>
              <p className="text-gray-600 leading-relaxed mb-6">{department.overview}</p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-5">Research Areas</h3>
              <div className="space-y-3">
                {researchAreas.map((area) => (
                  <div key={area} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span className="font-medium text-gray-700">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Training Programs */}
      <Section className="section bg-white" >
        <div className="container-custom" id="programs">
          <h2 className="heading-lg mb-2">Training Programs</h2>
          <p className="text-gray-600 mb-10 max-w-2xl">
            Comprehensive hands-on training in plastic manufacturing, processing, and quality control.
          </p>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Duration options */}
            <div className="space-y-5">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Choose Your Path</h3>

              <div className="p-5 border-2 border-amber-200 bg-amber-50/50 rounded-xl">
                <h4 className="font-bold text-gray-900">Short Term — <span className="text-amber-600">4 Months</span></h4>
                <p className="text-sm text-gray-600 mt-1">Intensive practical training in polymer processing, molding, and quality control.</p>
              </div>

              <div className="p-5 border-2 border-emerald-200 bg-emerald-50/50 rounded-xl">
                <h4 className="font-bold text-gray-900">
                  Long Term — <span className="text-emerald-600">6 Months</span>
                  <span className="ml-2 px-2 py-0.5 bg-emerald-200 text-emerald-800 text-xs font-medium rounded-full">+ Research</span>
                </h4>
                <p className="text-sm text-gray-600 mt-1">Full training + Academic Research Project for PhD preparation & higher education abroad.</p>
              </div>

              <p className="text-sm text-gray-500 border-l-2 border-gray-200 pl-4">
                Both Short & Long Term students train together for the first 4 months. Long Term students continue with a research project for 2 additional months.
              </p>

              <button onClick={openModal} className="btn btn-primary w-full sm:w-auto">
                Apply Now <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Training topics */}
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">What You'll Learn</h3>
              <div className="flex flex-wrap gap-2">
                {trainingTopics.map((t) => (
                  <span key={t} className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm text-gray-700">{t}</span>
                ))}
              </div>

              <div className="mt-8 border-l-2 border-emerald-400 pl-5">
                <h4 className="font-bold text-gray-900 mb-1">Long Term: Academic Research Project</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Additional 2 months dedicated to polymer research under expert supervision. Topics include biodegradable polymers, recycling technologies, or process optimization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Equipment + Why Choose */}
      <Section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="heading-lg mb-5">Equipment & Machines</h2>
              <p className="text-gray-600 mb-6">Train on industrial-grade polymer processing equipment used in manufacturing facilities across Bangladesh and abroad.</p>
              <div className="space-y-2">
                {equipment.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-5">Why Choose This Department?</h3>
              <div className="space-y-3">
                {whyChoose.map((reason) => (
                  <div key={reason} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{reason}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Career Pathways */}
      <Section className="section bg-white">
        <div className="container-custom">
          <h2 className="heading-lg mb-2">Career Pathways</h2>
          <p className="text-gray-600 mb-10 max-w-2xl">Our training opens doors to international higher education, academic careers, and plastic industry positions.</p>

          <div className="grid md:grid-cols-3 gap-6">
            {careerPathways.map((pathway) => (
              <div key={pathway.title} className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{pathway.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{pathway.description}</p>
                <div className="space-y-2">
                  {pathway.opportunities.map((opp) => (
                    <div key={opp} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-1 h-1 rounded-full bg-gray-400" />
                      {opp}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Community Services */}
      <Section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-lg mb-2">Community & Social Service</h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            KRTC's Polymer department promotes environmental awareness through plastic recycling education, supports local SMEs with technical guidance, and conducts community outreach programs.
          </p>
          <div className="grid sm:grid-cols-2 gap-5 max-w-3xl">
            {communityServices.map((s) => (
              <div key={s.title}>
                <h4 className="font-semibold text-gray-900 mb-1">{s.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-16 bg-white">
        <div className="container-custom text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Start Your Polymer Processing Career</h2>
          <p className="text-gray-600 mb-8">
            Join KRTC's Polymer department and develop expertise in plastic manufacturing and processing. Scholarship opportunities available.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={openModal} className="btn btn-primary group">
              Apply Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <Link href="/scholarships" className="btn btn-outline-dark">Scholarship Info</Link>
          </div>
        </div>
      </Section>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="bg-white rounded-2xl w-full max-w-lg overflow-hidden shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
                <div>
                  <p className="text-xs text-gray-400 mb-0.5">Polymer Processing</p>
                  <h3 className="text-lg font-bold text-gray-900">
                    {modalStep === "info" && "Apply for Training"}
                    {modalStep === "form" && "Register Your Interest"}
                    {modalStep === "success" && "Registration Successful"}
                  </h3>
                </div>
                <button onClick={closeModal} className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors">
                  <X className="w-4 h-4 text-gray-500" />
                </button>
              </div>

              <div className="px-6 py-5">
                {modalStep === "info" && (
                  <div className="space-y-5">
                    {/* Intakes */}
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Upcoming Intakes</p>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="p-3 bg-gray-50 rounded-lg text-center border border-gray-200">
                          <p className="text-xs text-gray-400">Intake 1</p>
                          <p className="font-semibold text-gray-900">October 2026</p>
                        </div>
                        <div className="p-3 bg-gray-50 rounded-lg text-center border border-gray-200">
                          <p className="text-xs text-gray-400">Intake 2</p>
                          <p className="font-semibold text-gray-900">April 2027</p>
                        </div>
                      </div>
                    </div>

                    {/* Program selection */}
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Select Program</p>
                      <div className="space-y-2">
                        {[
                          { value: "short" as const, label: "Short Term — 4 months", sub: "4 months \u2022 Processing & Quality Control" },
                          { value: "long" as const, label: "Long Term — 6 months", sub: "6 months \u2022 Training + Research Project" },
                        ].map((p) => (
                          <label key={p.value} className={`flex items-center gap-3 p-3.5 rounded-lg border cursor-pointer transition-all ${selectedProgram === p.value ? "border-primary bg-primary/5" : "border-gray-200 hover:border-gray-300"}`}>
                            <input type="radio" name="program" checked={selectedProgram === p.value} onChange={() => setSelectedProgram(p.value)} className="accent-primary" />
                            <div>
                              <p className="text-sm font-semibold text-gray-900">{p.label}</p>
                              <p className="text-xs text-gray-500">{p.sub}</p>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Scholarship note */}
                    <p className="text-sm text-gray-500 border-l-2 border-primary pl-3">
                      <span className="font-medium text-gray-900">Scholarship:</span> Up to 20% for deserving students
                    </p>

                    <button onClick={() => setModalStep("form")} className="w-full py-3 bg-primary text-white font-medium rounded-full hover:bg-primary/90 transition-colors">
                      Continue
                    </button>

                    <div className="flex justify-center gap-6 text-xs text-gray-400">
                      <a href="tel:+8801345687576" className="hover:text-primary transition-colors flex items-center gap-1">
                        <Phone className="w-3 h-3" /> +880 134 568 7576
                      </a>
                      <a href="https://wa.me/491634855414" className="hover:text-green-600 transition-colors flex items-center gap-1">
                        <MessageCircle className="w-3 h-3" /> WhatsApp
                      </a>
                    </div>
                  </div>
                )}

                {modalStep === "form" && (
                  <form onSubmit={(e) => { e.preventDefault(); setModalStep("success"); }} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                        <input type="text" required placeholder="Your name" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                        <input type="tel" required placeholder="+880..." className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none" />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input type="email" placeholder="email@example.com" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Intake</label>
                        <select className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none bg-white">
                          <option>October 2026</option>
                          <option>April 2027</option>
                        </select>
                      </div>
                    </div>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="accent-primary" />
                      <span className="text-sm text-gray-600">Interested in scholarship</span>
                    </label>
                    <button type="submit" className="w-full py-3 bg-primary text-white font-medium rounded-full hover:bg-primary/90 transition-colors">
                      Submit
                    </button>
                    <p className="text-center text-xs text-gray-400">We'll contact you within 24-48 hours</p>
                  </form>
                )}

                {modalStep === "success" && (
                  <div className="text-center py-6">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check className="w-6 h-6 text-emerald-600" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Thank You!</h4>
                    <p className="text-sm text-gray-600 mb-6">Your interest in Polymer Processing has been registered. We'll contact you soon.</p>
                    <div className="flex gap-3">
                      <Link href="/services" className="flex-1 py-2.5 bg-primary text-white font-medium rounded-full hover:bg-primary/90 transition-colors text-center text-sm">Explore More</Link>
                      <button onClick={closeModal} className="flex-1 py-2.5 border border-gray-200 text-gray-600 rounded-full hover:bg-gray-50 transition-colors text-sm">Close</button>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

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
  title: "Nursing and Community Healthcare",
  shortTitle: "Nursing & Healthcare",
  heroDescription:
    "Comprehensive healthcare training combining clinical skills, compassionate care, and international opportunities including pathways to Germany.",
  overview:
    "The Nursing and Healthcare department at KRTC prepares caring professionals for rewarding careers in healthcare. Our programs combine clinical training with community health education, and offer unique pathways for international opportunities including nursing positions in Germany through our specialized language preparation program.",
};

const keyFeatures = [
  "Clinical Training — Hands-on training in nursing procedures and patient care",
  "Compassionate Care — Building empathy and communication skills for healthcare",
  "Germany Pathway — German language training (A1-B2) for nursing abroad",
  "Health Benefit Card — Community healthcare access through our unique card system",
];

const trainingTopics = [
  "Basic Nursing Care", "Patient Care & Vital Signs", "Clinical Procedures",
  "Medication Administration", "Emergency Care", "Community Healthcare",
  "First Aid & CPR", "Health Education", "Medical Documentation",
  "Patient Communication",
];

const equipment = [
  "Patient Simulation Mannequins", "Vital Signs Monitors",
  "IV Training Equipment", "Wound Care Supplies",
  "CPR Training Kits", "Injection Practice Models",
  "Medical Diagnostic Tools", "First Aid Supplies",
];

const researchAreas = [
  "Community Health Models", "Preventive Healthcare", "Nursing Education",
  "Patient Care Standards", "Healthcare Technology", "Mental Health Care",
];

const careerPathways = [
  {
    title: "Higher Education Abroad",
    description: "Pursue nursing degrees at international universities",
    opportunities: ["BSc Nursing Abroad", "Masters in Nursing", "Germany Nursing Program", "Healthcare Management"],
  },
  {
    title: "Academic Career Path",
    description: "Build a career in nursing education and training",
    opportunities: ["Nursing Instructor", "Healthcare Educator", "Clinical Trainer", "Research Associate"],
  },
  {
    title: "Healthcare Career Path",
    description: "Join hospitals, clinics, and healthcare facilities",
    opportunities: ["Staff Nurse", "Community Health Worker", "Clinic Coordinator", "Home Care Provider"],
  },
];

const communityServices = [
  { title: "Health Benefit Card System", description: "Community healthcare access program providing affordable medical services." },
  { title: "Community Health Camps", description: "Regular health awareness and screening programs for local communities." },
  { title: "First Aid Training", description: "Corporate and community first aid and emergency response training." },
  { title: "Healthcare Consultancy", description: "Guidance for healthcare facility setup and staff training." },
];

const healthBenefitCardBenefits = [
  "Affordable healthcare access",
  "Community wellness programs",
  "Preventive health services",
  "Emergency care support",
];

const germanyProgram = {
  title: "Germany Nursing Opportunity",
  description:
    "Our specialized program prepares you for nursing positions in Germany, one of Europe's most sought-after healthcare destinations.",
  levels: [
    "A1 - Basic German",
    "A2 - Elementary",
    "B1 - Intermediate",
    "B2 - Professional",
  ],
  benefits: [
    "High earning potential in Euros",
    "Excellent working conditions",
    "Path to permanent residency",
    "World-class healthcare experience",
  ],
};

const whyChoose = [
  "Unique pathway to nursing careers in Germany",
  "Health Benefit Card system for community service",
  "Hands-on clinical training with simulations",
  "Experienced healthcare professionals as instructors",
  "Partnerships with local healthcare facilities",
  "Scholarship support for nursing students",
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

export default function NursingPage() {
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link
                href="/services"
                className="hover:text-primary transition-colors"
              >
                Services
              </Link>
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
                Apply Now{" "}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <Link href="#germany" className="btn btn-outline-dark">
                Germany Pathway
              </Link>
            </div>

            {/* Key features as text */}
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
              {keyFeatures.map((f) => (
                <div
                  key={f}
                  className="flex items-start gap-2 text-sm text-gray-600"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  {f}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Health Benefit Card Section */}
      <Section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="heading-lg mb-5">Health Benefit Card System</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                KRTC's innovative Health Benefit Card provides community members
                with affordable access to healthcare services, creating a
                sustainable model for community wellness.
              </p>
              <div className="space-y-3">
                {healthBenefitCardBenefits.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-72 h-44 bg-gray-900 rounded-2xl p-6 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-lg font-bold">KRTC Health</span>
                  </div>
                  <div className="text-gray-400 text-sm mb-2">Benefit Card</div>
                  <div className="text-2xl font-bold tracking-wider">
                    .... .... .... 1234
                  </div>
                  <div className="mt-3 text-sm text-gray-400">
                    Community Healthcare Access
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Overview + Research Areas */}
      <Section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="heading-lg mb-5">Department Overview</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {department.overview}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-5">
                Focus Areas
              </h3>
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

      {/* Germany Pathway Section */}
      <Section className="section bg-gray-50">
        <div className="container-custom" id="germany">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="heading-lg mb-5">
                Your Pathway to Nursing in Germany
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                {germanyProgram.description}
              </p>

              {/* Language Levels as steps */}
              <div className="space-y-3 mb-8">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  Language Progression
                </h3>
                {germanyProgram.levels.map((level, i) => (
                  <div key={level} className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-xs font-bold text-gray-600 flex-shrink-0">
                      {i + 1}
                    </span>
                    <span className="font-medium text-gray-700">{level}</span>
                  </div>
                ))}
              </div>

              <button onClick={openModal} className="btn btn-primary">
                Start Your Journey <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-5">
                Benefits of Nursing in Germany
              </h3>
              <div className="space-y-3">
                {germanyProgram.benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Training Programs */}
      <Section className="section bg-white">
        <div className="container-custom" id="programs">
          <h2 className="heading-lg mb-2">Training Programs</h2>
          <p className="text-gray-600 mb-10 max-w-2xl">
            Comprehensive hands-on training combining clinical skills with
            compassionate patient care.
          </p>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Duration options */}
            <div className="space-y-5">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                Choose Your Path
              </h3>

              <div className="p-5 border-2 border-amber-200 bg-amber-50/50 rounded-xl">
                <h4 className="font-bold text-gray-900">
                  Short Term — <span className="text-amber-600">4 Months</span>
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                  Intensive practical training in nursing care, clinical
                  procedures, and community health.
                </p>
              </div>

              <div className="p-5 border-2 border-emerald-200 bg-emerald-50/50 rounded-xl">
                <h4 className="font-bold text-gray-900">
                  Long Term — <span className="text-emerald-600">6 Months</span>
                  <span className="ml-2 px-2 py-0.5 bg-emerald-200 text-emerald-800 text-xs font-medium rounded-full">
                    + Research
                  </span>
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                  Full training + Academic Research Project for higher education
                  abroad & Germany pathway.
                </p>
              </div>

              <p className="text-sm text-gray-500 border-l-2 border-gray-200 pl-4">
                Both Short & Long Term students train together for the first 4
                months. Long Term students continue with a research project for
                2 additional months.
              </p>

              <button
                onClick={openModal}
                className="btn btn-primary w-full sm:w-auto"
              >
                Apply Now <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Training topics */}
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                What You'll Learn
              </h3>
              <div className="flex flex-wrap gap-2">
                {trainingTopics.map((t) => (
                  <span
                    key={t}
                    className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm text-gray-700"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-8 border-l-2 border-emerald-400 pl-5">
                <h4 className="font-bold text-gray-900 mb-1">
                  Long Term: Academic Research Project
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Additional 2 months dedicated to healthcare research under
                  expert supervision. Topics include community health models,
                  patient care standards, or nursing education.
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
              <h2 className="heading-lg mb-5">Clinical Training Equipment</h2>
              <p className="text-gray-600 mb-6">
                Train on modern healthcare equipment used in hospitals and
                clinics for realistic clinical experience.
              </p>
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
              <h3 className="text-lg font-bold text-gray-900 mb-5">
                Why Choose This Department?
              </h3>
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
          <p className="text-gray-600 mb-10 max-w-2xl">
            Our training opens doors to international nursing careers, academic
            positions, and healthcare industry roles.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {careerPathways.map((pathway) => (
              <div
                key={pathway.title}
                className="p-6 bg-gray-50 rounded-xl border border-gray-200"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {pathway.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {pathway.description}
                </p>
                <div className="space-y-2">
                  {pathway.opportunities.map((opp) => (
                    <div
                      key={opp}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
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
            KRTC's Nursing department serves communities through Health Benefit
            Card system, free health camps, first aid training, and healthcare
            awareness programs across Bangladesh.
          </p>
          <div className="grid sm:grid-cols-2 gap-5 max-w-3xl">
            {communityServices.map((s) => (
              <div key={s.title}>
                <h4 className="font-semibold text-gray-900 mb-1">{s.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-16 bg-white">
        <div className="container-custom text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Start Your Healthcare Journey
          </h2>
          <p className="text-gray-600 mb-8">
            Join KRTC's Nursing department and make a difference in people's
            lives. Germany pathway and scholarships available.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={openModal} className="btn btn-primary group">
              Apply Now{" "}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <Link href="/scholarships" className="btn btn-outline-dark">
              Scholarship Info
            </Link>
          </div>
        </div>
      </Section>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
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
                  <p className="text-xs text-gray-400 mb-0.5">
                    Nursing & Healthcare
                  </p>
                  <h3 className="text-lg font-bold text-gray-900">
                    {modalStep === "info" && "Apply For Merit Base Examination"}
                    {modalStep === "form" && "Register Your Interest"}
                    {modalStep === "success" && "Registration Successful"}
                  </h3>
                </div>
                <button
                  onClick={closeModal}
                  className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
                >
                  <X className="w-4 h-4 text-gray-500" />
                </button>
              </div>

              <div className="px-6 py-5">
                {modalStep === "info" && (
                  <div className="space-y-5">
                    {/* Intakes */}
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">
                        Upcoming Intakes
                      </p>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="p-3 bg-gray-50 rounded-lg text-center border border-gray-200">
                          <p className="text-xs text-gray-400">Intake 1</p>
                          <p className="font-semibold text-gray-900">
                            October 2026
                          </p>
                        </div>
                        <div className="p-3 bg-gray-50 rounded-lg text-center border border-gray-200">
                          <p className="text-xs text-gray-400">Intake 2</p>
                          <p className="font-semibold text-gray-900">
                            April 2027
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Program selection */}
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">
                        Select Program
                      </p>
                      <div className="space-y-2">
                        {[
                          {
                            value: "short" as const,
                            label: "Short Term — 4 months",
                            sub: "4 months \u2022 Clinical & Community Health",
                          },
                          {
                            value: "long" as const,
                            label: "Long Term — 6 months",
                            sub: "6 months \u2022 Training + Germany Ready",
                          },
                        ].map((p) => (
                          <label
                            key={p.value}
                            className={`flex items-center gap-3 p-3.5 rounded-lg border cursor-pointer transition-all ${selectedProgram === p.value ? "border-primary bg-primary/5" : "border-gray-200 hover:border-gray-300"}`}
                          >
                            <input
                              type="radio"
                              name="program"
                              checked={selectedProgram === p.value}
                              onChange={() => setSelectedProgram(p.value)}
                              className="accent-primary"
                            />
                            <div>
                              <p className="text-sm font-semibold text-gray-900">
                                {p.label}
                              </p>
                              <p className="text-xs text-gray-500">{p.sub}</p>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Scholarship note */}
                    <p className="text-sm text-gray-500 border-l-2 border-primary pl-3">
                      <span className="font-medium text-gray-900">
                        Scholarship:
                      </span>{" "}
                      Up to 20% for deserving students
                    </p>

                    <button
                      onClick={() => setModalStep("form")}
                      className="w-full py-3 bg-primary text-white font-medium rounded-full hover:bg-primary/90 transition-colors"
                    >
                      Continue
                    </button>

                    <div className="flex justify-center gap-6 text-xs text-gray-400">
                      <a
                        href="tel:+8801345687576"
                        className="hover:text-primary transition-colors flex items-center gap-1"
                      >
                        <Phone className="w-3 h-3" /> +880 134 568 7576
                      </a>
                      <a
                        href="https://wa.me/491634855414"
                        className="hover:text-green-600 transition-colors flex items-center gap-1"
                      >
                        <MessageCircle className="w-3 h-3" /> WhatsApp
                      </a>
                    </div>
                  </div>
                )}

                {modalStep === "form" && (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setModalStep("success");
                    }}
                    className="space-y-4"
                  >
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Your name"
                          className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Phone *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+880..."
                          className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          placeholder="email@example.com"
                          className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Preferred Intake
                        </label>
                        <select className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none bg-white">
                          <option>October 2026</option>
                          <option>April 2027</option>
                        </select>
                      </div>
                    </div>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="accent-primary" />
                      <span className="text-sm text-gray-600">
                        Interested in scholarship
                      </span>
                    </label>
                    <button
                      type="submit"
                      className="w-full py-3 bg-primary text-white font-medium rounded-full hover:bg-primary/90 transition-colors"
                    >
                      Submit
                    </button>
                    <p className="text-center text-xs text-gray-400">
                      We'll contact you within 24-48 hours
                    </p>
                  </form>
                )}

                {modalStep === "success" && (
                  <div className="text-center py-6">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check className="w-6 h-6 text-emerald-600" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      Thank You!
                    </h4>
                    <p className="text-sm text-gray-600 mb-6">
                      Your interest in Nursing & Healthcare has been registered.
                      We'll contact you soon.
                    </p>
                    <div className="flex gap-3">
                      <Link
                        href="/services"
                        className="flex-1 py-2.5 bg-primary text-white font-medium rounded-full hover:bg-primary/90 transition-colors text-center text-sm"
                      >
                        Explore More
                      </Link>
                      <button
                        onClick={closeModal}
                        className="flex-1 py-2.5 border border-gray-200 text-gray-600 rounded-full hover:bg-gray-50 transition-colors text-sm"
                      >
                        Close
                      </button>
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

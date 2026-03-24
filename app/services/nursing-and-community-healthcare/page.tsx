"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Heart,
  ArrowRight,
  Check,
  GraduationCap,
  Stethoscope,
  BookOpen,
  Globe,
  Award,
  HeartPulse,
  Target,
  Briefcase,
  Clock,
  Calendar,
  X,
  Phone,
  MessageCircle,
  Plane,
  Languages,
  HandHeart,
  Sparkles,
  Users,
} from "lucide-react";

export default function NursingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalStep, setModalStep] = useState<"info" | "form" | "success">(
    "info",
  );
  const [selectedProgram, setSelectedProgram] = useState<"short" | "long">(
    "short",
  );

  const heroRef = useRef(null);
  const healthCardRef = useRef(null);
  const overviewRef = useRef(null);
  const germanyRef = useRef(null);
  const programsRef = useRef(null);
  const equipmentRef = useRef(null);
  const careerRef = useRef(null);
  const communityRef = useRef(null);
  const ctaRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const healthCardInView = useInView(healthCardRef, { once: true });
  const overviewInView = useInView(overviewRef, { once: true });
  const germanyInView = useInView(germanyRef, { once: true });
  const programsInView = useInView(programsRef, { once: true });
  const equipmentInView = useInView(equipmentRef, { once: true });
  const careerInView = useInView(careerRef, { once: true });
  const communityInView = useInView(communityRef, { once: true });
  const ctaInView = useInView(ctaRef, { once: true });

  const department = {
    title: "Nursing and Community Healthcare",
    shortTitle: "Nursing & Healthcare",
    icon: Heart,
    heroDescription:
      "Comprehensive healthcare training combining clinical skills, compassionate care, and international opportunities including pathways to Germany.",
    overview:
      "The Nursing and Healthcare department at KRTC prepares caring professionals for rewarding careers in healthcare. Our programs combine clinical training with community health education, and offer unique pathways for international opportunities including nursing positions in Germany through our specialized language preparation program.",
  };

  const keyFeatures = [
    {
      icon: Stethoscope,
      title: "Clinical Training",
      description: "Hands-on training in nursing procedures and patient care.",
    },
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "Building empathy and communication skills for healthcare.",
    },
    {
      icon: Globe,
      title: "Germany Pathway",
      description: "German language training (A1-B2) for nursing abroad.",
    },
    {
      icon: Users,
      title: "Health Benefit Card",
      description:
        "Community healthcare access through our unique card system.",
    },
  ];

  // Unified training topics for both Short & Long term
  const trainingTopics = [
    "Basic Nursing Care",
    "Patient Care & Vital Signs",
    "Clinical Procedures",
    "Medication Administration",
    "Emergency Care",
    "Community Healthcare",
    "First Aid & CPR",
    "Health Education",
    "Medical Documentation",
    "Patient Communication",
  ];

  const equipment = [
    "Patient Simulation Mannequins",
    "Vital Signs Monitors",
    "IV Training Equipment",
    "Wound Care Supplies",
    "CPR Training Kits",
    "Injection Practice Models",
    "Medical Diagnostic Tools",
    "First Aid Supplies",
  ];

  const researchAreas = [
    "Community Health Models",
    "Preventive Healthcare",
    "Nursing Education",
    "Patient Care Standards",
    "Healthcare Technology",
    "Mental Health Care",
  ];

  const careerPathways = {
    higherEducation: {
      title: "Higher Education Abroad",
      icon: Globe,
      description: "Pursue nursing degrees at international universities",
      opportunities: [
        "BSc Nursing Abroad",
        "Masters in Nursing",
        "Germany Nursing Program",
        "Healthcare Management",
      ],
    },
    academic: {
      title: "Academic Career Path",
      icon: GraduationCap,
      description: "Build a career in nursing education and training",
      opportunities: [
        "Nursing Instructor",
        "Healthcare Educator",
        "Clinical Trainer",
        "Research Associate",
      ],
    },
    industry: {
      title: "Healthcare Career Path",
      icon: Briefcase,
      description: "Join hospitals, clinics, and healthcare facilities",
      opportunities: [
        "Staff Nurse",
        "Community Health Worker",
        "Clinic Coordinator",
        "Home Care Provider",
      ],
    },
  };

  const communityServices = [
    {
      title: "Health Benefit Card System",
      description:
        "Community healthcare access program providing affordable medical services.",
    },
    {
      title: "Community Health Camps",
      description:
        "Regular health awareness and screening programs for local communities.",
    },
    {
      title: "First Aid Training",
      description:
        "Corporate and community first aid and emergency response training.",
    },
    {
      title: "Healthcare Consultancy",
      description: "Guidance for healthcare facility setup and staff training.",
    },
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

  const openModal = () => {
    setIsModalOpen(true);
    setModalStep("info");
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalStep("info");
  };

  const handleRegisterInterest = () => {
    setModalStep("form");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setModalStep("success");
  };

  return (
    <>
      {/* Hero Section - Light Theme */}
      <section
        ref={heroRef}
        className="pt-32 pb-20 bg-gray-50 relative overflow-hidden"
      >
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px]" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
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
              <span className="text-primary font-medium">
                {department.shortTitle}
              </span>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full mb-6">
                  <HeartPulse className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700 font-medium text-sm">
                    Healthcare & Community
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  {department.title}
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  {department.heroDescription}
                </p>

                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={openModal}
                    className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-all"
                  >
                    Apply Now
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <Link
                    href="#germany"
                    className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:border-primary hover:text-primary transition-all"
                  >
                    <Plane className="w-5 h-5" />
                    Germany Pathway
                  </Link>
                </div>
              </div>

              {/* Feature Cards */}
              <div className="grid grid-cols-2 gap-4">
                {keyFeatures.map((feature, i) => {
                  const FeatureIcon = feature.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={heroInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                      className="bg-white p-5 rounded-2xl border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all"
                    >
                      <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-3">
                        <FeatureIcon className="w-6 h-6 text-emerald-600" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-gray-500 text-sm">
                        {feature.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Health Benefit Card Highlight */}
      <section ref={healthCardRef} className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={healthCardInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-rose-50 via-pink-50 to-red-50 rounded-2xl p-8 md:p-10 border border-rose-100"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-100 rounded-full mb-6">
                  <Sparkles className="w-4 h-4 text-rose-600" />
                  <span className="text-rose-700 font-medium text-sm">
                    Unique Initiative
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Health Benefit Card System
                </h2>
                <p className="text-gray-600 mb-6">
                  KRTC's innovative Health Benefit Card provides community
                  members with affordable access to healthcare services,
                  creating a sustainable model for community wellness.
                </p>
                <ul className="space-y-3">
                  {[
                    "Affordable healthcare access",
                    "Community wellness programs",
                    "Preventive health services",
                    "Emergency care support",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <div className="w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center">
                        <Heart className="w-3 h-3 text-rose-500" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-center">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="w-72 h-44 bg-gradient-to-br from-rose-500 via-pink-500 to-red-500 rounded-2xl shadow-xl shadow-rose-200 p-6 text-white relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-4">
                      <Heart className="w-8 h-8" />
                      <span className="font-bold text-lg">KRTC Health</span>
                    </div>
                    <div className="text-rose-100 text-sm mb-2">
                      Benefit Card
                    </div>
                    <div className="text-2xl font-bold tracking-wider">
                      •••• •••• •••• 1234
                    </div>
                    <div className="mt-3 text-sm text-rose-100">
                      Community Healthcare Access
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section ref={overviewRef} className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={overviewInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              {/* Red Gradient Box */}
              <div className="bg-gradient-to-br from-primary to-red-700 rounded-2xl p-8 text-white h-full">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/20 rounded-full mb-6">
                  <HeartPulse className="w-4 h-4" />
                  <span className="text-sm font-medium">
                    Department Overview
                  </span>
                </div>

                <h2 className="text-2xl font-bold mb-4">
                  Caring for Communities with Compassion
                </h2>

                <p className="text-red-100 leading-relaxed mb-6">
                  {department.overview}
                </p>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-white font-semibold hover:gap-3 transition-all"
                >
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={overviewInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3 space-y-4"
            >
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Focus Areas
                </h3>
                <p className="text-gray-600">
                  Our department focuses on community health and nursing
                  education.
                </p>
              </div>

              {researchAreas.map((area, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:border-primary/30 hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-5 h-5 text-emerald-600" />
                  </div>
                  <span className="font-medium text-gray-800">{area}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Germany Pathway Section */}
      <section id="germany" ref={germanyRef} className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={germanyInView ? { opacity: 1, y: 0 } : {}}
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
                  <span className="text-amber-700 font-semibold">
                    Germany Nursing Opportunity
                  </span>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">
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
                      animate={germanyInView ? { opacity: 1, x: 0 } : {}}
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

                <button
                  onClick={openModal}
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-full hover:shadow-lg hover:shadow-amber-500/30 transition-all"
                >
                  <Plane className="w-5 h-5" />
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {germanyProgram.benefits.map((benefit, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={germanyInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="bg-amber-50 p-6 rounded-2xl border border-amber-100 hover:shadow-lg transition-all"
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

      {/* Training Programs Section - UNIFIED */}
      <section id="programs" ref={programsRef} className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={programsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-4">
              <GraduationCap className="w-4 h-4 text-primary" />
              <span className="text-primary font-medium text-sm">
                Training Programs
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Compassionate Care Training
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive hands-on training combining clinical skills with
              compassionate patient care.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Program Duration Options */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={programsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-2xl p-6 border border-gray-100 sticky top-24">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Choose Your Path
                </h3>

                {/* Short Term */}
                <div className="p-4 bg-emerald-50 rounded-xl border-2 border-emerald-200 mb-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Short Term</h4>
                      <p className="text-emerald-700 font-semibold">4 Months</p>
                      <p className="text-gray-600 text-sm mt-1">
                        Intensive practical training in nursing care, clinical
                        procedures, and community health.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Long Term */}
                <div className="p-4 bg-teal-50 rounded-xl border-2 border-teal-200 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-5 h-5 text-teal-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 flex items-center gap-2">
                        Long Term
                        <span className="px-2 py-0.5 bg-teal-200 text-teal-800 text-xs font-medium rounded-full">
                          + Research
                        </span>
                      </h4>
                      <p className="text-teal-700 font-semibold">6 Months</p>
                      <p className="text-gray-600 text-sm mt-1">
                        Full training + Academic Research Project for higher
                        education abroad & Germany pathway.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Info Box */}
                <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
                  <p className="text-blue-800 text-sm">
                    <strong>Note:</strong> Both Short & Long Term students train
                    together for the first 4 months. Long Term students continue
                    with a research project for 2 additional months.
                  </p>
                </div>

                <button
                  onClick={openModal}
                  className="w-full mt-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                >
                  Apply Now
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>

            {/* Training Topics */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={programsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <div className="bg-white rounded-2xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  What You'll Learn
                </h3>
                <p className="text-gray-600 mb-6">
                  Comprehensive training covering nursing care, clinical
                  procedures, and community health.
                </p>

                <div className="flex flex-wrap gap-3">
                  {trainingTopics.map((topic, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={programsInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="px-4 py-2 bg-gray-50 rounded-full text-gray-700 font-medium text-sm border border-gray-200 hover:border-primary/30 hover:bg-primary/5 transition-all"
                    >
                      {topic}
                    </motion.span>
                  ))}
                </div>

                {/* Long Term Research Highlight */}
                <div className="mt-8 p-5 bg-gradient-to-r from-teal-50 to-emerald-50 rounded-xl border border-teal-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">
                        Long Term: Academic Research Project
                      </h4>
                      <p className="text-gray-600 text-sm mb-3">
                        Additional 2 months dedicated to healthcare research
                        under expert supervision. Topics include community
                        health models, patient care standards, or nursing
                        education.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-medium">
                          Germany Pathway Ready
                        </span>
                        <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-medium">
                          Publication Opportunity
                        </span>
                        <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-medium">
                          Higher Education Mobility
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Equipment Section - Tags Style */}
      <section ref={equipmentRef} className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={equipmentInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-50 border border-violet-200 rounded-full mb-4">
                <Stethoscope className="w-4 h-4 text-violet-600" />
                <span className="text-violet-700 font-medium text-sm">
                  Training Facilities
                </span>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Clinical Training Equipment
              </h2>

              <p className="text-gray-600 leading-relaxed mb-6">
                Train on modern healthcare equipment used in hospitals and
                clinics for realistic clinical experience.
              </p>

              <div className="space-y-3">
                {whyChoose.slice(0, 4).map((reason, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-gray-700">{reason}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={equipmentInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-6">
                  Available Equipment
                </h3>
                <div className="flex flex-wrap gap-3">
                  {equipment.map((item, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={equipmentInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="px-4 py-2 bg-white rounded-full text-gray-700 font-medium text-sm border border-gray-200 hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700 transition-all cursor-default"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Career Opportunities - Higher Education Mobility Focus */}
      <section ref={careerRef} className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={careerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-4">
              <Target className="w-4 h-4 text-primary" />
              <span className="text-primary font-medium text-sm">
                Career Pathways
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Path to Success
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our training opens doors to international nursing careers,
              academic positions, and healthcare industry roles.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(careerPathways).map(([key, pathway], index) => {
              const PathwayIcon = pathway.icon;
              const colorClasses = [
                {
                  bg: "bg-blue-100",
                  text: "text-blue-600",
                  item: "bg-blue-50 text-blue-700",
                },
                {
                  bg: "bg-emerald-100",
                  text: "text-emerald-600",
                  item: "bg-emerald-50 text-emerald-700",
                },
                {
                  bg: "bg-rose-100",
                  text: "text-rose-600",
                  item: "bg-rose-50 text-rose-700",
                },
              ][index];

              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 30 }}
                  animate={careerInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all ${
                    index === 0 ? "md:ring-2 md:ring-primary/20" : ""
                  }`}
                >
                  {index === 0 && (
                    <div className="inline-flex items-center gap-1 px-2 py-1 bg-primary text-white text-xs font-medium rounded-full mb-4">
                      <Award className="w-3 h-3" />
                      Primary Focus
                    </div>
                  )}

                  <div
                    className={`w-12 h-12 rounded-xl ${colorClasses.bg} flex items-center justify-center mb-4`}
                  >
                    <PathwayIcon className={`w-6 h-6 ${colorClasses.text}`} />
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {pathway.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {pathway.description}
                  </p>

                  <div className="space-y-2">
                    {pathway.opportunities.map((opp, i) => (
                      <div
                        key={i}
                        className={`px-3 py-2 rounded-lg text-sm font-medium ${colorClasses.item}`}
                      >
                        {opp}
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Community & Social Service Section */}
      <section ref={communityRef} className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={communityInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              {/* Red Gradient Box */}
              <div className="bg-gradient-to-br from-primary to-red-700 rounded-2xl p-8 text-white h-full">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/20 rounded-full mb-6">
                  <Heart className="w-4 h-4" />
                  <span className="text-sm font-medium">
                    Community & Engagement
                  </span>
                </div>

                <h2 className="text-2xl font-bold mb-4">
                  Community & Social Service
                </h2>

                <p className="text-red-100 leading-relaxed mb-6">
                  KRTC's Nursing department serves communities through Health
                  Benefit Card system, free health camps, first aid training,
                  and healthcare awareness programs across Bangladesh.
                </p>

                <div className="flex items-center gap-3">
                  <HandHeart className="w-8 h-8 text-red-200" />
                  <span className="text-red-100 font-medium">
                    Caring for communities since 2025
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={communityInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3 space-y-4"
            >
              {communityServices.map((service, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100 hover:border-primary/30 hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-rose-100 flex items-center justify-center flex-shrink-0">
                    <Heart className="w-5 h-5 text-rose-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-4">
                <Award className="w-4 h-4 text-primary" />
                <span className="text-primary font-medium text-sm">
                  Why KRTC
                </span>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Choose This Department?
              </h2>

              <p className="text-gray-600 leading-relaxed">
                Our Nursing department offers unique pathways including Germany
                nursing opportunities, Health Benefit Card community service,
                and compassionate care training.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-3"
            >
              {whyChoose.map((reason, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:border-primary/30 hover:shadow-md transition-all"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-red-700 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">{reason}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section - Light Theme */}
      <section
        ref={ctaRef}
        className="py-20 bg-gray-50 relative overflow-hidden"
      >
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px]" />

        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Start Your Healthcare Journey
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg">
              Join KRTC's Nursing department and make a difference in people's
              lives. Germany pathway and scholarships available.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={openModal}
                className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-colors"
              >
                Apply Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <Link
                href="/schooling"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:border-primary hover:text-primary transition-colors"
              >
                Scholarship Info
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Apply Now Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center overflow-y-auto py-8 px-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-2xl w-full max-w-md overflow-hidden shadow-2xl my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="bg-gradient-to-r from-primary to-red-700 p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-red-200 text-sm mb-1">
                      Nursing & Healthcare
                    </p>
                    <h3 className="text-xl font-bold">
                      {modalStep === "info" && "Start Your Journey"}
                      {modalStep === "form" && "Register Your Interest"}
                      {modalStep === "success" && "Registration Successful!"}
                    </h3>
                  </div>
                  <button
                    onClick={closeModal}
                    className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                {modalStep === "info" && (
                  <>
                    {/* Intake Info */}
                    <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 mb-5">
                      <div className="flex items-center gap-2 mb-3">
                        <Calendar className="w-5 h-5 text-emerald-600" />
                        <span className="font-semibold text-emerald-800">
                          Upcoming Intakes
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white rounded-lg p-3 text-center border border-emerald-100">
                          <p className="text-xs text-gray-500 mb-1">Intake 1</p>
                          <p className="font-bold text-emerald-700">
                            October 2026
                          </p>
                        </div>
                        <div className="bg-white rounded-lg p-3 text-center border border-emerald-100">
                          <p className="text-xs text-gray-500 mb-1">Intake 2</p>
                          <p className="font-bold text-emerald-700">
                            April 2027
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Program Selection */}
                    <div className="mb-5">
                      <p className="font-semibold text-gray-900 mb-3">
                        Select Program Duration
                      </p>
                      <div className="space-y-3">
                        <label
                          className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                            selectedProgram === "short"
                              ? "border-primary bg-primary/5"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          <input
                            type="radio"
                            name="program"
                            checked={selectedProgram === "short"}
                            onChange={() => setSelectedProgram("short")}
                            className="accent-primary"
                          />
                          <div>
                            <p className="font-semibold text-gray-900">
                              Short Term
                            </p>
                            <p className="text-sm text-gray-500">
                              4 months • Clinical & Community Health
                            </p>
                          </div>
                        </label>
                        <label
                          className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                            selectedProgram === "long"
                              ? "border-primary bg-primary/5"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          <input
                            type="radio"
                            name="program"
                            checked={selectedProgram === "long"}
                            onChange={() => setSelectedProgram("long")}
                            className="accent-primary"
                          />
                          <div>
                            <p className="font-semibold text-gray-900">
                              Long Term
                              <span className="ml-2 px-2 py-0.5 bg-teal-100 text-teal-700 text-xs rounded-full">
                                + Research
                              </span>
                            </p>
                            <p className="text-sm text-gray-500">
                              6 months • Training + Germany Ready
                            </p>
                          </div>
                        </label>
                      </div>
                    </div>

                    {/* Scholarship Info */}
                    <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-5 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                        <Award className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-primary">
                          Scholarship Available
                        </p>
                        <p className="text-sm text-red-700">
                          Up to 20% for deserving students
                        </p>
                      </div>
                      <Link
                        href="/schooling"
                        className="text-xs text-primary underline"
                      >
                        Learn more
                      </Link>
                    </div>

                    {/* Actions */}
                    <button
                      onClick={handleRegisterInterest}
                      className="w-full py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                    >
                      Register Interest
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={closeModal}
                      className="w-full mt-3 py-3 border border-gray-200 text-gray-600 rounded-xl hover:bg-gray-50 transition-colors"
                    >
                      Contact Us Instead
                    </button>

                    {/* Contact Info */}
                    <div className="mt-5 pt-5 border-t border-gray-100 flex justify-center gap-6">
                      <a
                        href="tel:+8801345687576"
                        className="flex items-center gap-2 text-sm text-gray-500 hover:text-primary transition-colors"
                      >
                        <Phone className="w-4 h-4" />
                        +880 134 568 7576
                      </a>
                      <a
                        href="https://wa.me/491634855414"
                        className="flex items-center gap-2 text-sm text-gray-500 hover:text-green-600 transition-colors"
                      >
                        <MessageCircle className="w-4 h-4" />
                        WhatsApp
                      </a>
                    </div>
                  </>
                )}

                {modalStep === "form" && (
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="আপনার নাম"
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+880 1XX XXX XXXX"
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Email Address
                        </label>
                        <input
                          type="email"
                          placeholder="email@example.com"
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Preferred Intake
                        </label>
                        <select className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-white">
                          <option>October 2026</option>
                          <option>April 2027</option>
                        </select>
                      </div>
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          className="mt-1 accent-primary"
                        />
                        <span className="text-sm text-gray-600">
                          I'm interested in scholarship opportunities
                        </span>
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="w-full mt-6 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                    >
                      Submit Registration
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <p className="text-center text-xs text-gray-400 mt-3">
                      We'll contact you within 24-48 hours
                    </p>
                  </form>
                )}

                {modalStep === "success" && (
                  <div className="text-center py-4">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      Thank You!
                    </h4>
                    <p className="text-gray-600 mb-6">
                      Your interest in Nursing & Healthcare has been registered.
                      We'll contact you soon about the October 2026 intake.
                    </p>
                    <div className="flex gap-3">
                      <Link
                        href="/services"
                        className="flex-1 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-colors text-center"
                      >
                        Explore More
                      </Link>
                      <button
                        onClick={closeModal}
                        className="flex-1 py-3 border border-gray-200 text-gray-600 rounded-xl hover:bg-gray-50 transition-colors"
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

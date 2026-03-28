"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Pill,
  ArrowRight,
  ArrowLeft,
  Check,
  GraduationCap,
  Building2,
  Microscope,
  BookOpen,
  Globe,
  Award,
  Shield,
  Heart,
  HandHeart,
  Target,
  Briefcase,
  Clock,
  Calendar,
  X,
  Phone,
  MessageCircle,
  FileCheck,
  Beaker,
} from "lucide-react";

export default function PharmaceuticalPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalStep, setModalStep] = useState<"info" | "form" | "success">(
    "info",
  );
  const [selectedProgram, setSelectedProgram] = useState<"short" | "long">(
    "short",
  );

  const heroRef = useRef(null);
  const overviewRef = useRef(null);
  const programsRef = useRef(null);
  const equipmentRef = useRef(null);
  const careerRef = useRef(null);
  const communityRef = useRef(null);
  const ctaRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const overviewInView = useInView(overviewRef, { once: true });
  const programsInView = useInView(programsRef, { once: true });
  const equipmentInView = useInView(equipmentRef, { once: true });
  const careerInView = useInView(careerRef, { once: true });
  const communityInView = useInView(communityRef, { once: true });
  const ctaInView = useInView(ctaRef, { once: true });

  const department = {
    title: "Pharmaceutical Sciences and Drug Development",
    shortTitle: "Pharmaceutical",
    icon: Pill,
    heroDescription:
      "Comprehensive training in drug development, quality control, regulatory compliance, and pharmaceutical manufacturing from industry experts.",
    overview:
      "The Pharmaceutical Sciences department at KRTC provides rigorous training in drug formulation, quality assurance, and regulatory affairs. Our programs combine theoretical knowledge with hands-on laboratory experience, preparing students for higher education abroad, research careers, and positions in the pharmaceutical industry.",
  };

  const keyFeatures = [
    {
      icon: Shield,
      title: "GMP Standards",
      description:
        "Training aligned with Good Manufacturing Practice guidelines.",
    },
    {
      icon: FileCheck,
      title: "Regulatory Focus",
      description:
        "Understanding of DGDA and international regulatory requirements.",
    },
    {
      icon: Microscope,
      title: "Advanced Labs",
      description: "Modern pharmaceutical testing and formulation facilities.",
    },
    {
      icon: Globe,
      title: "Global Standards",
      description: "Curriculum aligned with WHO and FDA guidelines.",
    },
  ];

  // Unified training topics for both Short & Long term
  const trainingTopics = [
    "Drug Formulation & Development",
    "Quality Control Analysis",
    "Regulatory Affairs & DGDA",
    "Stability Studies (ICH Guidelines)",
    "GMP Compliance",
    "Dissolution Testing",
    "Pharmaceutical Calculations",
    "Documentation & SOP",
    "Analytical Method Validation",
    "Pharmacovigilance Basics",
  ];

  const equipment = [
    "Dissolution Testing Apparatus",
    "HPLC with UV/PDA Detector",
    "Tablet Hardness Tester",
    "Friability Tester",
    "Disintegration Apparatus",
    "Karl Fischer Titrator",
    "Stability Chambers",
    "Particle Size Analyzer",
  ];

  const researchAreas = [
    "Novel Drug Delivery Systems",
    "Bioequivalence Studies",
    "Herbal Drug Standardization",
    "Nanotechnology in Pharma",
    "Generic Drug Development",
    "Pharmacokinetics Research",
  ];

  const careerPathways = {
    higherEducation: {
      title: "Higher Education Abroad",
      icon: Globe,
      description: "Pursue advanced degrees at top international universities",
      opportunities: [
        "PhD in Pharmaceutical Sciences",
        "Masters in Drug Development",
        "Research Fellowship Programs",
        "Regulatory Affairs Certification",
      ],
    },
    academic: {
      title: "Academic Career Path",
      icon: GraduationCap,
      description: "Build a career in teaching and research institutions",
      opportunities: [
        "University Lecturer",
        "Research Scientist",
        "Pharmaceutical Researcher",
        "Academic Consultant",
      ],
    },
    industry: {
      title: "Industry Career Path",
      icon: Briefcase,
      description: "Join leading pharmaceutical companies",
      opportunities: [
        "Quality Control Manager",
        "Regulatory Affairs Officer",
        "Formulation Scientist",
        "Production Manager",
      ],
    },
  };

  const communityServices = [
    {
      title: "Medicine Awareness Programs",
      description:
        "Educational workshops on proper medication use and avoiding counterfeit drugs.",
    },
    {
      title: "Health Screening Camps",
      description:
        "Free health checkups and pharmaceutical consultations for underserved communities.",
    },
    {
      title: "Pharmacy Student Mentorship",
      description:
        "Guidance and career counseling for pharmacy students across Bangladesh.",
    },
    {
      title: "Drug Safety Education",
      description:
        "Community programs on drug interactions, side effects, and safe storage.",
    },
  ];

  const whyChoose = [
    "Industry-experienced faculty from leading pharma companies",
    "Hands-on training with pharmaceutical equipment",
    "Direct pathway to international higher education",
    "Certification recognized by pharmaceutical industry",
    "Small batch sizes for quality learning",
    "Scholarship support for pharmacy graduates",
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
                  <Pill className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700 font-medium text-sm">
                    Pharmaceutical Sciences Department
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
                    href="#programs"
                    className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:border-primary hover:text-primary transition-all"
                  >
                    View Programs
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

      {/* Overview Section */}
      <section ref={overviewRef} className="py-20 bg-white">
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
                  <Beaker className="w-4 h-4" />
                  <span className="text-sm font-medium">
                    Department Overview
                  </span>
                </div>

                <h2 className="text-2xl font-bold mb-4">
                  Shaping the Future of Pharmaceutical Excellence
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
                  Research Areas
                </h3>
                <p className="text-gray-600">
                  Our department supports advanced research in pharmaceutical
                  sciences.
                </p>
              </div>

              {researchAreas.map((area, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-primary/30 hover:shadow-md transition-all"
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
              Industry-Focused Training
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive hands-on training designed to build practical skills
              in pharmaceutical sciences.
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
                <div className="p-4 bg-amber-50 rounded-xl border-2 border-amber-200 mb-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Short Term</h4>
                      <p className="text-amber-700 font-semibold">4 Months</p>
                      <p className="text-gray-600 text-sm mt-1">
                        Intensive practical training in QC, formulation, and GMP
                        compliance.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Long Term */}
                <div className="p-4 bg-emerald-50 rounded-xl border-2 border-emerald-200 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 flex items-center gap-2">
                        Long Term
                        <span className="px-2 py-0.5 bg-emerald-200 text-emerald-800 text-xs font-medium rounded-full">
                          + Research
                        </span>
                      </h4>
                      <p className="text-emerald-700 font-semibold">6 Months</p>
                      <p className="text-gray-600 text-sm mt-1">
                        Full training + Academic Research Project for PhD
                        preparation & higher education abroad.
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
                  Comprehensive training covering pharmaceutical development,
                  quality control, and regulatory compliance.
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
                <div className="mt-8 p-5 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl border border-emerald-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">
                        Long Term: Academic Research Project
                      </h4>
                      <p className="text-gray-600 text-sm mb-3">
                        Additional 2 months dedicated to pharmaceutical research
                        under expert supervision. Topics include drug
                        formulation, stability studies, or regulatory research.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">
                          PhD Preparation
                        </span>
                        <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">
                          Publication Opportunity
                        </span>
                        <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">
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
                <Microscope className="w-4 h-4 text-violet-600" />
                <span className="text-violet-700 font-medium text-sm">
                  Laboratory Facilities
                </span>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Modern Pharmaceutical Equipment
              </h2>

              <p className="text-gray-600 leading-relaxed mb-6">
                Train on industry-standard pharmaceutical testing equipment used
                in manufacturing and quality control laboratories.
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
              Our training opens doors to international higher education,
              academic careers, and pharmaceutical industry positions.
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
                  bg: "bg-amber-100",
                  text: "text-amber-600",
                  item: "bg-amber-50 text-amber-700",
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
                  KRTC's Pharmaceutical department is committed to improving
                  public health through awareness programs, free consultations,
                  and educational outreach about safe medication practices.
                </p>

                <div className="flex items-center gap-3">
                  <HandHeart className="w-8 h-8 text-red-200" />
                  <span className="text-red-100 font-medium">
                    Serving communities since 2025
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
                Our Pharmaceutical Sciences department offers industry-aligned
                training with GMP standards, preparing you for success in higher
                education and pharmaceutical careers.
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
              Start Your Pharmaceutical Career
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg">
              Join KRTC's Pharmaceutical department and gain industry-ready
              skills. Scholarship opportunities available.
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
                href="/scholarships"
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
                      Pharmaceutical Sciences
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
                              4 months • QC & GMP Training
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
                              <span className="ml-2 px-2 py-0.5 bg-emerald-100 text-emerald-700 text-xs rounded-full">
                                + Research
                              </span>
                            </p>
                            <p className="text-sm text-gray-500">
                              6 months • Training + Research Project
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
                      Your interest in Pharmaceutical Sciences has been
                      registered. We'll contact you soon about the October 2026
                      intake.
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

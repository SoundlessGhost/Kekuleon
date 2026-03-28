"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  GraduationCap,
  Award,
  Users,
  CheckCircle,
  ArrowRight,
  X,
  Send,
  Loader2,
  BookOpen,
  FlaskConical,
  School,
  FileText,
  ClipboardCheck,
  Trophy,
  HelpCircle,
  ChevronDown,
  Percent,
  Star,
} from "lucide-react";
import Link from "next/link";

// EmailJS Credentials (same as contact page)
const EMAILJS_SERVICE_ID = "service_4q2b1np";
const EMAILJS_TEMPLATE_ID = "template_tden6u9";
const EMAILJS_PUBLIC_KEY = "dUpLZYUAf9t68d8UG";

// Scholarship Data
const scholarshipPrograms = {
  appliedScience: {
    id: "applied-science",
    title: "Applied Science Scholarship",
    subtitle: "For University Students & Graduates",
    percentage: 20,
    description:
      "Merit-based scholarships for students pursuing training in our Applied Science departments. 20% of enrolled students receive scholarship support.",
    example: "20 out of 100 students receive scholarship",
    color: "from-primary to-red-700",
    bgColor: "bg-primary/5",
    borderColor: "border-primary/20",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    icon: FlaskConical,
    eligibility: [
      "Minimum SSC/HSC passed with Science background",
      "University students or fresh graduates preferred",
      "Must pass KRTC Scholarship Examination",
      "Strong interest in applied science and research",
      "Bangladesh citizen or resident",
    ],
    departments: [
      "Chemistry and Applied Chemical Sciences",
      "Pharmaceutical Sciences and Drug Development",
      "Polymer and Plastic Processing Technologies",
      "Materials Science and Engineering Applications",
      "Textile Testing and Quality Assurance",
      "Nursing and Community Healthcare",
    ],
  },
  schooling: {
    id: "krtc-schooling",
    title: "KRTC Schooling Scholarship",
    subtitle: "For Secondary Level Students",
    percentage: 50,
    description:
      "Generous scholarships for talented secondary-level students in our Foundation Program. 50% of enrolled students receive scholarship support.",
    example: "50 out of 100 students receive scholarship",
    color: "from-emerald-600 to-teal-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    icon: School,
    eligibility: [
      "Currently studying in Class 6-12",
      "Minimum previous class GPA 3.5 or equivalent",
      "Must pass KRTC Scholarship Examination",
      "Demonstrated academic potential",
      "Financial need may be considered",
      "Bangladesh citizen or resident",
    ],
    benefits: [
      "Academic reinforcement classes",
      "Early research exposure",
      "Language preparation (IELTS/English)",
      "Community engagement activities",
    ],
  },
};

// How It Works Steps
const howItWorks = [
  {
    step: 1,
    title: "Submit Application",
    description:
      "Fill out the scholarship application form with your details and select your preferred program.",
    icon: FileText,
    color: "bg-blue-500",
  },
  {
    step: 2,
    title: "Document Verification",
    description:
      "Our team reviews your application and verifies your academic documents and eligibility.",
    icon: ClipboardCheck,
    color: "bg-violet-500",
  },
  {
    step: 3,
    title: "Scholarship Examination",
    description:
      "Qualified candidates appear for the merit-based KRTC Scholarship Examination.",
    icon: BookOpen,
    color: "bg-amber-500",
  },
  {
    step: 4,
    title: "Result & Enrollment",
    description:
      "Successful candidates receive scholarship awards and proceed with enrollment.",
    icon: Trophy,
    color: "bg-emerald-500",
  },
];

// FAQ Data
const faqs = [
  {
    question: "When is the Scholarship Examination held?",
    answer:
      "KRTC conducts Scholarship Examinations twice a year - typically in January and July. Exact dates are announced on our website and social media channels.",
  },
  {
    question: "Is there any fee for the scholarship application?",
    answer:
      "There is a nominal registration fee for the scholarship application and examination, which covers examination materials and processing costs.",
  },
  {
    question: "How long is the scholarship valid?",
    answer:
      "Applied Science Scholarship is valid for the entire training program duration. KRTC Schooling Scholarship is renewed each academic year based on performance.",
  },
  {
    question: "Can I apply for both programs simultaneously?",
    answer:
      "No, you must select one program. However, after completing KRTC Schooling, you can apply for scholarship in the Applied Science program.",
  },
  {
    question: "What benefits do scholarship holders receive?",
    answer:
      "Scholarship holders receive significant discounts on tuition fees. Additionally, they get priority enrollment, mentorship support, and access to special academic resources.",
  },
];

// Education Levels for Form
const educationLevels = [
  "SSC/Dakhil",
  "HSC/Alim",
  "Diploma",
  "Bachelor's (Running)",
  "Bachelor's (Completed)",
  "Master's (Running)",
  "Master's (Completed)",
  "Other",
];

export default function ScholarshipsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<
    "applied-science" | "krtc-schooling" | ""
  >("");
  const [formStatus, setFormStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const openModal = (programId: "applied-science" | "krtc-schooling") => {
    setSelectedProgram(programId);
    setIsModalOpen(true);
    setFormStatus("idle");
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProgram("");
    setFormStatus("idle");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setFormStatus("sending");

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY,
      );
      setFormStatus("success");
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setFormStatus("error");
    }
  };

  const currentProgram =
    selectedProgram === "applied-science"
      ? scholarshipPrograms.appliedScience
      : scholarshipPrograms.schooling;

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px]" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Award className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">
                Merit-Based Scholarships
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
              KRTC <span className="text-gradient-primary">Scholarship</span>{" "}
              Programs
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              We believe talent should never be limited by financial
              constraints. KRTC provides opportunities for deserving students
              through merit-based scholarship examinations.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                <Percent className="w-5 h-5 text-primary" />
                <span className="font-semibold text-gray-900">
                  20% Applied Science
                </span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full">
                <Percent className="w-5 h-5 text-emerald-600" />
                <span className="font-semibold text-gray-900">
                  50% KRTC Schooling
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Scholarship Cards Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Applied Science Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div
                className={`h-full rounded-2xl border-2 ${scholarshipPrograms.appliedScience.borderColor} ${scholarshipPrograms.appliedScience.bgColor} p-8 hover:shadow-xl transition-shadow`}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div
                    className={`w-16 h-16 rounded-2xl ${scholarshipPrograms.appliedScience.iconBg} flex items-center justify-center`}
                  >
                    <FlaskConical
                      className={`w-8 h-8 ${scholarshipPrograms.appliedScience.iconColor}`}
                    />
                  </div>
                  <div
                    className={`px-4 py-2 rounded-full bg-gradient-to-r ${scholarshipPrograms.appliedScience.color} text-white font-bold text-2xl`}
                  >
                    {scholarshipPrograms.appliedScience.percentage}%
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {scholarshipPrograms.appliedScience.title}
                </h3>
                <p className="text-primary font-medium mb-4">
                  {scholarshipPrograms.appliedScience.subtitle}
                </p>

                {/* Description */}
                <p className="text-gray-600 mb-6">
                  {scholarshipPrograms.appliedScience.description}
                </p>

                {/* Visual Percentage */}
                <div className="bg-white rounded-xl p-4 mb-6 border border-gray-100">
                  <div className="flex items-center gap-3 mb-3">
                    <Users className="w-5 h-5 text-gray-400" />
                    <span className="text-sm font-medium text-gray-700">
                      {scholarshipPrograms.appliedScience.example}
                    </span>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(10)].map((_, i) => (
                      <div
                        key={i}
                        className={`h-8 flex-1 rounded ${i < 2 ? "bg-primary" : "bg-gray-200"}`}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-gray-500">
                    <span>Scholarship (20%)</span>
                    <span>Regular (80%)</span>
                  </div>
                </div>

                {/* Eligibility */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Eligibility Criteria
                  </h4>
                  <ul className="space-y-2">
                    {scholarshipPrograms.appliedScience.eligibility.map(
                      (item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-gray-600"
                        >
                          <Star className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ),
                    )}
                  </ul>
                </div>

                {/* Departments */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Available Departments
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {scholarshipPrograms.appliedScience.departments.map(
                      (dept, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-white rounded-full text-xs font-medium text-gray-600 border border-gray-200"
                        >
                          {dept}
                        </span>
                      ),
                    )}
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => openModal("applied-science")}
                  className={`w-full py-4 rounded-xl bg-gradient-to-r ${scholarshipPrograms.appliedScience.color} text-white font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity`}
                >
                  Apply for Scholarship
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>

            {/* KRTC Schooling Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div
                className={`h-full rounded-2xl border-2 ${scholarshipPrograms.schooling.borderColor} ${scholarshipPrograms.schooling.bgColor} p-8 hover:shadow-xl transition-shadow`}
              >
                {/* Popular Badge */}
                <div className="absolute -top-3 right-6 px-4 py-1 bg-emerald-600 text-white text-sm font-bold rounded-full">
                  50% Students Get Scholarship!
                </div>

                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div
                    className={`w-16 h-16 rounded-2xl ${scholarshipPrograms.schooling.iconBg} flex items-center justify-center`}
                  >
                    <School
                      className={`w-8 h-8 ${scholarshipPrograms.schooling.iconColor}`}
                    />
                  </div>
                  <div
                    className={`px-4 py-2 rounded-full bg-gradient-to-r ${scholarshipPrograms.schooling.color} text-white font-bold text-2xl`}
                  >
                    {scholarshipPrograms.schooling.percentage}%
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {scholarshipPrograms.schooling.title}
                </h3>
                <p className="text-emerald-600 font-medium mb-4">
                  {scholarshipPrograms.schooling.subtitle}
                </p>

                {/* Description */}
                <p className="text-gray-600 mb-6">
                  {scholarshipPrograms.schooling.description}
                </p>

                {/* Visual Percentage */}
                <div className="bg-white rounded-xl p-4 mb-6 border border-gray-100">
                  <div className="flex items-center gap-3 mb-3">
                    <Users className="w-5 h-5 text-gray-400" />
                    <span className="text-sm font-medium text-gray-700">
                      {scholarshipPrograms.schooling.example}
                    </span>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(10)].map((_, i) => (
                      <div
                        key={i}
                        className={`h-8 flex-1 rounded ${i < 5 ? "bg-emerald-500" : "bg-gray-200"}`}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-gray-500">
                    <span>Scholarship (50%)</span>
                    <span>Regular (50%)</span>
                  </div>
                </div>

                {/* Eligibility */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    Eligibility Criteria
                  </h4>
                  <ul className="space-y-2">
                    {scholarshipPrograms.schooling.eligibility.map(
                      (item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-gray-600"
                        >
                          <Star className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ),
                    )}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Program Benefits
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {scholarshipPrograms.schooling.benefits.map(
                      (benefit, i) => (
                        <span
                          key={i}
                          className="px-3 py-2 bg-white rounded-lg text-xs font-medium text-gray-600 border border-gray-200 text-center"
                        >
                          {benefit}
                        </span>
                      ),
                    )}
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => openModal("krtc-schooling")}
                  className={`w-full py-4 rounded-xl bg-gradient-to-r ${scholarshipPrograms.schooling.color} text-white font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity`}
                >
                  Apply for Scholarship
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <ClipboardCheck className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">
                Application Process
              </span>
            </div>
            <h2 className="heading-xl mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Simple 4-step process to apply for KRTC Scholarship
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="bg-white rounded-2xl p-6 h-full border border-gray-100 hover:shadow-lg transition-shadow">
                    <div
                      className={`w-14 h-14 ${step.color} rounded-2xl flex items-center justify-center mb-4`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="text-sm font-bold text-gray-400 mb-2">
                      Step {step.step}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>

                  {/* Arrow */}
                  {index < howItWorks.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                      <ArrowRight className="w-6 h-6 text-gray-300" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 border border-violet-200 mb-6">
              <HelpCircle className="w-4 h-4 text-violet-600" />
              <span className="text-sm text-violet-600 font-medium">FAQ</span>
            </div>
            <h2 className="heading-xl mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Common questions about our scholarship programs
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <button
                  onClick={() =>
                    setExpandedFaq(expandedFaq === index ? null : index)
                  }
                  className="w-full text-left p-5 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 transition-transform ${
                        expandedFaq === index ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  <AnimatePresence>
                    {expandedFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <p className="mt-4 text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-primary to-red-700">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Apply for Scholarship?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Apply now and start your education and research journey with KRTC.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => openModal("applied-science")}
                className="px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-gray-100 transition-colors"
              >
                Apply for Applied Science
              </button>
              <button
                onClick={() => openModal("krtc-schooling")}
                className="px-8 py-4 bg-emerald-500 text-white font-bold rounded-full hover:bg-emerald-600 transition-colors"
              >
                Apply for KRTC Schooling
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Application Modal */}
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
              className="bg-white rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div
                className={`bg-gradient-to-r ${currentProgram.color} p-6 text-white`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white/70 text-sm mb-1">
                      Scholarship Application
                    </p>
                    <h3 className="text-xl font-bold">
                      {currentProgram.title}
                    </h3>
                    <p className="text-white/80 text-sm mt-1">
                      {currentProgram.percentage}% students receive scholarship
                    </p>
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
                {formStatus === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-emerald-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Application Submitted!
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Your scholarship application has been submitted
                      successfully. We will contact you soon.
                    </p>
                    <button
                      onClick={closeModal}
                      className="px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-colors"
                    >
                      Close
                    </button>
                  </motion.div>
                ) : (
                  <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    {/* Hidden field for program type */}
                    <input
                      type="hidden"
                      name="program_type"
                      value={currentProgram.title}
                    />
                    <input
                      type="hidden"
                      name="subject"
                      value={`Scholarship Application - ${currentProgram.title}`}
                    />

                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="from_name"
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                        placeholder="Enter your full name"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="from_email"
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                        placeholder="+880 1XXX XXXXXX"
                      />
                    </div>

                    {/* Education Level */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Current Education Level *
                      </label>
                      <select
                        name="education_level"
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      >
                        <option value="">Select your education level</option>
                        {selectedProgram === "krtc-schooling" ? (
                          <>
                            <option value="Class 6">Class 6</option>
                            <option value="Class 7">Class 7</option>
                            <option value="Class 8">Class 8</option>
                            <option value="Class 9">Class 9</option>
                            <option value="Class 10">Class 10</option>
                            <option value="Class 11">Class 11</option>
                            <option value="Class 12">Class 12</option>
                          </>
                        ) : (
                          educationLevels.map((level) => (
                            <option key={level} value={level}>
                              {level}
                            </option>
                          ))
                        )}
                      </select>
                    </div>

                    {/* Department (only for Applied Science) */}
                    {selectedProgram === "applied-science" && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Preferred Department *
                        </label>
                        <select
                          name="department"
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                        >
                          <option value="">Select department</option>
                          {scholarshipPrograms.appliedScience.departments.map(
                            (dept) => (
                              <option key={dept} value={dept}>
                                {dept}
                              </option>
                            ),
                          )}
                        </select>
                      </div>
                    )}

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Why do you want this scholarship? (Optional)
                      </label>
                      <textarea
                        name="message"
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                        placeholder="Tell us briefly why you deserve this scholarship..."
                      />
                    </div>

                    {/* Error Message */}
                    {formStatus === "error" && (
                      <div className="p-4 bg-red-50 border border-red-100 rounded-xl text-red-600 text-sm">
                        Something went wrong. Please try again.
                      </div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={formStatus === "sending"}
                      className={`w-full py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-colors ${
                        formStatus === "sending"
                          ? "bg-gray-400 cursor-not-allowed"
                          : `bg-gradient-to-r ${currentProgram.color} hover:opacity-90`
                      }`}
                    >
                      {formStatus === "sending" ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Submit Application
                        </>
                      )}
                    </button>

                    <p className="text-xs text-gray-500 text-center">
                      By submitting, you agree to be contacted by KRTC regarding
                      your scholarship application.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

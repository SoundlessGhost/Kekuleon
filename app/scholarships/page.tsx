"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  ArrowRight,
  X,
  Send,
  Loader2,
  CheckCircle,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";

// EmailJS Credentials (same as contact page)
const EMAILJS_SERVICE_ID = "service_4q2b1np";
const EMAILJS_TEMPLATE_ID = "template_tden6u9";
const EMAILJS_PUBLIC_KEY = "dUpLZYUAf9t68d8UG";

// Scholarship Data
const scholarshipPrograms = {
  appliedScience: {
    id: "applied-science" as const,
    title: "Applied Science Scholarship",
    subtitle: "For University Students & Graduates",
    percentage: 20,
    description:
      "Merit-based scholarships for students pursuing training in our Applied Science departments. 20% of enrolled students receive scholarship support.",
    example: "20 out of 100 students receive scholarship",
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
    id: "krtc-schooling" as const,
    title: "KRTC Schooling Scholarship",
    subtitle: "For Secondary Level Students",
    percentage: 50,
    description:
      "Generous scholarships for talented secondary-level students in our Foundation Program. 50% of enrolled students receive scholarship support.",
    example: "50 out of 100 students receive scholarship",
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

const howItWorks = [
  {
    step: 1,
    title: "Submit Application",
    description:
      "Fill out the scholarship application form with your details and select your preferred program.",
  },
  {
    step: 2,
    title: "Document Verification",
    description:
      "Our team reviews your application and verifies your academic documents and eligibility.",
  },
  {
    step: 3,
    title: "Scholarship Examination",
    description:
      "Qualified candidates appear for the merit-based KRTC Scholarship Examination.",
  },
  {
    step: 4,
    title: "Result & Enrollment",
    description:
      "Successful candidates receive scholarship awards and proceed with enrollment.",
  },
];

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

// Section wrapper (single animation per section)
function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
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
              <span className="text-gray-600">Scholarships</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-5 max-w-3xl">
              KRTC Scholarship Programs
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl">
              We believe talent should never be limited by financial constraints.
              KRTC provides opportunities for deserving students through
              merit-based scholarship examinations.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <button
                onClick={() => openModal("applied-science")}
                className="btn btn-primary group"
              >
                Apply for Scholarship{" "}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <Link href="#programs" className="btn btn-outline-dark">
                View Programs
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3 max-w-lg">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                20% Applied Science Scholarship
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                50% KRTC Schooling Scholarship
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Scholarship Programs */}
      <Section className="section bg-gray-50">
        <div className="container-custom" id="programs">
          <h2 className="heading-lg mb-2">Scholarship Programs</h2>
          <p className="text-gray-600 mb-10 max-w-2xl">
            Two merit-based scholarship tracks designed for different academic
            levels.
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Applied Science */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8">
              <div className="flex items-start justify-between mb-5">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {scholarshipPrograms.appliedScience.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {scholarshipPrograms.appliedScience.subtitle}
                  </p>
                </div>
                <span className="text-3xl font-bold text-primary">20%</span>
              </div>

              <p className="text-gray-600 text-sm mb-5">
                {scholarshipPrograms.appliedScience.description}
              </p>

              <p className="text-sm text-gray-500 border-l-2 border-gray-200 pl-4 mb-6">
                {scholarshipPrograms.appliedScience.example}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">
                  Eligibility Criteria
                </h4>
                <div className="space-y-2">
                  {scholarshipPrograms.appliedScience.eligibility.map(
                    (item) => (
                      <div
                        key={item}
                        className="flex items-start gap-2 text-sm text-gray-600"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {item}
                      </div>
                    ),
                  )}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">
                  Available Departments
                </h4>
                <div className="flex flex-wrap gap-2">
                  {scholarshipPrograms.appliedScience.departments.map(
                    (dept) => (
                      <span
                        key={dept}
                        className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-xs text-gray-600"
                      >
                        {dept}
                      </span>
                    ),
                  )}
                </div>
              </div>

              <button
                onClick={() => openModal("applied-science")}
                className="w-full py-3 bg-primary text-white font-medium rounded-full hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
              >
                Apply for Scholarship
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* KRTC Schooling */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8">
              <div className="flex items-start justify-between mb-5">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {scholarshipPrograms.schooling.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {scholarshipPrograms.schooling.subtitle}
                  </p>
                </div>
                <span className="text-3xl font-bold text-emerald-600">50%</span>
              </div>

              <p className="text-gray-600 text-sm mb-5">
                {scholarshipPrograms.schooling.description}
              </p>

              <p className="text-sm text-gray-500 border-l-2 border-gray-200 pl-4 mb-6">
                {scholarshipPrograms.schooling.example}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">
                  Eligibility Criteria
                </h4>
                <div className="space-y-2">
                  {scholarshipPrograms.schooling.eligibility.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">
                  Program Benefits
                </h4>
                <div className="space-y-2">
                  {scholarshipPrograms.schooling.benefits.map((benefit) => (
                    <div
                      key={benefit}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => openModal("krtc-schooling")}
                className="w-full py-3 bg-emerald-600 text-white font-medium rounded-full hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2"
              >
                Apply for Scholarship
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </Section>

      {/* How It Works */}
      <Section className="section bg-white">
        <div className="container-custom">
          <h2 className="heading-lg mb-2">How It Works</h2>
          <p className="text-gray-600 mb-10 max-w-2xl">
            Simple 4-step process to apply for KRTC Scholarship.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step) => (
              <div key={step.step}>
                <p className="text-sm font-semibold text-primary mb-2">
                  Step {step.step}
                </p>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-lg mb-2">Frequently Asked Questions</h2>
          <p className="text-gray-600 mb-10 max-w-2xl">
            Common questions about our scholarship programs.
          </p>

          <div className="max-w-3xl space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200"
              >
                <button
                  onClick={() =>
                    setExpandedFaq(expandedFaq === index ? null : index)
                  }
                  className="w-full text-left px-5 py-4 flex items-center justify-between"
                >
                  <span className="font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${
                      expandedFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {expandedFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-4 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-16 bg-white">
        <div className="container-custom text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Apply for Scholarship?
          </h2>
          <p className="text-gray-600 mb-8">
            Apply now and start your education and research journey with KRTC.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => openModal("applied-science")}
              className="btn btn-primary group"
            >
              Apply for Applied Science{" "}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => openModal("krtc-schooling")}
              className="px-6 py-3 bg-emerald-600 text-white font-medium rounded-full hover:bg-emerald-700 transition-colors inline-flex items-center gap-2"
            >
              Apply for KRTC Schooling
            </button>
          </div>
        </div>
      </Section>

      {/* Application Modal */}
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
              className="bg-white rounded-2xl w-full max-w-lg overflow-hidden shadow-xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header - clean white style */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
                <div>
                  <p className="text-xs text-gray-400 mb-0.5">
                    Scholarship Application
                  </p>
                  <h3 className="text-lg font-bold text-gray-900">
                    {currentProgram.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-0.5">
                    {currentProgram.percentage}% students receive scholarship
                  </p>
                </div>
                <button
                  onClick={closeModal}
                  className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
                >
                  <X className="w-4 h-4 text-gray-500" />
                </button>
              </div>

              {/* Content */}
              <div className="px-6 py-5">
                {formStatus === "success" ? (
                  <div className="text-center py-6">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-6 h-6 text-emerald-600" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      Application Submitted!
                    </h4>
                    <p className="text-sm text-gray-600 mb-6">
                      Your scholarship application has been submitted
                      successfully. We will contact you soon.
                    </p>
                    <button
                      onClick={closeModal}
                      className="px-6 py-2.5 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors"
                    >
                      Close
                    </button>
                  </div>
                ) : (
                  <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    {/* Hidden fields */}
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
                        placeholder="Enter your full name"
                        className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none"
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
                        placeholder="your@email.com"
                        className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none"
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
                        placeholder="+880 1XXX XXXXXX"
                        className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none"
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
                        className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none bg-white"
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
                          className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none bg-white"
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
                        placeholder="Tell us briefly why you deserve this scholarship..."
                        className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none resize-none"
                      />
                    </div>

                    {/* Error */}
                    {formStatus === "error" && (
                      <div className="p-3 bg-red-50 border border-red-100 rounded-lg text-red-600 text-sm">
                        Something went wrong. Please try again.
                      </div>
                    )}

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={formStatus === "sending"}
                      className={`w-full py-3 rounded-full font-medium text-white flex items-center justify-center gap-2 transition-colors ${
                        formStatus === "sending"
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-primary hover:bg-primary/90"
                      }`}
                    >
                      {formStatus === "sending" ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Submit Application
                        </>
                      )}
                    </button>

                    <p className="text-xs text-gray-400 text-center">
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

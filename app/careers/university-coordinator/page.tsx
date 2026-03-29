"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  MapPin,
  Clock,
  CheckCircle2,
  ArrowRight,
  Download,
  Users,
  GraduationCap,
  Award,
  Globe,
  BookOpen,
  Heart,
  Megaphone,
  FileText,
  Upload,
  ExternalLink,
} from "lucide-react";

// Google Form URL
const GOOGLE_FORM_URL = "https://forms.gle/UcUfqPAELQDvAwaG6";

// Program data
const program = {
  title: "University Coordinator & Student Ambassador",
  subtitle: "Part-Time Program",
  location: "Universities Across Bangladesh",
  type: "Part-time",
  positions: "50-60",
  perUniversity: "100 students across all universities in Bangladesh",
  website: "www.kekuleon.com",

  about: `To strengthen academic outreach and collaboration with universities across Bangladesh, KRTC is establishing a University Coordinator and Student Ambassador Program. Under this initiative, two students from each university will be selected to serve as Part-Time University Coordinators, acting as institutional representatives and helping to connect their universities with KRTC's academic and development activities.`,

  responsibilities: [
    "Sharing information about KRTC programs, scholarships, and academic initiatives with students and faculty members",
    "Assisting in the organization of seminars, academic discussions, and awareness sessions within their universities",
    "Supporting the coordination of university-based scholarship examinations aimed at identifying early-career researchers through equitable access",
    "Facilitating community service and volunteering initiatives among university students",
    "Assisting in other institutional activities and outreach programs when required",
  ],

  eligibleDepartments: [
    "English",
    "Marketing",
    "Chemistry and Applied Chemical Sciences",
    "Pharmaceutical Sciences and Drug Development",
    "Polymer and Plastic Processing Technologies",
    "Materials Science and Engineering Applications",
    "Textile Testing and Quality Assurance",
    "Nursing and Community Healthcare",
  ],

  benefits: [
    {
      icon: "💰",
      title: "Monthly Remuneration",
      desc: "Based on working hours and level of involvement",
    },
    {
      icon: "📜",
      title: "Official Certification",
      desc: "For volunteering and community service activities",
    },
    {
      icon: "🏆",
      title: "Recognition",
      desc: "For participation in seminars, programs, and international events",
    },
    {
      icon: "🌐",
      title: "Academic Networks",
      desc: "Build leadership experience and professional connections",
    },
    {
      icon: "📚",
      title: "Professional Development",
      desc: "Access to academic engagement activities",
    },
    {
      icon: "✈️",
      title: "Free IELTS Prep",
      desc: "For participants preparing for international academic pathways",
    },
  ],

  purpose: `This initiative aims to create a nationwide academic network connecting universities with KRTC's educational, research, and community development activities. By empowering students to act as coordinators and ambassadors, the program promotes academic collaboration, early research engagement, leadership development, and equitable access to opportunities within the higher education ecosystem.`,

  contact: {
    email: "kekuleoninfo@gmail.com",
  },
};

export default function UniversityCoordinatorPage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const handleApply = () => {
    window.open(GOOGLE_FORM_URL, "_blank");
  };

  return (
    <section
      ref={ref}
      className="min-h-screen pt-28 pb-16 bg-gradient-to-b from-blue-50 to-white"
    >
      <div className="container-custom">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="flex items-center gap-2 text-sm text-gray-500 mb-6"
        >
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link
            href="/careers"
            className="hover:text-primary transition-colors"
          >
            Careers
          </Link>
          <span>/</span>
          <span className="text-gray-900">University Coordinator</span>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-6 text-white">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/20 rounded-full text-sm font-medium mb-4">
                  <Users className="w-4 h-4" />
                  PROGRAM ANNOUNCEMENT
                </div>
                <h1 className="text-2xl md:text-3xl font-bold mb-2">
                  {program.title}
                </h1>
                <p className="text-blue-200 text-lg">{program.subtitle}</p>
                <div className="flex flex-wrap gap-4 mt-4 text-blue-100 text-sm">
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {program.location}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {program.type}
                  </span>
                  <span className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    {program.perUniversity}
                  </span>
                </div>
                <div className="mt-4 pt-4 border-t border-white/20">
                  <a
                    href="https://www.kekuleon.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-medium hover:underline"
                  >
                    🌐 {program.website}
                  </a>
                </div>
              </div>

              <div className="p-8">
                <div className="mb-8">
                  <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-blue-600" />
                    About the Program
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {program.about}
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Megaphone className="w-5 h-5 text-blue-600" />
                    Responsibilities
                  </h2>
                  <ul className="space-y-3">
                    {program.responsibilities.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={handleApply}
                    className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors flex items-center gap-2"
                  >
                    Apply Now
                    <ExternalLink className="w-5 h-5" />
                  </button>
                  <a
                    href="/files/Job Offer Letter.pdf"
                    download
                    className="px-8 py-4 border border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-blue-500 hover:text-blue-600 transition-colors flex items-center gap-2"
                  >
                    <Download className="w-5 h-5" />
                    Download PDF
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Eligible Departments */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8"
            >
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-blue-600" />
                Eligible Departments
              </h2>
              <p className="text-gray-600 mb-4">
                Students from the following departments/backgrounds are
                encouraged to apply:
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {program.eligibleDepartments.map((dept, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg"
                  >
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{dept}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8"
            >
              <h2 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-600" />
                Benefits & Opportunities
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {program.benefits.map((benefit, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl"
                  >
                    <span className="text-2xl">{benefit.icon}</span>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Purpose */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white"
            >
              <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5" />
                Purpose of the Program
              </h2>
              <p className="text-blue-100 leading-relaxed">{program.purpose}</p>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Program Summary */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
                <h3 className="font-bold text-gray-900">Program Summary</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-500 text-sm">Position</span>
                    <span className="font-medium text-gray-900 text-sm text-right">
                      University Coordinator
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-500 text-sm">Type</span>
                    <span className="font-medium text-gray-900 text-sm">
                      {program.type}
                    </span>
                  </div>
                  <div className="flex justify-between gap-2 py-2 border-b border-gray-100">
                    <span className="text-gray-500 text-sm">Selection</span>
                    <span className="font-medium text-gray-900 text-sm">
                      {program.perUniversity}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-500 text-sm">
                      Total Positions
                    </span>
                    <span className="font-semibold text-blue-600 text-sm">
                      {program.positions} coordinators
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-500 text-sm">Location</span>
                    <span className="font-medium text-gray-900 text-sm text-right">
                      All Universities
                    </span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-gray-500 text-sm">Status</span>
                    <span className="font-semibold text-emerald-600 text-sm">
                      Open
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleApply}
                  className="w-full mt-6 px-6 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                >
                  Apply Now
                  <ExternalLink className="w-5 h-5" />
                </button>
              </div>
            </motion.div>

            {/* How to Apply */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="bg-amber-50 rounded-2xl overflow-hidden border border-amber-100"
            >
              <div className="bg-amber-100/50 px-6 py-4 border-b border-amber-200/50">
                <h3 className="font-bold text-amber-900 flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  How to Apply
                </h3>
              </div>
              <div className="p-6">
                <p className="text-amber-800 text-sm mb-4">
                  Click "Apply Now" and submit:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-amber-800">
                    <Upload className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">Your CV</span>
                      <span className="text-sm text-amber-600 block">
                        (PDF format)
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-amber-800">
                    <Upload className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">
                        1-page Motivational Letter
                      </span>
                      <span className="text-sm text-amber-600 block">
                        (PDF format)
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
                <h3 className="font-bold text-gray-900">Contact</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm mb-4">
                  Interested student and University students from different
                  University in Bangladesh can contact:
                </p>
                <a
                  href={`mailto:${program.contact.email}`}
                  className="flex items-center gap-3 text-blue-600 hover:text-blue-700 transition-colors font-medium"
                >
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Globe className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-sm">{program.contact.email}</span>
                </a>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <a
                    href="https://www.kekuleon.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-sm font-medium"
                  >
                    🌐 www.kekuleon.com
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

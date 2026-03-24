"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  MapPin,
  Clock,
  Calendar,
  CheckCircle,
  ArrowRight,
  FileText,
  Mail,
  Phone,
  X,
  Send,
  Download,
  Building2,
  GraduationCap,
  Users,
  Heart,
  Globe,
  BookOpen,
} from "lucide-react";

// Job data - এটা পরে CMS থেকে আসতে পারে
const job = {
  id: 1,
  title: "Academic Advisor",
  titleBn: "একাডেমিক অ্যাডভাইজার",
  department: "All Departments",
  type: "Full-time",
  location: "KRTC, Sirajganj, Bangladesh",
  salary: "Negotiable (based on experience)",
  vacancies: 6,
  deadline: "April 30, 2026",
  postedDate: "March 24, 2026",

  shortDescription:
    "We are seeking experienced Academic Advisors to guide students through their educational journey and career planning at KRTC.",

  aboutRole: `KRTC (Kekuleon Research and Training Center) is looking for passionate and experienced Academic Advisors to join our growing team. As an Academic Advisor, you will play a crucial role in shaping the future of our students by providing guidance on academic paths, career opportunities, and personal development.

You will work closely with students across all six departments - Chemistry, Pharmaceutical Sciences, Polymer Processing, Materials Science, Textile Testing, and Nursing & Healthcare - helping them navigate their educational journey and prepare for successful careers both locally and internationally.`,

  responsibilities: [
    "Provide one-on-one academic counseling to students",
    "Guide students in course selection and career planning",
    "Monitor student progress and academic performance",
    "Assist students with higher education applications (local & international)",
    "Coordinate with department heads on student matters",
    "Organize workshops on study skills and career development",
    "Support scholarship applications and documentation",
    "Maintain accurate student records and reports",
  ],

  requirements: [
    "Masters or PhD in a relevant field (Science, Education, or related)",
    "3+ years of experience in teaching, counseling, or academic advising",
    "Strong communication skills in Bengali and English",
    "Experience with international education systems is a plus",
    "Proficiency in MS Office and student management systems",
    "Excellent interpersonal and organizational skills",
    "Passion for student development and mentorship",
  ],

  benefits: [
    "Competitive salary package",
    "Research and publication opportunities",
    "Professional development programs",
    "Collaborative and supportive work environment",
    "Opportunity to impact students' lives",
    "Health and wellness benefits",
    "Annual performance bonus",
  ],

  howToApply: {
    email: "careers@kekuleon.com",
    subject: "Academic Advisor Application - [Your Name]",
    documents: [
      "Updated CV/Resume (PDF)",
      "Cover letter explaining your interest",
      "Copies of academic certificates",
      "Two professional references",
    ],
  },

  contact: {
    name: "HR Department",
    email: "careers@kekuleon.com",
    phone: "+880 134 568 7576",
    whatsapp: "+49 163 485 5414",
  },
};

export default function JobCircularPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="pt-28 pb-12 bg-gradient-to-b from-red-50 to-white relative overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />

        <div className="container-custom relative z-10">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
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
            <span className="text-gray-900">{job.title}</span>
          </motion.div>

          {/* Job Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            {/* Hiring Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 text-primary rounded-full mb-4">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-semibold">HIRING NOW</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              {job.title}
            </h1>
            {/* <p className="text-xl text-gray-500 mb-6">{job.titleBn}</p> */}

            {/* Meta Info */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-4 h-4 text-primary" />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Clock className="w-4 h-4 text-primary" />
                <span>{job.type}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Users className="w-4 h-4 text-primary" />
                <span>{job.vacancies} Positions</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar className="w-4 h-4 text-primary" />
                <span>Deadline: {job.deadline}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-red-700 transition-colors flex items-center gap-2 shadow-lg shadow-primary/20"
              >
                Apply Now
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 border-2 border-gray-200 text-gray-700 font-semibold rounded-xl hover:border-primary hover:text-primary transition-colors flex items-center gap-2">
                <Download className="w-5 h-5" />
                Download PDF
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Job Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* About the Role */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
              >
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-primary" />
                  About the role
                </h2>
                <div className="text-gray-600 leading-relaxed whitespace-pre-line">
                  {job.aboutRole}
                </div>
              </motion.div>

              {/* Responsibilities */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
              >
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  Responsibilities
                </h2>
                <ul className="space-y-3">
                  {job.responsibilities.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Requirements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
              >
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  Requirements
                </h2>
                <ul className="space-y-3">
                  {job.requirements.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-primary to-red-700 rounded-2xl p-8 text-white"
              >
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  What we offer
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {job.benefits.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-3"
                    >
                      <CheckCircle className="w-5 h-5 text-white/80 flex-shrink-0" />
                      <span className="text-white/90">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Quick Info Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
              >
                {/* Header */}
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900">
                    Job summary
                  </h3>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="space-y-3">
                    <div className="flex justify-between py-2">
                      <span className="text-gray-500 text-sm">Position</span>
                      <span className="font-medium text-gray-900 text-sm">
                        {job.title}
                      </span>
                    </div>
                    <div className="flex justify-between py-2 border-t border-gray-50">
                      <span className="text-gray-500 text-sm">Department</span>
                      <span className="font-medium text-gray-900 text-sm">
                        {job.department}
                      </span>
                    </div>
                    <div className="flex justify-between py-2 border-t border-gray-50">
                      <span className="text-gray-500 text-sm">Job type</span>
                      <span className="font-medium text-gray-900 text-sm">
                        {job.type}
                      </span>
                    </div>
                    <div className="flex justify-between py-2 border-t border-gray-50">
                      <span className="text-gray-500 text-sm">Salary</span>
                      <span className="font-medium text-gray-900 text-sm text-right">
                        {job.salary}
                      </span>
                    </div>
                    <div className="flex justify-between py-2 border-t border-gray-50">
                      <span className="text-gray-500 text-sm">Vacancies</span>
                      <span className="font-medium text-gray-900 text-sm">
                        {job.vacancies} positions
                      </span>
                    </div>
                    <div className="flex justify-between py-2 border-t border-gray-50">
                      <span className="text-gray-500 text-sm">Posted</span>
                      <span className="font-medium text-gray-900 text-sm">
                        {job.postedDate}
                      </span>
                    </div>
                    <div className="flex justify-between py-2 border-t border-gray-50">
                      <span className="text-gray-500 text-sm">Deadline</span>
                      <span className="font-semibold text-primary text-sm">
                        {job.deadline}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full mt-6 px-6 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
                  >
                    Apply Now
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>

              {/* How to Apply */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-amber-50 rounded-2xl overflow-hidden border border-amber-100"
              >
                <div className="bg-amber-100/50 px-6 py-4 border-b border-amber-200/50">
                  <h3 className="text-lg font-bold text-amber-900">
                    How to apply
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-amber-800 text-sm mb-3">
                    Send your application to:
                  </p>
                  <a
                    href={`mailto:${job.howToApply.email}`}
                    className="text-amber-700 font-semibold hover:text-amber-900 transition-colors block mb-1 text-sm"
                  >
                    📧 {job.howToApply.email}
                  </a>
                  <p className="text-amber-600 text-xs mb-4">
                    Subject: "{job.howToApply.subject}"
                  </p>

                  <p className="text-amber-800 text-sm font-semibold mb-3">
                    Required documents:
                  </p>
                  <ul className="space-y-2">
                    {job.howToApply.documents.map((doc, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-amber-700"
                      >
                        <span className="text-amber-500">•</span>
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Contact Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100"
              >
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900">
                    Questions?
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-500 text-sm mb-4">
                    Contact our HR team:
                  </p>

                  <div className="space-y-3">
                    <a
                      href={`mailto:${job.contact.email}`}
                      className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors"
                    >
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Mail className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm">{job.contact.email}</span>
                    </a>
                    <a
                      href={`tel:${job.contact.phone}`}
                      className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors"
                    >
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Phone className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm">{job.contact.phone}</span>
                    </a>
                    <a
                      href={`https://wa.me/${job.contact.whatsapp.replace(/\s/g, "")}`}
                      className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors"
                    >
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                        <Globe className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-sm">WhatsApp</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to make an impact?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join KRTC and help shape the future of science education in
            Bangladesh. We're looking for passionate individuals who want to
            make a difference.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-10 py-5 bg-primary text-white font-semibold rounded-xl hover:bg-red-700 transition-colors inline-flex items-center gap-2 shadow-lg shadow-primary/20"
          >
            Apply for this Position
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Application Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-start justify-center overflow-y-auto py-8 px-4"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              className="bg-white rounded-2xl w-full max-w-lg my-auto overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="bg-gradient-to-r from-primary to-red-700 p-6 text-white">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-red-100 text-sm mb-1">Apply for</p>
                    <h3 className="text-2xl font-bold">{job.title}</h3>
                  </div>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("Application submitted!");
                    setIsModalOpen(false);
                  }}
                >
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Enter your full name"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+880 1XX XXX XXXX"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Highest qualification *
                      </label>
                      <select
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                      >
                        <option value="">Select qualification</option>
                        <option value="masters">Masters</option>
                        <option value="mphil">M.Phil</option>
                        <option value="phd">PhD</option>
                        <option value="postdoc">Post-Doctoral</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Years of experience *
                      </label>
                      <select
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                      >
                        <option value="">Select experience</option>
                        <option value="1-3">1-3 years</option>
                        <option value="3-5">3-5 years</option>
                        <option value="5-10">5-10 years</option>
                        <option value="10+">10+ years</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Cover letter (optional)
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Tell us why you're interested in this role..."
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
                      />
                    </div>
                  </div>

                  <div className="bg-amber-50 rounded-xl p-4 mt-6">
                    <p className="text-sm text-amber-800">
                      <strong>Note:</strong> After submitting this form, please
                      email your CV and certificates to{" "}
                      <a
                        href={`mailto:${job.howToApply.email}`}
                        className="text-primary font-semibold"
                      >
                        {job.howToApply.email}
                      </a>
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-6 px-6 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Submit Application
                  </button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

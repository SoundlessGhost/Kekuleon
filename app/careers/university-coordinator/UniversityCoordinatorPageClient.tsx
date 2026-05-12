"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  MapPin,
  Clock,
  Check,
  Download,
  Users,
  ArrowRight,
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
      title: "Monthly Remuneration",
      desc: "Based on working hours and level of involvement",
    },
    {
      title: "Official Certification",
      desc: "For volunteering and community service activities",
    },
    {
      title: "Recognition",
      desc: "For participation in seminars, programs, and international events",
    },
    {
      title: "Academic Networks",
      desc: "Build leadership experience and professional connections",
    },
    {
      title: "Professional Development",
      desc: "Access to academic engagement activities",
    },
    {
      title: "Free IELTS Prep",
      desc: "For participants preparing for international academic pathways",
    },
  ],

  purpose: `This initiative aims to create a nationwide academic network connecting universities with KRTC's educational, research, and community development activities. By empowering students to act as coordinators and ambassadors, the program promotes academic collaboration, early research engagement, leadership development, and equitable access to opportunities within the higher education ecosystem.`,

  contact: {
    email: "kekuleoninfo@gmail.com",
  },
};

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

export default function UniversityCoordinatorPage() {
  const handleApply = () => {
    window.open(GOOGLE_FORM_URL, "_blank");
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-12 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
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
            </div>

            <div className="max-w-3xl">
              <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
                {program.subtitle}
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-5">
                {program.title}
              </h1>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600">
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  {program.location}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gray-400" />
                  {program.type}
                </span>
                <span className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-gray-400" />
                  {program.perUniversity}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main content + Sidebar */}
      <section className="pb-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-10 pt-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* About */}
              <Section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  About the Program
                </h2>
                <p className="text-gray-600 leading-relaxed">{program.about}</p>
              </Section>

              {/* Responsibilities */}
              <Section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Responsibilities
                </h2>
                <ul className="space-y-3">
                  {program.responsibilities.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </Section>

              {/* Eligible Departments */}
              <Section>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Eligible Departments
                </h2>
                <p className="text-gray-600 mb-6">
                  Students from the following departments/backgrounds are
                  encouraged to apply:
                </p>
                <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                  {program.eligibleDepartments.map((dept, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                      <span className="text-gray-700">{dept}</span>
                    </li>
                  ))}
                </ul>
              </Section>

              {/* Benefits */}
              <Section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Benefits & Opportunities
                </h2>
                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                  {program.benefits.map((benefit, i) => (
                    <div key={i} className="border-t-2 border-primary pt-4">
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-gray-600">{benefit.desc}</p>
                    </div>
                  ))}
                </div>
              </Section>

              {/* Purpose */}
              <Section>
                <div className="border-l-4 border-primary pl-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Purpose of the Program
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {program.purpose}
                  </p>
                </div>
              </Section>

              {/* Apply buttons */}
              <Section>
                <div className="flex flex-wrap gap-4 pt-4">
                  <button
                    onClick={handleApply}
                    className="btn btn-primary group"
                  >
                    Apply Now
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <a
                    href="/files/Job Offer Letter.pdf"
                    download
                    className="btn btn-outline rounded-full"
                  >
                    <Download className="w-4 h-4" />
                    Download PDF
                  </a>
                </div>
              </Section>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                {/* Program Summary */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5 }}
                  className="bg-white border border-gray-200 rounded-xl p-6"
                >
                  <h3 className="font-bold text-gray-900 mb-4">
                    Program Summary
                  </h3>
                  <dl className="space-y-3 text-sm">
                    <div className="flex justify-between gap-4 py-2 border-b border-gray-100">
                      <dt className="text-gray-500">Position</dt>
                      <dd className="font-medium text-gray-900 text-right">
                        University Coordinator
                      </dd>
                    </div>
                    <div className="flex justify-between gap-4 py-2 border-b border-gray-100">
                      <dt className="text-gray-500">Type</dt>
                      <dd className="font-medium text-gray-900">
                        {program.type}
                      </dd>
                    </div>
                    <div className="flex justify-between gap-4 py-2 border-b border-gray-100">
                      <dt className="text-gray-500">Selection</dt>
                      <dd className="font-medium text-gray-900 text-right">
                        {program.perUniversity}
                      </dd>
                    </div>
                    <div className="flex justify-between gap-4 py-2 border-b border-gray-100">
                      <dt className="text-gray-500">Total Positions</dt>
                      <dd className="font-semibold text-primary">
                        {program.positions} coordinators
                      </dd>
                    </div>
                    <div className="flex justify-between gap-4 py-2 border-b border-gray-100">
                      <dt className="text-gray-500">Location</dt>
                      <dd className="font-medium text-gray-900 text-right">
                        All Universities
                      </dd>
                    </div>
                    <div className="flex justify-between gap-4 py-2">
                      <dt className="text-gray-500">Status</dt>
                      <dd className="font-semibold text-emerald-600">Open</dd>
                    </div>
                  </dl>

                  <button
                    onClick={handleApply}
                    className="btn btn-primary w-full mt-6 group"
                  >
                    Apply Now
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>

                {/* How to Apply */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5 }}
                  className="bg-white border border-gray-200 rounded-xl p-6"
                >
                  <h3 className="font-bold text-gray-900 mb-3">How to Apply</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Click &ldquo;Apply Now&rdquo; and submit:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900 text-sm">
                          Your CV
                        </p>
                        <p className="text-xs text-gray-500">(PDF format)</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900 text-sm">
                          1-page Motivational Letter
                        </p>
                        <p className="text-xs text-gray-500">(PDF format)</p>
                      </div>
                    </li>
                  </ul>
                </motion.div>

                {/* Contact */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5 }}
                  className="bg-white border border-gray-200 rounded-xl p-6"
                >
                  <h3 className="font-bold text-gray-900 mb-3">Contact</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Interested students from different universities in
                    Bangladesh can contact:
                  </p>
                  <a
                    href={`mailto:${program.contact.email}`}
                    className="text-sm text-primary hover:underline font-medium break-all"
                  >
                    {program.contact.email}
                  </a>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <a
                      href="https://www.kekuleon.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-primary hover:underline font-medium"
                    >
                      {program.website}
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </motion.div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

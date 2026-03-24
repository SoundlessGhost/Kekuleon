"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  BookOpen,
  Award,
  Globe,
  Linkedin,
  FileText,
  ArrowLeft,
  Calendar,
  Building2,
  Users,
  Beaker,
} from "lucide-react";

// Sample researcher data - এটা পরে dynamic করা যাবে
const researcher = {
  id: 1,
  name: "Dr. Abdul Rahman",
  namebn: "ড. আবদুল রহমান",
  title: "Lead Researcher & Academic Advisor",
  department: "Chemistry and Applied Chemical Sciences",
  image: null, // placeholder - actual image path
  initials: "AR",
  email: "rahman@kekuleon.com",
  phone: "+880 1XX XXX XXXX",
  location: "KRTC, Sirajganj, Bangladesh",

  bio: `Dr. Abdul Rahman is a distinguished analytical chemist with over 15 years of experience in research and academia. He completed his PhD in Analytical Chemistry from the University of Dhaka, followed by postdoctoral research at TU Berlin, Germany. His work focuses on developing sustainable analytical methods for environmental monitoring and green chemistry applications.

At KRTC, Dr. Rahman leads the Chemistry department and mentors students in advanced analytical techniques, research methodology, and scientific writing. He is passionate about bridging the gap between theoretical knowledge and practical industry applications.`,

  education: [
    {
      degree: "PhD in Analytical Chemistry",
      institution: "University of Dhaka",
      year: "2010",
    },
    {
      degree: "MSc in Chemistry",
      institution: "University of Dhaka",
      year: "2005",
    },
    {
      degree: "BSc (Hons) in Chemistry",
      institution: "University of Rajshahi",
      year: "2003",
    },
  ],

  experience: [
    {
      role: "Lead Researcher & Academic Advisor",
      org: "KRTC",
      period: "2025 - Present",
    },
    {
      role: "Postdoctoral Researcher",
      org: "TU Berlin, Germany",
      period: "2012 - 2014",
    },
    {
      role: "Assistant Professor",
      org: "University of Dhaka",
      period: "2010 - 2025",
    },
  ],

  researchInterests: [
    "Green Chemistry",
    "Environmental Monitoring",
    "Analytical Method Development",
    "HPLC & GC Techniques",
    "Quality Control",
    "Sustainable Processes",
  ],

  publications: [
    {
      title:
        "Development of eco-friendly extraction methods for pharmaceutical analysis",
      journal: "Journal of Analytical Chemistry",
      year: 2023,
    },
    {
      title: "Green approaches in environmental water quality assessment",
      journal: "Environmental Science & Technology",
      year: 2022,
    },
    {
      title: "HPLC method validation for multi-residue pesticide analysis",
      journal: "Food Chemistry",
      year: 2021,
    },
  ],

  awards: [
    {
      title: "Best Research Paper Award",
      org: "Bangladesh Chemical Society",
      year: 2022,
    },
    { title: "Excellence in Teaching", org: "University of Dhaka", year: 2019 },
  ],

  socialLinks: {
    linkedin: "https://linkedin.com/in/example",
    researchgate: "https://researchgate.net/profile/example",
    orcid: "https://orcid.org/0000-0000-0000-0000",
  },
};

export default function ResearcherProfilePage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="pt-28 pb-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px]" />

        <div className="container-custom relative z-10">
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={heroInView ? { opacity: 1, x: 0 } : {}}
          >
            <Link
              href="/team"
              className="inline-flex items-center gap-2 text-gray-500 hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">Back to Team</span>
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-10">
            {/* Left Column - Photo & Basic Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 sticky top-28">
                {/* Profile Image */}
                <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-primary to-red-600 flex items-center justify-center mb-6">
                  {researcher.image ? (
                    <img
                      src={researcher.image}
                      alt={researcher.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  ) : (
                    <span className="text-5xl font-bold text-white">
                      {researcher.initials}
                    </span>
                  )}
                </div>

                {/* Name & Title */}
                <div className="text-center mb-6">
                  <h1 className="text-2xl font-bold text-gray-900 mb-1">
                    {researcher.name}
                  </h1>
                  <p className="text-sm text-gray-500 mb-2">
                    {researcher.namebn}
                  </p>
                  <p className="text-primary font-medium">{researcher.title}</p>
                  <p className="text-sm text-gray-500 mt-1">
                    {researcher.department}
                  </p>
                </div>

                {/* Contact Info */}
                <div className="space-y-3 border-t border-gray-100 pt-6">
                  <a
                    href={`mailto:${researcher.email}`}
                    className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors"
                  >
                    <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm">{researcher.email}</span>
                  </a>
                  <a
                    href={`tel:${researcher.phone}`}
                    className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors"
                  >
                    <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm">{researcher.phone}</span>
                  </a>
                  <div className="flex items-center gap-3 text-gray-600">
                    <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm">{researcher.location}</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-3 mt-6 pt-6 border-t border-gray-100">
                  {researcher.socialLinks.linkedin && (
                    <a
                      href={researcher.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition-all"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  {researcher.socialLinks.researchgate && (
                    <a
                      href={researcher.socialLinks.researchgate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition-all"
                    >
                      <Globe className="w-5 h-5" />
                    </a>
                  )}
                  {researcher.socialLinks.orcid && (
                    <a
                      href={researcher.socialLinks.orcid}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition-all"
                    >
                      <FileText className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Details */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-2 space-y-8"
            >
              {/* Bio */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  About
                </h2>
                <div className="text-gray-600 leading-relaxed whitespace-pre-line">
                  {researcher.bio}
                </div>
              </div>

              {/* Research Interests */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Beaker className="w-5 h-5 text-primary" />
                  Research interests
                </h2>
                <div className="flex flex-wrap gap-2">
                  {researcher.researchInterests.map((interest, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-primary/5 text-primary rounded-full text-sm font-medium"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  Education
                </h2>
                <div className="space-y-4">
                  {researcher.education.map((edu, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {edu.degree}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {edu.institution}
                        </p>
                        <p className="text-gray-400 text-sm">{edu.year}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-primary" />
                  Experience
                </h2>
                <div className="space-y-4">
                  {researcher.experience.map((exp, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Building2 className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {exp.role}
                        </h3>
                        <p className="text-gray-600 text-sm">{exp.org}</p>
                        <p className="text-gray-400 text-sm">{exp.period}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Publications */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  Selected publications
                </h2>
                <div className="space-y-4">
                  {researcher.publications.map((pub, i) => (
                    <div
                      key={i}
                      className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                    >
                      <h3 className="font-medium text-gray-900 mb-1">
                        {pub.title}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {pub.journal} • {pub.year}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Awards */}
              {researcher.awards.length > 0 && (
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5 text-primary" />
                    Awards & honors
                  </h2>
                  <div className="space-y-4">
                    {researcher.awards.map((award, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Award className="w-5 h-5 text-amber-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">
                            {award.title}
                          </h3>
                          <p className="text-gray-500 text-sm">
                            {award.org} • {award.year}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

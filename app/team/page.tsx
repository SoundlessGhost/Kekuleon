"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Users, ArrowRight, Mail, Linkedin } from "lucide-react";

// Team data - এটা পরে CMS/database থেকে আসবে
const teamMembers = [
  {
    id: 1,
    slug: "dr-abdul-rahman",
    name: "Dr. Abdul Rahman",
    title: "Lead Researcher",
    department: "Chemistry",
    initials: "AR",
    color: "bg-primary",
    email: "rahman@kekuleon.com",
  },
  {
    id: 2,
    slug: "dr-fatima-ahmed",
    name: "Dr. Fatima Ahmed",
    title: "Senior Advisor",
    department: "Pharmaceutical",
    initials: "FA",
    color: "bg-emerald-500",
    email: "fatima@kekuleon.com",
  },
  {
    id: 3,
    slug: "prof-karim-hossain",
    name: "Prof. Karim Hossain",
    title: "Academic Advisor",
    department: "Materials Science",
    initials: "KH",
    color: "bg-amber-500",
    email: "karim@kekuleon.com",
  },
  {
    id: 4,
    slug: "dr-nasreen-sultana",
    name: "Dr. Nasreen Sultana",
    title: "Research Lead",
    department: "Nursing & Healthcare",
    initials: "NS",
    color: "bg-teal-500",
    email: "nasreen@kekuleon.com",
  },
  {
    id: 5,
    slug: "dr-rafiq-islam",
    name: "Dr. Rafiq Islam",
    title: "Department Head",
    department: "Polymer Processing",
    initials: "RI",
    color: "bg-orange-500",
    email: "rafiq@kekuleon.com",
  },
  {
    id: 6,
    slug: "dr-sharmin-akter",
    name: "Dr. Sharmin Akter",
    title: "Quality Specialist",
    department: "Textile Testing",
    initials: "SA",
    color: "bg-indigo-500",
    email: "sharmin@kekuleon.com",
  },
];

const advisoryBoard = [
  {
    id: 101,
    slug: "prof-dr-mahbub",
    name: "Prof. Dr. Mahbubur Rahman",
    title: "Chairman, Advisory Board",
    affiliation: "University of Dhaka",
    initials: "MR",
    color: "bg-gray-700",
  },
  {
    id: 102,
    slug: "dr-helena-meyer",
    name: "Dr. Helena Meyer",
    title: "International Advisor",
    affiliation: "TU Berlin, Germany",
    initials: "HM",
    color: "bg-blue-600",
  },
];

export default function TeamPage() {
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
            <span className="text-gray-900">Our Team</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            className="max-w-3xl"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full mb-6">
              <Users className="w-4 h-4" />
              <span className="text-sm font-semibold">Our Team</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Meet Our Experts
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Our team of dedicated researchers, advisors, and educators are
              committed to bridging the gap between theory and practice in
              science education.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Research Team Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Research & Academic Team
            </h2>
            <p className="text-gray-600">
              Our core team leading research and training programs
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link href={`/team/${member.slug}`}>
                  <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all group cursor-pointer">
                    {/* Avatar */}
                    <div
                      className={`w-20 h-20 ${member.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform`}
                    >
                      <span className="text-2xl font-bold text-white">
                        {member.initials}
                      </span>
                    </div>

                    {/* Info */}
                    <div className="text-center">
                      <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-primary text-sm font-medium mb-1">
                        {member.title}
                      </p>
                      <p className="text-gray-500 text-sm">
                        {member.department}
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="flex justify-center gap-2 mt-4 pt-4 border-t border-gray-100">
                      <a
                        href={`mailto:${member.email}`}
                        onClick={(e) => e.stopPropagation()}
                        className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition-all"
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                      <div className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition-all">
                        <Linkedin className="w-4 h-4" />
                      </div>
                      <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Advisory Board
            </h2>
            <p className="text-gray-600">
              Distinguished experts guiding our vision and direction
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {advisoryBoard.map((member, i) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link href={`/team/${member.slug}`}>
                  <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-gray-300 hover:shadow-lg transition-all group cursor-pointer flex items-center gap-5">
                    {/* Avatar */}
                    <div
                      className={`w-16 h-16 ${member.color} rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform`}
                    >
                      <span className="text-xl font-bold text-white">
                        {member.initials}
                      </span>
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors truncate">
                        {member.name}
                      </h3>
                      <p className="text-primary text-sm font-medium">
                        {member.title}
                      </p>
                      <p className="text-gray-500 text-sm">
                        {member.affiliation}
                      </p>
                    </div>

                    <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-primary transition-colors flex-shrink-0" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary to-red-700 rounded-3xl p-10 md:p-16 text-white text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join Our Team
            </h2>
            <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">
              We're always looking for passionate researchers, educators, and
              advisors who share our vision of transforming science education.
            </p>
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-xl hover:bg-red-50 transition-colors"
            >
              View Open Positions
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

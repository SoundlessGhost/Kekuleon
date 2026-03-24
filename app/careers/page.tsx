"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  Briefcase,
  MapPin,
  Clock,
  Calendar,
  ArrowRight,
  Users,
  GraduationCap,
  Heart,
  Globe,
} from "lucide-react";

// Jobs data - এটা পরে CMS/database থেকে আসবে
const openPositions = [
  {
    id: 1,
    slug: "academic-advisor",
    title: "Academic Advisor",
    department: "All Departments",
    type: "Full-time",
    location: "Sirajganj",
    vacancies: 6,
    deadline: "April 30, 2026",
    featured: true,
    description:
      "Guide students through their educational journey and career planning at KRTC.",
  },
  {
    id: 2,
    slug: "lab-technician-chemistry",
    title: "Lab Technician",
    department: "Chemistry",
    type: "Full-time",
    location: "Sirajganj",
    vacancies: 2,
    deadline: "May 15, 2026",
    featured: false,
    description:
      "Assist in laboratory operations, equipment maintenance, and student training.",
  },
  {
    id: 3,
    slug: "research-assistant",
    title: "Research Assistant",
    department: "Pharmaceutical",
    type: "Part-time",
    location: "Sirajganj",
    vacancies: 3,
    deadline: "May 20, 2026",
    featured: false,
    description:
      "Support ongoing research projects and assist with data collection and analysis.",
  },
];

const benefits = [
  {
    icon: Heart,
    title: "Health Benefits",
    desc: "Comprehensive health coverage for you and family",
  },
  {
    icon: GraduationCap,
    title: "Learning",
    desc: "Professional development and training opportunities",
  },
  {
    icon: Globe,
    title: "Growth",
    desc: "International collaboration and research opportunities",
  },
  {
    icon: Users,
    title: "Culture",
    desc: "Supportive and collaborative work environment",
  },
];

export default function CareersPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="pt-28 pb-16 bg-gradient-to-b from-red-50 to-white relative overflow-hidden"
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
            <span className="text-gray-900">Careers</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            className="max-w-3xl"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full mb-6">
              <Briefcase className="w-4 h-4" />
              <span className="text-sm font-semibold">We're Hiring</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Join Our Mission
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Be part of a team dedicated to transforming science education in
              Bangladesh. We're looking for passionate individuals who want to
              make a real impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Open Positions
            </h2>
            <p className="text-gray-600">
              {openPositions.length} opportunities available
            </p>
          </motion.div>

          <div className="space-y-4">
            {openPositions.map((job, i) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link href={`/careers/${job.slug}`}>
                  <div
                    className={`bg-white rounded-2xl p-6 border ${job.featured ? "border-primary/30 shadow-lg shadow-primary/5" : "border-gray-100"} hover:border-primary/50 hover:shadow-xl transition-all group cursor-pointer`}
                  >
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      {/* Left - Info */}
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          {job.featured && (
                            <span className="px-3 py-1 bg-red-100 text-primary text-xs font-semibold rounded-full">
                              FEATURED
                            </span>
                          )}
                          <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                            {job.department}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                          {job.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-3">
                          {job.description}
                        </p>

                        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {job.type}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {job.vacancies} positions
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            Deadline: {job.deadline}
                          </span>
                        </div>
                      </div>

                      {/* Right - CTA */}
                      <div className="flex items-center gap-4">
                        <div className="px-6 py-3 bg-primary/10 text-primary font-semibold rounded-xl group-hover:bg-primary group-hover:text-white transition-all flex items-center gap-2">
                          Apply Now
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Why Join KRTC?
            </h2>
            <p className="text-gray-600">
              Benefits and perks of being part of our team
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 text-center"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-500 text-sm">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-10 md:p-16 text-white"
          >
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold mb-4">
                Don't see a perfect fit?
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                We're always interested in meeting talented individuals. Send us
                your CV and we'll keep you in mind for future opportunities.
              </p>
              <a
                href="mailto:careers@kekuleon.com"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-100 transition-colors"
              >
                Send Your CV
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

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
} from "lucide-react";

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
    active: false,
    description:
      "Guide students through their educational journey and career planning at KRTC.",
  },
  {
    id: 2,
    slug: "university-coordinator",
    title: "University Coordinator & Student Ambassador",
    department: "All Universities",
    type: "Part-time",
    location: "Bangladesh (Remote)",
    vacancies: 60,
    deadline: "Open",
    featured: true,
    active: true,
    description:
      "Represent KRTC at your university and help connect students with academic opportunities.",
  },
  {
    id: 3,
    slug: "lab-technician-chemistry",
    title: "Lab Technician",
    department: "Chemistry",
    type: "Full-time",
    location: "Sirajganj",
    vacancies: 2,
    deadline: "Coming Soon",
    featured: false,
    active: false,
    description:
      "Assist in laboratory operations, equipment maintenance, and student training.",
  },
  {
    id: 4,
    slug: "research-assistant",
    title: "Research Assistant",
    department: "Pharmaceutical",
    type: "Part-time",
    location: "Sirajganj",
    vacancies: 3,
    deadline: "Coming Soon",
    featured: false,
    active: false,
    description:
      "Support ongoing research projects and assist with data collection and analysis.",
  },
];

const benefits = [
  {
    title: "Health Benefits",
    desc: "Comprehensive health coverage for you and family",
  },
  {
    title: "Learning",
    desc: "Professional development and training opportunities",
  },
  {
    title: "Growth",
    desc: "International collaboration and research opportunities",
  },
  {
    title: "Culture",
    desc: "Supportive and collaborative work environment",
  },
];

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

export default function CareersPage() {
  const activePositions = openPositions.filter((job) => job.active);
  const upcomingPositions = openPositions.filter((job) => !job.active);

  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Careers
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight text-gray-900 mb-6">
              Join Our Mission
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Be part of a team dedicated to transforming science education in
              Bangladesh. We are looking for passionate individuals who want to
              make a real impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Active Positions */}
      <Section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Open Positions
          </h2>
          <p className="text-gray-600 mb-10">
            {activePositions.length} opportunit{activePositions.length === 1 ? "y" : "ies"} currently accepting applications
          </p>

          <div className="space-y-4">
            {activePositions.map((job) => (
              <Link key={job.id} href={`/careers/${job.slug}`}>
                <div
                  className={`rounded-2xl border p-6 transition-all group cursor-pointer ${
                    job.featured
                      ? "border-primary/20 bg-primary/[0.02]"
                      : "border-gray-200 bg-white"
                  } hover:border-primary/40 hover:shadow-md`}
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors">
                        {job.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">
                        {job.description}
                      </p>
                      <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-500">
                        <span className="flex items-center gap-1.5">
                          <Briefcase className="w-4 h-4" />
                          {job.department}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-4 h-4" />
                          {job.type}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Users className="w-4 h-4" />
                          {job.vacancies} positions
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" />
                          Deadline: {job.deadline}
                        </span>
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-full group-hover:bg-primary/90 transition-colors whitespace-nowrap">
                      View Details
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {/* Upcoming Positions */}
      {upcomingPositions.length > 0 && (
        <Section className="py-16 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Upcoming Positions
            </h2>
            <p className="text-gray-600 mb-10">
              These positions will be open for applications soon
            </p>

            <div className="space-y-4">
              {upcomingPositions.map((job) => (
                <div
                  key={job.id}
                  className="rounded-2xl border border-gray-200 bg-white p-6 opacity-60"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-500 mb-1">
                        {job.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-3">
                        {job.description}
                      </p>
                      <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-400">
                        <span className="flex items-center gap-1.5">
                          <Briefcase className="w-4 h-4" />
                          {job.department}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-4 h-4" />
                          {job.type}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Users className="w-4 h-4" />
                          {job.vacancies} positions
                        </span>
                      </div>
                    </div>

                    <span className="inline-flex items-center px-5 py-2.5 bg-gray-200 text-gray-400 text-sm font-semibold rounded-full cursor-not-allowed whitespace-nowrap">
                      Coming Soon
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* Benefits */}
      <Section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Why Join KRTC?
          </h2>
          <p className="text-gray-600 mb-10">
            Benefits and perks of being part of our team
          </p>

          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl">
            {benefits.map((benefit, i) => (
              <div key={i}>
                <h3 className="font-semibold text-gray-900 mb-1">
                  {benefit.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}

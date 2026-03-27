"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  Users,
  ArrowRight,
  GraduationCap,
  FlaskConical,
  BookOpen,
  Crown,
  ChevronRight,
} from "lucide-react";
import {
  getLeadership,
  getSchoolingLeadership,
  getSchooling,
} from "@/lib/team-data";

// Get team data
const leadership = getLeadership();
const schoolingLeadership = getSchoolingLeadership();
const schoolingTeachers = getSchooling();

export default function TeamPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <>
      {/* Hero Section - Minimal */}
      <section ref={heroRef} className="pt-28 pb-12 bg-white relative">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            className="flex items-center gap-2 text-sm text-gray-400 mb-4"
          >
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-600">Our Team</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
              Meet Our Team
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl">
              Dedicated educators bridging the gap between theory and practice
              in science education.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-xl font-semibold text-gray-900">Leadership</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4 max-w-3xl">
            {leadership.map((member, i) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={`/team/${member.slug}`}>
                  <div className="bg-white rounded-xl p-5 border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all group cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-14 h-14 ${member.color} rounded-full flex items-center justify-center flex-shrink-0`}
                      >
                        <span className="text-lg font-semibold text-white">
                          {member.initials}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors">
                          {member.name}
                        </h3>
                        <p className="text-sm text-primary font-medium">
                          {member.title}
                        </p>
                        {member.education.length > 0 && (
                          <p className="text-xs text-gray-400 mt-1 truncate">
                            {member.education[0].degree}
                          </p>
                        )}
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Department of Applied Sciences - Coming Soon */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <div className="flex items-center gap-2 mb-1">
              <FlaskConical className="w-5 h-5 text-red-500" />
              <h2 className="text-xl font-semibold text-gray-900">
                Department of Applied Sciences
              </h2>
            </div>
            <p className="text-sm text-gray-500">
              Research & advanced scientific training
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-xl p-8 text-center border border-dashed border-gray-200"
          >
            <p className="text-gray-400">Coming Soon</p>
          </motion.div>
        </div>
      </section>

      {/* KRTC Schooling Foundation Pipeline */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="flex items-center gap-2 mb-1">
              <BookOpen className="w-5 h-5 text-blue-500" />
              <h2 className="text-xl font-semibold text-gray-900">
                KRTC Schooling Foundation Pipeline
              </h2>
            </div>
            <p className="text-sm text-gray-500">SSC & HSC preparation team</p>
          </motion.div>

          {/* Administration */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <Crown className="w-4 h-4 text-amber-500" />
              <h3 className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                Administration
              </h3>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {schoolingLeadership.map((member, i) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link href={`/team/${member.slug}`}>
                    <div className="bg-white rounded-xl p-5 border border-amber-100 hover:border-amber-200 hover:shadow-lg transition-all group cursor-pointer h-full">
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-12 h-12 ${member.color} rounded-full flex items-center justify-center flex-shrink-0`}
                        >
                          <span className="text-base font-semibold text-white">
                            {member.initials}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-gray-900 group-hover:text-amber-600 transition-colors">
                            {member.name}
                          </h4>
                          <p className="text-sm text-amber-600 font-medium">
                            {member.title}
                          </p>
                          {member.education.length > 0 && (
                            <p className="text-xs text-gray-400 mt-2 line-clamp-1">
                              {member.education[0].degree}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Teaching Faculty */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="w-4 h-4 text-blue-500" />
              <h3 className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                Teaching Faculty
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {schoolingTeachers.map((member, i) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link href={`/team/${member.slug}`}>
                    <div className="bg-white rounded-xl p-4 border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all group cursor-pointer h-full">
                      <div className="flex items-center gap-3 mb-3">
                        <div
                          className={`w-10 h-10 ${member.color} rounded-full flex items-center justify-center flex-shrink-0`}
                        >
                          <span className="text-sm font-semibold text-white">
                            {member.initials}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-gray-900 text-sm group-hover:text-blue-600 transition-colors truncate">
                            {member.name}
                          </h4>
                          <p className="text-xs text-blue-600">
                            {member.title}
                          </p>
                        </div>
                      </div>

                      <div className="text-xs text-gray-500 mb-2">
                        {member.department}
                      </div>

                      {member.education.length > 0 && (
                        <p className="text-xs text-gray-400 line-clamp-2">
                          {member.education[0].degree}
                        </p>
                      )}
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Join Team CTA - Minimal */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-xl mx-auto"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Join Our Team
            </h2>
            <p className="text-gray-500 mb-6">
              We&apos;re looking for passionate educators who share our vision.
            </p>
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              View Positions <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

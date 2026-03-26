"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  Users,
  ArrowRight,
  Mail,
  Linkedin,
  Phone,
  GraduationCap,
  Award,
} from "lucide-react";
import { getLeadership, getInstructors } from "@/lib/team-data";

// Get team data
const leadership = getLeadership();
const instructors = getInstructors();

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
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px]" />

        <div className="container-custom relative z-10">
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full mb-6">
              <Users className="w-4 h-4" />
              <span className="text-sm font-semibold">Our Team</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Our dedicated team of educators and instructors are committed to
              bridging the gap between theory and practice in science education
              at KRTC.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Leadership Team
            </h2>
            <p className="text-gray-600">
              Founding leaders guiding KRTC&apos;s vision and operations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
            {leadership.map((member, i) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={`/team/${member.slug}`}>
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 hover:border-primary/30 hover:shadow-xl transition-all group cursor-pointer">
                    <div className="flex items-start gap-5">
                      <div
                        className={`w-20 h-20 ${member.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform shadow-lg`}
                      >
                        <span className="text-2xl font-bold text-white">
                          {member.initials}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors">
                          {member.name}
                        </h3>
                        <p className="text-primary font-semibold text-sm mb-2">
                          {member.title}
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed mb-3 line-clamp-2">
                          {member.bio.substring(0, 120)}...
                        </p>
                        {member.education.length > 0 && (
                          <p className="text-xs text-gray-500 flex items-center gap-1">
                            <GraduationCap className="w-3 h-3" />
                            {member.education[0].degree}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                      <div className="flex gap-2">
                        {member.email && (
                          <span
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              window.location.href = `mailto:${member.email}`;
                            }}
                            className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg text-gray-600 hover:bg-primary hover:text-white transition-all text-sm"
                          >
                            <Mail className="w-4 h-4" /> Email
                          </span>
                        )}
                        {member.linkedin && (
                          <span
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              window.open(member.linkedin, "_blank");
                            }}
                            className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg text-gray-600 hover:bg-blue-600 hover:text-white transition-all text-sm"
                          >
                            <Linkedin className="w-4 h-4" /> LinkedIn
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all">
                        View Profile <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Instructors & Teaching Staff
            </h2>
            <p className="text-gray-600">
              Qualified educators delivering quality science education
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {instructors.map((member, i) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link href={`/team/${member.slug}`}>
                  <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all group h-full flex flex-col cursor-pointer">
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className={`w-16 h-16 ${member.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform shadow-md`}
                      >
                        <span className="text-xl font-bold text-white">
                          {member.initials}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">
                          {member.name}
                        </h3>
                        <p className="text-primary text-sm font-semibold">
                          {member.title}
                        </p>
                        <p className="text-gray-500 text-xs">
                          {member.department}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 mb-3 text-sm text-gray-600">
                      <GraduationCap className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                      <span className="line-clamp-2">
                        {member.education.length > 0
                          ? member.education[0].degree
                          : ""}
                      </span>
                    </div>

                    {member.achievements.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {member.achievements
                          .slice(0, 2)
                          .map((achievement, idx) => (
                            <span
                              key={idx}
                              className="inline-flex items-center gap-1 px-2 py-1 bg-primary/5 text-primary rounded-full text-xs font-medium"
                            >
                              <Award className="w-3 h-3" /> {achievement}
                            </span>
                          ))}
                      </div>
                    )}

                    <div className="flex-1" />

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex flex-wrap gap-2">
                        {member.email && (
                          <span
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              window.location.href = `mailto:${member.email}`;
                            }}
                            className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition-all"
                            title="Email"
                          >
                            <Mail className="w-4 h-4" />
                          </span>
                        )}
                        {member.phone && (
                          <span
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              window.location.href = `tel:${member.phone}`;
                            }}
                            className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500 hover:bg-emerald-500 hover:text-white transition-all"
                            title="Call"
                          >
                            <Phone className="w-4 h-4" />
                          </span>
                        )}
                        {member.linkedin && (
                          <span
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              window.open(member.linkedin, "_blank");
                            }}
                            className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500 hover:bg-blue-600 hover:text-white transition-all"
                            title="LinkedIn"
                          >
                            <Linkedin className="w-4 h-4" />
                          </span>
                        )}
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
              We&apos;re always looking for passionate educators and instructors
              who share our vision of transforming science education in
              Bangladesh.
            </p>
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-xl hover:bg-red-50 transition-colors"
            >
              View Open Positions <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Linkedin,
  ArrowLeft,
  Building2,
  Beaker,
  Briefcase,
  Globe,
  ExternalLink,
  BookOpen,
  Target,
  Sparkles,
} from "lucide-react";
import { getMemberBySlug } from "@/lib/team-data";

export default function TeamMemberProfilePage() {
  const params = useParams();
  const slug = params.slug as string;
  const member = getMemberBySlug(slug);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  // If member not found
  if (!member) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Member Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The team member you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/team"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-all hover:shadow-lg"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Team
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] transform -translate-x-1/2 translate-y-1/2" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              href="/team"
              className="inline-flex items-center gap-2 text-gray-500 hover:text-primary transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-medium">Back to Team</span>
            </Link>
          </motion.div>

          {/* Hero Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden mb-8"
          >
            <div className="bg-gradient-to-r from-slate-50 via-white to-blue-50 p-8 sm:p-12 border-b border-gray-100">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                {/* Profile Avatar */}
                <div className="relative">
                  <div
                    className={`w-32 h-32 sm:w-36 sm:h-36 rounded-2xl ${member.color} flex items-center justify-center shadow-xl`}
                  >
                    <span className="text-5xl sm:text-6xl font-bold text-white">
                      {member.initials}
                    </span>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Name & Title */}
                <div className="text-center sm:text-left flex-1">
                  <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h1>
                  <p className="text-xl text-primary font-medium mb-3">
                    {member.title}
                  </p>
                  <p className="text-gray-600 mb-4">{member.department}</p>

                  {/* Quick Contact Pills */}
                  <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 rounded-full text-primary text-sm font-medium transition-all"
                      >
                        <Mail className="w-4 h-4" />
                        <span className="hidden sm:inline">{member.email}</span>
                        <span className="sm:hidden">Email</span>
                      </a>
                    )}
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 hover:bg-blue-100 rounded-full text-blue-600 text-sm font-medium transition-all"
                      >
                        <Linkedin className="w-4 h-4" />
                        LinkedIn
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                    {member.phone && (
                      <a
                        href={`tel:${member.phone}`}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 hover:bg-emerald-100 rounded-full text-emerald-600 text-sm font-medium transition-all"
                      >
                        <Phone className="w-4 h-4" />
                        {member.phone}
                      </a>
                    )}
                    {member.location && (
                      <span className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-gray-600 text-sm">
                        <MapPin className="w-4 h-4" />
                        {member.location}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content - Left 2 Columns */}
            <div className="lg:col-span-2 space-y-8">
              {/* About Section */}
              <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl p-8 shadow-lg shadow-gray-100/50 border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">Research Profile</h2>
                </div>
                <div className="prose prose-gray max-w-none">
                  {member.bio.split("\n\n").map((paragraph, i) => (
                    <p key={i} className="text-gray-600 leading-relaxed mb-4 last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.section>

              {/* Research Projects */}
              {member.research && member.research.length > 0 && (
                <motion.section
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                  className="bg-white rounded-2xl p-8 shadow-lg shadow-gray-100/50 border border-gray-100"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-violet-100 rounded-xl flex items-center justify-center">
                      <Beaker className="w-5 h-5 text-violet-600" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900">Research Projects</h2>
                  </div>
                  <div className="space-y-6">
                    {member.research.map((res, i) => (
                      <motion.div
                        key={i}
                        variants={fadeInUp}
                        className="relative pl-6 border-l-2 border-violet-200 hover:border-violet-400 transition-colors"
                      >
                        <div className="absolute left-0 top-0 w-3 h-3 bg-violet-500 rounded-full -translate-x-[7px]" />
                        <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl p-6 border border-violet-100">
                          <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                            <h3 className="font-bold text-gray-900 text-lg flex-1">
                              {res.title}
                            </h3>
                            <span className="px-3 py-1 bg-violet-100 text-violet-700 text-sm font-medium rounded-full whitespace-nowrap">
                              {res.period}
                            </span>
                          </div>
                          {res.supervisor && (
                            <p className="text-violet-700 font-medium text-sm mb-1">
                              {res.supervisor}
                            </p>
                          )}
                          {res.institution && (
                            <p className="text-gray-500 text-sm mb-3 flex items-center gap-2">
                              <Building2 className="w-4 h-4" />
                              {res.institution}
                            </p>
                          )}
                          {res.description && (
                            <p className="text-gray-600 text-sm leading-relaxed">
                              {res.description}
                            </p>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>
              )}

              {/* Experience */}
              {member.experience.length > 0 && (
                <motion.section
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                  className="bg-white rounded-2xl p-8 shadow-lg shadow-gray-100/50 border border-gray-100"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                      <Briefcase className="w-5 h-5 text-emerald-600" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900">Professional Experience</h2>
                  </div>
                  <div className="space-y-6">
                    {member.experience.map((exp, i) => (
                      <motion.div
                        key={i}
                        variants={fadeInUp}
                        className="relative pl-6 border-l-2 border-emerald-200 hover:border-emerald-400 transition-colors"
                      >
                        <div className="absolute left-0 top-0 w-3 h-3 bg-emerald-500 rounded-full -translate-x-[7px]" />
                        <div className="pb-6 last:pb-0">
                          <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                            <h3 className="font-bold text-gray-900">{exp.role}</h3>
                            <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-sm font-medium rounded-full">
                              {exp.period}
                            </span>
                          </div>
                          <p className="text-primary font-medium text-sm mb-2">{exp.org}</p>
                          {exp.description && (
                            <p className="text-gray-600 text-sm leading-relaxed">
                              {exp.description}
                            </p>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>
              )}
            </div>

            {/* Sidebar - Right Column */}
            <div className="space-y-6">
              {/* Education */}
              <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-6 shadow-lg shadow-gray-100/50 border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 bg-blue-100 rounded-xl flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-blue-600" />
                  </div>
                  <h2 className="text-lg font-bold text-gray-900">Education</h2>
                </div>
                <div className="space-y-4">
                  {member.education.map((edu, i) => (
                    <div
                      key={i}
                      className="relative pl-4 border-l-2 border-blue-100 hover:border-blue-300 transition-colors"
                    >
                      <h3 className="font-semibold text-gray-900 text-sm">
                        {edu.degree}
                      </h3>
                      <p className="text-gray-600 text-sm">{edu.institution}</p>
                      <p className="text-gray-400 text-xs mt-1">{edu.year}</p>
                      {edu.grade && (
                        <span className="inline-block mt-1 px-2 py-0.5 bg-emerald-50 text-emerald-700 text-xs font-medium rounded">
                          {edu.grade}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </motion.section>

              {/* Skills */}
              {member.skills.length > 0 && (
                <motion.section
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className="bg-white rounded-2xl p-6 shadow-lg shadow-gray-100/50 border border-gray-100"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-9 h-9 bg-amber-100 rounded-xl flex items-center justify-center">
                      <Target className="w-5 h-5 text-amber-600" />
                    </div>
                    <h2 className="text-lg font-bold text-gray-900">Skills & Expertise</h2>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 text-sm rounded-lg border border-gray-200 hover:border-primary/30 hover:bg-primary/5 transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.section>
              )}

              {/* Languages */}
              {member.languages && member.languages.length > 0 && (
                <motion.section
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className="bg-white rounded-2xl p-6 shadow-lg shadow-gray-100/50 border border-gray-100"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-9 h-9 bg-sky-100 rounded-xl flex items-center justify-center">
                      <Globe className="w-5 h-5 text-sky-600" />
                    </div>
                    <h2 className="text-lg font-bold text-gray-900">Languages</h2>
                  </div>
                  <div className="space-y-3">
                    {member.languages.map((lang, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between p-3 bg-gradient-to-r from-sky-50 to-blue-50 rounded-xl border border-sky-100"
                      >
                        <span className="font-medium text-gray-900">
                          {lang.language}
                        </span>
                        <span className="px-2 py-1 bg-white text-sky-700 text-xs font-medium rounded-md shadow-sm">
                          {lang.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.section>
              )}

              {/* Organizations */}
              {member.organizations && member.organizations.length > 0 && (
                <motion.section
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className="bg-white rounded-2xl p-6 shadow-lg shadow-gray-100/50 border border-gray-100"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-9 h-9 bg-orange-100 rounded-xl flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-orange-600" />
                    </div>
                    <h2 className="text-lg font-bold text-gray-900">Organizations</h2>
                  </div>
                  <div className="space-y-4">
                    {member.organizations.map((org, i) => (
                      <div key={i} className="p-4 bg-orange-50/50 rounded-xl border border-orange-100">
                        <h3 className="font-semibold text-gray-900 text-sm">
                          {org.role}
                        </h3>
                        <p className="text-orange-700 text-sm">{org.org}</p>
                        {org.description && (
                          <p className="text-gray-500 text-xs mt-2">
                            {org.description}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.section>
              )}

              {/* Achievements */}
              {member.achievements && member.achievements.length > 0 && (
                <motion.section
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-6 shadow-lg shadow-amber-100/50 border border-amber-200"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-9 h-9 bg-amber-200 rounded-xl flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-amber-700" />
                    </div>
                    <h2 className="text-lg font-bold text-gray-900">Achievements</h2>
                  </div>
                  <div className="space-y-2">
                    {member.achievements.map((achievement, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-2"
                      >
                        <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </motion.section>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

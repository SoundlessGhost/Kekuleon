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
  Briefcase,
  Globe,
  ExternalLink,
  FileText,
  Award,
  Users,
} from "lucide-react";
import { getMemberBySlug } from "@/lib/team-data";
import Image from "next/image";

export default function TeamMemberProfilePage() {
  const params = useParams();
  const slug = params.slug as string;
  const member = getMemberBySlug(slug);

  if (!member) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-gray-900 mb-4">
            Member Not Found
          </h1>
          <Link
            href="/team"
            className="text-primary hover:underline inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Team
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-24 py-4">
          <Link
            href="/team"
            className="text-gray-500 hover:text-primary transition-colors inline-flex items-center gap-2 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Team
          </Link>
        </div>
      </div>

      {/* Profile Header - Full Width */}
      <div className="bg-white border-b">
        <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-24 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-center lg:items-start"
          >
            {/* Avatar */}
            {member.image ? (
              <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden flex-shrink-0 border-4 border-gray-100 shadow-lg">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div
                className={`w-32 h-32 lg:w-40 lg:h-40 rounded-full ${member.color} flex items-center justify-center flex-shrink-0`}
              >
                <span className="text-4xl lg:text-5xl font-bold text-white">
                  {member.initials}
                </span>
              </div>
            )}

            {/* Info */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                {member.name}
              </h1>
              <p className="text-xl text-primary font-medium mb-1">
                {member.title}
              </p>
              <p className="text-gray-600 text-lg mb-6">{member.department}</p>

              {/* Contact Row */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm">
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="px-4 py-2 bg-gray-100 hover:bg-primary/10 hover:text-primary rounded-full text-gray-700 flex items-center gap-2 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    {member.email}
                  </a>
                )}
                {member.phone && (
                  <a
                    href={`tel:${member.phone}`}
                    className="px-4 py-2 bg-gray-100 hover:bg-primary/10 hover:text-primary rounded-full text-gray-700 flex items-center gap-2 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    {member.phone}
                  </a>
                )}
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-50 hover:bg-blue-100 rounded-full text-blue-600 flex items-center gap-2 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
                {member.location && (
                  <span className="px-4 py-2 bg-gray-100 rounded-full text-gray-600 flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {member.location}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content - Two Column */}
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-24 py-10">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content (2/3) */}
          <div className="lg:col-span-2 space-y-8">
            {/* About */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl border border-gray-200 p-6 lg:p-8"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <FileText className="w-4 h-4 text-primary" />
                </div>
                About
              </h2>
              <div className="text-gray-600 leading-relaxed space-y-4">
                {member.bio.split("\n\n").map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </motion.section>

            {/* Research Projects */}
            {member.research && member.research.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-xl border border-gray-200 p-6 lg:p-8"
              >
                <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 bg-violet-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-4 h-4 text-violet-600" />
                  </div>
                  Research Projects
                </h2>
                <div className="space-y-6">
                  {member.research.map((res, i) => (
                    <div
                      key={i}
                      className="relative pl-5 border-l-2 border-violet-300"
                    >
                      <div className="absolute left-0 top-1 w-2.5 h-2.5 bg-violet-500 rounded-full -translate-x-[6px]" />
                      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                        <h3 className="font-semibold text-gray-900 text-lg">
                          {res.title}
                        </h3>
                        <span className="text-sm text-violet-600 font-medium bg-violet-50 px-3 py-1 rounded-full">
                          {res.period}
                        </span>
                      </div>
                      {res.supervisor && (
                        <p className="text-sm text-violet-600 font-medium mb-1">
                          {res.supervisor}
                        </p>
                      )}
                      {res.institution && (
                        <p className="text-sm text-gray-500 mb-3 flex items-center gap-1.5">
                          <Building2 className="w-4 h-4" />
                          {res.institution}
                        </p>
                      )}
                      {res.description && (
                        <p className="text-gray-600 leading-relaxed">
                          {res.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </motion.section>
            )}

            {/* Experience */}
            {member.experience.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-xl border border-gray-200 p-6 lg:p-8"
              >
                <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <Briefcase className="w-4 h-4 text-emerald-600" />
                  </div>
                  Experience
                </h2>
                <div className="space-y-6">
                  {member.experience.map((exp, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Building2 className="w-5 h-5 text-gray-500" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-baseline justify-between gap-2">
                          <h3 className="font-semibold text-gray-900">
                            {exp.role}
                          </h3>
                          <span className="text-sm text-emerald-600 font-medium bg-emerald-50 px-3 py-1 rounded-full">
                            {exp.period}
                          </span>
                        </div>
                        <p className="text-primary">{exp.org}</p>
                        {exp.description && (
                          <p className="text-gray-600 mt-2">
                            {exp.description}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.section>
            )}
          </div>

          {/* Right Column - Sidebar (1/3) */}
          <div className="space-y-6">
            {/* Education */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl border border-gray-200 p-6"
            >
              <h2 className="text-lg font-semibold text-gray-900 mb-5 flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-4 h-4 text-blue-600" />
                </div>
                Education
              </h2>
              <div className="space-y-4">
                {member.education.map((edu, i) => (
                  <div
                    key={i}
                    className="relative pl-4 border-l-2 border-blue-200"
                  >
                    <h3 className="font-medium text-gray-900 text-sm">
                      {edu.degree}
                    </h3>
                    <p className="text-gray-600 text-sm">{edu.institution}</p>
                    <p className="text-gray-400 text-xs mt-1">{edu.year}</p>
                    {edu.grade && (
                      <span className="inline-block mt-1 text-xs text-emerald-600 font-medium">
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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-xl border border-gray-200 p-6"
              >
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Skills & Expertise
                </h2>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-primary/10 hover:text-primary transition-colors"
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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-xl border border-gray-200 p-6"
              >
                <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-3">
                  <div className="w-8 h-8 bg-sky-100 rounded-lg flex items-center justify-center">
                    <Globe className="w-4 h-4 text-sky-600" />
                  </div>
                  Languages
                </h2>
                <div className="space-y-3">
                  {member.languages.map((lang, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0"
                    >
                      <span className="text-gray-700 font-medium">
                        {lang.language}
                      </span>
                      <span className="text-sm text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white rounded-xl border border-gray-200 p-6"
              >
                <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Users className="w-4 h-4 text-orange-600" />
                  </div>
                  Organizations
                </h2>
                <div className="space-y-4">
                  {member.organizations.map((org, i) => (
                    <div
                      key={i}
                      className="pb-3 border-b border-gray-100 last:border-0 last:pb-0"
                    >
                      <h3 className="font-medium text-gray-900 text-sm">
                        {org.role}
                      </h3>
                      <p className="text-primary text-sm">{org.org}</p>
                      {org.description && (
                        <p className="text-gray-500 text-xs mt-1">
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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-amber-50 rounded-xl border border-amber-200 p-6"
              >
                <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-3">
                  <div className="w-8 h-8 bg-amber-200 rounded-lg flex items-center justify-center">
                    <Award className="w-4 h-4 text-amber-700" />
                  </div>
                  Achievements
                </h2>
                <ul className="space-y-2">
                  {member.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-gray-700 text-sm"
                    >
                      <span className="text-amber-500 mt-1">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </motion.section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

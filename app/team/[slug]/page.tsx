"use client";

import { useRef } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Award,
  Linkedin,
  ArrowLeft,
  Building2,
  Users,
  Beaker,
  Briefcase,
  FlaskConical,
  Globe,
  Calendar,
  Home,
} from "lucide-react";
import { getMemberBySlug } from "@/lib/team-data";

export default function TeamMemberProfilePage() {
  const params = useParams();
  const slug = params.slug as string;
  const member = getMemberBySlug(slug);

  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  // If member not found
  if (!member) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Member Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The team member you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/team"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Team
          </Link>
        </div>
      </div>
    );
  }

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
                <div
                  className={`w-40 h-40 mx-auto rounded-full ${member.color} flex items-center justify-center mb-6 shadow-xl`}
                >
                  <span className="text-5xl font-bold text-white">
                    {member.initials}
                  </span>
                </div>

                {/* Name & Title */}
                <div className="text-center mb-6">
                  <h1 className="text-2xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h1>
                  {member.nameBn && (
                    <p className="text-sm text-gray-500 mb-2">
                      {member.nameBn}
                    </p>
                  )}
                  <p className="text-primary font-medium">{member.title}</p>
                  <p className="text-sm text-gray-500 mt-1">
                    {member.department}
                  </p>
                </div>

                {/* Contact Info */}
                <div className="space-y-3 border-t border-gray-100 pt-6">
                  {member.dateOfBirth && (
                    <div className="flex items-center gap-3 text-gray-600">
                      <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Calendar className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <span className="text-xs text-gray-400 block">
                          Date of Birth
                        </span>
                        <span className="text-sm">{member.dateOfBirth}</span>
                      </div>
                    </div>
                  )}
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors"
                    >
                      <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Mail className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <span className="text-xs text-gray-400 block">
                          Primary Email
                        </span>
                        <span className="text-sm break-all">
                          {member.email}
                        </span>
                      </div>
                    </a>
                  )}
                  {member.emailAlt && (
                    <a
                      href={`mailto:${member.emailAlt}`}
                      className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors"
                    >
                      <div className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center">
                        <Mail className="w-4 h-4 text-gray-500" />
                      </div>
                      <div>
                        <span className="text-xs text-gray-400 block">
                          Alt Email
                        </span>
                        <span className="text-sm break-all">
                          {member.emailAlt}
                        </span>
                      </div>
                    </a>
                  )}
                  {member.phone && (
                    <a
                      href={`tel:${member.phone}`}
                      className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors"
                    >
                      <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Phone className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <span className="text-xs text-gray-400 block">
                          Germany
                        </span>
                        <span className="text-sm">{member.phone}</span>
                      </div>
                    </a>
                  )}
                  {member.phoneAlt && (
                    <a
                      href={`tel:${member.phoneAlt}`}
                      className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors"
                    >
                      <div className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center">
                        <Phone className="w-4 h-4 text-gray-500" />
                      </div>
                      <div>
                        <span className="text-xs text-gray-400 block">
                          Bangladesh
                        </span>
                        <span className="text-sm">{member.phoneAlt}</span>
                      </div>
                    </a>
                  )}
                  {member.location && (
                    <div className="flex items-center gap-3 text-gray-600">
                      <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center">
                        <MapPin className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <span className="text-xs text-gray-400 block">
                          Current Location
                        </span>
                        <span className="text-sm">{member.location}</span>
                      </div>
                    </div>
                  )}
                  {member.address && (
                    <div className="flex items-start gap-3 text-gray-600">
                      <div className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Home className="w-4 h-4 text-gray-500" />
                      </div>
                      <div>
                        <span className="text-xs text-gray-400 block">
                          Home Address
                        </span>
                        <span className="text-sm">{member.address}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Social Links */}
                {member.linkedin && (
                  <div className="flex justify-center gap-3 mt-6 pt-6 border-t border-gray-100">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500 hover:bg-blue-600 hover:text-white transition-all"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                )}
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
                  {member.bio}
                </div>
              </div>

              {/* Skills */}
              {member.skills.length > 0 && (
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Beaker className="w-5 h-5 text-primary" />
                    Skills & Expertise
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-primary/5 text-primary rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Education */}
              {member.education.length > 0 && (
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-primary" />
                    Education
                  </h2>
                  <div className="space-y-4">
                    {member.education.map((edu, i) => (
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
                          <div className="flex flex-wrap items-center gap-2 text-gray-400 text-sm mt-1">
                            <span>{edu.year}</span>
                            {edu.grade && (
                              <>
                                <span>•</span>
                                <span className="text-emerald-600 font-medium">
                                  {edu.grade}
                                </span>
                              </>
                            )}
                            {edu.credits && (
                              <>
                                <span>•</span>
                                <span className="text-blue-600 font-medium">
                                  {edu.credits}
                                </span>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Experience */}
              {member.experience.length > 0 && (
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-primary" />
                    Experience
                  </h2>
                  <div className="space-y-4">
                    {member.experience.map((exp, i) => (
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
                          {exp.description && (
                            <p className="text-gray-500 text-sm mt-1">
                              {exp.description}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Research Projects */}
              {member.research && member.research.length > 0 && (
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <FlaskConical className="w-5 h-5 text-primary" />
                    Research Projects
                  </h2>
                  <div className="space-y-4">
                    {member.research.map((res, i) => (
                      <div
                        key={i}
                        className="p-4 bg-violet-50 rounded-xl border border-violet-100"
                      >
                        <h3 className="font-semibold text-gray-900 mb-2">
                          {res.title}
                        </h3>
                        {res.supervisor && (
                          <p className="text-gray-600 text-sm">
                            <span className="font-medium">Supervisor:</span>{" "}
                            {res.supervisor}
                          </p>
                        )}
                        {res.institution && (
                          <p className="text-gray-500 text-sm">
                            {res.institution}
                          </p>
                        )}
                        <p className="text-gray-400 text-sm mt-1">
                          {res.period}
                        </p>
                        {res.description && (
                          <p className="text-gray-600 text-sm mt-2">
                            {res.description}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Languages */}
              {member.languages && member.languages.length > 0 && (
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Globe className="w-5 h-5 text-primary" />
                    Languages
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {member.languages.map((lang, i) => (
                      <div
                        key={i}
                        className="px-4 py-2 bg-blue-50 rounded-lg border border-blue-100"
                      >
                        <span className="font-medium text-gray-900">
                          {lang.language}
                        </span>
                        <span className="text-gray-500 text-sm ml-2">
                          ({lang.level})
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Organizations */}
              {member.organizations && member.organizations.length > 0 && (
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    Organizations & Activities
                  </h2>
                  <div className="space-y-4">
                    {member.organizations.map((org, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Users className="w-5 h-5 text-amber-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">
                            {org.role}
                          </h3>
                          <p className="text-gray-600 text-sm">{org.org}</p>
                          {org.description && (
                            <p className="text-gray-500 text-sm mt-1">
                              {org.description}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Achievements */}
              {member.achievements.length > 0 && (
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5 text-primary" />
                    Achievements & Highlights
                  </h2>
                  <div className="space-y-3">
                    {member.achievements.map((achievement, i) => (
                      <div key={i} className="flex gap-3 items-center">
                        <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Award className="w-5 h-5 text-amber-600" />
                        </div>
                        <span className="text-gray-700 font-medium">
                          {achievement}
                        </span>
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

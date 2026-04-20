"use client";

import { useRef } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  ArrowLeft,
  ExternalLink,
} from "lucide-react";
import { getMemberBySlug } from "@/lib/team-data";

function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <div ref={ref} className={className}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </div>
  );
}

function SectionHeader({
  eyebrow,
  title,
}: {
  eyebrow?: string;
  title: string;
}) {
  return (
    <div className="mb-6">
      {eyebrow && (
        <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-[0.2em] mb-2">
          {eyebrow}
        </p>
      )}
      <h2 className="text-xl md:text-2xl font-bold text-gray-900">{title}</h2>
    </div>
  );
}

export default function TeamMemberProfilePage() {
  const params = useParams();
  const slug = params.slug as string;
  const member = getMemberBySlug(slug);

  const isAcademic =
    member?.type === "advisory-jat" || member?.type === "advisory-cjat";

  if (!member) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
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
    <>
      {/* Breadcrumb strip */}
      <div className="pt-28 pb-6 bg-white">
        <div className="container-custom">
          <Link
            href="/team"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Team
          </Link>
        </div>
      </div>

      {/* Profile Header */}
      <section className="pb-14 bg-white border-b border-gray-100">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start"
          >
            {/* Photo */}
            <div className="lg:col-span-3">
              {member.image ? (
                <div className="aspect-square w-full max-w-[280px] rounded-full overflow-hidden border border-gray-200 bg-gray-50">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={280}
                    height={280}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              ) : (
                <div className="aspect-square w-full max-w-[280px] rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center">
                  <span className="text-6xl font-bold text-gray-400">
                    {member.initials}
                  </span>
                </div>
              )}
            </div>

            {/* Info */}
            <div className="lg:col-span-9">
              <p className="text-[11px] font-semibold text-primary uppercase tracking-[0.2em] mb-3">
                {member.department}
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
                {member.name}
              </h1>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mb-6">
                {member.title}
              </p>

              {/* Contact row */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full text-sm text-gray-700 hover:border-primary hover:text-primary transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    {member.email}
                  </a>
                )}
                {member.phone && (
                  <a
                    href={`tel:${member.phone}`}
                    className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full text-sm text-gray-700 hover:border-primary hover:text-primary transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    {member.phone}
                  </a>
                )}
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full text-sm text-gray-700 hover:border-primary hover:text-primary transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                    LinkedIn
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
                {member.location && (
                  <span className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full text-sm text-gray-700">
                    <MapPin className="w-3.5 h-3.5" />
                    {member.location}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-14 bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
            {/* LEFT — Sticky Sidebar (shorter content) */}
            <aside className="lg:col-span-4 order-2 lg:order-1">
              <div className="lg:sticky lg:top-24 space-y-12">
                {/* Education */}
                {member.education.length > 0 && (
                  <Section>
                    <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-[0.2em] mb-4 pb-3 border-b border-gray-200">
                      Education
                    </p>
                    <div className="space-y-5">
                      {member.education.map((edu, i) => (
                        <div key={i}>
                          <h3 className="text-sm font-semibold text-gray-900 leading-snug mb-1">
                            {edu.degree}
                          </h3>
                          <p className="text-xs text-gray-600 mb-1">
                            {edu.institution}
                          </p>
                          <p className="text-[11px] text-gray-400 font-mono">
                            {edu.year}
                          </p>
                        </div>
                      ))}
                    </div>
                  </Section>
                )}

                {/* Skills / Research Interests */}
                {member.skills.length > 0 && (
                  <Section>
                    <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-[0.2em] mb-4 pb-3 border-b border-gray-200">
                      {isAcademic ? "Research Interests" : "Skills & Expertise"}
                    </p>
                    {isAcademic ? (
                      <div className="flex flex-wrap gap-2">
                        {member.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center px-3 py-1.5 rounded-full bg-white border border-gray-200 text-[12px] leading-tight text-gray-700"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <ul className="space-y-2">
                        {member.skills.map((skill, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-gray-700"
                          >
                            <span className="w-1 h-1 rounded-full bg-gray-400 mt-2 flex-shrink-0" />
                            {skill}
                          </li>
                        ))}
                      </ul>
                    )}
                  </Section>
                )}

                {/* Languages */}
                {member.languages && member.languages.length > 0 && (
                  <Section>
                    <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-[0.2em] mb-4 pb-3 border-b border-gray-200">
                      Languages
                    </p>
                    <dl className="space-y-3">
                      {member.languages.map((lang, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between gap-2"
                        >
                          <dt className="text-sm font-medium text-gray-800">
                            {lang.language}
                          </dt>
                          <dd className="text-[11px] text-gray-500 uppercase tracking-wider font-medium">
                            {lang.level}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </Section>
                )}

                {/* Organizations */}
                {member.organizations && member.organizations.length > 0 && (
                  <Section>
                    <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-[0.2em] mb-4 pb-3 border-b border-gray-200">
                      Affiliations
                    </p>
                    <div className="space-y-5">
                      {member.organizations.map((org, i) => (
                        <div key={i}>
                          <h3 className="text-sm font-semibold text-gray-900 leading-snug mb-1">
                            {org.role}
                          </h3>
                          <p className="text-xs text-gray-600 mb-1">{org.org}</p>
                          {org.description && (
                            <p className="text-[11px] text-gray-400 leading-relaxed">
                              {org.description}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </Section>
                )}
              </div>
            </aside>

            {/* RIGHT — Scrollable main column (longer content) */}
            <div className="lg:col-span-8 order-1 lg:order-2 space-y-14">
              {/* Biography */}
              <Section>
                <SectionHeader eyebrow="Profile" title="Biography" />
                <div className="space-y-5 text-gray-700 leading-relaxed">
                  {member.bio.split("\n\n").map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </Section>

              {/* Research / Selected Publications */}
              {member.research && member.research.length > 0 && (
                <Section>
                  <SectionHeader
                    eyebrow={isAcademic ? "Peer-Reviewed Output" : "Academic Work"}
                    title={isAcademic ? "Selected Publications" : "Research Projects"}
                  />
                  {isAcademic ? (
                    <ol className="space-y-6 counter-reset-publications">
                      {member.research.map((res, i) => (
                        <li
                          key={i}
                          className="grid grid-cols-[auto_1fr] gap-x-4 text-[14px] leading-[1.75] text-gray-700"
                        >
                          <span className="pt-[2px] text-gray-400 font-mono text-[13px] tabular-nums">
                            [{i + 1}]
                          </span>
                          <div>
                            {res.description && (
                              <span className="text-gray-700">
                                {res.description}.{" "}
                              </span>
                            )}
                            <span className="italic text-gray-900 font-medium">
                              &ldquo;{res.title}.&rdquo;
                            </span>
                            {res.institution && (
                              <span className="text-gray-700">
                                {" "}
                                <em>{res.institution}</em>.
                              </span>
                            )}
                            {res.period && (
                              <span className="text-gray-500">
                                {" "}
                                {res.period}.
                              </span>
                            )}
                          </div>
                        </li>
                      ))}
                    </ol>
                  ) : (
                    <div className="space-y-8">
                      {member.research.map((res, i) => (
                        <article
                          key={i}
                          className="border-l-2 border-gray-200 pl-6 pb-2 hover:border-primary transition-colors"
                        >
                          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-2">
                            <h3 className="text-lg font-semibold text-gray-900 leading-snug">
                              {res.title}
                            </h3>
                            <span className="text-xs text-gray-500 font-mono whitespace-nowrap">
                              {res.period}
                            </span>
                          </div>
                          {res.supervisor && (
                            <p className="text-sm text-gray-600 mb-1">
                              {res.supervisor}
                            </p>
                          )}
                          {res.institution && (
                            <p className="text-xs text-gray-500 uppercase tracking-wider font-medium mb-3">
                              {res.institution}
                            </p>
                          )}
                          {res.description && (
                            <p className="text-gray-600 leading-relaxed text-sm">
                              {res.description}
                            </p>
                          )}
                        </article>
                      ))}
                    </div>
                  )}
                </Section>
              )}

              {/* Experience / Academic Appointments */}
              {member.experience.length > 0 && (
                <Section>
                  <SectionHeader
                    eyebrow={isAcademic ? "Appointments" : "Career"}
                    title={
                      isAcademic ? "Academic Appointments" : "Professional Experience"
                    }
                  />
                  <div className="space-y-8">
                    {member.experience.map((exp, i) => (
                      <article
                        key={i}
                        className="border-l-2 border-gray-200 pl-6 pb-2 hover:border-primary transition-colors"
                      >
                        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900 leading-snug">
                            {exp.role}
                          </h3>
                          <span className="text-xs text-gray-500 font-mono whitespace-nowrap">
                            {exp.period}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 uppercase tracking-wider font-medium mb-3">
                          {exp.org}
                        </p>
                        {exp.description && (
                          <p className="text-gray-600 leading-relaxed text-sm">
                            {exp.description}
                          </p>
                        )}
                      </article>
                    ))}
                  </div>
                </Section>
              )}

              {/* Achievements */}
              {member.achievements && member.achievements.length > 0 && (
                <Section>
                  <SectionHeader
                    eyebrow="Recognition"
                    title="Achievements"
                  />
                  <ul className="space-y-3">
                    {member.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-gray-700"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                        <span className="leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </Section>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

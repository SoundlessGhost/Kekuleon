"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  Check,
  Users,
  GraduationCap,
  FlaskConical,
  BookOpen,
  Building2,
  Lightbulb,
  TrendingUp,
  Microscope,
  Globe,
  ArrowRight,
  UserCheck,
  Briefcase,
  HeartPulse,
  Factory,
  School,
} from "lucide-react";
import { getLeadership } from "@/lib/team-data";
import Image from "next/image";

// Content from flow.md - Section 4: About KRTC
const whatWeDo = [
  {
    icon: GraduationCap,
    title: "Foundation Program (KRTC Schooling)",
    description:
      "Supports secondary-level students through academic reinforcement, early research exposure, language preparation, and structured engagement activities.",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: FlaskConical,
    title: "Applied Science Training",
    description:
      "Provides laboratory-oriented and problem-focused learning across areas such as chemistry, materials science, pharmaceutical sciences, and healthcare.",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
  {
    icon: BookOpen,
    title: "Research and Academic Development",
    description:
      "Introduces students and graduates to research methods, academic writing, and project-based learning.",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
  },
  {
    icon: Building2,
    title: "Industry and Community Engagement",
    description:
      "Connects training with real-world contexts through technical services, environmental initiatives, and community-based activities.",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
  },
];

// Our Approach from flow.md
const ourApproach = [
  "Academic preparation and progression",
  "Applied and laboratory-based learning",
  "Research exposure and skill development",
  "Industry-relevant training",
  "Community engagement linked to social and environmental needs",
];

// Research Orientation insights from flow.md
const researchInsights = [
  "The relationship between theory and practical skills",
  "Student transitions across education levels",
  "The role of integrated training systems",
  "Connections between education, industry, and community needs",
];

// Targeted Beneficiaries from Project Proposal
const targetedBeneficiaries = [
  {
    icon: School,
    title: "National University Students",
    description:
      "Supporting students who lack access to quality research facilities and instrument-based training.",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: GraduationCap,
    title: "Public & Private University Students",
    description:
      "Providing hands-on laboratory experience and research exposure to complement academic learning.",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
  {
    icon: UserCheck,
    title: "Fresh Graduates & Early-Career Researchers",
    description:
      "Building practical skills and industry-ready competencies for career advancement.",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
  },
  {
    icon: BookOpen,
    title: "PhD Candidates",
    description:
      "Offering research supervision, publication support, and international collaboration opportunities.",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
  },
  {
    icon: Briefcase,
    title: "Industry Professionals",
    description:
      "Delivering specialized training and skill development for professionals seeking industry expertise.",
    iconBg: "bg-rose-100",
    iconColor: "text-rose-600",
  },
  {
    icon: HeartPulse,
    title: "Underprivileged Families",
    description:
      "Providing access to community healthcare services and nursing support through Health Benefit Cards.",
    iconBg: "bg-teal-100",
    iconColor: "text-teal-600",
  },
  {
    icon: Factory,
    title: "Industries & Organizations",
    description:
      "Offering authorized R&D, testing, quality assurance, and consultancy services.",
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
  },
];

export default function AboutPage() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-[120px]" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-sm text-primary font-medium">
                About KRTC
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
              About <span className="text-gradient-primary">KRTC</span>
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              The Kekuleon Research and Training Center (KRTC) is an emerging
              initiative in Bangladesh focused on strengthening the connection
              between science education and practical competence. It responds to
              a common challenge in many developing contexts, where theoretical
              learning is not sufficiently supported by laboratory training,
              research exposure, or industry-oriented experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section ref={ref} className="section bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              KRTC develops a decentralised and integrated institutional
              approach that brings together foundation education, applied
              science training, research engagement, and community involvement
              within a single framework. The aim is to support students in
              progressing from structured academic learning to applied and
              practice-based scientific work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">
                Our Programs
              </span>
            </div>
            <h2 className="heading-xl mb-4">What We Do</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              KRTC operates through a progressive learning structure
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5">
            {whatWeDo.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex gap-4 p-5 bg-white rounded-xl border border-gray-100 hover:border-primary/20 hover:shadow-md transition-all duration-300 h-full group">
                    <div
                      className={`w-14 h-14 rounded-xl ${item.iconBg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
                    >
                      <Icon className={`w-7 h-7 ${item.iconColor}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who We Serve - Targeted Beneficiaries */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 border border-emerald-200 mb-6">
              <Users className="w-4 h-4 text-emerald-600" />
              <span className="text-sm text-emerald-600 font-medium">
                Who We Serve
              </span>
            </div>
            <h2 className="heading-xl mb-4">Targeted Beneficiaries</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              KRTC serves a diverse range of students, professionals,
              communities, and industries through integrated research, training,
              and social services.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {targetedBeneficiaries.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <div className="p-5 bg-gray-50 rounded-xl border border-gray-100 hover:border-primary/20 hover:shadow-md transition-all duration-300 h-full group">
                    <div
                      className={`w-12 h-12 rounded-xl ${item.iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <Icon className={`w-6 h-6 ${item.iconColor}`} />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 text-sm">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Left - Approach */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="bg-gradient-to-br from-primary to-red-700 rounded-2xl p-8 h-full text-white">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">Our Approach</h3>
                </div>

                <p className="text-white/80 mb-6 text-sm leading-relaxed">
                  KRTC is based on the idea that education, research, and
                  application are more effective when developed together. The
                  model integrates:
                </p>

                <div className="space-y-3">
                  {ourApproach.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-sm text-white/90">{item}</span>
                    </div>
                  ))}
                </div>

                <p className="text-white/70 mt-6 text-sm leading-relaxed">
                  This approach supports not only knowledge acquisition but also
                  the development of practical scientific competence and
                  independent learning capacity.
                </p>
              </div>
            </motion.div>

            {/* Right - Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-3 space-y-4"
            >
              {/* Current Development */}
              <div className="flex gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">
                    Current Development
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    KRTC is currently operating through its foundation program,
                    with students engaged in academic preparation, research
                    awareness, language training, and community activities. The
                    broader institutional framework is being developed in
                    phases, with plans to expand participation and strengthen
                    applied training and research components.
                  </p>
                </div>
              </div>

              {/* Research Orientation */}
              <div className="flex gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100">
                <div className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center flex-shrink-0">
                  <Microscope className="w-6 h-6 text-violet-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    Research Orientation
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">
                    KRTC also functions as a practice-based research initiative,
                    exploring how decentralised training environments can
                    contribute to improving science education and capacity
                    development. It generates insight into:
                  </p>
                  <div className="space-y-1">
                    {researchInsights.map((insight, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                        <span>{insight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Vision */}
              <div className="flex gap-4 p-5 bg-gradient-to-r from-primary/5 to-transparent rounded-xl border border-primary/10">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Vision</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    KRTC aims to develop an adaptable institutional model that
                    strengthens applied science education and supports
                    scientific capacity development in developing-country
                    contexts. The approach is designed to remain flexible,
                    allowing it to respond to different regional and
                    institutional needs while maintaining a focus on practical
                    learning, academic progression, and long-term impact.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">
                Our Experts
              </span>
            </div>
            <h2 className="heading-xl">Leadership Team</h2>
          </motion.div>

          <div className=" gap-6 max-w-4xl mx-auto">
            {getLeadership().map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/team/${member.slug}`}>
                  <div className="flex gap-5 p-6 bg-white rounded-xl border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all h-full group cursor-pointer">
                    {/* <div
                      className={`w-16 h-16 ${member.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform`}
                    >
                      <span className="text-2xl font-bold text-white">
                        {member.initials}
                      </span>
                    </div> */}
                    {/* Avatar */}
                    {member.image ? (
                      <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
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
                        className={`w-14 h-14 rounded-full ${member.color} flex items-center justify-center flex-shrink-0`}
                      >
                        <span className="text-4xl lg:text-5xl font-bold text-white">
                          {member.initials}
                        </span>
                      </div>
                    )}
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-primary text-sm font-medium mb-3 line-clamp-1">
                        {member.title}
                      </p>
                      <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                        {member.bio.substring(0, 150)}...
                      </p>
                      <div className="flex items-center gap-1 text-primary text-sm font-medium mt-3 group-hover:gap-2 transition-all">
                        View Profile <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Link
              href="/team"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors font-medium"
            >
              View Full Team <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

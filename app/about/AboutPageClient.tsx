"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { TeamMember } from "@/lib/team-data";
import Image from "next/image";

const whatWeDo = [
  {
    title: "Foundation Program (KRTC Schooling)",
    description:
      "Supports secondary-level students through academic reinforcement, early research exposure, language preparation, and structured engagement activities.",
  },
  {
    title: "Applied Science Training",
    description:
      "Provides laboratory-oriented and problem-focused learning across areas such as chemistry, materials science, pharmaceutical sciences, and healthcare.",
  },
  {
    title: "Research and Academic Development",
    description:
      "Introduces students and graduates to research methods, academic writing, and project-based learning.",
  },
  {
    title: "Industry and Community Engagement",
    description:
      "Connects training with real-world contexts through technical services, environmental initiatives, and community-based activities.",
  },
];

const ourApproach = [
  "Academic preparation and progression",
  "Applied and laboratory-based learning",
  "Research exposure and skill development",
  "Industry-relevant training",
  "Community engagement linked to social and environmental needs",
];

const researchInsights = [
  "The relationship between theory and practical skills",
  "Student transitions across education levels",
  "The role of integrated training systems",
  "Connections between education, industry, and community needs",
];

const targetedBeneficiaries = [
  {
    title: "National University Students",
    description:
      "Supporting students who lack access to quality research facilities and instrument-based training.",
  },
  {
    title: "Public & Private University Students",
    description:
      "Providing hands-on laboratory experience and research exposure to complement academic learning.",
  },
  {
    title: "Fresh Graduates & Early-Career Researchers",
    description:
      "Building practical skills and industry-ready competencies for career advancement.",
  },
  {
    title: "PhD Candidates",
    description:
      "Offering research supervision, publication support, and international collaboration opportunities.",
  },
  {
    title: "Industry Professionals",
    description:
      "Delivering specialized training and skill development for professionals seeking industry expertise.",
  },
  {
    title: "Underprivileged Families",
    description:
      "Providing access to community healthcare services and nursing support through Health Benefit Cards.",
  },
  {
    title: "Industries & Organizations",
    description:
      "Offering authorized R&D, testing, quality assurance, and consultancy services.",
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

export default function AboutPage({ leaders }: { leaders: TeamMember[] }) {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
              About KRTC
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-gray-900 mb-6">
              Kekuleon Research and Training Center
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

      {/* Introduction + What We Do */}
      <Section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto mb-14">
            <p className="text-lg text-gray-600 leading-relaxed">
              KRTC develops a decentralised and integrated institutional
              approach that brings together foundation education, applied
              science training, research engagement, and community involvement
              within a single framework. The aim is to support students in
              progressing from structured academic learning to applied and
              practice-based scientific work.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="heading-lg mb-6">What We Do</h2>
            <div className="space-y-4">
              {whatWeDo.map((item) => (
                <div key={item.title} className="flex gap-3">
                  <span className="text-primary mt-1.5 flex-shrink-0">
                    &mdash;
                  </span>
                  <div>
                    <span className="font-semibold text-gray-900">
                      {item.title}
                    </span>
                    <span className="text-gray-500"> — {item.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Who We Serve */}
      <Section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
              Who We Serve
            </p>
            <h2 className="heading-lg mb-4">Targeted Beneficiaries</h2>
            <p className="text-gray-600 mb-10">
              KRTC serves a diverse range of students, professionals,
              communities, and industries through integrated research, training,
              and social services.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-6">
              {targetedBeneficiaries.map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-0.5 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Our Approach + Development + Research + Vision */}
      <Section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
            {/* Left — Approach */}
            <div>
              <h2 className="heading-lg mb-6">Our Approach</h2>

              <p className="text-gray-600 leading-relaxed mb-6">
                KRTC is based on the idea that education, research, and
                application are more effective when developed together. The
                model integrates:
              </p>

              <div className="space-y-2 mb-8">
                {ourApproach.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 text-gray-600"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="border-l-2 border-primary pl-5">
                <p className="text-sm text-gray-600 leading-relaxed">
                  This approach supports not only knowledge acquisition but also
                  the development of practical scientific competence and
                  independent learning capacity.
                </p>
              </div>
            </div>

            {/* Right — Development, Research, Vision */}
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Current Development
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  KRTC is currently operating through its foundation program,
                  with students engaged in academic preparation, research
                  awareness, language training, and community activities. The
                  broader institutional framework is being developed in phases,
                  with plans to expand participation and strengthen applied
                  training and research components.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Research Orientation
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  KRTC also functions as a practice-based research initiative,
                  exploring how decentralised training environments can
                  contribute to improving science education and capacity
                  development. It generates insight into:
                </p>
                <div className="space-y-1.5">
                  {researchInsights.map((insight, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-sm text-gray-500"
                    >
                      <span className="w-1 h-1 rounded-full bg-gray-400" />
                      <span>{insight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Vision</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  KRTC aims to develop an adaptable institutional model that
                  strengthens applied science education and supports scientific
                  capacity development in developing-country contexts. The
                  approach is designed to remain flexible, allowing it to
                  respond to different regional and institutional needs while
                  maintaining a focus on practical learning, academic
                  progression, and long-term impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Leadership Team */}
      <Section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
              Our Experts
            </p>
            <h2 className="heading-md">Leadership Team</h2>
            <p className=" text-gray-500  tracking-wide mb-10">
              Meet the Minds Shaping Our Future
            </p>
            <div className="space-y-5">
              {leaders.map((member) => (
                <Link key={member.id} href={`/team/${member.slug}`}>
                  <div className="flex flex-col items-center sm:flex-row gap-6 mb-10 p-6 rounded-2xl border border-gray-200 hover:shadow-lg hover:border-primary/20 transition-all group cursor-pointer">
                    {member.image ? (
                      <div className="w-32 h-32 rounded-full border overflow-hidden flex-shrink-0">
                        <Image
                          src={"/images/team/zakaria.jpeg"}
                          alt={member.name}
                          width={224}
                          height={224}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div
                        className={`w-28 h-28 rounded-full ${member.color} flex items-center justify-center flex-shrink-0`}
                      >
                        <span className="text-3xl font-bold text-white">
                          {member.initials}
                        </span>
                      </div>
                    )}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-primary text-sm font-medium mt-1 mb-3">
                        {member.title}
                      </p>
                      <p className="text-sm text-gray-500 leading-relaxed mb-4">
                        {member.bio.substring(0, 250)}...
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-primary text-sm font-medium group-hover:gap-2.5 transition-all">
                        View Profile
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link href="/team" className="btn btn-primary group">
                View Full Team
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

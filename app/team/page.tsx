"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import {
  getLeadership,
  getSchoolingLeadership,
  getSchooling,
  getAdvisoryJAT,
  getAdvisoryCJAT,
} from "@/lib/team-data";
import Image from "next/image";
import type { TeamMember } from "@/lib/team-data";

const leadership = getLeadership();
const advisoryJAT = getAdvisoryJAT();
const advisoryCJAT = getAdvisoryCJAT();
const schoolingLeadership = getSchoolingLeadership();
const schoolingTeachers = getSchooling();

interface MandateItem {
  heading: string;
  text: string;
}

interface AdvisoryData {
  tag: string;
  title: string;
  subtitle: string;
  summary: string;
  mandate: MandateItem[];
  departments: string[] | null;
  closing: string;
}

const jatData: AdvisoryData = {
  tag: "SECTION 1",
  title: "Joint Advisory Team (JAT)",
  subtitle:
    "Curriculum Development, Applied Training & Higher Education Mobility",
  summary:
    "The Joint Advisory Team (JAT) of the Kekuleon Research and Training Center (KRTC) is an academic advisory body composed of distinguished national university professors, international scholars, and industry specialists. The JAT operates within KRTC's decentralised and integrated institutional model — contributing to the design and continuous improvement of internationally benchmarked curricula, applied science training programmes, and laboratory infrastructure across six specialised departments.",
  mandate: [
    {
      heading: "Curriculum Development & Relevant Course Design",
      text: "The JAT is responsible for developing comprehensive course structures, learning outcomes, and assessment frameworks that serve dual objectives: equipping learners with applied scientific competence and preparing them for progression into national and international higher education pathways. Course content is designed to address the needs of both students and professionals — ensuring relevance to academic advancement, industry requirements, and professional certification standards.",
    },
    {
      heading: "Academic Capacity Building & Training of Trainers",
      text: "Beyond curriculum design, the JAT strengthens KRTC's overall academic infrastructure by developing structured programmes in research methodology, scientific writing, analytical reasoning, and laboratory competence. The advisory team contributes to designing Training of Trainers (ToT) frameworks — ensuring that knowledge transfer within the institution is sustainable, scalable, and aligned with internationally recognised pedagogical standards.",
    },
    {
      heading: "Higher Education Mobility & Professional Advancement",
      text: "A central objective of the JAT's work is to ensure that KRTC's training outputs directly support learners in accessing professional development and higher education opportunities. The advisory scope integrates academic language preparation, research-readiness training, and the development of practical laboratory portfolios that strengthen candidates' profiles for international study, research engagement, and professional placement.",
    },
    {
      heading: "Laboratory Design & Infrastructure Advisory",
      text: "The JAT advises on the planning and design of modern laboratory facilities — covering facility layout, equipment specification, safety protocols, standard operating procedures, and quality assurance systems across all departments.",
    },
  ],
  departments: [
    "Chemistry and Applied Chemical Sciences",
    "Polymer and Plastic Processing Technologies",
    "Pharmaceutical Sciences and Drug Development",
    "Materials Science and Engineering Applications",
    "Textile Testing and Quality Assurance",
    "Food Safety and Quality Control",
  ],
  closing:
    "The JAT ensures that KRTC's academic offerings remain competitive, practice-oriented, and aligned with both national educational standards and international benchmarks — supporting a progressive learning environment that bridges the gap between theoretical education and practical scientific competence.",
};

const cjatData: AdvisoryData = {
  tag: "SECTION 2",
  title: "Co-Joint Advisory Team (C-JAT)",
  subtitle: "Research Development, Institutional Modelling & Societal Impact",
  summary:
    "The Co-Joint Advisory Team (C-JAT) operates as a strategically distinct advisory body alongside the JAT, focused on the research, development, and institutional modelling dimensions of KRTC's mission. The C-JAT engages in exploratory discussions on research directions, contributes to the intellectual architecture of the institution, and ensures that KRTC's academic and research activities align with broader societal development objectives.",
  mandate: [
    {
      heading: "Research Direction & Institutional Model Development",
      text: "The C-JAT conducts preliminary and ongoing discussions regarding the research potential embedded within KRTC's integrated institutional framework. This includes evaluating emerging research themes, identifying interdisciplinary opportunities, and advising on the refinement of the decentralised research institutional model — exploring how integrated training environments can contribute to improving science education and capacity development in developing-country contexts.",
    },
    {
      heading: "Academic Project Design for Societal Benefit",
      text: "A central function of the C-JAT is to design and supervise academic projects tailored for KRTC students that align with societal benefit objectives — addressing real-world developments, contemporary issues, and emerging challenges that correlate with local, national, and global development priorities. Project themes are drawn from areas such as environmental sustainability, public health, industrial innovation, food safety, and community welfare — ensuring student research contributes meaningfully to societal progress.",
    },
    {
      heading: "Research Awareness & Methodology Training",
      text: "The C-JAT cultivates a culture of research awareness through structured programmes in both academic research methodology and workshop-based practical research training. Participants develop competencies in literature review, experimental design, data analysis, scientific writing, and ethical research practice — reflecting KRTC's philosophy that research skills are built through both formal instruction and hands-on engagement with real research contexts.",
    },
    {
      heading: "Academic Workshops & Mobility Support",
      text: "The C-JAT contributes to the design and delivery of academic workshops that strengthen participants' readiness for national and international academic mobility — including research presentation skills, proposal writing, academic publication processes, and navigation of international academic environments. These activities connect research-oriented training to tangible academic and professional progression opportunities.",
    },
  ],
  departments: null,
  closing:
    "Through its work, the C-JAT ensures that KRTC's research activities are purpose-driven, socially relevant, and contribute to broader discussions on science education, capacity development, and the role of applied training systems in supporting sustainable development.",
};

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

function MemberCard({ member }: { member: TeamMember }) {
  return (
    <Link href={`/team/${member.slug}`}>
      <div className="flex items-center gap-4 p-5 bg-white rounded-xl border border-gray-200 hover:shadow-md hover:border-primary/20 transition-all group cursor-pointer h-full">
        {member.image ? (
          <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src={member.image}
              alt={member.name}
              width={96}
              height={96}
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div
            className={`w-12 h-12 rounded-full ${member.color} flex items-center justify-center flex-shrink-0`}
          >
            <span className="text-sm font-bold text-white">
              {member.initials}
            </span>
          </div>
        )}
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors truncate">
            {member.name}
          </h3>
          <p className="text-sm text-primary font-medium truncate">
            {member.title}
          </p>
          {member.education.length > 0 && (
            <p className="text-xs text-gray-400 mt-0.5 truncate">
              {member.education[0].degree}
            </p>
          )}
        </div>
        <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
      </div>
    </Link>
  );
}

function AdvisorySection({
  data,
  members,
  sectionBg,
  cardBg,
}: {
  data: AdvisoryData;
  members: TeamMember[];
  sectionBg: string;
  cardBg: string;
}) {
  const [expanded, setExpanded] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className={`py-14 ${sectionBg}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <div className="container-custom">
          {/* Title + subtitle */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 leading-tight">
            {data.title}
          </h2>
          <p className="text-sm text-gray-500 tracking-wide mb-6">
            {data.subtitle}
          </p>

          {/* Closing */}
          <div className="rounded-xl p-5 md:p-6 border-l-[3px] border-amber-500 bg-gradient-to-br from-gray-900/[0.03] to-primary/[0.04] mb-10">
            <p className="text-[14.5px] leading-[1.75] text-gray-600 italic">
              {data.summary}
              <br />
              <br />
              {data.closing}
            </p>
          </div>

          {/* Members */}
          {members.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {members.map((m) => (
                <MemberCard key={m.id} member={m} />
              ))}
            </div>
          ) : (
            <div
              className={`${cardBg} rounded-xl p-10 text-center border border-dashed border-gray-200`}
            >
              <p className="text-gray-400">
                Advisory members will be announced soon
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
}

export default function TeamPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-12 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
              Our Team
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
              Meet Our Team
            </h1>
            <p className="text-lg text-gray-500  tracking-wide max-w-2xl">
              Dedicated educators bridging the gap between theory and practice
              in science education.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership */}
      <Section className="py-12 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-xl font-bold text-gray-900">Leadership</h2>
          <p className="text-sm text-gray-500 mb-6">
            Meet the Minds Shaping Our Future
          </p>
          <div className="max-w-2xl">
            {leadership.map((member) => (
              <Link key={member.id} href={`/team/${member.slug}`}>
                <div className="flex flex-col sm:flex-row gap-5 mb-10 p-6 bg-white rounded-xl border border-gray-200 hover:shadow-md hover:border-primary/20 transition-all group cursor-pointer">
                  {member.image ? (
                    <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
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
                      className={`w-20 h-20 rounded-xl ${member.color} flex items-center justify-center flex-shrink-0`}
                    >
                      <span className="text-2xl font-bold text-white">
                        {member.initials}
                      </span>
                    </div>
                  )}
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-sm text-primary font-medium mt-0.5">
                      {member.title}
                    </p>
                    {member.education.length > 0 && (
                      <p className="text-xs text-gray-400 mt-1">
                        {member.education[0].degree}
                      </p>
                    )}
                    <span className="inline-flex items-center gap-1 text-primary text-sm font-medium mt-3 group-hover:gap-2 transition-all">
                      View Profile
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {/* Joint Advisory Team */}
      <AdvisorySection
        data={jatData}
        members={advisoryJAT}
        sectionBg="bg-[#FFFCFA]"
        cardBg="bg-white"
      />

      {/* Co-Joint Advisory Team */}
      <AdvisorySection
        data={cjatData}
        members={advisoryCJAT}
        sectionBg="bg-[#FAFCFF]"
        cardBg="bg-white"
      />

      {/* Applied Sciences — Coming Soon */}
      <Section className="py-12 bg-white">
        <div className="container-custom">
          <h2 className="text-xl font-bold text-gray-900 mb-1">
            Department of Applied Sciences
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Research & advanced scientific training
          </p>
          <div className="bg-gray-50 rounded-xl p-10 text-center border border-dashed border-gray-200">
            <p className="text-gray-400">Coming Soon</p>
          </div>
        </div>
      </Section>

      {/* KRTC Schooling */}
      <Section className="py-12 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-xl font-bold text-gray-900 mb-1">
            KRTC Schooling Foundation Pipeline
          </h2>
          <p className="text-sm text-gray-500 mb-10">
            SSC & HSC preparation team
          </p>

          {/* Administration */}
          <div className="mb-10">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
              Administration
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {schoolingLeadership.map((member) => (
                <MemberCard key={member.id} member={member} />
              ))}
            </div>
          </div>

          {/* Teaching Faculty */}
          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
              Teaching Faculty
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {schoolingTeachers.map((member) => (
                <MemberCard key={member.id} member={member} />
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Join Team CTA */}
      <Section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Join Our Team
            </h2>
            <p className="text-gray-500 mb-6">
              We&apos;re looking for passionate educators who share our vision.
            </p>
            <Link href="/careers" className="btn btn-primary group">
              View Positions
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}

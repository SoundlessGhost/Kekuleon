"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  getLeadership,
  getExecutive,
  getStrategicPartners,
  getSchoolingLeadership,
  getSchooling,
  getAdvisoryJAT,
  getAdvisoryCJATAll,
  getUniversityCoordinatorsByZone,
  getProgramBoardDirector,
} from "@/lib/team-data";
import Image from "next/image";
import type { TeamMember } from "@/lib/team-data";

const leadership = getLeadership();
const executive = getExecutive();
const strategicPartners = getStrategicPartners();
const schoolingLeadership = getSchoolingLeadership();
const schoolingTeachers = getSchooling();
const advisoryJAT = getAdvisoryJAT();
const advisoryCJAT = getAdvisoryCJATAll();
const universityCoordinatorZones = getUniversityCoordinatorsByZone();
const programBoardDirector = getProgramBoardDirector();

// Applied Sciences section mirrors the four Strategic Partners
// (dual-listing — each partner also leads an applied sciences department).
const appliedSciencesCombined: TeamMember[] = [...strategicPartners];

const JAT_DESCRIPTION = `The Joint Advisory Team (JAT) of the Kekuleon Research and Training Center (KRTC) is an academic advisory body composed of distinguished national university professors, international scholars, and industry specialists. The JAT operates within KRTC's decentralised and integrated institutional model — contributing to the design and continuous improvement of internationally benchmarked curricula, applied science training programmes, and laboratory infrastructure across six specialised departments.

The JAT ensures that KRTC's academic offerings remain competitive, practice-oriented, and aligned with both national educational standards and international benchmarks — supporting a progressive learning environment that bridges the gap between theoretical education and practical scientific competence.`;

const CJAT_DESCRIPTION = `The Co-Joint Advisory Team (C-JAT) operates as a strategically distinct advisory body alongside the JAT, focused on the research, development, and institutional modelling dimensions of KRTC's mission. The C-JAT engages in exploratory discussions on research directions, contributes to the intellectual architecture of the institution, and ensures that KRTC's academic and research activities align with broader societal development objectives.

Through its work, the C-JAT ensures that KRTC's research activities are purpose-driven, socially relevant, and contribute to broader discussions on science education, capacity development, and the role of applied training systems in supporting sustainable development.`;

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

// Fills either a Board of Director or Zone Advisor slot for a zone.
// When the slot is empty, renders a "To Be Announced" placeholder styled to
// match the role accent so the structure stays visually balanced.
function ZoneLeadershipSlot({
  roleLabel,
  member,
  accent,
}: {
  roleLabel: string;
  member: TeamMember | null;
  accent: "violet" | "amber";
}) {
  const palette =
    accent === "violet"
      ? {
          badgeBg: "bg-violet-50",
          badgeText: "text-violet-700",
          badgeBorder: "border-violet-100",
          avatarBg: "bg-violet-100",
          avatarText: "text-violet-600",
        }
      : {
          badgeBg: "bg-amber-50",
          badgeText: "text-amber-700",
          badgeBorder: "border-amber-100",
          avatarBg: "bg-amber-100",
          avatarText: "text-amber-700",
        };

  if (!member) {
    return (
      <div className="flex items-center gap-4 p-5 rounded-xl border border-dashed border-gray-200 bg-gray-50/50">
        <div
          className={`w-11 h-11 rounded-full ${palette.avatarBg} flex items-center justify-center flex-shrink-0`}
        >
          <span className={`text-sm font-bold ${palette.avatarText}`}>?</span>
        </div>
        <div className="flex-1 min-w-0">
          <span
            className={`inline-block text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded ${palette.badgeBg} ${palette.badgeText} border ${palette.badgeBorder} mb-1`}
          >
            {roleLabel}
          </span>
          <p className="text-sm font-semibold text-gray-400">To Be Announced</p>
        </div>
      </div>
    );
  }

  return (
    <Link href={`/team/${member.slug}`}>
      <div className="flex items-center gap-4 p-5 rounded-xl border border-gray-200 bg-white hover:shadow-md hover:border-primary/20 transition-all group cursor-pointer h-full">
        {member.image ? (
          <div className="w-11 h-11 rounded-full overflow-hidden flex-shrink-0">
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
            className={`w-11 h-11 rounded-full ${member.color} flex items-center justify-center flex-shrink-0`}
          >
            <span className="text-sm font-bold text-white">
              {member.initials}
            </span>
          </div>
        )}
        <div className="flex-1 min-w-0">
          <span
            className={`inline-block text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded ${palette.badgeBg} ${palette.badgeText} border ${palette.badgeBorder} mb-1`}
          >
            {roleLabel}
          </span>
          <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors truncate">
            {member.name}
          </h3>
          <p className="text-xs text-gray-500 truncate">
            {member.university || member.department}
          </p>
        </div>
        <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
      </div>
    </Link>
  );
}

function MemberCard({
  member,
  isZoneAdvisor = false,
}: {
  member: TeamMember;
  isZoneAdvisor?: boolean;
}) {
  const isPlaceholder = member.name === "To Be Announced";
  const isCoordinator = member.type === "university-coordinator";

  if (isPlaceholder) {
    return (
      <div className="flex items-center gap-4 p-5 bg-white rounded-xl border border-dashed border-gray-200 h-full">
        <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
          <span className="text-sm font-bold text-gray-400">?</span>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-gray-400 truncate">
            To Be Announced
          </h3>
          <p className="text-sm text-gray-400 font-medium truncate">
            {member.partnerDepartment || member.title}
          </p>
        </div>
      </div>
    );
  }

  // For university coordinators, surface the university (code + name) as the
  // primary secondary line — since all coordinators share the same title,
  // the university is what differentiates them within the flat zone list.
  const secondary = isCoordinator
    ? member.university || member.department
    : member.title;
  const tertiary =
    member.education.length > 0 ? member.education[0].degree : null;

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
          <div className="flex items-center gap-2 min-w-0">
            <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors truncate">
              {member.name}
            </h3>
            {isZoneAdvisor && (
              <span className="flex-shrink-0 text-[9px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded bg-amber-50 text-amber-700 border border-amber-100">
                Advisor
              </span>
            )}
          </div>
          <p className="text-sm text-primary font-medium truncate">
            {isCoordinator && member.universityCode && (
              <span className="font-mono text-[11px] font-semibold px-1.5 py-0.5 mr-1.5 rounded bg-primary/5 text-primary/70">
                {member.universityCode}
              </span>
            )}
            {secondary}
          </p>
          {tertiary && (
            <p className="text-xs text-gray-400 mt-0.5 truncate">{tertiary}</p>
          )}
        </div>
        <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
      </div>
    </Link>
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
                <div className="flex flex-col items-center sm:flex-row gap-5 p-6 mb-10 bg-white rounded-xl border border-gray-200 hover:shadow-md hover:border-primary/20 transition-all group cursor-pointer">
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
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {/* Executive Management */}
      {executive.length > 0 && (
        <Section className="py-12 bg-white">
          <div className="container-custom">
            <h2 className="text-xl font-bold text-gray-900">
              Executive Management
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              Operational leadership driving day-to-day execution
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {executive.map((member) => (
                <MemberCard key={member.id} member={member} />
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* Strategic Partners */}
      {strategicPartners.length > 0 && (
        <Section className="py-12 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-xl font-bold text-gray-900">
              Strategic Partners
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              Departmental leads shaping KRTC&apos;s scientific direction
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {strategicPartners.map((member) => (
                <MemberCard key={member.id} member={member} />
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* Department of Applied Sciences */}
      {appliedSciencesCombined.length > 0 && (
        <Section className="py-12 bg-white">
          <div className="container-custom">
            <h2 className="text-xl font-bold text-gray-900">
              Department of Applied Sciences
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              Research & advanced scientific training faculty
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {appliedSciencesCombined.map((member) => (
                <MemberCard key={member.id} member={member} />
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* University Coordinator & Student Ambassador — Zone-based */}
      <Section className="py-12 bg-gradient-to-b from-white to-gray-50 border-t border-gray-100">
        <div className="container-custom">
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900">
              University Coordinators & Student Ambassadors
            </h2>
            <p className="text-sm text-gray-500 mt-1 max-w-3xl">
              A nationwide academic network organized into{" "}
              <span className="font-semibold text-gray-700">
                4 regional coordination zones
              </span>{" "}
              — connecting public universities, science & technology
              universities and their affiliated National University colleges
              across Bangladesh.
            </p>
          </div>

          {/* Program Leadership — single Board of Director overseeing all zones */}
          <div className="mb-8">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
              Program Leadership
            </h3>
            <div className="max-w-xl">
              <ZoneLeadershipSlot
                roleLabel="Board of Director — UC&SA Program"
                member={programBoardDirector}
                accent="violet"
              />
            </div>
          </div>

          <div className="space-y-8">
            {universityCoordinatorZones.map((zone) => (
              <div
                key={zone.id}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden"
              >
                {/* Zone header */}
                <div className="px-6 py-5 bg-gradient-to-r from-gray-50 to-white border-b border-gray-100">
                  <div className="flex items-baseline flex-wrap gap-x-4 gap-y-1">
                    <h3 className="text-base font-bold text-gray-900 uppercase tracking-wide">
                      {zone.name}
                    </h3>
                    <span className="text-sm text-gray-500">
                      {zone.region}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">
                    {zone.universities.length} partner universities ·{" "}
                    {zone.affiliatedNote}
                  </p>
                </div>

                <div className="p-6 space-y-6">
                  {/* Zone Advisor slot (single role per zone) */}
                  <div>
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                      Zone Advisor
                    </h4>
                    <div className="max-w-xl">
                      <ZoneLeadershipSlot
                        roleLabel="Zone Advisor"
                        member={zone.advisor}
                        accent="amber"
                      />
                    </div>
                  </div>

                  {/* Flat coordinator list — serial order, not grouped by university */}
                  <div>
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                      University Coordinators & Student Ambassadors
                      {zone.coordinators.length > 0 && (
                        <span className="ml-2 text-gray-400 normal-case tracking-normal font-normal">
                          · {zone.coordinators.length}{" "}
                          {zone.coordinators.length === 1
                            ? "member"
                            : "members"}
                        </span>
                      )}
                    </h4>
                    {zone.coordinators.length > 0 ? (
                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {zone.coordinators.map((member) => (
                          <MemberCard
                            key={member.id}
                            member={member}
                            isZoneAdvisor={member.slug === zone.advisor?.slug}
                          />
                        ))}
                      </div>
                    ) : (
                      <div className="rounded-xl border border-dashed border-gray-200 px-5 py-6 text-center bg-gray-50/50">
                        <p className="text-xs text-gray-400">
                          Coordinator appointments for {zone.name} universities
                          are in progress — to be announced soon.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
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
          {schoolingLeadership.length > 0 && (
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
          )}

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

      {/* Advisory Board — header */}
      <Section className="pt-16 pb-6 bg-white">
        <div className="container-custom">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary mb-2">
            Advisory Board
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Guiding KRTC&apos;s Academic & Research Direction
          </h2>
          <p className="text-sm text-gray-500 max-w-2xl">
            Distinguished scholars and specialists organised into two
            complementary bodies — the Joint Advisory Team and the Co-Joint
            Advisory Team.
          </p>
        </div>
      </Section>

      {/* Joint Advisory Team (JAT) */}
      <Section className="py-10 bg-white">
        <div className="container-custom">
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden mb-8">
            <div className="px-6 md:px-8 py-6 bg-gradient-to-r from-amber-50/60 to-transparent border-b border-gray-100">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-100 text-amber-800 text-[11px] font-bold tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" /> JAT
                </span>
                <span className="text-xs text-gray-500">
                  Curriculum Development · Applied Training · Higher Education
                  Mobility
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                Joint Advisory Team
              </h3>
            </div>
            <div className="px-6 md:px-8 py-6">
              <p className="text-[14.5px] leading-[1.8] text-gray-600 whitespace-pre-line">
                {JAT_DESCRIPTION}
              </p>
            </div>
          </div>

          {advisoryJAT.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {advisoryJAT.map((member) => (
                <MemberCard key={member.id} member={member} />
              ))}
            </div>
          ) : (
            <div className="bg-gray-50 rounded-xl p-10 text-center border border-dashed border-gray-200">
              <p className="text-gray-400">
                JAT members will be announced soon
              </p>
            </div>
          )}
        </div>
      </Section>

      {/* Co-Joint Advisory Team (C-JAT) */}
      <Section className="py-10 bg-gray-50">
        <div className="container-custom">
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden mb-8">
            <div className="px-6 md:px-8 py-6 bg-gradient-to-r from-emerald-50/60 to-transparent border-b border-gray-100">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />{" "}
                  C-JAT
                </span>
                <span className="text-xs text-gray-500">
                  Research Development · Institutional Modelling · Societal
                  Impact
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                Co-Joint Advisory Team
              </h3>
            </div>
            <div className="px-6 md:px-8 py-6">
              <p className="text-[14.5px] leading-[1.8] text-gray-600 whitespace-pre-line">
                {CJAT_DESCRIPTION}
              </p>
            </div>
          </div>

          {advisoryCJAT.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {advisoryCJAT.map((member) => (
                <MemberCard key={member.id} member={member} />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-xl p-10 text-center border border-dashed border-gray-200">
              <p className="text-gray-400">
                C-JAT members will be announced soon
              </p>
            </div>
          )}
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

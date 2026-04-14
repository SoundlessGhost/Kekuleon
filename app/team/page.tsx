"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  getLeadership,
  getSchoolingLeadership,
  getSchooling,
} from "@/lib/team-data";
import Image from "next/image";
import type { TeamMember } from "@/lib/team-data";

const leadership = getLeadership();
const schoolingLeadership = getSchoolingLeadership();
const schoolingTeachers = getSchooling();

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
            <p className="text-lg text-gray-500 max-w-2xl">
              Dedicated educators bridging the gap between theory and practice
              in science education.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership */}
      <Section className="py-12 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Leadership</h2>
          <div className="max-w-2xl">
            {leadership.map((member) => (
              <Link key={member.id} href={`/team/${member.slug}`}>
                <div className="flex flex-col sm:flex-row gap-5 p-6 bg-white rounded-xl border border-gray-200 hover:shadow-md hover:border-primary/20 transition-all group cursor-pointer">
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

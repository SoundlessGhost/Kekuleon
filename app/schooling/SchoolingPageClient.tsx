"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { schoolingContent } from "@/lib/data";

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

export default function SchoolingPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
              {schoolingContent.subtitle}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-5">
              {schoolingContent.title}
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              {schoolingContent.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <Section className="py-14 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-3 gap-8 max-w-2xl">
            <div className="text-center">
              <p className="text-4xl font-bold text-gray-900">
                {schoolingContent.currentStatus.enrolled}+
              </p>
              <p className="text-sm text-gray-500 mt-1">Current Students</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-gray-900">
                {schoolingContent.currentStatus.target}+
              </p>
              <p className="text-sm text-gray-500 mt-1">Target Capacity</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-gray-900">
                {schoolingContent.currentStatus.scholarshipPercent}%
              </p>
              <p className="text-sm text-gray-500 mt-1">Scholarship Fund</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Program Highlights */}
      <Section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Program Highlights
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            {schoolingContent.highlight}
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {schoolingContent.benefits.map((benefit) => (
              <div key={benefit.title} className="border-t-2 border-primary pt-4">
                <h3 className="font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Training Components + Scholarship */}
      <Section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Training Components
              </h2>
              <p className="text-gray-600 mb-6">
                Our comprehensive curriculum prepares students for academic
                excellence and international opportunities.
              </p>
              <ul className="space-y-3">
                {schoolingContent.components.map((component, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{component}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8 border-l-4 border-l-primary">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Scholarship Opportunities
              </h3>
              <p className="text-gray-600 mb-6">
                KRTC conducts merit-based scholarship examinations.{" "}
                {schoolingContent.currentStatus.scholarshipPercent}% of KRTC
                Schooling students receive scholarships for deserving students.
              </p>
              <Link href="/scholarships" className="btn btn-primary group">
                Apply for Scholarship
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

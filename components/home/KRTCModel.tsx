"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  GraduationCap,
  FlaskConical,
  BookOpen,
  Building2,
  Rocket,
} from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Foundation Level",
    subtitle: "KRTC Schooling",
    description:
      "Academic preparation, early research exposure, language development, and community engagement at the secondary level.",
    icon: GraduationCap,
  },
  {
    num: "02",
    title: "Applied Science Training",
    subtitle: "6 Departments",
    description:
      "Laboratory-based and problem-oriented learning across applied scientific fields, developing practical competence.",
    icon: FlaskConical,
  },
  {
    num: "03",
    title: "Research Engagement",
    subtitle: "Academic & Project Work",
    description:
      "Research-oriented activities including academic writing, methodology training, and project-based work.",
    icon: BookOpen,
  },
  {
    num: "04",
    title: "Industry & Community",
    subtitle: "Real-World Applications",
    description:
      "Technical applications, environmental initiatives, and community-based activities linking science to real-world contexts.",
    icon: Building2,
  },
  {
    num: "05",
    title: "Higher Education",
    subtitle: "Professional Pathways",
    description:
      "Progression toward advanced academic study and professional environments through skill development.",
    icon: Rocket,
  },
];

export default function KRTCModel() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
              Our Framework
            </p>
            <h2 className="heading-xl mb-4">
              KRTC Model: Integrated Progression Framework
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              A progressive and interconnected system that links different stages
              of education, training, and application — enabling continuous
              movement between education, research, and real-world impact.
            </p>
          </div>

          {/* Steps — horizontal timeline style */}
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-10 left-0 right-0 h-px bg-gray-200" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
              {steps.map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.num} className="relative text-center lg:text-left">
                    {/* Step number circle */}
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-50 border-2 border-gray-200 mb-5 relative z-10 lg:mx-0 mx-auto">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>

                    <span className="block text-xs font-bold text-primary tracking-wider mb-1">
                      Step {step.num}
                    </span>
                    <h3 className="text-base font-bold text-gray-900 mb-1">
                      {step.title}
                    </h3>
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-3">
                      {step.subtitle}
                    </p>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom text */}
          <div className="mt-14 text-center">
            <p className="text-sm text-gray-500">
              Continuous movement between{" "}
              <span className="text-primary font-medium">education</span>,{" "}
              <span className="text-primary font-medium">research</span>, and{" "}
              <span className="text-primary font-medium">application</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

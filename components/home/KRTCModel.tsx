"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  GraduationCap,
  FlaskConical,
  BookOpen,
  Building2,
  Rocket,
  ArrowDown,
  Sparkles,
} from "lucide-react";

const progressionLevels = [
  {
    id: 1,
    title: "Foundation Level",
    subtitle: "KRTC Schooling",
    description:
      "Academic preparation, early research exposure, language development, and community engagement support students at the secondary level.",
    icon: GraduationCap,
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    iconBg: "bg-blue-500",
  },
  {
    id: 2,
    title: "Applied Science Training",
    subtitle: "6 Specialized Departments",
    description:
      "Students transition into laboratory-based and problem-oriented learning across applied scientific fields, developing practical competence.",
    icon: FlaskConical,
    color: "from-emerald-500 to-emerald-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    iconBg: "bg-emerald-500",
  },
  {
    id: 3,
    title: "Research Engagement",
    subtitle: "Academic & Project Work",
    description:
      "Participants engage in research-oriented activities, including academic writing, methodology training, and project-based work.",
    icon: BookOpen,
    color: "from-violet-500 to-violet-600",
    bgColor: "bg-violet-50",
    borderColor: "border-violet-200",
    iconBg: "bg-violet-500",
  },
  {
    id: 4,
    title: "Industry & Community Interface",
    subtitle: "Real-World Applications",
    description:
      "Training is connected to technical applications, environmental initiatives, and community-based activities, linking science to real-world contexts.",
    icon: Building2,
    color: "from-amber-500 to-amber-600",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
    iconBg: "bg-amber-500",
  },
  {
    id: 5,
    title: "Higher Education & Professional Pathways",
    subtitle: "Advanced Study & Careers",
    description:
      "The system supports progression toward advanced academic study and professional environments through skill development and academic preparation.",
    icon: Rocket,
    color: "from-rose-500 to-rose-600",
    bgColor: "bg-rose-50",
    borderColor: "border-rose-200",
    iconBg: "bg-rose-500",
  },
];

export default function KRTCModel() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="section bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px]" />
        
        {/* Grid Pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.015]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="model-grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#model-grid)" />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">
              Our Framework
            </span>
          </div>
          <h2 className="heading-xl mb-4">
            KRTC Model:{" "}
            <span className="text-gradient-primary">
              Integrated Progression Framework
            </span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            A progressive and interconnected system that links different stages
            of education, training, and application — enabling continuous
            movement between education, research, and real-world impact.
          </p>
        </motion.div>

        {/* Progression Framework */}
        <div className="max-w-4xl mx-auto">
          {/* Desktop/Tablet View */}
          <div className="hidden md:block relative">
            {/* Connecting Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-emerald-500 to-rose-500 -translate-x-1/2" />

            {progressionLevels.map((level, index) => {
              const Icon = level.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={level.id}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className={`relative flex items-center gap-8 mb-12 last:mb-0 ${
                    isEven ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  {/* Content Card */}
                  <div className="flex-1">
                    <div
                      className={`card p-6 ${level.bgColor} border ${level.borderColor} hover:shadow-lg transition-all duration-300 group`}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-12 h-12 rounded-xl ${level.iconBg} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform`}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">
                            {level.subtitle}
                          </div>
                          <h3 className="text-lg font-bold text-gray-900 mb-2">
                            {level.title}
                          </h3>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {level.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center Node */}
                  <div className="relative z-10 flex-shrink-0">
                    <div
                      className={`w-14 h-14 rounded-full bg-gradient-to-br ${level.color} flex items-center justify-center shadow-lg ring-4 ring-white`}
                    >
                      <span className="text-white font-bold text-lg">
                        {level.id}
                      </span>
                    </div>
                  </div>

                  {/* Empty Space for Alignment */}
                  <div className="flex-1" />
                </motion.div>
              );
            })}
          </div>

          {/* Mobile View */}
          <div className="md:hidden relative">
            {/* Connecting Line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-violet-500 to-rose-500" />

            {progressionLevels.map((level, index) => {
              const Icon = level.icon;

              return (
                <motion.div
                  key={level.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex items-start gap-4 mb-8 last:mb-0"
                >
                  {/* Node */}
                  <div className="relative z-10 flex-shrink-0">
                    <div
                      className={`w-12 h-12 rounded-full bg-gradient-to-br ${level.color} flex items-center justify-center shadow-lg ring-4 ring-white`}
                    >
                      <span className="text-white font-bold">{level.id}</span>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 pt-1">
                    <div
                      className={`card p-4 ${level.bgColor} border ${level.borderColor}`}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div
                          className={`w-8 h-8 rounded-lg ${level.iconBg} flex items-center justify-center`}
                        >
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <div className="text-[10px] font-medium text-gray-500 uppercase tracking-wider">
                            {level.subtitle}
                          </div>
                          <h3 className="text-sm font-bold text-gray-900">
                            {level.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {level.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20">
            <div className="flex -space-x-2">
              {progressionLevels.map((level) => (
                <div
                  key={level.id}
                  className={`w-8 h-8 rounded-full bg-gradient-to-br ${level.color} ring-2 ring-white flex items-center justify-center`}
                >
                  <level.icon className="w-4 h-4 text-white" />
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-700 font-medium">
              Continuous movement between{" "}
              <span className="text-primary">education</span>,{" "}
              <span className="text-primary">research</span>, and{" "}
              <span className="text-primary">application</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  AlertTriangle,
  CheckCircle2,
  BookX,
  FlaskConicalOff,
  BriefcaseBusiness,
  GraduationCap,
  Building2,
  Users,
  Scale,
  ArrowRight,
  Lightbulb,
  FlaskConical,
  Target,
  Globe,
  BookOpen,
  Layers,
  Heart,
} from "lucide-react";

const problems = [
  {
    icon: BookX,
    title: "Theory–Practice Gap",
    description:
      "Education is largely theory-oriented, with limited access to laboratory training and real-world scientific practice.",
  },
  {
    icon: FlaskConicalOff,
    title: "Limited Research Exposure",
    description:
      "Many students engage in review-based academic work rather than experimental or problem-oriented research.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Mismatch with Industry",
    description:
      "Academic curricula are often not aligned with current industry and technical requirements.",
  },
  {
    icon: GraduationCap,
    title: "Employability Challenges",
    description:
      "Fresh graduates are frequently rejected by employers due to lack of practical skills and hands-on experience.",
  },
  {
    icon: Globe,
    title: "Higher Education Barriers",
    description:
      "Insufficient research training and laboratory experience limit readiness for international study.",
  },
  {
    icon: Building2,
    title: "Weak Sector Integration",
    description:
      "Limited collaboration between education, industry, and research institutions.",
  },
  {
    icon: Users,
    title: "Unequal Access",
    description:
      "Students from diverse backgrounds often lack access to applied training and academic support.",
  },
];

const solutions = [
  {
    icon: Layers,
    title: "Progressive Learning Pathway",
    description:
      "Structured system supporting students from foundation-level to applied science training and research.",
  },
  {
    icon: Lightbulb,
    title: "Early Research Exposure",
    description:
      "Introduction to scientific thinking, research methods, and academic skills from secondary level.",
  },
  {
    icon: FlaskConical,
    title: "Applied & Lab-Based Training",
    description:
      "Hands-on learning in chemistry, materials science, pharmaceutical sciences, and healthcare.",
  },
  {
    icon: Target,
    title: "Problem-Oriented Research",
    description:
      "Research activities aligned with real-world challenges including sustainability and industry needs.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Industry Alignment",
    description:
      "Training linked to technical skills, applied work, and industry-relevant competencies.",
  },
  {
    icon: GraduationCap,
    title: "Higher Education Support",
    description:
      "Academic writing, research skills, and language training for national and international study.",
  },
  {
    icon: BookOpen,
    title: "Integrated Environment",
    description:
      "Learning, research, and application developed together in a unified system.",
  },
  {
    icon: Heart,
    title: "Access & Inclusion",
    description:
      "Expanding opportunities for students from diverse socio-economic backgrounds.",
  },
];

export default function ProblemSolution() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section bg-gray-50 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px]" />
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
            <Scale className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">
              Challenge & Response
            </span>
          </div>
          <h2 className="heading-xl mb-4">
            The Problem We Address &{" "}
            <span className="text-gradient-primary">Our Solution</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Understanding the challenges in science education and how KRTC's
            integrated model addresses them systematically.
          </p>
        </motion.div>

        {/* Problems & Solutions Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Problems Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Problems Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  The Problem We Address
                </h3>
                <p className="text-sm text-gray-500">
                  Issues in science education
                </p>
              </div>
            </div>

            {/* Problems List */}
            <div className="space-y-3">
              {problems.map((problem, index) => {
                const Icon = problem.icon;
                return (
                  <motion.div
                    key={problem.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                    className="group"
                  >
                    <div className="flex gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:border-red-200 hover:shadow-md transition-all duration-300">
                      <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0 group-hover:bg-red-100 transition-colors">
                        <Icon className="w-5 h-5 text-red-500" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-900 text-sm mb-1">
                          {problem.title}
                        </h4>
                        <p className="text-xs text-gray-500 leading-relaxed">
                          {problem.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Problems Summary */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-4 p-4 bg-red-50 rounded-xl border border-red-100"
            >
              <p className="text-sm text-red-800 leading-relaxed">
                <span className="font-semibold">Core Issue:</span> A disconnect
                between education, practice, and opportunity — limiting both
                individual progression and scientific capacity development.
              </p>
            </motion.div>
          </motion.div>

          {/* Solutions Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Solutions Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Our Solutions
                </h3>
                <p className="text-sm text-gray-500">
                  KRTC's integrated approach
                </p>
              </div>
            </div>

            {/* Solutions List */}
            <div className="space-y-3">
              {solutions.map((solution, index) => {
                const Icon = solution.icon;
                return (
                  <motion.div
                    key={solution.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                    className="group"
                  >
                    <div className="flex gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:border-emerald-200 hover:shadow-md transition-all duration-300">
                      <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-100 transition-colors">
                        <Icon className="w-5 h-5 text-emerald-500" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-900 text-sm mb-1">
                          {solution.title}
                        </h4>
                        <p className="text-xs text-gray-500 leading-relaxed">
                          {solution.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Solutions Summary */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-4 p-4 bg-emerald-50 rounded-xl border border-emerald-100"
            >
              <p className="text-sm text-emerald-800 leading-relaxed">
                <span className="font-semibold">KRTC's Approach:</span> A
                decentralised and integrated institutional model connecting
                education, research, and application within a single framework.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-white rounded-2xl border border-gray-200 shadow-sm">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                <AlertTriangle className="w-4 h-4 text-red-500" />
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400" />
              <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              </div>
            </div>
            <span className="text-sm text-gray-600">
              Transforming challenges into{" "}
              <span className="text-primary font-semibold">opportunities</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

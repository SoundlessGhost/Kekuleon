"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  GraduationCap,
  FlaskConical,
  BookOpen,
  Building2,
  Microscope,
  Users,
  Globe,
  Lightbulb,
  TrendingUp,
  Check,
} from "lucide-react";

const whatWeDo = [
  {
    icon: GraduationCap,
    title: "Foundation Program",
    subtitle: "KRTC Schooling",
    description:
      "Supports secondary-level students through academic reinforcement, early research exposure, language preparation, and structured engagement activities.",
  },
  {
    icon: FlaskConical,
    title: "Applied Science Training",
    subtitle: "6 Departments",
    description:
      "Provides laboratory-oriented and problem-focused learning across areas such as chemistry, materials science, pharmaceutical sciences, and healthcare.",
  },
  {
    icon: BookOpen,
    title: "Research & Academic Development",
    subtitle: "Skills Building",
    description:
      "Introduces students and graduates to research methods, academic writing, and project-based learning.",
  },
  {
    icon: Building2,
    title: "Industry & Community Engagement",
    subtitle: "Real-World Impact",
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

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-primary/5 to-transparent" />
        <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-gradient-radial from-blue-500/5 to-transparent" />
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
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-sm text-primary font-medium">About KRTC</span>
          </div>

          <h2 className="heading-xl mb-6">
            An Emerging Initiative in{" "}
            <span className="text-gradient-primary">Bangladesh</span>
          </h2>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            The Kekuleon Research and Training Center (KRTC) is focused on
            strengthening the connection between science education and practical
            competence. It responds to a common challenge where theoretical
            learning is not sufficiently supported by laboratory training,
            research exposure, or industry-oriented experience.
          </p>
        </motion.div>

        {/* What We Do - Horizontal Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/30" />
            <h3 className="text-xl font-bold text-gray-900">What We Do</h3>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/30" />
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {whatWeDo.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <div className="flex gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100 hover:border-primary/20 hover:bg-white hover:shadow-md transition-all duration-300 group">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:shadow-lg transition-all duration-300">
                      <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-bold text-gray-900">
                          {item.title}
                        </h4>
                        <span className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded-full">
                          {item.subtitle}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Our Approach + Info Grid */}
        <div className="grid lg:grid-cols-5 gap-8 mb-6">
          {/* Our Approach - Takes 2 columns */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <div className="bg-gradient-to-br from-primary to-red-700 rounded-2xl p-8 text-white h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Our Approach</h3>
              </div>

              <p className="text-white/80 mb-6 text-sm leading-relaxed">
                KRTC is based on the idea that education, research, and
                application are more effective when developed together.
              </p>

              <div className="space-y-3">
                {ourApproach.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm text-white/90">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Cards - Takes 3 columns */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-3 grid gap-5"
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
                  awareness, language training, and community activities.
                </p>
              </div>
            </div>

            {/* Research Orientation */}
            <div className="flex gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center flex-shrink-0">
                <Microscope className="w-6 h-6 text-violet-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">
                  Research Orientation
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  KRTC also functions as a practice-based research initiative,
                  exploring how decentralised training environments can
                  contribute to improving science education and capacity
                  development.
                </p>
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
                  strengthens applied science education and supports scientific
                  capacity development in developing-country contexts.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* International Recognition */}
        <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 mb-8">
          <p className="text-sm text-gray-600 italic leading-relaxed">
            This initiative has been submitted to UNESCO, Falling Walls Lab/Cell
            2026 (Berlin), and other international organisations for
            consideration in academic collaboration and institutional
            engagement.
          </p>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <Link href="/about" className="btn btn-primary group rounded-full">
            Learn More About Us
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

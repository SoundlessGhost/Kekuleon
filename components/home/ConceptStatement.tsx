"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Lightbulb,
  Layers,
  ArrowRightLeft,
  Target,
  Quote,
  Sparkles,
  BookOpen,
  Users,
  Globe,
} from "lucide-react";

const conceptHighlights = [
  {
    icon: Layers,
    title: "Integrated Model",
    description:
      "Foundation-level preparation, applied science training, research engagement, and community-linked activities within a single operational framework.",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: ArrowRightLeft,
    title: "Progressive System",
    description:
      "Supports student transitions across different educational stages while strengthening readiness for both higher education and professional environments.",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
  },
  {
    icon: Target,
    title: "Problem-Oriented Research",
    description:
      "Applied training aligned with environmental, social, and industrial contexts — addressing real-world challenges through practical engagement.",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
];

const keyPoints = [
  { icon: BookOpen, text: "Decentralised institutional approach" },
  { icon: Users, text: "Community-linked activities" },
  { icon: Globe, text: "Developing-country contexts" },
  { icon: Sparkles, text: "Sustainable development focus" },
];

export default function ConceptStatement() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section bg-gray-50 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Lightbulb className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Our Vision</span>
          </div>
          <h2 className="heading-xl mb-4">
            Concept <span className="text-gradient-primary">Statement</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Understanding KRTC's integrated approach to bridging theory and
            practice in science education.
          </p>
        </motion.div>

        {/* Main Content - Two Column */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Main Statement */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Statement Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Quote className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  The KRTC Concept
                </h3>
                <p className="text-sm text-gray-500">
                  Our foundational approach
                </p>
              </div>
            </div>

            {/* Statement Cards */}
            <div className="space-y-4">
              <div className="flex gap-4 p-5 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold text-sm">01</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  KRTC develops a{" "}
                  <span className="text-gray-900 font-semibold">
                    decentralised and integrated institutional model
                  </span>{" "}
                  designed to address the gap between theoretical education and
                  practical scientific competence in developing-country
                  contexts.
                </p>
              </div>

              <div className="flex gap-4 p-5 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold text-sm">02</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  By structuring learning as a{" "}
                  <span className="text-gray-900 font-semibold">
                    progressive system
                  </span>
                  , the model supports student transitions across different
                  educational stages while strengthening readiness for both
                  higher education and professional environments.
                </p>
              </div>

              <div className="flex gap-4 p-5 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold text-sm">03</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Rather than treating education, research, and application as
                  separate domains,{" "}
                  <span className="text-primary font-semibold">
                    KRTC integrates them into a continuous learning environment
                  </span>
                  .
                </p>
              </div>
            </div>

            {/* Key Points Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-5 p-4 bg-gradient-to-r from-primary/5 to-transparent rounded-xl border border-primary/10"
            >
              <div className="flex flex-wrap gap-3">
                {keyPoints.map((point, index) => {
                  const Icon = point.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <Icon className="w-4 h-4 text-primary" />
                      <span>{point.text}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Key Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Highlights Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Key Highlights
                </h3>
                <p className="text-sm text-gray-500">
                  Core components of our model
                </p>
              </div>
            </div>

            {/* Highlight Cards */}
            <div className="space-y-4">
              {conceptHighlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="group"
                  >
                    <div className="flex gap-4 p-5 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-all duration-300">
                      <div
                        className={`w-12 h-12 rounded-xl ${item.iconBg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
                      >
                        <Icon className={`w-6 h-6 ${item.iconColor}`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-1">
                          {item.title}
                        </h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom Summary */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-5 p-4 bg-emerald-50 rounded-xl border border-emerald-100"
            >
              <p className="text-sm text-emerald-800 leading-relaxed">
                <span className="font-semibold">Goal:</span> Contributing to
                broader discussions on science education, capacity development,
                and the role of applied training systems in supporting
                sustainable development.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

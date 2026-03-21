"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { departments } from "@/lib/data";
import {
  FlaskConical,
  Pill,
  Layers,
  Atom,
  Shirt,
  Heart,
  ArrowRight,
  Beaker,
  Sparkles,
} from "lucide-react";
import Image from "next/image";

const iconMap: Record<string, React.ElementType> = {
  Flask: FlaskConical,
  Pill,
  Layers,
  Atom,
  Shirt,
  Heart,
};

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  Flask: {
    bg: "bg-blue-100",
    text: "text-blue-600",
    border: "border-blue-200",
  },
  Pill: {
    bg: "bg-emerald-100",
    text: "text-emerald-600",
    border: "border-emerald-200",
  },
  Layers: {
    bg: "bg-violet-100",
    text: "text-violet-600",
    border: "border-violet-200",
  },
  Atom: {
    bg: "bg-amber-100",
    text: "text-amber-600",
    border: "border-amber-200",
  },
  Shirt: {
    bg: "bg-rose-100",
    text: "text-rose-600",
    border: "border-rose-200",
  },
  Heart: {
    bg: "bg-primary/10",
    text: "text-primary",
    border: "border-primary/20",
  },
};

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section bg-gray-50 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
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
            <Beaker className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">
              Our Departments
            </span>
          </div>
          <h2 className="heading-xl mb-4">
            Six Specialized{" "}
            <span className="text-gradient-primary">Applied Science</span>{" "}
            Departments
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Each department integrates applied training programs with research
            services and collaboration with relevant industries.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left Column - Summary */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="bg-gradient-to-br from-primary to-red-700 rounded-2xl p-8 text-white h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Applied Science Training</h3>
              </div>

              <p className="text-white/80 mb-6 text-sm leading-relaxed">
                KRTC operates across six specialized departments, each focused
                on bridging the gap between theoretical knowledge and practical
                application.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-white/60" />
                  <span className="text-sm text-white/90">
                    Laboratory-based learning
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-white/60" />
                  <span className="text-sm text-white/90">
                    Industry collaboration
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-white/60" />
                  <span className="text-sm text-white/90">
                    Research services
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-white/60" />
                  <span className="text-sm text-white/90">
                    Professional training
                  </span>
                </div>
              </div>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-primary rounded-full font-medium text-sm hover:bg-white/90 transition-colors"
              >
                View All Services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column - Department Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3 space-y-4"
          >
            {departments.map((dept, index) => {
              const Icon = iconMap[dept.icon];
              const colors = colorMap[dept.icon];
              return (
                <motion.div
                  key={dept.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.08 }}
                >
                  <Link href={dept.slug}>
                    <div
                      className={`flex gap-4 p-5 bg-white rounded-xl border border-gray-100 hover:border-primary/20 hover:shadow-md transition-all duration-300 group cursor-pointer`}
                    >
                      {/* <div
                        className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
                      >
                        <Icon className={`w-6 h-6 ${colors.text}`} />
                      </div> */}
                      <div className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Image
                          src={dept.image}
                          alt={dept.shortTitle}
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-4">
                          <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors">
                            {dept.title}
                          </h3>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed mt-1 line-clamp-2">
                          {dept.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

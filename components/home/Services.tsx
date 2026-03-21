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
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Flask: FlaskConical,
  Pill,
  Layers,
  Atom,
  Shirt,
  Heart,
};

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-primary/5 to-transparent" />
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

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept, index) => {
            const Icon = iconMap[dept.icon];
            return (
              <motion.div
                key={dept.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/services/${dept.slug}`}>
                  <div className="service-card h-full cursor-pointer group">
                    {/* Icon */}
                    <div className="service-icon">
                      <Icon className="w-7 h-7" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                      {dept.shortTitle}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {dept.description}
                    </p>

                    {/* Link */}
                    <div className="flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </div>

                    {/* Decorative Corner */}
                    <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="absolute -top-10 -right-10 w-20 h-20 bg-primary/10 rotate-45" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link href="/services" className="btn btn-outline rounded-full">
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

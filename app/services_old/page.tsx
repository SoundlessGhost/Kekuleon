"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { departments } from "@/lib/data";
import {
  FlaskConical,
  Pill,
  Layers,
  Atom,
  Shirt,
  Heart,
  ArrowRight,
  Check,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Flask: FlaskConical,
  Pill,
  Layers,
  Atom,
  Shirt,
  Heart,
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh-gradient opacity-60" />
        <div className="grid-pattern" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-sm text-primary font-medium">
                Our Services
              </span>
            </div>

            <h1 className="heading-display mb-6">
              Six Specialized{" "}
              <span className="text-gradient-primary">Departments</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Each department integrates applied training programs with research
              services and collaboration with relevant industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {departments.map((dept, index) => {
              const Icon = iconMap[dept.icon];
              return (
                <motion.div
                  key={dept.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card p-8 group hover:border-primary/30 transition-all"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                      <Icon className="w-8 h-8 text-primary group-hover:text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {dept.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {dept.fullDescription}
                      </p>

                      <div className="space-y-2 mb-6">
                        {dept.services.slice(0, 4).map((service, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 text-sm text-gray-500"
                          >
                            <Check className="w-4 h-4 text-primary" />
                            {service}
                          </div>
                        ))}
                      </div>

                      <Link
                        href={`/services/${dept.slug}`}
                        className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all"
                      >
                        Learn More <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industry Services */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-xl mb-6">
              Industry Research & Testing Services
            </h2>
            <p className="text-gray-600 mb-8">
              KRTC provides authorized research and testing services for
              industries across multiple sectors.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Pharmaceutical",
                "Polymer",
                "Materials",
                "Textile",
                "Environmental",
                "Quality Assurance",
              ].map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

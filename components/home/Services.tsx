"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { departments } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export default function Services() {
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
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
              Our Departments
            </p>
            <h2 className="heading-xl mb-4">
              Six Specialized Applied Science Departments
            </h2>
            <p className="text-gray-600">
              Each department integrates applied training programs with research
              services and collaboration with relevant industries.
            </p>
          </div>

          {/* Image card grid — 3x2 */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {departments.map((dept) => (
              <Link key={dept.id} href={dept.slug} className="group block">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100">
                  <Image
                    src={dept.image}
                    alt={dept.shortTitle}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Always visible overlay at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-bold text-white text-lg leading-snug mb-1">
                      {dept.title}
                    </h3>
                    <p className="text-white/60 text-sm line-clamp-2 leading-relaxed">
                      {dept.description}
                    </p>
                    <div className="flex items-center gap-1 text-primary text-sm font-medium mt-3 group-hover:gap-2 transition-all">
                      Explore
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { siteConfig } from "@/lib/data";

export default function CTA() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background - Light Theme */}
      <div className="absolute inset-0 bg-gray-50" />

      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900 mb-6">
            Ready to Start Your{" "}
            <span className="text-gradient-primary">Scientific Journey</span>?
          </h2>

          <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
            Join KRTC and bridge the gap between theoretical knowledge and
            practical scientific competence. Contact us to learn more about our
            programs.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              href="/contact"
              className="btn btn-primary btn-lg group rounded-full"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/services"
              className="btn btn-outline-dark btn-lg rounded-full"
            >
              Explore Programs
            </Link>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500">
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              {siteConfig.phone}
            </a>
            <span className="hidden sm:block w-1 h-1 rounded-full bg-gray-300" />
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              {siteConfig.email}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

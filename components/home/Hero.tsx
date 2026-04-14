"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { heroContent } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gray-950">
      {/* Background Image */}
      <div className="absolute inset-0">
        {/* TODO: Replace with actual KRTC lab/facility photography */}
        <Image
          src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1920&q=80"
          alt="Scientific laboratory research"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gray-950/70" />
      </div>

      {/* Content — centered */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10 container-custom py-32 lg:py-40 text-center"
      >
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight text-white max-w-5xl mx-auto">
          Bridging the Theory and Practice Gap in Science Education in Bangladesh
        </h1>

        <div className="w-16 h-1 bg-primary mt-8 mb-8 mx-auto" />

        <p className="text-base lg:text-lg text-white/70 leading-relaxed max-w-3xl mx-auto mb-10">
          A decentralized and integrated institutional model designed to address
          the gap between theoretical education and practical scientific
          competence in developing-country contexts — building scientific
          capacity through applied training, integrated research, laboratory
          training, industry collaboration, and community engagement for the
          next generation of scientists in Bangladesh.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={heroContent.cta.primary.href}
            className="inline-flex items-center px-8 py-4 bg-primary text-white font-medium rounded-full hover:bg-primary-400 transition-colors duration-300"
          >
            {heroContent.cta.primary.text}
          </Link>
          <Link
            href={heroContent.cta.secondary.href}
            className="inline-flex items-center px-8 py-4 font-medium text-white/70 border border-white/20 rounded-full hover:border-white/40 hover:text-white transition-colors duration-300"
          >
            {heroContent.cta.secondary.text}
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

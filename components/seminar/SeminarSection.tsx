"use client";

// Tiny client wrapper that adds the standard scroll-triggered fade-in
// (opacity 0→1, y 20→0, 0.5s) used across the seminar pages. Extracted
// from the original `app/seminar/page.tsx` so both the hub at /seminar
// and the per-seminar pages at /seminar/[slug] can share the animation
// without duplicating the framer-motion + useInView wiring — and so the
// pages themselves can stay server components.

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Props {
  children: React.ReactNode;
  className?: string;
  // Render as a different element if the calling layout already nests
  // sections (so we don't end up with <section><section>...).
  as?: "section" | "div";
}

export default function SeminarSection({
  children,
  className = "",
  as = "section",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const inner = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );

  if (as === "div") {
    return (
      <div ref={ref} className={className}>
        {inner}
      </div>
    );
  }
  return (
    <section ref={ref} className={className}>
      {inner}
    </section>
  );
}

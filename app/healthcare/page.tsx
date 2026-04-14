"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { healthcareContent } from "@/lib/data";

function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section ref={ref} className={className}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </section>
  );
}

const impactPoints = [
  {
    title: "Underserved Communities",
    description:
      "Healthcare access for rural and disadvantaged families across Sirajganj and surrounding regions.",
  },
  {
    title: "Trained Professionals",
    description:
      "Nursing students deliver real-world care while completing their clinical training requirements.",
  },
  {
    title: "Preventive Focus",
    description:
      "Regular health check-ups, screenings, and community awareness programs that reduce long-term healthcare burden.",
  },
  {
    title: "Sustainable Model",
    description:
      "A self-sustaining social business model that links training revenue with free community services.",
  },
];

export default function HealthcarePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-gray-900">Community Healthcare</span>
            </div>

            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
              {healthcareContent.subtitle}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-5">
              {healthcareContent.title}
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {healthcareContent.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn btn-primary group">
                Get in Touch
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services/nursing-and-community-healthcare"
                className="btn btn-outline rounded-full"
              >
                Nursing Department
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <Section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">
                Services We Provide
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Through our Nursing and Community Healthcare department, KRTC
                delivers essential healthcare to families who often cannot
                access it through traditional channels — while giving our
                nursing students hands-on clinical experience in real
                community settings.
              </p>
              <Link
                href="/services/nursing-and-community-healthcare"
                className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
              >
                Learn about our Nursing training
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                What We Offer
              </h3>
              <ul className="space-y-3">
                {healthcareContent.services.map((service) => (
                  <li key={service} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Health Benefit Card */}
      <Section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
                Flagship Initiative
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">
                {healthcareContent.healthCard.title}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {healthcareContent.healthCard.description} Cards are issued to
                selected families based on transparent eligibility criteria,
                giving them defined access to healthcare and nursing services
                throughout the year.
              </p>
              <ul className="space-y-3">
                {healthcareContent.healthCard.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card Visual */}
            <div className="flex items-center justify-center">
              <div className="w-full max-w-sm aspect-[16/10] bg-gray-900 rounded-2xl p-7 text-white relative overflow-hidden shadow-xl">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/20 rounded-full translate-y-1/2 -translate-x-1/2" />
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-2">
                      KRTC
                    </p>
                    <p className="text-lg font-bold">Health Benefit Card</p>
                  </div>
                  <div>
                    <p className="text-2xl font-mono tracking-widest mb-3">
                      •••• •••• •••• 1234
                    </p>
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-[10px] uppercase tracking-wider text-gray-400">
                          Cardholder
                        </p>
                        <p className="text-sm font-medium">Community Member</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] uppercase tracking-wider text-gray-400">
                          Issued
                        </p>
                        <p className="text-sm font-medium">KRTC 2026</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Impact */}
      <Section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-2xl mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Community Impact
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our healthcare programs connect three outcomes at once: training
              nursing students in real clinical work, improving access for
              underserved families, and building healthier communities through
              prevention and awareness.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactPoints.map((point) => (
              <div key={point.title} className="border-t-2 border-primary pt-4">
                <h3 className="font-semibold text-gray-900 mb-2">
                  {point.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Connection to Nursing */}
      <Section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-3xl border-l-4 border-primary pl-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Part of Our Nursing Program
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Community Healthcare is delivered through KRTC&apos;s Nursing
              and Community Healthcare department. Nursing students gain
              clinical experience by serving the community, while families
              receive professional care through the Health Benefit Card
              system. This integrated model makes healthcare education
              meaningful and healthcare access affordable.
            </p>
            <Link
              href="/services/nursing-and-community-healthcare"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
            >
              Explore Nursing Department
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-16 bg-gray-50">
        <div className="container-custom text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Supporting Community Health Together
          </h2>
          <p className="text-gray-600 mb-8">
            Whether you&apos;re looking to access healthcare services or
            partner with us on community initiatives, we&apos;d like to hear
            from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn btn-primary group">
              Contact Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/services/nursing-and-community-healthcare"
              className="btn btn-outline rounded-full"
            >
              Nursing Department
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}

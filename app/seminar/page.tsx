"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  Calendar,
  MapPin,
  Clock,
  Award,
  Users,
  Sparkles,
  GraduationCap,
  CheckCircle2,
  ArrowDown,
  Mail,
} from "lucide-react";
import { getActiveSeminar } from "@/lib/seminars-data";
import SeminarRegistrationForm from "@/components/seminar/SeminarRegistrationForm";

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

export default function SeminarPage() {
  const seminar = getActiveSeminar();

  if (!seminar) {
    return (
      <section className="pt-36 pb-24 bg-white">
        <div className="container-custom max-w-2xl text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            No upcoming seminar
          </h1>
          <p className="text-gray-600">
            Please check back soon. In the meantime, feel free to{" "}
            <Link href="/contact" className="text-primary hover:underline">
              get in touch
            </Link>
            .
          </p>
        </div>
      </section>
    );
  }

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
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-block w-10 h-0.5 bg-primary" />
              <p className="text-sm font-medium text-primary uppercase tracking-wider">
                KRTC Seminar Series · North Zone
              </p>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-gray-900 mb-5">
              {seminar.title}
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {seminar.tagline}
            </p>

            {/* Event meta chips */}
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-200 text-sm text-gray-700">
                <Calendar className="w-4 h-4 text-primary" />
                {seminar.date}
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-200 text-sm text-gray-700">
                <Clock className="w-4 h-4 text-primary" />
                {seminar.time}
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-200 text-sm text-gray-700">
                <MapPin className="w-4 h-4 text-primary" />
                {seminar.venue}
              </span>
              {seminar.fee && (
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-sm text-emerald-700 font-medium">
                  <Sparkles className="w-4 h-4" />
                  {seminar.fee}
                </span>
              )}
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="#register"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors"
              >
                Register Now
                <ArrowDown className="w-4 h-4" />
              </a>
              <a
                href="#agenda"
                className="inline-flex items-center gap-2 px-6 py-3 border border-gray-200 text-gray-700 rounded-full font-medium hover:border-gray-300 hover:bg-gray-50 transition-colors"
              >
                See Agenda
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About / Why */}
      <Section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-10">
            <div>
              <p className="text-xs font-medium text-primary uppercase tracking-wider mb-3">
                About this seminar
              </p>
              <h2 className="text-3xl font-bold text-gray-900 leading-tight">
                Why we&apos;re hosting this in the North Zone
              </h2>
            </div>
            <div className="lg:col-span-2 space-y-4 text-gray-600 leading-relaxed">
              {seminar.description.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
              {seminar.audienceNote && (
                <div className="mt-6 p-4 bg-white border border-gray-200 rounded-xl">
                  <p className="text-xs font-medium text-primary uppercase tracking-wider mb-1.5">
                    Who can attend
                  </p>
                  <p className="text-sm text-gray-700">
                    {seminar.audienceNote}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </Section>

      {/* Agenda */}
      <Section className="section bg-white">
        <div className="container-custom" id="agenda">
          <div className="max-w-2xl mb-10">
            <p className="text-xs font-medium text-primary uppercase tracking-wider mb-3">
              Agenda
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              What we&apos;ll cover
            </h2>
            <p className="text-gray-600">
              Four focused sessions, followed by an open Q&amp;A with KRTC&apos;s
              North Zone Advisor and University Coordinators.
            </p>
          </div>

          <div className="space-y-4 max-w-3xl">
            {seminar.agenda.map((item, i) => (
              <div
                key={i}
                className="flex gap-5 p-5 rounded-xl border border-gray-200 bg-white hover:border-gray-300 transition-colors"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold text-sm">
                  {i + 1}
                </div>
                <div className="flex-1">
                  <p className="text-xs font-medium text-primary uppercase tracking-wider mb-1">
                    {item.time}
                  </p>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  )}
                  {item.speaker && (
                    <p className="text-xs text-gray-500 mt-2">
                      Speaker: {item.speaker}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Speakers */}
      <Section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-2xl mb-10">
            <p className="text-xs font-medium text-primary uppercase tracking-wider mb-3">
              Speakers
            </p>
            <h2 className="text-3xl font-bold text-gray-900">
              Hear from KRTC leadership and the North Zone team
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 max-w-3xl">
            {seminar.speakers.map((s, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white border border-gray-200"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-1">
                  {s.name}
                </h3>
                <p className="text-sm text-primary font-medium mb-1">
                  {s.role}
                </p>
                {s.affiliation && (
                  <p className="text-xs text-gray-500">{s.affiliation}</p>
                )}
                {s.bio && (
                  <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                    {s.bio}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* What you'll get */}
      <Section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mb-10">
            <p className="text-xs font-medium text-primary uppercase tracking-wider mb-3">
              What you&apos;ll get
            </p>
            <h2 className="text-3xl font-bold text-gray-900">
              Practical takeaways, not just talk
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {seminar.whatYoullGet.map((item, i) => {
              const icons = [Award, Users, Sparkles];
              const Icon = icons[i % icons.length];
              return (
                <div
                  key={i}
                  className="p-6 rounded-2xl border border-gray-200 bg-white"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          {seminar.certificateNote && (
            <div className="mt-8 max-w-3xl flex items-start gap-3 p-5 rounded-xl bg-emerald-50 border border-emerald-200">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-emerald-900">
                {seminar.certificateNote}
              </p>
            </div>
          )}
        </div>
      </Section>

      {/* Registration */}
      <Section className="section bg-gray-50" >
        <div className="container-custom" id="register">
          <div className="grid lg:grid-cols-3 gap-10">
            <div>
              <p className="text-xs font-medium text-primary uppercase tracking-wider mb-3">
                Register
              </p>
              <h2 className="text-3xl font-bold text-gray-900 leading-tight mb-4">
                Confirm your seat
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Open to North Zone students and faculty only. Registration takes
                under two minutes.
              </p>

              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Free for all eligible students</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>KRTC-signed certificate of participation</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    Confirmation &amp; on-campus directions sent by email
                    immediately
                  </span>
                </div>
              </div>

              {seminar.registrationDeadline && (
                <div className="mt-6 p-4 rounded-xl bg-white border border-gray-200">
                  <p className="text-xs font-medium text-primary uppercase tracking-wider mb-1">
                    Registration deadline
                  </p>
                  <p className="text-sm font-medium text-gray-900">
                    {seminar.registrationDeadline}
                  </p>
                </div>
              )}
            </div>

            <div className="lg:col-span-2">
              <SeminarRegistrationForm
                seminarSlug={seminar.slug}
                seminarTitle={seminar.title}
                seminarDate={seminar.date}
                registrationOpen={seminar.registrationOpen}
                universities={seminar.audienceUniversities}
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Venue */}
      <Section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mb-8">
            <p className="text-xs font-medium text-primary uppercase tracking-wider mb-3">
              Venue
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              {seminar.venue}
            </h2>
            {seminar.venueAddress && (
              <p className="text-gray-600">{seminar.venueAddress}</p>
            )}
            <p className="text-sm text-gray-500 mt-3">
              The exact address and travel directions will be shared by email
              once confirmed. Registered participants will be the first to
              know.
            </p>
          </div>

          {seminar.mapEmbedUrl && (
            <div className="rounded-2xl overflow-hidden border border-gray-200">
              <iframe
                src={seminar.mapEmbedUrl}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
          )}
        </div>
      </Section>

      {/* FAQ */}
      <Section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-2xl mb-10">
            <p className="text-xs font-medium text-primary uppercase tracking-wider mb-3">
              FAQ
            </p>
            <h2 className="text-3xl font-bold text-gray-900">
              Common questions
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5 max-w-5xl">
            {seminar.faq.map((f, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white border border-gray-200"
              >
                <h3 className="text-base font-semibold text-gray-900 mb-2">
                  {f.question}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {f.answer}
                </p>
              </div>
            ))}
          </div>

          {/* Contact-for-help footer note */}
          <div className="mt-10 max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 text-sm text-gray-600">
              <Mail className="w-4 h-4 text-primary" />
              Still have questions? Email{" "}
              <a
                href="mailto:kekuleoninfo@gmail.com"
                className="text-primary font-medium hover:underline"
              >
                kekuleoninfo@gmail.com
              </a>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

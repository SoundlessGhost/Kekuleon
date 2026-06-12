// Seminar hub.
//
// Landing page at /seminar listing every seminar in `lib/seminars-data.ts`:
// upcoming-with-open-registration as primary "Register" cards, and past
// events with a published recap as secondary "View recap" cards. Each
// seminar has its own URL at /seminar/[slug] and recaps live at
// /seminar/recap/[slug] — this hub is just the directory.
//
// Server component (animations come from the small client wrapper
// `<SeminarSection>`).

import type { Metadata } from "next";
import Link from "next/link";
import {
  Calendar,
  MapPin,
  Clock,
  ArrowRight,
  ImageIcon,
  Mail,
} from "lucide-react";
import {
  getUpcomingSeminars,
  getPastSeminarsWithRecap,
} from "@/lib/seminars-data";
import SeminarSection from "@/components/seminar/SeminarSection";

// Re-generate every 60s (ISR) so the time-based registration open/close state
// from isRegistrationStillOpen() / isSeminarPast() re-evaluates without a
// manual redeploy. Data is file-based, so regeneration is cheap.
export const revalidate = 60;

export const metadata: Metadata = {
  title: "Seminar Series",
  description:
    "KRTC's volunteer-led seminar series — upcoming events and recaps from past seminars across Bangladesh.",
  alternates: { canonical: "/seminar" },
};

export default function SeminarHubPage() {
  const upcoming = getUpcomingSeminars();
  const pastWithRecap = getPastSeminarsWithRecap();

  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-block w-10 h-0.5 bg-primary" />
              <p className="text-sm font-medium text-primary uppercase tracking-wider">
                KRTC Seminar Series
              </p>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-gray-900 mb-5">
              Seminars on bridging theory and practice in science education
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              KRTC&apos;s volunteer-led seminars bring researchers,
              industry professionals, and University Coordinators directly
              to students — connecting classroom learning with laboratory
              practice, research opportunities, and industry-ready skills.
              Browse upcoming events below and register for the seminar in
              your region.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming seminars */}
      <SeminarSection className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-2xl mb-10">
            <p className="text-xs font-medium text-primary uppercase tracking-wider mb-3">
              Upcoming
            </p>
            <h2 className="text-3xl font-bold text-gray-900">
              {upcoming.length === 0
                ? "No upcoming seminars right now"
                : upcoming.length === 1
                  ? "Next up"
                  : `${upcoming.length} upcoming seminars`}
            </h2>
            <p className="text-gray-600 mt-3">
              {upcoming.length === 0
                ? "Check back soon — we'll post the next seminar here as soon as a date is confirmed."
                : "Click into a seminar to see the agenda, venue, and to register."}
            </p>
          </div>

          {upcoming.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {upcoming.map((s) => (
                <Link
                  key={s.slug}
                  href={`/seminar/${s.slug}`}
                  className="group flex flex-col rounded-2xl border border-gray-200 bg-white p-6 hover:border-primary/30 hover:shadow-sm transition-all"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      <Calendar className="w-3.5 h-3.5" />
                      {s.date}
                    </span>
                    {s.fee && (
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-medium border border-emerald-200">
                        {s.fee}
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">
                    {s.tagline}
                  </p>
                  <div className="space-y-1.5 text-xs text-gray-500 mb-5">
                    <div className="flex items-start gap-1.5">
                      <Clock className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                      <span>{s.time}</span>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <MapPin className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                      <span>{s.venue}</span>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary self-start">
                    Register
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </SeminarSection>

      {/* Past seminars with recap */}
      {pastWithRecap.length > 0 && (
        <SeminarSection className="section bg-white">
          <div className="container-custom">
            <div className="max-w-2xl mb-10">
              <p className="text-xs font-medium text-primary uppercase tracking-wider mb-3">
                Past events
              </p>
              <h2 className="text-3xl font-bold text-gray-900">
                Recaps and photos
              </h2>
              <p className="text-gray-600 mt-3">
                Photos, the day&apos;s discussion, and the team behind each
                event.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {pastWithRecap.map((s) => (
                <Link
                  key={s.slug}
                  href={`/seminar/recap/${s.slug}`}
                  className="group flex flex-col rounded-2xl border border-gray-200 bg-white p-6 hover:border-primary/30 hover:shadow-sm transition-all"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-medium">
                      <ImageIcon className="w-3.5 h-3.5" />
                      Recap
                    </span>
                    <span className="text-xs text-gray-500">{s.date}</span>
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 mb-2 leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">
                    {s.tagline}
                  </p>
                  <div className="text-xs text-gray-500 mb-5 flex items-start gap-1.5">
                    <MapPin className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                    <span>{s.venue}</span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary self-start">
                    View recap
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </SeminarSection>
      )}

      {/* Contact-for-help footer */}
      <SeminarSection className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xs font-medium text-primary uppercase tracking-wider mb-3">
              Get in touch
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Have a question or want KRTC at your campus?
            </h2>
            <p className="text-gray-600 mb-6">
              We&apos;re a volunteer-led centre — we love hearing from
              students, faculty, and partners who want to bring this
              conversation to their region.
            </p>
            <div className="inline-flex items-center gap-2 text-sm text-gray-600">
              <Mail className="w-4 h-4 text-primary" />
              Email{" "}
              <a
                href="mailto:kekuleoninfo@gmail.com"
                className="text-primary font-medium hover:underline"
              >
                kekuleoninfo@gmail.com
              </a>
            </div>
          </div>
        </div>
      </SeminarSection>
    </>
  );
}

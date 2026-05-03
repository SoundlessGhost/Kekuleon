// Per-seminar landing page.
//
// Server component (so we can use `generateMetadata` for OpenGraph
// previews and call `notFound()` cleanly when a slug is unknown). The
// scroll-triggered fade-in animations live in `<SeminarSection>`, a
// small client component, so this page can stay server-rendered.
//
// Renders the seminar's hero, About, Agenda, Speakers, "What you'll
// get", Registration form, Venue, and FAQ sections. If the seminar
// already happened and a recap is published, a banner above the hero
// links to /seminar/recap/<slug>.

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Calendar,
  MapPin,
  Clock,
  Award,
  Users,
  Sparkles,
  GraduationCap,
  CheckCircle2,
  ClipboardList,
  ArrowDown,
  ArrowRight,
  ImageIcon,
  Mail,
} from "lucide-react";
import {
  getSeminarBySlug,
  hasPublishedRecap,
  isRegistrationStillOpen,
  isSeminarPast,
} from "@/lib/seminars-data";
import SeminarSection from "@/components/seminar/SeminarSection";
import SeminarRegistrationForm from "@/components/seminar/SeminarRegistrationForm";

interface PageProps {
  // Next.js 15+ — `params` is a Promise, must be awaited.
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const seminar = getSeminarBySlug(slug);
  if (!seminar) return { title: "Seminar not found · KRTC" };
  return {
    title: `${seminar.title} · KRTC`,
    description: seminar.tagline,
  };
}

export default async function SeminarBySlugPage({ params }: PageProps) {
  const { slug } = await params;
  const seminar = getSeminarBySlug(slug);
  if (!seminar) notFound();

  const registrationOpen = isRegistrationStillOpen(seminar);
  const recapAvailable = isSeminarPast(seminar) && hasPublishedRecap(seminar);
  // Survey banner only shows while registration is open — there's no
  // point asking people to take a "shape this seminar" survey after
  // the event has happened.
  const surveyBannerVisible = !!seminar.surveyUrl && registrationOpen;
  const hasTopBanner = surveyBannerVisible || recapAvailable;

  return (
    <>
      {/* Pre-event survey banner. Optional — renders only when the seminar
          carries a `surveyUrl` AND registration is still open. Cyan styling
          deliberately differs from the primary-red recap banner so the two
          read as distinct kinds of nudge. */}
      {surveyBannerVisible && (
        <div className="pt-28 pb-0 bg-white">
          <div className="container-custom">
            <a
              href={seminar.surveyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-cyan-200 bg-cyan-50 px-5 py-4 transition-colors hover:border-cyan-300 hover:bg-cyan-100"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-cyan-100 text-cyan-700">
                  <ClipboardList className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    Help us tailor this seminar to you.
                  </p>
                  <p className="text-xs text-gray-600">
                    Take a quick survey — your input shapes the agenda.
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-cyan-700">
                Open survey
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </a>
          </div>
        </div>
      )}

      {/* Past-event recap banner. Only renders once the date has passed
          AND a published recap exists, so a future seminar with no recap
          won't dangle a dead link. If a survey banner is also shown above
          (rare — past + still-open survey shouldn't co-occur), use a smaller
          top padding so the two stack cleanly. */}
      {recapAvailable && (
        <div
          className={
            surveyBannerVisible ? "pt-3 pb-0 bg-white" : "pt-28 pb-0 bg-white"
          }
        >
          <div className="container-custom">
            <Link
              href={`/seminar/recap/${seminar.slug}`}
              className="group flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-primary/20 bg-primary/5 px-5 py-4 transition-colors hover:border-primary/40 hover:bg-primary/10"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <ImageIcon className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    This seminar was held on {seminar.date}.
                  </p>
                  <p className="text-xs text-gray-600">
                    View photos, the recap article, and the team that made
                    it happen.
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                View recap
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          </div>
        </div>
      )}

      {/* Hero */}
      <section
        className={
          hasTopBanner ? "pt-8 pb-16 bg-white" : "pt-36 pb-16 bg-white"
        }
      >
        <div className="container-custom">
          <div className="max-w-3xl">
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
              {registrationOpen ? (
                <a
                  href="#register"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors"
                >
                  Register Now
                  <ArrowDown className="w-4 h-4" />
                </a>
              ) : (
                <span
                  aria-disabled="true"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gray-200 text-gray-500 rounded-full font-medium cursor-not-allowed select-none"
                >
                  Registration closed
                </span>
              )}
              <a
                href="#agenda"
                className="inline-flex items-center gap-2 px-6 py-3 border border-gray-200 text-gray-700 rounded-full font-medium hover:border-gray-300 hover:bg-gray-50 transition-colors"
              >
                See Agenda
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About / Why */}
      <SeminarSection className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-10">
            <div>
              <p className="text-xs font-medium text-primary uppercase tracking-wider mb-3">
                About this seminar
              </p>
              <h2 className="text-3xl font-bold text-gray-900 leading-tight">
                Why we&apos;re hosting this in your region
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
      </SeminarSection>

      {/* Agenda */}
      <SeminarSection className="section bg-white">
        <div className="container-custom" id="agenda">
          <div className="max-w-2xl mb-10">
            <p className="text-xs font-medium text-primary uppercase tracking-wider mb-3">
              Agenda
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              What we&apos;ll cover
            </h2>
            <p className="text-gray-600">
              Four focused sessions, followed by an open Q&amp;A with
              KRTC&apos;s University Coordinators and Advisor.
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
      </SeminarSection>

      {/* Speakers */}
      <SeminarSection className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-2xl mb-10">
            <p className="text-xs font-medium text-primary uppercase tracking-wider mb-3">
              Speakers
            </p>
            <h2 className="text-3xl font-bold text-gray-900">
              Hear from KRTC leadership and the regional team
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
      </SeminarSection>

      {/* What you'll get */}
      <SeminarSection className="section bg-white">
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
      </SeminarSection>

      {/* Registration */}
      <SeminarSection className="section bg-gray-50">
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
                Open to eligible students and faculty only. Registration
                takes under two minutes.
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
              {/* Survey reminder — appears here too (in addition to the
                  hero banner) so people in the act of registering also
                  see it. Optional, never blocks the form. */}
              {seminar.surveyUrl && (
                <a
                  href={seminar.surveyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mb-5 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-cyan-200 bg-cyan-50 px-4 py-3 transition-colors hover:border-cyan-300 hover:bg-cyan-100"
                >
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-cyan-100 text-cyan-700 mt-0.5">
                      <ClipboardList className="h-4 w-4" />
                    </span>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      <span className="font-semibold text-gray-900">
                        We&apos;d also love your input —
                      </span>{" "}
                      take this short survey to help us tailor the seminar
                      to you.
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-cyan-700 flex-shrink-0">
                    Open survey
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </a>
              )}

              <SeminarRegistrationForm
                seminarSlug={seminar.slug}
                seminarTitle={seminar.title}
                seminarDate={seminar.date}
                registrationOpen={registrationOpen}
                registrationDeadline={seminar.registrationDeadline}
                universities={seminar.audienceUniversities}
              />
            </div>
          </div>
        </div>
      </SeminarSection>

      {/* Venue */}
      <SeminarSection className="section bg-white">
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
              The exact address and travel directions will be shared by
              email once confirmed. Registered participants will be the
              first to know.
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
      </SeminarSection>

      {/* FAQ */}
      <SeminarSection className="section bg-gray-50">
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
      </SeminarSection>
    </>
  );
}

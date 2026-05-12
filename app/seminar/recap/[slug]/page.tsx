// Post-event recap page for a single seminar.
//
// Server component — relies on `generateMetadata` for OpenGraph cards
// (so the recap shows a hero image when shared on WhatsApp / Messenger /
// LinkedIn). Reads from `lib/seminars-data.ts`; if the slug is unknown
// or the recap is in draft (`isPublished: false`), we 404.
//
// Photo files live under
// /public/images/seminar/<slug>/  (and /<slug>/gallery/ for the grid)
// — the client populates that folder with the agreed filenames so the
// data file's hardcoded paths keep working.

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Mail } from "lucide-react";
import { getSeminarBySlug } from "@/lib/seminars-data";
import SeminarRecapGallery from "@/components/seminar/SeminarRecapGallery";

interface PageProps {
  // Next.js 15+ — `params` is a Promise, must be awaited.
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const seminar = getSeminarBySlug(slug);
  if (!seminar?.recap?.isPublished) {
    return { title: "Recap not found" };
  }
  return {
    title: `Recap — ${seminar.title}`,
    description: seminar.recap.intro,
    openGraph: {
      title: `Recap — ${seminar.title}`,
      description: seminar.recap.intro,
      images: [seminar.recap.heroImage.src],
      type: "article",
      publishedTime: seminar.recap.publishedDateISO,
    },
  };
}

export default async function SeminarRecapPage({ params }: PageProps) {
  const { slug } = await params;
  const seminar = getSeminarBySlug(slug);
  if (!seminar?.recap?.isPublished) notFound();

  const recap = seminar.recap;

  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-12 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-block w-10 h-0.5 bg-primary" />
              <p className="text-sm font-medium text-primary uppercase tracking-wider">
                Seminar Recap · {seminar.date}
              </p>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-gray-900 mb-5">
              {seminar.title}
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-6 max-w-3xl">
              {recap.intro}
            </p>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500">
              {recap.publishedDate && recap.publishedDateISO && (
                <span className="inline-flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  Published{" "}
                  <time dateTime={recap.publishedDateISO}>
                    {recap.publishedDate}
                  </time>
                </span>
              )}
              <span className="hidden sm:inline">·</span>
              <span>{seminar.venue}</span>
            </div>
          </div>

          {/* Hero image */}
          <figure className="mt-10 max-w-5xl">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-gray-200 bg-gray-100">
              <Image
                src={recap.heroImage.src}
                alt={recap.heroImage.alt}
                fill
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-cover"
                priority
              />
            </div>
            {recap.heroImage.caption && (
              <figcaption className="mt-3 text-center text-sm text-gray-500 italic">
                {recap.heroImage.caption}
              </figcaption>
            )}
          </figure>
        </div>
      </section>

      {/* Recap sections — alternate background so adjacent photo+text
          blocks read as distinct narrative beats. */}
      {recap.sections.map((section, i) => (
        <section
          key={i}
          className={i % 2 === 0 ? "py-14 bg-gray-50" : "py-14 bg-white"}
        >
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              {section.heading && (
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                  {section.heading}
                </h2>
              )}

              {section.image && (
                <figure className="mb-8">
                  <div className="relative aspect-[3/2] w-full overflow-hidden rounded-xl border border-gray-200 bg-gray-100">
                    <Image
                      src={section.image.src}
                      alt={section.image.alt}
                      fill
                      sizes="(min-width: 1024px) 768px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  {section.image.caption && (
                    <figcaption className="mt-2 text-sm text-gray-500 italic text-center">
                      {section.image.caption}
                    </figcaption>
                  )}
                </figure>
              )}

              <div className="space-y-4 text-gray-700 leading-relaxed">
                {section.paragraphs.map((para, p) => (
                  <p key={p}>{para}</p>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Distinguished guests */}
      {recap.distinguishedGuests.length > 0 && (
        <section className="py-14 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <p className="text-xs font-medium text-primary uppercase tracking-wider mb-3">
                Honourable presence
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                Distinguished academic guests
              </h2>
              <p className="text-gray-600 mb-8 max-w-2xl">
                Honourable academic guests from Begum Rokeya University,
                Rangpur, who joined the seminar and supported the KRTC
                initiative.
              </p>
              <ul className="grid sm:grid-cols-2 gap-4">
                {recap.distinguishedGuests.map((g, i) => (
                  <li
                    key={i}
                    className="p-5 rounded-xl border border-gray-200 bg-white"
                  >
                    <p className="font-semibold text-gray-900">{g.name}</p>
                    <p className="text-sm text-gray-600 mt-1">{g.role}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Organising team */}
      {recap.organisingTeam.length > 0 && (
        <section className="py-14 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <p className="text-xs font-medium text-primary uppercase tracking-wider mb-3">
                Behind the scenes
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                Organising &amp; project-support team
              </h2>
              <p className="text-gray-600 mb-8 max-w-2xl">
                The KRTC team and partners whose multidisciplinary support
                made the seminar possible.
              </p>
              <ul className="grid sm:grid-cols-2 gap-4">
                {recap.organisingTeam.map((m, i) => (
                  <li
                    key={i}
                    className="p-5 rounded-xl border border-gray-200 bg-white"
                  >
                    {m.teamSlug ? (
                      <Link
                        href={`/team/${m.teamSlug}`}
                        className="font-semibold text-gray-900 hover:text-primary transition-colors"
                      >
                        {m.name}
                      </Link>
                    ) : (
                      <span className="font-semibold text-gray-900">
                        {m.name}
                      </span>
                    )}
                    <p className="text-sm text-gray-600 mt-1">{m.role}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Gallery */}
      {recap.gallery.length > 0 && (
        <section className="py-14 bg-white">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center mb-8">
              <p className="text-xs font-medium text-primary uppercase tracking-wider mb-3">
                Gallery
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                Seminar moments
              </h2>
              <p className="text-gray-600">
                Tap any photo to view it full-size. Use ← → keys or the
                arrows to browse.
              </p>
            </div>
            <SeminarRecapGallery photos={recap.gallery} />
          </div>
        </section>
      )}

      {/* Footer CTA */}
      <section className="py-14 bg-gray-50 border-t border-gray-200">
        <div className="container-custom text-center max-w-2xl mx-auto">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Want to know about the next KRTC seminar?
          </h2>
          <p className="text-gray-600 mb-6">
            Stay in touch — we&apos;ll announce the next North Zone
            seminar soon.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/seminar"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-300 text-gray-700 rounded-full font-medium hover:border-gray-400 hover:bg-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Seminar page
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              <Mail className="w-4 h-4" />
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";

export default function BlogPage() {
  return (
    <>
      {/* Article Header */}
      <header className="pt-36 pb-10 bg-white border-b border-gray-100">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link
                href="/blog"
                className="hover:text-primary transition-colors"
              >
                Blog
              </Link>
              <span>/</span>
              <span className="text-gray-900">Education</span>
            </div>

            {/* Category */}
            <div className="mb-6">
              <span className="inline-block text-xs font-semibold text-primary uppercase tracking-[0.2em] border-b border-primary pb-1">
                Education &middot; KRTC Schooling
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] tracking-tight mb-6">
              Breaking Barriers: How KRTC is Changing Education in Bangladesh
            </h1>

            {/* Deck / Subtitle */}
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light italic border-l-2 border-primary pl-6 max-w-3xl mb-10">
              Building a New Bangladesh Through Equal Education — where a
              rickshaw-puller&apos;s daughter and a businessman&apos;s son share
              the same classroom.
            </p>

            {/* Byline */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-6 border-t border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-700">
                  KT
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    KRTC Team
                  </p>
                  <p className="text-xs text-gray-500">Editorial</p>
                </div>
              </div>
              <div className="h-8 w-px bg-gray-200" />
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Calendar className="w-4 h-4" />
                <span>March 28, 2026</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Clock className="w-4 h-4" />
                <span>5 min read</span>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Lead Image */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <figure className="max-w-5xl mx-auto">
            <div className="relative aspect-[16/9] overflow-hidden rounded-none">
              <Image
                src="/images/blog/environmental-campaign/hero.jpg"
                alt="KRTC Students together"
                fill
                className="object-cover"
                priority
              />
            </div>
            <figcaption className="text-xs text-gray-500 mt-3 italic">
              KRTC students during community awareness campaign in Sirajganj
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Article Body */}
      <section className="pb-24 bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-12 gap-12">
            {/* Sticky Sidebar */}
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-32">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-primary transition-colors mb-8"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Home
                </Link>

                <div className="space-y-6">
                  <div>
                    <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-2">
                      Filed Under
                    </p>
                    <p className="text-sm text-gray-700">Education</p>
                    <p className="text-sm text-gray-700">Equality</p>
                    <p className="text-sm text-gray-700">Community</p>
                  </div>

                  <div className="pt-6 border-t border-gray-100">
                    <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-2">
                      Published
                    </p>
                    <p className="text-sm text-gray-700">March 28, 2026</p>
                  </div>

                  <div className="pt-6 border-t border-gray-100">
                    <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-2">
                      Read Time
                    </p>
                    <p className="text-sm text-gray-700">5 minutes</p>
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Article */}
            <article className="lg:col-span-9">
              <div className="prose prose-lg prose-gray max-w-none">
                {/* First paragraph with drop cap */}
                <p className="text-lg md:text-xl leading-[1.8] text-gray-800 first-letter:text-6xl first-letter:font-bold first-letter:text-primary first-letter:mr-2 first-letter:float-left first-letter:leading-[0.9] first-letter:mt-1">
                  In the heart of Sirajganj, Bangladesh, something remarkable
                  is happening. At KRTC Schooling, children from wealthy
                  families sit beside children from humble backgrounds. They
                  share the same classroom, learn from the same teachers, and
                  dream the same dreams. This is not charity — this is equality
                  in action.
                </p>

                <p>
                  KRTC Schooling was born from a simple belief: every child
                  deserves quality education, regardless of their family&apos;s
                  economic status. Too often, we see schools divided by
                  wealth — private institutions for the rich, under-resourced
                  schools for the poor. KRTC breaks this divide.
                </p>

                {/* Inline figure — right float */}
                <figure className="float-right ml-8 mb-6 w-full md:w-2/5">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src="/images/blog/environmental-campaign/classroom-exam.jpg"
                      alt="Students in classroom"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="text-xs text-gray-500 mt-2 italic">
                    Students from different backgrounds learning together
                  </figcaption>
                </figure>

                <p>
                  Walk into any KRTC classroom and you will see the future of
                  Bangladesh. A rickshaw-puller&apos;s daughter solving math
                  problems alongside a businessman&apos;s son. A farmer&apos;s
                  child discussing science with a doctor&apos;s kid. Here,
                  uniforms don&apos;t show status — they show unity.
                </p>

                <p>
                  Through our{" "}
                  <strong className="text-primary font-semibold">
                    50% scholarship program
                  </strong>
                  , we ensure that deserving students never miss out on
                  education due to financial constraints. The program is
                  simple: those who can afford full fees pay full fees. Those
                  who cannot receive up to 50% scholarship. No child is turned
                  away because of money.
                </p>

                <div className="clear-both" />

                {/* Pull Quote */}
                <blockquote className="my-12 py-8 border-y border-gray-200 text-center max-w-3xl mx-auto">
                  <p className="text-2xl md:text-3xl font-serif italic text-gray-900 leading-snug mb-4 not-prose">
                    &ldquo;Education is the great equalizer. At KRTC, we
                    don&apos;t just teach subjects — we teach equality.&rdquo;
                  </p>
                  <footer className="text-xs font-semibold uppercase tracking-widest text-gray-500 not-prose">
                    — KRTC Editorial
                  </footer>
                </blockquote>

                <p>
                  But KRTC Schooling is not just about academics. Our students
                  learn something far more valuable — empathy. When a wealthy
                  child sits next to a poor child, they learn that intelligence
                  has no economic boundary. When they work on projects
                  together, they understand that talent comes from hard work,
                  not privilege.
                </p>

                {/* Inline figure — left float */}
                <figure className="float-left mr-8 mb-6 w-full md:w-2/5">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src="/images/blog/environmental-campaign/orientation.jpg"
                      alt="Students taking exam"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="text-xs text-gray-500 mt-2 italic">
                    Equal opportunity in education and assessment
                  </figcaption>
                </figure>

                <p>
                  Our students also engage with the community. Recently, they
                  organized an environmental awareness campaign, marching
                  through local markets with placards reading &ldquo;পরিষ্কার
                  পৃথিবী, সুস্থ জীবন&rdquo; (Clean Earth, Healthy Life) and
                  &ldquo;ছোট কাজ, বড় প্রভাব&rdquo; (Small Actions, Big
                  Impact). They taught shopkeepers about proper waste disposal
                  and distributed dustbins.
                </p>

                <p>
                  The sight was powerful — young students, some from privileged
                  homes and some from struggling families, all wearing the
                  same KRTC t-shirts, all working together for their
                  community. This is what education should create: not just
                  knowledgeable individuals, but responsible citizens.
                </p>

                <div className="clear-both" />

                {/* Full-width breakout figure */}
                <figure className="my-12 -mx-6 md:-mx-12 lg:-mx-16">
                  <div className="relative aspect-[21/9] overflow-hidden">
                    <Image
                      src="/images/blog/environmental-campaign/fruit-market.jpg"
                      alt="Students during campaign"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="text-xs text-gray-500 mt-3 italic text-center">
                    KRTC Environmental Campaign — Students spreading awareness
                    in local community
                  </figcaption>
                </figure>

                <p>
                  Parents from both ends of the economic spectrum have embraced
                  this model. Wealthy parents appreciate that their children
                  are learning humility and social awareness. Parents from
                  modest backgrounds are grateful that their children receive
                  the same quality education without discrimination.
                </p>

                <p>
                  Guardian meetings at KRTC are unlike any other school.
                  You&apos;ll see a day laborer sitting next to a factory
                  owner, both equally invested in their children&apos;s
                  education. Both voices are heard. Both opinions matter. This
                  is democracy in its purest form — practiced not in politics,
                  but in education.
                </p>

                <p>
                  The results speak for themselves. KRTC students consistently
                  perform well academically. But more importantly, they grow
                  into compassionate human beings who understand that society
                  prospers when everyone gets a fair chance.
                </p>

                <p>
                  As Bangladesh moves forward, initiatives like KRTC Schooling
                  show us the path. A path where education is not a privilege
                  but a right. Where classrooms don&apos;t reflect economic
                  divisions but bridge them. Where children learn that their
                  worth is not determined by their parents&apos; bank accounts
                  but by their own efforts and character.
                </p>

                <p className="font-medium text-gray-900">
                  The children of KRTC are not just students — they are
                  pioneers of a new Bangladesh. A Bangladesh where rich and
                  poor learn together, grow together, and build the nation
                  together.
                </p>

                {/* Closing figure */}
                <figure className="my-12">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src="/images/blog/environmental-campaign/rally.jpg"
                      alt="Community outreach"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="text-xs text-gray-500 mt-3 italic text-center">
                    Students teaching community members about cleanliness and
                    environmental responsibility
                  </figcaption>
                </figure>
              </div>

              {/* Article Footer / CTA */}
              <div className="mt-16 pt-10 border-t border-gray-200">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">
                      Continue Reading
                    </p>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Interested in joining KRTC Schooling?
                    </h3>
                    <p className="text-gray-600 mt-2 max-w-md">
                      Apply for a scholarship or reach out to learn more about
                      our programs.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      href="/scholarships"
                      className="btn btn-primary group"
                    >
                      Apply for Scholarship
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      href="/contact"
                      className="btn btn-outline rounded-full"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>

              {/* Mobile back link */}
              <div className="lg:hidden mt-10">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-primary transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Home
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

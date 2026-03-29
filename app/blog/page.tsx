"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, User, Clock, ArrowLeft } from "lucide-react";

export default function BlogPage() {
  return (
    <>
      {/* Article Header */}
      <section className="pt-32 pb-8 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh-gradient opacity-60" />
        <div className="grid-pattern" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Back Link - Separate Line */}
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-gray-500 hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            {/* Category Badge - New Line */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm text-primary font-medium">
                  KRTC Schooling
                </span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Breaking Barriers: How KRTC is Changing Education in Bangladesh
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-primary font-medium mb-6">
              Building a New Bangladesh Through Equal Education
            </p>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">KRTC Team</p>
                  <p className="text-xs">Academic & Social Service Division</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>March 28, 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>5 min read</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero Image - Full Width */}
      <section className="pb-12">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="relative aspect-[21/9] rounded-2xl overflow-hidden">
              <Image
                src="/images/blog/environmental-campaign/hero.jpg"
                alt="KRTC Students together"
                fill
                className="object-cover"
                priority
              />
            </div>
            <p className="text-sm text-gray-500 mt-3 text-center">
              KRTC students during community awareness campaign in Sirajganj
            </p>
          </motion.div>
        </div>
      </section>

      {/* Article Content - Full Width */}
      <section className="pb-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl leading-relaxed">
                In the heart of Sirajganj, Bangladesh, something remarkable is
                happening. At KRTC Schooling, children from wealthy families sit
                beside children from humble backgrounds. They share the same
                classroom, learn from the same teachers, and dream the same
                dreams. This is not charity—this is equality in action.
              </p>

              <p>
                KRTC Schooling was born from a simple belief: every child
                deserves quality education, regardless of their family's
                economic status. Too often, we see schools divided by
                wealth—private institutions for the rich, under-resourced
                schools for the poor. KRTC breaks this divide.
              </p>

              {/* Image Float Right */}
              <div className="float-right ml-8 mb-6 w-full md:w-2/5">
                <Image
                  src="/images/blog/environmental-campaign/classroom-exam.jpg"
                  alt="Students in classroom"
                  width={600}
                  height={400}
                  className="rounded-xl w-full h-auto"
                />
                <p className="text-sm text-gray-500 mt-2 text-center">
                  Students from different backgrounds learning together
                </p>
              </div>

              <p>
                Walk into any KRTC classroom and you will see the future of
                Bangladesh. A rickshaw-puller's daughter solving math problems
                alongside a businessman's son. A farmer's child discussing
                science with a doctor's kid. Here, uniforms don't show
                status—they show unity.
              </p>

              <p>
                Through our{" "}
                <strong className="text-primary">
                  50% scholarship program
                </strong>
                , we ensure that deserving students never miss out on education
                due to financial constraints. The program is simple: those who
                can afford full fees pay full fees. Those who cannot receive up
                to 50% scholarship. No child is turned away because of money.
              </p>

              <p>
                But KRTC Schooling is not just about academics. Our students
                learn something far more valuable—empathy. When a wealthy child
                sits next to a poor child, they learn that intelligence has no
                economic boundary. When they work on projects together, they
                understand that talent comes from hard work, not privilege.
              </p>

              <div className="clear-both"></div>

              {/* Image Float Left */}
              <div className="float-left mr-8 mb-6 w-full md:w-2/5">
                <Image
                  src="/images/blog/environmental-campaign/orientation.jpg"
                  alt="Students taking exam"
                  width={600}
                  height={400}
                  className="rounded-xl w-full h-auto"
                />
                <p className="text-sm text-gray-500 mt-2 text-center">
                  Equal opportunity in education and assessment
                </p>
              </div>

              <p>
                Our students also engage with the community. Recently, they
                organized an environmental awareness campaign, marching through
                local markets with placards reading "পরিষ্কার পৃথিবী, সুস্থ
                জীবন" (Clean Earth, Healthy Life) and "ছোট কাজ, বড় প্রভাব"
                (Small Actions, Big Impact). They taught shopkeepers about
                proper waste disposal and distributed dustbins.
              </p>

              <p>
                The sight was powerful—young students, some from privileged
                homes and some from struggling families, all wearing the same
                KRTC t-shirts, all working together for their community. This is
                what education should create: not just knowledgeable
                individuals, but responsible citizens.
              </p>

              <p>
                Parents from both ends of the economic spectrum have embraced
                this model. Wealthy parents appreciate that their children are
                learning humility and social awareness. Parents from modest
                backgrounds are grateful that their children receive the same
                quality education without discrimination.
              </p>

              <div className="clear-both"></div>

              {/* Full Width Image */}
              <figure className="my-10">
                <Image
                  src="/images/blog/environmental-campaign/fruit-market.jpg"
                  alt="Students during campaign"
                  width={1200}
                  height={600}
                  className="rounded-xl w-full h-auto"
                />
                <figcaption className="text-sm text-gray-500 mt-3 text-center">
                  KRTC Environmental Campaign - Students spreading awareness in
                  local community
                </figcaption>
              </figure>

              <p>
                Guardian meetings at KRTC are unlike any other school. You'll
                see a day laborer sitting next to a factory owner, both equally
                invested in their children's education. Both voices are heard.
                Both opinions matter. This is democracy in its purest
                form—practiced not in politics, but in education.
              </p>

              <p>
                The results speak for themselves. KRTC students consistently
                perform well academically. But more importantly, they grow into
                compassionate human beings who understand that society prospers
                when everyone gets a fair chance.
              </p>

              <p>
                As Bangladesh moves forward, initiatives like KRTC Schooling
                show us the path. A path where education is not a privilege but
                a right. Where classrooms don't reflect economic divisions but
                bridge them. Where children learn that their worth is not
                determined by their parents' bank accounts but by their own
                efforts and character.
              </p>

              <p>
                The children of KRTC are not just students—they are pioneers of
                a new Bangladesh. A Bangladesh where rich and poor learn
                together, grow together, and build the nation together.
              </p>

              {/* Final Image */}
              <figure className="my-10">
                <Image
                  src="/images/blog/environmental-campaign/rally.jpg"
                  alt="Community outreach"
                  width={1200}
                  height={600}
                  className="rounded-xl w-full h-auto"
                />
                <figcaption className="text-sm text-gray-500 mt-3 text-center">
                  Students teaching community members about cleanliness and
                  environmental responsibility
                </figcaption>
              </figure>

              {/* Quote */}
              <blockquote className="border-l-4 border-primary pl-6 py-4 my-10 bg-primary/5 rounded-r-xl">
                <p className="text-xl font-medium text-gray-800 italic mb-0">
                  "Education is the great equalizer. At KRTC, we don't just
                  teach subjects—we teach equality."
                </p>
              </blockquote>
            </div>

            {/* CTA */}
            <div className="mt-16 p-8 bg-gray-50 rounded-2xl text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Interested in joining KRTC Schooling?
              </h3>
              <p className="text-gray-600 mb-6">
                Apply for scholarship or contact us for more information
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/scholarships"
                  className="btn btn-primary px-8 py-3 rounded-xl"
                >
                  Apply for Scholarship
                </Link>
                <Link
                  href="/contact"
                  className="btn btn-outline px-8 py-3 rounded-xl"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

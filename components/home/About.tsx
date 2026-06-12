import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "@/components/animations";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <FadeIn>
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left — Text content (3 cols) */}
            <div className="lg:col-span-3">
              <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
                About KRTC
              </p>
              <h2 className="heading-xl mb-8">
                An Emerging Initiative in Bangladesh
              </h2>

              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p>
                  The Kekuleon Research and Training Center (KRTC) is focused on
                  strengthening the connection between science education and
                  practical competence. It responds to a common challenge where
                  theoretical learning is not sufficiently supported by
                  laboratory training, research exposure, or industry-oriented
                  experience.
                </p>

                <p>
                  KRTC develops a{" "}
                  <strong className="text-gray-900">
                    decentralised and integrated institutional model
                  </strong>{" "}
                  designed to address the gap between theoretical education and
                  practical scientific competence in developing-country contexts.
                  By structuring learning as a progressive system, the model
                  supports student transitions across different educational
                  stages while strengthening readiness for both higher education
                  and professional environments.
                </p>

                <p>
                  Rather than treating education, research, and application as
                  separate domains,{" "}
                  <strong className="text-primary">
                    KRTC integrates them into a continuous learning environment
                  </strong>
                  .
                </p>
              </div>

              {/* What We Do — simple text list */}
              <div className="mt-10">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  What We Do
                </h3>
                <div className="space-y-3">
                  {[
                    {
                      title: "Foundation Program (KRTC Schooling)",
                      desc: "Supports secondary-level students through academic reinforcement, early research exposure, language preparation, and structured engagement activities.",
                    },
                    {
                      title: "Applied Science Training (6 Departments)",
                      desc: "Provides laboratory-oriented and problem-focused learning across chemistry, materials science, pharmaceutical sciences, and healthcare.",
                    },
                    {
                      title: "Research & Academic Development",
                      desc: "Introduces students and graduates to research methods, academic writing, and project-based learning.",
                    },
                    {
                      title: "Industry & Community Engagement",
                      desc: "Connects training with real-world contexts through technical services, environmental initiatives, and community-based activities.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-3">
                      <span className="text-primary mt-1.5 flex-shrink-0">
                        &mdash;
                      </span>
                      <div>
                        <span className="font-semibold text-gray-900">
                          {item.title}
                        </span>
                        <span className="text-gray-500"> — {item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Our Approach — blockquote style */}
              <div className="mt-10 border-l-2 border-primary pl-6 py-2">
                <p className="text-gray-700 leading-relaxed">
                  KRTC is based on the idea that education, research, and
                  application are more effective when developed together —
                  through academic preparation and progression, applied and
                  laboratory-based learning, research exposure and skill
                  development, industry-relevant training, and community
                  engagement linked to social and environmental needs.
                </p>
              </div>

              {/* Status + UNESCO */}
              <div className="mt-8 space-y-3 text-sm text-gray-500">
                <p>
                  KRTC is currently operating through its foundation program,
                  with students engaged in academic preparation, research
                  awareness, language training, and community activities. It also
                  functions as a practice-based research initiative, exploring
                  how decentralised training environments can contribute to
                  improving science education and capacity development.
                </p>
                <p className="italic">
                  This initiative has been submitted to UNESCO, Falling Walls
                  Lab/Cell 2026 (Berlin), and other international organisations
                  for consideration in academic collaboration and institutional
                  engagement.
                </p>
              </div>

              <div className="mt-8">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                >
                  Learn more about us
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right — Image (2 cols) */}
            <div className="lg:col-span-2">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100 sticky top-32">
                {/* TODO: Replace with actual KRTC lab/students photo */}
                <Image
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
                  alt="Students in a science laboratory"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

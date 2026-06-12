import { FadeIn } from "@/components/animations";

const problems = [
  {
    title: "Theory\u2013Practice Gap",
    description:
      "Education is largely theory-oriented, with limited access to laboratory training and real-world scientific practice.",
  },
  {
    title: "Limited Research Exposure",
    description:
      "Many students engage in review-based academic work rather than experimental or problem-oriented research.",
  },
  {
    title: "Mismatch with Industry",
    description:
      "Academic curricula are often not aligned with current industry and technical requirements.",
  },
  {
    title: "Employability Challenges",
    description:
      "Fresh graduates are frequently rejected by employers due to lack of practical skills and hands-on experience.",
  },
  {
    title: "Higher Education Barriers",
    description:
      "Insufficient research training and laboratory experience limit readiness for international study.",
  },
  {
    title: "Weak Sector Integration",
    description:
      "Limited collaboration between education, industry, and research institutions.",
  },
  {
    title: "Unequal Access",
    description:
      "Students from diverse backgrounds often lack access to applied training and academic support.",
  },
];

const solutions = [
  {
    title: "Progressive Learning Pathway",
    description:
      "Structured system supporting students from foundation-level to applied science training and research.",
  },
  {
    title: "Early Research Exposure",
    description:
      "Introduction to scientific thinking, research methods, and academic skills from secondary level.",
  },
  {
    title: "Applied & Lab-Based Training",
    description:
      "Hands-on learning in chemistry, materials science, pharmaceutical sciences, and healthcare.",
  },
  {
    title: "Problem-Oriented Research",
    description:
      "Research activities aligned with real-world challenges including sustainability and industry needs.",
  },
  {
    title: "Industry Alignment",
    description:
      "Training linked to technical skills, applied work, and industry-relevant competencies.",
  },
  {
    title: "Higher Education Support",
    description:
      "Academic writing, research skills, and language training for national and international study.",
  },
  {
    title: "Integrated Environment",
    description:
      "Learning, research, and application developed together in a unified system.",
  },
  {
    title: "Access & Inclusion",
    description:
      "Expanding opportunities for students from diverse socio-economic backgrounds.",
  },
];

export default function ProblemSolution() {
  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <FadeIn>
          {/* Header */}
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
              Challenge & Response
            </p>
            <h2 className="heading-xl mb-4">
              The Problem We Address &{" "}
              <span className="">Our Solution</span>
            </h2>
            <p className="text-gray-600">
              Understanding the challenges in science education and how KRTC's
              integrated model addresses them systematically.
            </p>
          </div>

          {/* Two columns */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {/* Problems */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <span className="w-8 h-px bg-red-500" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-red-600">
                  The Problem We Address
                </h3>
              </div>

              <div className="space-y-5">
                {problems.map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-500 mt-0.5 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 leading-relaxed">
                  <span className="font-semibold text-gray-900">
                    Core Issue:
                  </span>{" "}
                  A disconnect between education, practice, and opportunity —
                  limiting both individual progression and scientific capacity
                  development.
                </p>
              </div>
            </div>

            {/* Solutions */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <span className="w-8 h-px bg-emerald-500" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-600">
                  Our Solutions
                </h3>
              </div>

              <div className="space-y-5">
                {solutions.map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-500 mt-0.5 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 leading-relaxed">
                  <span className="font-semibold text-gray-900">
                    KRTC's Approach:
                  </span>{" "}
                  A decentralised and integrated institutional model connecting
                  education, research, and application within a single framework.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

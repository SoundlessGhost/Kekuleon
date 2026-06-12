import { FadeIn } from "@/components/animations";

export default function ConceptStatement() {
  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <FadeIn>
          {/* Header */}
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
              Our Vision
            </p>
            <h2 className="heading-xl mb-4">
              Concept <span className="">Statement</span>
            </h2>
            <p className="text-gray-600">
              Understanding KRTC's integrated approach to bridging theory and
              practice in science education.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
            {/* Left — The KRTC Concept */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-6">
                The KRTC Concept
              </h3>

              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  KRTC develops a{" "}
                  <strong className="text-gray-900">
                    decentralised and integrated institutional model
                  </strong>{" "}
                  designed to address the gap between theoretical education and
                  practical scientific competence in developing-country contexts.
                </p>

                <p>
                  By structuring learning as a{" "}
                  <strong className="text-gray-900">progressive system</strong>,
                  the model supports student transitions across different
                  educational stages while strengthening readiness for both
                  higher education and professional environments.
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

              {/* Key points */}
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500">
                <span>Decentralised institutional approach</span>
                <span className="text-gray-300">|</span>
                <span>Community-linked activities</span>
                <span className="text-gray-300">|</span>
                <span>Developing-country contexts</span>
                <span className="text-gray-300">|</span>
                <span>Sustainable development focus</span>
              </div>
            </div>

            {/* Right — Key Highlights */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-6">
                Key Highlights
              </h3>

              <div className="space-y-6">
                {[
                  {
                    title: "Integrated Model",
                    description:
                      "Foundation-level preparation, applied science training, research engagement, and community-linked activities within a single operational framework.",
                  },
                  {
                    title: "Progressive System",
                    description:
                      "Supports student transitions across different educational stages while strengthening readiness for both higher education and professional environments.",
                  },
                  {
                    title: "Problem-Oriented Research",
                    description:
                      "Applied training aligned with environmental, social, and industrial contexts — addressing real-world challenges through practical engagement.",
                  },
                ].map((item) => (
                  <div key={item.title}>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 border-l-2 border-emerald-400 pl-4">
                <p className="text-sm text-gray-600 leading-relaxed">
                  <span className="font-semibold text-gray-900">Goal:</span>{" "}
                  Contributing to broader discussions on science education,
                  capacity development, and the role of applied training systems
                  in supporting sustainable development.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

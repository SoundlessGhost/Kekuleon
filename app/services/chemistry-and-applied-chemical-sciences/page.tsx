"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Check,
  X,
  Phone,
  MessageCircle,
  GraduationCap,
  Briefcase,
  Users,
  Clock,
  BookOpen,
  FlaskConical,
  Microscope,
  Globe,
  HeartHandshake,
  FileCheck,
  Award,
} from "lucide-react";

// --- Data ---
const department = {
  title: "Chemistry and Applied Chemical Sciences",
  shortTitle: "Chemistry",
  heroDescription:
    "A 6-month integrated training program bridging theoretical knowledge and practical laboratory skills — preparing you for both industry careers and international higher education.",
  overview:
    "The Department of Chemistry and Applied Chemical Sciences at KRTC offers an integrated training program designed to prepare graduates for dual career pathways: immediate employment in diverse industries (pharmaceutical, chemical, environmental, food, polymer) AND seamless transition to higher education programs (MSc/PhD) domestically and internationally.",
};

const keyFeatures = [
  "6-Month Integrated Program — 4 months training + 2 months research/industry",
  "7 Core Analytical Instruments — Hands-on, industry-standard equipment",
  "528 Contact Hours — 400 credit + 128 non-credit (language + volunteer)",
  "Dual Outcome — Industry readiness + International higher study preparation",
];

const targetStudents = [
  "BSc / MSc Chemistry",
  "Applied Chemistry",
  "Pharmacy",
  "Biochemistry",
  "Environmental Science",
];

const outcomes = {
  industry: [
    "Operate 7 standard analytical instruments independently",
    "Perform QC testing per ICH, USP, ISO standards",
    "Follow GLP, GMP, and ISO documentation requirements",
    "Prepare chemical solutions and perform standardization",
    "Troubleshoot instrument issues and perform maintenance",
  ],
  higherStudy: [
    "Understand advanced spectroscopic and chromatographic principles",
    "Design and execute independent research projects",
    "Write scientific reports and research papers",
    "Conduct literature reviews and database searches",
    "Apply statistical analysis and present findings professionally",
  ],
};

const modules = [
  {
    id: 1,
    title: "Fundamental Chemistry Review",
    week: "Week 1–2",
    hours: 30,
    color: "amber",
    topics: [
      "Atomic Structure and Chemical Bonding",
      "Thermodynamics and Chemical Kinetics",
      "Organic Reaction Mechanisms",
      "Coordination Chemistry and Inorganic Analysis",
      "Polymer Chemistry Fundamentals",
      "Pharmaceutical Chemistry Basics",
      "Environmental Chemistry Principles",
    ],
  },
  {
    id: 2,
    title: "Laboratory Skills and Safety",
    week: "Week 2–4",
    hours: 50,
    color: "blue",
    topics: [
      "Laboratory Safety and Hazard Management",
      "Chemical Handling and Storage Protocols",
      "Glassware, Equipment, and Instrumentation Basics",
      "Solution Preparation and Standardization",
      "Volumetric Titration (Acid-Base, Redox, Complexometric)",
      "Karl Fischer / Potentiometric Titration",
      "Laboratory Documentation and SOPs",
    ],
  },
  {
    id: 3,
    title: "Analytical Chemistry and Instrumentation",
    week: "Week 5–12",
    hours: 190,
    color: "emerald",
    topics: [
      "Spectroscopy Principles and Applications",
      "UV-Visible Spectroscopy",
      "Infrared (FTIR) Spectroscopy",
      "Atomic Absorption Spectroscopy (AAS)",
      "ICP-OES — Multi-element Analysis",
      "ICP-MS — Ultra-trace Analysis",
      "HPLC — Assay, Impurity, Dissolution",
      "Gas Chromatography (GC)",
    ],
  },
  {
    id: 4,
    title: "Applied and Industrial Chemistry",
    week: "Week 13–14",
    hours: 48,
    color: "purple",
    topics: [
      "QC/QA Principles",
      "Good Laboratory Practice (GLP)",
      "Good Manufacturing Practice (GMP)",
      "ISO 17025 and Laboratory Accreditation",
      "ICH Guidelines (Q2, Q3C, Q3D)",
      "Analytical Method Validation",
      "Pharmaceutical, Environmental, Food & Polymer Analysis",
    ],
  },
  {
    id: 5,
    title: "Research Skills and Communication",
    week: "Week 15–16",
    hours: 38,
    color: "rose",
    topics: [
      "Research Methodology and Experimental Design",
      "Literature Review and Database Search",
      "Scientific Writing — Reports and Papers",
      "Statistical Analysis and Data Interpretation",
      "Presentation and Scientific Communication",
      "Research Proposal Writing",
      "Career Development and Higher Study Guidance",
    ],
  },
];

const coreInstruments = [
  { name: "UV-Visible Spectrophotometer", applications: "Quantitative analysis, drug assay, environmental monitoring, kinetics", hours: 26 },
  { name: "FTIR Spectrophotometer", applications: "Material identification, polymer analysis, raw material QC", hours: 26 },
  { name: "Atomic Absorption Spectroscopy (AAS)", applications: "Heavy metal analysis, water quality, food safety", hours: 24 },
  { name: "ICP-OES", applications: "Multi-element analysis, elemental impurity screening (ICH Q3D)", hours: 23 },
  { name: "ICP-MS", applications: "Ultra-trace analysis, Class 1 elements (As, Cd, Hg, Pb)", hours: 23 },
  { name: "HPLC System", applications: "Assay, impurity profiling, dissolution, content uniformity", hours: 35 },
  { name: "Gas Chromatograph (GC)", applications: "Residual solvents (ICH Q3C), VOCs, essential oils", hours: 35 },
];

const nonCreditComponents = [
  {
    icon: Globe,
    title: "Language Preparation",
    subtitle: "English + Optional German Track",
    duration: "4 hrs/week × 16 weeks",
    hours: 64,
    items: [
      "Academic writing and scientific communication",
      "Technical vocabulary for chemistry",
      "Presentation and oral communication",
      "Research literature comprehension",
      "IELTS / language exam preparation",
    ],
  },
  {
    icon: HeartHandshake,
    title: "Structured Volunteer Training",
    subtitle: "Community Engagement & Social Responsibility",
    duration: "4 hrs/week × 16 weeks",
    hours: 64,
    items: [
      "Environmental awareness and clean-up campaigns",
      "Science outreach for secondary school students",
      "Community healthcare support activities",
      "Educational workshops for underprivileged communities",
      "KRTC institutional activities and event support",
    ],
  },
];

const phase2Pathways = [
  {
    tag: "Default Pathway",
    title: "Academic Research Project",
    subtitle: "Conducted at KRTC under expert supervision",
    description:
      "Develop independent research skills and contribute to KRTC's research portfolio — ideal for students targeting MSc/PhD programs abroad.",
    components: [
      "Literature review and research question formulation",
      "Experimental design and methodology",
      "Data collection using trained instruments",
      "Statistical analysis and interpretation",
      "Final report (25–30 pages) and presentation",
    ],
    accent: "emerald",
  },
  {
    tag: "If Available",
    title: "Industry Placement",
    subtitle: "Real-world experience at partner organizations",
    description:
      "Complete a placement at partner industry organizations — gain professional experience across relevant sectors.",
    components: [
      "Pharmaceutical manufacturing & QC laboratories",
      "Environmental testing laboratories",
      "Food and beverage quality assurance",
      "Chemical manufacturing facilities",
      "Polymer and textile testing centers",
    ],
    accent: "amber",
  },
];

const assessment = [
  { component: "Instrument Competency Tests (7 instruments)", weight: 20, timing: "After each instrument" },
  { component: "Monthly Internal Examinations (4 exams)", weight: 20, timing: "End of each month" },
  { component: "Final Written Examination", weight: 15, timing: "Week 16" },
  { component: "Final Practical Examination", weight: 25, timing: "Week 16" },
  { component: "Research Project / Placement Report", weight: 15, timing: "End of Phase 2" },
  { component: "Viva Voce (Oral Examination)", weight: 5, timing: "End of Phase 2" },
];

const grading = [
  { grade: "A+", range: "90% and above", certificate: "Certificate of Completion with Distinction" },
  { grade: "A", range: "80% – 89%", certificate: "Certificate of Completion with Excellence" },
  { grade: "B+/B", range: "60% – 79%", certificate: "Certificate of Completion" },
  { grade: "C", range: "50% – 59%", certificate: "Certificate of Participation" },
];

const careerPathways = [
  {
    icon: GraduationCap,
    title: "Higher Education Abroad",
    description: "Pursue advanced degrees at top international universities",
    opportunities: ["PhD in Chemistry / Materials Science", "MSc Programs (Germany, EU, US)", "Research Fellowships", "Exchange Programs"],
  },
  {
    icon: Users,
    title: "Academic Career",
    description: "Build a career in teaching and research institutions",
    opportunities: ["University Lecturer", "Research Scientist", "Laboratory Director", "Academic Researcher"],
  },
  {
    icon: Briefcase,
    title: "Industry Career",
    description: "Join leading pharmaceutical, chemical, and manufacturing companies",
    opportunities: ["Quality Control Analyst", "R&D Chemist", "Process Engineer", "Environmental Analyst"],
  },
];

const communityServices = [
  { title: "Water Quality Testing", description: "Free water testing services for local communities to ensure safe drinking water." },
  { title: "Environmental Awareness", description: "Educational workshops on environmental protection and sustainable practices." },
  { title: "School Outreach Programs", description: "Science demonstrations and lab tours for school students to inspire future scientists." },
  { title: "Health Camps", description: "Community health awareness programs in collaboration with healthcare partners." },
];

const moduleColor: Record<string, { border: string; bg: string; text: string; dot: string; accent: string }> = {
  amber: { border: "border-amber-200", bg: "bg-amber-50", text: "text-amber-700", dot: "bg-amber-500", accent: "bg-amber-100 text-amber-800" },
  blue: { border: "border-blue-200", bg: "bg-blue-50", text: "text-blue-700", dot: "bg-blue-500", accent: "bg-blue-100 text-blue-800" },
  emerald: { border: "border-emerald-200", bg: "bg-emerald-50", text: "text-emerald-700", dot: "bg-emerald-500", accent: "bg-emerald-100 text-emerald-800" },
  purple: { border: "border-purple-200", bg: "bg-purple-50", text: "text-purple-700", dot: "bg-purple-500", accent: "bg-purple-100 text-purple-800" },
  rose: { border: "border-rose-200", bg: "bg-rose-50", text: "text-rose-700", dot: "bg-rose-500", accent: "bg-rose-100 text-rose-800" },
};

// --- Section wrapper ---
function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
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

export default function ChemistryPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalStep, setModalStep] = useState<"info" | "form" | "success">("info");
  const [preferredPathway, setPreferredPathway] = useState<"research" | "industry">("research");
  const [activeModule, setActiveModule] = useState<number>(1);

  const openModal = () => { setIsModalOpen(true); setModalStep("info"); };
  const closeModal = () => { setIsModalOpen(false); setModalStep("info"); };

  const currentModule = modules.find((m) => m.id === activeModule) ?? modules[0];

  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-16 bg-white">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <span>/</span>
              <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
              <span>/</span>
              <span className="text-gray-600">{department.shortTitle}</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 border border-primary/20 rounded-full text-xs font-medium text-primary mb-5">
              <Clock className="w-3 h-3" /> 6-Month Integrated Program · Phase 1 (4 mo) + Phase 2 (2 mo)
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-5 max-w-3xl">
              {department.title}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl">
              {department.heroDescription}
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <button onClick={openModal} className="btn btn-primary group">
                Apply Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <Link href="#curriculum" className="btn btn-outline-dark">View Curriculum</Link>
            </div>

            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
              {keyFeatures.map((f) => (
                <div key={f} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  {f}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview + Target Students */}
      <Section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="heading-lg mb-5">Department Overview</h2>
              <p className="text-gray-600 leading-relaxed mb-6">{department.overview}</p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-5">Who This Program Is For</h3>
              <p className="text-sm text-gray-600 mb-4">Graduates and final-year students from:</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {targetStudents.map((t) => (
                  <span key={t} className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700">
                    {t}
                  </span>
                ))}
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-4">Target Industries</h3>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                {["Pharmaceutical", "Chemical", "Environmental", "Food & Agriculture", "Polymer & Textile", "Materials Science"].map((ind) => (
                  <div key={ind} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {ind}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Program Structure (4+2) */}
      <Section className="section bg-white">
        <div className="container-custom">
          <h2 className="heading-lg mb-2">Program Structure</h2>
          <p className="text-gray-600 mb-10 max-w-2xl">
            An integrated 4+2 model spanning 528 total contact hours — combining classroom learning, laboratory practice, instrument training, and real research/industry experience.
          </p>

          {/* Phase visual */}
          <div className="grid lg:grid-cols-3 gap-5 mb-10">
            <div className="lg:col-span-2 p-7 bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-2.5 py-1 bg-primary text-white text-xs font-medium rounded-full">Phase 1</span>
                <span className="text-sm text-gray-500">4 Months · Week 1–16</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Classroom + Laboratory + Instrument Training</h3>
              <p className="text-sm text-gray-600 mb-4">
                5 core modules covering fundamental review, lab skills, analytical instrumentation, applied industrial chemistry, and research methodology.
              </p>
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="p-3 bg-white/70 rounded-lg">
                  <p className="text-2xl font-bold text-gray-900">400</p>
                  <p className="text-xs text-gray-500">Credit Hours</p>
                </div>
                <div className="p-3 bg-white/70 rounded-lg">
                  <p className="text-2xl font-bold text-gray-900">5</p>
                  <p className="text-xs text-gray-500">Core Modules</p>
                </div>
                <div className="p-3 bg-white/70 rounded-lg">
                  <p className="text-2xl font-bold text-gray-900">7</p>
                  <p className="text-xs text-gray-500">Instruments</p>
                </div>
              </div>
            </div>

            <div className="p-7 bg-gradient-to-br from-emerald-50 to-emerald-100/40 border border-emerald-200 rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-2.5 py-1 bg-emerald-600 text-white text-xs font-medium rounded-full">Phase 2</span>
                <span className="text-sm text-gray-500">2 Months</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Research OR Industry</h3>
              <p className="text-sm text-gray-600 mb-4">
                Academic research project at KRTC (default) or industry placement at partner organizations.
              </p>
              <div className="p-3 bg-white/70 rounded-lg text-center">
                <p className="text-2xl font-bold text-gray-900">25–30</p>
                <p className="text-xs text-gray-500">Pages Final Report</p>
              </div>
            </div>
          </div>

          {/* Hours breakdown */}
          <div className="grid sm:grid-cols-3 gap-5">
            <div className="p-5 border border-gray-200 rounded-xl">
              <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-1">Credit Hours</p>
              <p className="text-3xl font-bold text-gray-900 mb-1">400</p>
              <p className="text-sm text-gray-600">Course modules + Instrument training + Assessments</p>
            </div>
            <div className="p-5 border border-gray-200 rounded-xl">
              <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-1">Non-Credit Hours</p>
              <p className="text-3xl font-bold text-gray-900 mb-1">128</p>
              <p className="text-sm text-gray-600">Language preparation + Structured volunteer training</p>
            </div>
            <div className="p-5 border-2 border-primary/30 bg-primary/5 rounded-xl">
              <p className="text-xs uppercase tracking-wider text-primary font-semibold mb-1">Total Contact Hours</p>
              <p className="text-3xl font-bold text-gray-900 mb-1">528</p>
              <p className="text-sm text-gray-600">Theory : Practical ratio ≈ 1 : 7</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Curriculum — 5 Modules */}
      <Section className="section bg-gray-50" >
        <div className="container-custom" id="curriculum">
          <div className="flex items-start justify-between flex-wrap gap-4 mb-10">
            <div>
              <h2 className="heading-lg mb-2">Curriculum — 5 Core Modules</h2>
              <p className="text-gray-600 max-w-2xl">
                Progressive 16-week curriculum covering foundation to advanced analytical techniques and research skills.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-6">
            {/* Module selector */}
            <div className="lg:col-span-4 space-y-2">
              {modules.map((m) => {
                const isActive = m.id === activeModule;
                const c = moduleColor[m.color];
                return (
                  <button
                    key={m.id}
                    onClick={() => setActiveModule(m.id)}
                    className={`w-full text-left p-4 rounded-xl border transition-all ${
                      isActive
                        ? `${c.border} ${c.bg} shadow-sm`
                        : "border-gray-200 bg-white hover:border-gray-300"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold ${isActive ? c.accent : "bg-gray-100 text-gray-500"}`}>
                        {m.id}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className={`font-semibold text-sm ${isActive ? "text-gray-900" : "text-gray-700"}`}>{m.title}</p>
                        <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                          <span>{m.week}</span>
                          <span>·</span>
                          <span>{m.hours}h</span>
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Module detail */}
            <div className="lg:col-span-8">
              <motion.div
                key={currentModule.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="p-7 bg-white border border-gray-200 rounded-2xl h-full"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${moduleColor[currentModule.color].accent}`}>
                    Module {currentModule.id}
                  </span>
                  <span className="text-sm text-gray-500">{currentModule.week}</span>
                  <span className="text-sm text-gray-500">·</span>
                  <span className="text-sm text-gray-500">{currentModule.hours} hours</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-5">{currentModule.title}</h3>

                <div className="grid sm:grid-cols-2 gap-3">
                  {currentModule.topics.map((topic) => (
                    <div key={topic} className="flex items-start gap-2.5 text-sm text-gray-700">
                      <span className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${moduleColor[currentModule.color].dot}`} />
                      {topic}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </Section>

      {/* 7 Core Instruments */}
      <Section className="section bg-white">
        <div className="container-custom">
          <h2 className="heading-lg mb-2">7 Core Analytical Instruments</h2>
          <p className="text-gray-600 mb-10 max-w-2xl">
            Master the instruments used daily in quality control, R&D, and research laboratories worldwide — 192 hours of dedicated hands-on training integrated within Module 3.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {coreInstruments.map((ins, i) => (
              <div key={ins.name} className="p-6 bg-gray-50 border border-gray-200 rounded-2xl hover:border-primary/30 hover:shadow-sm transition-all">
                <div className="flex items-center justify-between mb-3">
                  <span className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xs font-medium text-gray-500">{ins.hours} hrs</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 leading-snug">{ins.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{ins.applications}</p>
              </div>
            ))}

            {/* Karl Fischer bonus */}
            <div className="p-6 bg-white border-2 border-dashed border-gray-300 rounded-2xl">
              <div className="flex items-center justify-between mb-3">
                <span className="w-10 h-10 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center">
                  <FlaskConical className="w-5 h-5" />
                </span>
                <span className="text-xs font-medium text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full">Bonus</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2 leading-snug">Karl Fischer Titrator</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Moisture content determination — integrated into Module 2 practical training.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Dual Outcomes */}
      <Section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-lg mb-2">Dual Career Outcomes</h2>
          <p className="text-gray-600 mb-10 max-w-2xl">
            Graduate ready for either immediate industry employment or seamless transition into international higher education.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-7 bg-white border border-gray-200 rounded-2xl">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                  <Briefcase className="w-5 h-5" />
                </span>
                <h3 className="text-lg font-bold text-gray-900">Industry Readiness</h3>
              </div>
              <div className="space-y-3">
                {outcomes.industry.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-7 bg-white border border-gray-200 rounded-2xl">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5" />
                </span>
                <h3 className="text-lg font-bold text-gray-900">Higher Study Preparedness</h3>
              </div>
              <div className="space-y-3">
                {outcomes.higherStudy.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Non-Credit Mandatory Components */}
      <Section className="section bg-white">
        <div className="container-custom">
          <div className="mb-10">
            <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full mb-3">MANDATORY · NON-CREDIT</span>
            <h2 className="heading-lg mb-2">Beyond the Classroom</h2>
            <p className="text-gray-600 max-w-2xl">
              128 additional hours of language preparation and structured volunteer training — building global communication skills and social responsibility.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {nonCreditComponents.map((c) => (
              <div key={c.title} className="p-7 bg-gray-50 border border-gray-200 rounded-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-11 h-11 rounded-xl bg-white border border-gray-200 flex items-center justify-center">
                    <c.icon className="w-5 h-5 text-primary" />
                  </span>
                  <div>
                    <h3 className="font-bold text-gray-900">{c.title}</h3>
                    <p className="text-xs text-gray-500">{c.subtitle}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-xs text-gray-600 mb-5 pb-5 border-b border-gray-200">
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {c.duration}</span>
                  <span>·</span>
                  <span className="font-semibold text-gray-900">{c.hours} hours total</span>
                </div>
                <ul className="space-y-2">
                  {c.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="w-1 h-1 rounded-full bg-gray-400 mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Phase 2 Pathways */}
      <Section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-lg mb-2">Phase 2 — Choose Your Pathway</h2>
          <p className="text-gray-600 mb-10 max-w-2xl">
            The final 2 months offer a capstone experience tailored to your career goals.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {phase2Pathways.map((p) => {
              const isEmerald = p.accent === "emerald";
              return (
                <div
                  key={p.title}
                  className={`p-7 bg-white rounded-2xl border-2 ${isEmerald ? "border-emerald-300" : "border-amber-200"}`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-2.5 py-1 text-xs font-semibold rounded-full ${isEmerald ? "bg-emerald-100 text-emerald-800" : "bg-amber-100 text-amber-800"}`}>
                      {p.tag}
                    </span>
                    <span className={isEmerald ? "text-emerald-600" : "text-amber-600"}>
                      {isEmerald ? <Microscope className="w-5 h-5" /> : <Briefcase className="w-5 h-5" />}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{p.title}</h3>
                  <p className="text-sm text-gray-500 mb-3">{p.subtitle}</p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-5">{p.description}</p>
                  <div className="pt-5 border-t border-gray-100">
                    <p className="text-xs uppercase tracking-wider font-semibold text-gray-500 mb-3">
                      {isEmerald ? "Project Components" : "Potential Sectors"}
                    </p>
                    <ul className="space-y-2">
                      {p.components.map((c) => (
                        <li key={c} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${isEmerald ? "bg-emerald-500" : "bg-amber-500"}`} />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Assessment & Certification */}
      <Section className="section bg-white">
        <div className="container-custom">
          <h2 className="heading-lg mb-2">Assessment & Certification</h2>
          <p className="text-gray-600 mb-10 max-w-2xl">
            Competency-based evaluation across theory, practical skills, instrument operation, and research output.
          </p>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Assessment table */}
            <div className="lg:col-span-3">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Assessment Breakdown</h3>
              <div className="border border-gray-200 rounded-xl overflow-hidden">
                {assessment.map((a, i) => (
                  <div
                    key={a.component}
                    className={`flex items-center justify-between gap-4 px-5 py-4 ${i !== assessment.length - 1 ? "border-b border-gray-100" : ""} ${i % 2 === 0 ? "bg-gray-50/50" : "bg-white"}`}
                  >
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">{a.component}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{a.timing}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-24 h-1.5 bg-gray-100 rounded-full overflow-hidden hidden sm:block">
                        <div className="h-full bg-primary rounded-full" style={{ width: `${(a.weight / 25) * 100}%` }} />
                      </div>
                      <span className="text-sm font-bold text-gray-900 w-10 text-right">{a.weight}%</span>
                    </div>
                  </div>
                ))}
                <div className="flex items-center justify-between gap-4 px-5 py-4 bg-primary/5 border-t-2 border-primary/20">
                  <p className="text-sm font-bold text-gray-900">TOTAL</p>
                  <span className="text-sm font-bold text-primary">100%</span>
                </div>
              </div>
            </div>

            {/* Grading */}
            <div className="lg:col-span-2">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Grading & Certification</h3>
              <div className="space-y-2">
                {grading.map((g) => (
                  <div key={g.grade} className="p-4 bg-gray-50 border border-gray-200 rounded-xl">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-lg font-bold text-gray-900">{g.grade}</span>
                      <span className="text-xs font-medium text-gray-500">{g.range}</span>
                    </div>
                    <p className="text-xs text-gray-600 leading-snug">{g.certificate}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Career Pathways */}
      <Section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-lg mb-2">Career Pathways</h2>
          <p className="text-gray-600 mb-10 max-w-2xl">Our training opens doors to international higher education, academic careers, and industry positions.</p>

          <div className="grid md:grid-cols-3 gap-6">
            {careerPathways.map((pathway) => (
              <div key={pathway.title} className="p-6 bg-white rounded-xl border border-gray-200">
                <span className="inline-flex w-10 h-10 rounded-lg bg-primary/10 text-primary items-center justify-center mb-4">
                  <pathway.icon className="w-5 h-5" />
                </span>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{pathway.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{pathway.description}</p>
                <div className="space-y-2">
                  {pathway.opportunities.map((opp) => (
                    <div key={opp} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-1 h-1 rounded-full bg-gray-400" />
                      {opp}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Community Services */}
      <Section className="section bg-white">
        <div className="container-custom">
          <h2 className="heading-lg mb-2">Community & Social Service</h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            KRTC is committed to giving back through free services, awareness programs, and educational outreach.
          </p>
          <div className="grid sm:grid-cols-2 gap-5 max-w-3xl">
            {communityServices.map((s) => (
              <div key={s.title}>
                <h4 className="font-semibold text-gray-900 mb-1">{s.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-16 bg-gray-50">
        <div className="container-custom text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ready to Start Your Journey?</h2>
          <p className="text-gray-600 mb-8">
            Join KRTC's Chemistry department and gain the practical skills needed for a successful career. Scholarship opportunities available.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={openModal} className="btn btn-primary group">
              Apply Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <Link href="/scholarships" className="btn btn-outline-dark">Scholarship Info</Link>
          </div>
        </div>
      </Section>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="bg-white rounded-2xl w-full max-w-lg overflow-hidden shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
                <div>
                  <p className="text-xs text-gray-400 mb-0.5">Chemistry Department · 6-Month Program</p>
                  <h3 className="text-lg font-bold text-gray-900">
                    {modalStep === "info" && "Apply For Merit Base Examination"}
                    {modalStep === "form" && "Register Your Interest"}
                    {modalStep === "success" && "Registration Successful"}
                  </h3>
                </div>
                <button onClick={closeModal} className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors">
                  <X className="w-4 h-4 text-gray-500" />
                </button>
              </div>

              <div className="px-6 py-5">
                {modalStep === "info" && (
                  <div className="space-y-5">
                    {/* Intakes */}
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Upcoming Intakes</p>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="p-3 bg-gray-50 rounded-lg text-center border border-gray-200">
                          <p className="text-xs text-gray-400">Intake 1</p>
                          <p className="font-semibold text-gray-900">October 2026</p>
                        </div>
                        <div className="p-3 bg-gray-50 rounded-lg text-center border border-gray-200">
                          <p className="text-xs text-gray-400">Intake 2</p>
                          <p className="font-semibold text-gray-900">April 2027</p>
                        </div>
                      </div>
                    </div>

                    {/* Phase 2 Pathway Preference */}
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-1">Phase 2 Preference</p>
                      <p className="text-xs text-gray-500 mb-2">Choose your preferred capstone experience (may change later based on availability)</p>
                      <div className="space-y-2">
                        {[
                          { value: "research" as const, label: "Academic Research Project", sub: "Default · Ideal for higher education" },
                          { value: "industry" as const, label: "Industry Placement", sub: "Subject to partner availability" },
                        ].map((p) => (
                          <label key={p.value} className={`flex items-center gap-3 p-3.5 rounded-lg border cursor-pointer transition-all ${preferredPathway === p.value ? "border-primary bg-primary/5" : "border-gray-200 hover:border-gray-300"}`}>
                            <input type="radio" name="pathway" checked={preferredPathway === p.value} onChange={() => setPreferredPathway(p.value)} className="accent-primary" />
                            <div>
                              <p className="text-sm font-semibold text-gray-900">{p.label}</p>
                              <p className="text-xs text-gray-500">{p.sub}</p>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                    <p className="text-sm text-gray-500 border-l-2 border-primary pl-3">
                      <span className="font-medium text-gray-900">Scholarship:</span> Up to 20% for deserving students
                    </p>

                    <button onClick={() => setModalStep("form")} className="w-full py-3 bg-primary text-white font-medium rounded-full hover:bg-primary/90 transition-colors">
                      Continue
                    </button>

                    <div className="flex justify-center gap-6 text-xs text-gray-400">
                      <a href="tel:+8801345687576" className="hover:text-primary transition-colors flex items-center gap-1">
                        <Phone className="w-3 h-3" /> +880 134 568 7576
                      </a>
                      <a href="https://wa.me/491634855414" className="hover:text-green-600 transition-colors flex items-center gap-1">
                        <MessageCircle className="w-3 h-3" /> WhatsApp
                      </a>
                    </div>
                  </div>
                )}

                {modalStep === "form" && (
                  <form onSubmit={(e) => { e.preventDefault(); setModalStep("success"); }} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                        <input type="text" required placeholder="Your name" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                        <input type="tel" required placeholder="+880..." className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none" />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input type="email" placeholder="email@example.com" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Intake</label>
                        <select className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none bg-white">
                          <option>October 2026</option>
                          <option>April 2027</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Background</label>
                      <select className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none bg-white">
                        {targetStudents.map((t) => <option key={t}>{t}</option>)}
                        <option>Other</option>
                      </select>
                    </div>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="accent-primary" />
                      <span className="text-sm text-gray-600">Interested in scholarship</span>
                    </label>
                    <button type="submit" className="w-full py-3 bg-primary text-white font-medium rounded-full hover:bg-primary/90 transition-colors">
                      Submit
                    </button>
                    <p className="text-center text-xs text-gray-400">We'll contact you within 24-48 hours</p>
                  </form>
                )}

                {modalStep === "success" && (
                  <div className="text-center py-6">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check className="w-6 h-6 text-emerald-600" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Thank You!</h4>
                    <p className="text-sm text-gray-600 mb-6">Your interest has been registered. We'll contact you soon.</p>
                    <div className="flex gap-3">
                      <Link href="/services" className="flex-1 py-2.5 bg-primary text-white font-medium rounded-full hover:bg-primary/90 transition-colors text-center text-sm">Explore More</Link>
                      <button onClick={closeModal} className="flex-1 py-2.5 border border-gray-200 text-gray-600 rounded-full hover:bg-gray-50 transition-colors text-sm">Close</button>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

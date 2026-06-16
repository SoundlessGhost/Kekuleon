// =============================================
// KRTC Seminars Data
// Designed to be extensible: add new seminars by appending
// to the `seminars` array. Page reads from this single source.
// =============================================

export type SeminarZone = "north" | "central" | "southwest" | "east";

export interface SeminarUniversityOption {
  code: string;
  name: string;
}

export interface SeminarAgendaItem {
  time: string;
  title: string;
  speaker?: string;
  description?: string;
}

export interface SeminarSpeaker {
  name: string;
  role: string;
  affiliation?: string;
  bio?: string;
  image?: string;
}

export interface SeminarFAQ {
  question: string;
  answer: string;
}

// =============================================
// Post-event recap (added in Phase 2)
// =============================================

// A single image used in a recap section or in the gallery.
// `src` is a path under /public (e.g. "/images/seminar/<slug>/01-hero.jpg").
export interface RecapPhoto {
  src: string;
  alt: string;
  caption?: string;
}

// One section of the recap page. Each section optionally has an image
// followed by one or more paragraphs of body text. The `kind` lets the
// recap page pick a sensible default heading and styling per section.
export interface RecapSection {
  kind:
    | "opening"
    | "guests"
    | "activity"
    | "two-sessions"
    | "krtc-model"
    | "team-northzone"
    | "team-project"
    | "closing"
    | "custom";
  heading?: string; // overrides the default heading for this kind
  image?: RecapPhoto;
  paragraphs: string[];
}

// A named guest or team member shown on the recap page.
// `teamSlug` (when set) makes the name clickable to /team/<slug>.
export interface RecapPerson {
  name: string;
  role: string;
  teamSlug?: string;
}

// Full recap block for one seminar. Optional on `Seminar` — only present
// once we have photos and copy ready to publish.
export interface SeminarRecap {
  isPublished: boolean;
  publishedDate?: string; // human-readable, e.g. "1 May 2026"
  publishedDateISO?: string; // for <time>, e.g. "2026-05-01"
  intro: string; // short blurb under the recap hero
  heroImage: RecapPhoto; // also used as the OpenGraph preview
  sections: RecapSection[];
  distinguishedGuests: RecapPerson[];
  organisingTeam: RecapPerson[];
  gallery: RecapPhoto[];
}

export interface Seminar {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  // Event basics
  date: string; // human-readable, e.g. "15 May 2026"
  dateISO: string; // for <time> + structured data, e.g. "2026-05-15"
  time: string; // e.g. "10:00 AM – 4:00 PM (BST)"
  venue: string;
  venueAddress?: string;
  mapEmbedUrl?: string;
  // Audience
  targetZone: SeminarZone;
  audienceUniversities: SeminarUniversityOption[];
  audienceNote?: string;
  // Content
  agenda: SeminarAgendaItem[];
  speakers: SeminarSpeaker[];
  whatYoullGet: { title: string; description: string }[];
  faq: SeminarFAQ[];
  // Logistics
  registrationOpen: boolean;
  // Optional auto-close. ISO datetime (UTC). If set, registration is treated
  // as closed once Date.now() >= this moment — even if registrationOpen=true.
  // Lets us schedule a hard deadline without manually flipping the flag.
  registrationCloseAt?: string;
  registrationDeadline?: string; // human-readable display, e.g. "29 April 2026 (11:59 PM BST)"
  capacity?: number;
  fee?: string; // e.g. "Free" or "BDT 500"
  certificateNote?: string;
  // Optional pre-event survey link (e.g. a Google Form). When set, the
  // per-seminar page surfaces it in two places: a thin banner above the
  // hero, and an info card right above the registration form. Always
  // optional for the registrant — it's a "we'd also love your input"
  // nudge, not a gate.
  surveyUrl?: string;
  // Optional post-event recap. When present and `recap.isPublished` is true,
  // the recap page at /seminar/recap/<slug> renders + the /seminar page shows
  // a "View recap" banner. See PHASE 2 in the plan file for the wider design.
  recap?: SeminarRecap;
}

// Universities for the North Zone (source of truth: lib/team-data.ts). Mawlana Bhashani
// Mirrored here as plain data so the seminar form has zero coupling to
// the team-data zone module — easier to evolve independently.
export const NORTH_ZONE_UNIVERSITIES: SeminarUniversityOption[] = [
  { code: "RU", name: "University of Rajshahi" },
  { code: "TU", name: "Teesta University, Rangpur" },
  { code: "BRUR", name: "Begum Rokeya University, Rangpur" },
  {
    code: "HSTU",
    name: "Haji Mohammad Danesh Science & Technology University",
  },
  { code: "BSTU", name: "Bogura Science & Technology University" },
  { code: "PUST", name: "Pabna University of Science & Technology" },
  { code: "PTEC", name: "Pabna Textile Engineering College" },
  { code: "RUET", name: "Rajshahi University of Engineering & Technology" },
  // MBSTU is technically Central Zone (Tangail), but per the user's
  // decision in Phase 3 we keep a single shared audience list across
  // all KRTC seminars rather than splitting by zone for now.
  { code: "MBSTU", name: "Mawlana Bhashani Science & Technology University" },
  { code: "OTHER", name: "Other NU-affiliated college (North Zone)" },
];

// Universities for the East Zone (Chattogram & Sylhet Divisions).
// Source of truth: lib/team-data.ts → `universityZones` for `east`.
export const EAST_ZONE_UNIVERSITIES: SeminarUniversityOption[] = [
  { code: "CU", name: "University of Chattogram" },
  { code: "CUET", name: "Chittagong University of Engineering & Technology" },
  {
    code: "SUST",
    name: "Shahjalal University of Science & Technology, Sylhet",
  },
  { code: "CoU", name: "Comilla University, Cumilla" },
  {
    code: "NSTU",
    name: "Noakhali Science & Technology University, Noakhali",
  },
  { code: "OTHER", name: "Other NU-affiliated college (East Zone)" },
];

// Universities for the Southwest Zone (Khulna & Barishal Divisions).
// Source of truth: lib/team-data.ts → `universityZones` for `southwest`.
export const SOUTHWEST_ZONE_UNIVERSITIES: SeminarUniversityOption[] = [
  { code: "KU", name: "Khulna University, Khulna" },
  {
    code: "KUET",
    name: "Khulna University of Engineering & Technology, Khulna",
  },
  { code: "IU", name: "Islamic University, Kushtia" },
  { code: "BU", name: "University of Barishal, Barishal" },
  {
    code: "PSTU",
    name: "Patuakhali Science & Technology University, Patuakhali",
  },
  {
    code: "JUST",
    name: "Jashore University of Science & Technology, Jashore",
  },
  { code: "OTHER", name: "Other NU-affiliated college (Southwest Zone)" },
];

// Universities for the Central Zone (Dhaka & Mymensingh Divisions).
// Source of truth: lib/team-data.ts → `universityZones` for `central`.
export const CENTRAL_ZONE_UNIVERSITIES: SeminarUniversityOption[] = [
  { code: "DU", name: "University of Dhaka, Dhaka" },
  { code: "JU", name: "Jahangirnagar University, Savar, Dhaka" },
  { code: "JnU", name: "Jagannath University, Dhaka" },
  { code: "BUP", name: "Bangladesh University of Professionals, Dhaka" },
  {
    code: "JKKNIU",
    name: "Jatiya Kabi Kazi Nazrul Islam University, Mymensingh",
  },
  {
    code: "MBSTU",
    name: "Mawlana Bhashani Science & Technology University, Tangail",
  },
  {
    code: "BSMRSTU",
    name: "Bangabandhu Sheikh Mujibur Rahman S&T University, Gopalganj",
  },
  { code: "OTHER", name: "Other NU-affiliated college (Central Zone)" },
];

export const seminars: Seminar[] = [
  {
    slug: "bridging-theory-practice-rangpur",
    title:
      "Bridging the Theory and Practice Gap in Science Education in Bangladesh",
    tagline:
      "A KRTC volunteer-led seminar for North Zone students — connecting theory to laboratory, research, and industry practice.",
    description: `This seminar is part of KRTC's volunteer-led outreach to bring the conversation about practical, applied science education directly to students in the North Zone. Participants will hear from researchers, industry professionals, and KRTC's University Coordinators on how to move from textbook understanding to laboratory competence, scholarly research, and industry-ready scientific work.

A certificate of participation, signed by KRTC leadership, will be issued to every attendee after the event.`,
    date: "30 April 2026",
    dateISO: "2026-04-30",
    time: "3:00 PM – 5:00 PM (BST)",
    venue: "Begum Rokeya University, Rangpur",
    venueAddress: "Begum Rokeya University, Rangpur, Bangladesh",
    targetZone: "north",
    audienceUniversities: NORTH_ZONE_UNIVERSITIES,
    audienceNote:
      "Open to undergraduate and postgraduate students from North Zone universities (Rajshahi & Rangpur Divisions) and affiliated National University colleges.",
    agenda: [
      {
        time: "Session 1",
        title: "Why theory alone is not enough",
        description:
          "Framing the gap between conceptual learning and laboratory / industry-ready scientific competence in Bangladesh.",
      },
      {
        time: "Session 2",
        title: "From classroom to laboratory",
        description:
          "Practical pathways into hands-on research, instrumentation training, and applied projects.",
      },
      {
        time: "Session 3",
        title: "Research, scholarships & global pathways",
        description:
          "How undergraduates from North Zone universities can prepare for graduate research, scholarships, and international academic mobility.",
      },
      {
        time: "Session 4",
        title: "Q&A + KRTC University Coordinator network",
        description:
          "Open discussion with KRTC's North Zone Advisor and University Coordinators — how to stay connected after the seminar.",
      },
    ],
    speakers: [
      {
        name: "Md Zakaria Hossain",
        role: "Founder & Chairman, KRTC",
        affiliation: "MSc Chemistry Candidate, University of Siegen",
      },
      {
        name: "Md. Mahmudul Hasan Abir Mia",
        role: "North Zone Advisor",
        affiliation: "Begum Rokeya University, Rangpur",
      },
    ],
    whatYoullGet: [
      {
        title: "Certificate of Participation",
        description:
          "A KRTC-signed certificate is issued to every attendee after the event, useful for academic and professional portfolios.",
      },
      {
        title: "Direct connection to KRTC's North Zone network",
        description:
          "Meet KRTC's Zone Advisor and University Coordinators — your local point of contact for future trainings, research, and opportunities.",
      },
      {
        title: "Practical guidance on the next step",
        description:
          "Concrete pointers on labs, research methods, scholarships, and industry pathways relevant to your field of study.",
      },
    ],
    faq: [
      {
        question: "Who can register for this seminar?",
        answer:
          "Currently undergraduate and postgraduate students of North Zone universities — University of Rajshahi, Begum Rokeya University, HSTU, BSTU, PUST, and affiliated National University colleges in Rajshahi & Rangpur Divisions.",
      },
      {
        question: "Is there any registration fee?",
        answer:
          "No. This seminar is free for all eligible students. Seats are limited, so registration confirms your spot.",
      },
      {
        question: "Will I receive a certificate?",
        answer:
          "Yes. A KRTC-signed Certificate of Participation will be emailed to every attendee after the event. Attendance is verified at the venue.",
      },
      {
        question: "What if my university is not in the dropdown?",
        answer:
          "Choose 'Other NU-affiliated college (North Zone)' if you're from an affiliated college in Rajshahi or Rangpur Division. If you're from a different zone, please wait — KRTC will host seminars in your region soon.",
      },
      {
        question: "How will I know the final schedule and directions?",
        answer:
          "Date and venue are already confirmed: 30 April 2026, 3:00 PM – 5:00 PM, Begum Rokeya University, Rangpur. After registering you will receive a confirmation email with the on-campus location and any last-minute updates.",
      },
    ],
    registrationOpen: true,
    // 29 April 2026, 3:00 PM BST (UTC+6) → 29 April 2026, 09:00 UTC.
    // Extended from 11:30 AM to 3:00 PM at the client's request to allow
    // last-minute registrations on the day before the seminar.
    registrationCloseAt: "2026-04-29T09:00:00.000Z",
    registrationDeadline: "29 April 2026 (3:00 PM BST)",
    fee: "Free",
    certificateNote:
      "A KRTC-signed Certificate of Participation will be emailed to every attendee within 7–10 days after the event.",
    // Post-event recap. Photo files live on Cloudinary (cloud name:
    // `dohbigfue`) — the client uploads them with the agreed filenames
    // (01-hero-group.jpg, 02-opening-zakaria.jpg, ..., 09-closing-qa.jpg
    // for the section photos; gallery-01.jpg through gallery-10.jpg for
    // the gallery). Cloudinary's "asset folders" mode keeps the delivery
    // URL flat regardless of which folder the asset is organised under
    // in the Media Library, so the URLs below are predictable from
    // filename alone.
    recap: {
      isPublished: true,
      publishedDate: "1 May 2026",
      publishedDateISO: "2026-05-01",
      intro:
        "KRTC's first volunteer-organised academic seminar on applied science education was held at Begum Rokeya University, Rangpur — bringing together teachers, students, distinguished academic guests, and KRTC's North Zone team for an open conversation on bridging the theory–practice gap in Bangladeshi science education.",
      heroImage: {
        src: "https://res.cloudinary.com/dohbigfue/image/upload/01-hero-group.jpg",
        alt: "Group photo of guests, teachers, KRTC team, and students at the Rangpur seminar",
        caption:
          "KRTC's first academic seminar on bridging the theory–practice gap in science education",
      },
      sections: [
        {
          kind: "opening",
          heading: "About the seminar",
          image: {
            src: "https://res.cloudinary.com/dohbigfue/image/upload/02-opening-zakaria.jpg",
            alt: "Md. Zakaria Hossain presenting KRTC's integrated institutional model",
            caption:
              "Md. Zakaria Hossain presenting KRTC's integrated institutional model",
          },
          paragraphs: [
            'Kekuleon Research and Training Center (KRTC) organised its first academic seminar on applied science education, titled "Bridging the Theory–Practice Gap in Science Education in Bangladesh." The seminar focused on problem-based learning, laboratory-oriented training, research exposure, and integrated institutional support for developing students\' practical scientific competence.',
            "The seminar was held at Begum Rokeya University, Rangpur, as part of KRTC's North Zone academic outreach. The programme aimed to connect theory with laboratory learning, research practice, and industry-relevant scientific work for North Zone students.",
            "The seminar was coordinated by Md. Zakaria Hossain, Founder and Chairman of KRTC and MSc Chemistry candidate at the University of Siegen, Germany. The initiative was guided by Dr. Dilip Kumar Sarkar and Dr. Shah Md. Shahan Shahriar, Associate Professors in the Department of Applied Chemistry and Chemical Engineering, University of Rajshahi.",
          ],
        },
        {
          kind: "guests",
          heading: "Distinguished academic guests",
          image: {
            src: "https://res.cloudinary.com/dohbigfue/image/upload/03-guests.jpg",
            alt: "Distinguished academic guests seated and speaking at the seminar",
            caption:
              "Academic guests supported the KRTC initiative and appreciated its integrated approach",
          },
          paragraphs: [
            "The honourable guests and participating teachers expressed clear support for the KRTC initiative and appreciated its integrated institutional model. They noted that, alongside academic and institutional support, students need this kind of coordinated platform to gain access to practical scientific competence, guided research exposure, laboratory-oriented learning, and applied STEM skills. They also recognised that theory-based education alone cannot fully prepare students for research, applied scientific careers, higher education mobility, or development-focused technical work.",
          ],
        },
        {
          kind: "activity",
          heading: "From classroom to laboratory",
          image: {
            src: "https://res.cloudinary.com/dohbigfue/image/upload/04-activity.jpg",
            alt: "Students and teachers during the seminar session",
            caption:
              "Participants discussed practical scientific competence, research exposure, and applied STEM training",
          },
          paragraphs: [
            "The seminar addressed several structural challenges in science education in Bangladesh. These included limited laboratory exposure, weak connection between theoretical learning and real-life application, insufficient undergraduate research opportunities, limited scientific mentoring, and barriers to higher education and research careers. KRTC's presentation identified these issues as part of a wider theory–practice gap in science education.",
          ],
        },
        {
          kind: "two-sessions",
          heading: "Two sessions, one conversation",
          image: {
            src: "https://res.cloudinary.com/dohbigfue/image/upload/05-two-sessions.jpg",
            alt: "Audience attending the seminar across both sessions",
            caption:
              "The seminar was arranged in two sessions due to limited space and strong student interest",
          },
          paragraphs: [
            "Teachers, students, researchers, distinguished academic guests, and KRTC team members joined the programme. Due to strong participation interest and limited space, the seminar was conducted in two separate sessions. The discussion created an academic platform for examining how Bangladesh's science education system can better connect classroom knowledge with practical training, research methods, technical skill development, and development-oriented scientific work.",
          ],
        },
        {
          kind: "krtc-model",
          heading: "KRTC's integrated institutional model",
          image: {
            src: "https://res.cloudinary.com/dohbigfue/image/upload/06-krtc-model.jpg",
            alt: "Slide showing KRTC's integrated institutional model",
            caption:
              "KRTC's model connects academic learning, laboratory practice, research engagement, and capacity development",
          },
          paragraphs: [
            "As a possible institutional response, KRTC presented its integrated institutional model for applied STEM education in developing-country contexts, with special relevance to Bangladesh. The model connects academic learning, laboratory-based practice, research engagement, institutional mentoring, capacity development, and community-oriented scientific activities — a decentralised and integrated approach designed to address the gap between theoretical education and practical scientific competence.",
            "The guests also appreciated KRTC's broader capacity-building initiative. They recognised the value of connecting students, teachers, researchers, professionals, regional academic teams, and community-based activities within one institutional structure — linking academic preparation, applied and laboratory-based learning, research exposure, industry-relevant training, and community engagement.",
          ],
        },
        {
          kind: "team-northzone",
          heading: "KRTC North Zone team",
          image: {
            src: "https://res.cloudinary.com/dohbigfue/image/upload/07-northzone-team.jpg",
            alt: "KRTC North Zone team supporting regional academic coordination",
            caption:
              "KRTC North Zone team supporting regional academic coordination",
          },
          paragraphs: [
            "KRTC's regional academic network was also represented through its Rangpur / North Zone team, with Md. Mahmudul Hasan Abir Mia serving as North Zone Advisor at Begum Rokeya University, Rangpur. The Rangpur team supported the seminar's local coordination and student engagement throughout the day.",
          ],
        },
        {
          kind: "team-project",
          heading: "Project support team",
          image: {
            src: "https://res.cloudinary.com/dohbigfue/image/upload/08-project-team.jpg",
            alt: "Project and advisory team members at the seminar",
            caption:
              "Project-support team contributing to institutional development and capacity building",
          },
          paragraphs: [
            "The organising and project-support team included Nazmul Haque Mitun, Department Instructor; Md. Omar Faruque, Advisor — Sustainability and Income; Md. Abdul Mojid, Managing Director, KRTC; and Mokter Hossain, Project Lawyer. Their involvement reflected the multidisciplinary support structure behind KRTC's applied science education, institutional development, and capacity-building work.",
          ],
        },
        {
          kind: "closing",
          heading: "Open academic dialogue",
          image: {
            src: "https://res.cloudinary.com/dohbigfue/image/upload/09-closing-qa.jpg",
            alt: "Open Q&A and discussion with students, teachers, and KRTC representatives",
            caption:
              "Open academic dialogue with students, teachers, and KRTC representatives",
          },
          paragraphs: [
            "At the same time, the discussion remained academically balanced. Participants noted that this type of model should develop through long-term planning, quality control, pilot training, student feedback, research-based assessment, and cooperation with universities, development organisations, research institutions, industry professionals, and policy-focused bodies. They recommended that KRTC continue this initiative through regular seminars, teacher engagement, curriculum dialogue, student training, regional coordination, and institutional collaboration.",
            "The seminar also highlighted KRTC's planned pathways for secondary-level students, undergraduate and master's applicants, PhD candidates, recent graduates, and professionals. The proposed activities include merit-based scholarship opportunities, affordable training, support for disadvantaged students, laboratory skill development, environmental awareness, student volunteer programmes, and community healthcare outreach.",
            "Through this first seminar, KRTC opened an academic discussion on how decentralised and integrated training institutions can support applied science education in Bangladesh. The event concluded with a call for collaboration among universities, development organisations, academic scholars, industry professionals, and policy-focused institutions to strengthen practical science education, research culture, and technical capacity in the country.",
          ],
        },
      ],
      distinguishedGuests: [
        {
          name: "Professor Dr. Md. Showkat Ali",
          role: "Vice Chancellor, Begum Rokeya University, Rangpur",
        },
        {
          name: "Dr. Abu Reza Md. Towfiqul Islam",
          role: "Professor, Department of Disaster Science and Management, BRUR",
        },
        {
          name: "Dr. Md. Abdul Latif",
          role: "Associate Professor, Department of Chemistry, BRUR",
        },
        {
          name: "Md. Mostafizur Rahman",
          role: "Associate Professor, Department of Geography and Environmental Science, BRUR",
        },
      ],
      organisingTeam: [
        {
          name: "Md. Zakaria Hossain",
          role: "Founder & Chairman, KRTC — Coordinator",
          teamSlug: "zakaria-hossain",
        },
        {
          name: "Dr. Dilip Kumar Sarkar",
          role: "Associate Professor, ACCE, University of Rajshahi — Guide",
          teamSlug: "dilip-kumar-sarkar",
        },
        {
          name: "Dr. Shah Md. Shahan Shahriar",
          role: "Associate Professor, ACCE, University of Rajshahi — Guide",
          teamSlug: "sha-md-shahan-shahriar",
        },
        {
          name: "Md. Mahmudul Hasan Abir Mia",
          role: "North Zone Advisor, Begum Rokeya University, Rangpur",
          teamSlug: "mahmudul-hasan-abir",
        },
        {
          name: "Nazmul Haque Mitun",
          role: "Department Instructor",
          teamSlug: "nazmul-haque-mitun",
        },
        {
          name: "Md. Omar Faruque",
          role: "Advisor — Sustainability and Income",
          teamSlug: "omar-faruque",
        },
        {
          name: "Md. Abdul Mojid",
          role: "Managing Director, KRTC",
          teamSlug: "md-abdul-mojid",
        },
        {
          name: "Mokter Hossain",
          role: "Project Lawyer",
        },
      ],
      gallery: [
        {
          src: "https://res.cloudinary.com/dohbigfue/image/upload/gallery-01.jpg",
          alt: "Seminar moment — presentation",
        },
        {
          src: "https://res.cloudinary.com/dohbigfue/image/upload/gallery-02.jpg",
          alt: "Seminar moment — discussion",
        },
        {
          src: "https://res.cloudinary.com/dohbigfue/image/upload/gallery-03.jpg",
          alt: "Seminar moment — guests",
        },
        {
          src: "https://res.cloudinary.com/dohbigfue/image/upload/gallery-04.jpg",
          alt: "Seminar moment — students",
        },
        {
          src: "https://res.cloudinary.com/dohbigfue/image/upload/gallery-05.jpg",
          alt: "Seminar moment — KRTC team",
        },
        {
          src: "https://res.cloudinary.com/dohbigfue/image/upload/gallery-06.jpg",
          alt: "Seminar moment — engagement",
        },
        {
          src: "https://res.cloudinary.com/dohbigfue/image/upload/gallery-07.jpg",
          alt: "Seminar moment — audience",
        },
        {
          src: "https://res.cloudinary.com/dohbigfue/image/upload/gallery-08.jpg",
          alt: "Seminar moment — Q&A",
        },
        {
          src: "https://res.cloudinary.com/dohbigfue/image/upload/gallery-09.jpg",
          alt: "Seminar moment — closing remarks",
        },
        {
          src: "https://res.cloudinary.com/dohbigfue/image/upload/gallery-10.jpg",
          alt: "Seminar moment — group photo",
        },
      ],
    },
  },

  // ==========================================================
  // KRTC Bridging Theory–Practice — Rajshahi (May 2026)
  // ==========================================================
  // Venue confirmed: TSCC, University of Rajshahi.
  // Time/date confirmed by client over WhatsApp on 2 May 2026.
  // Registration auto-closes on 6 May 2026 at 11:59 PM BST.
  {
    slug: "rajshahi",
    title:
      "Bridging the Theory and Practice Gap in Science Education in Bangladesh — Rajshahi",
    tagline:
      "A KRTC volunteer-led seminar at the University of Rajshahi — connecting theory to laboratory, research, and industry practice.",
    description: `This seminar is part of KRTC's volunteer-led outreach to bring the conversation about practical, applied science education directly to students at the University of Rajshahi and surrounding North Zone universities. Participants will hear from researchers, industry professionals, and KRTC's University Coordinators on how to move from textbook understanding to laboratory competence, scholarly research, and industry-ready scientific work.

A certificate of participation, signed by KRTC leadership, will be issued to every attendee after the event.`,
    date: "Friday, 8 May 2026",
    dateISO: "2026-05-08",
    time: "3:45 PM – 5:30 PM (BST)",
    venue:
      "Shahid Shukhranjan Samddar Students Teachers Cultural Center (TSCC), University of Rajshahi",
    venueAddress: "University of Rajshahi, Rajshahi-6205, Bangladesh",
    targetZone: "north",
    audienceUniversities: NORTH_ZONE_UNIVERSITIES,
    audienceNote:
      "Open to undergraduate and postgraduate students from the University of Rajshahi and surrounding North Zone universities, including affiliated National University colleges.",
    agenda: [
      {
        time: "Session 1",
        title: "Why theory alone is not enough",
        description:
          "Framing the gap between conceptual learning and laboratory / industry-ready scientific competence in Bangladesh.",
      },
      {
        time: "Session 2",
        title: "From classroom to laboratory",
        description:
          "Practical pathways into hands-on research, instrumentation training, and applied projects.",
      },
      {
        time: "Session 3",
        title: "Research, scholarships & global pathways",
        description:
          "How undergraduates from North Zone universities can prepare for graduate research, scholarships, and international academic mobility.",
      },
      {
        time: "Session 4",
        title: "Q&A + KRTC University Coordinator network",
        description:
          "Open discussion with KRTC's University Coordinators and Advisor — how to stay connected after the seminar.",
      },
    ],
    speakers: [
      {
        name: "Md Zakaria Hossain",
        role: "Founder & Chairman, KRTC",
        affiliation: "MSc Chemistry Candidate, University of Siegen",
      },
      {
        name: "Md. Mahmudul Hasan Abir Mia",
        role: "North Zone Advisor",
        affiliation: "Begum Rokeya University, Rangpur",
      },
    ],
    whatYoullGet: [
      {
        title: "Certificate of Participation",
        description:
          "A KRTC-signed certificate is issued to every attendee after the event, useful for academic and professional portfolios.",
      },
      {
        title: "Direct connection to KRTC's University Coordinator network",
        description:
          "Meet KRTC's Coordinators and Advisor — your local point of contact for future trainings, research, and opportunities.",
      },
      {
        title: "Practical guidance on the next step",
        description:
          "Concrete pointers on labs, research methods, scholarships, and industry pathways relevant to your field of study.",
      },
    ],
    faq: [
      {
        question: "Who can register for this seminar?",
        answer:
          "Currently undergraduate and postgraduate students of the University of Rajshahi and surrounding North Zone universities — RU, BRUR, HSTU, BSTU, PUST, MBSTU, and affiliated National University colleges in Rajshahi & Rangpur Divisions.",
      },
      {
        question: "Is there any registration fee?",
        answer:
          "No. This seminar is free for all eligible students. Seats are limited, so registration confirms your spot.",
      },
      {
        question: "Will I receive a certificate?",
        answer:
          "Yes. A KRTC-signed Certificate of Participation will be emailed to every attendee after the event. Attendance is verified at the venue.",
      },
      {
        question: "What if my university is not in the dropdown?",
        answer:
          "Choose 'Other NU-affiliated college (North Zone)' if you're from an affiliated college in the surrounding region. If you're from a different zone, please wait — KRTC will host seminars in your region soon.",
      },
      {
        question: "How will I know the final schedule and directions?",
        answer:
          "Date and venue are confirmed: Friday, 8 May 2026, 3:45 PM – 5:30 PM, Shahid Shukhranjan Samddar Students Teachers Cultural Center (TSCC), University of Rajshahi. After registering you will receive a confirmation email with the on-campus location and any last-minute updates.",
      },
    ],
    registrationOpen: true,
    // 7 May 2026, 5:00 PM BST (UTC+6) → 7 May 2026, 11:00 UTC.
    // Extended on 7 May at the client's request — late registrants
    // get a final window on the day before the Friday, 8 May event.
    registrationCloseAt: "2026-05-07T11:00:00.000Z",
    registrationDeadline: "7 May 2026 (5:00 PM BST)",
    fee: "Free",
    certificateNote:
      "A KRTC-signed Certificate of Participation will be emailed to every attendee within 7–10 days after the event.",
    surveyUrl: "https://forms.gle/2Kyx9JXhqrtXYYYy5",
    // Post-event summary documentation. Pre-built as a DRAFT (isPublished
    // is false) — the seminar is on Friday, 8 May 2026, so the recap is
    // not yet live. After the event, flip `isPublished: true`, replace
    // any draft copy that needs tightening, and the recap goes live at
    // /seminar/recap/rajshahi automatically. Photos use the `rajshahi-`
    // filename prefix on Cloudinary (cloud: dohbigfue).
    recap: {
      isPublished: true,
      publishedDate: "8 May 2026",
      publishedDateISO: "2026-05-08",
      intro:
        "KRTC's volunteer-led seminar on bridging the theory–practice gap in science education was held at the University of Rajshahi — bringing together teachers, students, distinguished academic guests, and KRTC's North Zone team for an open conversation on practical scientific competence and applied training.",
      heroImage: {
        src: "https://res.cloudinary.com/dohbigfue/image/upload/rajshahi-01-hero-group.jpg",
        alt: "Group photo of guests, teachers, KRTC team, and students at the Rajshahi seminar",
        caption:
          "KRTC's seminar at the University of Rajshahi — bridging theory and practice in science education",
      },
      sections: [
        {
          kind: "opening",
          heading: "About the seminar",
          image: {
            src: "https://res.cloudinary.com/dohbigfue/image/upload/rajshahi-02-opening.jpg",
            alt: "Md. Zakaria Hossain presenting at the Rajshahi seminar",
            caption:
              "Md. Zakaria Hossain presenting KRTC's integrated institutional model",
          },
          paragraphs: [
            "Kekuleon Research and Training Center (KRTC) organised an academic seminar on \"Bridging the Theory and Practice Gap in Science Education in Bangladesh\" at the University of Rajshahi — held at the Shahid Shukhranjan Samddar Students Teachers Cultural Center (TSCC) on Friday, 8 May 2026.",
            "The seminar was part of KRTC's North Zone academic outreach, designed to bring the conversation about practical, applied science education directly to RU students and the surrounding North Zone academic community.",
            "The programme was coordinated by Md. Zakaria Hossain, Founder and Research Coordinator of KRTC and MSc Chemistry candidate at the University of Siegen, Germany. The initiative was guided by Dr. Dilip Kumar Sarkar and Dr. Shah Md. Shahan Shahriar, Associate Professors at the Department of Applied Chemistry and Chemical Engineering, University of Rajshahi.",
          ],
        },
        {
          kind: "guests",
          heading: "Distinguished academic guests",
          image: {
            src: "https://res.cloudinary.com/dohbigfue/image/upload/rajshahi-03-guests.jpg",
            alt: "Distinguished academic guests at the Rajshahi seminar",
            caption:
              "Faculty and academic guests supporting the KRTC initiative at RU",
          },
          paragraphs: [
            "Senior faculty members from the University of Rajshahi and the surrounding academic community joined the programme. Their presence reinforced the ongoing dialogue between students, faculty, and KRTC's North Zone team on the practical realities of science education in Bangladesh.",
          ],
        },
        {
          kind: "activity",
          heading: "Programme highlights",
          image: {
            src: "https://res.cloudinary.com/dohbigfue/image/upload/rajshahi-04-activity.jpg",
            alt: "Students and teachers during the Rajshahi seminar session",
            caption:
              "Participants engaging with the discussion on practical scientific competence and applied STEM training",
          },
          paragraphs: [
            "The seminar addressed several structural challenges in science education in Bangladesh — including limited laboratory exposure, weak connection between theoretical learning and real-life application, insufficient undergraduate research opportunities, limited scientific mentoring, and barriers to higher education and research careers.",
            "Participants discussed how RU students can prepare for graduate research, scholarship pathways, instrument training, and industry-ready scientific work — connecting classroom knowledge with the laboratory and industry standards expected in regulated applied chemistry settings.",
          ],
        },
        {
          kind: "custom",
          heading: "Key outcomes & takeaways",
          image: {
            src: "https://res.cloudinary.com/dohbigfue/image/upload/rajshahi-05-outcomes.jpg",
            alt: "Open Q&A and discussion at the Rajshahi seminar",
            caption:
              "Open dialogue between students, faculty, and KRTC's leadership",
          },
          paragraphs: [
            "The seminar produced several concrete outcomes that strengthen the connection between RU students and KRTC's broader academic and applied-science network:",
            "• Reinforced Rajshahi as a central node in KRTC's North Zone academic outreach — building on the institutional ties between KRTC's faculty advisors and the University of Rajshahi.",
            "• Direct exposure for RU undergraduate and postgraduate students to KRTC's University Coordinator network and laboratory practice methodology.",
            "• Open dialogue between students, faculty, and KRTC's leadership on bridging classroom learning with applied scientific work — including hands-on research, instrumentation, and industry-grade quality practice.",
            "• Concrete pathways introduced — research methodology preparation, scholarship and graduate-research opportunities, industry-ready skills development, and global academic mobility routes.",
            "• Foundation laid for continued engagement through KRTC's training programmes, follow-up workshops, and ongoing mentoring through the regional Coordinator network.",
            "• Strengthened the regional KRTC network connecting RU, BRUR, HSTU, BSTU, PUST, MBSTU, and partner institutions — reinforcing the decentralised, integrated approach to applied science education in Bangladesh.",
          ],
        },
        {
          kind: "team-project",
          heading: "Organising & project-support team",
          image: {
            src: "https://res.cloudinary.com/dohbigfue/image/upload/rajshahi-06-team.jpg",
            alt: "Project and KRTC team members at the Rajshahi seminar",
            caption:
              "Project-support team contributing to KRTC's institutional development and capacity building",
          },
          paragraphs: [
            "The seminar's organising and project-support team — drawn from KRTC's volunteer-led leadership, faculty advisors, North Zone coordinators, and department instructors — reflects the multidisciplinary collaboration behind KRTC's applied science education and institutional development work.",
          ],
        },
        {
          kind: "closing",
          heading: "Looking ahead",
          image: {
            src: "https://res.cloudinary.com/dohbigfue/image/upload/rajshahi-07-closing.jpg",
            alt: "Closing moments and audience interaction at the Rajshahi seminar",
            caption:
              "Closing remarks and continued engagement with students and faculty",
          },
          paragraphs: [
            "The Rajshahi seminar is part of a three-city KRTC seminar series across the North Zone in May 2026 — following the Pabna seminar on Thursday, 7 May at Pabna University of Science and Technology, and concluding on Saturday, 9 May at Maulana Bhasani Science & Technology University (Multipurpose Building, 2nd Floor).",
            "Beyond this series, KRTC continues to build pathways for secondary-level students, undergraduate and master's applicants, PhD candidates, recent graduates, and professionals — through merit-based scholarship opportunities, affordable training, support for disadvantaged students, laboratory skill development, environmental awareness initiatives, student volunteer programmes, and community healthcare outreach.",
            "Through this seminar at the University of Rajshahi, KRTC reaffirmed its commitment to a decentralised and integrated model of applied STEM education in Bangladesh — and renewed its call for collaboration among universities, research institutions, industry professionals, and policy-focused bodies.",
          ],
        },
      ],
      distinguishedGuests: [],
      organisingTeam: [
        {
          name: "Md. Zakaria Hossain",
          role: "Founder & Research Coordinator, KRTC",
          teamSlug: "zakaria-hossain",
        },
        {
          name: "Dr. Dilip Kumar Sarkar",
          role: "Associate Professor, ACCE, University of Rajshahi — Guide",
          teamSlug: "dilip-kumar-sarkar",
        },
        {
          name: "Dr. Shah Md. Shahan Shahriar",
          role: "Associate Professor, ACCE, University of Rajshahi — Guide",
          teamSlug: "sha-md-shahan-shahriar",
        },
        {
          name: "Md. Mahmudul Hasan Abir Mia",
          role: "North Zone Advisor, Begum Rokeya University, Rangpur",
          teamSlug: "mahmudul-hasan-abir",
        },
        {
          name: "Nazmul Haque Mitun",
          role: "Department Instructor",
          teamSlug: "nazmul-haque-mitun",
        },
        {
          name: "Md. Abdul Mojid",
          role: "Managing Director, KRTC",
          teamSlug: "md-abdul-mojid",
        },
      ],
      gallery: [
        {
          src: "https://res.cloudinary.com/dohbigfue/image/upload/rajshahi-gallery-01.jpg",
          alt: "Rajshahi seminar moment — presentation",
        },
        {
          src: "https://res.cloudinary.com/dohbigfue/image/upload/rajshahi-gallery-02.jpg",
          alt: "Rajshahi seminar moment — discussion",
        },
        {
          src: "https://res.cloudinary.com/dohbigfue/image/upload/rajshahi-gallery-03.jpg",
          alt: "Rajshahi seminar moment — guests",
        },
        {
          src: "https://res.cloudinary.com/dohbigfue/image/upload/rajshahi-gallery-04.jpg",
          alt: "Rajshahi seminar moment — students",
        },
        {
          src: "https://res.cloudinary.com/dohbigfue/image/upload/rajshahi-gallery-05.jpg",
          alt: "Rajshahi seminar moment — KRTC team",
        },
        {
          src: "https://res.cloudinary.com/dohbigfue/image/upload/rajshahi-gallery-06.jpg",
          alt: "Rajshahi seminar moment — engagement",
        },
        {
          src: "https://res.cloudinary.com/dohbigfue/image/upload/rajshahi-gallery-07.jpg",
          alt: "Rajshahi seminar moment — audience",
        },
        {
          src: "https://res.cloudinary.com/dohbigfue/image/upload/rajshahi-gallery-08.jpg",
          alt: "Rajshahi seminar moment — Q&A",
        },
        {
          src: "https://res.cloudinary.com/dohbigfue/image/upload/rajshahi-gallery-09.jpg",
          alt: "Rajshahi seminar moment — closing remarks",
        },
        {
          src: "https://res.cloudinary.com/dohbigfue/image/upload/rajshahi-gallery-10.jpg",
          alt: "Rajshahi seminar moment — group photo",
        },
      ],
    },
  },

  // ==========================================================
  // KRTC Bridging Theory–Practice — Pabna (May 2026)
  // ==========================================================
  // Venue pending — placeholder text shown until confirmed.
  // Date is a working placeholder (Friday after Rajshahi); confirm with
  // client and edit `date`/`dateISO` + `registrationCloseAt`/`-Deadline`.
  {
    slug: "pabna",
    title:
      "Bridging the Theory and Practice Gap in Science Education in Bangladesh — Pabna",
    tagline:
      "A KRTC volunteer-led seminar in Pabna — connecting theory to laboratory, research, and industry practice for PUST and surrounding students.",
    description: `This seminar is part of KRTC's volunteer-led outreach to bring the conversation about practical, applied science education directly to students at Pabna University of Science & Technology and surrounding universities. Participants will hear from researchers, industry professionals, and KRTC's University Coordinators on how to move from textbook understanding to laboratory competence, scholarly research, and industry-ready scientific work.

A certificate of participation, signed by KRTC leadership, will be issued to every attendee after the event.`,
    date: "Thursday, 7 May 2026",
    dateISO: "2026-05-07",
    time: "3:45 PM – 5:30 PM (BST)",
    venue:
      "Exam Centre (3rd floor), Pabna University of Science and Technology",
    venueAddress:
      "Pabna University of Science and Technology, Pabna, Bangladesh",
    targetZone: "north",
    audienceUniversities: NORTH_ZONE_UNIVERSITIES,
    audienceNote:
      "Open to undergraduate and postgraduate students from Pabna University of Science & Technology (PUST) and surrounding North Zone universities, including affiliated National University colleges.",
    agenda: [
      {
        time: "Session 1",
        title: "Why theory alone is not enough",
        description:
          "Framing the gap between conceptual learning and laboratory / industry-ready scientific competence in Bangladesh.",
      },
      {
        time: "Session 2",
        title: "From classroom to laboratory",
        description:
          "Practical pathways into hands-on research, instrumentation training, and applied projects.",
      },
      {
        time: "Session 3",
        title: "Research, scholarships & global pathways",
        description:
          "How undergraduates from North Zone universities can prepare for graduate research, scholarships, and international academic mobility.",
      },
      {
        time: "Session 4",
        title: "Q&A + KRTC University Coordinator network",
        description:
          "Open discussion with KRTC's University Coordinators and Advisor — how to stay connected after the seminar.",
      },
    ],
    speakers: [
      {
        name: "Md Zakaria Hossain",
        role: "Founder & Chairman, KRTC",
        affiliation: "MSc Chemistry Candidate, University of Siegen",
      },
      {
        name: "Md. Mahmudul Hasan Abir Mia",
        role: "North Zone Advisor",
        affiliation: "Begum Rokeya University, Rangpur",
      },
    ],
    whatYoullGet: [
      {
        title: "Certificate of Participation",
        description:
          "A KRTC-signed certificate is issued to every attendee after the event, useful for academic and professional portfolios.",
      },
      {
        title: "Direct connection to KRTC's University Coordinator network",
        description:
          "Meet KRTC's Coordinators and Advisor — your local point of contact for future trainings, research, and opportunities.",
      },
      {
        title: "Practical guidance on the next step",
        description:
          "Concrete pointers on labs, research methods, scholarships, and industry pathways relevant to your field of study.",
      },
    ],
    faq: [
      {
        question: "Who can register for this seminar?",
        answer:
          "Currently undergraduate and postgraduate students of Pabna University of Science & Technology and surrounding North Zone universities — PUST, RU, BRUR, HSTU, BSTU, MBSTU, and affiliated National University colleges in Rajshahi & Rangpur Divisions.",
      },
      {
        question: "Is there any registration fee?",
        answer:
          "No. This seminar is free for all eligible students. Seats are limited, so registration confirms your spot.",
      },
      {
        question: "Will I receive a certificate?",
        answer:
          "Yes. A KRTC-signed Certificate of Participation will be emailed to every attendee after the event. Attendance is verified at the venue.",
      },
      {
        question: "What if my university is not in the dropdown?",
        answer:
          "Choose 'Other NU-affiliated college (North Zone)' if you're from an affiliated college in the surrounding region. If you're from a different zone, please wait — KRTC will host seminars in your region soon.",
      },
      {
        question: "How will I know the final schedule and directions?",
        answer:
          "Date and venue are confirmed: Thursday, 7 May 2026, 3:45 PM – 5:30 PM, Exam Centre (3rd floor), Pabna University of Science and Technology. After registering you will receive a confirmation email with the on-campus location and any last-minute updates.",
      },
    ],
    registrationOpen: true,
    // 7 May 2026, 2:30 AM BST (UTC+6) → 6 May 2026, 20:30 UTC.
    // Deadline extended several times at the client's request:
    // first from 2:00 PM (6 May) to 10:00 PM (6 May), then to
    // 2:30 AM on 7 May to give late registrants a final window
    // before the Thursday, 7 May event.
    registrationCloseAt: "2026-05-06T20:30:00.000Z",
    registrationDeadline: "7 May 2026 (2:30 AM BST)",
    fee: "Free",
    certificateNote:
      "A KRTC-signed Certificate of Participation will be emailed to every attendee within 7–10 days after the event.",
    surveyUrl: "https://forms.gle/2Kyx9JXhqrtXYYYy5",
    // Post-event summary documentation (public-facing). Photos hosted on
    // Cloudinary with the `pabna-` filename prefix. Distinguished guests
    // intentionally left empty — to be filled in once the client confirms
    // the specific PUST faculty who attended.
    recap: {
      isPublished: true,
      publishedDate: "7 May 2026",
      publishedDateISO: "2026-05-07",
      intro:
        "KRTC's volunteer-led seminar on bridging the theory–practice gap in science education was held at Pabna University of Science and Technology — bringing together teachers, students, and KRTC's North Zone team for an open conversation on practical scientific competence and applied training.",
      heroImage: {
        src: "https://res.cloudinary.com/dohbigfue/image/upload/pabna-01-hero-group.jpg",
        alt: "Group photo of guests, teachers, KRTC team, and students at the Pabna seminar",
        caption:
          "KRTC's seminar at Pabna University of Science and Technology — bridging theory and practice in science education",
      },
      sections: [
        {
          kind: "opening",
          heading: "About the seminar",
          image: {
            src: "https://res.cloudinary.com/dohbigfue/image/upload/pabna-02-opening.jpg",
            alt: "Md. Zakaria Hossain presenting at the Pabna seminar",
            caption:
              "Md. Zakaria Hossain presenting KRTC's integrated institutional model",
          },
          paragraphs: [
            "Kekuleon Research and Training Center (KRTC) organised an academic seminar on \"Bridging the Theory and Practice Gap in Science Education in Bangladesh\" at Pabna University of Science and Technology — held at the Exam Centre (3rd Floor) on Thursday, 7 May 2026.",
            "The seminar was part of KRTC's North Zone academic outreach, designed to bring the conversation about practical, applied science education directly to PUST students and the surrounding North Zone academic community.",
            "The programme was coordinated by Md. Zakaria Hossain, Founder and Research Coordinator of KRTC and MSc Chemistry candidate at the University of Siegen, Germany. The initiative was guided by Dr. Dilip Kumar Sarkar and Dr. Shah Md. Shahan Shahriar, Associate Professors at the Department of Applied Chemistry and Chemical Engineering, University of Rajshahi.",
          ],
        },
        {
          kind: "guests",
          heading: "Distinguished academic guests",
          image: {
            src: "https://res.cloudinary.com/dohbigfue/image/upload/pabna-03-guests.jpg",
            alt: "Distinguished academic guests at the Pabna seminar",
            caption:
              "Faculty and academic guests supporting the KRTC initiative at PUST",
          },
          paragraphs: [
            "Senior faculty members from Pabna University of Science and Technology and the surrounding academic community joined the programme. Their presence reinforced the ongoing dialogue between students, faculty, and KRTC's North Zone team on the practical realities of science education in Bangladesh.",
          ],
        },
        {
          kind: "activity",
          heading: "Programme highlights",
          image: {
            src: "https://res.cloudinary.com/dohbigfue/image/upload/pabna-04-activity.jpg",
            alt: "Students and teachers during the Pabna seminar session",
            caption:
              "Participants engaging with the discussion on practical scientific competence and applied STEM training",
          },
          paragraphs: [
            "The seminar addressed several structural challenges in science education in Bangladesh — including limited laboratory exposure, weak connection between theoretical learning and real-life application, insufficient undergraduate research opportunities, limited scientific mentoring, and barriers to higher education and research careers.",
            "Participants discussed how PUST students can prepare for graduate research, scholarship pathways, instrument training, and industry-ready scientific work — connecting classroom knowledge with the laboratory and industry standards expected in regulated applied chemistry settings.",
          ],
        },
        {
          kind: "custom",
          heading: "Key outcomes & takeaways",
          image: {
            src: "https://res.cloudinary.com/dohbigfue/image/upload/pabna-05-outcomes.jpg",
            alt: "Open Q&A and discussion at the Pabna seminar",
            caption:
              "Open dialogue between students, faculty, and KRTC's leadership",
          },
          paragraphs: [
            "The seminar produced several concrete outcomes that strengthen the connection between PUST students and KRTC's broader academic and applied-science network:",
            "• Established Pabna as a key node in KRTC's North Zone academic outreach — alongside Rajshahi, Rangpur, and the wider regional network.",
            "• Direct exposure for PUST undergraduate and postgraduate students to KRTC's University Coordinator network and laboratory practice methodology.",
            "• Open dialogue between students, faculty, and KRTC's leadership on bridging classroom learning with applied scientific work — including hands-on research, instrumentation, and industry-grade quality practice.",
            "• Concrete pathways introduced — research methodology preparation, scholarship and graduate-research opportunities, industry-ready skills development, and global academic mobility routes.",
            "• Foundation laid for continued engagement through KRTC's training programmes, follow-up workshops, and ongoing mentoring through the regional Coordinator network.",
            "• Strengthened the regional KRTC network connecting RU, BRUR, HSTU, BSTU, PUST, and partner institutions — reinforcing the decentralised, integrated approach to applied science education in Bangladesh.",
          ],
        },
        {
          kind: "team-project",
          heading: "Organising & project-support team",
          image: {
            src: "https://res.cloudinary.com/dohbigfue/image/upload/pabna-06-team.jpg",
            alt: "Project and KRTC team members at the Pabna seminar",
            caption:
              "Project-support team contributing to KRTC's institutional development and capacity building",
          },
          paragraphs: [
            "The seminar's organising and project-support team — drawn from KRTC's volunteer-led leadership, faculty advisors, North Zone coordinators, and department instructors — reflects the multidisciplinary collaboration behind KRTC's applied science education and institutional development work.",
          ],
        },
        {
          kind: "closing",
          heading: "Looking ahead",
          image: {
            src: "https://res.cloudinary.com/dohbigfue/image/upload/pabna-07-closing.jpg",
            alt: "Closing moments and audience interaction at the Pabna seminar",
            caption:
              "Closing remarks and continued engagement with students and faculty",
          },
          paragraphs: [
            "The Pabna seminar is part of a three-city KRTC seminar series across the North Zone in May 2026 — continuing on Friday, 8 May at the University of Rajshahi (TSCC) and concluding on Saturday, 9 May at Maulana Bhasani Science & Technology University (Multipurpose Building, 2nd Floor).",
            "Beyond this series, KRTC continues to build pathways for secondary-level students, undergraduate and master's applicants, PhD candidates, recent graduates, and professionals — through merit-based scholarship opportunities, affordable training, support for disadvantaged students, laboratory skill development, environmental awareness initiatives, student volunteer programmes, and community healthcare outreach.",
            "Through this seminar at PUST, KRTC reaffirmed its commitment to a decentralised and integrated model of applied STEM education in Bangladesh — and renewed its call for collaboration among universities, research institutions, industry professionals, and policy-focused bodies.",
          ],
        },
      ],
      distinguishedGuests: [],
      organisingTeam: [
        {
          name: "Md. Zakaria Hossain",
          role: "Founder & Research Coordinator, KRTC",
          teamSlug: "zakaria-hossain",
        },
        {
          name: "Dr. Dilip Kumar Sarkar",
          role: "Associate Professor, ACCE, University of Rajshahi — Guide",
          teamSlug: "dilip-kumar-sarkar",
        },
        {
          name: "Dr. Shah Md. Shahan Shahriar",
          role: "Associate Professor, ACCE, University of Rajshahi — Guide",
          teamSlug: "sha-md-shahan-shahriar",
        },
        {
          name: "Md. Mahmudul Hasan Abir Mia",
          role: "North Zone Advisor, Begum Rokeya University, Rangpur",
          teamSlug: "mahmudul-hasan-abir",
        },
        {
          name: "Nazmul Haque Mitun",
          role: "Department Instructor",
          teamSlug: "nazmul-haque-mitun",
        },
        {
          name: "Md. Abdul Mojid",
          role: "Managing Director, KRTC",
          teamSlug: "md-abdul-mojid",
        },
      ],
      gallery: [
        {
          src: "https://res.cloudinary.com/dohbigfue/image/upload/pabna-gallery-01.jpg",
          alt: "Pabna seminar moment — presentation",
        },
        {
          src: "https://res.cloudinary.com/dohbigfue/image/upload/pabna-gallery-02.jpg",
          alt: "Pabna seminar moment — discussion",
        },
        {
          src: "https://res.cloudinary.com/dohbigfue/image/upload/pabna-gallery-03.jpg",
          alt: "Pabna seminar moment — guests",
        },
        {
          src: "https://res.cloudinary.com/dohbigfue/image/upload/pabna-gallery-04.jpg",
          alt: "Pabna seminar moment — students",
        },
        {
          src: "https://res.cloudinary.com/dohbigfue/image/upload/pabna-gallery-05.jpg",
          alt: "Pabna seminar moment — KRTC team",
        },
        {
          src: "https://res.cloudinary.com/dohbigfue/image/upload/pabna-gallery-06.jpg",
          alt: "Pabna seminar moment — engagement",
        },
        {
          src: "https://res.cloudinary.com/dohbigfue/image/upload/pabna-gallery-07.jpg",
          alt: "Pabna seminar moment — audience",
        },
        {
          src: "https://res.cloudinary.com/dohbigfue/image/upload/pabna-gallery-08.jpg",
          alt: "Pabna seminar moment — Q&A",
        },
        {
          src: "https://res.cloudinary.com/dohbigfue/image/upload/pabna-gallery-09.jpg",
          alt: "Pabna seminar moment — closing remarks",
        },
        {
          src: "https://res.cloudinary.com/dohbigfue/image/upload/pabna-gallery-10.jpg",
          alt: "Pabna seminar moment — group photo",
        },
      ],
    },
  },

  // ==========================================================
  // KRTC Bridging Theory–Practice — MBSTU (May 2026)
  // ==========================================================
  // Venue pending — placeholder text shown until confirmed.
  // Date placeholder (Saturday after Pabna); confirm with client.
  {
    slug: "mbstu",
    title:
      "Bridging the Theory and Practice Gap in Science Education in Bangladesh — MBSTU",
    tagline:
      "A KRTC volunteer-led seminar at Mawlana Bhashani Science & Technology University — connecting theory to laboratory, research, and industry practice.",
    description: `This seminar is part of KRTC's volunteer-led outreach to bring the conversation about practical, applied science education directly to students at Mawlana Bhashani Science & Technology University and surrounding universities. Participants will hear from researchers, industry professionals, and KRTC's University Coordinators on how to move from textbook understanding to laboratory competence, scholarly research, and industry-ready scientific work.

A certificate of participation, signed by KRTC leadership, will be issued to every attendee after the event.`,
    date: "Saturday, 9 May 2026",
    dateISO: "2026-05-09",
    time: "3:45 PM – 5:30 PM (BST)",
    venue:
      "Multipurpose Building (2nd Floor), Mawlana Bhashani Science & Technology University",
    venueAddress:
      "Mawlana Bhashani Science & Technology University, Tangail, Bangladesh",
    targetZone: "north",
    audienceUniversities: NORTH_ZONE_UNIVERSITIES,
    audienceNote:
      "Open to undergraduate and postgraduate students from Mawlana Bhashani Science & Technology University (MBSTU) and surrounding universities, including affiliated National University colleges.",
    agenda: [
      {
        time: "Session 1",
        title: "Why theory alone is not enough",
        description:
          "Framing the gap between conceptual learning and laboratory / industry-ready scientific competence in Bangladesh.",
      },
      {
        time: "Session 2",
        title: "From classroom to laboratory",
        description:
          "Practical pathways into hands-on research, instrumentation training, and applied projects.",
      },
      {
        time: "Session 3",
        title: "Research, scholarships & global pathways",
        description:
          "How undergraduates can prepare for graduate research, scholarships, and international academic mobility.",
      },
      {
        time: "Session 4",
        title: "Q&A + KRTC University Coordinator network",
        description:
          "Open discussion with KRTC's University Coordinators and Advisor — how to stay connected after the seminar.",
      },
    ],
    speakers: [
      {
        name: "Md Zakaria Hossain",
        role: "Founder & Chairman, KRTC",
        affiliation: "MSc Chemistry Candidate, University of Siegen",
      },
      {
        name: "Md. Mahmudul Hasan Abir Mia",
        role: "North Zone Advisor",
        affiliation: "Begum Rokeya University, Rangpur",
      },
    ],
    whatYoullGet: [
      {
        title: "Certificate of Participation",
        description:
          "A KRTC-signed certificate is issued to every attendee after the event, useful for academic and professional portfolios.",
      },
      {
        title: "Direct connection to KRTC's University Coordinator network",
        description:
          "Meet KRTC's Coordinators and Advisor — your local point of contact for future trainings, research, and opportunities.",
      },
      {
        title: "Practical guidance on the next step",
        description:
          "Concrete pointers on labs, research methods, scholarships, and industry pathways relevant to your field of study.",
      },
    ],
    faq: [
      {
        question: "Who can register for this seminar?",
        answer:
          "Currently undergraduate and postgraduate students of MBSTU and surrounding universities — MBSTU, RU, BRUR, HSTU, BSTU, PUST, and affiliated National University colleges.",
      },
      {
        question: "Is there any registration fee?",
        answer:
          "No. This seminar is free for all eligible students. Seats are limited, so registration confirms your spot.",
      },
      {
        question: "Will I receive a certificate?",
        answer:
          "Yes. A KRTC-signed Certificate of Participation will be emailed to every attendee after the event. Attendance is verified at the venue.",
      },
      {
        question: "What if my university is not in the dropdown?",
        answer:
          "Choose 'Other NU-affiliated college (North Zone)' if you're from an affiliated college. If you're from a different zone entirely, please wait — KRTC will host seminars in your region soon.",
      },
      {
        question: "How will I know the final schedule and directions?",
        answer:
          "Date and venue are confirmed: Saturday, 9 May 2026, 3:45 PM – 5:30 PM, Multipurpose Building (2nd Floor), Mawlana Bhashani Science & Technology University. After registering you will receive a confirmation email with the on-campus location and any last-minute updates.",
      },
    ],
    registrationOpen: true,
    // 8 May 2026, 2:00 PM BST (UTC+6) → 8 May 2026, 08:00 UTC. MBSTU
    // closes a day before the Saturday, 9 May event so the venue
    // capacity at the Multipurpose Building can be finalised on time.
    registrationCloseAt: "2026-05-08T08:00:00.000Z",
    registrationDeadline: "8 May 2026 (2:00 PM BST)",
    fee: "Free",
    certificateNote:
      "A KRTC-signed Certificate of Participation will be emailed to every attendee within 7–10 days after the event.",
    surveyUrl: "https://forms.gle/2Kyx9JXhqrtXYYYy5",
    // Post-event summary documentation. Pre-built as a DRAFT
    // (isPublished is false) — the seminar is on Saturday, 9 May 2026,
    // so the recap is not yet live. After the event, flip
    // `isPublished: true`, replace any draft copy that needs tightening,
    // and the recap goes live at /seminar/recap/mbstu automatically.
    // Photos use the `mbstu-` filename prefix on Cloudinary (cloud:
    // dohbigfue).
    recap: {
      isPublished: true,
      publishedDate: "9 May 2026",
      publishedDateISO: "2026-05-09",
      intro:
        "KRTC's volunteer-led seminar on bridging the theory–practice gap in science education was held at Maulana Bhasani Science & Technology University — bringing together teachers, students, distinguished academic guests, and KRTC's North Zone team for an open conversation on practical scientific competence and applied training.",
      heroImage: {
        src: "https://res.cloudinary.com/dohbigfue/image/upload/mbstu-01-hero-group.jpg",
        alt: "Group photo of guests, teachers, KRTC team, and students at the MBSTU seminar",
        caption:
          "KRTC's seminar at Maulana Bhasani Science & Technology University — bridging theory and practice in science education",
      },
      sections: [
        {
          kind: "opening",
          heading: "About the seminar",
          image: {
            src: "https://res.cloudinary.com/dohbigfue/image/upload/mbstu-02-opening.jpg",
            alt: "Md. Zakaria Hossain presenting at the MBSTU seminar",
            caption:
              "Md. Zakaria Hossain presenting KRTC's integrated institutional model",
          },
          paragraphs: [
            "Kekuleon Research and Training Center (KRTC) organised an academic seminar on \"Bridging the Theory and Practice Gap in Science Education in Bangladesh\" at Maulana Bhasani Science & Technology University — held at the Multipurpose Building (2nd Floor) on Saturday, 9 May 2026.",
            "The seminar concluded a three-city KRTC outreach across Bangladesh's North Zone in May 2026, designed to bring the conversation about practical, applied science education directly to MBSTU students and the surrounding academic community.",
            "The programme was coordinated by Md. Zakaria Hossain, Founder and Research Coordinator of KRTC and MSc Chemistry candidate at the University of Siegen, Germany. The initiative was guided by Dr. Dilip Kumar Sarkar and Dr. Shah Md. Shahan Shahriar, Associate Professors at the Department of Applied Chemistry and Chemical Engineering, University of Rajshahi.",
          ],
        },
        {
          kind: "guests",
          heading: "Distinguished academic guests",
          image: {
            src: "https://res.cloudinary.com/dohbigfue/image/upload/mbstu-03-guests.jpg",
            alt: "Distinguished academic guests at the MBSTU seminar",
            caption:
              "Faculty and academic guests supporting the KRTC initiative at MBSTU",
          },
          paragraphs: [
            "Senior faculty members from Maulana Bhasani Science & Technology University and the surrounding academic community joined the programme. Their presence reinforced the ongoing dialogue between students, faculty, and KRTC's leadership on the practical realities of science education in Bangladesh.",
          ],
        },
        {
          kind: "activity",
          heading: "Programme highlights",
          image: {
            src: "https://res.cloudinary.com/dohbigfue/image/upload/mbstu-04-activity.jpg",
            alt: "Students and teachers during the MBSTU seminar session",
            caption:
              "Participants engaging with the discussion on practical scientific competence and applied STEM training",
          },
          paragraphs: [
            "The seminar addressed several structural challenges in science education in Bangladesh — including limited laboratory exposure, weak connection between theoretical learning and real-life application, insufficient undergraduate research opportunities, limited scientific mentoring, and barriers to higher education and research careers.",
            "Participants discussed how MBSTU students can prepare for graduate research, scholarship pathways, instrument training, and industry-ready scientific work — connecting classroom knowledge with the laboratory and industry standards expected in regulated applied chemistry settings.",
          ],
        },
        {
          kind: "custom",
          heading: "Key outcomes & takeaways",
          image: {
            src: "https://res.cloudinary.com/dohbigfue/image/upload/mbstu-05-outcomes.jpg",
            alt: "Open Q&A and discussion at the MBSTU seminar",
            caption:
              "Open dialogue between students, faculty, and KRTC's leadership",
          },
          paragraphs: [
            "The seminar produced several concrete outcomes that strengthen the connection between MBSTU students and KRTC's broader academic and applied-science network:",
            "• Extended KRTC's outreach into Tangail and the wider Mymensingh / Dhaka academic region — broadening the network beyond the traditional Rajshahi–Rangpur axis.",
            "• Direct exposure for MBSTU undergraduate and postgraduate students to KRTC's University Coordinator network and laboratory practice methodology.",
            "• Open dialogue between students, faculty, and KRTC's leadership on bridging classroom learning with applied scientific work — including hands-on research, instrumentation, and industry-grade quality practice.",
            "• Concrete pathways introduced — research methodology preparation, scholarship and graduate-research opportunities, industry-ready skills development, and global academic mobility routes.",
            "• Foundation laid for continued engagement through KRTC's training programmes, follow-up workshops, and ongoing mentoring through the Coordinator network.",
            "• Strengthened the cross-regional KRTC network connecting MBSTU with RU, BRUR, HSTU, BSTU, PUST, and partner institutions — reinforcing the decentralised, integrated approach to applied science education in Bangladesh.",
          ],
        },
        {
          kind: "team-project",
          heading: "Organising & project-support team",
          image: {
            src: "https://res.cloudinary.com/dohbigfue/image/upload/mbstu-06-team.jpg",
            alt: "Project and KRTC team members at the MBSTU seminar",
            caption:
              "Project-support team contributing to KRTC's institutional development and capacity building",
          },
          paragraphs: [
            "The seminar's organising and project-support team — drawn from KRTC's volunteer-led leadership, faculty advisors, regional coordinators, and department instructors — reflects the multidisciplinary collaboration behind KRTC's applied science education and institutional development work.",
          ],
        },
        {
          kind: "closing",
          heading: "Looking ahead",
          image: {
            src: "https://res.cloudinary.com/dohbigfue/image/upload/mbstu-07-closing.jpg",
            alt: "Closing moments and audience interaction at the MBSTU seminar",
            caption:
              "Closing remarks and continued engagement with students and faculty",
          },
          paragraphs: [
            "The MBSTU seminar concluded KRTC's three-city seminar series across the North Zone in May 2026 — following the seminars at Pabna University of Science and Technology (Thursday, 7 May) and the University of Rajshahi (Friday, 8 May).",
            "Beyond this series, KRTC continues to build pathways for secondary-level students, undergraduate and master's applicants, PhD candidates, recent graduates, and professionals — through merit-based scholarship opportunities, affordable training, support for disadvantaged students, laboratory skill development, environmental awareness initiatives, student volunteer programmes, and community healthcare outreach.",
            "Through this seminar at MBSTU, KRTC reaffirmed its commitment to a decentralised and integrated model of applied STEM education in Bangladesh — and renewed its call for collaboration among universities, research institutions, industry professionals, and policy-focused bodies.",
          ],
        },
      ],
      distinguishedGuests: [],
      organisingTeam: [
        {
          name: "Md. Zakaria Hossain",
          role: "Founder & Research Coordinator, KRTC",
          teamSlug: "zakaria-hossain",
        },
        {
          name: "Dr. Dilip Kumar Sarkar",
          role: "Associate Professor, ACCE, University of Rajshahi — Guide",
          teamSlug: "dilip-kumar-sarkar",
        },
        {
          name: "Dr. Shah Md. Shahan Shahriar",
          role: "Associate Professor, ACCE, University of Rajshahi — Guide",
          teamSlug: "sha-md-shahan-shahriar",
        },
        {
          name: "Md. Mahmudul Hasan Abir Mia",
          role: "North Zone Advisor, Begum Rokeya University, Rangpur",
          teamSlug: "mahmudul-hasan-abir",
        },
        {
          name: "Nazmul Haque Mitun",
          role: "Department Instructor",
          teamSlug: "nazmul-haque-mitun",
        },
        {
          name: "Md. Abdul Mojid",
          role: "Managing Director, KRTC",
          teamSlug: "md-abdul-mojid",
        },
      ],
      gallery: [
        {
          src: "https://res.cloudinary.com/dohbigfue/image/upload/mbstu-gallery-01.jpg",
          alt: "MBSTU seminar moment — presentation",
        },
        {
          src: "https://res.cloudinary.com/dohbigfue/image/upload/mbstu-gallery-02.jpg",
          alt: "MBSTU seminar moment — discussion",
        },
        {
          src: "https://res.cloudinary.com/dohbigfue/image/upload/mbstu-gallery-03.jpg",
          alt: "MBSTU seminar moment — guests",
        },
        {
          src: "https://res.cloudinary.com/dohbigfue/image/upload/mbstu-gallery-04.jpg",
          alt: "MBSTU seminar moment — students",
        },
        {
          src: "https://res.cloudinary.com/dohbigfue/image/upload/mbstu-gallery-05.jpg",
          alt: "MBSTU seminar moment — KRTC team",
        },
        {
          src: "https://res.cloudinary.com/dohbigfue/image/upload/mbstu-gallery-06.jpg",
          alt: "MBSTU seminar moment — engagement",
        },
        {
          src: "https://res.cloudinary.com/dohbigfue/image/upload/mbstu-gallery-07.jpg",
          alt: "MBSTU seminar moment — audience",
        },
        {
          src: "https://res.cloudinary.com/dohbigfue/image/upload/mbstu-gallery-08.jpg",
          alt: "MBSTU seminar moment — Q&A",
        },
        {
          src: "https://res.cloudinary.com/dohbigfue/image/upload/mbstu-gallery-09.jpg",
          alt: "MBSTU seminar moment — closing remarks",
        },
        {
          src: "https://res.cloudinary.com/dohbigfue/image/upload/mbstu-gallery-10.jpg",
          alt: "MBSTU seminar moment — group photo",
        },
      ],
    },
  },

  // ==========================================================
  // Chattogram (East Zone) — placeholder entry.
  // Date, time, venue, and registration deadline are all "To be
  // announced" until confirmed. `dateISO` is set far in the future so
  // `isSeminarPast()` returns false and the seminar surfaces in the
  // "upcoming" list. Once the event is confirmed, replace the TBA
  // strings, set `dateISO`/`registrationCloseAt`/`registrationDeadline`
  // properly, and add a `venueAddress` + `mapEmbedUrl`.
  // ==========================================================
  {
    slug: "chattogram",
    title:
      "Bridging the Theory and Practice Gap in Science Education in Bangladesh — Chattogram",
    tagline:
      "A KRTC volunteer-led seminar at the University of Chittagong — connecting theory to laboratory, research, and industry practice for CU and surrounding East Zone students.",
    description: `This seminar is part of KRTC's volunteer-led outreach to bring the conversation about practical, applied science education directly to students at the University of Chittagong and surrounding East Zone universities. Participants will hear from researchers, industry professionals, and KRTC's University Coordinators on how to move from textbook understanding to laboratory competence, scholarly research, and industry-ready scientific work.

A certificate of participation, signed by KRTC leadership, will be issued to every attendee after the event.`,
    date: "Saturday, 16 May 2026",
    dateISO: "2026-05-16",
    time: "3:30 PM – 5:30 PM (BST)",
    venue: "BBA Faculty's Auditorium, University of Chittagong",
    venueAddress: "University of Chittagong, Chattogram, Bangladesh",
    targetZone: "east",
    audienceUniversities: EAST_ZONE_UNIVERSITIES,
    audienceNote:
      "Open to undergraduate and postgraduate students from the University of Chittagong (CU) and surrounding East Zone universities (Chattogram & Sylhet Divisions), including affiliated National University colleges.",
    agenda: [
      {
        time: "Session 1",
        title: "Why theory alone is not enough",
        description:
          "Framing the gap between conceptual learning and laboratory / industry-ready scientific competence in Bangladesh.",
      },
      {
        time: "Session 2",
        title: "From classroom to laboratory",
        description:
          "Practical pathways into hands-on research, instrumentation training, and applied projects.",
      },
      {
        time: "Session 3",
        title: "Research, scholarships & global pathways",
        description:
          "How undergraduates from East Zone universities can prepare for graduate research, scholarships, and international academic mobility.",
      },
      {
        time: "Session 4",
        title: "Q&A + KRTC University Coordinator network",
        description:
          "Open discussion with KRTC's University Coordinators and Advisor — how to stay connected after the seminar.",
      },
    ],
    speakers: [
      {
        name: "Md Zakaria Hossain",
        role: "Founder & Chairman, KRTC",
        affiliation: "MSc Chemistry Candidate, University of Siegen",
      },
    ],
    whatYoullGet: [
      {
        title: "Certificate of Participation",
        description:
          "A KRTC-signed certificate is issued to every attendee after the event, useful for academic and professional portfolios.",
      },
      {
        title: "Direct connection to KRTC's University Coordinator network",
        description:
          "Meet KRTC's Coordinators and Advisor — your local point of contact for future trainings, research, and opportunities.",
      },
      {
        title: "Practical guidance on the next step",
        description:
          "Concrete pointers on labs, research methods, scholarships, and industry pathways relevant to your field of study.",
      },
    ],
    faq: [
      {
        question: "Who can register for this seminar?",
        answer:
          "Undergraduate and postgraduate students from the University of Chittagong (CU) and surrounding East Zone universities — CUET, SUST, Comilla University, Noakhali Science & Technology University, and affiliated National University colleges in Chattogram & Sylhet Divisions.",
      },
      {
        question: "Is there any registration fee?",
        answer:
          "No. This seminar is free for all eligible students. Seats are limited, so registration confirms your spot.",
      },
      {
        question: "Will I receive a certificate?",
        answer:
          "Yes. A KRTC-signed Certificate of Participation will be emailed to every attendee after the event. Attendance is verified at the venue.",
      },
      {
        question: "What if my university is not in the dropdown?",
        answer:
          "Choose 'Other NU-affiliated college (East Zone)' if you're from an affiliated college in the surrounding region. If you're from a different zone, please wait — KRTC will host seminars in your region soon.",
      },
      {
        question: "When and where exactly is the seminar?",
        answer:
          "Date and venue are confirmed: Saturday, 16 May 2026, 3:30 PM – 5:30 PM, BBA Faculty's Auditorium, University of Chittagong. After registering you will receive a confirmation email with the on-campus location and any last-minute updates.",
      },
    ],
    // Event already happened (16 May 2026) — explicitly close registration so
    // the seminar drops out of the /seminar hub's "upcoming" list. No recap is
    // attached yet, so the seminar is intentionally hidden from the "Recaps
    // and photos" section too.
    registrationOpen: false,
    // 15 May 2026, 3:00 PM BST (UTC+6) → 15 May 2026, 09:00 UTC.
    registrationCloseAt: "2026-05-15T09:00:00.000Z",
    registrationDeadline: "15 May 2026 (3:00 PM BST)",
    fee: "Free",
  },

  // ==========================================================
  // Jashore (Southwest Zone) — placeholder entry hosted at JUST.
  // Same TBA pattern as the Chattogram entry above: replace the
  // "To be announced" strings and the placeholder `dateISO` once the
  // event is confirmed.
  // ==========================================================
  {
    slug: "jashore-just",
    title:
      "Bridging the Theory and Practice Gap in Science Education in Bangladesh — Jashore",
    tagline:
      "A KRTC volunteer-led seminar at Jashore University of Science & Technology (JUST) — connecting theory to laboratory, research, and industry practice for Southwest Zone students.",
    description: `This seminar is part of KRTC's volunteer-led outreach to bring the conversation about practical, applied science education directly to students at Jashore University of Science & Technology and surrounding Southwest Zone universities. Participants will hear from researchers, industry professionals, and KRTC's University Coordinators on how to move from textbook understanding to laboratory competence, scholarly research, and industry-ready scientific work.

A certificate of participation, signed by KRTC leadership, will be issued to every attendee after the event.`,
    date: "Tuesday, 19 May 2026",
    dateISO: "2026-05-19",
    time: "3:30 PM – 5:30 PM (BST)",
    venue: "Central Gallery, Jashore University of Science & Technology",
    venueAddress:
      "Jashore University of Science & Technology, Jashore, Bangladesh",
    targetZone: "southwest",
    audienceUniversities: SOUTHWEST_ZONE_UNIVERSITIES,
    audienceNote:
      "Open to undergraduate and postgraduate students from Jashore University of Science & Technology (JUST) and surrounding Southwest Zone universities (Khulna & Barishal Divisions), including affiliated National University colleges.",
    agenda: [
      {
        time: "Session 1",
        title: "Why theory alone is not enough",
        description:
          "Framing the gap between conceptual learning and laboratory / industry-ready scientific competence in Bangladesh.",
      },
      {
        time: "Session 2",
        title: "From classroom to laboratory",
        description:
          "Practical pathways into hands-on research, instrumentation training, and applied projects.",
      },
      {
        time: "Session 3",
        title: "Research, scholarships & global pathways",
        description:
          "How undergraduates from Southwest Zone universities can prepare for graduate research, scholarships, and international academic mobility.",
      },
      {
        time: "Session 4",
        title: "Q&A + KRTC University Coordinator network",
        description:
          "Open discussion with KRTC's University Coordinators and Advisor — how to stay connected after the seminar.",
      },
    ],
    speakers: [
      {
        name: "Md Zakaria Hossain",
        role: "Founder & Chairman, KRTC",
        affiliation: "MSc Chemistry Candidate, University of Siegen",
      },
    ],
    whatYoullGet: [
      {
        title: "Certificate of Participation",
        description:
          "A KRTC-signed certificate is issued to every attendee after the event, useful for academic and professional portfolios.",
      },
      {
        title: "Direct connection to KRTC's University Coordinator network",
        description:
          "Meet KRTC's Coordinators and Advisor — your local point of contact for future trainings, research, and opportunities.",
      },
      {
        title: "Practical guidance on the next step",
        description:
          "Concrete pointers on labs, research methods, scholarships, and industry pathways relevant to your field of study.",
      },
    ],
    faq: [
      {
        question: "Who can register for this seminar?",
        answer:
          "Undergraduate and postgraduate students from Southwest Zone universities — JUST, Khulna University, KUET, Islamic University Kushtia, University of Barishal, Patuakhali Science & Technology University, and affiliated National University colleges in Khulna & Barishal Divisions.",
      },
      {
        question: "Is there any registration fee?",
        answer:
          "No. This seminar is free for all eligible students. Seats are limited, so registration confirms your spot.",
      },
      {
        question: "Will I receive a certificate?",
        answer:
          "Yes. A KRTC-signed Certificate of Participation will be emailed to every attendee after the event. Attendance is verified at the venue.",
      },
      {
        question: "What if my university is not in the dropdown?",
        answer:
          "Choose 'Other NU-affiliated college (Southwest Zone)' if you're from an affiliated college in the surrounding region. If you're from a different zone, please wait — KRTC will host seminars in your region soon.",
      },
      {
        question: "When and where exactly is the seminar?",
        answer:
          "Date and venue are confirmed: Tuesday, 19 May 2026, 3:30 PM – 5:30 PM, Central Gallery, Jashore University of Science & Technology. After registering you will receive a confirmation email with the on-campus location and any last-minute updates.",
      },
    ],
    // Event already happened (19 May 2026) — close registration explicitly
    // so the seminar drops out of the "upcoming" list. The recap below is
    // published, so it surfaces in the /seminar hub's "Recaps and photos"
    // section instead.
    registrationOpen: false,
    // 18 May 2026, 3:00 PM BST (UTC+6) → 18 May 2026, 09:00 UTC.
    registrationCloseAt: "2026-05-18T09:00:00.000Z",
    registrationDeadline: "18 May 2026 (3:00 PM BST)",
    fee: "Free",
    // Recap photos use the `jashore-just-` filename prefix on Cloudinary
    // (cloud: dohbigfue). Replace the placeholder copy below with the final
    // post-event narrative whenever it's ready.
    recap: {
      isPublished: true,
      publishedDate: "19 May 2026",
      publishedDateISO: "2026-05-19",
      intro:
        "KRTC's volunteer-led seminar on bridging the theory–practice gap in science education was held at Jashore University of Science & Technology — bringing together teachers, students, distinguished academic guests, and KRTC's Southwest Zone team for an open conversation on practical scientific competence and applied training.",
      heroImage: {
        src: "https://res.cloudinary.com/dohbigfue/image/upload/jashore-just-01-hero-group.jpg",
        alt: "Group photo of guests, teachers, KRTC team, and students at the Jashore seminar",
        caption:
          "KRTC's seminar at Jashore University of Science & Technology — bridging theory and practice in science education",
      },
      sections: [
        {
          kind: "opening",
          heading: "About the seminar",
          image: {
            src: "https://res.cloudinary.com/dohbigfue/image/upload/jashore-just-02-opening.jpg",
            alt: "Md. Zakaria Hossain presenting at the Jashore seminar",
            caption:
              "Md. Zakaria Hossain presenting KRTC's integrated institutional model",
          },
          paragraphs: [
            "Kekuleon Research and Training Center (KRTC) organised an academic seminar on \"Bridging the Theory and Practice Gap in Science Education in Bangladesh\" at Jashore University of Science & Technology — held at the Central Gallery on Tuesday, 19 May 2026.",
            "The seminar was part of KRTC's Southwest Zone academic outreach, designed to bring the conversation about practical, applied science education directly to JUST students and the surrounding Southwest Zone academic community.",
            "The programme was coordinated by Md. Zakaria Hossain, Founder and Research Coordinator of KRTC and MSc Chemistry candidate at the University of Siegen, Germany.",
          ],
        },
        {
          kind: "guests",
          heading: "Distinguished academic guests",
          image: {
            src: "https://res.cloudinary.com/dohbigfue/image/upload/jashore-just-03-guests.jpg",
            alt: "Distinguished academic guests at the Jashore seminar",
            caption:
              "Faculty and academic guests supporting the KRTC initiative at JUST",
          },
          paragraphs: [
            "Senior faculty members from Jashore University of Science & Technology and the surrounding Southwest Zone academic community joined the programme. Their presence reinforced the ongoing dialogue between students, faculty, and KRTC's Southwest Zone team on the practical realities of science education in Bangladesh.",
          ],
        },
        {
          kind: "activity",
          heading: "Programme highlights",
          image: {
            src: "https://res.cloudinary.com/dohbigfue/image/upload/jashore-just-04-activity.jpg",
            alt: "Students and teachers during the Jashore seminar session",
            caption:
              "Participants engaging with the discussion on practical scientific competence and applied STEM training",
          },
          paragraphs: [
            "The seminar addressed several structural challenges in science education in Bangladesh — including limited laboratory exposure, weak connection between theoretical learning and real-life application, insufficient undergraduate research opportunities, limited scientific mentoring, and barriers to higher education and research careers.",
            "Participants discussed how JUST students can prepare for graduate research, scholarship pathways, instrument training, and industry-ready scientific work — connecting classroom knowledge with the laboratory and industry standards expected in regulated applied science settings.",
          ],
        },
        {
          kind: "custom",
          heading: "Key outcomes & takeaways",
          image: {
            src: "https://res.cloudinary.com/dohbigfue/image/upload/jashore-just-05-outcomes.jpg",
            alt: "Open Q&A and discussion at the Jashore seminar",
            caption:
              "Open dialogue between students, faculty, and KRTC's leadership",
          },
          paragraphs: [
            "The seminar produced several concrete outcomes that strengthen the connection between JUST students and KRTC's broader academic and applied-science network:",
            "• Established Jashore as a key node in KRTC's Southwest Zone academic outreach — anchoring the initiative across the Khulna and Barishal Divisions.",
            "• Direct exposure for JUST undergraduate and postgraduate students to KRTC's University Coordinator network and laboratory practice methodology.",
            "• Open dialogue between students, faculty, and KRTC's leadership on bridging classroom learning with applied scientific work — including hands-on research, instrumentation, and industry-grade quality practice.",
            "• Concrete pathways introduced — research methodology preparation, scholarship and graduate-research opportunities, industry-ready skills development, and global academic mobility routes.",
            "• Foundation laid for continued engagement through KRTC's training programmes, follow-up workshops, and ongoing mentoring through the regional Coordinator network.",
            "• Strengthened the regional KRTC network connecting JUST, Khulna University, KUET, Islamic University Kushtia, University of Barishal, PSTU, and partner institutions — reinforcing the decentralised, integrated approach to applied science education in Bangladesh.",
          ],
        },
        {
          kind: "team-project",
          heading: "Organising & project-support team",
          image: {
            src: "https://res.cloudinary.com/dohbigfue/image/upload/jashore-just-06-team.jpg",
            alt: "Project and KRTC team members at the Jashore seminar",
            caption:
              "Project-support team contributing to KRTC's institutional development and capacity building",
          },
          paragraphs: [
            "The seminar's organising and project-support team — drawn from KRTC's volunteer-led leadership, faculty advisors, Southwest Zone coordinators, and department instructors — reflects the multidisciplinary collaboration behind KRTC's applied science education and institutional development work.",
          ],
        },
        {
          kind: "closing",
          heading: "Looking ahead",
          image: {
            src: "https://res.cloudinary.com/dohbigfue/image/upload/jashore-just-07-closing.jpg",
            alt: "Closing moments and audience interaction at the Jashore seminar",
            caption:
              "Closing remarks and continued engagement with students and faculty",
          },
          paragraphs: [
            "The Jashore seminar marks KRTC's first Southwest Zone academic seminar of 2026 — extending the volunteer-led outreach beyond the May North Zone series at Pabna, Rajshahi, and MBSTU.",
            "Beyond this seminar, KRTC continues to build pathways for secondary-level students, undergraduate and master's applicants, PhD candidates, recent graduates, and professionals — through merit-based scholarship opportunities, affordable training, support for disadvantaged students, laboratory skill development, environmental awareness initiatives, student volunteer programmes, and community healthcare outreach.",
            "Through this seminar at Jashore University of Science & Technology, KRTC reaffirmed its commitment to a decentralised and integrated model of applied STEM education in Bangladesh — and renewed its call for collaboration among universities, research institutions, industry professionals, and policy-focused bodies.",
          ],
        },
      ],
      distinguishedGuests: [],
      organisingTeam: [
        {
          name: "Md. Zakaria Hossain",
          role: "Founder & Research Coordinator, KRTC",
          teamSlug: "zakaria-hossain",
        },
        {
          name: "Md. Abdul Mojid",
          role: "Managing Director, KRTC",
          teamSlug: "md-abdul-mojid",
        },
      ],
      gallery: [
        {
          src: "https://res.cloudinary.com/dohbigfue/image/upload/jashore-just-gallery-01.jpg",
          alt: "Jashore seminar moment — presentation",
        },
        {
          src: "https://res.cloudinary.com/dohbigfue/image/upload/jashore-just-gallery-02.jpg",
          alt: "Jashore seminar moment — discussion",
        },
        {
          src: "https://res.cloudinary.com/dohbigfue/image/upload/jashore-just-gallery-03.jpg",
          alt: "Jashore seminar moment — guests",
        },
        {
          src: "https://res.cloudinary.com/dohbigfue/image/upload/jashore-just-gallery-04.jpg",
          alt: "Jashore seminar moment — students",
        },
        {
          src: "https://res.cloudinary.com/dohbigfue/image/upload/jashore-just-gallery-05.jpg",
          alt: "Jashore seminar moment — KRTC team",
        },
        {
          src: "https://res.cloudinary.com/dohbigfue/image/upload/jashore-just-gallery-06.jpg",
          alt: "Jashore seminar moment — engagement",
        },
        {
          src: "https://res.cloudinary.com/dohbigfue/image/upload/jashore-just-gallery-07.jpg",
          alt: "Jashore seminar moment — audience",
        },
        {
          src: "https://res.cloudinary.com/dohbigfue/image/upload/jashore-just-gallery-08.jpg",
          alt: "Jashore seminar moment — Q&A",
        },
        {
          src: "https://res.cloudinary.com/dohbigfue/image/upload/jashore-just-gallery-09.jpg",
          alt: "Jashore seminar moment — closing remarks",
        },
        {
          src: "https://res.cloudinary.com/dohbigfue/image/upload/jashore-just-gallery-10.jpg",
          alt: "Jashore seminar moment — group photo",
        },
      ],
    },
  },

  // ==========================================================
  // Dhaka (Central Zone) — hosted at Bangla Academy, Dhaka.
  // Registration is open until the day before the event; the
  // auto-close timestamp keeps the cards consistent with the
  // North Zone series without needing a manual flip.
  // ==========================================================
  {
    slug: "bridging-theory-practice-dhaka",
    title:
      "Bridging the Theory and Practice Gap in Science Education in Bangladesh — Dhaka",
    tagline:
      "A KRTC volunteer-led seminar in Dhaka — connecting theory to laboratory, research, and industry practice for Central Zone students.",
    description: `This seminar is part of KRTC's volunteer-led outreach to bring the conversation about practical, applied science education directly to students at the University of Dhaka and surrounding Central Zone universities. Participants will hear from researchers, industry professionals, and KRTC's University Coordinators on how to move from textbook understanding to laboratory competence, scholarly research, and industry-ready scientific work.

A certificate of participation, signed by KRTC leadership, will be issued to every attendee after the event.`,
    date: "Wednesday, 17 June 2026",
    dateISO: "2026-06-17",
    time: "3:00 PM – 5:30 PM (BST)",
    venue: "Abdul Karim Sahitya Bisharad Auditorium, Bangla Academy",
    venueAddress:
      "Abdul Karim Sahitya Bisharad Auditorium, Bangla Academy, Shahbagh, Dhaka, Bangladesh",
    targetZone: "central",
    audienceUniversities: CENTRAL_ZONE_UNIVERSITIES,
    audienceNote:
      "Open to undergraduate and postgraduate students from the University of Dhaka and surrounding Central Zone universities (Dhaka & Mymensingh Divisions), including affiliated National University colleges.",
    agenda: [
      {
        time: "Session 1",
        title: "Why theory alone is not enough",
        description:
          "Framing the gap between conceptual learning and laboratory / industry-ready scientific competence in Bangladesh.",
      },
      {
        time: "Session 2",
        title: "From classroom to laboratory",
        description:
          "Practical pathways into hands-on research, instrumentation training, and applied projects.",
      },
      {
        time: "Session 3",
        title: "Research, scholarships & global pathways",
        description:
          "How undergraduates from Central Zone universities can prepare for graduate research, scholarships, and international academic mobility.",
      },
      {
        time: "Session 4",
        title: "Q&A + KRTC University Coordinator network",
        description:
          "Open discussion with KRTC's University Coordinators and Advisor — how to stay connected after the seminar.",
      },
    ],
    speakers: [
      {
        name: "Md Zakaria Hossain",
        role: "Founder & Chairman, KRTC",
        affiliation: "MSc Chemistry Candidate, University of Siegen",
      },
    ],
    whatYoullGet: [
      {
        title: "Certificate of Participation",
        description:
          "A KRTC-signed certificate is issued to every attendee after the event, useful for academic and professional portfolios.",
      },
      {
        title: "Direct connection to KRTC's University Coordinator network",
        description:
          "Meet KRTC's Coordinators and Advisor — your local point of contact for future trainings, research, and opportunities.",
      },
      {
        title: "Practical guidance on the next step",
        description:
          "Concrete pointers on labs, research methods, scholarships, and industry pathways relevant to your field of study.",
      },
    ],
    faq: [
      {
        question: "Who can register for this seminar?",
        answer:
          "Undergraduate and postgraduate students from Central Zone universities — University of Dhaka, Jahangirnagar University, Jagannath University, Bangladesh University of Professionals, Jatiya Kabi Kazi Nazrul Islam University, Mawlana Bhashani Science & Technology University, Bangabandhu Sheikh Mujibur Rahman S&T University, and affiliated National University colleges in Dhaka & Mymensingh Divisions.",
      },
      {
        question: "Is there any registration fee?",
        answer:
          "No. This seminar is free for all eligible students. Seats are limited, so registration confirms your spot.",
      },
      {
        question: "Will I receive a certificate?",
        answer:
          "Yes. A KRTC-signed Certificate of Participation will be emailed to every attendee after the event. Attendance is verified at the venue.",
      },
      {
        question: "What if my university is not in the dropdown?",
        answer:
          "Choose 'Other NU-affiliated college (Central Zone)' if you're from an affiliated college in the surrounding region. If you're from a different zone, please wait — KRTC will host seminars in your region soon.",
      },
      {
        question: "When and where exactly is the seminar?",
        answer:
          "Date and venue are confirmed: Wednesday, 17 June 2026, 3:00 PM – 5:30 PM, Abdul Karim Sahitya Bisharad Auditorium, Bangla Academy, Dhaka. After registering you will receive a confirmation email with the venue location and any last-minute updates.",
      },
    ],
    registrationOpen: true,
    // 17 June 2026, 2:00 PM BST (UTC+6) → 17 June 2026, 08:00 UTC.
    registrationCloseAt: "2026-06-17T08:00:00.000Z",
    registrationDeadline: "17 June 2026 (2:00 PM BST)",
    fee: "Free",
    certificateNote:
      "A KRTC-signed Certificate of Participation will be emailed to every attendee within 7–10 days after the event.",
    surveyUrl: "https://forms.gle/2Kyx9JXhqrtXYYYy5",
  },
];

// Helpers
export const getSeminarBySlug = (slug: string): Seminar | null =>
  seminars.find((s) => s.slug === slug) || null;

// Returns the first seminar that is *currently* taking registrations
// (combines the manual `registrationOpen` flag with the auto-close
// timestamp). Falls back to the first seminar in the array if none is
// active, which keeps callers like the old single-seminar page from
// crashing during the empty-state. Mostly superseded by the hub page
// + per-seminar pages introduced in PHASE 3, but retained as a utility.
export const getActiveSeminar = (): Seminar | null =>
  seminars.find(isRegistrationStillOpen) || seminars[0] || null;

// All seminars where someone can register right now, sorted soonest-first.
// Used by the hub page to render the "upcoming" cards.
export const getUpcomingSeminars = (): Seminar[] =>
  seminars
    .filter(isRegistrationStillOpen)
    .sort(
      (a, b) => new Date(a.dateISO).getTime() - new Date(b.dateISO).getTime(),
    );

// All seminars whose date has passed AND that have a published recap.
// Used by the hub page to render the "past — view recap" cards.
export const getPastSeminarsWithRecap = (): Seminar[] =>
  seminars
    .filter((s) => isSeminarPast(s) && hasPublishedRecap(s))
    .sort(
      (a, b) => new Date(b.dateISO).getTime() - new Date(a.dateISO).getTime(),
    );

export const isNorthZoneUniversityCode = (code: string): boolean =>
  NORTH_ZONE_UNIVERSITIES.some((u) => u.code === code);

// Display label for a `SeminarZone`. Used in seminar page hero strips,
// registration-form helper copy, and recap "next seminar" CTAs so the
// rendered text matches the seminar's zone (e.g. "East Zone" for the
// Chattogram seminar, "Southwest Zone" for the Jashore seminar) rather
// than hard-coding "North Zone" everywhere.
const ZONE_LABELS: Record<SeminarZone, string> = {
  north: "North Zone",
  central: "Central Zone",
  southwest: "Southwest Zone",
  east: "East Zone",
};

export const getZoneLabel = (zone: SeminarZone): string => ZONE_LABELS[zone];

// Single source of truth for "can someone register right now?".
// Combines the manual flag (`registrationOpen`) with the optional auto-close
// timestamp (`registrationCloseAt`). Used by both the API route and the UI.
export const isRegistrationStillOpen = (seminar: Seminar): boolean => {
  if (!seminar.registrationOpen) return false;
  if (seminar.registrationCloseAt) {
    const closeAt = new Date(seminar.registrationCloseAt).getTime();
    if (!Number.isNaN(closeAt) && Date.now() >= closeAt) return false;
  }
  return true;
};

// True once the seminar's calendar date has passed. Used by the /seminar
// page to decide whether to surface a "View recap" banner instead of the
// pre-event UI. Falls back to `false` if `dateISO` is malformed.
export const isSeminarPast = (seminar: Seminar): boolean => {
  const t = new Date(seminar.dateISO).getTime();
  if (Number.isNaN(t)) return false;
  return Date.now() > t;
};

// Convenience predicate — both "has a recap block" and "marked published".
// Pre-event seminars never satisfy this; recaps in draft state don't either.
export const hasPublishedRecap = (seminar: Seminar): boolean =>
  !!(seminar.recap && seminar.recap.isPublished);

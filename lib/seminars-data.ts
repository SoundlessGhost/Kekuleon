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

// Universities for the North Zone (source of truth: lib/team-data.ts).
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
  // MBSTU is technically Central Zone (Tangail), but per the user's
  // decision in Phase 3 we keep a single shared audience list across
  // all KRTC seminars rather than splitting by zone for now.
  { code: "MBSTU", name: "Maulana Bhasani Science & Technology University" },
  { code: "OTHER", name: "Other NU-affiliated college (North Zone)" },
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
            "The organising and project-support team included Nazmul Haque Mitun, Strategic Partner and Department Instructor; Md. Omar Faruque, Advisor — Sustainability and Income; Md. Abdul Mojid, Managing Director, KRTC; and Mokter Hossain, Project Lawyer. Their involvement reflected the multidisciplinary support structure behind KRTC's applied science education, institutional development, and capacity-building work.",
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
          role: "Strategic Partner & Department Instructor",
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
    // 6 May 2026, 11:59 PM BST (UTC+6) → 6 May 2026, 17:59 UTC.
    registrationCloseAt: "2026-05-06T17:59:00.000Z",
    registrationDeadline: "6 May 2026 (11:59 PM BST)",
    fee: "Free",
    certificateNote:
      "A KRTC-signed Certificate of Participation will be emailed to every attendee within 7–10 days after the event.",
    surveyUrl: "https://forms.gle/2Kyx9JXhqrtXYYYy5",
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
    // 6 May 2026, 2:00 PM BST (UTC+6) → 6 May 2026, 08:00 UTC. Pabna's
    // deadline closes earlier in the day (per client) so the venue
    // capacity at PUST's Exam Centre can be finalised before the event
    // on Thursday, 7 May.
    registrationCloseAt: "2026-05-06T08:00:00.000Z",
    registrationDeadline: "6 May 2026 (2:00 PM BST)",
    fee: "Free",
    certificateNote:
      "A KRTC-signed Certificate of Participation will be emailed to every attendee within 7–10 days after the event.",
    surveyUrl: "https://forms.gle/2Kyx9JXhqrtXYYYy5",
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
      "A KRTC volunteer-led seminar at Maulana Bhasani Science & Technology University — connecting theory to laboratory, research, and industry practice.",
    description: `This seminar is part of KRTC's volunteer-led outreach to bring the conversation about practical, applied science education directly to students at Maulana Bhasani Science & Technology University and surrounding universities. Participants will hear from researchers, industry professionals, and KRTC's University Coordinators on how to move from textbook understanding to laboratory competence, scholarly research, and industry-ready scientific work.

A certificate of participation, signed by KRTC leadership, will be issued to every attendee after the event.`,
    date: "Saturday, 9 May 2026",
    dateISO: "2026-05-09",
    time: "3:45 PM – 5:30 PM (BST)",
    venue:
      "To be announced — Maulana Bhasani Science & Technology University, Tangail",
    targetZone: "north",
    audienceUniversities: NORTH_ZONE_UNIVERSITIES,
    audienceNote:
      "Open to undergraduate and postgraduate students from Maulana Bhasani Science & Technology University (MBSTU) and surrounding universities, including affiliated National University colleges.",
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
          "Date is confirmed: Saturday, 9 May 2026, 3:45 PM – 5:30 PM. Venue will be announced shortly — registered participants will be the first to know by email as soon as it is confirmed.",
      },
    ],
    registrationOpen: true,
    // 8 May 2026, 11:59 PM BST → 8 May 2026, 17:59 UTC.
    registrationCloseAt: "2026-05-08T17:59:00.000Z",
    registrationDeadline: "8 May 2026 (11:59 PM BST)",
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

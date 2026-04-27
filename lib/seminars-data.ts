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
  registrationDeadline?: string;
  capacity?: number;
  fee?: string; // e.g. "Free" or "BDT 500"
  certificateNote?: string;
}

// Universities for the North Zone (source of truth: lib/team-data.ts).
// Mirrored here as plain data so the seminar form has zero coupling to
// the team-data zone module — easier to evolve independently.
export const NORTH_ZONE_UNIVERSITIES: SeminarUniversityOption[] = [
  { code: "RU", name: "University of Rajshahi" },
  { code: "BRUR", name: "Begum Rokeya University, Rangpur" },
  { code: "HSTU", name: "Haji Mohammad Danesh Science & Technology University" },
  { code: "BSTU", name: "Bogura Science & Technology University" },
  { code: "PUST", name: "Pabna University of Science & Technology" },
  { code: "OTHER", name: "Other NU-affiliated college (North Zone)" },
];

export const seminars: Seminar[] = [
  {
    slug: "bridging-theory-practice-rangpur",
    title: "Bridging the Theory and Practice Gap in Science Education in Bangladesh",
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
    registrationDeadline: "29 April 2026 (11:59 PM BST)",
    fee: "Free",
    certificateNote:
      "A KRTC-signed Certificate of Participation will be emailed to every attendee within 7–10 days after the event.",
  },
];

// Helpers
export const getSeminarBySlug = (slug: string): Seminar | null =>
  seminars.find((s) => s.slug === slug) || null;

export const getActiveSeminar = (): Seminar | null =>
  seminars.find((s) => s.registrationOpen) || seminars[0] || null;

export const isNorthZoneUniversityCode = (code: string): boolean =>
  NORTH_ZONE_UNIVERSITIES.some((u) => u.code === code);

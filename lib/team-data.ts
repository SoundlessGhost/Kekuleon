// =============================================
// KRTC Team Members Data
// =============================================

export interface TeamMember {
  id: number;
  slug: string;
  name: string;
  nameBn?: string;
  title: string;
  department: string;
  initials: string;
  color: string;
  image?: string;
  email?: string;
  emailAlt?: string;
  phone?: string;
  phoneAlt?: string;
  location?: string;
  address?: string;
  dateOfBirth?: string;
  linkedin?: string;
  type:
    | "leadership"
    | "executive"
    | "strategic-partner"
    | "applied-science"
    | "schooling"
    | "schooling-leadership"
    | "advisory-jat"
    | "advisory-cjat"
    | "university-coordinator";
  university?: string; // For university coordinators — grouping
  universityCode?: string; // Agreement code (e.g. DU, BU, BRUR)
  zone?: "north" | "central" | "southwest" | "east"; // UC&SA program zone
  coordinatorRole?: "board-director" | "advisor" | "coordinator"; // Role within UC&SA
  equityShare?: number; // Internal: 100 = majority, 20/10/2 = partners/executives
  partnerDepartment?: string; // For strategic partners — dept they lead
  priority?: number; // For sorting within sections (lower = higher priority)
  bio: string;
  education: {
    degree: string;
    institution: string;
    year: string;
    grade?: string;
    credits?: string;
  }[];
  experience: {
    role: string;
    org: string;
    period: string;
    description?: string;
  }[];
  research?: {
    title: string;
    supervisor?: string;
    institution?: string;
    period: string;
    description?: string;
  }[];
  skills: string[];
  languages?: {
    language: string;
    level: string;
  }[];
  organizations?: {
    role: string;
    org: string;
    description?: string;
  }[];
  achievements: string[];
}

export const allTeamMembers: Record<string, TeamMember> = {
  // ==================
  // Leadership Team
  // ==================
  "zakaria-hossain": {
    id: 1,
    slug: "zakaria-hossain",
    name: "Md Zakaria Hossain",
    image: "/images/team/zakaria.jpeg",
    title:
      "MSc Chemistry Candidate | Researcher in Applied Science Education, Equity & Capacity Development | Bridging the Theory–Practice Gap",
    department: "Founder & Chairman, KRTC",
    initials: "ZH",
    color: "bg-primary",
    email: "kekuleoninfo@gmail.com",
    phone: "+49 17628983090",
    location: "University of Siegen, Germany",
    linkedin: "https://linkedin.com/in/md-zakaria-hossain-45a631230/",
    type: "leadership",
    equityShare: 100,
    priority: 1,
    bio: `Md Zakaria Hossain works at the intersection of science education, capacity development, and social innovation in developing countries. His work focuses on designing and implementing applied educational models that reduce the gap between theoretical learning and practical scientific competence. His research interest centers on how decentralized training platforms can improve educational equity, strengthen human capital, and prepare students from developing regions for global academic and professional environments.

He is the Founder and Chairman of the Kekuleon Research and Training Center (KRTC), an institution dedicated to closing the theory-practice gap in science education in developing countries. His work revolves around applied science research and training, capacity development, and overcoming the barriers faced by disadvantaged students. Zakaria's research delves into decentralized educational models that combine applied training, research, industry collaboration, and community engagement to address pressing social and sustainable development needs.

His long-term goal is to develop scalable educational frameworks that enable students from developing countries to access practical scientific training, global academic mobility, and socially responsible leadership opportunities. Through KRTC, he is working to create an educational ecosystem that promotes personal growth, social responsibility, and the development of globally competitive scientific professionals.`,
    education: [
      {
        degree: "MSc in Chemistry",
        institution: "University of Siegen, Germany",
        year: "10/10/2023 - Present",
      },
      {
        degree: "MSc in Advanced Functional Materials",
        institution: "Technical University of Chemnitz, Germany",
        year: "01/04/2022 - 30/09/2023",
      },
      {
        degree: "MSc in Applied Chemistry and Chemical Engineering",
        institution: "University of Rajshahi, Bangladesh",
        year: "05/12/2020 - 10/03/2022",
      },
      {
        degree: "BSc in Applied Chemistry and Chemical Engineering",
        institution: "University of Rajshahi, Bangladesh",
        year: "02/02/2015 - 29/11/2020",
      },
    ],
    experience: [
      {
        role: "Founder, Chairman & CEO",
        org: "Kekuleon Research and Training Center (KRTC)",
        period: "2025 - Present",
        description:
          "Performed quantitative and qualitative data analysis to support senior consultants in developing strategic recommendations for clients. Contributed to the development of detailed project plans and managed key workstreams for consulting engagements across multiple sectors. Prepared compelling client presentations and reports, translating complex data into actionable insights for decision-makers.",
      },
      {
        role: "Part-Time Lecturer",
        org: "Barindra University, Bangladesh",
        period: "2021 - 2022",
        description:
          "Delivered lectures on Applied Chemistry fundamentals and laboratory safety protocols.",
      },
      {
        role: "Lead Instructor - University Admission Guidance",
        org: "Various Admission Coaching Organizations",
        period: "2020 - 2022",
        description:
          "Provided intensive Chemistry instruction for university aspirants, focusing on competitive exam strategies.",
      },
    ],
    research: [
      {
        title:
          "Sustainable Plastic Processing and Recycling: Navigating the Urban Context of Dhaka, Bangladesh",
        supervisor: "Principal Researcher",
        institution: "Kekuleon Research and Training Center (KRTC)",
        period: "Apr 2025 - Present",
        description:
          "This initiative is structured into two strategic phases, bridging the gap between urban environmental challenges and advanced chemical engineering solutions. Phase 1 (Cooperative Modification & Expert Synergy): Evaluating the current plastic waste lifecycle in Dhaka to identify technical and systemic bottlenecks in recycling. Exploring expert suggestions and collaborative modifications from specialist professors and international partners. Phase 2 (Laboratory-Driven Development): Transitioning findings from the field into the laboratory once the Polymer and Plastic Processing Department at KRTC begins operations. Focusing on the chemical stabilization of recycled polymers and developing innovative processing techniques to create high-value products from urban waste.",
      },
      {
        title:
          "Decentralised and Integrated Framework for Science Education Reform and Global Development",
        supervisor: "Principal Researcher",
        institution: "Kekuleon Research and Training Center (KRTC)",
        period: "Oct 2024 - Present",
        description:
          "Developed a decentralised and integrated framework for science education reform that links academic learning, laboratory practice, research training, and industry engagement within a single institutional model. Its long-term goal is to establish an adaptable model for scientific capacity development, educational equity, and education reform across diverse development contexts.",
      },
      {
        title:
          "Bridging the Theory-Practice Gap in Science Education in the Global South: An Empirical Assessment",
        supervisor: "Principal Researcher",
        institution: "Kekuleon Research and Training Center (KRTC)",
        period: "Nov 2023 - Present",
        description:
          "Leading a multi-institutional empirical study across 40 universities in Bangladesh on student autonomy and the theory-practice gap in STEM education. Examining qualitative and quantitative data on student experiences of applied learning, laboratory competence, and research exposure. Analysing structural limitations in science education systems to inform scalable and integrated educational frameworks. Using KRTC as a case study to explore sustainable, research-oriented institutional models in science education and scientific capacity development.",
      },
    ],
    skills: [
      "Survey Design",
      "Statistical Data Analysis",
      "Academic Writing",
      "Case Study Development",
      "Curriculum Design for Applied Sciences",
      "Institutional Strategy",
      "Sustainable STEM Ecosystems",
      "Polymer Processing",
      "Recycling Technologies",
      "Pharmaceutical Chemistry",
      "Web Management (WordPress/Elementor)",
      "Database Administration",
    ],
    languages: [
      { language: "Bengali", level: "Native" },
      { language: "English", level: "Professional" },
      { language: "German", level: "Basic" },
    ],
    achievements: [
      "Founder and Chairman of Kekuleon Research and Training Center (KRTC)",
      "Led applied science education research and sustainability initiatives",
      "Developed decentralized science education models for developing countries",
    ],
  },

  "suborna-khatun": {
    id: 14,
    slug: "suborna-khatun",
    name: "Suborna Khatun",
    nameBn: "সুবর্ণা খাতুন",
    title: "Manager & Executive Officer, KRTC",
    department: "KRTC Executive Management",
    initials: "SK",
    color: "bg-red-500",
    location: "Sirajganj, Bangladesh",
    dateOfBirth: "12 March 1995",
    type: "executive",
    equityShare: 10,
    priority: 2,
    bio: `Suborna Khatun serves as Manager of the Kekuleon Research and Training Center (KRTC), providing operational oversight and cross-departmental coordination across the centre's integrated institutional framework. She has been associated with KRTC since its foundation period — initially serving as Temporary Director of KRTC Schooling, where she contributed to the institution's earliest operational structure during its first six months of establishment.

Her work reflects a strong foundation in organizational development, institutional communication, and programme implementation — competencies shaped through direct involvement in the centre's formation phase. In her current role as Manager, she coordinates administrative workflows, supports departmental alignment, and contributes to the day-to-day operational translation of KRTC's decentralised and integrated institutional model across schooling, applied-science, and research-oriented activities.

Her professional orientation combines developmental thinking with practical organizational execution. She holds postgraduate qualifications in Islamic History and Culture, complemented by applied technical and language competencies including a National Skill Standard certification in Database Programming (Grade A) from the Bangladesh Technical Education Board, the Goethe-Zertifikat A1 (Start Deutsch 1) from the Goethe-Institut, and recognition from the British Council's Active Citizens Youth Leadership Training — strengthening her profile in cross-cultural engagement and community-oriented institutional leadership.`,
    education: [
      {
        degree: "MA in Islamic History and Culture",
        institution:
          "National University, Bangladesh (Sirajganj Govt. College)",
        year: "Session 2017-2018",
        grade: "CGPA: 3.22",
      },
      {
        degree: "BA (Honours) in Islamic History and Culture",
        institution:
          "National University, Bangladesh (Sirajganj Govt. College)",
        year: "Session 2013-2014",
        grade: "CGPA: 3.15 (Credits: 120/120)",
      },
      {
        degree: "Fazil (Bachelor of Theology and Islamic Studies)",
        institution:
          "Islamic University, Kushtia-Jhenaidah (Char Sonagachhia Islamia Fazil Madrasah, Sirajganj)",
        year: "2016",
        grade: "CGPA: 3.50",
      },
      {
        degree: "Alim (HSC Equivalent)",
        institution:
          "Bangladesh Madrasah Education Board (Char Sonagachhia Islamia Fazil Madrasah, Sirajganj)",
        year: "2013",
        grade: "GPA: 4.17",
      },
      {
        degree: "Dakhil (SSC Equivalent)",
        institution:
          "Bangladesh Madrasah Education Board (Char Sonagachhia Islamia Fazil Madrasah, Sirajganj)",
        year: "2011",
        grade: "GPA: 4.25",
      },
      {
        degree:
          "National Skill Standard Basic Course — Database Programming (360 Hours)",
        institution:
          "Bangladesh Technical Education Board / Amar IT Skill Development Institute, Rajshahi",
        year: "Jul-Dec 2020",
        grade: "Grade A",
      },
      {
        degree: "Goethe-Zertifikat A1 (Start Deutsch 1)",
        institution: "Goethe-Institut, Dhaka",
        year: "2023",
        grade: "71/100 (Satisfactory)",
      },
    ],
    experience: [
      {
        role: "Manager",
        org: "Kekuleon Research and Training Center (KRTC)",
        period: "2025 - Present",
        description:
          "Overseeing operational management of the full KRTC institutional framework — coordinating cross-departmental workflows, supporting administrative alignment across applied science and schooling programmes, and contributing to the day-to-day translation of KRTC's integrated institutional model into operational practice.",
      },
      {
        role: "Temporary Director, KRTC Schooling",
        org: "Kekuleon Research and Training Center (KRTC)",
        period: "2025 (Foundation Period — First 6 months)",
        description:
          "Led KRTC Schooling during its foundation phase, contributing to the establishment of organizational workflows, operational structure, and early programme activities during the centre's institution-building stage.",
      },
    ],
    skills: [
      "Institutional Development",
      "Organizational Management",
      "Cross-Departmental Coordination",
      "Foundation-Stage Leadership",
      "Programme Implementation",
      "Administrative Workflows",
      "Stakeholder Communication",
      "Community Engagement",
      "Academic Operations",
      "Database Programming",
      "Microsoft Office (Word, Excel, PowerPoint)",
    ],
    languages: [
      { language: "Bengali", level: "Native" },
      { language: "English", level: "Professional" },
      { language: "German", level: "A1 (Basic)" },
      { language: "Arabic", level: "Academic Reading" },
    ],
    organizations: [
      {
        role: "Participant — Active Citizens Youth Leadership Training",
        org: "British Council Bangladesh",
        description:
          "Globally connected and locally engaged youth leadership programme focused on cross-cultural engagement, social action, and community development.",
      },
    ],
    achievements: [
      "Manager of Kekuleon Research and Training Center (KRTC)",
      "Temporary Director, KRTC Schooling — Foundation Period",
      "Certificate of Recognition — Active Citizens Youth Leadership Training, British Council Bangladesh",
      "Goethe-Zertifikat A1 (Start Deutsch 1) — Goethe-Institut",
      "National Skill Standard Certification in Database Programming — BTEB",
      "MA in Islamic History and Culture",
    ],
  },

  "omar-faruque": {
    id: 2,
    slug: "omar-faruque",
    name: "Md. Omar Faruque",
    nameBn: "মো. ওমর ফারুক",
    title: "Managing Director, KRTC Schooling",
    department: "KRTC Schooling Administration",
    initials: "OF",
    color: "bg-red-500",
    email: "jewel970622@gmail.com",
    phone: "+880 1738578423",
    location: "Sirajganj, Bangladesh",
    dateOfBirth: "05 February 1994",
    type: "schooling-leadership",
    priority: 1,
    bio: `Md. Omar Faruque is the Managing Director of KRTC Schooling at Kekuleon Research and Training Center (KRTC). He is currently working as an Officer at Sonali Bank PLC, Bangladesh. He completed his M.Engg in Applied Chemistry and Chemical Engineering and BSc (160 credits with CGPA 3.24) from University of Rajshahi.

He received professional training from TICI on Industrial Process Unit Operation & Process Control Technique with Grade A (3.50/4.00). His expertise spans applied chemistry, analytical chemistry, research methodology, and institutional development.`,
    education: [
      {
        degree: "M.Engg in Applied Chemistry & Chemical Engineering",
        institution: "University of Rajshahi",
        year: "2016 - 2017",
      },
      {
        degree: "BSc in Applied Chemistry & Chemical Engineering",
        institution: "University of Rajshahi",
        year: "2012 - 2015",
        grade: "CGPA: 3.24 (160 Credits)",
      },
      {
        degree:
          "Training on Industrial Process Unit Operation & Process Control Technique",
        institution: "Training Institute for Chemical Industries (TICI)",
        year: "Completed",
        grade: "Grade A (3.50/4.00)",
      },
      {
        degree: "Foundation Course for Officer",
        institution: "Sonali Bank Training Institute, Dhaka",
        year: "May 2022 - June 2022",
      },
    ],
    experience: [
      {
        role: "Managing Director, KRTC Schooling",
        org: "Kekuleon Research and Training Center",
        period: "2025 - Present",
        description:
          "Overseeing the foundation pipeline program, institutional development, and strategic direction of KRTC Schooling.",
      },
      {
        role: "Officer",
        org: "Sonali Bank PLC",
        period: "December 2020 - Present",
        description:
          "Working at Sirajganj branch of Sonali Bank PLC, Bangladesh.",
      },
    ],
    research: [
      {
        title: "Fuel Cell Technology Development",
        institution: "University of Rajshahi",
        period: "January 2015 - December 2015",
        description: "Research project on fuel cell technology development.",
      },
    ],
    skills: [
      "Applied Chemistry",
      "Analytical Chemistry",
      "Instrumental Analysis",
      "Research Methodology",
      "Process Technology",
      "Environmental Science",
      "Industrial Safety & Health",
      "Quality Control",
      "Teaching & Training",
      "Institutional Development",
      "Microsoft Office (Word, Excel, PowerPoint)",
      "Google Docs",
    ],
    languages: [
      { language: "Bangla", level: "Native" },
      { language: "English", level: "Proficient" },
    ],
    achievements: [
      "Managing Director of KRTC Schooling",
      "M.Engg in Applied Chemistry & Chemical Engineering",
      "TICI Certified",
      "Officer at Sonali Bank PLC",
    ],
  },

  "krtc-schooling-manager": {
    id: 11,
    slug: "krtc-schooling-manager",
    name: "To Be Announced",
    nameBn: "শীঘ্রই ঘোষণা করা হবে",
    title: "Manager, KRTC Schooling",
    department: "KRTC Schooling Administration",
    initials: "TBA",
    color: "bg-slate-500",
    location: "KRTC, Sirajganj, Bangladesh",
    type: "schooling-leadership",
    priority: 2,
    bio: `This position is currently open. The Manager of KRTC Schooling will be responsible for day-to-day management of the foundation pipeline program, coordinating with teachers, and ensuring quality education delivery.`,
    education: [],
    experience: [],
    skills: [],
    achievements: [],
  },

  // ==================
  // Executive Management
  // ==================
  "md-abdul-mojid": {
    id: 15,
    slug: "md-abdul-mojid",
    name: "Md Abdul Mojid",
    nameBn: "মো. আব্দুল মজিদ",
    title: "Managing Director, KRTC",
    department: "KRTC Executive Management",
    initials: "AM",
    color: "bg-orange-600",
    location: "KRTC, Sirajganj, Bangladesh",
    type: "executive",
    equityShare: 20,
    priority: 1,
    bio: `Md Abdul Mojid serves as the Managing Director of the Kekuleon Research and Training Center (KRTC). In this capacity, he oversees the strategic direction and operational management of KRTC's integrated institutional framework — spanning applied science programmes, schooling, and research-oriented activities.

Working in close coordination with the Founder & Chairman and the Joint Advisory Team (JAT), the Managing Director's office is responsible for translating KRTC's mission to bridge the theory–practice gap in science education in Bangladesh into day-to-day institutional execution. This includes supporting the development of KRTC's six specialised departments, coordinating across the executive management and strategic-partner network, and ensuring that operations remain aligned with internationally benchmarked standards in applied chemistry, training, and institutional development.`,
    education: [],
    experience: [
      {
        role: "Managing Director",
        org: "Kekuleon Research and Training Center (KRTC)",
        period: "2025 - Present",
        description:
          "Leading the strategic direction, operational management, and institutional governance of KRTC across applied science, schooling, and research-oriented activities.",
      },
    ],
    skills: [
      "Strategic Leadership",
      "Institutional Governance",
      "Operational Management",
      "Organisational Development",
      "Stakeholder Coordination",
      "Programme Implementation",
      "Cross-Functional Team Leadership",
      "Institutional Development",
    ],
    languages: [
      { language: "Bangla", level: "Native" },
      { language: "English", level: "Proficient" },
    ],
    achievements: [
      "Managing Director, Kekuleon Research and Training Center (KRTC)",
      "Leading KRTC's integrated framework across applied science, schooling, and research",
      "Coordinating executive management with the Founder & Chairman and Joint Advisory Team",
    ],
  },

  // ==================
  // Strategic Partners
  // ==================
  "faruk-hasan": {
    id: 16,
    slug: "faruk-hasan",
    name: "Md. Faruk Hasan",
    nameBn: "মো. ফারুক হাসান",
    title: "Strategic Partner & Department Instructor",
    department: "Chemistry & Pharmaceutical Sciences",
    partnerDepartment: "Chemistry & Pharmaceutical Sciences",
    initials: "FH",
    color: "bg-emerald-600",
    location: "Bangladesh",
    type: "strategic-partner",
    equityShare: 2,
    priority: 3,
    dateOfBirth: "06 January 1995",
    email: "farukhasanru787@gmail.com",
    phone: "+880 1760090928",
    bio: `Md. Faruk Hasan is a QC Chemist with over three years of industrial experience in chemical manufacturing, specialising in HPLC, Gas Chromatography, and Karl Fischer titration. He serves as a Strategic Partner and Department Instructor at the Kekuleon Research and Training Center (KRTC), leading the Pharmaceutical Sciences department and bringing hands-on expertise in analytical instrumentation, quality assurance, and laboratory best practice to KRTC's applied training programmes.

Professionally, he works as a Chemist at United Sulpho Chemicals Limited, Dhaka, where he performs routine and non-routine quality testing, maintains and calibrates laboratory instruments, prepares analytical reports under SOPs and GMP principles, and supports investigation of out-of-specification (OOS) results. He holds an MEng and a BSc in Applied Chemistry and Chemical Engineering from the University of Rajshahi.`,
    education: [
      {
        degree:
          "Master of Engineering in Applied Chemistry and Chemical Engineering",
        institution: "University of Rajshahi",
        year: "2021 - 2022",
      },
      {
        degree:
          "Bachelor of Science in Applied Chemistry and Chemical Engineering",
        institution: "University of Rajshahi",
        year: "2015 - 2020",
      },
    ],
    experience: [
      {
        role: "Strategic Partner & Department Instructor",
        org: "Kekuleon Research and Training Center (KRTC)",
        period: "2025 - Present",
        description:
          "Leads the Pharmaceutical Sciences department, contributing to applied instruction, analytical laboratory training, and departmental development.",
      },
      {
        role: "Chemist",
        org: "United Sulpho Chemicals Limited, Dhaka",
        period: "Aug 2022 - Present",
        description:
          "Performs routine and non-routine quality testing using HPLC and GC; conducts moisture and colour analysis using Karl Fischer titration and colorimeter; maintains, calibrates and verifies laboratory instruments; prepares analytical reports under SOPs and GMP principles; supports investigation of out-of-specification (OOS) results.",
      },
    ],
    skills: [
      "High-Performance Liquid Chromatography (HPLC)",
      "Gas Chromatography (GC)",
      "Karl Fischer Titration",
      "Instrument Calibration & Maintenance",
      "Good Manufacturing Practices (GMP)",
      "Quality Control",
      "Laboratory Techniques",
      "Microsoft Excel & Office",
    ],
    languages: [
      { language: "Bengali", level: "Native" },
      { language: "English", level: "C1 (Proficient)" },
      { language: "German", level: "A1 (Basic)" },
    ],
    organizations: [
      {
        role: "Volunteer — COVID-19 Awareness & Support",
        org: "Shyamnagar, Satkhira, Bangladesh",
        description:
          "Coordinated relief distribution of food, medicine and protective equipment and engaged in public awareness campaigns promoting hygiene and safety during the pandemic (Apr - Jun 2020).",
      },
    ],
    achievements: [
      "3+ Years of Industrial QC Experience",
      "HPLC, GC & Karl Fischer Expertise",
      "GMP & SOP Compliance",
      "Strategic Partner, KRTC",
    ],
  },

  "monirul-islam": {
    id: 17,
    slug: "monirul-islam",
    name: "Md. Monirul Islam",
    nameBn: "মো. মনিরুল ইসলাম",
    title: "Strategic Partner & Department Instructor",
    department: "Polymer & Plastic Processing Technologies",
    partnerDepartment: "Polymer & Plastic Processing Technologies",
    initials: "MI",
    color: "bg-lime-600",
    email: "moniracce@gmail.com",
    emailAlt: "mdmonirulislammonir01744@gmail.com",
    phone: "+880 1744791120",
    location: "Banglamotor, Dhaka, Bangladesh",
    address:
      "Vill: Chopninagar, P.O: Kamarpara, P.S: Shajahanpur, Dist: Bogura, Bangladesh",
    dateOfBirth: "03 March 1995",
    type: "strategic-partner",
    equityShare: 2,
    priority: 2,
    bio: `Md. Monirul Islam serves as a Strategic Partner and Department Instructor at the Kekuleon Research and Training Center (KRTC), leading the Polymer and Plastic Processing Technologies department. He brings practical industry experience from quality control and executive roles in chemical and paint manufacturing, combined with academic training in Applied Chemistry and Chemical Engineering from the University of Rajshahi.

He currently works as an Executive Officer at SGS (Testing Lab, Chemical), handling pH and formaldehyde testing. Previously, he served as a Quality Control Officer at Pran RFL — Rainbow Paint, Norshindi, ensuring quality parameters of raw and finished goods. His academic research focused on sustainable methods for post-consumer plastic recycling and heavy metal remediation in ecosystems — work that directly informs his leadership of KRTC's polymer and plastic processing curriculum.`,
    education: [
      {
        degree:
          "Master of Engineering in Applied Chemistry and Chemical Engineering",
        institution: "University of Rajshahi",
        year: "2021",
        grade: "3.38 out of 4.00",
      },
      {
        degree:
          "Bachelor of Science in Applied Chemistry and Chemical Engineering",
        institution: "University of Rajshahi",
        year: "2020",
        grade: "2.92 out of 4.00",
      },
      {
        degree: "Higher Secondary Certificate (HSC)",
        institution: "R.D.A Laboratory School & College, Bogura",
        year: "2013",
        grade: "GPA 4.10",
      },
      {
        degree: "Secondary School Certificate (SSC)",
        institution: "Chopinagar High School, Bogura",
        year: "2010",
        grade: "GPA 5.00",
      },
    ],
    experience: [
      {
        role: "Strategic Partner & Department Instructor",
        org: "Kekuleon Research and Training Center (KRTC)",
        period: "2025 - Present",
        description:
          "Leads the Polymer and Plastic Processing Technologies department, contributing to applied polymer instruction, curriculum design, and laboratory training.",
      },
      {
        role: "Executive Officer",
        org: "SGS (Testing Lab, Chemical)",
        period: "Mar 2024 - Present",
        description:
          "Performs pH and formaldehyde testing within SGS's chemical testing laboratory.",
      },
      {
        role: "Quality Control Officer",
        org: "Pran RFL — Rainbow Paint, Norshindi",
        period: "Jan 2023 - Feb 2024",
        description:
          "Ensured quality parameters of raw and finished goods; performed analytical lab tests on raw and finished products.",
      },
    ],
    research: [
      {
        title: "Sustainable method for post-consumer plastic recycling",
        supervisor: "Dr. Reazul Karim Sheikh, Professor",
        institution:
          "Department of Applied Chemistry and Chemical Engineering, University of Rajshahi",
        period: "Academic Project",
      },
      {
        title: "A study on effect and remedies of heavy metal in the ecosystem",
        supervisor: "Dr. Sayed Mohiuddin Abdus Salam, Professor",
        institution:
          "Department of Applied Chemistry and Chemical Engineering, University of Rajshahi",
        period: "Academic Project",
      },
    ],
    skills: [
      "Polymer Science",
      "Plastic Processing",
      "Quality Control",
      "Chemical Testing",
      "Structural Analysis & Creativity",
      "Problem Solving",
      "Pressure Management",
      "Adaptability",
      "Microsoft Office",
    ],
    languages: [
      { language: "Bangla", level: "Native" },
      { language: "English", level: "Proficient" },
      { language: "Hindi", level: "Spoken Only" },
    ],
    organizations: [
      {
        role: "In-plant Training",
        org: "Training Institute for Chemical Industries (TICI), Norsingdi",
        description:
          "28-day training on Industrial Process Unit Operation and Process Control (12 Mar - 07 Apr 2022). Result: A (3.75/4).",
      },
      {
        role: "In-plant Training",
        org: "Kemiko Pharmaceuticals Limited, Tikapara, Rajshahi",
        description: "15-day in-plant training (25 Dec 2022 - 10 Jan 2023).",
      },
      {
        role: "Senior Vice President",
        org: "RU ACCE Group (2023)",
      },
      {
        role: "Executive Member",
        org: "Rajshahi University Higher Study Club (RUHSC)",
        description:
          "Supports students interested in higher study abroad and volunteering initiatives.",
      },
    ],
    achievements: [
      "TICI In-plant Training — A (3.75/4)",
      "Kemiko Pharmaceuticals Training",
      "Senior Vice President, RU ACCE Group 2023",
      "Strategic Partner, KRTC",
    ],
  },

  "strategic-partner-tba": {
    id: 18,
    slug: "strategic-partner-tba",
    name: "To Be Announced",
    nameBn: "শীঘ্রই ঘোষণা করা হবে",
    title: "Strategic Partner & Department Instructor",
    department: "Applied Science Department",
    initials: "TBA",
    color: "bg-slate-500",
    location: "KRTC, Sirajganj, Bangladesh",
    type: "strategic-partner",
    equityShare: 2,
    priority: 4,
    bio: `This Strategic Partner position is currently open. The incoming partner will lead one of KRTC's applied science departments and contribute to the centre's institutional development and training activities.`,
    education: [],
    experience: [],
    skills: [],
    achievements: [],
  },

  // ==================
  // Instructors
  // ==================
  "nazmul-haque-mitun": {
    id: 3,
    slug: "nazmul-haque-mitun",
    name: "Nazmul Haque Mitun",
    nameBn: "নাজমুল হক মিটুন",
    title: "Strategic Partner & Department Instructor",
    department: "Chemistry and Applied Chemical Sciences",
    partnerDepartment: "Chemistry and Applied Chemical Sciences",
    initials: "NM",
    color: "bg-red-500",
    email: "mitun.ru729@gmail.com",
    phone: "+880 1717987729",
    location: "Kishoreganj / Dhaka, Bangladesh",
    address: "60/03 Harua Purba, Fisheri Road, 2300, Kishoreganj, Bangladesh",
    dateOfBirth: "11 November 1997",
    linkedin: "http://linkedin.com/in/nazmul-haque-mitun-194682132",
    type: "strategic-partner",
    equityShare: 2,
    priority: 1,
    bio: `Nazmul Haque Mitun serves as a Strategic Partner and Department Instructor at the Kekuleon Research and Training Center (KRTC), leading the Chemistry and Applied Chemical Sciences department. Alongside his role at KRTC, he is a Chemistry Lecturer at Milestone College, Dhaka, bringing a strong academic foundation in Applied Chemistry and Chemical Engineering from the University of Rajshahi and years of classroom and admission-coaching experience.

He is the founder of NM Chemistry Academic & Admission Care, where he has mentored students since 2016 through innovative teaching strategies and structured academic guidance. He completed specialised training on Industrial Process Unit Operation & Process Control Technique at the Training Institute for Chemical Industries (TICI), Norsingdi, which enables him to connect classroom learning with real-world industrial applications. He was awarded a Certificate of Appreciation by the Bangladesh Council of Scientific and Industrial Research (BCSIR) in 2024.`,
    education: [
      {
        degree: "MSc in Applied Chemistry and Chemical Engineering",
        institution: "University of Rajshahi",
        year: "2020 - 2021",
        credits: "40 credits",
      },
      {
        degree: "BSc in Applied Chemistry and Chemical Engineering",
        institution: "University of Rajshahi",
        year: "2015 - 2020",
        credits: "160 credits",
      },
      {
        degree:
          "Training on Industrial Process Unit Operation & Process Control Technique",
        institution:
          "Training Institute for Chemical Industries (TICI), Norsingdi",
        year: "Mar - Apr 2022",
        grade: "A+ (4.00/4.00)",
      },
      {
        degree: "Higher Secondary Certificate (HSC)",
        institution: "Govt. Gurudayal College, Kishoreganj",
        year: "2014",
        grade: "A (GPA 4.70/5.00)",
      },
      {
        degree: "Secondary School Certificate (SSC)",
        institution: "Kishoreganj Ideal High School",
        year: "2012",
        grade: "A (GPA 4.75/5.00)",
      },
    ],
    experience: [
      {
        role: "Strategic Partner & Department Instructor",
        org: "Kekuleon Research and Training Center (KRTC)",
        period: "Jan 2026 - Present",
        description:
          "Leads the Chemistry and Applied Chemical Sciences department. Delivers structured chemistry lectures, simplifies complex concepts, and mentors students — driving improved performance through assessment and feedback.",
      },
      {
        role: "Chemistry Lecturer",
        org: "Milestone College, Dhaka",
        period: "Dec 2025 - Present",
        description:
          "Evaluation of student progress, standardised mock test design, and course implementation within the Chemistry department.",
      },
      {
        role: "Founder & Chemistry Instructor",
        org: "NM Chemistry Academic & Admission Care, Rajshahi",
        period: "2016 - Present",
        description:
          "Innovative teaching strategies, student academic mentoring, and improved learning outcomes in university admission chemistry preparation.",
      },
    ],
    research: [
      {
        title:
          "Biodegradable Polyvinyl Alcohol - Gelatine-Based Hydrogel for Slow-Release Fertilizer",
        supervisor: "Most. Ripa Khatun, Assistant Professor",
        institution:
          "Department of Applied Chemistry and Chemical Engineering, University of Rajshahi",
        period: "Jun - Dec 2023",
      },
      {
        title: "Parenteral Suspension: An Overview",
        supervisor: "Dr. Mele Jesmin, Professor",
        institution:
          "Department of Applied Chemistry and Chemical Engineering, University of Rajshahi",
        period: "May - Aug 2020",
      },
    ],
    skills: [
      "Analytical Chemistry",
      "Process Technology",
      "Instrumentation & Control Engineering",
      "Environmental Science",
      "Industrial Safety and Health",
      "Student Mentoring",
      "Microsoft Office",
      "Team-work Oriented",
    ],
    languages: [
      { language: "Bangla", level: "Native" },
      { language: "English", level: "B1 (Independent)" },
    ],
    organizations: [
      {
        role: "Regional Coordinator",
        org: "Ghuddi Foundation",
        description:
          "Supervised volunteer teams, monitored and reported on programmes, and coordinated scholarship examinations (Feb 2016 - Feb 2019).",
      },
      {
        role: "Public Communication Coordinator",
        org: "Rajshahi University Higher Study Club",
        description:
          "Maintained communication between event communication support and other departments (2017).",
      },
      {
        role: "Publication & Finance Secretary",
        org: "Rajshahi University Drama Association (RUDA)",
        description:
          "Organisational communication support, event publication coordination, and financial record management (Aug 2015 - Sep 2017).",
      },
    ],
    achievements: [
      "BCSIR Certificate of Appreciation, 2024",
      "TICI Certified — A+ (4.00/4.00)",
      "Founder, NM Chemistry Academic & Admission Care",
      "Chemistry Lecturer, Milestone College",
      "Strategic Partner, KRTC",
    ],
  },

  "md-sumon": {
    id: 4,
    slug: "md-sumon",
    name: "Md. Sumon",
    nameBn: "মো. সুমন",
    title: "Mathematics Instructor",
    department: "Mathematics",
    initials: "MS",
    color: "bg-blue-500",
    email: "mdsumon61933@gmail.com",
    phone: "+880 1758727115",
    location: "Rajshahi, Bangladesh",
    type: "schooling",
    priority: 5,
    bio: `Md. Sumon is a Mathematics instructor with strong analytical skills and competitive achievement. He secured 8th position at the 15th National Undergraduate Mathematics Olympiad, Bangladesh-2024, and has won 3 regional Mathematics Olympiads.

Currently working as an instructor at Pi Math Academy and KRTC, he specializes in mathematical problem solving, climate modeling, and data analysis. His technical proficiency includes Matlab, C, Fortran, and various data processing tools.`,
    education: [
      {
        degree: "BSc in Mathematics",
        institution: "University of Rajshahi",
        year: "2020-2023",
        grade: "CGPA: 3.14",
      },
      {
        degree: "Higher Secondary Certificate (HSC)",
        institution: "Varendra College, Rajshahi",
        year: "2019",
        grade: "GPA: 4.42",
      },
      {
        degree: "Secondary School Certificate (SSC)",
        institution: "Baliapukur Vidyaniketon, Rajshahi",
        year: "2017",
        grade: "GPA: 5.00",
      },
    ],
    experience: [
      {
        role: "Mathematics Instructor",
        org: "KRTC Schooling",
        period: "2025 - Present",
      },
      { role: "Instructor", org: "Pi Math Academy", period: "2023 - Present" },
      {
        role: "Data Analyst",
        org: "Climate Modeling Projects",
        period: "2023 - Present",
      },
    ],
    skills: [
      "Mathematical Problem Solving",
      "Matlab",
      "C Programming",
      "Fortran",
      "Data Analysis",
      "Climate Modeling",
    ],
    achievements: [
      "8th Position - 15th National Undergraduate Math Olympiad 2024",
      "3x Regional Math Olympiad Winner",
      "SSC GPA 5.00",
    ],
  },

  "ashad-belal": {
    id: 5,
    slug: "ashad-belal",
    name: "Ashad Belal",
    nameBn: "আশাদ বেলাল",
    title: "Science Instructor",
    department: "Physics & Mathematics",
    initials: "AB",
    color: "bg-violet-500",
    email: "ashadbelal1234@gmail.com",
    phone: "+880 1570216200",
    location: "Rajshahi, Bangladesh",
    type: "schooling",
    priority: 8,
    bio: `Ashad Belal is a talented young science instructor with exceptional academic achievements. He won the Bangladesh Physics Olympiad in 2019, demonstrating his strong foundation in physics and scientific reasoning.

Currently pursuing BSc in Mathematics at University of Rajshahi, he has been teaching as a home tutor since 2022. He has strong command over Math, Physics, Chemistry, and Biology, with excellent communication and explanation skills that make complex concepts accessible to students.`,
    education: [
      {
        degree: "BSc in Mathematics (Ongoing, 3rd Semester)",
        institution: "University of Rajshahi",
        year: "2023-Present",
      },
      {
        degree: "Higher Secondary Certificate (HSC)",
        institution: "Ramu Govt College",
        year: "2023",
        grade: "GPA: 5.00",
      },
      {
        degree: "Secondary School Certificate (SSC)",
        institution: "Eidgah Adarsha Shiksha Niketon",
        year: "2021",
        grade: "GPA: 4.61",
      },
    ],
    experience: [
      { role: "Science Instructor", org: "KRTC", period: "2025 - Present" },
      { role: "Home Tutor", org: "Private", period: "2022 - Present" },
    ],
    skills: [
      "Physics",
      "Mathematics",
      "Chemistry",
      "Biology",
      "Easy Explanation",
      "Student Mentoring",
    ],
    achievements: [
      "Winner - Bangladesh Physics Olympiad 2019",
      "HSC GPA 5.00",
      "Multi-subject Expertise",
    ],
  },

  "arifin-asad": {
    id: 6,
    slug: "arifin-asad",
    name: "Arifin Asad",
    nameBn: "আরিফিন আসাদ",
    title: "Chemistry Instructor",
    department: "Applied Chemistry",
    initials: "AA",
    color: "bg-emerald-500",
    email: "arifinsk72@gmail.com",
    phone: "+880 1842739155",
    location: "Belkuchi, Sirajganj, Bangladesh",
    type: "schooling",
    priority: 6,
    bio: `Arifin Asad is a motivated undergraduate student of Applied Chemistry and Chemical Engineering with strong academic results and extensive teaching experience. Currently in his 4th year at Rajshahi University with GPA 3.45, he has been actively involved in teaching.

He works as an instructor at Chorcha Coaching Center and UAC Coaching Center, teaching 4+ batches independently. He also teaches more than 60 students privately. His perfect GPA 5.00 in both HSC and SSC reflects his academic excellence.`,
    education: [
      {
        degree: "BSc Applied Chemistry & Chemical Engineering (4th Year)",
        institution: "Rajshahi University",
        year: "2021-Present",
        grade: "GPA: 3.45/4.00",
      },
      {
        degree: "Higher Secondary Certificate (HSC)",
        institution: "Rajshahi Board",
        year: "2020",
        grade: "GPA: 5.00",
      },
      {
        degree: "Secondary School Certificate (SSC)",
        institution: "Rajshahi Board",
        year: "2018",
        grade: "GPA: 5.00",
      },
    ],
    experience: [
      { role: "Chemistry Instructor", org: "KRTC", period: "2025 - Present" },
      {
        role: "Instructor",
        org: "Chorcha Coaching Center",
        period: "2022 - Present",
      },
      {
        role: "Instructor",
        org: "UAC Coaching Center",
        period: "2022 - Present",
      },
      { role: "Private Tutor", org: "60+ Students", period: "2021 - Present" },
    ],
    skills: [
      "Chemistry",
      "Chemical Engineering",
      "Classroom Management",
      "Effective Communication",
      "Time Management",
      "Leadership",
    ],
    achievements: [
      "60+ Private Students",
      "4+ Independent Batches",
      "HSC & SSC GPA 5.00",
    ],
  },

  "md-mafizul-islam": {
    id: 7,
    slug: "md-mafizul-islam",
    name: "Md. Mafizul Islam",
    nameBn: "মো. মাফিজুল ইসলাম",
    title: "Physics Instructor",
    department: "Physics",
    initials: "MI",
    color: "bg-amber-500",
    email: "mdmafizulislam93@gmail.com",
    phone: "+880 1767530231",
    location: "Binodpur, Rajshahi, Bangladesh",
    type: "schooling",
    priority: 7,
    bio: `Md. Mafizul Islam is a dedicated Physics instructor currently pursuing BSc in Physics at University of Rajshahi. His teaching philosophy focuses on understanding students' needs and making knowledge boundaries wide through motivational teaching methods.

He believes in staying updated with new technology and teaching techniques to always be the best teacher he can be. Since 2023, he has been working as a home tutor with strong command over Physics, Chemistry, and Math.`,
    education: [
      {
        degree: "BSc in Physics (3rd Year, 1st Semester)",
        institution: "University of Rajshahi",
        year: "2022-Present",
      },
    ],
    experience: [
      { role: "Physics Instructor", org: "KRTC", period: "2025 - Present" },
      { role: "Home Tutor", org: "Private", period: "2023 - Present" },
    ],
    skills: [
      "Physics",
      "Chemistry",
      "Mathematics",
      "Motivational Teaching",
      "Student Care",
    ],
    achievements: ["Dedicated Home Tutor", "Multi-subject Teaching"],
  },

  "md-faridul-islam": {
    id: 8,
    slug: "md-faridul-islam",
    name: "Md. Faridul Islam",
    nameBn: "মো. ফরিদুল ইসলাম",
    title: "Senior Physics Instructor",
    department: "Physics",
    initials: "FI",
    color: "bg-teal-500",
    phone: "+880 1939398703",
    location: "Rajshahi, Bangladesh",
    type: "schooling",
    priority: 6,
    bio: `Md. Faridul Islam is the most experienced instructor at KRTC with 6-7 years of teaching experience. He holds both MSc and BSc (Hons) in Physics from University of Rajshahi with excellent academic records (CGPA 3.44 and 3.52 respectively).

His extensive experience spans teaching Physics, Chemistry, Math, and ICT to students from Class 6 to 12. His deep subject knowledge combined with years of practical teaching experience makes him a valuable mentor for students preparing for higher studies.`,
    education: [
      {
        degree: "MSc in Physics",
        institution: "University of Rajshahi",
        year: "2020-2021",
        grade: "CGPA: 3.44",
      },
      {
        degree: "BSc (Hons) in Physics",
        institution: "University of Rajshahi",
        year: "2016-2020",
        grade: "CGPA: 3.52",
      },
    ],
    experience: [
      {
        role: "Senior Physics Instructor",
        org: "KRTC Schooling",
        period: "2025 - Present",
      },
      {
        role: "Physics & Science Tutor",
        org: "Private Teaching",
        period: "2018 - Present",
      },
    ],
    skills: [
      "Physics",
      "Chemistry",
      "Mathematics",
      "ICT",
      "Class 6-12 Curriculum",
      "Exam Preparation",
    ],
    achievements: [
      "6-7 Years Teaching Experience",
      "MSc Physics",
      "Multi-level Teaching Expert",
    ],
  },

  // ==================
  // KRTC Schooling - New Members
  // ==================
  "md-golam-azom": {
    id: 9,
    slug: "md-golam-azom",
    name: "Md. Golam Azom",
    nameBn: "মো. গোলাম আযম",
    title: "Physics Instructor",
    department: "Physics",
    initials: "GA",
    color: "bg-indigo-500",
    email: "golamazom317@gmail.com",
    phone: "+880 1566027388",
    location: "Zia Hall, University of Rajshahi",
    type: "schooling",
    priority: 6,
    bio: `Md. Golam Azom is a dedicated 4th-year Physics student at the University of Rajshahi with a strong foundation in analytical thinking and problem-solving. He is a lifelong learner with a deep passion for exploring new technologies and sharing knowledge with others.

He started teaching as a private tutor during the Corona period in 2021 and has since taught many academic and admission students, many of whom are now studying in public universities. He also worked as a Script Evaluator and QNA Teacher at Udvas Academic and Admission Care from 2023-2025.`,
    education: [
      {
        degree: "BSc (Honours) in Physics (Final Year)",
        institution: "University of Rajshahi",
        year: "2022-Present",
        grade: "First Class in all exams",
      },
      {
        degree: "Higher Secondary Certificate (HSC)",
        institution: "Govt. Azizul Haque College, Bogura",
        year: "2021",
        grade: "GPA: 5.00 (95%)",
      },
      {
        degree: "Secondary School Certificate (SSC)",
        institution: "Talora Altaf Ali High School, Bogura",
        year: "2019",
        grade: "GPA: 5.00 (92%)",
      },
    ],
    experience: [
      {
        role: "Physics Instructor",
        org: "KRTC Schooling",
        period: "2025 - Present",
      },
      {
        role: "Script Evaluator & QNA Teacher",
        org: "Udvas Academic and Admission Care",
        period: "2023 - 2025",
      },
      { role: "Private Tutor", org: "Self-employed", period: "2021 - Present" },
    ],
    skills: [
      "Physics",
      "Analytical Thinking",
      "Problem Solving",
      "MS Word",
      "MS Excel",
      "PowerPoint",
      "Communication",
    ],
    achievements: [
      "HSC GPA 5.00 (95%)",
      "SSC GPA 5.00 (92%)",
      "First Class in University Exams",
      "Students in Public Universities",
    ],
  },

  "md-sojib-hossain": {
    id: 10,
    slug: "md-sojib-hossain",
    name: "Md. Sojib Hossain",
    nameBn: "মো. সজিব হোসেন",
    title: "Science Instructor",
    department: "Biology & Agriculture",
    initials: "SH",
    color: "bg-lime-600",
    phone: "+880 1850523503",
    location: "Shahazadpur, Sirajganj / Rajshahi",
    type: "schooling",
    priority: 7,
    bio: `Md. Sojib Hossain is a 4th-year student of Crop Science and Technology at the University of Rajshahi. With excellent academic credentials including GPA 5.00 in both SSC and HSC, he brings strong knowledge in science subjects.

He has the ability to teach students in an easy and effective way with good communication skills. He is punctual, responsible, and has experience in both private tutoring and teaching in coaching centers/academies.`,
    education: [
      {
        degree: "BSc in Crop Science and Technology (4th Year)",
        institution: "University of Rajshahi",
        year: "2022-Present",
      },
      {
        degree: "Higher Secondary Certificate (HSC)",
        institution: "Shahid Bulbul Govt College, Pabna",
        year: "2021",
        grade: "GPA: 5.00",
      },
      {
        degree: "Secondary School Certificate (SSC)",
        institution: "B B Pilot Govt High School, Bera, Pabna",
        year: "2019",
        grade: "GPA: 5.00",
      },
    ],
    experience: [
      {
        role: "Science Instructor",
        org: "KRTC Schooling",
        period: "2025 - Present",
      },
      {
        role: "Coaching/Academy Teacher",
        org: "Various Institutions",
        period: "2021 - Present",
      },
      { role: "Private Tutor", org: "Self-employed", period: "2020 - Present" },
    ],
    skills: [
      "Biology",
      "Agriculture Science",
      "Easy Teaching Method",
      "Communication",
      "Computer Basics",
      "Time Management",
    ],
    achievements: [
      "HSC GPA 5.00",
      "SSC GPA 5.00",
      "University of Rajshahi Student",
    ],
  },

  "md-sagor-hosen": {
    id: 12,
    slug: "md-sagor-hosen",
    name: "Md. Sagor Hosen",
    nameBn: "মো. সাগর হোসেন",
    title: "Physics Instructor",
    department: "Physics",
    initials: "SG",
    color: "bg-red-500",
    email: "sagorhossain.0042@gmail.com",
    phone: "+880 1758970142",
    location: "Rajshahi, Bangladesh",
    dateOfBirth: "24 October 2002",
    type: "schooling",
    priority: 8,
    bio: `Md. Sagor Hosen is a motivated Physics student at the University of Rajshahi with a strong passion for teaching and academic excellence. He has been working as a home tutor since 2022, helping students understand subjects like Mathematics, Physics, Chemistry, and Biology through simple and effective explanations.

His achievement as a winner of the Bangladesh Physics Olympiad 2023 reflects his strong analytical and problem-solving abilities. He possesses strong communication skills and is organized, detail-oriented, and committed to student success.`,
    education: [
      {
        degree: "BSc in Physics (Final Year)",
        institution: "University of Rajshahi",
        year: "2022-2026 (Expected)",
      },
      {
        degree: "Higher Secondary Certificate (HSC)",
        institution: "Agrani School & College",
        year: "2020",
      },
      {
        degree: "Secondary School Certificate (SSC)",
        institution: "Shohid Ahsan Ull Habib High School",
        year: "2018",
      },
    ],
    experience: [
      {
        role: "Physics Instructor",
        org: "KRTC Schooling",
        period: "2025 - Present",
      },
      {
        role: "Home Tutor",
        org: "Self-employed",
        period: "2022 - Present",
        description:
          "Teaching Mathematics, Physics, Chemistry, and Biology through simple and effective explanations.",
      },
    ],
    skills: [
      "Physics",
      "Mathematics",
      "Chemistry",
      "Biology",
      "Communication",
      "MS Word",
      "PowerPoint",
      "Zoom",
      "Google Meet",
    ],
    achievements: [
      "Winner, Bangladesh Physics Olympiad 2023",
      "Strong Analytical & Problem-Solving Skills",
      "University of Rajshahi Student",
    ],
  },

  "fahim-reza": {
    id: 13,
    slug: "fahim-reza",
    name: "Fahim Reza",
    nameBn: "ফাহিম রেজা",
    title: "Physics Instructor",
    department: "Physics",
    initials: "FR",
    color: "bg-blue-500",
    email: "fahimreza2210622123@gmail.com",
    phone: "+880 1615653386",
    location: "Rajshahi, Bangladesh",
    type: "schooling",
    priority: 9,
    bio: `Fahim Reza is a Physics student at the University of Rajshahi with hands-on teaching experience. He is dedicated to helping students understand complex scientific concepts through clear explanations and practical examples.

His teaching approach focuses on making physics accessible and engaging for students at all levels.`,
    education: [
      {
        degree: "BSc in Physics",
        institution: "University of Rajshahi",
        year: "Ongoing",
      },
    ],
    experience: [
      {
        role: "Physics Instructor",
        org: "KRTC Schooling",
        period: "2025 - Present",
      },
      {
        role: "Teaching",
        org: "Private",
        period: "Previous",
      },
    ],
    skills: ["Physics", "Teaching", "Student Mentoring"],
    achievements: ["University of Rajshahi Student", "Teaching Experience"],
  },

  // ==================
  // Joint Advisory Team (JAT)
  // ==================
  "ranjit-kumar-biswas": {
    id: 38,
    slug: "ranjit-kumar-biswas",
    name: "Dr. Ranjit Kumar Biswas",
    title: "Professor",
    department:
      "Department of Applied Chemistry and Chemical Engineering, University of Rajshahi",
    initials: "RB",
    color: "bg-emerald-600",
    location: "Rajshahi-6205, Bangladesh",
    type: "advisory-jat",
    priority: 1,
    bio: `Dr. Ranjit Kumar Biswas is a Professor at the Department of Applied Chemistry and Chemical Engineering, University of Rajshahi. His research programme spans hydrometallurgy and separation science — with sustained contributions in leaching of mineral resources, liquid-liquid (solvent) extraction of metal ions, kinetics of leaching and extraction processes, precipitation chemistry, and ion-exchange separation. His scholarship is reflected in a substantial peer-reviewed publication record with over 1,800 citations and an h-index of 26 (Google Scholar).

As a senior member of the Joint Advisory Team (JAT) of the Kekuleon Research and Training Center (KRTC), he provides academic guidance on curriculum design, applied training methodology, and laboratory infrastructure — particularly in the areas of hydrometallurgy, separation science, and analytical chemistry — helping align KRTC's programmes with internationally benchmarked standards.`,
    education: [],
    experience: [
      {
        role: "Joint Advisory Team (JAT) Member",
        org: "Kekuleon Research and Training Center (KRTC)",
        period: "2025 - Present",
      },
      {
        role: "Professor",
        org: "Department of Applied Chemistry and Chemical Engineering, University of Rajshahi",
        period: "Present",
      },
    ],
    skills: [
      "Hydrometallurgy",
      "Liquid-Liquid (Solvent) Extraction of Metal Ions",
      "Leaching & Kinetics of Leaching",
      "Precipitation Chemistry",
      "Ion-Exchange Separation",
      "Separation Science",
      "Analytical Chemistry",
      "Research Mentoring",
    ],
    achievements: [
      "Professor, Department of Applied Chemistry and Chemical Engineering, University of Rajshahi",
      "1,800+ citations and h-index of 26 (Google Scholar)",
      "i10-index of 38 — sustained record of cited peer-reviewed publications",
      "JAT Member, Kekuleon Research and Training Center (KRTC)",
    ],
  },
  "sha-md-shahan-shahriar": {
    id: 19,
    slug: "sha-md-shahan-shahriar",
    name: "Dr. Sha Md. Shahan Shahriar",
    title: "Associate Professor",
    department:
      "Department of Applied Chemistry and Chemical Engineering, University of Rajshahi",
    initials: "SS",
    color: "bg-indigo-500",
    email: "shahan@ru.ac.bd",
    emailAlt: "shahan.acrubd@gmail.com",
    location: "Rajshahi-6205, Bangladesh",
    type: "advisory-jat",
    priority: 3,
    bio: `Dr. Sha Md. Shahan Shahriar is an Associate Professor at the Department of Applied Chemistry and Chemical Engineering, Faculty of Engineering, University of Rajshahi, Bangladesh. His scholarship spans environmental chemistry, water and wastewater treatment, heavy metal pollution and risk assessment, environmental monitoring, and food safety — with an extensive peer-reviewed publication record in journals including Food Control (Elsevier), Toxicology Reports (Elsevier), Journal of Food Composition and Analysis (Elsevier), and Environmental Science and Pollution Research (Springer Nature).

As a member of the Joint Advisory Team (JAT) of the Kekuleon Research and Training Center (KRTC), he contributes academic guidance on curriculum design, applied training methodology, and laboratory infrastructure — helping align KRTC's programmes with internationally benchmarked standards in environmental and analytical chemistry.`,
    education: [
      {
        degree: "PhD",
        institution: "University of Rajshahi",
        year: "2018",
      },
      {
        degree: "MSc (Thesis) in Applied Chemistry and Chemical Technology",
        institution: "University of Rajshahi",
        year: "2006",
      },
      {
        degree: "BSc (Honours) in Applied Chemistry and Chemical Technology",
        institution: "University of Rajshahi",
        year: "2005",
      },
      {
        degree: "Higher Secondary Certificate (HSC)",
        institution: "Badarganj Degree College",
        year: "2001",
      },
      {
        degree: "Secondary School Certificate (SSC)",
        institution: "Nurul Huda High School",
        year: "1999",
      },
    ],
    experience: [
      {
        role: "Joint Advisory Team (JAT) Member",
        org: "Kekuleon Research and Training Center (KRTC)",
        period: "2025 - Present",
      },
      {
        role: "Associate Professor",
        org: "Department of Applied Chemistry and Chemical Engineering, University of Rajshahi",
        period: "Oct 2021 - Present",
      },
      {
        role: "Assistant Professor",
        org: "Department of Applied Chemistry and Chemical Engineering, University of Rajshahi",
        period: "Apr 2017 - Oct 2021",
      },
      {
        role: "Lecturer",
        org: "Department of Applied Chemistry and Chemical Engineering, University of Rajshahi",
        period: "Apr 2014 - Apr 2017",
      },
    ],
    research: [
      {
        title:
          "Advanced Carbon Capture, Utilization, and Storage Technologies: A Review for Sustainable Carbon Cycle Management",
        institution: "Journal of Science and Engineering Papers, 3(1), 175–184",
        period: "January 2026",
        description: "I. A. Raj, J. A. Ananna, S. M. S. Shahriar*",
      },
      {
        title:
          "Assessment of heavy metal contamination and associated risks in fish feed and pond-cultured fish",
        institution: "Food Control, 181, 111775 (Elsevier)",
        period: "October 2025",
        description: "T. Hasan, M. T. A. Sufal, S. M. S. Shahriar*, et al.",
      },
      {
        title:
          "Heavy Metal Contamination in Fruits and Human Health Risk Assessment in Northwestern Bangladesh",
        institution:
          "Journal of Food Composition and Analysis, 148(1), 108159 (Elsevier)",
        period: "August 2025",
        description: "M. N. Islam, S. M. S. Shahriar*, et al.",
      },
      {
        title:
          "Analyzing the Risk of Heavy Metal Pollution in Wastewater from the Open Drainage System in Rajshahi City, Bangladesh",
        institution: "Journal of Engineering Science, 16(1), 47–60",
        period: "July 2025",
        description: "S. M. S. Shahriar*, et al.",
      },
      {
        title:
          "Heavy metal pollution in poultry feeds and broiler chickens in Bangladesh",
        institution: "Toxicology Reports, 14, 101932 (Elsevier)",
        period: "January 2025",
        description: "S. M. S. Shahriar*, et al.",
      },
      {
        title:
          "Assessment of contamination and pollution risks caused by heavy metals in fish pond sediments",
        institution: "Tra Vinh University Journal of Science, 14(2), 1–13",
        period: "June 2024",
        description: "S. M. S. Shahriar*, et al.",
      },
      {
        title:
          "Polyethylene Degradation by Microbes (Bacteria & Fungus): A Review",
        institution: "Journal of Global Ecology and Environment, 18(1), 32–51",
        period: "June 2023",
        description: "S. M. S. Shahriar*, et al.",
      },
      {
        title:
          "Metals extraction processes from electronic waste: constraints and opportunities",
        institution:
          "Environmental Science and Pollution Research, 29, 32651–32669 (Springer Nature)",
        period: "February 2022",
        description: "S. C. Chakraborty, et al., including S. M. S. Shahriar",
      },
    ],
    skills: [
      "Environmental Pollution",
      "Water and Wastewater Treatment",
      "Water Quality Analysis",
      "Environmental Analytical Chemistry",
      "Renewable Energy & Environment Protection",
      "Organic Environmental Chemistry",
      "Food Safety and Hygiene",
      "Agricultural Pollution",
      "Environmental Impact Assessment",
      "Environmental Monitoring",
      "Heavy Metal Pollution & Analysis",
      "Hazardous Waste Management",
    ],
    achievements: [
      "PhD, University of Rajshahi (2018)",
      "Associate Professor, Department of Applied Chemistry and Chemical Engineering, University of Rajshahi",
      "Extensive peer-reviewed publications in Elsevier, Springer Nature and international journals",
      "JAT Member, Kekuleon Research and Training Center (KRTC)",
    ],
  },

  "dilip-kumar-sarkar": {
    id: 20,
    slug: "dilip-kumar-sarkar",
    name: "Dr. Dilip Kumar Sarkar",
    title: "Associate Professor",
    department:
      "Department of Applied Chemistry and Chemical Engineering, University of Rajshahi",
    initials: "DS",
    color: "bg-amber-500",
    email: "dilipkumar249@ru.ac.bd",
    location: "Rajshahi, Bangladesh",
    type: "advisory-jat",
    priority: 2,
    bio: `Dr. Dilip Kumar Sarkar is an Associate Professor at the Department of Applied Chemistry and Chemical Engineering, University of Rajshahi. He earned his PhD from Universiti Kebangsaan Malaysia (UKM) and his MSc and BSc from the University of Rajshahi. His research centres on renewable energy harvesting, conversion, and storage — with contributions to green hydrogen energy, electrocatalysts for electrocatalytic and photoelectrochemical water splitting, and development of solar cell materials (HTMs, ETMs for Perovskite, CdTe, CZTS), alongside energy-storage materials for batteries, capacitors/supercapacitors, and sensors.

As a member of the Joint Advisory Team (JAT) of the Kekuleon Research and Training Center (KRTC), he advises on curriculum development, laboratory infrastructure, and applied training programmes that bridge theoretical education and internationally benchmarked practice, particularly in materials science and renewable-energy-related applied chemistry.`,
    education: [
      {
        degree: "PhD",
        institution: "Universiti Kebangsaan Malaysia (UKM), Malaysia",
        year: "Completed",
      },
      {
        degree: "MSc in Applied Chemistry and Chemical Technology",
        institution: "University of Rajshahi",
        year: "1997",
      },
      {
        degree: "BSc (Honours) in Applied Chemistry and Chemical Technology",
        institution: "University of Rajshahi",
        year: "1996",
      },
      {
        degree: "Higher Secondary Certificate (HSC)",
        institution: "Carmichael College, Rangpur",
        year: "1992",
      },
      {
        degree: "Secondary School Certificate (SSC)",
        institution: "Jahangirabad High School",
        year: "1990",
      },
    ],
    experience: [
      {
        role: "Joint Advisory Team (JAT) Member",
        org: "Kekuleon Research and Training Center (KRTC)",
        period: "2025 - Present",
      },
      {
        role: "Associate Professor",
        org: "Department of Applied Chemistry and Chemical Engineering, University of Rajshahi",
        period: "Apr 2017 - Present",
      },
      {
        role: "Lecturer",
        org: "Department of Applied Chemistry and Chemical Engineering, University of Rajshahi",
        period: "Apr 2014 - Apr 2017",
      },
      {
        role: "Lecturer in Chemistry",
        org: "Mohammadpur Government Model School and College, Dhaka",
        period: "Oct 2006 - Apr 2014",
      },
      {
        role: "Lecturer in Chemistry",
        org: "Dhaka Residential Model College, Mohammadpur, Dhaka",
        period: "Apr 2002 - Oct 2006",
      },
    ],
    research: [
      {
        title:
          "Solvent Extraction of Chromium(III) from Sulphate Medium: A Comprehensive Liquid-Liquid Extraction Study Using Cyanex 302",
        institution: "Volume 03, Issue 01, 168–174",
        period: "January 2026",
        description: "A. K. Karmakar*, D. K. Sarkar, et al.",
      },
      {
        title:
          "Device Performance for CTS-Based Thin Film Solar Cell Using SCAPS-1D Simulator",
        institution:
          "Journal of Sustainability Science and Management, 20, 1807–1818",
        period: "September 2025",
        description: "F. M. Islam, M. A. Islam, D. K. Sarkar, N. M. Yatim*",
      },
      {
        title:
          "Numerical investigation of Aloe Vera-mediated green synthesized CuAlO₂ as HTL in Pb-free perovskite solar cells",
        institution:
          "Journal of Taibah University for Science, 18(1) (Taylor & Francis)",
        period: "January 2024",
        description: "D. K. Sarkar, et al.",
      },
      {
        title:
          "A numerical study on delafossite CuFeO₂ as an absorber for efficient and sustainable oxide solar cells",
        institution: "Japanese Journal of Applied Physics, 62, 102004",
        period: "October 2023",
        description: "D. K. Sarkar, et al.",
      },
      {
        title:
          "Aloe vera extract mediated hydrothermal synthesis of rose-like copper iron sulfide for efficient oxygen evolution reaction",
        institution:
          "Journal of the Taiwan Institute of Chemical Engineers, 151, 105131",
        period: "October 2023",
        description: "V. Selvanathan, D. K. Sarkar, et al.",
      },
      {
        title:
          "Phytochemicals assisted green synthesis of copper oxide/cobalt oxide as efficient electrocatalyst for oxygen evolution reaction",
        institution: "International Journal of Hydrogen Energy",
        period: "July 2023",
        description: "D. K. Sarkar, et al.",
      },
      {
        title:
          "Phytochemical-assisted green synthesis of CuFeOx nano-rose electrocatalysts for oxygen evolution reaction in alkaline media",
        institution: "RSC Advances, 13, 19130–19139",
        period: "June 2023",
        description: "D. K. Sarkar, et al.",
      },
      {
        title:
          "Lead-free efficient perovskite solar cell device optimization and defect study using Mg doped CuCrO₂ as HTL and WO₃ as ETL",
        institution: "Solar Energy, 243, 215–224",
        period: "June 2022",
        description: "D. K. Sarkar, et al.",
      },
    ],
    skills: [
      "Renewable Energy Harvesting, Conversion & Storage",
      "Green Hydrogen Energy",
      "Electrocatalysts for Water Splitting (Electrocatalytic & Photoelectrochemical)",
      "Solar Cell Materials (HTMs, ETMs for Perovskite, CdTe, CZTS)",
      "Energy Storage Materials (Battery, Capacitor/Supercapacitor)",
      "Sensors",
      "Physical, Inorganic & Organic Chemistry",
      "Research Methodology",
    ],
    achievements: [
      "PhD, Universiti Kebangsaan Malaysia (UKM)",
      "Associate Professor, Department of Applied Chemistry and Chemical Engineering, University of Rajshahi",
      "Extensive publications in renewable energy & solar cell materials (Elsevier, Taylor & Francis, RSC, Japanese Journal of Applied Physics)",
      "JAT Member, Kekuleon Research and Training Center (KRTC)",
    ],
  },

  // ==================
  // Co-Joint Advisory Team (C-JAT)
  // ==================
  "md-sadequl-islam": {
    id: 42,
    slug: "md-sadequl-islam",
    name: "Md. Sadequl Islam",
    nameBn: "মো. সাদেকুল ইসলাম",
    title:
      "Senior Executive-2, Quality Control — Healthcare Pharmaceuticals Limited",
    department: "Head, Co-Joint Advisory Team (C-JAT) — KRTC",
    initials: "SI",
    color: "bg-pink-600",
    email: "sadequlsaju@gmail.com",
    phone: "+880 1751 432 185",
    location: "Tongi, Gazipur, Bangladesh",
    address: "Cherag Ali, Tongi, Gazipur, Bangladesh",
    dateOfBirth: "08 August 1992",
    type: "advisory-cjat",
    priority: 1,
    bio: `Md. Sadequl Islam is a pharmaceutical Quality Control specialist with seven years of professional experience across regulated manufacturing environments. He currently serves as Senior Executive-2, Quality Control at Healthcare Pharmaceuticals Limited, Rajendrapur — handling Laboratory Incident Reports (LIR), Out-of-Specification (OOS) investigations, deviations, and change control; preparing and reviewing method-transfer protocols and reports; designing QRM and URS for QC equipment; and overseeing specification, test method and SOP preparation alongside ALCOA⁺-aligned data integrity and audit-ready GLP practice.

He holds an MSc Engg and a BSc Engg in Applied Chemistry and Chemical Engineering from the University of Rajshahi (CGPA 3.47 and 3.25 out of 4.00), with his MSc thesis on "Production of Soybean Methyl Ester and Its Engine Performance Test" (supervisor: Dr. Md. Anwarul Karim) and his undergraduate project on fuel-cell technology (supervisor: Dr. C. M. Mustafa). His earlier career — as Senior Officer, QC at Healthcare Pharmaceuticals Limited and prior to that as Executive, QC at Popular Pharmaceuticals Limited (Tongi Industrial Area) — spans hands-on operation of HPLC, GC, AAS, UV-Vis, FTIR, dissolution tester, Karl Fischer apparatus, autotitrator and disintegration tester, alongside SOP preparation, working-standard documentation, calibration, and laboratory investigation. He has also completed specialised training on Industrial Process Unit Operation and Process Control Technique at the Training Institute for Chemical Industries (TICI), Polash, Norshingdi.

As **Head of the Co-Joint Advisory Team (C-JAT)** at the Kekuleon Research and Training Center (KRTC), Md. Sadequl Islam leads the body responsible for the research, development, and institutional-modelling dimensions of KRTC's mission. He convenes C-JAT discussions, sets the team's collective advisory direction, coordinates with the Founder & Chairman and the Joint Advisory Team (JAT), and ensures that KRTC's research projects, applied training programmes, and laboratory practices are aligned with internationally benchmarked pharmaceutical-industry standards and broader societal development objectives.`,
    education: [
      {
        degree:
          "MSc in Engineering (M.Sc. Engg.) — Applied Chemistry and Chemical Engineering",
        institution: "University of Rajshahi",
        year: "2015 (1.5 Years)",
        grade: "CGPA 3.47 / 4.00",
      },
      {
        degree:
          "BSc in Engineering (B.Sc. Engg.) — Applied Chemistry and Chemical Engineering",
        institution: "University of Rajshahi",
        year: "2014 (4 Years)",
        grade: "CGPA 3.25 / 4.00",
      },
      {
        degree: "Higher Secondary Certificate (HSC) — Science",
        institution: "Kaunia Degree College, Rangpur (Dinajpur Board)",
        year: "2010",
        grade: "GPA 4.80 / 5.00",
      },
      {
        degree: "Secondary School Certificate (SSC) — Science",
        institution: "Bhayer Hat High School, Kaunia, Rangpur (Rajshahi Board)",
        year: "2008",
        grade: "GPA 4.69 / 5.00",
      },
      {
        degree:
          "Training on Industrial Process Unit Operation and Process Control Technique",
        institution:
          "Training Institute for Chemical Industries (TICI), Polash, Norshingdi-1611",
        year: "2014 (1 Month)",
      },
    ],
    experience: [
      {
        role: "Head, Co-Joint Advisory Team (C-JAT)",
        org: "Kekuleon Research and Training Center (KRTC)",
        period: "2025 - Present",
        description:
          "Leads the Co-Joint Advisory Team — convening advisory discussions on research direction, institutional modelling, and applied-science programme design; coordinates with the Founder & Chairman and the Joint Advisory Team to align KRTC's research and training activities with internationally benchmarked pharmaceutical and applied-chemistry standards.",
      },
      {
        role: "Senior Executive-2, Quality Control",
        org: "Healthcare Pharmaceuticals Limited, Rajendrapur, Gazipur",
        period: "January 2024 - Present",
        description:
          "Handles LIR, OOS, deviations and change control; prepares and reviews method-transfer protocols and reports; designs QRM and URS for QC equipment in line with regulatory guidelines; prepares and reviews specifications, test methods and SOPs for the QC laboratory; ensures ALCOA⁺-aligned data integrity and audit-ready GLP practice.",
      },
      {
        role: "Senior Officer, Quality Control",
        org: "Healthcare Pharmaceuticals Limited, Rajendrapur, Gazipur",
        period: "August 2022 - December 2023",
        description:
          "Sampling and analysis of raw materials, bulk products and finished products as per STP; operation of HPLC, GC, AAS, UV-Vis, FTIR, dissolution tester, Karl Fischer apparatus and disintegration tester; calibration of all QC instruments; URS preparation and comparative studies; QIR/OOS/deviation/change-control handling; specification, test method and SOP preparation.",
      },
      {
        role: "Executive, Quality Control",
        org: "Popular Pharmaceuticals Limited, Tongi Industrial Area, Gazipur",
        period: "October 2018 - March 2022",
        description:
          "Analysis of raw materials, bulk products and finished products as per procedure; preparation and standardisation of working standards, volumetric solutions and test solutions; CRS monitoring and control; daily accuracy checks and equipment calibration; operation of HPLC, GC, AAS, UV-Vis, FTIR, dissolution tester, Karl Fischer apparatus, autotitrator and disintegration tester; OOS, deviation and laboratory investigation handling; SOP and method preparation.",
      },
    ],
    research: [
      {
        title:
          "Production of Soybean Methyl Ester and Its Engine Performance Test (MSc Thesis)",
        supervisor: "Dr. Md. Anwarul Karim, Assistant Professor, ACCE, RU",
        institution: "University of Rajshahi",
        period: "MSc Engg",
      },
      {
        title: "Project on Fuel Cell (BSc Project)",
        supervisor: "Dr. C. M. Mustafa, Professor, ACCE, RU",
        institution: "University of Rajshahi",
        period: "BSc Engg",
      },
    ],
    skills: [
      "C-JAT Leadership & Advisory Programme Design",
      "Pharmaceutical Quality Control",
      "LIR, OOS, Deviation & Change Control Investigation",
      "Method Transfer Protocol & Reporting",
      "QRM & URS Preparation for QC Equipment",
      "Specification, Test Method & SOP Authoring",
      "Data Integrity (ALCOA⁺ Principles)",
      "GLP Compliance & Audit Readiness",
      "HPLC, GC, AAS, UV-Vis, FTIR Operation",
      "Dissolution Tester, Karl Fischer, Autotitrator, Disintegration Tester",
      "Working Standard, CRS Monitoring & Control",
      "Volumetric & Test Solution Preparation",
      "Instrument Calibration & Comparative Studies",
      "Laboratory Investigation",
      "Industrial Process Unit Operation & Process Control",
    ],
    languages: [
      { language: "Bangla", level: "Native" },
      { language: "English", level: "Fluent (Reading, Writing, Speaking)" },
    ],
    organizations: [
      {
        role: "Joint Secretary",
        org: "Applied Chemistry & Chemical Engineering (ACCE) Group, University of Rajshahi",
      },
      {
        role: "Member",
        org: "Rajshahi University Higher Study Club (RUHSC)",
      },
      {
        role: "Player",
        org: "ACCE Department Football Team, University of Rajshahi",
      },
    ],
    achievements: [
      "Head, Co-Joint Advisory Team (C-JAT), Kekuleon Research and Training Center (KRTC)",
      "Senior Executive-2, Quality Control, Healthcare Pharmaceuticals Limited",
      "Seven years of pharmaceutical Quality Control experience",
      "MSc Engg in Applied Chemistry and Chemical Engineering (CGPA 3.47), University of Rajshahi",
      "BSc Engg in Applied Chemistry and Chemical Engineering (CGPA 3.25), University of Rajshahi",
      "TICI-trained — Industrial Process Unit Operation and Process Control Technique",
      "Joint Secretary, ACCE Group, University of Rajshahi",
    ],
  },

  "md-ashiqul-islam": {
    id: 21,
    slug: "md-ashiqul-islam",
    name: "Md Ashiqul Islam",
    nameBn: "মো. আশিকুল ইসলাম",
    title: "Executive, Chemical Lab (C&P) — SGS Bangladesh Limited",
    department: "Analytical & Food Safety Chemistry",
    initials: "AI",
    color: "bg-blue-500",
    email: "www.dccashiqul866@gmail.com",
    phone: "+880 1768981834",
    location: "Mirpur, Dhaka, Bangladesh",
    address: "10/5, Ananda Nagar, Mirpur, 1216, Dhaka, Bangladesh",
    dateOfBirth: "31 December 1993",
    type: "advisory-cjat",
    priority: 2,
    bio: `Md Ashiqul Islam is an analytical chemist specialising in spectrometric and instrumental methods applied to food safety, water quality, and chemical manufacturing. He currently serves as an Executive in the Chemical Lab, C&P at SGS Bangladesh Limited, Dhaka, where he conducts physical and chemical testing of food and water using UV-Vis spectroscopy (APHA method), metal analysis by ICP-OES, crude protein testing by GAFTA method, and moisture, ash, energy, fat and carbohydrate assays.

He holds a Bachelor of Science in Chemistry from the University of Dhaka and has completed specialised professional training on Chemical Analysis by Spectrometric Methods at the Training Institute for Chemical Industries (TICI), covering UV-Vis, AAS, ICP-OES and ICP-MS instrumentation. Prior industrial experience spans Transcom Beverages Ltd (Quality Control, 2022) and Kohinoor Chemical Company (KCCL) (Cosmetic Chemist, 2021–2022), giving him applied grounding in formulation development, stability testing, and compliance with manufacturing safety and regulatory protocols.

As a member of the Co-Joint Advisory Team (C-JAT) of the Kekuleon Research and Training Center (KRTC), he contributes to research-oriented advisory discussions, supports the design of academic projects with societal benefit — particularly those touching food safety, water quality, and chemical manufacturing — and helps strengthen workshop-based practical research training for students.`,
    education: [
      {
        degree: "Bachelor of Science in Chemistry",
        institution: "University of Dhaka",
        year: "2018",
        grade: "3.18",
      },
      {
        degree: "Chemical Analysis by Spectrometric Methods (Training)",
        institution: "Training Institute for Chemical Industries (TICI)",
        year: "July - August 2019",
      },
      {
        degree:
          "Program Designs for UV-Vis Instrumentation and Modelling (Training)",
        institution: "The Red-Green Research Centre, Bangladesh",
        year: "May 2018",
      },
    ],
    experience: [
      {
        role: "Co-Joint Advisory Team (C-JAT) Member",
        org: "Kekuleon Research and Training Center (KRTC)",
        period: "2025 - Present",
      },
      {
        role: "Executive — Chemical Lab, C&P",
        org: "SGS Bangladesh Limited, Dhaka",
        period: "Dec 2023 - Present",
        description:
          "Preparation and standardisation of standard solutions and reagents; physical & chemical testing of food and water with UV-Vis spectroscopy (APHA method); metal analysis of food and water with ICP-OES (APHA method); crude protein testing in food and feed by GAFTA method; moisture, ash, energy, fat and carbohydrate analysis; execution of chemical tests and analyses using a range of laboratory instruments.",
      },
      {
        role: "Chemist — Quality Control",
        org: "Transcom Beverages Ltd (TBL)",
        period: "Feb 2022 - Aug 2022",
        description:
          "Provided technical support to production personnel, conducted laboratory investigations to identify root causes of production issues, documented experiments and batch records, ensured regulatory and safety compliance, and supported new product development projects.",
      },
      {
        role: "Cosmetic Chemist — Production",
        org: "Kohinoor Chemical Company (Bangladesh) Limited (KCCL)",
        period: "Feb 2021 - Jan 2022",
        description:
          "Formulated and developed chemical products; optimised product formulations and processes through laboratory experimentation; performed physical and chemical analyses of raw materials and finished products; conducted stability testing for shelf-life determination; developed and validated analytical methods.",
      },
    ],
    skills: [
      "UV-Vis Spectroscopy (APHA)",
      "ICP-OES & ICP-MS",
      "Atomic Absorption Spectroscopy (AAS)",
      "Food Safety Analysis (Crude Protein – GAFTA, Moisture, Ash, Fat, Carbohydrate)",
      "Water Quality Analysis",
      "Analytical Method Development & Validation",
      "Stability Testing",
      "Product Formulation",
      "GMP, SOP & Regulatory Compliance",
      "Internal Auditing — Operational & Cleaning Practices, IPM, Food Safety",
    ],
    languages: [
      { language: "Bengali", level: "Native" },
      { language: "English", level: "Professional" },
    ],
    achievements: [
      "Executive, Chemical Lab (C&P) — SGS Bangladesh Limited",
      "TICI Certified — Chemical Analysis by Spectrometric Methods",
      "Internal Auditor — Operational & Cleaning Practices, IPM & Food Safety",
      "C-JAT Member, Kekuleon Research and Training Center (KRTC)",
    ],
  },

  "md-parvez-hossain": {
    id: 39,
    slug: "md-parvez-hossain",
    name: "Md Parvez Hossain",
    nameBn: "মো. পারভেজ হোসেন",
    title: "Advisor, Marketing, Branding & Project Sustainability",
    department: "Marketing, Branding & Project Sustainability",
    initials: "PH",
    color: "bg-cyan-600",
    email: "hparvez13@gmail.com",
    phone: "+880 1633 037 197",
    location: "Rajshahi, Bangladesh",
    address: "H-832, East Dharampur, Binodpur, Motihar, Rajshahi",
    type: "advisory-cjat",
    priority: 3,
    bio: `Md Parvez Hossain is a marketing, branding, and business-operations specialist with a multidisciplinary background spanning accounting, human resources, graphic design, and legal-business compliance. He holds an MBA and a BBA in Accounting and Information Systems from the University of Rajshahi, complemented by professional certification as a Graphics Designer from Creative IT Institute Limited.

He currently serves as an Assistant Case Manager at Raju Law, where he handles EB-2 / EB-3 employment-based immigration cases, E-2 investment visas, change-of-status matters, and coordinates business and trademark registrations — liaising directly with clients, attorneys, and internal teams. Prior to this, he served as Head of Human Resources at Macroman Solution, leading talent acquisition, employee development, and organisational compliance. His earlier career spans extended graphic-design engagements with Macroman Solution and MCM Esports — building brand identities, logos, and multi-channel marketing collateral — alongside a content-writing role at Prime Fanatics, producing student-facing educational materials.

As a member of the Co-Joint Advisory Team (C-JAT) of the Kekuleon Research and Training Center (KRTC), he advises the Marketing, Branding & Project Sustainability function — contributing strategic input on KRTC's brand identity, communication design, project revenue and income-stream modelling, business and trademark compliance, and the long-term financial sustainability of KRTC's training, schooling, and applied-science programmes.`,
    education: [
      {
        degree: "MBA in Accounting and Information Systems",
        institution: "University of Rajshahi",
        year: "2021 - 2022",
      },
      {
        degree: "BBA in Accounting and Information Systems",
        institution: "University of Rajshahi",
        year: "2018 - 2021",
      },
      {
        degree: "Professional Graphics Designer",
        institution: "Creative IT Institute Limited",
        year: "2016 - 2017",
      },
      {
        degree: "Higher Secondary Certificate (HSC) — Business Studies",
        institution: "Nazneen School and College",
        year: "2016",
      },
      {
        degree: "Secondary School Certificate (SSC) — Business Studies",
        institution: "Nazneen School and College",
        year: "2014",
      },
    ],
    experience: [
      {
        role: "C-JAT Member — Advisor, Marketing, Branding & Project Sustainability",
        org: "Kekuleon Research and Training Center (KRTC)",
        period: "2025 - Present",
        description:
          "Advising on KRTC's marketing strategy, brand identity, project revenue and income-stream design, and the long-term financial sustainability of training, schooling, and applied-science programmes.",
      },
      {
        role: "Assistant Case Manager",
        org: "Raju Law",
        period: "July 2024 - Present",
        description:
          "Manages EB-2 / EB-3 employment-based immigration visa cases, assists with E-2 investment visas and Change-of-Status matters, and coordinates business and trademark registrations.",
      },
      {
        role: "Head of Human Resources",
        org: "Macroman Solution",
        period: "January 2023 - May 2024",
        description:
          "Oversaw all HR functions including talent acquisition, employee development, and compliance to support organisational growth.",
      },
      {
        role: "Graphic Designer",
        org: "Macroman Solution",
        period: "December 2019 - May 2024",
        description:
          "Created visually compelling designs supporting the company's marketing and branding initiatives.",
      },
      {
        role: "Graphic Designer",
        org: "MCM Esports",
        period: "April 2021 - April 2023",
        description:
          "Crafted brand-aligned graphics, logos, and promotional materials across digital and print media.",
      },
      {
        role: "Content Writer",
        org: "Prime Fanatics",
        period: "September 2021 - March 2024",
        description:
          "Researched, wrote, and edited articles, guides, and study materials for student learning.",
      },
    ],
    skills: [
      "Marketing Strategy & Brand Identity",
      "Logo Design & Visual Marketing Collateral",
      "Digital & Print Media Creation",
      "Project Revenue & Income-Stream Design",
      "Financial & Income Sustainability Planning",
      "Business & Trademark Registration",
      "Legal Documentation & Petitions",
      "U.S. Immigration Case Management (EB-2 / EB-3 / E-2)",
      "Human Resources Operations",
      "Talent Acquisition & Development",
      "Client & Stakeholder Relations",
      "Content Writing & Editorial",
      "Regulatory Compliance",
    ],
    languages: [
      { language: "Bangla", level: "Native" },
      { language: "English", level: "Professional proficiency" },
    ],
    achievements: [
      "MBA in Accounting and Information Systems, University of Rajshahi",
      "Assistant Case Manager, Raju Law — US Immigration & Business Registration",
      "Former Head of Human Resources, Macroman Solution",
      "Multi-firm brand-identity and marketing-design portfolio (Macroman Solution, MCM Esports)",
      "Professional Graphics Designer, Creative IT Institute Limited",
      "C-JAT Member, Kekuleon Research and Training Center (KRTC) — Marketing, Branding & Project Sustainability",
    ],
  },

  "md-nazrul-islam": {
    id: 41,
    slug: "md-nazrul-islam",
    name: "Md. Nazrul Islam",
    nameBn: "মো. নজরুল ইসলাম",
    title:
      "Assistant Manager, Quality Control (Oncology QC) — Healthcare Pharmaceuticals Limited",
    department: "Pharmaceutical Quality Control & Analytical Sciences",
    initials: "NI",
    color: "bg-teal-600",
    email: "nazrulchemist@gmail.com",
    phone: "+880 1711 713 161",
    location: "Gazipur, Bangladesh",
    address:
      "Adib Villa, Holding No. 662, Great Wall City, Gazipur Sadar, Gazipur-1702, Bangladesh",
    dateOfBirth: "07 April 1985",
    type: "advisory-jat",
    priority: 4,
    bio: `Md. Nazrul Islam is a pharmaceutical Quality Control and analytical-sciences specialist with about 16 years of industry experience spanning General Solid, Cephalosporin, Ophthalmic, MDI, DPI, General Sterile, Oncology Solid, and Oncology Sterile dosage forms. He currently serves as Assistant Manager, Quality Control (Oncology QC) at Healthcare Pharmaceuticals Limited, Rajendrapur — leading QC operations for testing and release of starting materials, finished products, and packaging materials, including toll-manufactured products for Beximco and Aristopharma.

His technical expertise covers analytical method validation and transfer (ICH/USP), stability studies (ICH), instrument qualification (URS, DQ, IQ, OQ, PQ), Out-of-Specification (OOS) investigation, deviation and quality risk assessment, CAPA, and the establishment of GLP- and data-integrity-compliant laboratories aligned with USFDA (21 CFR), EU (Eudralex), PIC/S, and TGA guidelines. He has served as Lab Solution Manager for the Shimadzu CDS System, has hands-on experience with Waters Empower 3 and Shimadzu LabSolutions CS, and works routinely with XRD, HPLC, GC, TLC, UV-Vis and IR spectroscopy, AAS, KF, dissolution tester, polarimeter, viscometer, DSC, surface area analyzer, polarized microscope, and Malvern particle-size analyzer. He has prepared QC laboratories for and faced audits from TGA, NPRA, ISO, and EU-GMP, with active preparation underway for upcoming USFDA, EU, and ANVISA inspections.

He holds an MSc in Inorganic Chemistry (Department of Chemistry, University of Rajshahi — 1st Class 9th) and a BSc (Honours) in Chemistry from the same institution. As a member of the Joint Advisory Team (JAT) of the Kekuleon Research and Training Center (KRTC), he contributes regulatory- and audit-grade insights to curriculum design, instrument training, and laboratory-quality practice — helping align KRTC's analytical-chemistry programmes with the standards of internationally regulated pharmaceutical manufacturing.`,
    education: [
      {
        degree: "MSc in Inorganic Chemistry",
        institution: "Department of Chemistry, University of Rajshahi",
        year: "2008 (Held in 2010)",
        grade: "1st Class 9th",
      },
      {
        degree: "BSc (Honours) in Chemistry — 4 Years",
        institution: "Department of Chemistry, University of Rajshahi",
        year: "2007 (Held in 2008)",
        grade: "2nd Class",
      },
      {
        degree: "Higher Secondary Certificate (HSC) — Science",
        institution: "Chuadanga Government College (Jessore Board)",
        year: "2003",
        grade: "A- (GPA 3.50, 1st Division)",
      },
      {
        degree: "Secondary School Certificate (SSC) — Science",
        institution: "Asmankhali High School (Jessore Board)",
        year: "2001",
        grade: "A (GPA 4.25, 1st Division)",
      },
    ],
    experience: [
      {
        role: "Joint Advisory Team (JAT) Member",
        org: "Kekuleon Research and Training Center (KRTC)",
        period: "2025 - Present",
        description:
          "Advising on curriculum design, instrument training, and laboratory-quality practice — particularly in pharmaceutical QC, analytical method validation, stability science, and regulatory audit readiness.",
      },
      {
        role: "Assistant Manager, Quality Control (Oncology QC)",
        org: "Healthcare Pharmaceuticals Limited, Rajendrapur, Gazipur",
        period: "January 2023 - Present",
        description:
          "Leads Oncology QC operations — testing and release of raw, intermediate, and finished products including toll-manufactured products for Beximco and Aristopharma; Lab Solution Manager of the Shimadzu CDS System; designs lab specifications and documentation to comply with USFDA, EU (21 CFR, Eudralex, PIC/S) and ANVISA guidelines; manages analytical method validation/verification, process validation, instrument qualification, stability studies, OOS investigations, deviation and quality risk assessment, CAPA, and audit preparation.",
      },
      {
        role: "Senior Executive, Quality Control (Acting In-charge, Oncology QC)",
        org: "Healthcare Pharmaceuticals Limited, Rajendrapur, Gazipur",
        period: "January 2020 - December 2022",
        description:
          "Acting in-charge of Oncology QC — laboratory setup of Specialised Oncology QC, Chromatographic Data System establishment, OOS investigation framework, employee training, and EU/USFDA audit readiness.",
      },
      {
        role: "Senior Executive-2, Quality Control (General QC)",
        org: "Healthcare Pharmaceuticals Limited, Rajendrapur, Gazipur",
        period: "January 2018 - December 2019",
        description:
          "Quality Control readiness for TGA and NPRA audits, finished-product analysis monitoring, instrument calibration, OOS handling, follow-up stability sample management, SOP/STP preparation, training execution, and management of HPLC columns and reference/working standards.",
      },
      {
        role: "Senior Officer, Quality Control (General QC)",
        org: "Healthcare Pharmaceuticals Limited, Rajendrapur, Gazipur",
        period: "January 2015 - December 2017",
        description:
          "Regulatory-audit readiness, finished-product analysis monitoring, biotech product analysis (SE-HPLC and RP-HPLC), MDI/DPI product analysis, SOP/STP preparation, qualification documentation, and laboratory troubleshooting.",
      },
      {
        role: "Officer, Quality Control (Cephalosporin QC)",
        org: "Healthcare Pharmaceuticals Limited, Rajendrapur, Gazipur",
        period: "June 2012 - December 2014",
        description:
          "Cephalosporin solid finished-product analysis, calibration of HPLC, UV-Vis spectrophotometer and dissolution tester, SOP/STP and qualification document preparation, and laboratory troubleshooting.",
      },
      {
        role: "Officer, Quality Control",
        org: "Supreme Pharmaceuticals Limited, Palashbari, Ashulia, Dhaka",
        period: "May 2010 - June 2012",
        description:
          "Raw-material sampling and analysis, finished-product analysis, in-process checks, line clearance, batch document compilation, and product stability studies.",
      },
    ],
    skills: [
      "Pharmaceutical Quality Control (USFDA / EU / TGA / ICH compliant)",
      "Analytical Method Validation, Verification & Transfer (ICH, USP)",
      "Stability Study Management (ICH guidelines)",
      "Instrument Qualification (URS, DQ, IQ, OQ, PQ)",
      "Out-of-Specification (OOS) Investigation, Deviation & QRM",
      "QMS, Change Control, CAPA",
      "Data Integrity (21 CFR Part 11) & Chromatographic Data Systems",
      "Waters Empower 3, Shimadzu LabSolutions CS, NOVA-LIMS",
      "HPLC, GC, TLC, UV-Vis, IR, AAS, KF, DSC, XRD",
      "Dissolution Tester, Polarimeter, Viscometer, Surface Area Analyzer, Malvern Particle Size",
      "GLP Laboratory Setup & Internal Audit",
      "Regulatory Audit Readiness (USFDA, EU-GMP, TGA, NPRA, ISO, ANVISA)",
      "Analysis of Biotech Products (Darbepoietin, Bevacizumab, Adalimumab)",
      "Oncology, Cephalosporin, MDI/DPI, Sterile, Ophthalmic Dosage Forms",
      "Leadership, Team Building & Training",
    ],
    languages: [
      { language: "Bangla", level: "Native" },
      { language: "English", level: "Proficient (Reading, Writing, Speaking)" },
    ],
    organizations: [
      {
        role: "Trained Professional",
        org: "Waters India Pvt. Limited (Bangalore, India)",
        description: "Training on Method Development and Custom Fields.",
      },
      {
        role: "Trained Professional",
        org: "Waters Malaysia Pvt. Limited (Shah Alam, Malaysia)",
        description: "Basic Troubleshooting on Chromatographic System.",
      },
      {
        role: "Trained Professional",
        org: "Shimadzu Asia Pacific Pte. Ltd. (Singapore)",
        description:
          "Principles and Operation of HPLC/UHPLC with LabSolutions Workstation; Regulatory Requirement on Data Integrity.",
      },
      {
        role: "Trained Professional",
        org: "Novatek International, Canada",
        description: "Training on NOVA-LIMS Software Module.",
      },
    ],
    achievements: [
      "Approximately 16 years of pharmaceutical Quality Control experience",
      "Assistant Manager, QC (Oncology QC), Healthcare Pharmaceuticals Limited",
      "MSc in Inorganic Chemistry (1st Class 9th), University of Rajshahi",
      "Lab Solution Manager — Shimadzu CDS System",
      "Audit experience facing TGA, NPRA, ISO, and EU-GMP inspections",
      "International training: Waters India, Waters Malaysia, Shimadzu Singapore",
      "Specialised expertise across Oncology, Cephalosporin, MDI/DPI, Sterile and Ophthalmic dosage forms",
      "JAT Member, Kekuleon Research and Training Center (KRTC)",
    ],
  },

  "md-mohedul-islam": {
    id: 24,
    slug: "md-mohedul-islam",
    name: "Md. Mohedul Islam",
    title:
      "Senior Executive-2, Quality Control — Healthcare Pharmaceuticals Limited",
    department: "Analytical Chemistry & Pharmaceutical Quality Control",
    initials: "MI",
    color: "bg-rose-500",
    email: "mohedulacce@gmail.com",
    phone: "+880 1821 084 688",
    location: "Rajendrapur, Gazipur, Bangladesh",
    address: "Village: Ranipur, P.O. Kamdebpur-5210, P.S. Biral, Dinajpur",
    dateOfBirth: "09 January 1994",
    type: "advisory-jat",
    priority: 5,
    bio: `Md. Mohedul Islam is an analytical chemist and pharmaceutical quality-control specialist with over six years of industry experience, currently serving as Senior Executive-2 in Quality Control at Healthcare Pharmaceuticals Limited — an EU GMP approved facility in Rajendrapur, Gazipur. He leads stability study and method validation activities for higher regulatory market (HRM) products and has direct experience facing EU GMP audits.

He holds both BSc and MSc degrees in Applied Chemistry & Chemical Engineering from the University of Rajshahi. His career spans Healthcare Pharmaceuticals Limited, Opsonin Pharma Limited (Barishal), and Bureau Veritas Consumer Product Services (BD) Ltd — covering analytical method validation, handling of sophisticated instrumentation (HPLC, GC, AAS, UV-Vis, FTIR, Dissolution tester, Karl Fischer, disintegration tester), OOS/deviation/change-control handling, and regulatory-compliant documentation.

As a Joint Advisory Team (JAT) member of the Kekuleon Research and Training Center (KRTC), he contributes industry-aligned insights to curriculum design, instrument training, and quality-compliance practices — ensuring KRTC's analytical chemistry programmes reflect real-world regulatory and pharmaceutical quality-control standards.`,
    education: [
      {
        degree: "MSc in Applied Chemistry & Chemical Engineering",
        institution: "University of Rajshahi, Bangladesh",
        year: "2017",
        grade: "CGPA 2.97 / 4.00",
      },
      {
        degree: "BSc in Applied Chemistry & Chemical Engineering",
        institution: "University of Rajshahi, Bangladesh",
        year: "2015",
        grade: "CGPA 2.87 / 4.00",
      },
      {
        degree: "Higher Secondary Certificate (HSC), Science",
        institution: "Dinajpur Govt. College, Dinajpur",
        year: "2010",
        grade: "GPA 4.80 / 5.00 (Dinajpur Board)",
      },
      {
        degree: "Secondary School Certificate (SSC), Science",
        institution: "Kamdebpur High School, Dinajpur",
        year: "2008",
        grade: "GPA 5.00 / 5.00 (Rajshahi Board)",
      },
    ],
    experience: [
      {
        role: "Joint Advisory Team (JAT) Member",
        org: "Kekuleon Research and Training Center (KRTC)",
        period: "2025 - Present",
      },
      {
        role: "Senior Executive-2, Quality Control",
        org: "Healthcare Pharmaceuticals Limited, Rajendrapur, Gazipur",
        period: "January 2025 - Present",
        description:
          "Team lead of stability study and method validation for HRM market products. Preparation and review of analytical method validation and stability study protocols/reports. Handling LIR, OOS, deviations and change control related to QC laboratory. Preparation and review of method transfer protocols. Preparation of QRM and URS for QC equipment per regulatory guidelines. Ensures data integrity and ALCOA+ compliance. Maintains GLP and audit readiness.",
      },
      {
        role: "Senior Officer, Quality Control",
        org: "Healthcare Pharmaceuticals Limited, Rajendrapur, Gazipur",
        period: "June 2021 - December 2024",
        description:
          "Analytical method validation of products and APIs for higher regulatory markets. Hands-on operation of HPLC, GC, AAS, UV-Vis, FTIR, Dissolution tester, Karl Fischer and disintegration tester. Calibration of all QC instruments, preparation of machine URS and comparative studies. Handling QIR, OOS, deviations and change control. Preparation and review of specifications, test methods and SOPs.",
      },
      {
        role: "Executive, Quality Control",
        org: "Opsonin Pharma Limited, Rupatoli, Barishal",
        period: "January 2019 - June 2021",
        description:
          "Analysis of raw materials, bulk and finished products per procedure. Preparation of working standards, CRS monitoring, volumetric and test solution standardization. Daily accuracy checks and instrument calibration. Handling sophisticated instruments including HPLC, GC, AAS, UV-Vis, FTIR, Dissolution tester, Karl Fischer and autotitrator. Preparation of methods, specifications and SOPs. Handling OOS, deviation and laboratory investigations.",
      },
      {
        role: "Assistant Analytical Chemist",
        org: "Bureau Veritas Consumer Product Services (BD) Ltd, DEPZ, Savar, Dhaka",
        period: "April 2018 - January 2019",
        description:
          "Routine analysis of pH, formaldehyde, Azo & dyes and phthalate tests. Calibration and standardization of laboratory equipment with record maintenance. Preparation of test solutions, compounds and reagents. Maintenance of all ISO 17025 laboratory requirements.",
      },
    ],
    research: [
      {
        title:
          "Functions, Mode of Action & Biosynthesis of Steroid Hormones (MSc Project)",
        supervisor: "Dr. Mele Jesmin, Professor",
        institution:
          "Department of Applied Chemistry & Chemical Engineering, University of Rajshahi",
        period: "2016 - 2017",
      },
      {
        title:
          "Role of Iron as a Metal and Its Compounds for Human Civilization (BSc Project)",
        supervisor: "Dilip Kumar Sarkar, Professor",
        institution:
          "Department of Applied Chemistry & Chemical Engineering, University of Rajshahi",
        period: "2014 - 2015",
      },
    ],
    skills: [
      "HPLC, GC, AAS, UV-Vis, FTIR",
      "Dissolution Tester, Karl Fischer, Autotitrator, Disintegration Tester",
      "Analytical Method Validation & Transfer",
      "Stability Study (HRM Market Products)",
      "OOS, LIR, Deviations & Change Control Handling",
      "QRM, URS Preparation for QC Equipment",
      "Data Integrity & ALCOA+ Compliance",
      "GLP, GMP, EU GMP Audit Readiness",
      "ISO 17025 Laboratory Requirements",
      "Specification, Test Method & SOP Development",
    ],
    languages: [
      { language: "Bengali", level: "Native" },
      { language: "English", level: "Fluent in Reading, Writing and Speaking" },
    ],
    organizations: [
      {
        role: "Joint Secretary",
        org: "Applied Chemistry & Chemical Engineering (ACCE) Group, University of Rajshahi",
      },
      {
        role: "Executive Member",
        org: "Badhan (Voluntary Blood Donating Organization), Motihar Hall, University of Rajshahi",
      },
      {
        role: "Committed Player — Football Team",
        org: "Department of Applied Chemistry & Chemical Engineering, University of Rajshahi",
      },
    ],
    achievements: [
      "EU GMP approved facility experience — Healthcare Pharmaceuticals Limited",
      "Team lead — Stability Study & Method Validation (HRM Market Products)",
      "TICI Training — Industrial Process Unit Operation & Process Control Technique",
      "Industrial Training — Plantation White Sugar Production, Rajshahi Sugar Mills Ltd",
      "Data Integrity Management, OOS, Root Cause Analysis, Cleaning Validation, Risk Management, CAPA & PQR Training (by Sr. Stephen Firmer and Mr. Akhilesh Khale)",
      "JAT Member, Kekuleon Research and Training Center (KRTC)",
    ],
  },

  "taposh-shingha-roy": {
    id: 40,
    slug: "taposh-shingha-roy",
    name: "Taposh Shingha Roy",
    nameBn: "তপশ সিংহ রায়",
    title:
      "Senior Officer, Research and Development — Healthcare Pharmaceuticals Limited",
    department: "Pharmaceutical Research & Development",
    initials: "TR",
    color: "bg-violet-600",
    email: "t.shingharoy@gmail.com",
    phone: "+880 1751 588 151",
    location: "Gazipur, Bangladesh",
    address:
      "Toma Nibash, House No-398, Ward No-16, Gazipur City Corporation, Gazipur",
    dateOfBirth: "03 March 1993",
    type: "advisory-jat",
    priority: 6,
    bio: `Taposh Shingha Roy is a pharmaceutical research and development specialist with formulation, analytical method development, and validation expertise. He currently serves as Senior Officer, Research and Development at Healthcare Pharmaceuticals Limited — a leading Bangladeshi pharmaceutical manufacturer — where he leads development activities for drug substances and finished products, prepares and executes verification and validation protocols, develops and validates analytical methods for non-compendial drugs, and oversees stability studies for laboratory and validation batches.

He holds an MSc and a BSc in Applied Chemistry and Chemical Engineering from the University of Rajshahi (CGPA 3.55 and 3.45 out of 4.00 respectively), with his MSc thesis focused on the development of single-bath bioscouring and bleaching of cotton fabric using pectinase and peracetic acid. He has completed specialised industrial training on Industrial Process Unit Operation & Process Control Technique at the Training Institute for Chemical Industries (TICI), Polash, Narsingdi (Grade A⁺), and a three-month course on Microsoft Excel, SPSS, and Research Methodology from the Department of Statistics, University of Rajshahi. His professional career — spanning Quality Control at Popular Pharmaceuticals Limited and progressively senior R&D roles at Healthcare Pharmaceuticals Limited — has built deep applied experience in pharmaceutical R&D workflows, method validation, and stability science.

As a member of the Joint Advisory Team (JAT) of the Kekuleon Research and Training Center (KRTC), he contributes industry-grounded insights to curriculum design, hands-on training methodology, and laboratory infrastructure — particularly in pharmaceutical R&D, analytical method development, and validation practice — helping align KRTC's applied chemistry programmes with the day-to-day standards of regulated pharmaceutical manufacturing.`,
    education: [
      {
        degree: "MSc in Applied Chemistry and Chemical Engineering",
        institution: "University of Rajshahi",
        year: "2016 (Held in 2018)",
        grade: "CGPA 3.55 / 4.00",
      },
      {
        degree: "BSc in Applied Chemistry and Chemical Engineering",
        institution: "University of Rajshahi",
        year: "2015 (Held in 2016)",
        grade: "CGPA 3.45 / 4.00",
      },
      {
        degree: "Higher Secondary Certificate (HSC) — Science",
        institution: "Notre Dame College, Dhaka",
        year: "2010",
        grade: "GPA 5.00 / 5.00",
      },
      {
        degree: "Secondary School Certificate (SSC) — Science",
        institution: "Nilphamari Government High School",
        year: "2008",
        grade: "GPA 5.00 / 5.00",
      },
      {
        degree:
          "Training on Industrial Process Unit Operation & Process Control Technique",
        institution:
          "Training Institute for Chemical Industries (TICI), Polash, Narsingdi",
        year: "June 2016",
        grade: "Grade A⁺",
      },
      {
        degree: "Training on Microsoft Excel, SPSS and Research Methodology",
        institution: "Department of Statistics, University of Rajshahi",
        year: "Completed (3 months)",
      },
    ],
    experience: [
      {
        role: "Joint Advisory Team (JAT) Member",
        org: "Kekuleon Research and Training Center (KRTC)",
        period: "2025 - Present",
        description:
          "Advising on curriculum design, applied training methodology, and laboratory infrastructure — particularly in pharmaceutical R&D, analytical method development, and validation practice.",
      },
      {
        role: "Senior Officer, Research and Development",
        org: "Healthcare Pharmaceuticals Limited",
        period: "January 2023 - Present",
        description:
          "Leads development of drug substances and products; prepares and executes verification and validation protocols; develops and validates analytical methods for non-compendial drugs; manages stability studies for lab and validation batches; oversees R&D reagent requisition and inventory.",
      },
      {
        role: "Officer, Research and Development",
        org: "Healthcare Pharmaceuticals Limited",
        period: "January 2020 - December 2022",
        description:
          "Drug substance and product development, protocol preparation, and analytical method development under R&D operations.",
      },
      {
        role: "Executive, Quality Control",
        org: "Popular Pharmaceuticals Limited",
        period: "December 2019 - January 2020",
        description:
          "Quality control of pharmaceutical products in a regulated manufacturing environment.",
      },
    ],
    research: [
      {
        title:
          "Development of Single-Bath Bioscouring and Bleaching of Cotton Fabric with Pectinase and Peracetic Acid",
        institution: "MSc Thesis, University of Rajshahi",
        period: "2016",
      },
      {
        title: "Future Prospect of Steam Generator",
        institution: "BSc Project, University of Rajshahi",
        period: "2015",
      },
    ],
    skills: [
      "Pharmaceutical R&D",
      "Drug Substance & Product Development",
      "Analytical Method Development & Validation",
      "Verification & Validation Protocol Design",
      "Stability Studies (Lab Batch & Validation Batch)",
      "Non-Compendial Method Development",
      "Quality Control",
      "Industrial Process Unit Operation & Process Control",
      "Research Methodology (SPSS, Microsoft Excel)",
      "Leadership & Team-Building",
      "Analytical Reasoning",
      "Public Speaking & Communication",
    ],
    languages: [
      { language: "Bangla", level: "Native" },
      { language: "English", level: "Excellent" },
    ],
    organizations: [
      {
        role: "President",
        org: "ACCE Group, University of Rajshahi",
        description:
          "Departmental network of current and former students and teachers of Applied Chemistry and Chemical Engineering, University of Rajshahi.",
      },
      {
        role: "General Member",
        org: "Nilphamari Zilla Somiti, University of Rajshahi",
      },
      {
        role: "General Member",
        org: "Rajshahi University Higher Study Club (RUHSC)",
      },
    ],
    achievements: [
      "MSc in Applied Chemistry and Chemical Engineering (CGPA 3.55), University of Rajshahi",
      "GPA 5.00 in both SSC and HSC (Notre Dame College, Dhaka)",
      "Senior Officer, R&D, Healthcare Pharmaceuticals Limited",
      "Government Scholarships at 5th and 8th grade, and for excellent SSC result",
      "University Scholarship for excellent BSc Engineering result",
      "TICI-certified (Grade A⁺) — Industrial Process Unit Operation & Process Control",
      "President, ACCE Group, University of Rajshahi",
      "JAT Member, Kekuleon Research and Training Center (KRTC)",
    ],
  },

  // ======================================
  // University Coordinator & Student Ambassador
  // ======================================

  // ---- University of Barishal ----
  "mahfuza-kulsum-jim": {
    id: 25,
    slug: "mahfuza-kulsum-jim",
    name: "Most. Mahfuza Kulsum Jim",
    title: "University Coordinator & Student Ambassador",
    department: "University of Barishal",
    initials: "MJ",
    color: "bg-blue-500",
    email: "mkjim220802@gmail.com",
    phone: "+880 1767163676",
    location: "Barishal, Bangladesh",
    address: "Barishal",
    type: "university-coordinator",
    university: "University of Barishal",
    universityCode: "BU",
    zone: "southwest",
    coordinatorRole: "coordinator",
    priority: 1,
    bio: `Motivated and enthusiastic university student at the University of Barishal, currently pursuing a BSc in Geology and Mining. She serves as a University Coordinator & Student Ambassador for KRTC, where she channels her communication, leadership, and networking skills to connect students with valuable academic opportunities.

  Active in university academic and social events, she brings strong teamwork and event-coordination experience to the KRTC student community, helping bridge the gap between aspiring learners and the Center's training and research programs.`,
    education: [
      {
        degree: "BSc in Geology and Mining",
        institution: "University of Barishal",
        year: "Running (3rd Year)",
      },
      {
        degree: "Higher Secondary Certificate (HSC)",
        institution: "Shaheed Bir Uttam Lt Anwar Girls' School & College",
        year: "2021",
      },
      {
        degree: "Secondary School Certificate (SSC)",
        institution: "Shaheed Bir Uttam Lt Anwar Girls' School & College",
        year: "2019",
      },
    ],
    experience: [
      {
        role: "University Coordinator & Student Ambassador",
        org: "Kekuleon Research and Training Center (KRTC)",
        period: "2026 - Present",
        description:
          "Representing KRTC at the University of Barishal — connecting students with KRTC programs, coordinating campus outreach, and supporting local events.",
      },
      {
        role: "Student Participant & Team Coordinator",
        org: "University of Barishal",
        period: "2022 - Present",
        description:
          "Actively participated in university academic and social events; worked in group projects and team coordination.",
      },
    ],
    skills: [
      "Strong Communication",
      "Leadership & Teamwork",
      "Event Coordination",
      "Social Media Management",
      "Networking & Public Relations",
      "Time Management",
    ],
    languages: [
      { language: "Bengali", level: "Native" },
      { language: "English", level: "Good (Speaking & Writing)" },
    ],
    organizations: [
      {
        role: "Member",
        org: "University Organizations (University of Barishal)",
      },
    ],
    achievements: [
      "University Coordinator & Student Ambassador, KRTC",
      "Participated in seminars, workshops, and competitions at the University of Barishal",
      "Engaged in cultural and sports activities",
    ],
  },

  "rukaiya-iqbal-rinki": {
    id: 26,
    slug: "rukaiya-iqbal-rinki",
    name: "Rukaiya Iqbal Rinki",
    title: "University Coordinator & Student Ambassador",
    department: "University of Barishal",
    initials: "RR",
    color: "bg-rose-500",
    email: "rukaiyarinki@gmail.com",
    phone: "+880 1961227560",
    location: "University of Barishal, Karnakathi, Barishal",
    address:
      "Present: University of Barishal, Karnakathi, Barishal | Permanent: Sagorpara, Holding No: 451, Boalia, Ghoramara, Rajshahi",
    dateOfBirth: "10 July 2002",
    linkedin: "https://linkedin.com/in/rukaiya-iqbal-40496a363",
    type: "university-coordinator",
    university: "University of Barishal",
    universityCode: "BU",
    zone: "southwest",
    coordinatorRole: "coordinator",
    priority: 2,
    bio: `Highly motivated Geology and Mining student with a strong academic foundation in geochemical approaches and hydrogeology. Passionate about exploring subsurface structures and sustainable mining practices, Rukaiya is preparing for advanced research and higher studies in an international academic environment.

  As a KRTC University Coordinator & Student Ambassador at the University of Barishal, she helps build awareness of KRTC's applied-science programs on campus and supports fellow students in accessing training and research opportunities aligned with their academic goals.`,
    education: [
      {
        degree: "Bachelor of Science in Geology and Mining",
        institution: "University of Barishal",
        year: "Session 2020–21 | 4th Year (Ongoing)",
      },
      {
        degree: "Higher Secondary Certificate (HSC)",
        institution: "Rajshahi Government Women's College",
        year: "2020",
        grade: "GPA: 5.00 (Science)",
      },
      {
        degree: "Secondary School Certificate (SSC)",
        institution: "Masjid Mission Academy",
        year: "2018",
        grade: "GPA: 5.00",
      },
    ],
    experience: [
      {
        role: "University Coordinator & Student Ambassador",
        org: "Kekuleon Research and Training Center (KRTC)",
        period: "2026 - Present",
        description:
          "Representing KRTC at the University of Barishal — coordinating campus outreach, connecting Geology & Mining and allied-science students with KRTC programs.",
      },
    ],
    skills: [
      "Microsoft Office (Word, Excel, PowerPoint)",
      "Geochemical Approaches",
      "Hydrogeology Fundamentals",
      "Academic Research Readiness",
      "Communication & Coordination",
    ],
    languages: [
      { language: "Bengali", level: "Native" },
      { language: "English", level: "Fluent" },
    ],
    achievements: [
      "University Coordinator & Student Ambassador, KRTC",
      "GPA 5.00 in both SSC and HSC",
      "Preparing for advanced research and higher studies in an international academic environment",
    ],
  },

  // ---- Begum Rokeya University, Rangpur ----
  "mahmudul-hasan-abir": {
    id: 27,
    slug: "mahmudul-hasan-abir",
    name: "Md. Mahmudul Hasan Abir Mia",
    title:
      "University Coordinator & Student Ambassador · Zone Advisor — North Zone",
    department: "Begum Rokeya University, Rangpur",
    initials: "MA",
    color: "bg-amber-500",
    email: "abirhasanbrur@gmail.com",
    phone: "+880 1568925051",
    location: "Rangpur, Bangladesh",
    address:
      "Present: Sardarpara, Cadet College, Thana – Tajhat, Rangpur | Permanent: Ramnathpur, Pirganj, Rangpur",
    dateOfBirth: "28-06-2000",
    type: "university-coordinator",
    university: "Begum Rokeya University, Rangpur",
    universityCode: "BRUR",
    zone: "north",
    coordinatorRole: "coordinator",
    priority: 1,
    bio: `Md. Mahmudul Hasan Abir Mia serves as the Zone Advisor for KRTC's North Zone (Rajshahi & Rangpur Divisions) under the University Coordinator & Student Ambassador Program. A Public Administration graduate from Begum Rokeya University, Rangpur, he is an active youth leader working at the intersection of education, culture, and community development. He is the Founder & President of "Tonger Gaan," a youth initiative that uses music and research to advocate for peace, safe internet, education, climate action, and social cohesion.

  Recognized as a National Winner of the UNDP Digital Khicuri Challenge 2022 and recipient of the Banglar Cokh Award 2023 for Art & Culture, he brings deep experience in project coordination, partnership-building, and community mobilization. As Zone Advisor, he guides University Coordinators across Rajshahi and Rangpur universities, ensuring regional coherence and institutional alignment with KRTC's applied-science training, research, and community mission.`,
    education: [
      {
        degree: "MSS in Public Administration",
        institution: "Begum Rokeya University, Rangpur",
        year: "Session 2023-2024",
        grade: "CGPA: 3.31",
      },
      {
        degree: "Bachelor of Social Science (BSS), Public Administration",
        institution: "Begum Rokeya University, Rangpur",
        year: "Session 2019-2020",
        grade: "CGPA: 3.41",
      },
    ],
    experience: [
      {
        role: "Zone Advisor — North Zone (Rajshahi & Rangpur Divisions)",
        org: "Kekuleon Research and Training Center (KRTC) — University Coordinator & Student Ambassador Program",
        period: "2026 - Present",
        description:
          "Advising University Coordinators across the 5 North Zone universities (RU, BRUR, HSTU, BSTU, PUST) and all affiliated National University colleges — ensuring regional coherence, partnership-building, and alignment with KRTC's applied-science mission.",
      },
      {
        role: "Research Assistant",
        org: "UGC – Begum Rokeya University, Department of Public Administration",
        period: "01-06-2025 - Present",
        description:
          "Supporting UGC-funded research work in the Public Administration department, Rangpur.",
      },
      {
        role: "Founder & President",
        org: "Tonger Gaan",
        period: "December 2020 - Present (Rangpur, Bangladesh)",
        description:
          "Writing and singing songs for peace and tolerance; research and advocacy on safe internet, education, culture, climate issues and social problems; building partnerships with national and international organizations for project design, proposals, reports, resource mobilization and implementation.",
      },
      {
        role: "Teacher",
        org: "Kishore Kishori Club Project (KKCP)",
        period: "March 2021 - June 2023 (Rangpur, Bangladesh)",
        description:
          "Led academic improvement of ~60 adolescent students; planned and managed school and community projects impacting 1,000+ directly and ~3,000 indirectly; arranged 20+ events distributing food, hygiene tools and educational materials; maintained partnerships with parents, union members, chairmen, head teachers and UNO.",
      },
    ],
    skills: [
      "Project Coordination",
      "Project & Improvement Plan Development",
      "Communication",
      "Volunteer Coordination",
      "Presentation Content Development & Facilitation",
      "MS Office Programs",
    ],
    languages: [
      { language: "Bengali", level: "Native" },
      { language: "English", level: "Proficient" },
    ],
    organizations: [
      {
        role: "Founder & President",
        org: "Tonger Gaan",
        description:
          "Youth-led initiative using music, research and advocacy for peace, education, culture and climate.",
      },
    ],
    achievements: [
      "Zone Advisor — North Zone, KRTC University Coordinator & Student Ambassador Program",
      "National Winner — UNDP Digital Khicuri Challenge 2022",
      "Banglar Cokh Award 2023 for Art & Culture",
      "Regiment Camp Training — Bangladesh National Cadet Corps (BNCC), Postal Academy, Rajshahi",
      "Three-Day Training on Basic Counselling Skills for Para Counselors (Foundation for Women Possibilities)",
      "Two-Day Training on Global SDG Youth Summit 2025",
    ],
  },

  // ---- University of Dhaka ----
  "md-aminul-islam": {
    id: 28,
    slug: "md-aminul-islam",
    name: "Md Aminul Islam",
    title: "University Coordinator & Student Ambassador",
    department: "University of Dhaka",
    initials: "AI",
    color: "bg-indigo-500",
    email: "aminulislamdu21@gmail.com",
    phone: "+880 1804601473",
    location: "Dhaka, Bangladesh",
    address: "Jobai, Sapahar, Naogaon",
    dateOfBirth: "14-01-2003",
    linkedin: "https://linkedin.com/in/aminuldu21",
    type: "university-coordinator",
    university: "University of Dhaka",
    universityCode: "DU",
    zone: "central",
    coordinatorRole: "coordinator",
    priority: 1,
    bio: `Md Aminul Islam is an undergraduate student at the University of Dhaka (BSc Honours, 2022–2026), with a consistent record of academic excellence — GPA 5.00 in both SSC and HSC. As KRTC's University Coordinator & Student Ambassador at the University of Dhaka, he focuses on campus outreach, connecting DU students to KRTC's applied-science training, research programs and community initiatives.`,
    education: [
      {
        degree: "BSc Honours",
        institution: "University of Dhaka",
        year: "2022 - 2026",
      },
      {
        degree: "Higher Secondary Certificate (HSC)",
        institution: "Dighir Hat College, Sapahar, Naogaon",
        year: "2018 - 2020",
        grade: "GPA: 5.00 (Roll: 113509, Rajshahi Board)",
      },
      {
        degree: "Secondary School Certificate (SSC)",
        institution: "Jobai Somija Begum High School, Sapahar, Naogaon",
        year: "2013 - 2018",
        grade: "GPA: 5.00 (Roll: 133449, Rajshahi Board)",
      },
    ],
    experience: [
      {
        role: "University Coordinator & Student Ambassador",
        org: "Kekuleon Research and Training Center (KRTC)",
        period: "2026 - Present",
        description:
          "Representing KRTC at the University of Dhaka — connecting students with KRTC training, research and community programs; coordinating campus outreach.",
      },
    ],
    skills: ["Computer Fundamentals", "MS Word", "MS Excel", "MS PowerPoint"],
    languages: [
      { language: "Bengali", level: "Native" },
      { language: "English", level: "Proficient" },
    ],
    achievements: [
      "University Coordinator & Student Ambassador, KRTC",
      "GPA 5.00 — HSC (Dighir Hat College, 2020)",
      "GPA 5.00 — SSC (Jobai Somija Begum High School, 2018)",
    ],
  },

  // ---- North Zone — BRUR (additional) ----
  "mim-akther": {
    id: 29,
    slug: "mim-akther",
    name: "Most. Mim Akther",
    title: "University Coordinator & Student Ambassador",
    department: "Begum Rokeya University, Rangpur",
    initials: "MA",
    color: "bg-teal-500",
    email: "mim99280@gmail.com",
    phone: "+880 1783627890",
    location: "Rangpur Sadar, Rangpur",
    address:
      "Present: Rangpur Sadar, Rangpur | Permanent: Village: Jamdani, Post: Dhaperhat, Thana: Pirganj, District: Rangpur",
    dateOfBirth: "24 February 2003",
    type: "university-coordinator",
    university: "Begum Rokeya University, Rangpur",
    universityCode: "BRUR",
    zone: "north",
    coordinatorRole: "coordinator",
    priority: 2,
    bio: `Most. Mim Akther is a Sociology graduate from Begum Rokeya University, Rangpur, with proven communication, accountability, flexibility and strategic planning skills. She brings field-level research and data-collection experience to KRTC's North Zone outreach — having served as a data collector under Lecturer Dipika Biswas on the INTEGRATE project (German Development Cooperation), mapping informal settlements and climate/disaster vulnerability in secondary cities of Bangladesh.

  As KRTC's University Coordinator & Student Ambassador at BRUR, she supports campus outreach, community engagement, and student mobilization around KRTC's applied-science and social-development programs.`,
    education: [
      {
        degree: "Bachelor of Social Science (BSS), Sociology",
        institution: "Begum Rokeya University, Rangpur",
        year: "Passing Year 2024",
        grade: "CGPA 3.50 / 4.00 (2nd Year Result)",
      },
      {
        degree: "Higher Secondary Certificate (HSC)",
        institution: "Govt. Shah Abdur Rouf College, Pirganj, Rangpur",
        year: "2021",
        grade: "GPA 5.00 / 5.00 (Science, Dinajpur Board)",
      },
      {
        degree: "Secondary School Certificate (SSC)",
        institution: "Jamdani High School, Pirganj, Rangpur",
        year: "2019",
        grade: "GPA 4.89 / 5.00 (Science, Dinajpur Board)",
      },
    ],
    experience: [
      {
        role: "University Coordinator & Student Ambassador",
        org: "Kekuleon Research and Training Center (KRTC)",
        period: "2026 - Present",
        description:
          "Representing KRTC at Begum Rokeya University, Rangpur — coordinating campus outreach, community engagement, and student mobilization in the North Zone.",
      },
      {
        role: "Data Collector — INTEGRATE Project",
        org: "Dept. of Sociology, BRUR (under German Development Cooperation)",
        period: "20 - 30 May 2025",
        description:
          "Worked under Lecturer Dipika Biswas on “Informal Settlement Mapping and Selection Based on Climate Change and Disaster Vulnerability in Secondary Cities of Bangladesh” — strengthening urban integration capacities of internally displaced persons (IDPs) and host communities.",
      },
    ],
    skills: [
      "Communicative Skills",
      "Public Speaking",
      "Presentation & Management",
      "Strategic Planning",
      "Field Data Collection",
      "Accountability & Flexibility",
    ],
    languages: [
      { language: "Bangla", level: "Native (Best)" },
      { language: "English", level: "Communicative (Good)" },
    ],
    achievements: [
      "University Coordinator & Student Ambassador, KRTC",
      "GPA 5.00 — HSC (Govt. Shah Abdur Rouf College, 2021)",
      "GPA 4.89 — SSC (Jamdani High School, 2019)",
      "INTEGRATE Project data collector (German Development Cooperation)",
    ],
  },

  "noshin-tabasum-puspita": {
    id: 30,
    slug: "noshin-tabasum-puspita",
    name: "Noshin Tabasum Puspita",
    title: "University Coordinator & Student Ambassador",
    department: "Begum Rokeya University, Rangpur",
    initials: "NP",
    color: "bg-fuchsia-600",
    email: "noshintabasumpuspita9874@gmail.com",
    phone: "+880 1729686485",
    location: "Rangpur Sadar, Rangpur",
    address: "House #36, Road #1, Dhap, Rangpur",
    dateOfBirth: "06-10-2003",
    type: "university-coordinator",
    university: "Begum Rokeya University, Rangpur",
    universityCode: "BRUR",
    zone: "north",
    coordinatorRole: "coordinator",
    priority: 3,
    bio: `Noshin Tabasum Puspita is a third-year BSc student in the Department of Chemistry at Begum Rokeya University, Rangpur, with a consistent record of academic excellence — GPA 5.00 in both SSC and HSC. She is an active student leader, serving in executive and secretarial roles across multiple BRUR clubs — including the NEON Club, Debate Association, Chemistry Debate Society, Sports Association, Art & Literature, and the Rangpur Sadar Students Welfare Association.

  As KRTC's University Coordinator & Student Ambassador at BRUR, she leverages this strong campus network to drive outreach for KRTC's applied-science training and research opportunities in the North Zone.`,
    education: [
      {
        degree: "BSc in Chemistry (Year 3, Semester 2 — Ongoing)",
        institution: "Begum Rokeya University, Rangpur",
        year: "Ongoing",
      },
      {
        degree: "Higher Secondary Certificate (HSC)",
        institution: "Cantonment Public School and College, Rangpur",
        year: "2021",
        grade: "GPA 5.00 / 5.00 (Science)",
      },
      {
        degree: "Secondary School Certificate (SSC)",
        institution: "Cantonment Public School and College, Rangpur",
        year: "2019",
        grade: "GPA 5.00 / 5.00 (Science)",
      },
    ],
    experience: [
      {
        role: "University Coordinator & Student Ambassador",
        org: "Kekuleon Research and Training Center (KRTC)",
        period: "2026 - Present",
        description:
          "Representing KRTC at Begum Rokeya University, Rangpur — connecting Chemistry and allied-science students with KRTC's training, research and community programs.",
      },
    ],
    skills: [
      "Event Coordination",
      "Debate & Public Speaking",
      "Leadership & Teamwork",
      "Club & Society Management",
      "Networking & Student Engagement",
    ],
    languages: [
      { language: "Bangla", level: "Native (Excellent)" },
      { language: "English", level: "Excellent (Reading, Writing, Speaking)" },
    ],
    organizations: [
      {
        role: "General Secretary",
        org: "NEON Club, BRUR",
      },
      {
        role: "Program In-Charge",
        org: "BRUR (student body)",
      },
      {
        role: "Assistant Financial Secretary",
        org: "Begum Rokeya University Debate Association (BRUDA)",
      },
      {
        role: "Assistant Organizing Secretary",
        org: "Begum Rokeya University Chemistry Debate Society (BRUCDS)",
      },
      {
        role: "Joint General Secretary",
        org: "Begum Rokeya University Sports Association",
      },
      {
        role: "Executive Member",
        org: "BRUR Art & Literature",
      },
      {
        role: "Joint General Secretary",
        org: "Rangpur Sadar Students Welfare Association, BRUR",
      },
    ],
    achievements: [
      "University Coordinator & Student Ambassador, KRTC",
      "GPA 5.00 in both SSC and HSC",
      "General Secretary, NEON Club",
      "Executive roles across 7 BRUR clubs/societies",
    ],
  },

  // ---- North Zone — BRUR (additional) ----
  "md-hafijur-rahman": {
    id: 32,
    slug: "md-hafijur-rahman",
    name: "Md. Hafijur Rahman",
    title: "University Coordinator & Student Ambassador",
    department: "Begum Rokeya University, Rangpur",
    initials: "HR",
    color: "bg-emerald-500",
    email: "hafijbrur2.0@gmail.com",
    phone: "+880 1746136847",
    location: "Rangpur, Bangladesh",
    address:
      "Village: Pachgachi, Post: Jahangirabad, Upazila: Pirganj, District: Rangpur, Bangladesh",
    type: "university-coordinator",
    university: "Begum Rokeya University, Rangpur",
    universityCode: "BRUR",
    zone: "north",
    coordinatorRole: "coordinator",
    priority: 4,
    bio: `Md. Hafijur Rahman is a Sociology postgraduate from Begum Rokeya University, Rangpur, with strong communication, interpersonal and coordination skills. He brings multi-sector experience across banking sales, social-research assistance, field data collection and independent qualitative research — including work on the INTEGRATE Project (German Development Cooperation) and a self-led study on the mainstream-education-to-employment transition for students with disabilities at BRUR.

  As KRTC's University Coordinator & Student Ambassador at BRUR, he supports student engagement, program organization and research-training outreach within the North Zone.`,
    education: [
      {
        degree: "Master of Social Science (MSS), Sociology",
        institution: "Begum Rokeya University, Rangpur",
        year: "Passing Year 2024",
        grade: "CGPA 3.50 / 4.00",
      },
      {
        degree: "Bachelor of Social Science (BSS), Sociology",
        institution: "Begum Rokeya University, Rangpur",
        year: "Passing Year 2023",
        grade: "CGPA 3.36 / 4.00",
      },
      {
        degree: "Higher Secondary Certificate (HSC)",
        institution: "Carmichael College, Rangpur",
        year: "2019",
        grade: "GPA 5.00 / 5.00 (Humanities)",
      },
      {
        degree: "Secondary School Certificate (SSC)",
        institution: "Jahangirabad High School, Pirganj, Rangpur",
        year: "2017",
        grade: "GPA 4.91 / 5.00 (Science)",
      },
    ],
    experience: [
      {
        role: "University Coordinator & Student Ambassador",
        org: "Kekuleon Research and Training Center (KRTC)",
        period: "2026 - Present",
        description:
          "Representing KRTC at BRUR — supporting student engagement, program organization and research-training outreach within the North Zone.",
      },
      {
        role: "Direct Sales Associate (DSA)",
        org: "IFIC Bank Limited, Rangpur",
        period: "1 September 2025 - 5 January 2026",
        description:
          "Promoted banking products against sales targets; assisted customers with account opening and service inquiries; developed customer-service and target-based sales skills.",
      },
      {
        role: "Data Collector — INTEGRATE Project",
        org: "Dept. of Sociology, BRUR (under German Development Cooperation)",
        period: "20 - 30 May 2025",
        description:
          "Under Lecturer Dipika Biswas: field surveys, data collection, informal-settlement mapping and climate-vulnerability assessment for internally displaced persons and host communities in secondary cities of Bangladesh.",
      },
      {
        role: "Research Assistant (Contractual)",
        org: "HELIOS CONSULTANCY, Khulna",
        period: "17 September - 17 October 2024",
        description:
          "Social-research projects: survey design, data collection, interviews, focus-group facilitation; compiled and analyzed qualitative and quantitative data contributing to research reports, presentations and publications.",
      },
      {
        role: "Independent Researcher",
        org: "Self-led study, BRUR",
        period: "2025",
        description:
          '"The Role of Mainstream Education and Transitional Preparation to Mainstream Employment: A Study of University Students with Disabilities at Begum Rokeya University" — qualitative research supporting inclusive education and employment policies.',
      },
    ],
    skills: [
      "Communication & Interpersonal",
      "Coordination & Event Organization",
      "Field Research & Data Collection",
      "Qualitative & Quantitative Analysis",
      "Public Speaking & Presentation",
      "MS Word, Excel, PowerPoint (Basic)",
      "Online Education Content Creation",
    ],
    languages: [
      { language: "Bangla", level: "Native" },
      { language: "English", level: "Communicative" },
    ],
    organizations: [
      {
        role: "Vice-President",
        org: "Pirganj Student Welfare Organization, BRUR",
        description:
          "Provided leadership and strategic direction for student-welfare initiatives; coordinated events, scholarships and mentoring programs.",
      },
    ],
    achievements: [
      "University Coordinator & Student Ambassador, KRTC",
      "GPA 5.00 — HSC (Carmichael College, Rangpur, 2019)",
      "Job Readiness Training (Career Hub powered by BRAC, Nov 2024)",
      "Computer Office Application Training (BRAC ISD)",
      "INTEGRATE Project data collector (German Development Cooperation)",
    ],
  },

  // ---- Central Zone — University of Dhaka (additional) ----
  "asraful-alam-akash": {
    id: 33,
    slug: "asraful-alam-akash",
    name: "Md. Asraful Alam Akash",
    title: "University Coordinator & Student Ambassador",
    department: "University of Dhaka",
    initials: "AA",
    color: "bg-sky-500",
    email: "asrafulalamakash2345@gmail.com",
    phone: "+880 1719751673",
    location: "Dhaka, Bangladesh",
    address: "Sir A. F. Rahman Hall, University of Dhaka",
    type: "university-coordinator",
    university: "University of Dhaka",
    universityCode: "DU",
    zone: "central",
    coordinatorRole: "coordinator",
    priority: 2,
    bio: `Md. Asraful Alam Akash is a second-year BA (Honors) student at the University of Dhaka (CGPA 3.75), with GPA 5.00 in both SSC and HSC. An active member of the Dhaka University Research Society, he combines strong interpersonal and digital-communication skills with debating experience to bridge the gap between KRTC's research community and the DU student body.

  As KRTC's University Coordinator & Student Ambassador at DU, he focuses on promoting KRTC programs, recruiting participants for training and research initiatives, and fostering a culture of curiosity and evidence-based learning on campus.`,
    education: [
      {
        degree: "BA (Honors), 2nd Year",
        institution: "University of Dhaka",
        year: "Running",
        grade: "CGPA 3.75",
      },
      {
        degree: "Higher Secondary Certificate (HSC)",
        institution: "Rajshahi College",
        year: "2023",
        grade: "GPA 5.00",
      },
      {
        degree: "Secondary School Certificate (SSC)",
        institution: "Sirajganj Police Lines School & College",
        year: "2021",
        grade: "GPA 5.00",
      },
    ],
    experience: [
      {
        role: "University Coordinator & Student Ambassador",
        org: "Kekuleon Research and Training Center (KRTC)",
        period: "2026 - Present",
        description:
          "Representing KRTC at the University of Dhaka — promoting programs, recruiting participants for research/training and connecting DU students with KRTC's applied-science pathways.",
      },
      {
        role: "Member / Volunteer Researcher",
        org: "Dhaka University Research Society",
        period: "1 February 2024 - Present",
        description:
          "Working as a volunteer and researcher across DU Research Society activities.",
      },
    ],
    skills: [
      "Debating",
      "Campus Connectivity",
      "English Speaking",
      "Interpersonal & Digital Communication",
    ],
    languages: [
      { language: "Bengali", level: "Native" },
      { language: "English", level: "Proficient" },
    ],
    organizations: [
      {
        role: "Member",
        org: "Dhaka University Research Society",
      },
    ],
    achievements: [
      "University Coordinator & Student Ambassador, KRTC",
      "CGPA 3.75 — BA Honors, University of Dhaka",
      "GPA 5.00 — HSC (Rajshahi College, 2023)",
      "GPA 5.00 — SSC (Sirajganj Police Lines School & College, 2021)",
    ],
  },

  // ---- Southwest Zone — Jashore University of Science & Technology (JUST) ----
  "md-ibad-parvez": {
    id: 36,
    slug: "md-ibad-parvez",
    name: "Md. Ibad Parvez",
    title: "University Coordinator & Student Ambassador",
    department: "Jashore University of Science & Technology (JUST)",
    initials: "IP",
    color: "bg-emerald-600",
    email: "mdsohag9894@gmail.com",
    phone: "+88 01741 989473",
    location: "Chapainawabganj, Bangladesh",
    address:
      "House 15, Road 05, Vill. Aragichoka Dadonchalk, P.O. Adina College 6340, P.S. Shibganj, Chapainawabganj",
    dateOfBirth: "19-08-2007",
    type: "university-coordinator",
    university: "Jashore University of Science & Technology, Jashore",
    universityCode: "JUST",
    zone: "southwest",
    coordinatorRole: "coordinator",
    priority: 3,
    bio: `Md. Ibad Parvez is a research-oriented undergraduate student in the Department of Pharmacy at Jashore University of Science and Technology (JUST), with a stellar academic record — GPA 5.00/5.00 in both SSC and HSC. He brings a strong foundation in pharmaceutical sciences (drug development, pharmacology and clinical research), a passion for academic research and healthcare innovation, and proven leadership through active participation in university clubs and academic activities.

  As KRTC's University Coordinator & Student Ambassador at JUST, he supports Southwest Zone outreach — connecting JUST's pharmacy and science student community to KRTC's applied-science training, research and community programs.`,
    education: [
      {
        degree: "Bachelor of Pharmacy (B.Pharm)",
        institution: "Jashore University of Science and Technology (JUST)",
        year: "Undergraduate (Ongoing)",
      },
      {
        degree: "Higher Secondary Certificate (HSC) — Science",
        institution: "Varendra College, Rajshahi",
        year: "2024",
        grade: "GPA 5.00 / 5.00 (Rajshahi Board)",
      },
      {
        degree: "Secondary School Certificate (SSC) — Science",
        institution: "Dadon chak H. M. High School, Nawabganj",
        year: "2022",
        grade: "GPA 5.00 / 5.00 (Rajshahi Board)",
      },
    ],
    experience: [
      {
        role: "University Coordinator & Student Ambassador",
        org: "Kekuleon Research and Training Center (KRTC)",
        period: "2026 - Present",
        description:
          "Representing KRTC at Jashore University of Science & Technology (JUST) — supporting Southwest Zone outreach, student engagement and research-training partnerships with the JUST community.",
      },
      {
        role: "Member",
        org: "Pharmacy Club, Jashore University of Science & Technology",
        period: "Present",
        description:
          "Organizing health awareness campaigns, blood donation drives and pharmacy seminars.",
      },
      {
        role: "Volunteer",
        org: "Community Health Programs",
        period: "Present",
        description:
          "Local community health camps and public awareness sessions on safe medication use.",
      },
      {
        role: "Participant",
        org: "National Pharmacy Quiz Competition",
        period: "2024",
        description:
          "Represented JUST and achieved recognition in inter-university pharmacy competitions.",
      },
    ],
    skills: [
      "Leadership",
      "Teamwork",
      "Good communication",
      "Public speaking",
      "Presentation skills",
      "Organization under pressure",
      "Customer service",
      "Sales & marketing",
      "Microsoft Office",
    ],
    languages: [
      { language: "Bengali", level: "Native" },
      { language: "Hindi", level: "Native" },
      { language: "English", level: "Professional proficiency" },
    ],
    achievements: [
      "University Coordinator & Student Ambassador, KRTC — Southwest Zone",
      "GPA 5.00 / 5.00 — HSC (Varendra College, Rajshahi, 2024)",
      "GPA 5.00 / 5.00 — SSC (Dadon chak H.M. High School, 2022)",
      "Member, Pharmacy Club, JUST",
      "Participant — National Pharmacy Quiz Competition",
    ],
  },

  "md-eyamin-ahmed": {
    id: 37,
    slug: "md-eyamin-ahmed",
    name: "Md Eyamin Ahmed",
    title: "University Coordinator & Student Ambassador",
    department: "Jashore University of Science & Technology (JUST)",
    initials: "EA",
    color: "bg-sky-500",
    email: "eyamin0188284106@gmail.com",
    phone: "+880 1882841063",
    location: "Jashore, Bangladesh",
    type: "university-coordinator",
    university: "Jashore University of Science & Technology, Jashore",
    universityCode: "JUST",
    zone: "southwest",
    coordinatorRole: "coordinator",
    priority: 4,
    bio: `Md Eyamin Ahmed is a research-oriented undergraduate student of Chemistry at Jashore University of Science and Technology (JUST), with GPA 5.00/5.00 in both SSC and HSC. He brings a strong foundation in chemical principles, hands-on laboratory experience (synthesis, spectroscopy, titration, thermodynamics and kinetics) and a deep interest in academic research and laboratory innovation.

  As KRTC's University Coordinator & Student Ambassador at JUST, he supports Southwest Zone outreach — connecting JUST's chemistry student community to KRTC's applied-science training, research and community programs.`,
    education: [
      {
        degree: "Bachelor of Science (B.Sc.) in Chemistry",
        institution: "Jashore University of Science and Technology (JUST)",
        year: "Undergraduate (Ongoing)",
      },
      {
        degree: "Higher Secondary Certificate (HSC) — Science",
        institution: "HSC",
        year: "HSC",
        grade: "GPA 5.00 / 5.00",
      },
      {
        degree: "Secondary School Certificate (SSC) — Science",
        institution: "SSC",
        year: "SSC",
        grade: "GPA 5.00 / 5.00",
      },
    ],
    experience: [
      {
        role: "University Coordinator & Student Ambassador",
        org: "Kekuleon Research and Training Center (KRTC)",
        period: "2026 - Present",
        description:
          "Representing KRTC at Jashore University of Science & Technology (JUST) — supporting Southwest Zone outreach, student engagement and research-training partnerships with the JUST chemistry community.",
      },
      {
        role: "Lab Work — Inorganic & Organic Chemistry",
        org: "Jashore University of Science & Technology",
        period: "Undergraduate (Ongoing)",
        description:
          "Hands-on experience in synthesis and characterization of compounds.",
      },
      {
        role: "Lab Work — Physical Chemistry Analysis",
        org: "Jashore University of Science & Technology",
        period: "Undergraduate (Ongoing)",
        description:
          "Practical application of thermodynamics and kinetics in lab environments.",
      },
      {
        role: "Lab Work — Analytical Chemistry Techniques",
        org: "Jashore University of Science & Technology",
        period: "Undergraduate (Ongoing)",
        description: "Titration, spectroscopy and chemical safety protocols.",
      },
    ],
    skills: [
      "Analytical & Critical Thinking",
      "Academic Excellence",
      "Time Management",
      "Synthesis & Characterization",
      "Spectroscopy & Titration",
      "Thermodynamics & Kinetics",
      "Chemical Safety Protocols",
    ],
    languages: [
      { language: "Bengali", level: "Native" },
      { language: "English", level: "Proficient" },
    ],
    achievements: [
      "University Coordinator & Student Ambassador, KRTC — Southwest Zone",
      "GPA 5.00 / 5.00 — HSC (Science)",
      "GPA 5.00 / 5.00 — SSC (Science)",
      "Consistent track record of academic excellence in Chemistry",
    ],
  },
};

// Helper functions
const byPriority = (a: TeamMember, b: TeamMember) =>
  (a.priority || 999) - (b.priority || 999);

export const getLeadership = () =>
  Object.values(allTeamMembers)
    .filter((m) => m.type === "leadership")
    .sort(byPriority);
export const getExecutive = () =>
  Object.values(allTeamMembers)
    .filter((m) => m.type === "executive")
    .sort(byPriority);
export const getStrategicPartners = () =>
  Object.values(allTeamMembers)
    .filter((m) => m.type === "strategic-partner")
    .sort(byPriority);
export const getAppliedScience = () =>
  Object.values(allTeamMembers)
    .filter((m) => m.type === "applied-science")
    .sort(byPriority);
export const getSchoolingLeadership = () =>
  Object.values(allTeamMembers)
    .filter((m) => m.type === "schooling-leadership")
    .sort(byPriority);
export const getSchooling = () =>
  Object.values(allTeamMembers)
    .filter((m) => m.type === "schooling")
    .sort(byPriority);
export const getAdvisoryJAT = () =>
  Object.values(allTeamMembers)
    .filter((m) => m.type === "advisory-jat")
    .sort(byPriority);
export const getAdvisoryCJAT = () =>
  Object.values(allTeamMembers)
    .filter((m) => m.type === "advisory-cjat")
    .sort(byPriority);

// C-JAT members PLUS strategic partners who also serve on C-JAT (dual-listed)
const CJAT_DUAL_LISTED_SLUGS = ["nazmul-haque-mitun", "faruk-hasan"];
export const getAdvisoryCJATAll = () => {
  const primary = getAdvisoryCJAT();
  const dualListed = CJAT_DUAL_LISTED_SLUGS.map(
    (slug) => allTeamMembers[slug],
  ).filter(Boolean);
  return [...primary, ...dualListed];
};
export const getUniversityCoordinators = () =>
  Object.values(allTeamMembers)
    .filter((m) => m.type === "university-coordinator")
    .sort(byPriority);

// ======================================
// UC&SA Program — Zone Structure
// (Source: KRTC UC&SA Agreement §9.2 — 4 regional coordination zones)
// ======================================

export type ZoneId = "north" | "central" | "southwest" | "east";

export interface ZoneUniversity {
  name: string;
  code: string;
}

export interface ZoneDefinition {
  id: ZoneId;
  name: string; // e.g. "North Zone"
  region: string; // e.g. "Rajshahi & Rangpur Divisions"
  universities: ZoneUniversity[];
  affiliatedNote: string; // e.g. "All affiliated National University colleges in Rajshahi & Rangpur Divisions"
}

export const universityZones: ZoneDefinition[] = [
  {
    id: "north",
    name: "North Zone",
    region: "Rajshahi & Rangpur Divisions",
    universities: [
      { name: "University of Rajshahi, Rajshahi", code: "RU" },
      { name: "Begum Rokeya University, Rangpur", code: "BRUR" },
      {
        name: "Haji Mohammad Danesh Science & Technology University, Dinajpur",
        code: "HSTU",
      },
      { name: "Bogura Science & Technology University, Bogura", code: "BSTU" },
      { name: "Pabna University of Science & Technology, Pabna", code: "PUST" },
    ],
    affiliatedNote:
      "All affiliated National University colleges in Rajshahi & Rangpur Divisions",
  },
  {
    id: "central",
    name: "Central Zone",
    region: "Dhaka & Mymensingh Divisions",
    universities: [
      { name: "University of Dhaka, Dhaka", code: "DU" },
      { name: "Jahangirnagar University, Savar, Dhaka", code: "JU" },
      { name: "Jagannath University, Dhaka", code: "JnU" },
      { name: "Bangladesh University of Professionals, Dhaka", code: "BUP" },
      {
        name: "Jatiya Kabi Kazi Nazrul Islam University, Mymensingh",
        code: "JKKNIU",
      },
      {
        name: "Mawlana Bhashani Science & Technology University, Tangail",
        code: "MBSTU",
      },
      {
        name: "Bangabandhu Sheikh Mujibur Rahman S&T University, Gopalganj",
        code: "BSMRSTU",
      },
    ],
    affiliatedNote:
      "All affiliated National University colleges in Dhaka & Mymensingh Divisions",
  },
  {
    id: "southwest",
    name: "Southwest Zone",
    region: "Khulna & Barishal Divisions",
    universities: [
      { name: "Khulna University, Khulna", code: "KU" },
      {
        name: "Khulna University of Engineering & Technology, Khulna",
        code: "KUET",
      },
      { name: "Islamic University, Kushtia", code: "IU" },
      { name: "University of Barishal, Barishal", code: "BU" },
      {
        name: "Patuakhali Science & Technology University, Patuakhali",
        code: "PSTU",
      },
      {
        name: "Jashore University of Science & Technology, Jashore",
        code: "JUST",
      },
    ],
    affiliatedNote:
      "All affiliated National University colleges in Khulna & Barishal Divisions",
  },
  {
    id: "east",
    name: "East Zone",
    region: "Chattogram & Sylhet Divisions",
    universities: [
      { name: "University of Chattogram", code: "CU" },
      {
        name: "Shahjalal University of Science & Technology, Sylhet",
        code: "SUST",
      },
      { name: "Comilla University, Cumilla", code: "CoU" },
      {
        name: "Noakhali Science & Technology University, Noakhali",
        code: "NSTU",
      },
    ],
    affiliatedNote:
      "All affiliated National University colleges in Chattogram & Sylhet Divisions",
  },
];

export interface ZoneGroup extends ZoneDefinition {
  advisor: TeamMember | null; // null → To Be Announced; drawn from the coordinators in this zone
  coordinators: TeamMember[]; // Flat list, serial priority order (includes the advisor — dual-listed)
}

// Single program-level Board of Director for the entire UC&SA program.
// null → To Be Announced. Set this to a member slug once appointed.
export const PROGRAM_BOARD_DIRECTOR_SLUG: string | null = null;

// Zone-level advisor assignments. Each zone has ONE advisor drawn from within
// that zone's university coordinators — so the same member appears in BOTH
// the zone's advisor slot AND in the flat coordinator list (dual-listed).
// null → To Be Announced.
export const ZONE_ADVISOR_SLUGS: Record<ZoneId, string | null> = {
  north: "mahmudul-hasan-abir",
  central: null,
  southwest: null,
  east: null,
};

export const getProgramBoardDirector = (): TeamMember | null =>
  PROGRAM_BOARD_DIRECTOR_SLUG
    ? allTeamMembers[PROGRAM_BOARD_DIRECTOR_SLUG] || null
    : null;

// Builds the zone-based view of the UC&SA program.
// Each zone returns its assigned advisor (looked up by slug from
// ZONE_ADVISOR_SLUGS) plus the flat list of coordinators in priority order.
export const getUniversityCoordinatorsByZone = (): ZoneGroup[] => {
  const all = getUniversityCoordinators();

  return universityZones.map((zone) => {
    const coordinators = all.filter((m) => m.zone === zone.id).sort(byPriority);

    const advisorSlug = ZONE_ADVISOR_SLUGS[zone.id];
    const advisor =
      (advisorSlug && coordinators.find((m) => m.slug === advisorSlug)) || null;

    return {
      ...zone,
      advisor,
      coordinators,
    };
  });
};

export const getMemberBySlug = (slug: string) => allTeamMembers[slug] || null;

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
  email?: string;
  emailAlt?: string;
  phone?: string;
  phoneAlt?: string;
  location?: string;
  address?: string;
  dateOfBirth?: string;
  linkedin?: string;
  type: "leadership" | "applied-science" | "schooling" | "schooling-leadership";
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
    title: "MSc Chemistry Candidate | Applied Science Education Researcher",
    department: "Founder & Chairman, KRTC",
    initials: "ZH",
    color: "bg-primary",
    email: "kekuleoninfo@gmail.com",
    phone: "+49 17628983090",
    location: "University of Siegen, Germany",
    linkedin: "https://linkedin.com/in/md-zakaria-hossain-45a631230/",
    type: "leadership",
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
          "Decentralised and Integrated Framework for Science Education Reform and Global Development",
        supervisor: "Principal Researcher",
        institution: "Kekuleon Research and Training Center (KRTC)",
        period: "Oct 2025 - Present",
        description:
          "Developed a decentralised and integrated framework for science education reform that links academic learning, laboratory practice, research training, and industry engagement within a single institutional model. Its long-term goal is to establish an adaptable model for scientific capacity development, educational equity, and education reform across diverse development contexts.",
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
      "Founder & Chairman of KRTC",
      "MSc in Chemistry, University of Siegen",
      "Research in Applied Science Education",
      "Expertise in Educational Equity and Capacity Development",
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
      "TICI Training - Grade A (3.50/4.00)",
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
  // Instructors
  // ==================
  "nazmul-haque-mitun": {
    id: 3,
    slug: "nazmul-haque-mitun",
    name: "Nazmul Haque Mitun",
    nameBn: "নাজমুল হক মিটুন",
    title: "Head Teacher, KRTC Schooling",
    department: "Chemistry",
    initials: "NM",
    color: "bg-red-500",
    email: "mitun.ru729@gmail.com",
    phone: "+880 1717987729",
    location: "Kishoreganj / Dhaka, Bangladesh",
    linkedin: "http://linkedin.com/in/nazmul-haque-mitun-194682132",
    type: "schooling-leadership",
    priority: 3,
    bio: `Nazmul Haque Mitun is the Head Teacher of KRTC Schooling and a Chemistry Lecturer at Milestone College, Dhaka. With strong academic background in Applied Chemistry and Chemical Engineering from University of Rajshahi, he brings both theoretical knowledge and practical teaching experience.

He completed specialized training on Industrial Process Unit Operation & Process Control Technique from Training Institute for Chemical Industries (TICI), which enables him to connect classroom learning with real-world industrial applications. He received Certificate of Appreciation from BCSIR in 2024.`,
    education: [
      {
        degree: "MSc Applied Chemistry & Chemical Engineering",
        institution: "University of Rajshahi",
        year: "2020-2021",
      },
      {
        degree: "BSc Applied Chemistry & Chemical Engineering",
        institution: "University of Rajshahi",
        year: "2015-2020",
      },
      {
        degree:
          "Training on Industrial Process Unit Operation & Process Control",
        institution: "TICI, Norsingdi",
        year: "2022",
        grade: "A+",
      },
      {
        degree: "Higher Secondary Certificate (HSC)",
        institution: "Govt. Gurudayal College, Kishoreganj",
        year: "2014",
        grade: "GPA 4.70",
      },
    ],
    experience: [
      {
        role: "Head Teacher",
        org: "KRTC Schooling",
        period: "2025 - Present",
      },
      {
        role: "Chemistry Lecturer",
        org: "Milestone College, Dhaka",
        period: "Dec 2025 - Present",
      },
    ],
    skills: [
      "Analytical Chemistry",
      "Process Technology",
      "Instrumentation",
      "Environmental Science",
      "Industrial Safety",
    ],
    achievements: [
      "BCSIR Certificate of Appreciation 2024",
      "TICI Certified (A+ Grade)",
      "Milestone College Lecturer",
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
    priority: 9,
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
    priority: 4,
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
};

// Helper functions
export const getLeadership = () =>
  Object.values(allTeamMembers).filter((m) => m.type === "leadership");
export const getAppliedScience = () =>
  Object.values(allTeamMembers).filter((m) => m.type === "applied-science");
export const getSchoolingLeadership = () =>
  Object.values(allTeamMembers)
    .filter((m) => m.type === "schooling-leadership")
    .sort((a, b) => (a.priority || 999) - (b.priority || 999));
export const getSchooling = () =>
  Object.values(allTeamMembers)
    .filter((m) => m.type === "schooling")
    .sort((a, b) => (a.priority || 999) - (b.priority || 999));
export const getMemberBySlug = (slug: string) => allTeamMembers[slug] || null;

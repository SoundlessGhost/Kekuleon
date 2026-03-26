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
  phone?: string;
  location?: string;
  linkedin?: string;
  type: "leadership" | "instructor";
  bio: string;
  education: {
    degree: string;
    institution: string;
    year: string;
    grade?: string;
  }[];
  experience: {
    role: string;
    org: string;
    period: string;
  }[];
  skills: string[];
  achievements: string[];
}

export const allTeamMembers: Record<string, TeamMember> = {
  // ==================
  // Leadership Team
  // ==================
  "zakaria-hossain": {
    id: 1,
    slug: "zakaria-hossain",
    name: "Md. Zakaria Hossain",
    nameBn: "মো. জাকারিয়া হোসেন",
    title: "Chairman & CEO",
    department: "Applied Chemistry",
    initials: "ZH",
    color: "bg-primary",
    email: "mdzhs1541@gmail.com",
    phone: "+49 163 485 5414",
    location: "University of Siegen, Germany / KRTC, Sirajganj",
    linkedin: "https://linkedin.com/in/md-zakaria-hossain-a47474222/",
    type: "leadership",
    bio: `Md. Zakaria Hossain is the founder and Chairman of Kekuleon Research and Training Center (KRTC). Currently pursuing MSc in Chemistry at University of Siegen, Germany, he brings international academic experience combined with deep understanding of Bangladesh's science education challenges.

He completed his MSc and BSc in Applied Chemistry and Chemical Engineering from University of Rajshahi, and received industrial training from TICI on Process Unit Operation. His vision is to bridge the gap between theoretical education and practical scientific competence in Bangladesh.`,
    education: [
      { degree: "MSc Chemistry (Ongoing)", institution: "University of Siegen, Germany", year: "2023-Present" },
      { degree: "MSc Applied Chemistry & Chemical Engineering", institution: "University of Rajshahi", year: "2020-2021" },
      { degree: "BSc Applied Chemistry & Chemical Engineering", institution: "University of Rajshahi", year: "2015-2020" },
      { degree: "Training on Industrial Process Unit Operation", institution: "TICI, Norsingdi", year: "2022" },
    ],
    experience: [
      { role: "Chairman & CEO", org: "KRTC", period: "2025 - Present" },
      { role: "MSc Research Student", org: "University of Siegen, Germany", period: "2023 - Present" },
    ],
    skills: ["Applied Chemistry", "Research Methodology", "Institutional Development", "Science Education"],
    achievements: ["Founded KRTC", "International Academic Experience"],
  },

  "abdul-mozid": {
    id: 2,
    slug: "abdul-mozid",
    name: "Md. Abdul Mozid",
    nameBn: "মো. আব্দুল মজিদ",
    title: "Managing Director",
    department: "Operations & Administration",
    initials: "AM",
    color: "bg-gray-800",
    email: "Subornakhatun6649@gmail.com",
    location: "KRTC, Sirajganj, Bangladesh",
    type: "leadership",
    bio: `Md. Abdul Mozid serves as the Managing Director of KRTC, overseeing daily operations and institutional development. As a founding member, he plays a crucial role in implementing KRTC's vision of providing quality science education and training.

He manages administrative functions, coordinates with stakeholders, and ensures smooth operation of all KRTC programs including KRTC Schooling and departmental activities.`,
    education: [],
    experience: [
      { role: "Managing Director", org: "KRTC", period: "2025 - Present" },
    ],
    skills: ["Operations Management", "Administration", "Stakeholder Relations", "Program Coordination"],
    achievements: ["Co-founder of KRTC"],
  },

  // ==================
  // Instructors
  // ==================
  "nazmul-haque-mitun": {
    id: 3,
    slug: "nazmul-haque-mitun",
    name: "Nazmul Haque Mitun",
    nameBn: "নাজমুল হক মিটুন",
    title: "Chemistry Instructor",
    department: "Chemistry",
    initials: "NM",
    color: "bg-red-500",
    email: "mitun.ru729@gmail.com",
    phone: "+880 1717987729",
    location: "Kishoreganj / Dhaka, Bangladesh",
    linkedin: "http://linkedin.com/in/nazmul-haque-mitun-194682132",
    type: "instructor",
    bio: `Nazmul Haque Mitun is a Chemistry Lecturer at Milestone College, Dhaka, and an instructor at KRTC. With strong academic background in Applied Chemistry and Chemical Engineering from University of Rajshahi, he brings both theoretical knowledge and practical teaching experience.

He completed specialized training on Industrial Process Unit Operation & Process Control Technique from Training Institute for Chemical Industries (TICI), which enables him to connect classroom learning with real-world industrial applications. He received Certificate of Appreciation from BCSIR in 2024.`,
    education: [
      { degree: "MSc Applied Chemistry & Chemical Engineering", institution: "University of Rajshahi", year: "2020-2021" },
      { degree: "BSc Applied Chemistry & Chemical Engineering", institution: "University of Rajshahi", year: "2015-2020" },
      { degree: "Training on Industrial Process Unit Operation & Process Control", institution: "TICI, Norsingdi", year: "2022", grade: "A+" },
      { degree: "Higher Secondary Certificate (HSC)", institution: "Govt. Gurudayal College, Kishoreganj", year: "2014", grade: "GPA 4.70" },
    ],
    experience: [
      { role: "Chemistry Lecturer", org: "Milestone College, Dhaka", period: "Dec 2025 - Present" },
      { role: "Chemistry Instructor", org: "KRTC", period: "2025 - Present" },
    ],
    skills: ["Analytical Chemistry", "Process Technology", "Instrumentation", "Environmental Science", "Industrial Safety"],
    achievements: ["BCSIR Certificate of Appreciation 2024", "TICI Certified (A+ Grade)", "Milestone College Lecturer"],
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
    type: "instructor",
    bio: `Md. Sumon is a Mathematics instructor with strong analytical skills and competitive achievement. He secured 8th position at the 15th National Undergraduate Mathematics Olympiad, Bangladesh-2024, and has won 3 regional Mathematics Olympiads.

Currently working as an instructor at Pi Math Academy and KRTC, he specializes in mathematical problem solving, climate modeling, and data analysis. His technical proficiency includes Matlab, C, Fortran, and various data processing tools.`,
    education: [
      { degree: "BSc in Mathematics", institution: "University of Rajshahi", year: "2020-2023", grade: "CGPA: 3.14" },
      { degree: "Higher Secondary Certificate (HSC)", institution: "Varendra College, Rajshahi", year: "2019", grade: "GPA: 4.42" },
      { degree: "Secondary School Certificate (SSC)", institution: "Baliapukur Vidyaniketon, Rajshahi", year: "2017", grade: "GPA: 5.00" },
    ],
    experience: [
      { role: "Mathematics Instructor", org: "KRTC", period: "2025 - Present" },
      { role: "Instructor", org: "Pi Math Academy", period: "2023 - Present" },
      { role: "Data Analyst", org: "Climate Modeling Projects", period: "2023 - Present" },
    ],
    skills: ["Mathematical Problem Solving", "Matlab", "C Programming", "Fortran", "Data Analysis", "Climate Modeling"],
    achievements: ["8th Position - 15th National Undergraduate Math Olympiad 2024", "3x Regional Math Olympiad Winner", "SSC GPA 5.00"],
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
    type: "instructor",
    bio: `Ashad Belal is a talented young science instructor with exceptional academic achievements. He won the Bangladesh Physics Olympiad in 2019, demonstrating his strong foundation in physics and scientific reasoning.

Currently pursuing BSc in Mathematics at University of Rajshahi, he has been teaching as a home tutor since 2022. He has strong command over Math, Physics, Chemistry, and Biology, with excellent communication and explanation skills that make complex concepts accessible to students.`,
    education: [
      { degree: "BSc in Mathematics (Ongoing, 3rd Semester)", institution: "University of Rajshahi", year: "2023-Present" },
      { degree: "Higher Secondary Certificate (HSC)", institution: "Ramu Govt College", year: "2023", grade: "GPA: 5.00" },
      { degree: "Secondary School Certificate (SSC)", institution: "Eidgah Adarsha Shiksha Niketon", year: "2021", grade: "GPA: 4.61" },
    ],
    experience: [
      { role: "Science Instructor", org: "KRTC", period: "2025 - Present" },
      { role: "Home Tutor", org: "Private", period: "2022 - Present" },
    ],
    skills: ["Physics", "Mathematics", "Chemistry", "Biology", "Easy Explanation", "Student Mentoring"],
    achievements: ["Winner - Bangladesh Physics Olympiad 2019", "HSC GPA 5.00", "Multi-subject Expertise"],
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
    type: "instructor",
    bio: `Arifin Asad is a motivated undergraduate student of Applied Chemistry and Chemical Engineering with strong academic results and extensive teaching experience. Currently in his 4th year at Rajshahi University with GPA 3.45, he has been actively involved in teaching.

He works as an instructor at Chorcha Coaching Center and UAC Coaching Center, teaching 4+ batches independently. He also teaches more than 60 students privately. His perfect GPA 5.00 in both HSC and SSC reflects his academic excellence.`,
    education: [
      { degree: "BSc Applied Chemistry & Chemical Engineering (4th Year)", institution: "Rajshahi University", year: "2021-Present", grade: "GPA: 3.45/4.00" },
      { degree: "Higher Secondary Certificate (HSC)", institution: "Rajshahi Board", year: "2020", grade: "GPA: 5.00" },
      { degree: "Secondary School Certificate (SSC)", institution: "Rajshahi Board", year: "2018", grade: "GPA: 5.00" },
    ],
    experience: [
      { role: "Chemistry Instructor", org: "KRTC", period: "2025 - Present" },
      { role: "Instructor", org: "Chorcha Coaching Center", period: "2022 - Present" },
      { role: "Instructor", org: "UAC Coaching Center", period: "2022 - Present" },
      { role: "Private Tutor", org: "60+ Students", period: "2021 - Present" },
    ],
    skills: ["Chemistry", "Chemical Engineering", "Classroom Management", "Effective Communication", "Time Management", "Leadership"],
    achievements: ["60+ Private Students", "4+ Independent Batches", "HSC & SSC GPA 5.00"],
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
    type: "instructor",
    bio: `Md. Mafizul Islam is a dedicated Physics instructor currently pursuing BSc in Physics at University of Rajshahi. His teaching philosophy focuses on understanding students' needs and making knowledge boundaries wide through motivational teaching methods.

He believes in staying updated with new technology and teaching techniques to always be the best teacher he can be. Since 2023, he has been working as a home tutor with strong command over Physics, Chemistry, and Math.`,
    education: [
      { degree: "BSc in Physics (3rd Year, 1st Semester)", institution: "University of Rajshahi", year: "2022-Present" },
    ],
    experience: [
      { role: "Physics Instructor", org: "KRTC", period: "2025 - Present" },
      { role: "Home Tutor", org: "Private", period: "2023 - Present" },
    ],
    skills: ["Physics", "Chemistry", "Mathematics", "Motivational Teaching", "Student Care"],
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
    type: "instructor",
    bio: `Md. Faridul Islam is the most experienced instructor at KRTC with 6-7 years of teaching experience. He holds both MSc and BSc (Hons) in Physics from University of Rajshahi with excellent academic records (CGPA 3.44 and 3.52 respectively).

His extensive experience spans teaching Physics, Chemistry, Math, and ICT to students from Class 6 to 12. His deep subject knowledge combined with years of practical teaching experience makes him a valuable mentor for students preparing for higher studies.`,
    education: [
      { degree: "MSc in Physics", institution: "University of Rajshahi", year: "2020-2021", grade: "CGPA: 3.44" },
      { degree: "BSc (Hons) in Physics", institution: "University of Rajshahi", year: "2016-2020", grade: "CGPA: 3.52" },
    ],
    experience: [
      { role: "Senior Physics Instructor", org: "KRTC", period: "2025 - Present" },
      { role: "Physics & Science Tutor", org: "Private Teaching", period: "2018 - Present" },
    ],
    skills: ["Physics", "Chemistry", "Mathematics", "ICT", "Class 6-12 Curriculum", "Exam Preparation"],
    achievements: ["6-7 Years Teaching Experience", "MSc Physics", "Multi-level Teaching Expert"],
  },
};

// Helper functions
export const getLeadership = () => Object.values(allTeamMembers).filter(m => m.type === "leadership");
export const getInstructors = () => Object.values(allTeamMembers).filter(m => m.type === "instructor");
export const getMemberBySlug = (slug: string) => allTeamMembers[slug] || null;

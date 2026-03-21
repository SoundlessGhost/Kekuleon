// Site Information
export const siteConfig = {
  name: 'Kekuleon Research and Training Center',
  shortName: 'KRTC',
  tagline: 'Bridging the Theory-Practice Gap in Science Education',
  description: 'Integrated research, laboratory training, industry collaboration, and community engagement for the next generation of scientists in Bangladesh.',
  url: 'https://kekuleon.com',
  email: 'kekuleoninfo@gmail.com',
  phone: '+880 134 568 7576',
  whatsapp: '+49 163 485 5414',
  address: 'Kazipur Road 6700, Sirajganj Sadar, Sirajganj, Bangladesh',
  registration: {
    number: 'RAJC-2557/2025',
    date: '14 December 2025',
    capital: 'TK 10,00,00,000 (Ten Crore)',
  },
}

// Navigation Links
export const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { 
    name: 'Services', 
    href: '/services',
    submenu: [
      { name: 'Chemistry', href: '/services#chemistry' },
      { name: 'Pharmaceutical Sciences', href: '/services#pharmaceutical' },
      { name: 'Polymer Processing', href: '/services#polymer' },
      { name: 'Materials Science', href: '/services#materials' },
      { name: 'Textile Testing', href: '/services#textile' },
      { name: 'Nursing & Healthcare', href: '/services#nursing' },
    ]
  },
  { name: 'KRTC Schooling', href: '/schooling' },
  { name: 'PhD Programs', href: '/phd-programs' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

// Statistics
export const stats = [
  { number: "150+", label: "Current Students" },
  { number: "6", label: "Applied Departments" },
  { number: "500+", label: "Target Trainees" },
  { number: "20%", label: "Surplus for Scholarships" },
];

// Departments/Services
export const departments = [
  {
    id: 'chemistry',
    title: 'Chemistry and Applied Chemical Sciences',
    shortTitle: 'Chemistry',
    icon: 'Flask',
    description: 'Advanced analytical chemistry, research methodology, and laboratory instrumentation training for students and professionals.',
    services: [
      'Advanced analytical chemistry research',
      'Research methodology training',
      'Laboratory instrumentation training',
      'Instrumental analysis techniques',
      'Quality control and assurance methods',
      'Environmental chemistry applications',
    ],
    image: '/images/departments/chemistry.jpg',
  },
  {
    id: 'pharmaceutical',
    title: 'Pharmaceutical Sciences and Drug Development',
    shortTitle: 'Pharmaceutical Sciences',
    icon: 'Pill',
    description: 'Drug development research, pharmaceutical analysis, quality control training, and industry collaboration programs.',
    services: [
      'Drug development research',
      'Pharmaceutical analysis and quality control',
      'Analytical and quality control services',
      'Short-term training in pharmaceutical instrumentation',
      'Research supervision (UG, PG, PhD)',
      'Industry collaboration programs',
    ],
    image: '/images/departments/pharmaceutical.jpg',
  },
  {
    id: 'polymer',
    title: 'Polymer and Plastic Processing Technologies',
    shortTitle: 'Polymer Processing',
    icon: 'Layers',
    description: 'Applied research and testing in polymer science, plastic processing technologies, and sustainable materials development.',
    services: [
      'Applied research in polymer and plastic processing',
      'Industrial partner collaboration',
      'Hands-on training in processing techniques',
      'PhD research support in polymer science',
      'Plastic recycling initiatives',
      'Sustainable materials research',
    ],
    image: '/images/departments/polymer.jpg',
  },
  {
    id: 'materials',
    title: 'Materials Science and Engineering Applications',
    shortTitle: 'Materials Science',
    icon: 'Atom',
    description: 'Material testing, characterization, performance analysis, and hands-on training with analytical instruments.',
    services: [
      'Material testing and characterization',
      'Performance analysis',
      'Applied materials research',
      'Short-term training in analytical instruments',
      'Advanced materials research supervision',
      'Industry collaboration for materials development',
    ],
    image: '/images/departments/materials.jpg',
  },
  {
    id: 'textile',
    title: 'Textile Testing and Quality Assurance',
    shortTitle: 'Textile Testing',
    icon: 'Shirt',
    description: 'Industry-focused textile testing, compliance certification, and quality assurance training for the textile sector.',
    services: [
      'Textile testing and compliance services',
      'Quality assurance certification',
      'Textile industry collaboration',
      'Industry-focused instrument training',
      'PhD research in textile materials',
      'International certification partnerships',
    ],
    image: '/images/departments/textile.jpg',
  },
  {
    id: 'nursing',
    title: 'Nursing and Community Healthcare',
    shortTitle: 'Nursing & Healthcare',
    icon: 'Heart',
    description: 'Nursing education, community healthcare services, clinical practice training, and international placement preparation.',
    services: [
      'Nursing education and training programs',
      'Community-based healthcare services',
      'Clinical practice with academic instruction',
      'Advanced nursing research',
      'German language preparation',
      'Health Benefit Card System',
    ],
    image: '/images/departments/nursing.jpg',
  },
]

// Team Members
export const teamMembers = [
  {
    name: 'Md. Zakaria Hossain',
    position: 'Chairman & CEO',
    image: '/images/team/zakaria.jpg',
    bio: 'MSc Chemistry Candidate at University of Siegen, Germany. MSc & BSc in Applied Chemistry and Chemical Engineering from University of Rajshahi. Researcher in Applied Science Education and Scientific Capacity Development.',
    education: [
      'MSc Chemistry Candidate, University of Siegen, Germany',
      'MSc Applied Chemistry & Chemical Engineering, University of Rajshahi',
      'BSc Applied Chemistry & Chemical Engineering, University of Rajshahi',
    ],
    email: 'mdzhs1541@gmail.com',
    linkedin: 'https://linkedin.com/in/md-zakaria-hossain-a47474222/',
  },
  {
    name: 'Md. Abdul Mozid',
    position: 'Managing Director',
    image: '/images/team/mozid.jpg',
    bio: 'Founding director overseeing daily operations and institutional development of KRTC.',
    email: 'Subornakhatun6649@gmail.com',
  },
]

// Schooling Program Features
export const schoolingFeatures = [
  {
    title: 'English Language Preparation',
    description: 'Comprehensive IELTS preparation and academic English training',
    icon: 'Languages',
  },
  {
    title: 'Academic Writing',
    description: 'Research awareness and academic writing skills development',
    icon: 'FileText',
  },
  {
    title: 'Research Methodology',
    description: 'Introductory research methodology and scientific reasoning',
    icon: 'Search',
  },
  {
    title: 'Laboratory Exposure',
    description: 'Basic scientific reasoning and laboratory awareness',
    icon: 'Microscope',
  },
  {
    title: 'Community Service',
    description: 'Social responsibility and volunteer activities',
    icon: 'Users',
  },
  {
    title: 'Scholarship Support',
    description: 'Merit-based scholarship examinations and guidance',
    icon: 'Award',
  },
]

// PhD Program Features
export const phdFeatures = [
  {
    title: 'Applied Research Focus',
    description: 'Industry-linked, problem-driven research addressing real-world challenges',
  },
  {
    title: 'International Collaboration',
    description: 'Co-supervision and partnerships with international universities',
  },
  {
    title: 'Publication Support',
    description: 'Research ethics, proposal development, and publication standards',
  },
  {
    title: 'Industry Engagement',
    description: 'Field work and industry engagement integrated into research',
  },
]

// Location Benefits
export const locationBenefits = [
  'Lower operational costs compared to Dhaka',
  'Reduced political instability',
  'Better regional connectivity',
  'Lower living expenses',
  'Healthier environment',
  'Supports decentralized development',
  'Proposed Economic Zone',
  'Digital platform reach',
]

// Problems We Solve
export const problems = [
  '90% of students depend on review-based projects due to lack of laboratories',
  'National University students fall behind due to weak research resources',
  'Industries reject fresh graduates due to lack of practical knowledge',
  'High barriers to international higher education and scholarships',
  'Limited structured opportunities for community service',
]

// Footer Links
export const footerLinks = {
  quickLinks: [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ],
  programs: [
    { name: 'KRTC Schooling', href: '/schooling' },
    { name: 'PhD Programs', href: '/phd-programs' },
    { name: 'Scholarships', href: '/schooling#scholarships' },
    { name: 'Research', href: '/services' },
  ],
  departments: [
    { name: 'Chemistry', href: '/services#chemistry' },
    { name: 'Pharmaceutical Sciences', href: '/services#pharmaceutical' },
    { name: 'Polymer Processing', href: '/services#polymer' },
    { name: 'Materials Science', href: '/services#materials' },
    { name: 'Textile Testing', href: '/services#textile' },
    { name: 'Nursing & Healthcare', href: '/services#nursing' },
  ],
}

// =============================================
// KRTC Website Data
// All content from official documents
// =============================================

export const siteConfig = {
  name: 'Kekuleon Research and Training Center',
  shortName: 'KRTC',
  tagline: 'Bridging the Theory-Practice Gap in Science Education',
  description: 'Integrated research, laboratory training, industry collaboration, and community engagement for the next generation of scientists in Bangladesh.',
  url: 'https://kekuleon.com',
  email: 'kekuleoninfo@gmail.com',
  emailAlt: 'info@kekuleon.com',
  phone: '+880 134 568 7576',
  whatsapp: '+49 163 485 5414',
  address: {
    street: 'Kazipur Road 6700',
    city: 'Sirajganj Sadar',
    district: 'Sirajganj',
    country: 'Bangladesh',
    full: 'Kazipur Road 6700, Sirajganj Sadar, Sirajganj, Bangladesh',
  },
  registration: {
    number: 'RAJC-2557/2025',
    date: '14 December 2025',
    type: 'Private Company Limited by Shares',
    capital: 'TK 10,00,00,000 (Ten Crore)',
  },
  social: {
    facebook: 'https://facebook.com/kekuleon',
    linkedin: 'https://linkedin.com/company/kekuleon',
    twitter: 'https://twitter.com/kekuleon',
  },
}

export const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { 
      name: 'Services', 
      href: '/services',
      children: [
        { name: 'Chemistry & Applied Sciences', href: '/services/chemistry' },
        { name: 'Pharmaceutical Sciences', href: '/services/pharmaceutical' },
        { name: 'Polymer Processing', href: '/services/polymer' },
        { name: 'Materials Science', href: '/services/materials' },
        { name: 'Textile Testing', href: '/services/textile' },
        { name: 'Nursing & Healthcare', href: '/services/nursing' },
      ],
    },
    { name: 'KRTC Schooling', href: '/schooling' },
    { name: 'PhD Programs', href: '/phd-programs' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ],
  footer: {
    services: [
      { name: 'Chemistry & Applied Sciences', href: '/services/chemistry' },
      { name: 'Pharmaceutical Sciences', href: '/services/pharmaceutical' },
      { name: 'Polymer Processing', href: '/services/polymer' },
      { name: 'Materials Science', href: '/services/materials' },
      { name: 'Textile Testing', href: '/services/textile' },
      { name: 'Nursing & Healthcare', href: '/services/nursing' },
    ],
    programs: [
      { name: 'KRTC Schooling', href: '/schooling' },
      { name: 'PhD Programs', href: '/phd-programs' },
      { name: 'Scholarships', href: '/scholarships' },
      { name: 'Community Healthcare', href: '/healthcare' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/team' },
      { name: 'Blog', href: '/blog' },
      { name: 'Contact', href: '/contact' },
    ],
  },
}

export const heroContent = {
  badge: 'Established 2025',
  heading: 'Building Scientific Capacity Through Applied Training',
  subheading: 'Integrated research, laboratory training, industry collaboration, and community engagement for the next generation of scientists in Bangladesh.',
  cta: {
    primary: { text: 'Explore Programs', href: '/services' },
    secondary: { text: 'Contact Us', href: '/contact' },
  },
  stats: [
    { value: '150+', label: 'Current Students' },
    { value: '6', label: 'Departments' },
    { value: '350+', label: 'Target Trainees' },
  ],
}

export const aboutContent = {
  intro: {
    title: 'Bridging Theory and Practice',
    subtitle: 'About KRTC',
    description: 'Science education in Bangladesh remains strongly theoretical. Although students receive conceptual training, they often lack practical laboratory experience, exposure to research environments, and familiarity with industry practices.',
    highlight: 'KRTC was established to address this challenge by creating a decentralized platform that combines applied training, research services, and community engagement.',
  },
  problem: {
    title: 'The Challenge We Address',
    points: [
      'Around 90% of students depend on review-based academic projects due to lack of laboratories',
      'National University students fall behind due to weak research and training resources',
      'Industries increasingly reject fresh graduates due to lack of practical knowledge',
      'High financial barriers to international higher education and scholarships',
      'Limited structured opportunities for community service and healthcare access',
    ],
  },
  solution: {
    title: 'Our Integrated Approach',
    description: 'KRTC provides a self-sustaining social business model delivering affordable, hands-on laboratory training and applied research exposure.',
    points: [
      'Practical analytical instrument training',
      'Applied research and lab-based learning',
      'Scholarship and research preparation support',
      'Industry- and university-linked programs',
      'Community healthcare services',
    ],
  },
  mission: 'To bridge the theory-practice gap in science education by providing accessible, high-quality laboratory training and research opportunities. We aim to prepare students for successful careers in science, industry, and academia while contributing to national development.',
  vision: 'To become a leading applied science training institution in Bangladesh, recognized for producing skilled graduates who excel in research, industry, and international academic environments.',
  values: [
    { title: 'Excellence', description: 'Commitment to the highest standards in education and research.' },
    { title: 'Accessibility', description: 'Making quality science education available to all backgrounds.' },
    { title: 'Innovation', description: 'Continuously improving our methods and approaches.' },
    { title: 'Community', description: 'Serving and uplifting the communities we work with.' },
  ],
}

export const departments = [
  {
    id: 'chemistry',
    slug: 'chemistry',
    title: 'Chemistry and Applied Chemical Sciences',
    shortTitle: 'Chemistry',
    icon: 'Flask',
    description: 'Advanced analytical chemistry, research methodology, and laboratory instrumentation training for students and professionals.',
    fullDescription: 'Our Chemistry department conducts advanced research in analytics across multiple chemistry disciplines including applied chemistry, analytical chemistry, material chemistry, and polymer chemistry.',
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
    slug: 'pharmaceutical',
    title: 'Pharmaceutical Sciences and Drug Development',
    shortTitle: 'Pharmaceutical',
    icon: 'Pill',
    description: 'Drug development research, pharmaceutical analysis, quality control training, and industry collaboration programs.',
    fullDescription: 'Our Pharmaceutical Sciences department conducts R&D and testing projects in collaboration with authorized pharmaceutical industries.',
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
    slug: 'polymer',
    title: 'Polymer and Plastic Processing Technologies',
    shortTitle: 'Polymer Processing',
    icon: 'Layers',
    description: 'Applied research and testing in polymer science, plastic processing technologies, and sustainable materials development.',
    fullDescription: 'Our Polymer department focuses on applied research and testing in polymer science and plastic processing, including sustainable materials development.',
    services: [
      'Applied research in polymer and plastic processing',
      'Collaboration with industrial partners',
      'Hands-on training in processing techniques',
      'PhD research support in polymer science',
      'Plastic recycling initiatives',
      'Sustainable materials research',
    ],
    image: '/images/departments/polymer.jpg',
  },
  {
    id: 'materials',
    slug: 'materials',
    title: 'Materials Science and Engineering Applications',
    shortTitle: 'Materials Science',
    icon: 'Atom',
    description: 'Material testing, characterization, performance analysis, and hands-on training with analytical instruments.',
    fullDescription: 'Our Materials Science department provides comprehensive material testing, characterization, and performance analysis services.',
    services: [
      'Material testing and characterization',
      'Performance analysis',
      'Applied materials research',
      'Short-term training in analytical instruments',
      'Advanced research supervision',
      'Industry collaboration for materials development',
    ],
    image: '/images/departments/materials.jpg',
  },
  {
    id: 'textile',
    slug: 'textile',
    title: 'Textile Testing and Quality Assurance',
    shortTitle: 'Textile Testing',
    icon: 'Shirt',
    description: 'Industry-focused textile testing, compliance certification, and quality assurance training for the textile sector.',
    fullDescription: 'Our Textile Testing department serves Bangladesh\'s vital textile and garments industry with comprehensive testing and quality assurance services.',
    services: [
      'Textile testing and compliance services',
      'Quality assurance certification',
      'Collaboration with textile industries',
      'Industry-focused training',
      'PhD research support',
      'International certification partnerships',
    ],
    image: '/images/departments/textile.jpg',
  },
  {
    id: 'nursing',
    slug: 'nursing',
    title: 'Nursing and Community Healthcare',
    shortTitle: 'Nursing & Healthcare',
    icon: 'Heart',
    description: 'Nursing education, community healthcare services, clinical practice training, and international placement preparation.',
    fullDescription: 'Our Nursing department combines professional nursing education with community-based healthcare services for underserved populations.',
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

export const schoolingContent = {
  title: 'KRTC Schooling',
  subtitle: 'Foundation Pipeline',
  description: 'Our foundation program prepares SSC and HSC students for international higher education through structured academic reinforcement, early exposure to scientific thinking, and community participation.',
  highlight: 'A key objective is to identify and support talented students from disadvantaged socioeconomic backgrounds who may have limited access to advanced academic preparation.',
  components: [
    'English language preparation (IELTS)',
    'Academic writing and research awareness',
    'Introductory research methodology',
    'Basic scientific reasoning and laboratory awareness',
    'Problem-oriented learning approaches',
    'Social responsibility and volunteer activities',
    'Community and environmental engagement',
  ],
  currentStatus: {
    enrolled: 150,
    target: 350,
    scholarshipPercent: 20,
  },
  benefits: [
    { title: 'Academic Excellence', description: 'Rigorous preparation for higher education and competitive exams.' },
    { title: 'Research Exposure', description: 'Early introduction to scientific methods and research thinking.' },
    { title: 'Language Skills', description: 'IELTS and academic English preparation for international opportunities.' },
    { title: 'Scholarships', description: 'Merit-based financial support for deserving students.' },
  ],
}

export const phdContent = {
  title: 'PhD Programs',
  subtitle: 'Advanced Research Opportunities',
  description: 'KRTC offers PhD programs in selected disciplines aligned with our departmental capacity. Our doctoral programs focus on applied, industry-linked, and problem-driven research.',
  features: [
    'Applied, industry-linked, and problem-driven research',
    'Coursework, supervised research, and publication',
    'Field and industry engagement',
    'Research ethics and publication standards',
    'Co-supervision with international universities',
    'Clear pathways from undergraduate to doctoral research',
  ],
  departments: [
    'Chemistry and Applied Chemical Sciences',
    'Pharmaceutical Sciences',
    'Polymer and Plastic Processing',
    'Materials Science',
    'Textile Testing',
    'Nursing (where applicable)',
  ],
  collaboration: {
    title: 'International Collaboration',
    description: 'KRTC seeks collaboration with international universities and scholarship programs.',
    opportunities: [
      'Joint research initiatives',
      'Academic exchange programs',
      'Visiting trainers and lecturers',
      'Joint training programs',
      'PhD supervision collaboration',
      'Training-of-Trainers (ToT) programs',
    ],
  },
}

export const healthcareContent = {
  title: 'Community Healthcare Services',
  subtitle: 'Health Benefit Card System',
  description: 'Through our Nursing and Community Healthcare department, we provide essential healthcare services to underserved populations while training healthcare professionals.',
  services: [
    'Community-based healthcare delivery',
    'Healthcare support to underprivileged families',
    'Basic treatment and preventive care',
    'Nursing training with direct service provision',
    'Healthcare access improvement initiatives',
  ],
  healthCard: {
    title: 'Health Benefit Card System',
    description: 'Supporting healthcare access for disadvantaged communities.',
    features: [
      'Cards issued to selected underprivileged families',
      'Access to defined healthcare and nursing services',
      'Transparent eligibility criteria',
      'Subsidized or free healthcare services',
      'Regular health check-ups and preventive care',
    ],
  },
}

export const team = [
  {
    id: 'zakaria-hossain',
    name: 'Md. Zakaria Hossain',
    role: 'Chairman & CEO',
    bio: 'MSc Chemistry Candidate at University of Siegen, Germany. MSc & BSc in Applied Chemistry and Chemical Engineering from University of Rajshahi. Researcher in Applied Science Education and Scientific Capacity Development.',
    education: [
      'MSc Chemistry Candidate, University of Siegen, Germany',
      'MSc Applied Chemistry & Chemical Engineering, University of Rajshahi',
      'BSc Applied Chemistry & Chemical Engineering, University of Rajshahi',
      'Training on Industrial Process Unit Operation, TICI',
    ],
    image: '/images/team/zakaria-hossain.jpg',
    linkedin: 'https://linkedin.com/in/md-zakaria-hossain-a47474222/',
    email: 'mdzhs1541@gmail.com',
  },
  {
    id: 'abdul-mozid',
    name: 'Md. Abdul Mozid',
    role: 'Managing Director',
    bio: 'Founding director overseeing daily operations and institutional development of KRTC.',
    education: [],
    image: '/images/team/abdul-mozid.jpg',
    email: 'Subornakhatun6649@gmail.com',
  },
]

export const stats = [
  { value: '150+', label: 'Current Students', description: 'Enrolled in KRTC programs' },
  { value: '6', label: 'Departments', description: 'Specialized applied science departments' },
  { value: '350+', label: 'Target', description: 'Planned trainee capacity' },
  { value: '20%', label: 'Scholarships', description: 'Surplus allocated to scholarships' },
]

export const locationBenefits = [
  'Lower land, infrastructure, and operational costs',
  'Reduced political instability and operational disruption',
  'Better regional connectivity by road and rail',
  'Lower accommodation and living expenses',
  'Healthier environmental conditions',
  'Supports decentralized national development',
  'Proposed Economic Zone at Sirajganj',
]

export const testimonials = [
  {
    id: 1,
    content: 'KRTC has transformed my understanding of practical chemistry. The hands-on laboratory experience is invaluable.',
    author: 'Student Name',
    role: 'Chemistry Student',
    image: '/images/testimonials/student-1.jpg',
  },
  {
    id: 2,
    content: 'The scholarship program gave me an opportunity I never thought possible. Now I\'m preparing for international higher education.',
    author: 'Student Name',
    role: 'KRTC Scholar',
    image: '/images/testimonials/student-2.jpg',
  },
]

export const blogPosts = [
  {
    id: 1,
    slug: 'bridging-theory-practice-gap',
    title: 'Bridging the Theory-Practice Gap in Science Education',
    excerpt: 'How KRTC is addressing the fundamental challenge in Bangladesh\'s science education system.',
    content: '',
    author: 'Md. Zakaria Hossain',
    date: '2025-12-20',
    image: '/images/blog/theory-practice.jpg',
    category: 'Education',
  },
  {
    id: 2,
    slug: 'scholarship-examination-announcement',
    title: 'KRTC Scholarship Examination 2026',
    excerpt: 'Announcing our merit-based scholarship examination for aspiring science students.',
    content: '',
    author: 'KRTC Team',
    date: '2025-12-15',
    image: '/images/blog/scholarship.jpg',
    category: 'Announcements',
  },
]

export const faq = [
  {
    question: 'What programs does KRTC offer?',
    answer: 'KRTC offers foundation programs through KRTC Schooling, applied science training across 6 departments, PhD programs, and community healthcare services.',
  },
  {
    question: 'How can I apply for a scholarship?',
    answer: 'KRTC conducts merit-based scholarship examinations periodically. Visit our Scholarships page or contact us for upcoming examination dates.',
  },
  {
    question: 'What are the eligibility requirements for PhD programs?',
    answer: 'PhD candidates should have relevant master\'s degrees in their field of interest. Contact us for specific departmental requirements.',
  },
  {
    question: 'Does KRTC offer industry collaboration opportunities?',
    answer: 'Yes, we provide R&D, testing, and consultancy services for industries in pharmaceuticals, polymer, materials, textile, and more.',
  },
]

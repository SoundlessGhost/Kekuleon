// =============================================
// KRTC Student Directory Data
// Batch Format: SSC [Year] — Batch [Number]
// Student ID Format: [BatchNum][3-digit serial]
// Scholarship %: Tuition fee discount percentage
// Photo: Optional — path to student image
// =============================================

export interface Student {
  name: string;
  id: string;
  school: string;
  scholarship: number;
  gender: "male" | "female";
  photo?: string; // e.g. "/images/students/28001.jpg"
  batch: string; // e.g. "Batch 28"
}

export interface Batch {
  batchNumber: number;
  sscYear: number;
  label: string;
  students: Student[];
}

// ===== SSC 2026 — Batch 26 =====
const batch26: Batch = {
  batchNumber: 26,
  sscYear: 2026,
  label: "Batch 26",
  students: [
    // TODO: Add real student data
    // Example:
    {
      // photo: "/images/students/26001.jpg",
      name: "Student Name",
      id: "26001",
      batch: "SSC 26 batch",
      school: "School Name",
      scholarship: 50,
      gender: "male",
    },
  ],
};

// ===== SSC 2027 — Batch 27 =====
const batch27: Batch = {
  batchNumber: 27,
  sscYear: 2027,
  label: "Batch 27",
  students: [
    // TODO: Add real student data
    // Example:
    {
      // photo: "/images/students/27001.jpg",
      name: "Md. Motaleb",
      id: "27001",
      batch: "SSC 27 batch",
      school: "Tarakandi High School",
      scholarship: 40,
      gender: "male",
    },
  ],
};

// ===== SSC 2028 — Batch 28 =====
const batch28: Batch = {
  batchNumber: 28,
  sscYear: 2028,
  label: "Batch 28",
  students: [
    // ———— Text list (28001–28016) ————
    {
      // photo: "/images/students/28001.jpg",
      name: "Md. Nahian Rabi",
      id: "28001",
      batch: "SSC 28 batch",
      school: "Boyra Vennabari High School",
      scholarship: 37,
      gender: "male",
    },
    {
      // photo: "/images/students/28002.jpg",
      name: "Md. Motaleb",
      id: "28002",
      batch: "SSC 28 batch",
      school: "Tarakandi High School",
      scholarship: 40,
      gender: "male",
    },
    {
      // photo: "/images/students/28003.jpg",
      name: "Shaik Zidan",
      id: "28003",
      batch: "SSC 28 batch",
      school: "Tarakandi High School",
      scholarship: 100,
      gender: "male",
    },
    {
      // photo: "/images/students/28004.jpg",
      name: "Md. Salehin Islam",
      id: "28004",
      batch: "SSC 28 batch",
      school: "Tarakandi High School",
      scholarship: 85,
      gender: "male",
    },
    {
      // photo: "/images/students/28005.jpg",
      name: "Md. Mehedi Hasan",
      id: "28005",
      batch: "SSC 28 batch",
      school: "Bhatpiary J.R.S High School",
      scholarship: 100,
      gender: "male",
    },
    {
      // photo: "/images/students/28006.jpg",
      name: "Md. Naim Islam",
      id: "28006",
      batch: "SSC 28 batch",
      school: "Bhatpiary J.R.S High School",
      scholarship: 43,
      gender: "male",
    },
    {
      // photo: "/images/students/28007.jpg",
      name: "Shamima Afren Mim",
      id: "28007",
      batch: "SSC 28 batch",
      school: "Garudoho Shishu Sonod High School",
      scholarship: 33,
      gender: "female",
    },
    {
      // photo: "/images/students/28008.jpg",
      name: "Sumaiya Khatun",
      id: "28008",
      batch: "SSC 28 batch",
      school: "Garudoho Shishu Sonod High School",
      scholarship: 33,
      gender: "female",
    },
    {
      // photo: "/images/students/28009.jpg",
      name: "Jannatun Ferdosy",
      id: "28009",
      batch: "SSC 28 batch",
      school: "Garudoho Shishu Sonod High School",
      scholarship: 37,
      gender: "female",
    },
    {
      // photo: "/images/students/28010.jpg",
      name: "Md. Parvej Ali",
      id: "28010",
      batch: "SSC 28 batch",
      school: "Bhatpiary J.R.S High School",
      scholarship: 43,
      gender: "male",
    },
    {
      // photo: "/images/students/28011.jpg",
      name: "Nafiz Hasan Nabid",
      id: "28011",
      batch: "SSC 28 batch",
      school: "Bhatpiary J.R.S High School",
      scholarship: 43,
      gender: "male",
    },
    {
      // photo: "/images/students/28012.jpg",
      name: "Md. Likhon Reja",
      id: "28012",
      batch: "SSC 28 batch",
      school: "Bhatpiary J.R.S High School",
      scholarship: 43,
      gender: "male",
    },
    {
      // photo: "/images/students/28013.jpg",
      name: "Md. Merajul Islam",
      id: "28013",
      batch: "SSC 28 batch",
      school: "Bhatpiary J.R.S High School",
      scholarship: 43,
      gender: "male",
    },
    {
      // photo: "/images/students/28014.jpg",
      name: "Ratri Rani Das",
      id: "28014",
      batch: "SSC 28 batch",
      school: "Horina Bagbati Girl High School",
      scholarship: 48,
      gender: "female",
    },
    {
      // photo: "/images/students/28015.jpg",
      name: "Mst. Maria Khatun",
      id: "28015",
      batch: "SSC 28 batch",
      school: "Soratoil High School",
      scholarship: 55,
      gender: "female",
    },
    {
      // photo: "/images/students/28016.jpg",
      name: "Md. Mahmudul Hassan",
      id: "28016",
      batch: "SSC 28 batch",
      school: "Tarakandi High School",
      scholarship: 25,
      gender: "male",
    },

    // ———— Screenshot list (28017+) ————
    {
      // photo: "/images/students/28017.jpg",
      name: "Zihad Sarkar",
      id: "28017",
      batch: "SSC 28 batch",
      school: "Garaudaha Mohabbat Hasan Shishu Sadan High School",
      scholarship: 0,
      gender: "male",
    },
    {
      // photo: "/images/students/28018.jpg",
      name: "Md. Ariyan Ahmed Manik",
      id: "28018",
      batch: "SSC 28 batch",
      school: "Shohid Ahshan Ul Habib High School",
      scholarship: 0,
      gender: "male",
    },
    {
      // photo: "/images/students/28019.jpg",
      name: "Tahsin Hasan Rion",
      id: "28019",
      batch: "SSC 28 batch",
      school: "Garaudaha Mohabbat Hasan Shishu Sadan High School",
      scholarship: 0,
      gender: "male",
    },
    {
      // photo: "/images/students/28020.jpg",
      name: "Anika Mariya",
      id: "28020",
      batch: "SSC 28 batch",
      school: "Garaudaha Mohabbat Hasan Shishu Sadan High School",
      scholarship: 0,
      gender: "female",
    },
    {
      // photo: "/images/students/28021.jpg",
      name: "Imrael Hasan",
      id: "28021",
      batch: "SSC 28 batch",
      school: "Garaudaha Mohabbat Hasan Shishu Sadan High School",
      scholarship: 0,
      gender: "male",
    },
    {
      // photo: "/images/students/28022.jpg",
      name: "Md. Shovon Ahmed",
      id: "28022",
      batch: "SSC 28 batch",
      school: "Garaudaha Mohabbat Hasan Shishu Sadan High School",
      scholarship: 0,
      gender: "male",
    },
    {
      // photo: "/images/students/28023.jpg",
      name: "Md. Harun Or Roshid",
      id: "28023",
      batch: "SSC 28 batch",
      school: "Bahuka High School",
      scholarship: 0,
      gender: "male",
    },
    {
      // photo: "/images/students/28024.jpg",
      name: "Boishakhi Akter Mitu",
      id: "28024",
      batch: "SSC 28 batch",
      school: "Boyra Vennabari High School",
      scholarship: 0,
      gender: "female",
    },
    {
      // photo: "/images/students/28025.jpg",
      name: "Mst. Nushrat Jahan Himi",
      id: "28025",
      batch: "SSC 28 batch",
      school: "Horina Bagbati High School",
      scholarship: 0,
      gender: "female",
    },
    {
      // photo: "/images/students/28026.jpg",
      name: "Most. Sadia Khatun",
      id: "28026",
      batch: "SSC 28 batch",
      school: "Garaudaha Mohabbat Hasan Shishu Sadan High School",
      scholarship: 0,
      gender: "female",
    },
    {
      // photo: "/images/students/28027.jpg",
      name: "Md. Omar Khan",
      id: "28027",
      batch: "SSC 28 batch",
      school: "Bhatpeary J.R.S High School",
      scholarship: 0,
      gender: "male",
    },
    {
      // photo: "/images/students/28028.jpg",
      name: "Md. Tamzid Tamim",
      id: "28028",
      batch: "SSC 28 batch",
      school: "Bhatpeary J.R.S High School",
      scholarship: 0,
      gender: "male",
    },
    {
      // photo: "/images/students/28029.jpg",
      name: "Md. Nafis Ahmed",
      id: "28029",
      batch: "SSC 28 batch",
      school: "Garaudaha Mohabbat Hasan Shishu Sadan High School",
      scholarship: 0,
      gender: "male",
    },
    {
      // photo: "/images/students/28030.jpg",
      name: "Md. Merajul",
      id: "28030",
      batch: "SSC 28 batch",
      school: "Bhatpeary J.R.S High School",
      scholarship: 0,
      gender: "male",
    },
    {
      // photo: "/images/students/28031.jpg",
      name: "Fatema Akter",
      id: "28031",
      batch: "SSC 28 batch",
      school: "Boyra Vennabari High School",
      scholarship: 0,
      gender: "female",
    },
    {
      // photo: "/images/students/28032.jpg",
      name: "Mst. Sadia Khatun",
      id: "28032",
      batch: "SSC 28 batch",
      school: "Garaudaha Mohabbat Hasan Shishu Sadan High School",
      scholarship: 0,
      gender: "female",
    },
    {
      // photo: "/images/students/28033.jpg",
      name: "Mst. Nowrin Afroz",
      id: "28033",
      batch: "SSC 28 batch",
      school: "Chilgacha Sahare Banu Girls High School",
      scholarship: 0,
      gender: "female",
    },
    {
      // photo: "/images/students/28034.jpg",
      name: "Mst. Afifa Khatun",
      id: "28034",
      batch: "SSC 28 batch",
      school: "Garaudaha Mohabbat Hasan Shishu Sadan High School",
      scholarship: 100,
      gender: "female",
    },
    {
      // photo: "/images/students/28035.jpg",
      name: "Sayma Jahan Talukder",
      id: "28035",
      batch: "SSC 28 batch",
      school: "Boyra Vennabari High School",
      scholarship: 100,
      gender: "female",
    },
    {
      // photo: "/images/students/28036.jpg",
      name: "Sumaiya Akter Riju",
      id: "28036",
      batch: "SSC 28 batch",
      school: "Boyra Vennabari High School",
      scholarship: 0,
      gender: "female",
    },
    {
      // photo: "/images/students/28037.jpg",
      name: "Most. Tasfiya Lamiya",
      id: "28037",
      batch: "SSC 28 batch",
      school: "Boyra Vennabari High School",
      scholarship: 0,
      gender: "female",
    },
    {
      // photo: "/images/students/28038.jpg",
      name: "Mst. Khadija Khatun",
      id: "28038",
      batch: "SSC 28 batch",
      school: "Saraitoil High School",
      scholarship: 0,
      gender: "female",
    },
  ],
};

// ===== Export all batches =====
export const allBatches: Batch[] = [batch28, batch27, batch26];

// ===== Helper functions =====
export function getAllStudents(): Student[] {
  return allBatches.flatMap((b) => b.students);
}

export function getBatchByNumber(num: number): Batch | undefined {
  return allBatches.find((b) => b.batchNumber === num);
}

export function getStudentStats() {
  const all = getAllStudents();
  const fullScholarship = all.filter((s) => s.scholarship >= 100).length;
  const schools = new Set(all.map((s) => s.school)).size;
  const batchesWithStudents = allBatches.filter(
    (b) => b.students.length > 0,
  ).length;

  return {
    totalStudents: all.length,
    fullScholarship,
    totalSchools: schools,
    totalBatches: allBatches.length,
    activeBatches: batchesWithStudents,
  };
}

"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  Search,
  Award,
  GraduationCap,
  School,
  Filter,
  ChevronDown,
  ArrowRight,
  Layers,
  X,
} from "lucide-react";
import { allBatches, getStudentStats } from "@/lib/students-data";
import type { Student, Batch } from "@/lib/students-data";

function getInitials(name: string): string {
  return name
    .split(" ")
    .filter((w) => !["Md.", "Mst.", "Most.", "Md"].includes(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

function getScholarshipColor(percent: number) {
  if (percent >= 50)
    return {
      bg: "bg-emerald-50",
      text: "text-emerald-700",
      border: "border-emerald-200",
      label: "Scholarship",
    };
  return {
    bg: "bg-amber-50",
    text: "text-amber-700",
    border: "border-amber-200",
    label: "Paid",
  };
}

function StudentCard({
  student,
  batch,
  index,
}: {
  student: Student;
  batch: Batch;
  index: number;
}) {
  const schol = getScholarshipColor(student.scholarship);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ delay: Math.min(index * 0.03, 0.3), duration: 0.4 }}
      className="card card-hover p-5 group"
    >
      {/* Top: Avatar + Name */}
      <div className="flex items-center gap-3 mb-4">
        {/* Avatar — photo or initials */}
        {student.photo ? (
          <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-gray-100">
            <Image
              src={student.photo}
              alt={student.name}
              width={48}
              height={48}
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-semibold text-sm ${
              student.gender === "female"
                ? "bg-pink-50 text-pink-700 border-2 border-pink-100"
                : "bg-blue-50 text-blue-700 border-2 border-blue-100"
            }`}
          >
            {getInitials(student.name)}
          </div>
        )}
        <div className="min-w-0">
          <h3 className="font-semibold text-gray-900 text-sm leading-tight truncate">
            {student.name}
          </h3>
          <p className="text-xs text-gray-500 mt-0.5">
            {batch.label.split(" — ")[0]}
          </p>
        </div>
      </div>

      {/* Details */}
      <div className="space-y-2.5 border-t border-gray-100 pt-3">
        <div className="flex items-start justify-between gap-2">
          <span className="text-xs text-gray-500 flex items-center gap-1.5 flex-shrink-0">
            <School className="w-3 h-3" />
            School
          </span>
          <span className="text-xs text-gray-800 text-right leading-tight">
            {student.school}
          </span>
        </div>
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs text-gray-500 flex items-center gap-1.5">
            <Award className="w-3 h-3" />
            Status
          </span>
          <span
            className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${schol.bg} ${schol.text} border ${schol.border}`}
          >
            {schol.label}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function StudentsPage() {
  const stats = getStudentStats();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBatch, setSelectedBatch] = useState<number | "all">(
    allBatches.find((b) => b.students.length > 0)?.batchNumber ?? "all",
  );
  const [scholarshipFilter, setScholarshipFilter] = useState<string>("all");
  const [showFilters, setShowFilters] = useState(false);

  const filteredStudents = useMemo(() => {
    let results: { student: Student; batch: Batch }[] = [];

    const batchesToSearch =
      selectedBatch === "all"
        ? allBatches
        : allBatches.filter((b) => b.batchNumber === selectedBatch);

    batchesToSearch.forEach((batch) => {
      batch.students.forEach((student) => {
        results.push({ student, batch });
      });
    });

    // Search filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      results = results.filter(
        ({ student }) =>
          student.name.toLowerCase().includes(q) ||
          student.id.includes(q) ||
          student.school.toLowerCase().includes(q),
      );
    }

    // Scholarship filter
    if (scholarshipFilter !== "all") {
      results = results.filter(({ student }) => {
        switch (scholarshipFilter) {
          case "scholarship":
            return student.scholarship >= 50;
          case "paid":
            return student.scholarship < 50;
          default:
            return true;
        }
      });
    }

    return results;
  }, [searchQuery, selectedBatch, scholarshipFilter]);

  const activeFiltersCount =
    (scholarshipFilter !== "all" ? 1 : 0) + (searchQuery.trim() ? 1 : 0);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh-gradient opacity-60" />
        <div className="grid-pattern" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link
                href="/schooling"
                className="hover:text-primary transition-colors"
              >
                KRTC Schooling
              </Link>
              <span>/</span>
              <span className="text-gray-900">Our Students</span>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">
                Student Directory
              </span>
            </div>

            <h1 className="heading-display mb-6">
              <span className="text-gradient-primary">
                KRTC Schooling Students
              </span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Building the next generation of scientists — meet the students
              enrolled in our foundation program across Sirajganj.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-3">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-primary">
                {stats.totalStudents}
              </div>
              <div className="text-sm text-gray-500 mt-1">Total Students</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-50 mb-3">
                <Award className="w-6 h-6 text-emerald-600" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-emerald-600">
                {stats.scholarshipCount}
              </div>
              <div className="text-sm text-gray-500 mt-1">
                Scholarship Students
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50 mb-3">
                <School className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600">
                {stats.totalSchools}
              </div>
              <div className="text-sm text-gray-500 mt-1">
                Schools Represented
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-amber-50 mb-3">
                <Layers className="w-6 h-6 text-amber-600" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-amber-600">
                {stats.totalBatches}
              </div>
              <div className="text-sm text-gray-500 mt-1">Active Batches</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Student Directory */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="heading-xl mb-4">Student Directory</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse students by batch, search by name or school, and filter by
              scholarship status.
            </p>
          </motion.div>

          {/* Batch Tabs */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <button
              onClick={() => setSelectedBatch("all")}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedBatch === "all"
                  ? "bg-primary text-white shadow-glow"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-primary/30 hover:text-primary"
              }`}
            >
              All Batches
            </button>
            {allBatches.map((batch) => (
              <button
                key={batch.batchNumber}
                onClick={() => setSelectedBatch(batch.batchNumber)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedBatch === batch.batchNumber
                    ? "bg-primary text-white shadow-glow"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-primary/30 hover:text-primary"
                }`}
              >
                {batch.label}
                {batch.students.length > 0 && (
                  <span className="ml-2 text-xs opacity-70">
                    ({batch.students.length})
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Search + Filters Row */}
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name, ID, or school..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input pl-11 rounded-lg"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`btn btn-outline flex items-center gap-2 rounded-lg${
                activeFiltersCount > 0
                  ? "border-primary text-primary rounded-lg"
                  : ""
              }`}
            >
              <Filter className="w-4 h-4" />
              Filters
              {activeFiltersCount > 0 && (
                <span className="w-5 h-5 rounded-full bg-primary text-white text-xs flex items-center justify-center">
                  {activeFiltersCount}
                </span>
              )}
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  showFilters ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>

          {/* Expandable Filter Panel */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden mb-8"
              >
                <div className="card p-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">
                    Scholarship Status
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { value: "all", label: "All" },
                      { value: "scholarship", label: "Scholarship" },
                      { value: "paid", label: "Paid" },
                    ].map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => setScholarshipFilter(opt.value)}
                        className={`px-4 py-2 rounded-full text-sm transition-all duration-200 ${
                          scholarshipFilter === opt.value
                            ? "bg-primary text-white"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>

                  {(scholarshipFilter !== "all" || searchQuery) && (
                    <button
                      onClick={() => {
                        setScholarshipFilter("all");
                        setSearchQuery("");
                      }}
                      className="mt-4 text-sm text-primary hover:underline"
                    >
                      Clear all filters
                    </button>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Results count */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-gray-500">
              Showing{" "}
              <span className="font-medium text-gray-900">
                {filteredStudents.length}
              </span>{" "}
              student{filteredStudents.length !== 1 ? "s" : ""}
            </p>
          </div>

          {/* Student Grid */}
          <AnimatePresence mode="wait">
            {filteredStudents.length > 0 ? (
              <motion.div
                key={`${selectedBatch}-${scholarshipFilter}-${searchQuery}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
              >
                {filteredStudents.map(({ student, batch }, index) => (
                  <StudentCard
                    key={student.id}
                    student={student}
                    batch={batch}
                    index={index}
                  />
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  No students found
                </h3>
                <p className="text-gray-500 mb-4">
                  Try adjusting your search or filter criteria.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setScholarshipFilter("all");
                    setSelectedBatch("all");
                  }}
                  className="btn btn-outline rounded-full"
                >
                  Reset all filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-lg mb-4">Want to Join KRTC Schooling?</h2>
            <p className="text-gray-600 max-w-xl mx-auto mb-8">
              Apply for our scholarship program and become part of a community
              that bridges the gap between theoretical knowledge and practical
              scientific competence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/scholarships"
                className="btn btn-primary rounded-full"
              >
                Apply for Scholarship <Award className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="btn btn-outline rounded-full">
                Contact Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

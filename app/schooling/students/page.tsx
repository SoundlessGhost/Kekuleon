"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  Search,
  Award,
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

function getScholarshipStatus(percent: number) {
  if (percent >= 50)
    return {
      dot: "bg-emerald-500",
      text: "text-emerald-700",
      label: "Scholarship",
    };
  return {
    dot: "bg-gray-400",
    text: "text-gray-600",
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
  const schol = getScholarshipStatus(student.scholarship);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ delay: Math.min(index * 0.03, 0.3), duration: 0.4 }}
      className="group relative bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-gray-300 hover:shadow-[0_8px_24px_-12px_rgba(0,0,0,0.12)] transition-all duration-300"
    >
      {/* Red accent line — appears on hover */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300" />

      {/* Top: Avatar + Name + ID badge */}
      <div className="p-5 pb-4">
        <div className="flex items-start gap-4">
          {/* Avatar */}
          {student.photo ? (
            <div className="w-14 h-14 rounded-lg overflow-hidden flex-shrink-0 border border-gray-200 bg-gray-50">
              <Image
                src={student.photo}
                alt={student.name}
                width={56}
                height={56}
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div
              className={`w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-sm border ${
                student.gender === "female"
                  ? "bg-rose-50 text-rose-700 border-rose-100"
                  : "bg-slate-50 text-slate-700 border-slate-100"
              }`}
            >
              {getInitials(student.name)}
            </div>
          )}

          {/* Name + Meta */}
          <div className="min-w-0 flex-1">
            <h3 className="font-semibold text-gray-900 text-[15px] leading-snug mb-1 line-clamp-2">
              {student.name}
            </h3>
            <div className="flex items-center gap-2 text-[11px] text-gray-500">
              {/* <span className="font-mono">#{student.id}</span> */}
              <span className="w-0.5 h-0.5 rounded-full bg-gray-300" />
              <span className="uppercase tracking-wider font-medium">
                {batch.label.split(" — ")[0]}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-gray-100 mx-5" />

      {/* Body: School info */}
      <div className="px-5 py-4">
        <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-1">
          Institution
        </p>
        <div className="flex items-start gap-2">
          <School className="w-3.5 h-3.5 text-gray-400 mt-0.5 flex-shrink-0" />
          <p className="text-xs text-gray-700 leading-snug">{student.school}</p>
        </div>
      </div>

      {/* Footer: Status */}
      <div className="px-5 py-3 border-t border-gray-100 bg-gray-50/60 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span
            className={`w-1.5 h-1.5 rounded-full ${schol.dot} ring-2 ring-white`}
          />
          <span className={`text-xs font-semibold ${schol.text}`}>
            {schol.label}
          </span>
        </div>
        {/* {student.scholarship >= 50 && (
          <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
            {student.scholarship}%
          </span>
        )} */}
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

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      results = results.filter(
        ({ student }) =>
          student.name.toLowerCase().includes(q) ||
          student.id.includes(q) ||
          student.school.toLowerCase().includes(q),
      );
    }

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
      <section className="pt-36 pb-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
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

            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Student Directory
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-5">
              KRTC Schooling Students
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Building the next generation of scientists — meet the students
              enrolled in our foundation program across Sirajganj.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-gray-50 border-y border-gray-100">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-gray-900">{stats.totalStudents}</p>
              <p className="text-sm text-gray-500 mt-1">Total Students</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-gray-900">{stats.scholarshipCount}</p>
              <p className="text-sm text-gray-500 mt-1">Scholarship Students</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-gray-900">{stats.totalSchools}</p>
              <p className="text-sm text-gray-500 mt-1">Schools Represented</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-gray-900">{stats.totalBatches}</p>
              <p className="text-sm text-gray-500 mt-1">Active Batches</p>
            </div>
          </div>
        </div>
      </section>

      {/* Student Directory */}
      <section className="section bg-white">
        <div className="container-custom">
          {/* Section Header */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Student Directory</h2>
            <p className="text-gray-600">
              Browse students by batch, search by name or school, and filter by
              scholarship status.
            </p>
          </div>

          {/* Batch Tabs */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <button
              onClick={() => setSelectedBatch("all")}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedBatch === "all"
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900"
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
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900"
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
                  ? " border-primary text-primary"
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
      <section className="py-16 bg-gray-50">
        <div className="container-custom text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Want to Join KRTC Schooling?
          </h2>
          <p className="text-gray-600 mb-8">
            Apply for our scholarship program and become part of a community
            that bridges the gap between theoretical knowledge and practical
            scientific competence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/scholarships" className="btn btn-primary group">
              Apply for Scholarship
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/contact" className="btn btn-outline rounded-full">
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

"use client";

import { useState } from "react";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Mail,
  Calendar,
  Award,
} from "lucide-react";
import {
  NORTH_ZONE_UNIVERSITIES,
  type SeminarUniversityOption,
} from "@/lib/seminars-data";

interface SeminarRegistrationFormProps {
  seminarSlug: string;
  seminarTitle: string;
  seminarDate: string;
  registrationOpen: boolean;
  /** Human-readable deadline. Shown in the closed-state UI for clarity. */
  registrationDeadline?: string;
  universities?: SeminarUniversityOption[];
}

const YEAR_OPTIONS = [
  { value: "1st year", label: "1st Year (Undergraduate)" },
  { value: "2nd year", label: "2nd Year (Undergraduate)" },
  { value: "3rd year", label: "3rd Year (Undergraduate)" },
  { value: "4th year", label: "4th Year (Undergraduate)" },
  { value: "Postgraduate", label: "Postgraduate / MSc" },
  { value: "Faculty", label: "Faculty / Researcher" },
];

const initialState = {
  fullName: "",
  email: "",
  phone: "",
  universityCode: "",
  department: "",
  yearOfStudy: "",
  studentId: "",
  whyInterested: "",
  website: "", // honeypot
};

export default function SeminarRegistrationForm({
  seminarSlug,
  seminarTitle,
  seminarDate,
  registrationOpen,
  registrationDeadline,
  universities = NORTH_ZONE_UNIVERSITIES,
}: SeminarRegistrationFormProps) {
  const [formData, setFormData] = useState(initialState);
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [confirmedName, setConfirmedName] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!registrationOpen) return;
    setIsSubmitting(true);
    setStatus("idle");
    setErrorMessage("");

    try {
      const res = await fetch("/api/seminar-register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          seminarSlug,
          ...formData,
          consent,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        setConfirmedName(formData.fullName);
        setStatus("success");
        setFormData(initialState);
        setConsent(false);
      } else {
        throw new Error(
          data.error ||
            "Could not register right now. Please try again or email kekuleoninfo@gmail.com.",
        );
      }
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(
        err?.message ||
          "Something went wrong. Please try again or email kekuleoninfo@gmail.com.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!registrationOpen) {
    return (
      <div className="bg-white rounded-2xl border border-gray-200 p-8 text-center">
        <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
          <Calendar className="w-7 h-7 text-gray-500" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          Registration is closed
        </h3>
        <p className="text-gray-600 max-w-md mx-auto mb-2">
          {registrationDeadline
            ? `The registration deadline (${registrationDeadline}) has passed.`
            : "Registration is no longer accepting new participants."}
        </p>
        <p className="text-sm text-gray-500 max-w-md mx-auto">
          If you registered earlier, your seat is confirmed — please check your
          email for the confirmation. For urgent questions, contact{" "}
          <a
            href="mailto:kekuleoninfo@gmail.com"
            className="text-primary hover:underline"
          >
            kekuleoninfo@gmail.com
          </a>
          .
        </p>
      </div>
    );
  }

  if (status === "success") {
    return (
      <div className="bg-white rounded-2xl border border-emerald-200 p-8">
        <div className="text-center mb-6">
          <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-7 h-7 text-emerald-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            You&apos;re registered{confirmedName ? `, ${confirmedName}` : ""}!
          </h3>
          <p className="text-gray-600 max-w-md mx-auto">
            Your seat for{" "}
            <span className="font-medium text-gray-900">{seminarTitle}</span> is
            confirmed.
          </p>
        </div>

        <div className="border-t border-gray-100 pt-6 space-y-4">
          <p className="text-sm font-semibold text-gray-900 mb-3">
            What happens next
          </p>
          <div className="flex items-start gap-3">
            <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-gray-900">
                Check your email
              </p>
              <p className="text-sm text-gray-600">
                We&apos;ve just sent a confirmation with the venue, schedule,
                and what to bring. Any last-minute updates will be emailed to
                you.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Calendar className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-gray-900">
                Save the date
              </p>
              <p className="text-sm text-gray-600">{seminarDate}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Award className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-gray-900">
                Bring your student ID
              </p>
              <p className="text-sm text-gray-600">
                Attendance is verified at the venue. Your KRTC-signed
                Certificate of Participation will be emailed within 7–10 days
                after the seminar.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-100 text-center">
          <button
            type="button"
            onClick={() => {
              setStatus("idle");
              setConfirmedName("");
            }}
            className="text-sm text-primary font-medium hover:underline"
          >
            Register another participant
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8">
      <h3 className="text-lg font-bold text-gray-900 mb-1">
        Register for this seminar
      </h3>
      <p className="text-sm text-gray-500 mb-6">
        Free for all eligible North Zone students. Seats are limited.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        {/* Honeypot — hidden from real users */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            left: "-10000px",
            width: "1px",
            height: "1px",
            overflow: "hidden",
          }}
        >
          <label htmlFor="website">Website</label>
          <input
            type="text"
            id="website"
            name="website"
            value={formData.website}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Full Name *
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              autoComplete="name"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              autoComplete="email"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              autoComplete="tel"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              placeholder="+8801XXXXXXXXX"
            />
            <p className="mt-1.5 text-xs text-gray-500">
              Used only for venue & schedule reminders.
            </p>
          </div>
          <div>
            <label
              htmlFor="universityCode"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              University *
            </label>
            <select
              id="universityCode"
              name="universityCode"
              value={formData.universityCode}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
            >
              <option value="">Select your university</option>
              {universities.map((u) => (
                <option key={u.code} value={u.code}>
                  {u.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="department"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Department / Subject *
            </label>
            <input
              type="text"
              id="department"
              name="department"
              value={formData.department}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              placeholder="e.g. Chemistry, Physics, Biotechnology"
            />
          </div>
          <div>
            <label
              htmlFor="yearOfStudy"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Year of Study *
            </label>
            <select
              id="yearOfStudy"
              name="yearOfStudy"
              value={formData.yearOfStudy}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
            >
              <option value="">Select your year</option>
              {YEAR_OPTIONS.map((y) => (
                <option key={y.value} value={y.value}>
                  {y.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label
            htmlFor="studentId"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Student ID{" "}
            <span className="text-gray-400 font-normal">(optional)</span>
          </label>
          <input
            type="text"
            id="studentId"
            name="studentId"
            value={formData.studentId}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
            placeholder="Your university student ID, if available"
          />
        </div>

        <div>
          <label
            htmlFor="whyInterested"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Why are you interested?{" "}
            <span className="text-gray-400 font-normal">(optional)</span>
          </label>
          <textarea
            id="whyInterested"
            name="whyInterested"
            value={formData.whyInterested}
            onChange={handleChange}
            rows={3}
            maxLength={200}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
            placeholder="What do you hope to learn? (max 200 characters)"
          />
          <p className="mt-1.5 text-xs text-gray-400 text-right">
            {formData.whyInterested.length}/200
          </p>
        </div>

        <div className="flex items-start gap-3 pt-2">
          <input
            type="checkbox"
            id="consent"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            required
            className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
          />
          <label htmlFor="consent" className="text-sm text-gray-600">
            I agree to receive event updates from KRTC about this seminar
            (venue, schedule, certificate). KRTC will not share my details with
            third parties.
          </label>
        </div>

        {status === "error" && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            <p className="text-red-700 text-sm">{errorMessage}</p>
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting || !consent}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Registering...
            </>
          ) : (
            <>
              Confirm my registration
              <Send className="w-5 h-5" />
            </>
          )}
        </button>

        <p className="text-xs text-gray-400 pt-1">
          By registering you confirm that you are a current student or faculty
          member at one of the listed North Zone institutions.
        </p>
      </form>
    </div>
  );
}

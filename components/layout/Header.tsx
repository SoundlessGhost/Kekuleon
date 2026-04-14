"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { navigation } from "@/lib/data";
import Image from "next/image";

// Short descriptions for dropdown items
const dropdownDescriptions: Record<string, string> = {
  // Services
  "/services/chemistry-and-applied-chemical-sciences":
    "Analytical chemistry, research methodology & lab training",
  "/services/pharmaceutical-sciences-and-drug-development":
    "Drug development, QC analysis & industry collaboration",
  "/services/polymer-and-plastic-processing-technologies":
    "Polymer research, processing technologies & sustainability",
  "/services/materials-science-and-engineering-applications":
    "Material testing, characterization & performance analysis",
  "/services/textile-testing-and-quality-assurance":
    "Textile testing, compliance & industry certification",
  "/services/nursing-and-community-healthcare":
    "Clinical training, community health & Germany pathway",
  // KRTC Schooling
  "/schooling": "Foundation pipeline for SSC & HSC students",
  "/schooling/students": "Meet our current cohort across Sirajganj",
  "/scholarships": "Merit-based scholarship programs",
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  // On homepage: transparent initially, white on scroll
  // On other pages: always white
  const isTransparent = isHome && !isScrolled && !isMobileMenuOpen;

  const handleNavClick = (href: string) => {
    if (href === pathname) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isTransparent
          ? "bg-transparent"
          : "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100",
      )}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link
            href="/"
            onClick={() => handleNavClick("/")}
            className="flex items-center group"
          >
            <Image
              src="/images/logo.png"
              alt="KRTC Logo"
              width={140}
              height={46}
              className={cn(
                "h-10 w-auto object-contain transition-all",
                isTransparent ? "brightness-0 invert" : "",
              )}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center">
            {navigation.main.map((item) => {
              const isServices = item.name === "Services";
              return (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() =>
                    item.children && setActiveDropdown(item.name)
                  }
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className={cn(
                      "px-3 py-2 text-[13px] font-medium transition-colors flex items-center gap-1",
                      pathname === item.href
                        ? "text-primary"
                        : isTransparent
                          ? "text-white/80 hover:text-white"
                          : "text-gray-500 hover:text-gray-900",
                    )}
                  >
                    {item.name}
                    {item.children && (
                      <ChevronDown
                        className={cn(
                          "w-3.5 h-3.5 transition-transform duration-200",
                          activeDropdown === item.name && "rotate-180",
                        )}
                      />
                    )}
                  </Link>

                  {item.children && (
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.18, ease: "easeOut" }}
                          className={cn(
                            "absolute top-full pt-3",
                            isServices
                              ? "left-1/2 -translate-x-1/2"
                              : "left-0",
                          )}
                        >
                          <div
                            className={cn(
                              "bg-white border border-gray-100 rounded-2xl shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15)] overflow-hidden",
                              isServices
                                ? "w-[640px]"
                                : "w-[320px]",
                            )}
                          >
                            {/* Header strip */}
                            <div className="px-6 pt-5 pb-3 border-b border-gray-50">
                              <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-[0.15em]">
                                {isServices
                                  ? "Applied Science Departments"
                                  : "KRTC Foundation Program"}
                              </p>
                              <p className="text-sm text-gray-900 font-medium mt-1">
                                {isServices
                                  ? "Six specialized departments"
                                  : "For secondary-level students"}
                              </p>
                            </div>

                            {/* Items */}
                            <div
                              className={cn(
                                "p-2",
                                isServices && "grid grid-cols-2",
                              )}
                            >
                              {item.children.map((child) => {
                                const description =
                                  dropdownDescriptions[child.href] || "";
                                const isActive = pathname === child.href;
                                return (
                                  <Link
                                    key={child.name}
                                    href={child.href}
                                    onClick={() => handleNavClick(child.href)}
                                    className={cn(
                                      "group block px-4 py-3 rounded-xl transition-all duration-200",
                                      "hover:bg-gray-50",
                                      isActive && "bg-gray-50",
                                    )}
                                  >
                                    <div className="flex items-start justify-between gap-3">
                                      <div className="min-w-0 flex-1">
                                        <p
                                          className={cn(
                                            "text-[13px] font-semibold leading-snug transition-colors",
                                            isActive
                                              ? "text-primary"
                                              : "text-gray-900 group-hover:text-primary",
                                          )}
                                        >
                                          {child.name}
                                        </p>
                                        {description && (
                                          <p className="text-[11px] text-gray-500 leading-relaxed mt-1 line-clamp-2">
                                            {description}
                                          </p>
                                        )}
                                      </div>
                                      <ArrowRight
                                        className={cn(
                                          "w-3.5 h-3.5 mt-1 flex-shrink-0 transition-all duration-200",
                                          isActive
                                            ? "text-primary translate-x-0 opacity-100"
                                            : "text-gray-300 -translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-hover:text-primary",
                                        )}
                                      />
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>

                            {/* Footer link */}
                            <Link
                              href={item.href}
                              onClick={() => handleNavClick(item.href)}
                              className="flex items-center justify-between px-6 py-3 border-t border-gray-50 bg-gray-50/50 hover:bg-gray-50 transition-colors group"
                            >
                              <span className="text-[12px] font-medium text-gray-600 group-hover:text-primary transition-colors">
                                {isServices
                                  ? "View all departments"
                                  : "Program overview"}
                              </span>
                              <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/contact"
              className={cn(
                "inline-flex items-center gap-2 px-5 py-2.5 text-[13px] font-medium rounded-full transition-colors duration-300",
                isTransparent
                  ? "bg-white text-gray-900 hover:bg-white/90"
                  : "bg-primary text-white hover:bg-primary-600",
              )}
            >
              Get Started
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "lg:hidden p-2 transition-colors",
              isTransparent
                ? "text-white hover:text-white/80"
                : "text-gray-600 hover:text-primary",
            )}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="container-custom py-3">
              {navigation.main.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className={cn(
                      "block py-2.5 text-sm font-medium border-b border-gray-50",
                      pathname === item.href ? "text-primary" : "text-gray-600",
                    )}
                  >
                    {item.name}
                  </Link>
                  {item.children && (
                    <div className="pl-4 py-1 space-y-0.5">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          onClick={() => handleNavClick(child.href)}
                          className="block py-2 text-[13px] text-gray-400 hover:text-primary"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-3 mt-3 border-t border-gray-100">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-primary text-white text-sm font-medium rounded-full"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

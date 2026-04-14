"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { navigation } from "@/lib/data";
import Image from "next/image";

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
          <Link href="/" onClick={() => handleNavClick("/")} className="flex items-center group">
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
            {navigation.main.map((item) => (
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
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 pt-1.5"
                      >
                        <div className="bg-white border border-gray-100 rounded-xl shadow-lg overflow-hidden min-w-[260px]">
                          {item.children.map((child, idx) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              onClick={() => handleNavClick(child.href)}
                              className={cn(
                                "block px-4 py-2.5 text-[13px] text-gray-500 hover:text-primary hover:bg-gray-50/80 transition-colors",
                                idx < item.children!.length - 1 &&
                                  "border-b border-gray-50",
                              )}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
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

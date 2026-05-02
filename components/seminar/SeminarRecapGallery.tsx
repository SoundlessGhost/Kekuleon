"use client";

// Photo gallery for the seminar recap page.
//
// Renders a responsive grid of thumbnails. Clicking a tile opens a
// handcrafted lightbox modal (no external dependency) with prev / next
// arrows, Esc to close, click-outside to close, and keyboard arrow-key
// navigation. Focus is restored to the originating tile on close.
//
// We intentionally avoid `next/image`'s `fill` mode for the grid tiles —
// width/height + a fixed aspect ratio gives stabler layout and lets
// Next.js generate efficient srcsets without us having to specify `sizes`
// per breakpoint. The lightbox uses `fill` so the image scales to the
// modal box.

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { RecapPhoto } from "@/lib/seminars-data";

interface Props {
  photos: RecapPhoto[];
}

export default function SeminarRecapGallery({ photos }: Props) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  // We remember which tile button opened the lightbox so we can restore
  // focus to it on close — important for keyboard / screen-reader users.
  const tileRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const openerIndexRef = useRef<number | null>(null);

  const open = useCallback((i: number) => {
    openerIndexRef.current = i;
    setActiveIndex(i);
  }, []);

  const close = useCallback(() => {
    const opener = openerIndexRef.current;
    setActiveIndex(null);
    // Defer focus restoration to after the modal unmounts.
    if (opener != null) {
      requestAnimationFrame(() => {
        tileRefs.current[opener]?.focus();
      });
    }
  }, []);

  const next = useCallback(() => {
    setActiveIndex((i) => (i == null ? i : (i + 1) % photos.length));
  }, [photos.length]);

  const prev = useCallback(() => {
    setActiveIndex((i) =>
      i == null ? i : (i - 1 + photos.length) % photos.length,
    );
  }, [photos.length]);

  // Keyboard handling while the lightbox is open.
  useEffect(() => {
    if (activeIndex == null) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIndex, close, next, prev]);

  // Lock body scroll while the lightbox is open.
  useEffect(() => {
    if (activeIndex == null) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [activeIndex]);

  if (photos.length === 0) return null;

  const active = activeIndex == null ? null : photos[activeIndex];

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {photos.map((photo, i) => (
          <button
            key={photo.src}
            type="button"
            ref={(el) => {
              tileRefs.current[i] = el;
            }}
            onClick={() => open(i)}
            className="group relative block w-full aspect-[4/3] overflow-hidden rounded-xl border border-gray-200 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            aria-label={`Open photo ${i + 1} of ${photos.length}: ${photo.alt}`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={600}
              height={450}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </button>
        ))}
      </div>

      {active && activeIndex != null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 sm:p-8"
          onClick={close}
        >
          {/* Close */}
          <button
            type="button"
            onClick={close}
            aria-label="Close gallery"
            className="absolute top-4 right-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Prev */}
          {photos.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous photo"
              className="absolute left-4 sm:left-8 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          )}

          {/* Image — wrapped so click on the image itself doesn't close */}
          <div
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[3/2] w-full">
              <Image
                src={active.src}
                alt={active.alt}
                fill
                sizes="(min-width: 1024px) 80vw, 100vw"
                className="object-contain"
                priority
              />
            </div>
            {(active.caption || active.alt) && (
              <div className="mt-3 text-center text-sm text-white/90">
                {active.caption || active.alt}
                <span className="ml-2 text-white/50">
                  · {activeIndex + 1} / {photos.length}
                </span>
              </div>
            )}
          </div>

          {/* Next */}
          {photos.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next photo"
              className="absolute right-4 sm:right-8 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          )}
        </div>
      )}
    </>
  );
}

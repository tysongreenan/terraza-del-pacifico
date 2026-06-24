"use client";

import { useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { Locale } from "@/lib/i18n";

export type LightboxImage = { src: string; alt: string; caption?: string };

const COPY = {
  es: {
    dialog: "Galería de fotos",
    close: "Cerrar galería",
    prev: "Foto anterior",
    next: "Foto siguiente",
    counter: (i: number, n: number) => `${i} de ${n}`,
  },
  en: {
    dialog: "Photo gallery",
    close: "Close gallery",
    prev: "Previous photo",
    next: "Next photo",
    counter: (i: number, n: number) => `${i} of ${n}`,
  },
} as const;

// Accessible image lightbox shared by every photo surface (gallery mosaic,
// suite-detail hero + carousel). Parent owns the open index and renders this
// only while open; the modal handles keyboard nav, focus trap, scroll lock,
// swipe, an aria-live counter, focus restore, and reduced motion.
export function Lightbox({
  images,
  index,
  onIndexChange,
  onClose,
  locale,
}: {
  images: LightboxImage[];
  index: number;
  onIndexChange: (i: number) => void;
  onClose: () => void;
  locale: Locale;
}) {
  const t = COPY[locale];
  const n = images.length;
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const touchX = useRef<number | null>(null);
  const restoreRef = useRef<HTMLElement | null>(null);

  const step = useCallback(
    (dir: number) => onIndexChange((index + dir + n) % n),
    [index, n, onIndexChange]
  );

  // Capture the element that opened the lightbox; restore focus to it on close.
  useEffect(() => {
    restoreRef.current = document.activeElement as HTMLElement | null;
    return () => restoreRef.current?.focus?.();
  }, []);

  // Move focus into the dialog on open.
  useEffect(() => {
    const id = requestAnimationFrame(() => closeRef.current?.focus());
    return () => cancelAnimationFrame(id);
  }, []);

  // Escape / arrow keys.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        step(-1);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        step(1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [step, onClose]);

  // Lock background scroll without a layout jump from the vanishing scrollbar.
  useEffect(() => {
    const { body, documentElement } = document;
    const scrollbar = window.innerWidth - documentElement.clientWidth;
    const prevOverflow = body.style.overflow;
    const prevPad = body.style.paddingRight;
    body.style.overflow = "hidden";
    if (scrollbar > 0) body.style.paddingRight = `${scrollbar}px`;
    return () => {
      body.style.overflow = prevOverflow;
      body.style.paddingRight = prevPad;
    };
  }, []);

  // Keep Tab focus inside the dialog.
  const onTrapKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== "Tab") return;
    const focusables = dialogRef.current?.querySelectorAll<HTMLElement>(
      "button:not([disabled])"
    );
    if (!focusables || focusables.length === 0) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touchX.current = e.changedTouches[0]?.clientX ?? null;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current === null) return;
    const dx = (e.changedTouches[0]?.clientX ?? touchX.current) - touchX.current;
    if (Math.abs(dx) > 44) step(dx < 0 ? 1 : -1);
    touchX.current = null;
  };

  const current = images[index];
  if (!current) return null;

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={t.dialog}
      onKeyDown={onTrapKeyDown}
      className="fixed inset-0 z-[120] flex flex-col"
    >
      <button
        type="button"
        tabIndex={-1}
        aria-hidden
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-[#08171f]/95 animate-in fade-in-0 duration-200 motion-reduce:animate-none"
      />

      <div className="relative z-10 flex h-full w-full flex-col p-4 md:p-6">
        <div className="flex items-center justify-between">
          <p
            aria-live="polite"
            className="text-xs font-medium uppercase tracking-[0.18em] text-white/85"
          >
            {t.counter(index + 1, n)}
          </p>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label={t.close}
            className="flex h-11 w-11 items-center justify-center rounded-full text-white/90 transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-concept-gold"
          >
            <X className="h-5 w-5" aria-hidden />
          </button>
        </div>

        <div
          className="relative flex min-h-0 flex-1 items-center justify-center"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {n > 1 && (
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label={t.prev}
              className="absolute left-0 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-concept-gold md:left-2"
            >
              <ChevronLeft className="h-6 w-6" aria-hidden />
            </button>
          )}

          <figure className="relative flex h-full w-full max-w-5xl items-center justify-center px-12 md:px-16">
            <Image
              key={current.src}
              src={current.src}
              alt={current.alt}
              fill
              sizes="100vw"
              className="object-contain animate-in fade-in-0 zoom-in-95 duration-200 motion-reduce:animate-none"
            />
          </figure>

          {n > 1 && (
            <button
              type="button"
              onClick={() => step(1)}
              aria-label={t.next}
              className="absolute right-0 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-concept-gold md:right-2"
            >
              <ChevronRight className="h-6 w-6" aria-hidden />
            </button>
          )}
        </div>

        {current.caption && (
          <figcaption className="mx-auto mt-3 max-w-3xl text-center text-sm text-white/85">
            {current.caption}
          </figcaption>
        )}
      </div>
    </div>
  );
}

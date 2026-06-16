"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type ProjectGalleryProps = {
  images: string[];
  alt: string;
  label: string;
};

export function ProjectGallery({ images, alt, label }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = images[activeIndex] ?? images[0];

  if (!activeImage) return null;

  return (
    <div className="space-y-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-muted">
        {label}
      </p>

      <div className="relative h-[380px] w-full overflow-hidden rounded-2xl border border-border bg-[#0a0a0a] sm:h-[460px] lg:h-[520px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0"
          >
            <Image
              src={activeImage}
              alt={alt}
              fill
              className="object-contain p-4 sm:p-6"
              sizes="(max-width: 1024px) 100vw, 900px"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {images.length > 1 ? (
        <div className="flex gap-3 overflow-x-auto pb-1">
          {images.map((src, index) => (
            <button
              key={src}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`relative h-20 w-16 shrink-0 overflow-hidden rounded-lg border bg-[#0a0a0a] transition-all sm:h-24 sm:w-20 ${
                index === activeIndex
                  ? "border-[var(--accent-projects)] ring-2 ring-[var(--accent-projects)]/30"
                  : "border-border opacity-70 hover:opacity-100"
              }`}
              aria-label={`${alt} ${index + 1}`}
              aria-pressed={index === activeIndex}
            >
              <Image
                src={src}
                alt=""
                fill
                className="object-contain p-1"
                sizes="128px"
              />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}

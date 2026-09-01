"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { StatusBadges } from "./StatusBadges";

export function Hero() {
  const t = useTranslations("hero");
  const [photoSrc, setPhotoSrc] = useState("/profile.jpg");

  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-24 sm:px-6 lg:px-8 lg:pb-24 lg:pt-28">
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-64 w-64 rounded-full opacity-20 blur-[100px] sm:h-96 sm:w-96"
        style={{ background: "var(--accent-hero)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full opacity-10 blur-[80px] sm:h-72 sm:w-72"
        style={{ background: "var(--accent-bento)" }}
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 sm:grid-cols-2 sm:gap-10 lg:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="min-w-0"
        >
          <h1 className="break-words font-display text-[clamp(2rem,5vw,3.25rem)] font-bold leading-tight tracking-tight">
            {t("sloganBefore")}{" "}
            <span className="text-[var(--accent-hero)]">{t("name")}</span>
            <span className="text-[var(--accent-hero)]">.</span>
          </h1>

          <p className="mt-4 text-base leading-relaxed text-fg/90 sm:text-lg">
            {t("tagline")}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
            {t("taglineExtra")}
          </p>

          <div className="mt-5">
            <StatusBadges />
          </div>

          <div className="mt-6">
            <a
              href="#projects"
              className="inline-flex min-h-[3rem] items-center justify-center rounded-full px-8 text-sm font-semibold transition-transform hover:scale-[1.02] active:scale-[0.98]"
              style={{
                background: "var(--accent-hero)",
                color: "#f5f5f5",
              }}
            >
              {t("cta")}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative w-full min-w-0"
        >
          <div
            className="absolute -inset-3 rounded-[2rem] opacity-40 blur-2xl sm:-inset-4"
            style={{
              background:
                "linear-gradient(135deg, var(--accent-hero), var(--accent-bento))",
            }}
          />
          <div className="relative aspect-square w-full overflow-hidden rounded-[1.5rem] border-2 border-border sm:rounded-[1.75rem]">
            <Image
              src={photoSrc}
              alt={t("name")}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 50vw"
              priority
              onError={() => setPhotoSrc("/profile.svg")}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

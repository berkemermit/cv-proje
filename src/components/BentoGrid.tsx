"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  accentColors,
  experienceYears,
  featuredProject,
} from "@/data/site.config";
import { Link } from "@/i18n/navigation";
import { SectionHeading } from "./SectionHeading";
import { TechMarquee } from "./TechMarquee";
import { WorldMapPin } from "./WorldMapPin";
import { SocialLinks } from "./SocialLinks";

function BentoCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-border bg-white/[0.02] p-4 transition-colors hover:border-white/15 sm:p-5 ${className}`}
    >
      {children}
    </div>
  );
}

export function BentoGrid() {
  const t = useTranslations("bento");
  const tContact = useTranslations("contact.social");
  const [imgSrc, setImgSrc] = useState(featuredProject.image);

  return (
    <section
      id="bento"
      className="relative scroll-mt-20 border-t border-border px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
    >
      <div
        className="pointer-events-none absolute left-1/4 top-0 h-64 w-64 rounded-full opacity-10 blur-[100px]"
        style={{ background: accentColors.bento }}
      />

      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          label={t("label")}
          title={t("title")}
          subtitle=""
          accent={accentColors.bento}
        />

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:grid-rows-[auto_auto]">
          {/* Kutu 1 — Öne çıkan proje (büyük) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="sm:col-span-2 lg:col-span-2 lg:row-span-2"
          >
            <BentoCard className="flex h-full min-h-[320px] flex-col overflow-hidden p-0 sm:min-h-[380px]">
              <div className="relative h-52 w-full bg-[#0a0a0a] sm:h-60 lg:h-72">
                <Image
                  src={imgSrc}
                  alt={t("featuredTitle")}
                  fill
                  className="object-contain p-3 sm:p-4"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  onError={() => setImgSrc("/projects/esnaf-kefalet.svg")}
                />
              </div>
              <div className="flex flex-1 flex-col px-4 pb-4 pt-7 sm:px-5 sm:pb-5 sm:pt-9">
                <p
                  className="text-xs font-semibold uppercase tracking-wider"
                  style={{ color: accentColors.bento }}
                >
                  {t("featuredLabel")}
                </p>
                <h3 className="mt-1 font-display text-xl font-bold sm:text-2xl">
                  {t("featuredTitle")}
                </h3>
                <p className="mt-2 flex-1 text-sm text-muted">
                  {t("featuredDesc")}
                </p>
                <Link
                  href={featuredProject.liveUrl}
                  className="mt-4 inline-flex min-h-[2.75rem] w-fit items-center rounded-full border px-5 text-sm font-medium transition-colors hover:border-[var(--accent-bento)] hover:text-[var(--accent-bento)]"
                  style={{ borderColor: `${accentColors.bento}40` }}
                >
                  {t("liveLink")} →
                </Link>
              </div>
            </BentoCard>
          </motion.div>

          {/* Kutu 2 — Tech stack (orta) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="sm:col-span-2 lg:col-span-1 lg:row-span-2"
          >
            <BentoCard className="flex h-full min-h-[280px] flex-col lg:min-h-0">
              <p
                className="mb-3 text-xs font-semibold uppercase tracking-wider"
                style={{ color: accentColors.bento }}
              >
                {t("techLabel")}
              </p>
              <TechMarquee />
            </BentoCard>
          </motion.div>

          {/* Kutu 3 — Konum & saat (küçük) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col lg:col-span-1"
          >
            <BentoCard className="flex h-full min-h-[160px] flex-1 flex-col">
              <p
                className="mb-2 shrink-0 text-xs font-semibold uppercase tracking-wider"
                style={{ color: accentColors.bento }}
              >
                {t("locationLabel")}
              </p>
              <WorldMapPin />
            </BentoCard>
          </motion.div>

          {/* Kutu 4 — Deneyim yılı (küçük) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="lg:col-span-1"
          >
            <BentoCard className="flex h-full min-h-[160px] flex-col justify-center">
              <p
                className="text-xs font-semibold uppercase tracking-wider"
                style={{ color: accentColors.bento }}
              >
                {t("experienceLabel")}
              </p>
              <p className="mt-2 font-display text-5xl font-extrabold text-[var(--accent-hero)] sm:text-6xl">
                {experienceYears}
                <span className="text-2xl text-muted sm:text-3xl">
                  {t("experienceUnit")}
                </span>
              </p>
            </BentoCard>
          </motion.div>

          {/* Kutu 5 — Sosyal */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="sm:col-span-2 lg:col-span-2"
          >
            <BentoCard className="h-full">
              <p
                className="mb-4 text-xs font-semibold uppercase tracking-wider"
                style={{ color: accentColors.bento }}
              >
                {t("socialLabel")}
              </p>
              <SocialLinks
                labels={{
                  github: tContact("github"),
                  linkedin: tContact("linkedin"),
                  instagram: tContact("instagram"),
                }}
                className="flex flex-wrap gap-3"
                buttonClassName="flex min-h-[3rem] flex-1 items-center justify-center rounded-xl border border-border px-4 text-sm font-medium transition-all hover:border-[var(--accent-hero)]/40 hover:bg-white/[0.04] hover:text-[var(--accent-hero)] sm:min-w-[140px] sm:flex-none"
              />
            </BentoCard>
          </motion.div>

          {/* Kutu 6 — İletişim ipucu */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="sm:col-span-2 lg:col-span-2"
          >
            <BentoCard className="flex h-full min-h-[160px] flex-col justify-between">
              <p
                className="text-xs font-semibold uppercase tracking-wider"
                style={{ color: accentColors.bento }}
              >
                {t("contactHint")}
              </p>
              <a
                href="#contact"
                className="group mt-4 flex flex-1 flex-col justify-center rounded-xl border border-border bg-white/[0.02] px-4 py-4 transition-all hover:border-[var(--accent-hero)]/40 hover:bg-white/[0.04]"
              >
                <span className="font-display text-lg font-bold text-[var(--accent-hero)] transition-transform group-hover:translate-x-0.5">
                  {t("contactHint")} →
                </span>
                <span className="mt-2 text-sm leading-relaxed text-muted">
                  {t("contactHintDesc")}
                </span>
              </a>
            </BentoCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

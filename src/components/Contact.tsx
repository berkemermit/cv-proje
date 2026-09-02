"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  accentColors,
  calendarEmbedUrl,
  phoneNumber,
  phoneTel,
} from "@/data/site.config";
import { SectionHeading } from "./SectionHeading";
import { SocialLinks } from "./SocialLinks";

export function Contact() {
  const t = useTranslations("contact");
  const email = t("email");
  const [copied, setCopied] = useState(false);

  const socialLabels = {
    github: t("social.github"),
    linkedin: t("social.linkedin"),
    instagram: t("social.instagram"),
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* fallback */
    }
  };

  const hasCalendar = Boolean(calendarEmbedUrl);

  return (
    <section
      id="contact"
      className="relative scroll-mt-20 overflow-x-clip border-t border-border px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.07] blur-[120px]"
        style={{ background: accentColors.contact }}
      />

      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          label={t("label")}
          title={t("title")}
          subtitle={t("subtitle")}
          accent={accentColors.contact}
        />

        <div className="flex flex-col gap-6">
          {/* E-posta + sosyal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border bg-white/[0.02] p-6 sm:p-8"
          >
            <a
              href={`mailto:${email}`}
              className="inline-block text-base font-medium text-[var(--accent-contact)] underline-offset-4 transition-colors hover:text-[var(--accent-contact)]/80 hover:underline"
            >
              {email}
            </a>

            <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-start">
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex min-h-[3rem] items-center justify-center rounded-full px-6 text-sm font-semibold transition-all hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: copied ? "#22c55e" : accentColors.contact,
                  color: "#f5f5f5",
                }}
              >
                {copied ? t("copied") : t("copyEmail")}
              </button>

              <a
                href={`mailto:${email}`}
                className="inline-flex min-h-[3rem] items-center justify-center rounded-full border border-border px-6 text-sm font-medium transition-colors hover:border-[var(--accent-contact)]/40 hover:text-[var(--accent-contact)]"
              >
                {t("sendEmail")}
              </a>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-white/[0.02] p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-[var(--accent-contact)]">
                  {t("phonePathMailLabel")}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {t("phonePathMailDesc")}
                </p>
                <a
                  href={`mailto:${email}`}
                  className="mt-3 inline-block text-sm font-medium text-[var(--accent-contact)] underline-offset-4 hover:underline"
                >
                  {email}
                </a>
              </div>

              <div className="rounded-xl border border-border bg-white/[0.02] p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-[var(--accent-contact)]">
                  {t("phonePathCallLabel")}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {t("phonePathCallDesc")}
                </p>
                <a
                  href={`tel:${phoneTel}`}
                  aria-label={t("phoneCallAria", { number: phoneNumber })}
                  className="mt-3 inline-block text-base font-bold text-[var(--accent-contact)] underline decoration-[var(--accent-contact)] decoration-2 underline-offset-4 transition-colors hover:text-[var(--accent-contact)]/80"
                >
                  {phoneNumber}
                </a>
              </div>
            </div>

            <SocialLinks
              labels={socialLabels}
              className="mt-8 flex flex-wrap gap-3 border-t border-border pt-8"
            />
          </motion.div>

          {/* Takvim */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="overflow-hidden rounded-2xl border border-border bg-bg"
          >
            <div className="border-b border-border px-4 py-4 sm:px-6 sm:py-5">
              <h3 className="font-display text-xl font-bold">
                {t("calendarTitle")}
              </h3>
              <p className="mt-1 text-sm text-muted">{t("calendarDesc")}</p>
            </div>

            {hasCalendar ? (
              <iframe
                src={calendarEmbedUrl}
                title={t("calendarTitle")}
                className="block h-[520px] max-w-full w-full border-0 sm:h-[560px]"
                loading="lazy"
              />
            ) : (
              <div className="flex h-[280px] items-center justify-center p-6 text-center sm:h-[320px]">
                <p className="max-w-xs text-sm text-muted">
                  {t("calendarPlaceholder")}
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

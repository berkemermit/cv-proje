"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { accentColors } from "@/data/site.config";
import { SectionHeading } from "./SectionHeading";

export function About() {
  const t = useTranslations("about");
  const paragraphs = t.raw("paragraphs") as string[];

  return (
    <section
      id="about"
      className="relative scroll-mt-20 overflow-x-clip border-t border-border px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
    >
      <div
        className="pointer-events-none absolute -left-20 top-1/4 h-72 w-72 rounded-full opacity-10 blur-[100px]"
        style={{ background: accentColors.hero }}
      />

      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          label={t("label")}
          title={t("title")}
          subtitle={t("subtitle")}
          accent={accentColors.hero}
        />

        <div className="max-w-3xl space-y-5">
          {paragraphs.map((paragraph, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-base leading-relaxed text-fg/85 sm:text-lg"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}

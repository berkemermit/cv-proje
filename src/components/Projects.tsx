"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { projectLinks, accentColors } from "@/data/site.config";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  const t = useTranslations("projects");
  const items = t.raw("items") as Array<{
    id: string;
    title: string;
    description: string;
    tags: string[];
    year: string;
  }>;

  return (
    <section
      id="projects"
      className="relative scroll-mt-20 overflow-x-clip px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
    >
      <div
        className="pointer-events-none absolute right-0 top-1/4 h-64 w-64 rounded-full opacity-10 blur-[100px]"
        style={{ background: accentColors.projects }}
      />

      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          label={t("label")}
          title={t("title")}
          subtitle={t("subtitle")}
          accent={accentColors.projects}
        />

        <div className="flex flex-col gap-4 sm:gap-5">
          {items.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Link
                href={projectLinks[project.id] ?? "/#projects"}
                className="group block rounded-2xl border border-border bg-white/[0.02] p-5 transition-all hover:border-[var(--accent-projects)]/30 hover:bg-white/[0.04] sm:p-7"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-display text-xl font-bold transition-colors group-hover:text-[var(--accent-projects)] sm:text-2xl">
                        {project.title}
                      </h3>
                      <span className="text-sm text-muted">{project.year}</span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                      {project.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span
                    className="inline-flex min-h-[2.75rem] shrink-0 items-center justify-center self-start rounded-full border px-5 text-sm font-medium transition-all group-hover:text-[var(--accent-projects)]"
                    style={{ borderColor: `${accentColors.projects}40` }}
                  >
                    {t("viewProject")} →
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

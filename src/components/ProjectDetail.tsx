"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { projectMeta, accentColors } from "@/data/site.config";
import { ProjectGallery } from "./ProjectGallery";

type ProjectDetailProps = {
  slug: string;
  projectId: string;
};

export function ProjectDetail({ slug, projectId }: ProjectDetailProps) {
  const t = useTranslations("projectDetail");
  const item = t.raw(`items.${slug}`) as {
    title: string;
    role: string;
    year: string;
    tags: string[];
    paragraphs: string[];
    highlights: string[];
  };

  const meta = projectMeta[projectId];
  const gallery = meta?.gallery ?? [];

  return (
    <article className="relative px-4 pb-20 pt-28 sm:px-6 sm:pb-28 sm:pt-32 lg:px-8">
      <div
        className="pointer-events-none absolute right-0 top-1/4 h-72 w-72 rounded-full opacity-10 blur-[120px]"
        style={{ background: accentColors.projects }}
      />

      <div className="relative mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-[var(--accent-projects)]"
          >
            ← {t("back")}
          </Link>

          <header className="mt-8">
            <h1 className="font-body text-3xl font-bold sm:text-4xl lg:text-5xl">
              {item.title}
            </h1>
          </header>

          <div className="mt-8 grid gap-8 sm:grid-cols-[1fr_240px] sm:gap-10">
            <section>
              <h2 className="font-body text-xl font-bold sm:text-2xl">
                {t("overview")}
              </h2>
              <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted sm:text-base">
                {item.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>
            </section>

            <aside className="space-y-6">
              <div className="rounded-2xl border border-border bg-white/[0.02] p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                  {t("year")}
                </p>
                <p className="mt-1 font-medium">{item.year}</p>
              </div>

              <div className="rounded-2xl border border-border bg-white/[0.02] p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                  {t("role")}
                </p>
                <p className="mt-1 text-sm leading-relaxed">{item.role}</p>
              </div>

              <div className="rounded-2xl border border-border bg-white/[0.02] p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                  {t("stack")}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </aside>
          </div>

          <div className="mt-10">
            <ProjectGallery
              images={gallery}
              alt={item.title}
              label={t("gallery")}
            />
          </div>

          <section className="mt-12">
            <h2 className="font-body text-xl font-bold sm:text-2xl">
              {t("highlights")}
            </h2>
            <ul className="mt-4 space-y-3">
              {item.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex gap-3 rounded-xl border border-border bg-white/[0.02] px-4 py-3 text-sm text-muted sm:text-base"
                >
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ background: accentColors.projects }}
                    aria-hidden="true"
                  />
                  {highlight}
                </li>
              ))}
            </ul>
          </section>
        </motion.div>
      </div>
    </article>
  );
}

"use client";

import { useTranslations } from "next-intl";
import { accentColors } from "@/data/site.config";
import { SectionHeading } from "./SectionHeading";

export function AboutStats() {
  const t = useTranslations("techSpecs");
  const stats = (t.raw("stats") ?? {}) as Record<
    string,
    { label: string; value?: string; comment: string }
  >;
  const statEntries = Object.entries(stats);

  return (
    <section
      id="tech-specs"
      className="relative scroll-mt-20 overflow-x-clip border-t border-border px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
    >
      <div
        className="pointer-events-none absolute -right-20 top-1/3 h-72 w-72 rounded-full opacity-10 blur-[100px]"
        style={{ background: accentColors.hero }}
      />

      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          label={t("label")}
          title={t("title")}
          subtitle={t("subtitle")}
          accent={accentColors.hero}
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {statEntries.map(([key, stat]) => (
            <div
              key={key}
              className="overflow-hidden rounded-2xl border border-border bg-[#0d1117] font-mono text-sm break-words [overflow-wrap:anywhere]"
            >
              <div className="border-b border-border px-4 py-2.5 text-sm font-semibold text-[var(--accent-hero)] sm:px-5 sm:py-3 sm:text-base">
                {stat.label}
              </div>
              <div className="space-y-1 p-4 sm:p-5">
                {key === "learning" ? (
                  <>
                    <p>
                      <span className="text-[#ff7b72]">const</span>{" "}
                      <span className="text-[#79c0ff]">learning</span>{" "}
                      <span className="text-fg">=</span>{" "}
                      <span className="text-[#a5d6ff]">
                        &quot;{stat.value}&quot;
                      </span>
                      <span className="text-fg">;</span>
                    </p>
                    <p className="text-[#8b949e]">{stat.comment}</p>
                    <p className="pt-2 flex items-center gap-2 text-base leading-relaxed text-fg/90 sm:text-lg">
                      <span
                        className="h-2 w-2 animate-pulse rounded-full bg-[var(--accent-hero)]"
                        aria-hidden="true"
                      />
                      {stat.value}
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      <span className="text-[#ff7b72]">const</span>{" "}
                      <span className="text-[#79c0ff]">{key}</span>{" "}
                      <span className="text-fg">=</span>{" "}
                      <span className="text-[#a5d6ff]">
                        &quot;{stat.value}&quot;
                      </span>
                      <span className="text-fg">;</span>
                    </p>
                    <p className="text-[#8b949e]">{stat.comment}</p>
                    <p className="pt-2 text-base leading-relaxed text-fg/90 sm:text-lg">
                      {stat.value}
                    </p>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useTranslations } from "next-intl";
import { techStack, type TechStatus } from "@/data/site.config";

const statusClass: Record<TechStatus, string> = {
  used: "text-[var(--accent-hero)]",
  learning: "text-amber-400/90",
  academic: "text-red-400",
};

const multilineNames: Record<string, [string, string]> = {
  JavaScript: ["Java", "Script"],
  TypeScript: ["Type", "Script"],
};

function TechName({ name }: { name: string }) {
  const lines = multilineNames[name];

  if (lines) {
    return (
      <span className="min-w-0 text-xs font-medium leading-tight sm:text-sm">
        <span className="block">{lines[0]}</span>
        <span className="block">{lines[1]}</span>
      </span>
    );
  }

  return (
    <span className="min-w-0 text-xs font-medium leading-snug sm:text-sm">
      {name}
    </span>
  );
}

export function TechMarquee() {
  const t = useTranslations("bento");

  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-2 gap-2.5">
        {techStack.map((tech) => (
          <div
            key={tech.name}
            className="flex h-full min-h-[5.25rem] flex-col justify-between gap-2 rounded-xl border border-border bg-white/[0.04] p-3"
          >
            <div className="flex items-center gap-2">
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[10px] font-bold"
                style={{
                  background: `${tech.color}18`,
                  color: tech.color,
                }}
              >
                {tech.abbr}
              </span>
              <TechName name={tech.name} />
            </div>
            <span
              className={`block w-full rounded-lg bg-white/[0.04] px-1.5 py-1.5 text-center text-[11px] font-medium leading-none sm:text-xs ${statusClass[tech.status]}`}
            >
              {t(`techStatus.${tech.status}`)}
            </span>
          </div>
        ))}
      </div>

      <p className="mt-3 text-xs leading-relaxed text-muted">
        {t("techSummary", { total: techStack.length })}
      </p>
    </div>
  );
}

"use client";

import { useState } from "react";
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
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedTech = techStack.find((tech) => tech.id === selectedId);

  return (
    <div className="flex flex-col">
      <div className="grid min-w-0 grid-cols-2 gap-2.5">
        {techStack.map((tech) => {
          const isSelected = selectedId === tech.id;

          return (
            <button
              key={tech.id}
              type="button"
              onClick={() => setSelectedId(isSelected ? null : tech.id)}
              aria-expanded={isSelected}
              aria-label={t("techSelectAria", { name: tech.name })}
              className={`flex h-full min-h-[5.25rem] flex-col justify-between gap-2 rounded-xl border bg-white/[0.04] p-3 text-left transition-colors hover:border-[var(--accent-hero)]/35 hover:bg-white/[0.06] ${
                isSelected
                  ? "border-[var(--accent-hero)]/50 ring-1 ring-[var(--accent-hero)]/25"
                  : "border-border"
              }`}
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
            </button>
          );
        })}
      </div>

      {selectedTech && (
        <div className="mt-3 rounded-xl border border-[var(--accent-hero)]/30 bg-white/[0.04] p-3.5">
          <p className="text-sm font-semibold text-fg">
            {selectedTech.name}
          </p>
          <p className="mt-2 text-xs leading-relaxed text-muted sm:text-sm">
            {t(`techDetails.${selectedTech.id}.what`)}
          </p>
          <p className="mt-2 text-xs leading-relaxed text-[var(--accent-hero)]/90 sm:text-sm">
            {t(`techDetails.${selectedTech.id}.usedIn`)}
          </p>
        </div>
      )}

      <p className="mt-3 text-xs leading-relaxed text-muted">
        {t("techSummary", { total: techStack.length })}
      </p>
    </div>
  );
}

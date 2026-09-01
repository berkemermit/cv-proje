"use client";

import { useTranslations } from "next-intl";
import {
  activeStatusBadges,
  type StatusBadgeId,
} from "@/data/site.config";

export function StatusBadges() {
  const t = useTranslations("badges");

  return (
    <div className="flex flex-wrap gap-2">
      {activeStatusBadges.map((id: StatusBadgeId) => (
        <span
          key={id}
          className="inline-flex min-h-[2rem] max-w-full items-center rounded-full border border-border bg-white/[0.03] px-3 py-1 text-xs font-medium text-fg sm:text-sm"
        >
          {t(id)}
        </span>
      ))}
    </div>
  );
}

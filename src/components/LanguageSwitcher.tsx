"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (next: "tr" | "en") => {
    if (next !== locale) {
      router.replace(pathname, { locale: next });
    }
  };

  return (
    <div
      className={`flex items-center rounded-full border border-border p-0.5 ${
        compact ? "text-xs" : "text-sm"
      }`}
      role="group"
      aria-label="Language"
    >
      {(["tr", "en"] as const).map((lang) => (
        <button
          key={lang}
          type="button"
          onClick={() => switchLocale(lang)}
          className={`min-h-[2rem] min-w-[2.25rem] rounded-full px-2.5 font-medium uppercase transition-all ${
            locale === lang
              ? "bg-fg text-bg"
              : "text-muted hover:text-fg"
          }`}
          aria-pressed={locale === lang}
        >
          {lang}
        </button>
      ))}
    </div>
  );
}

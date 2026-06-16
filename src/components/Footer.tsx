"use client";

import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted">
          © {year} {t("text")}
        </p>
        <a
          href="#"
          className="min-h-[2.75rem] text-sm text-muted transition-colors hover:text-[var(--accent-hero)]"
        >
          {t("backToTop")} ↑
        </a>
      </div>
    </footer>
  );
}

"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "@/i18n/navigation";
import { LanguageSwitcher } from "./LanguageSwitcher";

const navItems = [
  { key: "about", href: "#about" },
  { key: "techSpecs", href: "#tech-specs" },
  { key: "projects", href: "#projects" },
  { key: "contact", href: "#contact" },
] as const;

function getActiveSectionId(): string | null {
  const scrollPos = window.scrollY + 140;
  let active: string | null = null;

  for (const item of navItems) {
    const el = document.getElementById(item.href.slice(1));
    if (!el) continue;
    if (el.offsetTop <= scrollPos) {
      active = item.href.slice(1);
    }
  }

  return active;
}

export function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      setActiveSection(getActiveSectionId());
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isHome = pathname === "/";
  const sectionHref = (id: string) => (isHome ? `#${id}` : `/#${id}`);

  const handleNavClick = () => setOpen(false);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.reload();
  };

  const navLinkClass = (sectionId: string, mobile = false) => {
    const isActive = activeSection === sectionId;

    if (mobile) {
      return `border-b border-border py-4 text-lg font-medium last:border-0 transition-colors ${
        isActive
          ? "text-[var(--accent-hero)]"
          : "text-fg/80 hover:text-fg"
      }`;
    }

    return `relative text-sm transition-colors ${
      isActive
        ? "font-semibold text-[var(--accent-hero)]"
        : "text-muted hover:text-fg"
    }`;
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-bg/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-[4.5rem] sm:px-6 lg:px-8">
        <a
          href={pathname}
          onClick={handleLogoClick}
          className="font-display text-base font-bold tracking-tight sm:text-lg"
        >
          Berke{" "}
          <span className="text-[var(--accent-hero)]">Mermit</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const sectionId = item.href.slice(1);
            const isActive = isHome && activeSection === sectionId;

            return (
              <a
                key={item.key}
                href={sectionHref(sectionId)}
                className={navLinkClass(sectionId)}
                aria-current={isActive ? "true" : undefined}
              >
                {t(item.key)}
                {isActive ? (
                  <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-[var(--accent-hero)]" />
                ) : null}
              </a>
            );
          })}
          <LanguageSwitcher />
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <LanguageSwitcher compact />
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border"
            aria-label={open ? t("close") : t("menu")}
            aria-expanded={open}
          >
            <span className="relative block h-3.5 w-4">
              <span
                className={`absolute left-0 h-0.5 w-full bg-fg transition-all duration-300 ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 h-0.5 w-full bg-fg transition-all duration-300 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 h-0.5 w-full bg-fg transition-all duration-300 ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-b border-border bg-bg/95 backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-col px-4 py-4">
              {navItems.map((item, i) => {
                const sectionId = item.href.slice(1);
                const isActive = isHome && activeSection === sectionId;

                return (
                  <motion.a
                    key={item.key}
                    href={sectionHref(sectionId)}
                    onClick={handleNavClick}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className={navLinkClass(sectionId, true)}
                    aria-current={isActive ? "true" : undefined}
                  >
                    <span className="flex items-center gap-3">
                      {isActive ? (
                        <span
                          className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-hero)]"
                          aria-hidden="true"
                        />
                      ) : (
                        <span className="h-1.5 w-1.5 shrink-0" aria-hidden="true" />
                      )}
                      {t(item.key)}
                    </span>
                  </motion.a>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

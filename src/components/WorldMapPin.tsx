"use client";

import { useEffect, useState } from "react";
import { useLocale } from "next-intl";
import { mapPin, timezone } from "@/data/site.config";

function coordsToPercent(lon: number, lat: number) {
  return {
    left: ((lon + 180) / 360) * 100,
    top: ((90 - lat) / 180) * 100,
  };
}

function formatDate(locale: string) {
  const now = new Date();
  const loc = locale === "tr" ? "tr-TR" : "en-GB";
  const weekday = new Intl.DateTimeFormat(loc, {
    timeZone: timezone,
    weekday: "long",
  }).format(now);
  const dayMonth = new Intl.DateTimeFormat(loc, {
    timeZone: timezone,
    day: "numeric",
    month: "long",
  }).format(now);

  return locale === "tr"
    ? `${weekday} · ${dayMonth}`
    : `${weekday}, ${dayMonth}`;
}

export function WorldMapPin() {
  const locale = useLocale();
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  const pinPosition = coordsToPercent(mapPin.lon, mapPin.lat);

  useEffect(() => {
    const update = () => {
      const loc = locale === "tr" ? "tr-TR" : "en-GB";
      setTime(
        new Intl.DateTimeFormat(loc, {
          timeZone: timezone,
          hour: "2-digit",
          minute: "2-digit",
        }).format(new Date()),
      );
      setDate(formatDate(locale));
    };
    update();
    const id = setInterval(update, 60_000);
    return () => clearInterval(id);
  }, [locale]);

  return (
    <div className="flex min-h-0 flex-1 flex-col gap-1.5">
      <div className="relative min-h-[72px] flex-1 overflow-hidden rounded-xl border border-white/[0.04] bg-white/[0.02]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/world-map.svg"
          alt=""
          className="h-full w-full object-contain opacity-25 invert"
          loading="lazy"
          decoding="async"
        />

        <div
          className="pointer-events-none absolute z-10"
          style={{
            left: `${pinPosition.left}%`,
            top: `${pinPosition.top}%`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <span className="relative flex h-3.5 w-3.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent-hero)] opacity-60" />
            <span className="relative inline-flex h-3.5 w-3.5 rounded-full border-2 border-bg bg-[var(--accent-hero)] shadow-[0_0_12px_rgba(6,182,212,0.6)]" />
          </span>
        </div>
      </div>

      <div className="shrink-0">
        <p className="font-display text-lg font-bold leading-tight">
          {mapPin.city}
        </p>
        <p className="text-sm text-muted">{time || "—:—"}</p>
        <p className="text-xs capitalize text-muted/80">{date || "…"}</p>
      </div>
    </div>
  );
}

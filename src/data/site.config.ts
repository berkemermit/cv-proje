/**
 * Site ayarları — badge, proje, takvim vb. buradan yönetilir.
 */

export type StatusBadgeId =
  | "openToWork"
  | "freelance"
  | "location"
  | "busy"
  | "studying"
  | "openSource";

/** Gösterilecek badge'ler */
export const activeStatusBadges: StatusBadgeId[] = [
  "openToWork",
  "location",
  "studying",
];

export const badgeEmojis: Record<StatusBadgeId, string> = {
  openToWork: "🟢",
  freelance: "💼",
  location: "📍",
  busy: "🔴",
  studying: "🎓",
  openSource: "⚡",
};

export const birthYear = 2002;

/** Sektördeki ilk yıl (2025 staj + proje) */
export const experienceYears = 1;

export const timezone = "Europe/Istanbul";

export const mapPin = {
  city: "Ankara",
  lat: 39.93,
  lon: 32.86,
};

export const projectSlugs: Record<string, string> = {
  "project-1": "esnaf-kefalet",
  "project-2": "akilli-dosyalama",
  "project-3": "kuponum",
};

export const projectMeta: Record<
  string,
  { slug: string; cover: string; gallery: string[] }
> = {
  "project-1": {
    slug: "esnaf-kefalet",
    cover: "/projects/esnaf-1.png",
    gallery: [
      "/projects/esnaf-1.png",
      "/projects/esnaf-2.png",
      "/projects/esnaf-3.png",
    ],
  },
  "project-2": {
    slug: "akilli-dosyalama",
    cover: "/projects/dosyalama-1.png",
    gallery: ["/projects/dosyalama-1.png", "/projects/dosyalama-2.png"],
  },
  "project-3": {
    slug: "kuponum",
    cover: "/projects/kuponum-1.png",
    gallery: [
      "/projects/kuponum-1.png",
      "/projects/kuponum-2.png",
      "/projects/kuponum-3.png",
    ],
  },
};

export function getProjectBySlug(slug: string) {
  const entry = Object.entries(projectMeta).find(([, meta]) => meta.slug === slug);
  if (!entry) return null;
  const [id, meta] = entry;
  return { id, ...meta };
}

export const featuredProject = {
  id: "project-1",
  image: "/projects/esnaf-1.png",
  liveUrl: `/projects/${projectSlugs["project-1"]}`,
};

export type TechStatus = "used" | "learning" | "academic";

export const techStack = [
  { name: "PHP", color: "#a78bfa", abbr: "PHP", status: "used" as TechStatus },
  { name: "MySQL", color: "#22c55e", abbr: "SQL", status: "used" as TechStatus },
  { name: "JavaScript", color: "#facc15", abbr: "JS", status: "academic" as TechStatus },
  { name: "CSS", color: "#06b6d4", abbr: "CSS", status: "academic" as TechStatus },
  { name: "HTML", color: "#f97316", abbr: "HTML", status: "academic" as TechStatus },
  { name: "Flutter", color: "#38bdf8", abbr: "Fl", status: "used" as TechStatus },
  { name: "Dart", color: "#60a5fa", abbr: "Dt", status: "used" as TechStatus },
  { name: "Electron", color: "#94a3b8", abbr: "El", status: "used" as TechStatus },
  { name: "Next.js", color: "#ffffff", abbr: "N", status: "learning" as TechStatus },
  { name: "TypeScript", color: "#3b82f6", abbr: "TS", status: "learning" as TechStatus },
  { name: "C++", color: "#61dafb", abbr: "C++", status: "academic" as TechStatus },
] as const;

export const phoneNumber = "05323179892";
export const phoneTel = "+905323179892";

export const calendarEmbedUrl =
  "https://cal.com/berke-mermit-kgmgxh/15min?embed=true&theme=dark";

export const projectLinks: Record<string, string> = Object.fromEntries(
  Object.entries(projectSlugs).map(([id, slug]) => [id, `/projects/${slug}`]),
);

export const linkedinProfilePublic = true;

export const linkedinUrl =
  "https://www.linkedin.com/in/berke-mermit-5a1971360/";

export const socialLinks = {
  github: "https://github.com/berkemermit",
  linkedin: linkedinProfilePublic ? linkedinUrl : "",
  instagram: "",
} as const;

export type SocialKey = keyof typeof socialLinks;

export const activeSocialKeys = (
  Object.entries(socialLinks) as [SocialKey, string][]
).filter(([, url]) => url.length > 0).map(([key]) => key);

export const accentColors = {
  hero: "#06b6d4",
  bento: "#06b6d4",
  about: "#6366f1",
  projects: "#38bdf8",
  contact: "#06b6d4",
} as const;

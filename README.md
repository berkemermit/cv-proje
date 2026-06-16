# Berke — Portföy Sitesi

Mavi ağırlıklı, mobil uyumlu, TR/EN dil destekli kişisel portföy.

## Hızlı başlangıç

```bash
npm install
npm run dev
```

Tarayıcıda: [http://localhost:3000](http://localhost:3000)

## İçeriği özelleştirme

| Ne değişecek | Dosya |
|--------------|-------|
| Metinler (TR) | `messages/tr.json` |
| Metinler (EN) | `messages/en.json` |
| **Badge seçimi**, takvim, deneyim yılı, tech stack | `src/data/site.config.ts` |
| Proje linkleri, sosyal medya | `src/data/site.config.ts` |
| Fotoğrafınız | `public/profile.jpg` |
| Öne çıkan proje görseli | `public/projects/featured.jpg` |

### Badge'leri değiştirmek

`src/data/site.config.ts` içinde `activeStatusBadges` dizisini düzenle:

```ts
export const activeStatusBadges: StatusBadgeId[] = [
  "openToWork",   // 🟢 Yeni projelere açık
  "freelance",    // 💼 Freelance
  "location",     // 📍 İstanbul (Remote)
  // "busy",      // 🔴 Meşgul
  // "studying",  // 📚 Öğreniyor
];
```

Metinler `messages/tr.json` → `badges` altında.

### Cal.com / Calendly

```ts
export const calendarEmbedUrl = "https://cal.com/kullaniciadi/15min?embed=true";
```

## Canlıya alma (Vercel — ücretsiz)

1. GitHub'a yükle
2. [vercel.com](https://vercel.com) → repoyu bağla → Deploy

## Teknolojiler (hepsi ücretsiz)

Next.js · React · TypeScript · Tailwind · Framer Motion · next-intl

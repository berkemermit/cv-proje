import { setRequestLocale } from "next-intl/server";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { BentoGrid } from "@/components/BentoGrid";
import { About } from "@/components/About";
import { AboutStats } from "@/components/AboutStats";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <BentoGrid />
        <About />
        <AboutStats />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

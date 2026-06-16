import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProjectDetail } from "@/components/ProjectDetail";
import { getProjectBySlug, projectSlugs } from "@/data/site.config";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  const slugs = Object.values(projectSlugs);

  return routing.locales.flatMap((locale) =>
    slugs.map((slug) => ({ locale, slug })),
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      <Header />
      <main>
        <ProjectDetail slug={slug} projectId={project.id} />
      </main>
      <Footer />
    </>
  );
}

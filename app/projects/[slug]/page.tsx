import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/content/projects";
import { getProjectBySlug } from "@/lib/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Proyecto no encontrado",
    };
  }

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="projects-shell">
      <article className="project-detail card">
        <Link className="back-link" href="/projects">
          Volver a proyectos
        </Link>
        <div className="detail-meta">
          <span>{project.year}</span>
          <span>{project.status}</span>
        </div>
        <h1>{project.title}</h1>
        <p className="detail-copy">{project.summary}</p>
        <p className="detail-copy">{project.description}</p>
        <ul className="tag-list">
          {project.stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </article>
    </main>
  );
}

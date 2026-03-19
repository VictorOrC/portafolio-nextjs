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
    <main className="projects-shell dossier-shell">
      <header className="projects-masthead">
        <div>
          <p className="eyebrow">Ficha de proyecto</p>
          <strong className="masthead-mark">EXP-{project.year.slice(-2)} / Detail</strong>
        </div>
        <Link className="back-link compact-back" href="/projects">
          Volver al archivo
        </Link>
      </header>

      <section className="detail-hero card">
        <article className="detail-main">
          <div className="detail-meta">
            <span>{project.year}</span>
            <span>{project.status}</span>
            <span>{project.stack.length} tecnologias</span>
          </div>
          <h1>{project.title}</h1>
          <p className="detail-copy">{project.summary}</p>
          <ul className="tag-list">
            {project.stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <aside className="detail-side rail-card">
          <span className="panel-label">Lectura rapida</span>
          <strong>Implementacion documentada</strong>
          <p>Este caso resume el problema abordado, la estructura tecnica aplicada y la base dejada para crecer.</p>
        </aside>
      </section>

      <section className="detail-layout">
        <article className="project-detail card case-panel">
          <p className="eyebrow">Resumen tecnico</p>
          <h2>Decision y ejecucion</h2>
          <p className="detail-copy">{project.description}</p>
        </article>

        <aside className="card case-panel case-sidebar">
          <p className="eyebrow">Registro de ficha</p>
          <dl className="identity-list detail-list">
            <div>
              <dt>Codigo</dt>
              <dd>EXP-{project.year.slice(-2)}</dd>
            </div>
            <div>
              <dt>Estado</dt>
              <dd>{project.status}</dd>
            </div>
            <div>
              <dt>Enfoque</dt>
              <dd>{project.stack[0]}</dd>
            </div>
          </dl>
        </aside>
      </section>
    </main>
  );
}

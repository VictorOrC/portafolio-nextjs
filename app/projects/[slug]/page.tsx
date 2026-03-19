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
            <span>{project.role}</span>
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
            <div>
              <dt>Rol</dt>
              <dd>{project.role}</dd>
            </div>
          </dl>
        </aside>
      </section>

      <section className="detail-layout detail-layout-bottom">
        <article className="card case-panel">
          <p className="eyebrow">Retos principales</p>
          <h2>Problemas abordados</h2>
          <ul className="case-list">
            {project.challenges.map((challenge) => (
              <li key={challenge}>{challenge}</li>
            ))}
          </ul>
        </article>

        <article className="card case-panel">
          <p className="eyebrow">Logros</p>
          <h2>Resultados del trabajo</h2>
          <ul className="case-list">
            {project.achievements.map((achievement) => (
              <li key={achievement}>{achievement}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="card case-panel resource-panel">
        <p className="eyebrow">Enlaces del proyecto</p>
        <h2>Repositorio y demo</h2>
        <div className="resource-actions">
          {project.repositoryUrl ? (
            <a className="button button-secondary" href={project.repositoryUrl} target="_blank" rel="noreferrer">
              Ver repositorio
            </a>
          ) : (
            <span className="resource-note">Repositorio pendiente por agregar</span>
          )}

          {project.demoUrl ? (
            <a className="button button-primary" href={project.demoUrl} target="_blank" rel="noreferrer">
              Ver demo
            </a>
          ) : (
            <span className="resource-note">Demo pendiente por agregar</span>
          )}
        </div>
      </section>
    </main>
  );
}

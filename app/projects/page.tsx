import Link from "next/link";
import { projects } from "@/content/projects";

export default function ProjectsPage() {
  return (
    <main className="projects-shell dossier-shell">
      <header className="projects-masthead">
        <div>
          <p className="eyebrow">Archivo de proyectos</p>
          <strong className="masthead-mark">Cases / Index</strong>
        </div>
        <Link className="back-link compact-back" href="/">
          Volver al expediente principal
        </Link>
      </header>

      <section className="projects-hero card">
        <div className="projects-hero-main">
          <p className="eyebrow">Casos documentados</p>
          <h1>Proyectos con foco en integracion, estructura y criterio tecnico.</h1>
          <p className="lead">
            Esta seccion agrupa trabajos que muestran como abordo navegacion,
            integracion de APIs, maquetacion semantica y bases mantenibles para
            crecimiento futuro.
          </p>
        </div>

        <aside className="projects-hero-rail">
          <div className="rail-card archive-card">
            <span className="panel-label">Indice</span>
            <strong>{projects.length} casos activos</strong>
            <p>Cada ficha resume contexto, stack y decisiones de implementacion.</p>
          </div>
          <div className="rail-card archive-card muted-archive">
            <span className="panel-label">Revision</span>
            <p>Ordenados como expediente de trabajo para escaneo rapido y lectura profunda.</p>
          </div>
        </aside>
      </section>

      <section className="archive-list" aria-label="Listado de proyectos">
        {projects.map((project) => (
          <article className="card archive-entry" key={project.slug}>
            <div className="archive-code">
              <span className="panel-label">EXP-{project.year.slice(-2)}</span>
              <span className="archive-year">{project.year}</span>
            </div>

            <div className="archive-body">
              <div className="project-topline">
                <div className="project-meta">
                  <span>{project.status}</span>
                  <span>{project.role}</span>
                  <span>{project.stack.length} tecnologias</span>
                </div>
              </div>
              <h2>{project.title}</h2>
              <p className="project-summary">{project.summary}</p>
            </div>

            <div className="archive-notes">
              <p className="project-description">{project.description}</p>
              <ul className="mini-points" aria-label={`Logros clave de ${project.title}`}>
                {project.achievements.slice(0, 2).map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>
              <ul className="tag-list compact">
                {project.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="archive-actions">
              <Link className="inline-link" href={`/projects/${project.slug}`}>
                Abrir ficha completa
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

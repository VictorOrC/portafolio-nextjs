import Link from "next/link";
import { projects } from "@/content/projects";

export default function ProjectsPage() {
  return (
    <main className="projects-shell">
      <section className="projects-header card">
        <p className="eyebrow">Listado base</p>
        <h1>Proyectos</h1>
        <p className="lead">
          Esta ruta deja preparado el crecimiento del portafolio hacia fichas
          individuales por proyecto y futuras historias tecnicas.
        </p>
      </section>

      <section className="project-grid">
        {projects.map((project) => (
          <article className="card project-card" key={project.slug}>
            <div className="project-meta">
              <span>{project.year}</span>
              <span>{project.status}</span>
            </div>
            <h2>{project.title}</h2>
            <p>{project.summary}</p>
            <ul className="tag-list compact">
              {project.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Link className="inline-link" href={`/projects/${project.slug}`}>
              Abrir detalle
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}

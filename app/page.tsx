import Link from "next/link";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";

const featuredProjects = projects.slice(0, 2);

export default function Home() {
  return (
    <main className="shell">
      <section className="hero card hero-grid">
        <div>
          <p className="eyebrow">Base inicial del portafolio</p>
          <h1>{profile.headline}</h1>
          <p className="lead">{profile.summary}</p>
          <p className="detail-copy">
            {profile.name} - {profile.role} - {profile.location}
          </p>
          <div className="actions">
            <Link className="button button-primary" href="/projects">
              Ver proyectos
            </Link>
            <a className="button button-secondary" href={`mailto:${profile.contact.email}`}>
              Contactar
            </a>
          </div>
        </div>

        <aside className="hero-panel">
          <span className="panel-label">Estado del proyecto</span>
          <strong>V1 en preparacion</strong>
          <p>
            Esta base ya usa Next.js con App Router, metadata inicial y una
            estructura lista para crecer con paginas de proyectos y contenido.
          </p>
        </aside>
      </section>

      <section className="section-grid">
        <article className="card">
          <p className="eyebrow">Sobre mi</p>
          <h2>{profile.name}</h2>
          <p>{profile.bio}</p>
          <div className="actions">
            <a className="button button-secondary" href={profile.contact.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="button button-secondary" href={profile.contact.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </article>

        <article className="card">
          <p className="eyebrow">Tecnologias base</p>
          <ul className="tag-list">
            {profile.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="stack">
        <div className="section-heading">
          <p className="eyebrow">Proyectos destacados</p>
          <h2>Contenido inicial para validar estructura y navegacion</h2>
        </div>

        <div className="project-grid">
          {featuredProjects.map((project) => (
            <article className="card project-card" key={project.slug}>
              <div className="project-meta">
                <span>{project.year}</span>
                <span>{project.status}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <ul className="tag-list compact">
                {project.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link className="inline-link" href={`/projects/${project.slug}`}>
                Ver detalle
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

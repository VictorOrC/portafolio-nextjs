import Link from "next/link";
import { projects } from "@/content/projects";

export default function ProjectsPage() {
  return (
    <main className="shell" style={{ paddingTop: '2rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>Archivo de <span className="text-gradient">Proyectos</span></h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem' }}>
          Casos documentados con foco en integración, estructura y criterio técnico.
        </p>
      </div>

      <div className="grid-2">
        {projects.map((project) => (
          <Link href={`/projects/${project.slug}`} key={project.slug} style={{ textDecoration: 'none' }}>
            <div className="glass-panel project-card">
              <div className="project-meta">
                <span>{project.year}</span>
                <span style={{ color: 'var(--accent-2)' }}>{project.role}</span>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.summary}</p>
              <div className="flex-gap">
                {project.stack.slice(0, 4).map((item) => (
                  <span key={item} className="pill">{item}</span>
                ))}
                {project.stack.length > 4 && <span className="pill">+{project.stack.length - 4}</span>}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}

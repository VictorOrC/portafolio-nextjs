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

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "404" };
  return { title: project.title, description: project.summary };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <main className="shell" style={{ paddingTop: '2rem' }}>
      <Link href="/projects" className="btn btn-secondary" style={{ width: 'fit-content', marginBottom: '2rem' }}>
        ← Volver
      </Link>

      <div className="glass-panel" style={{ padding: '4rem', textAlign: 'center', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
          <span className="pill">{project.year}</span>
          <span className="pill" style={{ color: 'var(--accent-1)' }}>{project.status.toUpperCase()}</span>
          <span className="pill">{project.role}</span>
        </div>
        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem' }}>{project.title}</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto' }}>
          {project.summary}
        </p>
      </div>

      <div className="grid-2" style={{ marginBottom: '2rem' }}>
        <div className="glass-panel">
          <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>El <span className="text-gradient">Desafío</span></h2>
          <ul style={{ color: 'var(--text-secondary)', listStylePosition: 'inside', display: 'grid', gap: '1rem' }}>
            {project.challenges.map((challenge, i) => (
              <li key={i}>{challenge}</li>
            ))}
          </ul>
        </div>

        <div className="glass-panel">
          <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Los <span className="text-gradient">Resultados</span></h2>
          <ul style={{ color: 'var(--text-secondary)', listStylePosition: 'inside', display: 'grid', gap: '1rem' }}>
            {project.achievements.map((achievement, i) => (
              <li key={i}>{achievement}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="glass-panel">
        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Implementación</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '2rem' }}>
          {project.description}
        </p>
        
        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Tech Stack</h3>
        <div className="flex-gap" style={{ marginBottom: '3rem' }}>
          {project.stack.map((item) => (
            <span key={item} className="pill">{item}</span>
          ))}
        </div>

        <div className="flex-gap" style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '2rem' }}>
          {project.repositoryUrl ? (
            <a className="btn btn-secondary" href={project.repositoryUrl} target="_blank" rel="noreferrer">
              Código Fuente
            </a>
          ) : (
             <span className="pill">Código confidencial interno</span>
          )}

          {project.demoUrl ? (
            <a className="btn btn-primary" href={project.demoUrl} target="_blank" rel="noreferrer">
              Visitar Aplicación
            </a>
          ) : (
            <span className="pill" style={{ color: 'var(--accent-3)' }}>Demo en desarrollo</span>
          )}
        </div>
      </div>
    </main>
  );
}

import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";

const featuredProjects = projects.slice(0, 2);

export default function Home() {
  return (
    <main className="shell" style={{ paddingTop: '2rem' }}>
      
      <section className="hero">
        <span className="pill" style={{ marginBottom: '1rem' }}>✨ {profile.role}</span>
        <h1>Creando <span className="text-gradient">experiencias</span> digitales extraordinarias</h1>
        <p>{profile.summary}</p>
        <div className="flex-gap" style={{ justifyContent: 'center', marginTop: '2rem' }}>
          <Link href="/projects" className="btn btn-primary">
            Explorar Proyectos
          </Link>
          <a href={`mailto:${profile.contact.email}`} className="btn btn-secondary">
            Contactar
          </a>
        </div>
      </section>

      <section id="perfil" className="grid-2">
        <div className="glass-panel">
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Sobre mí</h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            {profile.bio}
          </p>
          <div className="flex-gap" style={{ marginTop: '2rem' }}>
            <a href={profile.contact.github} target="_blank" rel="noreferrer" className="btn btn-secondary">
              GitHub
            </a>
            <a href={profile.contact.linkedin} target="_blank" rel="noreferrer" className="btn btn-secondary">
              LinkedIn
            </a>
          </div>
        </div>

        <div id="stack" className="glass-panel">
          <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Core Stack</h2>
          <div className="flex-gap">
            {profile.skills.map((skill) => (
              <span key={skill} className="pill">{skill}</span>
            ))}
          </div>
          <p style={{ color: 'var(--text-secondary)', marginTop: '2rem' }}>
            Dominio de herramientas modernas para construir interfaces fluidas y servidores robustos con escalabilidad asegurada.
          </p>
        </div>
      </section>

      <section id="proyectos">
        <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '3rem' }}>Casos <span className="text-gradient">Destacados</span></h2>
          <p style={{ color: 'var(--text-secondary)' }}>Selección de trabajos recientes.</p>
        </div>
        
        <div className="grid-2">
          {featuredProjects.map((project) => (
            <Link href={`/projects/${project.slug}`} key={project.slug} style={{ textDecoration: 'none' }}>
              <div className="glass-panel project-card">
                <div className="project-meta">
                  <span>{project.year}</span>
                  <span style={{ color: 'var(--accent-1)' }}>{project.status.toUpperCase()}</span>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.summary}</p>
                <div className="flex-gap">
                  {project.stack.slice(0, 3).map((item) => (
                    <span key={item} className="pill">{item}</span>
                  ))}
                  {project.stack.length > 3 && <span className="pill">+{project.stack.length - 3}</span>}
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
          <Link href="/projects" className="btn btn-secondary">Ver todo el archivo →</Link>
        </div>
      </section>

      <section className="glass-panel" style={{ textAlign: 'center', margin: '4rem 0' }}>
        <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>¿Interesado en <span className="text-gradient">colaborar</span>?</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
          Si buscas a alguien que convierta necesidades reales en productos claros y bien pensados, hablemos.
        </p>
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'left' }}>
          <ContactForm email={profile.contact.email} />
        </div>
      </section>

    </main>
  );
}

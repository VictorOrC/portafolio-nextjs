import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";

const featuredProjects = projects.slice(0, 2);
const profileFacts = [profile.role, profile.location, "Disponible para crecer en equipos de producto"];

export default function Home() {
  return (
    <main className="shell home-shell">
      <header className="masthead">
        <div>
          <p className="eyebrow">Expediente profesional</p>
          <strong className="masthead-mark">VEOC / Portfolio</strong>
        </div>
        <nav className="top-nav" aria-label="Secciones principales">
          <a href="#perfil">Perfil</a>
          <a href="#stack">Stack</a>
          <a href="#proyectos">Proyectos</a>
        </nav>
      </header>

      <section className="hero-dossier card">
        <article className="hero-main">
          <div className="hero-intro">
            <p className="eyebrow">Desarrollador full stack junior</p>
            <h1>{profile.headline}</h1>
            <p className="lead">{profile.summary}</p>
          </div>

          <ul className="fact-strip" aria-label="Datos principales">
            {profileFacts.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>

          <div className="actions">
            <Link className="button button-primary" href="/projects">
              Explorar proyectos
            </Link>
            <a className="button button-secondary" href={`mailto:${profile.contact.email}`}>
              Escribir correo
            </a>
          </div>
        </article>

        <aside className="hero-rail">
          <div className="rail-card stamp-card">
            <span className="panel-label">Estado</span>
            <strong>Abierto a oportunidades</strong>
            <p>Perfil orientado a producto, integracion de APIs y construccion frontend mantenible.</p>
          </div>

          <div className="rail-card identity-card">
            <span className="panel-label">Ficha</span>
            <h2>{profile.name}</h2>
            <dl className="identity-list">
              <div>
                <dt>Email</dt>
                <dd>{profile.contact.email}</dd>
              </div>
              <div>
                <dt>Telefono</dt>
                <dd>{profile.contact.phone}</dd>
              </div>
              <div>
                <dt>Base</dt>
                <dd>{profile.location}</dd>
              </div>
            </dl>
          </div>
        </aside>
      </section>

      <section className="inspection-grid">
        <article className="card dossier-panel" id="perfil">
          <p className="eyebrow">Sobre mi</p>
          <div className="panel-head">
            <h2>Perfil</h2>
            <span className="status-pill">Revision actual</span>
          </div>
          <p className="panel-copy">{profile.bio}</p>
          <div className="link-row">
            <a className="button button-secondary" href={profile.contact.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="button button-secondary" href={profile.contact.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </article>

        <article className="card dossier-panel stack-panel" id="stack">
          <p className="eyebrow">Tecnologias base</p>
          <div className="panel-head">
            <h2>Stack</h2>
            <span className="status-pill muted-pill">En uso</span>
          </div>
          <ul className="tag-list stack-tags">
            {profile.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
          <p className="panel-note">
            JavaScript, TypeScript, frontend moderno y bases solidas para integracion de APIs y desarrollo movil.
          </p>
        </article>
      </section>

      <section className="project-section" id="proyectos">
        <div className="section-heading project-heading">
          <div>
            <p className="eyebrow">Casos destacados</p>
            <h2>Dos piezas que muestran integracion, estructura y criterio tecnico.</h2>
          </div>
          <p className="section-note">
            Cada proyecto se presenta como una ficha de trabajo: contexto, stack y un resumen tecnico de la solucion.
          </p>
        </div>

        <div className="project-grid">
          {featuredProjects.map((project) => (
            <article className="card project-card" key={project.slug}>
              <div className="project-topline">
                <div className="project-meta">
                  <span>{project.year}</span>
                  <span>{project.status}</span>
                </div>
                <span className="project-code">EXP-{project.year.slice(-2)}</span>
              </div>
              <h3>{project.title}</h3>
              <p className="project-summary">{project.summary}</p>
              <p className="project-description">{project.description}</p>
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

      <section className="contact-banner card">
        <div className="contact-column">
          <div className="contact-copy">
            <p className="eyebrow">Siguiente paso</p>
            <h2>Si buscas a alguien que construya interfaces utiles y bien pensadas, conversemos.</h2>
            <p className="panel-copy">
              Puedes escribirme directo o dejar un mensaje corto para abrir el correo con contexto listo.
            </p>
          </div>

          <div className="contact-direct rail-card">
            <span className="panel-label">Contacto directo</span>
            <strong>{profile.contact.email}</strong>
            <p>{profile.contact.phone}</p>
            <div className="contact-actions">
              <a className="button button-primary" href={`mailto:${profile.contact.email}`}>
                Contactar por correo
              </a>
              <a className="button button-secondary" href={profile.contact.linkedin} target="_blank" rel="noreferrer">
                Ver LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form-shell rail-card">
          <span className="panel-label">Formulario corto</span>
          <ContactForm email={profile.contact.email} />
        </div>
      </section>
    </main>
  );
}

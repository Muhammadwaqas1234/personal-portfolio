import Reveal from './Reveal'
import Counter from './Counter'
import { stats, about, skills, projects, profile, certifications } from '../data/content'

export function Stats() {
  return (
    <section className="stats">
      <div className="stats-grid">
        {stats.map((s, i) => (
          <Reveal className="stat-item" i={i} key={s.label}>
            <Counter value={s.value} suffix={s.suffix} />
            <p>{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export function About() {
  return (
    <section className="about" id="about">
      <div className="about-top">
        <Reveal className="about-intro">
          <span className="eyebrow">About</span>
          <h2 className="heading">Building intelligent systems, end to end.</h2>
          <h3 className="about-subhead">{about.heading2}</h3>
          {about.paragraphs.map((p, i) => (
            <p key={i} className="about-para" dangerouslySetInnerHTML={{ __html: p }} />
          ))}
          <a href="#contact" className="btn btn-primary about-cta-btn">Let's Talk <i className="fas fa-arrow-right" /></a>
        </Reveal>

        <Reveal className="about-cards" i={1}>
          {about.cards.map((c) => (
            <div className="about-card" key={c.title}>
              <i className={`fas ${c.icon}`} />
              <div className="about-card-text">
                <h4>{c.title}</h4>
                <p>{c.main}<span>{c.sub}</span></p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

export function Skills() {
  return (
    <section className="skills" id="skills">
      <Reveal className="center">
        <span className="eyebrow">Expertise</span>
        <h2 className="heading">Technical capabilities</h2>
        <p className="section-sub">The full AI engineering stack — from embeddings to deployment.</p>
      </Reveal>

      <div className="skills-grid">
        {skills.map((s, i) => (
          <Reveal i={i % 3} className="skill-card" key={s.title}>
            <div className="skill-icon"><i className={`fas ${s.icon}`} /></div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            <div className="skill-tags">{s.tags.map((t) => <span key={t}>{t}</span>)}</div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export function Projects() {
  return (
    <section className="projects" id="projects">
      <Reveal className="center">
        <span className="eyebrow">Work</span>
        <h2 className="heading">Featured projects</h2>
        <p className="section-sub">Production-grade AI systems, shipped end to end.</p>
      </Reveal>

      <div className="projects-container">
        {projects.map((p, i) => (
          <Reveal i={i % 3} className="project-card" as="article" key={p.title}>
            <div className="project-info">
              <span className="project-badge">{p.badge}</span>
              <h4>{p.title}</h4>
              <p>{p.desc}</p>
              <div className="project-tags">{p.tags.map((t) => <span key={t}>{t}</span>)}</div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="cert-block" i={2}>
        <h3 className="cert-title"><i className="fas fa-certificate" /> Certifications</h3>
        <div className="cert-grid">
          {certifications.map((c) => (
            <a
              className="cert-card"
              href={c.verifyUrl || c.image}
              target="_blank"
              rel="noreferrer"
              key={c.title}
              title={`${c.title} — view / verify`}
            >
              <div className="cert-thumb">
                {c.image ? (
                  <img src={c.image} alt={c.title} loading="lazy" />
                ) : (
                  <div className="cert-placeholder"><i className="fas fa-certificate" /><span>{c.issuer}</span></div>
                )}
                <span className="cert-zoom"><i className="fas fa-arrow-up-right-from-square" /></span>
              </div>
              <div className="cert-meta">
                <h4>{c.title}</h4>
                <p>{c.issuer}</p>
              </div>
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  )
}

export function Contact() {
  const items = [
    { icon: 'fas fa-envelope', title: 'Email', text: profile.email, href: `mailto:${profile.email}` },
    { icon: 'fab fa-whatsapp', title: 'WhatsApp', text: profile.phone, href: profile.whatsapp },
    { icon: 'fab fa-linkedin', title: 'LinkedIn', text: profile.name, href: profile.linkedin },
    { icon: 'fab fa-github', title: 'GitHub', text: profile.githubHandle, href: profile.github },
  ]
  return (
    <section className="contact" id="contact">
      <Reveal className="center">
        <span className="eyebrow">Contact</span>
        <h2 className="heading">Let's work together</h2>
        <p className="section-sub">Open to AI engineering roles and freelance engagements.</p>
      </Reveal>

      <div className="contact-info">
        {items.map((it, i) => (
          <Reveal as="a" className="contact-item" i={i % 4} key={it.title} href={it.href} target="_blank" rel="noreferrer">
            <i className={it.icon} />
            <h4>{it.title}</h4>
            <p>{it.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 {profile.name} · AI Engineer</p>
      <p className="footer-sub">Agentic AI · RAG · Multi-Agent Systems</p>
    </footer>
  )
}

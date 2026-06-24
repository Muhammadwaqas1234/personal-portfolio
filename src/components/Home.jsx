import { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import Reveal from './Reveal'
import { profile } from '../data/content'

export default function Home() {
  const typedEl = useRef(null)

  useEffect(() => {
    const typed = new Typed(typedEl.current, {
      strings: profile.typedRoles,
      typeSpeed: 60,
      backSpeed: 30,
      backDelay: 1600,
      loop: true,
    })
    return () => typed.destroy()
  }, [])

  return (
    <section className="home" id="home">
      <div className="home-grid">
        <Reveal className="home-content">
          <span className="eyebrow">AI Engineer · {profile.location}</span>
          <h1>{profile.name.split(' ')[0]} <span className="accent">{profile.name.split(' ').slice(1).join(' ')}</span></h1>
          <p className="home-role">I build <span className="multiple-text" ref={typedEl} /></p>
          <p className="home-desc">{profile.tagline}</p>

          <div className="button-group">
            <a href="#projects" className="btn btn-primary">View My Work <i className="fas fa-arrow-right" /></a>
            <a href="#contact" className="btn btn-ghost">Get in Touch</a>
          </div>

          <div className="social-icons">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><i className="fab fa-github" /></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin-in" /></a>
            <a href={profile.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp"><i className="fab fa-whatsapp" /></a>
            <a href={`mailto:${profile.email}`} aria-label="Email"><i className="fas fa-envelope" /></a>
          </div>
        </Reveal>

        <Reveal className="home-img" i={1}>
          <div className="img-frame">
            <img src={profile.photo} alt={profile.name} />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

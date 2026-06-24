import { useEffect, useState } from 'react'

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 40)

      const bar = document.getElementById('scroll-progress')
      if (bar) {
        const docH = document.documentElement.scrollHeight - window.innerHeight
        bar.style.width = (y / docH) * 100 + '%'
      }

      let cur = 'home'
      document.querySelectorAll('section[id]').forEach((sec) => {
        if (y >= sec.offsetTop - 200) cur = sec.id
      })
      setActive(cur)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <div className="scroll-progress" id="scroll-progress" />
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="inner-h">
          <a href="#home" className="logo">Muhammad <span>Waqas</span></a>
          <button className="menu-icon" onClick={() => setOpen((o) => !o)} aria-label="Menu">
            <i className={`fas ${open ? 'fa-xmark' : 'fa-bars'}`} />
          </button>
          <nav className={`navbar ${open ? 'active' : ''}`}>
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className={active === l.id ? 'active' : ''}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </header>
    </>
  )
}

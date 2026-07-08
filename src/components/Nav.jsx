import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Blog', href: '#blog' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => { setScrolled(window.scrollY > 40); setOpen(false) }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      className={`nav ${scrolled ? 'scrolled' : ''} ${open ? 'nav-open' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="wrap nav-inner">
        <a href="#home" aria-label="Tso Yum home">
          <img className="nav-logo" src="/logo.webp" alt="Tso Yum!" />
        </a>

        <div className="nav-links">
          {links.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </div>

        <a href="#locations" className="btn btn-primary nav-cta">Contact Us</a>

        <button
          className={`nav-burger ${open ? 'active' : ''}`}
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>

      <div className={`nav-mobile ${open ? 'show' : ''}`}>
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
        ))}
        <a href="#locations" className="btn btn-primary" onClick={() => setOpen(false)}>Contact Us</a>
      </div>
    </motion.nav>
  )
}

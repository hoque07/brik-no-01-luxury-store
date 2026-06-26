import { useEffect, useState } from 'react'
import { Menu, ShoppingBag, X } from 'lucide-react'
import { navLinks } from '../data/siteData.js'

export default function Navbar({ onOrder }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <a className="brand" href="#top" aria-label="BRÍK No. 01 Home">
        <span className="brand-mark">B</span>
        <span>BRÍK No. 01</span>
      </a>

      <nav className={`nav-links ${open ? 'nav-links--open' : ''}`}>
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
        <button className="nav-order" onClick={onOrder}>
          <ShoppingBag size={17} /> Order
        </button>
      </nav>

      <button className="menu-btn" onClick={() => setOpen((prev) => !prev)} aria-label="Toggle menu">
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
    </header>
  )
}

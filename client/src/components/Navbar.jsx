import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact Us', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('Home')

  useEffect(() => {
    const sections = navLinks
      .map((link) => {
        const el = document.getElementById(link.href.slice(1))
        return el ? { label: link.label, el } : null
      })
      .filter(Boolean)

    const updateActive = () => {
      const scrollPos = window.scrollY + window.innerHeight * 0.35

      let current = sections[0]?.label ?? 'Home'
      for (const section of sections) {
        if (section.el.offsetTop <= scrollPos) {
          current = section.label
        }
      }
      setActive(current)
    }

    window.addEventListener('scroll', updateActive, { passive: true })
    updateActive()

    return () => window.removeEventListener('scroll', updateActive)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-lumovix-light">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#home" className="flex items-center gap-3 group">
            <img
              src="/assets/logo.png"
              alt="Lumovix Solution"
              className="h-10 w-10 lg:h-12 lg:w-12 object-contain rounded-lg"
            />
            <div className="hidden sm:block">
              <span className="font-display font-bold text-sm lg:text-base tracking-wider text-lumovix-navy">
                LUMOVIX
              </span>
              <span className="block text-[10px] lg:text-xs tracking-[0.2em] text-lumovix-purple font-semibold -mt-0.5">
                SOLUTION
              </span>
            </div>
          </a>

          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`relative text-sm font-medium transition-colors hover:text-lumovix-purple ${
                    active === link.label ? 'text-lumovix-purple' : 'text-lumovix-navy/70'
                  }`}
                >
                  {link.label}
                  {active === link.label && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-lumovix-purple rounded-full" />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="lg:hidden p-2 text-lumovix-navy"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden pb-4 border-t border-lumovix-light">
            <ul className="flex flex-col gap-1 pt-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      active === link.label
                        ? 'bg-lumovix-light text-lumovix-purple'
                        : 'text-lumovix-navy/70 hover:bg-lumovix-light'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}

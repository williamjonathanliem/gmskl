import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Menu, X } from 'lucide-react'
import whiteLogo from '../assets/white_logo.png'

const NAV_LINKS = [
  { key: 'home',         path: '/' },
  { key: 'about',        path: '/about' },
  { key: 'services',     path: '/services' },
  { key: 'connectGroup', path: '/connect-group' },
  { key: 'giving',       path: '/giving' },
  { key: 'contact',      path: '/contact' },
]

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  // Close mobile menu on route change
  useEffect(() => setMenuOpen(false), [pathname])

  const toggleLanguage = () =>
    i18n.changeLanguage(i18n.language === 'en' ? 'id' : 'en')

  const isActive = (path) =>
    path === '/' ? pathname === '/' : pathname.startsWith(path)

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-[60px] flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="flex-shrink-0"
          aria-label="GMS KL Home"
        >
          {/* GMS Kuala Lumpur logo — white version for dark navbar */}
          <img
            src={whiteLogo}
            alt="GMS Church Kuala Lumpur"
            className="h-9 w-auto object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-7" role="list">
          {NAV_LINKS.map(({ key, path }) => (
            <li key={key}>
              <Link
                to={path}
                className={`text-xs font-semibold tracking-[0.15em] uppercase transition-colors duration-150 ${
                  isActive(path)
                    ? 'text-white'
                    : 'text-white/50 hover:text-white'
                }`}
              >
                {t(`nav.${key}`)}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right: lang + mobile toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleLanguage}
            aria-label="Toggle language"
            className="hidden sm:flex items-center gap-1.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 transition-all duration-150"
          >
            {i18n.language === 'en' ? '🇬🇧' : '🇮🇩'}
            <span>{t('nav.langToggle')}</span>
          </button>

          <button
            className="lg:hidden text-white/70 hover:text-white p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-[400px]' : 'max-h-0'
        } bg-[#0a0a0a] border-t border-white/5`}
        aria-hidden={!menuOpen}
      >
        <ul className="px-6 py-5 flex flex-col gap-4" role="list">
          {NAV_LINKS.map(({ key, path }) => (
            <li key={key}>
              <Link
                to={path}
                className={`block text-sm font-semibold tracking-widest uppercase transition-colors duration-150 ${
                  isActive(path) ? 'text-white' : 'text-white/50'
                }`}
              >
                {t(`nav.${key}`)}
              </Link>
            </li>
          ))}
          <li>
            <button
              onClick={toggleLanguage}
              className="text-white/50 text-sm font-semibold tracking-widest uppercase"
            >
              {i18n.language === 'en' ? '🇬🇧 Switch to BI' : '🇮🇩 Switch to EN'}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

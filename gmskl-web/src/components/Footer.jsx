import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import whiteLogo from '../assets/white_logo.png'

const FOOTER_COLS = [
  {
    headingKey: 'footer.colServices',
    links: [
      { labelKey: 'footer.eaglekidz', path: '/services#eaglekidz' },
      { labelKey: 'footer.aog',        path: '/services#aog' },
      { labelKey: 'footer.family',     path: '/services#family' },
    ],
  },
  {
    headingKey: 'footer.colConnect',
    links: [
      { labelKey: 'footer.connectGroup', path: '/connect-group' },
      { labelKey: 'footer.giving',       path: '/giving' },
      { labelKey: 'footer.contact',      path: '/contact' },
    ],
  },
  {
    headingKey: 'footer.colMedia',
    links: [
      // TODO: Replace with actual YouTube/Instagram URLs
      { labelKey: 'footer.youtube',   href: '#' },
      { labelKey: 'footer.instagram', href: '#' },
    ],
  },
]

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-[#0a0a0a] text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-10">

        {/* Top row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">

          {/* Logo + tagline */}
          <div className="col-span-2 lg:col-span-1">
            {/* GMS Kuala Lumpur logo — black version for light bg, inverted for dark footer */}
            <img
              src={whiteLogo}
              alt="GMS Church Kuala Lumpur"
              className="h-12 w-auto object-contain"
            />
            <p className="text-white/35 text-xs mt-3 leading-relaxed max-w-[180px]">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Link columns */}
          {FOOTER_COLS.map((col) => (
            <div key={col.headingKey}>
              <h3 className="text-white text-[10px] font-bold tracking-[0.2em] uppercase mb-4">
                {t(col.headingKey)}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.labelKey}>
                    {link.path ? (
                      <Link
                        to={link.path}
                        className="text-white/40 hover:text-white text-sm transition-colors duration-150"
                      >
                        {t(link.labelKey)}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-white/40 hover:text-white text-sm transition-colors duration-150"
                      >
                        {t(link.labelKey)}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            {t('footer.rights')}
          </p>
          <p className="text-white/20 text-xs">
            {t('footer.partOf')}{' '}
            <a
              href="https://gms.church/en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white underline underline-offset-2 transition-colors duration-150"
            >
              {t('footer.gmsIndonesia')}
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

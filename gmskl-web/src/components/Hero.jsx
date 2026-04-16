import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

export default function Hero() {
  const { t } = useTranslation()

  const handleScroll = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Deep black base */}
      <div className="absolute inset-0 bg-[#0a0a0a]" />

      {/* Radial gold glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 55% at 50% 55%, rgba(201,168,76,0.10) 0%, rgba(201,168,76,0.03) 45%, transparent 70%)',
        }}
      />

      {/* Grain texture overlay */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* Subtle horizontal line above content */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px"
        style={{
          height: '120px',
          background: 'linear-gradient(to bottom, transparent, rgba(201,168,76,0.3), transparent)',
          marginTop: '-160px',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-[#C9A84C] text-xs font-semibold tracking-[0.3em] uppercase mb-8"
        >
          Kuala Lumpur, Malaysia
        </motion.p>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25 }}
          className="font-['Cormorant_Garamond'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] text-white mb-6"
        >
          {t('hero.heading')}
        </motion.h1>

        {/* Gold divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="gold-divider my-8"
          aria-hidden="true"
        />

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="text-white/60 text-base sm:text-lg font-light tracking-wide mb-12 max-w-xl mx-auto"
        >
          {t('hero.subheading')}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.75 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => handleScroll('#services')}
            className="bg-[#C9A84C] hover:bg-[#E2C272] text-[#0a0a0a] font-semibold text-sm tracking-wide px-8 py-3.5 transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,168,76,0.3)]"
            aria-label="Join a Service"
          >
            {t('hero.ctaPrimary')}
          </button>
          <button
            onClick={() => handleScroll('#about')}
            className="border border-white/30 hover:border-[#C9A84C] text-white/80 hover:text-[#C9A84C] font-medium text-sm tracking-wide px-8 py-3.5 transition-all duration-300"
            aria-label="Learn more about GMS KL"
          >
            {t('hero.ctaSecondary')}
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-[#C9A84C]/40 to-transparent animate-pulse" />
      </motion.div>
    </section>
  )
}

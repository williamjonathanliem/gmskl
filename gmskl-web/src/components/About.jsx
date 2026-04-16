import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

function FadeUp({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function About() {
  const { t } = useTranslation()

  return (
    <section
      id="about"
      className="relative py-28 lg:py-36 bg-[#0d0d0d] overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Subtle top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: Text */}
          <div>
            <FadeUp delay={0}>
              <p className="text-[#C9A84C] text-xs font-semibold tracking-[0.3em] uppercase mb-5">
                Who We Are
              </p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2
                id="about-heading"
                className="font-['Cormorant_Garamond'] text-4xl lg:text-5xl font-light text-white leading-[1.15] mb-8"
              >
                {t('about.heading')}
              </h2>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="w-10 h-px bg-[#C9A84C]/60 mb-8" aria-hidden="true" />
            </FadeUp>

            <FadeUp delay={0.25}>
              <p className="text-white/65 text-base leading-relaxed mb-8 font-light">
                {t('about.body')}
              </p>
            </FadeUp>

            <FadeUp delay={0.35}>
              <div className="border-l-2 border-[#C9A84C]/50 pl-6 mb-8">
                <p className="text-[#E2C272] text-sm font-medium tracking-wide leading-relaxed italic">
                  &ldquo;{t('about.vision')}&rdquo;
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.4}>
              <p className="text-white/40 text-sm font-light tracking-wide">
                {t('about.sub')}
              </p>
            </FadeUp>
          </div>

          {/* Right: Decorative */}
          <FadeUp delay={0.3} className="flex items-center justify-center lg:justify-end">
            <div className="relative w-72 h-72 lg:w-80 lg:h-80">
              {/* Outer gold border box */}
              <div className="absolute inset-0 border border-[#C9A84C]/25" />
              {/* Inner offset box */}
              <div className="absolute inset-4 border border-[#C9A84C]/15" />

              {/* SVG Cross / Geometric */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  width="140"
                  height="140"
                  viewBox="0 0 140 140"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  {/* Abstract geometric cross */}
                  <rect x="59" y="10" width="22" height="120" rx="1" fill="none" stroke="#C9A84C" strokeWidth="0.8" strokeOpacity="0.5" />
                  <rect x="10" y="59" width="120" height="22" rx="1" fill="none" stroke="#C9A84C" strokeWidth="0.8" strokeOpacity="0.5" />
                  {/* Center glow */}
                  <circle cx="70" cy="70" r="18" fill="none" stroke="#C9A84C" strokeWidth="0.6" strokeOpacity="0.4" />
                  <circle cx="70" cy="70" r="5" fill="#C9A84C" fillOpacity="0.25" />
                  {/* Corner accents */}
                  <line x1="10" y1="10" x2="30" y2="10" stroke="#C9A84C" strokeWidth="0.8" strokeOpacity="0.3" />
                  <line x1="10" y1="10" x2="10" y2="30" stroke="#C9A84C" strokeWidth="0.8" strokeOpacity="0.3" />
                  <line x1="130" y1="10" x2="110" y2="10" stroke="#C9A84C" strokeWidth="0.8" strokeOpacity="0.3" />
                  <line x1="130" y1="10" x2="130" y2="30" stroke="#C9A84C" strokeWidth="0.8" strokeOpacity="0.3" />
                  <line x1="10" y1="130" x2="30" y2="130" stroke="#C9A84C" strokeWidth="0.8" strokeOpacity="0.3" />
                  <line x1="10" y1="130" x2="10" y2="110" stroke="#C9A84C" strokeWidth="0.8" strokeOpacity="0.3" />
                  <line x1="130" y1="130" x2="110" y2="130" stroke="#C9A84C" strokeWidth="0.8" strokeOpacity="0.3" />
                  <line x1="130" y1="130" x2="130" y2="110" stroke="#C9A84C" strokeWidth="0.8" strokeOpacity="0.3" />
                  {/* Diagonal light lines */}
                  <line x1="59" y1="59" x2="10" y2="10" stroke="#C9A84C" strokeWidth="0.3" strokeOpacity="0.15" />
                  <line x1="81" y1="59" x2="130" y2="10" stroke="#C9A84C" strokeWidth="0.3" strokeOpacity="0.15" />
                  <line x1="59" y1="81" x2="10" y2="130" stroke="#C9A84C" strokeWidth="0.3" strokeOpacity="0.15" />
                  <line x1="81" y1="81" x2="130" y2="130" stroke="#C9A84C" strokeWidth="0.3" strokeOpacity="0.15" />
                </svg>
              </div>

              {/* Corner dot accents */}
              <div className="absolute top-2 left-2 w-1.5 h-1.5 bg-[#C9A84C]/40 rounded-full" />
              <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-[#C9A84C]/40 rounded-full" />
              <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-[#C9A84C]/40 rounded-full" />
              <div className="absolute bottom-2 right-2 w-1.5 h-1.5 bg-[#C9A84C]/40 rounded-full" />
            </div>
          </FadeUp>
        </div>
      </div>

      {/* Subtle bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/20 to-transparent" />
    </section>
  )
}

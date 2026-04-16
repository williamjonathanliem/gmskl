import { useTranslation } from 'react-i18next'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

function FadeUp({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function Pastor() {
  const { t } = useTranslation()

  return (
    <section
      id="pastor"
      className="relative py-28 lg:py-36 bg-[#0d0d0d]"
      aria-labelledby="pastor-heading"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/15 to-transparent" />

      <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">

        <FadeUp>
          <p className="text-[#C9A84C] text-xs font-semibold tracking-[0.3em] uppercase mb-5">
            Leadership
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2
            id="pastor-heading"
            className="font-['Cormorant_Garamond'] text-4xl lg:text-5xl font-light text-white leading-tight mb-10"
          >
            {t('pastor.heading')}
          </h2>
        </FadeUp>

        {/* Photo placeholder */}
        <FadeUp delay={0.2}>
          <div className="flex justify-center mb-8">
            <div className="relative">
              {/* Outer ring */}
              <div className="absolute -inset-2 rounded-full border border-[#C9A84C]/25" />
              {/* TODO: Replace with Ps. Oscar Andi's photo */}
              <div
                className="w-[150px] h-[150px] rounded-full bg-[#1a1a1a] border border-[#C9A84C]/30 flex flex-col items-center justify-center gap-1"
                role="img"
                aria-label="Pastor photo placeholder"
              >
                {/* Silhouette SVG */}
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" aria-hidden="true">
                  <circle cx="25" cy="18" r="10" fill="#C9A84C" fillOpacity="0.2" stroke="#C9A84C" strokeWidth="0.8" strokeOpacity="0.4" />
                  <path d="M8 46 C8 34 42 34 42 46" stroke="#C9A84C" strokeWidth="0.8" strokeOpacity="0.4" fill="none" />
                </svg>
                <span className="text-white/25 text-[8px] tracking-widest uppercase">Pastor Photo</span>
              </div>
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={0.3}>
          <h3 className="font-['Cormorant_Garamond'] text-2xl text-white font-medium mb-1">
            {t('pastor.name')}
          </h3>
          <p className="text-[#C9A84C] text-xs tracking-widest uppercase mb-6">Local Pastor</p>
        </FadeUp>

        <FadeUp delay={0.35}>
          <div className="gold-divider mb-8" aria-hidden="true" />
        </FadeUp>

        <FadeUp delay={0.4}>
          <p className="text-white/55 text-base leading-relaxed font-light">
            {t('pastor.bio')}
          </p>
        </FadeUp>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/15 to-transparent" />
    </section>
  )
}

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

export default function ConnectGroup() {
  const { t } = useTranslation()

  return (
    <section
      id="connect-group"
      className="relative py-28 lg:py-36 bg-[#0d0d0d] overflow-hidden"
      aria-labelledby="cg-heading"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/15 to-transparent" />

      {/* Background radial */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 60%, rgba(201,168,76,0.05) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-3xl mx-auto px-6 lg:px-10 text-center">

        <FadeUp>
          <p className="text-[#C9A84C] text-xs font-semibold tracking-[0.3em] uppercase mb-5">
            Community
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2
            id="cg-heading"
            className="font-['Cormorant_Garamond'] text-4xl lg:text-5xl font-light text-white leading-tight mb-4"
          >
            {t('connectGroup.heading')}
          </h2>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="gold-divider mt-6 mb-8" aria-hidden="true" />
        </FadeUp>

        <FadeUp delay={0.25}>
          <p className="text-white/55 text-base leading-relaxed font-light mb-12">
            {t('connectGroup.body')}
          </p>
        </FadeUp>

        {/* Three small icons */}
        <FadeUp delay={0.3}>
          <div className="flex justify-center gap-8 mb-12" aria-hidden="true">
            {[
              { label: 'Faith', icon: '✦' },
              { label: 'Friendship', icon: '✦' },
              { label: 'Community', icon: '✦' },
            ].map(({ label, icon }) => (
              <div key={label} className="flex flex-col items-center gap-2">
                <span className="text-[#C9A84C]/50 text-xs">{icon}</span>
                <span className="text-white/30 text-[10px] tracking-widest uppercase">{label}</span>
              </div>
            ))}
          </div>
        </FadeUp>

        <FadeUp delay={0.35}>
          {/* TODO: Replace with actual CG registration link */}
          <a
            href="mailto:gms.kl@placeholder.com"
            className="inline-block bg-[#C9A84C] hover:bg-[#E2C272] text-[#0a0a0a] font-semibold text-sm tracking-wide px-10 py-4 transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,168,76,0.3)]"
            aria-label="Join a Connect Group"
          >
            {t('connectGroup.cta')}
          </a>
        </FadeUp>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/15 to-transparent" />
    </section>
  )
}

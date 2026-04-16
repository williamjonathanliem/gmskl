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

export default function Giving() {
  const { t } = useTranslation()

  return (
    <section
      id="giving"
      className="relative py-28 lg:py-36 bg-[#0a0a0a]"
      aria-labelledby="giving-heading"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/15 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="text-center mb-16">
          <FadeUp>
            <p className="text-[#C9A84C] text-xs font-semibold tracking-[0.3em] uppercase mb-5">
              Tithing &amp; Offering
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2
              id="giving-heading"
              className="font-['Cormorant_Garamond'] text-4xl lg:text-5xl font-light text-white leading-tight mb-4"
            >
              {t('giving.heading')}
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="gold-divider mt-6 mb-5" aria-hidden="true" />
          </FadeUp>
          <FadeUp delay={0.25}>
            <p className="text-white/50 text-sm leading-relaxed max-w-xl mx-auto font-light">
              {t('giving.intro')}
            </p>
          </FadeUp>
        </div>

        {/* Two columns */}
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">

          {/* Bank card */}
          <FadeUp delay={0.15}>
            <div className="bg-[#111111] border border-[#C9A84C]/25 p-8 h-full">
              <p className="text-[#C9A84C] text-xs font-semibold tracking-[0.25em] uppercase mb-6">
                {t('giving.bankTitle')}
              </p>

              <div className="space-y-4">
                <div>
                  <p className="text-white/35 text-xs uppercase tracking-widest mb-1">{t('giving.accountName')}</p>
                  <p className="text-white text-sm font-medium leading-snug">
                    GMS KUALA LUMPUR<br />GOSPEL MISSION STEWARDS
                  </p>
                </div>

                <div className="h-px bg-white/5" />

                <div>
                  <p className="text-white/35 text-xs uppercase tracking-widest mb-1">{t('giving.bank')}</p>
                  <p className="text-white text-sm font-medium">Maybank</p>
                </div>

                <div className="h-px bg-white/5" />

                <div>
                  <p className="text-white/35 text-xs uppercase tracking-widest mb-1">{t('giving.accountNumber')}</p>
                  <p className="text-[#E2C272] text-base font-mono font-medium tracking-wider">
                    5-1223-206-4941
                  </p>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* QR Code placeholder */}
          <FadeUp delay={0.25}>
            <div className="bg-[#111111] border border-[#C9A84C]/25 p-8 flex flex-col items-center justify-center h-full">
              <p className="text-[#C9A84C] text-xs font-semibold tracking-[0.25em] uppercase mb-6">
                {t('giving.qrTitle')}
              </p>
              {/* TODO: Replace with actual QR code image */}
              <div
                className="w-[200px] h-[200px] bg-[#1a1a1a] border border-white/10 flex flex-col items-center justify-center gap-3"
                role="img"
                aria-label="QR Code placeholder"
              >
                {/* QR placeholder SVG */}
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" aria-hidden="true">
                  <rect x="2" y="2" width="24" height="24" rx="1" stroke="#C9A84C" strokeWidth="1" strokeOpacity="0.35" fill="none" />
                  <rect x="7" y="7" width="14" height="14" rx="0.5" fill="#C9A84C" fillOpacity="0.12" />
                  <rect x="34" y="2" width="24" height="24" rx="1" stroke="#C9A84C" strokeWidth="1" strokeOpacity="0.35" fill="none" />
                  <rect x="39" y="7" width="14" height="14" rx="0.5" fill="#C9A84C" fillOpacity="0.12" />
                  <rect x="2" y="34" width="24" height="24" rx="1" stroke="#C9A84C" strokeWidth="1" strokeOpacity="0.35" fill="none" />
                  <rect x="7" y="39" width="14" height="14" rx="0.5" fill="#C9A84C" fillOpacity="0.12" />
                  <line x1="34" y1="34" x2="58" y2="34" stroke="#C9A84C" strokeWidth="1" strokeOpacity="0.2" />
                  <line x1="34" y1="40" x2="52" y2="40" stroke="#C9A84C" strokeWidth="1" strokeOpacity="0.2" />
                  <line x1="34" y1="46" x2="58" y2="46" stroke="#C9A84C" strokeWidth="1" strokeOpacity="0.2" />
                  <line x1="34" y1="52" x2="48" y2="52" stroke="#C9A84C" strokeWidth="1" strokeOpacity="0.2" />
                  <line x1="34" y1="58" x2="58" y2="58" stroke="#C9A84C" strokeWidth="1" strokeOpacity="0.2" />
                </svg>
                <p className="text-white/25 text-[10px] tracking-wider text-center leading-snug">
                  {t('giving.qrSoon')}
                </p>
              </div>
            </div>
          </FadeUp>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/15 to-transparent" />
    </section>
  )
}

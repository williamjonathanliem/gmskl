import { useTranslation } from 'react-i18next'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import qrMaybank from '../assets/qr_maybank.png'

function FadeUp({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function Giving() {
  const { t } = useTranslation()

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#0a0a0a] pt-32 pb-20 overflow-hidden">
        <div className="page-hero-backdrop" aria-hidden="true" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(30,58,138,0.18) 0%, transparent 70%)' }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-blue-400 text-xs font-bold tracking-[0.3em] uppercase mb-4"
          >
            {t('giving.super')}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-black uppercase text-white"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', lineHeight: 1.05 }}
          >
            {t('giving.heading')}
          </motion.h1>
        </div>
      </section>

      {/* Intro — white */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <FadeUp>
            <p className="text-gray-500 text-lg leading-relaxed">
              {t('giving.intro')}
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Bank + QR — light gray */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-8">

            {/* Bank card */}
            <FadeUp>
              <div className="bg-white border border-gray-200 p-8 h-full">
                <p className="text-blue-800 text-[10px] font-bold tracking-[0.25em] uppercase mb-6">
                  {t('giving.bankTitle')}
                </p>
                <div className="space-y-5">
                  <div>
                    <p className="text-gray-400 text-[10px] uppercase tracking-widest mb-1">{t('giving.accountName')}</p>
                    <p className="font-bold text-gray-900 text-sm leading-snug">
                      GMS KUALA LUMPUR<br />GOSPEL MISSION STEWARDS
                    </p>
                  </div>
                  <div className="h-px bg-gray-100" />
                  <div>
                    <p className="text-gray-400 text-[10px] uppercase tracking-widest mb-1">{t('giving.bank')}</p>
                    <p className="font-bold text-gray-900 text-sm">Maybank</p>
                  </div>
                  <div className="h-px bg-gray-100" />
                  <div>
                    <p className="text-gray-400 text-[10px] uppercase tracking-widest mb-1">{t('giving.accountNumber')}</p>
                    <p className="font-mono font-bold text-blue-900 text-xl tracking-wider">5-1223-206-4941</p>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* QR placeholder */}
            <FadeUp delay={0.1}>
              <div className="bg-white border border-gray-200 p-8 flex flex-col items-center justify-center h-full">
                <p className="text-blue-800 text-[10px] font-bold tracking-[0.25em] uppercase mb-6">
                  {t('giving.qrTitle')}
                </p>
                <img
                  src={qrMaybank}
                  alt="Maybank QR Code"
                  className="w-52 h-52 object-contain"
                />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Quote strip — blue */}
      <section className="bg-blue-800 py-16 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <FadeUp>
            <p className="text-white text-xl font-light italic leading-relaxed">
              "{t('giving.quote')}"
            </p>
          </FadeUp>
        </div>
      </section>
    </>
  )
}

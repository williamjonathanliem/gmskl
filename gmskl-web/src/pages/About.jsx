import { useTranslation } from 'react-i18next'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import white_logo from '../assets/white_logo.png'

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

function PageHero({ title, sub }) {
  return (
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
          {sub}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-black uppercase text-white"
          style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', lineHeight: 1.05 }}
        >
          {title}
        </motion.h1>
      </div>
    </section>
  )
}

export default function About() {
  const { t } = useTranslation()

  return (
    <>
      <PageHero title={t('about.pageTitle')} sub={t('about.pageSuper')} />

      {/* ── Who We Are — dark ─────────────────────────── */}
      <section className="bg-[#0f0f0f] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <p className="text-white/40 text-xs font-bold tracking-[0.25em] uppercase mb-5">
                {t('about.whoWeAreLabel')}
              </p>
              <p className="text-white/80 text-xl leading-relaxed font-light">
                {t('about.body')}
              </p>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div className="flex justify-center items-center py-8">
                <img
                  src={white_logo}
                  alt="GMS Church Kuala Lumpur"
                  className="w-full max-w-xs h-auto object-contain"
                />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Vision / Mission — white ───────────────────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            <FadeUp className="pr-0 md:pr-16 pb-12 md:pb-0">
              <p className="text-gray-400 text-xs font-bold tracking-[0.25em] uppercase mb-5">
                {t('visionMission.visionLabel')}
              </p>
              <h2 className="font-black uppercase leading-tight text-blue-900"
                style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
                {t('visionMission.vision')}
              </h2>
            </FadeUp>
            <FadeUp delay={0.1} className="pl-0 md:pl-16 pt-12 md:pt-0">
              <p className="text-gray-400 text-xs font-bold tracking-[0.25em] uppercase mb-5">
                {t('visionMission.missionLabel')}
              </p>
              <h2 className="font-black uppercase leading-tight text-blue-900"
                style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
                {t('visionMission.mission')}
              </h2>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Pastor — split dark / blue ─────────────────── */}
      <section className="grid md:grid-cols-2 min-h-[500px]" aria-label="Our pastor">

        {/* Left: logo on dark */}
        <div className="relative bg-[#111111] flex items-end p-8 lg:p-12 min-h-[280px] md:min-h-0 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center p-12" aria-hidden="true">
            <img
              src={white_logo}
              alt=""
              className="w-full max-w-[220px] h-auto object-contain opacity-15"
            />
          </div>
          <div className="relative z-10">
            <p className="text-white/30 text-[10px] font-bold tracking-[0.25em] uppercase mb-1">
              {t('pastor.label')}
            </p>
            <p className="text-white text-2xl font-bold">{t('pastor.name')}</p>
          </div>
        </div>

        {/* Right: blue */}
        <div className="bg-blue-800 flex flex-col justify-center p-8 lg:p-14">
          <p className="text-blue-300 text-[10px] font-bold tracking-[0.25em] uppercase mb-4">
            {t('pastor.label')}
          </p>
          <h2 className="font-black uppercase text-white text-3xl mb-6">
            {t('pastor.name')}
          </h2>
          <p className="text-blue-100 text-sm leading-relaxed mb-8">
            {t('pastor.bio')}
          </p>
          <div className="flex flex-wrap gap-3">
            {['Instagram', 'YouTube'].map((s) => (
              <a
                key={s}
                href="#"
                className="border border-white/30 hover:border-white text-white text-xs font-bold tracking-widest uppercase px-5 py-2 rounded-full transition-all duration-200"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import AnnouncementBar from '../components/AnnouncementBar'
import heroBg from '../assets/hero.png'
// import welcomeHome from '../assets/welcome_home.png' // ← uncomment when asset is ready

/* ── Shared animation wrapper ─────────────────────────── */
function FadeUp({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* ── 1. HERO ──────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden" aria-label="Hero">

      {/* ── BACKGROUND LAYER ────────────────────────────────────
          Currently: static fallback image.
          When ready, replace the <img> below with:

          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay muted loop playsInline
            poster={heroBg}
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
      ──────────────────────────────────────────────────────── */}
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      />

      {/* ── WELCOME HOME OVERLAY ────────────────────────────────
          Transparent PNG centered over the background/video.
          Steps to activate:
            1. Drop welcome_home.png into src/assets/
            2. Uncomment the import at the top of this file
            3. Uncomment the <img> below
      ──────────────────────────────────────────────────────── */}
      {/*
      <img
        src={welcomeHome}
        alt="Welcome Home"
        className="absolute inset-0 m-auto w-[min(80%,720px)] h-auto object-contain pointer-events-none z-10"
      />
      */}

    </section>
  )
}

/* ── 2. ABOUT TEASER (dark, full-bleed) ───────────────── */
function AboutTeaser() {
  const { t } = useTranslation()
  return (
    <section className="relative bg-[#0f0f0f] py-20 lg:py-28 overflow-hidden">
      {/* Large dimmed background text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-black italic text-white/[0.03]"
          style={{ fontSize: 'clamp(8rem, 20vw, 22rem)', lineHeight: 1 }}
        >
          GMS
        </span>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10 text-center">
        <FadeUp>
          <p className="text-white/40 text-xs font-bold tracking-[0.3em] uppercase mb-6">
            Kuala Lumpur, Malaysia
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <p className="text-white/80 text-xl sm:text-2xl lg:text-3xl font-light leading-relaxed tracking-wide uppercase">
            {t('about.tagline')}
          </p>
        </FadeUp>
        <FadeUp delay={0.25}>
          <Link
            to="/about"
            className="inline-block mt-10 border border-white/25 hover:border-white text-white hover:bg-white/5 text-xs font-bold tracking-[0.2em] uppercase px-8 py-3 rounded-full transition-all duration-200"
          >
            {t('home.learnMore')}
          </Link>
        </FadeUp>
      </div>
    </section>
  )
}

/* ── 3. VISION / MISSION (white) ─────────────────────── */
function VisionMission() {
  const { t } = useTranslation()
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-200">

          <FadeUp className="pr-0 md:pr-16 pb-12 md:pb-0">
            <p className="text-gray-400 text-xs font-bold tracking-[0.25em] uppercase mb-5">
              {t('visionMission.visionLabel')}
            </p>
            <h2
              className="font-black uppercase leading-tight text-blue-900"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
            >
              {t('visionMission.vision')}
            </h2>
          </FadeUp>

          <FadeUp delay={0.1} className="pl-0 md:pl-16 pt-12 md:pt-0">
            <p className="text-gray-400 text-xs font-bold tracking-[0.25em] uppercase mb-5">
              {t('visionMission.missionLabel')}
            </p>
            <h2
              className="font-black uppercase leading-tight text-blue-900"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
            >
              {t('visionMission.mission')}
            </h2>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}

/* ── 4. SERVICES TEASER (white) ──────────────────────── */
function ServicesTeaser() {
  const { t } = useTranslation()
  const ministries = [
    { key: 'eaglekidz', color: 'bg-blue-800', path: '/services#eaglekidz' },
    { key: 'aog',        color: 'bg-blue-900', path: '/services#aog' },
    { key: 'family',     color: 'bg-gray-900',  path: '/services#family' },
  ]
  return (
    <section className="bg-gray-50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <FadeUp className="mb-12">
          <h2
            className="font-black uppercase text-gray-900"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            {t('home.ourServices')}
          </h2>
        </FadeUp>

        <div className="grid sm:grid-cols-3 gap-6">
          {ministries.map(({ key, color, path }, i) => (
            <FadeUp key={key} delay={i * 0.1}>
              <Link
                to={path}
                className={`${color} text-white block p-8 hover:opacity-90 transition-opacity duration-200 group`}
              >
                <h3 className="font-black text-xl uppercase tracking-wide mb-2">
                  {t(`services.${key}.name`)}
                </h3>
                <p className="text-white/60 text-sm mb-6">
                  {t(`services.${key}.tagline`)}
                </p>
                <span className="text-white/80 group-hover:text-white text-xs font-bold tracking-widest uppercase transition-colors">
                  {t('home.viewSchedule')} →
                </span>
              </Link>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── 5. CONNECT GROUP TEASER ─────────────────────────── */
function ConnectGroupTeaser() {
  const { t } = useTranslation()
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Photo placeholder grid */}
          <FadeUp>
            <div className="grid grid-cols-3 gap-2">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className={`aspect-square ${
                    i % 3 === 0 ? 'bg-gray-200' : i % 3 === 1 ? 'bg-gray-300' : 'bg-gray-100'
                  } flex items-center justify-center`}
                  aria-hidden="true"
                >
                  {/* TODO: Replace with actual Connect Group photos */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle cx="12" cy="8" r="4" fill="#9ca3af" />
                    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="#9ca3af" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                  </svg>
                </div>
              ))}
            </div>
          </FadeUp>

          <FadeUp delay={0.15}>
            <h2
              className="font-black uppercase text-gray-900 mb-6"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              {t('connectGroup.heading')}
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-8">
              {t('connectGroup.body')}
            </p>
            <Link
              to="/connect-group"
              className="inline-block bg-blue-800 hover:bg-blue-700 text-white font-semibold text-sm tracking-wide px-8 py-3.5 rounded-full transition-all duration-200"
            >
              {t('connectGroup.cta')}
            </Link>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}

/* ── 6. PASTOR TEASER (split dark / blue) ─────────────── */
function PastorTeaser() {
  const { t } = useTranslation()
  return (
    <section className="grid md:grid-cols-2 min-h-[480px]" aria-label="Our pastor">

      {/* Left: dark photo placeholder */}
      <div className="relative bg-[#111111] flex items-end p-8 lg:p-12 min-h-[300px] md:min-h-0 overflow-hidden">
        {/* Silhouette placeholder */}
        {/* TODO: Replace with actual Ps. Oscar Andi photo */}
        <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
          <svg
            width="220" height="320"
            viewBox="0 0 220 320"
            fill="none"
            opacity="0.18"
            aria-hidden="true"
          >
            <ellipse cx="110" cy="90" rx="55" ry="65" fill="white" />
            <path d="M10 320 C10 230 210 230 210 320" fill="white" />
          </svg>
        </div>
        <div className="relative z-10">
          <p className="text-white/30 text-[10px] font-bold tracking-[0.25em] uppercase mb-1">
            {t('pastor.label')}
          </p>
          <p className="text-white text-2xl font-bold">{t('pastor.name')}</p>
        </div>
      </div>

      {/* Right: blue */}
      <div className="bg-blue-800 flex flex-col justify-center p-8 lg:p-12">
        <p className="text-blue-300 text-[10px] font-bold tracking-[0.25em] uppercase mb-4">
          {t('pastor.label')}
        </p>
        <h2
          className="font-black uppercase text-white leading-tight mb-6"
          style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)' }}
        >
          {t('pastor.name')}
        </h2>
        <p className="text-blue-200 text-sm leading-relaxed mb-8 line-clamp-4">
          {t('pastor.bio')}
        </p>
        <Link
          to="/about"
          className="self-start border border-white/30 hover:border-white text-white text-xs font-bold tracking-widest uppercase px-6 py-2.5 rounded-full transition-all duration-200"
        >
          {t('home.seeMore')}
        </Link>
      </div>
    </section>
  )
}

/* ── 7. GIVING TEASER (dark) ─────────────────────────── */
function GivingTeaser() {
  const { t } = useTranslation()
  return (
    <section className="bg-[#0a0a0a] py-20 lg:py-24 text-center">
      <div className="max-w-2xl mx-auto px-6 lg:px-10">
        <FadeUp>
          <h2
            className="font-black uppercase text-white mb-4"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            {t('giving.heading')}
          </h2>
        </FadeUp>
        <FadeUp delay={0.1}>
          <p className="text-white/50 text-sm leading-relaxed mb-8">
            {t('giving.intro')}
          </p>
        </FadeUp>
        <FadeUp delay={0.2}>
          <Link
            to="/giving"
            className="inline-block bg-blue-800 hover:bg-blue-700 text-white font-semibold text-sm tracking-wide px-8 py-3.5 rounded-full transition-all duration-200"
          >
            {t('home.giveNow')}
          </Link>
        </FadeUp>
      </div>
    </section>
  )
}

/* ── PAGE EXPORT ─────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <Hero />
      <AnnouncementBar />
      <AboutTeaser />
      <VisionMission />
      <ServicesTeaser />
      <ConnectGroupTeaser />
      <PastorTeaser />
      <GivingTeaser />
    </>
  )
}

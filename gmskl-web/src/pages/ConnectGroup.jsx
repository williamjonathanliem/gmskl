import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion, useInView } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

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

/* Colors stay in JS — not translatable */
const CATEGORY_COLORS = ['bg-blue-800', 'bg-blue-900', 'bg-gray-900']

/* ── FAQ accordion item ───────────────────────────────── */
function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        className="w-full text-left py-5 flex items-center justify-between gap-4 group"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-bold text-sm uppercase tracking-wide text-gray-900 group-hover:text-blue-800 transition-colors duration-150">
          {q}
        </span>
        <ChevronDown
          size={16}
          className={`flex-shrink-0 text-gray-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <p className="pb-5 text-gray-500 text-sm leading-relaxed pr-8">
          {a}
        </p>
      )}
    </div>
  )
}

/* ── Page ─────────────────────────────────────────────── */
export default function ConnectGroup() {
  const { t } = useTranslation()

  const whyReasons  = t('cg.whyJoin.reasons',   { returnObjects: true })
  const categories  = t('cg.categories.items',   { returnObjects: true }).map((cat, i) => ({ ...cat, color: CATEGORY_COLORS[i] }))
  const steps       = t('cg.howToJoin.steps',    { returnObjects: true })
  const faqItems    = t('cg.faq.items',          { returnObjects: true })

  const navItems = [
    { label: t('cg.nav.what'),       href: '#what-is-cg' },
    { label: t('cg.nav.why'),        href: '#why-cg' },
    { label: t('cg.nav.categories'), href: '#category-cg' },
    { label: t('cg.nav.how'),        href: '#how-to-join-cg' },
  ]

  return (
    <>
      {/* ── Hero ──────────────────────────────────────── */}
      <section className="relative bg-[#0a0a0a] pt-32 pb-24 overflow-hidden text-center">
        <div className="page-hero-backdrop" aria-hidden="true" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(30,58,138,0.25) 0%, transparent 70%)' }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-blue-400 text-xs font-bold tracking-[0.3em] uppercase mb-4"
          >
            {t('cg.heroSuper')}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-black uppercase text-white mb-5"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', lineHeight: 1.05 }}
          >
            {t('cg.heroTitle')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white/45 text-sm tracking-[0.2em] uppercase"
          >
            {t('cg.heroSub')}
          </motion.p>
        </div>
      </section>

      {/* ── Sticky internal nav ───────────────────────── */}
      <nav
        className="sticky top-[60px] z-40 bg-white border-b border-gray-100 overflow-x-auto"
        aria-label="Page sections"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex">
          {navItems.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="flex-shrink-0 text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 hover:text-blue-800 px-6 py-4 border-b-2 border-transparent hover:border-blue-800 transition-all duration-150"
            >
              {label}
            </a>
          ))}
        </div>
      </nav>

      {/* ── What is CG ────────────────────────────────── */}
      <section id="what-is-cg" className="bg-white py-20 lg:py-28 scroll-mt-[104px]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Photo placeholder */}
            <FadeUp>
              <div className="aspect-[4/3] bg-gray-100 flex items-center justify-center" aria-hidden="true">
                {/* TODO: Replace with CG community photo */}
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" aria-hidden="true">
                  <circle cx="20" cy="20" r="10" fill="#d1d5db" />
                  <circle cx="40" cy="20" r="10" fill="#e5e7eb" />
                  <path d="M4 52c0-9 7-15 16-15s16 6 16 15" fill="#d1d5db" />
                  <path d="M28 52c0-9 7-15 16-15s16 6 16 15" fill="#e5e7eb" />
                </svg>
              </div>
            </FadeUp>

            <FadeUp delay={0.15}>
              <p className="text-blue-800 text-[10px] font-bold tracking-[0.3em] uppercase mb-4">
                {t('cg.whatIs.super')}
              </p>
              <h2
                className="font-black uppercase text-gray-900 leading-tight mb-6"
                style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
              >
                {t('cg.whatIs.heading')}
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-4">
                {t('cg.whatIs.body1')}
              </p>
              <p className="text-gray-500 text-base leading-relaxed mb-8">
                {t('cg.whatIs.body2')}
              </p>
              <Link
                to="/contact"
                className="inline-block bg-blue-800 hover:bg-blue-700 text-white font-semibold text-sm tracking-wide px-8 py-3.5 rounded-full transition-all duration-200"
              >
                {t('cg.whatIs.cta')}
              </Link>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Scripture strip ───────────────────────────── */}
      <section className="bg-blue-800 py-16 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <FadeUp>
            <p className="text-white text-xl sm:text-2xl font-light italic leading-relaxed mb-4">
              {t('cg.scripture.verse')}
            </p>
            <p className="text-blue-300 text-xs font-bold tracking-[0.25em] uppercase">
              {t('cg.scripture.ref')}
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── Why Join ──────────────────────────────────── */}
      <section id="why-cg" className="bg-[#0f0f0f] py-20 lg:py-28 scroll-mt-[104px]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeUp className="mb-14 text-center">
            <p className="text-blue-400 text-[10px] font-bold tracking-[0.3em] uppercase mb-4">
              {t('cg.whyJoin.super')}
            </p>
            <h2
              className="font-black uppercase text-white"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
            >
              {t('cg.whyJoin.heading')}
            </h2>
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyReasons.map(({ title, desc }, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <div className="border border-white/10 p-8 hover:border-white/25 transition-colors duration-200 h-full">
                  <p className="text-white/20 text-xs font-bold tracking-[0.3em] uppercase mb-4">0{i + 1}</p>
                  <h3 className="font-black uppercase text-white text-lg mb-3">{title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
                </div>
              </FadeUp>
            ))}
            <FadeUp delay={whyReasons.length * 0.08}>
              <div className="bg-blue-800 p-8 flex items-center sm:col-span-2 lg:col-span-1">
                <p className="text-blue-100 text-sm leading-relaxed italic">
                  "{t('cg.whyJoin.quote')}"
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── CG Categories ─────────────────────────────── */}
      <section id="category-cg" className="bg-gray-50 py-20 lg:py-28 scroll-mt-[104px]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeUp className="mb-14 text-center">
            <p className="text-blue-800 text-[10px] font-bold tracking-[0.3em] uppercase mb-4">
              {t('cg.categories.super')}
            </p>
            <h2
              className="font-black uppercase text-gray-900"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
            >
              {t('cg.categories.heading')}
            </h2>
          </FadeUp>

          <div className="space-y-6">
            {categories.map(({ name, sub, desc, groups, color }, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="grid md:grid-cols-2 overflow-hidden">
                  {/* Colored info block */}
                  <div className={`${color} p-8 lg:p-12 flex flex-col justify-between min-h-[280px]`}>
                    <div>
                      <p className="text-white/50 text-[10px] font-bold tracking-[0.3em] uppercase mb-2">{sub}</p>
                      <h3 className="font-black uppercase text-white mb-4"
                          style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}>
                        {name}
                      </h3>
                      <p className="text-white/70 text-sm leading-relaxed">{desc}</p>
                    </div>
                    <Link
                      to="/contact"
                      className="self-start mt-8 border border-white/30 hover:border-white text-white text-xs font-bold tracking-widest uppercase px-6 py-2.5 rounded-full transition-all duration-200"
                    >
                      {t('cg.categories.joinCta')}
                    </Link>
                  </div>
                  {/* Age groups */}
                  <div className="bg-white p-8 lg:p-12 flex flex-col justify-center">
                    <p className="text-gray-400 text-[10px] font-bold tracking-[0.25em] uppercase mb-6">
                      {t('cg.categories.ageGroupsLabel')}
                    </p>
                    <div className="space-y-0">
                      {groups.map(({ name: gName, ages }, gi) => (
                        <div
                          key={gi}
                          className="flex items-start gap-5 py-4 border-b border-gray-100 last:border-0"
                        >
                          <span className="text-gray-300 text-[10px] font-bold tracking-widest mt-0.5 flex-shrink-0">
                            0{gi + 1}
                          </span>
                          <div>
                            <p className="font-black uppercase text-gray-900 text-sm">{gName}</p>
                            <p className="text-gray-400 text-xs mt-0.5">{ages}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── How to Join ───────────────────────────────── */}
      <section id="how-to-join-cg" className="bg-white py-20 lg:py-28 scroll-mt-[104px]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeUp className="mb-14 text-center">
            <p className="text-blue-800 text-[10px] font-bold tracking-[0.3em] uppercase mb-4">
              {t('cg.howToJoin.super')}
            </p>
            <h2
              className="font-black uppercase text-gray-900"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
            >
              {t('cg.howToJoin.heading')}
            </h2>
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map(({ step, title, desc }, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="text-center">
                  <p className="text-blue-800 font-black mb-4"
                     style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}>
                    {step}
                  </p>
                  <h3 className="font-black uppercase text-gray-900 text-sm tracking-wide mb-3">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.4} className="mt-14 text-center">
            <Link
              to="/contact"
              className="inline-block bg-blue-800 hover:bg-blue-700 text-white font-semibold text-sm tracking-wide px-8 py-3.5 rounded-full transition-all duration-200"
            >
              {t('cg.howToJoin.cta')}
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────── */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <FadeUp className="mb-12 text-center">
            <h2
              className="font-black uppercase text-gray-900"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
            >
              {t('cg.faq.heading')}
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="bg-white px-8 py-2">
              {faqItems.map((item, i) => (
                <FAQItem key={i} q={item.q} a={item.a} />
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────── */}
      <section className="bg-blue-800 py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <FadeUp>
            <h2
              className="font-black uppercase text-white mb-4"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
            >
              {t('cg.finalCta.heading')}
            </h2>
            <p className="text-blue-200 text-sm leading-relaxed mb-8">
              {t('cg.finalCta.body')}
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white hover:bg-blue-50 text-blue-800 font-bold text-sm tracking-wide px-8 py-3.5 rounded-full transition-all duration-200"
            >
              {t('cg.finalCta.button')}
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  )
}

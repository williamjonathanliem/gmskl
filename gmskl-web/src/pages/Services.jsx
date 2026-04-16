import { useTranslation } from 'react-i18next'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Clock } from 'lucide-react'

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

function TimeRow({ name, desc, time }) {
  return (
    <div className="flex items-start justify-between gap-4 py-4 border-b border-gray-100 last:border-0">
      <div>
        <p className="font-semibold text-gray-900 text-sm">{name}</p>
        {desc && <p className="text-gray-400 text-xs mt-0.5">{desc}</p>}
      </div>
      <div className="flex items-center gap-1.5 text-blue-800 flex-shrink-0">
        <Clock size={12} />
        <span className="text-xs font-semibold">{time}</span>
      </div>
    </div>
  )
}

function MinistryBlock({ id, title, tagline, bgColor, children }) {
  return (
    <section id={id} className="py-20 lg:py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-3 gap-10">

          {/* Left: identity */}
          <FadeUp>
            <div className={`${bgColor} text-white p-8 h-full flex flex-col justify-between`}>
              <div>
                <p className="text-white/50 text-[10px] font-bold tracking-[0.25em] uppercase mb-4">Ministry</p>
                <h2 className="font-black uppercase text-2xl leading-tight mb-4">{title}</h2>
                <p className="text-white/70 text-sm leading-relaxed">{tagline}</p>
              </div>
            </div>
          </FadeUp>

          {/* Right: schedule */}
          <FadeUp delay={0.1} className="lg:col-span-2">
            <div className="bg-white border border-gray-100 p-8">
              <p className="text-gray-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-4">
                Weekly Schedule
              </p>
              {children}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}

export default function Services() {
  const { t } = useTranslation()

  return (
    <>
      <PageHero title={t('services.pageTitle')} sub={t('services.pageSuper')} />

      {/* Eaglekidz */}
      <div className="bg-gray-50">
        <MinistryBlock
          id="eaglekidz"
          title={t('services.eaglekidz.name')}
          tagline={t('services.eaglekidz.tagline')}
          bgColor="bg-blue-800"
        >
          <TimeRow
            name={t('services.eaglekidz.littleEagle.name')}
            desc={t('services.eaglekidz.littleEagle.desc')}
            time={t('services.eaglekidz.littleEagle.time')}
          />
          <TimeRow
            name={t('services.eaglekidz.superTrooper.name')}
            desc={t('services.eaglekidz.superTrooper.desc')}
            time={t('services.eaglekidz.superTrooper.time')}
          />
          <TimeRow
            name={t('services.eaglekidz.voltage.name')}
            desc={t('services.eaglekidz.voltage.desc')}
            time={t('services.eaglekidz.voltage.time')}
          />
        </MinistryBlock>
      </div>

      {/* Army of God */}
      <div className="bg-white">
        <MinistryBlock
          id="aog"
          title={t('services.aog.name')}
          tagline={t('services.aog.tagline')}
          bgColor="bg-blue-900"
        >
          <TimeRow
            name={t('services.aog.teen.name')}
            time={t('services.aog.teen.time')}
          />
        </MinistryBlock>
      </div>

      {/* Family Service */}
      <div className="bg-gray-50">
        <MinistryBlock
          id="family"
          title={t('services.family.name')}
          tagline={t('services.family.tagline')}
          bgColor="bg-gray-900"
        >
          <TimeRow
            name={t('services.family.service1.name')}
            time={t('services.family.service1.time')}
          />
          <TimeRow
            name={t('services.family.service2.name')}
            time={t('services.family.service2.time')}
          />
        </MinistryBlock>
      </div>
    </>
  )
}

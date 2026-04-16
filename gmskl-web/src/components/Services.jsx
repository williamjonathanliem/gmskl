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
      transition={{ duration: 0.75, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function ServiceItem({ name, desc, time }) {
  return (
    <div className="flex items-start justify-between gap-4 py-3 border-b border-white/5 last:border-0">
      <div>
        <p className="text-white text-sm font-medium">{name}</p>
        {desc && <p className="text-white/40 text-xs mt-0.5">{desc}</p>}
      </div>
      <div className="flex items-center gap-1.5 text-[#C9A84C] flex-shrink-0">
        <Clock size={11} className="opacity-70" />
        <span className="text-xs font-medium tracking-wide">{time}</span>
      </div>
    </div>
  )
}

function MinistryCard({ title, children, delay = 0 }) {
  return (
    <FadeUp delay={delay}>
      <div className="bg-[#111111] border-l-2 border-[#C9A84C] p-6 h-full">
        <h3 className="font-['Cormorant_Garamond'] text-[#C9A84C] text-xl font-semibold tracking-wide mb-5">
          {title}
        </h3>
        <div className="space-y-1">
          {children}
        </div>
      </div>
    </FadeUp>
  )
}

export default function Services() {
  const { t } = useTranslation()

  return (
    <section
      id="services"
      className="relative py-28 lg:py-36 bg-[#0a0a0a]"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="text-center mb-16">
          <FadeUp>
            <p className="text-[#C9A84C] text-xs font-semibold tracking-[0.3em] uppercase mb-5">
              Service Schedule
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2
              id="services-heading"
              className="font-['Cormorant_Garamond'] text-4xl lg:text-5xl font-light text-white leading-tight mb-4"
            >
              {t('services.heading')}
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="gold-divider mt-6 mb-5" aria-hidden="true" />
          </FadeUp>
          <FadeUp delay={0.25}>
            <p className="text-white/45 text-sm tracking-wide">{t('services.subheading')}</p>
          </FadeUp>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* Eaglekidz */}
          <MinistryCard title={t('services.eaglekidz.name')} delay={0.1}>
            <ServiceItem
              name={t('services.eaglekidz.littleEagle.name')}
              desc={t('services.eaglekidz.littleEagle.desc')}
              time={t('services.eaglekidz.littleEagle.time')}
            />
            <ServiceItem
              name={t('services.eaglekidz.superTrooper.name')}
              desc={t('services.eaglekidz.superTrooper.desc')}
              time={t('services.eaglekidz.superTrooper.time')}
            />
            <ServiceItem
              name={t('services.eaglekidz.voltage.name')}
              desc={t('services.eaglekidz.voltage.desc')}
              time={t('services.eaglekidz.voltage.time')}
            />
          </MinistryCard>

          {/* Army of God */}
          <MinistryCard title={t('services.aog.name')} delay={0.2}>
            <ServiceItem
              name={t('services.aog.teen.name')}
              time={t('services.aog.teen.time')}
            />
          </MinistryCard>

          {/* Family Service */}
          <MinistryCard title={t('services.family.name')} delay={0.3}>
            <ServiceItem
              name={t('services.family.service1.name')}
              time={t('services.family.service1.time')}
            />
            <ServiceItem
              name={t('services.family.service2.name')}
              time={t('services.family.service2.time')}
            />
          </MinistryCard>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/15 to-transparent" />
    </section>
  )
}

import { useTranslation } from 'react-i18next'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, Mail } from 'lucide-react'

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

function InstagramIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

function YoutubeIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" />
    </svg>
  )
}

export default function Contact() {
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
            {t('contact.super')}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-black uppercase text-white"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', lineHeight: 1.05 }}
          >
            {t('contact.heading')}
          </motion.h1>
        </div>
      </section>

      {/* Map + Info */}
      <section className="bg-white py-0">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Left: address */}
            <FadeUp>
              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin size={14} className="text-blue-800" />
                    <span className="text-blue-800 text-[10px] font-bold tracking-[0.2em] uppercase">
                      {t('contact.addressLabel')}
                    </span>
                  </div>
                  <h2 className="font-bold text-gray-900 text-xl mb-3">{t('contact.churchName')}</h2>
                  <address className="text-gray-500 text-sm leading-loose not-italic whitespace-pre-line">
                    {t('contact.address')}
                  </address>
                </div>

                <div className="h-px bg-gray-100" />

                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Mail size={14} className="text-blue-800" />
                    <span className="text-blue-800 text-[10px] font-bold tracking-[0.2em] uppercase">
                      {t('contact.followUs')}
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <a
                      href="https://www.instagram.com/gms.kualalumpur/"
                      aria-label="GMS KL Instagram"
                      className="flex items-center gap-2 border border-gra  y-200 hover:border-blue-800 text-gray-500 hover:text-blue-800 text-xs font-bold tracking-wider uppercase px-4 py-2 rounded-full transition-all duration-200"
                    >
                      <InstagramIcon size={13} />
                      Instagram
                    </a>
                    <a
                      href="https://www.youtube.com/@GMSKualaLumpur"
                      aria-label="GMS KL YouTube"
                      className="flex items-center gap-2 border border-gray-200 hover:border-blue-800 text-gray-500 hover:text-blue-800 text-xs font-bold tracking-wider uppercase px-4 py-2 rounded-full transition-all duration-200"
                    >
                      <YoutubeIcon size={13} />
                      YouTube
                    </a>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Right: Google Maps */}
            <FadeUp delay={0.15}>
              <div className="w-full aspect-video bg-gray-100 overflow-hidden">
                <iframe
                  title={t('contact.mapTitle')}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.793369742437!2d101.63634377499303!3d3.1054893968655936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4c3e3c0f3a71%3A0x2d8af0ea8bc6ddf!2sAmcorp%20Tower%2C%20Pesiaran%20Barat%2C%20Petaling%20Jaya!5e0!3m2!1sen!2smy!4v1700000000000!5m2!1sen!2smy"
                  width="100%"
                  height="100%"
                  className="w-full h-full"
                  style={{ border: 0, filter: 'grayscale(20%) contrast(90%)' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Blue CTA strip */}
      <section className="bg-blue-800 py-16 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <FadeUp>
            <h2 className="font-black uppercase text-white text-3xl mb-4">
              {t('contact.ctaHeading')}
            </h2>
            <p className="text-blue-200 text-sm mb-8">{t('contact.ctaBody')}</p>
            {/* TODO: Replace with actual contact email */}
            <a
              href="mailto:gms.kl@placeholder.com"
              className="inline-block bg-white text-blue-900 font-bold text-sm tracking-wide px-8 py-3.5 rounded-full hover:bg-blue-50 transition-all duration-200"
            >
              {t('contact.ctaButton')}
            </a>
          </FadeUp>
        </div>
      </section>
    </>
  )
}

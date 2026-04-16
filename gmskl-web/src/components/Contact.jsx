import { useTranslation } from 'react-i18next'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin } from 'lucide-react'

// Inline brand icons (lucide-react does not include brand icons)
function InstagramIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
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

export default function Contact() {
  const { t } = useTranslation()

  return (
    <section
      id="contact"
      className="relative py-28 lg:py-36 bg-[#0a0a0a]"
      aria-labelledby="contact-heading"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/15 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}
        <div className="mb-14 text-center">
          <FadeUp>
            <p className="text-[#C9A84C] text-xs font-semibold tracking-[0.3em] uppercase mb-5">
              Location &amp; Contact
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2
              id="contact-heading"
              className="font-['Cormorant_Garamond'] text-4xl lg:text-5xl font-light text-white"
            >
              {t('contact.heading')}
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="gold-divider mt-6" aria-hidden="true" />
          </FadeUp>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left: Address */}
          <FadeUp delay={0.15}>
            <div className="bg-[#111111] border border-[#C9A84C]/15 p-8 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <MapPin size={14} className="text-[#C9A84C]" />
                  <span className="text-[#C9A84C] text-xs font-semibold tracking-[0.2em] uppercase">
                    Address
                  </span>
                </div>

                <p className="font-['Cormorant_Garamond'] text-white text-xl font-medium mb-4">
                  {t('contact.churchName')}
                </p>

                <address className="text-white/55 text-sm leading-relaxed not-italic font-light whitespace-pre-line">
                  {t('contact.address')}
                </address>
              </div>

              {/* Social links */}
              <div className="mt-10">
                <p className="text-white/35 text-xs uppercase tracking-widest mb-4">
                  {t('contact.followUs')}
                </p>
                <div className="flex gap-4">
                  {/* TODO: Replace with actual Instagram URL */}
                  <a
                    href="#"
                    aria-label="GMS KL Instagram"
                    className="w-10 h-10 border border-white/10 hover:border-[#C9A84C]/50 flex items-center justify-center text-white/40 hover:text-[#C9A84C] transition-all duration-200"
                  >
                    <InstagramIcon size={16} />
                  </a>
                  {/* TODO: Replace with actual YouTube URL */}
                  <a
                    href="#"
                    aria-label="GMS KL YouTube"
                    className="w-10 h-10 border border-white/10 hover:border-[#C9A84C]/50 flex items-center justify-center text-white/40 hover:text-[#C9A84C] transition-all duration-200"
                  >
                    <YoutubeIcon size={16} />
                  </a>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Right: Google Maps embed */}
          <FadeUp delay={0.25}>
            <div className="bg-[#111111] border border-[#C9A84C]/15 overflow-hidden h-full min-h-[320px]">
              <iframe
                title={t('contact.mapTitle')}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.793369742437!2d101.63634377499303!3d3.1054893968655936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4c3e3c0f3a71%3A0x2d8af0ea8bc6ddf!2sAmcorp%20Tower%2C%20Pesiaran%20Barat%2C%20Petaling%20Jaya!5e0!3m2!1sen!2smy!4v1700000000000!5m2!1sen!2smy"
                width="100%"
                height="100%"
                className="w-full h-full min-h-[320px]"
                style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(85%)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </FadeUp>

        </div>
      </div>
    </section>
  )
}

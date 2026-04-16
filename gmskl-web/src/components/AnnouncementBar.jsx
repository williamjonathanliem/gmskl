import { useTranslation } from 'react-i18next'

export default function AnnouncementBar() {
  const { t } = useTranslation()
  const text = t('announcement.text')
  // Repeat enough times so the loop is seamless
  const repeated = Array(8).fill(text).join('  ·  ')

  return (
    <div
      className="bg-blue-800 overflow-hidden py-3"
      aria-label="Announcement"
      role="marquee"
    >
      <div className="ticker-track">
        <span className="text-white text-xs font-semibold tracking-[0.2em] uppercase whitespace-nowrap pr-8">
          {repeated}
        </span>
        {/* Duplicate for seamless loop */}
        <span className="text-white text-xs font-semibold tracking-[0.2em] uppercase whitespace-nowrap pr-8" aria-hidden="true">
          {repeated}
        </span>
      </div>
    </div>
  )
}

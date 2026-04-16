import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
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

/* ── Data ─────────────────────────────────────────────── */
const WHY_JOIN = [
  { title: "God's Calling",      desc: "To be discipled and to disciple others." },
  { title: 'Faith Growth',       desc: 'Becoming more spiritually mature through intentional discipleship.' },
  { title: 'Community of Love',  desc: 'A community that loves one another and is always there for each other.' },
  { title: 'Spiritual Support',  desc: 'Mutual support and encouragement through prayer, the Word, and fellowship.' },
  { title: 'Christlike Service', desc: "Becoming a blessing and Christ's answer for others." },
]

const CG_CATEGORIES = [
  {
    id: 'eaglekidz',
    name: 'CG Eaglekidz',
    sub: "Children's Connect Group",
    desc: 'Childhood is the most important time to lay the right foundation of faith. CG Eaglekidz introduces God\'s love to children in a fun and meaningful way.',
    color: 'bg-blue-800',
    groups: [
      { name: 'Allstar',       ages: 'Ages 3–6 years' },
      { name: 'Super Trooper', ages: 'Ages 7–9 years' },
      { name: 'Voltage',       ages: 'Ages 10–12 years' },
    ],
  },
  {
    id: 'aog',
    name: 'CG Army of God',
    sub: 'Young Adults Connect Group',
    desc: 'Young people are like arrows shot by a warrior. The Army of God CG provides the right and healthy environment for young people to grow strong in faith.',
    color: 'bg-blue-900',
    groups: [
      { name: 'Teens', ages: 'Grades 8–12' },
      { name: 'Youth', ages: 'University Students' },
    ],
  },
  {
    id: 'adult',
    name: 'CG Adult',
    sub: 'Adult Connect Group',
    desc: 'The Adult CG provides a place for adults to keep growing in faith, build strong Christ-centered families, and support one another through every stage of life.',
    color: 'bg-gray-900',
    groups: [
      { name: 'Young Adult', ages: 'Young professionals & unmarried' },
      { name: 'Family',      ages: 'Married couples' },
      { name: 'Senior',      ages: 'Ages 55 and above' },
    ],
  },
]

const HOW_TO_JOIN = [
  { step: '01', title: 'Fill Out the Form',              desc: 'Complete your personal information and we will help you find the right CG for you.' },
  { step: '02', title: 'Choose a CG Category',           desc: 'Select the category based on your age so that the CG becomes a community relevant to you.' },
  { step: '03', title: 'The CG Team Will Contact You',   desc: 'We are ready to welcome you into CG gatherings full of joy, warmth, and togetherness.' },
  { step: '04', title: 'Join & Grow!',                   desc: 'Experience the blessing of community as you grow in faith alongside your CG family.' },
]

const FAQ_ITEMS = [
  { q: 'What do we do in a Connect Group?',                    a: 'In a CG, we worship, study the Word, share testimonies, pray for one another, and build meaningful relationships.' },
  { q: 'Who can join a Connect Group?',                        a: 'Anyone! Whether you are new to church or have been attending for years, there is a CG for you.' },
  { q: 'Are there any special requirements to join?',          a: 'No special requirements — just a willing heart to grow and connect with others.' },
  { q: 'Is there a cost to join?',                             a: 'No, joining a Connect Group is completely free.' },
  { q: 'When and how often are CG meetings held?',             a: 'Most CGs meet weekly or bi-weekly. Your CG leader will share the exact schedule when you join.' },
  { q: 'Where are Connect Groups usually held?',               a: "CGs typically meet in members' homes, creating a warm and personal environment." },
  { q: 'Can I invite friends or family?',                      a: 'Absolutely! In fact, we encourage you to bring people you care about.' },
  { q: 'Can I join more than one Connect Group?',              a: 'We recommend starting with one CG to build deep relationships before considering additional groups.' },
]

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
  const NAV_ITEMS = [
    { label: 'What is CG?',    href: '#what-is-cg' },
    { label: 'Why Join?',      href: '#why-cg' },
    { label: 'CG Categories',  href: '#category-cg' },
    { label: 'How to Join',    href: '#how-to-join-cg' },
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
            Connect Group GMS
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-black uppercase text-white mb-5"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', lineHeight: 1.05 }}
          >
            Connect Group
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white/45 text-sm tracking-[0.2em] uppercase"
          >
            A Dynamic Home For Every Disciple
          </motion.p>
        </div>
      </section>

      {/* ── Sticky internal nav ───────────────────────── */}
      <nav
        className="sticky top-[60px] z-40 bg-white border-b border-gray-100 overflow-x-auto"
        aria-label="Page sections"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex">
          {NAV_ITEMS.map(({ label, href }) => (
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
                What is Connect Group?
              </p>
              <h2
                className="font-black uppercase text-gray-900 leading-tight mb-6"
                style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
              >
                What is Connect Group (CG)?
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-4">
                <strong className="text-gray-700">Connect Group</strong> is a small community where you grow in faith, are discipled, and become more like Christ. Here, you are known, loved, and supported.
              </p>
              <p className="text-gray-500 text-base leading-relaxed mb-8">
                Each CG consists of <strong className="text-gray-700">6–15 people</strong> who meet regularly to worship, study the Word, pray for one another, and share life together. Life is more meaningful when lived together — find your spiritual family at Connect Group GMS KL!
              </p>
              <Link
                to="/contact"
                className="inline-block bg-blue-800 hover:bg-blue-700 text-white font-semibold text-sm tracking-wide px-8 py-3.5 rounded-full transition-all duration-200"
              >
                Join CG →
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
              "And let us consider how to stir up one another to love and good works, not neglecting to meet together, as is the habit of some, but encouraging one another."
            </p>
            <p className="text-blue-300 text-xs font-bold tracking-[0.25em] uppercase">
              Hebrews 10:24–25
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── Why Join ──────────────────────────────────── */}
      <section id="why-cg" className="bg-[#0f0f0f] py-20 lg:py-28 scroll-mt-[104px]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeUp className="mb-14 text-center">
            <p className="text-blue-400 text-[10px] font-bold tracking-[0.3em] uppercase mb-4">Reasons</p>
            <h2
              className="font-black uppercase text-white"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
            >
              Why Should We Be Planted in a CG?
            </h2>
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_JOIN.map(({ title, desc }, i) => (
              <FadeUp key={title} delay={i * 0.08}>
                <div className="border border-white/10 p-8 hover:border-white/25 transition-colors duration-200 h-full">
                  <p className="text-white/20 text-xs font-bold tracking-[0.3em] uppercase mb-4">0{i + 1}</p>
                  <h3 className="font-black uppercase text-white text-lg mb-3">{title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
                </div>
              </FadeUp>
            ))}
            <FadeUp delay={WHY_JOIN.length * 0.08}>
              <div className="bg-blue-800 p-8 flex items-center sm:col-span-2 lg:col-span-1">
                <p className="text-blue-100 text-sm leading-relaxed italic">
                  "Many people have experienced growing faith, transformed lives, and blessings through Connect Groups."
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
            <p className="text-blue-800 text-[10px] font-bold tracking-[0.3em] uppercase mb-4">Categories</p>
            <h2
              className="font-black uppercase text-gray-900"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
            >
              CG Categories
            </h2>
          </FadeUp>

          <div className="space-y-6">
            {CG_CATEGORIES.map(({ id, name, sub, desc, groups, color }, i) => (
              <FadeUp key={id} delay={i * 0.1}>
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
                      Join CG →
                    </Link>
                  </div>
                  {/* Age groups */}
                  <div className="bg-white p-8 lg:p-12 flex flex-col justify-center">
                    <p className="text-gray-400 text-[10px] font-bold tracking-[0.25em] uppercase mb-6">
                      Age Groups
                    </p>
                    <div className="space-y-0">
                      {groups.map(({ name: gName, ages }, gi) => (
                        <div
                          key={gName}
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
            <p className="text-blue-800 text-[10px] font-bold tracking-[0.3em] uppercase mb-4">Steps</p>
            <h2
              className="font-black uppercase text-gray-900"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
            >
              How to Join a CG?
            </h2>
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {HOW_TO_JOIN.map(({ step, title, desc }, i) => (
              <FadeUp key={step} delay={i * 0.1}>
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
              Fill Out the Form →
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
              Frequently Asked Questions
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="bg-white px-8 py-2">
              {FAQ_ITEMS.map((item) => (
                <FAQItem key={item.q} {...item} />
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
              Join a CG Today
            </h2>
            <p className="text-blue-200 text-sm leading-relaxed mb-8">
              Let's be part of a spiritual family that supports one another!
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white hover:bg-blue-50 text-blue-800 font-bold text-sm tracking-wide px-8 py-3.5 rounded-full transition-all duration-200"
            >
              Join CG →
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  )
}

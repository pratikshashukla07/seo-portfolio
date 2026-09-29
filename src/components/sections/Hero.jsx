import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-scroll';
import profile from '../../data/profile.json';

const { person, hero } = profile;

const CHIP_POSITIONS = [
  'top-[0%] left-[0%]',
  'top-[15%] right-[0%]',
  'bottom-[5%] right-[10%]',
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12"
    >
      {/* ─── LIGHT MODE BACKGROUND ─── */}
      <div
        className="absolute inset-0 z-0 dark:opacity-0 transition-opacity duration-500"
        style={{
          backgroundImage: `radial-gradient(circle, var(--color-border) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
          opacity: 0.5,
        }}
      />
      <div
        className="absolute inset-0 z-0 dark:opacity-0 opacity-40 transition-opacity duration-500"
        style={{
          background: 'radial-gradient(ellipse at 20% 30%, var(--color-accent-light) 0%, transparent 40%), radial-gradient(ellipse at 80% 80%, #EFF6FF 0%, transparent 40%)',
        }}
      />

      {/* ─── DARK MODE BACKGROUND ─── */}
      <div className="absolute inset-0 z-0 opacity-0 dark:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-[var(--color-bg)]" />
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute w-[600px] h-[600px] rounded-full blur-[120px] animate-[meshOrb1_12s_ease-in-out_infinite]"
            style={{ background: 'rgba(59, 130, 246, 0.08)', top: '-10%', left: '-10%' }}
          />
          <div
            className="absolute w-[500px] h-[500px] rounded-full blur-[120px] animate-[meshOrb2_15s_ease-in-out_infinite]"
            style={{ background: 'rgba(37, 99, 235, 0.06)', bottom: '-15%', right: '-5%' }}
          />
        </div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(59,130,246,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.03) 1px, transparent 1px)`,
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      {/* ─── MAIN CONTENT CONTAINER ─── */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Copy */}
          <div className="col-span-1 lg:col-span-6 relative">
            
            {/* Scroll Indicator (Desktop only) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
              className="hidden lg:flex absolute -left-12 top-1/2 -translate-y-1/2 flex-col items-center gap-4"
            >
              <span 
                className="text-[10px] font-bold tracking-widest text-[var(--color-text-tertiary)] uppercase whitespace-nowrap"
                style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
              >
                Scroll to Explore
              </span>
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <ChevronDown className="w-4 h-4 text-[var(--color-text-tertiary)]" />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6"
            >
              <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-accent)]">
                {person.headline}
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] tracking-tight text-[var(--color-text-primary)]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {hero.headlineLines.map((line, i) => (
                <motion.span
                  key={line.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className={`block ${line.accent ? 'text-[var(--color-accent)]' : ''}`}
                >
                  {line.text}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-6 text-base sm:text-lg text-[var(--color-text-secondary)] max-w-lg leading-relaxed font-medium"
            >
              {hero.intro}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Link
                to="experience"
                smooth={true}
                offset={-80}
                duration={600}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl
                           text-sm font-bold cursor-pointer
                           bg-[var(--color-accent)] text-white
                           hover:bg-[var(--color-accent-hover)]
                           transition-all duration-200 shadow-[var(--shadow-button)]
                           hover:-translate-y-0.5"
              >
                View My Experience
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={person.resume.file}
                download={person.resume.downloadName}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl
                           text-sm font-bold cursor-pointer
                           bg-[var(--color-surface)] text-[var(--color-text-primary)]
                           border border-[var(--color-border)]
                           hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]
                           transition-all duration-200 hover:-translate-y-0.5"
              >
                Download Resume
                <Download className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Portrait + Floating Chips */}
          <div className="col-span-1 lg:col-span-6 relative mt-8 lg:mt-0 lg:h-[500px] flex items-center justify-center">
            
            {/* Profile Portrait */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative w-full max-w-[380px] z-10 lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2"
            >
              {/* Soft glow */}
              <div aria-hidden="true" className="portrait-glow absolute -inset-16 rounded-full blur-2xl" />

              {/* Dot grid accents */}
              <div aria-hidden="true" className="portrait-dots absolute -top-8 -right-8 w-32 h-32 opacity-30" />
              <div aria-hidden="true" className="portrait-dots absolute -bottom-8 -left-8 w-24 h-24 opacity-20" />

              {/* Slowly rotating ring */}
              <svg
                aria-hidden="true"
                viewBox="0 0 100 100"
                className="portrait-ring absolute -inset-10 w-[calc(100%+5rem)] h-[calc(100%+5rem)] text-[var(--color-accent)]"
              >
                <circle cx="50" cy="50" r="49" fill="none" stroke="currentColor" strokeWidth="0.25" strokeDasharray="1 3" opacity="0.6" />
                <circle cx="50" cy="1" r="1.4" fill="currentColor" />
              </svg>

              <div className="portrait-float relative">
                {/* Offset gradient backdrop */}
                <div aria-hidden="true" className="portrait-backdrop absolute inset-0 rounded-[2rem]" />

                {/* Photo */}
                <div
                  className="portrait-reveal portrait-shimmer relative overflow-hidden rounded-[2rem] translate-x-3 -translate-y-3 border-4 border-[var(--color-surface)]"
                  style={{ boxShadow: '0 24px 48px -12px rgba(37, 99, 235, 0.35)' }}
                >
                  <img
                    src={person.photo}
                    alt={person.photoAlt}
                    width="1000"
                    height="908"
                    fetchPriority="high"
                    className="block w-full h-auto object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Floating Keyword Chips */}
            {hero.chips.map((chip, i) => (
              <div
                key={i}
                className={`absolute hidden md:flex items-center gap-3 px-4 py-2.5 rounded-xl
                           text-sm font-medium
                           bg-[var(--color-surface)]/80 backdrop-blur-md border border-[var(--color-border)]
                           text-[var(--color-text-secondary)]
                           select-none pointer-events-none z-20
                           ${CHIP_POSITIONS[i]}
                           ${i === 0 ? 'animate-float' : ''}
                           ${i === 1 ? 'animate-float-delayed' : ''}
                           ${i === 2 ? 'animate-float-delayed-2' : ''}`}
                style={{
                  fontFamily: 'var(--font-mono)',
                  boxShadow: 'var(--shadow-card)',
                }}
              >
                {chip.text}
                <span className="font-bold text-[var(--color-accent)]">
                  {chip.rank}
                </span>
              </div>
            ))}
            
          </div>
        </div>
      </div>
    </section>
  );
}

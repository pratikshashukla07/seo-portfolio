import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import profile from '../../data/profile.json';
import DarkModeToggle from './DarkModeToggle';

const { person, nav: NAV_LINKS } = profile;

/**
 * Sticky navbar with:
 * - PS monogram logo (back to top)
 * - Nav links with react-scroll spy
 * - Dark mode toggle
 * - "Hire Me →" CTA (scrolls to contact)
 * - Mobile hamburger → slide-in drawer
 * - backdrop-blur + border-bottom on scroll
 */
export default function Navbar({ isDark, toggleDark }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <nav
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${scrolled
            ? 'bg-[var(--color-bg)]/90 backdrop-blur-md border-b border-[var(--color-border)] shadow-[0_1px_0_0_rgba(0,0,0,0.06)]'
            : 'bg-transparent'
          }`}
        style={{ height: '64px' }}
      >
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 lg:px-12 h-full flex items-center justify-between">
          {/* Logo — PS Monogram */}
          <Link
            to="hero"
            smooth={true}
            duration={600}
            className="cursor-pointer flex items-center gap-3 select-none"
          >
            <span
              className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold
                         bg-[var(--color-accent)] text-white"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {person.initials}
            </span>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-[var(--color-text-primary)] leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
                {person.name}
              </span>
              <span className="text-[10px] uppercase tracking-wider text-[var(--color-text-tertiary)] font-medium">
                {person.title}
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                activeClass="!text-[var(--color-accent)] !bg-[var(--color-accent-light)]"
                className="px-3 py-1.5 rounded-lg text-sm font-medium cursor-pointer
                           text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]
                           hover:bg-[var(--color-surface-raised)] transition-colors duration-200"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side: Dark toggle + CTA + Mobile hamburger */}
          <div className="flex items-center gap-2">
            <DarkModeToggle isDark={isDark} toggleDark={toggleDark} />

            {/* Hire Me CTA — desktop only */}
            <Link
              to="contact"
              smooth={true}
              offset={-80}
              duration={500}
              className="hidden lg:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl
                         text-sm font-semibold cursor-pointer
                         bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)]
                         transition-colors duration-200 shadow-[var(--shadow-button)]"
            >
              Let's Talk
              <span className="text-xs">→</span>
            </Link>

            {/* Mobile hamburger */}
            <button
              id="mobile-menu-toggle"
              className="lg:hidden p-2 rounded-xl hover:bg-[var(--color-surface-raised)] transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileOpen ? (
                <X className="w-5 h-5 text-[var(--color-text-primary)]" />
              ) : (
                <Menu className="w-5 h-5 text-[var(--color-text-primary)]" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden fixed inset-0 top-[64px] z-40 transition-all duration-300
          ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />

        {/* Drawer panel */}
        <div
          className={`absolute right-0 top-0 h-full w-[280px] bg-[var(--color-surface)]
                      border-l border-[var(--color-border)] p-6
                      transition-transform duration-300
                      ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                activeClass="!text-[var(--color-accent)] !bg-[var(--color-accent-light)]"
                className="px-4 py-3 rounded-xl text-base font-medium cursor-pointer
                           text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]
                           hover:bg-[var(--color-surface-raised)] transition-colors duration-200"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile CTA */}
            <Link
              to="contact"
              smooth={true}
              offset={-80}
              duration={500}
              className="mt-4 flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl
                         text-base font-semibold cursor-pointer
                         bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)]
                         transition-colors duration-200"
              onClick={() => setMobileOpen(false)}
            >
              Let's Talk →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

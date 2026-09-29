import { Mail, Phone } from 'lucide-react';
import profile from '../../data/profile.json';

const { person } = profile;

/* Inline LinkedIn SVG since lucide-react doesn't include brand icons */
const LinkedInIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

/**
 * Footer component.
 * Content from blueprint.md:
 * Footer — all content read from src/data/profile.json
 * [LinkedIn] [Email] [Phone]
 * {person.headline}
 */
export default function Footer() {
  return (
    <footer
      id="footer"
      className="border-t border-[var(--color-border)] bg-[var(--color-bg)]"
    >
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-16">
        <div className="flex flex-col items-center gap-6 text-center">
          {/* Name and title */}
          <div>
            <p
              className="text-lg font-semibold text-[var(--color-text-primary)]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {person.name}
            </p>
            <p className="text-sm text-[var(--color-text-secondary)] mt-1">
              {person.title} · {person.city}, {person.region}
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href={person.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl hover:bg-[var(--color-surface-raised)]
                         text-[var(--color-text-secondary)] hover:text-[var(--color-accent)]
                         transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="w-5 h-5" />
            </a>

            <a
              href={`mailto:${person.email}`}
              className="p-2 rounded-xl hover:bg-[var(--color-surface-raised)]
                         text-[var(--color-text-secondary)] hover:text-[var(--color-accent)]
                         transition-colors duration-200"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>

            <a
              href={`tel:${person.phone}`}
              className="p-2 rounded-xl hover:bg-[var(--color-surface-raised)]
                         text-[var(--color-text-secondary)] hover:text-[var(--color-accent)]
                         transition-colors duration-200"
              aria-label="Phone"
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>

          {/* Tagline + Copyright */}
          <div className="space-y-1">
            <p
              className="text-sm text-[var(--color-text-tertiary)]"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              {person.headline}
            </p>
            <p className="text-xs text-[var(--color-text-tertiary)]">
              © {new Date().getFullYear()} {person.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

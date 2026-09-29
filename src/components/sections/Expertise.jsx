import { Search, Wrench, FileText, Link2, MapPin, BarChart2 } from 'lucide-react';
import { expertise } from '../../data/profile.json';
import ScrollRevealWrapper from '../ui/ScrollRevealWrapper';

const ICONS = { Search, Wrench, FileText, Link2, MapPin, BarChart2 };

/**
 * Expertise — grid of SEO capability cards.
 */
export default function Expertise() {
  return (
    <section id="expertise" className="py-12 md:py-28 bg-[var(--color-bg)]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 lg:px-12">
        <ScrollRevealWrapper>
          <div className="mb-12">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-accent)] mb-2 block">
              Expertise
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Areas of Expertise
            </h2>
          </div>
        </ScrollRevealWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertise.map((area, i) => {
            const Icon = ICONS[area.icon];
            return (
              <ScrollRevealWrapper key={area.title} delay={i * 0.06}>
                <div
                  className="h-full bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-6
                             hover:border-[var(--color-accent)] transition-colors duration-200"
                  style={{ boxShadow: 'var(--shadow-card)' }}
                >
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent-light)] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3
                    className="text-lg font-bold text-[var(--color-text-primary)] mb-3"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {area.title}
                  </h3>
                  <ul className="space-y-1.5">
                    {area.items.map((item) => (
                      <li key={item} className="text-sm text-[var(--color-text-secondary)]">
                        · {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollRevealWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}

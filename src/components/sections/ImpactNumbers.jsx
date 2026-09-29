import profile from '../../data/profile.json';
import ScrollRevealWrapper from '../ui/ScrollRevealWrapper';
import { Briefcase, Star } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

/**
 * Animated number component for the impact strip.
 */
function AnimatedNumber({ value, suffix = '', duration = 1800 }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
      const startTime = performance.now();
      const numericValue = typeof value === 'number' ? value : parseFloat(value) || 0;

      const animate = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(eased * numericValue));

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(numericValue);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [inView, hasAnimated, value, duration]);

  const isNumeric = typeof value === 'number';

  return (
    <span ref={ref}>
      {isNumeric ? count : value}
      {isNumeric && suffix}
    </span>
  );
}

const ICONS = { Briefcase, Star };
const METRICS = profile.stats;

export default function ImpactNumbers() {
  return (
    <section id="impact-numbers" className="py-12 md:py-16">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 lg:px-12">
        <ScrollRevealWrapper>
          <div className="bg-[var(--color-surface)] rounded-3xl border border-[var(--color-border)] p-8 md:p-10 flex flex-col md:flex-row justify-between gap-8 md:gap-0" style={{ boxShadow: 'var(--shadow-card)' }}>
            {METRICS.map((metric, i) => {
              const Icon = ICONS[metric.icon];
              return (
              <div key={i} className="flex-1 flex flex-col items-center md:items-start text-center md:text-left relative px-4 first:pl-0 last:pr-0">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-full border border-[var(--color-accent)]/30 flex items-center justify-center bg-[var(--color-accent-light)]">
                    <Icon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <div
                    className={`${typeof metric.value === 'string' && metric.value.length > 8
                        ? 'text-xl sm:text-2xl lg:text-3xl'
                        : 'text-4xl md:text-5xl'
                      } font-bold text-[var(--color-text-primary)]`}
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    <AnimatedNumber value={metric.value} suffix={metric.suffix} />
                  </div>
                </div>
                <div className="text-sm font-semibold text-[var(--color-text-secondary)] mb-1">
                  {metric.label}
                </div>
                <div className="text-xs text-[var(--color-text-tertiary)] whitespace-pre-line leading-relaxed">
                  {metric.subLabel}
                </div>

                {/* Divider for desktop */}
                {i !== METRICS.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-2/3 bg-[var(--color-border)]" />
                )}

                {/* Divider for mobile */}
                {i !== METRICS.length - 1 && (
                  <div className="block md:hidden w-1/2 h-px bg-[var(--color-border)] mx-auto mt-8" />
                )}
              </div>
              );
            })}
          </div>
        </ScrollRevealWrapper>
      </div>
    </section>
  );
}

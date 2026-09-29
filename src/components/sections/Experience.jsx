import { experience } from '../../data/profile.json';
import ScrollRevealWrapper from '../ui/ScrollRevealWrapper';

/**
 * Experience — vertical timeline of roles.
 */
export default function Experience() {
  return (
    <section id="experience" className="py-12 md:py-28 bg-[var(--color-muted)]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 lg:px-12">
        <ScrollRevealWrapper>
          <div className="mb-12">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-accent)] mb-2 block">
              Experience
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Professional Experience
            </h2>
          </div>
        </ScrollRevealWrapper>

        <div className="relative space-y-8 md:pl-10 md:border-l md:border-[var(--color-border)]">
          {experience.map((job, i) => (
            <ScrollRevealWrapper key={job.id} delay={i * 0.08}>
              <article
                className="relative bg-[var(--color-surface)] rounded-3xl border border-[var(--color-border)] p-6 md:p-8"
                style={{ boxShadow: 'var(--shadow-card)' }}
              >
                <span
                  className={`hidden md:block absolute -left-[46px] top-9 w-3 h-3 rounded-full border-2
                    ${job.current
                      ? 'bg-[var(--color-accent)] border-[var(--color-accent)]'
                      : 'bg-[var(--color-bg)] border-[var(--color-accent)]'}`}
                />
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-5">
                  <div>
                    <h3
                      className="text-xl font-bold text-[var(--color-text-primary)]"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {job.role}
                    </h3>
                    <p className="text-sm font-semibold text-[var(--color-accent)] mt-0.5">{job.company}</p>
                    {job.focus && <p className="text-sm text-[var(--color-text-tertiary)] mt-1">{job.focus}</p>}
                  </div>
                  <span
                    className="self-start whitespace-nowrap text-xs font-semibold px-3 py-1 rounded-full
                               bg-[var(--color-accent-light)] text-[var(--color-accent)]"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    {job.period}
                  </span>
                </div>
                <ul className="space-y-2.5">
                  {job.highlights.map((point) => (
                    <li key={point} className="flex gap-3 text-sm text-[var(--color-text-secondary)] leading-relaxed">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </ScrollRevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}

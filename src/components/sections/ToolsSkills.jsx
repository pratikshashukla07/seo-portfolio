import profile from '../../data/profile.json';
import SkillPill from '../ui/SkillPill';
import ScrollRevealWrapper from '../ui/ScrollRevealWrapper';

const { skills: seoSkills, tools, education, languages } = profile;

export default function ToolsSkills() {
  return (
    <section id="tools-skills" className="py-12 md:py-28 bg-[var(--color-bg)] border-t border-b border-[var(--color-border)]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 lg:px-12">
        <ScrollRevealWrapper>
          <div className="mb-12">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-accent)] mb-2 block">
              Tools & Skills
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-display)' }}>
              Tools & Skills
            </h2>
          </div>
        </ScrollRevealWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left Column - Tools */}
          <div>
            <ScrollRevealWrapper>
              <h3 className="text-sm font-semibold text-[var(--color-text-primary)] mb-6 uppercase tracking-wider">
                Tools & Platforms
              </h3>
            </ScrollRevealWrapper>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool, i) => (
                <SkillPill
                  key={tool.name}
                  name={tool.name}
                  index={i}
                />
              ))}
            </div>
          </div>

          {/* Right Column - Skills */}
          <div>
            <ScrollRevealWrapper delay={0.1}>
              <h3 className="text-sm font-semibold text-[var(--color-text-primary)] mb-6 uppercase tracking-wider">
                Core Skills
              </h3>
            </ScrollRevealWrapper>
            <div className="flex flex-wrap gap-3">
              {seoSkills.map((skill, i) => (
                <SkillPill key={skill} name={skill} index={i} />
              ))}
            </div>
          </div>
        </div>

        {/* Education & Languages */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <div>
            <ScrollRevealWrapper>
              <h3 className="text-sm font-semibold text-[var(--color-text-primary)] mb-6 uppercase tracking-wider">
                Education & Certification
              </h3>
            </ScrollRevealWrapper>
            <div className="space-y-3">
              {education.map((item) => (
                <div key={item.title} className="px-5 py-4 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)]">
                  <p className="font-semibold text-[var(--color-text-primary)]">{item.title}</p>
                  <p className="text-sm text-[var(--color-text-secondary)]">{item.org}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <ScrollRevealWrapper delay={0.1}>
              <h3 className="text-sm font-semibold text-[var(--color-text-primary)] mb-6 uppercase tracking-wider">
                Languages
              </h3>
            </ScrollRevealWrapper>
            <div className="flex flex-wrap gap-3">
              {languages.map((lang, i) => (
                <SkillPill key={lang} name={lang} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

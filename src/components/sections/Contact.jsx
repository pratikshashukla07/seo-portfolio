import { useState } from 'react';
import { Mail, MapPin, Phone, Check } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';
import ScrollRevealWrapper from '../ui/ScrollRevealWrapper';
import profile from '../../data/profile.json';

const { person } = profile;


export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '' });
  const [state, handleSubmit] = useForm("mnjrwdgv");

  return (
    <section id="contact" className="py-12 md:py-28 bg-[var(--color-surface-raised)] border-t border-[var(--color-border)]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Left: Copy & Contact Info */}
          <ScrollRevealWrapper>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-accent)] mb-4 block">
                Let's Work Together
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-text-primary)] leading-[1.1] mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                Get In Touch.
              </h2>
              <p className="text-sm md:text-base text-[var(--color-text-secondary)] mb-10 leading-relaxed max-w-md">
                {person.name} · {person.title}
              </p>

              <div className="space-y-6">

                <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
                  <svg className="w-5 h-5 text-[var(--color-accent)]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span className="text-sm font-medium text-[var(--color-text-primary)]">{person.linkedinDisplay}</span>
                </a>
                <a href={`mailto:${person.email}`} className="flex items-center gap-4 hover:opacity-80 transition-opacity">
                  <Mail className="w-5 h-5 text-[var(--color-accent)]" />
                  <span className="text-sm font-medium text-[var(--color-text-primary)]">{person.email}</span>
                </a>
                <a href={`tel:${person.phone}`} className="flex items-center gap-4 hover:opacity-80 transition-opacity">
                  <Phone className="w-5 h-5 text-[var(--color-accent)]" />
                  <span className="text-sm font-medium text-[var(--color-text-primary)]">{person.phoneDisplay}</span>
                </a>
                <div className="flex items-center gap-4">
                  <MapPin className="w-5 h-5 text-[var(--color-accent)]" />
                  <span className="text-sm font-medium text-[var(--color-text-primary)]">{person.city}, {person.region}, {person.country}</span>
                </div>
              </div>
            </div>
          </ScrollRevealWrapper>

          {/* Right: Contact Form */}
          <ScrollRevealWrapper delay={0.2}>
            <div className="bg-[var(--color-surface)] rounded-3xl p-6 md:p-10 border border-[var(--color-border)] shadow-[var(--shadow-card)]">
              {state.succeeded ? (
                <div className="text-center py-12">
                  <Check className="w-12 h-12 text-[var(--color-accent)] mx-auto mb-4" />
                  <p className="text-xl text-[var(--color-text-primary)] font-bold" style={{ fontFamily: 'var(--font-display)' }}>Message Sent!</p>
                  <p className="text-sm text-[var(--color-text-secondary)] mt-2">I'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <input 
                        type="text" 
                        name="name"
                        placeholder="Your Name" 
                        required 
                        value={formState.name} 
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })} 
                        className="w-full px-4 py-3.5 rounded-xl text-sm bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-tertiary)] focus:border-[var(--color-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/20 transition-all" 
                      />
                      <div className="text-red-500 text-xs mt-1">
                        <ValidationError prefix="Name" field="name" errors={state.errors} />
                      </div>
                    </div>
                    <div>
                      <input 
                        type="email" 
                        name="email"
                        placeholder="Your Email" 
                        required 
                        value={formState.email} 
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })} 
                        className="w-full px-4 py-3.5 rounded-xl text-sm bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-tertiary)] focus:border-[var(--color-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/20 transition-all" 
                      />
                      <div className="text-red-500 text-xs mt-1">
                        <ValidationError prefix="Email" field="email" errors={state.errors} />
                      </div>
                    </div>
                  </div>
                  <div>
                    <input 
                      type="tel" 
                      name="phone"
                      placeholder="Your Contact Number" 
                      required 
                      value={formState.phone} 
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })} 
                      className="w-full px-4 py-3.5 rounded-xl text-sm bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-tertiary)] focus:border-[var(--color-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/20 transition-all" 
                    />
                    <div className="text-red-500 text-xs mt-1">
                      <ValidationError prefix="Phone" field="phone" errors={state.errors} />
                    </div>
                  </div>
                  <div>
                    <textarea 
                      name="message"
                      placeholder="Let's Have Talk about SEO" 
                      rows={5} 
                      required 
                      value={formState.message} 
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })} 
                      className="w-full px-4 py-3.5 rounded-xl text-sm bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-tertiary)] focus:border-[var(--color-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/20 resize-none transition-all" 
                    />
                    <div className="text-red-500 text-xs mt-1">
                      <ValidationError prefix="Message" field="message" errors={state.errors} />
                    </div>
                  </div>
                  <button 
                    type="submit" 
                    disabled={state.submitting} 
                    className="w-full px-6 py-4 rounded-xl text-sm font-bold bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] transition-all duration-200 disabled:opacity-50 shadow-[var(--shadow-button)] hover:-translate-y-0.5 mt-2"
                  >
                    {state.submitting ? 'Sending...' : 'Start a Conversation →'}
                  </button>
                  {state.errors && state.errors.length > 0 && (
                    <div className="text-center mt-2 text-sm text-red-500 font-medium">
                      Something went wrong. Please check the fields above.
                    </div>
                  )}
                </form>
              )}
            </div>
          </ScrollRevealWrapper>
        </div>
      </div>
    </section>
  );
}

import { Sun, Moon } from 'lucide-react';

/**
 * Day / Night switch — sliding pill with sun and moon.
 * Placed in the navbar top-right.
 */
export default function DarkModeToggle({ isDark, toggleDark }) {
  return (
    <button
      id="dark-mode-toggle"
      type="button"
      role="switch"
      aria-checked={isDark}
      onClick={toggleDark}
      className="relative flex items-center w-[60px] h-8 rounded-full border transition-colors duration-300
                 border-[var(--color-border)] bg-[var(--color-surface-raised)]
                 hover:border-[var(--color-accent)] focus-visible:outline-2 focus-visible:outline-[var(--color-accent)]"
      aria-label={isDark ? 'Switch to day theme' : 'Switch to night theme'}
      title={isDark ? 'Switch to day theme' : 'Switch to night theme'}
    >
      <Sun
        className={`absolute left-2 w-4 h-4 transition-opacity duration-300 ${isDark ? 'opacity-40 text-[var(--color-text-tertiary)]' : 'opacity-0'}`}
      />
      <Moon
        className={`absolute right-2 w-4 h-4 transition-opacity duration-300 ${isDark ? 'opacity-0' : 'opacity-40 text-[var(--color-text-tertiary)]'}`}
      />
      <span
        className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full flex items-center justify-center
                    shadow-md transition-transform duration-300 ease-out
                    ${isDark ? 'translate-x-[28px] bg-[#1E293B]' : 'translate-x-0 bg-amber-400'}`}
      >
        {isDark ? <Moon className="w-3.5 h-3.5 text-sky-200" /> : <Sun className="w-3.5 h-3.5 text-white" />}
      </span>
    </button>
  );
}

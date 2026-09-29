import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { readFileSync } from 'node:fs'

// Fills index.html placeholders (%profile.path%) and the JSON-LD block from src/data/profile.json
function profileHtml() {
  const profile = JSON.parse(readFileSync(new URL('./src/data/profile.json', import.meta.url), 'utf8'))
  const { person, site, experience, skills, education } = profile
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: person.name,
    jobTitle: person.title,
    worksFor: { '@type': 'Organization', name: experience[0].company },
    email: `mailto:${person.email}`,
    telephone: person.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: person.city,
      addressRegion: person.region,
      addressCountry: person.countryCode,
    },
    alumniOf: education[0].org,
    knowsAbout: skills,
    url: site.url,
    sameAs: [person.linkedin],
  }
  return {
    name: 'profile-html',
    transformIndexHtml(html) {
      return html
        .replace('%JSON_LD%', JSON.stringify(jsonLd, null, 2))
        .replace(/%profile\.([\w.]+)%/g, (_, path) =>
          path.split('.').reduce((obj, key) => obj?.[key], profile) ?? '')
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), profileHtml()],
})

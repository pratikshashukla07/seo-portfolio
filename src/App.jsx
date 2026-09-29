import useDarkMode from './hooks/useDarkMode';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import ImpactNumbers from './components/sections/ImpactNumbers';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Expertise from './components/sections/Expertise';
import ToolsSkills from './components/sections/ToolsSkills';
import Contact from './components/sections/Contact';

function App() {
  const [isDark, toggleDark] = useDarkMode();

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text-primary)] transition-colors duration-300">
      <Navbar isDark={isDark} toggleDark={toggleDark} />

      <main>
        <Hero />
        <ImpactNumbers />
        <About />
        <Experience />
        <Expertise />
        <ToolsSkills />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;

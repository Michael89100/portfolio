import { lazy, Suspense } from 'react'
import Hero from './sections/Hero'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Particles from './components/Particles'
import FooterParticles from './components/FooterParticles'
import CustomCursor from './components/CustomCursor'
import SectionDivider from './components/SectionDivider'
import { usePerformance } from './hooks/usePerformance'
import ScrollTest from './components/ScrollTest'

function App() {
  const { isMobile, shouldReduceAnimations } = usePerformance();

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white overflow-x-hidden relative">
      {/* Composants conditionnels basés sur les performances */}
      {!isMobile && <CustomCursor />}
      {!shouldReduceAnimations && <Particles />}
      
      {/* Test de scroll temporaire */}
      <ScrollTest />

      {/* Main Content */}
      <main>
        <Hero />
        <SectionDivider variant="wave" />
        <Skills />
        <SectionDivider variant="dots" />
        <Projects />
        <SectionDivider variant="gradient" />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="card-minimal border-t border-white/10 py-8 relative">
        {!shouldReduceAnimations && <FooterParticles />}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted text-sm">
            © 2024 Michael YAROMISHYAN. Développé avec React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

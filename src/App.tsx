import { useState } from 'react'
import Hero from './sections/Hero'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Particles from './components/Particles'
import NavParticles from './components/NavParticles'
import FooterParticles from './components/FooterParticles'
import CustomCursor from './components/CustomCursor'
import SectionDivider from './components/SectionDivider'

function App() {
  const [activeSection, setActiveSection] = useState('hero')

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white overflow-x-hidden relative">
      <CustomCursor />
      <Particles />
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 card-minimal border-b border-white/10 relative">
        <NavParticles />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold text-white">
                MY
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              {['hero', 'skills', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`text-sm font-medium transition-all duration-300 hover:text-white ${
                    activeSection === section ? 'text-white' : 'text-muted'
                  }`}
                >
                  {section === 'hero' ? 'Accueil' : 
                   section === 'skills' ? 'Compétences' :
                   section === 'projects' ? 'Projets' : 'Contact'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
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
        <FooterParticles />
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

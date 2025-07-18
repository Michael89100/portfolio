import { motion } from 'framer-motion'
import { ChevronDown, Code, Smartphone, ArrowRight } from 'lucide-react'
import SectionParticles from '../components/SectionParticles'

const Hero = () => {
  const scrollToSkills = () => {
    document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-transparent">
      {/* Background pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30"></div>
      
      {/* Section Particles */}
      <SectionParticles 
        particleCount={40}
        colors={['rgba(255, 255, 255, 0.15)', 'rgba(255, 255, 255, 0.1)', 'rgba(255, 255, 255, 0.05)']}
      />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          {/* Profile section */}
          <div className="flex flex-col items-center space-y-8">
            {/* Avatar minimaliste */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative"
            >
              <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center text-black text-2xl font-bold border-2 border-white/20 hover-lift-minimal">
                MY
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-black rounded-full"></div>
              </div>
            </motion.div>

            {/* Name and title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                <span className="text-white">Michael</span>
                <br />
                <span className="text-white">YAROMISHYAN</span>
              </h1>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-lg md:text-xl">
                <div className="flex items-center gap-3 card-minimal px-4 py-2 rounded-lg">
                  <Code className="w-5 h-5 text-white" />
                  <span className="text-white font-medium">Front-end</span>
                </div>
                <div className="flex items-center gap-3 card-minimal px-4 py-2 rounded-lg">
                  <Smartphone className="w-5 h-5 text-white" />
                  <span className="text-white font-medium">Mobile</span>
                </div>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="max-w-2xl mx-auto text-lg md:text-xl text-muted leading-relaxed"
            >
              Développeur passionné spécialisé dans la création d'applications web et mobiles. 
              Expert en <span className="text-accent">Kotlin & Jetpack Compose</span> pour le développement Android moderne.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <button
                onClick={scrollToSkills}
                className="btn-primary group relative px-8 py-4 text-lg font-semibold"
              >
                <span className="flex items-center gap-3">
                  Découvrir mes compétences
                  <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
                </span>
              </button>
            </motion.div>
          </div>

          {/* Tech stack preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-3 mt-16"
          >
            {[
              'React', 'Kotlin', 'Node.js', 'Jetpack Compose', 'MongoDB', 'Angular'
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                className="badge hover-lift-minimal cursor-pointer"
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero 
import { motion } from 'framer-motion'
import { 
  Server, 
  Monitor, 
  Smartphone, 
  Database, 
  Code2, 
  Layers,
  Zap,
  Shield,
  Globe,
  Smartphone as Mobile,
  TrendingUp,
  Sparkles
} from 'lucide-react'
import SectionParticles from '../components/SectionParticles'

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend",
      icon: Server,
      skills: [
        { name: "Node.js", level: 50 },
        { name: "NestJS", level: 70},
        { name: "MongoDB", level: 40 },
        { name: "MySQL", level: 90 }
      ]
    },
    {
      title: "Frontend",
      icon: Monitor,
      skills: [
        { name: "React", level: 70 },
        { name: "Angular", level: 60 },
        { name: "Vue.js", level: 70 }
      ]
    },
    {
      title: "Mobile",
      icon: Mobile,
      skills: [
        { name: "Kotlin", level: 90 },
        { name: "Jetpack Compose", level: 90 },
        { name: "Android Native", level: 90 }
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-transparent">
      {/* Background pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      
      {/* Section Particles */}
      <SectionParticles 
        particleCount={35}
        colors={['rgba(255, 255, 255, 0.12)', 'rgba(255, 255, 255, 0.08)', 'rgba(255, 255, 255, 0.04)']}
      />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Compétences Techniques
          </h2>
          <p className="text-lg text-muted max-w-3xl mx-auto leading-relaxed">
            Expertise complète dans le développement moderne, avec une spécialisation 
            particulière dans l'écosystème Android et les architectures cloud-native.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="card-elevated rounded-lg p-8 hover-lift-minimal"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: skillIndex * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="space-y-3"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-white">
                        {skill.name}
                      </span>
                      <span className="text-sm text-muted font-mono">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="progress-bar">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ delay: skillIndex * 0.1 + 0.3, duration: 1.2, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="progress-fill"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Specialization Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="card-elevated rounded-lg p-8 mb-16"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center">
                <Mobile className="w-10 h-10 text-black" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3 justify-center md:justify-start">
                <Sparkles className="w-6 h-6" />
                Spécialisation Mobile
              </h3>
              <p className="text-muted text-lg leading-relaxed">
                Je consacre une grande partie de mon temps au développement mobile avec 
                <span className="text-accent"> Kotlin </span> 
                et 
                <span className="text-accent"> Jetpack Compose</span>. 
                Création d'applications Android modernes avec des interfaces utilisateur fluides 
                et des architectures robustes.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center justify-center gap-3">
            <TrendingUp className="w-6 h-6" />
            Outils & Technologies Complémentaires
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Git', 'Docker', 'AWS', 'Firebase', 'TypeScript', 'GraphQL'
            ].map((tool, index) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="badge hover-lift-minimal cursor-pointer"
              >
                {tool}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 
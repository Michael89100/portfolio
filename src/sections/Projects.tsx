import { motion } from 'framer-motion'
import { 
  ExternalLink, 
  Github, 
  Smartphone, 
  Globe, 
  Database,
  Zap,
  Shield,
  Users,
  Star,
  ArrowRight
} from 'lucide-react'
import SectionParticles from '../components/SectionParticles'

const Projects = () => {
  const projects = [
    {
      title: "Jeu d'Échecs en React",
      description: "Application web interactive de jeu d'échecs développée avec React. Interface utilisateur intuitive, règles complètes du jeu, et système de coups valides.",
      technologies: ["React", "JavaScript", "CSS3", "HTML5", "Game Logic"],
      category: "Frontend",
      icon: Globe,
      github: "https://github.com/Michael89100/React",
      demo: "#",
      featured: true
    },
    {
      title: "ERP Axignis",
      description: "Projet annuel ERP complet pour la gestion d'entreprise. Système intégré de gestion des ressources, modules financiers, RH et logistique avec interface moderne.",
      technologies: ["Vue.js", "TypeScript", "JavaScript", "Node.js", "PostgreSQL"],
      category: "Fullstack",
      icon: Globe,
      github: "https://github.com/Kylian-Deley/Axignis",
      demo: "#",
      featured: true
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
    <section id="projects" className="py-20 relative overflow-hidden bg-transparent">
      {/* Background pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      
      {/* Section Particles */}
      <SectionParticles 
        particleCount={30}
        colors={['rgba(255, 255, 255, 0.1)', 'rgba(255, 255, 255, 0.06)', 'rgba(255, 255, 255, 0.03)']}
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
            Réalisations
          </h2>
          <p className="text-lg text-muted max-w-3xl mx-auto leading-relaxed">
            Découvrez une sélection de mes projets les plus significatifs, 
            mettant en avant mes compétences techniques et ma créativité dans le développement.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center justify-center gap-3">
            <Star className="w-5 h-5" />
            Projets Vedettes
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.filter(p => p.featured).map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="card-elevated rounded-lg p-8 hover-lift-minimal cursor-pointer"
              >
                {/* Featured badge */}
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                      <project.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="badge">
                      {project.category}
                    </span>
                  </div>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href={project.github} className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                      <Github className="w-4 h-4 text-white" />
                    </a>
                    <a href={project.demo} className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                      <ExternalLink className="w-4 h-4 text-white" />
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white">
                    {project.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 rounded bg-white/5 border border-white/10 text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* All Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {projects.filter(p => !p.featured).map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="card-minimal rounded-lg p-6 hover-lift-minimal cursor-pointer"
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                    <project.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="badge text-xs">
                    {project.category}
                  </span>
                </div>
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href={project.github} className="p-1 rounded bg-white/5 hover:bg-white/10 transition-colors">
                    <Github className="w-3 h-3 text-white" />
                  </a>
                  <a href={project.demo} className="p-1 rounded bg-white/5 hover:bg-white/10 transition-colors">
                    <ExternalLink className="w-3 h-3 text-white" />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-white">
                  {project.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded bg-white/5 border border-white/10 text-white"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs px-2 py-1 rounded bg-white/5 border border-white/10 text-muted">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="card-elevated rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center justify-center gap-3">
              <Zap className="w-6 h-6" />
              Envie de collaborer ?
            </h3>
            <p className="text-muted text-lg mb-6 leading-relaxed">
              Je suis toujours ouvert aux nouveaux projets et opportunités de collaboration. 
              N'hésitez pas à me contacter pour discuter de vos idées !
            </p>
            <button className="btn-primary group relative px-8 py-3 text-lg font-semibold">
              <span className="flex items-center gap-3">
                Me contacter
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 
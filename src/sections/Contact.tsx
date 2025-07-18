import { motion } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  MessageCircle,
  Heart
} from 'lucide-react'
import SectionParticles from '../components/SectionParticles'

const Contact = () => {

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "michaelyaromishyan@gmail.com",
      link: "mailto:michaelyaromishyan@gmail.com"
    },
    {
      icon: Phone,
      title: "Téléphone",
      value: "+33 7 68 67 08 41",
      link: "tel:+33768670841"
    },
    {
      icon: MapPin,
      title: "Localisation",
      value: "Lyon, France",
      link: "#"
    }
  ]

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/michael-yaromishyan-b4736821a/"
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/Michael89100"
    }
  ]

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-transparent">
      {/* Background pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      
      {/* Section Particles */}
      <SectionParticles 
        particleCount={25}
        colors={['rgba(255, 255, 255, 0.08)', 'rgba(255, 255, 255, 0.05)', 'rgba(255, 255, 255, 0.02)']}
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
            Contact
          </h2>
          <p className="text-lg text-muted max-w-3xl mx-auto leading-relaxed">
            Envie de collaborer sur un projet ou simplement échanger ? 
            N'hésitez pas à me contacter, je serai ravi de discuter avec vous !
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <MessageCircle className="w-6 h-6" />
                Parlons de votre projet
              </h3>
              <p className="text-muted text-lg leading-relaxed mb-8">
                Que ce soit pour un projet web, une application mobile, ou simplement 
                pour échanger sur les technologies, je suis toujours ouvert à la discussion. 
                N'hésitez pas à me contacter directement par email ou via les réseaux sociaux.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.link}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-4 card-minimal rounded-lg hover-lift-minimal group"
                >
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{info.title}</h4>
                    <p className="text-muted">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <Heart className="w-5 h-5" />
                Suivez-moi
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="p-4 rounded-lg card-minimal hover-lift-minimal group"
                  >
                    <social.icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact 
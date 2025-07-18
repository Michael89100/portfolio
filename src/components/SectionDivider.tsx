import { motion } from 'framer-motion';

interface SectionDividerProps {
  className?: string;
  variant?: 'simple' | 'gradient' | 'dots' | 'wave';
}

const SectionDivider = ({ 
  className = "", 
  variant = "gradient" 
}: SectionDividerProps): JSX.Element => {
  const variants = {
    simple: (
      <div className={`h-px bg-gradient-to-r from-transparent via-white/20 to-transparent ${className}`} />
    ),
    gradient: (
      <div className={`relative h-16 ${className}`}>
        <div className="absolute inset-0 flex items-center">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <div className="mx-4 w-2 h-2 bg-white/20 rounded-full"></div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </div>
      </div>
    ),
    dots: (
      <div className={`relative h-12 ${className}`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex space-x-2">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="w-1.5 h-1.5 bg-white/30 rounded-full"
              />
            ))}
          </div>
        </div>
      </div>
    ),
    wave: (
      <div className={`relative h-20 ${className}`}>
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            fill="rgba(255,255,255,0.1)"
          />
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            fill="rgba(255,255,255,0.05)"
          />
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            fill="rgba(255,255,255,0.02)"
          />
        </svg>
      </div>
    )
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {variants[variant]}
    </motion.div>
  );
};

export default SectionDivider; 
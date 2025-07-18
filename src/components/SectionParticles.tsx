import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
}

interface SectionParticlesProps {
  className?: string;
  particleCount?: number;
  colors?: string[];
}

const SectionParticles = ({ 
  className = "", 
  particleCount = 30,
  colors = ['rgba(255, 255, 255, 0.1)', 'rgba(255, 255, 255, 0.05)', 'rgba(255, 255, 255, 0.08)']
}: SectionParticlesProps): JSX.Element => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();
  const lastTimeRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Détection de performance
    const isLowPerformance = window.navigator.hardwareConcurrency <= 4 || 
                           window.innerWidth < 768;

    // Désactiver sur mobile pour économiser les ressources
    if (window.innerWidth < 768) {
      return;
    }

    // Ajuster la taille du canvas
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Créer les particules
    const createParticles = () => {
      const particles: Particle[] = [];
      // Réduire le nombre de particules sur les appareils moins puissants
      const adjustedCount = isLowPerformance ? Math.floor(particleCount * 0.6) : particleCount;

      for (let i = 0; i < adjustedCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.2, // Vitesse réduite
          vy: (Math.random() - 0.5) * 0.2,
          size: Math.random() * 1.2 + 0.3, // Taille réduite
          opacity: Math.random() * 0.2 + 0.05, // Opacité réduite
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
      return particles;
    };

    particlesRef.current = createParticles();

    // Animation des particules avec throttling
    const animate = (currentTime: number) => {
      // Limiter à 30 FPS sur les appareils moins puissants
      if (isLowPerformance && currentTime - lastTimeRef.current < 33) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }
      lastTimeRef.current = currentTime;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle) => {
        // Mettre à jour la position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Rebondir sur les bords
        if (particle.x <= 0 || particle.x >= canvas.width) {
          particle.vx *= -1;
        }
        if (particle.y <= 0 || particle.y >= canvas.height) {
          particle.vy *= -1;
        }

        // Garder les particules dans le canvas
        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));

        // Dessiner la particule
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate(0);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [particleCount, colors]);

  // Ne pas rendre sur mobile
  if (window.innerWidth < 768) {
    return null;
  }

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ background: 'transparent' }}
    />
  );
};

export default SectionParticles; 
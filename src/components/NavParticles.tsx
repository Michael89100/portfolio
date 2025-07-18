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

const NavParticles = (): JSX.Element => {
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
      const particleCount = isLowPerformance ? 12 : 18; // Réduire le nombre

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3, // Mouvement modéré
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 1 + 0.3, // Taille réduite
          opacity: Math.random() * 0.1 + 0.03, // Très subtiles
          color: 'rgba(255, 255, 255, 0.03)' // Très subtiles
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
  }, []);

  // Ne pas rendre sur mobile
  if (window.innerWidth < 768) {
    return null;
  }

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ background: 'transparent' }}
    />
  );
};

export default NavParticles; 
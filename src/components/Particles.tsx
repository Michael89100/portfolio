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

const Particles = (): JSX.Element => {
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

    // Ajuster la taille du canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Créer les particules
    const createParticles = () => {
      const particles: Particle[] = [];
      // Réduire le nombre de particules sur les appareils moins puissants
      const baseCount = isLowPerformance ? 30 : 50;
      const particleCount = Math.min(window.innerWidth / 30, baseCount);

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3, // Vitesse réduite
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 1.5 + 0.5, // Taille réduite
          opacity: Math.random() * 0.3 + 0.1,
          color: `rgba(255, 255, 255, ${Math.random() * 0.2 + 0.1})`
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

      const particles = particlesRef.current;
      const maxConnections = isLowPerformance ? 3 : 5; // Limiter les connexions

      particles.forEach((particle, index) => {
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

        // Effet de lueur réduit
        if (!isLowPerformance) {
          ctx.shadowBlur = 5;
          ctx.shadowColor = particle.color;
          ctx.fill();
          ctx.shadowBlur = 0;
        }

        ctx.globalAlpha = 1;

        // Dessiner les connexions entre particules proches (optimisé)
        let connectionCount = 0;
        for (let otherIndex = index + 1; otherIndex < particles.length && connectionCount < maxConnections; otherIndex++) {
          const otherParticle = particles[otherIndex];
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 80) { // Distance réduite
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = particle.color;
            ctx.globalAlpha = (80 - distance) / 80 * 0.2; // Opacité réduite
            ctx.lineWidth = 0.5; // Ligne plus fine
            ctx.stroke();
            ctx.globalAlpha = 1;
            connectionCount++;
          }
        }
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

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
};

export default Particles; 
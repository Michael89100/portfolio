import { useEffect, useState } from 'react';
import { usePerformance } from '../hooks/usePerformance';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
}

const PerformanceOptimizer = ({ children }: PerformanceOptimizerProps) => {
  const { isLowPerformance, isMobile, shouldReduceAnimations } = usePerformance();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Délai minimal pour permettre le chargement des ressources critiques
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Optimisations globales basées sur les performances
    if (isLowPerformance || isMobile) {
      // Réduire la qualité des images si nécessaire
      document.documentElement.style.setProperty('--image-quality', '0.8');
      
      // Désactiver certaines animations CSS
      if (shouldReduceAnimations) {
        document.documentElement.style.setProperty('--animation-duration', '0.1s');
      }
    } else {
      document.documentElement.style.setProperty('--image-quality', '1');
      document.documentElement.style.setProperty('--animation-duration', '0.3s');
    }
  }, [isLowPerformance, isMobile, shouldReduceAnimations]);

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-center">
        <div className="text-white text-center">
          <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-sm text-muted">Chargement...</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default PerformanceOptimizer; 
import { useState, useEffect } from 'react';

interface PerformanceInfo {
  isLowPerformance: boolean;
  isMobile: boolean;
  shouldReduceAnimations: boolean;
  frameRate: number;
}

export const usePerformance = (): PerformanceInfo => {
  const [performanceInfo, setPerformanceInfo] = useState<PerformanceInfo>({
    isLowPerformance: false,
    isMobile: false,
    shouldReduceAnimations: false,
    frameRate: 60
  });

  useEffect(() => {
    const detectPerformance = () => {
      const isMobile = window.innerWidth < 768;
      const cpuCores = window.navigator.hardwareConcurrency || 4;
      const isLowPerformance = cpuCores <= 4 || isMobile;
      
      // Détecter le frame rate supporté
      let frameRate = 60;
      if ('connection' in navigator) {
        const connection = (navigator as any).connection;
        if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
          frameRate = 30;
        }
      }

      // Réduire les animations sur les appareils moins puissants
      const shouldReduceAnimations = isLowPerformance || isMobile;

      setPerformanceInfo({
        isLowPerformance,
        isMobile,
        shouldReduceAnimations,
        frameRate
      });
    };

    detectPerformance();
    window.addEventListener('resize', detectPerformance);

    return () => {
      window.removeEventListener('resize', detectPerformance);
    };
  }, []);

  return performanceInfo;
}; 
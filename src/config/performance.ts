export const PERFORMANCE_CONFIG = {
  // Seuils de performance
  LOW_PERFORMANCE_CORES: 4,
  MOBILE_BREAKPOINT: 768,
  SMALL_MOBILE_BREAKPOINT: 480,
  
  // Paramètres des particules
  PARTICLES: {
    DESKTOP: {
      MAIN: 50,
      FOOTER: 12,
      NAV: 18,
      SECTION: 30
    },
    MOBILE: {
      MAIN: 30,
      FOOTER: 8,
      NAV: 12,
      SECTION: 18
    },
    LOW_PERFORMANCE: {
      MAIN: 30,
      FOOTER: 8,
      NAV: 12,
      SECTION: 18
    }
  },
  
  // Frame rates
  FRAME_RATES: {
    HIGH: 60,
    MEDIUM: 30,
    LOW: 20
  },
  
  // Délais de throttling (en ms)
  THROTTLE_DELAYS: {
    CURSOR: {
      HIGH: 8,    // ~120 FPS
      MEDIUM: 16, // ~60 FPS
      LOW: 33     // ~30 FPS
    },
    ANIMATION: {
      HIGH: 16,   // 60 FPS
      MEDIUM: 33, // 30 FPS
      LOW: 50     // 20 FPS
    }
  },
  
  // Distances de connexion des particules
  PARTICLE_CONNECTIONS: {
    MAX_DISTANCE: 80,
    MAX_CONNECTIONS: {
      HIGH: 5,
      MEDIUM: 3,
      LOW: 2
    }
  },
  
  // Effets visuels
  VISUAL_EFFECTS: {
    SHADOW_BLUR: {
      HIGH: 10,
      MEDIUM: 5,
      LOW: 0
    },
    BACKDROP_FILTER: {
      HIGH: 'blur(10px)',
      MEDIUM: 'blur(5px)',
      LOW: 'none'
    }
  }
};

export const getPerformanceLevel = () => {
  const cores = window.navigator.hardwareConcurrency || 4;
  const isMobile = window.innerWidth < PERFORMANCE_CONFIG.MOBILE_BREAKPOINT;
  
  if (cores <= PERFORMANCE_CONFIG.LOW_PERFORMANCE_CORES || isMobile) {
    return 'LOW';
  } else if (cores <= 8) {
    return 'MEDIUM';
  } else {
    return 'HIGH';
  }
};

export const shouldReduceMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}; 
import { useEffect, useState, useRef, useCallback } from 'react';

const CustomCursor = (): JSX.Element => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const lastUpdateRef = useRef<number>(0);
  const isLowPerformance = window.navigator.hardwareConcurrency <= 4;

  // Throttle function pour limiter les mises à jour
  const throttle = useCallback((func: Function, delay: number) => {
    return (...args: any[]) => {
      const now = Date.now();
      if (now - lastUpdateRef.current >= delay) {
        func(...args);
        lastUpdateRef.current = now;
      }
    };
  }, []);

  useEffect(() => {
    // Ajouter la classe pour activer le curseur personnalisé
    document.body.classList.add('custom-cursor-enabled');

    const updateCursorPosition = throttle((e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    }, isLowPerformance ? 16 : 8); // 60 FPS vs 120 FPS

    const handleMouseDown = () => {
      setIsClicking(true);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    // Simplifier la détection des éléments interactifs
    const handleMouseMove = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.tagName === 'BUTTON' || 
                           target.tagName === 'A' || 
                           target.closest('button') || 
                           target.closest('a') ||
                           target.classList.contains('hover-lift-minimal') ||
                           target.classList.contains('card-minimal') ||
                           target.classList.contains('card-elevated');
      
      setIsHovering(isInteractive);
    };

    // Événements pour le curseur
    document.addEventListener('mousemove', updateCursorPosition);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      // Retirer la classe pour désactiver le curseur personnalisé
      document.body.classList.remove('custom-cursor-enabled');
      
      document.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [throttle, isLowPerformance]);

  // Désactiver le curseur sur mobile pour économiser les ressources
  if (window.innerWidth < 768) {
    return null;
  }

  return (
    <div
      className={`custom-cursor ${isHovering ? 'hover' : ''} ${isClicking ? 'click' : ''}`}
      style={{
        left: `${position.x - 10}px`,
        top: `${position.y - 10}px`,
        transform: `translate3d(0, 0, 0)`, // Force hardware acceleration
      }}
    />
  );
};

export default CustomCursor; 
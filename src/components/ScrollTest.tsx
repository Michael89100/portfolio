import { useEffect, useState } from 'react';

const ScrollTest = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsScrolling(true);
      
      // Réinitialiser après 100ms
      setTimeout(() => setIsScrolling(false), 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className="fixed top-4 right-4 bg-black/80 text-white p-2 rounded text-xs z-[10000] pointer-events-none"
      style={{ 
        opacity: isScrolling ? 1 : 0.5,
        transition: 'opacity 0.2s'
      }}
    >
      Scroll Y: {Math.round(scrollY)}px
      <br />
      Status: {isScrolling ? 'Scrolling' : 'Idle'}
    </div>
  );
};

export default ScrollTest; 
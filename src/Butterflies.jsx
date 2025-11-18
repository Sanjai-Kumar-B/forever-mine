import { useEffect, useRef } from 'react';

const Butterflies = () => {
  const containerRef = useRef(null);
  const instanceRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Dynamically load the threejs-toys library
    const script = document.createElement('script');
    script.type = 'module';
    script.textContent = `
      import { butterfliesBackground } from 'https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js';
      
      window.initButterflies = function(el) {
        return butterfliesBackground({
          el: el,
          eventsEl: document.body,
          gpgpuSize: 18,
          background: 0x87CEEB,
          material: 'phong',
          lights: [
            { type: 'ambient', params: [0xffffff, 0.5] },
            { type: 'directional', params: [0xffffff, 1], props: { position: [10, 0, 0] } }
          ],
          materialParams: { transparent: true, alphaTest: 0.5 },
          texture: 'https://assets.codepen.io/33787/butterflies.png',
          textureCount: 4,
          wingsScale: [2, 2, 2],
          wingsWidthSegments: 16,
          wingsHeightSegments: 16,
          wingsSpeed: 0.75,
          wingsDisplacementScale: 1.25,
          noiseCoordScale: 0.01,
          noiseTimeCoef: 0.0005,
          noiseIntensity: 0.0025,
          attractionRadius1: 100,
          attractionRadius2: 150,
          maxVelocity: 0.1
        });
      };
    `;
    
    document.body.appendChild(script);

    // Wait for script to load and initialize
    const checkInit = setInterval(() => {
      if (window.initButterflies && containerRef.current) {
        try {
          instanceRef.current = window.initButterflies(containerRef.current);
          clearInterval(checkInit);
        } catch (error) {
          console.error('Failed to initialize butterflies:', error);
        }
      }
    }, 100);

    return () => {
      clearInterval(checkInit);
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      if (instanceRef.current && instanceRef.current.dispose) {
        instanceRef.current.dispose();
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full"
      style={{ 
        touchAction: 'pan-up',
        background: 'linear-gradient(180deg, #87CEEB 0%, #B0E0E6 50%, #87CEEB 100%)',
        position: 'relative'
      }}
    >
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, transparent 48%, rgba(255,255,255,0.3) 50%, transparent 52%)',
          pointerEvents: 'none'
        }}
      />
    </div>
  );
};

export default Butterflies;

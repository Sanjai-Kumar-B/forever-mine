import { useEffect, useRef } from 'react';

const Butterflies = () => {
  const containerRef = useRef(null);
  const instanceRef = useRef(null);
  const scriptRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let mounted = true;

    // Load the script dynamically
    const loadButterflies = async () => {
      try {
        if (!scriptRef.current) {
          const script = document.createElement('script');
          script.type = 'module';
          script.innerHTML = `
            import { butterfliesBackground } from 'https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js';
            
            window.butterfliesBackground = butterfliesBackground;
            window.butterfliesLoaded = true;
          `;
          document.head.appendChild(script);
          scriptRef.current = script;
        }

        // Wait for library to load
        const waitForLoad = () => {
          return new Promise((resolve) => {
            const check = setInterval(() => {
              if (window.butterfliesLoaded && window.butterfliesBackground) {
                clearInterval(check);
                resolve();
              }
            }, 50);
          });
        };

        await waitForLoad();

        if (mounted && containerRef.current && window.butterfliesBackground) {
          instanceRef.current = window.butterfliesBackground({
            el: containerRef.current,
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
        }
      } catch (error) {
        console.error('Failed to load butterflies:', error);
      }
    };

    loadButterflies();

    return () => {
      mounted = false;
      if (instanceRef.current && instanceRef.current.dispose) {
        try {
          instanceRef.current.dispose();
        } catch (e) {
          console.error('Error disposing butterflies:', e);
        }
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
          pointerEvents: 'none',
          zIndex: 1
        }}
      />
    </div>
  );
};

export default Butterflies;

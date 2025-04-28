'use client';

import { useEffect, useRef } from 'react';

export const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to match viewport
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Matrix characters (including katakana and symbols)
    const chars = 'ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ1234567890¦|=+-%*:/\\[]♠◄‼☺';
    const drops: { x: number; y: number; speed: number; lastChar: string }[] = [];
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);

    // Initialize drops with varying speeds
    for (let i = 0; i < columns; i++) {
      drops[i] = {
        x: i * fontSize,
        y: Math.random() * -100,
        speed: 0.5 + Math.random() * 1.5,
        lastChar: chars[Math.floor(Math.random() * chars.length)]
      };
    }

    const draw = () => {
      // Semi-transparent black to create fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Green text
      ctx.fillStyle = '#0F0';
      ctx.font = `${fontSize}px monospace`;

      // Draw characters with effects
      drops.forEach((drop) => {
        // Random character with higher chance to keep previous
        if (Math.random() > 0.98) {
          drop.lastChar = chars[Math.floor(Math.random() * chars.length)];
        }
        
        // Vary green color slightly
        const green = 150 + Math.floor(Math.random() * 105);
        const opacity = Math.max(0, Math.min(1, (canvas.height - drop.y) / 500));
        
        // First character brighter
        ctx.fillStyle = `rgba(180, 255, 180, ${opacity})`;
        ctx.fillText(drop.lastChar, drop.x, drop.y);
        
        // Trail characters dimmer
        ctx.fillStyle = `rgba(0, ${green}, 0, ${opacity * 0.8})`;
        if (drop.y > fontSize) {
          ctx.fillText(
            chars[Math.floor(Math.random() * chars.length)], 
            drop.x, 
            drop.y - fontSize
          );
        }

        // Update position with speed
        drop.y += drop.speed * fontSize;

        // Reset drop when it reaches bottom
        if (drop.y > canvas.height) {
          drop.y = 0;
          drop.speed = 0.5 + Math.random() * 1.5;
        }
      });
    };

    // Animation loop
    const interval = setInterval(draw, 33); // ~30fps

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none opacity-30"
      aria-hidden="true"
    />
  );
};

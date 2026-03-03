import React, { useState, useEffect, useMemo } from "react";

const StarField = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  const stars = useMemo(() => {
    // Increased to 300 for a richer field
    return [...Array(300)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      // Larger dots: ranging from 1.5px to 3px
      size: Math.random() > 0.7 ? 3 : 1.5,
      // Fast but smooth duration (4s to 8s)
      duration: 4 + Math.random() * 4,
      delay: Math.random() * -10,
      // Larger movement range for more active background
      moveX: Math.random() * 50 - 25,
      moveY: Math.random() * 50 - 25,
    }));
  }, []);

  return (
    <div className="fixed inset-0 -z-10 bg-black overflow-hidden">
      {/* Subtle Grain for Depth */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      {stars.map((star) => (
        <Star key={star.id} star={star} mouse={mouse} />
      ))}

      <style jsx>{`
        @keyframes smoothDrift {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(var(--mx), var(--my)); }
        }
        .star-base {
          animation: smoothDrift var(--duration) ease-in-out infinite;
          animation-delay: var(--delay);
          will-change: transform;
        }
      `}</style>
    </div>
  );
};

const Star = ({ star, mouse }) => {
  const [isNear, setIsNear] = useState(false);

  useEffect(() => {
    const starX = (star.left / 100) * window.innerWidth;
    const starY = (star.top / 100) * window.innerHeight;
    const dx = mouse.x - starX;
    const dy = mouse.y - starY;
    
    // Smooth proximity detection
    setIsNear(Math.sqrt(dx * dx + dy * dy) < 110); 
  }, [mouse, star.left, star.top]);

  return (
    <div
      className="star-base absolute bg-white transition-all duration-500"
      style={{
        left: `${star.left}%`,
        top: `${star.top}%`,
        width: `${star.size}px`,
        height: `${star.size}px`,
        // Pure squares for sharpness, or add rounded-full for softer dots
        borderRadius: "1px", 
        opacity: isNear ? 1 : 0.35,
        transform: isNear ? "scale(1.5)" : "scale(1)",
        boxShadow: isNear 
          ? "0 0 15px 2px rgba(255,255,255,0.8), 0 0 30px 4px rgba(255,255,255,0.3)" 
          : "none",
        transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)",
        "--duration": `${star.duration}s`,
        "--delay": `${star.delay}s`,
        "--mx": `${star.moveX}px`,
        "--my": `${star.moveY}px`,
      }}
    />
  );
};

export default StarField;
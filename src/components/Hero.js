import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const SpaceHero = () => {
  const [isWindows, setIsWindows] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsWindows(navigator.userAgent.includes('Win'));
    }
  }, []);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const moveX = useSpring(mouseX, springConfig);
  const moveY = useSpring(mouseY, springConfig);

  const imgX = useTransform(moveX, [-800, 800], [-25, 25]);
  const imgY = useTransform(moveY, [-500, 500], [-25, 25]);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const centerX = innerWidth / 2;
    const centerY = innerHeight / 2;
    mouseX.set(clientX - centerX);
    mouseY.set(clientY - centerY);
  };

  const tickerItems = [
    "Space Leader", "Global Innovator", "STEM Advocate", "Tech Strategist", 
    "Global Judge", "Education Pioneer", "Impact Architect", "Innovation Catalyst", 
    "Youth Mentor", "Product Manager", "Global Speaker", "Space Educator", 
    "Visionary Leader", "Media Recognized"
  ];

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-transparent font-['Montserrat'] text-white pb-20 md:pb-0"
    >
      {/* Dynamic Scaling Wrapper */}
      <div 
        className={`z-20 flex flex-col items-center text-center px-6 transition-all duration-700 transform 
          ${isWindows 
            ? 'scale-95 sm:scale-[1.05] md:scale-[0.82] lg:scale-[0.93] xl:scale-[0.90]' 
            : 'scale-105 md:scale-90 lg:scale-103 xl:scale-100'}
          -mt-12 lg:-mt-20`}
      >
        
        {/* Profile Portal with Color Glow Effect */}
        <motion.div 
          style={{ x: imgX, y: imgY }}
          className="relative group mb-6 lg:mb-10 cursor-pointer"
        >
          {/* 1. Animated Colorful Aurora Blur - Visible on Hover */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 via-purple-500 to-pink-500 blur-3xl rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-1000" />

          {/* 2. Dynamic Dashed Border - Color shift on hover */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-5 border border-dashed border-white/10 rounded-full group-hover:border-blue-400 group-hover:scale-105 transition-all duration-700"
          />
          
          {/* 3. The Main Image Container - Added inner color logic */}
          <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-44 md:h-44 lg:w-56 lg:h-56 rounded-full border border-white/20 p-1 backdrop-blur-xl overflow-hidden bg-black/60 shadow-2xl shadow-blue-500/10 group-hover:shadow-blue-500/30 group-hover:border-blue-300 transition-all duration-700">
            
            {/* 4. Deep Indigo/Blue Gradient Background within the circle */}
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-900 via-blue-950 to-black rounded-full" />
            
            <motion.img 
              src="Tisha_Site.jpeg" 
              alt="Tisha Khandokar"
              /* CHANGED: Removed 'grayscale brightness-110 contrast-110' classes. Added a very subtle dim-to-bright effect on hover instead. */
              className="relative w-full h-full object-cover rounded-full transition-all duration-700 ease-in-out opacity-90 group-hover:scale-105 group-hover:opacity-100"
            />
          </div>
        </motion.div>

        {/* Subheader */}
        <div className="mb-4">
          <span className="text-neutral-300 font-bold tracking-[0.2em] text-[11px] sm:text-[10px] md:text-[15px] uppercase">
            NASA Recognized Space Tech Leader
          </span>
        </div>

        {/* Name Heading */}
        <div className="mb-8 lg:mb-14">
          <h1 className="text-6xl sm:text-7xl md:text-7xl lg:text-9xl xl:text-8xl font-bold tracking-tight leading-[0.8] uppercase text-white">
            TISHA
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-5xl lg:text-7xl xl:text-7xl font-light italic text-neutral-500 tracking-tighter mt-1">
            — KHANDOKAR
          </h2>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full">
          <button className="w-[180px] md:w-[160px] lg:w-[220px] py-3.5 rounded-full bg-white text-black font-bold text-[10px] uppercase tracking-widest hover:bg-neutral-200 transition-all duration-300">
            Get In Touch ↗
          </button>
          
          <button className="w-[180px] md:w-[160px] lg:w-[220px] py-3.5 rounded-full border border-white/20 bg-transparent text-white font-bold text-[10px] uppercase tracking-widest hover:bg-white/5 transition-all duration-300">
            Download Resume ↓
          </button>
        </div>
      </div>

      {/* Infinite Carousel */}
      <div className="absolute bottom-4 w-full">
        <div className="relative flex overflow-x-hidden border-y border-white/[0.05] py-5 lg:py-6">
          <motion.div 
            className="flex whitespace-nowrap gap-16 lg:gap-24 items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          >
            {[...tickerItems, ...tickerItems].map((role, i) => (
              <span 
                key={i} 
                className="text-[12px] sm:text-sm lg:text-lg font-black text-neutral-700 hover:text-white transition-colors duration-500 uppercase tracking-tighter"
              >
                {role}
              </span>
            ))}
          </motion.div>
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black via-black/80 to-transparent z-10" />
        </div>
      </div>
    </section>
  );
};

export default SpaceHero;
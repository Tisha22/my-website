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

  const imgX = useTransform(moveX, [-800, 800], [-20, 20]);
  const imgY = useTransform(moveY, [-500, 500], [-20, 20]);

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
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-transparent font-['Montserrat'] text-white"
    >
      {/* RESPONSIVE SCALE ENGINE */}
      <div 
        className={`z-20 flex flex-col items-center text-center px-4 transition-all duration-700 transform 
          scale-[0.85] 
          xs:scale-[0.95] 
          sm:scale-[1] 
          md:scale-[0.85] 
          lg:scale-[1] 
          xl:scale-[0.95] 
          2xl:scale-[1.05] 
          ${isWindows ? 'md:scale-[0.78] lg:scale-[0.9]' : ''}
          -mt-4 sm:-mt-8 lg:-mt-16`}
      >
        
        {/* Profile Portal */}
        <motion.div 
          style={{ x: imgX, y: imgY }}
          className="relative group mb-6 sm:mb-8 lg:mb-10 cursor-pointer"
        >
          {/* Subtle White Ambient Glow */}
          <div className="absolute inset-0 bg-white/5 blur-[50px] rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-1000" />

          {/* Rotating Dashed Border */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-4 sm:-inset-6 border border-dashed border-white/20 rounded-full group-hover:border-white/40 transition-all duration-700"
          />
          
          <div className="relative w-32 h-32 xs:w-40 xs:h-40 sm:w-52 sm:h-52 md:w-44 md:h-44 lg:w-56 lg:h-56 rounded-full border border-white/20 p-1.5 backdrop-blur-xl bg-white/5 overflow-hidden shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
            <motion.img 
              src="Tisha.jpg" 
              alt="Tisha Khandokar"
              className="relative w-full h-full object-cover rounded-full grayscale transition-all duration-1000 ease-in-out group-hover:grayscale-0 group-hover:scale-110 brightness-105 contrast-[1.05]"
            />
          </div>
        </motion.div>

        {/* Subheader */}
        <div className="mb-3 sm:mb-4">
          <motion.span 
            className="text-neutral-400 font-bold tracking-[0.3em] text-[9px] xs:text-[11px] md:text-[13px] uppercase"
          >
            NASA Recognized Space Tech Leader
          </motion.span>
        </div>

        {/* Name Heading */}
        <div className="mb-8 sm:mb-10 lg:mb-12 select-none">
          <h1 className="text-5xl xs:text-6xl sm:text-7xl md:text-6xl lg:text-8xl 2xl:text-9xl font-bold tracking-tighter leading-[0.8] uppercase text-white">
            TISHA
          </h1>
          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-4xl lg:text-6xl 2xl:text-7xl font-light italic text-neutral-500 tracking-tighter mt-1 sm:mt-2">
            — KHANDOKAR
          </h2>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-row gap-3 sm:gap-4 md:gap-6 items-center justify-center w-full max-w-full">
          <button 
            onClick={() => window.location.href = 'mailto:tishakhandoka120@gmail.com'}
            className="whitespace-nowrap px-6 xs:px-8 sm:px-10 py-3 sm:py-4 rounded-full bg-white text-black font-bold text-[9px] xs:text-[10px] sm:text-[11px] uppercase tracking-widest hover:bg-neutral-200 transition-all duration-300 shadow-lg"
          >
            Get In Touch ↗
          </button>
          
          {/* FIXED: Added anchor tag with download attribute */}
          <a 
            href="/Tisha_Resume.pdf" 
            download="Tisha_Khandokar_Resume.pdf"
            className="inline-block"
          >
            <button className="whitespace-nowrap px-6 xs:px-8 sm:px-10 py-3 sm:py-4 rounded-full border border-white/20 bg-transparent text-white font-bold text-[9px] xs:text-[10px] sm:text-[11px] uppercase tracking-widest hover:bg-white/10 transition-all duration-300">
              Download Resume ↓
            </button>
          </a>
        </div>
      </div>

      {/* Infinite Carousel */}
      <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 w-full">
        <div className="relative flex border-y border-white/5 py-4 sm:py-6">
          <motion.div 
            className="flex whitespace-nowrap gap-12 sm:gap-16 lg:gap-24 items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          >
            {[...tickerItems, ...tickerItems].map((role, i) => (
              <span 
                key={i} 
                className="text-[10px] xs:text-xs sm:text-sm lg:text-base 2xl:text-lg font-black text-neutral-800 hover:text-white transition-colors duration-500 uppercase tracking-tight"
              >
                {role}
              </span>
            ))}
          </motion.div>
          {/* Edge Fades */}
          <div className="absolute inset-y-0 left-0 w-20 sm:w-40 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-20 sm:w-40 bg-gradient-to-l from-black via-black/80 to-transparent z-10" />
        </div>
      </div>
    </section>
  );
};

export default SpaceHero;
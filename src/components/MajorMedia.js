import React from 'react';
import { motion } from 'framer-motion';

const MajorMedia = () => {
  const logos = ["NASA", "UNICEF", "TEDX", "BBC", "DAILY STAR", "PROTHOM ALO"];

  return (
    <section className="relative pb-20 bg-transparent overflow-hidden">
      
      {/* Infinite Marquee Container */}
      <div className="relative flex overflow-hidden border-y border-neutral-900 py-10">
        <motion.div 
          className="flex whitespace-nowrap"
          // Starts at -50% (the second set of logos) and moves to 0% (the first set)
          initial={{ x: "-50%" }}
          animate={{ x: "0%" }}
          transition={{ 
            duration: 25, // Increase for a slower, more premium feel
            repeat: Infinity, 
            ease: "linear",
          }}
        >
          {/* Double the array to create the loop buffer */}
          {[...logos, ...logos].map((logo, i) => (
            <span 
              key={i} 
              className="text-4xl md:text-6xl font-black text-neutral-800 hover:text-white transition-colors duration-500 cursor-default uppercase px-12"
            >
              {logo}
            </span>
          ))}
        </motion.div>
        
        {/* Gradient Overlays with pointer-events-none so hover still works */}
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none"></div>
      </div>
    </section>
  );
};

export default MajorMedia;
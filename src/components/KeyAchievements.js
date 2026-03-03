import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ArrowUpRight, Zap } from 'lucide-react';

const achievements = [
  {
    id: 1,
    title: "GLOBAL CHAMPION -NASA ",
    subtitle: "GLOBAL WINNER (TEAM DIAMONDS)",
    icon: <Award size={48} strokeWidth={1.2} />,
    image: "NASA.jpeg"
  },
  {
    id: 2,
    title: "NATIONAL CHAMPION - NASA ",
    subtitle: "NASA HEADQUARTERS EVENT (2024)",
    icon: <Award size={48} strokeWidth={1.2} />,
    image: "BASIS.jpeg"
  },
  {
    id: 3,
    title: "High Innovator at DataSoft",
    subtitle: "Innovation in youth learning",
    icon: <Award size={48} strokeWidth={1.2} />,
    image: "DataSoft.jpeg"
  }
];

const KeyAchievements = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isInside, setIsInside] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const transition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] };

  return (
    <section 
      onMouseEnter={() => setIsInside(true)}
      onMouseLeave={() => { setIsInside(false); setHoveredIndex(null); }}
      /* UPDATED: Increased horizontal padding (px-8 md:px-24 lg:px-40) */
      className="relative w-full py-16 px-8 md:px-24 lg:px-40 bg-transparent text-white overflow-visible cursor-none"
    >
      {/* Container to center and limit content width for better elegance */}
      <div className="max-w-7xl mx-auto">
        
        {/* 1. Micro Custom Cursor */}
        <motion.div 
          className="fixed top-0 left-0 z-[100] pointer-events-none mix-blend-difference"
          animate={{ 
              x: mousePos.x - 10, 
              y: mousePos.y - 10,
              scale: isInside ? 1 : 0,
              opacity: isInside ? 1 : 0
          }}
          transition={{ type: "spring", damping: 40, stiffness: 500 }}
        >
          <div className="p-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md">
            <Award size={10} className="text-white" />
          </div>
        </motion.div>

        {/* 2. Scaled Down Header */}
        <header className="relative mb-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
          <div className="z-10">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-[1px] bg-neutral-800"></div>
              <span className="text-[8px] tracking-[0.6em] text-neutral-600 font-bold uppercase italic">Selected Works</span>
            </div>
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.8] text-white">
              KEY
              <span className="font-thin italic opacity-20">ACHIEVEMENTS</span>
            </h2>
          </div>

          <div className="max-w-[220px] text-left md:text-right flex flex-col items-start md:items-end z-10">
            <div className="p-2 border border-neutral-900 rounded-full mb-3 text-neutral-800">
              <Zap size={18} strokeWidth={1} />
            </div>
            <p className="text-[7.5px] leading-relaxed uppercase tracking-[0.3em] text-neutral-600 font-light">
              Visual archive documenting international milestones and tech innovation.
            </p>
          </div>
        </header>

        {/* 3. List Section */}
        <div className="flex flex-col border-t border-neutral-900">
          {achievements.map((item, index) => (
            <div
              key={item.id}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative w-full py-10 flex items-center border-b border-neutral-900 overflow-visible"
            >
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={transition}
                    className="absolute inset-0 z-0 bg-white/[0.02] backdrop-blur-[40px]"
                  >
                    <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20, scale: 0.98 }}
                      animate={{ opacity: 1, y: "-50%", scale: 1 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={transition}
                      /* Adjusted positioning to prevent clipping with new wider margins */
                      className="absolute right-[5%] top-1/2 z-50 hidden lg:block"
                    >
                      <motion.div 
                        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                        transition={{ duration: 4, ease: "linear", repeat: Infinity }}
                        className="relative p-[3px] rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-rose-500 bg-[length:200%_200%] shadow-[0_0_30px_rgba(168,85,247,0.3)]"
                      >
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 bg-neutral-950/90 backdrop-blur-xl border border-white/10 text-white rounded-full shadow-2xl z-50 overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-50 pointer-events-none rounded-full" />
                          {item.icon}
                        </div>

                        <div className="relative p-1 bg-neutral-950 rounded-[14px]">
                          <img 
                            src={item.image} 
                            alt={item.title} 
                            className="w-[420px] h-[290px] object-cover rounded-xl"
                          />
                        </div>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="relative z-10 flex w-full justify-between items-center px-2 transition-all duration-700 group-hover:px-6">
                <div className="max-w-xl">
                  <h3 className={`text-xl md:text-2xl lg:text-3xl font-bold tracking-tighter transition-colors duration-500 ${
                    hoveredIndex === index ? 'text-white' : 'text-neutral-600'
                  }`}>
                    {item.title}
                  </h3>
                  <p className={`text-[8px] mt-1.5 uppercase tracking-[0.4em] font-semibold transition-colors duration-500 ${
                    hoveredIndex === index ? 'text-neutral-500' : 'text-neutral-800'
                  }`}>
                    {item.subtitle}
                  </p>
                </div>

                <div className={`transition-all duration-700 ${
                  hoveredIndex === index ? 'text-white opacity-100 scale-75' : 'text-neutral-900 opacity-0 -translate-x-4'
                }`}>
                  <ArrowUpRight size={32} strokeWidth={1} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyAchievements;
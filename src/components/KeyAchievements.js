import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ArrowUpRight, Zap, GraduationCap, Mic, Gavel, ShieldCheck } from 'lucide-react';

const achievements = [
  // Awards & Honors
  {
    id: 1,
    category: "Awards & Honors",
    title: "GLOBAL CHAMPION",
    subtitle: "NASA SPACE APPS CHALLENGE 2022",
    icon: <Award size={48} strokeWidth={1.2} />,
    image: "NASA.jpeg"
  },
  {
    id: 2,
    category: "Awards & Honors",
    title: "NATIONAL CHAMPION",
    subtitle: "NASA SPACE APPS CHALLENGE 2022 BANGLADESH",
    icon: <Award size={48} strokeWidth={1.2} />,
    image: "National_Champion.png"
  },
  {
    id: 3,
    category: "Awards & Honors",
    title: "BUSINESS AMERICA AWARD",
    subtitle: "TEAM LEADER - TEAM DIAMONDS",
    icon: <Award size={48} strokeWidth={1.2} />,
    image: "NRB Award.png"
  },
  {
    id: 4,
    category: "Awards & Honors",
    title: "PLAQUE OF HONOR",
    subtitle: "BANGLADESH 2022 - GLORIOUS ACHIEVEMENT FESTIVAL",
    icon: <Award size={48} strokeWidth={1.2} />,
    image: "Aamra Ekattor.png"
  },
  {
    id: 5,
    category: "Awards & Honors",
    title: "CERTIFICATE OF ACHIEVEMNT",
    subtitle: "GLOBAL CHAMPION - NASA SPACE APPS CHALLENGE",
    icon: <ShieldCheck size={48} strokeWidth={1.2} />,
    image: "CA.png"
  },

  // Judging & Mentor
  {
    id: 6,
    category: "Judging & Mentor",
    title: "INNOVATION STAGE JUDGE",
    subtitle: "CONRAD CHALLENGE 25-26",
    icon: <Gavel size={48} strokeWidth={1.2} />,
    image: "Conrad.jpeg"
  },
  {
    id: 7,
    category: "Judging & Mentor",
    title: "GALACTIC LOCAL JUDGE",
    subtitle: "NASA SPACE APPS CHALLENGE BANGLADESH 2025",
    icon: <Gavel size={48} strokeWidth={1.2} />,
    image: "LG.png"
  },
  {
    id: 8,
    category: "Judging & Mentor",
    title: "JUDGE",
    subtitle: "2026 ILLINOIS STUDENT INVENTION CONVENTION",
    icon: <Gavel size={48} strokeWidth={1.2} />,
    image: "Illinois.jpeg"
  },
  {
    id: 9,
    category: "Judging & Mentor",
    title: "GALACTIC LOCAL MENTOR",
    subtitle: "NASA SPACE APPS CHALLENGE BANGLADESH 2025",
    icon: <Zap size={48} strokeWidth={1.2} />,
    image: "LM.png"
  },
  {
    id: 10,
    category: "Judging & Mentor",
    title: "MISSION EXPERT",
    subtitle: "SPACE EXPLORATION OLYMPIAD",
    icon: <GraduationCap size={48} strokeWidth={1.2} />,
    image: "Olympiad.jpeg"
  },

  // Speaking & Panel
  {
    id: 11,
    category: "Speaking & Panel",
    title: "GUEST SPEAKER",
    subtitle: "NASA JUNIOR PILOT PROGRAM",
    icon: <Mic size={48} strokeWidth={1.2} />,
    image: "NASA_Junior_Pilot.png"
  },
  {
    id: 12,
    category: "Speaking & Panel",
    title: "SPECIAL GUEST",
    subtitle: "OPENING CEREMONY OF SPACE EXPLORATION OLYMPIAD BANGLADESH",
    icon: <Mic size={48} strokeWidth={1.2} />,
    image: "Space_Exploration.png"
  },
  {
    id: 13,
    category: "Speaking & Panel",
    title: "PANELIST",
    subtitle: "SPACEVERSE 1.0",
    icon: <Mic size={48} strokeWidth={1.2} />,
    image: "DU_Spacevarse.png"
  },
  {
    id: 14,
    category: "Speaking & Panel",
    title: "SPEAKER",
    subtitle: "ORIENTATION PROGRAM - SPRING 2023 OF SOFTWARE ENGINEERING, DIU",
    icon: <Mic size={48} strokeWidth={1.2} />,
    image: "DIU_SWE.png"
  }
];

const categoryIcons = {
  "Awards & Honors": <Award size={24} strokeWidth={1} />,
  "Judging & Mentor": <Gavel size={24} strokeWidth={1} />,
  "Speaking & Panel": <Mic size={24} strokeWidth={1} />
};

const groupedAchievements = achievements.reduce((acc, item) => {
  if (!acc[item.category]) acc[item.category] = [];
  acc[item.category].push(item);
  return acc;
}, {});

const CircularText = ({ text }) => {
  return (
    <div className="relative w-24 h-24 animate-[spin_10s_linear_infinite]">
      <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible opacity-40">
        <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
        <text className="text-[10px] uppercase tracking-[0.3em] fill-white font-bold">
          <textPath href="#circlePath" startOffset="0%">
            {text} • {text} •
          </textPath>
        </text>
      </svg>
    </div>
  );
};

const KeyAchievements = () => {
  const [hoveredId, setHoveredId] = useState(null);
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
      onMouseLeave={() => { setIsInside(false); setHoveredId(null); }}
      className="relative w-full py-24 px-8 md:px-24 lg:px-40 bg-transparent text-white overflow-visible cursor-none"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Micro Custom Cursor */}
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

        {/* Header */}
        <header className="relative mb-32 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
          <div className="z-10">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-[1px] bg-neutral-800"></div>
              <span className="text-[8px] tracking-[0.6em] text-neutral-600 font-bold uppercase italic">Selected Honors</span>
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
              Global archive documenting international milestones and strategic leadership.
            </p>
          </div>
        </header>

        {/* Categorized List Section */}
        <div className="flex flex-col gap-24 relative">
          
          {/* Continuous faded timeline line running down the left */}
          <div className="hidden lg:block absolute left-[27px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-neutral-800 to-transparent z-0"></div>

          {Object.entries(groupedAchievements).map(([category, items]) => (
            <div key={category} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 border-t border-neutral-900 pt-16 relative z-10">
              
              {/* Sticky Category Sidebar with Minimalist Graphics */}
              <div className="col-span-1 lg:col-span-4 relative">
                <div className="lg:sticky lg:top-32 flex items-start gap-8">
                  
                  {/* Glowing Node & Timeline Axis */}
                  <div className="hidden lg:flex flex-col items-center mt-2">
                    <div className="w-14 h-14 rounded-full border border-neutral-800 bg-neutral-950 flex items-center justify-center relative shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                      <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
                    </div>
                  </div>

                  {/* Title and Rotating Badge Graphic */}
                  <div className="flex flex-col">
                    <h3 className="text-3xl font-light tracking-widest uppercase text-white mb-2">
                      {category}
                    </h3>
                    <span className="text-[10px] tracking-[0.3em] text-neutral-500 font-bold uppercase mb-12">
                      {items.length} {items.length === 1 ? 'Milestone' : 'Milestones'}
                    </span>
                    
                    {/* Rotating Circular Text Graphic */}
                    <div className="relative flex items-center justify-center w-24 h-24 opacity-60 hover:opacity-100 transition-opacity duration-500">
                      <CircularText text={category} />
                      <div className="absolute text-white">
                        {categoryIcons[category]}
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Items List for the Category */}
              <div className="col-span-1 lg:col-span-8 flex flex-col">
                {items.map((item) => (
                  <div
                    key={item.id}
                    onMouseEnter={() => setHoveredId(item.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    className="group relative w-full py-10 flex items-center border-b border-neutral-900/50 last:border-b-0 overflow-visible"
                  >
                    {/* Hover Animations & Image Popup */}
                    <AnimatePresence>
                      {hoveredId === item.id && (
                        <motion.div 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={transition}
                          className="absolute inset-0 z-0 bg-white/[0.02] backdrop-blur-[40px]"
                        >
                          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
                          
                          <motion.div
                            /* NEW ANIMATION: Right to left slide in, keeping vertical centering */
                            initial={{ opacity: 0, x: 100, y: "-50%" }}
                            animate={{ opacity: 1, x: 0, y: "-50%" }}
                            exit={{ opacity: 0, x: 50, y: "-50%" }}
                            transition={transition}
                            className="absolute right-[5%] top-1/2 z-50 hidden lg:block pointer-events-none"
                          >
                            <div className="relative rounded-xl shadow-2xl flex items-center justify-center">
                              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 bg-neutral-950/90 backdrop-blur-xl border border-white/10 text-white rounded-full shadow-2xl z-50 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-50 pointer-events-none rounded-full" />
                                {item.icon}
                              </div>

                              <img 
                                src={item.image} 
                                alt={item.title} 
                                className="max-w-[280px] xl:max-w-[400px] max-h-[280px] xl:max-h-[400px] w-auto h-auto object-contain rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                              />
                            </div>
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Text Content */}
                    <div className="relative z-10 flex w-full justify-between items-center px-2 transition-all duration-700 group-hover:px-6">
                      <div className="max-w-[75%] lg:max-w-[55%] pr-4">
                        <h3 className={`text-xl md:text-2xl font-bold tracking-tighter transition-colors duration-500 ${
                          hoveredId === item.id ? 'text-white' : 'text-neutral-600'
                        }`}>
                          {item.title}
                        </h3>
                        <p className={`text-[8px] mt-1.5 uppercase tracking-[0.4em] font-semibold leading-relaxed transition-colors duration-500 ${
                          hoveredId === item.id ? 'text-neutral-500' : 'text-neutral-800'
                        }`}>
                          {item.subtitle}
                        </p>
                      </div>

                      <div className={`transition-all duration-700 ${
                        hoveredId === item.id ? 'text-white opacity-100 scale-75' : 'text-neutral-900 opacity-0 -translate-x-4'
                      }`}>
                        <ArrowUpRight size={32} strokeWidth={1} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyAchievements;
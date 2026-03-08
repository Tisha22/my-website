import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Microscope, ArrowUpRight, Globe, Layout, Database, Code } from 'lucide-react';

const ProjectResearch = () => {
  const researchItems = [
    {
      id: "01",
      title: "DIAMOND IN THE SKY",
      desc: "Interactive visualization engine for NASA satellite data simulation. Exploring stellar variability through high-fidelity UI systems.",
      url: "https://dribbble.com/shots/21390990-Diamond-In-The-Sky",
      img: "Game.png",
      tag: "NASA / FEATURE",
      icon: <Globe size={16} />
    },
    {
      id: "02",
      title: "PEACE MEDITATION",
      desc: "Neural-calm wellness interface using minimalist design patterns.",
      url: "https://dribbble.com/shots/21331167-Peace-Meditation-Based-Web-App",
      img: "PeaceInProject.webp",
      tag: "UX / WELLNESS",
      icon: <Layout size={16} />
    },
    {
      id: "03",
      title: "HEALER CONSULTANT",
      desc: "Digital infrastructure for healthcare consultancy workflows.",
      url: "https://dribbble.com/shots/21331214-Healer-Consultant-App",
      img: "Healer.webp",
      tag: "SYSTEMS / HEALTH",
      icon: <Database size={16} />
    },
    {
      id: "04",
      title: "MOBILE APP",
      desc: "Advanced fintech architecture and high-fidelity micro-interactions.",
      url: "https://dribbble.com/shots/21203690-Munim-Mobile-App",
      img: "MobileProject.webp",
      tag: "FINTECH / IOS",
      icon: <Code size={16} />
    }
  ];

  // State to track the active featured project
  const [activeId, setActiveId] = useState(researchItems[0].id);
  const featureItem = researchItems.find(item => item.id === activeId);

  // The rest go into the scrolling sidebar (doubled for seamless looping)
  const sideItems = [...researchItems, ...researchItems]; 

  return (
    <div className="relative py-24 px-6 bg-transparent text-white font-sans selection:bg-white selection:text-black">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <header className="mb-16 flex flex-col md:flex-row justify-between items-baseline gap-8 border-b border-white/10 pb-10">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 bg-white rounded-full" />
              <span className="text-[10px] uppercase tracking-[0.5em] text-neutral-500 font-bold">Project Archive</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.8] text-white">
            PROJECTS
            <span className="font-thin italic opacity-20">&RESEARCH</span>
          </h2>
          </motion.div>

          <div className="hidden md:flex flex-col items-end gap-2 opacity-30">
            <Microscope size={40} strokeWidth={1} />
            <span className="text-[10px] font-mono tracking-widest uppercase text-right leading-relaxed">Technical Index<br/>System v2.0</span>
          </div>
        </header>

        {/* Main Layout Grid - Height fixed to keep the layout structured */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto lg:h-[600px]">
          
          {/* LEFT: BIG FEATURE CARD (Interactive & Animated) */}
          <motion.div 
            className="lg:col-span-7 relative bg-neutral-900/20 border border-white/5 overflow-hidden rounded-xl h-[400px] lg:h-full"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={featureItem.id}
                initial={{ opacity: 0, filter: 'blur(10px)', scale: 0.95 }}
                animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
                exit={{ opacity: 0, filter: 'blur(10px)', scale: 1.05 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0 flex flex-col group cursor-default"
              >
                <div className="relative flex-1 overflow-hidden">
                  <img 
                    src={featureItem.img} 
                    alt={featureItem.title}
                    /* UPDATED: Removed grayscale and opacity classes to keep it fully colorful */
                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute top-6 left-6 bg-white text-black px-4 py-1.5 flex items-center gap-2">
                    <span className="text-[10px] font-bold tracking-widest uppercase">{featureItem.tag}</span>
                  </div>
                </div>
                <div className="p-8 bg-black/50 backdrop-blur-md border-t border-white/5">
                  <h3 className="text-3xl font-black tracking-tighter mb-3 uppercase">{featureItem.title}</h3>
                  <p className="text-neutral-400 text-sm max-w-2xl leading-relaxed font-light">{featureItem.desc}</p>
                  {/* UPDATED: Added text-white, font-bold, and removed group-hover:text-blue-400 */}
                  <a href={featureItem.url} className="mt-6 inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.3em] uppercase text-white hover:opacity-80 transition-opacity">
                    View Research <ArrowUpRight size={16} />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* RIGHT: SCROLLING SIDEBAR (Desktop: Vertical) */}
          <div className="hidden lg:flex lg:col-span-5 flex-col gap-6 h-full overflow-hidden relative">
            <div className="absolute top-0 w-full h-16 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none opacity-80" />
            <div className="absolute bottom-0 w-full h-16 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none opacity-80" />

            <motion.div 
              className="flex flex-col gap-8"
              animate={{ y: [0, -1400] }}
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            >
              {sideItems.map((item, idx) => (
                <div 
                  key={`${item.id}-${idx}`}
                  onClick={() => setActiveId(item.id)}
                  className={`group relative flex flex-col border rounded-xl p-5 cursor-pointer transition-all duration-500 ${
                    activeId === item.id ? 'border-white/30 bg-neutral-800/60 shadow-[0_0_15px_rgba(255,255,255,0.05)]' : 'bg-neutral-900/40 border-white/5 hover:border-white/20'
                  }`}
                >
                  <div className="relative aspect-video overflow-hidden rounded-lg mb-5">
                    <img 
                      src={item.img} 
                      className={`w-full h-full object-cover transition-all duration-500 ${activeId === item.id ? 'grayscale-0 opacity-100' : 'grayscale opacity-30 group-hover:opacity-80'}`} 
                      alt="" 
                    />
                    <div className={`absolute bottom-3 right-3 transition-colors ${activeId === item.id ? 'text-white' : 'text-white/50 group-hover:text-white'}`}>
                      {item.icon}
                    </div>
                  </div>
                  <h4 className={`text-base font-bold tracking-tight uppercase transition-all ${activeId === item.id ? 'text-white translate-x-1' : 'text-neutral-400 group-hover:text-white group-hover:translate-x-1'}`}>
                    {item.title}
                  </h4>
                  <p className="text-sm text-neutral-500 mt-2 line-clamp-2 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* BOTTOM: SCROLLING SECTION (Mobile/Tablet: Horizontal) */}
          <div className="flex lg:hidden w-full overflow-hidden relative mt-4">
            <div className="absolute left-0 w-16 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none opacity-80" />
            <div className="absolute right-0 w-16 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none opacity-80" />

            <motion.div 
              className="flex flex-row gap-6 w-max"
              animate={{ x: [0, -1400] }}
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            >
              {sideItems.map((item, idx) => (
                <div 
                  key={`mobile-${item.id}-${idx}`}
                  onClick={() => setActiveId(item.id)}
                  className={`group w-[320px] relative flex flex-col border rounded-xl p-5 cursor-pointer transition-all duration-500 ${
                    activeId === item.id ? 'border-white/30 bg-neutral-800/60' : 'bg-neutral-900/40 border-white/5 hover:border-white/20'
                  }`}
                >
                  <div className="relative aspect-video overflow-hidden rounded-lg mb-4">
                    <img 
                      src={item.img} 
                      className={`w-full h-full object-cover transition-all duration-500 ${activeId === item.id ? 'grayscale-0 opacity-100' : 'grayscale opacity-30 group-hover:opacity-80'}`} 
                      alt="" 
                    />
                    <div className={`absolute bottom-3 right-3 transition-colors ${activeId === item.id ? 'text-white' : 'text-white/50 group-hover:text-white'}`}>
                      {item.icon}
                    </div>
                  </div>
                  <h4 className={`text-base font-bold tracking-tight uppercase transition-colors ${activeId === item.id ? 'text-white' : 'text-neutral-400 group-hover:text-white'}`}>
                    {item.title}
                  </h4>
                  <p className="text-sm text-neutral-500 mt-2 line-clamp-2 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectResearch;
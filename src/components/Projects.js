import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Microscope, ArrowUpRight, Globe, Layout, Database, Code, Smartphone } from 'lucide-react';

const ProjectResearch = () => {
  const [activeId, setActiveId] = useState("01");
  const leftCardRef = useRef(null);
  const [containerHeight, setContainerHeight] = useState(0);

  const researchItems = [
    { id: "01", title: "DIAMOND IN THE SKY", desc: "It is an interactive space game where kids aged 10–12 decode the science behind why stars pulse and twinkle.", url: "#", img: "Diamond_In_The_Sky.png", tag: "NASA / FEATURE", icon: <Globe size={16} /> },
    { id: "02", title: "PEACE", desc: "Peace is a meditation app providing data-driven tools to help you find calm and focus in a loud world.", url: "#", img: "Peace.png", tag: "UX / WELLNESS", icon: <Layout size={16} /> },
    { id: "03", title: "HEALER", desc: "Healer connects you with licensed therapists via secure video or chat for on-demand mental health support.", url: "#", img: "Healer.png", tag: "SYSTEMS / HEALTH", icon: <Database size={16} /> },
    { id: "04", title: "YELL", desc: "Yell is an anti-cyberbullying platform that empowers users to detect, report, and block online harassment in real-time.", url: "#", img: "Yell.png", tag: "COMMUNITY / SAFETY", icon: <Code size={16} /> },
    { id: "05", title: "PEACE MOBILE", desc: "Advanced fintech architecture and high-fidelity micro-interactions. A seamless mobile experience for digital finance.", url: "#", img: "MobileProject.webp", tag: "FINTECH / IOS", icon: <Smartphone size={16} /> }
  ];

  const featureItem = researchItems.find(item => item.id === activeId);
  const sideItems = [...researchItems, ...researchItems, ...researchItems];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && leftCardRef.current) {
        setContainerHeight(leftCardRef.current.offsetHeight);
      } else {
        setContainerHeight('auto');
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [featureItem]);

  return (
    <div className="relative py-16 lg:py-24 px-4 sm:px-6 bg-transparent text-white font-sans selection:bg-white selection:text-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <header className="mb-12 lg:mb-16 flex flex-col md:flex-row justify-between items-start md:items-baseline gap-6 md:gap-8 border-b border-white/10 pb-8 lg:pb-10">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[1px] w-16 bg-white/30" />
              <span className="text-[10px] uppercase tracking-[0.5em] text-neutral-500 font-bold">Project Archive</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none">
              PROJECTS<span className="font-thin italic opacity-40">&RESEARCH</span>
            </h2>
          </motion.div>
          <div className="hidden md:flex flex-col items-end gap-2 opacity-30">
            <Microscope size={40} strokeWidth={1} />
                 <p className="text-white/40 text-[10px] uppercase tracking-widest leading-relaxed max-w-[240px]">              
                  PORTFOLIO OF STRATEGIC INNOVATIONS AND TECHNICAL ARCHITECTURE.
                  </p>
          </div>
        
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* LEFT: FEATURE CARD */}
          <motion.div 
            ref={leftCardRef}
            className="lg:col-span-7 relative bg-neutral-900/40 border border-white/5 overflow-hidden rounded-xl flex flex-col h-fit"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={featureItem.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col"
              >
                <div className="relative w-full bg-neutral-950/50 flex items-center justify-center overflow-hidden p-6 md:p-10" style={{ aspectRatio: '21 / 15.8' }}>
                  <motion.img 
                    src={featureItem.img} 
                    className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                    alt={featureItem.title}
                  />
                  <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-white text-black px-3 py-1 md:px-4 md:py-1.5 z-20">
                    <span className="text-[8px] md:text-[10px] font-black tracking-widest uppercase">{featureItem.tag}</span>
                  </div>
                </div>

                <div className="p-6 md:p-10 bg-neutral-900/80 backdrop-blur-xl border-t border-white/5">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-3xl md:text-4xl font-black tracking-tighter uppercase leading-none pr-4">{featureItem.title}</h3>
                    <div className="text-white/20 mt-1">{featureItem.icon}</div>
                  </div>
                  <p className="text-neutral-400 text-sm md:text-base max-w-2xl leading-relaxed font-light mb-8">{featureItem.desc}</p>
                  <a href={featureItem.url} className="inline-flex items-center gap-2 text-[10px] md:text-xs font-mono font-bold tracking-[0.3em] uppercase text-white hover:text-neutral-400">
                    View Full Case Study <ArrowUpRight size={16} />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* RIGHT: DESKTOP INFINITE SCROLLING SIDEBAR */}
          <div 
            className="hidden lg:flex lg:col-span-5 flex-col relative overflow-hidden rounded-xl"
            style={{ height: containerHeight === 'auto' ? 'auto' : `${containerHeight}px` }}
          >
            <div className="absolute top-0 w-full h-20 bg-gradient-to-b from-neutral-950 to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-neutral-950 to-transparent z-10 pointer-events-none" />

            <motion.div 
              className="flex flex-col gap-6 p-2"
              animate={{ y: ["0%", "-33.333%"] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              whileHover={{ animationPlayState: "paused" }}
            >
              {sideItems.map((item, idx) => (
                <div 
                  key={`desktop-${item.id}-${idx}`}
                  onClick={() => setActiveId(item.id)}
                  className={`group relative flex flex-col border rounded-xl p-4 cursor-pointer transition-all duration-500 ${
                    activeId === item.id 
                    ? 'border-white/40 bg-white/10 scale-[1.02]' 
                    : 'bg-neutral-900/40 border-white/5 hover:border-white/20 hover:bg-white/5'
                  }`}
                >
                  <div className="relative aspect-video overflow-hidden rounded-lg mb-4 bg-black/40 flex items-center justify-center">
                    <img 
                      src={item.img} 
                      className={`w-full h-full object-contain transition-all duration-700 ${
                        activeId === item.id 
                        ? 'opacity-100 scale-105' 
                        : 'opacity-60 group-hover:opacity-100'
                      }`} 
                      alt="" 
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <h4 className={`text-sm font-bold tracking-widest uppercase transition-colors duration-300 ${
                      activeId === item.id 
                      ? 'text-white' 
                      : 'text-neutral-500 group-hover:text-white'
                    }`}>
                      {item.title}
                    </h4>
                    <span className="text-[10px] font-mono text-neutral-600 group-hover:text-neutral-400">[{item.id}]</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* BOTTOM: MOBILE HORIZONTAL INFINITE SCROLL */}
          <div className="flex lg:hidden w-full overflow-hidden relative mt-2 rounded-xl">
            <div className="absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-neutral-950 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-neutral-950 to-transparent z-10 pointer-events-none" />

            <motion.div 
              className="flex flex-row gap-4 py-2 w-max"
              animate={{ x: ["0%", "-33.333%"] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
              {sideItems.map((item, idx) => (
                <div 
                  key={`mobile-${item.id}-${idx}`}
                  onClick={() => setActiveId(item.id)}
                  className={`group w-[260px] sm:w-[320px] flex-shrink-0 relative flex flex-col border rounded-xl p-4 cursor-pointer transition-all duration-500 ${
                    activeId === item.id ? 'border-white/40 bg-white/10' : 'bg-neutral-900/40 border-white/5'
                  }`}
                >
                  <div className="aspect-video overflow-hidden rounded-lg mb-3 bg-black/40 flex items-center justify-center">
                    <img 
                      src={item.img} 
                      className={`w-full h-full object-contain transition-all duration-700 ${
                        activeId === item.id 
                        ? 'opacity-100' 
                        : 'opacity-70 group-hover:opacity-100'
                      }`} 
                      alt="" 
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <h4 className={`text-xs sm:text-sm font-bold uppercase tracking-widest transition-colors duration-300 ${
                      activeId === item.id 
                      ? 'text-white' 
                      : 'text-neutral-400 group-hover:text-white'
                    }`}>
                      {item.title}
                    </h4>
                    <span className="text-[10px] font-mono text-neutral-600">[{item.id}]</span>
                  </div>
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
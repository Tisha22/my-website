import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, ArrowUpRight, Zap, GraduationCap, Mic, Gavel, ShieldCheck, Plus, Minus } from "lucide-react";

const achievements = [
  // Awards & Honors
  { id: 1, category: "Awards & Honors", title: "GLOBAL CHAMPION", subtitle: "NASA SPACE APPS CHALLENGE 2022", icon: <Award size={48} strokeWidth={1.2} />, image: "Nasa Award.PNG" },
  { id: 2, category: "Awards & Honors", title: "NATIONAL CHAMPION", subtitle: "NASA SPACE APPS CHALLENGE 2022 BANGLADESH", icon: <Award size={48} strokeWidth={1.2} />, image: "NSACBD.png" },
  { id: 3, category: "Awards & Honors", title: "BUSINESS AMERICA AWARD", subtitle: "TEAM LEADER - TEAM DIAMONDS", icon: <Award size={48} strokeWidth={1.2} />, image: "Award_NRB.png" },
  { id: 4, category: "Awards & Honors", title: "PLAQUE OF HONOR", subtitle: "BANGLADESH 2022 - GLORIOUS ACHIEVEMENT FESTIVAL", icon: <Award size={48} strokeWidth={1.2} />, image: "Aamra_Ekattor.png" },
  { id: 5, category: "Awards & Honors", title: "HIGH INNOVATOR", subtitle: "DATASOFT SYSTEMS BANGLADESH LIMITED", icon: <Zap size={48} strokeWidth={1.2} />, image: "DataSoft_Award.png" },
  { id: 6, category: "Awards & Honors", title: "CERTIFICATE OF ACHIEVEMNT", subtitle: "GLOBAL CHAMPION - NASA SPACE APPS CHALLENGE", icon: <ShieldCheck size={48} strokeWidth={1.2} />, image: "CA.png" },
  
  // Judging & Mentor
  { id: 7, category: "Judging & Mentor", title: "INNOVATION STAGE JUDGE", subtitle: "CONRAD CHALLENGE 25-26", icon: <Gavel size={48} strokeWidth={1.2} />, image: "Conrad.png" },
  { id: 8, category: "Judging & Mentor", title: "GALACTIC LOCAL JUDGE", subtitle: "NASA SPACE APPS CHALLENGE BANGLADESH 2025", icon: <Gavel size={48} strokeWidth={1.2} />, image: "LG.png" },
  { id: 9, category: "Judging & Mentor", title: "JUDGE", subtitle: "2026 ILLINOIS STUDENT INVENTION CONVENTION", icon: <Gavel size={48} strokeWidth={1.2} />, image: "Illinois.jpeg" },
  { id: 10, category: "Judging & Mentor", title: "GALACTIC LOCAL MENTOR", subtitle: "NASA SPACE APPS CHALLENGE BANGLADESH 2025", icon: <Zap size={48} strokeWidth={1.2} />, image: "LM.png" },
  { id: 11, category: "Judging & Mentor", title: "MISSION EXPERT", subtitle: "SPACE EXPLORATION OLYMPIAD", icon: <GraduationCap size={48} strokeWidth={1.2} />, image: "Olympiad.png" },
  
  // Speaking & Panel
  { id: 12, category: "Speaking & Panel", title: "SPECIAL GUEST", subtitle: "OPENING CEREMONY OF SPACE EXPLORATION OLYMPIAD BANGLADESH", icon: <Mic size={48} strokeWidth={1.2} />, image: "Space_Exploration_Olympiad.png" },
  { id: 13, category: "Speaking & Panel", title: "SPEAKER", subtitle: "ORIENTATION PROGRAM - SPRING 2023 OF SOFTWARE ENGINEERING, DIU", icon: <Mic size={48} strokeWidth={1.2} />, image: "DIU_Orientation.png" },
  { id: 14, category: "Speaking & Panel", title: "PANELIST", subtitle: "SPACEVERSE 1.0", icon: <Mic size={48} strokeWidth={1.2} />, image: "DU_Spacevarse.png" },
  { id: 15, category: "Speaking & Panel", title: "GUEST SPEAKER", subtitle: "NASA JUNIOR PILOT PROGRAM", icon: <Mic size={48} strokeWidth={1.2} />, image: "NASA_Junior_Pilot.png" },
];

const categoryIcons = {
  "Awards & Honors": <Award size={24} strokeWidth={1} />,
  "Judging & Mentor": <Gavel size={24} strokeWidth={1} />,
  "Speaking & Panel": <Mic size={24} strokeWidth={1} />,
};

const groupedAchievements = achievements.reduce((acc, item) => {
  if (!acc[item.category]) acc[item.category] = [];
  acc[item.category].push(item);
  return acc;
}, {});

const CircularText = ({ text }) => {
  return (
    <div className="relative w-20 h-20 md:w-24 md:h-24 animate-[spin_10s_linear_infinite]">
      <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible opacity-40">
        <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
        <text className="text-[10px] uppercase tracking-[0.3em] fill-white font-bold">
          <textPath href="#circlePath" startOffset="0%">{text} • {text} •</textPath>
        </text>
      </svg>
    </div>
  );
};

const KeyAchievements = () => {
  const [activeId, setActiveId] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isInside, setIsInside] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(Number(entry.target.getAttribute("data-id")));
          }
        });
      },
      { rootMargin: "-35% 0px -35% 0px", threshold: 0 }
    );

    const items = document.querySelectorAll(".achievement-item");
    items.forEach((item) => observer.observe(item));

    return () => {
      items.forEach((item) => observer.unobserve(item));
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const toggleCategory = (category) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const transition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] };
  const INITIAL_VISIBLE_COUNT = 2;

  return (
    <section
      onMouseEnter={() => setIsInside(true)}
      onMouseLeave={() => setIsInside(false)}
      className="relative w-full py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-transparent text-white overflow-visible cursor-default lg:cursor-none"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="fixed top-0 left-0 z-[100] pointer-events-none mix-blend-difference hidden lg:block"
          animate={{
            x: mousePos.x - 10,
            y: mousePos.y - 10,
            scale: isInside ? 1 : 0,
            opacity: isInside ? 1 : 0,
          }}
          transition={{ type: "spring", damping: 40, stiffness: 500 }}
        >
          <div className="p-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md">
            <Award size={10} className="text-white" />
          </div>
        </motion.div>

        <header className="relative mb-20 md:mb-32 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
          <div className="z-10">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-[1px] w-16 bg-white/30" />
              <span className="text-[8px] tracking-[0.6em] text-neutral-600 font-bold uppercase italic">Selected Honors</span>
            </div>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.8] text-white">
              KEY<span className="font-thin italic opacity-20">ACHIEVEMENTS</span>
            </h2>
          </div>
          <div className="max-w-[220px] text-left md:text-right flex flex-col items-start md:items-end z-10">
            <div className="p-2 border border-neutral-900 rounded-full mb-3 text-neutral-800 hidden md:flex">
              <Zap size={18} strokeWidth={1} />
            </div>
            <p className="text-[7.5px] leading-relaxed uppercase tracking-[0.3em] text-neutral-600 font-light">
              A CHRONICLE OF GLOBAL EXCELLENCE, INTERNATIONAL MILESTONES, AND STRATEGIC LEADERSHIP.
            </p>
          </div>
        </header>

        <div className="flex flex-col gap-16 md:gap-24 relative">
          <div className="hidden lg:block absolute left-[27px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-neutral-800 to-transparent z-0"></div>

          {Object.entries(groupedAchievements).map(([category, items]) => {
            const isExpanded = expandedCategories[category];
            const visibleItems = isExpanded ? items : items.slice(0, INITIAL_VISIBLE_COUNT);
            const hasMore = items.length > INITIAL_VISIBLE_COUNT;

            return (
              <div key={category} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 border-t border-neutral-900 pt-10 md:pt-16 relative z-10">
                <div className="col-span-1 lg:col-span-3 relative">
                  <div className="lg:sticky lg:top-32 flex items-start justify-between lg:justify-start gap-4 md:gap-8">
                    <div className="hidden lg:flex flex-col items-center mt-2">
                      <div className="w-14 h-14 rounded-full border border-neutral-800 bg-neutral-950 flex items-center justify-center relative shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                        <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
                      </div>
                    </div>
                    <div className="flex flex-col w-full md:w-auto">
                      <h3 className="text-2xl md:text-3xl font-light tracking-widest uppercase text-white mb-2">{category}</h3>
                      <span className="text-[9px] md:text-[10px] tracking-[0.3em] text-neutral-500 font-bold uppercase mb-6 md:mb-12">
                        {items.length} {items.length === 1 ? "Milestone" : "Milestones"}
                      </span>
                      <div className="relative hidden md:flex items-center justify-center w-20 h-20 md:w-24 md:h-24 opacity-60">
                        <CircularText text={category} />
                        <div className="absolute text-white">{categoryIcons[category]}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-span-1 lg:col-span-9 flex flex-col">
                  {visibleItems.map((item) => (
                    <div
                      key={item.id}
                      data-id={item.id}
                      onMouseEnter={() => setActiveId(item.id)}
                      className="achievement-item group relative w-full py-8 md:py-10 flex items-center border-b border-neutral-900/50 last:border-b-0 overflow-visible"
                    >
                      <AnimatePresence>
                        {activeId === item.id && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={transition}
                            className="absolute inset-0 z-0 bg-white/[0.02] md:bg-white/[0.04] backdrop-blur-[30px] rounded-lg md:rounded-none"
                          >
                            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
                            <motion.div
                              initial={{ opacity: 0, y: "0%", x: 0 }}
                              animate={{ opacity: 1, y: "-50%", x: 0 }}
                              exit={{ opacity: 0, y: "-100%", x: 0 }}
                              transition={transition}
                              className="absolute right-[2%] md:right-[5%] top-1/2 z-0 lg:z-50 pointer-events-none opacity-20 md:opacity-40 lg:opacity-100"
                            >
                              <div className="relative rounded-xl shadow-2xl flex items-center justify-center">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 p-2 md:p-4 bg-neutral-950/90 backdrop-blur-xl border border-white/10 text-white rounded-full shadow-2xl z-50">
                                  {React.cloneElement(item.icon, { className: "w-6 h-6 md:w-12 md:h-12" })}
                                </div>
                                <img
                                  src={item.image}
                                  alt={item.title}
                                  className="max-w-[150px] md:max-w-[280px] xl:max-w-[400px] max-h-[150px] md:max-h-[280px] xl:max-h-[400px] w-auto h-auto object-contain rounded-xl shadow-2xl grayscale lg:grayscale-0"
                                />
                              </div>
                            </motion.div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <div className="relative z-10 flex w-full justify-between items-center px-2 md:px-4">
                        <div className="max-w-[85%] md:max-w-[75%] lg:max-w-[55%] pr-4">
                          <h3 className={`text-lg md:text-2xl font-bold tracking-tighter transition-colors duration-500 ${activeId === item.id ? "text-white" : "text-neutral-600"}`}>
                            {item.title}
                          </h3>
                          <p className={`text-[7px] md:text-[8px] mt-1 md:mt-1.5 uppercase tracking-[0.3em] md:tracking-[0.4em] font-semibold transition-colors duration-500 ${activeId === item.id ? "text-neutral-400" : "text-neutral-800"}`}>
                            {item.subtitle}
                          </p>
                        </div>
                        <div className={`transition-all duration-700 ${activeId === item.id ? "text-white opacity-100 scale-75" : "text-neutral-900 opacity-0 -translate-x-4"}`}>
                          <ArrowUpRight size={24} className="md:w-8 md:h-8" strokeWidth={1} />
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Smaller, Less Visible Text Button */}
                  {hasMore && (
                    <div className="flex justify-end mt-6">
                      <button
                        onClick={() => toggleCategory(category)}
                        className="group flex items-center gap-4 py-4 z-20 cursor-pointer lg:cursor-none"
                      >
                        {!isExpanded && (
                          <span className="text-[9px] tracking-[0.3em] font-medium text-neutral-600 uppercase transition-colors group-hover:text-neutral-400">
                            View More
                          </span>
                        )}
                        <div className="p-3 border border-neutral-700 bg-neutral-900 rounded-full group-hover:bg-white group-hover:border-white group-hover:text-black shadow-[0_0_15px_rgba(255,255,255,0.02)] group-hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all duration-300 text-white">
                          {isExpanded ? <Minus size={20} strokeWidth={2} /> : <Plus size={20} strokeWidth={2} />}
                        </div>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default KeyAchievements;
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { ArrowUpRight, Radio, Globe } from 'lucide-react';

const NewsGallery = () => {
  const newsData = [
    {
      id: "01",
      title: "NASA OFFICIAL WEBSITE",
      category: "Global Leadership Recognition",
      summary: "Official NASA recognition for Team Diamonds, led by Tisha Khandokar, as the 2022 Global Space Apps Winners. The project highlights her vision in leveraging open-source data for global impact.",
      url: "https://www.earthdata.nasa.gov/news/nasa-announces-winners-2022-global-space-apps-challenge",
      img: "NASA.png", 
      tags: ["NASA", "Global Champion", "Space Apps"]
    },
    {
      id: "02",
      title: "NASA SPACE APPS CHALLENGE",
      category: "Technical Project Lead",
      summary: "Team Lead, Tisha Khandokar spearheaded Team Diamonds to become the Global Winner in the Most Inspirational category of the 2022 NASA Space Apps Challenge.",
      url: "https://2022.spaceappschallenge.org/challenges/2022-challenges/twinkle-twinkle-little-star/teams/team-diamonds/",
      img: "NSAC_2022.png",
      tags: ["Project", "Winner", "Official"]
    },
    {
      id: "03",
      title: "DAILY STAR",
      category: "Strategic Decision Maker",
      summary: "Tisha Khandokar leads her team to represent Bangladesh at NASA. The feature details her role as a strategic decision-maker in navigating high-stakes technical challenges.",
      url: "https://www.thedailystar.net/campus/campus/news/daffodil-international-university-students-represent-bangladesh-nasa-3622981",
      img: "Daily_24.png",
      tags: ["Represent", "DIU", "Bangladesh"]
    },
    {
      id: "04",
      title: "PROTHOM ALO",
      category: "Space Educator",
      summary: "An in-depth look at 'Diamond in the Sky', showcasing Tisha's expertise as a space educator. She transformed complex stellar data into an accessible learning journey for children.",
      url: "https://www.prothomalo.com/technology/os5yryt8pe",
      img: "Prothom_Alo_2023_2.png",
      tags: ["Science", "Education", "NASA Data"]
    },
    {
      id: "05",
      title: "THE DAILY STAR",
      category: "Product Management",
      summary: "A spotlight on Tisha's leadership as Team Diamonds outshined 31,000 participants. The report emphasizes her role as a product manager delivering world-class tech solutions.",
      url: "https://www.thedailystar.net/tech-startup/news/bangladeshi-team-wins-nasa-space-apps-challenge-2022-3194371",
      img: "Daily_23.png",
      tags: ["Startup", "World Title", "Tech"]
    },
    {
      id: "06",
      title: "OBSERVER BD",
      category: "Project Leadership",
      summary: "Reporting on the historic success where Tisha’s strategic roadmap guided her team to victory among 5,327 global entries in the 'Most Inspirational' category.",
      url: "https://www.observerbd.com/news.php?id=397087",
      img: "Observer.png",
      tags: ["Success", "National", "Achievement"]
    },
    {
      id: "07",
      title: "DAILY SUN",
      category: "Global Innovation",
      summary: "Celebrating a milestone for Bangladesh under Tisha’s guidance. The feature highlights her ability as a global innovator to bridge technical analysis and social inspiration.",
      url: "https://www.daily-sun.com/post/661602/Bangladesh-wins-NASA-space-apps-challenge",
      img: "Daily_Sun.png",
      tags: ["Global Stage", "Media", "Victory"]
    },
    {
      id: "08",
      title: "PROTHOM ALO",
      category: "Technical Analyst",
      summary: "National reporting on Tisha's execution of the gamified platform. Her analytical approach allowed the team to utilize NASA's open-source data with precision.",
      url: "https://www.prothomalo.com/technology/wv6yv9lqyr",
      img: "Prothom_Alo_2023_1.png",
      tags: ["Technology", "Innovation", "National Pride"]
    },
    {
      id: "09",
      title: "KALER KONTHO",
      category: "Strategic Roadmapping",
      summary: "A detailed account of Tisha's journey from hackathon participant to global leader, documenting her growth as a premier strategic decision-maker in tech.",
      url: "https://www.ekalerkantho.com/home/page/2022-12-25/7",
      img: "Kaler_Kantho.png",
      tags: ["Journalism", "Hackathon", "Winner"]
    },
    {
      id: "10",
      title: "SAMAKAL TECH LIFE",
      category: "Product Strategy",
      summary: "Tisha discusses the product development lifecycle of her award-winning app, focusing on UX strategy and the pedagogical value of space science.",
      url: "https://samakal.com/techlife/article/2212146939",
      img: "Samakal.png",
      tags: ["Education", "TechLife", "Kids"]
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 200 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <section className="relative py-24 px-6 bg-transparent text-white overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto relative z-10">
        <header className="mb-20 flex flex-col md:flex-row items-start md:items-end justify-between border-b border-white/10 pb-10 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-4">
            <span className="h-[1px] w-16 bg-white/30" />
              <span className="text-[10px] uppercase tracking-[0.5em] text-white/50 font-bold">Press Coverage</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none">
              NEWS<span className="font-thin italic opacity-40">GALLERY</span>
            </h2>
          </motion.div>
          
          <div className="text-left md:text-right">
            <Globe className="text-white/10 mb-4 md:ml-auto" size={48} strokeWidth={1} />
            <p className="text-white/40 text-[10px] uppercase tracking-widest leading-relaxed max-w-[240px]">
              Documenting the global recognition of Tisha Khandokar across major media outlets.
            </p>
          </div>
        </header>

        <div className="flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-[65%]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative group"
              >
                <a 
                  href={newsData[activeIndex].url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  onMouseMove={handleMouseMove}
                  className="block relative aspect-video overflow-hidden rounded-sm border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl cursor-none"
                >
                  <motion.div
                    className="absolute z-50 pointer-events-none flex items-center justify-center"
                    style={{ left: cursorX, top: cursorY, x: "-50%", y: "-50%" }}
                    animate={{ opacity: isHovering ? 1 : 0, scale: isHovering ? 1 : 0.5 }}
                  >
                    <div className="bg-white text-black px-4 py-2 rounded-full font-black text-[10px] uppercase tracking-widest shadow-xl flex items-center gap-2 whitespace-nowrap">
                      Read Full Story <ArrowUpRight size={14} />
                    </div>
                  </motion.div>

                  <motion.img 
                    src={newsData[activeIndex].img} 
                    alt={newsData[activeIndex].title} 
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-1000"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  <div className="absolute top-4 right-4 hidden md:block">
                    <div className="bg-black/40 backdrop-blur-md border border-white/10 px-4 py-2 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                      <span className="text-[9px] uppercase tracking-tighter font-bold">Verified Source</span>
                    </div>
                  </div>
                </a>

                <div className="mt-10">
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <span className="px-3 py-1 bg-white text-black text-[10px] font-black uppercase tracking-tighter">
                      Top Headline
                    </span>
                    <div className="flex gap-2">
                      {newsData[activeIndex].tags.map(tag => (
                        <span key={tag} className="text-[10px] text-white/30 uppercase tracking-[0.2em] border border-white/10 px-3 py-1">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <a href={newsData[activeIndex].url} target="_blank" rel="noopener noreferrer" className="block group/text">
                    <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6 leading-[0.9] group-hover/text:text-white/80 transition-colors">
                      {newsData[activeIndex].title}
                    </h3>
                    <p className="text-white/50 text-base md:text-lg font-light leading-relaxed max-w-2xl border-l-2 border-white/10 pl-6 group-hover/text:border-white/30 transition-all">
                      {newsData[activeIndex].summary}
                    </p>
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="w-full lg:w-[35%] flex flex-col gap-3">
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-white/20 mb-6 flex items-center gap-2">
              <span className="w-12 h-[1px] bg-white/20" /> News Feed
            </h4>
            
            <div className="h-[480px] overflow-y-auto pr-2 space-y-3 bg-transparent scrollbar-thin scrollbar-thumb-white/10">
              {newsData.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-full relative group text-left p-6 transition-all duration-500 border rounded-sm ${
                    activeIndex === index 
                    ? 'border-white/30 translate-x-2 bg-white/5' 
                    : 'border-white/5 hover:border-white/10'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex gap-6">
                      <span className={`text-xl font-black transition-all ${
                        activeIndex === index ? 'text-white' : 'text-white/10'
                      }`}>
                        {item.id}
                      </span>
                      <div>
                        <h5 className={`font-bold uppercase tracking-tight transition-colors ${
                          activeIndex === index ? 'text-white' : 'text-white/40 group-hover:text-white/70'
                        }`}>
                          {item.title}
                        </h5>
                        <p className={`text-[9px] uppercase tracking-[0.2em] mt-1 transition-colors ${
                          activeIndex === index ? 'text-white/60' : 'text-white/20'
                        }`}>
                          {item.category}
                        </p>
                      </div>
                    </div>
                    {activeIndex === index && (
                      <motion.div layoutId="activeArrow" className="text-white">
                        <ArrowUpRight size={18} />
                      </motion.div>
                    )}
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-8 p-8 border border-white/5 rounded-sm bg-transparent">
              <div className="flex items-center gap-4 mb-4 opacity-30">
                <div className="h-[1px] flex-1 bg-white/20" />
                <span className="text-[9px] uppercase tracking-widest font-bold">MAJOR AREA</span>
              </div>
              <div className="grid grid-cols-2 gap-4 text-[10px] text-white/40 uppercase tracking-widest">
                <span className="hover:text-white cursor-default transition-colors">NASA</span>
                <span className="hover:text-white cursor-default transition-colors">SPACE</span>
                <span className="hover:text-white cursor-default transition-colors">STEM</span>
                <span className="hover:text-white cursor-default transition-colors">EDUCATION</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsGallery;
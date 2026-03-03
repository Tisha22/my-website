import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ArrowUpRight, Radio, Globe } from 'lucide-react';

const NewsGallery = () => {
  const newsData = [
    {
      id: "01",
      title: "BBC NEWS INTERVIEW",
      category: "International Feature",
      summary: "Team Diamonds lead Tisha Khandokar discusses their 'Most Inspirational' global win, explaining how they transformed NASA data into a gamified journey for kids.",
      url: "https://www.youtube.com/watch?v=SP597hlHmbQ",
      img: "https://img.youtube.com/vi/SP597hlHmbQ/maxresdefault.jpg",
      tags: ["BBC", "Space Apps", "World Champion"]
    },
    {
      id: "02",
      title: "NASA HEADQUARTERS",
      category: "Global Winner Celebration",
      summary: "A milestone achievement at NASA HQ in Washington D.C. This ceremony recognized our technical architecture for analyzing stellar variability.",
      url: "https://youtu.be/R7-QmU9I5TQ",
      img: "https://img.youtube.com/vi/R7-QmU9I5TQ/maxresdefault.jpg",
      tags: ["NASA HQ", "DC", "Award"]
    },
    {
      id: "03",
      title: "TEDx STUDIO TALK",
      category: "Keynote Appearance",
      summary: "A technical deep-dive into the development process, detailing the roadmap from a 36-hour hackathon to becoming NASA World Champions.",
      url: "https://youtu.be/qy4YUGSKiT4",
      img: "https://img.youtube.com/vi/qy4YUGSKiT4/maxresdefault.jpg",
      tags: ["TEDx", "Strategy", "Tech"]
    },
    {
      id: "04",
      title: "WINNER CELEBRATION",
      category: "DIU Homecoming",
      summary: "The official homecoming event at Daffodil International University, celebrating national pride and the first steps of our space-tech journey.",
      url: "https://youtu.be/-vUFnxhFWvg",
      img: "https://img.youtube.com/vi/-vUFnxhFWvg/maxresdefault.jpg",
      tags: ["Bangladesh", "DIU", "Celebration"]
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative py-24 px-6 bg-transparent text-white overflow-hidden font-sans">
      {/* Cinematic Background Watermark */}
      
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <header className="mb-20 flex flex-col md:flex-row items-start md:items-end justify-between border-b border-white/10 pb-10 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Radio className="text-red-600 animate-pulse" size={18} />
              <span className="text-[10px] uppercase tracking-[0.5em] text-white/50 font-bold">Press Archive / Global Presence</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none">
              NEWS<span className="font-thin italic opacity-40">GALLERY</span>
            </h2>
          </motion.div>
          
          <div className="text-left md:text-right">
            <Globe className="text-white/10 mb-4 md:ml-auto" size={48} strokeWidth={1} />
            <p className="text-white/40 text-[10px] uppercase tracking-widest leading-relaxed max-w-[240px]">
              Documenting the technical and social impact of Team Diamonds across world-class media.
            </p>
          </div>
        </header>

        {/* Main Content Layout */}
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left Side: Featured Viewport */}
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
                {/* Image Frame */}
                <div className="relative aspect-video overflow-hidden rounded-sm border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl">
                  <motion.img 
                    src={newsData[activeIndex].img} 
                    alt={newsData[activeIndex].title} 
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-1000"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Play Button */}
                  <a 
                    href={newsData[activeIndex].url} 
                    target="_blank" 
                    rel="noreferrer"
                    className="absolute inset-0 flex items-center justify-center group"
                  >
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      className="w-20 h-20 rounded-full bg-white/5 backdrop-blur-xl border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300"
                    >
                      <Play fill="currentColor" size={28} className="ml-1" />
                    </motion.div>
                  </a>

                  {/* Top Right Label */}
                  <div className="absolute top-4 right-4 hidden md:block">
                    <div className="bg-black/40 backdrop-blur-md border border-white/10 px-4 py-2 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                      <span className="text-[9px] uppercase tracking-tighter font-bold">1080p Archive</span>
                    </div>
                  </div>
                </div>

                {/* Info Below Image */}
                <div className="mt-10">
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <span className="px-3 py-1 bg-white text-black text-[10px] font-black uppercase tracking-tighter">
                      Active Report
                    </span>
                    <div className="flex gap-2">
                      {newsData[activeIndex].tags.map(tag => (
                        <span key={tag} className="text-[10px] text-white/30 uppercase tracking-[0.2em] border border-white/10 px-3 py-1">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6 leading-[0.9]">
                    {newsData[activeIndex].title}
                  </h3>
                  
                  <p className="text-white/50 text-base md:text-lg font-light leading-relaxed max-w-2xl border-l-2 border-white/10 pl-6">
                    {newsData[activeIndex].summary}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Side: Interactive List Sidebar */}
          <div className="w-full lg:w-[35%] flex flex-col gap-3">
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-white/20 mb-6 flex items-center gap-2">
              <span className="w-12 h-[1px] bg-white/20" /> Press Feed
            </h4>
            
            <div className="space-y-3">
              {newsData.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => setActiveIndex(index)}
                  className={`w-full relative group text-left p-6 transition-all duration-500 border rounded-sm ${
                    activeIndex === index 
                    ? 'bg-white/5 border-white/30 translate-x-2' 
                    : 'border-white/5 hover:border-white/10 hover:bg-white/[0.03]'
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

            {/* Network Block */}
            <div className="mt-8 p-8 border border-white/5 rounded-sm bg-white/[0.02]">
              <div className="flex items-center gap-4 mb-4 opacity-30">
                <div className="h-[1px] flex-1 bg-white/20" />
                <span className="text-[9px] uppercase tracking-widest font-bold">Network</span>
              </div>
              <div className="grid grid-cols-2 gap-4 text-[10px] text-white/40 uppercase tracking-widest">
                <span className="hover:text-white cursor-default transition-colors">Press Kit</span>
                <span className="hover:text-white cursor-default transition-colors">NASA TV</span>
                <span className="hover:text-white cursor-default transition-colors">BBC World</span>
                <span className="hover:text-white cursor-default transition-colors">TEDx</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NewsGallery;
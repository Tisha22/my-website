import React from 'react';
import { motion } from 'framer-motion';
import { Play, Video, ArrowUpRight } from 'lucide-react';

const MediaMarquee = () => {
  const mediaLinks = [
    { 
      id: "01", 
      title: "BBC News Interview", 
      category: "BBC WORLD", 
      desc: "An international feature on Team Diamonds' global victory and our technical approach to solving NASA's stellar data challenges.",
      thumbnail: "https://img.youtube.com/vi/SP597hlHmbQ/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=SP597hlHmbQ"
    },
    { 
      id: "02", 
      title: "NASA HQ Celebration", 
      category: "NASA.GOV", 
      desc: "Capturing the official winners celebration at NASA Headquarters in Washington D.C., representing global innovation.",
      thumbnail: "https://img.youtube.com/vi/R7-QmU9I5TQ/maxresdefault.jpg",
      url: "https://youtu.be/R7-QmU9I5TQ"
    },
    { 
      id: "03", 
      title: "Somoy TV Feature", 
      category: "SOMOY NEWS", 
      desc: "Detailed coverage of the technological impact and national pride following the NASA Space Apps global win.",
      thumbnail: "https://img.youtube.com/vi/yLeM84Rj0nM/maxresdefault.jpg",
      url: "https://youtu.be/yLeM84Rj0nM"
    },
    { 
      id: "04", 
      title: "TEDx / LEAD Talk", 
      category: "TEDx STUDIO", 
      desc: "A deep dive into the 'Most Inspirational' project architecture and the journey of becoming world champions.",
      thumbnail: "https://img.youtube.com/vi/qy4YUGSKiT4/maxresdefault.jpg",
      url: "https://youtu.be/qy4YUGSKiT4"
    },
    { 
      id: "05", 
      title: "News 24 Special", 
      category: "NEWS 24", 
      desc: "Broadcasting the journey of the 2024 winners and the future of space exploration technology.",
      thumbnail: "https://img.youtube.com/vi/82zAQ7YYtCE/maxresdefault.jpg",
      url: "https://youtu.be/82zAQ7YYtCE"
    },
    { 
      id: "06", 
      title: "NASA Junior Pilot", 
      category: "NASA EDUCATION", 
      desc: "Engaging with the next generation of explorers through NASA's specialized pilot and outreach programs.",
      thumbnail: "https://img.youtube.com/vi/C-opzzlWpgU/maxresdefault.jpg",
      url: "https://youtu.be/C-opzzlWpgU"
    }
  ];

  // We duplicate the array to create a seamless loop
  const duplicatedMedia = [...mediaLinks, ...mediaLinks];

  return (
    <section className="py-32 bg-transparent overflow-hidden font-sans">
      {/* Cinematic Header Section */}
      <div className="max-w-7xl mx-auto px-6 mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12 relative">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
          className="relative z-10"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="h-[1px] w-16 bg-white/30" />
            <span className="text-[11px] uppercase tracking-[0.6em] text-white/40 font-bold">Press & Media</span>
          </div>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.8] text-white">
            MEDIA   
            <span className="font-thin italic opacity-20"> ARCHIVE</span>
          </h2>
        </motion.div>

        <motion.div 
           initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
           whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
           transition={{ duration: 1.2 }}
           className="hidden md:block relative z-0"
        >
          <Video className="text-white/[0.07] mb-4 ml-auto" size={160} strokeWidth={0.5} />
        </motion.div>
      </div>

      {/* Infinite Marquee Section */}
      <div className="flex border-y border-white/5 bg-white/[0.01] backdrop-blur-3xl">
        <motion.div
          className="flex"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 60, // Increased duration to keep pace smooth with more items
            repeat: Infinity,
          }}
        >
          {duplicatedMedia.map((item, index) => (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="group w-[500px] flex-shrink-0 border-r border-white/10 transition-all duration-700 hover:bg-white/[0.04] relative overflow-hidden"
            >
              <div className="relative aspect-video overflow-hidden m-10 mb-8 rounded-sm transition-all duration-1000 border border-white/5 shadow-lg">
                <img 
                  src={item.thumbnail} 
                  alt={item.title}
                  className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                  onError={(e) => {
                    // Fallback to standard quality if maxres isn't available
                    e.target.src = item.thumbnail.replace('maxresdefault', 'hqdefault');
                  }}
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700" />
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-2xl">
                        <Play fill="white" size={20} className="ml-1 text-white" />
                    </div>
                </div>
              </div>

              <div className="px-10 pb-12 relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-[10px] font-mono text-white/40 tracking-widest">{item.id}</span>
                  <div className="h-[1px] w-8 bg-white/10"></div>
                  <span className="text-[10px] font-mono text-white/50 tracking-[0.3em] uppercase">
                    {item.category}
                  </span>
                </div>

                <div className="flex justify-between items-start gap-4">
                    <h4 className="text-2xl font-bold text-white mb-4 tracking-tight uppercase leading-none">
                    {item.title}
                    </h4>
                    <ArrowUpRight size={20} className="text-white/20 group-hover:text-white transition-colors flex-shrink-0" />
                </div>

                <p className="text-sm leading-relaxed text-neutral-400 font-light line-clamp-2 group-hover:text-neutral-200 transition-colors duration-500">
                  {item.desc}
                </p>
              </div>

              <div className="absolute top-0 right-0 w-[1px] h-0 bg-gradient-to-b from-white/40 to-transparent group-hover:h-full transition-all duration-1000" />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MediaMarquee;
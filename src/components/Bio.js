import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Award, ChevronRight, BarChart3, Zap, Palette, Briefcase, Cpu, Gem } from 'lucide-react';

const Bio = () => {
  const [activeSkill, setActiveSkill] = useState(null);

  const transition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] };

  const experienceData = [
    { name: "Student Associate", icon: <Briefcase size={18} />, desc: "Human Recource Developmemnt Institute - HRDI (2021 - 2023)" },
    { name: "Business Analyst", icon: <Cpu size={18} />, desc: "Datasoft Systems Bangladesh Limited (2023 - 2024)" },
    { name: "Project Manager", icon: <Gem size={18} />, desc: "Team Diamonds (2022 - Current)" }
  ];

  const skillData = [
    { 
      id: "strategic", 
      title: "STRATEGIC LEADERSHIP", 
      icon: <BarChart3 className="w-6 h-6" />,
      skills: "Agile Methodology • SDLC Leadership • Cross-Functional Direction",
      details: "Lead end-to-end product ecosystems from concept to enterprise deployment, translating strategy into scalable technical frameworks, directing cross-functional teams, and driving measurable impact through data-driven execution."},
    { 
      id: "design", 
      title: "INNOVATION & SYSTEMS DESIGN", 
      icon: <Palette className="w-6 h-6" />,
      skills: "Scalable Infrastructure • Data-Driven Frameworks • Human-Centered Engineering",
      details: "Drive product execution through Agile and iterative delivery, define strategic roadmaps aligned with long-term objectives, lead stakeholder communication across teams, and ensure governance, performance, and continuous optimization."
    },
    { 
      id: "tech", 
      title: "TECHNICAL AUTHORITY", 
      icon: <Zap className="w-6 h-6" />,
      skills: "Enterprise Architecture • Product Vision • Data-Driven Analytics",
      details: "Drive product execution using Agile and iterative delivery models. Define strategic roadmaps aligned with long-term business objectives. Lead stakeholder communication across technical and executive teams. Ensure governance, performance metrics, and continuous optimization"
    },
  ];

  return (
    <section className="relative py-16 md:py-24 px-6 md:px-12 lg:px-24 w-full bg-transparent text-white  overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        
        {/* LEFT SECTION: Portrait, Experience & Contacts */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transition}
          className="lg:col-span-5 w-full flex flex-col gap-8 md:gap-12"
        >
          <div className="relative group mx-auto lg:mx-0 max-w-[420px] w-full">
            {/* NASA Glass Badge */}
            <div className="absolute -top-3 -left-3 z-30 p-4 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
              <Award size={20} className="text-white mb-1 mx-auto" />
              <span className="text-[9px] font-black tracking-widest uppercase text-center block leading-tight">NASA GLOBAL<br/>CHAMPION</span>
            </div>

            {/* Profile Frame */}
            <div className="relative rounded-[1.5rem] overflow-hidden aspect-[4/5] border border-white/10 bg-white/[0.02] backdrop-blur-sm shadow-2xl">
              <img 
                src="TishaBio.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
              />
            </div>
          </div>

          {/* Three Modern Interactive Work Cards */}
          <div className="grid grid-cols-3 gap-3">
            {experienceData.map((work, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.08)" }}
                className="p-4 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-md flex flex-col items-center text-center gap-3 transition-all cursor-default"
              >
                <div className="text-neutral-300">{work.icon}</div>
                <div>
                  <h5 className="text-[10px] font-black tracking-tight uppercase leading-tight mb-1">{work.name}</h5>
                  <p className="text-[8px] text-neutral-500 uppercase font-bold tracking-widest">{work.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Circular Contact Nodes */}
          <div className="flex justify-around lg:justify-between items-center px-4">
            <ContactCircle icon={<Phone size={20} />} label="Call" value="929-756-8240" />
            <ContactCircle icon={<Mail size={20} />} label="Email" value="tisha.k@gmail.com" />
            <ContactCircle icon={<MapPin size={20} />} label="Loc" value="Arlington, VA" />
          </div>
        </motion.div>

        {/* RIGHT SECTION: Media Archive Title & Bio */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={transition}
          className="lg:col-span-7 w-full space-y-12"
        >
          {/* MEDIA ARCHIVE STYLE TITLE - Refined Size */}
          <div className="relative overflow-hidden pt-4">
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none">
              BIO<span className="font-thin italic opacity-40">GRAPHY</span>
            </h2>
            
            {/* Archive Divider */}
            <div className="h-[1px] w-full bg-white/20 mt-8 mb-10" />
            
            <p className="text-xl md:text-2xl lg:text-2xl text-neutral-200  opacity-40 font-light leading-snug max-w-3xl border-l-4 border-white pl-8 md:pl-10 hover:text-white">
              Software Engineer & Product Strategist driving <span className="text-white font-black italic ">High-Impact</span> and <span className="text-white font-black italic">Data-Driven</span> digital platforms, transforming complex challenges into scalable solutions that deliver measurable growth and lasting strategic impact.
            </p>
          </div>

          {/* Skill Matrix */}
          <div className="space-y-4">
            <h3 className="text-[10px] uppercase tracking-[0.6em] text-neutral-600 font-black mb-6">Expertise Architecture</h3>
            
            {skillData.map((item) => (
              <button 
                key={item.id}
                onClick={() => setActiveSkill(activeSkill === item.id ? null : item.id)}
                className={`w-full text-left p-6 md:p-8 rounded-2xl border transition-all duration-500 flex flex-col gap-4 ${
                  activeSkill === item.id 
                    ? 'bg-white/[0.08] border-white/40 backdrop-blur-xl' 
                    : 'bg-white/[0.02] border-white/5 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-6">
                    <span className={`${activeSkill === item.id ? 'text-white' : 'text-neutral-500'} transition-colors`}>
                      {item.icon}
                    </span>
                    <h4 className="text-lg md:text-xl font-bold uppercase tracking-tighter">{item.title}</h4>
                  </div>
                  <motion.div animate={{ rotate: activeSkill === item.id ? 90 : 0 }}>
                    <ChevronRight size={22} className="text-neutral-500" />
                  </motion.div>
                </div>
                
                <p className="text-xs md:text-sm text-neutral-400 font-medium uppercase tracking-[0.2em] pl-10 md:pl-14">
                  {item.skills}
                </p>

                <AnimatePresence>
                  {activeSkill === item.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6 mt-6 border-t border-white/10 pl-10 md:pl-14">
                        <p className="text-base md:text-lg text-neutral-300 font-light leading-relaxed italic">
                          {item.details}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ContactCircle = ({ icon, label, value }) => (
  <div className="flex flex-col items-center gap-3 group relative">
    <motion.div 
      whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.4)' }}
      className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-white/10 flex items-center justify-center bg-white/[0.02] backdrop-blur-md transition-all cursor-pointer text-white shadow-lg"
    >
      {icon}
    </motion.div>
    
    <div className="absolute -bottom-16 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center pointer-events-none z-50">
      <span className="text-[9px] font-black uppercase tracking-widest text-neutral-500 mb-1">{label}</span>
      <span className="text-xs font-bold text-white whitespace-nowrap bg-black/90 px-3 py-1.5 rounded-lg border border-white/10 shadow-2xl">
        {value}
      </span>
    </div>
  </div>
);

export default Bio;
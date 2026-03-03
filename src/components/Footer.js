import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Facebook, Linkedin, Github, Twitter, Globe, MapPin, Mail, Send, CheckCircle } from 'lucide-react';

const Footer = () => {
  const [formData, setFormData] = useState({ email: '', message: '' });
  const [formStatus, setFormStatus] = useState('idle'); // 'idle' | 'submitting' | 'success'

  // Add your actual profile links here
  const socials = [
    { name: 'Email', icon: <Mail size={24} strokeWidth={1} />, url: 'mailto:tishakhandoka11@gmail.com' },
    { name: 'LinkedIn', icon: <Linkedin size={24} strokeWidth={1} />, url: '#' },
    { name: 'GitHub', icon: <Github size={24} strokeWidth={1} />, url: '#' },
    { name: 'Twitter', icon: <Twitter size={24} strokeWidth={1} />, url: '#' },
    { name: 'Facebook', icon: <Facebook size={24} strokeWidth={1} />, url: '#' },
    { name: 'Website', icon: <Globe size={24} strokeWidth={1} />, url: '#' },
  ];

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate network request
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ email: '', message: '' });
      
      // Reset form after 3 seconds
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  return (
    // Reduced outer padding and added min-h-screen to fit exactly on one laptop screen
    <footer className="relative bg-transparent text-white py-12 min-h-screen flex flex-col justify-center overflow-hidden border-t border-white/10 font-[Montserrat] selection:bg-white selection:text-black">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center w-full">
        
        {/* Heading Section (Collaborate removed, margin reduced) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 flex flex-col items-center"
        >
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">
            GET IN TOUCH
          </h2>
        </motion.div>

        {/* Interactive Glassmorphic Contact Form (2 fields, reduced padding) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full max-w-2xl relative"
        >
          {/* Subtle glow behind the form */}
          <div className="absolute inset-0 bg-white/5 blur-[60px] rounded-full pointer-events-none" />
          
          <form 
            onSubmit={handleSubmit}
            className="relative bg-neutral-900/20 backdrop-blur-xl border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col gap-4 text-left shadow-2xl"
          >
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-mono tracking-[0.2em] uppercase text-neutral-400 pl-2">Email</label>
              <input 
                type="email" 
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                placeholder="john@example.com" 
                className="w-full bg-neutral-900/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-neutral-700 focus:outline-none focus:border-white/30 transition-colors"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-mono tracking-[0.2em] uppercase text-neutral-400 pl-2">Message</label>
              <textarea 
                name="message"
                required
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell me about your project..." 
                rows="3"
                className="w-full bg-neutral-900/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-neutral-700 focus:outline-none focus:border-white/30 transition-colors resize-none"
              ></textarea>
            </div>

            <motion.button 
              type="submit"
              disabled={formStatus !== 'idle'}
              whileHover={formStatus === 'idle' ? { scale: 1.02 } : {}}
              whileTap={formStatus === 'idle' ? { scale: 0.98 } : {}}
              className="mt-2 w-full bg-white text-black py-4 rounded-xl font-bold tracking-[0.2em] uppercase text-xs flex justify-center items-center gap-3 hover:bg-neutral-200 transition-colors disabled:opacity-80 disabled:cursor-not-allowed overflow-hidden relative"
            >
              <AnimatePresence mode="wait">
                {formStatus === 'idle' && (
                  <motion.div key="idle" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="flex items-center gap-2">
                    Send Message <Send size={16} strokeWidth={2} />
                  </motion.div>
                )}
                {formStatus === 'submitting' && (
                  <motion.div key="submitting" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-3">
                    <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" /> Sending...
                  </motion.div>
                )}
                {formStatus === 'success' && (
                  <motion.div key="success" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2 text-green-600">
                    Message Sent <CheckCircle size={18} strokeWidth={2} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </form>
        </motion.div>

        {/* Modern Address Pill (Margin reduced) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 flex items-center gap-3 bg-neutral-900/20 backdrop-blur-md border border-white/5 rounded-full px-6 py-3"
        >
          <MapPin size={16} strokeWidth={1.5} className="text-neutral-400" />
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-400">
            2000 S Eads St, Arlington, VA
          </span>
        </motion.div>

        {/* Social Icons Grid (Padding and margin reduced) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mt-6"
        >
          {socials.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.08)" }}
              className="p-4 bg-neutral-900/20 backdrop-blur-md border border-white/5 rounded-xl text-neutral-400 hover:text-white hover:border-white/20 transition-all duration-300 group"
              aria-label={social.name}
            >
              <div className="group-hover:scale-110 transition-transform duration-300">
                {social.icon}
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Footer Bottom Copyright (Margin reduced) */}
        <div className="w-full mt-10 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 opacity-40">
          <span className="text-[9px] font-mono uppercase tracking-[0.4em]">© 2026 TISHA KHANDOKAR</span>
          <div className="flex gap-6">
            <span className="text-[9px] font-mono uppercase tracking-[0.4em] hover:text-white transition-colors cursor-pointer">Privacy</span>
            <span className="text-[9px] font-mono uppercase tracking-[0.4em] hover:text-white transition-colors cursor-pointer">Terms</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
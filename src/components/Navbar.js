import React, { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const [, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [displayText, setDisplayText] = useState('TISHA K.');
  
  const verticalScrollRef = useRef(null);
  const horizontalScrollRef = useRef(null);

  const menuItems = [
    { label: 'Bio', id: 'bio-section' },
    { label: 'Media', id: 'media-section' },
    { label: 'News', id: 'news-section' },
    { label: 'Achievement', id: 'achievement-section' },
    { label: 'Project', id: 'project-section' }
  ];

  const workImages = [
    "Award_Aamra Ekattor.jpg", 
    "Award_BASIS.jpg", 
    "Award_DU.jpg", 
    "Award_Google Hacking Contest.jpg", 
    "Award_Innovation Forum_Opening Ceremony.jpg", 
    "Award_NASA.jpg", 
    "BASIS.jpg"
  ];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    let animationId;
    const vContainer = verticalScrollRef.current;
    const hContainer = horizontalScrollRef.current;

    const performScroll = () => {
      if (vContainer) {
        vContainer.scrollTop += 1; 
        if (vContainer.scrollTop >= vContainer.scrollHeight / 2) vContainer.scrollTop = 0;
      }
      if (hContainer) {
        hContainer.scrollLeft += 1;
        if (hContainer.scrollLeft >= hContainer.scrollWidth / 2) hContainer.scrollLeft = 0;
      }
      animationId = requestAnimationFrame(performScroll);
    };

    const timeoutId = setTimeout(() => {
      animationId = requestAnimationFrame(performScroll);
    }, 100);

    return () => {
      cancelAnimationFrame(animationId);
      clearTimeout(timeoutId);
    };
  }, [isMenuOpen]);

  const handleNavClick = (id) => {
    setIsMenuOpen(false);
    document.body.classList.remove('menu-open');
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (isHovered) {
      const fullText = 'TISHA KHANDOKAR';
      let idx = 10;
      const interval = setInterval(() => {
        if (idx < fullText.length) {
          setDisplayText(fullText.substring(0, idx + 1));
          idx++;
        } else clearInterval(interval);
      }, 50);
      return () => clearInterval(interval);
    } else setDisplayText('TISHA K.');
  }, [isHovered]);

  return (
    <div className="bg-black">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap');
        .serif-font { font-family: 'Playfair Display', serif; }
        body.menu-open { overflow: hidden; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

        /* REDUCED FLUID TYPOGRAPHY (2 SIZES SMALLER) */
        .fluid-nav-item {
          font-size: clamp(1.75rem, 5vw, 4.5rem); 
          line-height: 1.2;
          transition: all 0.5s cubic-bezier(0.22, 1, 0.36, 1);
        }
      `}</style>

      <nav className="fixed top-0 w-full z-[100] flex justify-between items-center bg-black/40 backdrop-blur-lg border-b border-white/5 px-6 py-6 md:py-4 lg:py-3 transition-all duration-300">
        <button 
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          className="font-medium tracking-widest serif-font cursor-pointer text-2xl md:text-lg lg:text-base transition-colors text-white"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {displayText}
        </button>

        <button 
          onClick={() => { setIsMenuOpen(!isMenuOpen); document.body.classList.toggle('menu-open'); }}
          className="relative flex flex-col justify-center items-end gap-2 md:gap-1.5 cursor-pointer z-[110] w-10 h-10 md:w-8 md:h-8 lg:w-7 lg:h-7"
        >
          <span className={`h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'w-8 rotate-45 translate-y-2' : 'w-9 md:w-7 lg:w-6'}`} />
          <span className={`h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'w-6 md:w-4 lg:w-3'}`} />
          <span className={`h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'w-8 -rotate-45 -translate-y-2' : 'w-9 md:w-7 lg:w-6'}`} />
        </button>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 z-[90] bg-black text-white pt-28 md:pt-20 lg:pt-0 overflow-y-auto lg:overflow-hidden">
          <div className="flex flex-col lg:flex-row h-full w-full">
            
            <div className="hidden lg:flex w-1/4 h-full flex-col justify-end p-12 border-r border-white/10">
              <ContactSection isMobile={false} />
            </div>

            <div className="hidden lg:flex w-1/3 h-full items-center p-8 border-r border-white/10 overflow-hidden">
              <div ref={verticalScrollRef} className="no-scrollbar overflow-y-auto h-full w-full space-y-6">
                {[...workImages, ...workImages].map((img, i) => (
                  <div key={i} className="w-full aspect-[4/5] rounded-xl overflow-hidden bg-white/5 border border-white/10">
                    <img 
                      src={`/${img}`} 
                      className="w-full h-full object-cover opacity-40 hover:opacity-100 transition-opacity duration-700" 
                      alt={`work-${i}`} 
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* MENU ITEMS CONTAINER */}
            <div className="flex-1 flex flex-col p-6 md:p-10 lg:p-16 xl:p-24 justify-center">
              <div className="flex flex-col space-y-[1.5vh] lg:space-y-[2vh]">
                {menuItems.map((item) => (
                  <button 
                    key={item.id} 
                    onClick={() => handleNavClick(item.id)} 
                    className="group w-fit cursor-pointer text-left"
                  >
                    <h2 className="fluid-nav-item font-normal text-gray-500 group-hover:text-white serif-font group-hover:translate-x-4">
                      {item.label}
                    </h2>
                    <div className="h-0.5 bg-white w-0 group-hover:w-full transition-all duration-500 mt-1" />
                  </button>
                ))}
              </div>

              <div className="lg:hidden mt-12 mb-12">
                <div ref={horizontalScrollRef} className="no-scrollbar flex gap-6 md:gap-4 overflow-x-auto py-2">
                  {[...workImages, ...workImages].map((img, i) => (
                    <div key={i} className="w-72 h-96 md:w-48 md:h-64 flex-shrink-0 rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                      <img 
                        src={`/${img}`} 
                        className="w-full h-full object-cover opacity-60" 
                        alt={`work-mobile-${i}`} 
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:hidden mt-4 pb-16">
                <ContactSection isMobile={true} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const ContactSection = ({ isMobile }) => {
  const socialLinks = [
    { name: 'Facebook', url: 'https://www.facebook.com/tisha.khandokar.92' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/tisha-khandokar/' },
    { name: 'GitHub', url: 'https://github.com/Tisha22' }
  ];
  return (
    <div className={`space-y-6 md:space-y-4 ${!isMobile ? 'mb-12' : ''}`}>
      <p className="text-[10px] uppercase tracking-[0.4em] text-gray-500">Get in touch</p>
      <div className="group w-fit">
        <a href="mailto:tishakhandokar120@gmail.com" className="text-xl md:text-2xl lg:text-lg xl:text-xl text-white serif-font block">
          tishakhandokar120@gmail.com
        </a>
        <div className="h-0.5 bg-white w-0 group-hover:w-full transition-all duration-300 mt-1" />
      </div>
      <div className={`flex ${isMobile ? 'gap-10 md:gap-6' : 'flex-col gap-3'}`}>
        {socialLinks.map((social) => (
          <div key={social.name} className="group w-fit">
            <a href={social.url} target="_blank" rel="noreferrer" className="text-xs uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors">{social.name}</a>
            <div className="h-[1px] bg-white w-0 group-hover:w-full transition-all duration-300" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
import React from 'react';
import StarField from './components/StarField';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Bio from './components/Bio';
import MediaAppearances from './components/MediaAppearances';
import News from './components/News';
import MajorMedia from './components/MajorMedia';
import KeyAchievements from './components/KeyAchievements';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative antialiased text-white font-sans selection:bg-white selection:text-black">
      <StarField />
      <Navbar />
      
      {/* Sections with IDs for Smooth Scrolling */}
      <Hero />
      <div id="bio-section"><Bio /></div>
      <div id="media-section"><MediaAppearances /></div>
      <div id="news-section"><News /></div>
      <MajorMedia /> 
      <div id="achievement-section"><KeyAchievements /></div>
      <div id="project-section"><Projects /></div>
      
      <Footer />
    </div>
  );
}

export default App;
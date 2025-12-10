import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import DesignGrid from './components/DesignGrid';
import Services from './components/Services';
import SkillsEducation from './components/SkillsEducation';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-brand-dark min-h-screen text-white selection:bg-indigo-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <DesignGrid />
        <Services />
        <SkillsEducation />
      </main>
      <Contact />
    </div>
  );
}

export default App;
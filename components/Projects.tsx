
import React, { useState, useRef } from 'react';
import { PROJECTS } from '../constants';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const Projects: React.FC = () => {
  const [active, setActive] = useState(0);
  const [dragStart, setDragStart] = useState<number | null>(null);

  const handleNext = () => {
    setActive(prev => prev + 1);
  };

  const handlePrev = () => {
    setActive(prev => prev - 1);
  };

  // Swipe Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setDragStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (dragStart === null) return;
    const end = e.changedTouches[0].clientX;
    handleSwipe(dragStart, end);
    setDragStart(null);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragStart(e.clientX);
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (dragStart === null) return;
    const end = e.clientX;
    handleSwipe(dragStart, end);
    setDragStart(null);
  };

  const handleSwipe = (start: number, end: number) => {
    const threshold = 50; // Minimum distance to trigger swipe
    if (start - end > threshold) {
      handleNext();
    } else if (end - start > threshold) {
      handlePrev();
    }
  };

  return (
    <section id="projects" className="bg-brand-dark min-h-screen flex flex-col items-center justify-center relative overflow-hidden py-24 select-none">
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-accent/5 blur-[100px] rounded-full pointer-events-none" />

      {/* Section Header */}
      <div className="mb-16 z-20 text-center relative pointer-events-none">
        <h2 className="text-4xl md:text-7xl font-display font-bold text-brand-accent tracking-tighter uppercase drop-shadow-[0_0_15px_rgba(255,214,0,0.3)]">
          Work Gallery
        </h2>
      </div>

      {/* 3D Slider Container */}
      <div 
        className="relative w-full h-[300px] md:h-[500px] flex items-center justify-center perspective-1000 cursor-grab active:cursor-grabbing touch-pan-y"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={() => setDragStart(null)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        
        {/* 
          We render a fixed range of items relative to the 'active' index.
          This creates the illusion of an infinite list as 'active' keeps incrementing/decrementing.
          Range: -2 to +2 (5 items total) covers the visible area.
        */}
        {[-2, -1, 0, 1, 2].map((offset) => {
          const i = active + offset;
          const count = PROJECTS.length;
          // Calculate wrapped index for content
          const projectIndex = ((i % count) + count) % count;
          const project = PROJECTS[projectIndex];
          
          const absOffset = Math.abs(offset);
          
          // Layout Calculations for Horizontal/Landscape Cards
          const xOffset = 150 * offset; // Distance between stacked cards
          const scale = 1 - (0.15 * absOffset); // Scale down items further away
          const rotateY = offset > 0 ? -15 : (offset < 0 ? 15 : 0); // Slight rotation
          const zIndex = 10 - absOffset; // Active item on top
          const opacity = absOffset > 2 ? 0 : (absOffset === 0 ? 1 : 0.4); // Fade out distant items
          const blur = absOffset === 0 ? 0 : '4px';

          return (
            <div 
              key={i} // Use the absolute index 'i' as key to ensure stable transitions
              className="absolute w-[320px] md:w-[750px] h-[200px] md:h-[440px] transition-all duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)]"
              style={{
                left: '50%',
                transform: `translateX(calc(-50% + ${xOffset}px)) scale(${scale}) perspective(800px) rotateY(${rotateY}deg)`,
                zIndex: zIndex,
                opacity: opacity,
                filter: `blur(${blur})`,
                pointerEvents: offset === 0 ? 'auto' : 'none',
              }}
            >
              {/* Card Container */}
              <div className="w-full h-full bg-brand-gray rounded-2xl overflow-hidden relative shadow-2xl border border-white/10 group">
                
                {/* Image - Fully Visible, No Overlay */}
                <div className="absolute inset-0">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover pointer-events-none" // prevent img drag
                    />
                </div>

                {/* Yellow Glow Border on Active */}
                {offset === 0 && (
                   <div className="absolute inset-0 border-2 border-brand-accent rounded-2xl pointer-events-none shadow-[0_0_40px_rgba(255,214,0,0.25)]"></div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Controls */}
      <div className="flex gap-6 mt-12 z-50">
        <button 
          onClick={handlePrev}
          className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-brand-accent hover:text-black hover:scale-110 transition-all duration-300"
        >
          <ArrowLeft size={24} />
        </button>

        <button 
          onClick={handleNext}
          className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-brand-accent hover:text-black hover:scale-110 transition-all duration-300"
        >
          <ArrowRight size={24} />
        </button>
      </div>

    </section>
  );
};

export default Projects;
    
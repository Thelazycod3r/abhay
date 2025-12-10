import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Layers, Box, Cpu } from 'lucide-react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }
    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-brand-dark"
    >
      {/* Interactive Spotlight Background */}
      <div 
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 opacity-20 z-0"
        style={{
          background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 214, 0, 0.08), transparent 40%)`
        }}
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10 relative">
        
        {/* Left Content */}
        <div className="space-y-8 relative order-2 lg:order-1">
          
          <div className="inline-block animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-brand-accent/10 border border-brand-accent/20 backdrop-blur-md">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-accent"></span>
                </span>
                <span className="text-sm font-bold tracking-wide text-brand-accent uppercase">
                    Co-founder of Auctoss
                </span>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl xl:text-9xl font-display font-bold leading-[0.9] tracking-tighter text-white animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
            MAKE.<br/>
            <span className="text-brand-accent">BUILD.</span><br/>
            SCALE.
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-lg leading-relaxed font-light border-l-4 border-brand-accent pl-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            I'm <span className="text-white font-bold">Abhay</span>, a multidisciplinary designer and entrepreneur crafting digital products with precision.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 pt-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            <a 
              href="#projects" 
              className="px-8 py-4 bg-brand-accent text-black font-bold text-lg rounded-full flex items-center justify-center gap-3 hover:bg-white transition-all transform hover:-translate-y-1 shadow-[0_0_20px_rgba(255,214,0,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
            >
              View Work <ArrowRight size={22} />
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold text-lg rounded-full flex items-center justify-center gap-3 hover:bg-white hover:text-black transition-all"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Abstract Visual */}
        <div className="relative flex justify-center items-center order-1 lg:order-2 perspective-1000 min-h-[400px]">
           {/* Abstract Geometric Composition */}
           <div 
             className="relative w-80 h-80 md:w-96 md:h-96"
             style={{
                transform: `rotateY(${(mousePos.x - window.innerWidth / 2) * 0.03}deg) rotateX(${-(mousePos.y - window.innerHeight / 2) * 0.03}deg)`,
                transition: 'transform 0.2s ease-out'
             }}
           >
              {/* Outer Ring */}
              <div className="absolute inset-0 border-2 border-dashed border-white/10 rounded-full animate-spin-slow"></div>
              
              {/* Middle Yellow Ring */}
              <div className="absolute inset-8 border border-brand-accent/30 rounded-full shadow-[0_0_50px_rgba(255,214,0,0.1)]"></div>
              
              {/* Central Cube-ish elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="relative w-48 h-48 bg-gradient-to-br from-brand-gray to-black border border-white/10 rounded-2xl transform rotate-12 flex items-center justify-center shadow-2xl z-10 group hover:rotate-0 transition-all duration-500">
                    <Layers className="text-brand-accent w-20 h-20 opacity-80 group-hover:scale-110 transition-transform" />
                 </div>
                 <div className="absolute w-48 h-48 bg-brand-accent/10 border border-brand-accent/20 rounded-2xl transform -rotate-6 z-0 blur-sm"></div>
              </div>

              {/* Floating Stat Cards */}
              <div className="absolute -right-4 top-10 glass-card p-4 rounded-xl border-l-4 border-brand-accent animate-float z-20">
                  <div className="flex items-center gap-3">
                      <div className="p-2 bg-brand-accent/10 rounded-lg text-brand-accent">
                          <Box size={20} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 font-bold uppercase mb-0.5">Delivered</p>
                        <p className="text-xl font-display font-bold text-white">6+ Projects</p>
                      </div>
                  </div>
              </div>

              <div className="absolute -left-12 bottom-20 glass-card p-4 rounded-xl border-r-4 border-brand-accent animate-float-delayed z-20 text-right">
                   <div className="flex items-center gap-3 flex-row-reverse">
                      <div className="p-2 bg-brand-accent/10 rounded-lg text-brand-accent">
                          <Cpu size={20} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 font-bold uppercase mb-0.5">Experience</p>
                        <p className="text-xl font-display font-bold text-white">1+ Year</p>
                      </div>
                  </div>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
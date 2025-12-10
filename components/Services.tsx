
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="relative h-[600px] bg-brand-dark overflow-hidden flex flex-col items-center justify-center">
      
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
         <h2 className="text-[12vw] leading-none font-display font-black text-brand-dark" style={{ WebkitTextStroke: '1px #2a2a2a' }}>
            CAPABILITIES
         </h2>
      </div>

      {/* 3D Slider Container - Increased size for 'Little Big' effect */}
      <div className="relative w-[120px] md:w-[160px] h-[150px] md:h-[200px] z-10 -mt-12" style={{ perspective: '1000px' }}>
         <div 
            className="slider-container absolute w-full h-full animate-autoRun"
            style={{ '--quantity': SERVICES.length } as React.CSSProperties}
         >
            {SERVICES.map((service, index) => (
               <div 
                  key={index}
                  className="slider-item bg-brand-gray/90 border border-white/10 rounded-xl p-4 flex flex-col items-center justify-center text-center gap-3 hover:border-brand-accent/50 hover:bg-white/5 transition-colors shadow-2xl backdrop-blur-sm group"
                  style={{ 
                    '--position': index + 1,
                    '--translateZ': 'min(350px, 30vw)' // Increased radius
                  } as React.CSSProperties}
               >
                  <div className="p-2 rounded-full bg-white/5 group-hover:bg-brand-accent group-hover:text-black transition-colors duration-300">
                     <service.icon size={24} />
                  </div>
                  <h3 className="text-xs md:text-sm font-bold font-display text-white group-hover:text-brand-accent transition-colors leading-tight">
                     {service.title}
                  </h3>
               </div>
            ))}
         </div>
      </div>
      
      {/* Optional: Central "Model" replacement - a glowing core */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[60%] bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent pointer-events-none z-20"></div>

      {/* Moved text up closer to the posters (increased bottom value) */}
      <div className="absolute bottom-24 z-30 flex flex-col items-center text-center">
         <h3 className="text-brand-accent font-bold tracking-widest text-xs uppercase mb-2">My Expertise</h3>
         <p className="text-gray-400 max-w-md px-6 text-xs md:text-sm">
            A diverse skill set ranging from visual design to technical implementation, enabling full-stack creative solutions.
         </p>
      </div>

    </section>
  );
};

export default Services;

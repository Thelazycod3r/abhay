import React from 'react';
import { SKILLS } from '../constants';
import { GraduationCap } from 'lucide-react';

const SkillsEducation: React.FC = () => {
  // Triple skills to ensure enough items for a single long smooth loop
  const allSkills = [...SKILLS, ...SKILLS, ...SKILLS];

  return (
    <section id="skills" className="py-24 border-t border-white/5 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-20">
        
        {/* Education Section */}
        <div className="w-full max-w-3xl text-center space-y-8">
          <h3 className="text-3xl font-display font-bold flex items-center justify-center gap-4">
             <div className="p-3 bg-brand-accent rounded-lg text-black">
                <GraduationCap size={24} />
             </div>
             Education
          </h3>
          <div className="p-10 rounded-3xl bg-brand-gray border border-white/5 hover:border-brand-accent/30 transition-colors shadow-2xl relative overflow-hidden group">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-brand-accent shadow-[0_0_50px_20px_rgba(255,214,0,0.15)] group-hover:shadow-[0_0_60px_30px_rgba(255,214,0,0.25)] transition-shadow duration-500"></div>
            
            <h4 className="text-3xl md:text-4xl font-bold mb-3 text-white">Bachelor of Science</h4>
            <p className="text-brand-accent font-medium mb-6 text-xl tracking-wide">Computer Science & Design</p>
            <p className="text-gray-300 text-lg">Sharada Degree College, India</p>
            <p className="text-gray-500 text-sm mt-8 font-mono border-t border-white/5 pt-4 inline-block px-4">2018 — 2021</p>
          </div>
        </div>

        {/* Skills Slider - Single Line */}
        <div className="w-full space-y-8 overflow-hidden">
          <div className="text-center">
             <p className="text-brand-accent font-bold tracking-widest text-xs uppercase mb-2">Tech Stack</p>
             <h3 className="text-3xl font-display font-bold">Tools & Technologies</h3>
          </div>
          
          <div className="w-full py-4 relative">
             {/* Gradient fade on edges for slider container */}
             <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-brand-dark to-transparent z-10 pointer-events-none"></div>
             <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-brand-dark to-transparent z-10 pointer-events-none"></div>

             <div 
               className="slider" 
               style={{
                 '--width': '180px', // Slightly wider cards
                 '--height': '70px',
                 '--quantity': allSkills.length,
                 '--duration': '60s' // Slow down animation
               } as React.CSSProperties}
             >
               <div className="list">
                 {allSkills.map((skill, index) => (
                   <div 
                     key={`skill-${index}`} 
                     className="item" 
                     style={{ '--position': index + 1 } as React.CSSProperties}
                   >
                     <div className="w-[160px] h-[55px] flex items-center justify-center rounded-full bg-brand-gray/50 backdrop-blur-md border border-white/10 text-gray-300 font-medium text-base transition-all duration-300 hover:bg-brand-accent hover:text-black hover:scale-110 hover:border-transparent shadow-lg cursor-default">
                       {skill}
                     </div>
                   </div>
                 ))}
               </div>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SkillsEducation;
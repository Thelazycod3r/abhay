
import React, { useState, useEffect } from 'react';
import { DESIGN_GALLERY } from '../constants';
import { ZoomIn, X } from 'lucide-react';

const DesignGrid: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Close lightbox with Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <section className="py-24 bg-black border-y border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div>
                  <h2 className="text-3xl md:text-5xl font-display font-bold mb-2 text-white">Visual Playground</h2>
                  <p className="text-gray-400 text-lg">Experimental UI, posters, and daily renders.</p>
              </div>
              <div className="h-1 w-24 bg-brand-accent rounded-full hidden md:block"></div>
          </div>

          {/* Masonry Layout */}
          <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
            {DESIGN_GALLERY.map((img, idx) => (
              <div 
                key={idx} 
                className="relative group rounded-2xl overflow-hidden cursor-pointer break-inside-avoid shadow-lg shadow-black/50 border border-white/5"
                onClick={() => setSelectedImage(img)}
              >
                <img 
                  src={img} 
                  alt={`Design ${idx + 1}`}
                  loading="lazy"
                  className="w-full h-auto object-cover transition-all duration-700 filter grayscale group-hover:grayscale-0 group-hover:scale-105"
                />
                
                {/* Minimal Overlay on Hover */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-full transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <ZoomIn size={24} className="text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox / Popup View */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-10 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 p-2 bg-white/10 rounded-full text-white hover:bg-brand-accent hover:text-black transition-colors z-50"
          >
            <X size={32} />
          </button>

          {/* Image Container */}
          <div 
            className="relative max-w-full max-h-full rounded-lg overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()} // Prevent close when clicking image
          >
             <img 
               src={selectedImage} 
               alt="Full view" 
               className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-md"
             />
          </div>
        </div>
      )}
    </>
  );
};

export default DesignGrid;

import React, { useState } from 'react';
import { CONTACT_INFO } from '../constants';
import { Copy, Mail, Phone, MapPin, Check } from 'lucide-react';

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="relative pt-32 pb-12 bg-black overflow-hidden border-t border-white/5">
        
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <div className="mb-16">
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 tracking-tight">
                Have a project? <br/>
                <span className="text-brand-accent">Let's talk.</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                I'm currently available for freelance projects and open to full-time opportunities.
            </p>
        </div>

        <div className="glass-card p-8 md:p-12 rounded-[2rem] inline-block w-full max-w-3xl mx-auto mb-20 border border-white/10">
            <div className="grid gap-10 md:grid-cols-2 text-left">
                <div className="space-y-2">
                    <p className="text-xs text-brand-accent uppercase font-bold tracking-widest mb-2">Email</p>
                    <button 
                        onClick={handleCopyEmail}
                        className="group flex items-center gap-3 text-lg md:text-2xl font-bold hover:text-brand-accent transition-colors w-full"
                    >
                        <span className="truncate">{CONTACT_INFO.email}</span>
                        <div className="relative">
                            <Copy size={20} className={`text-gray-600 group-hover:text-white transition-opacity ${copied ? 'opacity-0' : 'opacity-100'}`} />
                            <Check size={20} className={`absolute top-0 left-0 text-green-500 transition-opacity ${copied ? 'opacity-100' : 'opacity-0'}`} />
                        </div>
                    </button>
                </div>

                <div className="space-y-2">
                    <p className="text-xs text-brand-accent uppercase font-bold tracking-widest mb-2">Phone</p>
                    <div className="flex items-center gap-3 text-lg md:text-2xl font-bold">
                        {CONTACT_INFO.phone}
                    </div>
                </div>

                <div className="space-y-2">
                    <p className="text-xs text-brand-accent uppercase font-bold tracking-widest mb-2">Location</p>
                    <div className="flex items-center gap-3 text-lg md:text-2xl font-bold">
                        {CONTACT_INFO.location}
                    </div>
                </div>

                 <div className="space-y-2 flex flex-col justify-end">
                    <a 
                        href={`mailto:${CONTACT_INFO.email}`}
                        className="w-full py-4 bg-brand-accent text-black font-extrabold text-lg rounded-xl hover:bg-white hover:scale-105 transition-all flex items-center justify-center gap-2"
                    >
                        Send an Email <Mail size={18} />
                    </a>
                </div>
            </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm pt-8 gap-6 border-t border-white/5">
            <p>&copy; {new Date().getFullYear()} Abhay. All rights reserved.</p>
            <div className="flex gap-8 font-medium">
                <a href="#" className="hover:text-brand-accent transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-brand-accent transition-colors">Twitter</a>
                <a href="#" className="hover:text-brand-accent transition-colors">Instagram</a>
                <a href="#" className="hover:text-brand-accent transition-colors">Behance</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
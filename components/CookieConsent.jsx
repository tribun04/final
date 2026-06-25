import React, { useState, useEffect } from 'react';
import { Cookie, X, ShieldCheck, ArrowRight } from 'lucide-react';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('ideal-construction-cookies');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleChoice = (choice) => {
    localStorage.setItem('ideal-construction-cookies', choice);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 left-0 w-full z-[100] px-6 pointer-events-none">
      <div className="container mx-auto flex justify-end">
        <div className="pointer-events-auto w-full max-w-[450px] bg-[#8B0000] text-white shadow-2xl border border-white/10 backdrop-blur-md relative overflow-hidden transition-all duration-500 animate-in slide-in-from-bottom-10">
          <div className="absolute top-0 right-0 p-4 opacity-5">
            <Cookie size={120} strokeWidth={1} />
          </div>

          <div className="p-8 relative z-10">
            <div className="flex justify-between items-start mb-6">
              <div className="bg-white/10 p-3 rounded-none border border-white/20">
                <ShieldCheck className="text-white w-6 h-6" />
              </div>
              <button
                onClick={() => setIsVisible(false)}
                className="text-white/50 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <h2 className="text-2xl font-serif italic mb-4 leading-tight">
              Cookie Settings
            </h2>

            <p className="text-[11px] leading-relaxed uppercase tracking-[0.15em] text-white/80 mb-8">
              We use cookies to support website functionality and improve the browsing experience for construction and renovation project inquiries.
            </p>

            <div className="flex flex-col space-y-3">
              <button
                onClick={() => handleChoice('accepted')}
                className="group bg-white text-[#8B0000] px-6 py-4 flex items-center justify-between font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all duration-300"
              >
                Accept All <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => handleChoice('refused')}
                  className="border border-white/20 hover:bg-white hover:text-[#8B0000] text-white text-[9px] font-bold uppercase tracking-[0.2em] py-3 transition-all duration-300"
                >
                  Refuse
                </button>
                <button
                  onClick={() => handleChoice('custom')}
                  className="border border-white/20 hover:bg-white hover:text-[#8B0000] text-white text-[9px] font-bold uppercase tracking-[0.2em] py-3 transition-all duration-300"
                >
                  Customize
                </button>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-[8px] uppercase tracking-widest text-white">
                Ideal Construction
              </span>
              <a href="/confidentialite" className="text-[8px] uppercase tracking-widest text-white hover:text-white underline underline-offset-4">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;

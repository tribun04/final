import React, { useState } from "react";
import { MessageCircle, X, Send, HardHat, ShieldCheck } from "lucide-react";

const WhatsAppWidget = () => {
  const PHONE_NUMBER = "+33666732506"; // Your contact number
  const AGENT_NAME = "Ideal Construction";
  const WELCOME_MESSAGE = "Hello! 👋 Do you have a construction or renovation project in mind? Our technical team is ready to assist you with your inquiries.";

  const [isOpen, setIsOpen] = useState(false);
  const [userMessage, setUserMessage] = useState("");

  const handleSendMessage = () => {
    if (!userMessage.trim()) return;
    const encodedMessage = encodeURIComponent(userMessage);
    const url = `https://wa.me/${PHONE_NUMBER}?text=${encodedMessage}`;
    window.open(url, "_blank");
    setUserMessage(""); 
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSendMessage();
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end gap-4 font-sans text-slate-800 z-[9999] pointer-events-none">
      
      {/* WHATSAPP MODAL WINDOW */}
      <div 
        className={`
          w-[380px] max-w-[88vw] bg-[#f8f9fa] rounded-[2rem] shadow-2xl overflow-hidden border border-white/20 
          transition-all duration-500 origin-bottom-right transform pointer-events-auto
          ${isOpen 
            ? "opacity-100 scale-100 translate-y-0 visible" 
            : "opacity-0 scale-95 translate-y-10 invisible"}
        `}
      >
        {/* HEADER: Brand Red */}
        <div className="p-6 flex justify-between items-center text-white bg-[#8B0000] relative overflow-hidden">
          {/* Subtle Blueprint Pattern Overlay */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" 
               style={{ backgroundImage: `radial-gradient(white 1px, transparent 1px)`, backgroundSize: '20px 20px' }} />
          
          <div className="flex items-center gap-4 relative z-10">
            <div className="relative">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 shadow-inner">
                <HardHat className="text-white" size={24} />
              </div>
              <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-[#8B0000] rounded-full"></div>
            </div>
            <div>
              <h4 className="font-bold text-sm uppercase tracking-widest leading-tight">{AGENT_NAME}</h4>
              <p className="text-[10px] text-white/70 uppercase tracking-widest leading-tight mt-1 flex items-center gap-1">
                <ShieldCheck size={10} /> Technical Support
              </p>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)} 
            className="hover:bg-white/10 p-2 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* CHAT BODY */}
        <div className="relative h-80 p-6 flex flex-col overflow-y-auto bg-stone-50">
          <div 
            className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none"
            style={{ 
              backgroundImage: "url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d936a28b80.png')",
              backgroundSize: "400px" 
            }}
          ></div>

          {/* Agent Message */}
          <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm text-[13.5px] self-start max-w-[85%] mb-2 relative z-10 border border-gray-100">
            <span className="block text-[10px] font-black text-[#8B0000] uppercase tracking-widest mb-1">Estimating Service</span>
            <p className="text-slate-700 leading-relaxed font-medium">{WELCOME_MESSAGE}</p>
            <span className="block text-[9px] text-gray-400 text-right mt-2 font-bold">
              {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </span>
          </div>

          <div className="text-center py-4">
             <span className="text-[9px] uppercase tracking-[0.3em] text-stone-300 font-bold italic">Serving the Chablais Region</span>
          </div>
        </div>

        {/* FOOTER / INPUT */}
        <div className="p-4 bg-white flex items-center gap-3 border-t border-gray-100">
          <input 
            type="text" 
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Ask a question..." 
            className="flex-1 bg-stone-50 rounded-xl px-5 py-3 text-sm outline-none border border-transparent focus:border-[#8B0000] focus:bg-white transition-all"
          />
          <button 
            onClick={handleSendMessage}
            className="p-3.5 rounded-xl text-white bg-[#8B0000] hover:bg-black transition-all shadow-lg disabled:opacity-50 flex items-center justify-center"
            disabled={!userMessage.trim()}
          >
            <Send size={18} />
          </button>
        </div>
      </div>

      {/* FLOATING TRIGGER BUTTON */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="relative h-16 w-16 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center bg-[#25D366] text-white z-50 pointer-events-auto group"
        aria-label="Chat on WhatsApp"
      >
        {!isOpen && (
          <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-6 w-6">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8B0000] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-6 w-6 bg-[#8B0000] text-[10px] font-black items-center justify-center border-2 border-white">1</span>
          </span>
        )}
        
        <div className="relative w-10 h-10 flex items-center justify-center">
          <MessageCircle 
            size={36} 
            className={`absolute transition-all duration-500 ${isOpen ? 'opacity-0 scale-50 rotate-90' : 'opacity-100 scale-100 rotate-0'}`} 
          />
          <X 
            size={36} 
            className={`absolute transition-all duration-500 ${isOpen ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 -rotate-90'}`} 
          />
        </div>

        {/* Tooltip on hover for Desktop */}
        <span className="absolute right-20 bg-white text-black text-[10px] font-black uppercase tracking-widest px-5 py-2.5 rounded-lg shadow-xl border border-stone-100 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hidden md:block">
          Need a technical quote?
        </span>
      </button>

    </div>
  );
};

export default WhatsAppWidget;
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Check, HardHat, Landmark, Ruler, Zap, Hammer, 
  Paintbrush, ShieldCheck, ChevronDown, Phone, MessageSquare,
  Construction, Layers
} from "lucide-react";

// --- SWIPER IMPORTS ---
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';

// Asset imports
import img10 from '../assets/10.jpeg';
import img11 from '../assets/11.jpeg';
import img12 from '../assets/12.jpeg';
import img13 from '../assets/13.jpeg';

const Services = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const epcServices = [
    { id: "masonry", num: "01", label: "Core Engineering", title: "Structural Masonry & Concrete", image: img10, icon: <HardHat size={20} />, desc: "We engineer structural integrity from precision blockwork to reinforced concrete.", works: ["Load-bearing systems", "IPN reinforcement", "Concrete slabs", "Seismic upgrades"], process: ["Diagnostic", "Propping", "Casting", "Curing"], materials: ["C25 Concrete", "HA Steel", "Bio'Bric", "Lafarge"], standards: ["Eurocode 2", "DTU 20.1"], faqs: [{ q: "Is a study mandatory?", a: "Yes, for any load-bearing modification." }] },
    { id: "earthworks", num: "02", label: "Sub-Grade Work", title: "Earthworks & Site Engineering", image: img11, icon: <Landmark size={20} />, desc: "Precision ground preparation, excavation, and utility networks (VRD).", works: ["Excavation", "Utility trenching", "Site leveling", "Sanitation"], process: ["Staking", "Excavation", "Pipe-Laying", "Compaction"], materials: ["PVC SN8", "Geotextile", "Sand", "Kubota Fleet"], standards: ["DTU 64.1", "SPANC"], faqs: [{ q: "Do you handle rock?", a: "Yes, our fleet includes hydraulic breakers." }] },
    { id: "renovation", num: "03", label: "Turnkey Execution", title: "General Construction & Renovation", image: img12, icon: <Construction size={20} />, desc: "A singular point of accountability coordinating all trades for high-quality environments.", works: ["Full rehabilitation", "House extensions", "Kitchen remodeling", "Office reconfiguration"], process: ["Concept", "Demolition", "Trades", "Handover"], materials: ["Project ERP", "Safety Logistics", "Premium"], standards: ["ISO 9001", "Turnkey"], faqs: [{ q: "How are deadlines met?", a: "Contractual GANTT schedule with penalties." }] },
    { id: "electrical", num: "04", label: "Systems Integration", title: "Electrical Infrastructure & Power", image: img13, icon: <Zap size={20} />, desc: "Advanced electrical engineering, smart home systems, and power distribution.", works: ["HV/LV Distribution", "Smart Home", "Architectural lighting", "EV Charging"], process: ["Rough-in", "Wiring", "Testing", "Certify"], materials: ["Legrand", "Schneider", "LED"], standards: ["NFC 15-100", "Consuel"], faqs: [{ q: "Energy audits?", a: "Yes, LED and smart-control audits." }] },
    { id: "plastering", num: "05", label: "Interior Volumes", title: "Advanced Plastering & Partitions", image: img10, icon: <Layers size={20} />, desc: "Sculpting interior spaces with high-performance acoustic isolation.", works: ["Acoustic partitions", "False ceilings", "Custom niches", "Thermal lining"], process: ["Framing", "Boarding", "Taping", "Sanding"], materials: ["BA13/BA18", "Lafarge", "Rockwool"], standards: ["DTU 25.41", "Eclisse"], faqs: [{ q: "Is it moisture resistant?", a: "We use H1-grade hydrofuge." }] },
    { id: "insulation", num: "06", label: "Building Performance", title: "Thermal & Acoustic Envelope", image: img11, icon: <ShieldCheck size={20} />, desc: "Optimizing energy performance through advanced thermal shielding.", works: ["ITE (Exterior)", "Fiber blowing", "Vapor barriers", "Acoustic doubling"], process: ["Audit", "Vapor Control", "Install", "Seal"], materials: ["Isover", "Steico", "Sto"], standards: ["RE2020", "BBC Labels"], faqs: [{ q: "Government grants?", a: "Our RGE status allows access to MaPrimeRénov'." }] },
    { id: "painting", num: "07", label: "Architectural Aesthetics", title: "Industrial & Artisanal Coatings", image: img12, icon: <Paintbrush size={20} />, desc: "Sophisticated surface treatments and coatings defining durability.", works: ["Interior acrylic", "Facade ravalement", "Woodwork restoration", "Industrial epoxy"], process: ["Scraping", "Priming", "Coating", "Lacquer"], materials: ["Tollens", "Seigneurie", "Marius"], standards: ["VOC Free", "DTU 59.1"], faqs: [{ q: "Facade lifespan?", a: "Typically 15-20 years." }] }
  ];

  return (
    <div className="min-h-screen bg-white text-stone-900 antialiased font-sans selection:bg-[#8B0000] selection:text-white">
      
      {/* HERO SECTION */}
      <section className="relative pt-24 pb-12 md:pt-40 md:pb-24 bg-stone-950 text-white h-[50vh]  md:h-[80vh]">
        <div className="absolute inset-0 opacity-20 bg-cover bg-center h-[100vh]" style={{ backgroundImage: `url(${img10})` }} />
        <div className="container mx-auto px-6 lg:px-24 relative z-10 pt-12 md:pt-24">
          <nav className="flex gap-2 text-[9px] uppercase tracking-widest text-white/40 mb-6">
            <a href="/" className="hover:text-white">Home</a> <span>/</span> <span className="text-[#8B0000]">Services</span>
          </nav>
          <h1 className="text-4xl md:text-8xl font-bold uppercase tracking-tighter leading-[1] mb-6 ">
            Engineering <br /> <span className="font-serif italic text-white/70 lowercase">Excellence.</span>
          </h1>
          <p className="max-w-xl text-sm md:text-lg text-white/50 font-light leading-relaxed mb-10">
            A comprehensive industrial suite of building and renovation services.
          </p>
        </div>
      </section>

      {/* --- SWIPER STICKY QUICK ACCESS --- */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-100 py-4 md:py-6">
        <div className="container max-w-[1000px]  mx-auto px-6 lg:px-24">
          <Swiper
            modules={[FreeMode]}
            freeMode={true}
            slidesPerView="auto"
            spaceBetween={30}
            className="w-full py-4 md:py-6"
          >
            {epcServices.map((s) => (
              <SwiperSlide key={s.id} className="!w-auto">
                <a 
                  href={`#${s.id}`} 
                  className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 hover:text-[#8B0000] transition-colors"
                >
                  <span className="text-[#8B0000]/40 mr-2">{s.num}.</span>
                  {s.title.split(' ')[0]}
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* SERVICE DETAILS LOOP */}
      {epcServices.map((service, index) => (
        <section key={service.id} id={service.id} className={`py-16 md:py-32 border-b border-stone-100 scroll-mt-20 ${index % 2 !== 0 ? 'bg-stone-50/50' : 'bg-white'}`}>
          <div className="container mx-auto px-6 lg:px-24">
            <div className={`flex flex-col lg:grid lg:grid-cols-[1.2fr_0.8fr] gap-12 md:gap-20 items-start ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              
              <div className="w-full space-y-10">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <span className="text-[#8B0000] font-bold tracking-[0.3em] uppercase text-[9px]">{service.label}</span>
                  <h2 className="text-3xl md:text-6xl font-bold mt-4 uppercase tracking-tighter leading-tight">{service.title}</h2>
                  <p className="mt-6 text-base md:text-xl text-stone-500 font-light leading-relaxed">{service.desc}</p>
                </motion.div>

                {/* Scope Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.works.map((w, i) => (
                        <div key={i} className="flex items-center gap-3 text-sm text-stone-600">
                            <Check size={14} className="text-[#8B0000]" /> {w}
                        </div>
                    ))}
                </div>

                {/* Process */}
                <div className="bg-white p-6 md:p-8 rounded-2xl border border-stone-100">
                    <h4 className="text-[9px] font-bold uppercase tracking-widest text-stone-400 mb-6">Technical Phases</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {service.process.map((step, i) => (
                            <div key={i}>
                                <div className="text-[8px] font-black text-[#8B0000] mb-1">P{i+1}</div>
                                <div className="font-bold text-gray-900 text-[11px] uppercase tracking-tight">{step}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* FAQ */}
                <div className="space-y-3">
                  {service.faqs.map((faq, i) => (
                    <div key={i} className="bg-stone-100 rounded-xl p-4">
                      <button 
                        onClick={() => setActiveFaq(activeFaq === `${service.id}-${i}` ? null : `${service.id}-${i}`)}
                        className="w-full flex justify-between items-center text-left font-bold text-gray-900 text-sm"
                      >
                        {faq.q} <ChevronDown size={14} className={activeFaq === `${service.id}-${i}` ? 'rotate-180' : ''} />
                      </button>
                      <AnimatePresence>
                        {activeFaq === `${service.id}-${i}` && (
                          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                            <p className="text-xs text-stone-500 pt-4 leading-relaxed">{faq.a}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>

              {/* Side Spec Card */}
              <div className="w-full lg:sticky lg:top-32">
                <img src={service.image} alt={service.title} className="rounded-2xl md:rounded-[2.5rem] w-full aspect-square md:aspect-[4/5] object-cover mb-6 shadow-xl" />
                <div className="bg-stone-900 text-white p-8 rounded-2xl md:rounded-[2rem]">
                    <h4 className="text-[9px] font-bold uppercase tracking-widest text-[#8B0000] mb-6">Standards</h4>
                    <div className="grid grid-cols-2 gap-4">
                        {service.materials.slice(0,4).map(m => (
                            <div key={m} className="text-[10px] flex items-center gap-2"><div className="w-1 h-1 bg-[#8B0000]"/> {m}</div>
                        ))}
                    </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      ))}

      {/* FOOTER CTA */}
      <section className="py-20 bg-stone-950 text-white text-center">
        <h2 className="text-3xl md:text-6xl font-bold mb-6 uppercase tracking-tighter">Ready for Deployment.</h2>
        <a href="/contact" className="bg-[#8B0000] px-12 py-5 font-bold uppercase tracking-widest text-[10px] inline-block hover:bg-white hover:text-black transition-all">Request Briefing</a>
      </section>

      {/* FAB */}
      
    </div>
  );
};

export default Services;
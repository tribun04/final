import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Plus, MapPin, ArrowRight, HardHat, Ruler, ShieldCheck } from 'lucide-react';

// Asset imports
import img1 from '../assets/1.jpeg';
import img2 from '../assets/2.jpeg';
import img3 from '../assets/3.jpeg';
import img4 from '../assets/4.jpeg';
import img5 from '../assets/5.jpeg';
import img6 from '../assets/6.jpeg';
import img7 from '../assets/7.jpeg';
import img8 from '../assets/8.jpeg';
import img9 from '../assets/9.jpeg';
import img10 from '../assets/10.jpeg';
import img11 from '../assets/11.jpeg';
import img12 from '../assets/12.jpeg';
import img13 from '../assets/13.jpeg';
import img14 from '../assets/14.jpeg';
import img15 from '../assets/15.jpeg';
import img16 from '../assets/16.jpeg';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const categories = [
    'All', 
    'Masonry', 
    'Earthworks', 
    'Renovation', 
    'Construction',
    'Electrical',
    'Insulation', 
    'Painting'
  ];

  const projects = [
    { id: 1, title: "Structural Core Foundation", category: "Masonry", spec: "Eurocode 2", image: img1 },
    { id: 2, title: "Custom Villa Framework", category: "Construction", spec: "Bâti Neuf", image: img2 },
    { id: 3, title: "Site Utility Excavation", category: "Earthworks", spec: "VRD Technical", image: img3 },
    { id: 4, title: "Modern Interior Rehabilitation", category: "Renovation", spec: "Turnkey", image: img4 },
    { id: 5, title: "High-Performance Thermal Shield", category: "Insulation", spec: "RE2020", image: img5 },
    { id: 6, title: "Surface Aesthetic Finishing", category: "Painting", spec: "VOC Free", image: img6 },
    { id: 7, title: "Reinforced Concrete Retaining", category: "Masonry", spec: "C25/30", image: img7 },
    { id: 8, title: "Residential Shell Works", category: "Construction", spec: "Gros Œuvre", image: img8 },
    { id: 9, title: "Industrial Ground Grading", category: "Earthworks", spec: "G2 Study", image: img9 },
    { id: 10, title: "Heritage Building Refit", category: "Renovation", spec: "Technical", image: img10 },
    { id: 11, title: "External Wall Insulation", category: "Insulation", spec: "ITE System", image: img11 },
    { id: 12, title: "Facade Protective Coating", category: "Painting", spec: "Siloxane", image: img12 },
    { id: 13, title: "Structural Opening & IPN", category: "Masonry", spec: "Steel Work", image: img13 },
    { id: 14, title: "Full Scale Deployment", category: "Construction", spec: "Turnkey", image: img14 },
    { id: 15, title: "Sub-Grade Infrastructure", category: "Earthworks", spec: "VRD", image: img15 },
    { id: 16, title: "Artisanal Final Handover", category: "Renovation", spec: "Finishes", image: img16 },
  ];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <main className="bg-white min-h-screen overflow-x-hidden font-sans antialiased selection:bg-[#8B0000] selection:text-white">
      
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative h-[80vh] w-full flex items-center bg-stone-900 overflow-hidden">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${img11})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-0" />
        
        {/* Blueprint Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.05] z-0" 
              />

        <div className="relative z-10 container mx-auto px-6 lg:px-24">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
            <span className="text-[#8B0000] font-bold tracking-[0.5em] uppercase text-[10px] mb-8 block">
              Building Legacy
            </span>
            <h1 className="text-white text-5xl md:text-[8rem] font-bold leading-[0.9] tracking-tighter uppercase mb-8">
              Technical <br />
              <span className="font-serif italic text-white/70 lowercase font-light">Portfolio.</span>
            </h1>
            <div className="max-w-xl border-l-2 border-[#8B0000] pl-8 mt-12">
              <p className="text-white/60 text-lg leading-relaxed font-light italic">
                A visual record of our engineering capability. Each project represents our commitment to structural rigor and aesthetic precision across the Chablais region.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. FILTERING SYSTEM (Swiper-like horizontal scroll on mobile) */}
      <section className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100 py-6">
        <div className="container max-w-[1000px]  mx-auto px-6 lg:px-24">
          <div className="flex items-center gap-10  no-scrollbar whitespace-nowrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-[10px] font-bold uppercase tracking-[0.3em] transition-all relative pb-2 ${
                  filter === cat ? 'text-[#8B0000]' : 'text-gray-400 hover:text-black'
                }`}
              >
                {cat}
                {filter === cat && (
                  <motion.div layoutId="activeFilter" className="absolute -bottom-6 left-0 w-full h-[2px] bg-[#8B0000]" />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PROJECT GRID */}
      <section className="container mx-auto px-6 lg:px-24 py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className="group relative"
              >
                {/* Image Monolith */}
                <div className="relative aspect-[4/5] overflow-hidden bg-stone-100 rounded-[2rem] shadow-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-[1.5s] grayscale group-hover:grayscale-0 group-hover:scale-105"
                  />
                  
                  {/* Technical Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="absolute top-10 left-10 bg-white/95 backdrop-blur px-5 py-2 text-[10px] font-bold uppercase tracking-widest text-black">
                     Ref: {String(project.id).padStart(3, '0')}
                  </div>

                  {/* Expansion Hover Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="w-16 h-16 rounded-full border border-white/30 bg-white/10 backdrop-blur-md flex items-center justify-center">
                       <Plus className="text-white" size={24} />
                    </div>
                  </div>
                </div>

                {/* Technical Metadata */}
                <div className="mt-10 space-y-6">
                  <div className="flex justify-between items-end border-b border-gray-100 pb-6 group-hover:border-[#8B0000] transition-colors duration-500">
                    <div>
                      <span className="text-[#8B0000] font-bold text-[9px] uppercase tracking-[0.3em]">{project.category}</span>
                      <h3 className="text-3xl font-bold text-gray-900 mt-2 uppercase tracking-tighter leading-none">
                        {project.title}
                      </h3>
                    </div>
                    <div className="w-14 h-14 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-[#8B0000] group-hover:text-white transition-all duration-500 flex-shrink-0">
                      <ArrowUpRight size={20} strokeWidth={1.5} />
                    </div>
                  </div>

                  <div className="flex gap-8">
                     <div className="flex flex-col">
                        <span className="text-[9px] uppercase tracking-widest text-gray-400 font-bold mb-1">Standard</span>
                        <span className="text-xs font-bold text-gray-900">{project.spec}</span>
                     </div>
                     <div className="flex flex-col">
                        <span className="text-[9px] uppercase tracking-widest text-gray-400 font-bold mb-1">Status</span>
                        <span className="text-xs font-bold text-gray-900">Illustration Photo</span>
                     </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* 4. INDUSTRIAL CALL TO ACTION */}
      <section className="bg-stone-950 py-32 relative overflow-hidden">
        {/* Background Large Text */}
        <div className="absolute bottom-0 right-0 text-[20vw] font-black text-white/[0.03] select-none leading-none pointer-events-none translate-y-1/2">
          IDEAL
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <h2 className="text-white text-5xl md:text-8xl font-bold uppercase tracking-tighter leading-[0.9] mb-12">
               Let's build your <br />
               <span className="font-serif italic text-white/60 lowercase font-light">next project.</span>
            </h2>
            
            <div className="flex flex-col md:flex-row gap-12 items-start md:items-center">
              <button className="bg-[#8B0000] text-white px-14 py-7 font-bold text-[11px] uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all flex items-center shadow-2xl">
                Request a Consultation <ArrowRight className="ml-4" size={20} />
              </button>
              
              <div className="flex flex-col gap-2">
                 <p className="text-white/40 text-[10px] uppercase tracking-[0.3em] font-bold">Liaison Office</p>
                 <a href="tel:+33750352648" className="text-white text-2xl font-bold tracking-tighter hover:text-[#8B0000] transition-colors">+33 6 66 73 25 06</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PROJECT BADGES / CLIENT TRUST */}
      <div className="bg-white py-12 border-t border-gray-100">
         <div className="container mx-auto px-6 lg:px-24 flex flex-wrap justify-between items-center gap-10 opacity-30 grayscale">
            <div className="flex items-center gap-3 font-black uppercase tracking-widest"><HardHat size={20}/> Construction</div>
            <div className="flex items-center gap-3 font-black uppercase tracking-widest"><Ruler size={20}/> Architecture</div>
            <div className="flex items-center gap-3 font-black uppercase tracking-widest"><ShieldCheck size={20}/> Warranty</div>
            <div className="text-[10px] font-bold uppercase tracking-[0.4em]">Excellence Defined</div>
         </div>
      </div>
    </main>
  );
};

export default Projects;
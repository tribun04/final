import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Maximize2, Sun, Layout } from "lucide-react";

const Amenagement = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <div className="min-h-screen bg-white text-stone-900 selection:bg-[#bc0108] selection:text-white  ">
      <section className="px-6 md:px-12 max-w-[1800px] mx-auto mb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-end">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="max-w-2xl mt-36">
            <Link to="/services" className="flex items-center gap-2 text-[#bc0108] text-[10px] tracking-[0.4em] uppercase font-bold mb-8 hover:translate-x-[-5px] transition-transform">
              <ArrowLeft className="w-4 h-4" /> Services
            </Link>
            <h1 className="text-6xl md:text-8xl lg:text-[110px] font-serif leading-[0.9] text-stone-900">
              Interior <br />
              <span className="italic text-[#bc0108]">works.</span>
            </h1>
            <p className="mt-10 text-stone-500 text-lg font-light max-w-md leading-relaxed">
              Plastering, ceilings, partitions and finishing support for construction and renovation projects.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="relative h-[400px] md:h-[600px] overflow-hidden">
            <img src="https://images.pexels.com/photos/34581867/pexels-photo-34581867.jpeg" alt="Interior works" className="w-full h-full object-cover" style={{ filter: 'brightness(0.5)' }} />
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-stone-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-px bg-stone-200 border border-stone-200">
            {[
              { icon: <Maximize2 className="w-6 h-6 text-[#bc0108]" />, title: "Plastering", desc: "Clean wall preparation and finishing for interior spaces." },
              { icon: <Sun className="w-6 h-6 text-[#bc0108]" />, title: "Ceilings", desc: "Ceiling works integrated into renovation and construction projects." },
              { icon: <Layout className="w-6 h-6 text-[#bc0108]" />, title: "Partitions", desc: "Interior layout work prepared for practical everyday use." }
            ].map((pillar, idx) => (
              <div key={idx} className="bg-white p-12 space-y-6 hover:bg-stone-50 transition-colors">
                {pillar.icon}
                <h3 className="text-xl font-bold uppercase tracking-tighter">{pillar.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed font-light">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <motion.div {...fadeInUp} className="lg:col-span-7">
            <div className="relative aspect-[16/10] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" alt="Interior construction detail" />
            </div>
          </motion.div>

          <motion.div {...fadeInUp} className="lg:col-span-5 space-y-8">
            <span className="text-[#bc0108] text-[10px] tracking-[0.5em] uppercase font-bold">Services</span>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight">
              Clean surfaces <br /> <span className="italic text-[#bc0108]">ready to finish.</span>
            </h2>
            <p className="text-stone-500 font-light text-lg leading-relaxed">
              We prepare interior spaces with attention to alignment, surface quality and coordination with other trades.
            </p>
            <ul className="space-y-4 pt-4 border-t border-stone-100">
              {["Plastering & ceilings", "Interior preparation", "Finishing support"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-xs uppercase tracking-widest text-stone-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#bc0108]" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="bg-stone-900 py-24 px-8 relative overflow-hidden text-center">
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-serif text-white/5 pointer-events-none select-none uppercase">
            Project
          </span>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-12">
              Plan your <span className="italic text-[#bc0108]">interior works.</span>
            </h2>
            <Link to="/contact" className="inline-flex items-center gap-6 bg-[#bc0108] text-white px-12 py-6 text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-white hover:text-stone-900 transition-all duration-500 shadow-xl">
              Request a Quote <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Amenagement;

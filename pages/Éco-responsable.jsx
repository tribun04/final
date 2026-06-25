import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Leaf, ThermometerSun, ShieldCheck } from "lucide-react";
import img4 from '../assets/4.jpeg';
import img10 from '../assets/10.jpeg';

const Eco = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }
  };

  return (
    <div className="min-h-screen bg-white text-stone-900 selection:bg-[#bc0108] selection:text-white  ">
      <section className="px-6 md:px-12 max-w-[1800px] mx-auto mb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="order-2 lg:order-1">
            <Link to="/services" className="flex items-center gap-2 text-[#bc0108] text-[10px] tracking-[0.4em] uppercase font-bold mb-10 hover:translate-x-[-5px] transition-transform">
              <ArrowLeft className="w-4 h-4" /> Back to services
            </Link>
            <h1 className="text-6xl md:text-[110px] font-serif leading-[0.85] text-stone-900 mb-10">
              Insulation <br />
              <span className="italic text-[#bc0108]">works.</span>
            </h1>
            <p className="text-stone-500 text-lg md:text-xl font-light leading-relaxed max-w-md">
              Interior and exterior insulation work designed to improve comfort and support durable building performance.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2 }} className="order-1 lg:order-2 h-[500px] md:h-[750px] overflow-hidden shadow-2xl relative group">
            <img src={img4} className="w-full h-full object-cover grayscale brightness-[0.45] group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000" alt="Insulation work" />
          </motion.div>
        </div>
      </section>

      <section className="py-32 bg-stone-900 text-white px-6 overflow-hidden relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
            <div className="relative pl-8 border-l-2 border-[#bc0108]">
              <span className="text-[#bc0108] text-[10px] tracking-[0.6em] uppercase font-bold block mb-4">Insulation</span>
              <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight">
                Comfort and <br />
                <span className="italic text-[#bc0108]">building protection.</span>
              </h2>
            </div>
            <div className="hidden lg:block text-right">
              <span className="text-[120px] font-serif leading-none text-white/5 select-none font-bold">03</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 border-t border-white/10">
            {[
              { id: "01", title: "Interior", icon: <Leaf className="w-6 h-6"/>, desc: "Interior insulation systems prepared for clean finishes." },
              { id: "02", title: "Exterior", icon: <ThermometerSun className="w-6 h-6"/>, desc: "Exterior insulation work for walls and building envelope areas." },
              { id: "03", title: "Protection", icon: <ShieldCheck className="w-6 h-6"/>, desc: "Solutions focused on long-term durability and comfort." }
            ].map((step, index) => (
              <motion.div {...fadeInUp} key={step.id} className={`relative p-12 group transition-all duration-700 hover:bg-stone-800 border-white/10 ${index !== 2 ? "md:border-r" : ""} border-b md:border-b-0`}>
                <div className="absolute top-0 left-0 w-0 h-1 bg-[#bc0108] transition-all duration-700 group-hover:w-full" />
                <div className="space-y-8">
                  <div className="flex justify-between items-center">
                    <span className="text-5xl font-serif italic text-[#bc0108] opacity-20 group-hover:opacity-100 transition-opacity duration-700">{step.id}</span>
                    <div className="text-stone-600 group-hover:text-[#bc0108] transition-colors duration-500">{step.icon}</div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold uppercase tracking-[0.2em] text-white">{step.title}</h3>
                    <p className="text-stone-400 font-light leading-relaxed text-sm">{step.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 max-w-7xl mx-auto overflow-hidden">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <motion.div {...fadeInUp} className="lg:col-span-5 space-y-8">
            <span className="text-[#bc0108] text-[10px] tracking-[0.5em] uppercase font-bold">Building Envelope</span>
            <h2 className="text-4xl md:text-6xl font-serif leading-tight">
              Prepared for <br /> <span className="italic text-[#bc0108]">lasting use.</span>
            </h2>
            <p className="text-stone-500 font-light text-lg leading-relaxed">
              Insulation works are coordinated with plastering, painting and exterior finishing requirements.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className="lg:col-span-7 relative group">
            <img src={img10} className="w-full aspect-[16/10] object-cover shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-1000" alt="Insulation material detail" />
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t border-l border-[#bc0108] pointer-events-none" />
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="bg-[#0a0a0a] py-24 px-8 md:px-24 flex flex-col items-center text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none" />
          <motion.div {...fadeInUp} className="relative z-10">
            <h2 className="text-4xl md:text-7xl font-serif text-white mb-10">
              Discuss your <br /> <span className="italic text-[#bc0108]">insulation project.</span>
            </h2>
            <p className="text-stone-400 max-w-md mx-auto mb-12 font-light leading-relaxed">
              Contact Ideal Construction for interior or exterior insulation work.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-6 bg-[#bc0108] text-white px-12 py-6 text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-white hover:text-stone-900 transition-all duration-500 shadow-2xl">
              Request a Quote <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
          <span className="absolute bottom-[-10%] right-[-5%] text-[12vw] font-serif text-white/[0.03] pointer-events-none select-none uppercase font-bold tracking-tighter">
            Insulation
          </span>
        </div>
      </section>
    </div>
  );
};

export default Eco;

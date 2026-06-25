import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Home, Shield, Ruler } from "lucide-react";
import img4 from '../assets/4.jpeg';

const Construction = () => {
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
            <h1 className="text-6xl md:text-[120px] font-serif leading-[0.85] text-stone-900 mb-10">
              Construction <br />
              <span className="italic text-[#bc0108]">work.</span>
            </h1>
            <p className="text-stone-500 text-lg md:text-xl font-light leading-relaxed max-w-md">
              Complete construction and renovation support for residential and commercial projects, from preparation to final delivery.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2 }} className="order-1 lg:order-2 h-[500px] md:h-[750px] overflow-hidden shadow-2xl">
            <img src="https://images.pexels.com/photos/7509167/pexels-photo-7509167.jpeg" className="w-full h-full object-cover" alt="Construction work" style={{ filter: 'brightness(40%)' }} />
          </motion.div>
        </div>
      </section>

      <section className="py-32 bg-white px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
            <div className="relative pl-8 border-l-2 border-[#bc0108]">
              <span className="text-[#bc0108] text-[10px] tracking-[0.6em] uppercase font-bold block mb-4">
                Method
              </span>
              <h2 className="text-4xl md:text-6xl font-serif text-stone-900 leading-tight">
                Reliable work <br />
                <span className="italic text-[#bc0108]">step by step.</span>
              </h2>
            </div>
            <div className="hidden lg:block text-right">
              <span className="text-[120px] font-serif leading-none text-stone-50 select-none font-bold">03</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 border-t border-stone-100">
            {[
              { id: "01", title: "Planning", icon: <Ruler className="w-6 h-6"/>, desc: "Project analysis, site review and preparation before work begins." },
              { id: "02", title: "Structure", icon: <Shield className="w-6 h-6"/>, desc: "Masonry, concrete and structural works completed with care." },
              { id: "03", title: "Delivery", icon: <Home className="w-6 h-6"/>, desc: "Final checks and handover focused on clean, durable results." }
            ].map((step, index) => (
              <motion.div {...fadeInUp} key={step.id} className={`relative p-12 group transition-all duration-700 hover:bg-stone-50 border-stone-100 ${index !== 2 ? "md:border-r" : ""} border-b md:border-b-0`}>
                <div className="absolute top-0 left-0 w-0 h-1 bg-[#bc0108] transition-all duration-700 group-hover:w-full" />
                <div className="space-y-8">
                  <div className="flex justify-between items-center">
                    <span className="text-5xl font-serif italic text-[#bc0108] opacity-20 group-hover:opacity-100 transition-opacity duration-700">{step.id}</span>
                    <div className="text-stone-300 group-hover:text-[#bc0108] transition-colors duration-500 transform group-hover:rotate-12">{step.icon}</div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold uppercase tracking-[0.2em] text-stone-900">{step.title}</h3>
                    <p className="text-stone-500 font-light leading-relaxed text-sm">{step.desc}</p>
                  </div>
                  <div className="pt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <span className="text-[10px] tracking-[0.4em] uppercase font-bold text-[#bc0108] flex items-center gap-2">
                      Details <div className="w-8 h-px bg-[#bc0108]" />
                    </span>
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
            <span className="text-[#bc0108] text-[10px] tracking-[0.5em] uppercase font-bold">Commitment</span>
            <h2 className="text-4xl md:text-6xl font-serif leading-tight">
              Quality and <br /> <span className="italic text-[#bc0108]">durability.</span>
            </h2>
            <p className="text-stone-500 font-light text-lg leading-relaxed">
              We build with professional care, organized execution and attention to construction details.
            </p>
            <div className="space-y-4 pt-4">
              {["Construction execution", "Renovation coordination", "Final inspection"].map((text) => (
                <div key={text} className="flex items-center gap-4 group cursor-default">
                  <div className="w-2 h-2 rounded-full border border-[#bc0108] group-hover:bg-[#bc0108] transition-all" />
                  <span className="text-xs uppercase tracking-widest text-stone-400 group-hover:text-stone-900 transition-colors">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className="lg:col-span-7 relative group">
            <img src={img4} className="w-full aspect-[16/10] object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 shadow-2xl" alt="Construction detail" />
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t border-r border-[#bc0108] pointer-events-none" />
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="bg-stone-900 py-24 px-8 md:px-24 flex flex-col items-center text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none" />
          <motion.div {...fadeInUp} className="relative z-10">
            <h2 className="text-4xl md:text-7xl font-serif text-white mb-10">
              Start your <br /> <span className="italic text-[#bc0108]">construction project.</span>
            </h2>
            <p className="text-stone-400 max-w-md mx-auto mb-12 font-light leading-relaxed">
              Contact Ideal Construction for construction, renovation, insulation, painting or structural work.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-6 bg-[#bc0108] text-white px-12 py-6 text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-white hover:text-stone-900 transition-all duration-500 shadow-2xl">
              Request a Quote <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Construction;

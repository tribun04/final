import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ImaginerPage = () => {
  return (
    <div className="bg-white min-h-screen text-stone-900 overflow-hidden selection:bg-[#bc0108] selection:text-white">
      <section className="relative h-screen flex items-center justify-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 0.04, y: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute font-serif text-[20vw] whitespace-nowrap pointer-events-none select-none text-stone-900"
        >
          IDEAL IDEAL
        </motion.h2>

        <div className="relative z-10 text-center max-w-5xl">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center justify-center gap-4 mb-8">
            <span className="w-12 h-px bg-[#bc0108]" />
            <span className="text-[10px] tracking-[0.8em] uppercase text-[#bc0108]">Project Planning</span>
            <span className="w-12 h-px bg-[#bc0108]" />
          </motion.div>

          <h1 className="font-serif text-7xl md:text-[140px] leading-none mb-12 text-stone-900">
            From concept <br />
            <span className="italic text-[#bc0108]">to construction.</span>
          </h1>

          <div className="flex justify-center">
            <div className="w-px h-24 bg-gradient-to-b from-[#bc0108] to-transparent animate-bounce" />
          </div>
        </div>
      </section>

      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div whileHover={{ scale: 1.02 }} className="relative group cursor-crosshair">
            <img src="https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=2070" className="w-full h-[600px] object-cover grayscale opacity-50 border border-stone-200" alt="Project plan" />
            <div className="absolute inset-0 overflow-hidden transition-all duration-700 w-0 group-hover:w-full border-r-2 border-[#bc0108]">
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070" className="w-full h-[600px] object-cover grayscale-0 max-w-none" style={{ width: "100%" }} alt="Finished construction project" />
            </div>
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 text-[10px] tracking-widest uppercase border border-stone-200 text-stone-700">
              Hover to compare
            </div>
          </motion.div>

          <div className="space-y-8">
            <h2 className="font-serif text-4xl md:text-6xl leading-tight text-stone-900">
              Planning before <br />
              <span className="italic text-[#bc0108]">execution.</span>
            </h2>
            <p className="text-stone-500 font-light leading-loose text-lg">
              A solid project starts with clear requirements, technical preparation and a realistic understanding of the site.
            </p>
            <div className="grid grid-cols-2 gap-10 pt-8 border-t border-stone-200">
              <div>
                <h4 className="text-[#bc0108] font-serif text-xl mb-2">01. Analysis</h4>
                <p className="text-xs text-stone-400 tracking-wider leading-relaxed">Project scope, needs and constraints are reviewed first.</p>
              </div>
              <div>
                <h4 className="text-[#bc0108] font-serif text-xl mb-2">02. Preparation</h4>
                <p className="text-xs text-stone-400 tracking-wider leading-relaxed">Technical planning prepares the work for clean execution.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-20">
            <h2 className="font-serif text-5xl italic text-stone-900">
              Construction <span className="not-italic text-[#bc0108]">References</span>
            </h2>
            <span className="text-stone-400 text-[10px] tracking-[0.4em] uppercase hidden md:block">Illustration Photos</span>
          </div>

          <div className="grid grid-cols-12 gap-6 h-[800px]">
            <div className="col-span-8 overflow-hidden relative group">
              <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000" className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" alt="Interior construction reference" />
              <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors" />
            </div>
            <div className="col-span-4 flex flex-col gap-6">
              <div className="h-1/2 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2069" className="w-full h-full object-cover grayscale" alt="Construction detail" />
              </div>
              <div className="h-1/2 bg-[#bc0108] p-10 flex flex-col justify-end">
                <p className="text-white font-serif text-2xl leading-snug">
                  Quality construction starts with careful preparation and clear communication.
                </p>
                <span className="text-white/60 text-[10px] mt-6 font-bold uppercase">Ideal Construction</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="h-screen flex items-center justify-center relative bg-white">
        <div className="text-center z-10">
          <Link to="/services" className="text-[10px] tracking-[0.5em] uppercase border-b border-[#bc0108] pb-2 text-[#bc0108] hover:text-stone-900 hover:border-stone-900 transition-all">
            <h2 className="font-serif text-6xl md:text-9xl mb-12 text-stone-900 opacity-20 hover:opacity-100 transition-opacity duration-700 cursor-default">
              Build <span className="text-[#bc0108]">-&gt;</span>
            </h2>
            View services
          </Link>
        </div>
        <div className="absolute w-[500px] h-[500px] border border-stone-200 rotate-45 -z-0 pointer-events-none" />
      </section>
    </div>
  );
};

export default ImaginerPage;

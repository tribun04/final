const About = () => (
  <section className="bg-white max-w-[1500px] mx-auto px-6 py-32 grid md:grid-cols-2 gap-20 items-center">
    <div>
      <div className="flex items-center gap-4 mb-8">
        <div className="w-8 h-px bg-[#bc0108]" />
        <span className="text-[10px] tracking-[0.4em] uppercase text-[#bc0108]">About</span>
      </div>
      <h2 className="font-serif text-5xl md:text-6xl font-light mb-8 text-stone-900">
        Ideal <br /><span className="italic text-[#bc0108]">Construction</span>
      </h2>
      <p className="text-stone-500 text-lg leading-relaxed mb-6 font-light">
        Ideal Construction is a construction company specialized in building, renovation and interior/exterior works for residential and commercial projects.
      </p>
      <div className="grid grid-cols-3 gap-8 mt-12">
        {[["Quality", "work"], ["Safety", "focus"], ["Durable", "results"]].map(([n, l], i) => (
          <div key={i} className="border-t border-stone-200 pt-6">
            <div className="text-3xl font-serif text-[#bc0108]">{n}</div>
            <div className="text-[9px] uppercase tracking-widest text-stone-400 mt-2">{l}</div>
          </div>
        ))}
      </div>
    </div>
    <div className="relative">
      <div className="aspect-[4/5] bg-stone-100 border border-stone-200 flex items-center justify-center italic text-stone-400">
        Illustration Photo
      </div>
      <div className="absolute -bottom-6 -left-6 bg-[#bc0108] p-8 text-white shadow-2xl">
        <div className="text-4xl font-bold">IC</div>
        <div className="text-[9px] tracking-tighter uppercase font-bold">Ideal Construction</div>
      </div>
    </div>
  </section>
);

export default About;

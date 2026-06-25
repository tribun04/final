import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, HelpCircle, MessageSquare } from "lucide-react";

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      q: "How can I request a quote?",
      a: "You can request a quote through the contact form or by contacting Ideal Construction directly. Share your project type, location, surface area and any available plans so we can review your needs.",
    },
    {
      q: "What services do you offer?",
      a: "We offer masonry and structural works, earthworks and VRD, construction and renovation, electrical systems, plastering and ceilings, insulation, and interior or exterior painting.",
    },
    {
      q: "Do you handle small renovation projects?",
      a: "Yes. We can review small renovation, repair and finishing projects as well as larger residential or commercial works.",
    },
    {
      q: "What is the project timeline?",
      a: "The timeline depends on the scope, technical preparation, site access and required materials. We provide a clearer schedule after reviewing the project details.",
    },
    {
      q: "Do you work with other contractors?",
      a: "Yes. We can coordinate with other contractors when a project requires several trades or when the client already has existing partners involved.",
    },
  ];

  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="bg-stone-50 py-24 font-sans" >
      <div className=" mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariant}
          >
            <span className="inline-flex items-center gap-2 text-[#8B0000] font-bold tracking-[0.3em] uppercase text-xs mb-4">
              <HelpCircle size={14} /> Questions & Answers
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              What to know about <br />
              <span className="font-serif italic text-gray-700 font-light">Ideal Construction</span>
            </h2>
            <div className="w-20 h-1 bg-[#8B0000] mx-auto mt-8"></div>
          </motion.div>
        </div>

        <div className="space-y-4">
          {faqData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`group border rounded-2xl transition-all duration-500 ${
                activeIndex === idx
                  ? "bg-white border-[#8B0000] shadow-xl shadow-[#8B0000]/5"
                  : "bg-white border-gray-100 hover:border-gray-300 shadow-sm"
              }`}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                className="w-full px-8 py-7 flex items-center justify-between text-left outline-none"
              >
                <span
                  className={`text-lg font-bold transition-colors duration-300 ${
                    activeIndex === idx ? "text-[#8B0000]" : "text-gray-800"
                  }`}
                >
                  {item.q}
                </span>

                <div
                  className={`relative w-6 h-6 flex items-center justify-center transition-transform duration-500 ${
                    activeIndex === idx ? "rotate-180" : ""
                  }`}
                >
                  <div
                    className={`absolute w-full h-0.5 bg-[#8B0000] transition-transform duration-500 ${
                      activeIndex === idx ? "rotate-0 opacity-0" : "rotate-90"
                    }`}
                  />
                  <div className="absolute w-full h-0.5 bg-[#8B0000]" />
                </div>
              </button>

              <AnimatePresence>
                {activeIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 text-gray-600 leading-relaxed text-lg border-t border-gray-50 pt-6">
                      <p className="max-w-3xl">{item.a}</p>
                      <div className="mt-6 flex items-center gap-2 text-[#8B0000] font-bold text-[10px] uppercase tracking-[0.2em] cursor-pointer hover:gap-4 transition-all">
                        <a href="/contact" className="flex items-center gap-2">
                        Request project details <ArrowRight size={14} />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 p-10 rounded-[2.5rem] bg-gray-900 text-white flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-[#8B0000] flex items-center justify-center shadow-lg">
              <MessageSquare className="text-white" size={28} />
            </div>
            <div>
              <h4 className="text-xl font-bold">Still have questions?</h4>
              <p className="text-white/50 font-light">Send us your project details.</p>
            </div>
          </div>
          <a
            href="#contact"
            className="whitespace-nowrap bg-white text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-[#8B0000] hover:text-white transition-all duration-300"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQPage;

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { ArrowRight, Quote, Globe, ShieldCheck, Target, Eye } from 'lucide-react';
import img5 from '../assets/5.jpeg';
import img6 from '../assets/6.jpeg';

import 'swiper/css';
import 'swiper/css/pagination';

const AboutUs = () => {
    const [activeSection, setActiveSection] = useState('section-1');

    const fadeInVariant = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['section-1', 'section-2'];
            const scrollPosition = window.scrollY + 300;
            sections.forEach(id => {
                const el = document.getElementById(id);
                if (el && scrollPosition >= el.offsetTop) setActiveSection(id);
            });
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <main className="overflow-x-hidden bg-white text-[#1A2337] antialiased">
            <aside className="fixed left-8 top-1/2 -translate-y-1/2 z-40 hidden xl:block">
                <nav className="flex flex-col space-y-10 border-l-2 border-gray-100 pl-6 relative">
                    <div
                        className="absolute left-[-2px] w-[2px] bg-[#8B0000] transition-all duration-500"
                        style={{ height: '20px', top: activeSection === 'section-1' ? '0px' : '65px' }}
                    />
                    <a href="#section-1" className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-colors ${activeSection === 'section-1' ? 'text-[#8B0000]' : 'text-gray-300'}`}>
                        About
                    </a>
                    <a href="#section-2" className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-colors ${activeSection === 'section-2' ? 'text-[#8B0000]' : 'text-gray-300'}`}>
                        Method & Values
                    </a>
                </nav>
            </aside>

            <section className="relative h-[80vh] w-full overflow-hidden flex items-center">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${img5})` }}
                >
                    <div className="absolute inset-0 bg-black/60" />
                </div>
                <div className="relative z-10 container mx-auto px-6 lg:px-24">
                    <motion.div initial="hidden" animate="visible" variants={fadeInVariant}>
                        <h5 className="text-[#8B0000] font-bold tracking-[0.3em] uppercase mb-4 text-sm">About Us</h5>
                        <h1 className="text-white text-5xl md:text-7xl font-light tracking-tight">Ideal Construction</h1>
                    </motion.div>
                </div>
            </section>

            <section id="section-1" className="py-24 bg-white">
                <div className="container mx-auto px-6 lg:px-24">
                    <div className="flex flex-col lg:flex-row gap-16">
                        <motion.div
                            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInVariant}
                            className="lg:w-5/12"
                        >
                            <h2 className="text-4xl font-bold text-gray-900 mb-8 leading-tight uppercase tracking-tight">
                                Construction and <br />renovation company
                            </h2>
                            <div className="relative pl-10">
                                <Quote className="absolute left-0 top-0 text-[#8B0000] opacity-20 w-8 h-8" />
                                <p className="text-xl italic text-gray-600 leading-relaxed font-light">
                                    We focus on clean execution, durability and professional results for every project we handle.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInVariant}
                            className="lg:w-7/12 text-gray-500 text-lg space-y-6 leading-relaxed font-light"
                        >
                            <p>Ideal Construction is a construction company specialized in building, renovation and interior/exterior works.</p>
                            <p>We deliver construction, renovation, insulation, painting and full building solutions with precision and quality craftsmanship.</p>
                            <p>Our work is organized around careful planning, technical preparation, clean site execution and final inspection.</p>
                        </motion.div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mt-24">
                        {[
                            { name: "Masonry & Structural Works", icon: <Globe /> },
                            { name: "Construction & Renovation", icon: <ShieldCheck /> },
                            { name: "Insulation & Painting", icon: <Target /> },
                            { name: "Earthworks & VRD", icon: <Eye /> }
                        ].map((item, idx) => (
                            <div key={idx} className="group border-b border-gray-100 pb-8 hover:border-[#8B0000] transition-all duration-500 cursor-default">
                                <div className="text-[#8B0000] mb-6 transition-transform group-hover:-translate-y-2">
                                    {React.cloneElement(item.icon, { size: 40, strokeWidth: 1.5 })}
                                </div>
                                <h6 className="font-bold text-gray-900 text-lg group-hover:text-[#8B0000] transition-colors uppercase tracking-wider">{item.name}</h6>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="section-2" className="bg-gray-50 py-24">
                <div className="container mx-auto px-6 lg:px-24">
                    <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">
                        <motion.div initial="hidden" whileInView="visible" variants={fadeInVariant}>
                            <h5 className="text-[#8B0000] font-bold tracking-widest uppercase mb-4 text-sm">Our Method</h5>
                            <h2 className="text-4xl md:text-5xl font-light leading-tight mb-8 text-gray-900">A clear process for reliable delivery</h2>
                            <p className="text-gray-500 text-lg border-l-4 border-[#8B0000] pl-8 font-light leading-relaxed">
                                Every project is approached with project analysis and planning, technical preparation, construction execution, and final delivery and inspection.
                            </p>
                        </motion.div>
                        <div className="h-[400px] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 shadow-xl rounded-sm">
                            <img src={img6} className="w-full h-full object-cover" alt="Ideal Construction method" />
                        </div>
                    </div>

                    <div className="space-y-32">
                        <div className="flex flex-col lg:flex-row justify-between gap-12">
                            <h2 className="text-4xl font-bold lg:w-1/3 uppercase tracking-tight text-gray-900">Commitment</h2>
                            <p className="text-2xl font-light text-gray-600 lg:w-2/3 leading-relaxed">
                                We build with a focus on quality, safety, and long-term durability. Every project is handled with professional care and attention to detail.
                            </p>
                        </div>
                        <div className="flex flex-col lg:flex-row justify-between gap-12">
                            <h2 className="text-4xl font-bold lg:w-1/3 uppercase tracking-tight text-gray-900">Area</h2>
                         
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative py-32 bg-[#0a0a0a] overflow-hidden text-white">
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[18vw] font-black text-white/[0.02] pointer-events-none select-none uppercase tracking-widest">
                    VALUES
                </span>
                <div className="relative z-10 container mx-auto px-6 lg:px-24">
                    <h2 className="text-5xl font-light mb-16 tracking-tight">Our Values</h2>
                    <div className="grid lg:grid-cols-2 gap-20">
                        <div className="space-y-4">
                            <p className="text-xl mb-12 font-light">Our work is guided by practical values that matter on every construction site.</p>
                            {[
                                { title: "QUALITY", desc: "Careful execution and attention to construction details." },
                                { title: "SAFETY", desc: "A steady focus on safe working conditions and organized sites." },
                                { title: "DURABILITY", desc: "Solutions chosen for long-term use and reliable results." },
                                { title: "CLARITY", desc: "Clear project communication from preparation to delivery." },
                                { title: "CARE", desc: "Professional respect for clients, sites and finished spaces." }
                            ].map((val, i) => (
                                <div key={i} className="group py-6 border-b border-white/10 hover:border-[#8B0000] transition-colors cursor-default">
                                    <h3 className="text-3xl font-light group-hover:text-[#8B0000] transition-colors tracking-wide">{val.title}</h3>
                                    <p className="max-w-xl text-gray-400 mt-3 opacity-0 group-hover:opacity-100 transition-all duration-500 h-0 group-hover:h-auto overflow-hidden text-sm leading-relaxed font-light">
                                        {val.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div className="flex items-end lg:justify-end">
                            <div className="max-w-xs text-xs text-gray-400 italic font-light leading-relaxed bg-black/10 p-6 border-l border-white/10">
                                <span className="text-[#8B0000] text-3xl block mb-1 font-serif">*</span>
                                Ideal Construction handles building, renovation and interior/exterior works with a practical, detail-focused approach.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 lg:px-24">
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 4 }
                        }}
                        autoplay={{ delay: 3500, disableOnInteraction: false }}
                        className="border-t border-gray-200 pt-16"
                    >
                        {[
                            { label: "Planning", val: "Project Analysis" },
                            { label: "Preparation", val: "Technical Review" },
                            { label: "Execution", val: "Site Work" },
                            { label: "Delivery", val: "Final Inspection" }
                        ].map((stat, i) => (
                            <SwiperSlide key={i}>
                                <div className="border-l-2 border-gray-100 pl-8">
                                    <h4 className="text-gray-400 uppercase text-[10px] tracking-widest font-bold mb-2">{stat.label}</h4>
                                    <span className="text-5xl font-extrabold text-[#8B0000] tracking-tight">{stat.val}</span>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            <section className="bg-gray-50 py-24">
                <div className="container mx-auto px-6 lg:px-24 flex flex-col md:flex-row justify-between items-start gap-16">
                    <div className="md:w-1/2">
                        <h5 className="text-[#8B0000] font-bold tracking-widest uppercase mb-4 text-sm">Contact</h5>
                        <button className="group flex items-center text-4xl font-light text-gray-900 text-left tracking-tight">
                            Request a Quote <ArrowRight className="ml-4 text-[#8B0000] transition-transform group-hover:translate-x-2" />
                        </button>
                    </div>
                    <div className="md:w-1/2">
                     
                    </div>
                </div>
            </section>
        </main>
    );
};

export default AboutUs;

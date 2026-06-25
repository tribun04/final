import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { ArrowRight } from 'lucide-react';
import LOGO from '../assets/logo1.png';

import careerImg from '../assets/7.jpeg';
import back from '../assets/4.jpeg';
import FaqPage from "../components/FAQ";
import img10 from '../assets/10.jpeg';
import img11 from '../assets/11.jpeg';
import img12 from '../assets/12.jpeg';
import img13 from '../assets/13.jpeg';
import videoSrc from '../assets/video.mp4';
import Contact from "../components/Contact2";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const Home = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3, delayChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
        }
    };

    const fadeInVariant = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <main className="overflow-x-hidden bg-white text-gray-950 antialiased">
            <section className="relative h-[125vh] w-full overflow-hidden bg-stone-900">
                <video
                    autoPlay muted loop playsInline
                    className="absolute inset-0 w-full h-[150vh] object-cover scale-105"
                >
                    <source src={videoSrc} type="video/mp4" />
                </video>

                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/80 z-0" />
                <div className="absolute inset-0 bg-stone-900/40 mix-blend-multiply z-0" />

                <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className="max-w-7xl lg:mt-[-40px] md:mt-[30px] mt-[30px]"
                    >
                        <motion.div
                            variants={itemVariants}
                            className="flex items-center gap-4 mb-8"
                        >
                            <div className="w-12 h-[1px] bg-[#8B0000]"></div>
                            <span className="text-white/60 uppercase tracking-[0.4em] text-[10px] font-bold">
                                Ideal Construction
                            </span>
                        </motion.div>

                        <motion.h1
                            variants={itemVariants}
                            className="text-white leading-[1.05] tracking-tight"
                        >
                            <span className="block text-5xl md:text-8xl font-light">
                                Ideal Construction
                            </span>

                            <span className="block text-4xl md:text-7xl font-serif italic text-white/90 mt-2">
                                Construction & Renovation You Can Trust
                            </span>

                            <span className="block text-lg md:text-2xl font-light text-white/70 mt-6 max-w-3xl">
                                We deliver construction, renovation, insulation, painting and full building solutions with precision and quality craftsmanship.
                            </span>
                        </motion.h1>

                        <motion.div
                            variants={itemVariants}
                            className="mt-10 pl-8 border-l border-white/10 max-w-2xl"
                        >
                            <p className="text-white/80 text-xl font-light leading-relaxed">
                            </p>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="mt-12 flex flex-wrap gap-6"
                        >
                            <button className="bg-[#8B0000] hover:bg-white hover:text-black transition-all duration-500 text-white px-10 py-5 text-[10px] font-bold uppercase tracking-[0.2em] group flex items-center gap-4">
                                Request a Quote
                                <div className="w-6 h-[1px] bg-white group-hover:bg-black transition-all"></div>
                            </button>
                        </motion.div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
                >
                    <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent relative overflow-hidden">
                        <motion.div
                            animate={{ y: [0, 48] }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                            className="absolute top-0 left-0 w-full h-1/2 bg-[#8B0000]"
                        />
                    </div>
                </motion.div>
            </section>

            <section className="bg-white">
                <div className="py-16 text-center border-b border-gray-100">
                    <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto px-6 font-medium">
                        Explore our core construction and renovation services:
                    </p>
                </div>
                <div className="flex flex-wrap lg:flex-nowrap">
                    {[
                        { title: "Masonry & Structural Works", img: img10 },
                        { title: "Earthworks & VRD", img: img11 },
                        { title: "Construction & Renovation", img: img12 },
                        { title: "Electrical Systems", img: img13 },
                        { title: "Plastering & Ceilings", img: img10 },
                        { title: "Interior & Exterior Insulation", img: img11 },
                        { title: "Interior & Exterior Painting", img: img12 }
                    ].map((box, idx) => (
                        <div key={idx} className="relative group w-full md:w-1/2 lg:w-1/4 h-[550px] overflow-hidden cursor-pointer">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-110"
                                style={{ backgroundImage: `url(${box.img})` }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent transition-opacity duration-500" />

                            <div className="absolute bottom-0 left-0 p-8 w-full transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                                <h3 className="text-white text-2xl font-bold mb-4 leading-tight">{box.title}</h3>
                                <div className="h-1 w-12 bg-[#8B0000] mb-6 transition-all duration-500 group-hover:w-full"></div>

                                <a
                                    href="/services"
                                    className="inline-flex items-center text-white font-bold text-xs tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 uppercase hover:text-[#8B0000]"
                                >
                                    <span className="mr-3">Request a Quote</span>
                                    <ArrowRight size={18} className="text-[#8B0000]" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
                        <motion.div
                            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInVariant}
                            className="lg:w-1/2"
                        >
                            <h5 className="text-[#8B0000] font-bold tracking-[0.2em] uppercase mb-4 text-sm">About Ideal Construction</h5>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-[1.15]">
                                Clean execution, durable results, professional care
                            </h2>
                            <p className="text-gray-600 text-lg italic border-l-4 border-[#8B0000] pl-6 py-2 leading-relaxed">
                                Ideal Construction is a construction company specialized in building, renovation and interior/exterior works. We focus on clean execution, durability and professional results for residential and commercial projects.
                            </p>
                        </motion.div>

                        <div className="lg:w-1/2 w-full flex justify-center items-center py-10">
                            <div className="relative group" style={{ perspective: '1500px' }}>
                                <div className="absolute inset-0 bg-[#8B0000]/5 rounded-full blur-3xl group-hover:bg-[#8B0000]/15 transition-all duration-700 scale-110"></div>
                                <div className="relative w-64 h-64 md:w-96 md:h-96 transition-all duration-[1200ms] [transform-style:preserve-3d] group-hover:[transform:rotateY(360deg)] cursor-pointer">
                                    <div className="absolute inset-0 w-full h-full rounded-full bg-white border-[10px] md:border-[15px] border-gray-50 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.2)] flex items-center justify-center p-8 md:p-12 backface-hidden overflow-hidden">
                                        <img src={LOGO} alt="Ideal Construction" className="w-full h-full  z-10 drop-shadow-sm object-cover" />
                                        <div className="absolute top-0 -left-[100%] w-full h-[200%] bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-[35deg] transition-all duration-1000 group-hover:left-[100%] z-20"></div>
                                        <div className="absolute inset-0 border border-gray-100 rounded-full m-2"></div>
                                    </div>
                                    <div className="absolute inset-0 w-full h-full rounded-full bg-[#8B0000] border-[10px] md:border-[15px] border-[#7a0000] flex flex-col items-center justify-center text-white [transform:rotateY(180deg)] backface-hidden">
                                        <div className="w-12 h-px bg-white/30 mx-auto mb-2"></div>
                                    </div>
                                </div>
                                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-4 bg-black/5 blur-xl rounded-[100%] group-hover:w-full group-hover:bg-black/10 transition-all duration-700"></div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-20">
                        <Swiper
                            modules={[Autoplay]}
                            spaceBetween={30}
                            slidesPerView={1}
                            breakpoints={{
                                640: { slidesPerView: 2 },
                                1024: { slidesPerView: 4 }
                            }}
                            autoplay={{ delay: 4500, disableOnInteraction: false }}
                            className="border-t border-gray-100 pt-12"
                        >
                            {[
                                { label: "Quality", val: "Careful Work" },
                                { label: "Safety", val: "Site Focus" },
                                { label: "Durability", val: "Long-Term Results" },
                                { label: "Area", val: "  Franc" }
                            ].map((stat, i) => (
                                <SwiperSlide key={i}>
                                    <div className="py-2 group">
                                        <h4 className="text-gray-400 uppercase text-[11px] tracking-[0.2em] font-bold mb-2 group-hover:text-[#8B0000] transition-colors">{stat.label}</h4>
                                        <span className="text-4xl md:text-5xl font-extrabold text-[#8B0000] tracking-tight">{stat.val}</span>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>

            <section className="relative h-[750px] bg-black">
                <Swiper
                    modules={[EffectFade, Autoplay, Pagination]}
                    effect="fade"
                    loop={true}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    className="h-full"
                >
                    <SwiperSlide>
                        <div
                            className="h-full w-full bg-cover bg-center flex items-center justify-center text-center px-6 relative"
                            style={{
                                backgroundImage: `url('https://images.pexels.com/photos/11827689/pexels-photo-11827689.jpeg')`
                            }}
                        >
                            <div className="absolute inset-0 bg-black/45" />
                            <div className="relative z-10 max-w-5xl mx-auto">
                                <h5 className="text-white/80 uppercase tracking-[0.3em] mb-4 text-xs font-bold">
                                    Illustration Photo
                                </h5>
                                <h2 className="text-4xl md:text-7xl font-bold text-white mb-10 leading-tight">
                                    Masonry, Construction and Renovation Projects
                                </h2>
                                <a
                                    href="/projects"
                                    className="inline-flex bg-[#8B0000] text-white px-10 py-5 font-bold items-center hover:bg-white hover:text-black transition-all duration-300 group tracking-widest text-xs uppercase shadow-lg"
                                >
                                    View Projects
                                    <ArrowRight
                                        size={18}
                                        className="ml-4 group-hover:translate-x-2 transition-transform"
                                    />
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div
                            className="h-full w-full bg-cover bg-center flex items-center justify-center text-center px-6 relative"
                            style={{
                                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.pexels.com/photos/32618047/pexels-photo-32618047.jpeg')`,
                            }}
                        >
                            <div className="absolute inset-0 bg-black/45" />
                            <div className="relative z-10 max-w-5xl mx-auto">
                                <h5 className="text-white uppercase tracking-[0.3em] mb-4 text-xs font-bold">
                                    Illustration Photo
                                </h5>
                                <h2 className="text-4xl md:text-7xl font-bold text-white mb-10 leading-tight">
                                    Durable Work for Residential and Commercial Clients
                                </h2>
                                <a
                                    href="/projects"
                                    className="inline-flex bg-[#8B0000] text-white px-10 py-5 font-bold items-center hover:bg-white hover:text-black transition-all duration-300 group tracking-widest text-xs uppercase shadow-lg"
                                >
                                    Explore Projects
                                    <ArrowRight
                                        size={18}
                                        className="ml-4 group-hover:translate-x-2 transition-transform"
                                    />
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>

            <section id="method" className="flex flex-col md:flex-row bg-[#f9f9f9] min-h-[550px]">
                <div className="md:w-1/2 p-12 md:p-24 flex flex-col justify-center">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInVariant}>
                        <h3 className="text-[#8B0000] font-bold tracking-widest mb-4 uppercase text-sm">Our Method</h3>
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 leading-tight">A clear process from planning to delivery</h2>
                        <p className="text-gray-650 text-lg mb-12 leading-relaxed max-w-md font-light">
                            1. Project analysis and planning<br />
                            2. Technical preparation<br />
                            3. Construction execution<br />
                            4. Final delivery and inspection
                        </p>
                        <a href="/contact" className="bg-black text-white px-10 py-5 font-bold inline-flex items-center hover:bg-[#8B0000] transition-all duration-300 tracking-widest text-xs uppercase shadow-md">
                            Request a Quote <ArrowRight size={18} className="ml-4" />
                        </a>
                    </motion.div>
                </div>
                <div className="md:w-1/2 min-h-[400px] bg-cover bg-center" style={{ backgroundImage: `url(${careerImg})` }} />
            </section>

            <section className="relative py-48 overflow-hidden">
                <div className="absolute inset-0 bg-fixed bg-cover bg-center" style={{ backgroundImage: `url(${back})` }} />
                <div className="absolute inset-0 bg-[#111]/90 mix-blend-multiply" />
                <div className="relative z-10 container mx-auto px-6 text-center text-white">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInVariant}>
                        <h4 className="uppercase tracking-[0.4em] font-bold mb-6 text-xs text-white/90">Commitments</h4>
                        <h2 className="text-5xl md:text-8xl font-serif italic mb-10 leading-none">Built for long-term use.</h2>
                        <p className="max-w-3xl mx-auto text-xl md:text-2xl font-light opacity-95 mb-12 leading-relaxed">
                            We build with a focus on quality, safety, and long-term durability. Every project is handled with professional care and attention to detail.
                        </p>
                     
                        <a href="/projects" className="inline-block bg-white text-[#8B0000] px-12 py-5 font-bold hover:bg-black hover:text-white transition-all duration-300 tracking-widest text-xs uppercase shadow-xl">
                            View Projects
                        </a>
                    </motion.div>
                </div>
            </section>

            <section  id="faq" className="bg-white py-24">
                <div className="container mx-auto px-6 text-center">
                    <FaqPage  />
                </div>
            </section>
            <Contact />
        </main>
    );
};

export default Home;

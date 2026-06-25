import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Phone, Mail, MapPin, CheckCircle, Loader2, Globe } from "lucide-react";
import emailjs from '@emailjs/browser';

const ContactUs = () => {
    const formRef = useRef();
    const [, setActiveSection] = useState('section-1');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const fadeInVariant = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['section-1', 'section-2'];
            const scrollPosition = window.scrollY + 300;
            sections.forEach(id => {
                const el = document.getElementById(id);
                if (el && scrollPosition >= el.offsetTop) {
                    setActiveSection(id);
                }
            });
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const SERVICE_ID = "service_hjfz4va";
        const TEMPLATE_ID = "template_panr283";
        const PUBLIC_KEY = "69e0CioBGif8akrIN";

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
            .then(() => {
                setIsSuccess(true);
                setIsSubmitting(false);
            })
            .catch((error) => {
                console.error("Error:", error);
                alert("An error occurred while sending your request.");
                setIsSubmitting(false);
            });
    };

    return (
        <main id="contact" className="overflow-x-hidden bg-white text-[#1A2337] antialiased font-sans">
            <section id="section-1" className="py-4 bg-white">
                <div className="container mx-auto px-6 lg:px-24">
                    <div className="max-w-6xl mx-auto">
                        <AnimatePresence mode="wait">
                            {isSuccess ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-4 bg-stone-50 rounded-[3rem] border border-gray-100"
                                >
                                    <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8">
                                        <CheckCircle size={40} className="text-green-600" />
                                    </div>
                                    <h3 className="text-4xl font-serif italic mb-4">Request Sent</h3>
                                    <p className="text-gray-500 max-w-md mx-auto mb-10 font-light">
                                        Thank you. Ideal Construction has received your request and will review your project details.
                                    </p>
                                    <button onClick={() => setIsSuccess(false)} className="text-[#8B0000] font-bold uppercase tracking-widest text-xs border-b-2 border-[#8B0000] pb-2 hover:text-black hover:border-black transition-all">
                                        New request
                                    </button>
                                </motion.div>
                            ) : (
                                <div className="grid lg:grid-cols-[1fr_2fr] gap-24">
                                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInVariant}>
                                        <h2 className="text-4xl font-bold text-gray-900 mb-8 leading-tight">
                                            Request a <br /><span className="font-serif italic font-light">quote</span>
                                        </h2>
                                        <div className="w-16 h-1 bg-[#8B0000] mb-8" />
                                        <p className="text-gray-500 font-light leading-relaxed">
                                            Tell us about your construction or renovation project. We will review the details and respond with the next steps.
                                        </p>
                                    </motion.div>

                                    <form ref={formRef} onSubmit={sendEmail} className="space-y-12">
                                        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
                                            {[
                                                { label: "First Name", name: "firstName", type: "text" },
                                                { label: "Last Name", name: "lastName", type: "text" },
                                                { label: "Email", name: "email", type: "email" },
                                                { label: "Phone", name: "phone", type: "tel" }
                                            ].map((field) => (
                                                <div key={field.name} className="group flex flex-col border-b border-gray-200 focus-within:border-[#8B0000] transition-all duration-500">
                                                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 group-focus-within:text-[#8B0000] transition-colors">{field.label}*</label>
                                                    <input required type={field.type} name={field.name} className="py-4 outline-none bg-transparent text-gray-900 font-light text-lg" />
                                                </div>
                                            ))}
                                            <div className="md:col-span-2 group flex flex-col border-b border-gray-200 focus-within:border-[#8B0000] transition-all duration-500">
                                                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 group-focus-within:text-[#8B0000] transition-colors">Project Description*</label>
                                                <textarea required name="message" rows="4" className="py-4 outline-none resize-none bg-transparent text-gray-900 font-light text-lg leading-relaxed placeholder:text-gray-200" placeholder="Project type, estimated surface, location..."></textarea>
                                            </div>
                                        </div>

                                        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
                                            <p className="text-[10px] text-gray-300 uppercase tracking-widest font-bold">
                                                * Required fields
                                            </p>
                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="group bg-[#8B0000] text-white px-14 py-6 font-bold uppercase tracking-[0.3em] text-[10px] hover:bg-black transition-all flex items-center shadow-xl disabled:opacity-50"
                                            >
                                                {isSubmitting ? <Loader2 className="animate-spin mr-3" size={16} /> : 'Send Request'}
                                                {!isSubmitting && <ArrowRight size={16} className="ml-4 group-hover:translate-x-2 transition-transform" />}
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            <section id="section-2" className="py-32 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 text-[20rem] font-bold text-gray-50/50 leading-none select-none pointer-events-none -translate-y-1/2 translate-x-1/4 uppercase tracking-tighter">
                    HQ
                </div>

                <div className="container mx-auto px-6 lg:px-24 relative z-10">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex items-center gap-6 mb-20">
                            <div className="h-px w-24 bg-[#8B0000]" />
                            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-gray-900 uppercase">
                                Contact <span className="font-serif italic text-gray-400">&</span> Office
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 border-l border-gray-100">
                            <div className="relative p-12 border-r border-b lg:border-b-0 border-gray-100 group overflow-hidden">
                                <MapPin className="absolute -right-8 -bottom-8 text-gray-50 scale-[4] rotate-12 group-hover:text-[#8B0000]/5 transition-colors duration-700" size={100} />

                                <div className="relative z-10">
                                    <span className="text-[10px] font-bold text-[#8B0000] uppercase tracking-[0.4em] mb-10 block">01. Location</span>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Ideal Construction</h3>
                                    <p className="text-gray-500 font-light text-xl leading-relaxed mb-10">
                                        14 Ter avenue du <br />
                                        <span className="text-gray-900 font-medium">Chatelard</span> <br />
                                        74200 Thonon-les-Bains
                                    </p>
                                    <button className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-[#8B0000] transition-colors">
                                        Open in Google Maps <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                                    </button>
                                </div>
                            </div>

                            <div className="relative p-12 border-r border-b lg:border-b-0 border-gray-100 group bg-stone-50/50">
                                <Phone className="absolute -right-8 -bottom-8 text-gray-50 scale-[4] -rotate-12 group-hover:text-[#8B0000]/5 transition-colors duration-700" size={100} />

                                <div className="relative z-10">
                                    <span className="text-[10px] font-bold text-[#8B0000] uppercase tracking-[0.4em] mb-10 block">02. Phone</span>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Phone</h3>
                                    <div className="space-y-1 mb-10">
                                        <p className="text-sm text-gray-400 uppercase tracking-widest font-medium">Quotes & Project Requests</p>
                                        <a href="tel:+33666732506" className="text-3xl font-bold text-gray-900 hover:text-[#8B0000] transition-colors tracking-tighter">
                                           +33 6 66 73 25 06
                                        </a>
                                    </div>
                                    <p className="text-gray-500 font-serif italic text-sm">
                                        Monday to Friday <br />
                                        08:00 to 18:00
                                    </p>
                                </div>
                            </div>

                            <div className="relative p-12 border-r border-gray-100 group">
                                <Mail className="absolute -right-8 -bottom-8 text-gray-50 scale-[4] rotate-6 group-hover:text-[#8B0000]/5 transition-colors duration-700" size={100} />

                                <div className="relative z-10">
                                    <span className="text-[10px] font-bold text-[#8B0000] uppercase tracking-[0.4em] mb-10 block">03. Email</span>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Email</h3>
                                    <div className="space-y-1 mb-10">
                                        <p className="text-sm text-gray-400 uppercase tracking-widest font-medium">Contact</p>
                                        <a href="mailto:contact@ideal-construction74.fr" className="text-lg font-bold text-gray-900 break-all hover:text-[#8B0000] border-b-2 border-[#8B0000]/20 hover:border-[#8B0000] transition-all">
                                            contact@ideal-construction74.fr
                                        </a>
                                    </div>
                                    <div className="flex items-center gap-4 text-gray-400">
                                        <Globe size={18} className="text-[#8B0000]" />
                                        <span className="text-[10px] uppercase tracking-widest font-bold">Construction & renovation inquiries</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-24 pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8">
                            <div className="flex items-center gap-10">
                                <div className="flex flex-col">
                                    <span className="text-2xl font-bold text-gray-900">France</span>
                                    <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400">Area of operation</span>
                                </div>
                                <div className="w-[1px] h-10 bg-gray-200" />
                            </div>

                    
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#8B0000]/20 to-transparent" />
            </section>
        </main>
    );
};

export default ContactUs;

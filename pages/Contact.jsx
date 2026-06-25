import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail, MapPin, CheckCircle, Loader2 } from "lucide-react";
import emailjs from '@emailjs/browser';

const ContactUs = () => {
    const formRef = useRef();
    const [activeSection, setActiveSection] = useState('section-1');
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
            .then((result) => {
                console.log("Success:", result.text);
                setIsSuccess(true);
                setIsSubmitting(false);
            })
            .catch((error) => {
                console.error("Error:", error);
                alert("An error occurred while sending your request. Please try again.");
                setIsSubmitting(false);
            });
    };

    return (
        <main className="overflow-x-hidden bg-white text-[#1A2337] antialiased">
            <aside className="fixed left-8 top-1/2 -translate-y-1/2 z-40 hidden xl:block">
                <nav className="flex flex-col space-y-10 border-l-2 border-gray-100 pl-6 relative">
                    <div
                        className="absolute left-[-2px] w-[2px] bg-[#8B0000] transition-all duration-500"
                        style={{ height: '20px', top: activeSection === 'section-1' ? '0px' : '65px' }}
                    />
                    <a href="#section-1" className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-colors ${activeSection === 'section-1' ? 'text-[#8B0000]' : 'text-gray-300'}`}>
                        Quote Request
                    </a>
                    <a href="#section-2" className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-colors ${activeSection === 'section-2' ? 'text-[#8B0000]' : 'text-gray-300'}`}>
                        Office & Contact
                    </a>
                </nav>
            </aside>

            <section className="relative h-[40vh] w-full overflow-hidden flex items-center">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('https://images.pexels.com/photos/11827689/pexels-photo-11827689.jpeg')" }}
                >
                    <div className="absolute inset-0 bg-black/50" />
                </div>
                <div className="relative z-10 container mx-auto px-6 lg:px-24">
                    <motion.div initial="hidden" animate="visible" variants={fadeInVariant}>
                        <h5 className="text-[#8B0000] font-bold tracking-[0.3em] uppercase mb-4 text-sm  pt-32">Ideal Construction</h5>
                        <h1 className="text-white text-5xl md:text-7xl font-light tracking-tight uppercase ">Contact</h1>
                    </motion.div>
                </div>
            </section>

            <section id="section-1" className="py-24">
                <div className="container mx-auto px-6 lg:px-24">
                    <div className="max-w-[1600px] mx-auto">
                        {isSuccess ? (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20 bg-gray-50 border border-gray-100 rounded-sm shadow-sm">
                                <CheckCircle size={64} className="text-green-600 mx-auto mb-6" strokeWidth={1.5} />
                                <h3 className="text-3xl font-serif italic font-bold mb-4 text-gray-900">Request Sent</h3>
                                <p className="text-gray-500 max-w-lg mx-auto mb-8 font-light leading-relaxed">
                                    Thank you. Ideal Construction has received your request and will review your project details.
                                </p>
                                <button onClick={() => setIsSuccess(false)} className="bg-[#8B0000] text-white px-8 py-4 font-bold uppercase text-xs tracking-widest hover:bg-black transition-colors">
                                    Submit another request
                                </button>
                            </motion.div>
                        ) : (
                            <div className="space-y-16">
                                <div className="max-w-2xl">
                                    <h2 className="text-4xl font-serif text-gray-900 mb-4 tracking-tight">Request a quote</h2>
                                    <p className="text-gray-500 font-light leading-relaxed">
                                        Share your construction or renovation project details and we will review the next steps with you.
                                    </p>
                                </div>

                                <form ref={formRef} onSubmit={sendEmail} className="space-y-12">
                                    <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
                                        <div className="flex flex-col border-b border-gray-200 focus-within:border-[#8B0000] transition-colors">
                                            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">First Name*</label>
                                            <input required type="text" name="firstName" className="py-3 outline-none bg-transparent text-gray-900 font-light" />
                                        </div>
                                        <div className="flex flex-col border-b border-gray-200 focus-within:border-[#8B0000] transition-colors">
                                            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Last Name*</label>
                                            <input required type="text" name="lastName" className="py-3 outline-none bg-transparent text-gray-900 font-light" />
                                        </div>
                                        <div className="flex flex-col border-b border-gray-200 focus-within:border-[#8B0000] transition-colors">
                                            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Email*</label>
                                            <input required type="email" name="email" className="py-3 outline-none bg-transparent text-gray-900 font-light" />
                                        </div>
                                        <div className="flex flex-col border-b border-gray-200 focus-within:border-[#8B0000] transition-colors">
                                            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Phone*</label>
                                            <input required type="tel" name="phone" className="py-3 outline-none bg-transparent text-gray-900 font-light" />
                                        </div>
                                        <div className="md:col-span-2 flex flex-col border-b border-gray-200 focus-within:border-[#8B0000] transition-colors">
                                            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Project details*</label>
                                            <textarea required name="message" rows="4" className="py-3 outline-none resize-none bg-transparent text-gray-900 font-light leading-relaxed"></textarea>
                                        </div>
                                    </div>

                                    <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-4">
                                        <p className="text-[10px] text-gray-400 uppercase italic tracking-wider">* Required fields</p>
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="bg-[#8B0000] text-white px-12 py-5 font-bold uppercase tracking-[0.2em] text-xs hover:bg-black transition-all flex items-center disabled:opacity-50 shadow-lg rounded-sm"
                                        >
                                            {isSubmitting ? <Loader2 className="animate-spin mr-2" size={18} /> : 'Send Request'}
                                            {!isSubmitting && <ArrowRight size={18} className="ml-3" />}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <section id="section-2" className="py-24 bg-gray-50 border-t border-gray-200/60">
                <div className="container mx-auto px-6 lg:px-24">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-12">
                            <div className="border-t-2 rounded-sm
 border-[#8B0000] pt-8 bg-white p-10 shadow-sm ">
                                <h4 className="text-xl font-serif font-bold mb-6 text-gray-900">Ideal Construction</h4>
                                <div className="space-y-4 text-gray-500 font-light text-sm leading-relaxed">
                                    <p className="flex items-start gap-3">
                                        <MapPin size={18} className="text-[#8B0000] flex-shrink-0 mt-0.5" />
                                        <span>14 Ter avenue du Chatelard,<br />74200 Thonon-les-Bains, France</span>
                                    </p>
                                    <p className="flex items-center gap-3">
                                        <Phone size={18} className="text-[#8B0000] flex-shrink-0" />
                                        <span>+33 6 66 73 25 06</span>
                                    </p>
                                    <p className="flex items-center gap-3">
                                        <Mail size={18} className="text-[#8B0000] flex-shrink-0" />
                                        <span>contact@ideal-construction74.fr</span>
                                    </p>
                                    <p>Hours: Monday to Friday, 08:00 to 18:00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ContactUs;

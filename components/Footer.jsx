import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import W from "../assets/LOGOFOOTER.png";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Navigation Helper for smooth scrolling to sections (like FAQ)
  const handleNav = (e, path) => {
    if (path.startsWith('/#')) {
      e.preventDefault();
      const id = path.replace('/#', '');
      
      if (location.pathname === '/') {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/');
        // Small delay to allow home page to mount before scrolling
        setTimeout(() => {
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    }
  };

  const footerSections = [
    {
      title: "Navigation",
      links: [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Our Services", path: "/services" },
        { name: "Realizations", path: "/projects" },
        { name: "FAQ", path: "/#faq" }, // FIXED path
        { name: "Contact", path: "/contact" },
      ],
    },
    {
      title: "Our Expertise",
      links: [
        { name: "Masonry & Structural", path: "/services#structural" },
        { name: "Earthworks & VRD", path: "/services#infrastructure" },
        { name: "Turnkey Renovation", path: "/services#renovation" },
        { name: "Electrical Systems", path: "/services#electrical" },
        { name: "Plastering & Ceilings", path: "/services#partitioning" },
        { name: "Thermal Insulation", path: "/services#insulation" },
        { name: "Artisanal Painting", path: "/services#finishes" },
      ],
    },
  ];

  return (
    <footer className="relative bg-[#0a0a0a] border-t border-white/5 pt-24 pb-12 px-6 overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute inset-x-0 bottom-[-20px] flex justify-center pointer-events-none select-none z-0 opacity-[0.03]">
        <h2 className="text-[8vw] text-center font-bold uppercase leading-none whitespace-nowrap text-white">
          Ideal Construction
        </h2>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-20">
          <div className="max-w-sm">
            <Link to="/" className="inline-block mb-8">
              <img src={W} alt="Ideal Construction" className="h-32 md:h-40 w-auto object-contain" />
            </Link>
            <p className="text-white/50 text-lg font-light leading-relaxed mb-8">
              Engineering excellence and premium construction solutions focused on structural safety and long-term durability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 lg:gap-24 w-full lg:w-auto">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h4 className="text-[#8B0000] text-[11px] font-bold tracking-[0.2em] uppercase mb-8">
                  {section.title}
                </h4>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      {/* Check if the path is an anchor/hash link */}
                      {link.path.includes('#') ? (
                        <button
                          onClick={(e) => handleNav(e, link.path.startsWith('/#') ? link.path : link.path)}
                          className="text-white/40 hover:text-white text-sm transition-colors flex items-center group text-left"
                        >
                          <Link to={link.path} onClick={(e) => handleNav(e, link.path)} className="flex items-center">
                            {link.name}
                            <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-all -translate-y-1" />
                          </Link>
                        </button>
                      ) : (
                        <Link
                          to={link.path}
                          className="text-white/40 hover:text-white text-sm transition-colors flex items-center group"
                        >
                          {link.name}
                          <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-all -translate-y-1" />
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h4 className="text-[#8B0000] text-[11px] font-bold tracking-[0.2em] uppercase mb-8">
                Contact HQ
              </h4>
              <ul className="space-y-5">
                <li className="flex items-start gap-3 text-white/40 text-sm">
                  <MapPin size={18} className="text-[#8B0000] shrink-0" />
                  <span>14 Ter avenue du Chatelard,<br />74200 Thonon-les-Bains, France</span>
                </li>
                <li className="flex items-center gap-3 text-white/40 text-sm">
                  <Phone size={18} className="text-[#8B0000] shrink-0" />
                  <a href="tel:+33750352648" className="hover:text-white transition-colors">+33 6 66 73 25 06</a>
                </li>
                <li className="flex items-center gap-3 text-white/40 text-sm">
                  <Mail size={18} className="text-[#8B0000] shrink-0" />
                  <a href="mailto:contact@ideal-construction74.fr" className="hover:text-white transition-colors break-all">contact@ideal-construction74.fr</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action Bar */}
        <div className="border-y border-white/5 py-10 mb-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <h3 className="text-white text-xl font-light italic">
            Ready to initiate your building project?
          </h3>
          <Link
            to="/contact"
            className="bg-white text-black px-10 py-4 font-bold text-[11px] tracking-widest uppercase hover:bg-[#8B0000] hover:text-white transition-all shadow-xl"
          >
            Request Technical Quote
          </Link>
        </div>

        {/* Legal Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] tracking-[0.15em] uppercase text-white/20">
          <div className="flex flex-wrap justify-center gap-8">
            <span>© 2025 Ideal Construction. All rights reserved.</span>
            <Link to="/mentions-legales" className="hover:text-white transition-colors">Legal</Link>
            <Link to="/confidentialite" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="/cookies" className="hover:text-white transition-colors">Cookies</Link>
          </div>

          <div className="flex items-center gap-2 font-bold tracking-[0.3em]">
             EXCELLENCE IN ENGINEERING
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
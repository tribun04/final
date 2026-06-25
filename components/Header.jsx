import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { X, ArrowRight, Menu, ChevronDown } from 'lucide-react';
import LOGO from '../assets/logo1.png';

const Header = () => {
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);

  const headerRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { id: 5, title: 'Home', path: '/', links: [] },
    { id: 1, title: 'About', path: '/about', links: [] },
    {
      id: 3,
      title: 'Services',
      path: '/services',
      links: [
        { id: 301, title: 'Masonry & Structural Works', hash: '#structural' },
        { id: 302, title: 'Earthworks & VRD', hash: '#infrastructure' },
        { id: 303, title: 'Construction & Renovation', hash: '#renovation' },
        { id: 304, title: 'Electrical Systems', hash: '#electrical' },
        { id: 305, title: 'Plastering & Ceilings', hash: '#partitioning' },
        { id: 306, title: 'Interior & Exterior Insulation', hash: '#insulation' },
        { id: 307, title: 'Interior & Exterior Painting', hash: '#finishes' }
      ]
    },
    { id: 0, title: 'Projects', path: '/projects', links: [] },
    { id: 6, title: 'FAQ', path: '/#faq', links: [] },
    { id: 4, title: 'Contact', path: '/contact', links: [] }
  ];

  // Smooth Scroll Helper
  const scrollToSection = (id) => {
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      const offset = 100; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleMenuClick = (e, item) => {
    if (item.links && item.links.length > 0) {
      e.preventDefault();
      setActiveSubmenu(activeSubmenu === item.id ? null : item.id);
      return;
    }

    if (item.path.startsWith('/#')) {
      e.preventDefault();
      setIsMobileMenuOpen(false);
      const hash = item.path.replace('/', ''); 
      
      if (location.pathname === '/') {
        scrollToSection(hash);
      } else {
        navigate('/');
        setTimeout(() => scrollToSection(hash), 100);
      }
      return;
    }

    setActiveSubmenu(null);
    setIsMobileMenuOpen(false);
    navigate(item.path);
  };

  const handleSublinkClick = (e, path, hash) => {
    setActiveSubmenu(null);
    setIsMobileMenuOpen(false);

    if (location.pathname === path) {
      e.preventDefault();
      scrollToSection(hash);
    } 
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setActiveSubmenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        ref={headerRef}
        className={`absolute top-0 w-full z-50 transition-all duration-500 py-6 bg-transparent ${
          activeSubmenu !== null ? 'bg-[#8B0000]/90 backdrop-blur-md' : ''
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <Link to="/" onClick={() => { setActiveSubmenu(null); setIsMobileMenuOpen(false); }}>
              <img src={LOGO} alt="Logo" className="h-20 lg:h-24 w-auto transition-all" />
            </Link>

            <nav className="hidden lg:block">
              <ul className="flex space-x-10">
                {menuItems.map((item) => (
                  <li key={item.id} className="relative">
                    <button
                      onClick={(e) => handleMenuClick(e, item)}
                      className={`text-white font-bold uppercase text-[11px] tracking-[0.3em] py-4 border-b-2 transition-all flex items-center gap-2 ${
                        activeSubmenu === item.id || (location.pathname === item.path && activeSubmenu === null)
                          ? 'border-white'
                          : 'border-transparent hover:border-white/50'
                      }`}
                    >
                      {item.title}
                      {item.links.length > 0 && <ChevronDown size={14} className={activeSubmenu === item.id ? 'rotate-180' : ''} />}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            <button className="lg:hidden text-white" onClick={() => setIsMobileMenuOpen(true)}>
              <Menu size={32} />
            </button>
          </div>
        </div>

        {/* MEGA MENU */}
        <div className={`hidden lg:block absolute left-0 w-full bg-[#660000] transition-all duration-500 overflow-hidden shadow-2xl ${
          activeSubmenu !== null ? 'max-h-[500px] opacity-100 border-t border-white/10' : 'max-h-0 opacity-0 pointer-events-none'
        }`}>
          <div className="container mx-auto px-6 py-16 flex">
            <div className="w-1/3 border-r border-white/10 pr-12">
              <h6 className="text-white uppercase text-[10px] tracking-widest mb-4">Engineering</h6>
              <h2 className="text-white text-4xl font-serif italic mb-6">Our Services</h2>
              <button onClick={() => { navigate('/services'); setActiveSubmenu(null); }} className="bg-white text-black px-8 py-3 font-bold text-[10px] uppercase tracking-widest hover:bg-black hover:text-white transition-all">
                View All
              </button>
            </div>
            <div className="w-2/3 pl-12 grid grid-cols-2 gap-x-12">
              {menuItems.find(i => i.id === activeSubmenu)?.links.map((link) => (
                <Link
                  key={link.id}
                  to={`/services${link.hash}`}
                  onClick={(e) => handleSublinkClick(e, '/services', link.hash)}
                  className="text-white text-lg font-bold flex justify-between items-center py-4 border-b border-white/5 hover:pl-4 transition-all"
                >
                  {link.title} <ArrowRight size={16} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div className={`fixed inset-0 bg-[#1a1a1a] z-[70] transition-all duration-700 ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-6 border-b border-white/5">
            <img src={LOGO} alt="Logo" className="h-12 w-auto" />
            <button onClick={() => setIsMobileMenuOpen(false)} className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-full">
              <X size={24} className="text-white" />
            </button>
          </div>
          <nav className="flex-1 px-8 pt-12 overflow-y-auto">
            <div className="flex flex-col space-y-2">
              {menuItems.map((item, index) => (
                <div key={item.id}>
                  {item.links.length > 0 ? (
                    <div className="py-4 border-b border-white/5">
                      <button onClick={() => setMobileSubmenuOpen(!mobileSubmenuOpen)} className="w-full flex justify-between text-white">
                        <span className="text-4xl font-bold uppercase tracking-tighter">{item.title}</span>
                        <ChevronDown className={mobileSubmenuOpen ? 'rotate-180' : ''} size={24} />
                      </button>
                      <div className={`transition-all duration-500 overflow-hidden ${mobileSubmenuOpen ? 'max-h-96' : 'max-h-0'}`}>
                        {item.links.map((link) => (
                          <Link key={link.id} to={`/services${link.hash}`} onClick={(e) => handleSublinkClick(e, '/services', link.hash)} className="block text-white/60 text-sm py-3 pl-6 uppercase tracking-widest">
                            {link.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <button onClick={(e) => handleMenuClick(e, item)} className="flex items-baseline gap-6 py-4 text-white w-full border-b border-white/5 uppercase text-4xl font-bold tracking-tighter">
                      {item.title}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
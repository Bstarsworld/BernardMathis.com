import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Sparkles, 
  Film, 
  Video,
  Camera, 
  ShieldCheck, 
  Mail, 
  Menu, 
  X, 
  ArrowUpRight,
  ExternalLink,
  Server
} from 'lucide-react';

interface NavigationProps {
  onOpenContactModal?: () => void;
}

export const Navigation: React.FC<NavigationProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 40);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((scrollY / totalHeight) * 100);
      }

      // Section spy
      const sections = ['hero', 'work', 'services', 'gear-matrix', 'experience', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 150) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'About', icon: Sparkles },
    { id: 'work', label: 'Reel & Work', icon: Film },
    { id: 'services', label: 'Capabilities', icon: Video },
    { id: 'gear-matrix', label: 'Camera & Audio', icon: Camera },
    { id: 'experience', label: 'Background', icon: ShieldCheck },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        id="main-navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#07090e]/90 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl'
            : 'bg-transparent py-5'
        }`}
      >
        {/* Scroll Progress line */}
        <div 
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-cyan-500 via-teal-400 to-indigo-500 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Monogram / Brand */}
            <button
              type="button"
              id="nav-logo-btn"
              onClick={() => scrollToSection('hero')}
              className="flex items-center gap-3 text-left group focus:outline-none"
            >
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/25 to-teal-500/10 border border-cyan-500/40 group-hover:border-cyan-400 transition-all duration-300 shadow-md shadow-cyan-950/40">
                <span className="font-display font-extrabold text-sm tracking-wider text-cyan-300 group-hover:text-white">
                  B★
                </span>
                <span className="absolute -inset-0.5 rounded-xl bg-cyan-500/20 blur opacity-0 group-hover:opacity-100 transition duration-300" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-display font-bold text-sm tracking-wide text-white group-hover:text-cyan-300 transition-colors">
                    BSTAR
                  </span>
                  <span className="text-[10px] font-mono text-cyan-400/80 bg-cyan-500/10 px-1 rounded border border-cyan-500/20">
                    ®
                  </span>
                  <span className="text-slate-400 text-xs font-normal">
                    (Bernard Mathis)
                  </span>
                </div>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/[0.08] p-1.5 rounded-full backdrop-blur-md">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    id={`nav-link-${link.id}`}
                    type="button"
                    onClick={() => scrollToSection(link.id)}
                    className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                      isActive
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                        : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{link.label}</span>
                  </button>
                );
              })}
            </nav>

            {/* Right Side Actions */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={PERSONAL_INFO.domains.cloud}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-cyan-400 text-xs font-mono transition-colors px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/5 flex items-center gap-1"
                title="Intrepid Cloud Media Server"
              >
                <Server className="w-3 h-3 text-cyan-400" />
                <span>Cloud</span>
              </a>

              <button
                type="button"
                id="nav-cta-contact-btn"
                onClick={() => scrollToSection('contact')}
                className="relative inline-flex items-center justify-center px-4 py-2 text-xs font-semibold rounded-lg bg-gradient-to-r from-cyan-500 to-teal-500 text-black shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Hire / Connect</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                type="button"
                id="nav-mobile-toggle-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-200 hover:text-white"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 mx-4 p-4 rounded-2xl bg-[#0b0e17]/95 border border-white/10 backdrop-blur-2xl shadow-2xl flex flex-col gap-2 animate-in fade-in slide-in-from-top-4 duration-200">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => scrollToSection(link.id)}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm text-left transition-colors ${
                    isActive
                      ? 'bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/30'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4 text-cyan-400" />
                  <span>{link.label}</span>
                </button>
              );
            })}

            <div className="pt-3 mt-2 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                <a 
                  href={PERSONAL_INFO.domains.cloud} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-cyan-400 flex items-center gap-1"
                >
                  Cloud <ExternalLink className="w-3 h-3" />
                </a>
                <span>&bull;</span>
                <a 
                  href={PERSONAL_INFO.domains.course} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-teal-400 flex items-center gap-1"
                >
                  Course <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <button
                type="button"
                onClick={() => scrollToSection('contact')}
                className="px-3 py-1.5 rounded-lg bg-cyan-500 text-black text-xs font-bold"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

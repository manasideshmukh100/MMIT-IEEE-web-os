import React, { useState, useEffect } from 'react';
import { Search, Terminal, Menu, X, Cpu, ShieldCheck } from 'lucide-react';

interface TopNavBarProps {
  onOpenSearch: () => void;
  onOpenTerminal: () => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const TopNavBar: React.FC<TopNavBarProps> = ({
  onOpenSearch,
  onOpenTerminal,
  activeSection,
  setActiveSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Dashboard' },
    { id: 'committee', label: 'Network' },
    { id: 'events', label: 'Events Orbit' },
    { id: 'projects', label: 'Projects' },
    { id: 'logistics', label: 'Logistics' },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-[#0f1321]/80 backdrop-blur-xl border-white/10 shadow-[0_0_25px_rgba(173,198,255,0.12)] py-3'
          : 'bg-[#0f1321]/40 backdrop-blur-md border-white/5 py-4'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 flex justify-between items-center h-14">
        {/* Brand Logo */}
        <div
          onClick={() => handleNavClick('home')}
          className="cursor-pointer flex items-center gap-2 group"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#3b82f6] to-[#2fd9f4] flex items-center justify-center p-1.5 shadow-[0_0_15px_rgba(47,217,244,0.4)] group-hover:scale-105 transition-transform">
            <Cpu className="w-full h-full text-white" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight bg-gradient-to-r from-[#adc6ff] via-[#d2bbff] to-[#2fd9f4] bg-clip-text text-transparent">
            MMIT IEEE OS
          </span>
          <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-[#2fd9f4]/10 text-[#2fd9f4] border border-[#2fd9f4]/20 hidden sm:inline-block">
            v1.0
          </span>
        </div>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`font-mono text-sm tracking-wide transition-all relative py-1 ${
                  isActive
                    ? 'text-[#adc6ff] font-semibold'
                    : 'text-[#c2c6d6] hover:text-white'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#adc6ff] to-[#2fd9f4] rounded-full shadow-[0_0_8px_#adc6ff]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          {/* Quick Search */}
          <button
            onClick={onOpenSearch}
            className="p-2 rounded-full text-[#c2c6d6] hover:text-white hover:bg-white/10 transition-all flex items-center gap-2 border border-white/5 hover:border-white/20"
            title="Search (Cmd+K)"
          >
            <Search className="w-4 h-4 text-[#2fd9f4]" />
            <span className="text-xs font-mono text-[#8c909f] hidden lg:inline-block">
              Cmd+K
            </span>
          </button>

          {/* Terminal Launcher */}
          <button
            onClick={onOpenTerminal}
            className="p-2 rounded-full text-[#2fd9f4] hover:bg-[#2fd9f4]/10 transition-all border border-[#2fd9f4]/20 hidden sm:flex items-center gap-1.5 text-xs font-mono"
            title="Open Interactive Terminal"
          >
            <Terminal className="w-4 h-4" />
            <span className="hidden md:inline">CLI</span>
          </button>

          {/* Initialize CTA Button */}
          <button
            onClick={onOpenTerminal}
            className="px-5 py-2 rounded-full bg-gradient-to-r from-[#4d8eff] to-[#6001d1] text-white font-display text-xs font-bold tracking-wider uppercase hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(77,142,255,0.4)] border border-white/20 flex items-center gap-2"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-[#2fd9f4]" />
            Initialize
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#c2c6d6] hover:text-white hover:bg-white/5"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0f1321]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="text-left py-2 font-mono text-base text-[#dfe1f6] hover:text-[#2fd9f4] border-b border-white/5"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 flex items-center gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSearch();
              }}
              className="flex-1 py-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center gap-2 text-sm font-mono text-[#c2c6d6]"
            >
              <Search className="w-4 h-4 text-[#2fd9f4]" /> Search System
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTerminal();
              }}
              className="flex-1 py-2.5 rounded-xl bg-[#2fd9f4]/10 border border-[#2fd9f4]/30 flex items-center justify-center gap-2 text-sm font-mono text-[#2fd9f4]"
            >
              <Terminal className="w-4 h-4" /> Open CLI
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

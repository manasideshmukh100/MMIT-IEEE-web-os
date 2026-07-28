import React from 'react';
import { OrbitalHub3D } from './OrbitalHub3D';
import { Users, Calendar, Terminal, Sparkles, Code2, Globe } from 'lucide-react';

interface HeroSectionProps {
  onExploreClick: () => void;
  onEventsClick: () => void;
  onTerminalClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreClick,
  onEventsClick,
  onTerminalClick,
}) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-16 px-6 overflow-hidden"
    >
      {/* Background Animated Concentric Orbital Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
        <div className="w-[850px] h-[850px] border border-[#adc6ff]/20 rounded-full animate-[spin_25s_linear_infinite]" />
        <div className="absolute w-[650px] h-[650px] border border-[#d2bbff]/20 rounded-full animate-[spin_18s_linear_infinite_reverse]" />
        <div className="absolute w-[450px] h-[450px] border border-[#2fd9f4]/20 rounded-full animate-[spin_12s_linear_infinite]" />
      </div>

      {/* 3D Interactive Orbital Hub */}
      <div className="w-full max-w-4xl h-[420px] mb-6 flex items-center justify-center relative z-10">
        <OrbitalHub3D />
      </div>

      {/* Hero Content */}
      <div className="text-center z-20 max-w-3xl animate-in fade-in slide-in-from-bottom-6 duration-1000">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#2fd9f4] mb-6 shadow-[0_0_15px_rgba(47,217,244,0.15)]">
          <Sparkles className="w-3.5 h-3.5 text-[#2fd9f4]" />
          <span>ENGINEERING OPERATING SYSTEM</span>
        </div>

        <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight text-white mb-5 leading-tight">
          MMIT IEEE STUDENT BRANCH
        </h1>

        <p className="font-body text-base sm:text-lg text-[#c2c6d6] mb-8 max-w-2xl mx-auto leading-relaxed">
          Aiming to Build Products for Society. Bridging the gap between engineering theory and human impact.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-10">
          <button
            onClick={onExploreClick}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-[#3b82f6] to-[#7c3aed] text-white font-display text-sm font-bold tracking-wide hover:scale-105 active:scale-95 transition-all shadow-[0_0_25px_rgba(59,130,246,0.4)] flex items-center gap-2"
          >
            <Users className="w-4 h-4 text-[#2fd9f4]" />
            Executive Network
          </button>

          <button
            onClick={onEventsClick}
            className="px-6 py-3 rounded-full glass-panel text-[#dfe1f6] hover:text-white hover:border-[#adc6ff]/50 font-display text-sm font-semibold tracking-wide transition-all flex items-center gap-2"
          >
            <Calendar className="w-4 h-4 text-[#d2bbff]" />
            Events Orbit
          </button>

          <button
            onClick={onTerminalClick}
            className="px-6 py-3 rounded-full bg-[#2fd9f4]/10 border border-[#2fd9f4]/30 text-[#2fd9f4] hover:bg-[#2fd9f4]/20 font-mono text-xs font-medium tracking-wider transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(47,217,244,0.2)]"
          >
            <Terminal className="w-4 h-4" />
            Launch Terminal
          </button>
        </div>

        {/* Region Badges */}
        <div className="flex flex-wrap justify-center gap-3 text-xs font-mono text-[#8c909f]">
          <span className="px-3.5 py-1.5 border border-white/10 rounded-lg bg-white/5 backdrop-blur-sm flex items-center gap-1.5">
            <Globe className="w-3.5 h-3.5 text-[#3b82f6]" /> REGION 10
          </span>
          <span className="px-3.5 py-1.5 border border-white/10 rounded-lg bg-white/5 backdrop-blur-sm flex items-center gap-1.5">
            <Code2 className="w-3.5 h-3.5 text-[#7c3aed]" /> BRANCH: STB60226400
          </span>
          <span className="px-3.5 py-1.5 border border-white/10 rounded-lg bg-white/5 backdrop-blur-sm flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#2fd9f4]" /> SCHOOL: 60227769
          </span>
        </div>
      </div>
    </section>
  );
};

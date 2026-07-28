import React from 'react';
import { Terminal, Code, Network, ShieldAlert, Cpu } from 'lucide-react';

interface FooterProps {
  onOpenTerminal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTerminal }) => {
  return (
    <footer id="footer" className="relative w-full mt-24 border-t border-white/5 bg-[#0a0d1c]/80 backdrop-blur-2xl">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-6 py-16 max-w-[1280px] mx-auto text-white">
        {/* Col 1: Brand & Tagline */}
        <div className="md:col-span-1">
          <div className="font-display font-bold text-xl text-white mb-3 flex items-center gap-2">
            <Cpu className="w-5 h-5 text-[#2fd9f4]" /> MMIT IEEE
          </div>
          <p className="font-body text-sm text-[#c2c6d6] mb-6 leading-relaxed">
            Building the engineering workforce of tomorrow through research, innovation, and community.
          </p>
          <div className="flex gap-3">
            <button
              onClick={onOpenTerminal}
              className="p-2 rounded-lg bg-white/5 text-[#2fd9f4] hover:bg-[#2fd9f4]/20 transition-all"
              title="Access Terminal"
            >
              <Terminal className="w-4 h-4" />
            </button>
            <a
              href="https://github.com/mmit-ieee"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-white/5 text-[#2fd9f4] hover:bg-[#2fd9f4]/20 transition-all"
              title="Source Code"
            >
              <Code className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Col 2: Ecosystem */}
        <div>
          <h4 className="font-display font-semibold text-sm text-white mb-4 uppercase tracking-wider">
            Ecosystem
          </h4>
          <ul className="flex flex-col gap-2.5 font-mono text-xs text-[#c2c6d6]">
            <li>
              <a href="#projects" className="hover:text-[#2fd9f4] transition-colors">
                Documentation & Specs
              </a>
            </li>
            <li>
              <a href="#events" className="hover:text-[#2fd9f4] transition-colors">
                Hardware & Embedded Lab
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-[#2fd9f4] transition-colors">
                IEEE Project Archives
              </a>
            </li>
          </ul>
        </div>

        {/* Col 3: Protocols */}
        <div>
          <h4 className="font-display font-semibold text-sm text-white mb-4 uppercase tracking-wider">
            Protocols
          </h4>
          <ul className="flex flex-col gap-2.5 font-mono text-xs text-[#c2c6d6]">
            <li>
              <a href="#logistics" className="hover:text-[#2fd9f4] transition-colors">
                Privacy Protocol
              </a>
            </li>
            <li>
              <a href="#logistics" className="hover:text-[#2fd9f4] transition-colors">
                System Status Monitor
              </a>
            </li>
            <li>
              <a href="#committee" className="hover:text-[#2fd9f4] transition-colors">
                IEEE Membership Onboarding
              </a>
            </li>
          </ul>
        </div>

        {/* Col 4: Control Center Card */}
        <div>
          <h4 className="font-display font-semibold text-sm text-white mb-4 uppercase tracking-wider">
            Control Center
          </h4>
          <div className="glass-panel p-4 rounded-xl border border-white/10">
            <p className="font-mono text-xs text-[#c2c6d6] opacity-80 mb-2">SYSTEM UPTIME: 99.98%</p>
            <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden mb-3">
              <div className="h-full w-[80%] bg-[#adc6ff] shadow-[0_0_10px_#adc6ff]" />
            </div>
            <button
              onClick={onOpenTerminal}
              className="font-mono text-xs text-[#2fd9f4] hover:underline flex items-center gap-1 font-semibold"
            >
              Access Terminal _
            </button>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="px-6 py-6 border-t border-white/5 text-center">
        <p className="font-mono text-xs text-[#8c909f] uppercase tracking-widest">
          © 2026 MMIT IEEE STUDENT BRANCH | ENGINEERING OS V1.0
        </p>
      </div>
    </footer>
  );
};

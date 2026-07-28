import React from 'react';
import { CommitteeMember } from '../types';
import { X, Mail, Linkedin, Github, Award, BookOpen, UserCheck, Send } from 'lucide-react';

interface MemberModalProps {
  member: CommitteeMember | null;
  onClose: () => void;
}

export const MemberModal: React.FC<MemberModalProps> = ({ member, onClose }) => {
  if (!member) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-[#171b2a] border border-white/15 rounded-3xl w-full max-w-xl p-6 sm:p-8 relative shadow-[0_0_50px_rgba(173,198,255,0.15)] text-white overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-[#8c909f] hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Member Header */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
          <div className="w-28 h-28 rounded-full border-2 border-[#2fd9f4]/50 p-1 bg-[#0a0d1c] shadow-2xl flex-shrink-0">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          <div className="text-center sm:text-left">
            <div className="inline-block px-3 py-1 rounded-full bg-[#3b82f6]/10 text-[#2fd9f4] border border-[#3b82f6]/20 font-mono text-xs font-semibold mb-2">
              {member.role}
            </div>
            <h3 className="font-display font-bold text-2xl text-white">{member.name}</h3>
            {member.department && (
              <p className="font-mono text-xs text-[#adc6ff] mt-1">{member.department}</p>
            )}
          </div>
        </div>

        {/* Biography */}
        <div className="mb-6 bg-white/5 p-4 rounded-2xl border border-white/5">
          <h4 className="font-mono text-xs text-[#8c909f] uppercase mb-1 flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-[#2fd9f4]" /> Profile & Leadership Role
          </h4>
          <p className="text-sm text-[#c2c6d6] leading-relaxed">
            {member.bio || 'Active leader contributing to MMIT IEEE Student Branch initiatives and engineering development.'}
          </p>
        </div>

        {/* Key Achievements */}
        {member.achievements && member.achievements.length > 0 && (
          <div className="mb-6">
            <h4 className="font-mono text-xs text-[#8c909f] uppercase mb-2 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-amber-300" /> Key Milestones & Awards
            </h4>
            <div className="flex flex-wrap gap-2">
              {member.achievements.map((ach, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-xl bg-[#2fd9f4]/10 border border-[#2fd9f4]/20 text-xs font-mono text-[#2fd9f4] flex items-center gap-1.5"
                >
                  <UserCheck className="w-3.5 h-3.5 text-[#2fd9f4]" /> {ach}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Contact & Social Links */}
        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {member.email && (
              <a
                href={`mailto:${member.email}`}
                className="p-2.5 rounded-xl bg-white/5 hover:bg-[#3b82f6]/20 text-[#adc6ff] hover:text-white transition-all flex items-center gap-2 text-xs font-mono"
              >
                <Mail className="w-4 h-4 text-[#3b82f6]" /> {member.email}
              </a>
            )}
          </div>

          <div className="flex items-center gap-2">
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-[#3b82f6]" />
              </a>
            )}
            {member.github && (
              <a
                href={member.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4 text-[#d2bbff]" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { CommitteeMember } from '../types';
import { COMMITTEE_MEMBERS } from '../data/mockData';
import { Mail, Linkedin, Github, ExternalLink, Award, Search, Filter } from 'lucide-react';

interface ExecutiveCommitteeProps {
  onSelectMember: (member: CommitteeMember) => void;
}

export const ExecutiveCommittee: React.FC<ExecutiveCommitteeProps> = ({
  onSelectMember,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'counsel' | 'executive' | 'leads'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMembers = COMMITTEE_MEMBERS.filter((member) => {
    const matchesCategory = selectedCategory === 'all' || member.category === selectedCategory;
    const matchesSearch =
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (member.department && member.department.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="committee" className="py-20 px-6 max-w-[1280px] mx-auto relative z-10">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-3">
          Executive Committee
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-[#3b82f6] via-[#2fd9f4] to-[#7c3aed] mx-auto rounded-full shadow-[0_0_12px_#2fd9f4]" />
        <p className="mt-4 text-[#c2c6d6] text-sm max-w-xl mx-auto font-body">
          Guided by esteemed faculty advisors and powered by student leaders driving IEEE engineering innovation.
        </p>
      </div>

      {/* Filter & Search Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-10 bg-white/5 p-4 rounded-2xl border border-white/10 backdrop-blur-xl">
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2">
          {[
            { id: 'all', label: 'All Members' },
            { id: 'counsel', label: 'Branch Counsel' },
            { id: 'executive', label: 'Executive Officers' },
            { id: 'leads', label: 'Leads & Chairs' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                selectedCategory === tab.id
                  ? 'bg-gradient-to-r from-[#3b82f6] to-[#7c3aed] text-white font-semibold shadow-[0_0_15px_rgba(59,130,246,0.3)]'
                  : 'text-[#c2c6d6] hover:text-white hover:bg-white/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Search Field */}
        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-[#8c909f] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search member or role..."
            className="w-full bg-[#0a0d1c] border border-white/10 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-[#8c909f] focus:outline-none focus:border-[#2fd9f4] transition-colors"
          />
        </div>
      </div>

      {/* Committee Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredMembers.map((member) => {
          const isPrimary = member.borderColor === 'primary';
          const ringColorClass = isPrimary
            ? 'border-[#adc6ff]/40 group-hover:border-[#adc6ff] shadow-[0_0_20px_rgba(173,198,255,0.2)]'
            : 'border-[#d2bbff]/40 group-hover:border-[#d2bbff] shadow-[0_0_20px_rgba(210,187,255,0.2)]';

          const textColorClass = isPrimary ? 'text-[#adc6ff]' : 'text-[#d2bbff]';

          return (
            <div
              key={member.id}
              onClick={() => onSelectMember(member)}
              className="group cursor-pointer flex flex-col items-center gap-4 p-6 rounded-[2rem] glass-panel glass-panel-hover neon-glow floating transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
              style={{ animationDelay: member.animationDelay }}
            >
              {/* Top ambient highlight glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-[#2fd9f4]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Avatar Container */}
              <div
                className={`w-28 h-28 rounded-full border-2 overflow-hidden bg-[#1b1f2e] shadow-xl relative transition-all duration-300 group-hover:scale-105 ${ringColorClass}`}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Member Info */}
              <div className="text-center w-full">
                <h3 className="font-display font-semibold text-lg text-white group-hover:text-[#2fd9f4] transition-colors">
                  {member.name}
                </h3>
                <p className={`font-mono text-xs font-medium mt-1 ${textColorClass}`}>
                  {member.role}
                </p>
                {member.department && (
                  <p className="text-[11px] text-[#8c909f] font-mono mt-1 truncate">
                    {member.department}
                  </p>
                )}
              </div>

              {/* Action Pills / Badges */}
              <div className="flex items-center gap-2 mt-2 pt-3 border-t border-white/5 w-full justify-center text-[#8c909f] group-hover:text-white transition-colors">
                <span className="text-[11px] font-mono flex items-center gap-1 group-hover:text-[#2fd9f4]">
                  View Profile <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {filteredMembers.length === 0 && (
        <div className="text-center py-16 bg-white/5 rounded-3xl border border-white/10">
          <p className="text-[#8c909f] font-mono text-sm">
            No committee members found matching "{searchQuery}"
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
            className="mt-3 text-xs text-[#2fd9f4] underline font-mono"
          >
            Reset Filters
          </button>
        </div>
      )}
    </section>
  );
};

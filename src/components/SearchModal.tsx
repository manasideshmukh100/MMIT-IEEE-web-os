import React, { useState, useEffect } from 'react';
import { COMMITTEE_MEMBERS, EVENTS_ORBIT, PROJECTS } from '../data/mockData';
import { CommitteeMember, EventItem, ProjectItem } from '../types';
import { Search, X, Users, Calendar, Layers, ChevronRight } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectMember: (m: CommitteeMember) => void;
  onSelectEvent: (e: EventItem) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectMember,
  onSelectEvent,
}) => {
  const [query, setQuery] = useState('');

  // Keyboard shortcut listener (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const matchedMembers = COMMITTEE_MEMBERS.filter(
    (m) =>
      m.name.toLowerCase().includes(query.toLowerCase()) ||
      m.role.toLowerCase().includes(query.toLowerCase())
  );

  const matchedEvents = EVENTS_ORBIT.filter(
    (e) =>
      e.title.toLowerCase().includes(query.toLowerCase()) ||
      e.description.toLowerCase().includes(query.toLowerCase())
  );

  const matchedProjects = PROJECTS.filter(
    (p) =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl flex items-start justify-center pt-20 px-4 animate-in fade-in duration-200">
      <div className="bg-[#171b2a] border border-white/20 rounded-2xl w-full max-w-xl p-4 shadow-[0_0_50px_rgba(47,217,244,0.2)] text-white relative overflow-hidden">
        {/* Search Header Input */}
        <div className="relative flex items-center border-b border-white/10 pb-3 mb-3">
          <Search className="w-5 h-5 text-[#2fd9f4] ml-2 mr-3" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.value || e.target.value)}
            placeholder="Type to search members, events, or projects..."
            className="w-full bg-transparent font-mono text-sm text-white placeholder-[#8c909f] focus:outline-none"
            autoFocus
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-[#8c909f] hover:text-white hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Container */}
        <div className="max-h-[380px] overflow-y-auto space-y-4 pr-1">
          {/* Members */}
          {matchedMembers.length > 0 && (
            <div>
              <div className="font-mono text-[11px] text-[#8c909f] uppercase mb-2 flex items-center gap-1.5 px-2">
                <Users className="w-3.5 h-3.5 text-[#3b82f6]" /> Committee Roster
              </div>
              <div className="space-y-1">
                {matchedMembers.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => {
                      onSelectMember(m);
                      onClose();
                    }}
                    className="w-full text-left p-2.5 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-between transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <img src={m.image} alt={m.name} className="w-7 h-7 rounded-full object-cover" />
                      <div>
                        <span className="font-display text-sm text-white group-hover:text-[#2fd9f4]">
                          {m.name}
                        </span>
                        <span className="font-mono text-xs text-[#8c909f] ml-2">({m.role})</span>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#8c909f] group-hover:text-white" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Events */}
          {matchedEvents.length > 0 && (
            <div>
              <div className="font-mono text-[11px] text-[#8c909f] uppercase mb-2 flex items-center gap-1.5 px-2">
                <Calendar className="w-3.5 h-3.5 text-[#2fd9f4]" /> Events Orbit
              </div>
              <div className="space-y-1">
                {matchedEvents.map((e) => (
                  <button
                    key={e.id}
                    onClick={() => {
                      onSelectEvent(e);
                      onClose();
                    }}
                    className="w-full text-left p-2.5 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-between transition-colors group"
                  >
                    <div>
                      <span className="font-display text-sm text-white group-hover:text-[#2fd9f4]">
                        {e.title}
                      </span>
                      <span className="font-mono text-xs text-[#2fd9f4] ml-2">[{e.formattedDate}]</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#8c909f] group-hover:text-white" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Projects */}
          {matchedProjects.length > 0 && (
            <div>
              <div className="font-mono text-[11px] text-[#8c909f] uppercase mb-2 flex items-center gap-1.5 px-2">
                <Layers className="w-3.5 h-3.5 text-[#d2bbff]" /> Projects
              </div>
              <div className="space-y-1">
                {matchedProjects.map((p) => (
                  <div
                    key={p.id}
                    className="p-2.5 rounded-xl bg-white/5 flex items-center justify-between"
                  >
                    <div>
                      <span className="font-display text-sm text-white">{p.title}</span>
                      <span className="font-mono text-xs text-[#d2bbff] ml-2">({p.category})</span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-[#c2c6d6]">
                      {p.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {matchedMembers.length === 0 && matchedEvents.length === 0 && matchedProjects.length === 0 && (
            <div className="text-center py-8 text-[#8c909f] font-mono text-xs">
              No results found for "{query}".
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

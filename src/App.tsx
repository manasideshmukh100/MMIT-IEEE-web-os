/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BackgroundShader } from './components/BackgroundShader';
import { TopNavBar } from './components/TopNavBar';
import { HeroSection } from './components/HeroSection';
import { ExecutiveCommittee } from './components/ExecutiveCommittee';
import { EventsOrbit } from './components/EventsOrbit';
import { ProjectShowcase } from './components/ProjectShowcase';
import { SystemTerminal } from './components/SystemTerminal';
import { Footer } from './components/Footer';
import { MemberModal } from './components/MemberModal';
import { EventModal } from './components/EventModal';
import { SearchModal } from './components/SearchModal';
import { CommitteeMember, EventItem } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedMember, setSelectedMember] = useState<CommitteeMember | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [terminalModalOpen, setTerminalModalOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0f1321] text-[#dfe1f6] relative font-body selection:bg-[#adc6ff]/30">
      {/* Dynamic Deep Space WebGL Shader Background */}
      <BackgroundShader />

      {/* Navigation Header */}
      <TopNavBar
        onOpenSearch={() => setSearchOpen(true)}
        onOpenTerminal={() => setTerminalModalOpen(true)}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <HeroSection
          onExploreClick={() => scrollToSection('committee')}
          onEventsClick={() => scrollToSection('events')}
          onTerminalClick={() => setTerminalModalOpen(true)}
        />

        <ExecutiveCommittee onSelectMember={(m) => setSelectedMember(m)} />

        <EventsOrbit onSelectEvent={(e) => setSelectedEvent(e)} />

        <ProjectShowcase />

        <SystemTerminal />
      </main>

      {/* Footer */}
      <Footer onOpenTerminal={() => setTerminalModalOpen(true)} />

      {/* Modals & Dialog overlays */}
      <MemberModal
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
      />

      <EventModal
        eventItem={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />

      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelectMember={(m) => setSelectedMember(m)}
        onSelectEvent={(e) => setSelectedEvent(e)}
      />

      {terminalModalOpen && (
        <SystemTerminal
          isOpenModal={true}
          onCloseModal={() => setTerminalModalOpen(false)}
        />
      )}
    </div>
  );
}

import React, { useState } from 'react';
import { EventItem } from '../types';
import { EVENTS_ORBIT } from '../data/mockData';
import { ArrowLeft, ArrowRight, Calendar, MapPin, Users, Sparkles, ExternalLink } from 'lucide-react';

interface EventsOrbitProps {
  onSelectEvent: (eventItem: EventItem) => void;
}

export const EventsOrbit: React.FC<EventsOrbitProps> = ({ onSelectEvent }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalEvents = EVENTS_ORBIT.length;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalEvents - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === totalEvents - 1 ? 0 : prev + 1));
  };

  const activeEvent = EVENTS_ORBIT[currentIndex];

  return (
    <section id="events" className="py-20 overflow-hidden relative z-10">
      {/* Section Header */}
      <div className="text-center mb-12 px-6">
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-2">
          Events Orbit
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-[#2fd9f4] to-[#3b82f6] mx-auto rounded-full mb-3 shadow-[0_0_12px_#2fd9f4]" />
        <p className="font-body text-[#c2c6d6] text-sm max-w-xl mx-auto">
          Drag or use navigation arrows to orbit through our flagship events and technical workshops.
        </p>
      </div>

      {/* 3D Wheel Carousel Area */}
      <div className="carousel-container px-4">
        <div
          className="carousel-wheel"
          style={{
            transform: `rotateY(${-currentIndex * (360 / totalEvents)}deg)`,
          }}
        >
          {EVENTS_ORBIT.map((eventItem, i) => {
            const angle = (360 / totalEvents) * i;
            const radius = 380;
            const isActive = i === currentIndex;

            return (
              <div
                key={eventItem.id}
                className="carousel-item p-3 cursor-pointer"
                style={{
                  transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                  opacity: isActive ? 1 : 0.35,
                  scale: isActive ? '1.08' : '0.85',
                }}
                onClick={() => {
                  if (isActive) {
                    onSelectEvent(eventItem);
                  } else {
                    setCurrentIndex(i);
                  }
                }}
              >
                <div className="h-full rounded-2xl glass-panel glass-panel-hover p-5 flex flex-col gap-3 border-t border-t-white/20 transition-all duration-300 shadow-2xl relative group">
                  {/* Top Badge */}
                  <div className="flex justify-between items-center text-[10px] font-mono text-[#2fd9f4]">
                    <span className="px-2.5 py-1 rounded bg-[#2fd9f4]/10 border border-[#2fd9f4]/20">
                      {eventItem.category}
                    </span>
                    <span className="text-[#8c909f]">{eventItem.formattedDate}</span>
                  </div>

                  {/* Image Frame */}
                  <div className="aspect-video w-full rounded-xl bg-[#171b2a] overflow-hidden relative">
                    <img
                      src={eventItem.image}
                      alt={eventItem.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f1321] via-transparent to-transparent opacity-60" />
                  </div>

                  {/* Title & Info */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-display font-semibold text-lg text-white group-hover:text-[#2fd9f4] transition-colors leading-snug">
                        {eventItem.title}
                      </h4>
                      <p className="text-[#c2c6d6] text-xs mt-1.5 line-clamp-2 leading-relaxed">
                        {eventItem.description}
                      </p>
                    </div>

                    <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#8c909f]">
                      <span className="flex items-center gap-1 text-[#adc6ff]">
                        <MapPin className="w-3 h-3" /> {eventItem.location.split(',')[0]}
                      </span>
                      <span className="text-[#2fd9f4] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        Details <ExternalLink className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Orbit Controls & Counter */}
      <div className="flex flex-col items-center justify-center gap-4 mt-8">
        <div className="flex items-center gap-6">
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border border-white/20 glass-panel flex items-center justify-center hover:bg-[#3b82f6]/20 hover:border-[#3b82f6] transition-all text-white active:scale-95 shadow-[0_0_15px_rgba(59,130,246,0.2)]"
            title="Previous Event"
          >
            <ArrowLeft className="w-5 h-5 text-[#2fd9f4]" />
          </button>

          {/* Quick Select Indicators */}
          <div className="flex items-center gap-2">
            {EVENTS_ORBIT.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === currentIndex
                    ? 'w-8 bg-[#2fd9f4] shadow-[0_0_10px_#2fd9f4]'
                    : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full border border-white/20 glass-panel flex items-center justify-center hover:bg-[#3b82f6]/20 hover:border-[#3b82f6] transition-all text-white active:scale-95 shadow-[0_0_15px_rgba(59,130,246,0.2)]"
            title="Next Event"
          >
            <ArrowRight className="w-5 h-5 text-[#2fd9f4]" />
          </button>
        </div>

        {/* Selected Event CTA Bar */}
        <div className="mt-2 text-center">
          <button
            onClick={() => onSelectEvent(activeEvent)}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#2fd9f4]/20 via-[#3b82f6]/20 to-[#7c3aed]/20 border border-[#2fd9f4]/40 text-[#2fd9f4] font-mono text-xs font-semibold hover:border-[#2fd9f4] transition-all shadow-[0_0_20px_rgba(47,217,244,0.15)] flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-[#2fd9f4]" />
            Inspect Mission Log: {activeEvent.title}
          </button>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { EventItem } from '../types';
import { X, Calendar, MapPin, User, CheckCircle2, Download, Ticket, Sparkles, Send } from 'lucide-react';

interface EventModalProps {
  eventItem: EventItem | null;
  onClose: () => void;
}

export const EventModal: React.FC<EventModalProps> = ({ eventItem, onClose }) => {
  const [rsvpSubmitted, setRsvpSubmitted] = useState(false);
  const [rsvpName, setRsvpName] = useState('');
  const [rsvpEmail, setRsvpEmail] = useState('');

  if (!eventItem) return null;

  const handleRSVP = (e: React.FormEvent) => {
    e.preventDefault();
    if (!rsvpName || !rsvpEmail) return;
    setRsvpSubmitted(true);
  };

  const downloadICSFile = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//MMIT IEEE OS//Events Orbit//EN
BEGIN:VEVENT
SUMMARY:${eventItem.title}
DESCRIPTION:${eventItem.fullDescription.replace(/\n/g, ' ')}
LOCATION:${eventItem.location}
DTSTART:${eventItem.date.replace(/-/g, '')}T090000Z
DTEND:${eventItem.date.replace(/-/g, '')}T170000Z
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${eventItem.id}-mmit-ieee.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in duration-200 overflow-y-auto">
      <div className="bg-[#171b2a] border border-white/15 rounded-3xl w-full max-w-2xl p-6 sm:p-8 relative shadow-[0_0_60px_rgba(47,217,244,0.15)] text-white my-8 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 p-2 rounded-full bg-black/40 hover:bg-white/10 text-[#8c909f] hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image Header */}
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden mb-6 border border-white/10">
          <img src={eventItem.image} alt={eventItem.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#171b2a] via-[#171b2a]/40 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
            <span className="px-3 py-1 rounded-lg bg-[#2fd9f4]/20 border border-[#2fd9f4]/40 font-mono text-xs text-[#2fd9f4] font-semibold backdrop-blur-md">
              {eventItem.category}
            </span>
            <span className="font-mono text-xs text-[#c2c6d6] bg-black/60 px-3 py-1 rounded-lg backdrop-blur-md">
              {eventItem.formattedDate}
            </span>
          </div>
        </div>

        {/* Event Title */}
        <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-3">
          {eventItem.title}
        </h3>

        {/* Venue & Speaker Metadata */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 font-mono text-xs text-[#c2c6d6]">
          <div className="bg-white/5 p-3 rounded-xl border border-white/5 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#2fd9f4] flex-shrink-0" />
            <span>{eventItem.location}</span>
          </div>
          {eventItem.speaker && (
            <div className="bg-white/5 p-3 rounded-xl border border-white/5 flex items-center gap-2">
              <User className="w-4 h-4 text-[#d2bbff] flex-shrink-0" />
              <span>{eventItem.speaker}</span>
            </div>
          )}
        </div>

        {/* Detailed Description */}
        <div className="mb-6">
          <h4 className="font-mono text-xs text-[#8c909f] uppercase mb-2">Event Overview</h4>
          <p className="text-sm text-[#c2c6d6] leading-relaxed bg-white/5 p-4 rounded-xl border border-white/5">
            {eventItem.fullDescription}
          </p>
        </div>

        {/* Agenda Timings */}
        {eventItem.agenda && eventItem.agenda.length > 0 && (
          <div className="mb-6">
            <h4 className="font-mono text-xs text-[#8c909f] uppercase mb-2">Schedule & Agenda</h4>
            <div className="space-y-2">
              {eventItem.agenda.map((item, idx) => (
                <div
                  key={idx}
                  className="px-3 py-2 rounded-xl bg-white/5 border border-white/5 text-xs font-mono text-[#dfe1f6]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* RSVP Section */}
        <div className="pt-6 border-t border-white/10">
          {!rsvpSubmitted ? (
            <form onSubmit={handleRSVP} className="bg-[#0a0d1c] p-5 rounded-2xl border border-white/10">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs text-[#2fd9f4] font-semibold flex items-center gap-1.5">
                  <Ticket className="w-4 h-4" /> Reserve Free IEEE Ticket
                </span>
                <button
                  type="button"
                  onClick={downloadICSFile}
                  className="text-xs font-mono text-[#c2c6d6] hover:text-white flex items-center gap-1 underline"
                >
                  <Download className="w-3.5 h-3.5 text-[#2fd9f4]" /> .ICS Calendar
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                <input
                  type="text"
                  required
                  value={rsvpName}
                  onChange={(e) => setRsvpName(e.target.value)}
                  placeholder="Your Full Name"
                  className="bg-[#171b2a] border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white placeholder-[#8c909f] focus:outline-none focus:border-[#2fd9f4]"
                />
                <input
                  type="email"
                  required
                  value={rsvpEmail}
                  onChange={(e) => setRsvpEmail(e.target.value)}
                  placeholder="Your Email Address"
                  className="bg-[#171b2a] border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white placeholder-[#8c909f] focus:outline-none focus:border-[#2fd9f4]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#3b82f6] to-[#2fd9f4] text-white font-display text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(47,217,244,0.3)]"
              >
                <Send className="w-3.5 h-3.5" /> Confirm Registration
              </button>
            </form>
          ) : (
            <div className="bg-emerald-500/10 border border-emerald-500/30 p-5 rounded-2xl text-center">
              <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
              <h4 className="font-display font-bold text-lg text-white">Registration Confirmed!</h4>
              <p className="font-mono text-xs text-emerald-300 mt-1">
                IEEE Ticket sent to {rsvpEmail}. See you on {eventItem.formattedDate}!
              </p>
              <button
                onClick={downloadICSFile}
                className="mt-3 px-4 py-2 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-mono text-xs inline-flex items-center gap-1.5 hover:bg-emerald-500/30 transition-colors"
              >
                <Download className="w-3.5 h-3.5" /> Add to Calendar (.ics)
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

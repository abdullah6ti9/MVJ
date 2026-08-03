import React, { useState } from 'react';
import { PageId, ConsultationFormData, TimeSlot } from '../types';
import { FAQS } from '../data/mockData';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Lock,
  CheckCircle2,
  Calendar as CalendarIcon,
  AlertTriangle,
  ArrowRight,
  Send,
  ChevronDown
} from 'lucide-react';
import { motion } from 'motion/react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
  initialNote?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate, initialNote = '' }) => {
  // Form State
  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    email: '',
    phone: '',
    projectType: 'Custom Home',
    budgetRange: '$1M+',
    preferredTimeline: '3–6 months',
    projectLocation: 'Portland, OR',
    message: initialNote ? `Interested in: ${initialNote}` : '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  // Calendar Booking State
  const [selectedDate, setSelectedDate] = useState<string>('2026-08-10');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('10:00 AM');
  const [bookingConfirmed, setBookingConfirmed] = useState<boolean>(false);

  const availableSlots: TimeSlot[] = [
    { time: '09:00 AM', available: true },
    { time: '10:00 AM', available: true },
    { time: '11:30 AM', available: false },
    { time: '01:30 PM', available: true },
    { time: '03:00 PM', available: true },
    { time: '04:15 PM', available: true },
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleBookingSubmit = () => {
    if (selectedDate && selectedTimeSlot) {
      setBookingConfirmed(true);
    }
  };

  return (
    <div className="bg-[#F3EFE9] text-[#1A1A1A] pt-16 sm:pt-24">
      {/* HERO */}
      <section className="relative min-h-[340px] sm:min-h-[440px] py-12 sm:py-24 flex items-center justify-center bg-[#1A1A1A] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-35">
          <img
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1800&q=80"
            alt="MJV Consultation & Meeting"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/60 to-transparent z-10" />

        <div className="relative z-20 max-w-4xl mx-auto px-4 text-center space-y-4">
          <div className="text-xs uppercase tracking-[0.16em] text-[#B87333] font-semibold flex items-center justify-center space-x-2">
            <button onClick={() => onNavigate('home')} className="hover:underline">Home</button>
            <span>→</span>
            <span>Contact</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-medium tracking-tight text-white">
            Let's Build Together
          </h1>
          <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto font-sans">
            Whether you have completed architectural blueprints or just an early vision, our principal builders are ready to listen.
          </p>
        </div>
      </section>

      {/* TWO-COLUMN LAYOUT (60/40 SPLIT) */}
      <section className="py-20 lg:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Form (60%) */}
          <div className="lg:col-span-7 bg-white rounded-[4px] p-8 sm:p-12 border border-[#E8E2D9] shadow-lg space-y-8">
            <div>
              <span className="text-[11px] uppercase tracking-[0.12em] text-[#B87333] font-semibold block">
                FREE CONSULTATION REQUEST
              </span>
              <h2 className="font-serif text-3xl font-medium text-[#1A1A1A] mt-1">
                Tell Us About Your Vision
              </h2>
            </div>

            {!formSubmitted ? (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                {/* Floating Input Rows */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="relative border-b border-[#E8E2D9] focus-within:border-[#B87333] transition-colors pb-1">
                    <label className="block text-[11px] uppercase tracking-wider text-[#5C5C5C] font-semibold">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Harrison Sterling"
                      className="w-full py-2 bg-transparent text-sm text-[#1A1A1A] font-sans focus:outline-none"
                    />
                  </div>

                  <div className="relative border-b border-[#E8E2D9] focus-within:border-[#B87333] transition-colors pb-1">
                    <label className="block text-[11px] uppercase tracking-wider text-[#5C5C5C] font-semibold">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="harrison@sterling.com"
                      className="w-full py-2 bg-transparent text-sm text-[#1A1A1A] font-sans focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="relative border-b border-[#E8E2D9] focus-within:border-[#B87333] transition-colors pb-1">
                    <label className="block text-[11px] uppercase tracking-wider text-[#5C5C5C] font-semibold">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(503) 555-0199"
                      className="w-full py-2 bg-transparent text-sm text-[#1A1A1A] font-sans focus:outline-none"
                    />
                  </div>

                  <div className="relative border-b border-[#E8E2D9] focus-within:border-[#B87333] transition-colors pb-1">
                    <label className="block text-[11px] uppercase tracking-wider text-[#5C5C5C] font-semibold">
                      Project Location
                    </label>
                    <input
                      type="text"
                      value={formData.projectLocation}
                      onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
                      placeholder="Portland, Lake Oswego, Bend, etc."
                      className="w-full py-2 bg-transparent text-sm text-[#1A1A1A] font-sans focus:outline-none"
                    />
                  </div>
                </div>

                {/* Dropdowns */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="relative border-b border-[#E8E2D9] focus-within:border-[#B87333] transition-colors pb-1">
                    <label className="block text-[11px] uppercase tracking-wider text-[#5C5C5C] font-semibold">
                      Project Type
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full py-2 bg-transparent text-sm text-[#1A1A1A] font-sans focus:outline-none cursor-pointer"
                    >
                      <option value="Custom Home">Custom Home</option>
                      <option value="Renovation">Luxury Renovation</option>
                      <option value="Addition">Wing Addition / ADU</option>
                      <option value="Commercial">Commercial Build</option>
                      <option value="Pre-Con">Pre-Construction Feasibility</option>
                    </select>
                  </div>

                  <div className="relative border-b border-[#E8E2D9] focus-within:border-[#B87333] transition-colors pb-1">
                    <label className="block text-[11px] uppercase tracking-wider text-[#5C5C5C] font-semibold">
                      Budget Range
                    </label>
                    <select
                      value={formData.budgetRange}
                      onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                      className="w-full py-2 bg-transparent text-sm text-[#1A1A1A] font-sans focus:outline-none cursor-pointer"
                    >
                      <option value="Under $250k">Under $250k</option>
                      <option value="$250k–$500k">$250k – $500k</option>
                      <option value="$500k–$1M">$500k – $1M</option>
                      <option value="$1M+">$1M+</option>
                      <option value="Prefer to Discuss">Prefer to Discuss</option>
                    </select>
                  </div>

                  <div className="relative border-b border-[#E8E2D9] focus-within:border-[#B87333] transition-colors pb-1">
                    <label className="block text-[11px] uppercase tracking-wider text-[#5C5C5C] font-semibold">
                      Timeline
                    </label>
                    <select
                      value={formData.preferredTimeline}
                      onChange={(e) => setFormData({ ...formData, preferredTimeline: e.target.value })}
                      className="w-full py-2 bg-transparent text-sm text-[#1A1A1A] font-sans focus:outline-none cursor-pointer"
                    >
                      <option value="ASAP">ASAP</option>
                      <option value="3–6 months">3–6 Months</option>
                      <option value="6–12 months">6–12 Months</option>
                      <option value="12+ months">12+ Months</option>
                    </select>
                  </div>
                </div>

                {/* Message Textarea */}
                <div className="relative border-b border-[#E8E2D9] focus-within:border-[#B87333] transition-colors pb-1">
                  <label className="block text-[11px] uppercase tracking-wider text-[#5C5C5C] font-semibold">
                    Project Details & Vision
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your property, architectural style preferences, or key questions..."
                    className="w-full py-2 bg-transparent text-sm text-[#1A1A1A] font-sans focus:outline-none resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  id="submit-consultation-form-btn"
                  className="w-full py-4 px-8 rounded-full bg-[#B87333] text-white hover:bg-[#9A5F2A] font-semibold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-all shadow-md hover:scale-[1.01]"
                >
                  <Send className="w-4 h-4" />
                  <span>Request My Free Consultation</span>
                </button>

                {/* Trust Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-[#E8E2D9] text-[11px] text-[#5C5C5C]">
                  <div className="flex items-center space-x-2">
                    <Lock className="w-3.5 h-3.5 text-[#B87333]" />
                    <span>Information 100% Private</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-3.5 h-3.5 text-[#B87333]" />
                    <span>Response within 24 Hours</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B87333]" />
                    <span>No Obligation Estimate</span>
                  </div>
                </div>
              </form>
            ) : (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-3xl text-[#1A1A1A]">Consultation Request Received!</h3>
                <p className="text-sm text-[#5C5C5C] font-sans max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.fullName}</strong>. A principal builder from MJV Construction will review your details and contact you at <strong>{formData.phone}</strong> within 24 business hours.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-full bg-[#1A1A1A] text-white text-xs uppercase tracking-wider hover:bg-[#B87333] transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </div>
            )}
          </div>

          {/* Right Column: Contact Info & Map (40%) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Direct Contact Box */}
            <div className="bg-[#1A1A1A] text-white p-8 rounded-[4px] space-y-6 border border-white/10 shadow-lg">
              <h3 className="font-serif text-2xl font-medium">Prefer to Speak Right Now?</h3>

              <div className="space-y-4 text-sm">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-white/50 block font-semibold">Direct Office Line</span>
                  <a
                    href="tel:5035550147"
                    className="font-serif text-2xl font-bold text-[#B87333] hover:underline block"
                  >
                    (503) 555-0147
                  </a>
                </div>

                <div>
                  <span className="text-[11px] uppercase tracking-wider text-white/50 block font-semibold">Email Inquiries</span>
                  <a href="mailto:hello@mjvconstruction.com" className="text-white hover:text-[#B87333] transition-colors">
                    hello@mjvconstruction.com
                  </a>
                </div>

                <div>
                  <span className="text-[11px] uppercase tracking-wider text-white/50 block font-semibold">Headquarters</span>
                  <p className="text-white/80">
                    1847 NW Overton St, Pearl District
                    <br />
                    Portland, OR 97209
                  </p>
                </div>

                <div>
                  <span className="text-[11px] uppercase tracking-wider text-white/50 block font-semibold">Operating Hours</span>
                  <p className="text-white/80">Mon–Fri: 7:00 AM – 5:00 PM PST</p>
                </div>
              </div>
            </div>

            {/* Styled Map Preview Container */}
            <div className="bg-white p-4 rounded-[4px] border border-[#E8E2D9] space-y-3">
              <div className="relative rounded-[4px] overflow-hidden aspect-[16/9] bg-[#1A1A1A]">
                <img
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80"
                  alt="Portland Oregon Map location"
                  className="w-full h-full object-cover opacity-60"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="p-3 bg-[#1A1A1A]/90 rounded-full border border-[#B87333] text-[#B87333] shadow-xl flex items-center space-x-2">
                    <MapPin className="w-5 h-5" />
                    <span className="text-xs text-white font-semibold">MJV Pearl District HQ</span>
                  </div>
                </div>
              </div>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="text-xs uppercase tracking-wider text-[#B87333] font-semibold hover:underline inline-flex items-center space-x-1"
              >
                <span>Get Google Maps Directions</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Emergency/Urgent Note Box */}
            <div className="bg-[#E8E2D9] p-5 rounded-[4px] border border-[#B87333]/30 flex items-start space-x-3">
              <AlertTriangle className="w-5 h-5 text-[#B87333] shrink-0 mt-0.5" />
              <div className="text-xs text-[#5C5C5C]">
                <strong className="text-[#1A1A1A] font-semibold block mb-0.5">Time-Sensitive Project or Emergency Repair?</strong>
                Call our priority direct hotline: <a href="tel:5035550148" className="text-[#B87333] font-semibold hover:underline">(503) 555-0148</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CALENDAR BOOKING SECTION */}
      <section className="py-20 bg-[#E8E2D9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-xl mx-auto space-y-3">
            <span className="text-[11px] uppercase tracking-[0.12em] text-[#B87333] font-semibold block">
              DIRECT CALENDAR SCHEDULING
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#1A1A1A]">
              Choose a Time That Works for You
            </h2>
            <p className="text-sm text-[#5C5C5C]">
              Select a 30-minute virtual or phone consultation slot directly on our calendar.
            </p>
          </div>

          <div className="bg-white rounded-[4px] p-6 sm:p-10 border border-[#E8E2D9] shadow-md space-y-8">
            {!bookingConfirmed ? (
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Select Date */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#5C5C5C] font-semibold mb-2">
                      1. Select Consultation Date
                    </label>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full px-4 py-3 rounded-[4px] bg-[#F3EFE9] border border-[#E8E2D9] text-sm text-[#1A1A1A] font-sans focus:outline-none focus:border-[#B87333]"
                    />
                  </div>

                  {/* Select Slot */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#5C5C5C] font-semibold mb-2">
                      2. Available 30-Min Time Slots (PST)
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {availableSlots.map((slot, idx) => (
                        <button
                          key={idx}
                          disabled={!slot.available}
                          onClick={() => setSelectedTimeSlot(slot.time)}
                          className={`py-2.5 px-3 rounded text-xs font-semibold transition-all ${
                            !slot.available
                              ? 'bg-gray-100 text-gray-400 cursor-not-allowed line-through'
                              : selectedTimeSlot === slot.time
                              ? 'bg-[#B87333] text-white shadow'
                              : 'bg-[#F3EFE9] text-[#1A1A1A] hover:bg-[#E8E2D9]'
                          }`}
                        >
                          {slot.time}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E8E2D9] flex items-center justify-between">
                  <div className="text-xs text-[#5C5C5C]">
                    Selected: <strong className="text-[#1A1A1A]">{selectedDate}</strong> at <strong className="text-[#B87333]">{selectedTimeSlot}</strong>
                  </div>
                  <button
                    id="confirm-calendar-booking-btn"
                    onClick={handleBookingSubmit}
                    className="py-3 px-7 rounded-full bg-[#1A1A1A] text-white hover:bg-[#B87333] font-semibold text-xs uppercase tracking-wider transition-colors shadow"
                  >
                    Confirm Calendar Slot
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CalendarIcon className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl text-[#1A1A1A]">Consultation Slot Confirmed!</h3>
                <p className="text-sm text-[#5C5C5C]">
                  Your 30-minute consultation is booked for <strong>{selectedDate}</strong> at <strong>{selectedTimeSlot} PST</strong>. A calendar invitation link has been dispatched.
                </p>
                <button
                  onClick={() => setBookingConfirmed(false)}
                  className="px-6 py-2 rounded-full border border-[#1A1A1A] text-xs font-semibold uppercase tracking-wider hover:bg-[#1A1A1A] hover:text-white transition-colors"
                >
                  Reschedule Slot
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* MINI PRE-CONTACT FAQ */}
      <section className="py-20 bg-white border-t border-[#E8E2D9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <h3 className="font-serif text-2xl font-medium text-[#1A1A1A] text-center">
            Pre-Meeting Preparation FAQs
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#5C5C5C]">
            <div className="p-5 rounded bg-[#F3EFE9] border border-[#E8E2D9] space-y-2">
              <span className="font-serif text-base font-medium text-[#1A1A1A] block">What should I bring?</span>
              <p>Property site address, preliminary architectural sketches (if any), and desired budget constraints.</p>
            </div>
            <div className="p-5 rounded bg-[#F3EFE9] border border-[#E8E2D9] space-y-2">
              <span className="font-serif text-base font-medium text-[#1A1A1A] block">Estimate turn-around?</span>
              <p>Preliminary line-item estimates are delivered within 5 business days following site inspection.</p>
            </div>
            <div className="p-5 rounded bg-[#F3EFE9] border border-[#E8E2D9] space-y-2">
              <span className="font-serif text-base font-medium text-[#1A1A1A] block">Financing options?</span>
              <p>We work closely with major construction lenders offering combined land-and-build loans.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

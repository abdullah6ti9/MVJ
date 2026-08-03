import React, { useState } from 'react';
import { X, Download, CheckCircle2, FileText, Lock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface PlanningGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PlanningGuideModal: React.FC<PlanningGuideModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && name) {
      setSubmitted(true);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#1A1A1A]/85 backdrop-blur-sm"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative z-10 w-full max-w-lg rounded-[4px] bg-[#F3EFE9] p-6 sm:p-8 shadow-2xl border border-[#E8E2D9]"
        >
          <button
            id="close-guide-modal-btn"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-[#5C5C5C] hover:text-[#1A1A1A] rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-full bg-[#B87333]/10 text-[#B87333] flex items-center justify-center">
                <FileText className="w-6 h-6" />
              </div>

              <div>
                <span className="text-[11px] uppercase tracking-[0.12em] text-[#B87333] font-semibold">
                  Complimentary Resource
                </span>
                <h3 className="font-serif text-2xl text-[#1A1A1A] font-medium mt-1">
                  2026 Custom Home Architecture & Cost Guide
                </h3>
                <p className="text-sm text-[#5C5C5C] mt-2 font-sans leading-relaxed">
                  A 34-page comprehensive handbook detailing site selection, architectural cost models, copper & cedar material longevity, and zoning navigation in Oregon.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#5C5C5C] font-semibold mb-1">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Elizabeth Sterling"
                    className="w-full px-4 py-3 rounded-[4px] bg-white border border-[#E8E2D9] text-[#1A1A1A] text-sm focus:outline-none focus:border-[#B87333] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#5C5C5C] font-semibold mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="elizabeth@example.com"
                    className="w-full px-4 py-3 rounded-[4px] bg-white border border-[#E8E2D9] text-[#1A1A1A] text-sm focus:outline-none focus:border-[#B87333] transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-full bg-[#B87333] text-white hover:bg-[#9A5F2A] font-medium text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-all shadow-md"
                >
                  <Download className="w-4 h-4" />
                  <span>Send PDF Guide to My Inbox</span>
                </button>
              </form>

              <div className="flex items-center space-x-2 text-[11px] text-[#5C5C5C] pt-2 border-t border-[#E8E2D9]">
                <Lock className="w-3.5 h-3.5 text-[#B87333]" />
                <span>Your details remain 100% private. No spam, ever.</span>
              </div>
            </div>
          ) : (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl text-[#1A1A1A]">Your Guide is on the Way!</h3>
              <p className="text-sm text-[#5C5C5C] font-sans">
                We've dispatched the 2026 Custom Home Architecture & Cost Guide to <strong>{email}</strong>.
              </p>
              <button
                onClick={onClose}
                className="mt-4 px-6 py-2.5 rounded-full bg-[#1A1A1A] text-white text-xs uppercase tracking-wider hover:bg-[#B87333] transition-colors"
              >
                Return to Site
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

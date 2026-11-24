import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Mail, 
  Phone, 
  Copy, 
  Check, 
  ExternalLink, 
  ShieldCheck, 
  Server,
  Terminal,
  Send
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [inquiryType, setInquiryType] = useState('Film / Video Project');
  const [clientNote, setClientNote] = useState('');

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(`Project Inquiry: ${inquiryType}`)}&body=${encodeURIComponent(
    `Hi Bernard,\n\nI am contacting you regarding a ${inquiryType}.\n\nDetails:\n${clientNote || '[Describe project, schedule, or workflow needs here]'}\n\nBest regards,\n[Your Name]`
  )}`;

  return (
    <section id="contact" className="relative py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider bg-cyan-500/10 px-3.5 py-1.5 rounded-full border border-cyan-500/20">
            <Mail className="w-4 h-4" />
            <span>Direct Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Connect with Bernard Mathis (Bstar)
          </h2>
          <p className="text-slate-300 text-base">
            Reach out for video production, camera work on Panasonic GH6, DaVinci Resolve editing and color grading, or music collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-slate-900/70 border border-white/10 backdrop-blur-xl shadow-2xl space-y-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-white tracking-wide">
                  Contact Information
                </h3>
                <p className="text-xs font-mono text-cyan-400 mt-1">
                  {PERSONAL_INFO.company} &bull; {PERSONAL_INFO.brand}
                </p>
              </div>

              {/* Direct Info Cards */}
              <div className="space-y-4 pt-1">
                {/* Email */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-cyan-500/30 transition-all group">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-semibold">
                          PRIMARY EMAIL
                        </div>
                        <a 
                          href={`mailto:${PERSONAL_INFO.email}`}
                          className="text-sm sm:text-base font-mono font-bold text-white hover:text-cyan-300 transition-colors"
                        >
                          {PERSONAL_INFO.email}
                        </a>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="p-2 rounded-lg text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
                      title="Copy Email Address"
                    >
                      {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Phone */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-cyan-500/30 transition-all group">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-semibold">
                          PHONE / SMS
                        </div>
                        <a 
                          href={`tel:${PERSONAL_INFO.phone}`}
                          className="text-sm sm:text-base font-mono font-bold text-white hover:text-cyan-300 transition-colors"
                        >
                          {PERSONAL_INFO.phone}
                        </a>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={handleCopyPhone}
                      className="p-2 rounded-lg text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
                      title="Copy Phone Number"
                    >
                      {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Entity, Trademark & Web Platforms */}
            <div className="space-y-4 pt-6 border-t border-white/10">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Official Entity &amp; Web Infrastructure
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <a
                  href={PERSONAL_INFO.domains.cloud}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 hover:text-cyan-300 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2">
                    <Server className="w-4 h-4 text-cyan-400" />
                    <span>intrepidcloud.net</span>
                  </div>
                  <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-cyan-400" />
                </a>

                <a
                  href={PERSONAL_INFO.domains.course}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 hover:text-teal-300 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-teal-400" />
                    <span>course portal</span>
                  </div>
                  <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-teal-400" />
                </a>
              </div>

              <div className="p-3 rounded-xl bg-black/40 border border-white/5 text-[11px] font-mono text-slate-400 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Intrepid Media Giant, LLC &bull; Los Angeles, CA</span>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Mailto Action Form (No fake backend - opens email client) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-slate-900/70 border border-white/10 backdrop-blur-xl shadow-2xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                  Send an Email Message
                </h3>
                <p className="text-xs text-slate-400 font-mono">
                  Direct dispatch to {PERSONAL_INFO.email}
                </p>
              </div>

              {/* Inquiry selector */}
              <div className="space-y-2">
                <label className="block text-xs font-mono font-medium text-slate-300">
                  Select Project Type
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {['Film / Video Project', 'Podcast / Interview', 'Music / Vocal Session', 'DaVinci Resolve Editing', 'Color Grading', 'Custom Tool / LUT'].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setInquiryType(type)}
                      className={`p-2.5 rounded-xl text-xs font-mono text-left border transition-all ${
                        inquiryType === type
                          ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50 font-bold'
                          : 'bg-black/30 border-white/10 text-slate-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Note / Message Draft */}
              <div className="space-y-2">
                <label htmlFor="contact-note" className="block text-xs font-mono font-medium text-slate-300">
                  Project Brief or Note (Optional pre-fill)
                </label>
                <textarea
                  id="contact-note"
                  rows={4}
                  value={clientNote}
                  onChange={(e) => setClientNote(e.target.value)}
                  placeholder="Outline your timeline, deliverables, or questions here..."
                  className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 focus:border-cyan-500/60 focus:ring-2 focus:ring-cyan-500/20 text-sm text-white placeholder:text-slate-600 outline-none transition-all resize-none"
                />
              </div>
            </div>

            {/* Direct Mailto Action Button */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              <a
                href={mailtoUrl}
                id="contact-mailto-btn"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-black font-semibold text-sm tracking-wide shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 group text-center"
              >
                <span>Compose Direct Email ({inquiryType})</span>
                <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <p className="text-[11px] font-mono text-slate-500 text-center">
                This triggers your default email client to compose directly to {PERSONAL_INFO.email}.
              </p>
            </div>
          </div>

        </div>

        {/* Footer info bar */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Intrepid Media Giant, LLC &bull; All Rights Reserved
          </div>
          <div className="flex items-center gap-3 text-slate-400">
            <span>{PERSONAL_INFO.headline}</span>
            <span>&bull;</span>
            <a href={PERSONAL_INFO.domains.cloud} target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">
              intrepidcloud.net
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Mail, 
  Phone, 
  Send, 
  Copy, 
  Check, 
  ExternalLink, 
  Sparkles, 
  MessageSquare,
  Clock,
  MapPin,
  ShieldCheck,
  Server,
  Terminal
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      const subject = encodeURIComponent(`Production & Project Inquiry: ${formData.name}`);
      const body = encodeURIComponent(
        `Hi Bstar,\n\nMy name is ${formData.name} (${formData.email}).\n\n${formData.message}\n\nSent from your portfolio website.`
      );
      window.open(`mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`, '_blank');
    }, 500);
  };

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

  return (
    <section id="contact" className="relative py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider bg-cyan-500/10 px-3.5 py-1.5 rounded-full border border-cyan-500/20">
            <Mail className="w-4 h-4" />
            <span>Direct Inquiries &amp; Booking</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Connect with Bernard Mathis (Bstar)
          </h2>
          <p className="text-slate-300 text-base">
            Reach out for multi-camera production, 16-channel live sound venue mixing, virtual production sets, or precision color grading and post-production.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Direct Contact Info & Trademark Verification */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-slate-900/70 border border-white/10 backdrop-blur-xl shadow-2xl space-y-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-white tracking-wide">
                  Let's Make Something Great
                </h3>
                <p className="text-xs font-mono text-cyan-400 mt-1">
                  {PERSONAL_INFO.company} &bull; {PERSONAL_INFO.brand}
                </p>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                Available for camera systems (Blackmagic, RED, ARRI, Sony, Panasonic), 16-channel live concert &amp; venue mixing, Unreal Engine virtual production, ATEM Mini live chroma keying, and full-spectrum color grading.
              </p>

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
                          PRIMARY INBOX
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
                Official Entity & Verified Portals
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

          {/* Right Column: Direct Message Transmission Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-slate-900/70 border border-white/10 backdrop-blur-xl shadow-2xl">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white">
                  Transmission Prepared!
                </h3>
                <p className="text-sm text-slate-300 max-w-md">
                  Thank you, {formData.name}. Your message has been prepared for Bstar at <span className="text-cyan-400">{PERSONAL_INFO.email}</span>. A mail window has been triggered for direct confirmation.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', email: '', message: '' });
                  }}
                  className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-mono text-slate-200 transition-all"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                    Send Direct Message
                  </h3>
                  <p className="text-xs text-slate-400 font-mono">
                    Direct dispatch to Bstar (Bernard Mathis) at {PERSONAL_INFO.email}
                  </p>
                </div>

                {/* Your Name */}
                <div className="space-y-2">
                  <label htmlFor="contact-name" className="block text-xs font-mono font-medium text-slate-300">
                    Your Name <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Producer, Artist or Collaborator"
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 focus:border-cyan-500/60 focus:ring-2 focus:ring-cyan-500/20 text-sm text-white placeholder:text-slate-600 outline-none transition-all"
                  />
                </div>

                {/* Email Address */}
                <div className="space-y-2">
                  <label htmlFor="contact-email" className="block text-xs font-mono font-medium text-slate-300">
                    Email Address <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@production.com"
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 focus:border-cyan-500/60 focus:ring-2 focus:ring-cyan-500/20 text-sm text-white placeholder:text-slate-600 outline-none transition-all"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="contact-message" className="block text-xs font-mono font-medium text-slate-300">
                    Message <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your project, shooting schedule, multicam podcast setup, or post-production tooling needs..."
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 focus:border-cyan-500/60 focus:ring-2 focus:ring-cyan-500/20 text-sm text-white placeholder:text-slate-600 outline-none transition-all resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  id="contact-submit-btn"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-black font-semibold text-sm tracking-wide shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span className="font-mono text-xs">Transmitting...</span>
                  ) : (
                    <>
                      <span>Send Direct Transmission</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Footer info bar */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Intrepid Media Giant, LLC &bull; All Rights Reserved
          </div>
          <div className="flex items-center gap-3 text-slate-400">
            <span>Filmmaker & Systems Engineer</span>
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

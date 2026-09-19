import React, { useState } from 'react';
import { SERVICES, PERSONAL_INFO } from '../data/portfolioData';
import { ServiceCapability } from '../types';
import { 
  Video, 
  Film, 
  Mic2, 
  Zap, 
  CheckCircle2, 
  Sliders, 
  ArrowRight,
  Disc,
  Radio,
  Camera,
  Layers,
  Sparkles,
  Volume2,
  Cpu,
  Tv
} from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(SERVICES[0].id);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'camera-cinematography': return Camera;
      case 'virtual-production': return Cpu;
      case 'live-sound-mixing': return Sliders;
      case 'post-production-color': return Film;
      default: return Video;
    }
  };

  const activeService = SERVICES.find(s => s.id === activeTab) || SERVICES[0];

  return (
    <section id="services" className="relative py-24 border-t border-white/5 bg-[#080c16]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
            <Video className="w-3.5 h-3.5 text-cyan-400" />
            <span>Full-Spectrum Production Capabilities</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Camera. Virtual Sets. Live Sound. Color.
          </h2>

          <p className="text-base sm:text-lg text-cyan-100 font-medium leading-relaxed italic border-l-2 border-cyan-400 pl-4 py-1">
            "{PERSONAL_INFO.philosophy}"
          </p>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            A comprehensive skill set spanning multi-camera certification (Blackmagic, RED, ARRI, Sony, Panasonic, Fuji, Atomos), concert venue sound engineering on 16-channel consoles, real-time virtual sets in Unreal Engine, and master-level color grading and post-production.
          </p>
        </div>

        {/* Interactive Capability Selector */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {SERVICES.map((service) => {
            const Icon = getServiceIcon(service.id);
            const isSelected = activeTab === service.id;
            return (
              <button
                key={service.id}
                type="button"
                onClick={() => setActiveTab(service.id)}
                className={`p-5 rounded-2xl text-left transition-all duration-300 border flex flex-col justify-between space-y-4 ${
                  isSelected
                    ? 'bg-gradient-to-b from-cyan-500/15 to-teal-500/5 border-cyan-500/60 shadow-xl shadow-cyan-950/40 ring-1 ring-cyan-500/40'
                    : 'bg-slate-900/50 border-white/10 hover:bg-white/[0.04] hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                    isSelected ? 'bg-cyan-500 text-black shadow-md shadow-cyan-500/30' : 'bg-white/5 text-cyan-400'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                    {service.badge}
                  </span>
                </div>

                <div>
                  <h3 className={`text-base font-display font-bold transition-colors ${
                    isSelected ? 'text-white' : 'text-slate-200'
                  }`}>
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                    {service.headline}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Capability Deep-Dive Card */}
        <div className="rounded-3xl bg-slate-900/80 border border-white/15 backdrop-blur-xl p-6 sm:p-10 shadow-2xl overflow-hidden relative">
          {/* Subtle accent glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
            
            {/* Left Detail Column */}
            <div className="lg:col-span-8 space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{activeService.badge} Spotlight</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                  {activeService.headline}
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  {activeService.description}
                </p>
              </div>

              {/* Bullet Points */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold">
                  Key Production Highlights
                </div>
                <div className="space-y-2.5">
                  {activeService.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-1" />
                      <span className="leading-relaxed">{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Special callout for Audio Tab: Music Release */}
              {activeService.id === 'audio-mixing' && (
                <div className="p-4 rounded-2xl bg-cyan-950/30 border border-cyan-500/30 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center flex-shrink-0">
                      <Disc className="w-5 h-5 animate-spin-slow" />
                    </div>
                    <div>
                      <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                        Commercial Music Release
                      </div>
                      <div className="text-sm font-display font-bold text-white">
                        "{PERSONAL_INFO.musicRelease.title}" by Bstar &bull; Distributed via CmdShft
                      </div>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-white/5 border border-white/10 text-slate-300 whitespace-nowrap">
                    Active Artist & Engineer
                  </span>
                </div>
              )}

              {/* Special callout for Workflow Speed: light line only */}
              {activeService.id === 'workflow-speed' && (
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-xs font-mono text-slate-300 flex items-center gap-2.5">
                  <Zap className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>{PERSONAL_INFO.workflowNote}</span>
                </div>
              )}
            </div>

            {/* Right Specs Card */}
            <div className="lg:col-span-4 p-6 rounded-2xl bg-black/40 border border-white/10 space-y-6">
              <div>
                <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                  Equipment & Rig Specs
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Tools deployed directly on shoots, edits, and mixes:
                </p>
              </div>

              <div className="space-y-2">
                {activeService.keySpecs.map((spec, i) => (
                  <div 
                    key={i} 
                    className="p-3 rounded-xl bg-white/[0.04] border border-white/5 flex items-center justify-between text-xs font-mono"
                  >
                    <span className="text-white font-medium">{spec}</span>
                    <span className="text-cyan-400 text-[10px] font-bold">READY</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-white/10">
                <div className="text-[11px] font-mono text-slate-400">
                  <span className="text-white font-semibold">Director & Producer Note:</span> Every project receives unified picture and sound execution. No handing off unpolished audio or uncorrected footage.
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Lightweight Banner: Systems I Rely On (one light line as requested) */}
        <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-300">
          <div className="flex items-center gap-3">
            <Zap className="w-4 h-4 text-cyan-400 flex-shrink-0" />
            <span>
              <strong className="text-white">Workflow Speed Note:</strong> {PERSONAL_INFO.workflowNote}
            </span>
          </div>
          <a
            href="#work"
            className="text-cyan-400 hover:text-cyan-300 underline flex items-center gap-1 whitespace-nowrap text-xs"
          >
            <span>View The Reel</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};

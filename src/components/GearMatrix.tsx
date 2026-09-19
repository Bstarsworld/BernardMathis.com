import React, { useState } from 'react';
import { CAMERA_GEAR, AUDIO_GEAR, SOFTWARE_STACK, PERSONAL_INFO, CAMERA_CERTIFICATIONS } from '../data/portfolioData';
import { 
  Camera, 
  Mic2, 
  Sliders, 
  Film, 
  CheckCircle2, 
  Disc, 
  Radio, 
  ExternalLink,
  Zap,
  Volume2,
  ShieldCheck,
  Cpu,
  Tv,
  Layers,
  Sparkles
} from 'lucide-react';

export const GearMatrix: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Tools' },
    { id: 'Editing & Color', label: 'NLE & Color Grading' },
    { id: 'Virtual Production & 3D', label: 'Virtual Production & 3D' },
    { id: 'Audio & Live', label: 'Live Sound & Audio' },
    { id: 'Motion & Delivery', label: 'Motion & Delivery' },
  ];

  const filteredSoftware = activeCategory === 'all'
    ? SOFTWARE_STACK
    : SOFTWARE_STACK.filter((item) => item.category === activeCategory);

  return (
    <section id="gear-matrix" className="relative py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
            <Camera className="w-3.5 h-3.5 text-cyan-400" />
            <span>Technical Depth &amp; Studio Hardware</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Camera Certifications, Virtual Production &amp; Live Audio
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Proficient across multi-camera systems, live nightclub and concert venue sound, real-time virtual production, and precision post-production color pipelines.
          </p>
        </div>

        {/* 1. Camera Certifications & RAW Pipeline Standards */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Certified Camera Systems &amp; RAW Color Pipelines</span>
            </div>
            <span className="text-xs font-mono text-slate-400">
              ACES &bull; Rec.709 &bull; DaVinci Resolve Pipeline
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {CAMERA_CERTIFICATIONS.map((cert) => (
              <div
                key={cert.name}
                className="p-5 rounded-2xl bg-slate-900/70 border border-white/10 hover:border-cyan-500/40 transition-all space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                      {cert.brand}
                    </span>
                    <span className="text-[11px] font-mono text-emerald-400 font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> Certified
                    </span>
                  </div>
                  <h3 className="text-base font-display font-bold text-white">
                    {cert.name}
                  </h3>
                  <div className="text-xs font-medium text-cyan-300 font-mono">
                    {cert.level}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {cert.note}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 space-y-1.5">
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                    RAW / Log Support:
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {cert.rawFormats.map((f) => (
                      <span key={f} className="text-[10px] font-mono bg-white/5 text-slate-200 px-1.5 py-0.5 rounded border border-white/5">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* RAW & Color Science Summary Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-cyan-950/40 via-slate-900/80 to-slate-900/90 border border-cyan-500/30 space-y-4 flex flex-col justify-between sm:col-span-2 lg:col-span-1">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                  <Layers className="w-4 h-4" />
                  <span>Color Space Management</span>
                </div>
                <h3 className="text-base font-display font-bold text-white">
                  DaVinci Resolve Color Pipelines
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Proficient in handling and color grading raw files and setting up professional color grading pipelines for any desired color space.
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-white/10 text-xs font-mono">
                <div className="text-cyan-300 font-semibold text-[11px]">SUPPORTED COLOR SPACES:</div>
                <div className="flex flex-wrap gap-1.5">
                  {PERSONAL_INFO.colorSpaces.map((cs) => (
                    <span key={cs} className="text-[10px] bg-cyan-500/10 text-cyan-300 px-2 py-0.5 rounded border border-cyan-500/20">
                      {cs}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Studio, Virtual Production & Field Hardware */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2 text-teal-400 text-xs font-mono font-bold uppercase tracking-wider">
              <Cpu className="w-4 h-4" />
              <span>Virtual Production, Switching &amp; Field Rigs</span>
            </div>
            <span className="text-xs font-mono text-slate-400">
              Unreal Engine &bull; Ultimatte &bull; ATEM Mini Pro &bull; GH6
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CAMERA_GEAR.map((gear) => (
              <div
                key={gear.name}
                className="p-5 rounded-2xl bg-slate-900/70 border border-white/10 hover:border-teal-500/40 transition-all space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-teal-400 bg-teal-500/10 px-2 py-0.5 rounded border border-teal-500/20">
                      {gear.format}
                    </span>
                  </div>
                  <h3 className="text-base font-display font-bold text-white">
                    {gear.name}
                  </h3>
                  <div className="text-xs font-medium text-slate-400 font-mono">
                    {gear.role}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {gear.specs}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 text-[11px] text-teal-300/90 font-mono flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 flex-shrink-0 mt-0.5" />
                  <span>{gear.useCase}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Live Venue Sound & Studio Audio Signal Chain */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
            <div className="flex items-center gap-2 text-indigo-400 text-xs font-mono font-bold uppercase tracking-wider">
              <Mic2 className="w-4 h-4" />
              <span>16-Channel Live Sound &amp; Studio Audio Chain</span>
            </div>
            <span className="text-xs font-mono text-slate-400">
              Concert Mixing &bull; Nightclub AV &bull; Pro Tools &bull; Studio &amp; Mobile Rigs
            </span>
          </div>

          <div className="p-6 rounded-3xl bg-slate-900/80 border border-white/10 space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <h3 className="text-xl font-display font-bold text-white">
                  Live Sound Venue Mixing &amp; Studio Broadcast Chain
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  16-Channel Console &rarr; Instrument Micing &rarr; Discrete Preamps &rarr; Pro Tools &amp; Dynamic EQ
                </p>
              </div>

              {/* Music Release Tag */}
              <div className="flex items-center gap-3 p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20">
                <Disc className="w-4 h-4 text-indigo-400 flex-shrink-0 animate-spin-slow" />
                <div className="text-xs font-mono text-slate-300">
                  <strong className="text-white">Commercial Release:</strong> "{PERSONAL_INFO.musicRelease.title}" via CmdShft
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {AUDIO_GEAR.map((item) => (
                <div 
                  key={item.name} 
                  className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-2.5"
                >
                  <div className="text-[10px] font-mono uppercase tracking-wider text-indigo-400 font-bold">
                    {item.chainOrder}
                  </div>
                  <h4 className="text-sm font-display font-bold text-white">
                    {item.name}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.specs}
                  </p>
                  <div className="pt-2 border-t border-white/5 text-[11px] text-slate-400 font-mono">
                    {item.useCase}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs font-mono text-slate-300">
              <span>
                <strong className="text-indigo-400">Live &amp; Studio Reliability:</strong> Trained on a 16-channel mixing board to run entire live sound venues, properly mic performers and instruments during concerts, and troubleshoot live AV systems under high pressure.
              </span>
            </div>
          </div>
        </div>

        {/* 4. Complete Software Stack & Proficiency */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-3">
            <div className="flex items-center gap-2 text-teal-400 text-xs font-mono font-bold uppercase tracking-wider">
              <Film className="w-4 h-4" />
              <span>Full Software Suite &amp; Production Tools</span>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-slate-900/80 border border-white/10">
              {categories.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setActiveCategory(c.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                    activeCategory === c.id
                      ? 'bg-cyan-500 text-black font-bold shadow-sm'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredSoftware.map((tool) => (
              <div
                key={tool.name}
                className="group p-5 rounded-2xl bg-slate-900/50 border border-white/10 hover:border-cyan-500/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <span className="text-[10px] font-mono font-semibold text-cyan-400 uppercase tracking-wider bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                      {tool.category}
                    </span>
                    <h3 className="text-base font-display font-bold text-white group-hover:text-cyan-300 transition-colors mt-1.5">
                      {tool.name}
                    </h3>
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400">
                    {tool.proficiency}%
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed min-h-[32px]">
                  {tool.role}
                </p>

                <div className="mt-4 pt-3 border-t border-white/5">
                  <div className="w-full h-1.5 rounded-full bg-white/5 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-cyan-500 to-teal-400 rounded-full transition-all duration-500 group-hover:from-cyan-400 group-hover:to-teal-300"
                      style={{ width: `${tool.proficiency}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Workflow note */}
        <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/10 flex items-center justify-between gap-4 text-xs font-mono text-slate-300">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-cyan-400 flex-shrink-0" />
            <span>{PERSONAL_INFO.workflowNote}</span>
          </div>
        </div>

      </div>
    </section>
  );
};


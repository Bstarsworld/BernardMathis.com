import React, { useState } from 'react';
import { CAMERA_GEAR, AUDIO_GEAR, SOFTWARE_STACK, PERSONAL_INFO, BUILT_TOOLS } from '../data/portfolioData';
import { 
  Camera, 
  Mic2, 
  Film, 
  CheckCircle2, 
  Disc, 
  Wrench,
  Sparkles
} from 'lucide-react';

export const GearMatrix: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Software' },
    { id: 'Editing & Color', label: 'Editing & Color' },
    { id: 'Audio & Music', label: 'Audio & Music' },
    { id: 'Graphics & Post', label: 'Graphics & Post' },
    { id: 'Video Hardware', label: 'Hardware' }
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
            <span>Camera Systems, Audio &amp; In-House Tools</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Camera Gear, Audio Chain &amp; Custom Tools
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Every camera, microphone, preamp, software utility, and custom plugin listed here is verified. No unverified certifications or inflated percentage bars.
          </p>
        </div>

        {/* 1. Camera Systems */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider">
              <Camera className="w-4 h-4" />
              <span>Camera Systems (Owned &amp; Operated)</span>
            </div>
            <span className="text-xs font-mono text-slate-400">
              Panasonic Lumix GH6 &bull; DJI Spark &bull; DJI Osmo Pocket
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CAMERA_GEAR.map((gear) => (
              <div
                key={gear.name}
                className="p-5 rounded-2xl border bg-slate-900/70 border-white/10 hover:border-cyan-500/40 transition-all space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-wider px-2 py-0.5 rounded border text-cyan-400 bg-cyan-500/10 border-cyan-500/20">
                      {gear.format}
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> Verified Kit
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

                <div className="pt-3 border-t border-white/5 text-[11px] font-mono flex items-start gap-1.5 text-cyan-300/90">
                  <span className="leading-snug">{gear.useCase}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Tools I've Built (Featured Custom Tools Section) */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
            <div className="flex items-center gap-2 text-teal-400 text-xs font-mono font-bold uppercase tracking-wider">
              <Wrench className="w-4 h-4" />
              <span>Tools I've Built (DaVinci Resolve Plugins &amp; Automation)</span>
            </div>
            <span className="text-xs font-mono text-slate-400">
              LensLook &bull; FC_GH6 &bull; SafeZonesPro &bull; AutoPod Pro &bull; Vega
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {BUILT_TOOLS.map((tool) => (
              <div
                key={tool.id}
                className="p-5 rounded-2xl bg-slate-900/70 border border-white/10 hover:border-teal-500/40 transition-all space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-teal-400 bg-teal-500/10 px-2 py-0.5 rounded border border-teal-500/20">
                      {tool.badge}
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> In-House
                    </span>
                  </div>
                  <h3 className="text-base font-display font-bold text-white">
                    {tool.name}
                  </h3>
                  <div className="text-xs font-mono text-cyan-300">
                    {tool.type}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {tool.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 space-y-1">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Key Features:</div>
                  <div className="flex flex-wrap gap-1">
                    {tool.specs.map((s, idx) => (
                      <span key={idx} className="text-[10px] font-mono bg-white/5 text-slate-200 px-1.5 py-0.5 rounded border border-white/5">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Audio & Vocal Recording Chain */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
            <div className="flex items-center gap-2 text-indigo-400 text-xs font-mono font-bold uppercase tracking-wider">
              <Mic2 className="w-4 h-4" />
              <span>Vocal Recording Chain &amp; Sessions</span>
            </div>
            <span className="text-xs font-mono text-slate-400">
              Pirate Rehearsal Studios &bull; Silver Lake, Los Angeles
            </span>
          </div>

          <div className="p-6 rounded-3xl bg-slate-900/80 border border-white/10 space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <h3 className="text-xl font-display font-bold text-white">
                  Verified Vocal Signal Chain
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  Neumann TLM 102 &rarr; Golden Age PRE-73 Jr &rarr; Focusrite Clarett 4Pre &rarr; TDR Nova Dynamic EQ
                </p>
              </div>

              {/* Music Release Tag */}
              <div className="flex items-center gap-3 p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20">
                <Disc className="w-4 h-4 text-indigo-400 flex-shrink-0 animate-spin-slow" />
                <div className="text-xs font-mono text-slate-300">
                  <strong className="text-white">Commercial Release:</strong> "{PERSONAL_INFO.musicRelease.title}" by Bstar via CmdShft
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
                <strong className="text-indigo-400">Recording Environment:</strong> Vocals recorded at Pirate Rehearsal Studios in Silver Lake. DAWs owned and used include Pro Tools and Studio One, with audio restoration in iZotope.
              </span>
            </div>
          </div>
        </div>

        {/* 4. Software Stack (Plain, Unranked Tool List - NO PERCENTAGE BARS) */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-3">
            <div>
              <div className="flex items-center gap-2 text-teal-400 text-xs font-mono font-bold uppercase tracking-wider">
                <Film className="w-4 h-4" />
                <span>Software Tools (Plain Unranked List)</span>
              </div>
              <p className="text-xs text-slate-400 font-mono mt-0.5">
                Core editing, music production, and post-production software.
              </p>
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
                className="p-5 rounded-2xl border transition-all duration-200 flex flex-col justify-between space-y-3 bg-slate-900/50 border-white/10 hover:border-cyan-500/40"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-mono font-semibold text-cyan-400 uppercase tracking-wider bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                      {tool.category}
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1 font-semibold">
                      <CheckCircle2 className="w-3 h-3" /> Verified
                    </span>
                  </div>
                  
                  <h3 className="text-base font-display font-bold text-white">
                    {tool.name}
                  </h3>
                </div>

                <p className="text-xs leading-relaxed text-slate-300">
                  {tool.role}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

import React, { useState, useRef } from 'react';
import { Sliders, Sparkles, Eye, Check, ChevronRight } from 'lucide-react';

interface ColorGradePreset {
  id: string;
  name: string;
  camera: string;
  format: string;
  workflow: string;
  rawNote: string;
  gradedNote: string;
  image: string;
}

const PRESETS: ColorGradePreset[] = [
  {
    id: 'gh6-vlog',
    name: 'Panasonic GH6 — V-Log First-Principles Math',
    camera: 'Panasonic Lumix GH6',
    format: '4K 10-bit 4:2:2 V-Log (Internal)',
    workflow: 'Custom Clean-Room LUT & DaVinci Resolve YRGB',
    rawNote: 'Flat V-Log logarithmic curve matching Panasonic sensor code values with mathematical 18% gray at 42 IRE',
    gradedNote: 'Mastered Rec.709 cinema grade with LensLook optical halation and gentle highlight rolloff',
    image: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1200,fit=crop/BOJNKSHI76bv9ceB/img_4244-Wgap7hR064qefeqF.jpg'
  },
  {
    id: 'prores-raw',
    name: 'Apple ProRes RAW — Commercial & Wedding Grade',
    camera: 'Panasonic GH6 + Atomos Ninja',
    format: '12-bit Apple ProRes RAW',
    workflow: 'DaVinci Resolve Studio + Custom LensLook Plugin',
    rawNote: 'Wide-gamut linear RAW sensor data allowing precise exposure pull and temperature tuning',
    gradedNote: 'Commercial film curve with warm organic skin tones, rich shadow density, and anamorphic flare simulation',
    image: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1200,fit=crop/BOJNKSHI76bv9ceB/img_4238-XaXqsh3AHYWRO2fL.jpg'
  },
  {
    id: 'greenscreen-despill',
    name: 'Multicam Green Screen — Clean Key & Light Wrap',
    camera: 'Panasonic GH6 + ATEM Mini',
    format: '4K V-Log 10-bit & Live Studio Feed',
    workflow: 'Clean-room Ultimatte Keying & DaVinci Fusion Match',
    rawNote: 'Raw green bounce and harsh edge bleed on talent prior to optical despill',
    gradedNote: 'De-spilled subject with simulated ambient environment light wrap matching background plates',
    image: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1200,fit=crop/BOJNKSHI76bv9ceB/img_1482-lElCMLpTViwQGTi9.jpg'
  }
];

export const ColorGradeComparator: React.FC = () => {
  const [activePreset, setActivePreset] = useState<ColorGradePreset>(PRESETS[0]);
  const [sliderPosition, setSliderPosition] = useState<number>(50); // percentage
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.min(Math.max((x / rect.width) * 100, 5), 95);
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <div className="w-full rounded-2xl bg-[#0b0f19] border border-white/10 p-5 sm:p-7 shadow-2xl overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider mb-1">
            <Sliders className="w-4 h-4" />
            <span>Interactive Sensor LOG vs. Mastered Look</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-display font-bold text-white tracking-wide">
            First-Principles V-Log & ProRes RAW Pipeline
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
            Drag the divider to compare the uncorrected Panasonic GH6 V-Log / RAW capture against the final grade shaped with custom clean-room plugins like LensLook.
          </p>
        </div>

        {/* Preset Selector Buttons */}
        <div className="flex flex-wrap items-center gap-1.5 bg-black/40 p-1.5 rounded-xl border border-white/5">
          {PRESETS.map((preset) => (
            <button
              key={preset.id}
              type="button"
              onClick={() => setActivePreset(preset)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                activePreset.id === preset.id
                  ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {preset.name.split('—')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Split Image Stage */}
      <div
        ref={containerRef}
        className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden select-none cursor-ew-resize border border-white/15 bg-black"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
        onTouchMove={handleTouchMove}
        onClick={(e) => handleMove(e.clientX)}
      >
        {/* Under layer: GRADED (Right/Full) */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={activePreset.image}
            alt="Mastered Color Grade"
            className="w-full h-full object-cover filter contrast-[1.12] saturate-[1.22] brightness-[1.02]"
            draggable={false}
          />
          <div className="absolute bottom-3 right-4 px-3 py-1 rounded-md bg-black/75 backdrop-blur-md border border-cyan-500/40 text-[11px] font-mono text-cyan-300">
            Mastered with Custom LensLook
          </div>
        </div>

        {/* Top layer: RAW / LOG (Left) clipped by width percentage */}
        <div
          className="absolute inset-y-0 left-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <div 
            className="absolute inset-y-0 left-0"
            style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100vw' }}
          >
            <img
              src={activePreset.image}
              alt="Raw LOG Sensor Capture"
              className="w-full h-full object-cover filter contrast-[0.72] saturate-[0.35] brightness-[1.15]"
              draggable={false}
            />
          </div>
          <div className="absolute bottom-3 left-4 px-3 py-1 rounded-md bg-black/75 backdrop-blur-md border border-white/20 text-[11px] font-mono text-slate-300">
            Raw V-Log (42 IRE Middle Gray)
          </div>
        </div>

        {/* Vertical Divider Bar */}
        <div
          className="absolute inset-y-0 w-1 bg-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.8)] pointer-events-none"
          style={{ left: `calc(${sliderPosition}% - 2px)` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-cyan-400 text-black flex items-center justify-center font-bold shadow-xl border-2 border-slate-900">
            <span className="text-[10px] font-mono tracking-tighter">◀▶</span>
          </div>
        </div>

        {/* Live Scope Ribbon */}
        <div className="absolute top-3 left-3 hidden sm:flex items-center gap-2 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono text-slate-300">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span>V-LOG CURVE MATH &bull; ZERO PRE-BAKED ARTIFACTS</span>
        </div>
      </div>

      {/* Preset Details Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4 pt-4 border-t border-white/10 text-xs font-mono">
        <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
          <div className="text-slate-400 text-[10px] uppercase">Primary Camera & Sensor</div>
          <div className="text-white font-semibold mt-0.5">{activePreset.camera}</div>
          <div className="text-cyan-400 text-[11px] mt-0.5">{activePreset.format}</div>
        </div>

        <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
          <div className="text-slate-400 text-[10px] uppercase">Post Pipeline</div>
          <div className="text-white font-semibold mt-0.5">{activePreset.workflow}</div>
          <div className="text-slate-400 text-[11px] mt-0.5">DaVinci Resolve Studio Clean-Room Tools</div>
        </div>

        <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
          <div className="text-slate-400 text-[10px] uppercase">First-Principles Calibration</div>
          <div className="text-slate-300 text-[11px] mt-0.5">{activePreset.rawNote}</div>
        </div>
      </div>
    </div>
  );
};

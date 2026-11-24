import React, { useState, useRef } from 'react';
import { Sliders } from 'lucide-react';

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
    name: 'Panasonic GH6 — V-Log Exposure Calibration',
    camera: 'Panasonic Lumix GH6',
    format: '4K 10-bit 4:2:2 V-Log (Internal)',
    workflow: 'FC_GH6 False-Color LUT & DaVinci Resolve Studio',
    rawNote: 'V-Log curve verified against Panasonic GH6 manual (18% gray at 42 IRE, 90% white at 61 IRE)',
    gradedNote: 'Rec.709 deliverable graded in DaVinci Resolve Studio using LensLook plugin',
    image: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1200,fit=crop/BOJNKSHI76bv9ceB/img_4244-Wgap7hR064qefeqF.jpg'
  },
  {
    id: 'prores-raw',
    name: 'Apple ProRes RAW — Commercial & Wedding',
    camera: 'Panasonic Lumix GH6',
    format: '12-bit Apple ProRes RAW',
    workflow: 'DaVinci Resolve Studio & LensLook Plugin',
    rawNote: 'Linear RAW sensor capture for commercial and wedding deliverables requiring extended highlight latitude',
    gradedNote: 'Final client master graded in DaVinci Resolve Studio with custom LensLook presets',
    image: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1200,fit=crop/BOJNKSHI76bv9ceB/img_4238-XaXqsh3AHYWRO2fL.jpg'
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
            <span>Interactive Sensor LOG vs. Graded Master</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-display font-bold text-white tracking-wide">
            Panasonic GH6 V-Log &amp; ProRes RAW Color Pipeline
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
            Drag the divider to compare the uncorrected Panasonic GH6 V-Log / RAW capture against the final grade shaped in DaVinci Resolve Studio using custom tools like LensLook.
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
            alt="Graded Master"
            className="w-full h-full object-cover filter contrast-[1.12] saturate-[1.22] brightness-[1.02]"
            draggable={false}
          />
          <div className="absolute bottom-3 right-4 px-3 py-1 rounded-md bg-black/75 backdrop-blur-md border border-cyan-500/40 text-[11px] font-mono text-cyan-300">
            Graded with LensLook in Resolve
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
            V-Log (18% Gray = 42 IRE, 90% White = 61 IRE)
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
          <span>PANASONIC GH6 V-LOG &bull; FC_GH6 EXPOSURE MAPPING</span>
        </div>
      </div>

      {/* Preset Details Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4 pt-4 border-t border-white/10 text-xs font-mono">
        <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
          <div className="text-slate-400 text-[10px] uppercase">Primary Camera &amp; Sensor</div>
          <div className="text-white font-semibold mt-0.5">{activePreset.camera}</div>
          <div className="text-cyan-400 text-[11px] mt-0.5">{activePreset.format}</div>
        </div>

        <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
          <div className="text-slate-400 text-[10px] uppercase">Post Pipeline</div>
          <div className="text-white font-semibold mt-0.5">{activePreset.workflow}</div>
          <div className="text-slate-400 text-[11px] mt-0.5">DaVinci Resolve Studio</div>
        </div>

        <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
          <div className="text-slate-400 text-[10px] uppercase">Calibration &amp; Exposure</div>
          <div className="text-slate-300 text-[11px] mt-0.5">{activePreset.rawNote}</div>
        </div>
      </div>
    </div>
  );
};

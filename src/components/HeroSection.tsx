import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO, WORK_ITEMS } from '../data/portfolioData';
import { WorkItem } from '../types';
import { 
  Play, 
  ArrowDown, 
  Sparkles, 
  Video, 
  Sliders, 
  Radio, 
  Camera, 
  Mic2,
  Film,
  Disc,
  CheckCircle2, 
  Mail,
  Copy,
  Check,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  Cpu
} from 'lucide-react';

interface HeroSectionProps {
  onPlayVideo: (item: WorkItem) => void;
  onScrollTo: (id: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onPlayVideo, onScrollTo }) => {
  const [timecode, setTimecode] = useState('01:23:45:18');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [showFullBio, setShowFullBio] = useState(false);

  // Featured showcase video: The Sour Truth Podcast or Pressers
  const featuredReel = WORK_ITEMS.find((w) => w.id === 'sour-truth-podcast') || WORK_ITEMS[0];

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const h = String(now.getHours()).padStart(2, '0');
      const m = String(now.getMinutes()).padStart(2, '0');
      const s = String(now.getSeconds()).padStart(2, '0');
      const f = String(Math.floor((now.getMilliseconds() / 1000) * 24)).padStart(2, '0');
      setTimecode(`${h}:${m}:${s}:${f}`);
    }, 42); // 24 FPS approx
    return () => clearInterval(timer);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden"
    >
      {/* Background radial highlight glow */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-cyan-500/15 via-teal-500/10 to-indigo-600/10 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content & Producer Positioning */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            {/* Status Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-cyan-500/30 backdrop-blur-md shadow-lg shadow-cyan-950/40">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-xs font-mono font-medium tracking-wide text-cyan-300">
                  {PERSONAL_INFO.founderTitle}
                </span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/80 border border-white/10 text-xs font-mono text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>7x Certified Camera Systems</span>
              </div>
            </div>

            {/* Display Title */}
            <div className="space-y-2">
              <h1 className="font-display font-extrabold text-4xl sm:text-6xl xl:text-7xl tracking-tight text-white uppercase leading-[1.05]">
                Bernard Mathis
                <span className="block text-2xl sm:text-3xl font-mono font-bold tracking-normal pt-1 bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-300 bg-clip-text text-transparent">
                  Bstar &bull; Dynamic Tech Enthusiast &amp; Creative Professional
                </span>
              </h1>
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <span className="text-sm sm:text-base font-mono font-medium text-cyan-400">
                  Virtual Production &bull; 16-Ch Live Sound &bull; Camera Systems &amp; Color
                </span>
                <span className="text-slate-600 font-mono">/</span>
                <span className="text-xs sm:text-sm font-mono text-slate-300">
                  {PERSONAL_INFO.location}
                </span>
              </div>
            </div>

            {/* Bio Presentation */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/70 border border-white/10 backdrop-blur-md space-y-3">
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                {PERSONAL_INFO.bioParagraphs[0]}
              </p>

              {showFullBio && (
                <div className="space-y-3 pt-2 text-sm sm:text-base text-slate-200 leading-relaxed border-t border-white/10 animate-in fade-in duration-300">
                  <p>{PERSONAL_INFO.bioParagraphs[1]}</p>
                  <p>{PERSONAL_INFO.bioParagraphs[2]}</p>
                  <p className="font-medium text-cyan-200/90 italic">
                    "{PERSONAL_INFO.philosophy}"
                  </p>
                </div>
              )}

              <button
                type="button"
                id="hero-toggle-bio"
                onClick={() => setShowFullBio(!showFullBio)}
                className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-cyan-400 hover:text-cyan-300 transition-colors pt-1"
              >
                {showFullBio ? (
                  <>
                    <span>Show Less</span>
                    <ChevronUp className="w-3.5 h-3.5" />
                  </>
                ) : (
                  <>
                    <span>Read Complete Professional Bio</span>
                    <ChevronDown className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>

            {/* Core Triple-Threat / Quad Production Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-1">
              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/10 backdrop-blur-md hover:border-cyan-500/40 transition-colors space-y-1">
                <div className="flex items-center gap-2 text-cyan-400">
                  <Camera className="w-4 h-4" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider">Camera &amp; RAW</span>
                </div>
                <p className="text-xs text-slate-300 leading-snug">
                  Certified in Blackmagic, Sony, Panasonic, ARRI, RED, Fuji &amp; Atomos. BRAW &amp; ACES pipelines.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/10 backdrop-blur-md hover:border-teal-500/40 transition-colors space-y-1">
                <div className="flex items-center gap-2 text-teal-400">
                  <Cpu className="w-4 h-4" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider">Virtual Production</span>
                </div>
                <p className="text-xs text-slate-300 leading-snug">
                  Unreal Engine real-time sets, Blackmagic Ultimatte, DeckLink VR &amp; ATEM Mini Pro chroma keying.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/10 backdrop-blur-md hover:border-indigo-500/40 transition-colors space-y-1">
                <div className="flex items-center gap-2 text-indigo-400">
                  <Mic2 className="w-4 h-4" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider">16-Ch Live Sound</span>
                </div>
                <p className="text-xs text-slate-300 leading-snug">
                  16-channel mixing board for concerts, nightclub AV diagnostics, instrument micing &amp; Pro Tools.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/10 backdrop-blur-md hover:border-fuchsia-500/40 transition-colors space-y-1">
                <div className="flex items-center gap-2 text-fuchsia-400">
                  <Film className="w-4 h-4" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider">Post-Production</span>
                </div>
                <p className="text-xs text-slate-300 leading-snug">
                  Avid Media Composer, DaVinci Resolve, Premiere Pro, After Effects &amp; DCP-o-matic theatrical mastering.
                </p>
              </div>
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                type="button"
                id="hero-cta-work"
                onClick={() => onScrollTo('work')}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-black font-semibold text-sm tracking-wide shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
              >
                <span>Watch Reel &amp; Work</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                type="button"
                id="hero-cta-services"
                onClick={() => onScrollTo('services')}
                className="px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-medium text-sm tracking-wide backdrop-blur-md transition-all flex items-center gap-2.5 group"
              >
                <div className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Video className="w-3 h-3" />
                </div>
                <span>Capabilities &amp; Certifications</span>
              </button>

              <button
                type="button"
                id="hero-btn-copy-email"
                onClick={handleCopyEmail}
                className="px-4 py-3.5 rounded-xl bg-slate-900/70 border border-white/10 hover:border-cyan-500/30 text-xs font-mono text-slate-300 hover:text-white transition-all flex items-center gap-2"
                title="Copy Bernard's Email"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{PERSONAL_INFO.email}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Studio Portrait with Camera & Audio HUD */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              
              {/* Outer decorative HUD frame */}
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-cyan-400/80 z-20" />
              <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-cyan-400/80 z-20" />
              <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-cyan-400/80 z-20" />
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-cyan-400/80 z-20" />

              {/* Main Card */}
              <div className="relative rounded-2xl overflow-hidden bg-slate-900/90 border border-white/15 shadow-2xl backdrop-blur-xl group">
                
                {/* HUD Camera Top Bar */}
                <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-4 py-2.5 bg-gradient-to-b from-black/80 to-transparent text-[11px] font-mono text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-red-400 font-bold tracking-wider">LIVE PRODUCTION</span>
                    <span className="text-slate-400">4K &bull; RAW &bull; VIRTUAL</span>
                  </div>
                  <div className="flex items-center gap-2 text-cyan-300">
                    <span>TC</span>
                    <span className="bg-black/50 px-1.5 py-0.5 rounded text-white font-semibold">
                      {timecode}
                    </span>
                  </div>
                </div>

                {/* Portrait Photo */}
                <div className="relative aspect-[4/5] overflow-hidden bg-slate-950">
                  <img
                    src={PERSONAL_INFO.heroImage}
                    alt="Bernard Mathis (Bstar) - Technology & Media Production Professional"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95 contrast-105"
                  />

                  {/* Framing Overlay */}
                  <div className="absolute inset-0 pointer-events-none opacity-20 group-hover:opacity-50 transition-opacity">
                    <div className="absolute inset-x-8 top-1/3 h-[1px] bg-cyan-400/40" />
                    <div className="absolute inset-x-8 top-2/3 h-[1px] bg-cyan-400/40" />
                    <div className="absolute inset-y-8 left-1/3 w-[1px] bg-cyan-400/40" />
                    <div className="absolute inset-y-8 left-2/3 w-[1px] bg-cyan-400/40" />
                    <div className="absolute inset-6 border border-cyan-400/30 rounded" />
                  </div>

                  {/* Quick Play Trigger for Feature Reel */}
                  <button
                    type="button"
                    onClick={() => onPlayVideo(featuredReel)}
                    className="absolute inset-0 flex items-center justify-center group/btn focus:outline-none"
                    aria-label="Play Featured Reel"
                  >
                    <div className="w-16 h-16 rounded-full bg-cyan-500/85 backdrop-blur-md text-black flex items-center justify-center shadow-xl shadow-cyan-500/40 group-hover/btn:scale-110 group-hover/btn:bg-cyan-400 transition-all">
                      <Play className="w-7 h-7 fill-current ml-1" />
                    </div>
                  </button>
                </div>

                {/* HUD Producer Specs Strip */}
                <div className="p-4 bg-[#0a0e19] border-t border-white/10 space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-cyan-400 font-semibold">TECHNICAL DEPTH</span>
                    <span className="text-slate-400">Studio &bull; Live &bull; Post</span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 pt-1 text-[11px] font-mono text-slate-300 text-center">
                    <div className="bg-white/5 py-1 px-1.5 rounded border border-white/5">
                      <div className="text-[10px] text-slate-400">CAMERA</div>
                      <div className="font-semibold text-white">7x Certified</div>
                    </div>
                    <div className="bg-white/5 py-1 px-1.5 rounded border border-white/5">
                      <div className="text-[10px] text-slate-400">LIVE AUDIO</div>
                      <div className="font-semibold text-white">16-Ch Mixing</div>
                    </div>
                    <div className="bg-white/5 py-1 px-1.5 rounded border border-white/5">
                      <div className="text-[10px] text-slate-400">VIRTUAL</div>
                      <div className="font-semibold text-white">Unreal &bull; ATEM</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-slate-500 text-xs font-mono">
        <span>EXPLORE REEL & WORK</span>
        <div className="w-4 h-7 rounded-full border border-slate-700 flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-cyan-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

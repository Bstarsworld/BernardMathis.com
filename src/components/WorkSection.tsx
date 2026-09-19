import React, { useState } from 'react';
import { WORK_ITEMS, PRODUCTION_STILLS, PERSONAL_INFO } from '../data/portfolioData';
import { WorkItem, ProductionStill } from '../types';
import { ColorGradeComparator } from './ColorGradeComparator';
import { 
  Play, 
  Sparkles, 
  Layers, 
  Film, 
  Palette, 
  ExternalLink, 
  Camera, 
  Maximize2,
  Info,
  CheckCircle2,
  Tv,
  Mic2,
  Video,
  X
} from 'lucide-react';

interface WorkSectionProps {
  onPlayVideo: (item: WorkItem) => void;
}

export const WorkSection: React.FC<WorkSectionProps> = ({ onPlayVideo }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'music-videos' | 'podcasts-series' | 'explainers-shorts' | 'color-post'>('all');
  const [selectedStill, setSelectedStill] = useState<ProductionStill | null>(null);

  const filteredItems = activeFilter === 'all' 
    ? WORK_ITEMS 
    : WORK_ITEMS.filter((item) => item.category === activeFilter);

  const sourTruth = WORK_ITEMS.find((w) => w.id === 'sour-truth-podcast');
  const scienceViolet = WORK_ITEMS.find((w) => w.id === 'science-with-violet');
  const losPilot = WORK_ITEMS.find((w) => w.id === 'los-tv-pilot');

  return (
    <section id="work" className="relative py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider">
              <Film className="w-4 h-4" />
              <span>Directing, Cinematography & Editorial</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              Filmmaking & Production Reel
            </h2>
            <p className="text-slate-400 text-sm sm:text-base font-normal max-w-2xl">
              From original narrative series and music videos to live multicam artist interview podcasts and educational content — directed, filmed on Panasonic GH6 (V-Log 4K / ProRes RAW), and cut with broadcast pacing in DaVinci Resolve.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-slate-900/80 border border-white/10 backdrop-blur-md">
            <button
              type="button"
              id="filter-btn-all"
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                activeFilter === 'all'
                  ? 'bg-cyan-500 text-black font-bold shadow-md shadow-cyan-500/20'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              All Work ({WORK_ITEMS.length})
            </button>
            <button
              type="button"
              id="filter-btn-podcasts"
              onClick={() => setActiveFilter('podcasts-series')}
              className={`px-3.5 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                activeFilter === 'podcasts-series'
                  ? 'bg-cyan-500 text-black font-bold shadow-md shadow-cyan-500/20'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Podcasts & Series
            </button>
            <button
              type="button"
              id="filter-btn-music-videos"
              onClick={() => setActiveFilter('music-videos')}
              className={`px-3.5 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                activeFilter === 'music-videos'
                  ? 'bg-cyan-500 text-black font-bold shadow-md shadow-cyan-500/20'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Music Videos
            </button>
            <button
              type="button"
              id="filter-btn-explainers"
              onClick={() => setActiveFilter('explainers-shorts')}
              className={`px-3.5 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                activeFilter === 'explainers-shorts'
                  ? 'bg-cyan-500 text-black font-bold shadow-md shadow-cyan-500/20'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Explainers & Talks
            </button>
            <button
              type="button"
              id="filter-btn-color"
              onClick={() => setActiveFilter('color-post')}
              className={`px-3.5 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                activeFilter === 'color-post'
                  ? 'bg-cyan-500 text-black font-bold shadow-md shadow-cyan-500/20'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Color Science & Post
            </button>
          </div>
        </div>

        {/* Highlight Showcase: Original Shows & Series */}
        {(activeFilter === 'all' || activeFilter === 'podcasts-series') && (
          <div className="space-y-6">
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>Original Series & Pilots in Development</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* 1. The Sour Truth */}
              {sourTruth && (
                <div className="rounded-3xl bg-slate-900/80 border border-cyan-500/30 p-6 flex flex-col justify-between space-y-4 hover:border-cyan-400/60 transition-all shadow-xl">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                        Interview Podcast
                      </span>
                      <Mic2 className="w-4 h-4 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-display font-bold text-white">
                      The Sour Truth
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      An in-depth interview podcast where Bstar sits down with independent music artists to dissect their creative processes, independent hustle, and real-world music industry insights.
                    </p>
                    <div className="pt-1 text-[11px] font-mono text-cyan-300">
                      Workflow: ATEM Mini live multicam switching, GH6 cameras, and dialogue pacing in DaVinci Resolve.
                    </div>
                  </div>

                  <div 
                    onClick={() => onPlayVideo(sourTruth)}
                    className="relative aspect-video rounded-xl overflow-hidden bg-black cursor-pointer group"
                  >
                    <img
                      src={sourTruth.thumbnailUrl}
                      alt={sourTruth.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-cyan-500 text-black flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-4 h-4 fill-current ml-0.5" />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* 2. Science with Violet */}
              {scienceViolet && (
                <div className="rounded-3xl bg-slate-900/80 border border-teal-500/30 p-6 flex flex-col justify-between space-y-4 hover:border-teal-400/60 transition-all shadow-xl">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-teal-500/10 text-teal-300 border border-teal-500/20">
                        Kids Educational Series
                      </span>
                      <Sparkles className="w-4 h-4 text-teal-400" />
                    </div>
                    <h3 className="text-xl font-display font-bold text-white">
                      Science with Violet
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      A vibrant, educational kids' science series featuring Bstar's daughter Violet. Combining hands-on experiments, family-friendly humor, and colorful visual animations.
                    </p>
                    <div className="pt-1 text-[11px] font-mono text-teal-300">
                      Workflow: Shot on Panasonic GH6, animated in DaVinci Fusion, mixed for high vocal clarity.
                    </div>
                  </div>

                  <div 
                    onClick={() => onPlayVideo(scienceViolet)}
                    className="relative aspect-video rounded-xl overflow-hidden bg-black cursor-pointer group"
                  >
                    <img
                      src={scienceViolet.thumbnailUrl}
                      alt={scienceViolet.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-teal-400 text-black flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-4 h-4 fill-current ml-0.5" />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* 3. LO'S Pilot */}
              {losPilot && (
                <div className="rounded-3xl bg-slate-900/80 border border-indigo-500/30 p-6 flex flex-col justify-between space-y-4 hover:border-indigo-400/60 transition-all shadow-xl">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                        Original TV Pilot
                      </span>
                      <Tv className="w-4 h-4 text-indigo-400" />
                    </div>
                    <h3 className="text-xl font-display font-bold text-white">
                      "LO'S" (In Development)
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      An original narrative television drama series in active development. Explores authentic urban character arcs, tension, and cinematic visual language.
                    </p>
                    <div className="pt-1 text-[11px] font-mono text-indigo-300">
                      Workflow: Narrative script development, GH6 V-Log exposure tests, and cinematic color look-books.
                    </div>
                  </div>

                  <div 
                    onClick={() => onPlayVideo(losPilot)}
                    className="relative aspect-video rounded-xl overflow-hidden bg-black cursor-pointer group"
                  >
                    <img
                      src={losPilot.thumbnailUrl}
                      alt={losPilot.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-indigo-400 text-black flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-4 h-4 fill-current ml-0.5" />
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        )}

        {/* Video Grid for Active Filter */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white tracking-wide">
              {activeFilter === 'all' && "All Productions"}
              {activeFilter === 'music-videos' && "Music Videos & Visualizers"}
              {activeFilter === 'podcasts-series' && "Podcasts & Original Series"}
              {activeFilter === 'explainers-shorts' && "Explainers, Masterclasses & Skits"}
              {activeFilter === 'color-post' && "Color Science & Post-Production"}
            </h3>
            <span className="text-xs font-mono text-slate-400">
              Showing {filteredItems.length} videos
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group rounded-2xl bg-slate-900/60 border border-white/10 hover:border-cyan-500/40 backdrop-blur-md overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10"
              >
                {/* Thumbnail Stage */}
                <div 
                  onClick={() => onPlayVideo(item)}
                  className="relative aspect-video w-full bg-slate-950 cursor-pointer overflow-hidden"
                >
                  <img
                    src={item.thumbnailUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-cyan-500/90 text-black flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-cyan-400 transition-all">
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-semibold uppercase bg-black/80 backdrop-blur-md text-cyan-400 border border-white/10">
                      {item.categoryLabel}
                    </span>
                  </div>
                </div>

                {/* Card Info Body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h4 
                      onClick={() => onPlayVideo(item)}
                      className="text-base font-display font-bold text-white hover:text-cyan-300 cursor-pointer transition-colors line-clamp-1"
                    >
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="space-y-3 pt-2 border-t border-white/5">
                    {/* Software Tools */}
                    <div className="flex flex-wrap gap-1.5">
                      {item.software.map((sw) => (
                        <span
                          key={sw}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-slate-300 border border-white/5"
                        >
                          {sw}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-1 text-xs font-mono">
                      <button
                        type="button"
                        onClick={() => onPlayVideo(item)}
                        className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1 transition-colors"
                      >
                        <span>Watch Video</span>
                        <Play className="w-3 h-3 fill-current" />
                      </button>
                      <a
                        href={`https://www.youtube.com/watch?v=${item.videoId}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
                      >
                        <span>YT</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Interactive Color Science & Sensor Comparator */}
        <div id="color-grading" className="pt-8">
          <ColorGradeComparator />
        </div>

        {/* Production Stills & Field Rigging */}
        <div className="space-y-6 pt-10 border-t border-white/10">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider mb-1">
                <Camera className="w-4 h-4" />
                <span>On Set & Rigging</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-wide">
                Production Stills & Field Rigging
              </h3>
            </div>
            <span className="text-xs font-mono text-slate-400 hidden sm:inline-block">
              Click any still to enlarge
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {PRODUCTION_STILLS.map((still) => (
              <div
                key={still.id}
                onClick={() => setSelectedStill(still)}
                className="group relative aspect-square rounded-2xl overflow-hidden bg-slate-900 border border-white/10 hover:border-cyan-500/40 cursor-pointer shadow-lg transition-all"
              >
                <img
                  src={still.url}
                  alt={still.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                  <p className="text-[11px] font-mono text-slate-200 line-clamp-2">
                    {still.caption}
                  </p>
                </div>
                <div className="absolute top-2 right-2 p-1.5 rounded-lg bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Lightbox for Production Stills */}
      {selectedStill && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedStill(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-[#0d121f] rounded-2xl border border-white/20 overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-slate-900/60">
              <span className="text-xs font-mono text-cyan-400">PRODUCTION ARCHIVE</span>
              <button
                type="button"
                onClick={() => setSelectedStill(null)}
                className="p-1 rounded text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="relative max-h-[75vh] flex items-center justify-center bg-black">
              <img
                src={selectedStill.url}
                alt={selectedStill.caption}
                className="max-h-[75vh] w-auto object-contain"
              />
            </div>
            <div className="p-4 bg-slate-900/80 border-t border-white/10">
              <p className="text-sm font-mono text-slate-200">
                {selectedStill.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

import React, { useEffect } from 'react';
import { WorkItem } from '../types';
import { X, ExternalLink, ChevronLeft, ChevronRight, Play, Film, Sparkles } from 'lucide-react';

interface VideoModalProps {
  item: WorkItem | null;
  items: WorkItem[];
  onClose: () => void;
  onSelect: (item: WorkItem) => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  item,
  items,
  onClose,
  onSelect,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (!item) return;

      const currentIndex = items.findIndex((i) => i.id === item.id);
      if (e.key === 'ArrowRight' && currentIndex < items.length - 1) {
        onSelect(items[currentIndex + 1]);
      } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
        onSelect(items[currentIndex - 1]);
      }
    };

    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, items, onClose, onSelect]);

  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);
  const prevItem = currentIndex > 0 ? items[currentIndex - 1] : null;
  const nextItem = currentIndex < items.length - 1 ? items[currentIndex + 1] : null;

  return (
    <div
      id="video-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div 
        className="relative w-full max-w-5xl rounded-2xl bg-[#0d121f] border border-white/10 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10 bg-slate-900/60">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
              <Sparkles className="w-3 h-3" />
              {item.categoryLabel}
            </span>
            <span className="hidden sm:inline-block text-xs font-mono text-slate-400">
              {currentIndex + 1} of {items.length}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={`https://www.youtube.com/watch?v=${item.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-mono text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
              title="Open video on YouTube"
            >
              <span>YouTube</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <button
              type="button"
              id="modal-close-btn"
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Video Player Container */}
        <div className="relative w-full bg-black flex-1 min-h-[300px] sm:min-h-[440px]">
          <iframe
            id={`modal-iframe-${item.videoId}`}
            src={`https://www.youtube-nocookie.com/embed/${item.videoId}?autoplay=1&rel=0&modestbranding=1`}
            title={item.title}
            className="w-full h-full absolute inset-0 border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        {/* Info & Details Footer */}
        <div className="p-5 sm:p-6 bg-[#0a0e1a] border-t border-white/10 overflow-y-auto">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div className="flex-1 space-y-2">
              <h3 className="text-lg sm:text-xl font-display font-bold text-white tracking-wide">
                {item.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {item.description}
              </p>
              {item.detailedNote && (
                <p className="text-xs text-cyan-300/90 font-mono italic bg-cyan-950/30 p-2.5 rounded-lg border border-cyan-500/20">
                  {item.detailedNote}
                </p>
              )}

              {/* Tags & Software */}
              <div className="pt-2 flex flex-wrap items-center gap-1.5">
                <span className="text-[11px] font-mono text-slate-400 mr-1">Tools:</span>
                {item.software.map((sw) => (
                  <span
                    key={sw}
                    className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-white/5 border border-white/10 text-slate-200"
                  >
                    {sw}
                  </span>
                ))}
                {item.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-cyan-500/10 text-cyan-300"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </div>

            {/* Navigation Next/Prev buttons */}
            <div className="flex items-center gap-2 self-end sm:self-center">
              <button
                type="button"
                id="modal-prev-video-btn"
                disabled={!prevItem}
                onClick={() => prevItem && onSelect(prevItem)}
                className={`flex items-center gap-1 px-3 py-2 rounded-lg text-xs font-mono border transition-all ${
                  prevItem
                    ? 'border-white/10 bg-white/5 text-slate-200 hover:bg-white/10 hover:border-cyan-500/30'
                    : 'opacity-30 border-transparent text-slate-600 cursor-not-allowed'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Prev</span>
              </button>
              <button
                type="button"
                id="modal-next-video-btn"
                disabled={!nextItem}
                onClick={() => nextItem && onSelect(nextItem)}
                className={`flex items-center gap-1 px-3 py-2 rounded-lg text-xs font-mono border transition-all ${
                  nextItem
                    ? 'border-white/10 bg-white/5 text-slate-200 hover:bg-white/10 hover:border-cyan-500/30'
                    : 'opacity-30 border-transparent text-slate-600 cursor-not-allowed'
                }`}
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

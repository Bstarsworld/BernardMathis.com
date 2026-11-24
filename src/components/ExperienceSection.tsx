import React from 'react';
import { EXPERIENCE_ITEMS, PERSONAL_INFO } from '../data/portfolioData';
import { 
  Building2, 
  Sparkles, 
  ExternalLink, 
  ShieldCheck, 
  Server
} from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="relative py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-3 max-w-3xl">
          <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider">
            <Building2 className="w-4 h-4" />
            <span>Professional Background &amp; Company</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Background &amp; Enterprise
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Operating as Intrepid Cloud through Intrepid Media Giant, LLC in the Los Angeles area.
          </p>
        </div>

        {/* Studio & Enterprise Banner (Intrepid Cloud - strictly 2 sentences) */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-slate-900 to-indigo-950/40 border border-cyan-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-white font-display font-bold text-base flex items-center gap-2">
                <span>{PERSONAL_INFO.company}</span>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  {PERSONAL_INFO.brand}
                </span>
              </div>
              <p className="text-xs text-slate-300 font-mono mt-1 max-w-2xl">
                {PERSONAL_INFO.cloudSummary}
              </p>
            </div>
          </div>

          <a
            href={PERSONAL_INFO.domains.cloud}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-cyan-300 hover:text-white transition-all flex items-center gap-1.5 whitespace-nowrap self-start sm:self-center"
          >
            <Server className="w-3.5 h-3.5" />
            <span>intrepidcloud.net</span>
          </a>
        </div>

        {/* Experience Cards Grid */}
        <div className="space-y-8">
          {EXPERIENCE_ITEMS.map((item) => (
            <div
              key={item.id}
              className="relative rounded-3xl border backdrop-blur-xl p-6 sm:p-8 transition-all duration-300 shadow-xl overflow-hidden bg-slate-900/60 border-white/10 hover:border-cyan-500/40"
            >
              {/* Subtle side glow */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Info & Story */}
                <div className={`${item.photoUrl ? 'lg:col-span-7' : 'lg:col-span-12'} space-y-4`}>
                  
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono border bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{item.category}</span>
                    </div>
                    <span className="text-xs font-mono text-slate-400">
                      {item.period}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white tracking-wide">
                      {item.title}
                    </h3>
                    <div className="text-sm font-mono text-cyan-400/90 font-medium mt-0.5">
                      {item.facility}
                    </div>
                  </div>

                  {/* Description Paragraphs */}
                  <div className="space-y-2.5 text-sm leading-relaxed text-slate-300">
                    {item.description.map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>

                  {/* Tools / Hardware Tag Matrix */}
                  <div className="pt-2 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono text-slate-400 mr-1">Tools / Focus:</span>
                    {item.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-slate-200"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Column: Studio Photography */}
                {item.photoUrl && (
                  <div className="lg:col-span-5">
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-black border border-white/15 shadow-2xl group/img">
                      <img
                        src={item.photoUrl}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-700 filter brightness-95"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-mono text-slate-300">
                        <span className="font-semibold text-white">{item.facility}</span>
                        <span className="text-cyan-400">Production Archival</span>
                      </div>
                    </div>
                  </div>
                )}

              </div>
            </div>
          ))}
        </div>

        {/* Intrepid Cloud Services Link */}
        <div className="rounded-2xl bg-gradient-to-r from-cyan-950/40 via-slate-900/60 to-slate-900/90 border border-cyan-500/30 p-6 sm:p-8 backdrop-blur-xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono uppercase tracking-wider font-semibold">
                <Server className="w-4 h-4" />
                <span>Intrepid Cloud Infrastructure</span>
              </div>
              <p className="text-base sm:text-lg text-white font-medium leading-relaxed">
                "{PERSONAL_INFO.cloudSummary}"
              </p>
              <div className="text-xs font-mono text-cyan-300">
                — Bernard Mathis (Bstar) &bull; Intrepid Media Giant, LLC
              </div>
            </div>

            <a
              href={PERSONAL_INFO.domains.cloud}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-xl bg-cyan-500/20 hover:bg-cyan-500 hover:text-black border border-cyan-500/40 text-xs font-mono text-cyan-300 transition-colors flex items-center gap-2 whitespace-nowrap self-start md:self-center"
            >
              <span>Intrepid Cloud Portal</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

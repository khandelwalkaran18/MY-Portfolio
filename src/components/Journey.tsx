import React from 'react';
import { GraduationCap, Code, Layout, Sparkles, Rocket } from 'lucide-react';
import { TIMELINE_JOURNEY } from '../data/portfolioData';

export const Journey: React.FC = () => {
  const getTimelineIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-sky-400" />;
      case 'Code':
        return <Code className="w-5 h-5 text-purple-400" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-cyan-400" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-pink-400" />;
      case 'Rocket':
        return <Rocket className="w-5 h-5 text-emerald-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-sky-400" />;
    }
  };

  return (
    <section id="journey" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-slate-950/40">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-purple-400 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 mb-3">
            Milestones & Progression
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & Development Journey
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-3">
            A chronological timeline of learning, building practical software projects, and developing digital expertise.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mt-4"></div>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-32 space-y-12">
          {TIMELINE_JOURNEY.map((item, idx) => (
            <div key={idx} className="relative pl-8 group">
              
              {/* Year Label for larger screens */}
              <div className="hidden sm:block absolute -left-36 top-0 text-right w-28">
                <span className="text-xs font-mono font-semibold text-slate-400">
                  {item.year}
                </span>
              </div>

              {/* Timeline Node Dot */}
              <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-slate-900 border-2 border-slate-700 flex items-center justify-center group-hover:border-sky-400 group-hover:scale-110 transition-all shadow-md">
                {getTimelineIcon(item.iconName)}
              </div>

              {/* Content Card */}
              <div className="glass-card rounded-2xl p-6 border border-slate-800 hover:border-slate-700 transition-all">
                {/* Year Label for mobile */}
                <span className="sm:hidden text-xs font-mono text-sky-400 font-semibold block mb-1">
                  {item.year}
                </span>

                <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                  <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                    {item.tag}
                  </span>
                </div>

                <h4 className="text-xs font-mono text-sky-400 mb-3">
                  {item.subtitle}
                </h4>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

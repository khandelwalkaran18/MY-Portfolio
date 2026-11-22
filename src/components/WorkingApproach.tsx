import React from 'react';
import { BookOpen, Lightbulb, Cpu, Users, CheckCircle2, Wrench } from 'lucide-react';
import { WORKING_APPROACH } from '../data/portfolioData';

export const WorkingApproach: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-sky-400" />;
      case 'Lightbulb':
        return <Lightbulb className="w-6 h-6 text-amber-400" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-purple-400" />;
      case 'Users':
        return <Users className="w-6 h-6 text-emerald-400" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-6 h-6 text-cyan-400" />;
      case 'Wrench':
        return <Wrench className="w-6 h-6 text-pink-400" />;
      default:
        return <CheckCircle2 className="w-6 h-6 text-sky-400" />;
    }
  };

  return (
    <section id="approach" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-400 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 mb-3">
            Core Principles
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional Working Approach
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-3">
            Guiding philosophies and work ethics that shape how I learn technologies, design software solutions, and collaborate with clients.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full mt-4"></div>
        </div>

        {/* 6 Approach Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WORKING_APPROACH.map((item, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 sm:p-7 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between group hover:shadow-lg hover:shadow-sky-500/5"
            >
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 group-hover:scale-105 transition-transform">
                    {getIcon(item.iconName)}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-slate-500">
                      {item.number}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                      {item.tag}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Value Standard</span>
                <span className="text-sky-400">100% Commitment</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

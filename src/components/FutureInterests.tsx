import React from 'react';
import { Cpu, Sparkles, Bot, RefreshCw, Globe, Terminal, TrendingUp, Palette, ArrowUpRight } from 'lucide-react';
import { FUTURE_INTERESTS } from '../data/portfolioData';

export const FutureInterests: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-sky-400" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-purple-400" />;
      case 'Bot':
        return <Bot className="w-5 h-5 text-cyan-400" />;
      case 'RefreshCw':
        return <RefreshCw className="w-5 h-5 text-emerald-400" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-pink-400" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-amber-400" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-indigo-400" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-rose-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-sky-400" />;
    }
  };

  return (
    <section id="future" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-slate-950/50">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-3">
            Vision & Trajectory
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            What's Next?
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mt-4"></div>
        </div>

        {/* Highlighted Quote Box */}
        <div className="max-w-3xl mx-auto glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 text-center mb-12 shadow-xl shadow-cyan-500/5">
          <p className="text-base sm:text-lg text-slate-200 font-medium italic leading-relaxed">
            "I believe the future belongs to people who can combine technical knowledge with creativity.
            I am continuously working towards becoming a capable developer who can transform ideas into meaningful digital products."
          </p>
          <div className="mt-4 flex items-center justify-center gap-2 text-xs font-mono text-cyan-400">
            <span>— Karan Khandelwal</span>
          </div>
        </div>

        {/* Future Focus Areas Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FUTURE_INTERESTS.map((item, idx) => (
            <div
              key={idx}
              className="glass-card rounded-xl p-5 border border-slate-800 hover:border-slate-700 transition-all hover:-translate-y-1 group"
            >
              <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 inline-block mb-3 group-hover:scale-105 transition-transform">
                {getIcon(item.icon)}
              </div>
              <h3 className="text-sm font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors flex items-center justify-between">
                <span>{item.name}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400" />
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

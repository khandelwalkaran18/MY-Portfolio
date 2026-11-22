import React from 'react';
import { GraduationCap, MapPin, Sparkles, Briefcase, Award, Check } from 'lucide-react';
import { PERSONAL_INFO, ABOUT_CARDS } from '../data/portfolioData';

export const About: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-sky-400" />;
      case 'MapPin':
        return <MapPin className="w-6 h-6 text-cyan-400" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-purple-400" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-emerald-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-sky-400" />;
    }
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-400 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 mb-3">
            Profile & Background
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            A Little About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-purple-500 rounded-full mt-4"></div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Detailed Bio */}
          <div className="lg:col-span-7 glass-card rounded-2xl p-6 sm:p-8 border border-slate-800">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">
                Hi, I'm Karan Khandelwal
              </span>
            </h3>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                I am currently pursuing my <strong className="text-white">B.Tech in Computer Engineering</strong> at{' '}
                <span className="text-sky-300">Indus University, Ahmedabad</span>.
              </p>
              <p>
                I have an interest in Generative AI, web development, Python programming, and digital creativity.
                I enjoy learning by building practical projects and experimenting with modern technologies.
              </p>
              <p>
                Over time, I have worked on different concepts, including e-commerce websites, productivity applications,
                asset management platforms, community websites, Python games, and AI-assisted websites.
              </p>
              <p>
                Apart from programming, I enjoy creating presentations, digital posters, promotional graphics, and AI-assisted content.
              </p>
              <p className="pt-2 text-slate-200 font-medium border-t border-slate-800/80">
                My current focus is to strengthen my technical skills, explore AI-powered development, and provide valuable digital services to clients.
              </p>
            </div>

            {/* Quick Principles Badges */}
            <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap gap-2.5">
              {[
                'Practical Project-Based Learning',
                'AI-Assisted Efficiency',
                'Clean & Structured Web Code',
                'Creative Digital Content',
                'Client Satisfaction First',
              ].map((item, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-slate-900/90 text-slate-300 border border-slate-700/80"
                >
                  <Check className="w-3.5 h-3.5 text-sky-400" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Four Specified Information Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {ABOUT_CARDS.map((card, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl p-5 border border-slate-800 hover:border-slate-700 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 group-hover:scale-105 transition-transform">
                    {getIcon(card.icon)}
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-mono uppercase text-slate-400 block mb-1">
                      {card.title}
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-white mb-1">
                      {card.value}
                    </h4>
                    <p className="text-xs text-slate-400">
                      {card.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

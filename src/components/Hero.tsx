import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Download, CheckCircle, Code, Cpu, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [currentTagIndex, setCurrentTagIndex] = useState(0);
  const [useRealPhoto, setUseRealPhoto] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagIndex((prev) => (prev + 1) % PERSONAL_INFO.heroTaglines.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Lighting & Subtle Tech Grids */}
      <div className="absolute inset-0 bg-hero-glow pointer-events-none"></div>
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading & Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs text-slate-300 mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="font-medium">{PERSONAL_INFO.availability}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-4">
              Building the Future with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400">
                Code, AI & Creativity.
              </span>
            </h1>

            {/* Animated Dynamic Text */}
            <div className="h-10 sm:h-12 flex items-center mb-6">
              <span className="text-slate-400 text-lg sm:text-2xl font-mono mr-2">I am an</span>
              <span className="text-sky-300 font-mono text-lg sm:text-2xl font-semibold border-b-2 border-sky-400 pb-0.5 animate-fadeIn">
                {PERSONAL_INFO.heroTaglines[currentTagIndex]}
              </span>
            </div>

            {/* Introduction Paragraph */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8">
              {PERSONAL_INFO.heroIntro}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 transition-all text-sm sm:text-base group"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 hover:text-white border border-slate-700/80 hover:border-slate-600 transition-all text-sm sm:text-base shadow-sm"
              >
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span>Let's Collaborate</span>
              </a>

              <button
                onClick={onOpenResume}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-slate-300 bg-transparent hover:bg-slate-800/50 hover:text-sky-400 border border-slate-800 hover:border-sky-500/30 transition-all text-sm sm:text-base"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Quick Tech Highlights Strip */}
            <div className="mt-10 pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-sky-400" />
                <span>B.Tech Computer Engineering (Indus Univ.)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-purple-400" />
                <span>Python & Generative AI Solutions</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Freelance Digital Services</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Portrait & Developer Card */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-full max-w-md">
              
              {/* Outer Glowing Border */}
              <div className="relative rounded-3xl p-1 bg-gradient-to-br from-sky-500/40 via-purple-500/30 to-indigo-600/40 shadow-2xl shadow-indigo-500/10">
                <div className="bg-[#0B0F19] rounded-[22px] p-6 overflow-hidden relative">
                  
                  {/* Card Header & Avatar Area */}
                  <div className="relative flex flex-col items-center text-center mb-6">
                    
                    {/* Portrait Placeholder Container */}
                    <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden mb-4 border border-slate-700/80 shadow-inner group">
                      {useRealPhoto ? (
                        <img
                          src="/images/profile.jpg"
                          alt="Karan Khandelwal"
                          className="w-full h-full object-cover object-top"
                          onError={() => setUseRealPhoto(false)}
                        />
                      ) : (
                        /* Professional Portrait Placeholder as instructed */
                        <div className="w-full h-full bg-gradient-to-br from-slate-900 via-[#111827] to-slate-900 flex flex-col items-center justify-center p-4 text-center">
                          <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-sky-500/20 to-purple-500/20 border border-sky-400/30 flex items-center justify-center mb-2">
                            <span className="font-mono text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-300">
                              KK
                            </span>
                          </div>
                          <span className="text-xs font-medium text-slate-300">Professional Portrait</span>
                          <span className="text-[10px] text-slate-500 font-mono mt-0.5">Replaceable Image Placeholder</span>
                        </div>
                      )}

                      {/* Photo Toggle Pill (Transparent option to switch between placeholder and provided photo) */}
                      <button
                        onClick={() => setUseRealPhoto(!useRealPhoto)}
                        className="absolute bottom-2 right-2 px-2 py-1 text-[10px] font-mono rounded bg-slate-900/90 text-sky-400 border border-sky-500/30 hover:bg-slate-800 transition-colors"
                        title="Toggle placeholder or provided photograph"
                      >
                        {useRealPhoto ? 'Use Placeholder' : 'Show Photo'}
                      </button>
                    </div>

                    {/* Developer Name & Title */}
                    <h3 className="text-xl font-bold text-white mb-1">
                      {PERSONAL_INFO.fullName}
                    </h3>
                    <p className="text-xs font-mono text-sky-400 mb-3">
                      B.Tech Computer Engineering • Ahmedabad
                    </p>

                    {/* Mini Role Tags */}
                    <div className="flex flex-wrap justify-center gap-1.5 mb-2">
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-sky-500/10 text-sky-300 border border-sky-500/20">
                        Generative AI
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-purple-500/10 text-purple-300 border border-purple-500/20">
                        Web Development
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                        Python
                      </span>
                    </div>

                  </div>

                  {/* Terminal-inspired Mini Status Box */}
                  <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-300 space-y-1.5">
                    <div className="flex items-center justify-between text-slate-400 text-[11px] pb-1 border-b border-slate-800">
                      <span>status.sh</span>
                      <span className="text-emerald-400 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                        ready
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-300">
                      <span className="text-sky-400">$</span> focus = ["GenAI", "WebApps", "CreativeTech"]
                    </p>
                    <p className="text-[11px] text-slate-400">
                      <span className="text-purple-400">&gt;</span> Indus University, Ahmedabad (3rd Year)
                    </p>
                  </div>

                </div>
              </div>

              {/* Floating Tech Badges */}
              <div className="absolute -top-4 -left-4 p-2.5 rounded-xl glass-card border border-sky-500/30 text-sky-400 shadow-lg hidden sm:flex items-center gap-2 text-xs font-medium animate-float-slow">
                <Code className="w-4 h-4 text-sky-400" />
                <span>Modern Web Code</span>
              </div>

              <div className="absolute -bottom-4 -right-4 p-2.5 rounded-xl glass-card border border-purple-500/30 text-purple-300 shadow-lg hidden sm:flex items-center gap-2 text-xs font-medium animate-float-slow" style={{ animationDelay: '3s' }}>
                <Cpu className="w-4 h-4 text-purple-400" />
                <span>AI-Assisted Workflows</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

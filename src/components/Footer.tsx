import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, ExternalLink, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#07080D] border-t border-slate-800/80 pt-16 pb-12 px-4 sm:px-6 lg:px-8 text-slate-400">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/60">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-500 to-purple-600 p-[1px]">
                <div className="w-full h-full bg-[#0B0F19] rounded-xl flex items-center justify-center font-bold text-sky-400 font-mono text-sm">
                  KK
                </div>
              </div>
              <span className="font-bold text-lg text-white">
                {PERSONAL_INFO.fullName}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              "Building digital experiences through AI, code, and creativity."
            </p>

            <p className="text-xs text-slate-500 font-mono">
              B.Tech Computer Engineering • Indus University, Ahmedabad
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {['Home', 'About', 'Skills', 'Services', 'Projects', 'Certifications', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-slate-400 hover:text-sky-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Connect & Hire
            </h4>
            <div className="space-y-2 text-xs">
              <a
                href={PERSONAL_INFO.socialLinks.fiverr}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2 rounded-lg bg-slate-900/60 hover:bg-slate-800 border border-slate-800/80 text-slate-300 hover:text-white transition-colors"
              >
                <span>Fiverr Profile (Placeholder)</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
              </a>

              <a
                href={PERSONAL_INFO.socialLinks.freelancer}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2 rounded-lg bg-slate-900/60 hover:bg-slate-800 border border-slate-800/80 text-slate-300 hover:text-white transition-colors"
              >
                <span>Freelancer Profile (Placeholder)</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
              </a>

              <a
                href={PERSONAL_INFO.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2 rounded-lg bg-slate-900/60 hover:bg-slate-800 border border-slate-800/80 text-slate-300 hover:text-white transition-colors"
              >
                <span>GitHub Repository</span>
                <Github className="w-3.5 h-3.5 text-slate-500" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center justify-between p-2 rounded-lg bg-slate-900/60 hover:bg-slate-800 border border-slate-800/80 text-slate-300 hover:text-white transition-colors"
              >
                <span>{PERSONAL_INFO.email}</span>
                <Mail className="w-3.5 h-3.5 text-slate-500" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {currentYear} {PERSONAL_INFO.fullName}. All rights reserved.
          </div>

          <div className="flex items-center gap-1 text-slate-400">
            <span>Crafted with React, TypeScript & Tailwind CSS</span>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
            aria-label="Scroll back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

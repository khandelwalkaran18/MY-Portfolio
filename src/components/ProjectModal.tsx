import React from 'react';
import { X, CheckCircle, ExternalLink, Github, Layers, Wrench, Code } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div
        className="glass-card rounded-2xl border border-slate-700 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="sticky top-0 z-10 glass-nav px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20">
              {project.category}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Title & Headline */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Vehicle Roster (Special highlight for Racing Game) */}
          {project.vehicleRoster && (
            <div className="p-4 rounded-xl bg-slate-900/90 border border-amber-500/30">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 mb-2">
                Included Vehicle Roster & Tuning
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {project.vehicleRoster.map((vehicle, vIdx) => (
                  <div
                    key={vIdx}
                    className="p-2 rounded bg-slate-800/80 text-xs font-mono text-slate-200 border border-slate-700/80 flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                    <span>{vehicle}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Features */}
          <div>
            <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-sky-400 mb-3 flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              Key Features & Implementation Highlights
            </h3>
            <div className="space-y-2.5">
              {project.keyFeatures.map((feature, fIdx) => (
                <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <span className="text-sky-400 font-bold shrink-0 mt-0.5">•</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Stack */}
          <div>
            <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-purple-400 mb-3 flex items-center gap-2">
              <Code className="w-4 h-4" />
              Technologies & Architecture
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-900 text-slate-200 border border-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Notice on Mockup & Links */}
          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400">
            <p>
              Note: Project links and repositories are maintained as editable references in development.
              This concept illustrates practical design patterns and software architectural exploration.
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-slate-950/80 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-slate-400 font-mono">
            Karan Khandelwal • Portfolio Showcase
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub Repository</span>
            </a>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-sky-500 hover:bg-sky-400 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

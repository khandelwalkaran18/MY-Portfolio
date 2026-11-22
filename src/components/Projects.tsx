import React, { useState } from 'react';
import {
  ExternalLink,
  Github,
  Layers,
  Sparkles,
  Gamepad2,
  ShoppingCart,
  CheckSquare,
  Building2,
  Car,
  Bot,
  Info,
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectItem } from '../types';

interface ProjectsProps {
  onOpenProjectModal: (project: ProjectItem) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenProjectModal }) => {
  const [selectedTag, setSelectedTag] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'ecommerce', label: 'E-Commerce' },
    { id: 'productivity', label: 'Productivity' },
    { id: 'python', label: 'Python & Games' },
    { id: 'ai', label: 'AI-Assisted' },
  ];

  const filteredProjects =
    selectedTag === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.categoryTag === selectedTag);

  const getProjectGraphic = (project: ProjectItem) => {
    switch (project.id) {
      case 'gym-ecommerce':
        return (
          <div className="w-full h-44 bg-gradient-to-br from-sky-950/70 via-slate-900 to-slate-950 flex flex-col items-center justify-center p-4 relative overflow-hidden border-b border-slate-800">
            <div className="absolute -right-4 -bottom-4 w-28 h-28 bg-sky-500/10 rounded-full blur-xl"></div>
            <ShoppingCart className="w-12 h-12 text-sky-400 mb-2 opacity-90" />
            <span className="text-xs font-mono font-bold text-slate-200 tracking-wider">
              IRONCORE FITNESS STORE
            </span>
            <span className="text-[11px] text-sky-400 font-mono mt-1">
              Catalog • Cart • Workouts
            </span>
            <div className="absolute top-3 right-3 px-2 py-0.5 rounded text-[10px] font-mono bg-sky-500/20 text-sky-300 border border-sky-500/30">
              Illustrative Preview
            </div>
          </div>
        );
      case 'taskmasterpro':
        return (
          <div className="w-full h-44 bg-gradient-to-br from-purple-950/70 via-slate-900 to-slate-950 flex flex-col items-center justify-center p-4 relative overflow-hidden border-b border-slate-800">
            <div className="absolute -left-4 -bottom-4 w-28 h-28 bg-purple-500/10 rounded-full blur-xl"></div>
            <CheckSquare className="w-12 h-12 text-purple-400 mb-2 opacity-90" />
            <span className="text-xs font-mono font-bold text-slate-200 tracking-wider">
              TASKMASTER PRO WORKSPACE
            </span>
            <span className="text-[11px] text-purple-400 font-mono mt-1">
              To-Do • In Progress • Done
            </span>
            <div className="absolute top-3 right-3 px-2 py-0.5 rounded text-[10px] font-mono bg-purple-500/20 text-purple-300 border border-purple-500/30">
              Illustrative Preview
            </div>
          </div>
        );
      case 'assetflow':
        return (
          <div className="w-full h-44 bg-gradient-to-br from-cyan-950/70 via-slate-900 to-slate-950 flex flex-col items-center justify-center p-4 relative overflow-hidden border-b border-slate-800">
            <div className="absolute -right-4 -bottom-4 w-28 h-28 bg-cyan-500/10 rounded-full blur-xl"></div>
            <Building2 className="w-12 h-12 text-cyan-400 mb-2 opacity-90" />
            <span className="text-xs font-mono font-bold text-slate-200 tracking-wider">
              ASSETFLOW REGISTRY
            </span>
            <span className="text-[11px] text-cyan-400 font-mono mt-1">
              Lifecycle • Valuation • QR
            </span>
            <div className="absolute top-3 right-3 px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
              Illustrative Preview
            </div>
          </div>
        );
      case 'community-website':
        return (
          <div className="w-full h-44 bg-gradient-to-br from-emerald-950/70 via-slate-900 to-slate-950 flex flex-col items-center justify-center p-4 relative overflow-hidden border-b border-slate-800">
            <div className="absolute -left-4 -bottom-4 w-28 h-28 bg-emerald-500/10 rounded-full blur-xl"></div>
            <Layers className="w-12 h-12 text-emerald-400 mb-2 opacity-90" />
            <span className="text-xs font-mono font-bold text-slate-200 tracking-wider">
              COMMUNITY CONNECT PORTAL
            </span>
            <span className="text-[11px] text-emerald-400 font-mono mt-1">
              Announcements • Directory • Events
            </span>
            <div className="absolute top-3 right-3 px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              Illustrative Preview
            </div>
          </div>
        );
      case 'python-racing-game':
        return (
          <div className="w-full h-44 bg-gradient-to-br from-amber-950/70 via-slate-900 to-slate-950 flex flex-col items-center justify-center p-4 relative overflow-hidden border-b border-slate-800">
            <div className="absolute -right-4 -bottom-4 w-28 h-28 bg-amber-500/10 rounded-full blur-xl"></div>
            <Gamepad2 className="w-12 h-12 text-amber-400 mb-2 opacity-90" />
            <span className="text-xs font-mono font-bold text-slate-200 tracking-wider">
              2D HIGHWAY SPEED RACING
            </span>
            <span className="text-[11px] text-amber-400 font-mono mt-1">
              Pygame • 5 Vehicles • Leaderboard
            </span>
            <div className="absolute top-3 right-3 px-2 py-0.5 rounded text-[10px] font-mono bg-amber-500/20 text-amber-300 border border-amber-500/30">
              Illustrative Preview
            </div>
          </div>
        );
      case 'ai-car-service':
        return (
          <div className="w-full h-44 bg-gradient-to-br from-pink-950/70 via-slate-900 to-slate-950 flex flex-col items-center justify-center p-4 relative overflow-hidden border-b border-slate-800">
            <div className="absolute -left-4 -bottom-4 w-28 h-28 bg-pink-500/10 rounded-full blur-xl"></div>
            <Bot className="w-12 h-12 text-pink-400 mb-2 opacity-90" />
            <span className="text-xs font-mono font-bold text-slate-200 tracking-wider">
              AI AUTONOMOUS VEHICLE SERVICE
            </span>
            <span className="text-[11px] text-pink-400 font-mono mt-1">
              Multi-Bay Workflow • Telemetry
            </span>
            <div className="absolute top-3 right-3 px-2 py-0.5 rounded text-[10px] font-mono bg-pink-500/20 text-pink-300 border border-pink-500/30">
              Illustrative Preview
            </div>
          </div>
        );
      default:
        return (
          <div className="w-full h-44 bg-slate-900 flex items-center justify-center">
            <Sparkles className="w-10 h-10 text-slate-500" />
          </div>
        );
    }
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-slate-950/30">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-400 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 mb-3">
            Portfolio Showcase
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-3">
            Real implementations and practical concepts spanning web applications, Python development, productivity tools, and AI-assisted architectures.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-purple-500 rounded-full mt-4"></div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedTag(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedTag === tab.id
                  ? 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-lg shadow-sky-500/25'
                  : 'bg-slate-900/90 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl overflow-hidden border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between group hover:shadow-xl hover:shadow-sky-500/10"
            >
              <div>
                {/* Visual Graphic Header */}
                {getProjectGraphic(project)}

                {/* Card Content */}
                <div className="p-6">
                  {/* Category Pill */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-medium text-sky-400">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                    {project.shortDescription}
                  </p>

                  {/* Vehicle Roster (Special highlight for Racing Game) */}
                  {project.vehicleRoster && (
                    <div className="mb-4 p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-[11px] font-mono text-slate-300">
                      <span className="text-amber-400 font-semibold block mb-1">
                        5 Selectable Vehicles:
                      </span>
                      <span>{project.vehicleRoster.join(' • ')}</span>
                    </div>
                  )}

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 4).map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-slate-500">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Actions Footer */}
              <div className="px-6 pb-6 pt-2 border-t border-slate-800/60 flex items-center justify-between">
                <button
                  onClick={() => onOpenProjectModal(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors"
                >
                  <Info className="w-3.5 h-3.5" />
                  <span>View Details</span>
                </button>

                <div className="flex items-center space-x-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800 transition-colors"
                    title="View GitHub Repository (Editable Link)"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => onOpenProjectModal(project)}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
                  >
                    <span>Overview</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

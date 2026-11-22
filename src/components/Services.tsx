import React from 'react';
import {
  FileText,
  Palette,
  Globe,
  Sparkles,
  Presentation,
  Video,
  Megaphone,
  CheckCircle,
  ArrowRight,
  UtensilsCrossed,
  Store,
  Rocket,
  ShoppingCart,
  UserCheck,
} from 'lucide-react';
import { SERVICES, TARGET_CLIENTS } from '../data/portfolioData';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectService: (service: ServiceItem) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileText':
        return <FileText className="w-6 h-6 text-sky-400" />;
      case 'Palette':
        return <Palette className="w-6 h-6 text-purple-400" />;
      case 'Globe':
        return <Globe className="w-6 h-6 text-cyan-400" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-pink-400" />;
      case 'Presentation':
        return <Presentation className="w-6 h-6 text-amber-400" />;
      case 'Video':
        return <Video className="w-6 h-6 text-indigo-400" />;
      case 'Megaphone':
        return <Megaphone className="w-6 h-6 text-emerald-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-sky-400" />;
    }
  };

  const getClientIcon = (iconName: string) => {
    switch (iconName) {
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-4 h-4 text-amber-400" />;
      case 'Store':
        return <Store className="w-4 h-4 text-sky-400" />;
      case 'Rocket':
        return <Rocket className="w-4 h-4 text-purple-400" />;
      case 'ShoppingCart':
        return <ShoppingCart className="w-4 h-4 text-pink-400" />;
      case 'UserCheck':
        return <UserCheck className="w-4 h-4 text-emerald-400" />;
      default:
        return <Rocket className="w-4 h-4 text-sky-400" />;
    }
  };

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-400 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 mb-3">
            Client Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Services I Offer
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-3">
            Combining programming skills, modern AI workflows, and digital design to create value for businesses, food establishments, and startups.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full mt-4"></div>
        </div>

        {/* Target Clients Banner */}
        <div className="glass-card rounded-2xl p-6 border border-slate-800 mb-14">
          <div className="text-center mb-4">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Tailored Solutions For Diverse Clients
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {TARGET_CLIENTS.map((client, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/80 flex flex-col items-center text-center hover:border-slate-700 transition-all"
              >
                <div className="p-2 rounded-lg bg-slate-800/60 mb-2">
                  {getClientIcon(client.icon)}
                </div>
                <h4 className="text-xs sm:text-sm font-semibold text-white mb-0.5">
                  {client.name}
                </h4>
                <p className="text-[11px] text-slate-400 line-clamp-2">
                  {client.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 7 Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="glass-card rounded-2xl p-6 sm:p-7 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between group hover:shadow-xl hover:shadow-sky-500/5"
            >
              <div>
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 group-hover:scale-105 transition-transform">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-slate-500">
                      {service.number}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                      {service.badge}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5 group-hover:text-sky-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs font-mono text-sky-400 mb-3">
                  {service.tagline}
                </p>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Service Features */}
                <div className="space-y-2 mb-6">
                  <span className="text-[11px] font-mono uppercase text-slate-400 tracking-wider block">
                    What's Included:
                  </span>
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer with CTA */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div className="text-[11px] text-slate-400 font-mono">
                  Custom quote per scope
                </div>
                <button
                  onClick={() => onSelectService(service)}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold text-sky-400 hover:text-white bg-sky-500/10 hover:bg-sky-500 border border-sky-500/20 hover:border-sky-500 transition-all"
                >
                  <span>Inquire</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

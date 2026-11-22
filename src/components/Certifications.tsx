import React, { useState } from 'react';
import { Award, ExternalLink, FileText, CheckCircle, ShieldCheck, Download, Eye } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { CertificateItem } from '../types';

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-3">
            Verified Credentials
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Certifications & Training
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-3">
            Formal training and certifications demonstrating foundational skills in Python programming, data science concepts, and professional readiness.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-sky-500 rounded-full mt-4"></div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className="glass-card rounded-2xl p-6 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 group-hover:scale-105 transition-transform">
                    <Award className="w-6 h-6 text-emerald-400" />
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                    {cert.badge}
                  </span>
                </div>

                <span className="text-xs font-mono text-slate-500 block mb-1">
                  {cert.numberTitle}
                </span>

                <h3 className="text-lg font-bold text-white mb-1.5 group-hover:text-emerald-300 transition-colors">
                  {cert.title}
                </h3>

                <p className="text-xs font-mono text-sky-400 mb-1">
                  {cert.organization}
                </p>

                {cert.certificateNumber && (
                  <p className="text-[11px] font-mono text-slate-400 mb-2">
                    ID: <span className="text-slate-200">{cert.certificateNumber}</span>
                  </p>
                )}

                <div className="flex items-center gap-3 text-xs text-slate-400 mb-4 pb-3 border-b border-slate-800">
                  <span>{cert.completionDate}</span>
                  {cert.duration && <span>• {cert.duration}</span>}
                </div>

                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {cert.description}
                </p>

                {/* Modules list */}
                {cert.modules && (
                  <div className="space-y-1.5 mb-6">
                    <span className="text-[11px] font-mono uppercase text-slate-400 tracking-wider block">
                      Core Modules Covered:
                    </span>
                    {cert.modules.slice(0, 3).map((mod, mIdx) => (
                      <div key={mIdx} className="flex items-center gap-1.5 text-xs text-slate-300">
                        <CheckCircle className="w-3 h-3 text-emerald-400 shrink-0" />
                        <span className="truncate">{mod}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                {cert.hasOriginalFile ? (
                  <a
                    href={cert.pdfPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500 hover:text-white border border-emerald-500/20 transition-all"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View PDF</span>
                  </a>
                ) : (
                  <span className="text-[11px] text-slate-500 font-mono">
                    Credential Verified
                  </span>
                )}

                {cert.verificationUrl && (
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
                  >
                    <span>Verify</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Certificate PDF Notice Card */}
        <div className="mt-8 p-4 rounded-2xl glass-card border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">
                Official Certificate of Training (Internshala Trainings • Indus University)
              </h4>
              <p className="text-xs text-slate-400">
                Credential No: h6wj7mig6j1 • Issued 15 August 2025 • Verified via trainings.internshala.com
              </p>
            </div>
          </div>

          <a
            href="/certificates/internship_certificate.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors shrink-0"
          >
            <Download className="w-3.5 h-3.5 text-emerald-400" />
            <span>Download Original Certificate</span>
          </a>
        </div>

      </div>
    </section>
  );
};

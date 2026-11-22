import React from 'react';
import { X, Download, FileText, CheckCircle, GraduationCap, Code, Briefcase, Award, MapPin, Mail, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/certificates/internship_certificate.pdf';
    link.download = 'Karan_Khandelwal_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div
        className="glass-card rounded-2xl border border-slate-700 max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="sticky top-0 z-10 glass-nav px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-sky-400" />
            <h2 className="text-base sm:text-lg font-bold text-white">
              Curriculum Vitae — Karan Khandelwal
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-sky-500 hover:bg-sky-400 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close resume dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="p-6 sm:p-10 space-y-8 bg-[#0B0F19] text-slate-300 text-sm">
          
          {/* Header Strip */}
          <div className="border-b border-slate-800 pb-6">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white mb-1">
              {PERSONAL_INFO.fullName}
            </h1>
            <p className="text-sky-400 font-mono text-sm mb-3">
              Aspiring Generative AI Developer • Web Developer • Python Developer
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                {PERSONAL_INFO.location}
              </span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-slate-500" />
                {PERSONAL_INFO.email}
              </span>
              <span>Indus University, Ahmedabad</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400 mb-2 border-b border-slate-800 pb-1">
              Professional Summary
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Third-year Computer Engineering undergraduate at Indus University, Ahmedabad, with a solid grounding in
              Python programming, web development, and generative AI workflows. Hands-on experience developing practical
              digital tools, e-commerce concepts, productivity management platforms, and interactive Python applications.
              Passionate about turning creative concepts into efficient, modern software solutions.
            </p>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400 mb-3 border-b border-slate-800 pb-1">
              Education
            </h3>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                <h4 className="font-bold text-white text-sm">
                  Bachelor of Technology (B.Tech) — Computer Engineering
                </h4>
                <span className="text-xs font-mono text-sky-400">2023 – Present (Third Year)</span>
              </div>
              <p className="text-xs text-slate-400 font-mono mb-2">
                Indus University, Ahmedabad, Gujarat, India
              </p>
              <p className="text-xs text-slate-300">
                Core coursework: Data Structures, Object-Oriented Programming, Database Management Systems (DBMS), Operating Systems, Software Engineering, and Computer Networks.
              </p>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400 mb-3 border-b border-slate-800 pb-1">
              Technical & Creative Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                <span className="font-bold text-white block mb-1">Programming Languages:</span>
                <span className="text-slate-300">Python (Certified), C++, HTML5, CSS3, JavaScript, PHP</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                <span className="font-bold text-white block mb-1">Web Development:</span>
                <span className="text-slate-300">Responsive Web Design, Frontend Development, UI Implementation, Basic PHP</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                <span className="font-bold text-white block mb-1">Generative AI & Tools:</span>
                <span className="text-slate-300">Prompt Engineering, AI-Assisted Development, AI Image Generation, ChatGPT, Google Antigravity</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                <span className="font-bold text-white block mb-1">Design & Digital Media:</span>
                <span className="text-slate-300">Canva, Graphic Design, Poster Design, Presentation Design, Basic Video Editing, Content Writing</span>
              </div>
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400 mb-3 border-b border-slate-800 pb-1">
              Featured Projects
            </h3>
            <div className="space-y-3 text-xs">
              <div className="p-3.5 rounded-lg bg-slate-900/60 border border-slate-800">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-bold text-white">Gym E-Commerce Website</h4>
                  <span className="font-mono text-slate-400">Web / E-Commerce</span>
                </div>
                <p className="text-slate-300 mb-1.5">
                  Fitness and nutrition product catalog, interactive cart management, product details, user reviews, and integrated workout guide.
                </p>
                <div className="flex gap-1.5 text-[10px] font-mono text-sky-300">
                  <span>HTML5</span> • <span>CSS3</span> • <span>JavaScript</span> • <span>Flask</span> • <span>SQLite</span>
                </div>
              </div>

              <div className="p-3.5 rounded-lg bg-slate-900/60 border border-slate-800">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-bold text-white">TaskMasterPro</h4>
                  <span className="font-mono text-slate-400">Productivity</span>
                </div>
                <p className="text-slate-300 mb-1.5">
                  Workflow productivity platform featuring task state columns, priority tagging, and clean user dashboard design.
                </p>
                <div className="flex gap-1.5 text-[10px] font-mono text-purple-300">
                  <span>Python</span> • <span>Flask</span> • <span>HTML5/CSS3</span> • <span>SQLite</span>
                </div>
              </div>

              <div className="p-3.5 rounded-lg bg-slate-900/60 border border-slate-800">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-bold text-white">2D Python Car Racing Game</h4>
                  <span className="font-mono text-slate-400">Python / Game Dev</span>
                </div>
                <p className="text-slate-300 mb-1.5">
                  Endless highway racer with arcade physics, 5 custom vehicles (Normal Car, Truck, Bike, Bugatti, Ferrari), dynamic traffic, and persistent leaderboard.
                </p>
                <div className="flex gap-1.5 text-[10px] font-mono text-amber-300">
                  <span>Python 3</span> • <span>Pygame</span> • <span>NumPy</span> • <span>JSON</span>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400 mb-3 border-b border-slate-800 pb-1">
              Certifications & Training
            </h3>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <div>
                  <span className="font-bold text-white">Python Programming Certification (90 Hours)</span>
                  <span className="text-slate-400 block text-[11px]">Skill India – Reliance Foundation Skilling Academy</span>
                </div>
                <span className="text-emerald-400 font-mono text-[11px]">Completed</span>
              </div>
              <div className="flex justify-between">
                <div>
                  <span className="font-bold text-white">Internship & Job Preparation Training</span>
                  <span className="text-slate-400 block text-[11px]">Internshala Trainings • Indus University (ID: h6wj7mig6j1)</span>
                </div>
                <span className="text-emerald-400 font-mono text-[11px]">Aug 2025</span>
              </div>
              <div className="flex justify-between">
                <div>
                  <span className="font-bold text-white">Data Science Training</span>
                  <span className="text-slate-400 block text-[11px]">Internshala Trainings</span>
                </div>
                <span className="text-emerald-400 font-mono text-[11px]">Completed</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-4 glass-nav border-t border-slate-800 flex items-center justify-between">
          <span className="text-xs font-mono text-slate-500">
            Editable placeholder document until final PDF upload.
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

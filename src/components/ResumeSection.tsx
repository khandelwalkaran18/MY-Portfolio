import React, { useState } from 'react';
import { Download, FileText, CheckCircle, GraduationCap, Code, Briefcase, Award } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ResumeSectionProps {
  onOpenResumeModal: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenResumeModal }) => {
  const [activeTab, setActiveTab] = useState<'education' | 'skills' | 'projects' | 'services'>('education');

  const handleDownload = () => {
    // Downloads resume placeholder file or alerts with guidance
    const link = document.createElement('a');
    link.href = '/certificates/internship_certificate.pdf'; // placeholder until final PDF uploaded
    link.download = 'Karan_Khandelwal_Resume_Preview.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-400 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 mb-3">
            Curriculum Vitae
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            My Resume
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-3">
            Explore my educational background, technical skills, projects, certifications, and development journey.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full mt-4"></div>
        </div>

        {/* Action Header Card */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 mb-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-sky-500/10 border border-sky-500/20">
              <FileText className="w-8 h-8 text-sky-400" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                Karan Khandelwal — Professional Resume
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                B.Tech Computer Engineering • Third Year • Indus University, Ahmedabad
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onOpenResumeModal}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 transition-colors shadow-sm"
            >
              <FileText className="w-4 h-4 text-sky-400" />
              <span>View Resume</span>
            </button>
            <button
              onClick={handleDownload}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 shadow-lg shadow-sky-500/20 transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </button>
          </div>
        </div>

        {/* Interactive Resume Tabs Preview */}
        <div className="glass-card rounded-2xl overflow-hidden border border-slate-800">
          
          {/* Tab Navigation */}
          <div className="flex border-b border-slate-800 overflow-x-auto bg-slate-950/60">
            {[
              { id: 'education', label: 'Education', icon: GraduationCap },
              { id: 'skills', label: 'Core Skills', icon: Code },
              { id: 'projects', label: 'Key Projects', icon: Briefcase },
              { id: 'services', label: 'Certifications', icon: Award },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold transition-colors border-b-2 whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'border-sky-400 text-sky-400 bg-sky-500/5'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Body */}
          <div className="p-6 sm:p-8">
            {activeTab === 'education' && (
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <h4 className="text-base font-bold text-white">
                      Bachelor of Technology (B.Tech) — Computer Engineering
                    </h4>
                    <span className="text-xs font-mono text-sky-400">
                      Third-Year Undergraduate (Present)
                    </span>
                  </div>
                  <p className="text-xs font-mono text-slate-400 mb-2">
                    Indus University, Ahmedabad, Gujarat, India
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Coursework includes Data Structures & Algorithms, Database Management Systems, Object-Oriented Programming, Operating Systems, Computer Networks, and Software Engineering.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'skills' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <h4 className="text-xs font-mono uppercase text-sky-400 font-bold mb-2">
                    Programming & Web
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Python (Certified), C++, HTML5, CSS3, JavaScript, PHP, Responsive Web Design, Frontend Development, UI Implementation.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <h4 className="text-xs font-mono uppercase text-purple-400 font-bold mb-2">
                    AI & Digital Tools
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Generative AI, Prompt Engineering, AI Image Generation, ChatGPT, Google Antigravity, Canva, VS Code, GitHub.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'projects' && (
              <div className="space-y-3">
                {[
                  { name: 'Gym E-Commerce Website', cat: 'Web Development / E-Commerce' },
                  { name: 'TaskMasterPro', cat: 'Web Development / Productivity' },
                  { name: 'AssetFlow', cat: 'Web Development / Management' },
                  { name: 'Python Car Racing Game', cat: 'Python / Game Development (5 vehicles)' },
                  { name: 'AI-Assisted Car Service Website', cat: 'AI-Assisted Web Development' },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 flex items-center justify-between text-xs"
                  >
                    <span className="font-semibold text-white">{item.name}</span>
                    <span className="font-mono text-slate-400">{item.cat}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'services' && (
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <h4 className="text-xs font-bold text-white mb-1">
                    Python Development Certification Course (90 Hours)
                  </h4>
                  <p className="text-[11px] font-mono text-sky-400 mb-1">
                    Reliance Foundation Skilling Academy & Skill India Digital Hub
                  </p>
                  <p className="text-xs text-slate-400">
                    Comprehensive training in foundational Python programming, algorithmic data structures, and core software development.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <h4 className="text-xs font-bold text-white mb-1">
                    Internship & Job Preparation (Certificate of Training)
                  </h4>
                  <p className="text-[11px] font-mono text-emerald-400 mb-1">
                    Internshala Trainings • Indus University • Credential: h6wj7mig6j1
                  </p>
                  <p className="text-xs text-slate-400">
                    4-week career preparation training covering resume gear-up, interview strategy, and practical project execution.
                  </p>
                </div>
              </div>
            )}

            <div className="mt-6 pt-4 border-t border-slate-800/80 text-[11px] font-mono text-slate-500 text-center">
              Note: Resume PDF is maintained as an editable placeholder document until final version upload.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

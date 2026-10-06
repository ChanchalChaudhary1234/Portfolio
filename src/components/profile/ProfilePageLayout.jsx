import React from 'react';
import { X, CheckCircle2, Download, ArrowRight } from 'lucide-react';
import { roleProfiles } from '../../data/portfolioData';

export default function RoleDetailModal({ roleId, onClose, onContact }) {
  if (!roleId) return null;
  const role = roleProfiles.find((r) => r.id === roleId);
  if (!role) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6">
      <div className="relative w-full max-w-5xl rounded-3xl bg-white dark:bg-[#0B1120] border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden text-slate-900 dark:text-white">

        {/* Top Header */}
        <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800/80 flex items-center justify-between bg-slate-50 dark:bg-slate-900/50">
          <div className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
            ROLE: {role.title.toUpperCase()}
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 flex items-center justify-center text-slate-700 dark:text-slate-300 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[82vh] overflow-y-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                {role.title}
              </h2>
              <p className="text-base sm:text-lg font-semibold text-blue-600 dark:text-blue-400">
                {role.tagline}
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {role.subtext}
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  onClick={() => alert(`Downloading ${role.title} resume...`)}
                  className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold flex items-center gap-2"
                >
                  <Download className="w-3.5 h-3.5" /> Download Resume
                </button>
                <button
                  onClick={() => { onClose(); onContact(); }}
                  className="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-semibold hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  Contact Me
                </button>
              </div>
            </div>

            {/* Metrics cards */}
            <div className="lg:col-span-5 grid grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              {role.stats.map((s, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-xl font-bold text-blue-600 dark:text-blue-400">{s.value}</div>
                  <div className="text-[10px] text-slate-500 uppercase mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Key skills */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Key Skills</h4>
            <div className="flex flex-wrap gap-2">
              {role.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Project & Offerings */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-4 border-t border-slate-200 dark:border-slate-800">
            <div className="md:col-span-7 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Featured Project</h4>
              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden bg-slate-50 dark:bg-slate-900">
                <img
                  src={role.featuredProject.image}
                  alt={role.featuredProject.title}
                  className="w-full h-44 object-cover"
                />
                <div className="p-4 space-y-2">
                  <h5 className="text-base font-bold">{role.featuredProject.title}</h5>
                  <p className="text-xs text-slate-600 dark:text-slate-400">{role.featuredProject.desc}</p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {role.featuredProject.tags.map((t) => (
                      <span key={t} className="px-2 py-0.5 text-[10px] rounded bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-5 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">What I Offer</h4>
              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
                {role.offerings.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
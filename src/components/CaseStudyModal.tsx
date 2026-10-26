import React, { useEffect } from 'react';
import { X, ExternalLink, Github, Figma, CheckCircle2, TrendingUp, Layers, Cpu, ShieldCheck } from 'lucide-react';
import { Project } from '../types';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl bg-white rounded-[2rem] shadow-2xl border border-slate-200 overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-6 sm:px-8 py-5 border-b border-slate-100 flex items-center justify-between">
          <div className="space-y-0.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-2.5 py-0.5 rounded-full">
              Studi Kasus & Desain Antarmuka
            </span>
            <h3 className="font-display font-black text-xl sm:text-2xl text-slate-900 tracking-tight">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Tutup modal studi kasus"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* Main Showcase Image */}
          <div className="rounded-2xl overflow-hidden border border-slate-200/80 shadow-md bg-slate-900/5 aspect-video sm:aspect-[16/9] relative">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Key Metrics Banner */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {project.metrics.map((metric, i) => (
              <div
                key={i}
                className="bg-amber-500/5 border border-amber-500/20 rounded-2xl p-4 text-center"
              >
                <div className="text-2xl font-black font-display text-amber-600 tabular-nums">
                  {metric.value}
                </div>
                <div className="text-xs text-slate-600 mt-1 font-medium">{metric.label}</div>
              </div>
            ))}
          </div>

          {/* Subtitle & Role */}
          <div className="border-y border-slate-100 py-4 flex flex-wrap items-center justify-between gap-4 text-xs">
            <div>
              <span className="text-slate-400 block">Peran dalam Proyek:</span>
              <span className="font-bold text-slate-900 text-sm">{project.role}</span>
            </div>
            <div>
              <span className="text-slate-400 block">Kategori Sistem:</span>
              <span className="font-semibold text-slate-700 capitalize">{project.category}</span>
            </div>
            <div>
              <span className="text-slate-400 block">Tools & Framework:</span>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {project.tools.map((t, idx) => (
                  <span
                    key={idx}
                    className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded text-[11px] font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Problem & Solution Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-red-50/50 border border-red-200/50 rounded-2xl p-5 space-y-2">
              <h4 className="font-display font-bold text-red-950 text-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500" />
                Problem Statement & Tantangan
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="bg-emerald-50/50 border border-emerald-200/50 rounded-2xl p-5 space-y-2">
              <h4 className="font-display font-bold text-emerald-950 text-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Solusi Desain & Pendekatan Front-End
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Full Narrative & Information Systems Perspective */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-slate-900 text-base">
              Riset Pengguna & Keputusan Desain
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {project.description}
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Sebagai mahasiswa Sistem Informasi, fokus utama saya tidak hanya terletak pada estetika
              visual semata, tetapi juga pada bagaimana informasi diproses dan disajikan secara hierarkis.
              Setiap komponen dioptimalkan agar pengguna dapat menyelesaikan alur kerja tanpa memerlukan
              buku panduan manual.
            </p>
          </div>
        </div>

        {/* Modal Footer with Actions */}
        <div className="sticky bottom-0 z-20 bg-slate-50 px-6 sm:px-8 py-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-slate-950 bg-white border border-slate-200 px-3.5 py-2 rounded-xl hover:shadow-sm transition-all"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub Repo</span>
              </a>
            )}
            {project.figmaUrl && (
              <a
                href={project.figmaUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-slate-950 bg-white border border-slate-200 px-3.5 py-2 rounded-xl hover:shadow-sm transition-all"
              >
                <Figma className="w-3.5 h-3.5 text-purple-600" />
                <span>Figma Prototype</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-xl transition-colors cursor-pointer"
          >
            Tutup Pratinjau
          </button>
        </div>
      </div>
    </div>
  );
};

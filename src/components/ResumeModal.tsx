import React, { useEffect, useState } from 'react';
import { X, Download, CheckCircle2, GraduationCap, Award, Briefcase, Sparkles, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [downloaded, setDownloaded] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const handleDownload = () => {
    setDownloaded(true);
    // Create simulated file download
    const element = document.createElement('a');
    const file = new Blob(
      [
        `CURRICULUM VITAE - ${PERSONAL_INFO.name.toUpperCase()}\n` +
          `Mahasiswa Sistem Informasi | UI/UX Designer & Front-End Developer\n\n` +
          `Email: ${PERSONAL_INFO.email}\n` +
          `IPK: ${PERSONAL_INFO.gpa}\n` +
          `Pendidikan: ${PERSONAL_INFO.university}\n\n` +
          `Keahlian Utama:\n` +
          `- UI/UX Design: Figma, Wireframing, User Research, Design System\n` +
          `- Front-End: React 19, TypeScript, Tailwind CSS, Responsive Web Design\n` +
          `- Sistem Informasi: SRS, BPMN, UML, Information Architecture\n`,
      ],
      { type: 'text/plain;charset=utf-8' }
    );
    element.href = URL.createObjectURL(file);
    element.download = `CV_${PERSONAL_INFO.name.replace(/\s+/g, '_')}_UIUX_Frontend.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);

    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-white rounded-[2rem] shadow-2xl border border-slate-200 overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-white px-6 sm:px-8 py-5 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-black text-slate-900 text-xl">
                Ringkasan CV & Kualifikasi
              </h3>
              <p className="text-xs text-slate-500">{PERSONAL_INFO.name} · {PERSONAL_INFO.role}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Tutup modal CV"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6 text-slate-700 text-xs sm:text-sm">
          {/* Education */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-slate-900 text-sm flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-amber-600" />
              <span>Pendidikan</span>
            </h4>
            <div className="bg-[#FAF9F6] p-4 rounded-2xl border border-slate-100 space-y-1">
              <div className="flex justify-between font-bold text-slate-900">
                <span>S1 Sistem Informasi</span>
                <span className="text-amber-700 font-mono">IPK: {PERSONAL_INFO.gpa}</span>
              </div>
              <div className="text-slate-600 text-xs">{PERSONAL_INFO.university}</div>
              <div className="text-[11px] text-slate-500 pt-1">
                Fokus Kajian: Interaksi Manusia & Komputer (HCI), Perancangan Sistem Berorientasi Objek, Arsitektur Informasi, dan Pemrograman Web Front-End.
              </div>
            </div>
          </div>

          {/* Academic & Project Achievements */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-slate-900 text-sm flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-600" />
              <span>Pencapaian & Sertifikasi</span>
            </h4>
            <ul className="space-y-2">
              {[
                'Juara 2 National UI/UX Design Challenge (Kategori HealthTech & Inovasi)',
                'Finalis Business Information System Case Competition 2025',
                'Certified Front-End Developer with React & TypeScript (Dicoding / Coursera)',
                'Google UX Design Professional Certificate Graduate',
              ].map((achieve, i) => (
                <li key={i} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{achieve}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Competencies */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-slate-900 text-sm flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-amber-600" />
              <span>Keahlian & Metodologi</span>
            </h4>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                <span className="font-bold text-slate-900 block mb-1">Desain & Riset UX</span>
                <span className="text-slate-600 text-[11px] leading-relaxed">
                  Figma, FigJam, User Persona, Journey Mapping, Wireframing, Heuristic Evaluation, SUS Usability Testing.
                </span>
              </div>
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                <span className="font-bold text-slate-900 block mb-1">Teknikal & Front-End</span>
                <span className="text-slate-600 text-[11px] leading-relaxed">
                  React 19, TypeScript, Tailwind CSS, Responsive Breakpoints, WCAG 2.1 Accessibility, Git.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-50 px-6 sm:px-8 py-4 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            Terbuka untuk posisi Magang & Junior Full-time
          </span>
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-xl shadow-sm transition-all cursor-pointer"
          >
            {downloaded ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-slate-950" />
                <span>CV Terunduh!</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4" />
                <span>Unduh Dokumen CV</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

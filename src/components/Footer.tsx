import React from 'react';
import { ArrowUp, Heart, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200/70 bg-[#FAF9F5] py-12 px-4 sm:px-6 lg:px-8 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-500">
        {/* Brand & info */}
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-amber-400 flex items-center justify-center text-slate-950 font-display font-black text-xs shadow-sm">
            3D
          </div>
          <div>
            <span className="font-bold text-slate-800 text-sm">{PERSONAL_INFO.name}</span>
            <span className="mx-2 text-slate-300">·</span>
            <span>Mahasiswa Sistem Informasi</span>
          </div>
        </div>

        {/* Center: Quote */}
        <div className="text-center">
          <span>Dirancang dengan fokus UI/UX & kode Front-End responsif (React + Tailwind CSS).</span>
        </div>

        {/* Right: Scroll to top */}
        <div className="flex items-center gap-4">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-slate-950 bg-white border border-slate-200 px-3 py-1.5 rounded-full shadow-sm hover:shadow transition-all cursor-pointer"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

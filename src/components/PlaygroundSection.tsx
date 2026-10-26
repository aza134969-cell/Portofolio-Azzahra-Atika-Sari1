import React, { useState } from 'react';
import { Smartphone, Tablet, Monitor, Sliders, CheckCircle, Palette, Sparkles, RefreshCw, Eye } from 'lucide-react';

export const PlaygroundSection: React.FC = () => {
  const [viewport, setViewport] = useState<'mobile' | 'tablet' | 'desktop'>('mobile');
  const [theme, setTheme] = useState<'amber' | 'blue' | 'emerald' | 'coral'>('amber');
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [buttonState, setButtonState] = useState<'idle' | 'loading' | 'success'>('idle');
  const [feedbackCount, setFeedbackCount] = useState(142);

  const themeConfig = {
    amber: {
      name: 'Warm Amber (Default)',
      primary: 'bg-amber-400 text-slate-950 hover:bg-amber-300',
      accent: 'text-amber-600',
      border: 'border-amber-300',
      tag: 'bg-amber-100 text-amber-800',
      badge: 'bg-amber-500',
    },
    blue: {
      name: 'Cobalt Systems',
      primary: 'bg-blue-600 text-white hover:bg-blue-500',
      accent: 'text-blue-600',
      border: 'border-blue-300',
      tag: 'bg-blue-100 text-blue-800',
      badge: 'bg-blue-600',
    },
    emerald: {
      name: 'Emerald Health/Eco',
      primary: 'bg-emerald-600 text-white hover:bg-emerald-500',
      accent: 'text-emerald-600',
      border: 'border-emerald-300',
      tag: 'bg-emerald-100 text-emerald-800',
      badge: 'bg-emerald-600',
    },
    coral: {
      name: 'Coral Creative',
      primary: 'bg-[#FF5722] text-white hover:bg-[#F4511E]',
      accent: 'text-[#FF5722]',
      border: 'border-orange-300',
      tag: 'bg-orange-100 text-orange-800',
      badge: 'bg-[#FF5722]',
    },
  };

  const currentTheme = themeConfig[theme];

  const handleSimulateClick = () => {
    if (buttonState !== 'idle') return;
    setButtonState('loading');
    setTimeout(() => {
      setButtonState('success');
      setFeedbackCount((c) => c + 1);
      setTimeout(() => setButtonState('idle'), 2000);
    }, 800);
  };

  return (
    <section id="playground" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-100/70 px-3 py-1 rounded-full">
          Lab Interaktif
        </span>
        <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-900 mt-2 tracking-tight">
          UI/UX & Responsive Playground
        </h2>
        <p className="text-slate-600 text-sm sm:text-base mt-2">
          Uji langsung keahlian perancangan desain sistem dan front-end interaktif saya: ganti viewport
          layar, pilih token warna desain, dan rasakan micro-interaction yang halus.
        </p>
      </div>

      {/* Playground Controller Bar */}
      <div className="bg-white rounded-3xl border border-slate-200/80 p-5 sm:p-6 shadow-sm mb-8 flex flex-wrap items-center justify-between gap-6">
        {/* Viewport Selector */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-1">
            Viewport:
          </span>
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
            <button
              onClick={() => setViewport('mobile')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                viewport === 'mobile'
                  ? 'bg-white text-slate-950 shadow-sm'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Mobile (375px)</span>
            </button>
            <button
              onClick={() => setViewport('tablet')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                viewport === 'tablet'
                  ? 'bg-white text-slate-950 shadow-sm'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              <Tablet className="w-3.5 h-3.5" />
              <span>Tablet (640px)</span>
            </button>
            <button
              onClick={() => setViewport('desktop')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                viewport === 'desktop'
                  ? 'bg-white text-slate-950 shadow-sm'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              <Monitor className="w-3.5 h-3.5" />
              <span>Desktop (Full)</span>
            </button>
          </div>
        </div>

        {/* Theme Token Palette Selector */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-1">
            Token Palet:
          </span>
          <div className="flex items-center gap-1.5">
            {(['amber', 'blue', 'emerald', 'coral'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTheme(t)}
                className={`w-7 h-7 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                  theme === t ? 'ring-2 ring-offset-2 ring-slate-900 scale-110' : 'opacity-70 hover:opacity-100'
                } ${
                  t === 'amber'
                    ? 'bg-amber-400'
                    : t === 'blue'
                    ? 'bg-blue-600'
                    : t === 'emerald'
                    ? 'bg-emerald-600'
                    : 'bg-[#FF5722]'
                }`}
                title={themeConfig[t].name}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Simulator Device Stage */}
      <div className="bg-slate-900/5 border border-slate-200/80 rounded-[2.5rem] p-6 sm:p-10 flex items-center justify-center min-h-[460px] overflow-hidden">
        {/* The Frame whose width changes dynamically */}
        <div
          className={`transition-all duration-500 ease-out mx-auto bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden ${
            viewport === 'mobile'
              ? 'w-full max-w-[375px]'
              : viewport === 'tablet'
              ? 'w-full max-w-[640px]'
              : 'w-full max-w-[920px]'
          }`}
        >
          {/* Mock Browser/App Header */}
          <div className="bg-slate-50 px-4 py-3 border-b border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            </div>
            <div className="text-[11px] font-mono text-slate-400 bg-white px-3 py-0.5 rounded-md border border-slate-200/60">
              sim-akademik.univ.id/krs-planner
            </div>
            <div className="text-[10px] font-semibold text-slate-400 uppercase">
              {viewport} mode
            </div>
          </div>

          {/* Interactive Component Body */}
          <div className="p-5 sm:p-7 space-y-5">
            {/* Component Header */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${currentTheme.tag}`}>
                  Sistem Informasi KRS · Aktif
                </span>
                <h4 className="font-display font-black text-slate-900 text-lg sm:text-xl mt-1.5">
                  Rekayasa Antarmuka & UX (3 SKS)
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  Dosen: Dr. Ir. Hendra, M.Kom · Ruang Lab HCI 402 · Sisa Kuota: 4 Kursi
                </p>
              </div>

              {/* Bookmark Toggle */}
              <button
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={`p-2 rounded-xl border transition-all cursor-pointer ${
                  isBookmarked
                    ? 'bg-amber-50 border-amber-300 text-amber-600'
                    : 'bg-white border-slate-200 text-slate-400 hover:text-slate-600'
                }`}
                title="Simpan ke Rencana Studi"
              >
                ★
              </button>
            </div>

            {/* Responsive Grid inside the card */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Jadwal Kuliah</span>
                <span className="font-semibold text-slate-800">Senin, 08:00 - 10:30 WIB</span>
              </div>
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Beban Tugas</span>
                <span className="font-semibold text-emerald-600">Proyek Mandiri (Low Exam)</span>
              </div>
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Minat Mahasiswa</span>
                <span className="font-semibold text-slate-800 font-mono tabular-nums">
                  {feedbackCount} Peminat
                </span>
              </div>
            </div>

            {/* Interactive Action Button with micro-interaction feedback */}
            <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100">
              <div className="flex items-center gap-1.5 text-xs text-slate-500">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Prasyarat Terpenuhi (Algoritma & Basis Data)</span>
              </div>

              <button
                onClick={handleSimulateClick}
                disabled={buttonState !== 'idle'}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                  currentTheme.primary
                } ${buttonState === 'loading' ? 'opacity-80' : ''}`}
              >
                {buttonState === 'loading' ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>Memproses KRS...</span>
                  </>
                ) : buttonState === 'success' ? (
                  <>
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Mata Kuliah Ditambahkan!</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Ambil Kelas Sekarang</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Accessibility Metric Strip */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
        <div className="bg-white p-4 rounded-2xl border border-slate-200/80">
          <div className="text-lg font-bold font-display text-slate-900">WCAG AA Standard</div>
          <div className="text-xs text-slate-500 mt-0.5">Kontras teks ≥ 4.5:1 terjamin aman dibaca</div>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-slate-200/80">
          <div className="text-lg font-bold font-display text-slate-900">Fluid Responsive</div>
          <div className="text-xs text-slate-500 mt-0.5">Layout beradaptasi 320px hingga 4K tanpa patah</div>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-slate-200/80">
          <div className="text-lg font-bold font-display text-slate-900">Thumb-Friendly Touch</div>
          <div className="text-xs text-slate-500 mt-0.5">Area sentuh tombol ≥ 44px untuk mobile UX</div>
        </div>
      </div>
    </section>
  );
};

import React, { useState, useRef } from 'react';
import { ArrowRight, Smartphone, Globe, LayoutDashboard, Sparkles, Star, Camera, RotateCcw } from 'lucide-react';
import { PERSONAL_INFO, STATS, COLLABORATORS } from '../data/portfolioData';
import { Collaborator } from '../types';

interface HeroSectionProps {
  onSelectCollaborator: (collaborator: Collaborator) => void;
  onSelectCategory: (category: string) => void;
  onOpenContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onSelectCollaborator,
  onSelectCategory,
  onOpenContact,
}) => {
  const [customPhoto, setCustomPhoto] = useState<string | null>(() => {
    try {
      return localStorage.getItem('portfolio_user_custom_photo');
    } catch {
      return null;
    }
  });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setCustomPhoto(result);
        try {
          localStorage.setItem('portfolio_user_custom_photo', result);
        } catch (err) {
          console.warn('Gagal menyimpan ke localStorage:', err);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCustomPhoto(null);
    try {
      localStorage.removeItem('portfolio_user_custom_photo');
    } catch (err) {
      console.warn('Gagal menghapus dari localStorage:', err);
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const currentPhoto = customPhoto || PERSONAL_INFO.heroImage;
  return (
    <section id="home" className="pt-6 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Main Hero Container Card (Matching the rounded card in the reference image) */}
      <div className="relative rounded-[2.5rem] bg-white border border-slate-200/70 shadow-xl shadow-slate-200/50 p-6 sm:p-10 lg:p-14 overflow-hidden">
        {/* Subtle decorative background sparkles */}
        <div className="absolute top-8 left-12 text-amber-400 opacity-60 pointer-events-none">
          <Sparkles className="w-6 h-6 animate-pulse-subtle" />
        </div>
        <div className="absolute bottom-8 right-12 text-slate-300 opacity-40 pointer-events-none">
          <Star className="w-5 h-5 fill-slate-300" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Typographic Content */}
          <div className="lg:col-span-6 z-10 space-y-6">
            {/* Playful "WOW!" Starburst Badge (Directly inspired by screenshot) */}
            <div className="inline-flex items-center gap-2">
              <div className="relative">
                <div className="w-11 h-11 bg-amber-400 rounded-full flex items-center justify-center shadow-md rotate-[-8deg] animate-float-slow">
                  <span className="text-[11px] font-black tracking-wider text-slate-950 font-display">
                    WOW!
                  </span>
                  {/* Starburst rays */}
                  <span className="absolute -top-1 -right-1 text-xs">✨</span>
                </div>
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Sistem Informasi · UI/UX & Frontend
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-display font-black leading-[1.08] tracking-tight text-slate-900 text-balance">
              Hey! All We <br />
              <span className="text-slate-900">Ui/Ux </span>
              <span className="text-[#FF5722] drop-shadow-sm">Designer</span>
            </h1>

            {/* Subtext describing Information Systems & Frontend balance */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
              Mahasiswa Sistem Informasi yang berfokus pada perancangan antarmuka digital (UI/UX
              Design), sistem informasi human-centered, wireframing, serta pengembangan web front-end
              yang responsif dan berkinerja tinggi.
            </p>

            {/* Floating "The kind of work we do" Card (From screenshot) */}
            <div className="pt-2">
              <div className="bg-[#FAF9F6] border border-slate-200/80 rounded-2xl p-5 max-w-md shadow-sm space-y-3.5 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <h3 className="font-display font-bold text-slate-900 text-sm tracking-tight">
                    Fokus & Keahlian Utama
                  </h3>
                  <span className="text-[11px] font-semibold text-amber-600 bg-amber-100/60 px-2 py-0.5 rounded-full">
                    3 Spesialisasi
                  </span>
                </div>

                <div className="space-y-2">
                  {/* Item 1: Mobile App */}
                  <button
                    onClick={() => onSelectCategory('mobile')}
                    className="w-full text-left flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-100 hover:border-amber-300 hover:bg-amber-50/40 transition-all group cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center group-hover:scale-105 transition-transform">
                        <Smartphone className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                          iOS & Android Mobile App
                        </div>
                        <div className="text-[11px] text-slate-500">Design System & Interactive Flow</div>
                      </div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-600 group-hover:translate-x-0.5 transition-all" />
                  </button>

                  {/* Item 2: Responsive Web */}
                  <button
                    onClick={() => onSelectCategory('frontend')}
                    className="w-full text-left flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-100 hover:border-amber-300 hover:bg-amber-50/40 transition-all group cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center group-hover:scale-105 transition-transform">
                        <Globe className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                          Website & Responsive Landing Page
                        </div>
                        <div className="text-[11px] text-slate-500">React, Tailwind CSS & WCAG</div>
                      </div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-600 group-hover:translate-x-0.5 transition-all" />
                  </button>

                  {/* Item 3: Business Dashboard */}
                  <button
                    onClick={() => onSelectCategory('dashboard')}
                    className="w-full text-left flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-100 hover:border-amber-300 hover:bg-amber-50/40 transition-all group cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center group-hover:scale-105 transition-transform">
                        <LayoutDashboard className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                          Business Dashboard & Sistem Informasi
                        </div>
                        <div className="text-[11px] text-slate-500">Data Analytics & Clean Workflow</div>
                      </div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-600 group-hover:translate-x-0.5 transition-all" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Organic Blobs, Designer Image, Doodles & Floating Collaborator Pills */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[440px] sm:min-h-[500px]">
            {/* Playful Curly Squiggle Doodle (Top Right) */}
            <div className="absolute -top-4 right-6 sm:right-12 z-20 pointer-events-none animate-float-slow">
              <svg width="68" height="68" viewBox="0 0 100 100" fill="none">
                <path
                  d="M10,40 C25,10 45,70 65,30 C75,10 95,50 90,80"
                  stroke="#E879F9"
                  strokeWidth="8"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </div>

            {/* Organic Yellow Blob (Matching Screenshot) */}
            <div
              className="absolute w-[290px] h-[310px] sm:w-[380px] sm:h-[400px] bg-[#FFC107] rounded-[48%_52%_62%_38%/45%_48%_52%_55%] rotate-[-6deg] transition-transform duration-700 -right-4 sm:right-6 top-6 sm:top-10 opacity-95"
              style={{
                filter: 'drop-shadow(0 15px 30px rgba(255, 193, 7, 0.25))',
              }}
            />

            {/* Organic Blue Blob (Matching Screenshot) */}
            <div
              className="absolute w-[180px] h-[200px] sm:w-[240px] sm:h-[260px] bg-[#1D8CF8] rounded-[58%_42%_47%_53%/48%_62%_38%_52%] rotate-[18deg] left-2 sm:left-12 top-20 sm:top-24 opacity-95"
              style={{
                filter: 'drop-shadow(0 10px 25px rgba(29, 140, 248, 0.3))',
              }}
            />

            {/* Small Blue Star doodle */}
            <div className="absolute top-28 left-6 sm:left-8 z-20 text-blue-600">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l2.4 7.2h7.6l-6.2 4.5 2.4 7.2-6.2-4.5-6.2 4.5 2.4-7.2-6.2-4.5h7.6z" />
              </svg>
            </div>

            {/* Central Designer Portrait with custom photo support */}
            <div className="relative z-10 max-w-[290px] sm:max-w-[340px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/90 group">
              {/* Hidden file input for uploading the user's exact original photo */}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />

              {/* Upload badge floating top-right */}
              <div className="absolute top-3 right-3 z-30 flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="px-2.5 py-1 text-[11px] font-bold bg-white/95 hover:bg-white text-slate-800 rounded-full shadow-md backdrop-blur-md flex items-center gap-1.5 border border-slate-200 transition-all cursor-pointer hover:scale-105 active:scale-95"
                  title="Ganti dengan file asli Foto KTM Anda tanpa perubahan wajah"
                >
                  <Camera className="w-3.5 h-3.5 text-amber-600" />
                  <span>{customPhoto ? 'Ganti File Asli' : 'Unggah Foto Asli (KTM)'}</span>
                </button>
                {customPhoto && (
                  <button
                    type="button"
                    onClick={handleResetPhoto}
                    className="p-1 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white shadow-md transition-all cursor-pointer"
                    title="Kembalikan ke foto bawaan"
                  >
                    <RotateCcw className="w-3 h-3" />
                  </button>
                )}
              </div>

              <img
                src={currentPhoto}
                alt={PERSONAL_INFO.name}
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover object-top hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent p-4 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-semibold tracking-wide text-amber-300">
                      {PERSONAL_INFO.name}
                    </div>
                    <div className="text-[11px] text-slate-200">{PERSONAL_INFO.university}</div>
                  </div>
                  {customPhoto && (
                    <span className="text-[10px] bg-emerald-500/80 text-white font-bold px-2 py-0.5 rounded-full">
                      Foto Asli 100%
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Floating Collaborator 1: Johny (Top Right) */}
            <div className="absolute top-14 right-0 sm:right-4 z-20 animate-float-slow">
              <button
                onClick={() => onSelectCollaborator(COLLABORATORS[0])}
                className="flex items-center gap-2 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-lg border border-slate-100 hover:scale-105 transition-transform cursor-pointer"
                title="Klik untuk melihat ulasan Johny"
              >
                <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-sky-400 shrink-0">
                  <img
                    src={COLLABORATORS[0].avatar}
                    alt={COLLABORATORS[0].name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <span className="text-xs font-bold text-slate-900 block leading-tight">
                    Johny
                  </span>
                  <span className="text-[9px] text-slate-500 block">Product Lead</span>
                </div>
                {/* Yellow mouse cursor pointer icon matching screenshot */}
                <span className="text-xs text-amber-500">👆</span>
              </button>
            </div>

            {/* Floating Collaborator 2: Asraf Hakimi (Bottom Left) */}
            <div className="absolute bottom-16 -left-2 sm:left-4 z-20 animate-float-reverse">
              <button
                onClick={() => onSelectCollaborator(COLLABORATORS[1])}
                className="flex items-center gap-2 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-lg border border-slate-100 hover:scale-105 transition-transform cursor-pointer"
                title="Klik untuk melihat ulasan Asraf"
              >
                <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-orange-400 shrink-0">
                  <img
                    src={COLLABORATORS[1].avatar}
                    alt={COLLABORATORS[1].name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <span className="text-xs font-bold text-slate-900 block leading-tight">
                    Asraf Hakimi
                  </span>
                  <span className="text-[9px] text-slate-500 block">Senior Frontend</span>
                </div>
              </button>
            </div>

            {/* Floating Collaborator 3: Jack Knight (Bottom Right) */}
            <div className="absolute -bottom-2 right-6 sm:right-16 z-20 animate-float-slow">
              <button
                onClick={() => onSelectCollaborator(COLLABORATORS[2])}
                className="flex items-center gap-2 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-lg border border-slate-100 hover:scale-105 transition-transform cursor-pointer"
                title="Klik untuk melihat ulasan Jack"
              >
                <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-amber-400 shrink-0">
                  <img
                    src={COLLABORATORS[2].avatar}
                    alt={COLLABORATORS[2].name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <span className="text-xs font-bold text-slate-900 block leading-tight">
                    Jack Knight
                  </span>
                  <span className="text-[9px] text-slate-500 block">UX Mentor</span>
                </div>
              </button>
            </div>

            {/* Cheerful Crossed Fingers Gesture (Bottom Right edge from screenshot) */}
            <div className="absolute -bottom-6 -right-2 z-20 hidden sm:block">
              <div className="text-3xl filter drop-shadow">🤞</div>
            </div>

            {/* Dotted Trajectory Line connecting collaborators */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-10 opacity-30"
              viewBox="0 0 500 500"
              fill="none"
            >
              <path
                d="M 120 380 Q 220 440 340 420 T 420 200"
                stroke="#64748B"
                strokeWidth="2"
                strokeDasharray="6 6"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* KPI / Stat Counters Below Hero Card (Matching the 3 round stat circles in the screenshot) */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {/* Stat 1: Completed Projects */}
        <div className="flex flex-col items-center text-center p-4">
          <div className="relative mb-3">
            <div className="w-20 h-20 rounded-full border-[5px] border-amber-400 bg-amber-50 flex items-center justify-center shadow-inner">
              <span className="font-display font-black text-xl text-slate-900 tabular-nums">
                28+
              </span>
            </div>
            {/* Playful mini emoji on top right of circle */}
            <div className="absolute -top-1 -right-1 text-sm bg-white rounded-full p-0.5 shadow-sm">
              🥳
            </div>
          </div>
          <h4 className="font-display font-bold text-slate-900 text-sm">
            Already Completed Projects
          </h4>
          <p className="text-xs text-slate-500 mt-0.5">Desain UI/UX & Prototipe Sistem</p>
        </div>

        {/* Stat 2: Active / Code Projects */}
        <div className="flex flex-col items-center text-center p-4">
          <div className="relative mb-3">
            <div className="w-20 h-20 rounded-full border-[5px] border-sky-400 bg-sky-50 flex items-center justify-center shadow-inner">
              <span className="font-display font-black text-xl text-slate-900 tabular-nums">
                10+
              </span>
            </div>
            {/* Playful emoji */}
            <div className="absolute -top-1 -right-1 text-sm bg-white rounded-full p-0.5 shadow-sm">
              💻
            </div>
          </div>
          <h4 className="font-display font-bold text-slate-900 text-sm">
            Responsive Front-End Works
          </h4>
          <p className="text-xs text-slate-500 mt-0.5">React, Tailwind & Web Components</p>
        </div>

        {/* Stat 3: User Satisfaction Score */}
        <div className="flex flex-col items-center text-center p-4">
          <div className="relative mb-3">
            <div className="w-20 h-20 rounded-full border-[5px] border-[#FF7043] bg-orange-50 flex items-center justify-center shadow-inner">
              <span className="font-display font-black text-xl text-slate-900 tabular-nums">
                98%
              </span>
            </div>
            {/* Playful emoji */}
            <div className="absolute -top-1 -right-1 text-sm bg-white rounded-full p-0.5 shadow-sm">
              ✨
            </div>
          </div>
          <h4 className="font-display font-bold text-slate-900 text-sm">
            User Experience Score
          </h4>
          <p className="text-xs text-slate-500 mt-0.5">Berdasarkan Pengujian Usabilitas</p>
        </div>
      </div>
    </section>
  );
};

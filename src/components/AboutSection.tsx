import React, { useState } from 'react';
import { BookOpen, CheckCircle2, Layers, Cpu, Compass, Code2, Users, Lightbulb, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO, SKILL_CATEGORIES } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'workflow' | 'skills'>('overview');

  const workflowSteps = [
    {
      num: '01',
      title: 'Analisis Sistem & Riset Pengguna',
      desc: 'Menggali kebutuhan fungsional (SRS), pemetaan alur proses bisnis (BPMN/Use Case), serta wawancara pengguna untuk menemukan pain points mendalam.',
      icon: Compass,
      tags: ['Problem Statement', 'User Persona', 'System Requirements'],
    },
    {
      num: '02',
      title: 'Arsitektur Informasi & Wireframing',
      desc: 'Menata hierarki konten dan navigasi yang logis melalui low-fidelity wireframe di Figma untuk memvalidasi alur sebelum masuk ke visual mendetail.',
      icon: Layers,
      tags: ['Information Architecture', 'Sitemap', 'Low-Fi Wireframe'],
    },
    {
      num: '03',
      title: 'UI Design & Atomic Design System',
      desc: 'Menciptakan high-fidelity interface dengan color tokens, tipografi terstruktur, komponen varian interaktif, dan micro-interaction yang konsisten.',
      icon: Lightbulb,
      tags: ['Figma Tokens', 'Component Library', 'Micro-Interactions'],
    },
    {
      num: '04',
      title: 'Pengembangan Front-End Responsif',
      desc: 'Mengubah desain menjadi kode web modern menggunakan React 19, TypeScript, dan Tailwind CSS dengan standar WCAG AA dan performa Lighthouse optimal.',
      icon: Code2,
      tags: ['React + TypeScript', 'Tailwind CSS', 'Accessible Components'],
    },
    {
      num: '05',
      title: 'Usability Testing & Evaluasi',
      desc: 'Melakukan pengujian usabilitas langsung dengan metrik System Usability Scale (SUS) untuk memastikan pengguna dapat menyelesaikan tugas tanpa friksi.',
      icon: Users,
      tags: ['Usability Testing', 'SUS Score', 'Heuristic Evaluation'],
    },
  ];

  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-100/70 px-3 py-1 rounded-full">
          Tentang Saya
        </span>
        <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-900 mt-3 tracking-tight">
          Sinergi Sistem Informasi, UI/UX & Front-End
        </h2>
        <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
          Menghubungkan analisis proses bisnis yang presisi dengan perancangan antarmuka yang humanis
          dan kode web yang bersih serta responsif.
        </p>

        {/* Tab Switcher */}
        <div className="flex items-center justify-center gap-2 mt-6 p-1.5 bg-slate-100 rounded-2xl max-w-md mx-auto">
          <button
            onClick={() => setActiveTab('overview')}
            className={`flex-1 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer ${
              activeTab === 'overview'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Filosofi & Profil
          </button>
          <button
            onClick={() => setActiveTab('workflow')}
            className={`flex-1 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer ${
              activeTab === 'workflow'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Alur Kerja (Workflow)
          </button>
          <button
            onClick={() => setActiveTab('skills')}
            className={`flex-1 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer ${
              activeTab === 'skills'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Keahlian Teknis
          </button>
        </div>
      </div>

      {/* Tab Content: Overview */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Bio & Academic Advantage Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-slate-900 text-lg">
                    Latar Belakang Akademik & Visi
                  </h3>
                  <div className="text-xs text-slate-500 font-medium">
                    {PERSONAL_INFO.university} · IPK: {PERSONAL_INFO.gpa}
                  </div>
                </div>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Sebagai mahasiswa Sistem Informasi, saya mempelajari bagaimana data, proses bisnis,
                dan kebutuhan organisasi saling berinteraksi. Dari pemahaman tersebut, saya menyadari
                bahwa sistem terbaik pun tidak akan digunakan secara optimal jika antarmukanya kaku
                atau sulit dipahami.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Oleh karena itu, saya memusatkan perhatian pada{' '}
                <strong className="text-slate-900 font-semibold">UI/UX Design</strong> dan{' '}
                <strong className="text-slate-900 font-semibold">Front-End Development</strong>. Saya
                tidak sekadar membuat tampilan yang cantik di Figma, melainkan menguji kelayakan
                interaksinya dan mewujudkannya langsung ke dalam kode web modern yang responsif dan
                mudah dipelihara.
              </p>

              {/* Three Value Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3">
                <div className="bg-[#FAF9F6] p-3.5 rounded-2xl border border-slate-100">
                  <div className="text-xs font-bold text-slate-900">1. Analisis Sistem</div>
                  <div className="text-[11px] text-slate-500 mt-1 leading-snug">
                    Memahami arsitektur data & alur proses bisnis organisasi.
                  </div>
                </div>
                <div className="bg-[#FAF9F6] p-3.5 rounded-2xl border border-slate-100">
                  <div className="text-xs font-bold text-slate-900">2. Desain Human-Centered</div>
                  <div className="text-[11px] text-slate-500 mt-1 leading-snug">
                    Riset empati pengguna untuk mengurangi beban kognitif.
                  </div>
                </div>
                <div className="bg-[#FAF9F6] p-3.5 rounded-2xl border border-slate-100">
                  <div className="text-xs font-bold text-slate-900">3. Kode Web Responsif</div>
                  <div className="text-[11px] text-slate-500 mt-1 leading-snug">
                    Implementasi presisi dengan React & Tailwind CSS.
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>Status: {PERSONAL_INFO.semester}</span>
              <span className="font-semibold text-emerald-600">✓ Siap Magang & Kolaborasi</span>
            </div>
          </div>

          {/* Right: Why Choose Me Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent rounded-3xl p-6 sm:p-8 border border-amber-500/20 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">
                Keunggulan Spesifik
              </span>
              <h3 className="text-xl font-display font-black text-slate-900 leading-snug">
                Bukan Sekadar Designer, Bukan Sekadar Coder
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Kombinasi ilmu Sistem Informasi memberi saya keunggulan dalam menyelaraskan ekspektasi
                manajemen produk, engineer backend, dan pengguna akhir:
              </p>

              <ul className="space-y-3 pt-2">
                {[
                  'Desain yang realistis dan ramah implementasi bagi tim pengembang backend.',
                  'Memperhatikan validasi form, penanganan state kosong (empty state), dan error recovery.',
                  'Responsive breakpoints teruji di berbagai ukuran layar: smartphone, tablet, laptop, dan monitor lebar.',
                  'Standar aksesibilitas warna dan kontras tinggi sesuai rekomendasi WCAG 2.1.',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-amber-900/10">
              <a
                href="#projects"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 hover:text-amber-950 transition-colors"
              >
                <span>Lihat Studi Kasus Nyata di Bawah</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Tab Content: Workflow */}
      {activeTab === 'workflow' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workflowSteps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black font-display text-amber-500/80 group-hover:text-amber-500 transition-colors">
                      {step.num}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h4 className="font-display font-bold text-slate-900 text-base mb-2">
                    {step.title}
                  </h4>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                    {step.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
                  {step.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Tab Content: Skills Matrix */}
      {activeTab === 'skills' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between"
            >
              <div>
                <h4 className="font-display font-bold text-slate-900 text-base mb-1">
                  {cat.title}
                </h4>
                <p className="text-xs text-slate-500 mb-5">{cat.description}</p>

                <div className="space-y-4">
                  {cat.items.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-slate-800">{skill.name}</span>
                        <span className="text-[11px] text-slate-400 font-mono tabular-nums">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-amber-400 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] text-slate-400">
                Teruji dalam perkuliahan, proyek tim, & prototyping mandiri.
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

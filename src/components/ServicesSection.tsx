import React from 'react';
import { Palette, Code2, Search, Layers, CheckCircle, ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/portfolioData';

interface ServicesSectionProps {
  onOpenContact: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenContact }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'palette':
        return Palette;
      case 'code':
        return Code2;
      case 'search':
        return Search;
      case 'layers':
      default:
        return Layers;
    }
  };

  return (
    <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-100/70 px-3 py-1 rounded-full">
          Layanan & Kolaborasi
        </span>
        <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-900 mt-2 tracking-tight">
          Apa yang Bisa Saya Bangun Bersama Anda?
        </h2>
        <p className="text-slate-600 text-sm sm:text-base mt-2">
          Menggabungkan keahlian desain pengalaman pengguna dengan implementasi teknis front-end yang
          terstandarisasi industri.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SERVICES.map((service) => {
          const Icon = getIcon(service.icon);
          return (
            <div
              key={service.id}
              className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-amber-400/50 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                    {service.badge}
                  </span>
                </div>

                <h3 className="font-display font-black text-slate-900 text-xl group-hover:text-amber-600 transition-colors">
                  {service.title}
                </h3>
                <div className="text-xs font-semibold text-amber-700 mt-1">{service.subtitle}</div>

                <p className="text-slate-600 text-xs sm:text-sm mt-3 leading-relaxed">
                  {service.description}
                </p>

                {/* Deliverables Checklist */}
                <div className="mt-6 pt-4 border-t border-slate-100 space-y-2.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Deliverables:
                  </span>
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500">
                  Konsultasikan Proyek
                </span>
                <button
                  onClick={onOpenContact}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 hover:text-amber-950 transition-colors cursor-pointer"
                >
                  <span>Mulai Diskusi</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

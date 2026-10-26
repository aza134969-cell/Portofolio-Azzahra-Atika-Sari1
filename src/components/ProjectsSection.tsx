import React, { useState } from 'react';
import { ArrowUpRight, ExternalLink, Eye, Github, Figma, Sparkles } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';

interface ProjectsSectionProps {
  onOpenProject: (project: Project) => void;
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onOpenProject,
  selectedCategory,
  onSelectCategory,
}) => {
  const filterTabs = [
    { id: 'all', label: 'Semua Proyek' },
    { id: 'dashboard', label: 'Web & Dashboard' },
    { id: 'mobile', label: 'Mobile UI/UX' },
    { id: 'frontend', label: 'Front-End React' },
  ];

  const filteredProjects =
    selectedCategory === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-100/70 px-3 py-1 rounded-full">
            Karya Terpilih
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-900 mt-2 tracking-tight">
            Portofolio UI/UX & Web Front-End
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-1.5 max-w-xl">
            Kumpulan proyek perancangan antarmuka, arsitektur sistem informasi, dan implementasi
            front-end responsif yang mengutamakan kepuasan pengguna.
          </p>
        </div>

        {/* Filter Controls (Segmented buttons) */}
        <div className="flex items-center gap-1.5 p-1.5 bg-slate-100 rounded-2xl overflow-x-auto self-start md:self-auto">
          {filterTabs.map((tab) => {
            const isActive = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onSelectCategory(tab.id)}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group bg-white rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-amber-400/50 transition-all duration-300 overflow-hidden flex flex-col justify-between"
          >
            <div>
              {/* Project Card Image Container */}
              <div
                className="relative aspect-[16/10] overflow-hidden bg-slate-100 cursor-pointer"
                onClick={() => onOpenProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white/95 text-slate-900 text-xs font-bold px-4 py-2 rounded-full shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Lihat Detail Studi Kasus</span>
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                {/* Clean unboxed metadata with bullet separators (anti-slop discipline) */}
                <div className="flex items-center gap-2 text-xs text-amber-700 font-semibold mb-2">
                  <span className="capitalize">{project.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{project.role}</span>
                </div>

                <h3
                  onClick={() => onOpenProject(project)}
                  className="font-display font-black text-slate-900 text-lg leading-snug group-hover:text-amber-600 transition-colors cursor-pointer"
                >
                  {project.title}
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm mt-2 line-clamp-2 leading-relaxed">
                  {project.subtitle}
                </p>

                {/* Primary Metric Preview */}
                {project.metrics.length > 0 && (
                  <div className="mt-4 p-2.5 rounded-xl bg-amber-50/60 border border-amber-200/40 flex items-center justify-between text-xs">
                    <span className="text-slate-600 font-medium">{project.metrics[0].label}</span>
                    <span className="font-bold text-amber-700 font-display">
                      {project.metrics[0].value}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Card Footer */}
            <div className="px-6 pb-6 pt-2 border-t border-slate-100/80 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span>{project.tools.slice(0, 2).join(' · ')}</span>
              </div>

              <button
                onClick={() => onOpenProject(project)}
                className="text-xs font-bold text-slate-900 hover:text-amber-600 flex items-center gap-1 transition-colors cursor-pointer"
              >
                <span>Studi Kasus</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

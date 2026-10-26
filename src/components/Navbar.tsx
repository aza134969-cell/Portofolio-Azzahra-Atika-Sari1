import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, Sparkles, FileText } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact, onOpenResume }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('home');

  const navLinks = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'services', label: 'Services', href: '#services' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'playground', label: 'Playground', href: '#playground' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FAF9F5]/90 backdrop-blur-md border-b border-amber-900/5 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (matching screenshot's logo) */}
        <a
          href="#home"
          className="flex items-center gap-2.5 group whitespace-nowrap shrink-0 text-slate-900"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-400 flex items-center justify-center shadow-md shadow-amber-500/20 text-white font-bold text-lg group-hover:scale-105 transition-transform">
            <span className="font-display font-black tracking-tighter text-sm">3D</span>
          </div>
          <span className="font-display font-black text-xl tracking-tight text-slate-900 uppercase">
            Designer
          </span>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
          {navLinks.map((link) => {
            const isActive = activeNav === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setActiveNav(link.id)}
                className={`relative py-1 transition-colors whitespace-nowrap shrink-0 ${
                  isActive ? 'text-slate-950 font-bold' : 'hover:text-slate-950'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-amber-500 rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Actions (matching screenshot's Sign Up + Sign In golden pill) */}
        <div className="hidden sm:flex items-center gap-4 shrink-0">
          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-950 px-3 py-2 rounded-lg transition-colors whitespace-nowrap shrink-0"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume CV</span>
          </button>

          <button
            onClick={onOpenContact}
            className="px-6 py-2.5 text-xs font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 active:scale-95 rounded-full shadow-lg shadow-amber-400/30 transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer"
          >
            <span>Hubungi Saya</span>
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenContact}
            className="px-3.5 py-1.5 text-xs font-bold text-slate-900 bg-amber-400 rounded-full"
          >
            Kontak
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-amber-900/10 bg-[#FAF9F5] px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => {
                setActiveNav(link.id);
                setMobileMenuOpen(false);
              }}
              className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-800 hover:bg-amber-50"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-slate-200/60 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-2.5 text-center text-sm font-semibold text-slate-700 bg-white border border-slate-200 rounded-xl"
            >
              Lihat Resume CV
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-2.5 text-center text-sm font-bold text-slate-900 bg-amber-400 rounded-xl shadow-sm"
            >
              Hubungi Saya (Hire Me)
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

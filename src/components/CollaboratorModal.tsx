import React, { useEffect } from 'react';
import { X, Star, Quote, CheckCircle2 } from 'lucide-react';
import { Collaborator } from '../types';

interface CollaboratorModalProps {
  collaborator: Collaborator | null;
  onClose: () => void;
}

export const CollaboratorModal: React.FC<CollaboratorModalProps> = ({ collaborator, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!collaborator) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 p-6 sm:p-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Tutup modal"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-amber-400 shadow-md shrink-0">
            <img
              src={collaborator.avatar}
              alt={collaborator.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="flex items-center gap-1.5 text-amber-500 mb-1">
              {[...Array(collaborator.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <h3 className="font-display font-black text-slate-900 text-lg leading-tight">
              {collaborator.name}
            </h3>
            <p className="text-xs text-slate-500 font-medium">{collaborator.role}</p>
          </div>
        </div>

        <div className="bg-[#FAF9F5] p-5 rounded-2xl border border-slate-200/80 relative mb-6">
          <Quote className="w-6 h-6 text-amber-400/50 absolute top-3 right-3" />
          <p className="text-slate-700 text-sm italic leading-relaxed">
            "{collaborator.quote}"
          </p>
        </div>

        <div className="flex items-center justify-between text-xs text-slate-500 border-t border-slate-100 pt-4">
          <span className="flex items-center gap-1.5 text-emerald-600 font-medium">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Kolaborasi Terverifikasi</span>
          </span>
          <span className="font-semibold text-slate-700">Proyek: {collaborator.project}</span>
        </div>
      </div>
    </div>
  );
};

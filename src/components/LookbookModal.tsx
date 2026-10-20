import React from 'react';
import { SavedCustomDesign } from './ZodiacOutfitStudio';
import { X, Trash2, Award, Calendar, Sparkles, ArrowRight } from 'lucide-react';

interface LookbookModalProps {
  isOpen: boolean;
  onClose: () => void;
  savedDesigns: SavedCustomDesign[];
  onDeleteDesign: (id: string) => void;
  onOpenCertificate: (design: SavedCustomDesign) => void;
  onGoToStudio: () => void;
}

export const LookbookModal: React.FC<LookbookModalProps> = ({
  isOpen,
  onClose,
  savedDesigns,
  onDeleteDesign,
  onOpenCertificate,
  onGoToStudio,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#090d16] border border-[#d4af37]/40 rounded-xl p-6 sm:p-8 shadow-2xl text-[#e5e0d8] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#d4af37]/20 pb-4 shrink-0">
          <div>
            <span className="text-xs font-cinzel tracking-widest text-[#d4af37] block">
              COLLECTION PRIVÉE
            </span>
            <h2 className="text-2xl font-cinzel font-semibold text-[#f8f5ee]">
              Lookbook Koleksi Pribadi
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#9e9686] hover:text-[#f5eedc] transition-colors"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto py-6 space-y-4">
          {savedDesigns.length === 0 ? (
            <div className="text-center py-16 space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37]">
                <Sparkles className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-cinzel text-[#f8f5ee]">Lookbook Masih Kosong</h3>
              <p className="text-xs text-[#a69c8a] font-serif italic max-w-md mx-auto">
                Anda belum menyimpan rancangan busana bespoke. Masuk ke menu desain untuk mengkreasikan outfit haute couture zodiak pertama Anda.
              </p>
              <button
                onClick={() => {
                  onClose();
                  onGoToStudio();
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#d4af37] text-[#06080d] font-cinzel font-medium text-xs tracking-wider rounded transition-colors"
              >
                <span>Mulai Rancang Sekarang</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {savedDesigns.map((design) => (
                <div
                  key={design.id}
                  className="bg-[#0b101a] border border-[#d4af37]/25 rounded-lg p-4 space-y-3 relative group hover:border-[#d4af37]/50 transition-colors"
                >
                  <div className="flex gap-4">
                    {/* Thumbnail */}
                    <img
                      src={design.imageAsset}
                      alt={design.outfitTitle}
                      className="w-20 h-28 object-cover rounded border border-[#d4af37]/30 shrink-0"
                      referrerPolicy="no-referrer"
                    />

                    {/* Metadata */}
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-cinzel text-[#d4af37]">
                            {design.zodiacName} ({design.zodiacSymbol})
                          </span>
                          <span className="text-[9px] font-mono text-[#e5e0d8] bg-[#d4af37]/20 border border-[#d4af37]/40 px-1.5 py-0.2 rounded uppercase">
                            {design.gender === 'male' ? 'Pria' : 'Wanita'}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-[#8e8574] border border-[#d4af37]/30 px-1 rounded">
                          {design.monogram}
                        </span>
                      </div>

                      <h4 className="text-sm font-cinzel font-semibold text-[#f8f5ee]">
                        {design.outfitTitle}
                      </h4>

                      <p className="text-[11px] text-[#a69c8a] truncate">
                        {design.occasion}
                      </p>

                      <p className="text-[10px] text-[#8e8574] italic">
                        Bahan: {design.fabric}
                      </p>

                      <div className="flex items-center gap-1 pt-1">
                        {design.palette.map((c, idx) => (
                          <span
                            key={idx}
                            className="w-3.5 h-3.5 rounded-full border border-white/20 inline-block"
                            style={{ backgroundColor: c.hex }}
                            title={c.name}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-2 border-t border-[#d4af37]/15 flex items-center justify-between text-xs">
                    <span className="text-[10px] text-[#7d7565]">
                      {design.createdAt}
                    </span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onOpenCertificate(design)}
                        className="flex items-center gap-1 px-2.5 py-1 text-[11px] border border-[#d4af37]/30 text-[#d4af37] hover:bg-[#d4af37]/10 rounded transition-colors"
                      >
                        <Award className="w-3 h-3" />
                        <span>Sertifikat</span>
                      </button>
                      <button
                        onClick={() => onDeleteDesign(design.id)}
                        className="p-1 text-[#8e8574] hover:text-[#ef4444] transition-colors"
                        title="Hapus dari Lookbook"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-[#d4af37]/20 pt-4 flex items-center justify-between text-xs text-[#8e8574] shrink-0">
          <span>{savedDesigns.length} Rancangan Tersimpan</span>
          <button
            onClick={onClose}
            className="px-4 py-2 border border-[#d4af37]/40 text-[#f5eedc] hover:bg-[#d4af37]/10 font-cinzel rounded transition-colors"
          >
            Tutup Lookbook
          </button>
        </div>
      </div>
    </div>
  );
};

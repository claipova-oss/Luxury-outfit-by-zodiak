import React from 'react';
import { SavedCustomDesign } from './ZodiacOutfitStudio';
import { X, Printer, Award, ShieldCheck, Sparkles } from 'lucide-react';

interface BespokeCertificateModalProps {
  design: SavedCustomDesign | null;
  onClose: () => void;
}

export const BespokeCertificateModal: React.FC<BespokeCertificateModalProps> = ({ design, onClose }) => {
  if (!design) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#090d16] border-2 border-[#d4af37] rounded-lg p-6 sm:p-10 shadow-2xl text-[#e5e0d8] overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#a8a090] hover:text-[#f5eedc] transition-colors focus:outline-none"
          aria-label="Tutup"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Outer Guilloché / Gold Border */}
        <div className="border border-[#d4af37]/40 p-6 rounded relative space-y-6">
          {/* Header */}
          <div className="text-center space-y-2 border-b border-[#d4af37]/30 pb-4">
            <span className="text-[11px] font-cinzel tracking-[0.3em] text-[#d4af37] uppercase block">
              MAISON ZODIAQUE · ATELIER PRIVÉ DE PARIS & MILANO
            </span>
            <h2 className="text-2xl sm:text-3xl font-cinzel font-bold text-[#f8f5ee]">
              CERTIFICAT D’AUTHENTICITÉ
            </h2>
            <p className="text-xs font-serif italic text-[#c5a059]">
              Sertifikat Keaslian Adibusana {design.gender === 'male' ? 'Pria (Pour Homme)' : 'Wanita (Pour Femme)'} Berdasarkan Rasi Bintang
            </p>
          </div>

          {/* Certificate Body */}
          <div className="space-y-4 text-xs">
            <div className="flex items-center justify-between border-b border-[#d4af37]/20 pb-3">
              <div>
                <span className="text-[#8f8574] text-[10px] block font-cinzel">ZODIAK & RASI BINTANG</span>
                <span className="text-sm font-cinzel font-semibold text-[#f8f5ee]">
                  {design.zodiacName} ({design.zodiacSymbol}) · {design.gender === 'male' ? 'POUR HOMME' : 'POUR FEMME'}
                </span>
                <span className="text-[11px] text-[#c5a059] block">{design.zodiacElement}</span>
              </div>

              {/* Monogram Seal */}
              <div className="w-16 h-16 rounded-full border-2 border-[#d4af37] bg-[#0c101c] flex flex-col items-center justify-center shadow-lg">
                <span className="text-[9px] font-mono text-[#8f8574]">SCEAU</span>
                <span className="text-sm font-cinzel font-bold text-[#d4af37]">{design.monogram}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <span className="text-[#8f8574] text-[10px] block font-cinzel">NAMA MASTERPIECE</span>
                <span className="text-xs font-semibold text-[#f5eedc]">{design.outfitTitle}</span>
              </div>
              <div>
                <span className="text-[#8f8574] text-[10px] block font-cinzel">SILUET ADIBUSANA</span>
                <span className="text-xs text-[#d4af37] font-medium">{design.silhouette}</span>
              </div>
              <div>
                <span className="text-[#8f8574] text-[10px] block font-cinzel">PERHELATAN DITUJU</span>
                <span className="text-xs text-[#f5eedc]">{design.occasion}</span>
              </div>
              <div>
                <span className="text-[#8f8574] text-[10px] block font-cinzel">TEKSTIL & BAHAN UTAMA</span>
                <span className="text-xs text-[#f5eedc]">{design.fabric}</span>
              </div>
              <div className="col-span-2">
                <span className="text-[#8f8574] text-[10px] block font-cinzel">ORNAMEN SULAMAN</span>
                <span className="text-xs text-[#f5eedc]">{design.ornament}</span>
              </div>
            </div>

            {/* Stylist Tailor Advice */}
            <div className="bg-[#070910] p-3 rounded border border-[#d4af37]/25 space-y-1">
              <span className="text-[10px] font-cinzel text-[#c5a059] block">
                DIKTE PENATA GAYA ATELIER (ATELIER DIRECTIVE)
              </span>
              <p className="text-xs font-cormorant italic text-[#cec7b8] leading-relaxed">
                "{design.tailorAdvice}"
              </p>
            </div>

            {/* Verification Signatures */}
            <div className="pt-4 border-t border-[#d4af37]/20 flex items-center justify-between text-[10px] text-[#8f8574]">
              <div>
                <span>REGISTRASI KOSMIS: </span>
                <span className="font-mono text-[#d4af37]">MZ-{Date.now().toString().slice(-6)}</span>
              </div>
              <div className="text-right">
                <span>DITERBITKAN PADA: </span>
                <span className="text-[#f5eedc]">{design.createdAt}</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex items-center justify-end gap-3 print:hidden">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 py-2 border border-[#d4af37]/40 text-[#f5eedc] hover:bg-[#d4af37]/10 text-xs font-cinzel rounded transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Cetak Sertifikat</span>
            </button>
            <button
              onClick={onClose}
              className="px-5 py-2 bg-[#d4af37] text-[#06080d] hover:bg-[#e7cb68] text-xs font-cinzel font-medium rounded transition-colors cursor-pointer"
            >
              Selesai
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

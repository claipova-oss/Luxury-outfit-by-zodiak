import React from 'react';

interface FooterProps {
  onNavigate: (tab: 'home' | 'find-zodiac' | 'design-outfit' | 'lookbook') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="border-t border-[#d4af37]/20 bg-[#05070a] text-[#8e8574] py-12 px-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Brand & Descriptor */}
          <div className="space-y-1">
            <span className="text-lg font-cinzel font-semibold tracking-widest text-[#f5eedc]">
              MAISON ZODIAQUE
            </span>
            <p className="text-xs text-[#a69c8a] font-serif italic">
              Haute Couture Astrologique · Salons Privés Paris & Jakarta
            </p>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex items-center gap-6 text-xs font-cinzel text-[#b8b0a2]">
            <button
              onClick={() => onNavigate('home')}
              className="hover:text-[#d4af37] transition-colors cursor-pointer"
            >
              Beranda
            </button>
            <button
              onClick={() => onNavigate('find-zodiac')}
              className="hover:text-[#d4af37] transition-colors cursor-pointer"
            >
              Ketahui Zodiakmu
            </button>
            <button
              onClick={() => onNavigate('design-outfit')}
              className="hover:text-[#d4af37] transition-colors cursor-pointer"
            >
              Desain Pakaianmu
            </button>
            <button
              onClick={() => onNavigate('lookbook')}
              className="hover:text-[#d4af37] transition-colors cursor-pointer"
            >
              Lookbook Koleksi
            </button>
          </nav>
        </div>

        {/* Hairline Divider & Copyright */}
        <div className="pt-6 border-t border-[#d4af37]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#6b6456]">
          <p>© {new Date().getFullYear()} Maison Zodiaque. Seluruh Hak Cipta Dilindungi.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Atelier de Broderie Céleste</span>
            <span aria-hidden="true">·</span>
            <span>Artisanat d'Excellence</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

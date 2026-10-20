import React from 'react';
import { Sparkles, Bookmark } from 'lucide-react';

interface NavbarProps {
  activeTab: 'home' | 'find-zodiac' | 'design-outfit' | 'lookbook';
  setActiveTab: (tab: 'home' | 'find-zodiac' | 'design-outfit' | 'lookbook') => void;
  savedCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, savedCount }) => {
  return (
    <header className="sticky top-0 z-50 bg-[#06080d]/90 backdrop-blur-md border-b border-[#d4af37]/20 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <button
          onClick={() => setActiveTab('home')}
          className="text-left group cursor-pointer focus:outline-none"
        >
          <span className="text-xl md:text-2xl font-cinzel font-semibold tracking-widest text-[#f5eedc] group-hover:text-[#d4af37] transition-colors whitespace-nowrap shrink-0">
            MAISON ZODIAQUE
          </span>
        </button>

        {/* Zone 2: Navigation Links (Single-line, clear, no pills) */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wider text-[#b8b0a2]">
          <button
            onClick={() => setActiveTab('home')}
            className={`transition-colors whitespace-nowrap shrink-0 hover:text-[#d4af37] ${
              activeTab === 'home' ? 'text-[#d4af37] font-semibold' : ''
            }`}
          >
            Beranda
          </button>
          <button
            onClick={() => setActiveTab('find-zodiac')}
            className={`transition-colors whitespace-nowrap shrink-0 hover:text-[#d4af37] ${
              activeTab === 'find-zodiac' ? 'text-[#d4af37] font-semibold' : ''
            }`}
          >
            Ketahui Zodiakmu
          </button>
          <button
            onClick={() => setActiveTab('design-outfit')}
            className={`transition-colors whitespace-nowrap shrink-0 hover:text-[#d4af37] ${
              activeTab === 'design-outfit' ? 'text-[#d4af37] font-semibold' : ''
            }`}
          >
            Desain Pakaianmu
          </button>
          <button
            onClick={() => setActiveTab('lookbook')}
            className={`flex items-center gap-2 transition-colors whitespace-nowrap shrink-0 hover:text-[#d4af37] ${
              activeTab === 'lookbook' ? 'text-[#d4af37] font-semibold' : ''
            }`}
          >
            <span>Lookbook</span>
            {savedCount > 0 && (
              <span className="text-xs font-mono tabular-nums text-[#d4af37] border border-[#d4af37]/40 px-1.5 py-0.2 rounded">
                {savedCount}
              </span>
            )}
          </button>
        </nav>

        {/* Zone 3: Primary CTA */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => setActiveTab('design-outfit')}
            className="flex items-center gap-2 px-5 py-2.5 text-xs font-cinzel font-medium tracking-widest uppercase text-[#06080d] bg-gradient-to-r from-[#e7cb68] via-[#d4af37] to-[#b89330] rounded-sm hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap shrink-0 shadow-lg shadow-[#d4af37]/10"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#06080d]" />
            <span>Mulai Kurasi</span>
          </button>

          {/* Mobile Quick Lookbook Button */}
          <button
            onClick={() => setActiveTab('lookbook')}
            className="md:hidden p-2 text-[#d4af37] border border-[#d4af37]/30 rounded-sm relative"
            aria-label="Buka Lookbook"
          >
            <Bookmark className="w-4 h-4" />
            {savedCount > 0 && (
              <span className="absolute -top-1 -right-1 text-[10px] font-mono tabular-nums bg-[#d4af37] text-[#06080d] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {savedCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Tab Bar */}
      <div className="md:hidden flex items-center justify-around pt-3 mt-3 border-t border-[#d4af37]/15 text-xs text-[#a8a192]">
        <button
          onClick={() => setActiveTab('home')}
          className={`py-1 ${activeTab === 'home' ? 'text-[#d4af37] font-medium' : ''}`}
        >
          Beranda
        </button>
        <button
          onClick={() => setActiveTab('find-zodiac')}
          className={`py-1 ${activeTab === 'find-zodiac' ? 'text-[#d4af37] font-medium' : ''}`}
        >
          Ketahui Zodiak
        </button>
        <button
          onClick={() => setActiveTab('design-outfit')}
          className={`py-1 ${activeTab === 'design-outfit' ? 'text-[#d4af37] font-medium' : ''}`}
        >
          Desain Outfit
        </button>
      </div>
    </header>
  );
};

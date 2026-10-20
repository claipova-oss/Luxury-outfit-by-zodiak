import React from 'react';
import { ZODIAC_SIGNS, ZodiacSign } from '../data/zodiacData';
import { Compass, Sparkles } from 'lucide-react';

interface CelestialZodiacWheelProps {
  selectedZodiac: ZodiacSign;
  onSelectZodiac: (sign: ZodiacSign) => void;
}

export const CelestialZodiacWheel: React.FC<CelestialZodiacWheelProps> = ({
  selectedZodiac,
  onSelectZodiac,
}) => {
  const currentIndex = ZODIAC_SIGNS.findIndex((z) => z.id === selectedZodiac.id);
  // Each step is 30 degrees (360 / 12)
  const rotationDegree = -currentIndex * 30;

  return (
    <div className="relative py-8 overflow-hidden">
      {/* Background Starlight Ambient Glow */}
      <div className="absolute inset-0 bg-radial from-[#d4af37]/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 flex flex-col items-center">
        {/* Title Bar */}
        <div className="flex items-center gap-2 text-xs font-cinzel text-[#d4af37] tracking-[0.25em] mb-2 uppercase">
          <Compass className="w-3.5 h-3.5" />
          <span>RODA ZODIAK ASTRONOMI · ATELIER HOROLOGE</span>
        </div>
        <p className="text-xs text-[#a69c8a] font-serif italic text-center mb-6 max-w-md">
          Pilih atau putar roda rasi bintang untuk beralih ke karakteristik busana adibusana zodiak yang diinginkan.
        </p>

        {/* The Visual Rotating Dial */}
        <div className="relative w-72 h-72 sm:w-88 sm:h-88 flex items-center justify-center">
          {/* Top Marker Needle (Golden Astrological Indicator) */}
          <div className="absolute -top-3 z-30 flex flex-col items-center pointer-events-none">
            <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[10px] border-t-[#f3e5ab] filter drop-shadow-[0_0_8px_rgba(212,175,55,0.8)]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#f3e5ab] mt-0.5 animate-pulse" />
          </div>

          {/* Outer Decorative Gold Rims */}
          <div className="absolute inset-0 rounded-full border border-[#d4af37]/30 shadow-[0_0_30px_rgba(212,175,55,0.15)] pointer-events-none" />
          <div className="absolute inset-3 rounded-full border border-dashed border-[#d4af37]/20 pointer-events-none" />
          <div className="absolute inset-10 rounded-full border border-[#d4af37]/15 pointer-events-none" />

          {/* Rotating Ring Container */}
          <div
            className="w-full h-full rounded-full relative transition-transform duration-700 ease-out"
            style={{ transform: `rotate(${rotationDegree}deg)` }}
          >
            {ZODIAC_SIGNS.map((sign, index) => {
              const angle = index * 30; // 0, 30, 60, ...
              const isSelected = sign.id === selectedZodiac.id;
              // Radius in percent
              const radius = 40; // % from center
              const x = 50 + radius * Math.cos(((angle - 90) * Math.PI) / 180);
              const y = 50 + radius * Math.sin(((angle - 90) * Math.PI) / 180);

              return (
                <button
                  key={sign.id}
                  onClick={() => onSelectZodiac(sign)}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full flex flex-col items-center justify-center cursor-pointer transition-all duration-300 group z-20 ${
                    isSelected
                      ? 'bg-[#d4af37] text-[#06080d] scale-125 shadow-[0_0_15px_rgba(212,175,55,0.9)] ring-2 ring-[#fef9c3]'
                      : 'bg-[#0a0d16] text-[#c5a059] border border-[#d4af37]/40 hover:scale-110 hover:border-[#d4af37] hover:text-[#f8f5ee]'
                  }`}
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: `translate(-50%, -50%) rotate(${-rotationDegree}deg)`,
                  }}
                  title={`${sign.name} (${sign.dateRange})`}
                >
                  <span className="text-base sm:text-lg font-serif font-bold leading-none">
                    {sign.symbol}
                  </span>
                  <span className={`text-[8px] font-cinzel tracking-tighter ${isSelected ? 'font-bold' : 'opacity-80'}`}>
                    {sign.name.slice(0, 3).toUpperCase()}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Center Sun & Core Compass */}
          <div className="absolute z-10 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#080b13] border border-[#d4af37]/60 flex flex-col items-center justify-center p-2 text-center shadow-inner pointer-events-none">
            <span className="text-2xl sm:text-3xl font-serif text-[#d4af37] leading-none mb-0.5">
              {selectedZodiac.symbol}
            </span>
            <span className="text-xs font-cinzel font-bold text-[#f8f5ee] tracking-wider uppercase">
              {selectedZodiac.name}
            </span>
            <span className="text-[9px] font-mono text-[#a69c8a] tracking-tight">
              {selectedZodiac.dateRange.split('–')[0].trim()}
            </span>
          </div>
        </div>

        {/* Selected Zodiac Quick Summary Ribbon */}
        <div className="mt-6 flex items-center justify-center gap-3 text-xs text-[#a69c8a] font-cinzel">
          <span>{selectedZodiac.latinName}</span>
          <span aria-hidden="true" className="text-[#d4af37]">·</span>
          <span className="text-[#f5eedc] font-medium">{selectedZodiac.elementLabel}</span>
          <span aria-hidden="true" className="text-[#d4af37]">·</span>
          <span>{selectedZodiac.rulingPlanet}</span>
        </div>
      </div>
    </div>
  );
};

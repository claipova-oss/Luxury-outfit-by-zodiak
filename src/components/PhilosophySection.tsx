import React from 'react';
import { Flame, Mountain, Wind, Droplets } from 'lucide-react';

export const PhilosophySection: React.FC = () => {
  const elements = [
    {
      icon: Flame,
      title: 'Elemen Api (Feu)',
      zodiacs: 'Aries · Leo · Sagitarius',
      color: '#e11d48',
      desc: 'Siluet tegas berkuasa, kerah barok, beludru merah darah kirmizi, dan bordir benang emas murni yang memancarkan dominasi ningrat.'
    },
    {
      icon: Mountain,
      title: 'Elemen Tanah (Terre)',
      zodiacs: 'Taurus · Virgo · Capricorn',
      color: '#16a34a',
      desc: 'Quiet luxury sejati. Struktur kasmir Vicuña tanpa cela, jahitan tangan millimeter-perfect, palet ivory champagne, dan batu zamrud berkelas.'
    },
    {
      icon: Wind,
      title: 'Elemen Udara (Air)',
      zodiacs: 'Gemini · Libra · Aquarius',
      color: '#64748b',
      desc: 'Lipit arsitektural (plissé), simetri dewi Venus, sutra metalik platinum, dan inovasi avant-garde yang senantiasa selangkah di depan zaman.'
    },
    {
      icon: Droplets,
      title: 'Elemen Air (Eau)',
      zodiacs: 'Cancer · Scorpio · Pisces',
      color: '#0284c7',
      desc: 'Drapery mengalir bagai cairan samudra malam, kilau mutiara laut selatan, misteri beludru obsidian noir, dan aroma wangi mistik yang menghanyutkan.'
    }
  ];

  return (
    <section className="py-16 border-t border-[#d4af37]/20 bg-[#07090f] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-cinzel tracking-widest text-[#d4af37]">
            <span>PHILOSOPHIE CÉLESTE</span>
            <span aria-hidden="true">·</span>
            <span>HARMONI EMPAT ELEMEN PRIMORDIAL</span>
          </div>
          <h2 className="text-3xl font-cinzel font-semibold text-[#f8f5ee]">
            Rasi Bintang & Arsitektur Busana Mewah
          </h2>
          <p className="text-base font-cormorant italic text-[#bcb4a2] max-w-xl mx-auto">
            Setiap elemen kosmis mendikte tekstur kain, garis potongan, dan pilihan permata pusaka yang membangkitkan pesona sejati pemakainya.
          </p>
        </div>

        {/* 2-Column Split: Celestial Wheel Visual + 4 Elemental Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Celestial Astrological Wheel */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-lg overflow-hidden border border-[#d4af37]/35 shadow-2xl bg-[#080b13] group">
              <img
                src="/src/assets/images/zodiac_constellation_wheel_1792493601858.jpg"
                alt="Peta Rasi Bintang Emas Astronomi"
                className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06080d]/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <span className="text-xs font-cinzel tracking-widest text-[#d4af37] block">
                  SPHÈRE ARMILLAIRE & ZODIAQUE
                </span>
                <span className="text-[11px] font-mono text-[#8e8574]">
                  Harmonisasi Konstelasi Langit & Desain Adibusana
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Elements */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {elements.map((elem, idx) => {
              const Icon = elem.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#0b0f19] border border-[#d4af37]/20 p-5 rounded-lg space-y-2 hover:border-[#d4af37]/45 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Icon className="w-4 h-4 text-[#d4af37]" />
                    <h3 className="text-sm font-cinzel font-semibold text-[#f8f5ee]">
                      {elem.title}
                    </h3>
                  </div>
                  <p className="text-[11px] font-mono text-[#c5a059]">
                    {elem.zodiacs}
                  </p>
                  <p className="text-xs text-[#a8a090] font-light leading-relaxed">
                    {elem.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

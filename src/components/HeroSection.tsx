import React, { useState } from 'react';
import { Compass, Sparkles, ArrowRight, User, Users, Calendar, Check, Star } from 'lucide-react';
import { calculateZodiacFromDate, ZodiacSign, ZODIAC_SIGNS } from '../data/zodiacData';

interface HeroSectionProps {
  onFindZodiac: () => void;
  onDesignOutfit: (gender?: 'female' | 'male') => void;
  genderMode?: 'female' | 'male';
  onToggleGender?: (gender: 'female' | 'male') => void;
}

const MONTH_NAMES = [
  'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
  'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
];

export const HeroSection: React.FC<HeroSectionProps> = ({
  onFindZodiac,
  onDesignOutfit,
  genderMode = 'male',
  onToggleGender,
}) => {
  const currentGender = genderMode || 'male';
  const handleToggle = (g: 'female' | 'male') => {
    if (onToggleGender) {
      onToggleGender(g);
    }
  };

  // Quick Hero Birthday interactive detector
  const [quickDay, setQuickDay] = useState<number>(15);
  const [quickMonth, setQuickMonth] = useState<number>(8); // Leo default
  const [detectedSign, setDetectedSign] = useState<ZodiacSign>(calculateZodiacFromDate(15, 8));

  const handleHeroDateChange = (d: number, m: number) => {
    setQuickDay(d);
    setQuickMonth(m);
    setDetectedSign(calculateZodiacFromDate(d, m));
  };

  // Selected hero preview model card
  const [heroModelLook, setHeroModelLook] = useState<'gala' | 'executive' | 'avantgarde'>('gala');

  // Images for male and female haute couture
  const maleImages = {
    gala: '/src/assets/images/couture_men_royal_tuxedo_1792495982592.jpg',
    executive: '/src/assets/images/couture_men_executive_suit_1792495982426.jpg',
    avantgarde: '/src/assets/images/couture_men_avantgarde_1792495983417.jpg'
  };

  const femaleImages = {
    gala: '/src/assets/images/zodiac_hero_couture_1792493601804.jpg',
    executive: '/src/assets/images/zodiac_earth_couture_1792493603647.jpg',
    avantgarde: '/src/assets/images/zodiac_air_couture_1792493624459.jpg'
  };

  const currentDisplayImage =
    currentGender === 'male' ? maleImages[heroModelLook] : femaleImages[heroModelLook];

  return (
    <section className="relative overflow-hidden border-b border-[#d4af37]/25 pt-8 pb-16">
      {/* Background Starry Nebula & Constellation Atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#090d16]/95 via-[#06080d] to-[#06080d] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#d4af37]/15 via-[#38bdf8]/5 to-[#e11d48]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Astrological Constellation Rings */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full border border-[#d4af37]/15 pointer-events-none hidden lg:block" />
      <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full border border-dashed border-[#d4af37]/10 pointer-events-none hidden lg:block" />

      {/* Subtle Constellation Star Points */}
      <div className="absolute top-12 left-10 text-[#d4af37]/30 text-xs hidden sm:block pointer-events-none font-serif">
        ✦ Pola Bintang Orion
      </div>
      <div className="absolute top-36 right-16 text-[#d4af37]/25 text-xs hidden sm:block pointer-events-none font-serif">
        ✧ Alfa Centauri
      </div>
      <div className="absolute bottom-12 left-1/4 text-[#d4af37]/20 text-xs hidden sm:block pointer-events-none font-serif">
        ✦ Sirius Stella Nova
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Brand Story & Interactive Selection */}
          <div className="lg:col-span-7 space-y-6">
            {/* Clean Unboxed Editorial Metadata */}
            <div className="flex items-center gap-2 text-xs font-cinzel tracking-widest text-[#d4af37]">
              <span>MAISON ZODIAQUE</span>
              <span aria-hidden="true">·</span>
              <span>PARIS · MILANO</span>
              <span aria-hidden="true">·</span>
              <span>HAUTE COUTURE ASTROLOGIQUE</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-cinzel font-semibold text-[#f8f5ee] leading-tight text-balance">
              Kemewahan Adibusana Berdasarkan{' '}
              <span className="gold-gradient-text">Rasi Bintang & Kepribadian</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg font-cormorant italic text-[#cec7b8] leading-relaxed max-w-2xl text-balance">
              Ekspresikan kepribadian kosmis Anda melalui kurasi busana mewah berkelas tinggi. Kini dilengkapi koleksi lengkap dengan <strong>10 model adibusana unik berbeda untuk Pria (Pour Homme)</strong> dan <strong>10 model adibusana unik berbeda untuk Wanita (Pour Femme)</strong> pada setiap rasi bintang (total 240 model bespoke).
            </p>

            {/* Interactive Gender Toggle Bar */}
            <div className="space-y-2">
              <span className="block text-[11px] font-cinzel text-[#8f8574] uppercase tracking-wider font-semibold">
                Pilih Kategori Busana Klien:
              </span>
              <div className="inline-flex p-1 bg-[#090d16] border border-[#d4af37]/30 rounded-lg shadow-inner">
                <button
                  type="button"
                  onClick={() => handleToggle('male')}
                  className={`flex items-center gap-2 px-4 py-2 text-xs font-cinzel rounded transition-all cursor-pointer ${
                    currentGender === 'male'
                      ? 'bg-[#d4af37] text-[#06080d] font-bold shadow-md shadow-[#d4af37]/25 ring-1 ring-white/40'
                      : 'text-[#a69c8a] hover:text-[#f5eedc]'
                  }`}
                >
                  <User className="w-4 h-4" />
                  <span>Koleksi Model Pria (Pour Homme)</span>
                  {currentGender === 'male' && <Check className="w-3.5 h-3.5" />}
                </button>
                <button
                  type="button"
                  onClick={() => handleToggle('female')}
                  className={`flex items-center gap-2 px-4 py-2 text-xs font-cinzel rounded transition-all cursor-pointer ${
                    currentGender === 'female'
                      ? 'bg-[#d4af37] text-[#06080d] font-bold shadow-md shadow-[#d4af37]/25 ring-1 ring-white/40'
                      : 'text-[#a69c8a] hover:text-[#f5eedc]'
                  }`}
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Koleksi Model Wanita (Pour Femme)</span>
                  {currentGender === 'female' && <Check className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            {/* Interactive Quick Birthday Detector Widget */}
            <div className="p-4 bg-[#0a0e1a]/90 border border-[#d4af37]/35 rounded-lg space-y-3 shadow-xl max-w-xl">
              <div className="flex items-center justify-between text-xs font-cinzel text-[#d4af37]">
                <div className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Kalkulator Cepat Rasi Bintang Kelahiran</span>
                </div>
                <span className="text-[10px] text-[#8e8574] font-mono">INSTANT DETECT</span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="block text-[11px] text-[#a69c8a] mb-1">Tanggal</label>
                  <select
                    value={quickDay}
                    onChange={(e) => handleHeroDateChange(Number(e.target.value), quickMonth)}
                    className="w-full bg-[#06080d] border border-[#d4af37]/30 rounded px-2.5 py-1.5 text-[#f5eedc] text-xs focus:outline-none focus:border-[#d4af37]"
                  >
                    {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
                      <option key={d} value={d}>
                        Tgl {d}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] text-[#a69c8a] mb-1">Bulan</label>
                  <select
                    value={quickMonth}
                    onChange={(e) => handleHeroDateChange(quickDay, Number(e.target.value))}
                    className="w-full bg-[#06080d] border border-[#d4af37]/30 rounded px-2.5 py-1.5 text-[#f5eedc] text-xs focus:outline-none focus:border-[#d4af37]"
                  >
                    {MONTH_NAMES.map((name, idx) => (
                      <option key={idx + 1} value={idx + 1}>
                        {name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex items-center justify-between pt-1 border-t border-[#d4af37]/15 text-xs">
                <div className="flex items-center gap-2">
                  <span className="text-xl font-serif text-[#d4af37]">{detectedSign.symbol}</span>
                  <div>
                    <span className="font-cinzel font-bold text-[#f5eedc]">{detectedSign.name}</span>
                    <span className="text-[#8e8574] text-[11px] ml-1.5">({detectedSign.elementLabel})</span>
                  </div>
                </div>
                <span className="text-[11px] text-[#d4af37] font-serif italic">
                  10 Model {currentGender === 'male' ? 'Pria' : 'Wanita'} Siap Dipilih
                </span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={onFindZodiac}
                className="flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#e7cb68] via-[#d4af37] to-[#b89330] text-[#06080d] font-cinzel font-medium text-xs tracking-widest uppercase rounded-sm hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer shadow-lg shadow-[#d4af37]/20"
              >
                <Compass className="w-4 h-4" />
                <span>1. Ketahui Zodiakmu</span>
              </button>

              <button
                type="button"
                onClick={() => onDesignOutfit(currentGender)}
                className="flex items-center justify-center gap-2 px-6 py-3.5 border border-[#d4af37]/60 text-[#f5eedc] hover:bg-[#d4af37]/15 font-cinzel font-medium text-xs tracking-widest uppercase rounded-sm transition-all cursor-pointer group"
              >
                <Sparkles className="w-4 h-4 text-[#d4af37]" />
                <span>2. Desain Outfit {currentGender === 'male' ? 'Pria' : 'Wanita'} (10 Model)</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#d4af37] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Atelier Trust & Scope Counters */}
            <div className="pt-6 border-t border-[#d4af37]/15 grid grid-cols-3 gap-4 text-xs text-[#9a9181]">
              <div>
                <p className="text-[#f5eedc] font-cinzel text-sm font-semibold">12 Rasi Lengkap</p>
                <p className="font-light">Analisis karakter & tabu busana</p>
              </div>
              <div>
                <p className="text-[#f5eedc] font-cinzel text-sm font-semibold">240 Model Bespoke</p>
                <p className="font-light">10 model pria & 10 wanita per rasi</p>
              </div>
              <div>
                <p className="text-[#f5eedc] font-cinzel text-sm font-semibold">10 Tema Adibusana</p>
                <p className="font-light">Gala, Eksekutif, Opera, Masquerade, dll</p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Runway Editorial Model Dual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto rounded-lg overflow-hidden border border-[#d4af37]/45 shadow-2xl bg-[#090d16] group">
              {/* Runway Image with dynamic model portrait */}
              <img
                src={currentDisplayImage}
                alt={currentGender === 'male' ? 'Model Pria Adibusana Mewah' : 'Model Wanita Adibusana Mewah'}
                className="w-full h-[520px] object-cover object-top group-hover:scale-103 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              {/* Subtle Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#06080d] via-transparent to-transparent opacity-90" />

              {/* Tag Badge Top Left */}
              <div className="absolute top-4 left-4 flex items-center gap-2 text-[10px] font-cinzel font-semibold text-[#06080d] bg-[#d4af37] px-3 py-1 rounded-sm shadow-md">
                <span>{currentGender === 'male' ? 'COLLECTION HOMME 2026' : 'COLLECTION FEMME 2026'}</span>
              </div>

              {/* Quick Model Style Switcher Tabs on the Image */}
              <div className="absolute top-4 right-4 flex items-center gap-1 z-20">
                <button
                  type="button"
                  onClick={() => setHeroModelLook('gala')}
                  className={`px-2.5 py-1 text-[10px] font-cinzel rounded backdrop-blur-md cursor-pointer transition-colors ${
                    heroModelLook === 'gala'
                      ? 'bg-[#d4af37] text-[#06080d] font-bold'
                      : 'bg-[#06080d]/80 text-[#d4af37] border border-[#d4af37]/30 hover:bg-[#d4af37]/20'
                  }`}
                >
                  Gala
                </button>
                <button
                  type="button"
                  onClick={() => setHeroModelLook('executive')}
                  className={`px-2.5 py-1 text-[10px] font-cinzel rounded backdrop-blur-md cursor-pointer transition-colors ${
                    heroModelLook === 'executive'
                      ? 'bg-[#d4af37] text-[#06080d] font-bold'
                      : 'bg-[#06080d]/80 text-[#d4af37] border border-[#d4af37]/30 hover:bg-[#d4af37]/20'
                  }`}
                >
                  Eksekutif
                </button>
                <button
                  type="button"
                  onClick={() => setHeroModelLook('avantgarde')}
                  className={`px-2.5 py-1 text-[10px] font-cinzel rounded backdrop-blur-md cursor-pointer transition-colors ${
                    heroModelLook === 'avantgarde'
                      ? 'bg-[#d4af37] text-[#06080d] font-bold'
                      : 'bg-[#06080d]/80 text-[#d4af37] border border-[#d4af37]/30 hover:bg-[#d4af37]/20'
                  }`}
                >
                  Avant-Garde
                </button>
              </div>

              {/* High-End Inscription Bottom Plaque */}
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#0a0d16]/95 backdrop-blur-md border border-[#d4af37]/35 rounded-sm space-y-1.5">
                <div className="flex items-center justify-between text-[11px] text-[#c5a059] font-cinzel">
                  <span className="font-semibold uppercase tracking-wider">
                    {currentGender === 'male'
                      ? heroModelLook === 'gala'
                        ? 'Le Smoking Impérial à Broderie d’Or'
                        : heroModelLook === 'executive'
                        ? 'Le Costume Croisé Aristocratique'
                        : 'Le Manteau Drapé Céleste Platinum'
                      : heroModelLook === 'gala'
                      ? 'Robe de Bal aux Constellations'
                      : heroModelLook === 'executive'
                      ? 'Tailleur Structuré Émeraude'
                      : 'Robe Plissée Chiffon Astral'}
                  </span>
                  <span className="font-mono text-[#8a816f] text-[10px]">ÉDITION 2026</span>
                </div>

                <p className="text-xs text-[#e5e0d8] font-serif italic">
                  {currentGender === 'male'
                    ? heroModelLook === 'gala'
                      ? 'Tuxedo beludru hitam bersulam benang emas antik 24K rasi bintang dengan kancing onyx mikimoto.'
                      : heroModelLook === 'executive'
                      ? 'Jas double-breasted garis halus wol serge Milanese dengan manset rasi bintang berlapis emas.'
                      : 'Mantel draping perak platinum arsitektural terinspirasi lintasan kosmis bintang Paris.'
                    : heroModelLook === 'gala'
                    ? 'Gaun malam haute couture bersulam rasi bintang benang emas murni dengan siluet ningrat.'
                    : heroModelLook === 'executive'
                    ? 'Setelan blazer wol terstruktur dengan aksen perhiasan batu zamrud kelahiran kosmis.'
                    : 'Gaun sutra georgette lipit asimetris melambai lembut bagai angin kosmis semesta.'}
                </p>

                <div className="pt-1 flex items-center justify-between text-[10px] text-[#a69c8a] font-cinzel">
                  <span>MODEL {currentGender === 'male' ? 'PRIA' : 'WANITA'} TERPILIH</span>
                  <button
                    type="button"
                    onClick={() => onDesignOutfit(currentGender)}
                    className="text-[#d4af37] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>Kustomisasi Model Ini</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

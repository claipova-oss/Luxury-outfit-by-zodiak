import React, { useState } from 'react';
import { ZODIAC_SIGNS, ZodiacSign, calculateZodiacFromDate, getModelImage } from '../data/zodiacData';
import { ConstellationViewer } from './ConstellationViewer';
import { Calendar, Sparkles, ArrowRight, Star, Compass, ShieldAlert, Award, User } from 'lucide-react';

interface ZodiacFinderProps {
  selectedZodiac: ZodiacSign;
  onSelectZodiac: (sign: ZodiacSign) => void;
  onProceedToDesign: (sign: ZodiacSign) => void;
  genderMode?: 'female' | 'male';
  onToggleGender?: (gender: 'female' | 'male') => void;
}

const MONTH_NAMES = [
  'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
  'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
];

export const ZodiacFinder: React.FC<ZodiacFinderProps> = ({
  selectedZodiac,
  onSelectZodiac,
  onProceedToDesign,
  genderMode = 'male',
  onToggleGender,
}) => {
  const currentGender = genderMode || 'male';
  const handleToggle = (g: 'female' | 'male') => {
    if (onToggleGender) {
      onToggleGender(g);
    }
  };

  const [selectedDay, setSelectedDay] = useState<number>(selectedZodiac.startDay);
  const [selectedMonth, setSelectedMonth] = useState<number>(selectedZodiac.startMonth);
  const [calculatedNote, setCalculatedNote] = useState<string>('');
  const [activeMediaView, setActiveMediaView] = useState<'constellation' | 'editorial'>('constellation');

  const handleDateCalculation = (day: number, month: number) => {
    setSelectedDay(day);
    setSelectedMonth(month);
    const result = calculateZodiacFromDate(day, month);
    onSelectZodiac(result);
    setCalculatedNote(`Berdasarkan tanggal ${day} ${MONTH_NAMES[month - 1]}, rasi bintang Anda adalah ${result.name}.`);
  };

  const activeImage = getModelImage(selectedZodiac, 'gala', currentGender);

  return (
    <div className="space-y-12">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-cinzel tracking-widest text-[#d4af37]">
          <Compass className="w-3.5 h-3.5" />
          <span>MENU 01</span>
          <span aria-hidden="true">·</span>
          <span>DISCOVER YOUR CELESTIAL IDENTITY</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-cinzel font-semibold text-[#f8f5ee]">
          Ketahui Zodiak & Kepribadian Kosmismu
        </h2>
        <p className="text-base font-cormorant italic text-[#bcb4a2] max-w-xl mx-auto">
          Pilih tanggal lahir Anda atau jelajahi lambang rasi bintang untuk mengungkap analisis karakter mendalam dan rahasia pesona busana Anda.
        </p>

        {/* Gender Toggle Selector */}
        <div className="pt-2 flex items-center justify-center gap-2">
          <button
            type="button"
            onClick={() => handleToggle('male')}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-sm border text-xs font-cinzel transition-all cursor-pointer ${
              currentGender === 'male'
                ? 'bg-[#d4af37] text-[#06080d] font-bold border-[#d4af37] shadow'
                : 'bg-[#090d16] text-[#a69c8a] border-[#d4af37]/30 hover:border-[#d4af37] hover:text-[#f8f5ee]'
            }`}
          >
            <User className="w-3.5 h-3.5" />
            <span>Model Pria (Pour Homme)</span>
          </button>
          <button
            type="button"
            onClick={() => handleToggle('female')}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-sm border text-xs font-cinzel transition-all cursor-pointer ${
              currentGender === 'female'
                ? 'bg-[#d4af37] text-[#06080d] font-bold border-[#d4af37] shadow'
                : 'bg-[#090d16] text-[#a69c8a] border-[#d4af37]/30 hover:border-[#d4af37] hover:text-[#f8f5ee]'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Model Wanita (Pour Femme)</span>
          </button>
        </div>
      </div>

      {/* Date of Birth Picker Widget */}
      <div className="max-w-2xl mx-auto bg-night-card border border-[#d4af37]/30 p-6 rounded-lg shadow-xl">
        <div className="flex items-center gap-2 text-sm font-cinzel text-[#d4af37] mb-4">
          <Calendar className="w-4 h-4" />
          <span>Masukkan Bulan & Tanggal Lahir</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Day Selector */}
          <div>
            <label className="block text-xs text-[#a69c8a] mb-1.5 font-medium tracking-wide">
              Tanggal Lahir (1 – 31)
            </label>
            <select
              value={selectedDay}
              onChange={(e) => handleDateCalculation(Number(e.target.value), selectedMonth)}
              className="w-full bg-[#0a0d16] border border-[#d4af37]/30 rounded px-3 py-2.5 text-sm text-[#f5eedc] focus:outline-none focus:border-[#d4af37] transition-colors"
            >
              {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
                <option key={d} value={d} className="bg-[#0a0d16] text-[#f5eedc]">
                  Tanggal {d}
                </option>
              ))}
            </select>
          </div>

          {/* Month Selector */}
          <div>
            <label className="block text-xs text-[#a69c8a] mb-1.5 font-medium tracking-wide">
              Bulan Lahir
            </label>
            <select
              value={selectedMonth}
              onChange={(e) => handleDateCalculation(selectedDay, Number(e.target.value))}
              className="w-full bg-[#0a0d16] border border-[#d4af37]/30 rounded px-3 py-2.5 text-sm text-[#f5eedc] focus:outline-none focus:border-[#d4af37] transition-colors"
            >
              {MONTH_NAMES.map((name, i) => (
                <option key={i + 1} value={i + 1} className="bg-[#0a0d16] text-[#f5eedc]">
                  {name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {calculatedNote && (
          <p className="mt-4 text-xs font-serif text-[#d4af37] italic text-center">
            {calculatedNote}
          </p>
        )}
      </div>

      {/* 12 Zodiac Sign Grid Fast Selector */}
      <div className="space-y-4">
        <div className="text-center">
          <span className="text-xs font-cinzel text-[#8f8574] tracking-widest uppercase">
            Atau Pilih Langsung 12 Rasi Bintang
          </span>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2.5">
          {ZODIAC_SIGNS.map((sign) => {
            const isSelected = sign.id === selectedZodiac.id;
            return (
              <button
                key={sign.id}
                onClick={() => {
                  onSelectZodiac(sign);
                  setSelectedDay(sign.startDay);
                  setSelectedMonth(sign.startMonth);
                  setCalculatedNote('');
                }}
                className={`p-3 rounded border text-left transition-all cursor-pointer flex flex-col justify-between h-24 ${
                  isSelected
                    ? 'border-[#d4af37] bg-[#d4af37]/15 shadow-lg shadow-[#d4af37]/10'
                    : 'border-[#d4af37]/20 bg-[#090d16]/70 hover:border-[#d4af37]/50 hover:bg-[#d4af37]/5'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xl font-serif text-[#d4af37]">{sign.symbol}</span>
                  <span className="text-[10px] font-mono text-[#8a816f] uppercase">{sign.element}</span>
                </div>
                <div>
                  <div className={`text-xs font-cinzel font-medium ${isSelected ? 'text-[#f5eedc]' : 'text-[#c7bfaf]'}`}>
                    {sign.name}
                  </div>
                  <div className="text-[10px] text-[#7d7565] truncate font-light">
                    {sign.dateRange.split('–')[0].trim()}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Comprehensive Zodiac Profile Showcase */}
      <div className="bg-night-card border border-[#d4af37]/35 rounded-xl p-6 lg:p-10 shadow-2xl relative overflow-hidden">
        {/* Background Decorative Constellation Ring */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
          {/* Left Column: Constellation Chart & Sacred Attributes */}
          <div className="lg:col-span-5 space-y-5">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-cinzel text-[#c5a059]">
                <span>{selectedZodiac.constellationName}</span>
                <span aria-hidden="true">·</span>
                <span className="uppercase">{selectedZodiac.elementLabel}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-cinzel font-bold text-[#f8f5ee] flex items-center gap-3">
                <span>{selectedZodiac.name}</span>
                <span className="text-[#d4af37] text-2xl font-serif">{selectedZodiac.symbol}</span>
              </h3>
              <p className="text-xs text-[#8f8574] font-mono">
                {selectedZodiac.dateRange}
              </p>
            </div>

            {/* Media View Mode Switcher: Constellation vs Editorial Runway */}
            <div className="flex items-center gap-1 p-1 bg-[#090d16] border border-[#d4af37]/25 rounded text-xs font-cinzel">
              <button
                onClick={() => setActiveMediaView('constellation')}
                className={`flex-1 py-1.5 rounded transition-colors ${
                  activeMediaView === 'constellation'
                    ? 'bg-[#d4af37] text-[#06080d] font-bold shadow'
                    : 'text-[#8e8574] hover:text-[#f5eedc]'
                }`}
              >
                Peta Rasi Bintang
              </button>
              <button
                onClick={() => setActiveMediaView('editorial')}
                className={`flex-1 py-1.5 rounded transition-colors ${
                  activeMediaView === 'editorial'
                    ? 'bg-[#d4af37] text-[#06080d] font-bold shadow'
                    : 'text-[#8e8574] hover:text-[#f5eedc]'
                }`}
              >
                Visual Model ({genderMode === 'male' ? 'Pria' : 'Wanita'})
              </button>
            </div>

            {/* Display Media View */}
            {activeMediaView === 'constellation' ? (
              <ConstellationViewer
                name={selectedZodiac.name}
                latinName={selectedZodiac.latinName}
                stars={selectedZodiac.stars}
                connections={selectedZodiac.connections}
                symbol={selectedZodiac.symbol}
                element={selectedZodiac.element}
              />
            ) : (
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-[#d4af37]/35 shadow-xl bg-[#090d16] group">
                <img
                  src={activeImage}
                  alt={`Model Adibusana ${selectedZodiac.name}`}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06080d]/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-center">
                  <span className="text-xs font-cinzel text-[#d4af37] block font-semibold">
                    {selectedZodiac.name} · {currentGender === 'male' ? selectedZodiac.maleOutfits[0]?.title : selectedZodiac.outfits[0]?.title}
                  </span>
                  <span className="text-[10px] text-[#cec7b8] font-serif italic">
                    {currentGender === 'male' ? selectedZodiac.maleOutfits[0]?.silhouette : selectedZodiac.outfits[0]?.silhouette}
                  </span>
                </div>
              </div>
            )}

            {/* Sacred Atributes Grid */}
            <div className="grid grid-cols-2 gap-3 text-xs bg-[#070a12] p-4 rounded-lg border border-[#d4af37]/20">
              <div>
                <span className="text-[#7e7666] block text-[11px] mb-0.5">Planet Penguasa</span>
                <span className="text-[#f5eedc] font-medium">{selectedZodiac.rulingPlanet}</span>
              </div>
              <div>
                <span className="text-[#7e7666] block text-[11px] mb-0.5">Batu Permata Utama</span>
                <span className="text-[#f5eedc] font-medium">{selectedZodiac.birthstone}</span>
              </div>
              <div>
                <span className="text-[#7e7666] block text-[11px] mb-0.5">Logam Mulia</span>
                <span className="text-[#f5eedc] font-medium">{selectedZodiac.metal}</span>
              </div>
              <div>
                <span className="text-[#7e7666] block text-[11px] mb-0.5">Warna Kosmis</span>
                <div className="flex items-center gap-1.5 mt-1">
                  {selectedZodiac.luckyColors.map((color, i) => (
                    <span
                      key={i}
                      className="w-4 h-4 rounded-full border border-white/20 inline-block shadow-sm"
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Deep Personality & Haute Couture Identity */}
          <div className="lg:col-span-7 space-y-6">
            {/* 1. Inti Jiwa */}
            <div className="border-b border-[#d4af37]/15 pb-5">
              <div className="flex items-center gap-2 text-xs font-cinzel text-[#d4af37] mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>INTI JIWA & KARAKTER KEPRIBADIAN</span>
              </div>
              <p className="text-base text-[#e5e0d8] leading-relaxed font-cormorant text-lg">
                "{selectedZodiac.personality.essence}"
              </p>
            </div>

            {/* 2. Aura & Karisma Berpakaian */}
            <div className="border-b border-[#d4af37]/15 pb-5">
              <div className="flex items-center gap-2 text-xs font-cinzel text-[#d4af37] mb-2">
                <Star className="w-3.5 h-3.5" />
                <span>AURA & DAYA PIKAT SOSIAL</span>
              </div>
              <p className="text-sm text-[#cec7b8] leading-relaxed">
                {selectedZodiac.personality.charisma}
              </p>
            </div>

            {/* 3. Kekuatan Gaya Eksklusif */}
            <div className="border-b border-[#d4af37]/15 pb-5">
              <div className="flex items-center gap-2 text-xs font-cinzel text-[#d4af37] mb-2">
                <Award className="w-3.5 h-3.5" />
                <span>FILOSOFI HAUTE COUTURE ZODIAK</span>
              </div>
              <p className="text-sm text-[#e0d9cc] leading-relaxed font-medium">
                {selectedZodiac.personality.fashionIdentity}
              </p>
              <p className="text-xs text-[#a69c8a] mt-1.5 italic font-serif">
                Kekuatan: {selectedZodiac.personality.strength}
              </p>
            </div>

            {/* 4. Pantangan Busana */}
            <div className="bg-[#120d0f] border border-[#781822]/40 p-4 rounded-lg">
              <div className="flex items-center gap-2 text-xs font-cinzel text-[#e57373] mb-1.5">
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>PANTANGAN BUSANA (FASHION TABOO)</span>
              </div>
              <p className="text-xs text-[#e0b4b8] leading-relaxed">
                {selectedZodiac.personality.taboos}
              </p>
            </div>

            {/* Direct CTA Transition to Menu 2 */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => onProceedToDesign(selectedZodiac)}
                className="w-full flex items-center justify-center gap-3 py-4 bg-gradient-to-r from-[#e7cb68] via-[#d4af37] to-[#b89330] text-[#06080d] font-cinzel font-semibold text-xs sm:text-sm tracking-widest uppercase rounded-sm hover:brightness-110 active:scale-[0.99] transition-all cursor-pointer shadow-xl shadow-[#d4af37]/15"
              >
                <span>Jelajahi 10 Model Busana {currentGender === 'male' ? 'Pria' : 'Wanita'} Rasi {selectedZodiac.name}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

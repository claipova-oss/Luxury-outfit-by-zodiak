import React, { useState, useEffect } from 'react';
import { ZODIAC_SIGNS, ZodiacSign, CuratedOutfit, getModelImage } from '../data/zodiacData';
import {
  Sparkles,
  Bookmark,
  Check,
  Scissors,
  Crown,
  Palette,
  Wind,
  Layers,
  MessageSquare,
  Award,
  User,
  Users,
  CheckCircle2,
  Sliders,
  ShieldCheck,
  Eye,
  Shirt
} from 'lucide-react';

export interface SavedCustomDesign {
  id: string;
  gender: 'female' | 'male';
  zodiacName: string;
  zodiacSymbol: string;
  zodiacElement: string;
  outfitTitle: string;
  category: string;
  silhouette: string;
  occasion: string;
  styleMood: string;
  fabric: string;
  ornament: string;
  monogram: string;
  palette: { name: string; hex: string }[];
  tailorAdvice: string;
  createdAt: string;
  imageAsset: string;
}

interface ZodiacOutfitStudioProps {
  selectedZodiac: ZodiacSign;
  onSelectZodiac: (sign: ZodiacSign) => void;
  onSaveDesign: (design: SavedCustomDesign) => void;
  onOpenCertificate: (design: SavedCustomDesign) => void;
  genderMode?: 'female' | 'male';
  onToggleGender?: (gender: 'female' | 'male') => void;
}

const OCCASIONS = [
  'Gala Karpet Merah (Le Grand Bal)',
  'Jamuan Eksekutif & Aristokrat',
  'Private Nocturne Soirée',
  'Intimate Candlelight Dinner',
  'Avant-Garde Art Premiere'
];

const STYLE_MOODS = [
  { id: 'regal', label: 'Regal & Majestic', desc: 'Megah, bervolume, dan bertakhta kaisar' },
  { id: 'noir', label: 'Sensual Nocturne Noir', desc: 'Misterius, gelap, dan memikat pekat' },
  { id: 'architectural', label: 'Architectural Minimalist', desc: 'Potongan tajam, presisi, dan bersih' },
  { id: 'ethereal', label: 'Ethereal & Fluid', desc: 'Melayang lembut, puitis, dan cair' }
];

const LUXURY_FABRICS = [
  { name: 'Sutra Murbei Lyon 45 Momme', origin: 'Prancis', desc: 'Jatuh berkilau alami dengan ketebalan substansial' },
  { name: 'Beludru Sutra Italia 650gsm', origin: 'Como, Italia', desc: 'Tekstur lembut dalam menangkap pantulan cahaya lilin' },
  { name: 'Vicuña Cashmere Superfine', origin: 'Loro Piana, Italia', desc: 'Wol terhalus dunia dengan kehangatan tanpa bobot' },
  { name: 'Metallic Silk Organza', origin: 'Milan', desc: 'Transparan arsitektural dengan pantulan perak & emas' },
  { name: 'Mikado Sutra Berstruktur Kaku', origin: 'Kyoto, Jepang', desc: 'Bahan kaku sempurna untuk siluet busana ningrat' }
];

const CELESTIAL_ORNAMENTS = [
  'Sulaman Rasi Bintang Benang Emas Murni 24K',
  'Taburan Kristal Swarovski Astral Cut',
  'Kancing Mutiara Laut Selatan Mikimoto',
  'Gesper Platina Murni Terukir Lambang Zodiak',
  'Rumbai Filigree Emas Antik Tenunan Tangan'
];

export const ZodiacOutfitStudio: React.FC<ZodiacOutfitStudioProps> = ({
  selectedZodiac,
  onSelectZodiac,
  onSaveDesign,
  onOpenCertificate,
  genderMode = 'male',
  onToggleGender,
}) => {
  // Safe gender handler
  const currentGender = genderMode || 'male';
  const handleToggle = (g: 'female' | 'male') => {
    if (onToggleGender) {
      onToggleGender(g);
    }
  };

  // Select outfit list based on gender
  const currentOutfits =
    currentGender === 'male'
      ? selectedZodiac.maleOutfits || selectedZodiac.outfits
      : selectedZodiac.outfits || selectedZodiac.maleOutfits;

  // Selected model index among the 4 outfits (0 to 3)
  const [selectedOutfitIndex, setSelectedOutfitIndex] = useState<number>(0);
  const activeOutfit: CuratedOutfit = currentOutfits[selectedOutfitIndex] || currentOutfits[0];

  // Category filter state for models
  const [modelCategoryFilter, setModelCategoryFilter] = useState<'all' | 'gala' | 'executive' | 'soiree' | 'avant-garde'>('all');

  // Customizer state
  const [customOccasion, setCustomOccasion] = useState<string>(activeOutfit?.theme || OCCASIONS[0]);
  const [customMood, setCustomMood] = useState<string>(STYLE_MOODS[0].label);
  const [customFabric, setCustomFabric] = useState<string>(LUXURY_FABRICS[0].name);
  const [customOrnament, setCustomOrnament] = useState<string>(CELESTIAL_ORNAMENTS[0]);
  const [monogram, setMonogram] = useState<string>('M.Z.');

  // AI Stylist advice box state
  const [customScenario, setCustomScenario] = useState<string>('');
  const [stylistFeedback, setStylistFeedback] = useState<string>('');
  const [isConsulting, setIsConsulting] = useState<boolean>(false);
  const [savedSuccess, setSavedSuccess] = useState<boolean>(false);
  const [selectionNotice, setSelectionNotice] = useState<string>('');

  // Filter zodiak tabs by element
  const [elementFilter, setElementFilter] = useState<'all' | 'api' | 'tanah' | 'udara' | 'air'>('all');

  const filteredZodiacs =
    elementFilter === 'all'
      ? ZODIAC_SIGNS
      : ZODIAC_SIGNS.filter((z) => z.element === elementFilter);

  // Sync custom occasion and reset feedback when model/zodiac/gender changes
  useEffect(() => {
    if (activeOutfit) {
      setCustomOccasion(activeOutfit.theme);
    }
  }, [selectedOutfitIndex, currentGender, selectedZodiac.id]);

  const handleSelectOutfitModel = (index: number) => {
    setSelectedOutfitIndex(index);
    const chosen = currentOutfits[index] || currentOutfits[0];
    if (chosen) {
      setCustomOccasion(chosen.theme);
      setStylistFeedback('');
      setSelectionNotice(`Model 0${index + 1} ("${chosen.title}") berhasil dipilih dan diterapkan ke Mannequin Atelier!`);
      setTimeout(() => setSelectionNotice(''), 3500);
    }
  };

  // Dynamic tailor advice generator
  const generateDynamicAdvice = () => {
    return `Untuk ${selectedZodiac.name} (${selectedZodiac.elementLabel}) kategori ${currentGender === 'male' ? 'Pria (Pour Homme)' : 'Wanita (Pour Femme)'} pada model "${activeOutfit.title}", siluet ${activeOutfit.silhouette} dipertegas dengan bahan ${customFabric} dan aksen ${customOrnament}. Monogram emas "${monogram}" pada label furing menandai busana pusaka eksklusif yang dirancang khusus untuk Anda.`;
  };

  const handleConsultStylist = () => {
    setIsConsulting(true);
    setTimeout(() => {
      let advice = '';
      if (customScenario.trim()) {
        advice = `[Atelier Astrologique Directive]: Khusus untuk perhelatan "${customScenario}": Klien ${selectedZodiac.name} (${currentGender === 'male' ? 'Pria' : 'Wanita'}) pada model "${activeOutfit.title}" membutuhkan siluet ${activeOutfit.silhouette}. Kenakan atasan "${activeOutfit.top}" berpadu kain ${customFabric}. Padukan perhiasan pusaka ${selectedZodiac.birthstone} pada lapel atau garis leher, serta semerbak aroma ${activeOutfit.fragrance} yang mengunci jejak wibawa kosmis Anda.`;
      } else {
        advice = generateDynamicAdvice();
      }
      setStylistFeedback(advice);
      setIsConsulting(false);
    }, 350);
  };

  // Distinct runway model portrait for the selected model & gender
  const activeImage = getModelImage(selectedZodiac, activeOutfit.category, currentGender, selectedOutfitIndex);

  const handleSaveToLookbook = () => {
    const newDesign: SavedCustomDesign = {
      id: `design-${Date.now()}`,
      gender: currentGender,
      zodiacName: selectedZodiac.name,
      zodiacSymbol: selectedZodiac.symbol,
      zodiacElement: selectedZodiac.elementLabel,
      outfitTitle: activeOutfit.title,
      category: activeOutfit.theme,
      silhouette: activeOutfit.silhouette,
      occasion: customOccasion,
      styleMood: customMood,
      fabric: customFabric,
      ornament: customOrnament,
      monogram: monogram.toUpperCase(),
      palette: activeOutfit.palette.map((p) => ({ name: p.name, hex: p.hex })),
      tailorAdvice: stylistFeedback || generateDynamicAdvice(),
      createdAt: new Date().toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }),
      imageAsset: activeImage,
    };

    onSaveDesign(newDesign);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  const handleOpenCertificate = () => {
    const currentDesign: SavedCustomDesign = {
      id: `cert-${Date.now()}`,
      gender: currentGender,
      zodiacName: selectedZodiac.name,
      zodiacSymbol: selectedZodiac.symbol,
      zodiacElement: selectedZodiac.elementLabel,
      outfitTitle: activeOutfit.title,
      category: activeOutfit.theme,
      silhouette: activeOutfit.silhouette,
      occasion: customOccasion,
      styleMood: customMood,
      fabric: customFabric,
      ornament: customOrnament,
      monogram: monogram.toUpperCase(),
      palette: activeOutfit.palette.map((p) => ({ name: p.name, hex: p.hex })),
      tailorAdvice: stylistFeedback || generateDynamicAdvice(),
      createdAt: new Date().toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }),
      imageAsset: activeImage,
    };
    onOpenCertificate(currentDesign);
  };

  return (
    <div className="space-y-12">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-cinzel tracking-widest text-[#d4af37]">
          <Scissors className="w-3.5 h-3.5" />
          <span>MENU 02</span>
          <span aria-hidden="true">·</span>
          <span>HAUTE COUTURE ATELIER DE CRÉATION</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-cinzel font-semibold text-[#f8f5ee]">
          Desain Pilihan Pakaianmu Sesuai Zodiak
        </h2>
        <p className="text-base font-cormorant italic text-[#cec7b8] max-w-2xl mx-auto">
          Dapatkan kurasi adibusana haute couture yang dipersonalisasi sesuai rasi bintang, bahan adiluhung, dan aura kemewahan eksklusif Anda untuk Model Pria dan Model Wanita.
        </p>

        {/* GENDER SELECTOR BUTTONS */}
        <div className="pt-2 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => handleToggle('male')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-sm border text-xs font-cinzel tracking-wider transition-all cursor-pointer ${
              currentGender === 'male'
                ? 'bg-[#d4af37] text-[#06080d] font-bold border-[#d4af37] shadow-lg shadow-[#d4af37]/25 scale-102 ring-1 ring-[#fef08a]'
                : 'bg-[#090d16] text-[#a69c8a] border-[#d4af37]/30 hover:border-[#d4af37] hover:text-[#f8f5ee]'
            }`}
          >
            <User className="w-4 h-4" />
            <span>Koleksi Pria (Pour Homme)</span>
            {currentGender === 'male' && <Check className="w-3.5 h-3.5 ml-1" />}
          </button>
          <button
            type="button"
            onClick={() => handleToggle('female')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-sm border text-xs font-cinzel tracking-wider transition-all cursor-pointer ${
              currentGender === 'female'
                ? 'bg-[#d4af37] text-[#06080d] font-bold border-[#d4af37] shadow-lg shadow-[#d4af37]/25 scale-102 ring-1 ring-[#fef08a]'
                : 'bg-[#090d16] text-[#a69c8a] border-[#d4af37]/30 hover:border-[#d4af37] hover:text-[#f8f5ee]'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Koleksi Wanita (Pour Femme)</span>
            {currentGender === 'female' && <Check className="w-3.5 h-3.5 ml-1" />}
          </button>
        </div>
      </div>

      {/* Zodiac Selector Bar & Element Filters */}
      <div className="space-y-4">
        {/* Element Filter Buttons */}
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <button
            type="button"
            onClick={() => setElementFilter('all')}
            className={`px-3 py-1.5 text-xs font-cinzel rounded transition-colors cursor-pointer ${
              elementFilter === 'all'
                ? 'bg-[#d4af37] text-[#06080d] font-semibold'
                : 'text-[#9e9686] hover:text-[#f5eedc] border border-[#d4af37]/20 bg-[#090d16]'
            }`}
          >
            Semua Rasi (12)
          </button>
          <button
            type="button"
            onClick={() => setElementFilter('api')}
            className={`px-3 py-1.5 text-xs font-cinzel rounded transition-colors cursor-pointer ${
              elementFilter === 'api'
                ? 'bg-[#b91c1c] text-white font-semibold'
                : 'text-[#9e9686] hover:text-[#f5eedc] border border-[#d4af37]/20 bg-[#090d16]'
            }`}
          >
            Api (Aries, Leo, Sagitarius)
          </button>
          <button
            type="button"
            onClick={() => setElementFilter('tanah')}
            className={`px-3 py-1.5 text-xs font-cinzel rounded transition-colors cursor-pointer ${
              elementFilter === 'tanah'
                ? 'bg-[#15803d] text-white font-semibold'
                : 'text-[#9e9686] hover:text-[#f5eedc] border border-[#d4af37]/20 bg-[#090d16]'
            }`}
          >
            Tanah (Taurus, Virgo, Capricorn)
          </button>
          <button
            type="button"
            onClick={() => setElementFilter('udara')}
            className={`px-3 py-1.5 text-xs font-cinzel rounded transition-colors cursor-pointer ${
              elementFilter === 'udara'
                ? 'bg-[#475569] text-white font-semibold'
                : 'text-[#9e9686] hover:text-[#f5eedc] border border-[#d4af37]/20 bg-[#090d16]'
            }`}
          >
            Udara (Gemini, Libra, Aquarius)
          </button>
          <button
            type="button"
            onClick={() => setElementFilter('air')}
            className={`px-3 py-1.5 text-xs font-cinzel rounded transition-colors cursor-pointer ${
              elementFilter === 'air'
                ? 'bg-[#0369a1] text-white font-semibold'
                : 'text-[#9e9686] hover:text-[#f5eedc] border border-[#d4af37]/20 bg-[#090d16]'
            }`}
          >
            Air (Cancer, Scorpio, Pisces)
          </button>
        </div>

        {/* Horizontal Scrollable Zodiac Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none justify-start sm:justify-center">
          {filteredZodiacs.map((sign) => {
            const isSelected = sign.id === selectedZodiac.id;
            return (
              <button
                type="button"
                key={sign.id}
                onClick={() => {
                  onSelectZodiac(sign);
                  setSelectedOutfitIndex(0);
                  setStylistFeedback('');
                }}
                className={`px-4 py-2 text-xs font-cinzel tracking-wider rounded border transition-all shrink-0 cursor-pointer flex items-center gap-2 ${
                  isSelected
                    ? 'border-[#d4af37] bg-[#d4af37]/20 text-[#f8f5ee] shadow-md shadow-[#d4af37]/20 font-bold'
                    : 'border-[#d4af37]/20 bg-[#090d16]/80 text-[#9e9584] hover:text-[#e5e0d8] hover:border-[#d4af37]/40'
                }`}
              >
                <span className="text-[#d4af37] font-serif text-sm">{sign.symbol}</span>
                <span>{sign.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 10 DIVERSE OUTFIT MODELS SELECTOR SECTION FOR THIS ZODIAC & GENDER */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#d4af37]/25 pb-3 gap-2">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-cinzel text-[#d4af37] tracking-widest uppercase font-semibold">
                PILIH 10 MODEL OUTFIT {currentGender === 'male' ? 'PRIA' : 'WANITA'} · RASI {selectedZodiac.name.toUpperCase()}
              </span>
              <span className="text-[10px] font-mono text-[#06080d] bg-[#d4af37] px-2 py-0.5 rounded font-bold">
                10 MODEL EKSKLUSIF
              </span>
            </div>
            <p className="text-xs text-[#a69c8a] font-serif italic mt-0.5">
              Setiap rasi memiliki 10 pilihan model busana berbeda. Klik salah satu model di bawah untuk mengganti pakaian pada mannequin atelier:
            </p>
          </div>
          <span className="text-xs font-mono text-[#8f8574]">
            MODEL AKTIF: {selectedOutfitIndex < 9 ? '0' : ''}{selectedOutfitIndex + 1} / 10 ({activeOutfit.theme})
          </span>
        </div>

        {/* Quick Model Selector Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {currentOutfits.map((outfit, index) => {
            const isSelected = selectedOutfitIndex === index;
            return (
              <button
                type="button"
                key={`tab-${outfit.id}`}
                onClick={() => handleSelectOutfitModel(index)}
                className={`px-3 py-1.5 text-xs font-cinzel rounded transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-[#d4af37] text-[#06080d] font-bold shadow-md shadow-[#d4af37]/20 ring-1 ring-white/50'
                    : 'bg-[#090d16] text-[#b8ad99] border border-[#d4af37]/25 hover:border-[#d4af37] hover:text-[#f8f5ee]'
                }`}
              >
                <span>{index < 9 ? '0' : ''}{index + 1}.</span>
                <span>{outfit.theme.replace(/^Model \d+:\s*/, '')}</span>
              </button>
            );
          })}
        </div>

        {/* Selection Confirmation Notice */}
        {selectionNotice && (
          <div className="p-3 bg-[#d4af37]/15 border border-[#d4af37] text-xs font-cinzel text-[#f8f5ee] rounded flex items-center gap-2 animate-fadeIn shadow-lg">
            <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0" />
            <span>{selectionNotice}</span>
          </div>
        )}

        {/* 10 Cards Grid - Fully interactive, clickable, with visual thumbnail previews */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {currentOutfits.map((outfit, index) => {
            const isSelected = selectedOutfitIndex === index;
            const cardThumb = getModelImage(selectedZodiac, outfit.category, currentGender, index);
            return (
              <div
                key={outfit.id}
                role="button"
                tabIndex={0}
                onClick={() => handleSelectOutfitModel(index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleSelectOutfitModel(index);
                  }
                }}
                className={`rounded-lg border text-left transition-all cursor-pointer overflow-hidden flex flex-col justify-between group ${
                  isSelected
                    ? 'border-[#d4af37] bg-[#141b2b] shadow-2xl shadow-[#d4af37]/30 ring-2 ring-[#d4af37]'
                    : 'border-[#d4af37]/20 bg-[#090d16]/90 hover:border-[#d4af37]/60 hover:bg-[#0d1424]'
                }`}
              >
                {/* Visual Thumbnail Header with Model Category */}
                <div className="relative h-36 overflow-hidden bg-[#06080d]">
                  <img
                    src={cardThumb}
                    alt={outfit.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-transparent to-transparent opacity-85" />

                  {/* Top Badge Overlay */}
                  <div className="absolute top-2 left-2 right-2 flex items-center justify-between text-[10px] font-cinzel font-bold">
                    <span className={`px-1.5 py-0.5 rounded shadow text-[9px] ${
                      isSelected ? 'bg-[#d4af37] text-[#06080d]' : 'bg-[#06080d]/85 text-[#d4af37] border border-[#d4af37]/30'
                    }`}>
                      MODEL {index < 9 ? '0' : ''}{index + 1}
                    </span>
                    <span className="bg-[#06080d]/85 px-1.5 py-0.5 rounded text-[8px] font-mono text-[#e5e0d8] border border-white/10 uppercase truncate max-w-[70px]">
                      {outfit.category}
                    </span>
                  </div>

                  {/* Active Indicator Pin */}
                  {isSelected && (
                    <div className="absolute bottom-1.5 left-2 flex items-center gap-1 text-[9px] font-cinzel font-bold text-[#d4af37] bg-[#06080d]/90 px-1.5 py-0.5 rounded border border-[#d4af37]">
                      <Check className="w-2.5 h-2.5 text-[#d4af37]" />
                      <span>TERPILIH</span>
                    </div>
                  )}
                </div>

                {/* Content Body */}
                <div className="p-2.5 space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[9px] font-cinzel tracking-wider text-[#c5a059] block uppercase truncate">
                      {outfit.theme.replace(/^Model \d+:\s*/, '')}
                    </span>
                    <h4 className="text-xs font-cinzel font-semibold text-[#f8f5ee] leading-snug mt-0.5 group-hover:text-[#d4af37] transition-colors line-clamp-2">
                      {outfit.title}
                    </h4>
                  </div>

                  <div className="space-y-1.5 pt-1.5 border-t border-[#d4af37]/15 text-[10px]">
                    <div className="text-[#d4af37] font-medium truncate text-[10px]">
                      {outfit.silhouette}
                    </div>

                    {/* Color Swatch Dots */}
                    <div className="flex items-center gap-1">
                      {outfit.palette.map((col, idx) => (
                        <span
                          key={idx}
                          className="w-3 h-3 rounded-full border border-white/20 inline-block shadow-sm"
                          style={{ backgroundColor: col.hex }}
                          title={col.name}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Interactive Button */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSelectOutfitModel(index);
                    }}
                    className={`w-full py-1.5 text-[10px] font-cinzel tracking-wider rounded transition-all text-center cursor-pointer font-medium ${
                      isSelected
                        ? 'bg-[#d4af37] text-[#06080d] font-bold shadow'
                        : 'border border-[#d4af37]/40 text-[#c5a059] hover:bg-[#d4af37]/20 hover:text-[#fff]'
                    }`}
                  >
                    {isSelected ? '✓ Diterapkan' : 'Pilih Model'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Studio Display: Selected Outfit Showcase & Garment Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Visual Runway Model Portrait */}
        <div className="lg:col-span-5 space-y-4">
          <div className="relative rounded-lg overflow-hidden border border-[#d4af37]/40 shadow-2xl bg-[#080b13] group">
            <img
              src={activeImage}
              alt={activeOutfit.title}
              className="w-full h-[540px] object-cover object-top group-hover:scale-102 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            {/* Scrim Overlay for Legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#06080d] via-transparent to-transparent opacity-90" />

            {/* Haute Couture Plaque */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs font-cinzel text-[#d4af37] z-20">
              <span className="bg-[#06080d]/85 px-2.5 py-1 border border-[#d4af37]/30 rounded backdrop-blur-md">
                {selectedZodiac.name} · {selectedZodiac.symbol} ({currentGender === 'male' ? 'Model Pria' : 'Model Wanita'})
              </span>
              <span className="bg-[#06080d]/85 px-2.5 py-1 border border-[#d4af37]/30 rounded uppercase font-mono text-[10px] backdrop-blur-md">
                MODEL {selectedOutfitIndex < 9 ? '0' : ''}{selectedOutfitIndex + 1} / 10
              </span>
            </div>

            {/* Bottom Inscription */}
            <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#080c14]/90 backdrop-blur-md border border-[#d4af37]/30 rounded space-y-1 z-20">
              <div className="flex items-center justify-between text-[11px] font-cinzel tracking-widest text-[#c5a059]">
                <span className="uppercase">{activeOutfit.theme}</span>
                <span className="font-mono text-[#d4af37] font-semibold">MODEL AKTIF</span>
              </div>
              <h4 className="text-lg font-cinzel font-semibold text-[#f8f5ee]">
                {activeOutfit.title}
              </h4>
              <p className="text-xs font-cormorant italic text-[#cec7b8]">
                {activeOutfit.subtitle}
              </p>
              <p className="text-[11px] text-[#d4af37] font-medium pt-1">
                Siluet: {activeOutfit.silhouette}
              </p>
            </div>
          </div>

          {/* Luxury Color Palette Swatches */}
          <div className="bg-night-card border border-[#d4af37]/20 p-4 rounded-lg">
            <div className="flex items-center gap-2 text-xs font-cinzel text-[#d4af37] mb-3">
              <Palette className="w-3.5 h-3.5" />
              <span>PALET WARNA UTAMA MODEL INI</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {activeOutfit.palette.map((color, idx) => (
                <div key={idx} className="space-y-1">
                  <div
                    className="h-9 w-full rounded border border-white/20 shadow-sm flex items-end justify-end p-1"
                    style={{ backgroundColor: color.hex }}
                  >
                    <span className="text-[9px] font-mono px-1 py-0.2 bg-black/60 rounded text-white">
                      {color.hex}
                    </span>
                  </div>
                  <p className="text-[11px] font-cinzel text-[#f5eedc] font-medium leading-tight">
                    {color.name}
                  </p>
                  <p className="text-[10px] text-[#8e8574] leading-tight">
                    {color.meaning}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Garment Anatomy Breakdown & Customizer */}
        <div className="lg:col-span-7 space-y-6">
          {/* Detailed Garment Specifications Card */}
          <div className="bg-night-card border border-[#d4af37]/30 p-6 rounded-lg space-y-5 shadow-xl">
            <div className="flex items-center justify-between border-b border-[#d4af37]/20 pb-3">
              <div>
                <span className="text-xs font-cinzel text-[#c5a059] tracking-widest block">
                  SPESIFIKASI ANATOMI BUSANA MODEL {selectedOutfitIndex < 9 ? '0' : ''}{selectedOutfitIndex + 1} ({currentGender === 'male' ? 'PRIA' : 'WANITA'})
                </span>
                <h3 className="text-xl font-cinzel font-semibold text-[#f8f5ee]">
                  {activeOutfit.title}
                </h3>
              </div>
              <span className="text-xs text-[#8f8574] font-mono">
                {selectedZodiac.id.toUpperCase()}-{currentGender === 'male' ? 'M' : 'F'}-{selectedOutfitIndex < 9 ? '0' : ''}{selectedOutfitIndex + 1}
              </span>
            </div>

            {/* Garment Grid Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="bg-[#090d16] p-3.5 rounded border border-[#d4af37]/15">
                <span className="text-[#8f8574] block text-[11px] font-cinzel mb-1">
                  {currentGender === 'male' ? 'Atasan / Jas Tuxedo / Kemeja Bespoke' : 'Atasan / Korset / Jas Blazer'}
                </span>
                <p className="text-[#f5eedc] font-medium leading-relaxed">
                  {activeOutfit.top}
                </p>
              </div>

              <div className="bg-[#090d16] p-3.5 rounded border border-[#d4af37]/15">
                <span className="text-[#8f8574] block text-[11px] font-cinzel mb-1">
                  {currentGender === 'male' ? 'Bawahan / Celana Trousers Sutra Wol' : 'Bawahan / Rok / Trousers'}
                </span>
                <p className="text-[#f5eedc] font-medium leading-relaxed">
                  {activeOutfit.bottom}
                </p>
              </div>

              {activeOutfit.outerwear && (
                <div className="bg-[#090d16] p-3.5 rounded border border-[#d4af37]/15 sm:col-span-2">
                  <span className="text-[#8f8574] block text-[11px] font-cinzel mb-1">
                    Outerwear / Cape / Mantel Kerajaan
                  </span>
                  <p className="text-[#f5eedc] font-medium leading-relaxed">
                    {activeOutfit.outerwear}
                  </p>
                </div>
              )}

              <div className="bg-[#090d16] p-3.5 rounded border border-[#d4af37]/15">
                <span className="text-[#8f8574] block text-[11px] font-cinzel mb-1">
                  Alas Kaki / Footwear Bespoke
                </span>
                <p className="text-[#f5eedc] font-medium leading-relaxed">
                  {activeOutfit.shoes}
                </p>
              </div>

              <div className="bg-[#090d16] p-3.5 rounded border border-[#d4af37]/15">
                <span className="text-[#8f8574] block text-[11px] font-cinzel mb-1">
                  Perhiasan Pusaka (High Jewelry / Manset / Bros)
                </span>
                <p className="text-[#f5eedc] font-medium leading-relaxed">
                  {activeOutfit.jewelry}
                </p>
              </div>
            </div>

            {/* Fragrance Accord */}
            <div className="bg-[#0b0e17] p-3.5 rounded border border-[#d4af37]/20 flex items-start gap-3">
              <Wind className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
              <div className="text-xs">
                <span className="text-[#c5a059] font-cinzel block text-[11px] mb-0.5">
                  Wangi Kosmis (Signature Fragrance Accord)
                </span>
                <p className="text-[#e5e0d8] italic font-serif">
                  {activeOutfit.fragrance}
                </p>
              </div>
            </div>

            {/* Panduan Bahan & Styling Atelier */}
            <div className="border-t border-[#d4af37]/15 pt-3 space-y-2 text-xs">
              <div>
                <span className="text-[#8e8574] font-cinzel text-[11px] block">
                  Panduan Tekstil & Bahan:
                </span>
                <p className="text-[#d8d2c4] font-light">
                  {activeOutfit.fabricGuide}
                </p>
              </div>
              <div>
                <span className="text-[#8e8574] font-cinzel text-[11px] block">
                  Dikte Penata Gaya (Styling Directive):
                </span>
                <p className="text-[#c5a059] italic font-cormorant text-sm">
                  "{activeOutfit.stylingNote}"
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Personalizer & Tailoring Studio */}
          <div className="bg-night-card border border-[#d4af37]/35 p-6 rounded-lg space-y-6 shadow-xl">
            <div className="flex items-center gap-2 text-sm font-cinzel text-[#d4af37]">
              <Crown className="w-4 h-4" />
              <span>Studio Personalisasi Adibusana Bespoke ({currentGender === 'male' ? 'Model Pria' : 'Model Wanita'})</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              {/* Occasion */}
              <div>
                <label className="block text-[#a69c8a] mb-1.5 font-medium">
                  Perhelatan / Acara
                </label>
                <select
                  value={customOccasion}
                  onChange={(e) => setCustomOccasion(e.target.value)}
                  className="w-full bg-[#0a0d16] border border-[#d4af37]/30 rounded px-3 py-2 text-[#f5eedc] focus:outline-none focus:border-[#d4af37]"
                >
                  {OCCASIONS.map((occ) => (
                    <option key={occ} value={occ} className="bg-[#0a0d16]">
                      {occ}
                    </option>
                  ))}
                </select>
              </div>

              {/* Mood */}
              <div>
                <label className="block text-[#a69c8a] mb-1.5 font-medium">
                  Mood & Karakter Siluet
                </label>
                <select
                  value={customMood}
                  onChange={(e) => setCustomMood(e.target.value)}
                  className="w-full bg-[#0a0d16] border border-[#d4af37]/30 rounded px-3 py-2 text-[#f5eedc] focus:outline-none focus:border-[#d4af37]"
                >
                  {STYLE_MOODS.map((m) => (
                    <option key={m.id} value={m.label} className="bg-[#0a0d16]">
                      {m.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Fabric */}
              <div>
                <label className="block text-[#a69c8a] mb-1.5 font-medium">
                  Bahan Tekstil Pilihan
                </label>
                <select
                  value={customFabric}
                  onChange={(e) => setCustomFabric(e.target.value)}
                  className="w-full bg-[#0a0d16] border border-[#d4af37]/30 rounded px-3 py-2 text-[#f5eedc] focus:outline-none focus:border-[#d4af37]"
                >
                  {LUXURY_FABRICS.map((fab) => (
                    <option key={fab.name} value={fab.name} className="bg-[#0a0d16]">
                      {fab.name} ({fab.origin})
                    </option>
                  ))}
                </select>
              </div>

              {/* Ornament */}
              <div>
                <label className="block text-[#a69c8a] mb-1.5 font-medium">
                  Aksen & Ornamen Sulaman
                </label>
                <select
                  value={customOrnament}
                  onChange={(e) => setCustomOrnament(e.target.value)}
                  className="w-full bg-[#0a0d16] border border-[#d4af37]/30 rounded px-3 py-2 text-[#f5eedc] focus:outline-none focus:border-[#d4af37]"
                >
                  {CELESTIAL_ORNAMENTS.map((orn) => (
                    <option key={orn} value={orn} className="bg-[#0a0d16]">
                      {orn}
                    </option>
                  ))}
                </select>
              </div>

              {/* Bespoke Monogram Stamp */}
              <div className="sm:col-span-2">
                <label className="block text-[#a69c8a] mb-1.5 font-medium">
                  Inisial Monogram Pribadi (Cap Emas pada Label Busana)
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="text"
                    maxLength={4}
                    value={monogram}
                    onChange={(e) => setMonogram(e.target.value.toUpperCase())}
                    placeholder="Contoh: K.P."
                    className="w-32 bg-[#0a0d16] border border-[#d4af37]/40 rounded px-3 py-2 text-center text-[#d4af37] font-cinzel font-bold tracking-widest text-sm focus:outline-none focus:border-[#d4af37]"
                  />
                  <span className="text-[11px] text-[#8e8574] italic">
                    Dicap timbul benang emas 24K pada bagian dalam furing jas/gaun adibusana Anda.
                  </span>
                </div>
              </div>
            </div>

            {/* AI Haute Couture Stylist Consultation Input */}
            <div className="border-t border-[#d4af37]/20 pt-4 space-y-3">
              <div className="flex items-center gap-2 text-xs font-cinzel text-[#d4af37]">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Konsultasikan Acara Khusus pada Penata Gaya Atelier</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  value={customScenario}
                  onChange={(e) => setCustomScenario(e.target.value)}
                  placeholder="Contoh: Saya menghadiri perjamuan gala amal di ballroom hotel mewah di Paris..."
                  className="flex-1 bg-[#0a0d16] border border-[#d4af37]/30 rounded px-3 py-2.5 text-xs text-[#f5eedc] placeholder:text-[#6a6254] focus:outline-none focus:border-[#d4af37]"
                />
                <button
                  type="button"
                  onClick={handleConsultStylist}
                  disabled={isConsulting}
                  className="px-4 py-2.5 bg-[#d4af37]/20 border border-[#d4af37]/50 text-[#f5eedc] hover:bg-[#d4af37]/30 text-xs font-cinzel tracking-wider rounded transition-all cursor-pointer whitespace-nowrap shrink-0 disabled:opacity-50"
                >
                  {isConsulting ? 'Menganalisis Rasi...' : 'Minta Saran Gaya'}
                </button>
              </div>

              {/* Feedback Advice Display */}
              {stylistFeedback && (
                <div className="bg-[#090d16] border border-[#d4af37]/40 p-4 rounded text-xs text-[#e5e0d8] space-y-2 animate-fadeIn">
                  <div className="flex items-center justify-between text-[11px] font-cinzel text-[#d4af37]">
                    <span>REKOMENDASI ATELIER PRIBADI</span>
                    <span className="font-mono text-[10px] text-[#8f8574]">
                      MODEL 0{selectedOutfitIndex + 1} · {selectedZodiac.name.toUpperCase()} ({currentGender === 'male' ? 'PRIA' : 'WANITA'})
                    </span>
                  </div>
                  <p className="leading-relaxed font-cormorant text-base italic text-[#f0ebe1]">
                    "{stylistFeedback}"
                  </p>
                </div>
              )}
            </div>

            {/* Actions: Save to Lookbook & Certificate */}
            <div className="border-t border-[#d4af37]/20 pt-4 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={handleSaveToLookbook}
                className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-[#e7cb68] via-[#d4af37] to-[#b89330] text-[#06080d] font-cinzel font-medium text-xs tracking-widest uppercase rounded-sm hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer shadow-lg shadow-[#d4af37]/15"
              >
                {savedSuccess ? (
                  <>
                    <Check className="w-4 h-4 text-[#06080d]" />
                    <span>Tersimpan di Lookbook!</span>
                  </>
                ) : (
                  <>
                    <Bookmark className="w-4 h-4 text-[#06080d]" />
                    <span>Simpan Model Ini ke Lookbook</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleOpenCertificate}
                className="flex items-center justify-center gap-2 px-5 py-3.5 border border-[#d4af37]/50 text-[#f5eedc] hover:bg-[#d4af37]/10 font-cinzel font-medium text-xs tracking-widest uppercase rounded-sm transition-all cursor-pointer"
              >
                <Award className="w-4 h-4 text-[#d4af37]" />
                <span>Lihat Sertifikat Bespoke</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

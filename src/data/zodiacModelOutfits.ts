import { CuratedOutfit, ZodiacColor, ZodiacSign } from './zodiacData';

interface ZodiacThemeConfig {
  id: string;
  name: string;
  element: 'api' | 'tanah' | 'udara' | 'air';
  symbol: string;
  birthstone: string;
  metal: string;
  signatureColor: string;
  secondaryColor: string;
  accentColor: string;
  primaryMotif: string;
  fragranceCore: string;
}

const ZODIAC_CONFIGS: Record<string, ZodiacThemeConfig> = {
  aries: {
    id: 'aries',
    name: 'Aries',
    element: 'api',
    symbol: '♈',
    birthstone: 'Batu Delima Merah Burma (Ruby)',
    metal: 'Baja Damaskus & Emas 24K',
    signatureColor: '#7A0C18',
    secondaryColor: '#121316',
    accentColor: '#D4AF37',
    primaryMotif: 'Bros Tanduk Domba Emas Antik & Garis Bahu Lancip',
    fragranceCore: 'Oud Kamboja, Damask Rose pekat, dan Lada Hitam'
  },
  taurus: {
    id: 'taurus',
    name: 'Taurus',
    element: 'tanah',
    symbol: '♉',
    birthstone: 'Zamrud Hijau Kolombia (Emerald)',
    metal: 'Tembaga Murni & Emas Mawar 18K',
    signatureColor: '#1B4D3E',
    secondaryColor: '#2D1E12',
    accentColor: '#C5A059',
    primaryMotif: 'Torc Leher Emas Banteng & Beludru Sutra Como',
    fragranceCore: 'Bunga Melati Sambac, Cendana Mysore, dan Nilam'
  },
  gemini: {
    id: 'gemini',
    name: 'Gemini',
    element: 'udara',
    symbol: '♊',
    birthstone: 'Batu Agat & Topaz Emas',
    metal: 'Platina Murni & Perak Murni',
    signatureColor: '#E2E8F0',
    secondaryColor: '#1E293B',
    accentColor: '#F59E0B',
    primaryMotif: 'Siluet Dual-Tone Asimetris & Sulaman Rasi Kembar',
    fragranceCore: 'Jeruk Bergamot Calabria, Bunga Neroli, dan Vetiver'
  },
  cancer: {
    id: 'cancer',
    name: 'Cancer',
    element: 'air',
    symbol: '♋',
    birthstone: 'Mutiara Laut Selatan & Biduri Bulan (Moonstone)',
    metal: 'Perak Murni 999 & Emas Putih',
    signatureColor: '#E2E8F0',
    secondaryColor: '#0F172A',
    accentColor: '#38BDF8',
    primaryMotif: 'Draping Ombak Bulan & Kancing Mutiara Mikimoto',
    fragranceCore: 'Embun Malam, Bunga Teratai Putih, dan Ambergris'
  },
  leo: {
    id: 'leo',
    name: 'Leo',
    element: 'api',
    symbol: '♌',
    birthstone: 'Berlian Kuning Matahari & Safir Kuning',
    metal: 'Emas Murni 24K',
    signatureColor: '#D4AF37',
    secondaryColor: '#0A0A0A',
    accentColor: '#991B1B',
    primaryMotif: 'Bordir Benang Emas Singa Megah & Jubah Beludru',
    fragranceCore: 'Kemenyan Emas Somaliland, Bunga Sedap Malam, dan Madu'
  },
  virgo: {
    id: 'virgo',
    name: 'Virgo',
    element: 'tanah',
    symbol: '♍',
    birthstone: 'Safir Biru Bintang & Zirkon Putih',
    metal: 'Platinum & Titanium Halus',
    signatureColor: '#F8FAFC',
    secondaryColor: '#334155',
    accentColor: '#D97706',
    primaryMotif: 'Potongan Arsitektural Presisi Milimeter & Gazar Sutra',
    fragranceCore: 'Kayu Cedar Putih, Bunga Iris Kering, dan Lumut Ek'
  },
  libra: {
    id: 'libra',
    name: 'Libra',
    element: 'udara',
    symbol: '♎',
    birthstone: 'Batu Kalimaya (Opal Australia) & Kuarsa Mawar',
    metal: 'Emas Mawar 18K & Tembaga Poles',
    signatureColor: '#FDE2E4',
    secondaryColor: '#1E1B4B',
    accentColor: '#D4AF37',
    primaryMotif: 'Lipit Chiffon Simetris Sempurna & Simbol Neraca Emas',
    fragranceCore: 'Mawar Centifolia Grasse, Vanili Bourbon, dan Kasturi'
  },
  scorpio: {
    id: 'scorpio',
    name: 'Scorpio',
    element: 'air',
    symbol: '♏',
    birthstone: 'Batu Topaz Gelap & Obsidian Hitam',
    metal: 'Baja Hitam Teroksidasi & Emas Gelap',
    signatureColor: '#450A0A',
    secondaryColor: '#020617',
    accentColor: '#DC2626',
    primaryMotif: 'Korset Beludru Obsidian & Bros Kalajengking Safir Gelap',
    fragranceCore: 'Pachouli Gelap, Kulit Asap, Damask Rose Hitam, dan Cengkeh'
  },
  sagittarius: {
    id: 'sagittarius',
    name: 'Sagittarius',
    element: 'api',
    symbol: '♐',
    birthstone: 'Pirus Persia (Turquoise) & Batu Amethyst Ungu',
    metal: 'Perunggu Bakar & Emas Kuning 18K',
    signatureColor: '#581C87',
    secondaryColor: '#451A03',
    accentColor: '#D4AF37',
    primaryMotif: 'Aksen Kulit Berkuda Kerajaan & Busur Panah Berlapis Emas',
    fragranceCore: 'Kayu Pinus Hutan, Kapulaga Guatemala, dan Tembakau Kering'
  },
  capricorn: {
    id: 'capricorn',
    name: 'Capricorn',
    element: 'tanah',
    symbol: '♑',
    birthstone: 'Batu Garnet Merah Gelap & Oniks Hitam',
    metal: 'Baja Platina Berukir & Emas Putih',
    signatureColor: '#1E293B',
    secondaryColor: '#0F172A',
    accentColor: '#B45309',
    primaryMotif: 'Jas Wol Serge Berstruktur Tegak & Cincin Segel Pusaka',
    fragranceCore: 'Vetiver Haiti, Kayu Birch Asap, dan Kemenyan Kuno'
  },
  aquarius: {
    id: 'aquarius',
    name: 'Aquarius',
    element: 'udara',
    symbol: '♒',
    birthstone: 'Batu Kecubung Ungu (Amethyst) & Safir Kobalt',
    metal: 'Krom Metalik & Platina Dingin',
    signatureColor: '#1D4ED8',
    secondaryColor: '#030712',
    accentColor: '#60A5FA',
    primaryMotif: 'Lipit Metalik Pleats Avant-Garde & Ornamen Gelombang Angin',
    fragranceCore: 'Ozon Dingin Pegunungan, Bunga Lavender Biru, dan Ambar Kering'
  },
  pisces: {
    id: 'pisces',
    name: 'Pisces',
    element: 'air',
    symbol: '♓',
    birthstone: 'Batu Aquamarine Biru Laut & Mutiara Ombak',
    metal: 'Perak Oksidasi Berkilau & Emas Putih',
    signatureColor: '#0E7490',
    secondaryColor: '#0C4A6E',
    accentColor: '#67E8F9',
    primaryMotif: 'Organza Sutra Ombak Melayang & Kristal Bioluminescence',
    fragranceCore: 'Garam Laut Segar, Lili Air Samudra, dan Kayu Cendana Terapung'
  }
};

const MODEL_THEMES = [
  {
    theme: 'Gala Karpet Merah',
    frenchTitleFemale: 'Le Grand Bal Impérial',
    frenchTitleMale: 'Le Smoking Impérial à Broderie d’Or',
    category: 'gala',
    silhouetteFemale: 'Sculpted Haute Couture Evening Gown with Cathedral Train',
    silhouetteMale: 'Bespoke Velvet Dinner Jacket with Antique Gold Cordwork',
    fabric: 'Beludru Sutra Como & Sutra Satin Duchesse Lyon',
  },
  {
    theme: 'Aristokrat Eksekutif',
    frenchTitleFemale: 'Le Tailleur Structuré Aristocratique',
    frenchTitleMale: 'Le Costume Croisé 6x2 Savile Row',
    category: 'executive',
    silhouetteFemale: 'Architectural Peplum Double-Breasted Power Blazer & Cigarette Trousers',
    silhouetteMale: 'Double-Breasted Power Suiting 6x2 with Broad Peak Lapels',
    fabric: 'Super 160s Worsted Merino Wool & Furing Sutra Jacquard',
  },
  {
    theme: 'Private Nocturne Soirée',
    frenchTitleFemale: 'La Robe Nocturne en Velours Céleste',
    frenchTitleMale: 'La Veste de Salon en Soie et Velours',
    category: 'soiree',
    silhouetteFemale: 'Corseted Column Dress with Flowing Asymmetric Drapes',
    silhouetteMale: 'Belted Silk Velvet Lounging Smoking Jacket with Shawl Collar',
    fabric: 'Crushed Silk Velvet & Sheer Silk Georgette',
  },
  {
    theme: 'Avant-Garde Celestial',
    frenchTitleFemale: 'La Sculpture Astrale Céleste',
    frenchTitleMale: 'Le Manteau Drapé Futuriste Céleste',
    category: 'avant-garde',
    silhouetteFemale: 'Sculptural Winged Origami Cape Gown with Metallic Inlays',
    silhouetteMale: 'Asymmetric Sculptural Draped Trench with Golden Armor Shoulders',
    fabric: 'Metallic Coated Silk Organza & Bonded Cavalry Twill',
  },
  {
    theme: 'Penobatan Mahkota Kerajaan',
    frenchTitleFemale: 'Le Manteau de Couronnement Sacré',
    frenchTitleMale: 'L’Habit Cérémoniel du Monarque',
    category: 'coronation',
    silhouetteFemale: 'Imperial Robe of State with Embroidered Velvet Ermine Mantle',
    silhouetteMale: 'Regal Military Doublet Coat with Pure Gold Epaulettes & Sash',
    fabric: 'Heavy Brocade Woven with 24K Gold Filigree & Silk Velvet',
  },
  {
    theme: 'Riviera Resort & Yachting',
    frenchTitleFemale: 'La Croisière Blanche de Monaco',
    frenchTitleMale: 'Le Blazer Nautique Yacht Club Céleste',
    category: 'riviera',
    silhouetteFemale: 'Breeze-Kissed Halter Silk Jumpsuit with Chiffon Cape Overlay',
    silhouetteMale: 'Unstructured Double-Breasted Linen-Silk Jacket & Pleated Cream Slacks',
    fabric: 'Belgian Linen-Silk Blend & Mulberry Silk Charmeuse',
  },
  {
    theme: 'Opera & Grand Philharmonic',
    frenchTitleFemale: 'La Symphonie de Minuit au Palais Garnier',
    frenchTitleMale: 'La Queue-de-Pie d’Opéra Majestueuse',
    category: 'opera',
    silhouetteFemale: 'Dramatic Tiered Ruffled Ballgown with Off-Shoulder Corsetry',
    silhouetteMale: 'Classic Midnight Evening Tailcoat with Grosgrain Lapels & Pique Vest',
    fabric: 'Taffeta Sutra Lyon & French Chantilly Lace',
  },
  {
    theme: 'Perjamuan Lilin Eksklusif',
    frenchTitleFemale: 'La Soirée aux Chandelles Romantique',
    frenchTitleMale: 'Le Dîner Intime aux Étoiles',
    category: 'dinner',
    silhouetteFemale: 'Bias-Cut Liquid Silk Slip Gown with Cowl Neck & Low Open Back',
    silhouetteMale: 'Midnight Single-Breasted Shawl Collar Tuxedo in Pure Wool Crepe',
    fabric: 'Heavy Washed Silk Charmeuse & Barathea Pure Wool',
  },
  {
    theme: 'Midnight Masquerade Ball',
    frenchTitleFemale: 'Le Masque d’Or Vénitien',
    frenchTitleMale: 'L’Arlequin Mystérieux de Nuit',
    category: 'masquerade',
    silhouetteFemale: 'High-Low Dramatic Jacquard Gown with Sculpted Gold Filigree Mask',
    silhouetteMale: 'Brocade Caped Tuxedo with Satin Mask & High Winged Collar',
    fabric: 'Silk Damask Jacquard & French Guipure Lace',
  },
  {
    theme: 'Haute Horlogerie & Heritage',
    frenchTitleFemale: 'L’Héritage Céleste Intemporel',
    frenchTitleMale: 'Le Garde-Temps Ancestral Aristocrate',
    category: 'heritage',
    silhouetteFemale: 'Timeless Bar Jacket with Pleated Sunburst Skirt & Astrological Crest',
    silhouetteMale: 'Heritage Tweed-Cashmere Three-Piece Suit with Watch Chain & Gold Cufflinks',
    fabric: 'Scottish Cashmere-Tweed & Japanese Silk Mikado',
  }
];

export function generateZodiacOutfits(signId: string, gender: 'female' | 'male'): CuratedOutfit[] {
  const cfg = ZODIAC_CONFIGS[signId] || ZODIAC_CONFIGS.aries;

  return MODEL_THEMES.map((themeObj, index) => {
    const modelNum = index + 1;
    const isMale = gender === 'male';

    const title = isMale
      ? `${themeObj.frenchTitleMale} (${cfg.name})`
      : `${themeObj.frenchTitleFemale} (${cfg.name})`;

    const subtitle = isMale
      ? `Model 0${modelNum} Pria: ${themeObj.theme} dirancang khusus untuk wibawa kosmis ${cfg.name} berhias ${cfg.primaryMotif}.`
      : `Model 0${modelNum} Wanita: ${themeObj.theme} dirancang khusus untuk memancarkan aura adiluhung ${cfg.name} berhias ${cfg.primaryMotif}.`;

    const silhouette = isMale ? themeObj.silhouetteMale : themeObj.silhouetteFemale;

    const top = isMale
      ? `Jas Tailored ${themeObj.theme} berlapis sutra ${cfg.signatureColor} dengan potongan bahu tegas, kancing ukir lambang ${cfg.symbol}, dan furing monogram emas.`
      : `Atasan Korset / Bodice ${themeObj.theme} berserat sutra warna ${cfg.signatureColor} dengan bordir rasi bintang ${cfg.name} benang emas 24K.`;

    const bottom = isMale
      ? `Celana Tailored Trousers lipit rapi warna ${cfg.secondaryColor} dengan strip samping satin sutra selaras sepatu bespoke.`
      : `Bawahan Rok Mengembang / Trousers Sutra Mewah warna ${cfg.secondaryColor} dengan belahan elegan beraksen furing ${cfg.accentColor}.`;

    const outerwear = modelNum % 2 === 1
      ? `Mantel Cape Panjang Berstruktur Kerajaan berhias sulaman rasi ${cfg.name} pada bagian punggung dan kerah tinggi.`
      : undefined;

    const shoes = isMale
      ? `Sepatu Kulit Oxford / Monk-strap patinasi tangan Como warna ${cfg.secondaryColor} dengan sol kulit berukir lambang ${cfg.symbol}.`
      : `Stiletto Heeled Sandals / Pumps Sutra Satin dengan hak bersepuh ${cfg.metal} bertatahkan mikro ${cfg.birthstone}.`;

    const jewelry = isMale
      ? `Kancing Manset Kemeja & Pin Kerah ${cfg.metal} bertatahkan ${cfg.birthstone} asli serta jam saku komplikasi rasi bintang.`
      : `Kalung Choker Arsitektural & Cincin Koktail ${cfg.metal} bertatahkan ${cfg.birthstone} dengan liontin rasi ${cfg.symbol}.`;

    const fragrance = `${cfg.fragranceCore}, berpadu aroma hangat kayu cendana dan embun malam kosmis.`;

    const palette: ZodiacColor[] = [
      {
        name: `Warna Aura ${cfg.name}`,
        hex: cfg.signatureColor,
        meaning: `Energi primordial elemen ${cfg.element} dan wibawa rasi ${cfg.name}`
      },
      {
        name: 'Warna Keabadian Malam',
        hex: cfg.secondaryColor,
        meaning: 'Kedalaman ruang angkasa dan ketenangan aristokrat'
      },
      {
        name: 'Kilau Bintang Kosmis',
        hex: cfg.accentColor,
        meaning: `Pendar keberuntungan permata ${cfg.birthstone}`
      }
    ];

    const fabricGuide = `${themeObj.fabric}, diproses khusus oleh perajin adibusana Lyon dan Como dengan furing monogram bertinta emas.`;
    const stylingNote = isMale
      ? `Kenakan dengan postur tegap khas pria terhormat. Padukan dengan pin bros lambang ${cfg.symbol} tepat pada lapel kiri di atas jantung.`
      : `Rambut disanggul rapi atau dibiarkan terurai lembut. Pastikan perhiasan ${cfg.birthstone} menjadi titik fokus yang memikat ruangan.`;

    return {
      id: `${signId}-${isMale ? 'm' : 'f'}-model-${modelNum}`,
      gender,
      category: themeObj.category as any,
      theme: `Model 0${modelNum}: ${themeObj.theme}`,
      title,
      subtitle,
      silhouette,
      top,
      bottom,
      outerwear,
      shoes,
      jewelry,
      fragrance,
      palette,
      fabricGuide,
      stylingNote
    };
  });
}

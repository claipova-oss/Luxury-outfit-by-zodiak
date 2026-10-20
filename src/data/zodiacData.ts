import { generateZodiacOutfits } from './zodiacModelOutfits';

export interface ZodiacColor {
  name: string;
  hex: string;
  meaning: string;
}

export interface CuratedOutfit {
  id: string;
  gender: 'female' | 'male';
  category: 'gala' | 'executive' | 'soiree' | 'avant-garde' | 'coronation' | 'riviera' | 'opera' | 'dinner' | 'masquerade' | 'heritage' | string;
  theme: string;
  title: string;
  subtitle: string;
  silhouette: string;
  top: string;
  bottom: string;
  outerwear?: string;
  shoes: string;
  jewelry: string;
  fragrance: string;
  palette: ZodiacColor[];
  fabricGuide: string;
  stylingNote: string;
  imageAsset?: string;
}

export interface StarPoint {
  x: number;
  y: number;
  size?: number;
  label?: string;
}

export interface ZodiacSign {
  id: string;
  name: string;
  indonesianName: string;
  symbol: string;
  latinName: string;
  dateRange: string;
  startMonth: number;
  startDay: number;
  endMonth: number;
  endDay: number;
  element: 'api' | 'tanah' | 'udara' | 'air';
  elementLabel: string;
  rulingPlanet: string;
  birthstone: string;
  metal: string;
  luckyColors: string[];
  imageAssetWomen: string;
  imageAssetMen: string;
  constellationName: string;
  stars: StarPoint[];
  connections: [number, number][];
  personality: {
    essence: string;
    charisma: string;
    strength: string;
    fashionIdentity: string;
    taboos: string;
  };
  outfits: CuratedOutfit[]; // 10 female models
  maleOutfits: CuratedOutfit[]; // 10 male models
}

export const ZODIAC_SIGNS: ZodiacSign[] = [
  {
    id: 'aries',
    name: 'Aries',
    indonesianName: 'Domba Jantan Berani',
    symbol: '♈',
    latinName: 'Aries Caelestis',
    dateRange: '21 Maret – 19 April',
    startMonth: 3,
    startDay: 21,
    endMonth: 4,
    endDay: 19,
    element: 'api',
    elementLabel: 'Api Primordial (Fire)',
    rulingPlanet: 'Mars (Dewa Keberanian & Aksi)',
    birthstone: 'Berlian & Batu Delima Merah Burma (Ruby)',
    metal: 'Baja Damaskus & Emas Murni 24K',
    luckyColors: ['#8B0000', '#D4AF37', '#1A1A1A'],
    imageAssetWomen: '/src/assets/images/couture_aries_bold_1792494625145.jpg',
    imageAssetMen: '/src/assets/images/couture_men_fire_leo_1792495461322.jpg',
    constellationName: 'Constellatio Arietis',
    stars: [
      { x: 30, y: 70, size: 3, label: 'Hamal' },
      { x: 55, y: 55, size: 2.5, label: 'Sheratan' },
      { x: 75, y: 50, size: 2, label: 'Mesarthim' },
      { x: 90, y: 35, size: 1.5, label: '41 Ari' }
    ],
    connections: [[0, 1], [1, 2], [2, 3]],
    personality: {
      essence: 'Pionir berjiwa penakluk yang pantang mundur, penuh determinasi membaja, dan spontanitas energetik yang memukau.',
      charisma: 'Aura magnetik yang mendominasi ruangan sejak langkah pertama dengan tatapan tajam dan keberanian tak terbendung.',
      strength: 'Percaya diri tinggi dalam mengenakan tailoring berstruktur tegas, bahu bersudut lancip, dan warna merah kirmizi berani.',
      fashionIdentity: 'Sharp Crimson Power Tailoring & Sculpted Capes berhias bros tanduk emas antik dan garis bahu arsitektural.',
      taboos: 'Hindari busana terlalu pasif tanpa struktur, renda rapuh berlebihan, atau warna pastel pudar tanpa ketegasan.'
    },
    outfits: generateZodiacOutfits('aries', 'female'),
    maleOutfits: generateZodiacOutfits('aries', 'male')
  },
  {
    id: 'taurus',
    name: 'Taurus',
    indonesianName: 'Banteng Emas Megah',
    symbol: '♉',
    latinName: 'Taurus Solidus',
    dateRange: '20 April – 20 Mei',
    startMonth: 4,
    startDay: 20,
    endMonth: 5,
    endDay: 20,
    element: 'tanah',
    elementLabel: 'Tanah Subur & Keabadian (Earth)',
    rulingPlanet: 'Venus (Dewi Kemewahan & Keindahan Indrawi)',
    birthstone: 'Zamrud Kolombia Murni (Emerald) & Safir Hijau',
    metal: 'Tembaga Murni & Emas Mawar 18K (Rose Gold)',
    luckyColors: ['#1B4D3E', '#C5A059', '#EAE6DF'],
    imageAssetWomen: '/src/assets/images/couture_taurus_emerald_1792494625992.jpg',
    imageAssetMen: '/src/assets/images/couture_men_earth_capricorn_1792495463067.jpg',
    constellationName: 'Constellatio Tauri',
    stars: [
      { x: 25, y: 80, size: 3.5, label: 'Aldebaran' },
      { x: 45, y: 60, size: 2.5, label: 'Elnath' },
      { x: 60, y: 40, size: 2, label: 'Alcyone' },
      { x: 75, y: 35, size: 2, label: 'Atlas' },
      { x: 85, y: 25, size: 1.5, label: 'Electra' }
    ],
    connections: [[0, 1], [1, 2], [2, 3], [3, 4]],
    personality: {
      essence: 'Pengagum estetika adiluhung dengan kesabaran membatu, cita rasa kemewahan indrawi paling mendalam, dan komitmen absolut.',
      charisma: 'Pesona ningrat yang tenang, bersahaja namun memancarkan kekayaan substansial yang tak perlu berteriak (quiet luxury).',
      strength: 'Kepekaan tekstil tertinggi pada wol Vicuña superfine, beludru sutra Como, dan perhiasan zamrud berpotongan antik.',
      fashionIdentity: 'Emerald Silk Velvet & Tailored Double-Breasted Coats dengan perhiasan torc emas leher padat.',
      taboos: 'Hindari kain sintetis tipis, siluet terburu-buru tanpa jatuhan berat, dan warna neon mencolok tanpa substansi.'
    },
    outfits: generateZodiacOutfits('taurus', 'female'),
    maleOutfits: generateZodiacOutfits('taurus', 'male')
  },
  {
    id: 'gemini',
    name: 'Gemini',
    indonesianName: 'Bintang Kembar Dinamis',
    symbol: '♊',
    latinName: 'Gemini Duplex',
    dateRange: '21 Mei – 20 Juni',
    startMonth: 5,
    startDay: 21,
    endMonth: 6,
    endDay: 20,
    element: 'udara',
    elementLabel: 'Udara Cerdas & Adaptif (Air)',
    rulingPlanet: 'Merkurius (Dewa Intelek & Komunikasi)',
    birthstone: 'Batu Agat & Topaz Emas Berkilau',
    metal: 'Platina Murni & Perak Murni 925',
    luckyColors: ['#E2E8F0', '#1E293B', '#F59E0B'],
    imageAssetWomen: '/src/assets/images/couture_gemini_dual_1792496934078.jpg',
    imageAssetMen: '/src/assets/images/couture_men_air_libra_1792495463583.jpg',
    constellationName: 'Constellatio Geminorum',
    stars: [
      { x: 30, y: 25, size: 3.5, label: 'Pollux' },
      { x: 45, y: 20, size: 3, label: 'Castor' },
      { x: 35, y: 55, size: 2, label: 'Alhena' },
      { x: 55, y: 50, size: 2, label: 'Wasat' },
      { x: 75, y: 80, size: 2, label: 'Mebsuta' },
      { x: 85, y: 75, size: 2, label: 'Tejat' }
    ],
    connections: [[1, 0], [1, 3], [0, 2], [3, 4], [2, 5]],
    personality: {
      essence: 'Intelektualitas berkilau penuh kecerdikan, adaptabilitas tanpa batas, dan dualitas pesona yang selalu mengejutkan dunia.',
      charisma: 'Percakapan memikat, tatapan hidup penuh rasa ingin tahu, dan dinamika gerak yang memukau pergaulan sosial elit.',
      strength: 'Keberanian mengenakan siluet asimetris, teknik color-block dua nada monokromatik, dan busana multifungsi yang fleksibel.',
      fashionIdentity: 'Dual-Tone Asymmetric Couture & Platinum Starburst Cape Coats dengan detail pleats dinamis.',
      taboos: 'Hindari busana terlalu monoton serba kaku tanpa variasi tekstur, siluet membosankan, atau gaya yang terlalu kolot.'
    },
    outfits: generateZodiacOutfits('gemini', 'female'),
    maleOutfits: generateZodiacOutfits('gemini', 'male')
  },
  {
    id: 'cancer',
    name: 'Cancer',
    indonesianName: 'Kepiting Pelindung Jiwa',
    symbol: '♋',
    latinName: 'Cancer Caelestis',
    dateRange: '21 Juni – 22 Juli',
    startMonth: 6,
    startDay: 21,
    endMonth: 7,
    endDay: 22,
    element: 'air',
    elementLabel: 'Air Emosional & Intuisi Murni (Water)',
    rulingPlanet: 'Bulan (Ratu Malam & Emosi Mendalam)',
    birthstone: 'Mutiara Laut Selatan Mikimoto & Biduri Bulan (Moonstone)',
    metal: 'Perak Murni 999 & Emas Putih 18K',
    luckyColors: ['#F1F5F9', '#0F172A', '#38BDF8'],
    imageAssetWomen: '/src/assets/images/couture_cancer_moonlight_1792496934812.jpg',
    imageAssetMen: '/src/assets/images/couture_men_water_scorpio_1792495464208.jpg',
    constellationName: 'Constellatio Cancri',
    stars: [
      { x: 50, y: 50, size: 3, label: 'Asellus Australis' },
      { x: 50, y: 35, size: 2.5, label: 'Asellus Borealis' },
      { x: 30, y: 70, size: 2.5, label: 'Acubens' },
      { x: 75, y: 70, size: 2, label: 'Tegmine' }
    ],
    connections: [[1, 0], [0, 2], [0, 3]],
    personality: {
      essence: 'Jiwa penuh kasih dengan intuisi tajam laksana gelombang laut, pelindung kehangatan keluarga pusaka dan keanggunan abadi.',
      charisma: 'Kelembutan memikat yang menenangkan jiwa siapapun di sekitarnya, bagai pendar cahaya rembulan di atas samudra malam.',
      strength: 'Sangat piawai dalam draping sutra cair, busana berbalut selendang halus, dan perhiasan mutiara pusaka keluarga turun-temurun.',
      fashionIdentity: 'Liquid Moonlight Silver Silk Draped Gowns & South Sea Pearl Brooches dengan ekor selendang mengalir.',
      taboos: 'Hindari sudut potongan pakaian yang terlalu runcing agresif, warna neon menyengat, atau siluet yang menekan tubuh tanpa kenyamanan.'
    },
    outfits: generateZodiacOutfits('cancer', 'female'),
    maleOutfits: generateZodiacOutfits('cancer', 'male')
  },
  {
    id: 'leo',
    name: 'Leo',
    indonesianName: 'Singa Maharaja Emas',
    symbol: '♌',
    latinName: 'Leo Imperialis',
    dateRange: '23 Juli – 22 Agustus',
    startMonth: 7,
    startDay: 23,
    endMonth: 8,
    endDay: 22,
    element: 'api',
    elementLabel: 'Api Kerajaan & Kejayaan (Fire)',
    rulingPlanet: 'Matahari (Pusat Cahaya & Kehidupan Semesta)',
    birthstone: 'Berlian Kuning Matahari, Topaz Emas & Amber',
    metal: 'Emas Murni 24K & Platina Mulia',
    luckyColors: ['#D4AF37', '#0A0A0A', '#991B1B'],
    imageAssetWomen: '/src/assets/images/couture_leo_regal_gold_1792496935423.jpg',
    imageAssetMen: '/src/assets/images/couture_men_royal_tuxedo_1792495982592.jpg',
    constellationName: 'Constellatio Leonis',
    stars: [
      { x: 30, y: 65, size: 4, label: 'Regulus' },
      { x: 45, y: 50, size: 2.5, label: 'Algieba' },
      { x: 50, y: 35, size: 2, label: 'Adhafera' },
      { x: 60, y: 25, size: 2, label: 'Rasalas' },
      { x: 70, y: 55, size: 2.5, label: 'Zosma' },
      { x: 85, y: 60, size: 3, label: 'Denebola' }
    ],
    connections: [[0, 1], [1, 2], [2, 3], [1, 4], [4, 5]],
    personality: {
      essence: 'Penguasa alami panggung kehidupan dengan kemurahan hati ningrat, martabat tak tergoyahkan, dan aura kaisar semesta.',
      charisma: 'Gravitasi raja yang membuat semua pandangan mata tertuju seketika saat memasuki ruangan megah.',
      strength: 'Sangat anggun mengenakan sulaman benang emas murni 24K, beludru istana bervolume agung, dan bros singa bermahkota.',
      fashionIdentity: 'Imperial Gold Filigree Embroidered Velvet Robes & Coronation Tailoring bertabur kristal dan kancing singa.',
      taboos: 'Hindari busana lusuh yang meremehkan penampilan diri, warna pudar kusam, atau potongan minim tanpa wibawa raja.'
    },
    outfits: generateZodiacOutfits('leo', 'female'),
    maleOutfits: generateZodiacOutfits('leo', 'male')
  },
  {
    id: 'virgo',
    name: 'Virgo',
    indonesianName: 'Sang Perawan Cermat',
    symbol: '♍',
    latinName: 'Virgo Praecisa',
    dateRange: '23 Agustus – 22 September',
    startMonth: 8,
    startDay: 23,
    endMonth: 9,
    endDay: 22,
    element: 'tanah',
    elementLabel: 'Tanah Murni & Kesempurnaan (Earth)',
    rulingPlanet: 'Merkurius (Ketelitian Analitis & Rasio Tertinggi)',
    birthstone: 'Safir Biru Bintang (Blue Sapphire) & Zirkon Murni',
    metal: 'Platinum Murni & Titanium Halus',
    luckyColors: ['#F8FAFC', '#334155', '#D97706'],
    imageAssetWomen: '/src/assets/images/couture_virgo_architectural_1792496952140.jpg',
    imageAssetMen: '/src/assets/images/couture_men_executive_suit_1792495982426.jpg',
    constellationName: 'Constellatio Virginis',
    stars: [
      { x: 40, y: 70, size: 4, label: 'Spica' },
      { x: 50, y: 50, size: 2.5, label: 'Porrima' },
      { x: 60, y: 35, size: 2, label: 'Vindemiatrix' },
      { x: 70, y: 55, size: 2, label: 'Heze' },
      { x: 80, y: 75, size: 2, label: 'Syrma' }
    ],
    connections: [[0, 1], [1, 2], [1, 3], [3, 4]],
    personality: {
      essence: 'Pencari kesempurnaan mutlak dengan standar kualitas tanpa kompromi, mata bedah terhadap setiap milimeter jahitan, dan keanggunan murni.',
      charisma: 'Wibawa intelektual bersih yang memikat dengan kerapian sempurna, tata bahasa teratur, dan wangi segar yang elegan.',
      strength: 'Jawara dalam jahitan bespoke presisi, garis arsitektural tanpa cacat, kain sutra gazar putih gading, dan furing tersembunyi rapi.',
      fashionIdentity: 'Pristine Ivory Architectural Cape Blazers & Razor-Sharp Tailoring beraksen sulaman bintang mikro emas halus.',
      taboos: 'Hindari jahitan mengkerut, kain kusut berantakan, aksesoris berlebihan tanpa fungsi, atau busana yang tidak pas ukuran tubuh.'
    },
    outfits: generateZodiacOutfits('virgo', 'female'),
    maleOutfits: generateZodiacOutfits('virgo', 'male')
  },
  {
    id: 'libra',
    name: 'Libra',
    indonesianName: 'Neraca Keseimbangan Estetika',
    symbol: '♎',
    latinName: 'Libra Harmonica',
    dateRange: '23 September – 22 Oktober',
    startMonth: 9,
    startDay: 23,
    endMonth: 10,
    endDay: 22,
    element: 'udara',
    elementLabel: 'Udara Harmoni & Keindahan (Air)',
    rulingPlanet: 'Venus (Dewi Kesenian, Cinta & Keseimbangan)',
    birthstone: 'Batu Kalimaya (Opal Australia) & Kuarsa Mawar',
    metal: 'Emas Mawar 18K & Tembaga Poles Mengkilap',
    luckyColors: ['#FDE2E4', '#1E1B4B', '#D4AF37'],
    imageAssetWomen: '/src/assets/images/couture_libra_pastel_1792494626599.jpg',
    imageAssetMen: '/src/assets/images/couture_men_air_libra_1792495463583.jpg',
    constellationName: 'Constellatio Librae',
    stars: [
      { x: 40, y: 40, size: 3, label: 'Zubeneschamali' },
      { x: 60, y: 60, size: 3, label: 'Zubenelgenubi' },
      { x: 45, y: 75, size: 2, label: 'Brachium' },
      { x: 65, y: 35, size: 2, label: 'Zubenelhakrabi' }
    ],
    connections: [[0, 1], [1, 2], [0, 3]],
    personality: {
      essence: 'Diplomat agung pecinta simetri dan keindahan paripurna, penyeimbang suasana dengan pesona anggun yang memikat kedua belah pihak.',
      charisma: 'Senyum ramah diplomatik, aura keharmonisan yang membuat setiap perjamuan terasa damai, santun, dan sangat berkelas.',
      strength: 'Sangat mahir memadukan warna pastel sampanye dengan kain lipit chiffon melayang serta siluet yang seimbang sempurna.',
      fashionIdentity: 'Symmetrical Powder Blush & Champagne Gold Pleated Chiffon Gowns dengan ikat pinggang timbangan emas.',
      taboos: 'Hindari potongan asimetris yang berat sebelah secara kasar, warna-warna kontras yang saling bertabrakan norak, atau siluet kumal.'
    },
    outfits: generateZodiacOutfits('libra', 'female'),
    maleOutfits: generateZodiacOutfits('libra', 'male')
  },
  {
    id: 'scorpio',
    name: 'Scorpio',
    indonesianName: 'Kalajengking Penguasa Misteri',
    symbol: '♏',
    latinName: 'Scorpius Mysticus',
    dateRange: '23 Oktober – 21 November',
    startMonth: 10,
    startDay: 23,
    endMonth: 11,
    endDay: 21,
    element: 'air',
    elementLabel: 'Air Dalam & Transformasi (Water)',
    rulingPlanet: 'Pluto & Mars (Kekuatan Transformasi & Magnetisme Gaib)',
    birthstone: 'Topaz Gelap, Batu Obsidian & Ruby Merah Darah',
    metal: 'Baja Hitam Teroksidasi & Emas Gelap 18K',
    luckyColors: ['#450A0A', '#020617', '#DC2626'],
    imageAssetWomen: '/src/assets/images/couture_scorpio_noir_1792494628161.jpg',
    imageAssetMen: '/src/assets/images/couture_men_water_scorpio_1792495464208.jpg',
    constellationName: 'Constellatio Scorpii',
    stars: [
      { x: 45, y: 45, size: 4, label: 'Antares' },
      { x: 35, y: 35, size: 2.5, label: 'Graffias' },
      { x: 30, y: 50, size: 2, label: 'Dschubba' },
      { x: 55, y: 65, size: 2.5, label: 'Sargas' },
      { x: 70, y: 80, size: 3, label: 'Shaula' },
      { x: 80, y: 75, size: 2.5, label: 'Lesath' }
    ],
    connections: [[1, 2], [2, 0], [0, 3], [3, 4], [4, 5]],
    personality: {
      essence: 'Jiwa penuh gairah misterius, daya tahan tak terpatahkan, dan kemampuan membaca rahasia terdalam orang lain hanya dalam satu lirikan.',
      charisma: 'Daya pikat magnetik yang menghipnotis, berbahaya, gelap, dan sangat menggoda dengan aura kekuasaan yang mutlak.',
      strength: 'Tak tertandingi dalam busana serba hitam obsidian velvet, panel renda korset tembus pandang terstruktur, dan potongan kerah tajam.',
      fashionIdentity: 'Obsidian Noir Velvet Corseted Gowns & Smoking Tailoring berhias batu delima darah Burma dan siluet sengatan.',
      taboos: 'Hindari warna pastel kekanak-kanakan, motif bunga ceria yang ceroboh, atau pakaian longgar tanpa intensitas sensual.'
    },
    outfits: generateZodiacOutfits('scorpio', 'female'),
    maleOutfits: generateZodiacOutfits('scorpio', 'male')
  },
  {
    id: 'sagittarius',
    name: 'Sagittarius',
    indonesianName: 'Sang Pemanah Berjiwa Bebas',
    symbol: '♐',
    latinName: 'Sagittarius Caelestis',
    dateRange: '22 November – 21 Desember',
    startMonth: 11,
    startDay: 22,
    endMonth: 12,
    endDay: 21,
    element: 'api',
    elementLabel: 'Api Pengembara & Visi Luas (Fire)',
    rulingPlanet: 'Jupiter (Dewa Keberuntungan & Ekspansi Semesta)',
    birthstone: 'Pirus Persia (Turquoise) & Batu Kecubung Ungu (Amethyst)',
    metal: 'Perunggu Bakar Tradisi & Emas Kuning 18K',
    luckyColors: ['#581C87', '#451A03', '#D4AF37'],
    imageAssetWomen: '/src/assets/images/couture_sagittarius_royal_1792496952389.jpg',
    imageAssetMen: '/src/assets/images/couture_men_fire_leo_1792495461322.jpg',
    constellationName: 'Constellatio Sagittarii',
    stars: [
      { x: 40, y: 60, size: 3.5, label: 'Kaus Australis' },
      { x: 50, y: 45, size: 3, label: 'Kaus Media' },
      { x: 45, y: 30, size: 2.5, label: 'Kaus Borealis' },
      { x: 65, y: 40, size: 3, label: 'Nunki' },
      { x: 75, y: 55, size: 2.5, label: 'Ascella' }
    ],
    connections: [[0, 1], [1, 2], [1, 3], [3, 4]],
    personality: {
      essence: 'Pengembara filosofis yang memanah cita-cita ke langit tertinggi, berjiwa mulia, optimis tanpa batas, dan mencintai kebebasan sejati.',
      charisma: 'Antusiasme menular, tawa hangat bangsawan pecinta petualangan, dan wawasan kosmopolitan yang melintasi benua.',
      strength: 'Sangat berwibawa mengenakan jubah beludru ungu kaisar (amethyst), aksen kulit berkuda ningrat, dan bros panah emas antik.',
      fashionIdentity: 'Imperial Amethyst Velvet Archery Tailoring & Equestrian Capes berhias batu turquoise dan sulaman rasi panah.',
      taboos: 'Hindari busana terlalu sempit yang membatasi langkah gerak kaki, kain kaku tanpa elastisitas, atau gaya membosankan minim jiwa petualang.'
    },
    outfits: generateZodiacOutfits('sagittarius', 'female'),
    maleOutfits: generateZodiacOutfits('sagittarius', 'male')
  },
  {
    id: 'capricorn',
    name: 'Capricorn',
    indonesianName: 'Kambing Gunung Sang Puncak',
    symbol: '♑',
    latinName: 'Capricornus Solidus',
    dateRange: '22 Desember – 19 Januari',
    startMonth: 12,
    startDay: 22,
    endMonth: 1,
    endDay: 19,
    element: 'tanah',
    elementLabel: 'Tanah Puncak Karang & Wibawa Abadi (Earth)',
    rulingPlanet: 'Saturnus (Penguasa Waktu, Disiplin & Struktur Kekal)',
    birthstone: 'Batu Garnet Merah Gelap, Oniks Hitam & Safir Abu',
    metal: 'Baja Platina Terpahat & Emas Putih Kuno',
    luckyColors: ['#1E293B', '#0F172A', '#B45309'],
    imageAssetWomen: '/src/assets/images/zodiac_earth_couture_1792493603647.jpg',
    imageAssetMen: '/src/assets/images/couture_men_earth_capricorn_1792495463067.jpg',
    constellationName: 'Constellatio Capricorni',
    stars: [
      { x: 25, y: 35, size: 3, label: 'Algedi' },
      { x: 35, y: 40, size: 2.5, label: 'Dabih' },
      { x: 65, y: 70, size: 2.5, label: 'Nashira' },
      { x: 80, y: 65, size: 3.5, label: 'Deneb Algedi' }
    ],
    connections: [[0, 1], [1, 2], [2, 3]],
    personality: {
      essence: 'Penguasa puncak keberhasilan yang membangun dinasti abadi dengan ketabahan baja, wibawa ningrat sejati, dan kedewasaan tak tertandingi.',
      charisma: 'Gravitasi wibawa kepala dewan eksekutif tertua, aura ketegasan dingin yang mengundang rasa hormat seketika dari para pemimpin dunia.',
      strength: 'Terbaik dalam mengenakan jas wol serge tenunan Inggris terberat, kerah mantel kasmir berstruktur tegap, dan jam saku kerangka emas.',
      fashionIdentity: 'Midnight Slate Structured Double-Breasted Power Suiting & Heritage Family Signet Rings berlapis wol Loro Piana.',
      taboos: 'Hindari busana kasual berantakan tanpa struktur, kain tipis yang mudah kusut, atau tren musiman murah yang cepat usang.'
    },
    outfits: generateZodiacOutfits('capricorn', 'female'),
    maleOutfits: generateZodiacOutfits('capricorn', 'male')
  },
  {
    id: 'aquarius',
    name: 'Aquarius',
    indonesianName: 'Pembawa Air Revolusi Bintang',
    symbol: '♒',
    latinName: 'Aquarius Caelestis',
    dateRange: '20 Januari – 18 Februari',
    startMonth: 1,
    startDay: 20,
    endMonth: 2,
    endDay: 18,
    element: 'udara',
    elementLabel: 'Udara Futuristik & Visi Semesta (Air)',
    rulingPlanet: 'Uranus (Dewa Terobosan Ilmiah & Orisinalitas Mutlak)',
    birthstone: 'Batu Kecubung Ungu (Amethyst) & Safir Biru Kobalt',
    metal: 'Krom Metalik Mengkilap & Titanium Udara',
    luckyColors: ['#1D4ED8', '#030712', '#60A5FA'],
    imageAssetWomen: '/src/assets/images/couture_aquarius_electric_1792496951440.jpg',
    imageAssetMen: '/src/assets/images/couture_men_avantgarde_1792495983417.jpg',
    constellationName: 'Constellatio Aquarii',
    stars: [
      { x: 35, y: 35, size: 3, label: 'Sadalmelik' },
      { x: 50, y: 30, size: 3.5, label: 'Sadalsuud' },
      { x: 60, y: 55, size: 2.5, label: 'Skat' },
      { x: 75, y: 70, size: 2, label: 'Ancha' }
    ],
    connections: [[0, 1], [1, 2], [2, 3]],
    personality: {
      essence: 'Visioner masa depan yang mendahului zamannya hingga satu abad, menolak konformitas demi keunikan estetika kosmis yang sejati.',
      charisma: 'Aura futuristik yang magnetis, orisinalitas gaya berpakaian yang menciptakan tren baru alih-alih mengikutinya.',
      strength: 'Sangat memukau dalam gaun lipit metalik pleats biru kobalt, mantel draping arsitektural perak krom, dan aksesoris geometris.',
      fashionIdentity: 'Electric Cobalt Sculptural Metallic Pleated Trenches & Avant-Garde Astrolux Draped Robes.',
      taboos: 'Hindari busana klise yang meniru orang lain secara membosankan, potongan tradisional tanpa sentuhan masa depan, atau seragam konvensional.'
    },
    outfits: generateZodiacOutfits('aquarius', 'female'),
    maleOutfits: generateZodiacOutfits('aquarius', 'male')
  },
  {
    id: 'pisces',
    name: 'Pisces',
    indonesianName: 'Dua Ikan Samudra Mistis',
    symbol: '♓',
    latinName: 'Pisces Mysticus',
    dateRange: '19 Februari – 20 Maret',
    startMonth: 2,
    startDay: 19,
    endMonth: 3,
    endDay: 20,
    element: 'air',
    elementLabel: 'Air Samudra Kosmis & Spiritualitas (Water)',
    rulingPlanet: 'Neptunus (Dewa Mimpi, Samudra Tak Terbatas & Puisi Ilahi)',
    birthstone: 'Batu Aquamarine Biru Laut Murni & Mutiara Ombak Samudra',
    metal: 'Perak Oksidasi Berkilau & Emas Putih Murni 18K',
    luckyColors: ['#0E7490', '#0C4A6E', '#67E8F9'],
    imageAssetWomen: '/src/assets/images/couture_pisces_ethereal_1792494627931.jpg',
    imageAssetMen: '/src/assets/images/zodiac_water_couture_1792493603888.jpg',
    constellationName: 'Constellatio Piscium',
    stars: [
      { x: 25, y: 75, size: 3.5, label: 'Alrescha' },
      { x: 35, y: 55, size: 2.5, label: 'Fumalsamakah' },
      { x: 55, y: 35, size: 2.5, label: 'Torcular' },
      { x: 75, y: 30, size: 2, label: 'Kullat Nunu' }
    ],
    connections: [[0, 1], [1, 2], [2, 3]],
    personality: {
      essence: 'Penyair samudra kosmis berhati empati tanpa batas, hidup dalam dimensi mimpi adiluhung yang menjelma menjadi keindahan nyata.',
      charisma: 'Pesona melankolis mistis yang membius jiwa, membawa siapa saja yang memandangnya terhanyut dalam ketenangan alam bawah sadar.',
      strength: 'Sangat memikat dalam organza sutra berombak iridescent, selendang gaun bertingkat yang melambai laksana sirip ikan di kedalaman air.',
      fashionIdentity: 'Iridescent Turquoise & Aquamarine Silk Organza Mermaid Gowns & Floating Ocean Cape-Coats.',
      taboos: 'Hindari kain kasar yang kaku menyiksa, warna tanah cokelat kusam tanpa pantulan cahaya, atau siluet militeristik yang kaku.'
    },
    outfits: generateZodiacOutfits('pisces', 'female'),
    maleOutfits: generateZodiacOutfits('pisces', 'male')
  }
];

export function calculateZodiacFromDate(day: number, month: number): ZodiacSign {
  for (const sign of ZODIAC_SIGNS) {
    if (sign.startMonth === month && day >= sign.startDay) {
      return sign;
    }
    if (sign.endMonth === month && day <= sign.endDay) {
      return sign;
    }
  }
  return ZODIAC_SIGNS[0];
}

/**
 * Returns distinct, dedicated high-fashion runway portraits for each zodiac sign, model theme, and gender
 */
export function getModelImage(
  sign: ZodiacSign,
  category: string,
  gender: 'female' | 'male',
  modelIndex: number = 0
): string {
  // Model 01 (Gala): ALWAYS use the dedicated signature portrait of this exact zodiac sign!
  if (modelIndex === 0 || category === 'gala') {
    return gender === 'male' ? sign.imageAssetMen : sign.imageAssetWomen;
  }

  if (gender === 'male') {
    switch (category) {
      case 'executive':
        return '/src/assets/images/couture_men_executive_suit_1792495982426.jpg';
      case 'soiree':
      case 'dinner':
        return sign.element === 'api'
          ? '/src/assets/images/couture_men_fire_leo_1792495461322.jpg'
          : sign.element === 'tanah'
          ? '/src/assets/images/couture_men_earth_capricorn_1792495463067.jpg'
          : sign.element === 'udara'
          ? '/src/assets/images/couture_men_air_libra_1792495463583.jpg'
          : '/src/assets/images/couture_men_water_scorpio_1792495464208.jpg';
      case 'avant-garde':
        return '/src/assets/images/couture_men_avantgarde_1792495983417.jpg';
      case 'coronation':
      case 'opera':
        return '/src/assets/images/couture_men_royal_tuxedo_1792495982592.jpg';
      case 'riviera':
        return '/src/assets/images/couture_men_air_libra_1792495463583.jpg';
      case 'masquerade':
        return '/src/assets/images/couture_men_fire_leo_1792495461322.jpg';
      case 'heritage':
      default:
        return sign.imageAssetMen;
    }
  } else {
    switch (category) {
      case 'executive':
        return sign.id === 'virgo'
          ? '/src/assets/images/couture_virgo_architectural_1792496952140.jpg'
          : '/src/assets/images/couture_taurus_emerald_1792494625992.jpg';
      case 'soiree':
      case 'dinner':
        return sign.id === 'scorpio'
          ? '/src/assets/images/couture_scorpio_noir_1792494628161.jpg'
          : '/src/assets/images/couture_cancer_moonlight_1792496934812.jpg';
      case 'avant-garde':
        return sign.id === 'aquarius'
          ? '/src/assets/images/couture_aquarius_electric_1792496951440.jpg'
          : '/src/assets/images/couture_gemini_dual_1792496934078.jpg';
      case 'coronation':
        return '/src/assets/images/couture_leo_regal_gold_1792496935423.jpg';
      case 'riviera':
        return '/src/assets/images/couture_cancer_moonlight_1792496934812.jpg';
      case 'opera':
        return '/src/assets/images/zodiac_hero_couture_1792493601804.jpg';
      case 'masquerade':
        return '/src/assets/images/couture_sagittarius_royal_1792496952389.jpg';
      case 'heritage':
      default:
        return sign.imageAssetWomen;
    }
  }
}

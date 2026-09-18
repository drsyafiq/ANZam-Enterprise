import { BusinessConfig, ServiceItem, PortfolioItem, ProcessStep, FaqItem } from '../types';

export const BUSINESS_CONFIG: BusinessConfig = {
  name: 'ANZam Enterprise',
  tagline: 'Renovasi Rumah & Kedai, Kerja Paip',
  phoneRaw: '60143113926',
  phoneDisplay: '+60 14-311 3926',
  whatsappUrl: 'https://wa.me/60143113926',
  facebookUrl: 'https://www.facebook.com/neza.sam.2025',
  coverageNotice: 'Hubungi kami untuk semak liputan kawasan anda.',
  quotationNotice: 'Harga mengikut skop kerja.',
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'renovasi-rumah-kedai',
    title: 'Renovasi Rumah & Kedai',
    description: 'Kerja ubah suai dan pembaikan ruang kediaman dan premis perniagaan mengikut perancangan dan keperluan pelanggan.',
    category: 'Renovasi',
    scopeNotice: 'Harga mengikut skop kerja',
    tag: 'Kediaman & Kedai',
  },
  {
    id: 'kerja-paip-saliran',
    title: 'Kerja Paip (Plumbing)',
    description: 'Pemasangan, penggantian serta penyelenggaraan saluran paip air bersih, paip buangan, tangki air dan kelengkapan sanitari.',
    category: 'Perpaipan',
    scopeNotice: 'Harga mengikut skop kerja',
    tag: 'Paip & Sanitari',
  },
  {
    id: 'pembaikan-bumbung',
    title: 'Pembaikan Bumbung',
    description: 'Pemeriksaan genting pecah atau beralih, penurapan simen permatang rabung bumbung dan pembaikan kebocoran.',
    category: 'Bumbung',
    scopeNotice: 'Harga mengikut skop kerja',
    tag: 'Bumbung & Rabung',
  },
  {
    id: 'kalis-air-waterproofing',
    title: 'Kalis Air (Waterproofing)',
    description: 'Aplikasi salutan bahan kalis air pada lantai konkrit, kawasan tangki air, balkoni atau bilik air bagi mengelakkan resapan air.',
    category: 'Kalis Air',
    scopeNotice: 'Harga mengikut skop kerja',
    tag: 'Lantai & Tangki',
  },
  {
    id: 'pembinaan-kaunter',
    title: 'Pembinaan Kaunter',
    description: 'Pembuatan kerangka besi atau kayu serta kemasan kaunter meja penyambut tetamu, kaunter bayaran atau kaunter dapur.',
    category: 'Pertukangan',
    scopeNotice: 'Harga mengikut skop kerja',
    tag: 'Komersial & Kediaman',
  },
  {
    id: 'pemasangan-partisi',
    title: 'Pemasangan Partisi',
    description: 'Pembinaan dinding pembahagi ruang (drywall gypsum) bersama bukaan tingkap servis serta kemasan plaster yang rata.',
    category: 'Partisi',
    scopeNotice: 'Harga mengikut skop kerja',
    tag: 'Ruang & Plaster',
  },
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: 'kaunter-marmar',
    title: 'Kaunter Kemasan Corak Marmar',
    description: 'Struktur kaunter berbentuk U/L dengan kemasan permukaan corak marmar berkilat dan panel sisi di dalam unit perniagaan.',
    imageUrl: '/images/counter_marble.jpg',
    category: 'Pembinaan Kaunter',
    orientation: 'landscape',
    altText: 'Kaunter komersial dengan kemasan corak marmar putih berkilat dan panel sisi kelabu di dalam ruang kedai',
  },
  {
    id: 'kerangka-kaunter',
    title: 'Kerangka Besi Struktural Kaunter',
    description: 'Pemasangan kerangka besi hollow section bergalvani untuk struktur asas kaunter mengikut saiz ruang sebelum kerja kemasan.',
    imageUrl: '/images/metal_counter_frame.jpg',
    category: 'Pembinaan Kaunter',
    orientation: 'portrait',
    altText: 'Kerangka besi bergalvani bagi pembinaan asas kaunter di tapak kedai',
  },
  {
    id: 'dinding-partisi',
    title: 'Pemasangan Dinding Partisi & Tingkap Lengkung',
    description: 'Kerja pembinaan dinding partisi gipsum berserta tetingkap servis berbentuk melengkung (arch) dan kemasan plaster sambungan.',
    imageUrl: '/images/partition_work.jpg',
    category: 'Kerja Partisi',
    orientation: 'portrait',
    altText: 'Kerja pembinaan dinding partisi gipsum dengan bukaan melengkung dan pekerja sedang menyiapkan plaster kemasan',
  },
  {
    id: 'genting-bumbung',
    title: 'Pembaikan & Penurapan Genting Bumbung',
    description: 'Kerja memeriksa kedudukan genting dan penurapan simen pada rabung permatang bumbung bagi mengurangkan risiko kebocoran.',
    imageUrl: '/images/roof_repair_tiles.jpg',
    category: 'Pembaikan Bumbung',
    orientation: 'portrait',
    altText: 'Genting bumbung rumah teres dengan kerja penurapan simen pada barisan permatang rabung',
  },
  {
    id: 'kalis-air-tangki',
    title: 'Aplikasi Lapisan Kalis Air Kawasan Tangki',
    description: 'Penyapuan salutan kalis air bituminous gelap pada lantai konkrit kawasan tangki simpanan air dan laluan paip PVC.',
    imageUrl: '/images/waterproof_tank.jpg',
    category: 'Kalis Air',
    orientation: 'portrait',
    altText: 'Permukaan lantai kawasan tangki air yang telah disapu salutan kalis air gelap bersama rangkaian paip PVC',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: 1,
    title: 'Kongsi Keperluan & Gambar Kerja',
    description: 'Hantarkan maklumat ringkas mengenai jenis kerja yang anda perlukan berserta gambar tapak atau ukuran awal melalui WhatsApp.',
  },
  {
    stepNumber: 2,
    title: 'Bincang Skop & Lokasi Kerja',
    description: 'Kami berbincang mengenai skop kerja sebenar, bahan yang diperlukan dan kepastian lokasi projek anda.',
  },
  {
    stepNumber: 3,
    title: 'Penilaian Tapak Jika Perlu',
    description: 'Bagi kerja ubah suai atau pembaikan tertentu yang memerlukan semakan fizikal, kami boleh mengatur lawatan tapak.',
  },
  {
    stepNumber: 4,
    title: 'Terima Sebut Harga',
    description: 'Anda akan menerima anggaran atau sebut harga yang jelas berdasarkan skop kerja yang telah dibincangkan.',
  },
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Bagaimanakah cara untuk mendapatkan sebut harga?',
    answer: 'Anda boleh menghantar mesej kepada kami melalui WhatsApp dengan menyatakan jenis kerja yang diperlukan, lokasi serta gambar tapak (jika ada). Kami akan menyemak maklumat tersebut untuk memberikan anggaran sebut harga mengikut skop kerja.',
  },
  {
    id: 'faq-2',
    question: 'Mengapakah harga tidak diletakkan secara pakej tetap di laman web?',
    answer: 'Setiap rumah atau premis kedai mempunyai saiz, keadaan struktur sedia ada dan tahap kerosakan yang berbeza. Oleh itu, kos bahan dan masa kerja dinilai mengikut skop kerja sebenar agar sebut harga adalah adil dan tepat.',
  },
  {
    id: 'faq-3',
    question: 'Adakah perlu untuk membuat lawatan tapak sebelum memulakan kerja?',
    answer: 'Bagi kerja kecil yang jelas melalui gambar, sebut harga boleh diberikan terus. Namun bagi kerja renovasi, kebocoran rumit atau pembinaan struktur baharu, lawatan penilaian tapak mungkin diperlukan bagi memastikan ukuran dan skop kerja adalah tepat.',
  },
  {
    id: 'faq-4',
    question: 'Apakah kawasan yang diliputi oleh ANZam Enterprise?',
    answer: 'Liputan kawasan kami bergantung kepada jadual dan jenis projek yang dipohon. Sila hubungi kami melalui WhatsApp untuk menyemak sama ada lokasi projek anda berada dalam kawasan liputan semasa kami.',
  },
  {
    id: 'faq-5',
    question: 'Bolehkah saya meminta sebut harga untuk kerja kecil seperti pembaikan paip atau bumbung?',
    answer: 'Ya, kami menerima pertanyaan untuk pelbagai saiz kerja renovasi, pertukangan dan perpaipan. Nyatakan masalah yang dihadapi dan kami akan berbincang bersama anda.',
  },
];

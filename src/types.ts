export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  category: string;
  scopeNotice: string;
  tag: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  orientation: 'portrait' | 'landscape';
  altText: string;
}

export interface ProcessStep {
  stepNumber: number;
  title: string;
  description: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface BusinessConfig {
  name: string;
  tagline: string;
  phoneRaw: string;
  phoneDisplay: string;
  whatsappUrl: string;
  facebookUrl: string;
  coverageNotice: string;
  quotationNotice: string;
}

export interface EnquiryFormData {
  nama: string;
  lokasi: string;
  jenisServis: string;
  peneranganKerja: string;
}

import { ArrowRight, Image as ImageIcon, MessageCircle } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/businessData';

interface HeroProps {
  onOpenLightbox?: (index: number) => void;
}

export default function Hero({ onOpenLightbox }: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#dfb74a]/20">
      {/* Subtle warm glow background accent */}
      <div
        className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-[#dfb74a]/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Hero Copy Column */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            {/* Business Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#1e2026] border border-[#dfb74a]/40 w-fit">
              <span className="w-2.5 h-2.5 rounded-full bg-[#dfb74a]" aria-hidden="true" />
              <span className="text-[#dfb74a] font-bold text-[17px] tracking-wide">
                ANZam Enterprise • Renovasi &amp; Paip
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-[32px] sm:text-[42px] lg:text-[48px] font-extrabold text-[#F7F5ED] leading-[1.25] tracking-tight">
              Renovasi Rumah &amp; Kedai Mengikut Keperluan Anda.
            </h1>

            {/* Short Supporting Copy - 20px body text with 1.6 line height */}
            <p className="text-[20px] leading-[1.6] text-[#e2dfd4] font-normal max-w-2xl">
              Kami menyediakan perkhidmatan pertukangan renovasi bangunan kediaman dan premis komersial serta kerja-kerja perpaipan dengan kemasan teliti dan sebut harga telus mengikut skop kerja sebenar anda.
            </p>

            {/* Action Buttons - Min 48px height, 18px+ font, accessible contrast */}
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#pertanyaan"
                className="inline-flex items-center justify-center gap-3 bg-[#dfb74a] hover:bg-[#cba135] text-[#121316] font-bold text-[18px] sm:text-[19px] px-8 py-4 rounded-xl shadow-lg transition-all hover:scale-[1.02] min-h-[52px] text-center focus-visible:ring-4 focus-visible:ring-white"
                id="hero-quote-btn"
              >
                <span>Minta Sebut Harga</span>
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </a>

              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-3 bg-[#1e2026] hover:bg-[#282a32] text-[#F7F5ED] hover:text-[#dfb74a] font-bold text-[18px] sm:text-[19px] px-8 py-4 rounded-xl border border-[#dfb74a]/40 shadow-md transition-all hover:scale-[1.02] min-h-[52px] text-center focus-visible:ring-4 focus-visible:ring-[#dfb74a]"
                id="hero-portfolio-btn"
              >
                <ImageIcon className="w-5 h-5 text-[#dfb74a]" aria-hidden="true" />
                <span>Lihat Portfolio</span>
              </a>
            </div>

            {/* Quick Contact Trust Marker */}
            <div className="pt-2 flex items-center gap-3 text-[#d2cec0] text-[18px]">
              <MessageCircle className="w-5 h-5 text-[#dfb74a] shrink-0" aria-hidden="true" />
              <span>
                Pertanyaan terus melalui WhatsApp:{' '}
                <a
                  href={BUSINESS_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#dfb74a] underline hover:text-white"
                >
                  {BUSINESS_CONFIG.phoneDisplay}
                </a>
              </span>
            </div>
          </div>

          {/* Hero Counter Project Photo Column */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden bg-[#1a1b20] border-2 border-[#dfb74a]/40 shadow-2xl p-2 sm:p-3 group">
              <div className="relative aspect-[16/10] sm:aspect-[4/3] rounded-xl overflow-hidden bg-black/40">
                <img
                  src="/images/counter_marble.jpg"
                  alt="Projek pembinaan kaunter komersial dengan kemasan corak marmar oleh ANZam Enterprise"
                  className="w-full h-full object-cover sm:object-contain transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                
                {/* Caption Badge on Image */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-[#121316]/90 backdrop-blur-sm border border-[#dfb74a]/30">
                  <p className="text-[16px] sm:text-[17px] font-bold text-white leading-snug">
                    Foto Projek Sebenar: Kaunter Kemasan Marmar
                  </p>
                  <p className="text-[14px] text-[#d2cec0]">
                    Kemasan kaunter pasang siap di unit kedai
                  </p>
                </div>
              </div>

              {/* Lightbox Trigger Button */}
              {onOpenLightbox && (
                <button
                  type="button"
                  onClick={() => onOpenLightbox(0)}
                  className="mt-3 w-full py-3 px-4 bg-[#23252d] hover:bg-[#2c2f38] text-[#F7F5ED] font-semibold text-[17px] rounded-lg border border-[#dfb74a]/30 flex items-center justify-center gap-2 transition-colors min-h-[48px] focus-visible:ring-2 focus-visible:ring-[#dfb74a]"
                  aria-label="Lihat gambar projek kaunter dalam saiz penuh"
                  id="hero-image-zoom-btn"
                >
                  <ImageIcon className="w-5 h-5 text-[#dfb74a]" aria-hidden="true" />
                  <span>Lihat Gambar Penuh Tanpa Potong</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

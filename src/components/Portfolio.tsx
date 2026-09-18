import { useState } from 'react';
import { ZoomIn, Eye } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/businessData';
import LightboxModal from './LightboxModal';

interface PortfolioProps {
  onOpenModalIndex?: number | null;
  onCloseModal?: () => void;
}

export default function Portfolio({ onOpenModalIndex, onCloseModal }: PortfolioProps) {
  const [internalIndex, setInternalIndex] = useState<number | null>(null);

  const activeIndex = onOpenModalIndex !== undefined ? onOpenModalIndex : internalIndex;

  const handleOpen = (index: number) => {
    setInternalIndex(index);
  };

  const handleClose = () => {
    setInternalIndex(null);
    if (onCloseModal) onCloseModal();
  };

  const handlePrev = () => {
    if (activeIndex !== null) {
      const nextIdx = (activeIndex - 1 + PORTFOLIO_DATA.length) % PORTFOLIO_DATA.length;
      setInternalIndex(nextIdx);
    }
  };

  const handleNext = () => {
    if (activeIndex !== null) {
      const nextIdx = (activeIndex + 1) % PORTFOLIO_DATA.length;
      setInternalIndex(nextIdx);
    }
  };

  return (
    <section id="portfolio" className="py-16 sm:py-24 bg-[#15161c] border-b border-[#dfb74a]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <span className="text-[#dfb74a] font-bold text-[18px] sm:text-[19px] tracking-wider uppercase block mb-2">
            Galeri Projek Sebenar
          </span>
          <h2 className="text-[32px] sm:text-[40px] lg:text-[44px] font-extrabold text-[#F7F5ED] leading-tight mb-4">
            Portfolio Kerja Kami
          </h2>
          <p className="text-[20px] leading-[1.6] text-[#dedad0]">
            Berikut merupakan foto kerja sebenar di tapak projek merangkumi kerja bumbung, kalis air, pertukangan kaunter dan pemasangan dinding partisi.
          </p>
        </div>

        {/* Gallery Grid displaying all 5 real photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.map((item, index) => (
            <div
              key={item.id}
              id={`portfolio-card-${item.id}`}
              className="bg-[#1c1d25] rounded-2xl border border-[#dfb74a]/30 overflow-hidden shadow-xl flex flex-col justify-between hover:border-[#dfb74a] hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Image Container with full-image viewing button */}
              <div>
                <div
                  onClick={() => handleOpen(index)}
                  className="relative cursor-pointer bg-black/40 overflow-hidden aspect-[4/3] flex items-center justify-center"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleOpen(index);
                    }
                  }}
                  aria-label={`Buka gambar penuh untuk ${item.title}`}
                >
                  <img
                    src={item.imageUrl}
                    alt={item.altText}
                    loading="lazy"
                    className="w-full h-full object-contain p-1 group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="inline-flex items-center gap-2 bg-[#dfb74a] text-[#121316] font-bold text-[17px] px-5 py-2.5 rounded-full shadow-lg">
                      <ZoomIn className="w-5 h-5" aria-hidden="true" />
                      <span>Lihat Saiz Penuh</span>
                    </span>
                  </div>

                  {/* Category Pill */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3.5 py-1.5 rounded-md text-[14px] font-bold bg-[#121316]/90 text-[#dfb74a] border border-[#dfb74a]/30 backdrop-blur-sm">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 sm:p-7">
                  <h3 className="text-[22px] sm:text-[24px] font-bold text-[#F7F5ED] mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[19px] leading-[1.6] text-[#dedad0]">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Bottom Action Button */}
              <div className="p-6 pt-0 border-t border-[#dfb74a]/15 mt-auto">
                <button
                  type="button"
                  onClick={() => handleOpen(index)}
                  className="mt-4 w-full inline-flex items-center justify-center gap-2.5 bg-[#262832] hover:bg-[#323542] text-[#F7F5ED] hover:text-[#dfb74a] font-bold text-[18px] py-3.5 px-4 rounded-xl border border-[#dfb74a]/30 transition-colors min-h-[48px] focus-visible:ring-4 focus-visible:ring-[#dfb74a]"
                  id={`view-full-btn-${item.id}`}
                >
                  <Eye className="w-5 h-5 text-[#dfb74a]" aria-hidden="true" />
                  <span>Lihat Foto Penuh</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Portfolio Integrity Note */}
        <div className="mt-12 text-center text-[#c4c0b4] text-[18px] max-w-3xl mx-auto bg-[#1a1b22] p-5 rounded-xl border border-[#dfb74a]/20">
          <p>
            * Semua gambar di atas adalah foto kerja sebenar. Kami memaparkan kerja pembinaan dan penyelenggaraan sebagaimana yang dilaksanakan di tapak kerja.
          </p>
        </div>
      </div>

      {/* Accessible Lightbox Modal */}
      {activeIndex !== null && (
        <LightboxModal
          isOpen={activeIndex !== null}
          currentIndex={activeIndex}
          items={PORTFOLIO_DATA}
          onClose={handleClose}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </section>
  );
}

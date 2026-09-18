import { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { PortfolioItem } from '../types';

interface LightboxModalProps {
  isOpen: boolean;
  currentIndex: number;
  items: PortfolioItem[];
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function LightboxModal({
  isOpen,
  currentIndex,
  items,
  onClose,
  onPrev,
  onNext,
}: LightboxModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !items[currentIndex]) return null;

  const currentItem = items[currentIndex];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Paparan foto penuh: ${currentItem.title}`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-2 sm:p-4 md:p-6"
    >
      {/* Top Bar: Counter & Close Button */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
        <div className="bg-[#181920]/90 text-[#F7F5ED] px-4 py-2 rounded-full border border-[#dfb74a]/40 text-[17px] font-semibold">
          Foto {currentIndex + 1} daripada {items.length}
        </div>

        <button
          type="button"
          onClick={onClose}
          className="p-3 bg-[#22242c] hover:bg-[#2e313c] text-white hover:text-[#dfb74a] rounded-full border border-[#dfb74a]/40 shadow-lg min-w-[48px] min-h-[48px] flex items-center justify-center focus:outline-none focus-visible:ring-4 focus-visible:ring-white transition-colors"
          aria-label="Tutup paparan foto penuh"
          id="lightbox-close-btn"
        >
          <X className="w-7 h-7" aria-hidden="true" />
        </button>
      </div>

      {/* Navigation Buttons: Previous */}
      <button
        type="button"
        onClick={onPrev}
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-3.5 bg-[#1a1b22]/90 hover:bg-[#282a34] text-white hover:text-[#dfb74a] rounded-full border border-[#dfb74a]/40 shadow-xl min-w-[52px] min-h-[52px] flex items-center justify-center z-10 focus:outline-none focus-visible:ring-4 focus-visible:ring-white transition-colors"
        aria-label="Lihat foto sebelumnya"
        id="lightbox-prev-btn"
      >
        <ChevronLeft className="w-8 h-8" aria-hidden="true" />
      </button>

      {/* Main Image Container: Full view WITHOUT CROPPING */}
      <div className="max-w-5xl max-h-[85vh] w-full flex flex-col items-center justify-center p-2">
        <div className="relative flex items-center justify-center w-full max-h-[68vh] overflow-hidden rounded-xl bg-black/50 border border-[#dfb74a]/30">
          <img
            src={currentItem.imageUrl}
            alt={currentItem.altText}
            className="max-h-[66vh] max-w-full w-auto h-auto object-contain rounded-lg"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Descriptive Caption Card below image */}
        <div className="mt-4 w-full max-w-3xl bg-[#1a1b22]/95 border border-[#dfb74a]/40 rounded-xl p-4 sm:p-6 text-center text-[#F7F5ED] shadow-xl">
          <span className="inline-block px-3 py-1 bg-[#262832] text-[#dfb74a] font-bold text-[14px] uppercase tracking-wider rounded-md mb-2 border border-[#dfb74a]/30">
            {currentItem.category}
          </span>
          <h3 className="text-[22px] sm:text-[25px] font-bold text-white mb-2 leading-snug">
            {currentItem.title}
          </h3>
          <p className="text-[18px] sm:text-[19px] leading-[1.6] text-[#dedad0]">
            {currentItem.description}
          </p>
        </div>
      </div>

      {/* Navigation Buttons: Next */}
      <button
        type="button"
        onClick={onNext}
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-3.5 bg-[#1a1b22]/90 hover:bg-[#282a34] text-white hover:text-[#dfb74a] rounded-full border border-[#dfb74a]/40 shadow-xl min-w-[52px] min-h-[52px] flex items-center justify-center z-10 focus:outline-none focus-visible:ring-4 focus-visible:ring-white transition-colors"
        aria-label="Lihat foto seterusnya"
        id="lightbox-next-btn"
      >
        <ChevronRight className="w-8 h-8" aria-hidden="true" />
      </button>
    </div>
  );
}

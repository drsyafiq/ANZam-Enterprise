interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showText?: boolean;
}

export default function BrandLogo({ size = 'md', className = '', showText = true }: BrandLogoProps) {
  const badgeSizes = {
    sm: 'w-12 h-12 min-w-[48px] min-h-[48px]',
    md: 'w-14 h-14 min-w-[56px] min-h-[56px] sm:w-16 sm:h-16',
    lg: 'w-20 h-20 min-w-[80px] min-h-[80px] sm:w-24 sm:h-24',
  };

  const imageSizes = {
    sm: 'w-10 h-10',
    md: 'w-12 h-12 sm:w-14 sm:h-14',
    lg: 'w-18 h-18 sm:w-22 sm:h-22',
  };

  return (
    <div className={`flex items-center gap-3.5 ${className}`}>
      {/* White badge with object-fit: contain preserving exact proportions, lettering and artwork */}
      <div
        className={`${badgeSizes[size]} bg-white rounded-full p-1.5 shadow-md flex items-center justify-center border-2 border-[#dfb74a] ring-2 ring-black/20 shrink-0 overflow-hidden`}
        aria-hidden="true"
      >
        <img
          src="/images/anzam_logo.jpg"
          alt="Logo Rasmi ANZam Enterprise"
          className={`${imageSizes[size]} object-contain`}
          referrerPolicy="no-referrer"
          loading="eager"
        />
      </div>

      {showText && (
        <div className="flex flex-col text-left">
          <span className="font-extrabold tracking-wide text-white text-[22px] sm:text-[24px] leading-tight font-serif">
            ANZam
          </span>
          <span className="text-[#dfb74a] font-semibold text-[15px] sm:text-[16px] tracking-wider uppercase leading-tight">
            Enterprise
          </span>
        </div>
      )}
    </div>
  );
}

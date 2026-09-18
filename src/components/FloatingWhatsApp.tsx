import { MessageCircle } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/businessData';

export default function FloatingWhatsApp() {
  return (
    <aside
      aria-label="Akses Pantas WhatsApp"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex items-center print:hidden pointer-events-auto"
    >
      <a
        href={BUSINESS_CONFIG.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-[18px] sm:text-[19px] pl-4 pr-5 py-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 min-h-[52px] min-w-[52px] border-2 border-white/30 focus:outline-none focus-visible:ring-4 focus-visible:ring-white"
        aria-label="Hubungi ANZam Enterprise melalui WhatsApp di +60 14-311 3926"
        id="floating-whatsapp-btn"
      >
        <div className="relative">
          <MessageCircle className="w-7 h-7 text-white fill-white" aria-hidden="true" />
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-white rounded-full flex items-center justify-center">
            <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping" />
          </span>
        </div>
        <span className="hidden sm:inline font-bold tracking-wide">
          WhatsApp Kami
        </span>
      </a>
    </aside>
  );
}

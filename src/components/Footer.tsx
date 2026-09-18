import { Phone, MessageCircle, ExternalLink, ArrowUp } from 'lucide-react';
import BrandLogo from './BrandLogo';
import { BUSINESS_CONFIG } from '../data/businessData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0e0f12] text-[#dedad0] border-t-2 border-[#dfb74a]/30 pt-16 pb-28 sm:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#dfb74a]/20">
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <BrandLogo size="lg" />
            <p className="text-[19px] leading-[1.6] text-[#c7c3b6] pt-2 max-w-md">
              Perkhidmatan pertukangan renovasi rumah dan kedai serta kerja perpaipan berkualiti. Sebut harga telus mengikut skop kerja sebenar.
            </p>

            {/* Direct Contact List */}
            <div className="pt-3 space-y-3">
              <a
                href={BUSINESS_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[19px] text-[#F7F5ED] hover:text-[#dfb74a] transition-colors py-1 group"
              >
                <div className="p-2 rounded-lg bg-[#1c1e26] border border-[#dfb74a]/30 group-hover:border-[#dfb74a]">
                  <MessageCircle className="w-5 h-5 text-[#dfb74a]" aria-hidden="true" />
                </div>
                <span>WhatsApp: <strong className="text-white underline">{BUSINESS_CONFIG.phoneDisplay}</strong></span>
              </a>

              <a
                href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
                className="flex items-center gap-3 text-[19px] text-[#F7F5ED] hover:text-[#dfb74a] transition-colors py-1 group"
              >
                <div className="p-2 rounded-lg bg-[#1c1e26] border border-[#dfb74a]/30 group-hover:border-[#dfb74a]">
                  <Phone className="w-5 h-5 text-[#dfb74a]" aria-hidden="true" />
                </div>
                <span>Telefon: <strong className="text-white">{BUSINESS_CONFIG.phoneDisplay}</strong></span>
              </a>

              <a
                href={BUSINESS_CONFIG.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[19px] text-[#F7F5ED] hover:text-[#dfb74a] transition-colors py-1 group"
                id="footer-facebook-link"
              >
                <div className="p-2 rounded-lg bg-[#1c1e26] border border-[#dfb74a]/30 group-hover:border-[#dfb74a]">
                  <ExternalLink className="w-5 h-5 text-[#dfb74a]" aria-hidden="true" />
                </div>
                <span>Facebook: <strong className="text-white underline">neza.sam.2025</strong></span>
              </a>
            </div>
          </div>

          {/* Navigation Links Col */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-[22px] font-bold text-white tracking-wide border-b border-[#dfb74a]/30 pb-2">
              Pautan Pantas
            </h3>
            <ul className="space-y-3 text-[19px]">
              <li>
                <a href="#servis" className="hover:text-[#dfb74a] transition-colors py-1 block">
                  Servis &amp; Pakej
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-[#dfb74a] transition-colors py-1 block">
                  Portfolio Projek
                </a>
              </li>
              <li>
                <a href="#kawasan" className="hover:text-[#dfb74a] transition-colors py-1 block">
                  Kawasan Servis
                </a>
              </li>
              <li>
                <a href="#tentang-kami" className="hover:text-[#dfb74a] transition-colors py-1 block">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#soalan-lazim" className="hover:text-[#dfb74a] transition-colors py-1 block">
                  Soalan Lazim (FAQ)
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Consultation CTA Col */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-[22px] font-bold text-white tracking-wide border-b border-[#dfb74a]/30 pb-2">
              Dapatkan Sebut Harga
            </h3>
            <p className="text-[19px] leading-[1.6] text-[#c7c3b6]">
              Kongsi gambar tapak atau terangkan kerosakan paip/bumbung anda untuk semakan terus oleh kami.
            </p>
            <a
              href="#pertanyaan"
              className="inline-flex items-center justify-center gap-2.5 w-full bg-[#dfb74a] hover:bg-[#cba135] text-[#121316] font-bold text-[19px] py-4 px-6 rounded-xl shadow-lg transition-transform hover:scale-[1.02] min-h-[50px] text-center focus-visible:ring-4 focus-visible:ring-white"
            >
              <span>Minta Sebut Harga Percuma</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar with Copyright and Back-to-Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[17px] text-[#a4a094]">
          <p>
            &copy; {currentYear} <strong className="text-white">ANZam Enterprise</strong>. Hak Cipta Terpelihara.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 hover:text-[#dfb74a] text-[#dedad0] font-semibold py-2 px-3 rounded-lg border border-[#dfb74a]/20 hover:border-[#dfb74a] transition-colors min-h-[44px] focus-visible:ring-2 focus-visible:ring-[#dfb74a]"
            aria-label="Kembali ke bahagian atas laman"
          >
            <span>Kembali ke atas</span>
            <ArrowUp className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}

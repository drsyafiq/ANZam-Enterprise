import { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import BrandLogo from './BrandLogo';
import { BUSINESS_CONFIG } from '../data/businessData';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#121316]/95 backdrop-blur-md border-b border-[#dfb74a]/30 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24">
          {/* Exact Logo & Brand link */}
          <a
            href="#"
            className="flex items-center gap-3 py-2 rounded-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-[#dfb74a]"
            aria-label="ANZam Enterprise - Laman Utama"
            id="brand-home-link"
          >
            <BrandLogo size="md" />
          </a>

          {/* Desktop Navigation: EXACTLY THREE LINKS + Prominent WhatsApp Kami Button */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Navigasi Utama">
            <a
              href="#servis"
              className="text-[19px] font-semibold text-[#F7F5ED] hover:text-[#dfb74a] transition-colors py-2 px-3 rounded-md focus-visible:ring-2 focus-visible:ring-[#dfb74a]"
              id="nav-link-servis"
            >
              Servis
            </a>
            <a
              href="#portfolio"
              className="text-[19px] font-semibold text-[#F7F5ED] hover:text-[#dfb74a] transition-colors py-2 px-3 rounded-md focus-visible:ring-2 focus-visible:ring-[#dfb74a]"
              id="nav-link-portfolio"
            >
              Portfolio
            </a>
            <a
              href="#kawasan"
              className="text-[19px] font-semibold text-[#F7F5ED] hover:text-[#dfb74a] transition-colors py-2 px-3 rounded-md focus-visible:ring-2 focus-visible:ring-[#dfb74a]"
              id="nav-link-kawasan"
            >
              Kawasan
            </a>

            {/* Prominent WhatsApp Kami Button */}
            <a
              href={BUSINESS_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#dfb74a] hover:bg-[#cba135] text-[#121316] font-bold text-[18px] px-6 py-3.5 rounded-full shadow-md transition-all hover:scale-[1.02] min-h-[48px] focus-visible:ring-4 focus-visible:ring-white"
              id="header-whatsapp-btn"
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              <span>WhatsApp Kami</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-3 rounded-lg text-[#F7F5ED] hover:text-[#dfb74a] hover:bg-[#1a1b1f] border border-[#dfb74a]/30 min-w-[48px] min-h-[48px] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#dfb74a]"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Tutup menu' : 'Buka menu utama'}
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? (
                <X className="w-7 h-7" aria-hidden="true" />
              ) : (
                <Menu className="w-7 h-7" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Simple Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-[#18191e] border-b border-[#dfb74a]/40 shadow-2xl px-5 pt-3 pb-6 space-y-4"
        >
          <div className="flex flex-col space-y-2 pt-2">
            <a
              href="#servis"
              onClick={closeMenu}
              className="block text-[20px] font-semibold text-[#F7F5ED] hover:text-[#dfb74a] hover:bg-[#22242a] py-3.5 px-4 rounded-lg min-h-[48px] focus-visible:ring-2 focus-visible:ring-[#dfb74a]"
              id="mobile-nav-servis"
            >
              Servis
            </a>
            <a
              href="#portfolio"
              onClick={closeMenu}
              className="block text-[20px] font-semibold text-[#F7F5ED] hover:text-[#dfb74a] hover:bg-[#22242a] py-3.5 px-4 rounded-lg min-h-[48px] focus-visible:ring-2 focus-visible:ring-[#dfb74a]"
              id="mobile-nav-portfolio"
            >
              Portfolio
            </a>
            <a
              href="#kawasan"
              onClick={closeMenu}
              className="block text-[20px] font-semibold text-[#F7F5ED] hover:text-[#dfb74a] hover:bg-[#22242a] py-3.5 px-4 rounded-lg min-h-[48px] focus-visible:ring-2 focus-visible:ring-[#dfb74a]"
              id="mobile-nav-kawasan"
            >
              Kawasan
            </a>
          </div>

          <div className="pt-2 border-t border-[#dfb74a]/20">
            <a
              href={BUSINESS_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="w-full flex items-center justify-center gap-3 bg-[#dfb74a] hover:bg-[#cba135] text-[#121316] font-bold text-[19px] py-4 px-6 rounded-xl shadow-lg min-h-[50px] focus-visible:ring-4 focus-visible:ring-white"
              id="mobile-whatsapp-btn"
            >
              <MessageCircle className="w-6 h-6" aria-hidden="true" />
              <span>WhatsApp Kami Sekarang</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

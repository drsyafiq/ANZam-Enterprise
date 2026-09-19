import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Coverage from './components/Coverage';
import Faq from './components/Faq';
import EnquiryForm from './components/EnquiryForm';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
  };

  const handleOpenHeroImage = (index: number) => {
    setLightboxIndex(index);
    const portfolioElement = document.getElementById('portfolio');
    if (portfolioElement) {
      portfolioElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#121316] text-[#F7F5ED] selection:bg-[#dfb74a] selection:text-[#121316]">
      {/* Skip Link for Accessibility */}
      <a
        href="#kandungan-utama"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-[#dfb74a] focus:text-[#121316] focus:font-bold focus:rounded-lg focus:shadow-xl focus:outline-none"
      >
        Langkau ke kandungan utama
      </a>

      {/* 1. Header with exact branding, 3 navigation links and WhatsApp button */}
      <Header />

      {/* Main Content Sections */}
      <main id="kandungan-utama" className="flex-grow">
        {/* 2. Hero using the counter project photo */}
        <Hero onOpenLightbox={handleOpenHeroImage} />

        {/* 3. Tentang Kami - Factual introduction */}
        <About />

        {/* 4. Servis & Pakej */}
        <Services onSelectService={handleSelectService} />

        {/* 5. Portfolio - All authentic project photos with accessible lightbox */}
        <Portfolio
          externalIndex={lightboxIndex}
          onSelectIndex={(idx) => setLightboxIndex(idx)}
        />

        {/* 6. Proses Pertanyaan - 4 clear steps */}
        <Process />

        {/* 7. Kawasan Servis */}
        <Coverage />

        {/* 8. Soalan Lazim (FAQ) */}
        <Faq />

        {/* 9. Borang Pertanyaan ke WhatsApp */}
        <EnquiryForm initialService={selectedService} />
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* 11. Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}

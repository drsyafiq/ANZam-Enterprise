import { Home, Droplets, Hammer, Layers, LayoutGrid, ShieldAlert, Zap, MessageCircle, ArrowDown } from 'lucide-react';
import { SERVICES_DATA, BUSINESS_CONFIG } from '../data/businessData';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectService?: (serviceName: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  const getIcon = (id: string) => {
    switch (id) {
      case 'renovasi-rumah-kedai':
        return <Home className="w-8 h-8 text-[#dfb74a]" aria-hidden="true" />;
      case 'kerja-paip-saliran':
        return <Droplets className="w-8 h-8 text-[#dfb74a]" aria-hidden="true" />;
      case 'pembaikan-bumbung':
        return <ShieldAlert className="w-8 h-8 text-[#dfb74a]" aria-hidden="true" />;
      case 'kalis-air-waterproofing':
        return <Layers className="w-8 h-8 text-[#dfb74a]" aria-hidden="true" />;
      case 'pembinaan-kaunter':
        return <Hammer className="w-8 h-8 text-[#dfb74a]" aria-hidden="true" />;
      case 'pemasangan-partisi':
        return <LayoutGrid className="w-8 h-8 text-[#dfb74a]" aria-hidden="true" />;
      case 'pendawaian-elektrik-wiring':
        return <Zap className="w-8 h-8 text-[#dfb74a]" aria-hidden="true" />;
      default:
        return <Hammer className="w-8 h-8 text-[#dfb74a]" aria-hidden="true" />;
    }
  };

  const handleEnquiry = (service: ServiceItem) => {
    if (onSelectService) {
      onSelectService(service.title);
    }
    const formElement = document.getElementById('pertanyaan');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="servis" className="py-16 sm:py-24 bg-[#121316] border-b border-[#dfb74a]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <span className="text-[#dfb74a] font-bold text-[18px] sm:text-[19px] tracking-wider uppercase block mb-2">
            Perkhidmatan Kami
          </span>
          <h2 className="text-[32px] sm:text-[40px] lg:text-[44px] font-extrabold text-[#F7F5ED] leading-tight mb-4">
            Servis &amp; Pakej Kerja
          </h2>
          <p className="text-[20px] leading-[1.6] text-[#dedad0]">
            Kami menawarkan pelbagai skop kerja pertukangan dan perpaipan. Tiada harga tersembunyi—setiap sebut harga dinilai secara telus mengikut keperluan tapak anda.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="bg-[#181920] rounded-2xl border border-[#dfb74a]/30 p-7 sm:p-8 flex flex-col justify-between shadow-lg hover:border-[#dfb74a] hover:shadow-2xl transition-all duration-300"
            >
              <div>
                {/* Header with Icon and Tag */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="p-3.5 rounded-xl bg-[#23252e] border border-[#dfb74a]/30">
                    {getIcon(service.id)}
                  </div>
                  <span className="px-3.5 py-1.5 rounded-full text-[15px] font-bold bg-[#262832] text-[#dfb74a] border border-[#dfb74a]/20">
                    {service.tag}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="text-[24px] sm:text-[26px] font-bold text-[#F7F5ED] mb-3 leading-snug">
                  {service.title}
                </h3>

                {/* Description - 20px font */}
                <p className="text-[19px] sm:text-[20px] leading-[1.6] text-[#d2cec2] mb-6">
                  {service.description}
                </p>
              </div>

              {/* Bottom Card: Price Note and Enquiry Button */}
              <div className="pt-6 border-t border-[#dfb74a]/20 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-[16px] text-[#aaa69a] uppercase tracking-wider font-semibold">
                    Kadar Harga:
                  </span>
                  <span className="text-[18px] sm:text-[19px] font-bold text-[#dfb74a]">
                    {service.scopeNotice}
                  </span>
                </div>

                {/* Enquiry Action Button */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    onClick={() => handleEnquiry(service)}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#262832] hover:bg-[#323542] text-[#F7F5ED] hover:text-[#dfb74a] font-bold text-[17px] py-3.5 px-4 rounded-xl border border-[#dfb74a]/30 transition-colors min-h-[48px] focus-visible:ring-2 focus-visible:ring-[#dfb74a]"
                    id={`btn-enquire-${service.id}`}
                  >
                    <span>Isi Borang</span>
                    <ArrowDown className="w-4 h-4" aria-hidden="true" />
                  </button>

                  <a
                    href={`${BUSINESS_CONFIG.whatsappUrl}?text=${encodeURIComponent(
                      `Salam ANZam Enterprise, saya ingin bertanya tentang servis ${service.title} untuk rumah/kedai saya.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#dfb74a] hover:bg-[#cba135] text-[#121316] font-bold text-[17px] py-3.5 px-4 rounded-xl shadow-md transition-colors min-h-[48px] focus-visible:ring-4 focus-visible:ring-white text-center"
                    id={`btn-whatsapp-${service.id}`}
                  >
                    <MessageCircle className="w-4 h-4" aria-hidden="true" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* General Service Notice Box */}
        <div className="mt-12 bg-[#1a1b22] border border-[#dfb74a]/40 rounded-xl p-6 sm:p-8 text-center max-w-4xl mx-auto shadow-md">
          <p className="text-[19px] sm:text-[20px] leading-[1.6] text-[#e0dcd0]">
            <strong className="text-[#dfb74a] font-bold">Perhatian:</strong> Kami tidak mengenakan sebarang caj tersembunyi. Sebut harga akan dibincangkan mengikut ukuran, keadaan fizikal tapak, dan jenis bahan yang anda pilih.
          </p>
        </div>
      </div>
    </section>
  );
}

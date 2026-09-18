import { MapPin, MessageCircle, Info } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/businessData';

// Editable coverage areas list. Until specific locations are confirmed by ANZam Enterprise,
// we display the exact mandated notice without inventing fictitious towns or addresses.
export const CONFIRMED_LOCATIONS: string[] = [];

export default function Coverage() {
  const hasConfirmedLocations = CONFIRMED_LOCATIONS.length > 0;

  return (
    <section id="kawasan" className="py-16 sm:py-24 bg-[#16171d] border-b border-[#dfb74a]/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Heading */}
        <span className="text-[#dfb74a] font-bold text-[18px] sm:text-[19px] tracking-wider uppercase block mb-2">
          Liputan Kerja
        </span>
        <h2 className="text-[32px] sm:text-[40px] lg:text-[44px] font-extrabold text-[#F7F5ED] leading-tight mb-6">
          Kawasan Servis
        </h2>

        {/* Coverage Card */}
        <div className="bg-[#1c1e26] rounded-2xl border-2 border-[#dfb74a]/40 p-8 sm:p-12 shadow-xl text-left">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3.5 rounded-xl bg-[#262834] border border-[#dfb74a]/30 shrink-0 mt-1">
              <MapPin className="w-8 h-8 text-[#dfb74a]" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-[24px] sm:text-[26px] font-bold text-white mb-2 leading-snug">
                Semakan Liputan Kawasan Kerja
              </h3>
              {/* Mandatory Display String */}
              <p className="text-[21px] sm:text-[22px] font-bold text-[#dfb74a] leading-relaxed">
                {BUSINESS_CONFIG.coverageNotice}
              </p>
            </div>
          </div>

          <div className="space-y-4 text-[#dedad0] text-[20px] leading-[1.6] border-t border-[#dfb74a]/20 pt-6">
            <p>
              Bagi memastikan kelancaran kerja dan kualiti perkhidmatan, liputan operasi kami bergantung kepada jadual semasa dan skop projek yang dipohon.
            </p>
            <p>
              Sila kongsikan lokasi kediaman atau premis kedai anda melalui WhatsApp untuk kami sahkan jarak dan ketersediaan jadual kerja pasukan kami.
            </p>

            {hasConfirmedLocations && (
              <div className="mt-6 pt-4">
                <h4 className="text-[19px] font-bold text-white mb-3">
                  Senarai Kawasan Disahkan:
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[19px]">
                  {CONFIRMED_LOCATIONS.map((loc, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-[#e4e0d4]">
                      <span className="w-2 h-2 rounded-full bg-[#dfb74a]" />
                      <span>{loc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Quick WhatsApp Coverage Check Button */}
          <div className="mt-8 pt-6 border-t border-[#dfb74a]/20 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2.5 text-[#b8b4a6] text-[17px]">
              <Info className="w-5 h-5 text-[#dfb74a] shrink-0" aria-hidden="true" />
              <span>Respon terus melalui WhatsApp</span>
            </div>

            <a
              href={`${BUSINESS_CONFIG.whatsappUrl}?text=${encodeURIComponent(
                'Salam ANZam Enterprise, saya ingin menyemak adakah kawasan saya berada dalam liputan servis anda: [Sila nyatakan lokasi anda]'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#dfb74a] hover:bg-[#cba135] text-[#121316] font-bold text-[18px] sm:text-[19px] px-8 py-4 rounded-xl shadow-lg transition-transform hover:scale-[1.02] min-h-[50px] text-center focus-visible:ring-4 focus-visible:ring-white"
              id="btn-check-coverage-whatsapp"
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              <span>Semak Kawasan di WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_DATA } from '../data/businessData';

export default function Faq() {
  const [openIds, setOpenIds] = useState<string[]>(['faq-1']);

  const toggleFaq = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="soalan-lazim" className="py-16 sm:py-24 bg-[#121316] border-b border-[#dfb74a]/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-14 sm:mb-16">
          <span className="text-[#dfb74a] font-bold text-[18px] sm:text-[19px] tracking-wider uppercase block mb-2">
            Pertanyaan Umum
          </span>
          <h2 className="text-[32px] sm:text-[40px] lg:text-[44px] font-extrabold text-[#F7F5ED] leading-tight mb-4">
            Soalan Lazim (FAQ)
          </h2>
          <p className="text-[20px] leading-[1.6] text-[#dedad0]">
            Jawapan ringkas dan jujur mengenai sebut harga, skop kerja, dan liputan servis kami.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQ_DATA.map((faq) => {
            const isOpen = openIds.includes(faq.id);

            return (
              <div
                key={faq.id}
                id={`faq-item-${faq.id}`}
                className="bg-[#1a1b22] rounded-2xl border border-[#dfb74a]/30 overflow-hidden shadow-md transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  className="w-full flex items-center justify-between gap-4 p-6 sm:p-7 text-left hover:bg-[#22242c] transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-[#dfb74a] min-h-[64px]"
                  id={`faq-toggle-${faq.id}`}
                >
                  <div className="flex items-start gap-3.5">
                    <HelpCircle className="w-7 h-7 text-[#dfb74a] shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-[20px] sm:text-[22px] font-bold text-[#F7F5ED] leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <div
                    className={`p-2 rounded-full bg-[#262832] text-[#dfb74a] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  >
                    <ChevronDown className="w-6 h-6" aria-hidden="true" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    role="region"
                    aria-labelledby={`faq-toggle-${faq.id}`}
                    className="px-6 sm:px-8 pb-7 pt-2 border-t border-[#dfb74a]/20 bg-[#17181e]"
                  >
                    <p className="text-[19px] sm:text-[20px] leading-[1.6] text-[#dedad0]">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

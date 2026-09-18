import { MessageSquareShare, Users, ClipboardCheck, FileText } from 'lucide-react';
import { PROCESS_STEPS } from '../data/businessData';

export default function Process() {
  const getStepIcon = (num: number) => {
    switch (num) {
      case 1:
        return <MessageSquareShare className="w-8 h-8 text-[#dfb74a]" aria-hidden="true" />;
      case 2:
        return <Users className="w-8 h-8 text-[#dfb74a]" aria-hidden="true" />;
      case 3:
        return <ClipboardCheck className="w-8 h-8 text-[#dfb74a]" aria-hidden="true" />;
      case 4:
        return <FileText className="w-8 h-8 text-[#dfb74a]" aria-hidden="true" />;
      default:
        return <FileText className="w-8 h-8 text-[#dfb74a]" aria-hidden="true" />;
    }
  };

  return (
    <section id="proses" className="py-16 sm:py-24 bg-[#121316] border-b border-[#dfb74a]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <span className="text-[#dfb74a] font-bold text-[18px] sm:text-[19px] tracking-wider uppercase block mb-2">
            Langkah Demi Langkah
          </span>
          <h2 className="text-[32px] sm:text-[40px] lg:text-[44px] font-extrabold text-[#F7F5ED] leading-tight mb-4">
            Proses Pertanyaan &amp; Sebut Harga
          </h2>
          <p className="text-[20px] leading-[1.6] text-[#dedad0]">
            Kami memudahkan proses komunikasi daripada permulaan pertanyaan sehingga anda menerima sebut harga yang jelas.
          </p>
        </div>

        {/* 4 Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.stepNumber}
              id={`process-step-${step.stepNumber}`}
              className="bg-[#191a21] rounded-2xl border border-[#dfb74a]/30 p-7 sm:p-8 flex flex-col justify-between shadow-lg relative"
            >
              <div>
                {/* Step indicator and Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#252732] border border-[#dfb74a]/40 flex items-center justify-center">
                    {getStepIcon(step.stepNumber)}
                  </div>
                  <span className="w-10 h-10 rounded-full bg-[#dfb74a] text-[#121316] font-extrabold text-[20px] flex items-center justify-center shadow-md">
                    {step.stepNumber}
                  </span>
                </div>

                {/* Step Title */}
                <h3 className="text-[22px] sm:text-[23px] font-bold text-[#F7F5ED] mb-3 leading-snug">
                  {step.title}
                </h3>

                {/* Step Description - 20px font */}
                <p className="text-[19px] sm:text-[20px] leading-[1.6] text-[#dedad0]">
                  {step.description}
                </p>
              </div>

              {/* Progress Connector Note */}
              <div className="mt-6 pt-4 border-t border-[#dfb74a]/15 text-[15px] font-semibold text-[#dfb74a] uppercase tracking-wider">
                Langkah {step.stepNumber} daripada 4
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

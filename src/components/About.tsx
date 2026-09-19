import { Wrench, CheckCircle2, ShieldCheck } from 'lucide-react';
import BrandLogo from './BrandLogo';

export default function About() {
  return (
    <section id="tentang-kami" className="py-16 sm:py-20 bg-[#16171c] border-b border-[#dfb74a]/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1c1e24] rounded-2xl border border-[#dfb74a]/30 p-6 sm:p-10 lg:p-12 shadow-xl">
          {/* Header row with logo and heading */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-8 border-b border-[#dfb74a]/20">
            <div>
              <span className="text-[#dfb74a] font-bold text-[18px] tracking-wider uppercase block mb-1">
                Mengenai Perniagaan
              </span>
              <h2 className="text-[30px] sm:text-[38px] font-extrabold text-[#F7F5ED] leading-tight">
                Tentang ANZam Enterprise
              </h2>
            </div>
            <BrandLogo size="md" showText={false} className="shrink-0" />
          </div>

          {/* Factual Content - 20px body font, 1.6 line height */}
          <div className="pt-8 space-y-6 text-[#dedad0] text-[20px] leading-[1.6]">
            <p>
              <strong className="text-white font-bold">ANZam Enterprise</strong> merupakan penyedia perkhidmatan pertukangan renovasi dan penyelenggaraan bangunan yang menumpukan kepada kerja-kerja ubah suai kediaman (rumah), premis perniagaan (kedai), perpaipan serta pendawaian elektrik (wiring).
            </p>

            <p>
              Kami mengutamakan pendekatan yang praktikal dan telus: setiap projek dinilai mengikut skop kerja yang dipersetujui bersama pelanggan, tanpa sebarang kos terselindung atau janji yang tidak berasas. Daripada pendawaian elektrik punca lampu dan suis, kerja pembaikan genting bumbung yang bocor, aplikasi kalis air di kawasan tangki, hinggalah kepada pembinaan struktur kaunter perniagaan dan dinding partisi, kami komited memberikan kerja yang kemas dan berfungsi sebaiknya.
            </p>
          </div>

          {/* 3 Factual Commitments */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-[#dfb74a]/20">
            <div className="p-5 rounded-xl bg-[#14151a] border border-[#dfb74a]/20 flex flex-col space-y-2">
              <div className="flex items-center gap-3 text-[#dfb74a]">
                <Wrench className="w-6 h-6 shrink-0" aria-hidden="true" />
                <h3 className="font-bold text-[19px] text-[#F7F5ED]">Kerja Teliti</h3>
              </div>
              <p className="text-[17px] leading-[1.5] text-[#cfcbc0]">
                Setiap perincian kerja pertukangan dan perpaipan dilaksanakan mengikut keperluan spesifik anda.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#14151a] border border-[#dfb74a]/20 flex flex-col space-y-2">
              <div className="flex items-center gap-3 text-[#dfb74a]">
                <CheckCircle2 className="w-6 h-6 shrink-0" aria-hidden="true" />
                <h3 className="font-bold text-[19px] text-[#F7F5ED]">Sebut Harga Jelas</h3>
              </div>
              <p className="text-[17px] leading-[1.5] text-[#cfcbc0]">
                Harga ditentukan secara telus berdasarkan skop kerja, bahan binaan dan keluasan tapak sebenar.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#14151a] border border-[#dfb74a]/20 flex flex-col space-y-2">
              <div className="flex items-center gap-3 text-[#dfb74a]">
                <ShieldCheck className="w-6 h-6 shrink-0" aria-hidden="true" />
                <h3 className="font-bold text-[19px] text-[#F7F5ED]">Perbincangan Terus</h3>
              </div>
              <p className="text-[17px] leading-[1.5] text-[#cfcbc0]">
                Hubungan komunikasi terus melalui WhatsApp bagi memudahkan perkongsian gambar dan maklumat kerja.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

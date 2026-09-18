import { useState, useEffect, FormEvent } from 'react';
import { Send, AlertCircle, Info, MessageCircle, Check } from 'lucide-react';
import { BUSINESS_CONFIG, SERVICES_DATA } from '../data/businessData';
import { EnquiryFormData } from '../types';

interface EnquiryFormProps {
  initialService?: string;
}

export default function EnquiryForm({ initialService }: EnquiryFormProps) {
  const [formData, setFormData] = useState<EnquiryFormData>({
    nama: '',
    lokasi: '',
    jenisServis: initialService || '',
    peneranganKerja: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryFormData, string>>>({});
  const [hasAttemptedSubmit, setHasAttemptedSubmit] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, jenisServis: initialService }));
    }
  }, [initialService]);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof EnquiryFormData, string>> = {};

    if (!formData.nama.trim()) {
      newErrors.nama = 'Sila masukkan nama penuh anda.';
    }

    if (!formData.lokasi.trim()) {
      newErrors.lokasi = 'Sila nyatakan lokasi atau kawasan projek anda.';
    }

    if (!formData.jenisServis.trim()) {
      newErrors.jenisServis = 'Sila pilih salah satu jenis servis yang diperlukan.';
    }

    if (!formData.peneranganKerja.trim()) {
      newErrors.peneranganKerja = 'Sila berikan sedikit penerangan mengenai kerja yang ingin dilakukan.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setHasAttemptedSubmit(true);

    if (!validate()) {
      // Focus first error field for accessibility
      const firstErrorField = Object.keys(errors)[0];
      const element = document.getElementById(firstErrorField);
      if (element) {
        element.focus();
      }
      return;
    }

    // Prepare clear, encoded WhatsApp message
    const message = `Salam ANZam Enterprise, saya ingin meminta maklumat/sebut harga:

*Nama:* ${formData.nama.trim()}
*Lokasi Projek:* ${formData.lokasi.trim()}
*Jenis Servis:* ${formData.jenisServis.trim()}
*Penerangan Kerja:*
${formData.peneranganKerja.trim()}

Terima kasih.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrlWithMsg = `${BUSINESS_CONFIG.whatsappUrl}?text=${encodedMessage}`;

    setIsSuccessOpen(true);

    // Open WhatsApp in new window/tab
    window.open(whatsappUrlWithMsg, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="pertanyaan" className="py-16 sm:py-24 bg-[#16171d] border-b border-[#dfb74a]/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-[#dfb74a] font-bold text-[18px] sm:text-[19px] tracking-wider uppercase block mb-2">
            Hubungi Kami
          </span>
          <h2 className="text-[32px] sm:text-[40px] lg:text-[44px] font-extrabold text-[#F7F5ED] leading-tight mb-4">
            Borang Pertanyaan Sebut Harga
          </h2>
          <p className="text-[20px] leading-[1.6] text-[#dedad0]">
            Isikan butiran kerja di bawah. Maklumat ini akan disusun dan dibuka secara langsung di WhatsApp anda untuk dihantar kepada kami.
          </p>
        </div>

        {/* The Main Form Box */}
        <div className="bg-[#1c1e26] rounded-2xl border-2 border-[#dfb74a]/40 p-6 sm:p-10 lg:p-12 shadow-2xl">
          <form onSubmit={handleSubmit} noValidate className="space-y-7">
            {/* Field: Nama */}
            <div>
              <label
                htmlFor="nama"
                className="block text-[19px] sm:text-[20px] font-bold text-[#F7F5ED] mb-2.5"
              >
                Nama Anda <span className="text-[#dfb74a]">*</span>
              </label>
              <input
                type="text"
                id="nama"
                name="nama"
                value={formData.nama}
                onChange={(e) => {
                  setFormData({ ...formData, nama: e.target.value });
                  if (hasAttemptedSubmit) setErrors({ ...errors, nama: undefined });
                }}
                placeholder="Contoh: Encik Ahmad"
                className={`w-full bg-[#121316] text-[#F7F5ED] text-[19px] sm:text-[20px] px-5 py-4 rounded-xl border-2 ${
                  errors.nama ? 'border-red-500 bg-red-950/20' : 'border-[#dfb74a]/40'
                } focus:outline-none focus:border-[#dfb74a] focus:ring-4 focus:ring-[#dfb74a]/20 min-h-[56px] transition-colors placeholder:text-gray-500`}
                aria-required="true"
                aria-invalid={!!errors.nama}
                aria-describedby={errors.nama ? 'error-nama' : undefined}
              />
              {errors.nama && (
                <p id="error-nama" className="mt-2 text-[17px] text-red-400 font-semibold flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
                  <span>{errors.nama}</span>
                </p>
              )}
            </div>

            {/* Field: Lokasi */}
            <div>
              <label
                htmlFor="lokasi"
                className="block text-[19px] sm:text-[20px] font-bold text-[#F7F5ED] mb-2.5"
              >
                Lokasi / Kawasan Projek <span className="text-[#dfb74a]">*</span>
              </label>
              <input
                type="text"
                id="lokasi"
                name="lokasi"
                value={formData.lokasi}
                onChange={(e) => {
                  setFormData({ ...formData, lokasi: e.target.value });
                  if (hasAttemptedSubmit) setErrors({ ...errors, lokasi: undefined });
                }}
                placeholder="Contoh: Taman Melati, Kuala Lumpur"
                className={`w-full bg-[#121316] text-[#F7F5ED] text-[19px] sm:text-[20px] px-5 py-4 rounded-xl border-2 ${
                  errors.lokasi ? 'border-red-500 bg-red-950/20' : 'border-[#dfb74a]/40'
                } focus:outline-none focus:border-[#dfb74a] focus:ring-4 focus:ring-[#dfb74a]/20 min-h-[56px] transition-colors placeholder:text-gray-500`}
                aria-required="true"
                aria-invalid={!!errors.lokasi}
                aria-describedby={errors.lokasi ? 'error-lokasi' : undefined}
              />
              {errors.lokasi && (
                <p id="error-lokasi" className="mt-2 text-[17px] text-red-400 font-semibold flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
                  <span>{errors.lokasi}</span>
                </p>
              )}
            </div>

            {/* Field: Jenis Servis */}
            <div>
              <label
                htmlFor="jenisServis"
                className="block text-[19px] sm:text-[20px] font-bold text-[#F7F5ED] mb-2.5"
              >
                Jenis Servis Diperlukan <span className="text-[#dfb74a]">*</span>
              </label>
              <select
                id="jenisServis"
                name="jenisServis"
                value={formData.jenisServis}
                onChange={(e) => {
                  setFormData({ ...formData, jenisServis: e.target.value });
                  if (hasAttemptedSubmit) setErrors({ ...errors, jenisServis: undefined });
                }}
                className={`w-full bg-[#121316] text-[#F7F5ED] text-[19px] sm:text-[20px] px-5 py-4 rounded-xl border-2 ${
                  errors.jenisServis ? 'border-red-500 bg-red-950/20' : 'border-[#dfb74a]/40'
                } focus:outline-none focus:border-[#dfb74a] focus:ring-4 focus:ring-[#dfb74a]/20 min-h-[56px] transition-colors`}
                aria-required="true"
                aria-invalid={!!errors.jenisServis}
                aria-describedby={errors.jenisServis ? 'error-jenisServis' : undefined}
              >
                <option value="" disabled>-- Sila Pilih Jenis Servis --</option>
                {SERVICES_DATA.map((srv) => (
                  <option key={srv.id} value={srv.title}>
                    {srv.title}
                  </option>
                ))}
                <option value="Kerja Renovasi Lain-lain">Kerja Renovasi Lain-lain</option>
              </select>
              {errors.jenisServis && (
                <p id="error-jenisServis" className="mt-2 text-[17px] text-red-400 font-semibold flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
                  <span>{errors.jenisServis}</span>
                </p>
              )}
            </div>

            {/* Field: Penerangan Kerja */}
            <div>
              <label
                htmlFor="peneranganKerja"
                className="block text-[19px] sm:text-[20px] font-bold text-[#F7F5ED] mb-2.5"
              >
                Penerangan Kerja / Masalah Dihadapi <span className="text-[#dfb74a]">*</span>
              </label>
              <textarea
                id="peneranganKerja"
                name="peneranganKerja"
                rows={4}
                value={formData.peneranganKerja}
                onChange={(e) => {
                  setFormData({ ...formData, peneranganKerja: e.target.value });
                  if (hasAttemptedSubmit) setErrors({ ...errors, peneranganKerja: undefined });
                }}
                placeholder="Contoh: Bumbung ruang tamu bocor bila hujan lebat, atau ingin buat kaunter pembayaran saiz 8x3 kaki."
                className={`w-full bg-[#121316] text-[#F7F5ED] text-[19px] sm:text-[20px] px-5 py-4 rounded-xl border-2 ${
                  errors.peneranganKerja ? 'border-red-500 bg-red-950/20' : 'border-[#dfb74a]/40'
                } focus:outline-none focus:border-[#dfb74a] focus:ring-4 focus:ring-[#dfb74a]/20 min-h-[120px] transition-colors placeholder:text-gray-500 leading-relaxed`}
                aria-required="true"
                aria-invalid={!!errors.peneranganKerja}
                aria-describedby={errors.peneranganKerja ? 'error-peneranganKerja' : undefined}
              />
              {errors.peneranganKerja && (
                <p id="error-peneranganKerja" className="mt-2 text-[17px] text-red-400 font-semibold flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
                  <span>{errors.peneranganKerja}</span>
                </p>
              )}
            </div>

            {/* Explicit Notice on how WhatsApp submission works (NO CLAIM OF AUTOMATIC SUBMISSION) */}
            <div className="bg-[#121316] border border-[#dfb74a]/30 rounded-xl p-5 sm:p-6 flex items-start gap-4">
              <Info className="w-6 h-6 text-[#dfb74a] shrink-0 mt-0.5" aria-hidden="true" />
              <div className="text-[17px] sm:text-[18px] leading-[1.6] text-[#dedad0]">
                <strong className="text-white font-bold block mb-1">
                  Cara Penghantaran WhatsApp:
                </strong>
                Butang <strong>&ldquo;Hantar ke WhatsApp&rdquo;</strong> di bawah akan membuka aplikasi WhatsApp anda secara automatik bersama mesej yang telah siap diisi dengan butiran anda di atas. Anda boleh menyemak semula mesej tersebut dan menekan butang hantar (Send) di dalam WhatsApp anda. Tiada penghantaran automatik tanpa kebenaran anda.
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-3 bg-[#dfb74a] hover:bg-[#cba135] text-[#121316] font-extrabold text-[20px] sm:text-[21px] py-4 px-8 rounded-xl shadow-xl transition-all hover:scale-[1.01] min-h-[56px] focus:outline-none focus-visible:ring-4 focus-visible:ring-white cursor-pointer"
              id="submit-whatsapp-btn"
            >
              <MessageCircle className="w-6 h-6" aria-hidden="true" />
              <span>Hantar ke WhatsApp (+60 14-311 3926)</span>
            </button>
          </form>

          {/* Success confirmation modal / banner */}
          {isSuccessOpen && (
            <div className="mt-6 p-5 bg-emerald-950/50 border-2 border-emerald-500/60 rounded-xl flex items-start gap-4 text-emerald-100">
              <Check className="w-7 h-7 text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
              <div className="text-[18px] leading-relaxed">
                <strong className="text-white font-bold block text-[19px]">
                  WhatsApp sedang dibuka!
                </strong>
                Sekiranya tetingkap WhatsApp tidak terbuka secara automatik, sila{' '}
                <a
                  href={`${BUSINESS_CONFIG.whatsappUrl}?text=${encodeURIComponent(
                    `Salam ANZam Enterprise, saya ingin meminta sebut harga untuk ${formData.jenisServis || 'renovasi/paip'}. Nama: ${formData.nama}. Lokasi: ${formData.lokasi}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold underline text-white hover:text-[#dfb74a]"
                >
                  tekan di sini untuk buka WhatsApp secara terus
                </a>.
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

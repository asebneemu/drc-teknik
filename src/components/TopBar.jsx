import { useState } from "react";
import { IconMapPin, IconPhone } from "@tabler/icons-react";

export default function TopBar() {
  const [copied, setCopied] = useState(false);

  const phoneNumber = "03124730227";
  const displayPhone = "0312 473 02 27";

  const mapUrl =
    "https://www.google.com/maps/search/?api=1&query=Ehlibeyt%20Mahallesi%20Ceyhun%20Atuf%20Kansu%20Caddesi%20104%2F12%2C%20%C3%87ankaya%2FAnkara";

  const copyPhone = () => {
    navigator.clipboard.writeText(phoneNumber);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <div className="topbar-shell w-full">
      <div className="bg-[#1f2937]">
        <div className="mx-auto flex w-[92%] items-center justify-between py-2.5 sm:w-[90%] md:w-[88%] lg:w-[75%] lg:py-3">
          {/* SOL */}
          <div className="flex flex-1 items-center justify-between text-xs font-medium text-white sm:text-sm lg:flex-none lg:justify-start lg:gap-6">
            {/* MOBİL / ORTA EKRAN TELEFON İKONU */}
            <a
              href={`tel:${phoneNumber}`}
              aria-label="Telefonla ara"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 lg:hidden"
            >
              <IconPhone size={18} stroke={2} />
            </a>

            {/* BÜYÜK EKRAN TELEFON */}
            <div className="relative hidden lg:inline">
              <span
                onClick={copyPhone}
                className="cursor-pointer text-white transition hover:text-blue-400"
              >
                {displayPhone}
              </span>

              {copied && (
                <span className="absolute left-1/2 top-full z-20 mt-2 -translate-x-1/2 rounded-full bg-green-500 px-2.5 py-1 text-[11px] font-semibold text-white shadow-md">
                  Kopyalandı
                </span>
              )}
            </div>

            {/* MAİL */}
            <span className="whitespace-nowrap text-center text-white">
              info@drcteknik.com
            </span>

            {/* MOBİL / ORTA EKRAN KONUM İKONU */}
            <a
              href={mapUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Konumu haritada aç"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 lg:hidden"
            >
              <IconMapPin size={18} stroke={2} />
            </a>

            {/* BÜYÜK EKRAN ADRES */}
            <a
              href={mapUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden leading-5 text-white transition hover:text-blue-400 lg:inline"
            >
              Ehlibeyt Mahallesi Ceyhun Atuf Kansu Caddesi 104/12,
              Çankaya/Ankara
            </a>
          </div>

          {/* SAĞ */}
          <div className="hidden shrink-0 whitespace-nowrap text-right text-xs font-medium text-gray-200 sm:block sm:ml-6 sm:text-sm lg:ml-0">
            Profesyonel Ölçüm ve Teknik Çözümler
          </div>
        </div>
      </div>

      <div className="light-line"></div>
    </div>
  );
}
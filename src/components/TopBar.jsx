import { useState } from "react";

export default function TopBar() {
  const [copied, setCopied] = useState(false);

  const copyPhone = () => {
    navigator.clipboard.writeText("03124730227");
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <div className="topbar-shell w-full hidden sm:block">
      <div className="bg-[#1f2937]">
        <div className="mx-auto flex w-[75%] flex-col md:flex-row md:items-center md:justify-between py-3 gap-2 md:gap-0">
          
          {/* SOL */}
          <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-6 text-xs sm:text-sm font-medium text-white">
            
            {/* MOBİL → arama */}
            <a href="tel:03124730227" className="md:hidden">
              0312 473 02 27
            </a>

            {/* DESKTOP → kopyalama */}
            <div className="relative hidden md:inline">
              <span
                onClick={copyPhone}
                className="cursor-pointer hover:text-blue-400 transition"
              >
                0312 473 02 27
              </span>

              {/* KOPYALANDI TEXT */}
              {copied && (
                <span className="absolute left-0 top-full mt-1 text-[11px] text-green-400 animate-fade">
                  Kopyalandı
                </span>
              )}
            </div>

            <span>info@drcteknik.com</span>

            <span className="leading-5">
              Ehlibeyt Mahallesi Ceyhun Atuf Kansu Caddesi 104/12, Çankaya/Ankara
            </span>
          </div>

          {/* SAĞ */}
          <div className="text-xs sm:text-sm font-medium text-gray-200">
            Profesyonel Ölçüm ve Teknik Çözümler
          </div>

        </div>
      </div>

      <div className="light-line"></div>
    </div>
  );
}
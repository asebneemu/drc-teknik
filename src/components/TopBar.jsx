export default function TopBar() {
  return (
    <div className="topbar-shell w-full hidden sm:block">
      <div className="bg-[#1f2937]">
        <div className="mx-auto flex w-[75%] flex-col md:flex-row md:items-center md:justify-between py-3 gap-2 md:gap-0">
          
          {/* SOL */}
          <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-6 text-xs sm:text-sm font-medium text-white">
            <span>0530 922 23 22</span>
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
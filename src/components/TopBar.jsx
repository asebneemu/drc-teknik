export default function TopBar() {
  return (
    <div className="topbar-shell w-full">
      <div className="bg-[#1f2937]">
        <div className="mx-auto flex w-[75%] items-center justify-between py-3">
          <div className="flex items-center gap-6 text-sm font-medium text-white">
            <span>0530 922 23 22</span>
            <span>info@drcteknik.com</span>
            <span>Ehlibeyt Mahallesi Ceyhun Atuf Kansu Caddesi 104/12, Çankaya/Ankara</span>
          </div>

          <div className="text-sm font-medium text-gray-200">
            Profesyonel Ölçüm ve Teknik Çözümler
          </div>
        </div>
      </div>

      <div className="light-line"></div>
    </div>
  );
}
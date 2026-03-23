export default function TopBar() {
  return (
    <div className="topbar-shell w-full">
      <div className="topbar-glass">
        <div className="mx-auto flex w-[75%] items-center justify-between py-3">
          <div className="flex items-center gap-6 text-sm font-medium text-white">
            <span>0312 000 00 00</span>
            <span>info@drcteknik.com</span>
            <span>Ankara / Türkiye</span>
          </div>

          <div className="text-sm font-medium text-blue-100">
            Profesyonel Ölçüm ve Teknik Çözümler
          </div>
        </div>
      </div>

      <div className="light-line"></div>
    </div>
  );
}
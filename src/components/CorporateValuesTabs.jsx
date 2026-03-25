import { useState } from "react";

const CorporateValuesTabs = () => {
  const [active, setActive] = useState("kalite");

  const tabs = [
    {
      id: "kalite",
      title: "Kalite",
      desc: "DRC Teknik’te kalite, sunduğumuz her hizmetin temelini oluşturur. Harita teknolojileri alanındaki uzmanlığımızı, yüksek standartlarda bakım, onarım ve kalibrasyon süreçleriyle birleştirerek cihazlarınızın performansını en üst seviyeye taşımayı hedefliyoruz. Her işlem, alanında deneyimli teknik ekibimiz tarafından titizlikle uygulanır ve hassas kontrol süreçleriyle desteklenir.",
    },
    {
      id: "surdurulebilirlik",
      title: "Sürdürülebilirlik",
      desc: "Sürdürülebilirlik anlayışımız, yalnızca bugünü değil geleceği de düşünerek hareket etmemizi sağlar. Cihazların uzun ömürlü, verimli ve güvenli kullanımını destekleyen çözümler sunarken çevresel etkileri azaltmayı önemsiyoruz. DRC Teknik olarak hem müşterilerimize ekonomik fayda sağlayan hem de kaynakların daha bilinçli kullanılmasını destekleyen bir hizmet yaklaşımı benimsiyoruz.",
    },
    {
      id: "sosyal-sorumluluk",
      title: "Sosyal Sorumluluk",
      desc: "Topluma katkı sağlamak, DRC Teknik’in kurumsal yaklaşımının ayrılmaz bir parçasıdır. Sektörel bilgi birikimimizi paylaşan eğitimler, teknik gelişimi destekleyen çalışmalar ve genç mühendislerle teknisyenlerin yetişmesine katkı sunan projelerle sosyal sorumluluk bilincimizi hayata geçiriyoruz.",
    },
  ];

  const currentTab = tabs.find((tab) => tab.id === active);

  return (
    <div className="my-8 sm:my-10 lg:my-12">
      {/* Sekmeler */}
      <div
        className="
          mb-5 sm:mb-6
          flex flex-wrap gap-3 sm:gap-4 lg:gap-6
          border-b border-gray-200 pb-2
        "
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`
              border-b-2 px-1 py-2 font-semibold transition-all duration-300
              text-sm sm:text-base lg:text-lg
              whitespace-nowrap
              ${
                active === tab.id
                  ? "border-emerald-600 text-emerald-700"
                  : "border-transparent text-gray-500 hover:text-emerald-600"
              }
            `}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* İçerik */}
      <div
        className="
          rounded-2xl border border-black/5 bg-[#f8fbfa]
          p-4 sm:p-6 md:p-8 lg:p-10
        "
      >
        <h3 className="mb-3 sm:mb-4 text-xl sm:text-2xl lg:text-3xl font-bold text-emerald-700">
          {currentTab?.title}
        </h3>
        <p className="text-sm sm:text-base lg:text-[17px] leading-7 sm:leading-8 text-gray-700">
          {currentTab?.desc}
        </p>
      </div>
    </div>
  );
};

export default CorporateValuesTabs;
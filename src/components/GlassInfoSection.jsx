// src/components/content/GlassInfoSection.jsx
const GlassInfoSection = () => {
  const data = [
    {
      title: "Kalite",
      text: "Müşteri memnuniyetini en üst düzeyde tutarak, en yeni teknolojilerle yüksek kaliteli bakım ve onarım hizmetleri sunuyoruz.",
    },
    {
      title: "Sürdürülebilirlik",
      text: "Çevreye duyarlı yaklaşımlarımızla sürdürülebilir çözümler üretiyor, uzun ömürlü ve verimli cihaz kullanımı sağlıyoruz.",
    },
    {
      title: "Sosyal Sorumluluk",
      text: "Topluma katkı sağlama misyonuyla hareket ediyor, eğitim ve çevre projeleri ile sosyal sorumluluk bilincimizi yansıtıyoruz.",
    },
  ];

  return (
    <div className="w-full py-12 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className="
            overflow-hidden rounded-2xl bg-cover bg-center bg-no-repeat
          "
          style={{
            backgroundImage: "url('/content6.jpg')",
          }}
        >
          <div className="h-full w-full bg-black/30 px-4 py-10 sm:px-6 sm:py-12 lg:px-10 lg:py-16">
            <h2 className="mx-auto mb-8 max-w-4xl text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight sm:mb-10 lg:mb-12">
              Yeni veya İkinci El Cihaz Alacaksanız Bize Danışmadan Karar Vermeyiniz!
            </h2>

            <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3 lg:gap-8">
              {data.map((item, i) => (
                <div
                  key={i}
                  className="
                    rounded-xl border border-white/30 bg-white/20 p-5 text-white shadow-lg backdrop-blur-lg
                    transition-all duration-300
                    sm:p-6 lg:p-7
                    sm:hover:scale-[1.02]
                  "
                >
                  <h3 className="mb-2 text-lg sm:text-xl lg:text-2xl font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base leading-6 sm:leading-7 text-white/90">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlassInfoSection;
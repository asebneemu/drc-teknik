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
    <div className="w-full py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className="overflow-hidden rounded-2xl bg-cover bg-center bg-no-repeat min-h-[480px] lg:min-h-[520px]"
          style={{
            backgroundImage: "url('/4-arkaplan.jpeg')",
          }}
        >
          <div className="h-[480px] lg:min-h-[520px] w-full bg-black/30 px-4 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-20 flex flex-col">
            
            {/* BAŞLIK */}
            <div className="mx-auto mb-10 sm:mb-12 lg:mb-14 max-w-4xl text-center">
              <div className="inline-block rounded-xl bg-black/40 px-6 py-4 backdrop-blur-md">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white leading-tight">
                  Karar Vermeden Önce Teknik Görüş Alın!
                </h2>
              </div>
            </div>

            <div className="flex-1" />

            {/* TÜM GRID YUKARI ALINDI */}
            <div className="xl:-translate-y-10">
              <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3 lg:gap-8">
                {data.map((item, i) => (
                  <div
                    key={i}
                    className={`
                      rounded-xl border border-white/30 bg-white/20 p-5 text-white shadow-lg backdrop-blur-lg
                      transition-all duration-300
                      sm:p-6 lg:p-7
                      sm:hover:scale-[1.02]

                      ${
                        i === 1
                          ? "xl:translate-y-12"   // ORTA aşağı
                          : "xl:-translate-y-10" // SAĞ & SOL yukarı
                      }
                    `}
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
    </div>
  );
};

export default GlassInfoSection;
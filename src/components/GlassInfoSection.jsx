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
    <div className="w-[75%] mx-auto py-20">
      <div
        className="bg-cover bg-center bg-no-repeat rounded-2xl overflow-hidden"
        style={{
          backgroundImage: "url('/content4.jpg')",
        }}
      >
        <div className="bg-black/20 w-full h-full px-6 py-12">
          
          <h2 className="text-3xl text-center font-bold text-white mb-12">
            Yeni veya İkinci El Cihaz Alacaksanız Bize Danışmadan Karar Vermeyiniz!
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {data.map((item, i) => (
              <div
                key={i}
                className="backdrop-blur-lg bg-white/20 border border-white/30 rounded-xl p-6 text-white shadow-lg hover:scale-105 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm opacity-90">{item.text}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default GlassInfoSection;
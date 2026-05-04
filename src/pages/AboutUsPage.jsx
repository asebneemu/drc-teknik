import CorporateValuesTabs from "../components/CorporateValuesTabs";

const AboutUsPage = () => {
  const reasons = [
    "Hızlı müdahale ve yerinde çözüm kabiliyeti",
    "Uzman teknik kadro ile doğru teşhis",
    "Marka bağımsız geniş ürün desteği",
    "Saha odaklı çözüm geliştirme",
  ];

  const model = [
    { title: "Analiz", desc: "İhtiyacın doğru tespiti" },
    { title: "Planlama", desc: "Sahaya özel çözüm tasarımı" },
    { title: "Uygulama", desc: "Profesyonel kurulum ve devreye alma" },
    { title: "Doğrulama", desc: "Sistem performans testleri" },
    { title: "Destek", desc: "Sürekli teknik destek ve eğitim" },
  ];

  return (
    <div className="w-full bg-[#f7faf8] py-16 lg:py-24">
      <div className="mx-auto w-[90%] max-w-7xl space-y-20">
        {/* HERO */}
        <div className="text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-[#9b7416]">
            Kurumsal
          </span>

          <h1 className="mt-4 text-4xl font-semibold text-[#1f2a1f] sm:text-5xl">
            Tarım Teknolojilerinde Güvenilir Çözüm Ortağı
          </h1>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-[#5f6f5f]">
            DRC Teknik, tarım teknolojileri, hassas tarım sistemleri ve ileri
            saha ekipmanları alanında faaliyet gösteren bağımsız bir teknik
            servis ve uygulama çözüm sağlayıcısıdır.
          </p>
        </div>

        {/* İSTATİSTİKLER */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {[
            { value: "20+", label: "Yıl Saha Tecrübesi" },
            { value: "24/7", label: "Teknik Destek" },
            { value: "OEM", label: "Üretici Odaklı Çözümler" },
            { value: "TOPCON", label: "Yetkili Çözüm Ortağı" },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-[#e6efe2] bg-white/80 p-6 text-center"
            >
              <div className="text-3xl font-semibold text-[#1f2a1f]">
                {item.value}
              </div>
              <div className="mt-2 text-sm text-[#6b7b6b]">{item.label}</div>
            </div>
          ))}
        </div>

        {/* ANA AÇIKLAMA */}
        <div className="grid gap-12 md:grid-cols-2">
          <p className="text-[17px] leading-8 text-[#3f4f3f]">
            Amacımız; üreticiler, distribütörler ve OEM üreticiler için yüksek
            performanslı, kesintisiz ve sürdürülebilir teknik destek altyapısı
            sunmaktır.
          </p>

          <p className="text-[17px] leading-8 text-[#3f4f3f]">
            DRC Teknik, yalnızca bir servis firması değil; sahada operasyonel
            verimliliği artıran, teknoloji kullanımını optimize eden ve müşteri
            yatırımlarının geri dönüşünü güvence altına alan TOPCON yetkili
            çözüm ortağıdır.
          </p>
        </div>

        {/* NEDEN DRC */}
        <div className="rounded-[32px] border border-[#e6efe2] bg-white/80 p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <span className="text-xs uppercase tracking-[0.22em] text-[#9b7416]">
                Neden DRC Teknik?
              </span>

              <h2 className="mt-4 text-2xl font-semibold text-[#1f2a1f]">
                Klasik servis anlayışının ötesinde bir yapı
              </h2>

              <p className="mt-5 text-sm leading-7 text-[#6b7b6b] sm:text-base">
                Tarım makineleri ve hassas tarım teknolojilerinde yaşanan hızlı
                dönüşüm, sahaya yakın, hızlı ve sürdürülebilir teknik destek
                yaklaşımı gerektirir.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {reasons.map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-[#e2ecdc] bg-[#f7faf4] p-5"
                >
                  <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#9b7416] text-sm text-white">
                    ✓
                  </div>
                  <p className="text-sm leading-7 text-[#435143]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ÇALIŞMA MODELİ */}
        <div>
          <div className="mb-8 max-w-3xl">
            <span className="text-xs uppercase tracking-[0.22em] text-[#9b7416]">
              Çalışma Modelimiz
            </span>

            <h2 className="mt-4 text-2xl font-semibold text-[#1f2a1f]">
              Hız, doğruluk ve sürdürülebilirlik üzerine kurulu süreç
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#6b7b6b] sm:text-base">
              Bu yapı sayesinde yalnızca problemi çözmekle kalmaz, sistemin
              uzun vadeli verimliliğini de güvence altına alırız.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-5">
            {model.map((item, index) => (
              <div
                key={index}
                className="rounded-[24px] border border-[#e2ecdc] bg-white/85 p-6 shadow-sm"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#fff4cf] text-sm font-bold text-[#9b7416]">
                  {index + 1}
                </div>

                <h3 className="text-base font-semibold text-[#1f2a1f]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#5f6f5f]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* VALUES */}
        <CorporateValuesTabs />

        {/* ALT GÜVEN MESAJI */}
        <div className="max-w-3xl border-t border-[#e3eadf] pt-10">
          <p className="text-sm leading-7 text-[#6b7b6b]">
            DRC Teknik; üreticiler, distribütörler ve OEM iş ortakları için
            kesintisiz teknik destek, doğru uygulama ve sürdürülebilir saha
            performansı sağlamaya odaklanır.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
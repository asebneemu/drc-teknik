import CorporateValuesTabs from "../components/CorporateValuesTabs";

const AboutUsPage = () => {
  const reasons = [
    "Hızlı müdahale ve yerinde çözüm kabiliyeti ile operasyonel kesintileri minimize eder",
    "Uzman teknik kadrosu ile doğru teşhis ve kalıcı çözüm sunar",
    "Marka bağımsız yaklaşımı ile geniş ürün yelpazesinde hizmet verebilir",
    "Saha odaklı organizasyonu ile gerçek kullanım koşullarına uygun çözümler geliştirir",
  ];

  const steps = [
    ["Analiz", "İhtiyacın doğru tespiti"],
    ["Planlama", "Sahaya özel çözüm tasarımı"],
    ["Uygulama", "Profesyonel kurulum ve devreye alma"],
    ["Doğrulama", "Sistem performans testleri"],
    ["Destek", "Sürekli teknik destek ve eğitim"],
  ];

  return (
    <main className="w-full bg-[#f7faf8] py-20 lg:py-28">
      <div className="mx-auto w-[90%] max-w-7xl">
        <section className="mx-auto max-w-4xl text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-[#9b7416]">
            KURUMSAL
          </span>

          <h1 className="mt-5 text-4xl font-semibold tracking-[-0.03em] text-[#1f2a1f] sm:text-6xl">
            Biz Kimiz?
          </h1>

          <p className="mt-8 text-base leading-8 text-[#5f6f5f] sm:text-lg sm:leading-9">
            DRC Teknik, tarım teknolojileri, hassas tarım sistemleri ve ileri saha ekipmanları alanında faaliyet gösteren bağımsız bir teknik servis ve uygulama çözüm sağlayıcısıdır. Amacımız; üreticiler, distribütörler ve OEM üreticiler için yüksek performanslı, kesintisiz ve sürdürülebilir teknik destek altyapısı sunmaktır.
          </p>
        </section>

        <section className="mt-20 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[32px] border border-[#e4ebdf] bg-white/80 p-8 lg:p-10">
            <p className="text-base leading-8 text-[#3f4f3f]">
              DRC Teknik, yalnızca bir servis firması değil; aynı zamanda sahada operasyonel verimliliği artıran, teknoloji kullanımını optimize eden ve müşteri yatırımlarının geri dönüşünü güvence altına alan TOPCON yetkili çözüm ortağıdır.
            </p>
          </div>

          <div className="rounded-[32px] border border-[#e4ebdf] bg-white/80 p-8 lg:p-10">
            <h2 className="text-2xl font-semibold tracking-[-0.02em] text-[#1f2a1f]">
              Neden DRC Teknik?
            </h2>

            <p className="mt-5 text-base leading-8 text-[#5f6f5f]">
              Tarım makineleri ve hassas tarım teknolojilerinde yaşanan hızlı dönüşüm, klasik servis anlayışının ötesinde bir yapı gerektirmektedir.
            </p>
          </div>
        </section>

        <section className="mt-8 rounded-[36px] border border-[#e4ebdf] bg-white p-6 shadow-sm sm:p-8 lg:p-10">
          <p className="mb-6 text-sm font-medium text-[#9b7416]">
            Bu doğrultuda DRC Teknik:
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            {reasons.map((item, index) => (
              <div
                key={index}
                className="rounded-[24px] bg-[#f7faf8] p-6"
              >
                <span className="text-sm font-semibold text-[#9b7416]">
                  0{index + 1}
                </span>

                <p className="mt-4 text-sm leading-7 text-[#3f4f3f] sm:text-base">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 max-w-4xl text-base leading-8 text-[#5f6f5f]">
            Bu yaklaşım sayesinde müşterilerimizin zaman, maliyet ve performans açısından maksimum verim elde etmesini sağlıyoruz.
          </p>
        </section>

        <section className="mt-20">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#1f2a1f]">
              Çalışma Modelimiz
            </h2>

            <p className="mt-5 text-base leading-8 text-[#5f6f5f]">
              DRC Teknik’in çalışma modeli, hız, doğruluk ve sürdürülebilirlik üzerine kuruludur:
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-5">
            {steps.map(([title, desc], index) => (
              <div
                key={title}
                className="rounded-[26px] border border-[#e4ebdf] bg-white/85 p-6"
              >
                <span className="text-xs font-semibold text-[#9b7416]">
                  0{index + 1}
                </span>

                <h3 className="mt-6 text-lg font-semibold text-[#1f2a1f]">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#6b7b6b]">
                  {desc}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-10 max-w-4xl text-base leading-8 text-[#5f6f5f]">
            Bu yapı sayesinde yalnızca problemi çözmekle kalmaz, aynı zamanda sistemin uzun vadeli verimliliğini garanti altına alırız.
          </p>
        </section>

      </div>
    </main>
  );
};

export default AboutUsPage;
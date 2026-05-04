import CorporateValuesTabs from "../components/CorporateValuesTabs";

const AboutUsPage = () => {
  const reasons = [
    "Hızlı müdahale ve yerinde çözüm kabiliyeti ile operasyonel kesintileri minimize eder",
    "Uzman teknik kadrosu ile doğru teşhis ve kalıcı çözüm sunar",
    "Marka bağımsız yaklaşımı ile geniş ürün yelpazesinde hizmet verebilir",
    "Saha odaklı organizasyonu ile gerçek kullanım koşullarına uygun çözümler geliştirir",
  ];

  const workflow = [
    ["Analiz", "İhtiyacın doğru tespiti"],
    ["Planlama", "Sahaya özel çözüm tasarımı"],
    ["Uygulama", "Profesyonel kurulum ve devreye alma"],
    ["Doğrulama", "Sistem performans testleri"],
    ["Destek", "Sürekli teknik destek ve eğitim"],
  ];

  return (
    <main className="w-full bg-[#f7faf8]">
      <section className="mx-auto w-[90%] max-w-7xl py-20 lg:py-28">
        {/* HERO */}
        <div className="mx-auto max-w-5xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.35em] text-[#9b7416]">
            Kurumsal
          </span>

          <h1 className="mt-6 text-5xl font-semibold tracking-[-0.04em] text-[#172117] sm:text-6xl lg:text-7xl">
            Biz Kimiz?
          </h1>

          <p className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-[#536353]">
            DRC Teknik, tarım teknolojileri, hassas tarım sistemleri ve ileri saha ekipmanları alanında faaliyet gösteren bağımsız bir teknik servis ve uygulama çözüm sağlayıcısıdır. Amacımız; üreticiler, distribütörler ve OEM üreticiler için yüksek performanslı, kesintisiz ve sürdürülebilir teknik destek altyapısı sunmaktır.
          </p>
        </div>

        {/* INTRO CARD */}
        <div className="mt-20 overflow-hidden rounded-[40px] border border-[#e3eadf] bg-white/80 shadow-[0_24px_80px_rgba(31,42,31,0.08)] backdrop-blur">
          <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="p-8 sm:p-12 lg:p-14">
              <span className="text-sm font-semibold text-[#9b7416]">
                TOPCON Yetkili Çözüm Ortağı
              </span>

              <h2 className="mt-5 max-w-2xl text-3xl font-semibold tracking-[-0.03em] text-[#1f2a1f] sm:text-4xl">
                Servisten öte, sahada verimlilik odaklı çözüm altyapısı.
              </h2>

              <p className="mt-6 text-base leading-8 text-[#5f6f5f]">
                DRC Teknik, yalnızca bir servis firması değil; aynı zamanda sahada operasyonel verimliliği artıran, teknoloji kullanımını optimize eden ve müşteri yatırımlarının geri dönüşünü güvence altına alan TOPCON yetkili çözüm ortağıdır.
              </p>
            </div>

            <div className="relative min-h-[360px] bg-gradient-to-br from-[#f1f6ed] via-[#ffffff] to-[#f9efd0] p-8 sm:p-12 lg:p-14">
              <div className="absolute right-8 top-8 h-28 w-28 rounded-full bg-[#9b7416]/10 blur-2xl" />
              <div className="absolute bottom-8 left-8 h-36 w-36 rounded-full bg-[#7fa36a]/15 blur-3xl" />

              <div className="relative flex h-full flex-col justify-between rounded-[32px] border border-white/80 bg-white/70 p-7 shadow-sm backdrop-blur">
                <div>
                  <p className="text-sm font-medium text-[#6b7b6b]">
                    Çalışma odağı
                  </p>

                  <div className="mt-8 space-y-5">
                    {["Hız", "Doğruluk", "Sürdürülebilirlik"].map((item) => (
                      <div
                        key={item}
                        className="flex items-center justify-between border-b border-[#e4ecdf] pb-4 last:border-b-0"
                      >
                        <span className="text-2xl font-semibold tracking-[-0.03em] text-[#1f2a1f]">
                          {item}
                        </span>
                        <span className="h-3 w-3 rounded-full bg-[#9b7416]" />
                      </div>
                    ))}
                  </div>
                </div>

                <p className="mt-8 text-sm leading-7 text-[#6b7b6b]">
                  Yüksek performanslı, kesintisiz ve sürdürülebilir teknik destek altyapısı.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* WHY */}
        <section className="mt-28">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div className="lg:sticky lg:top-24">
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#9b7416]">
                Neden DRC Teknik?
              </span>

              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-[#1f2a1f]">
                Klasik servis anlayışının ötesinde.
              </h2>

              <p className="mt-6 text-base leading-8 text-[#5f6f5f]">
                Tarım makineleri ve hassas tarım teknolojilerinde yaşanan hızlı dönüşüm, klasik servis anlayışının ötesinde bir yapı gerektirmektedir.
              </p>

              <p className="mt-6 text-base leading-8 text-[#5f6f5f]">
                Bu doğrultuda DRC Teknik:
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {reasons.map((item, index) => (
                <article
                  key={index}
                  className="group rounded-[32px] border border-[#e3eadf] bg-white/85 p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(31,42,31,0.08)]"
                >
                  <div className="mb-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#f8efd4] text-sm font-semibold text-[#9b7416]">
                    0{index + 1}
                  </div>

                  <p className="text-base leading-8 text-[#3f4f3f]">
                    {item}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-12 rounded-[32px] border border-[#e3eadf] bg-[#1f2a1f] p-8 sm:p-10">
            <p className="max-w-4xl text-xl leading-9 tracking-[-0.02em] text-white/90">
              Bu yaklaşım sayesinde müşterilerimizin zaman, maliyet ve performans açısından maksimum verim elde etmesini sağlıyoruz.
            </p>
          </div>
        </section>

        {/* WORKFLOW */}
        <section className="mt-28">
          <div className="mx-auto max-w-4xl text-center">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#9b7416]">
              Çalışma Modeli
            </span>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-[#1f2a1f]">
              Hız, doğruluk ve sürdürülebilirlik üzerine kurulu süreç.
            </h2>

            <p className="mt-6 text-base leading-8 text-[#5f6f5f]">
              DRC Teknik’in çalışma modeli, hız, doğruluk ve sürdürülebilirlik üzerine kuruludur:
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-5">
            {workflow.map(([title, desc], index) => (
              <div
                key={title}
                className="relative rounded-[28px] border border-[#e3eadf] bg-white/85 p-6 shadow-sm"
              >
                <span className="text-xs font-semibold text-[#9b7416]">
                  0{index + 1}
                </span>

                <h3 className="mt-8 text-xl font-semibold tracking-[-0.03em] text-[#1f2a1f]">
                  {title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#6b7b6b]">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FINAL */}
        <section className="mt-28 rounded-[40px] border border-[#e3eadf] bg-white/80 p-8 shadow-[0_24px_80px_rgba(31,42,31,0.06)] sm:p-12 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#1f2a1f] sm:text-4xl">
              Uzun vadeli verimlilik için teknik güvence.
            </h2>

            <p className="text-base leading-8 text-[#5f6f5f]">
              Bu yapı sayesinde yalnızca problemi çözmekle kalmaz, aynı zamanda sistemin uzun vadeli verimliliğini garanti altına alırız.
            </p>
          </div>
        </section>

        <div className="mt-28">
          <CorporateValuesTabs />
        </div>
      </section>
    </main>
  );
};

export default AboutUsPage;
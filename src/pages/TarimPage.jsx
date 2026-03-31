import { Link } from "react-router-dom";
import {
  IconTractor,
  IconMapPinCog,
  IconChartBar,
  IconCpu,
  IconTool,
  IconSettings,
  IconShieldCheck,
  IconHeadset,
  IconArrowRight,
  IconCheck,
} from "@tabler/icons-react";

const solutionCards = [
  {
    id: 1,
    title: "Otomatik Dümenleme Sistemleri",
    description:
      "Hassas yönlendirme çözümleri ile ekim, ilaçlama ve hasat süreçlerinde doğruluk ve verimlilik sağlar.",
    icon: IconTractor,
  },
  {
    id: 2,
    title: "GPS Tabanlı Tarım Çözümleri",
    description:
      "Konum doğruluğunu artıran sistemlerle tarımsal operasyonlarınızı daha kontrollü ve planlı yönetin.",
    icon: IconMapPinCog,
  },
  {
    id: 3,
    title: "Verim ve Alan Analizi",
    description:
      "Saha verilerini yorumlayarak daha bilinçli kararlar almanıza yardımcı olan analiz altyapıları sunar.",
    icon: IconChartBar,
  },
  {
    id: 4,
    title: "Kontrol ve Yönetim Sistemleri",
    description:
      "Makine ve ekipman süreçlerini tek merkezden daha verimli şekilde takip etmenizi destekler.",
    icon: IconCpu,
  },
];

const serviceCards = [
  {
    id: 1,
    title: "Yetkili Servis Desteği",
    description:
      "Topcon sistemlerine uygun bakım, kontrol ve teknik destek süreçleri profesyonel şekilde yürütülür.",
    icon: IconTool,
  },
  {
    id: 2,
    title: "Kurulum ve Entegrasyon",
    description:
      "Sistemlerin sahaya uygun şekilde kurulumu ve operasyonel süreçlere entegrasyonu sağlanır.",
    icon: IconSettings,
  },
  {
    id: 3,
    title: "Güvenilir Teknik Yaklaşım",
    description:
      "Cihaz güvenliği, doğru uygulama ve sürdürülebilir kullanım için kontrollü teknik hizmet sunulur.",
    icon: IconShieldCheck,
  },
  {
    id: 4,
    title: "Satış Sonrası Destek",
    description:
      "İhtiyaç duyulan durumlarda kullanıcıya hızlı geri dönüş ve yönlendirme desteği verilir.",
    icon: IconHeadset,
  },
];

const advantages = [
  "Yüksek hassasiyetli tarım teknolojileri",
  "Sahada verimliliği artıran sistem yaklaşımı",
  "Profesyonel teknik destek ve servis altyapısı",
  "Modern tarım uygulamalarına uygun çözüm yapısı",
  "Kurulum, bakım ve kullanım süreçlerinde uzman destek",
  "Uzun ömürlü ve güvenilir kullanım hedefi",
];

const TarimPage = () => {
  return (
    <main className="w-full bg-[#f8fafc]">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#0f172a_0%,#1e3a5f_35%,#4f6f88_68%,#dbe3ea_100%)]">
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.35),transparent_45%)]"></div>
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(120deg,rgba(255,255,255,0.28)_0%,rgba(255,255,255,0.08)_25%,rgba(255,255,255,0)_45%,rgba(255,255,255,0.18)_70%,rgba(255,255,255,0.05)_100%)]"></div>

        <div className="relative mx-auto flex min-h-[520px] w-full max-w-7xl flex-col justify-center px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm sm:text-sm">
              Topcon Agriculture
            </span>

            <h1 className="mb-6 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Modern Tarım İçin Akıllı ve Güvenilir Çözümler
            </h1>

            <p className="max-w-2xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
              Topcon Agriculture sistemleri; hassas tarım uygulamaları,
              verimlilik odaklı saha yönetimi ve kontrollü operasyon süreçleri
              için güçlü bir teknoloji altyapısı sunar. DRC Teknik olarak bu
              çözümlerin tanıtım, yönlendirme ve teknik destek süreçlerinde
              profesyonel destek sağlıyoruz.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/iletisim"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#111827] transition hover:scale-[1.02]"
              >
                İletişime Geç
              </Link>

              <Link
                to="/urunler"
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/15]"
              >
                Ürünleri İncele
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* KISA TANITIM */}
      <section className="w-full bg-white py-14 sm:py-16">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div>
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
              Hassas Tarım Teknolojileri
            </span>

            <h2 className="mb-5 text-3xl font-semibold text-[#111827] sm:text-4xl">
              Tarımsal operasyonlarda doğruluk, verimlilik ve kontrol
            </h2>

            <p className="text-base leading-8 text-gray-600">
              Topcon Agriculture çözümleri; arazi yönetiminden ekipman
              kontrolüne, hassas yönlendirmeden veri odaklı karar süreçlerine
              kadar geniş bir kullanım alanı sunar. Bu yapı sayesinde tarımsal
              operasyonlar daha kontrollü, daha planlı ve daha verimli şekilde
              yönetilebilir.
            </p>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-[#f8fafc] p-7 shadow-sm">
            <h3 className="mb-5 text-xl font-semibold text-[#111827]">
              Neden Topcon Agriculture?
            </h3>

            <div className="space-y-3">
              {advantages.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                    <IconCheck size={14} />
                  </span>
                  <p className="text-sm leading-7 text-gray-600 sm:text-base">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ÇÖZÜMLER */}
      <section className="w-full bg-[#f3f7fb] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center sm:mb-12">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
              Çözüm Alanları
            </span>

            <h2 className="mb-4 text-3xl font-semibold text-[#111827] sm:text-4xl">
              Tarımda teknoloji odaklı çözüm yaklaşımı
            </h2>

            <p className="mx-auto max-w-3xl text-base leading-8 text-gray-600">
              Farklı operasyon ihtiyaçlarına yönelik geliştirilen Topcon
              Agriculture sistemleri, hassasiyet ve sürdürülebilir verimlilik
              odaklı bir yapı sunar.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {solutionCards.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.id}
                  className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                    <Icon size={28} />
                  </div>

                  <h3 className="mb-3 text-xl font-semibold text-[#111827]">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-7 text-gray-600 sm:text-base">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SERVİS & DESTEK */}
      <section className="w-full bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center sm:mb-12">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
              Servis ve Teknik Destek
            </span>

            <h2 className="mb-4 text-3xl font-semibold text-[#111827] sm:text-4xl">
              Satış sonrası süreçlerde profesyonel yaklaşım
            </h2>

            <p className="mx-auto max-w-3xl text-base leading-8 text-gray-600">
              DRC Teknik olarak tarım teknolojilerinde yalnızca ürün değil,
              devam eden kullanım sürecinde de güvenilir bir destek yapısı
              sunmayı hedefliyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {serviceCards.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.id}
                  className="rounded-[28px] bg-[linear-gradient(135deg,#f8fbff_0%,#eef4fa_100%)] p-7 shadow-sm ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-slate-800 shadow-sm">
                    <Icon size={28} />
                  </div>

                  <h3 className="mb-3 text-xl font-semibold text-[#111827]">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-7 text-gray-600 sm:text-base">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-[#0f172a] py-14 sm:py-16">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
          <span className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
            İletişim
          </span>

          <h2 className="mb-4 text-3xl font-semibold text-white sm:text-4xl">
            Topcon Agriculture hakkında detaylı bilgi almak ister misiniz?
          </h2>

          <p className="mx-auto mb-8 max-w-3xl text-base leading-8 text-white/75">
            Tarım teknolojileri, sistem çözümleri ve teknik destek süreçleri
            hakkında daha fazla bilgi almak için bizimle iletişime geçebilirsiniz.
          </p>

          <Link
            to="/iletisim"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#111827] transition hover:scale-[1.02]"
          >
            Bizimle İletişime Geçin
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              <IconArrowRight size={18} />
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default TarimPage;
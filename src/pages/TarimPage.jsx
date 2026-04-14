import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
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
  IconLeaf,
  IconSpray,
  IconPlant2,
  IconSatellite,
  IconCloudDataConnection,
  IconDeviceAnalytics,
  IconMap2,
  IconRoute,
  IconDroplet,
  IconBinaryTree2,
} from "@tabler/icons-react";

const solutionCards = [
  {
    id: 1,
    title: "Otomatik Dümenleme Sistemleri",
    description:
      "Hassas GPS destekli otomatik yönlendirme ile ekim, ilaçlama ve hasat süreçlerinde maksimum doğruluk ve operasyonel verimlilik sağlar.",
    icon: IconTractor,
    image: "/agriculture/autosteer.jpeg",
  },
  {
    id: 2,
    title: "GPS Tabanlı Tarım Çözümleri",
    description:
      "GNSS ve RTK destekli sistemlerle santimetre seviyesinde konum doğruluğu sağlayarak tarımsal operasyonların daha kontrollü ve planlı yürütülmesine imkan tanır.",
    icon: IconMapPinCog,
    image: "/agriculture/gps-tarim.jpeg",
  },
  {
    id: 3,
    title: "Verim ve Alan Analizi",
    description:
      "Saha verilerini analiz ederek ürün performansı, verimlilik ve kaynak kullanımı hakkında doğru ve ölçülebilir kararlar alınmasını destekler.",
    icon: IconChartBar,
    image: "/agriculture/verim-analizi.jpeg",
  },
  {
    id: 4,
    title: "Kontrol ve Yönetim Sistemleri",
    description:
      "Makine, ekipman ve saha süreçlerini merkezi olarak yönetmenizi sağlayan kontrol sistemleri ile operasyonel takip ve verimlilik artırılır.",
    icon: IconCpu,
    image: "/agriculture/kontrol-sistemleri.jpg",
  },
];

const serviceCards = [
  {
    id: 1,
    title: "Yetkili Servis Desteği",
    description:
      "Topcon sistemlerine uygun bakım, kalibrasyon ve teknik destek süreçleri uzman ekipler tarafından profesyonel şekilde yürütülür.",
    icon: IconTool,
    image: "/agriculture/servis.jpg",
  },
  {
    id: 2,
    title: "Kurulum ve Entegrasyon",
    description:
      "Sistemlerin sahaya uygun şekilde kurulumu, yapılandırılması ve mevcut operasyon süreçlerine entegrasyonu güvenli biçimde sağlanır.",
    icon: IconSettings,
    image: "/agriculture/entegrasyon.jpg",
  },
  {
    id: 3,
    title: "Güvenilir Teknik Yaklaşım",
    description:
      "Cihaz güvenliği, doğru uygulama ve sürdürülebilir kullanım için kontrollü, planlı ve uzun vadeli teknik hizmet sunulur.",
    icon: IconShieldCheck,
    image: "/agriculture/guvenilir-teknik.jpg",
  },
  {
    id: 4,
    title: "servis Sonrası Destek",
    description:
      "İhtiyaç duyulan durumlarda kullanıcıya hızlı geri dönüş, yönlendirme ve operasyon devamlılığını destekleyen çözüm yaklaşımı sunulur.",
    icon: IconHeadset,
    image: "/agriculture/satis-sonrasi.jpg",
  },
];

const advantages = [
  "RTK destekli yüksek hassasiyetli konumlandırma",
  "Otomatik dümenleme ile minimum hata payı",
  "Veri odaklı tarım yönetimi ve analiz altyapısı",
  "Tüm tarım süreçlerini kapsayan entegre çözüm yapısı",
  "Farklı marka makinelerle uyumlu sistem mimarisi",
  "Yakıt, zaman ve girdi maliyetlerinde tasarruf",
];

const cycleCards = [
  {
    id: 1,
    title: "Toprak Hazırlığı",
    description:
      "Tarla hazırlık sürecinde yönlendirme ve hassas konumlandırma desteği ile operasyonlar daha planlı ve daha verimli yürütülür.",
    icon: IconTractor,
    image: "/agriculture/toprak-hazirligi.jpeg",
  },
  {
    id: 2,
    title: "Ekim ve Dikim",
    description:
      "Seeding ve planting süreçlerinde sıra doğruluğu, tekrarın azaltılması ve makine verimliliği için hassas tarım teknolojileri devreye girer.",
    icon: IconLeaf,
    image: "/agriculture/ekim-dikim.jpeg",
  },
{
  id: 3,
  title: "İlaçlama ve Girdi Yönetimi",
  description:
    "İlaçlama ve gübre uygulamalarında hassas tarım teknolojileri sayesinde doğru miktarda ve doğru alanda uygulama yapılarak kaynak kullanımı optimize edilir.",
  icon: IconSpray,
  image: "/agriculture/urun-bakim.jpeg",
},
{
  id: 4,
  title: "Hasat ve Verim Takibi",
  description:
    "Hasat aşamasında yield monitoring ve veri kaydı ile ürün performansı daha net izlenebilir ve sonraki kararlar daha güçlü temellere oturur.",
  icon: IconPlant2,
  image: "/agriculture/hasat-verim.jpeg",
},
];

const dataFlow = [
  {
    id: 1,
    title: "Kabin İçi Kontrol",
    description:
      "Konsollar ve kontrol ekranları ile operatör sahadaki uygulamaları tek merkezden izleyebilir ve yönetebilir.",
    icon: IconDeviceAnalytics,
  },
  {
    id: 2,
    title: "Veri Aktarımı",
    description:
      "Sahadan alınan veriler uygun cihaz altyapısı ile dijital platformlara aktarılabilir ve süreç takibi kolaylaşır.",
    icon: IconCloudDataConnection,
  },
  {
    id: 3,
    title: "Analiz ve Karar",
    description:
      "Verilerin platform üzerinde organize edilmesi, görselleştirilmesi ve değerlendirilmesi sayesinde daha bilinçli tarım kararları alınabilir.",
    icon: IconChartBar,
  },
];

const benefitStats = [
  {
    id: 1,
    value: "%5–10",
    label:
      "Daha az yakıt, gübre ve ilaç kullanımı ile operasyon maliyetlerinde düşüş sağlanabilir.",
  },
  {
    id: 2,
    value: "1 Sezon",
    label:
      "Doğru kullanımda sistem yatırımının kısa sürede geri dönüş sağlaması mümkündür.",
  },
  {
    id: 3,
    value: "Tüm Süreç",
    label:
      "Toprak hazırlığından hasada kadar tüm tarımsal operasyonlar tek sistem üzerinden yönetilebilir.",
  },
];

const insightParagraphs = [
  {
    id: 1,
    icon: IconMap2,
    title: "Daha planlı saha yönetimi",
    text: "Konum doğruluğu ve yönlendirme desteği sayesinde tarla içindeki geçişler daha düzenli hale gelir. Bu yapı; çakışma, boşluk ve gereksiz tekrarların azaltılmasına yardımcı olur.",
  },
  {
    id: 2,
    icon: IconRoute,
    title: "Operasyon akışında netlik",
    text: "Ekimden ilaçlamaya, bakım uygulamalarından hasada kadar farklı aşamaların kontrollü ilerlemesi; günlük iş planlarının daha sistemli ve daha öngörülebilir olmasını destekler.",
  },
  {
    id: 3,
    icon: IconDroplet,
    title: "Girdi kullanımında denge",
    text: "Gübre, ilaç ve benzeri uygulamaların doğru alanlarda ve doğru düzenle yürütülmesi; hem maliyet kontrolü hem de kaynak verimliliği açısından daha dengeli bir yapı sunar.",
  },
  {
    id: 4,
    icon: IconBinaryTree2,
    title: "Veriyle güçlenen kararlar",
    text: "Sahadan toplanan bilgilerin analiz edilmesi, yalnızca bugünkü operasyonu değil sonraki dönem planlamasını da daha bilinçli hale getirir. Böylece teknoloji yalnızca uygulamada değil karar sürecinde de aktif rol oynar.",
  },
];

function useInView(options = { threshold: 0.2 }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, options);

    observer.observe(el);

    return () => observer.disconnect();
  }, [options]);

  return [ref, isVisible];
}

const Reveal = ({
  children,
  direction = "up",
  delay = 0,
  className = "",
}) => {
  const [ref, isVisible] = useInView();

  const variants = {
    left: "translate-x-[-60px]",
    right: "translate-x-[60px]",
    up: "translate-y-[50px]",
    down: "translate-y-[-50px]",
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${className} ${
        isVisible ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${variants[direction]}`
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const ScaleImage = ({ src, alt, className = "", overlayClass = "" }) => {
  const [ref, isVisible] = useInView();

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        className={`h-full w-full object-cover transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isVisible ? "scale-100 opacity-100" : "scale-[1.16] opacity-0"
        }`}
      />
      {overlayClass ? <div className={`absolute inset-0 ${overlayClass}`} /> : null}
    </div>
  );
};

const TarimPage = () => {
  return (
    <main className="w-full bg-[#f8fafc]">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#0f172a_0%,#1e3a5f_35%,#4f6f88_68%,#dbe3ea_100%)]">
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.35),transparent_45%)]"></div>
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(120deg,rgba(255,255,255,0.28)_0%,rgba(255,255,255,0.08)_25%,rgba(255,255,255,0)_45%,rgba(255,255,255,0.18)_70%,rgba(255,255,255,0.05)_100%)]"></div>

        <div className="relative mx-auto flex min-h-[520px] w-full max-w-7xl flex-col justify-center px-4 py-20 sm:px-6 lg:px-8">
          <Reveal direction="left" className="max-w-3xl">
            <span className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm sm:text-sm">
              Topcon Agriculture
            </span>

            <h1 className="mb-6 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Modern Tarım İçin Akıllı ve Güvenilir Çözümler
            </h1>

            <p className="max-w-2xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
              Topcon Agriculture sistemleri; hassas tarım uygulamaları, makine
              otomasyonu ve veri odaklı saha yönetimi ile tarımsal
              operasyonların daha verimli, kontrollü ve sürdürülebilir şekilde
              yürütülmesini sağlar. DRC Teknik olarak bu çözümlerin servis,
              entegrasyon ve teknik destek süreçlerinde profesyonel hizmet
              sunuyoruz.
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
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/15"
              >
                Ürünleri İncele
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* KISA TANITIM */}
      <section className="w-full bg-white py-14 sm:py-16">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:items-center">
          <Reveal direction="left">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
              Hassas Tarım Teknolojileri
            </span>

            <h2 className="mb-5 text-3xl font-semibold text-[#111827] sm:text-4xl">
              Tarımsal operasyonlarda doğruluk, verimlilik ve kontrol
            </h2>

            <p className="text-base leading-8 text-gray-600">
              Topcon Agriculture çözümleri; arazi hazırlığından hasada kadar
              tüm tarımsal süreçleri kapsayan entegre bir teknoloji altyapısı
              sunar. GPS tabanlı yönlendirme sistemleri, sensör teknolojileri ve
              veri analiz araçları sayesinde saha operasyonları daha planlı,
              ölçülebilir ve verimli hale gelir.
            </p>
          </Reveal>

          <Reveal direction="right" delay={120}>
            <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-[#f8fafc] shadow-sm">
              <div className="h-[240px] w-full bg-slate-200">
                <ScaleImage
                  src="/agriculture/tarım-genel.jpeg"
                  alt="Topcon Agriculture tarım teknolojileri"
                  className="h-full w-full"
                />
              </div>

              <div className="p-7">
                <h3 className="mb-5 text-xl font-semibold text-[#111827]">
                  Neden Topcon Agriculture?
                </h3>

                <div className="space-y-3">
                  {advantages.map((item, index) => (
                    <Reveal key={index} direction="right" delay={index * 70}>
                      <div className="flex items-start gap-3">
                        <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                          <IconCheck size={14} />
                        </span>
                        <p className="text-sm leading-7 text-gray-600 sm:text-base">
                          {item}
                        </p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* YENİ SECTION 1 - TARIMSAL OPERASYON DÖNGÜSÜ */}
      <section className="w-full bg-[#f3f7fb] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-10 text-center sm:mb-12">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
              Tarımsal Operasyon Döngüsü
            </span>

            <h2 className="mb-4 text-3xl font-semibold text-[#111827] sm:text-4xl">
              Toprak hazırlığından hasada kadar bütünleşik süreç desteği
            </h2>

            <p className="mx-auto max-w-3xl text-base leading-8 text-gray-600">
              Topcon Agriculture yaklaşımı, tarımın yalnızca tek bir aşamasına
              değil; hazırlık, ekim, bakım ve hasat dahil olmak üzere tüm
              operasyon zincirine teknoloji desteği sağlamayı hedefler.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {cycleCards.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal
                  key={item.id}
                  direction={index % 2 === 0 ? "left" : "right"}
                  delay={index * 80}
                >
                  <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div className="h-44 w-full bg-slate-100">
                      <ScaleImage
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full"
                      />
                    </div>

                    <div className="p-7">
                      <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50 text-green-700">
                        <Icon size={28} />
                      </div>

                      <h3 className="mb-3 text-xl font-semibold text-[#111827]">
                        {item.title}
                      </h3>

                      <p className="text-sm leading-7 text-gray-600 sm:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ÇÖZÜMLER */}
      <section className="w-full bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-10 text-center sm:mb-12">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
              Çözüm Alanları
            </span>

            <h2 className="mb-4 text-3xl font-semibold text-[#111827] sm:text-4xl">
              Tarımda teknoloji odaklı çözüm yaklaşımı
            </h2>

            <p className="mx-auto max-w-3xl text-base leading-8 text-gray-600">
              Farklı operasyon ihtiyaçlarına yönelik geliştirilen Topcon
              Agriculture sistemleri, hassasiyet, otomasyon ve sürdürülebilir
              verimlilik odaklı bir yapı sunar.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {solutionCards.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal
                  key={item.id}
                  direction={index % 2 === 0 ? "left" : "right"}
                  delay={index * 80}
                >
                  <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                    {item.image && (
                      <div className="h-44 w-full bg-slate-100">
                        <ScaleImage
                          src={item.image}
                          alt={item.title}
                          className="h-full w-full"
                        />
                      </div>
                    )}

                    <div className="p-7">
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
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CROP MONITORING */}
<section className="w-full bg-white py-10 sm:py-12 lg:py-14">
  <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
    <Reveal direction="left">
      <div className="max-w-4xl">
        <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
          Crop Monitoring
        </span>

        <h2 className="mb-4 text-3xl font-semibold text-[#111827] sm:text-4xl">
          Crop Monitoring Nedir?
        </h2>

        <p className="text-base leading-8 text-justify text-gray-600 sm:text-lg">
          Crop monitoring, tarla içerisindeki ürün gelişiminin, bitki sağlığının
          ve saha koşullarının düzenli olarak izlenmesini sağlayan hassas tarım
          yaklaşımıdır. Bu sistem sayesinde üretim alanındaki değişimler daha
          erken fark edilir, verim üzerinde etkili olabilecek riskler daha hızlı
          değerlendirilir ve saha yönetimi daha kontrollü hale gelir.
        </p>

        <p className="mt-4 text-base leading-8 text-justify text-gray-600 sm:text-lg">
          Sensör verileri, uydu destekli izleme çözümleri ve saha analizleri ile
          desteklenen crop monitoring uygulamaları; sulama, gübreleme ve ilaçlama
          gibi işlemlerin daha doğru planlanmasına yardımcı olur. Böylece hem
          kaynak kullanımı optimize edilir hem de tarımsal operasyonlarda daha
          bilinçli karar alma imkanı sağlanır.
        </p>
      </div>
    </Reveal>
  </div>
</section>

      {/* YENİ EK - GEÇİŞLİ BÜYÜK GÖRSEL + YAZI */}
      <section className="w-full bg-[#eaf1f7] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:items-center">
          <Reveal direction="left">
            <div className="overflow-hidden rounded-[34px] border border-slate-200 bg-white shadow-xl">
              <div className="relative h-[300px] sm:h-[380px] lg:h-[520px]">
                <ScaleImage
                  src="/agriculture/precision-wide.jpeg"
                  alt="Hassas tarım teknolojileri"
                  className="h-full w-full"
                  overlayClass="bg-[linear-gradient(135deg,rgba(15,23,42,0.08),rgba(15,23,42,0.38))]"
                />
                <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.25),transparent_35%)]" />
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" delay={120}>
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
              Hassas Tarımın Yeni Dili
            </span>

            <h2 className="mb-5 text-3xl font-semibold text-[#111827] sm:text-4xl">
              Büyük sahalarda daha akıllı, daha dengeli ve daha takip edilebilir süreçler
            </h2>

            <p className="mb-5 text-base leading-8 text-gray-600">
              Modern tarımda yalnızca güçlü ekipman kullanmak yeterli değildir.
              Aynı zamanda doğru veriyle yönlendirilmiş, kontrollü ve ölçülebilir
              bir operasyon altyapısına ihtiyaç duyulur. Topcon yaklaşımı,
              tarımsal süreçleri yalnızca saha içinde değil planlama ve analiz
              tarafında da güçlendiren bir yapı sunar.
            </p>

            <p className="mb-6 text-base leading-8 text-gray-600">
              Hassas yönlendirme, crop monitoring, veri aktarımı ve yönetim
              bileşenleri birlikte çalıştığında; operatör deneyimi daha net,
              iş akışı daha düzenli ve sonuçlar daha karşılaştırılabilir hale gelir.
            </p>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                <p className="mb-1 text-2xl font-semibold text-[#111827]">Daha Net</p>
                <p className="text-sm leading-7 text-gray-600">
                  Operasyon görünürlüğü ve kontrol düzeyi artar.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                <p className="mb-1 text-2xl font-semibold text-[#111827]">Daha Planlı</p>
                <p className="text-sm leading-7 text-gray-600">
                  Saha içi geçişler ve iş akışı daha sistemli hale gelir.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

         {/* YENİ SECTION 2 - BAĞLANTILI VERİ AKIŞI */}
      <section className="w-full bg-[#0f172a] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            
<Reveal direction="left">
  <div className="overflow-hidden rounded-[30px] border border-white/10 bg-white/5 shadow-xl">
    <div className="h-[380px] sm:h-[460px] lg:h-[520px] w-full bg-slate-700">
      <ScaleImage
        src="/agriculture/veri-akisi.jpeg"
        alt="Topcon Agriculture veri akışı ve dijital tarım yönetimi"
        className="h-full w-full"
        overlayClass="bg-[linear-gradient(135deg,rgba(15,23,42,0.15),rgba(15,23,42,0.35))]"
      />
    </div>
  </div>
</Reveal>

            <Reveal direction="right" delay={120}>
              <div className="max-w-2xl lg:pl-4">
                <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
                  Dijital Tarım Süreci
                </span>

                <h2 className="mb-5 text-3xl font-semibold leading-tight text-white sm:text-4xl">
                  Sahadan ekrana, ekrandan analize uzanan bağlantılı yapı
                </h2>

                <p className="mb-8 text-base leading-8 text-white/75 sm:text-lg">
                  Tarımsal operasyon verilerinin yalnızca sahada kalmaması; doğru
                  şekilde toplanması, aktarılması ve değerlendirilmesi modern tarım
                  yönetiminin en önemli parçalarından biridir. Topcon yaklaşımı,
                  kabin içi kontrol sistemleri ile dijital karar altyapısını aynı
                  zincir içinde birleştirir.
                </p>

                <div className="space-y-3">
                  {dataFlow.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <Reveal
                        key={item.id}
                        direction="right"
                        delay={index * 100}
                      >
                        <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm">
                          <div className="mt-1 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-blue-200">
                            <Icon size={22} />
                          </div>

                          <div>
                            <h3 className="mb-1 text-lg font-semibold text-white">
                              {item.title}
                            </h3>

                            <p className="text-sm leading-7 text-white/70 sm:text-base">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </Reveal>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* YENİ EK - 4 PARAGRAFLIK 2X2 YAZI SECTION */}
      <section className="w-full bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-10 text-center sm:mb-12">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
              Akıllı Tarımın Sağladığı Denge
            </span>

            <h2 className="mb-4 text-3xl font-semibold text-[#111827] sm:text-4xl">
              Dört temel başlıkta güçlü saha yaklaşımı
            </h2>

            <p className="mx-auto max-w-3xl text-base leading-8 text-gray-600">
              Burada özellikle senin istediğin gibi iki satır iki sütun düzeninde,
              yoğun ama okunaklı bir metin yapısı oluşturdum.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {insightParagraphs.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal
                  key={item.id}
                  direction={index % 2 === 0 ? "left" : "right"}
                  delay={index * 100}
                >
                  <div className="h-full rounded-[28px] border border-slate-200 bg-[#f8fafc] p-7 shadow-sm">
                    <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                      <Icon size={28} />
                    </div>

                    <h3 className="mb-3 text-xl font-semibold text-[#111827]">
                      {item.title}
                    </h3>

                    <p className="text-base leading-8 text-gray-600">
                      {item.text}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* YENİ SECTION 3 - KAZANIMLAR / GEÇİŞLİ GÖRSEL BLOK */}
      <section className="w-full bg-[#f3f7fb] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-10 text-center sm:mb-12">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
              Neden Hassas Tarım?
            </span>

            <h2 className="mb-4 text-3xl font-semibold text-[#111827] sm:text-4xl">
              Daha az kayıpla daha fazla kontrol
            </h2>

            <p className="mx-auto max-w-3xl text-base leading-8 text-gray-600">
              Hassas konumlandırma, otomatik yönlendirme ve veri odaklı yönetim
              bir araya geldiğinde; zaman, yakıt, uygulama doğruluğu ve genel
              operasyon verimliliği açısından önemli avantajlar ortaya çıkar.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-stretch">
           <Reveal direction="left">
  <div className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-sm p-4 sm:p-5">
    
    <div className="flex flex-col gap-4">
      
      <div className="h-[220px] sm:h-[260px] lg:h-[300px] overflow-hidden rounded-2xl">
        <ScaleImage
          src="/agriculture/hassas-tarim-1.jpeg"
          alt="Hassas tarım uygulamaları"
          className="h-full w-full"
        />
      </div>

      <div className="h-[220px] sm:h-[260px] lg:h-[300px] overflow-hidden rounded-2xl">
        <ScaleImage
          src="/agriculture/hassas-tarim-2.jpeg"
          alt="Tarım makinelerinde otomasyon"
          className="h-full w-full"
          overlayClass="bg-[linear-gradient(135deg,rgba(15,23,42,0.05),rgba(15,23,42,0.2))]"
        />
      </div>

    </div>

    <div className="mt-6 border-t border-slate-200 pt-6">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
        <IconSatellite size={24} />
      </div>

      <h3 className="mb-3 text-xl font-semibold text-[#111827] sm:text-2xl">
        Kapsamlı saha görünürlüğü
      </h3>

      <p className="text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
        Konum verisi, makine yönetimi ve saha analitiği birlikte
        kullanıldığında daha öngörülebilir, daha kontrollü ve daha
        verimli bir operasyon yapısı oluşur.
      </p>
    </div>

  </div>
</Reveal>

            <Reveal direction="right" delay={120}>
              <div className="grid h-full grid-cols-1 gap-4">
                {benefitStats.map((item, index) => (
                  <Reveal key={item.id} direction="right" delay={index * 100}>
                    <div className="rounded-[26px] border border-slate-200 bg-white p-6 sm:p-7 shadow-sm">
                      <p className="mb-2 text-3xl font-semibold text-[#111827] sm:text-4xl">
                        {item.value}
                      </p>
                      <p className="text-sm leading-7 text-gray-600 sm:text-base">
                        {item.label}
                      </p>
                    </div>
                  </Reveal>
                ))}

                <Reveal direction="right" delay={280}>
                  <div className="rounded-[26px] bg-[linear-gradient(135deg,#eff6ff_0%,#dbeafe_100%)] p-6 sm:p-7 shadow-sm ring-1 ring-blue-100">
                    <h3 className="mb-3 text-xl font-semibold text-[#111827]">
                      Modüler ve uyumlu sistem yaklaşımı
                    </h3>
                    <p className="text-sm leading-7 text-gray-700 sm:text-base sm:leading-8">
                      Farklı makine ve operasyonlara uyarlanabilen modüler yapı,
                      sahadaki mevcut ekipmanlarla daha esnek entegrasyon imkanı
                      sunar. Bu sayede yatırım süreci daha kontrollü şekilde
                      planlanabilir.
                    </p>
                  </div>
                </Reveal>
              </div>
            </Reveal>
          </div>
        </div>
      </section>


           {/* SERVİS & DESTEK */}
      <section className="w-full bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-10 text-center sm:mb-12">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
              Servis ve Teknik Destek
            </span>

            <h2 className="mb-4 text-3xl font-semibold text-[#111827] sm:text-4xl">
              Servis sonrası süreçlerde profesyonel yaklaşım
            </h2>

            <p className="mx-auto max-w-3xl text-base leading-8 text-gray-600">
              DRC Teknik olarak tarım teknolojilerinde yalnızca ürün değil,
              kurulumdan kullanım sonrasına kadar uzanan süreçte de güvenilir ve
              sürdürülebilir bir destek yapısı sunmayı hedefliyoruz.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {serviceCards.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal
                  key={item.id}
                  direction={index % 2 === 0 ? "left" : "right"}
                  delay={index * 80}
                >
                  <div className="group overflow-hidden rounded-[28px] bg-[linear-gradient(135deg,#f8fbff_0%,#eef4fa_100%)] shadow-sm ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                    
                    <div className="p-7">
                      <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-slate-800 shadow-sm transition group-hover:shadow-md">
                        <Icon size={28} />
                      </div>

                      <h3 className="mb-3 text-xl font-semibold text-[#111827]">
                        {item.title}
                      </h3>

                      <p className="text-sm leading-7 text-gray-600 sm:text-base">
                        {item.description}
                      </p>
                    </div>

                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-[#0f172a] py-14 sm:py-16">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
          <Reveal className="flex flex-col items-center">
            <span className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
              İletişim
            </span>

            <h2 className="mb-4 text-3xl font-semibold text-white sm:text-4xl">
              Topcon Agriculture hakkında detaylı bilgi almak ister misiniz?
            </h2>

            <p className="mx-auto mb-8 max-w-3xl text-base leading-8 text-white/75">
              Tarım teknolojileri, hassas tarım çözümleri ve Topcon sistemleri
              hakkında detaylı bilgi almak için bizimle iletişime geçebilirsiniz.
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
          </Reveal>
        </div>
      </section>
    </main>
  );
};

export default TarimPage;
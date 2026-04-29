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
      "GPS destekli otomatik yönlendirme ile ekim, ilaçlama ve hasat süreçlerinde yüksek doğruluk sağlar.",
    icon: IconTractor,
    image: "/agriculture/autosteer.jpeg",
  },
  {
    id: 2,
    title: "GPS Tabanlı Tarım Çözümleri",
    description:
      "GNSS ve RTK destekli sistemlerle saha operasyonlarının daha kontrollü yürütülmesine yardımcı olur.",
    icon: IconMapPinCog,
    image: "/agriculture/gps-tarim.jpeg",
  },
  {
    id: 3,
    title: "Verim ve Alan Analizi",
    description:
      "Saha verilerini analiz ederek ürün performansı ve kaynak kullanımı hakkında karar desteği sunar.",
    icon: IconChartBar,
    image: "/agriculture/verim-analizi.jpeg",
  },
  {
    id: 4,
    title: "Kontrol ve Yönetim Sistemleri",
    description:
      "Makine, ekipman ve saha süreçlerini daha kolay izlenebilir ve yönetilebilir hale getirir.",
    icon: IconCpu,
    image: "/agriculture/kontrol-sistemleri.jpg",
  },
];

const serviceCards = [
  {
    id: 1,
    title: "Yetkili Servis Desteği",
    description:
      "Bakım, kalibrasyon ve teknik destek süreçleri uzman ekipler tarafından yürütülür.",
    icon: IconTool,
  },
  {
    id: 2,
    title: "Kurulum ve Entegrasyon",
    description:
      "Sistemlerin sahaya uygun kurulumu ve mevcut iş süreçlerine entegrasyonu sağlanır.",
    icon: IconSettings,
  },
  {
    id: 3,
    title: "Güvenilir Teknik Yaklaşım",
    description:
      "Doğru kullanım, cihaz güvenliği ve uzun vadeli performans için planlı destek sunulur.",
    icon: IconShieldCheck,
  },
  {
    id: 4,
    title: "Servis Sonrası Destek",
    description:
      "İhtiyaç duyulan durumlarda hızlı yönlendirme ve teknik çözüm yaklaşımı sağlanır.",
    icon: IconHeadset,
  },
];

const advantages = [
  "RTK destekli hassas konumlandırma",
  "Otomatik dümenleme ile daha az hata",
  "Veri odaklı saha yönetimi",
  "Farklı makinelerle uyumlu yapı",
  "Yakıt, zaman ve girdi tasarrufu",
];

const cycleCards = [
  {
    id: 1,
    title: "Toprak Hazırlığı",
    description:
      "Yönlendirme ve hassas konumlandırma desteği ile hazırlık süreci daha planlı yürütülür.",
    icon: IconTractor,
    image: "/agriculture/toprak-hazirligi.jpeg",
  },
  {
    id: 2,
    title: "Ekim ve Dikim",
    description:
      "Sıra doğruluğu ve tekrarın azaltılması için hassas tarım teknolojileri devreye girer.",
    icon: IconLeaf,
    image: "/agriculture/ekim-dikim.jpeg",
  },
  {
    id: 3,
    title: "İlaçlama ve Girdi Yönetimi",
    description:
      "Doğru miktarda ve doğru alanda uygulama yapılarak kaynak kullanımı optimize edilir.",
    icon: IconSpray,
    image: "/agriculture/urun-bakim.jpeg",
  },
  {
    id: 4,
    title: "Hasat ve Verim Takibi",
    description:
      "Veri kaydı ve izleme desteği ile ürün performansı daha net değerlendirilebilir.",
    icon: IconPlant2,
    image: "/agriculture/hasat-verim.jpeg",
  },
];

const dataFlow = [
  {
    id: 1,
    title: "Kabin İçi Kontrol",
    description:
      "Operatör saha uygulamalarını tek merkezden izleyebilir ve yönetebilir.",
    icon: IconDeviceAnalytics,
  },
  {
    id: 2,
    title: "Veri Aktarımı",
    description:
      "Saha verileri dijital platformlara aktarılır ve süreç takibi kolaylaşır.",
    icon: IconCloudDataConnection,
  },
  {
    id: 3,
    title: "Analiz ve Karar",
    description:
      "Toplanan veriler daha bilinçli tarım kararları alınmasına destek olur.",
    icon: IconChartBar,
  },
];

const benefitStats = [
  {
    id: 1,
    value: "%5–10",
    label: "Yakıt, gübre ve ilaç kullanımında tasarruf sağlanabilir.",
  },
  {
    id: 2,
    value: "1 Sezon",
    label: "Doğru kullanımda yatırım geri dönüşü hızlanabilir.",
  },
  {
    id: 3,
    value: "Tüm Süreç",
    label: "Toprak hazırlığından hasada kadar operasyonlar yönetilebilir.",
  },
];

const insightParagraphs = [
  {
    id: 1,
    icon: IconMap2,
    title: "Planlı saha yönetimi",
    text: "Konum doğruluğu ve yönlendirme desteği, tarla içi geçişlerin daha düzenli yapılmasına yardımcı olur.",
  },
  {
    id: 2,
    icon: IconRoute,
    title: "Net operasyon akışı",
    text: "Ekimden hasada kadar farklı aşamaların kontrollü ilerlemesi günlük iş planlarını daha öngörülebilir hale getirir.",
  },
  {
    id: 3,
    icon: IconDroplet,
    title: "Dengeli girdi kullanımı",
    text: "Gübre, ilaç ve benzeri uygulamaların doğru alanda yapılması kaynak kullanımını daha verimli hale getirir.",
  },
  {
    id: 4,
    icon: IconBinaryTree2,
    title: "Veriyle karar alma",
    text: "Sahadan toplanan bilgilerin analiz edilmesi sonraki dönem planlamasını daha bilinçli hale getirir.",
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

const Reveal = ({ children, direction = "up", delay = 0, className = "" }) => {
  const [ref, isVisible] = useInView();

  const variants = {
    left: "translate-x-[-40px]",
    right: "translate-x-[40px]",
    up: "translate-y-[35px]",
    down: "translate-y-[-35px]",
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${className} ${
        isVisible
          ? "opacity-100 translate-x-0 translate-y-0"
          : `opacity-0 ${variants[direction]}`
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
        className={`h-full w-full object-cover transition-all duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isVisible ? "scale-100 opacity-100" : "scale-[1.1] opacity-0"
        }`}
      />
      {overlayClass ? (
        <div className={`absolute inset-0 ${overlayClass}`} />
      ) : null}
    </div>
  );
};

const TarimPage = () => {
  return (
    <main className="w-full bg-[#f8fafc]">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#0f172a_0%,#1e3a5f_38%,#6f879b_100%)]">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.35),transparent_45%)]"></div>

        <div className="relative mx-auto flex min-h-[330px] w-full max-w-7xl flex-col justify-center px-4 py-10 sm:min-h-[360px] sm:px-6 lg:min-h-[390px] lg:px-8">
          <Reveal direction="left" className="max-w-2xl">
            <span className="mb-3 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm">
              Topcon Agriculture
            </span>

            <h1 className="mb-4 text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-[44px]">
              Modern Tarım İçin Akıllı ve Güvenilir Çözümler
            </h1>

            <p className="max-w-xl text-sm leading-6 text-white/85 sm:text-base sm:leading-7">
              Topcon Agriculture sistemleri; hassas tarım uygulamaları, makine
              otomasyonu ve veri odaklı saha yönetimi ile tarımsal operasyonların
              daha verimli ve kontrollü yürütülmesini sağlar.
            </p>
          </Reveal>
        </div>
      </section>

      {/* KISA TANITIM */}
      <section className="w-full bg-white py-10 sm:py-12">
        <div className="mx-auto grid w-full max-w-7xl gap-7 px-4 sm:px-6 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:px-8">
          <Reveal direction="left">
            <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
              Hassas Tarım Teknolojileri
            </span>

            <h2 className="mb-4 text-2xl font-semibold text-[#111827] sm:text-3xl">
              Tarımsal operasyonlarda doğruluk, verimlilik ve kontrol
            </h2>

            <p className="text-sm leading-7 text-gray-600 sm:text-base">
              Topcon Agriculture çözümleri; arazi hazırlığından hasada kadar
              saha süreçlerini daha planlı, ölçülebilir ve verimli hale getiren
              entegre bir teknoloji altyapısı sunar.
            </p>
          </Reveal>

          <Reveal direction="right" delay={100}>
            <div className="overflow-hidden rounded-[24px] border border-slate-200 bg-[#f8fafc] shadow-sm">
              <div className="h-[190px] w-full bg-slate-200 sm:h-[220px]">
                <ScaleImage
                  src="/agriculture/tarım-genel.jpeg"
                  alt="Topcon Agriculture tarım teknolojileri"
                  className="h-full w-full"
                />
              </div>

              <div className="p-5 sm:p-6">
                <h3 className="mb-4 text-lg font-semibold text-[#111827]">
                  Neden Topcon Agriculture?
                </h3>

                <div className="space-y-2.5">
                  {advantages.map((item, index) => (
                    <Reveal key={index} direction="right" delay={index * 50}>
                      <div className="flex items-start gap-2.5">
                        <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                          <IconCheck size={13} />
                        </span>
                        <p className="text-sm leading-6 text-gray-600">
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

      {/* TARIMSAL OPERASYON DÖNGÜSÜ */}
      <section className="w-full bg-[#f3f7fb] py-10 sm:py-12">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-8 text-center">
            <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
              Tarımsal Operasyon Döngüsü
            </span>

            <h2 className="mb-3 text-2xl font-semibold text-[#111827] sm:text-3xl">
              Topraktan hasada bütünleşik süreç desteği
            </h2>

            <p className="mx-auto max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
              Hazırlık, ekim, bakım ve hasat aşamalarında teknoloji destekli
              daha düzenli bir saha yönetimi sağlar.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {cycleCards.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal
                  key={item.id}
                  direction={index % 2 === 0 ? "left" : "right"}
                  delay={index * 60}
                >
                  <div className="overflow-hidden rounded-[22px] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
                    <div className="h-36 w-full bg-slate-100">
                      <ScaleImage
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full"
                      />
                    </div>

                    <div className="p-5">
                      <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-green-700">
                        <Icon size={23} />
                      </div>

                      <h3 className="mb-2 text-lg font-semibold text-[#111827]">
                        {item.title}
                      </h3>

                      <p className="text-sm leading-6 text-gray-600">
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
      <section className="w-full bg-white py-10 sm:py-12">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-8 text-center">
            <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
              Çözüm Alanları
            </span>

            <h2 className="mb-3 text-2xl font-semibold text-[#111827] sm:text-3xl">
              Tarımda teknoloji odaklı çözüm yaklaşımı
            </h2>

            <p className="mx-auto max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
              Hassasiyet, otomasyon ve sürdürülebilir verimlilik için farklı
              operasyon ihtiyaçlarına yönelik çözümler sunar.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {solutionCards.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal
                  key={item.id}
                  direction={index % 2 === 0 ? "left" : "right"}
                  delay={index * 60}
                >
                  <div className="overflow-hidden rounded-[22px] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
                    <div className="h-36 w-full bg-slate-100">
                      <ScaleImage
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full"
                      />
                    </div>

                    <div className="p-5">
                      <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                        <Icon size={23} />
                      </div>

                      <h3 className="mb-2 text-lg font-semibold text-[#111827]">
                        {item.title}
                      </h3>

                      <p className="text-sm leading-6 text-gray-600">
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
      <section className="w-full bg-[#f8fafc] py-10 sm:py-12">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal direction="left">
            <div className="max-w-4xl rounded-[26px] border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
              <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                Crop Monitoring
              </span>

              <h2 className="mb-4 text-2xl font-semibold text-[#111827] sm:text-3xl">
                Crop Monitoring Nedir?
              </h2>

              <div className="grid gap-4 md:grid-cols-2">
                <p className="text-sm leading-7 text-justify text-gray-600 sm:text-base">
                  Crop monitoring, tarla içerisindeki ürün gelişiminin, bitki
                  sağlığının ve saha koşullarının düzenli olarak izlenmesini
                  sağlayan hassas tarım yaklaşımıdır.
                </p>

                <p className="text-sm leading-7 text-justify text-gray-600 sm:text-base">
                  Sensör verileri, uydu destekli izleme çözümleri ve saha
                  analizleri ile sulama, gübreleme ve ilaçlama süreçleri daha
                  doğru planlanabilir.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* GÖRSEL + YAZI */}
      <section className="w-full bg-[#eaf1f7] py-10 sm:py-12">
        <div className="mx-auto grid w-full max-w-7xl gap-7 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-8">
          <Reveal direction="left">
            <div className="overflow-hidden rounded-[26px] border border-slate-200 bg-white shadow-md">
              <div className="relative h-[240px] sm:h-[300px] lg:h-[360px]">
                <ScaleImage
                  src="/agriculture/precision-wide.jpeg"
                  alt="Hassas tarım teknolojileri"
                  className="h-full w-full"
                  overlayClass="bg-[linear-gradient(135deg,rgba(15,23,42,0.05),rgba(15,23,42,0.28))]"
                />
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" delay={100}>
            <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
              Hassas Tarımın Yeni Dili
            </span>

            <h2 className="mb-4 text-2xl font-semibold text-[#111827] sm:text-3xl">
              Büyük sahalarda daha takip edilebilir süreçler
            </h2>

            <p className="mb-4 text-sm leading-7 text-gray-600 sm:text-base">
              Doğru veriyle yönlendirilmiş, kontrollü ve ölçülebilir operasyon
              altyapısı modern tarımın temel ihtiyacıdır.
            </p>

            <p className="mb-5 text-sm leading-7 text-gray-600 sm:text-base">
              Hassas yönlendirme, crop monitoring ve veri yönetimi birlikte
              çalıştığında iş akışı daha düzenli hale gelir.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                <p className="mb-1 text-xl font-semibold text-[#111827]">
                  Daha Net
                </p>
                <p className="text-sm leading-6 text-gray-600">
                  Operasyon görünürlüğü artar.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                <p className="mb-1 text-xl font-semibold text-[#111827]">
                  Daha Planlı
                </p>
                <p className="text-sm leading-6 text-gray-600">
                  İş akışı daha sistemli ilerler.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* BAĞLANTILI VERİ AKIŞI */}
      <section className="w-full bg-[#0f172a] py-10 sm:py-12">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-7 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <Reveal direction="left">
              <div className="overflow-hidden rounded-[26px] border border-white/10 bg-white/5 shadow-lg">
                <div className="h-[260px] w-full bg-slate-700 sm:h-[320px] lg:h-[360px]">
                  <ScaleImage
                    src="/agriculture/veri-akisi.jpeg"
                    alt="Topcon Agriculture veri akışı ve dijital tarım yönetimi"
                    className="h-full w-full"
                    overlayClass="bg-[linear-gradient(135deg,rgba(15,23,42,0.12),rgba(15,23,42,0.35))]"
                  />
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" delay={100}>
              <div className="max-w-2xl">
                <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
                  Dijital Tarım Süreci
                </span>

                <h2 className="mb-4 text-2xl font-semibold leading-tight text-white sm:text-3xl">
                  Sahadan ekrana, ekrandan analize uzanan yapı
                </h2>

                <p className="mb-5 text-sm leading-7 text-white/75 sm:text-base">
                  Tarımsal verilerin toplanması, aktarılması ve değerlendirilmesi
                  modern tarım yönetiminin önemli parçalarından biridir.
                </p>

                <div className="space-y-3">
                  {dataFlow.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <Reveal
                        key={item.id}
                        direction="right"
                        delay={index * 80}
                      >
                        <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm">
                          <div className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-blue-200">
                            <Icon size={20} />
                          </div>

                          <div>
                            <h3 className="mb-1 text-base font-semibold text-white">
                              {item.title}
                            </h3>

                            <p className="text-sm leading-6 text-white/70">
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

      {/* 4'LÜ BİLGİ */}
      <section className="w-full bg-white py-10 sm:py-12">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-8 text-center">
            <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
              Akıllı Tarımın Sağladığı Denge
            </span>

            <h2 className="mb-3 text-2xl font-semibold text-[#111827] sm:text-3xl">
              Dört temel başlıkta güçlü saha yaklaşımı
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {insightParagraphs.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal
                  key={item.id}
                  direction={index % 2 === 0 ? "left" : "right"}
                  delay={index * 70}
                >
                  <div className="h-full rounded-[22px] border border-slate-200 bg-[#f8fafc] p-5 shadow-sm">
                    <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                      <Icon size={23} />
                    </div>

                    <h3 className="mb-2 text-lg font-semibold text-[#111827]">
                      {item.title}
                    </h3>

                    <p className="text-sm leading-7 text-gray-600">
                      {item.text}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* KAZANIMLAR */}
      <section className="w-full bg-[#f3f7fb] py-10 sm:py-12">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-8 text-center">
            <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
              Neden Hassas Tarım?
            </span>

            <h2 className="mb-3 text-2xl font-semibold text-[#111827] sm:text-3xl">
              Daha az kayıpla daha fazla kontrol
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
            <Reveal direction="left">
              <div className="overflow-hidden rounded-[24px] border border-slate-200 bg-white p-4 shadow-sm">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="h-[210px] overflow-hidden rounded-2xl lg:h-[260px]">
                    <ScaleImage
                      src="/agriculture/hassas-tarim-1.jpeg"
                      alt="Hassas tarım uygulamaları"
                      className="h-full w-full"
                    />
                  </div>

                  <div className="h-[210px] overflow-hidden rounded-2xl lg:h-[260px]">
                    <ScaleImage
                      src="/agriculture/hassas-tarim-2.jpeg"
                      alt="Tarım makinelerinde otomasyon"
                      className="h-full w-full"
                      overlayClass="bg-[linear-gradient(135deg,rgba(15,23,42,0.05),rgba(15,23,42,0.2))]"
                    />
                  </div>
                </div>

                <div className="mt-5 border-t border-slate-200 pt-5">
                  <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                    <IconSatellite size={22} />
                  </div>

                  <h3 className="mb-2 text-xl font-semibold text-[#111827]">
                    Kapsamlı saha görünürlüğü
                  </h3>

                  <p className="text-sm leading-7 text-gray-600">
                    Konum verisi, makine yönetimi ve saha analitiği birlikte
                    kullanıldığında daha kontrollü ve verimli bir operasyon
                    yapısı oluşur.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" delay={100}>
              <div className="grid h-full grid-cols-1 gap-4">
                {benefitStats.map((item, index) => (
                  <Reveal key={item.id} direction="right" delay={index * 70}>
                    <div className="rounded-[22px] border border-slate-200 bg-white p-5 shadow-sm">
                      <p className="mb-1 text-2xl font-semibold text-[#111827] sm:text-3xl">
                        {item.value}
                      </p>
                      <p className="text-sm leading-6 text-gray-600">
                        {item.label}
                      </p>
                    </div>
                  </Reveal>
                ))}

                <Reveal direction="right" delay={220}>
                  <div className="rounded-[22px] bg-[linear-gradient(135deg,#eff6ff_0%,#dbeafe_100%)] p-5 shadow-sm ring-1 ring-blue-100">
                    <h3 className="mb-2 text-lg font-semibold text-[#111827]">
                      Modüler ve uyumlu sistem yaklaşımı
                    </h3>
                    <p className="text-sm leading-7 text-gray-700">
                      Farklı makine ve operasyonlara uyarlanabilen modüler yapı,
                      sahadaki mevcut ekipmanlarla daha esnek entegrasyon imkanı
                      sunar.
                    </p>
                  </div>
                </Reveal>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVİS & DESTEK */}
      <section className="w-full bg-white py-10 sm:py-12">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-8 text-center">
            <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
              Servis ve Teknik Destek
            </span>

            <h2 className="mb-3 text-2xl font-semibold text-[#111827] sm:text-3xl">
              Servis sonrası süreçlerde profesyonel yaklaşım
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {serviceCards.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal
                  key={item.id}
                  direction={index % 2 === 0 ? "left" : "right"}
                  delay={index * 60}
                >
                  <div className="group h-full rounded-[22px] bg-[linear-gradient(135deg,#f8fbff_0%,#eef4fa_100%)] p-5 shadow-sm ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-md">
                    <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white text-slate-800 shadow-sm transition group-hover:shadow-md">
                      <Icon size={23} />
                    </div>

                    <h3 className="mb-2 text-lg font-semibold text-[#111827]">
                      {item.title}
                    </h3>

                    <p className="text-sm leading-6 text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-[#0f172a] py-10 sm:py-12">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
          <Reveal className="flex flex-col items-center">
            <span className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
              İletişim
            </span>

            <h2 className="mb-3 text-2xl font-semibold text-white sm:text-3xl">
              Topcon Agriculture hakkında detaylı bilgi almak ister misiniz?
            </h2>

            <p className="mx-auto mb-6 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
              Tarım teknolojileri ve Topcon sistemleri hakkında detaylı bilgi
              almak için bizimle iletişime geçebilirsiniz.
            </p>

            <Link
              to="/iletisim"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#111827] transition hover:scale-[1.02]"
            >
              Bizimle İletişime Geçin
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                <IconArrowRight size={17} />
              </span>
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
};

export default TarimPage;
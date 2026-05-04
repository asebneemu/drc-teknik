import { useState } from "react";
import CertificateGrid from "../components/CertificateGrid";
import ResponsiveMosaicGallery from "../components/ResponsiveMosaicGallery";

const serviceTabs = [
  {
    key: "yetkili",
    title: "Yetkili Servis",
    desc: "Resmi belgeler ve yetkilendirme kapsamı",
  },
  {
    key: "teknik",
    title: "Teknik Servis",
    desc: "Bakım, onarım ve saha desteği",
  },
  {
    key: "kalibrasyon",
    title: "Kalibrasyon",
    desc: "Doğruluk, hassasiyet ve sistem ayarı",
  },
];

const technicalServices = [
  {
    title: "Arıza Tespiti",
    desc: "Cihaz ve sistemlerde yaşanan sorunlar teknik olarak incelenir, problemin kaynağı belirlenir.",
  },
  {
    title: "Bakım & Onarım",
    desc: "Topcon Agriculture sistemleri, servis standartlarına uygun şekilde bakım ve onarım sürecinden geçirilir.",
  },
  {
    title: "Saha Desteği",
    desc: "Kullanım sırasında oluşan teknik ihtiyaçlara yönelik hızlı ve çözüm odaklı destek sağlanır.",
  },
];

const ServicesPage = () => {
  const [activeTab, setActiveTab] = useState("yetkili");

  return (
    <div className="w-full bg-[#f7faf8] py-14 sm:py-16 lg:py-20">
      <main className="mx-auto w-[88%] max-w-7xl">
        <section className="mb-12 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9b7416]">
            Servisler
          </span>

          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-[#1f2a1f] sm:text-5xl">
            Profesyonel Servis Çözümleri
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#5f6f5f] sm:text-base">
            Yetkili servis belgeleri, teknik müdahale süreçleri ve kalibrasyon
            hizmetleriyle Topcon Agriculture sistemleri için güvenilir destek.
          </p>
        </section>

        <section className="mb-14 grid grid-cols-1 gap-4 md:grid-cols-3">
          {serviceTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`rounded-[26px] px-6 py-8 text-left transition ${
                activeTab === tab.key
                  ? "bg-[#eaf7d8] shadow-sm"
                  : "bg-white/80 hover:bg-[#eef8e8]"
              }`}
            >
              <h2 className="text-xl font-semibold text-[#1f2a1f]">
                {tab.title}
              </h2>

              <p className="mt-3 text-sm leading-6 text-[#6b7b6b]">
                {tab.desc}
              </p>
            </button>
          ))}
        </section>

        {activeTab === "yetkili" && (
          <section>
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-[#1f2a1f]">
                Yetkili Servis Belgeleri
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[#6b7b6b]">
                Sertifikaları görüntülemek için ilgili belgeye tıklayabilirsiniz.
              </p>
            </div>

            <CertificateGrid />
          </section>
        )}

        {activeTab === "teknik" && (
          <section>
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-[#1f2a1f]">
                Teknik Servis
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-[#6b7b6b]">
                Teknik servis süreci; cihazların arıza tespiti, bakım, onarım
                ve saha performansının korunmasına yönelik profesyonel destek
                adımlarını kapsar.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {technicalServices.map((item, index) => (
                <div
                  key={index}
                  className="rounded-[24px] border border-[#e2ecdc] bg-white/85 p-7 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-[#1f2a1f]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#5f6f5f]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
             {/* 🔥 BURAYA EKLE */}
    <div className="mt-16">
      <ResponsiveMosaicGallery />
    </div>
          </section>
        )}

      {activeTab === "kalibrasyon" && (
  <section className="space-y-10">
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr]">
      <div>
        <h2 className="text-2xl font-semibold text-[#1f2a1f]">
          Kalibrasyon
        </h2>

        <p className="mt-4 text-sm leading-7 text-[#5f6f5f] sm:text-base">
          Kalibrasyon, sistemlerin sahada doğru, kararlı ve güvenilir
          çalışmasını destekleyen temel servis adımlarından biridir.
          Özellikle hassas tarım teknolojilerinde küçük sapmalar bile
          operasyon kalitesini etkileyebilir.
        </p>

        <p className="mt-4 text-sm leading-7 text-[#5f6f5f] sm:text-base">
          Düzenli kalibrasyon sayesinde cihaz performansı korunur,
          yönlendirme ve ölçüm süreçleri daha tutarlı hale gelir.
        </p>
      </div>

      <div className="rounded-[28px] border border-[#e2ecdc] bg-white/85 p-7 shadow-sm">
        <div className="mb-5 flex items-center justify-end">
          <span className="rounded-full bg-[#fff4cf] px-3 py-1 text-xs font-semibold text-[#9b7416]">
            Yıl Bazlı
          </span>
        </div>

        <svg viewBox="0 0 420 150" className="h-36 w-full">
          <path
            d="M0 108 Q80 116 160 110 T310 118 T420 112"
            fill="none"
            stroke="#dbe7cc"
            strokeWidth="5"
            strokeLinecap="round"
          />

          <path
            d="M0 105 Q75 65 150 50 T300 28 T420 14"
            fill="none"
            stroke="#9b7416"
            strokeWidth="4"
            strokeLinecap="round"
          />

          <circle cx="420" cy="14" r="6" fill="#9b7416" />
        </svg>

        <p className="mt-4 text-sm leading-7 text-[#6b7b6b]">
          Düzenli kalibrasyon, yıl boyunca doğruluk kaybını azaltır ve cihazın
          saha performansını daha sürdürülebilir seviyede tutar.
        </p>
      </div>
    </div>

    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      {[
        {
          title: "Ön Kontrol",
          desc: "Cihazın fiziksel durumu, bağlantıları ve temel çalışma tepkileri incelenir.",
        },
        {
          title: "Ölçüm Testleri",
          desc: "Açı, mesafe, yönlendirme ve hassasiyet değerleri kontrollü şekilde test edilir.",
        },
        {
          title: "Ayar ve Düzeltme",
          desc: "Sapma görülen değerler uygun toleranslara getirilerek cihaz yeniden düzenlenir.",
        },
        {
          title: "Raporlama",
          desc: "Kalibrasyon sonucu teknik rapor ve değerlendirme bilgileriyle teslim edilir.",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="rounded-[24px] border border-[#e2ecdc] bg-white/80 p-6 shadow-sm"
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

    <div className="rounded-[28px] border border-[#e2ecdc] bg-white/85 p-7 shadow-sm">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <span className="rounded-full bg-[#eef6e9] px-3 py-1 text-xs font-semibold text-[#4d6b3c]">
            Kalibrasyon Sonucu
          </span>

          <h3 className="mt-4 text-xl font-semibold text-[#1f2a1f]">
            Ölçüm güvenilirliği belgelenir.
          </h3>

          <p className="mt-3 text-sm leading-7 text-[#6b7b6b]">
            İşlem sonunda cihazın mevcut durumu, yapılan kontroller ve gerekli
            ayarlar kayıt altına alınır.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {[
            "Ölçüm doğruluk kontrolü",
            "Tolerans değerlendirmesi",
            "Teknik servis kaydı",
            "Raporlu teslim süreci",
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 rounded-2xl bg-[#f7faf4] px-4 py-4 text-sm font-medium text-[#435143]"
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#9b7416] text-xs text-white">
                ✓
              </span>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)}
      </main>
    </div>
  );
};

export default ServicesPage;
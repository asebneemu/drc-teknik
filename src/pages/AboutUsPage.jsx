import CorporateValuesTabs from "../components/CorporateValuesTabs";

const AboutUsPage = () => {
  return (
    <div className="w-full bg-[#f7faf8] py-16 lg:py-24">
      <div className="w-[75%] mx-auto space-y-20">

        {/* HERO */}
        <div className="text-center">
          <span className="text-[#9b7416] text-xs tracking-[0.25em] uppercase">
            Kurumsal
          </span>

          <h1 className="mt-4 text-4xl sm:text-5xl font-semibold text-[#1f2a1f]">
            Güvenilir Servis Altyapısı
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-[#5f6f5f] leading-8">
            DRC Teknik, Topcon Agriculture teknolojilerinde doğruluk ve sürekliliği
            merkeze alan profesyonel servis yapısıyla faaliyet göstermektedir.
          </p>
        </div>

        {/* İSTATİSTİKLER */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "20+", label: "Yıl Tecrübe" },
            { value: "%99", label: "Servis Sürekliliği" },
            { value: "1000+", label: "Aktif Sistem" },
            { value: "24/7", label: "Teknik Destek" },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white/80 p-6 text-center border border-[#e6efe2]"
            >
              <div className="text-3xl font-semibold text-[#1f2a1f]">
                {item.value}
              </div>
              <div className="mt-2 text-sm text-[#6b7b6b]">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* GRAFİK (EĞRİ) */}
        <div className="rounded-[32px] bg-white/80 p-10 border border-[#e6efe2]">
          <h2 className="text-xl font-semibold text-[#1f2a1f] mb-6">
            Sistem Doğruluğu ve Süreklilik
          </h2>

          <svg viewBox="0 0 500 150" className="w-full h-40">
            <path
              d="M0 120 Q100 80 200 90 T400 60 T500 50"
              fill="none"
              stroke="#9b7416"
              strokeWidth="2"
            />
            <path
              d="M0 130 Q100 110 200 105 T400 95 T500 90"
              fill="none"
              stroke="#d7e8d0"
              strokeWidth="2"
            />
          </svg>

          <p className="mt-4 text-sm text-[#6b7b6b]">
            Servis süreçleri boyunca sistem doğruluğu ve saha performansı
            süreklilik gösterir.
          </p>
        </div>

        {/* METİN BLOĞU */}
        <div className="grid md:grid-cols-2 gap-12">
          <p className="text-[17px] leading-8 text-[#3f4f3f]">
            DRC Teknik, 20 yıllık saha tecrübesini güçlü teknik altyapı ile
            birleştirerek Topcon Agriculture ürün gamına yönelik yetkili teknik
            servis merkezi olarak hizmet vermektedir.
          </p>

          <p className="text-[17px] leading-8 text-[#3f4f3f]">
            Sunulan hizmetler yalnızca arıza giderme odaklı değil; sistem
            performansını artırmaya ve kullanım ömrünü uzatmaya yönelik
            kapsamlı bir yaklaşımla yürütülmektedir.
          </p>
        </div>

        {/* VALUES */}
        <CorporateValuesTabs />

        {/* ALT GÜVEN MESAJI */}
        <div className="pt-10 border-t border-[#e3eadf] max-w-3xl">
          <p className="text-sm leading-7 text-[#6b7b6b]">
            DRC Teknik, topcon teknolojilerinde doğruluk, süreklilik ve
            sistem güvenilirliğini esas alarak, sahada kesintisiz performans
            sağlayan servis yapısını sürdürmektedir.
          </p>
        </div>

      </div>
    </div>
  );
};

export default AboutUsPage;
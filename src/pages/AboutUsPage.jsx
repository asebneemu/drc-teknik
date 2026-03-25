import CorporateValuesTabs from "../components/CorporateValuesTabs";

const AboutUsPage = () => {
  return (
    <div className="w-full bg-[#f7faf8] py-12 sm:py-16 lg:py-20">
      <div className="w-[75%] mx-auto">
        {/* Hero / Başlık Alanı */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <span className="inline-block text-emerald-700 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-3 sm:mb-4">
            Kurumsal
          </span>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Harita Teknolojilerinde Güven, Tecrübe ve Profesyonel Çözüm
          </h1>
          <p className="max-w-3xl mx-auto text-gray-600 text-sm sm:text-base lg:text-lg leading-7 sm:leading-8">
            DRC Teknik olarak, ileri teknolojiyle desteklenen servis altyapımız ve uzman teknik ekibimizle,
            harita teknolojileri alanında güvenilir, sürdürülebilir ve yüksek standartlarda hizmet sunuyoruz.
          </p>
        </div>

        {/* Ana Kurumsal Metin */}
        <div className="bg-white rounded-3xl shadow-sm border border-black/5 p-5 sm:p-8 md:p-12">
          <div className="space-y-6 sm:space-y-8 text-gray-700 leading-7 sm:leading-8 text-sm sm:text-base lg:text-[17px]">
            <p>
              DRC Teknik, harita teknolojileri alanında uzmanlaşmış yapısı ve sektörel tecrübesiyle,
              CHCNAV ve EFIX markalarının yetkili servis sağlayıcısı olarak güven veren bir hizmet anlayışı
              sunmaktadır. Yüksek teknolojiye sahip ekipman altyapısı, deneyimli teknik kadrosu ve çözüm odaklı
              yaklaşımıyla, müşterilerine yalnızca teknik destek değil; aynı zamanda uzun vadeli güven, kalite ve
              sürdürülebilir hizmet deneyimi sağlamaktadır.
            </p>

            <p>
              TOTALSTATION, GPS, TEODOLIT, LAZER NİVO, DİJİTAL NİVO ve OTOMATİK NİVO gibi farklı arazi ölçüm
              cihazlarında bakım, onarım ve kalibrasyon hizmetleri sunan DRC Teknik, her cihazın ihtiyaç duyduğu
              teknik hassasiyeti profesyonel süreçlerle ele almaktadır. Amaç yalnızca arızaları gidermek değil;
              cihazların performansını artırmak, kullanım ömrünü uzatmak ve sahadaki verimliliği en üst düzeye
              taşımaktır.
            </p>

            <CorporateValuesTabs />

            <p>
              Teknolojideki gelişmeleri yakından takip eden DRC Teknik, müşteri beklentilerine uygun yenilikçi
              çözümleri sürekli olarak hizmet yapısına entegre etmektedir. Güvenilir servis yaklaşımı, uzmanlık,
              güçlü teknik altyapı ve müşteri odaklı hizmet anlayışıyla DRC Teknik, harita teknolojileri alanında
              tercih edilen ve saygın konumunu her geçen gün daha da güçlendirmektedir.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
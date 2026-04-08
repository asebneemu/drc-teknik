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
            DRC Teknik, harita ve hassas tarım teknolojileri alanında edindiği saha tecrübesini, güçlü teknik altyapı ve uzman kadrosu ile birleştirerek Topcon Agriculture ürün gamına yönelik yetkili teknik servis merkezi olarak hizmet vermektedir. Kurumsal yaklaşımı, yüksek hizmet standartları ve çözüm odaklı yapısıyla, müşterilerine yalnızca teknik destek sunmakla kalmaz; aynı zamanda güvenilir ve sürdürülebilir bir iş ortağı olarak konumlanır. Her bir servis süreci, kalite, hassasiyet ve süreklilik ilkeleri doğrultusunda titizlikle yürütülmektedir.


            </p>

            <p>
              DRC Teknik, hassas tarım uygulamalarında kullanılan otomatik dümenleme sistemleri, GNSS tabanlı yönlendirme çözümleri ve saha verimliliğini artıran kontrol teknolojilerinin bakım, onarım ve kalibrasyon süreçlerinde uzmanlaşmıştır. Tarımsal üretimde doğruluk ve verimliliğin kritik öneme sahip olduğunun bilinciyle, sunulan tüm hizmetler yalnızca arıza giderme odaklı değil; sistem performansını artırmaya ve kullanım ömrünü uzatmaya yönelik kapsamlı bir anlayışla ele alınmaktadır.
            </p>

            <CorporateValuesTabs />

            <p>
             Santimetre hassasiyetinde doğruluk gerektiren tarım uygulamalarında; doğru ekim hatlarının oluşturulması, girdi maliyetlerinin azaltılması ve operasyonel verimliliğin artırılması doğrudan kullanılan teknolojilerin performansına bağlıdır. DRC Teknik, bu noktada devreye girerek sistemlerin sahadaki doğruluğunu ve sürekliliğini güvence altına alır. Uygulanan teknik süreçler, cihazların en yüksek verimle çalışmasını sağlayacak şekilde planlanır ve her aşama profesyonel kontrol mekanizmalarıyla desteklenir.
            </p>
              <p>
       Teknolojik gelişmeleri yakından takip eden ve sürekli kendini yenileyen DRC Teknik, Topcon Agriculture teknolojilerinin sunduğu yenilikçi çözümleri hizmet yapısına entegre ederek müşterilerine güncel ve etkili çözümler sunmaktadır. Müşteri memnuniyetini merkeze alan yaklaşımı, güçlü teknik yetkinliği ve disiplinli servis anlayışıyla DRC Teknik, hassas tarım teknolojileri alanında güvenle tercih edilen ve sektördeki konumunu her geçen gün daha da güçlendiren bir marka olmayı sürdürmektedir.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
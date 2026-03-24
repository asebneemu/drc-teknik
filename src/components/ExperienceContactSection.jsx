// src/components/content/ExperienceContactSection.jsx

const ExperienceContactSection = () => {
  const phoneNumber = "905XXXXXXXXX";
  const message = "Merhaba, hizmetleriniz hakkında bilgi almak istiyorum.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="w-[75%] mx-auto py-20">
      <div className="grid md:grid-cols-2 gap-8 items-stretch">
        
        {/* SOL - Görsel */}
        <div
          className="bg-cover bg-center bg-no-repeat rounded-2xl overflow-hidden flex"
          style={{
            backgroundImage: "url('/content5.jpg')",
          }}
        >
          <div className="bg-black/60 w-full px-6 py-16 flex items-center justify-center">
            <div className="text-center max-w-md">
              <h2 className="text-3xl font-bold text-white mb-4">
                Sektörde 20 yıllık tecrübemizle hizmetinizdeyiz!
              </h2>

              <p className="text-white text-base leading-relaxed">
                Uzman teknik servis ekibimizle, siz değerli müşterilerimize
                harita teknolojileri alanında en iyi hizmeti sunmak amacıyla
                buradayız.
              </p>
            </div>
          </div>
        </div>

        {/* SAĞ - CTA */}
        <div className="bg-emerald-600 rounded-2xl text-center px-6 py-16 text-white flex items-center justify-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Bizimle İletişime Geçin
            </h2>

            <p className="max-w-md mx-auto mb-8 text-white/90">
              Size en uygun çözümleri sunmak için buradayız. Hemen bizimle
              iletişime geçin, uzman ekibimiz size yardımcı olsun.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gray-400 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition-all duration-300 hover:bg-gray-500 hover:scale-110 hover:-rotate-2 hover:shadow-2xl"
            >
              WhatsApp'tan Yaz
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ExperienceContactSection;
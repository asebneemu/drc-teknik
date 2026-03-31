const ExperienceContactSection = () => {
  const phoneNumber = "905XXXXXXXXX";
  const message = "Merhaba, hizmetleriniz hakkında bilgi almak istiyorum.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="w-full py-12 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2 items-stretch">
          
          {/* SOL - Görsel */}
          <div
            className="
              overflow-hidden rounded-2xl bg-cover bg-center bg-no-repeat
              min-h-[240px] sm:min-h-[280px] lg:min-h-[320px]
              flex
            "
            style={{
              backgroundImage: "url('/content5.jpeg')",
            }}
          >
            <div
              className="
                flex w-full items-center justify-center bg-black/60
                px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14
              "
            >
              <div className="max-w-md text-center">
                <h2 className="mb-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                  Sektörde 20 yıllık tecrübemizle hizmetinizdeyiz!
                </h2>

                <p className="text-sm sm:text-base lg:text-lg leading-7 text-white">
                  Uzman teknik servis ekibimizle, siz değerli müşterilerimize
                  harita teknolojileri alanında en iyi hizmeti sunmak amacıyla
                  buradayız.
                </p>
              </div>
            </div>
          </div>

          {/* SAĞ - CTA */}
          <div
            className="
              flex items-center justify-center rounded-2xl bg-emerald-600 text-center text-white
              min-h-[240px] sm:min-h-[280px] lg:min-h-[320px]
              px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14
            "
          >
            <div>
              <h2 className="mb-4 text-2xl sm:text-3xl lg:text-4xl font-bold">
                Bizimle İletişime Geçin
              </h2>

              <p className="mx-auto mb-8 max-w-md text-sm sm:text-base lg:text-lg text-white/90 leading-7">
                Size en uygun çözümleri sunmak için buradayız. Hemen bizimle
                iletişime geçin, uzman ekibimiz size yardımcı olsun.
              </p>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center justify-center
                  rounded-lg bg-gray-400 px-6 sm:px-8 py-3 sm:py-3.5
                  text-sm sm:text-base font-semibold text-white shadow-md
                  transition-all duration-300
                  hover:bg-gray-500 hover:shadow-2xl
                  sm:hover:scale-105
                "
              >
                WhatsApp'tan Yaz
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ExperienceContactSection;
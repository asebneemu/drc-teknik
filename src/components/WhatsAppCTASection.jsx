// src/components/content/WhatsAppCTASection.jsx

const WhatsAppCTASection = () => {
  const phoneNumber = "905XXXXXXXXX";
  const message = "Merhaba, hizmetleriniz hakkında bilgi almak istiyorum.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message,
  )}`;

  return (
    <div className="w-[75%] mx-auto py-12 sm:py-16 lg:py-20">
      <div className="bg-emerald-600 rounded-2xl text-center px-4 sm:px-6 lg:px-8 py-12 sm:py-14 lg:py-16 text-white">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
          Bizimle İletişime Geçin
        </h2>

        <p className="max-w-2xl mx-auto mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg text-white/90">
          Size en uygun çözümleri sunmak için buradayız. Hemen bizimle iletişime
          geçin, uzman ekibimiz size yardımcı olsun.
        </p>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gray-400 text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg shadow-md transition-all duration-300 hover:bg-gray-500 sm:hover:scale-110 sm:hover:-rotate-2 hover:shadow-2xl text-sm sm:text-base"
        >
          WhatsApp'tan Yaz
        </a>
      </div>
    </div>
  );
};

export default WhatsAppCTASection;
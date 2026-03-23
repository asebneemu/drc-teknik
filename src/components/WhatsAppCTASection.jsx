// src/components/content/WhatsAppCTASection.jsx

const WhatsAppCTASection = () => {
  const phoneNumber = "905XXXXXXXXX";
  const message = "Merhaba, hizmetleriniz hakkında bilgi almak istiyorum.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message,
  )}`;

  return (
    <div className="w-[75%] mx-auto py-20">
      <div className="bg-emerald-600 rounded-2xl text-center px-6 py-16 text-white">
        <h2 className="text-3xl font-bold mb-4">Bizimle İletişime Geçin</h2>

        <p className="max-w-2xl mx-auto mb-8 text-white/90">
          Size en uygun çözümleri sunmak için buradayız. Hemen bizimle iletişime
          geçin, uzman ekibimiz size yardımcı olsun.
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
  );
};

export default WhatsAppCTASection;

const WhatsAppCTASection = () => {
  return (
    <div
      className="relative z-[9999] w-[75%] mx-auto py-12 sm:py-16 lg:py-20"
      onClickCapture={(e) => {
        e.stopPropagation();
      }}
    >
      <div className="rounded-2xl bg-emerald-600 px-4 py-12 text-center text-white sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <h2 className="mb-3 text-2xl font-bold sm:mb-4 sm:text-3xl lg:text-4xl">
          Bizimle İletişime Geçin
        </h2>

        <p className="mx-auto mb-6 max-w-2xl text-sm text-white/90 sm:mb-8 sm:text-base lg:text-lg">
          Size en uygun çözümleri sunmak için buradayız. Hemen bizimle iletişime
          geçin, uzman ekibimiz size yardımcı olsun.
        </p>

        <a
          href="https://api.whatsapp.com/send?phone=905309222322&text=Merhaba%2C%20DRC%20Teknik%20servis%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="relative z-[9999] inline-block rounded-lg bg-gray-400 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-gray-500 hover:shadow-2xl sm:px-8 sm:py-3 sm:text-base"
        >
          WhatsApp'tan Yaz
        </a>
      </div>
    </div>
  );
};

export default WhatsAppCTASection;
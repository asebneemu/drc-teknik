const ServiceHighlights = () => {
  return (
    <section className="w-full bg-white py-12 sm:py-16">
      <div className="mx-auto w-full max-w-6xl px-4 text-center">

        <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-8">
          Güvenilir Teknik Servis Çözümleri
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10">
          
          <div>
            <h4 className="font-semibold text-lg text-gray-800 mb-2">
              Hızlı Servis
            </h4>
            <p className="text-sm text-gray-600">
              Cihazlarınız minimum sürede tekrar kullanıma hazır hale getirilir.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg text-gray-800 mb-2">
              Uzman Kadro
            </h4>
            <p className="text-sm text-gray-600">
              Alanında deneyimli teknik ekibimizle profesyonel çözümler sunuyoruz.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg text-gray-800 mb-2">
              Güvenilir Hizmet
            </h4>
            <p className="text-sm text-gray-600">
              Tüm işlemlerimizde kalite ve müşteri memnuniyeti ön plandadır.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServiceHighlights;
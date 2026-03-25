const ExperienceHighlightSection = () => {
  return (
    <div className="w-full py-12 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className="
            overflow-hidden rounded-2xl bg-cover bg-center bg-no-repeat
            min-h-[320px] sm:min-h-[400px] lg:min-h-[480px]
          "
          style={{
            backgroundImage: "url('/content5.jpg')",
          }}
        >
          <div
            className="
              flex h-full w-full items-center justify-center bg-black/60
              px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20
            "
          >
            <div className="max-w-3xl text-center">
              <h2 className="mb-4 sm:mb-6 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
                Sektörde 20 yıllık tecrübemizle hizmetinizdeyiz!
              </h2>

              <p className="text-sm sm:text-base lg:text-lg xl:text-xl leading-7 sm:leading-8 text-white">
                Uzman teknik servis ekibimizle, siz değerli müşterilerimize
                harita teknolojileri alanında en iyi hizmeti sunmak amacıyla
                buradayız.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceHighlightSection;
// src/components/content/ExperienceHighlightSection.jsx

const ExperienceHighlightSection = () => {
  return (
    <div className="w-[75%] mx-auto py-20">
      <div
        className="bg-cover bg-center bg-no-repeat rounded-2xl overflow-hidden"
        style={{
          backgroundImage: "url('/content5.jpg')",
        }}
      >
        <div className="bg-black/60 w-full h-full px-6 py-20 flex items-center justify-center">
          
          <div className="text-center max-w-3xl">
            <h2 className="text-4xl font-bold text-white mb-6">
              Sektörde 19 yıllık tecrübemizle hizmetinizdeyiz!
            </h2>

            <p className="text-white text-lg leading-relaxed">
              Uzman teknik servis ekibimizle, siz değerli müşterilerimize harita teknolojileri alanında en iyi hizmeti sunmak amacıyla buradayız.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ExperienceHighlightSection;
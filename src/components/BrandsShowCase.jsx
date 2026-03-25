export default function BrandsShowcase() {
  return (
    <section className="relative w-full py-12 sm:py-16 lg:py-20 overflow-hidden bg-gray-100">
      
      {/* Overlay (isteğe bağlı koyulaştırma efekti) */}
      <div className="absolute inset-0 bg-black/20" />

      <div
        className="
          relative z-10
          max-w-7xl mx-auto
          px-4 sm:px-6 lg:px-8
          flex flex-col items-center justify-center
          gap-8 sm:gap-10 lg:gap-12
        "
      >
        {/* Topcon Logo */}
        <div className="flex justify-center items-center">
          <img
            src="/topcon.png"
            alt="Topcon"
            className="
              object-contain
              h-10 sm:h-12 md:h-14 lg:h-16 xl:h-20 2xl:h-24
            "
          />
        </div>

        {/* Authorized Service Image */}
        <div className="flex justify-center items-center">
          <img
            src="/service-.png"
            alt="Authorized Service Center"
            className="
              object-contain
              w-full max-w-[200px]
              sm:max-w-[250px]
              md:max-w-[300px]
              lg:max-w-[350px]
              xl:max-w-[400px]
              2xl:max-w-[500px]
            "
          />
        </div>
      </div>
    </section>
  );
}
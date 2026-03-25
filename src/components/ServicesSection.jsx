const services = [
  {
    title: "Teknik Servis",
    image: "/service-1.jpg",
  },
  {
    title: "Bakım Onarım Kalibrasyon",
    image: "/service-2.jpg",
  },
  {
    title: "Yetkili Servis",
    image: "/service-3.jpg",
  },
];

export default function ServicesSection() {
  return (
    <section className="w-full py-12 sm:py-16 lg:py-20">
      <div className="mx-auto w-[75%]">
        <h2 className="mb-8 sm:mb-10 text-center text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900">
          Hizmetlerimiz
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-[24px] bg-white shadow-sm"
            >
              <img
                src={service.image}
                alt={service.title}
                className="h-[260px] sm:h-[300px] md:h-[340px] lg:h-[380px] w-full object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/35" />

              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100">
                <p className="px-4 sm:px-6 text-center text-lg sm:text-xl lg:text-2xl font-medium text-white">
                  {service.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
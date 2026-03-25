const stats = [
  {
    value: "+10K",
    label: "Tamamlanan Servis",
  },
  {
    value: "24/7",
    label: "Teknik Destek",
  },
  {
    value: "120+",
    label: "Kurumsal Müşteri",
  },
];

const StatsSection = () => {
  return (
    <div className="w-full py-12 sm:py-16 lg:py-20 bg-[#f7f9fc]">
      <div className="w-[75%] mx-auto">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 text-center">
          {stats.map((item, i) => (
            <div
              key={i}
              className="bg-white p-5 sm:p-6 lg:p-8 rounded-2xl shadow-sm border border-black/5 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-blue-600 mb-2">
                {item.value}
              </h3>
              <p className="text-xs sm:text-sm tracking-wide text-gray-600">
                {item.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default StatsSection;
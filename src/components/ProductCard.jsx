const ProductCard = ({ item }) => {
  const isSold = item.status === "sold";

  return (
    <div
      className={`rounded-2xl overflow-hidden border border-black/5 transition-all duration-300 ${
        isSold
          ? "bg-gray-50 opacity-70"
          : "bg-white shadow-md hover:shadow-xl hover:-translate-y-1"
      }`}
    >
      <div className="relative">
        <img
          src={item.image}
          alt={item.title}
          className={`w-full h-56 object-cover ${
            isSold ? "grayscale" : ""
          }`}
        />

        {/* STATUS */}
        <span
          className={`absolute top-4 left-4 text-xs px-3 py-1 rounded-full font-medium ${
            item.status === "sale"
              ? "bg-emerald-100 text-emerald-700"
              : "bg-gray-300 text-gray-700"
          }`}
        >
          {item.status === "sale" ? "Satılık" : "Satıldı"}
        </span>

        {/* CONDITION */}
        <span
          className={`absolute bottom-4 right-4 text-xs px-3 py-1 rounded-full font-medium ${
            item.condition === "new"
              ? "bg-blue-100 text-blue-700"
              : "bg-orange-100 text-orange-700"
          }`}
        >
          {item.condition === "new" ? "Sıfır" : "2. El"}
        </span>
      </div>

      <div className="p-5">
        <p className="text-sm text-gray-500 mb-2">{item.date}</p>

        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          {item.title}
        </h3>

        <p className="text-sm text-gray-600 leading-6 mb-4">
          {item.description}
        </p>

        {!isSold && (
          <p className="text-lg font-bold text-emerald-700">
            {item.price}
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
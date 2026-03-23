const ProductCard = ({ item }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-black/5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-56 object-cover"
        />

        <span
          className={`absolute top-4 left-4 text-xs px-3 py-1 rounded-full font-medium ${
            item.status === "sale"
              ? "bg-emerald-100 text-emerald-700"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          {item.status === "sale" ? "Satılık" : "Satışı Tamamlandı"}
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

        {item.status === "sale" && (
          <p className="text-lg font-bold text-emerald-700">{item.price}</p>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
import { useState } from "react";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

const ProductsPage = () => {
  const [conditionFilter, setConditionFilter] = useState("all");

  const filteredProducts =
    conditionFilter === "all"
      ? products
      : products.filter((item) => item.condition === conditionFilter);

  return (
    <div className="w-full bg-[#f7f9fc] py-12 sm:py-16 lg:py-20">
      <div className="w-[75%] mx-auto">
        <div className="text-center mb-10 sm:mb-12 lg:mb-14">
          <span className="inline-block text-emerald-700 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-3 sm:mb-4">
            Ürünler
          </span>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-5">
            Satıştaki ve Tamamlanan Ürün Portföyümüz
          </h1>

          <p className="max-w-3xl mx-auto text-gray-600 text-sm sm:text-base lg:text-lg leading-7 sm:leading-8">
            Satışta olan ürünlerimizi ve daha önce başarıyla teslim ettiğimiz cihazları inceleyebilir,
            teknik servis süreçlerimiz ve ürün kalitemiz hakkında detaylı bilgi edinebilirsiniz.
          </p>
        </div>

        {/* 🔥 SADE FİLTRE */}
        <div className="flex flex-wrap justify-start gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-10 lg:mb-12">
          <button
            onClick={() => setConditionFilter("all")}
            className={`text-sm sm:text-base lg:text-lg font-medium pb-2 border-b-2 transition ${
              conditionFilter === "all"
                ? "border-blue-600 text-blue-700"
                : "border-transparent text-gray-500 hover:text-blue-600"
            }`}
          >
            Tümü
          </button>

          <button
            onClick={() => setConditionFilter("new")}
            className={`text-sm sm:text-base lg:text-lg font-medium pb-2 border-b-2 transition ${
              conditionFilter === "new"
                ? "border-blue-600 text-blue-700"
                : "border-transparent text-gray-500 hover:text-blue-600"
            }`}
          >
            Sıfır
          </button>

          <button
            onClick={() => setConditionFilter("used")}
            className={`text-sm sm:text-base lg:text-lg font-medium pb-2 border-b-2 transition ${
              conditionFilter === "used"
                ? "border-blue-600 text-blue-700"
                : "border-transparent text-gray-500 hover:text-blue-600"
            }`}
          >
            2. El
          </button>
        </div>

        {/* Ürünler */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
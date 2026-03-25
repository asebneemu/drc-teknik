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
    <div className="w-full bg-[#f7f9fc] py-20">
      <div className="w-[75%] mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block text-emerald-700 text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Ürünler
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
            Satıştaki ve Tamamlanan Ürün Portföyümüz
          </h1>

          <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-8">
            Satışta olan ürünlerimizi ve daha önce başarıyla teslim ettiğimiz cihazları inceleyebilir,
            teknik servis süreçlerimiz ve ürün kalitemiz hakkında detaylı bilgi edinebilirsiniz.
          </p>
        </div>

        {/* 🔥 SADE FİLTRE */}
        <div className="flex justify-start gap-8 mb-12">
          <button
            onClick={() => setConditionFilter("all")}
            className={`text-lg font-medium pb-2 border-b-2 transition ${
              conditionFilter === "all"
                ? "border-blue-600 text-blue-700"
                : "border-transparent text-gray-500 hover:text-blue-600"
            }`}
          >
            Tümü
          </button>

          <button
            onClick={() => setConditionFilter("new")}
            className={`text-lg font-medium pb-2 border-b-2 transition ${
              conditionFilter === "new"
                ? "border-blue-600 text-blue-700"
                : "border-transparent text-gray-500 hover:text-blue-600"
            }`}
          >
            Sıfır
          </button>

          <button
            onClick={() => setConditionFilter("used")}
            className={`text-lg font-medium pb-2 border-b-2 transition ${
              conditionFilter === "used"
                ? "border-blue-600 text-blue-700"
                : "border-transparent text-gray-500 hover:text-blue-600"
            }`}
          >
            2. El
          </button>
        </div>

        {/* Ürünler */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProducts.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
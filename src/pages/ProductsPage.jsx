import { useState } from "react";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

const ProductsPage = () => {
  const [filter, setFilter] = useState("all");

  const filteredProducts =
    filter === "all"
      ? products
      : products.filter((item) => item.status === filter);

  return (
    <div className="w-full bg-[#f7f9fc] py-20">
      <div className="w-[75%] mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block text-emerald-700 text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Ürünler
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
            Satılık ve Referans Ürünlerimiz
          </h1>

          <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-8">
            Satışta olan ürünlerimizi ve satışı tamamlanmış referans cihazlarımızı
            buradan inceleyebilirsiniz.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <button
            onClick={() => setFilter("all")}
            className={`text-lg font-medium pb-2 border-b-2 transition-all duration-300 ${
              filter === "all"
                ? "border-emerald-600 text-emerald-700"
                : "border-transparent text-gray-500 hover:text-emerald-600"
            }`}
          >
            Tümü
          </button>

          <button
            onClick={() => setFilter("sale")}
            className={`text-lg font-medium pb-2 border-b-2 transition-all duration-300 ${
              filter === "sale"
                ? "border-emerald-600 text-emerald-700"
                : "border-transparent text-gray-500 hover:text-emerald-600"
            }`}
          >
            Satılık Ürünler
          </button>

          <button
            onClick={() => setFilter("sold")}
            className={`text-lg font-medium pb-2 border-b-2 transition-all duration-300 ${
              filter === "sold"
                ? "border-emerald-600 text-emerald-700"
                : "border-transparent text-gray-500 hover:text-emerald-600"
            }`}
          >
            Satışı Tamamlanan
          </button>
        </div>

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
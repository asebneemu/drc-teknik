// src/components/services/CompletedServicesSection.jsx

import products from "../data/products";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const CompletedServicesSection = () => {
  const completed = products
    .filter((item) => item.status === "sold")
    .slice(0, 3);

  return (
    <div className="w-full py-20 bg-white">
      <div className="w-[75%] mx-auto">
        
        {/* Başlık */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Tamamlanan Servislerimiz
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Gerçekleştirdiğimiz teknik servis çalışmalarından bazılarını inceleyebilirsiniz.
          </p>
        </div>

        {/* Kartlar */}
        <div className="grid md:grid-cols-3 gap-8">
          {completed.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>

        {/* Buton */}
        <div className="text-center mt-12">
          <Link
            to="/urunler"
            className="inline-block text-blue-600 font-semibold hover:underline"
          >
            Tüm Ürünleri Gör →
          </Link>
        </div>

      </div>
    </div>
  );
};

export default CompletedServicesSection;
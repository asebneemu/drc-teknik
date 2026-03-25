import products from "../data/products";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const CompletedServicesSection = () => {
  const completed = products
    .filter((item) => item.status === "sold")
    .slice(0, 3);

  return (
    <div className="w-full py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Başlık */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            Tamamlanan Servislerimiz
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            Gerçekleştirdiğimiz teknik servis çalışmalarından bazılarını inceleyebilirsiniz.
          </p>
        </div>

        {/* Kartlar */}
        <div
          className="
            grid gap-6 sm:gap-8
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {completed.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>

        {/* Buton */}
        <div className="text-center mt-10 sm:mt-12">
          <Link
            to="/urunler"
            className="
              inline-block
              text-blue-600 font-semibold
              text-sm sm:text-base
              hover:underline
            "
          >
            Tüm Ürünleri Gör →
          </Link>
        </div>

      </div>
    </div>
  );
};

export default CompletedServicesSection;
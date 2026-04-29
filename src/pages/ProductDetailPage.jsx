import { Link, useParams } from "react-router-dom";
import agriculture from "../data/agriculture";

const ProductDetailPage = () => {
  const { slug } = useParams();
  const item = agriculture.find((product) => product.slug === slug);

  if (!item) {
    return (
      <main className="min-h-screen bg-[#f7f9f6] flex items-center justify-center">
        <h1 className="text-xl text-[#2f3a2f]">Bulunamadı</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f7f9f6]">
      <div className="mx-auto max-w-5xl px-6 py-16">

        {/* BACK */}
        <Link
          to="/urunler"
          className="text-sm text-[#6b7b6b] hover:text-[#2f3a2f]"
        >
          ← Ürün gruplarına dön
        </Link>

        {/* HEADER */}
        <div className="mt-10">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-[#1f2a1f]">
            {item.title}
          </h1>

          {item.subtitle && (
            <p className="mt-4 text-lg text-[#5f6f5f]">
              {item.subtitle}
            </p>
          )}
        </div>

        {/* IMAGE */}
        {item.image && (
          <div className="mt-12">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[420px] object-cover rounded-2xl"
            />
          </div>
        )}

        {/* DESCRIPTION */}
        <div className="mt-14 space-y-6">
          {item.content?.map((p, i) => (
            <p
              key={i}
              className="text-[17px] leading-8 text-[#3f4f3f]"
            >
              {p}
            </p>
          ))}
        </div>

        {/* TECHNOLOGIES */}
        {item.products?.length > 0 && (
          <div className="mt-20">
            <h2 className="text-2xl font-semibold text-[#1f2a1f]">
              Teknolojiler
            </h2>

            <div className="mt-8 space-y-4">
              {item.products.map((product, i) => (
                <a
                  key={i}
                  href={product.url || "#"}
                  target="_blank"
                  rel="noreferrer"
                  className="group block rounded-xl px-5 py-4 transition
                  hover:bg-[#eef8e8] hover:-translate-y-[1px]"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium text-[#1f2a1f]">
                      {product.name}
                    </h3>

                    {/* sarı micro accent */}
                    <span className="text-[#c9a227] opacity-0 group-hover:opacity-100 transition">
                      →
                    </span>
                  </div>

                  {product.note && (
                    <p className="mt-2 text-sm leading-7 text-[#5f6f5f]">
                      {product.note}
                    </p>
                  )}

                  {/* alt çizgi hover */}
                  <div className="mt-3 h-[1px] w-0 bg-[#e6d28f] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>
          </div>
        )}

        {/* FOOTNOTE */}
        <div className="mt-20 pt-10 border-t border-[#e3eadf]">
          <p className="text-sm leading-7 text-[#6b7b6b]">
            {item.closingNote ||
              `${item.title} alanında kullanılan sistemler, saha doğruluğunu ve operasyon kalitesini doğrudan etkiler. Bu nedenle teknoloji seçimi yalnızca cihaz bazlı değil, bütün çalışma yapısı içinde değerlendirilmelidir.`}
          </p>
        </div>

      </div>
    </main>
  );
};

export default ProductDetailPage;
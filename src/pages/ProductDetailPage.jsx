import { Link, useParams } from "react-router-dom";
import agriculture from "../data/agriculture";

const ProductDetailPage = () => {
  const { slug } = useParams();

  const item = agriculture.find((product) => product.slug === slug);

  if (!item) {
    return (
      <div className="w-full bg-[#f7f9fc] py-16 sm:py-20">
        <div className="w-[90%] xl:w-[76%] mx-auto">
          <div className="rounded-[28px] bg-white p-8 sm:p-10 shadow-sm text-center">
            <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
              Kategori bulunamadı
            </h1>
            <p className="text-gray-600 mb-6">
              Aradığınız ürün grubu bulunamadı.
            </p>
            <Link
              to="/urunler"
              className="inline-flex items-center rounded-full bg-blue-800 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-900"
            >
              Ürün Gruplarına Dön
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#f7f9fc] py-12 sm:py-16 lg:py-20">
      <div className="w-[90%] xl:w-[76%] mx-auto">
        <div className="mb-8">
          <Link
            to="/urunler"
            className="inline-flex items-center text-sm font-semibold text-blue-800 transition hover:translate-x-1"
          >
            ← Ürün Gruplarına Dön
          </Link>
        </div>

        <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm">
          {item.image ? (
            <div className="h-[260px] sm:h-[340px] w-full bg-slate-100">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover"
              />
            </div>
          ) : (
            <div className="h-[260px] sm:h-[340px] w-full bg-[linear-gradient(135deg,#c7d2fe_0%,#dbeafe_45%,#eff6ff_100%)]" />
          )}

          <div className="p-6 sm:p-8 lg:p-10">
            <div className="mb-10">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                {item.title}
              </h1>

              <p className="text-base sm:text-lg font-medium text-slate-500 mb-6">
                {item.subtitle}
              </p>

              <p className="text-gray-600 text-sm sm:text-base leading-7 sm:leading-8">
                {item.description}
              </p>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-[1.05fr_0.95fr] gap-8">
              <div className="space-y-8">
                <div className="rounded-[24px] border border-slate-200 bg-[#f8fafc] p-5 sm:p-6">
                  <div className="space-y-4">
                    {item.content?.map((paragraph, index) => (
                      <p
                        key={index}
                        className="text-gray-600 text-sm sm:text-base leading-7 sm:leading-8"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="rounded-[24px] border border-slate-200 bg-white p-5 sm:p-6">
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    ⚠️ Kategorinin Önemi
                  </h2>

                  <p className="text-gray-600 text-sm sm:text-base leading-7 sm:leading-8 mb-4">
                    {item.importance}
                  </p>

                  <p className="text-gray-600 text-sm sm:text-base leading-7 sm:leading-8">
                    {item.operationRole}
                  </p>
                </div>

                {item.features && item.features.length > 0 && (
                  <div className="rounded-[24px] border border-slate-200 bg-white p-5 sm:p-6">
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                      Öne Çıkan Özellikler
                    </h2>

                    <div className="space-y-3">
                      {item.features.map((feature, index) => (
                        <p
                          key={index}
                          className="text-gray-600 text-sm sm:text-base leading-7"
                        >
                          {feature}
                        </p>
                      ))}
                    </div>
                  </div>
                )}

                {item.usageAreas && item.usageAreas.length > 0 && (
                  <div className="rounded-[24px] border border-slate-200 bg-white p-5 sm:p-6">
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                      Kullanım Alanları
                    </h2>

                    <div className="flex flex-wrap gap-2">
                      {item.usageAreas.map((area, index) => (
                        <span
                          key={index}
                          className="rounded-full bg-blue-50 px-4 py-2 text-sm text-blue-800"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="rounded-[24px] border border-slate-200 bg-white p-5 sm:p-6">
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    📊 Genel Perspektif
                  </h2>

                  <p className="text-gray-600 text-sm sm:text-base leading-7 sm:leading-8 mb-4">
                    {item.evaluation}
                  </p>

                  <p className="text-gray-600 text-sm sm:text-base leading-7 sm:leading-8">
                    {item.evaluation2}
                  </p>
                </div>
              </div>

              <div>
                <div className="rounded-[24px] border border-slate-200 bg-white p-5 sm:p-6">
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                    Teknolojiler
                  </h2>

                  <div className="space-y-3">
                    {item.products.map((product, index) => (
                      <a
                        key={`${product.name}-${index}`}
                        href={product.url || "#"}
                        target="_blank"
                        rel="noreferrer"
                        className={`block rounded-2xl border border-slate-200 bg-[#f8fafc] p-4 sm:p-5 transition ${
                          product.url
                            ? "hover:border-blue-300 hover:bg-blue-50"
                            : "cursor-default"
                        }`}
                      >
                        <div>
                          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                            {product.name}
                          </h3>

                          {product.note && (
                            <p className="text-sm sm:text-base text-gray-600 leading-7">
                              {product.note}
                            </p>
                          )}
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {item.extraInfo && (
                  <div className="mt-6 rounded-[24px] bg-[#f8fafc] p-5 sm:p-6 border border-slate-200">
                    <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      ➕ Ek Not
                    </h2>
                    <p className="text-sm sm:text-base leading-7 sm:leading-8 text-gray-600">
                      {item.extraInfo}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
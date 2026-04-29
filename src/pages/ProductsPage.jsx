import { Link } from "react-router-dom";
import { IconInfoCircle, IconPointer } from "@tabler/icons-react";
import agriculture from "../data/agriculture";

const ProductsPage = () => {
  return (
    <div className="w-full bg-[#faf8f1] py-12 sm:py-16 lg:py-20">
      <div className="w-[90%] xl:w-[74%] mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block text-[#b88916] text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase mb-3">
            Topcon Agriculture
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-slate-950 mb-4">
            Hassas Tarım Ürün Grupları
          </h1>

          <p className="max-w-3xl mx-auto text-slate-600 text-sm sm:text-base lg:text-lg leading-7 sm:leading-8">
            Topcon’un hassas tarım teknolojileri; yönlendirme sistemleri,
            ekranlar, yazılım çözümleri ve operasyonel modüller olarak
            kategorize edilmiştir. Her ürün grubu, tarımsal süreçlerde belirli
            bir ihtiyaca odaklanır.
          </p>
        </div>

        <div className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start gap-3 rounded-2xl border border-[#ead9a9] bg-white/70 px-5 py-4 shadow-sm backdrop-blur-md">
            <span className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-[#fff4cf] text-[#a67910]">
              <IconInfoCircle size={18} />
            </span>

            <div>
              <h2 className="text-sm font-semibold text-slate-900 mb-1">
                Ürün grupları neyi ifade eder?
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-6">
                Her kategori, benzer işlevlere sahip sistemleri bir araya
                getirir ve kullanım senaryosuna göre değerlendirme imkânı sunar.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-2xl border border-[#ead9a9] bg-white/70 px-5 py-4 shadow-sm backdrop-blur-md">
            <span className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-[#fff4cf] text-[#a67910]">
              <IconPointer size={18} />
            </span>

            <div>
              <h2 className="text-sm font-semibold text-slate-900 mb-1">
                Nasıl kullanılır?
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-6">
                İlgilendiğiniz kategoriye girerek ürünleri, teknik kapsamı ve
                kullanım alanlarını detaylı inceleyebilirsiniz.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {agriculture.map((item) => (
            <div
              key={item.id}
              className="group flex h-full flex-col overflow-hidden rounded-[26px] border border-[#ead9a9] bg-[#fffaf0] shadow-[0_12px_40px_rgba(120,90,20,0.10)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(120,90,20,0.18)]"
            >
              <div className="relative h-64 w-full shrink-0 overflow-hidden bg-[#f6edd2]">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                  />
                ) : (
                  <div className="h-full w-full bg-[linear-gradient(135deg,#f8e7b0_0%,#fff7dc_50%,#d6b45c_100%)]" />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-[#2f250c]/55 via-[#2f250c]/10 to-transparent" />

                <div className="absolute left-4 right-4 bottom-4 rounded-2xl border border-white/45 bg-white/35 p-4 shadow-lg backdrop-blur-xl">
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#fff7d7]">
                    Topcon Agriculture
                  </p>

                  <h3 className="text-xl font-semibold tracking-tight text-white">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-sm font-medium text-white/85">
                    {item.subtitle}
                  </p>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="mb-5 text-sm leading-7 text-slate-700">
                  {item.description}
                </p>

                <div className="border-t border-[#ead9a9] pt-5">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#b88916]">
                    Öne çıkan ürünler
                  </p>

                  <div className="flex flex-wrap gap-x-3 gap-y-1 text-sm leading-6 text-slate-600">
  {item.products.map((product, index) => (
    <span key={product.name}>
      {product.name}
      {index !== item.products.length - 1 && (
        <span className="mx-2 text-slate-300">•</span>
      )}
    </span>
  ))}
</div>
                </div>

                <div className="mt-auto pt-8">
                  <Link
                    to={`/urunler/${item.slug}`}
                    className="inline-flex items-center justify-center rounded-full border border-white/60 bg-[linear-gradient(135deg,#fffdf6_0%,#f8f5df_38%,#eef7e9_100%)] px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm backdrop-blur-md transition hover:border-[#d9c982] hover:shadow-md"
                  >
                    Detayları İncele
                    <span className="ml-3 transition group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
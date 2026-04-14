import { Link } from "react-router-dom";
import agriculture from "../data/agriculture";

const ProductsPage = () => {
  return (
    <div className="w-full bg-[#f7f9fc] py-12 sm:py-16 lg:py-20">
      <div className="w-[90%] xl:w-[76%] mx-auto">
        <div className="text-center mb-10 sm:mb-12 lg:mb-14">
          <span className="inline-block text-blue-800 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-3 sm:mb-4">
            Topcon Agriculture
          </span>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-5">
            Hassas Tarım Ürün Grupları
          </h1>

          <p className="max-w-3xl mx-auto text-gray-600 text-sm sm:text-base lg:text-lg leading-7 sm:leading-8">
            Topcon’un hassas tarım alanındaki ürün ve teknoloji grupları burada
            kategori bazlı olarak bir araya getirilmiştir. Yönlendirme, düzeltme
            servisleri, ekran ve yazılım çözümleri, dijital tarım yönetimi,
            toprak hazırlığı, ekim, ürün bakımı, hasat, tartım ve yem yönetimi
            gibi başlıklarda hangi ürün ailesinin hangi operasyonlara hitap
            ettiğini inceleyebilirsiniz.
          </p>
        </div>

        <div className="mb-10 sm:mb-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="rounded-[28px] border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
              Ürün grupları neyi ifade ediyor?
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-7 sm:leading-8">
              Bu sayfadaki yapı, tarımsal operasyonların farklı aşamalarında öne
              çıkan teknoloji gruplarını daha anlaşılır hale getirmek için
              düzenlenmiştir. Böylece aynı başlık altında yalnızca ürün isimleri
              değil, o ürün ailesinin ne işe yaradığı, hangi süreçlerde öne
              çıktığı ve hangi sistemlerle birlikte değerlendirilebileceği daha
              net görülebilir.
            </p>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
              Bu içerik nasıl kullanılabilir?
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-7 sm:leading-8">
              Kategoriler, Topcon Agriculture ekosistemini ilk kez inceleyenler
              için genel bir çerçeve sunarken; belirli bir ürün ailesi hakkında
              daha fazla bilgi almak isteyenler için de başlangıç noktası
              oluşturur. Her kartın detay sayfasında ürün grubunun kapsamı,
              öne çıkan bileşenleri ve ilgili ürün bağlantıları daha ayrıntılı
              biçimde yer alır.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {agriculture.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {item.image ? (
                <div className="h-48 w-full bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              ) : (
                <div className="h-48 w-full bg-[linear-gradient(135deg,#c7d2fe_0%,#dbeafe_45%,#eff6ff_100%)]" />
              )}

              <div className="p-6 sm:p-7">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-sm sm:text-base font-medium text-slate-500 mb-4">
                  {item.subtitle}
                </p>

                <p className="text-gray-600 text-sm sm:text-base leading-7 mb-5">
                  {item.description}
                </p>

                <div className="border-t border-slate-100 pt-4">
                  <p className="text-sm font-semibold text-gray-900 mb-3">
                    Öne çıkan ürünler
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {item.products.slice(0, 4).map((product) => (
                      <span
                        key={product.name}
                        className="rounded-full bg-slate-100 px-3 py-1 text-xs sm:text-sm text-slate-700"
                      >
                        {product.name}
                      </span>
                    ))}

                    {item.products.length > 4 && (
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs sm:text-sm text-slate-700">
                        +{item.products.length - 4} ürün
                      </span>
                    )}
                  </div>
                </div>

                <div className="mt-6">
                  <Link
                    to={`/urunler/${item.slug}`}
                    className="inline-flex items-center rounded-full bg-blue-800 px-4 py-2.5 text-sm font-semibold text-white! transition hover:bg-blue-900"
                  >
                    Detayları İncele
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
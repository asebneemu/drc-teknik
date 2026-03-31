import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const conditionFilter = searchParams.get("condition") || "all";
  const campaignOnly = searchParams.get("campaign") === "true";

  const setCondition = (value) => {
    const params = new URLSearchParams(searchParams);

    if (value === "all") {
      params.delete("condition");
    } else {
      params.set("condition", value);
    }

    setSearchParams(params);
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };

  const toggleCampaign = () => {
    const params = new URLSearchParams(searchParams);

    if (campaignOnly) {
      params.delete("campaign");
    } else {
      params.set("campaign", "true");
    }

    setSearchParams(params);
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (conditionFilter !== "all") {
      result = result.filter((item) => item.condition === conditionFilter);
    }

    if (campaignOnly) {
      result = result.filter((item) => item.isCampaign === true);
    }

    return result;
  }, [conditionFilter, campaignOnly]);

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

        <div className="flex flex-col gap-5 mb-8 sm:mb-10 lg:mb-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap justify-start gap-4 sm:gap-6 lg:gap-8">
            <button
              type="button"
              onClick={() => setCondition("all")}
              className={`text-sm sm:text-base lg:text-lg font-medium pb-2 border-b-2 transition ${
                conditionFilter === "all"
                  ? "border-blue-600 text-blue-700"
                  : "border-transparent text-gray-500 hover:text-blue-600"
              }`}
            >
              Tümü
            </button>

            <button
              type="button"
              onClick={() => setCondition("new")}
              className={`text-sm sm:text-base lg:text-lg font-medium pb-2 border-b-2 transition ${
                conditionFilter === "new"
                  ? "border-blue-600 text-blue-700"
                  : "border-transparent text-gray-500 hover:text-blue-600"
              }`}
            >
              Sıfır
            </button>

            <button
              type="button"
              onClick={() => setCondition("used")}
              className={`text-sm sm:text-base lg:text-lg font-medium pb-2 border-b-2 transition ${
                conditionFilter === "used"
                  ? "border-blue-600 text-blue-700"
                  : "border-transparent text-gray-500 hover:text-blue-600"
              }`}
            >
              2. El
            </button>
          </div>

          <div className="flex justify-start lg:justify-end">
            <button
              type="button"
              onClick={toggleCampaign}
              className={`relative inline-flex items-center gap-3 rounded-full border px-5 py-3 text-sm sm:text-base font-black text-black shadow-lg backdrop-blur-md transition-all duration-300 ${
                campaignOnly
                  ? "bg-white/90 border-gray-300"
                  : "bg-white/70 border-gray-200 hover:bg-white/90"
              }`}
            >
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-black/30"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-black"></span>
              </span>

              <span className="tracking-wide">Kampanyalı Ürünler</span>
            </button>
          </div>
        </div>

        {conditionFilter !== "all" && (
          <div className="mb-6 text-sm sm:text-base text-gray-600">
            <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-blue-700">
              {conditionFilter === "new" ? "Sıfır" : "2. El"}
            </span>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))
          ) : (
            <div className="col-span-full rounded-2xl bg-white p-8 text-center shadow-sm">
              <p className="text-gray-600 text-base sm:text-lg">
                Bu filtreye uygun ürün bulunamadı.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
import { Link, useParams } from "react-router-dom";
import blogs from "../data/blogs";

const BlogDetailPage = () => {
  const { slug } = useParams();

  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    return (
      <main className="w-full bg-[#f7f4ed] py-24 text-center text-[#3b4b3b]">
        <h1 className="text-2xl font-semibold">Bülten bulunamadı.</h1>

        <Link
          to="/"
          className="mt-6 inline-block text-sm font-semibold text-[#6c7e6c] hover:text-[#2f4f2f]"
        >
          Ana sayfaya dön
        </Link>
      </main>
    );
  }

  return (
    <main className="w-full bg-[ #f9f7f1] py-10 sm:py-14 lg:py-20">
      <article className="mx-auto w-[90%] max-w-7xl">
        <Link
          to="/"
          className="mb-8 inline-flex text-sm font-semibold text-[#6c7e6c] hover:text-[#2f4f2f]"
        >
          ← Topcon Bülten’e Dön
        </Link>

        {/* ÜST ALAN */}
        <section className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_0.95fr]">
          {/* SOL - BAŞLIK */}
          <div className="rounded-[28px] bg-[#eaf7d8] p-7 sm:p-10 lg:p-14">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.32em] text-[#6f8a6f]">
              {blog.category || "Topcon Bülten"}
            </p>

            <h1 className="text-4xl font-semibold leading-tight text-[#20351f] sm:text-5xl lg:text-6xl">
              {blog.title}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#526452] sm:text-lg">
              {blog.excerpt}
            </p>

            <div className="mt-8">
              <span className="rounded-full bg-white/70 px-4 py-2 text-sm text-[#5c6e5c]">
                {blog.date}
              </span>
            </div>
          </div>

          {/* SAĞ - GÖRSEL + KUTULAR */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="overflow-hidden rounded-[28px] bg-white sm:col-span-2">
              <img
                src={blog.image}
                alt={blog.title}
                className="h-[320px] w-full object-cover sm:h-[380px]"
              />
            </div>

            <div className="rounded-[28px] bg-[#e8f7ff] p-6">
              <h2 className="text-xl font-semibold text-[#203546]">
                Teknik Bakış
              </h2>
              <p className="mt-3 text-sm leading-6 text-[#53656f]">
                Topcon sistemleri ve saha kullanımıyla ilgili öne çıkan teknik
                noktalar.
              </p>
            </div>

            <div className="rounded-[28px] bg-[#fff6c9] p-6">
              <h2 className="text-xl font-semibold text-[#4b4322]">
                Servis Notu & Özet
              </h2>
              <p className="mt-3 text-sm leading-6 text-[#665f3b]">
                Kurulum, bakım ve kalibrasyon süreçleri birlikte
                değerlendirilmelidir. Bu içerik, satın alma ve saha performansı
                açısından kısa bir rehber sunar.
              </p>
            </div>
          </div>
        </section>

        {/* ALT - İÇERİK */}
        <section className="mt-8">
          <div className="rounded-[28px] bg-white/80 p-7 shadow-sm sm:p-10 lg:p-12">
            <div className="space-y-8">
              {blog.content?.map((section, index) => {
                if (typeof section === "string") {
                  return (
                    <p
                      key={index}
                      className="text-base leading-8 text-[#4f5c4f] sm:text-lg sm:leading-9"
                    >
                      {section}
                    </p>
                  );
                }

                return (
                  <div key={index}>
                    {section.heading && (
                      <h2 className="mb-3 text-2xl font-semibold text-[#243524]">
                        {section.heading}
                      </h2>
                    )}

                    <p className="text-base leading-8 text-[#4f5c4f] sm:text-lg sm:leading-9">
                      {section.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </article>
    </main>
  );
};

export default BlogDetailPage;
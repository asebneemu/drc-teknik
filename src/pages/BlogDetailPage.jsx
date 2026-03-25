import { useParams, Link } from "react-router-dom";
import blogs from "../data/blogs";

const BlogDetailPage = () => {
  const { slug } = useParams();
  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    return (
      <div className="w-full bg-[#f7f9fc] py-12 sm:py-16 lg:py-20">
        <div className="w-[75%] mx-auto text-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Blog bulunamadı
          </h1>
          <Link
            to="/blog"
            className="text-emerald-600 text-sm sm:text-base font-semibold hover:underline"
          >
            Blog sayfasına dön
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#f7f9fc] py-12 sm:py-16 lg:py-20">
      <div className="w-[75%] mx-auto">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/blog"
            className="inline-block mb-6 sm:mb-8 text-sm sm:text-base text-emerald-600 font-semibold hover:underline"
          >
            ← Bloga geri dön
          </Link>

          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-[220px] sm:h-[300px] md:h-[360px] lg:h-[420px] object-cover rounded-2xl shadow-md mb-6 sm:mb-8"
          />

          <p className="text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3">
            {blog.date}
          </p>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
            {blog.title}
          </h1>

          <div className="bg-white rounded-2xl shadow-sm border border-black/5 p-5 sm:p-8 md:p-10">
            {blog.content.trim().split("\n\n").map((paragraph, index) => (
              <p
                key={index}
                className="text-gray-700 leading-7 sm:leading-8 text-sm sm:text-base lg:text-[17px] mb-5 sm:mb-6 last:mb-0"
              >
                {paragraph.trim()}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
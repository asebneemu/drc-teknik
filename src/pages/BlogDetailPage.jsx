import { useParams, Link } from "react-router-dom";
import blogs from "../data/blogs";

const BlogDetailPage = () => {
  const { slug } = useParams();
  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    return (
      <div className="w-full bg-[#f7f9fc] py-20">
        <div className="w-[75%] mx-auto text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Blog bulunamadı
          </h1>
          <Link to="/blog" className="text-emerald-600 font-semibold hover:underline">
            Blog sayfasına dön
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#f7f9fc] py-20">
      <div className="w-[75%] mx-auto">
        <div className="max-w-4xl mx-auto">
          <Link to="/blog" className="inline-block mb-8 text-emerald-600 font-semibold hover:underline">
            ← Bloga geri dön
          </Link>

          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-[420px] object-cover rounded-2xl shadow-md mb-8"
          />

          <p className="text-sm text-gray-500 mb-3">{blog.date}</p>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            {blog.title}
          </h1>

          <div className="bg-white rounded-2xl shadow-sm border border-black/5 p-8 md:p-10">
            {blog.content.trim().split("\n\n").map((paragraph, index) => (
              <p
                key={index}
                className="text-gray-700 leading-8 text-[17px] mb-6 last:mb-0"
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
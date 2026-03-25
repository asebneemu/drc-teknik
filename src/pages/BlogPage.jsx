import BlogCard from "../components/BlogCard";
import blogs from "../data/blogs";

const BlogPage = () => {
  return (
    <div className="w-full bg-[#f7f9fc] py-12 sm:py-16 lg:py-20">
      <div className="w-[75%] mx-auto">
        <div className="text-center mb-10 sm:mb-12 lg:mb-14">
          <span className="inline-block text-emerald-700 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-3 sm:mb-4">
            Blog
          </span>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-5">
            Güncel Yazılar ve Teknik İçerikler
          </h1>

          <p className="max-w-3xl mx-auto text-gray-600 text-sm sm:text-base lg:text-lg leading-7 sm:leading-8">
            Harita teknolojileri, teknik servis süreçleri, bakım, kalibrasyon ve
            ekipman kullanımıyla ilgili güncel içeriklerimizi buradan inceleyebilirsiniz.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              title={blog.title}
              date={blog.date}
              image={blog.image}
              slug={blog.slug}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
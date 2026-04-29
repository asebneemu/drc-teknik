import BlogCard from "./BlogCard";
import blogs from "../data/blogs";

const BlogSection = () => {
  const selectedIds = [1, 3, 5];

  const selectedBlogs = blogs.filter((blog) => selectedIds.includes(blog.id));

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="text-center mb-8 sm:mb-10 lg:mb-12">
        <h2 className="font-bold text-gray-800 mb-2 text-2xl sm:text-3xl lg:text-4xl">
          Topcon Bülten
        </h2>

        <p className="text-gray-500 text-sm sm:text-base lg:text-lg">
          Güncel gelişmeler, saha deneyimleri ve teknik bilgiler
        </p>
      </div>

      <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {selectedBlogs.map((blog) => (
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
  );
};

export default BlogSection;
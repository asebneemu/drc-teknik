import BlogCard from "./BlogCard";
import blogs from "../data/blogs";

const BlogSection = () => {
  const latestBlogs = blogs.slice(0, 3);

  return (
    <div className="w-[75%] mx-auto py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Blog
        </h2>
        <p className="text-gray-500">
          Güncel Gelişmeler ve Teknik İçerikler
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {latestBlogs.map((blog) => (
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
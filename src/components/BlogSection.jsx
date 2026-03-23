// src/components/blog/BlogSection.jsx
import BlogCard from "./BlogCard";

const BlogSection = () => {
  return (
    <div className="w-[75%] mx-auto py-20">
      
      {/* Başlık */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Blog
        </h2>
        <p className="text-gray-500">
          Güncel Gelişmeler ve Teknik İçerikler
        </p>
      </div>

      {/* Kartlar */}
      <div className="grid md:grid-cols-3 gap-8">
        <BlogCard
          title="GNSS Teknolojilerinde Yeni Gelişmeler"
          date="12 Mart 2026"
          image="/blog1.jpg"
        />

        <BlogCard
          title="Total Station Kullanım Rehberi"
          date="8 Mart 2026"
          image="/blog2.jpg"
        />

        <BlogCard
          title="Harita Ölçümünde Dikkat Edilmesi Gerekenler"
          date="3 Mart 2026"
          image="/blog3.jpg"
        />
      </div>

    </div>
  );
};

export default BlogSection;
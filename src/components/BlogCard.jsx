import { Link } from "react-router-dom";

const BlogCard = ({ title, date, image, slug }) => {
  return (
    <Link
      to={`/blog/${slug}`}
      className="block cursor-pointer group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
    >
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-4 bg-white">
        <p className="text-sm text-gray-500 mb-1">{date}</p>
        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-emerald-600 transition">
          {title}
        </h3>
      </div>
    </Link>
  );
};

export default BlogCard;


const BlogCard = ({ title, date, image }) => {
  return (
    <div className="cursor-pointer group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
      
      {/* Görsel */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* İçerik */}
      <div className="p-4 bg-white">
        <p className="text-sm text-gray-500 mb-1">{date}</p>
        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-emerald-600 transition">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default BlogCard;
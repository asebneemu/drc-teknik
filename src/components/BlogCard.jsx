import { Link } from "react-router-dom";

const BlogCard = ({ title, date, image, slug }) => {
  return (
    <Link
      to={`/blog/${slug}`}
      className="
        group block h-full overflow-hidden rounded-xl bg-white
        shadow-md transition-all duration-300
        hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2
      "
    >
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="
            h-44 w-full object-cover transition duration-500 group-hover:scale-105
            sm:h-48
            md:h-52
            lg:h-56
            xl:h-60
            2xl:h-72
          "
        />
      </div>

      <div
        className="
          flex min-h-[120px] flex-col justify-between
          p-3
          sm:p-4
          lg:p-5
          2xl:p-6
        "
      >
        <p
          className="
            mb-2 text-xs text-gray-500
            sm:text-sm
            lg:text-base
            2xl:text-lg
          "
        >
          {date}
        </p>

        <h3
          className="
            line-clamp-2 font-semibold text-gray-800 transition group-hover:text-emerald-600
            text-base leading-snug
            sm:text-lg
            md:text-xl
            lg:text-xl
            2xl:text-2xl
          "
        >
          {title}
        </h3>
      </div>
    </Link>
  );
};

export default BlogCard;
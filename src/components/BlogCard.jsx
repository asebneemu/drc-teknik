import { Link } from "react-router-dom";

const BlogCard = ({ title, date, image, slug, category, excerpt }) => {
  return (
    <Link to={`/blog/${slug}`} className="group block h-full">
      <article
        className="
          h-full flex flex-col
          border border-slate-200 bg-white
          transition-all duration-300
          hover:border-slate-300
          hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)]
        "
      >
        {/* IMAGE */}
        <div className="relative overflow-hidden bg-slate-100">
          <img
            src={image}
            alt={title}
            className="
              w-full object-cover
              h-44 sm:h-48 lg:h-44
              transition duration-500 group-hover:scale-[1.03]
            "
          />
        </div>

        {/* CONTENT */}
        <div className="flex flex-1 flex-col p-5 sm:p-6">
          {/* META */}
          <div className="mb-3 flex items-center justify-between text-[11px] sm:text-xs">
            <span className="font-semibold uppercase tracking-[0.18em] text-[#6f8f72]">
              {category}
            </span>

            <span className="text-slate-400">{date}</span>
          </div>

          {/* TITLE */}
          <h3
            className="
              text-base sm:text-lg font-semibold leading-snug text-slate-950
              line-clamp-2
              transition group-hover:text-[#6f8f72]
            "
          >
            {title}
          </h3>

          {/* EXCERPT */}
          <p className="mt-3 text-sm leading-6 text-slate-600 line-clamp-3">
            {excerpt}
          </p>

          {/* CTA */}
          <div className="mt-auto pt-5">
            <span className="inline-flex items-center text-sm font-semibold text-slate-900">
              Haberi İncele
              <span className="ml-2 transition group-hover:translate-x-1">
                →
              </span>
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;
import { useEffect, useState } from "react";

const TopconShowcaseSlider = () => {
  const images = [
    "/topcon/1.jpeg",
    "/topcon/2.jpeg",
    "/topcon/3.jpeg",
    "/topcon/4.jpeg",
    "/topcon/5.jpeg",
    "/topcon/6.jpeg",
    "/topcon/7.jpeg",
    "/topcon/8.jpeg",
  ];

  const total = images.length;
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % total);
    }, 6000);

    return () => clearInterval(timer);
  }, [total]);

  return (
    <div className="w-[80%] mx-auto py-12 mt-40 mb-60">
      <h3 className="text-2xl font-bold text-emerald-800 text-center mb-8">
        Topcon Ürün Galerisi
      </h3>

      <div className="relative flex justify-center items-center h-[420px]">
        {images.map((img, i) => {
          let offset = i - active;

          if (offset > total / 2) offset -= total;
          if (offset < -total / 2) offset += total;

          return (
            <div
              key={i}
              className="absolute w-[700px] h-[400px] rounded-2xl shadow-xl overflow-hidden transition-all duration-700"
              style={{
                transform: `translateX(${offset * 90}px) scale(${offset === 0 ? 1 : 0.85})`,
                zIndex: total - Math.abs(offset),
                opacity: offset < -2 || offset > 2 ? 0 : 1,
                filter: offset === 0 ? "none" : "grayscale(0.3) blur(1px)",
              }}
            >
              <img
                src={img}
                alt={`Topcon ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopconShowcaseSlider;
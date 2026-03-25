// src/components/contents/TripleShowcase.jsx
import { useEffect, useState } from "react";

const panels = [
  {
    title: "Yetkili Servis",
    text: "Lorem ipsum dolor sit amet.",
    img: "/content1.jpeg",
  },
  {
    title: "Bakım Onarım Kalibrasyon",
    text: "Lorem ipsum dolor sit amet.",
    img: "/content2.webp",
  },
  {
    title: "Teknik Servis",
    text: "Lorem ipsum dolor sit amet.",
    img: "/content3.jpeg",
  },
];

const TripleShowcase = () => {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => {
        if (prev === panels.length - 1) {
          setDirection(-1);
          return prev - 1;
        }

        if (prev === 0) {
          setDirection(1);
          return prev + 1;
        }

        return prev + direction;
      });
    }, 8000);

    return () => clearInterval(interval);
  }, [direction]);

  return (
    <div className="w-full py-12 sm:py-16 lg:py-20 bg-white">
      <div className="w-full flex justify-center">
        <div className="w-[75%]">
          <div className="relative group overflow-hidden rounded-2xl shadow-lg">
            <img
              src={panels[active].img}
              alt={panels[active].title}
              className="w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[7/4] object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
              <div className="text-center px-4 sm:px-6">
                <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3">
                  {panels[active].title}
                </h3>
                <p className="text-white text-sm sm:text-base">
                  {panels[active].text}
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-2 sm:gap-3 mt-4 sm:mt-6">
            {panels.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  i === active ? "bg-emerald-600 scale-110" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripleShowcase;
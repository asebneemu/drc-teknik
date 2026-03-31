import { useEffect, useState } from "react";
import { IconArrowRight } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const TopconTarimGrubu = () => {
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
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % total);
    }, 2200);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(timer);
    };
  }, [total]);

  const getTranslateX = (offset) => {
    if (isMobile) return offset * 45;
    if (isTablet) return offset * 80;
    return offset * 120;
  };

  return (
    <section className="relative w-full overflow-hidden py-8 sm:py-10 lg:py-12 border-y-[4px] border-black bg-[linear-gradient(135deg,#294d73_0%,#5c7891_14%,#c8d0d8_32%,#eef3f7_50%,#bcc8d3_67%,#6f8fa9_84%,#8fb2ca_100%)]">
      
      {/* METAL EFFECT */}
      <div className="pointer-events-none absolute inset-0 opacity-45 bg-[linear-gradient(115deg,rgba(255,255,255,0.42)_0%,rgba(255,255,255,0.16)_18%,rgba(255,255,255,0.04)_34%,rgba(255,255,255,0)_48%,rgba(255,255,255,0.14)_62%,rgba(255,255,255,0.34)_80%,rgba(255,255,255,0.12)_100%)]"></div>
      <div className="pointer-events-none absolute inset-0 opacity-22 bg-[repeating-linear-gradient(165deg,rgba(255,255,255,0.18)_0px,rgba(255,255,255,0.18)_2px,rgba(255,255,255,0)_2px,rgba(255,255,255,0)_10px)]"></div>
      <div className="pointer-events-none absolute inset-0 opacity-18 bg-[radial-gradient(circle_at_50%_32%,rgba(255,255,255,0.58)_0%,rgba(255,255,255,0.16)_24%,rgba(255,255,255,0)_58%)]"></div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* TITLE */}
        <h2 className="font-[Barlow] mb-6 text-center text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-[0.12em] uppercase text-[#111827]">
          Topcon Tarım Grubu
        </h2>

        {/* SLIDER */}
        <div className="relative mx-auto mb-8 flex h-[220px] items-center justify-center overflow-hidden sm:mb-10 sm:h-[300px] lg:h-[420px]">
          {images.map((img, i) => {
            let offset = i - active;

            if (offset > total / 2) offset -= total;
            if (offset < -total / 2) offset += total;

            return (
              <div
                key={i}
                className="
                  absolute overflow-hidden rounded-2xl shadow-2xl transition-all duration-500
                  w-[240px] h-[160px]
                  sm:w-[420px] sm:h-[250px]
                  lg:w-[720px] lg:h-[400px]
                "
                style={{
                  transform: `translateX(${getTranslateX(offset)}px) scale(${offset === 0 ? 1 : 0.86})`,
                  zIndex: total - Math.abs(offset),
                  opacity: offset < -2 || offset > 2 ? 0 : 1,
                  filter: offset === 0 ? "none" : "grayscale(0.15) blur(1px)",
                }}
              >
                <img
                  src={img}
                  alt={`Topcon Tarım Grubu ${i + 1}`}
                  className="h-full w-full object-cover"
                />
              </div>
            );
          })}
        </div>

        {/* TEXT */}
        <p className="mx-auto w-full text-justify text-sm leading-7 text-[#111827] sm:w-[85%] sm:text-base sm:leading-8 lg:w-[80%]">
          Topcon Tarım Grubu ürünleri; sahada verimliliği artıran, hassas ölçüm
          ve yönlendirme çözümleri sunan profesyonel sistemlerden oluşur. Modern
          tarım uygulamalarına uygun bu ekipmanlar, operasyonel kolaylık ve
          yüksek performansı bir arada sağlayarak kullanıcıya güvenilir, verimli
          ve sürdürülebilir bir çalışma deneyimi sunar.
        </p>

        {/* LINK + OK */}
        <div className="mt-6 flex justify-center">
          <Link
            to="/tarim"
            className="group flex items-center gap-2 text-sm sm:text-base font-semibold text-[#111827] transition"
          >
            Topcon Agriculture hakkında daha fazla bilgi
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              <IconArrowRight size={18} />
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default TopconTarimGrubu;
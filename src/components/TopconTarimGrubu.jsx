import { useEffect, useState } from "react";
import { IconArrowRight } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

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
  const [isClicked, setIsClicked] = useState(false);

  const navigate = useNavigate();

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

  const handleGoToTarim = () => {
    if (isClicked) return;

    setIsClicked(true);

    setTimeout(() => {
      navigate("/tarim");
    }, 850);
  };

  return (
    <section className="relative w-full overflow-hidden border-y-[4px] border-black bg-[linear-gradient(135deg,#294d73_0%,#5c7891_14%,#c8d0d8_32%,#eef3f7_50%,#bcc8d3_67%,#6f8fa9_84%,#8fb2ca_100%)] py-10 sm:py-12 lg:py-16">
      {/* METAL EFFECT */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.42)_0%,rgba(255,255,255,0.16)_18%,rgba(255,255,255,0.04)_34%,rgba(255,255,255,0)_48%,rgba(255,255,255,0.14)_62%,rgba(255,255,255,0.34)_80%,rgba(255,255,255,0.12)_100%)] opacity-45"></div>
      <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(165deg,rgba(255,255,255,0.18)_0px,rgba(255,255,255,0.18)_2px,rgba(255,255,255,0)_2px,rgba(255,255,255,0)_10px)] opacity-22"></div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_32%,rgba(255,255,255,0.58)_0%,rgba(255,255,255,0.16)_24%,rgba(255,255,255,0)_58%)] opacity-18"></div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* TITLE */}
        <div className="mx-auto mb-8 max-w-4xl text-center">
          <span className="mb-3 inline-block rounded-full border border-[#111827]/20 bg-white/35 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#111827] backdrop-blur">
            Hassas Tarım Teknolojileri
          </span>

          <h2 className="font-[Barlow] text-2xl font-bold uppercase tracking-[0.12em] text-[#111827] sm:text-3xl lg:text-4xl">
            Topcon Agriculture
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-justify text-sm leading-7 text-[#111827] sm:text-base sm:leading-8">
            Topcon Agriculture ürünleri; sahada verimliliği artıran, hassas
            ölçüm ve yönlendirme çözümleri sunan profesyonel sistemlerden
            oluşur. Modern tarım uygulamalarına uygun bu ekipmanlar,
            operasyonel kolaylık ve yüksek performansı bir arada sağlayarak
            kullanıcıya güvenilir, verimli ve sürdürülebilir bir çalışma
            deneyimi sunar.
          </p>
        </div>

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
                  h-[160px] w-[240px]
                  sm:h-[250px] sm:w-[420px]
                  lg:h-[400px] lg:w-[720px]
                "
                style={{
                  transform: `translateX(${getTranslateX(offset)}px) scale(${
                    offset === 0 ? 1 : 0.86
                  })`,
                  zIndex: total - Math.abs(offset),
                  opacity: offset < -2 || offset > 2 ? 0 : 1,
                  filter:
                    offset === 0 ? "none" : "grayscale(0.15) blur(1px)",
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

        {/* CTA BUTTON */}
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={handleGoToTarim}
            className={`
              relative flex h-[62px] items-center overflow-hidden rounded-full
              border border-white/60 bg-[#dff3df]/65
              shadow-[0_18px_45px_rgba(35,82,45,0.18)]
              backdrop-blur-xl
              transition-all duration-700 ease-in-out
              hover:border-white/80 hover:bg-[#e8f8e8]/75
              hover:shadow-[0_20px_55px_rgba(35,82,45,0.26)]
              sm:h-[68px]
              ${
                isClicked
                  ? "w-[132px] cursor-default px-4 sm:w-[150px]"
                  : "w-[350px] px-4 sm:w-[430px] sm:px-5"
              }
            `}
          >
            <span className="pointer-events-none absolute inset-0 rounded-full bg-white/20"></span>
            <span className="pointer-events-none absolute inset-0 rounded-full bg-[linear-gradient(135deg,rgba(255,255,255,0.75)_0%,rgba(255,255,255,0.22)_42%,rgba(114,179,105,0.18)_100%)]"></span>

            {/* ARROW */}
            <span
              className={`
                absolute z-10 flex h-10 w-10 items-center justify-center rounded-full
                bg-white/85 text-[#244c2b]
                shadow-[0_8px_22px_rgba(35,82,45,0.16)]
                transition-all duration-700 ease-in-out
                sm:h-11 sm:w-11
                ${
                  isClicked
                    ? "left-[70px] sm:left-[82px]"
                    : "left-4 sm:left-5"
                }
              `}
            >
              <IconArrowRight size={20} stroke={2.5} />
            </span>

            {/* TEXT */}
            <span
              className={`
                absolute left-1/2 z-10 -translate-x-1/2 whitespace-nowrap
                text-sm font-semibold tracking-tight text-[#244c2b]
                transition-all duration-300 ease-in-out
                sm:text-base
                ${
                  isClicked
                    ? "scale-95 opacity-0"
                    : "scale-100 opacity-100"
                }
              `}
            >
              Tarımda Hassas Teknolojiyi Keşfet
            </span>

            {/* LOGO */}
            <img
              src="/topcon.png"
              alt="Topcon"
              className={`
                absolute z-10 h-6 w-auto object-contain
                transition-all duration-700 ease-in-out
                sm:h-7
                ${
                  isClicked
                    ? "right-[68px] sm:right-[80px]"
                    : "right-5 sm:right-6"
                }
              `}
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopconTarimGrubu;
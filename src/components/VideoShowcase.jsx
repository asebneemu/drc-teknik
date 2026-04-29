import { useRef, useState } from "react";

const VideoShowcase = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleToggleVideo = async () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      try {
        await videoRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.error("Video oynatılamadı:", error);
      }
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section className="w-full bg-[#fbfdf9] py-16 sm:py-24">
      <div className="mx-auto w-[90%] xl:w-[74%]">
        <div className="mx-auto mb-12 max-w-3xl text-center">
       

          <h2 className="mb-5 text-2xl font-semibold tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
            Sahadaki Teknolojiyi Daha Yakından Görün
          </h2>

          <p className="mx-auto max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            Hassas tarım çözümlerinin çalışma prensibini, saha kullanımını ve
            operasyonel avantajlarını sade bir video deneyimiyle inceleyin.
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden bg-[#f4f9f1] p-[1px] shadow-[0_32px_90px_rgba(38,56,35,0.12)]">
            <div className="pointer-events-none absolute -inset-[45%] animate-[spin_10s_linear_infinite] bg-[conic-gradient(from_90deg,transparent_0deg,transparent_80deg,rgba(218,239,210,0.95)_125deg,rgba(255,255,255,0.95)_160deg,transparent_215deg,transparent_360deg)]" />

            <div className="relative bg-white p-3">
              <video
                ref={videoRef}
                className="aspect-video w-full bg-[#f5faf2] object-cover"
                src="/topcon-video-orta.mp4"
                poster="/service-bg-2.jpg"
                controls
                playsInline
                preload="metadata"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between border border-[#e4eee0] bg-white/80 px-5 py-4 backdrop-blur-xl">
            <div>
              <p className="text-sm font-semibold text-slate-950">
                Topcon Agriculture
              </p>
              <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                Hassas tarım teknolojileri tanıtım videosu
              </p>
            </div>

            <button
              type="button"
              onClick={handleToggleVideo}
              className="text-xs font-semibold uppercase tracking-[0.22em] text-[#6f8f72] transition hover:text-slate-950"
            >
              {isPlaying ? "Duraklat" : "İzle"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
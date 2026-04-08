import { useEffect, useRef } from "react";

export default function HeroVideo() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      setTimeout(() => {
        video.currentTime = 0;
        video.play();
      }, 2000); // 2 saniye bekleme
    };

    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <section className="w-full overflow-hidden">
      <video
        ref={videoRef}
        className="w-full h-auto object-cover"
        autoPlay
        muted
        playsInline
      >
        <source src="/bg-3.mp4" type="video/mp4" />
      </video>
    </section>
  );
}
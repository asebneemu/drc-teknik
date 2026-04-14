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
      }, 3000); // 3 saniye bekleme
    };

    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <section className="w-full bg-black overflow-hidden">
      <video
        ref={videoRef}
        className="w-full h-auto object-cover"
        autoPlay
        muted
        playsInline
      >
        <source src="/video-bg-.mp4" type="video/mp4" />
      </video>
    </section>
  );
}
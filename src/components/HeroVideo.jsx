import { useEffect, useRef, useState } from "react";

export default function HeroVideo() {
  const introRef = useRef(null);
  const loopRef = useRef(null);
  const [introEnded, setIntroEnded] = useState(false);

  useEffect(() => {
    const intro = introRef.current;
    if (!intro) return;

    const onEnded = async () => {
      setIntroEnded(true);

      const loopVideo = loopRef.current;
      if (!loopVideo) return;

      loopVideo.currentTime = 0;
      loopVideo.muted = true;

      try {
        await loopVideo.play();
      } catch (e) {
        console.error("Loop video oynatilmadi:", e);
      }
    };

    intro.addEventListener("ended", onEnded);

    const startIntro = async () => {
      intro.muted = false;
      intro.volume = 1;

      try {
        await intro.play();
      } catch (e) {
        console.error("Intro video autoplay engellendi:", e);
      }
    };

    startIntro();

    return () => {
      intro.removeEventListener("ended", onEnded);
    };
  }, []);

  return (
    <section className="relative w-full overflow-hidden">
      <video
        ref={introRef}
        className={`block w-full h-auto object-cover ${introEnded ? "hidden" : "block"}`}
        playsInline
        preload="auto"
      >
        <source src="/bg-3.mp4" type="video/mp4" />
        Tarayıcın video etiketini desteklemiyor.
      </video>

      <video
        ref={loopRef}
        className={`w-full h-auto object-cover ${introEnded ? "block" : "hidden"}`}
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/bg-3.mp4" type="video/mp4" />
        Tarayıcın video etiketini desteklemiyor.
      </video>
    </section>
  );
}
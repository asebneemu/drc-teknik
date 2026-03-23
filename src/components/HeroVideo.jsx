export default function HeroVideo() {
  return (
    <section className="w-full">
      <video
        className="block w-full h-auto"
        autoPlay
        muted
        playsInline
        preload="auto"
      >
        <source src="/bg-13.mp4" type="video/mp4" />
        Tarayıcın video etiketini desteklemiyor.
      </video>
    </section>
  );
}
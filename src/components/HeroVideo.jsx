export default function HeroVideo() {
  return (
    <section className="w-full overflow-hidden">
      <video
        className="block w-full h-auto object-cover"
        autoPlay
        muted
        playsInline
        preload="auto"
      >
        <source src="/bg-3.mp4" type="video/mp4" />
        Tarayıcın video etiketini desteklemiyor.
      </video>
    </section>
  );
}
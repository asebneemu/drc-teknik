export default function HeroVideo() {
  return (
    <section className="w-full overflow-hidden">
      <video
        className="w-full h-auto object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/bg-3.mp4" type="video/mp4" />
      </video>
    </section>
  );
}
import Header from "./components/Header";
import HeroVideo from "./components/HeroVideo";
import ServicesSection from "./components/ServicesSection";
import TripleShowcase from "./components/TripleShowcase";
import ExperienceHighlightSection from "./components/ExperienceHighlightSection";
import GlassInfoSection from "./components/GlassInfoSection";
import WhatsAppCTASection from "./components/WhatsAppCTASection";
import BlogSection from "./components/BlogSection";
import FooterSection from "./components/FooterSection";

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#f7f9fc]">
      <Header />
      <HeroVideo />
      <TripleShowcase />
      <GlassInfoSection />
      <ExperienceHighlightSection />
      <WhatsAppCTASection />
      <BlogSection />
      <FooterSection />
    </div>
  );
}
import Header from "../components/Header";
import HeroVideo from "../components/HeroVideo";
import TripleShowcase from "../components/TripleShowcase";
import GlassInfoSection from "../components/GlassInfoSection";
import ExperienceHighlightSection from "../components/ExperienceHighlightSection";
import WhatsAppCTASection from "../components/WhatsAppCTASection";
import BlogSection from "../components/BlogSection";
import FooterSection from "../components/FooterSection";

const HomePage = () => {
  return (
    <div className="min-h-screen w-full bg-[#f7f9fc]">
      <HeroVideo />
      <TripleShowcase />
      <GlassInfoSection />
      <ExperienceHighlightSection />
      <WhatsAppCTASection />
      <BlogSection />
      <FooterSection />
    </div>
  );
};

export default HomePage;
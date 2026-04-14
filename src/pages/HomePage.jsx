import Header from "../components/Header";
import HeroVideo from "../components/HeroVideo";
import TripleShowcase from "../components/TripleShowcase";
import GlassInfoSection from "../components/GlassInfoSection";
import ExperienceHighlightSection from "../components/ExperienceHighlightSection";
import WhatsAppCTASection from "../components/WhatsAppCTASection";
import BlogSection from "../components/BlogSection";
import FooterSection from "../components/FooterSection";
import ExperienceContactSection from "../components/ExperienceContactSection";
import ContactSection from "../components/ContactSection";

import TopconTarimGrubu from "../components/TopconTarimGrubu";
import ServiceHighlights from "../components/ServiceHighlights";

import AuthorizedServiceCenter from "../components/AuthorizedServiceCenter";

import FullWidthBackgroundSection from "../components/FullWidthBackgroundSection";

const HomePage = () => {
  return (
    <div className="min-h-screen w-full bg-[#d8dee6]">


      <main className="w-full">
        
        <AuthorizedServiceCenter />
        <HeroVideo />
        <FullWidthBackgroundSection />
        <TopconTarimGrubu />
        <GlassInfoSection />

        <ExperienceContactSection />
        <BlogSection />
        <ContactSection />
      </main>

    </div>
  );
};

export default HomePage;
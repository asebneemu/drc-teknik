import TripleShowcase from "../components/TripleShowcase";
import StatsSection from "../components/StatsSection";
import CompletedServicesSection from "../components/CompletedServicesSection";

const ServicesPage = () => {
  return (
    <div className="w-full bg-white">
      <main className="w-full">
        {/* İstatistikler */}
        <StatsSection />

        {/* Servis tanıtım */}
        <TripleShowcase />

        <CompletedServicesSection />
      </main>
    </div>
  );
};

export default ServicesPage;
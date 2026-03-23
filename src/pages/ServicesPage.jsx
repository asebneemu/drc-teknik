import TripleShowcase from "../components/TripleShowcase";
import StatsSection from "../components/StatsSection";
import CompletedServicesSection from "../components/CompletedServicesSection";

const ServicesPage = () => {
  return (
    <div className="bg-white">
      {/* İstatistikler */}
      <StatsSection />

      {/* Servis tanıtım */}
      <TripleShowcase />

      <CompletedServicesSection />
    </div>
  );
};

export default ServicesPage;

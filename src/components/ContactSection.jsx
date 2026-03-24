import LocationMapCard from "./LocationMapCard";
import ContactFormCard from "./ContactFormCard";

const ContactSection = () => {
  return (
    <div className="w-full py-20 bg-[#f7f9fc]">
      <div className="w-[75%] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-stretch">
          <div className="w-full lg:w-[40%]">
            <LocationMapCard />
          </div>

          <div className="hidden lg:block lg:w-[13.3333%]" />

          <div className="w-full lg:w-[46.6667%] mt-8 lg:mt-0">
            <ContactFormCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
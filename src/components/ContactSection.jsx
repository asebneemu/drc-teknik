import LocationMapCard from "./LocationMapCard";
import ContactFormCard from "./ContactFormCard";

const ContactSection = () => {
  return (
    <div className="w-full bg-[#f7f9fc] py-10 sm:py-12 lg:py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className="
            flex flex-col
            gap-5 sm:gap-6 lg:flex-row lg:items-stretch lg:gap-8
          "
        >
          <div className="w-full lg:w-5/12">
            <LocationMapCard />
          </div>

          <div className="w-full lg:w-7/12">
            <ContactFormCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
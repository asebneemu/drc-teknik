import ContactSection from "../components/ContactSection";
import WhatsAppCTASection from "../components/WhatsAppCTASection";
import FooterSection from "../components/FooterSection";

const ContactPage = () => {
  return (
    <div className="w-full bg-[#f7f9fc] py-12 sm:py-16 lg:py-20">
      
      {/* Başlık */}
      <div className="w-[75%] mx-auto text-center mb-10 sm:mb-12 lg:mb-16">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
          Bizimle İletişime Geçin
        </h1>
        <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-6 sm:leading-7">
          Teknik servis, bakım, onarım ve ürünler hakkında bilgi almak için bizimle iletişime geçebilirsiniz.
        </p>
      </div>

      {/* Harita + Form */}
      <ContactSection />

      {/* WhatsApp */}
      <WhatsAppCTASection />

      {/* Footer */}
      <FooterSection />
    </div>
  );
};

export default ContactPage;
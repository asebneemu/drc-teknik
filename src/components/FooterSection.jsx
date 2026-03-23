// src/components/layout/FooterSection.jsx
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import {
  FiMapPin,
  FiPhone,
  FiMail,
} from "react-icons/fi";

const FooterSection = () => {
  return (
    <footer className="w-full bg-[#061225] text-white">
      <div className="w-[85%] mx-auto py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* 1. Sütun */}
          <div>
            <img
              src="/logo-beyaz.png"
              alt="DRC Teknik"
              className="w-48 mb-6"
            />

            <p className="text-white/80 leading-8 mb-8">
              DRC Teknik, CHCNAV & EFIX yetkili servisi olarak harita
              teknolojilerinde uzman bakım, onarım ve kalibrasyon
              hizmetleri sunar. TOTALSTATION, GPS ve diğer cihazlarınız
              için güvenilir çözüm ortağınız.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-xl text-white/80 hover:text-white hover:border-white transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-xl text-white/80 hover:text-white hover:border-white transition"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-xl text-white/80 hover:text-white hover:border-white transition"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* 2. Sütun */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 relative inline-block">
              Menü
              <span className="block w-10 h-[2px] bg-blue-500 mt-2"></span>
            </h3>

            <ul className="space-y-4 text-white/80">
              <li>
                <a href="/" className="hover:text-white transition">
                  Anasayfa
                </a>
              </li>
              <li>
                <a href="/kurumsal" className="hover:text-white transition">
                  Kurumsal
                </a>
              </li>
              <li>
                <a href="/urunler" className="hover:text-white transition">
                  2. El Ürünlerimiz
                </a>
              </li>
              <li>
                <a href="/kampanyali-cihazlar" className="hover:text-white transition">
                  Kampanyalı Cihazlar
                </a>
              </li>
              <li>
                <a href="/hizmetlerimiz" className="hover:text-white transition">
                  Hizmetlerimiz
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-white transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="/iletisim" className="hover:text-white transition">
                  İletişim
                </a>
              </li>
            </ul>
          </div>

          {/* 3. Sütun */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 relative inline-block">
              Hizmetlerimiz
              <span className="block w-10 h-[2px] bg-blue-500 mt-2"></span>
            </h3>

            <ul className="space-y-4 text-white/80">
              <li>
                <a href="/yetkili-servis" className="hover:text-white transition">
                  Yetkili Servis
                </a>
              </li>
              <li>
                <a href="/bakim-onarim-kalibrasyon" className="hover:text-white transition">
                  Bakım Onarım Kalibrasyon
                </a>
              </li>
              <li>
                <a href="/teknik-servis" className="hover:text-white transition">
                  Teknik Servis
                </a>
              </li>
            </ul>
          </div>

          {/* 4. Sütun */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 relative inline-block">
              İletişim Bilgileri
              <span className="block w-10 h-[2px] bg-blue-500 mt-2"></span>
            </h3>

            <div className="space-y-6 text-white/80">
              <div className="flex items-start gap-3">
                <FiMapPin className="text-blue-500 text-xl mt-1 shrink-0" />
                <p className="leading-8">
                  Ehlibeyt Mahallesi Ceyhun Atıf Kansu Caddesi 104/12,
                  Çankaya/Ankara
                </p>
              </div>

              <div className="flex items-center gap-3">
                <FiPhone className="text-blue-500 text-xl shrink-0" />
                <a href="tel:05309222322" className="hover:text-white transition">
                  0530 922 23 22
                </a>
              </div>

              <div className="flex items-center gap-3">
                <FiMail className="text-blue-500 text-xl shrink-0" />
                <a
                  href="mailto:info@drcteknik.com"
                  className="hover:text-white transition"
                >
                  info@drcteknik.com
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
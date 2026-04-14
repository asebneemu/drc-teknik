import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import {
  FiMapPin,
  FiPhone,
  FiMail,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const FooterSection = () => {
  const goTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  };

  return (
    <footer className="w-full bg-[#061225] text-white">
      <div className="mx-auto w-[90%] lg:w-full max-w-7xl py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-10 sm:gap-12 md:grid-cols-2 xl:grid-cols-4">
          {/* 1. Sütun */}
          <div>
            <img
              src="/logo-beyaz.png"
              alt="DRC Teknik"
              className="mb-5 sm:mb-6 w-36 sm:w-44 lg:w-48"
            />

            <p className="mb-6 sm:mb-8 text-sm sm:text-base leading-7 sm:leading-8 text-white/80">
DRC Teknik, Topcon Agriculture ürünleri için yetkili servis merkezi olarak, tarım teknolojileri alanında bakım, onarım ve kalibrasyon hizmetleri sunar. Sahada kullanılan sistemlerin performansını korumaya yönelik teknik destek ve servis süreçleriyle güvenilir bir çözüm ortağıdır.
            </p>

            <div className="flex items-center gap-3 sm:gap-4">
  {/* WHATSAPP */}
  <a
    href="https://wa.me/905XXXXXXXXX"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="WhatsApp"
    className="
      flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center
      rounded-full border border-white/20 text-base sm:text-xl text-white/80
      transition hover:border-white hover:text-white
    "
  >
    <FaWhatsapp />
  </a>

  {/* LINKEDIN */}
  <a
    href="https://www.linkedin.com/in/drc-teknik-65185aa2/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    className="
      flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center
      rounded-full border border-white/20 text-base sm:text-xl text-white/80
      transition hover:border-white hover:text-white
    "
  >
    <FaLinkedinIn />
  </a>

  {/* INSTAGRAM */}
  <a
    href="https://www.instagram.com/drcteknikservice/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
    className="
      flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center
      rounded-full border border-white/20 text-base sm:text-xl text-white/80
      transition hover:border-white hover:text-white
    "
  >
    <FaInstagram />
  </a>

  {/* FACEBOOK */}
  <a
    href="https://www.facebook.com/profile.php?id=61557797723649"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
    className="
      flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center
      rounded-full border border-white/20 text-base sm:text-xl text-white/80
      transition hover:border-white hover:text-white
    "
  >
    <FaFacebookF />
  </a>
</div>
          </div>

          {/* 2. Sütun */}
          <div>
            <h3 className="relative mb-5 sm:mb-6 inline-block text-xl sm:text-2xl font-semibold">
              Menü
              <span className="mt-2 block h-[2px] w-10 bg-blue-500"></span>
            </h3>

            <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base text-white/80">
              <li>
                <Link to="/" onClick={goTop} className="transition hover:text-white">
                  Anasayfa
                </Link>
              </li>
              <li>
                <Link to="/kurumsal" onClick={goTop} className="transition hover:text-white">
                  Kurumsal
                </Link>
              </li>
              <li>
                <Link to="/hizmetler" onClick={goTop} className="transition hover:text-white">
                  Hizmetlerimiz
                </Link>
              </li>
              <li>
                <Link to="/blog" onClick={goTop} className="transition hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/iletisim" onClick={goTop} className="transition hover:text-white">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. Sütun */}
          <div>
            <h3 className="relative mb-5 sm:mb-6 inline-block text-xl sm:text-2xl font-semibold">
              Hizmetlerimiz
              <span className="mt-2 block h-[2px] w-10 bg-blue-500"></span>
            </h3>

            <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base text-white/80">
              <li>
                <Link to="/yetkili-servis" onClick={goTop} className="transition hover:text-white">
                  Yetkili Servis
                </Link>
              </li>
              <li>
                <Link
                  to="/bakim-onarim-kalibrasyon"
                  onClick={goTop}
                  className="transition hover:text-white"
                >
                  Bakım Onarım Kalibrasyon
                </Link>
              </li>
              <li>
                <Link to="/teknik-servis" onClick={goTop} className="transition hover:text-white">
                  Teknik Servis
                </Link>
              </li>
            </ul>
          </div>

          {/* 4. Sütun */}
          <div>
            <h3 className="relative mb-5 sm:mb-6 inline-block text-xl sm:text-2xl font-semibold">
              İletişim Bilgileri
              <span className="mt-2 block h-[2px] w-10 bg-blue-500"></span>
            </h3>

            <div className="space-y-5 sm:space-y-6 text-sm sm:text-base text-white/80">
              <div className="flex items-start gap-3">
                <FiMapPin className="mt-1 shrink-0 text-lg sm:text-xl text-blue-500" />
                <p className="leading-7 sm:leading-8">
                  Ehlibeyt Mahallesi Ceyhun Atıf Kansu Caddesi 104/12,
                  Çankaya/Ankara
                </p>
              </div>

              <div className="flex items-center gap-3">
                <FiPhone className="shrink-0 text-lg sm:text-xl text-blue-500" />
                <a
                  href="tel:05309222322"
                  className="break-all transition hover:text-white"
                >
                  0530 922 23 22
                </a>
              </div>

              <div className="flex items-center gap-3">
                <FiMail className="shrink-0 text-lg sm:text-xl text-blue-500" />
                <a
                  href="mailto:info@drcteknik.com"
                  className="break-all transition hover:text-white"
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
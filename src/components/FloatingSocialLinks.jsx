import { useState } from "react";
import {
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconBrandWhatsapp,
  IconChevronLeft,
  IconChevronRight,
} from "@tabler/icons-react";

const FloatingSocialLinks = () => {
  const [open, setOpen] = useState(true);

  return (
    <div
      className="
        fixed z-50
        bottom-4 left-1/2 -translate-x-1/2
        sm:bottom-6 sm:right-4 sm:left-auto sm:translate-x-0
      "
    >
      {/* MOBILE */}
      <div className="flex gap-3 sm:hidden">
        <a
          href="https://wa.me/905309222322?text=Merhaba%2C%20DRC%20Teknik%20servis%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-[#25D366] p-2.5 shadow-lg transition-all duration-300 hover:scale-110"
        >
          <IconBrandWhatsapp className="h-5 w-5 text-white" />
        </a>

        <a
          href="https://www.linkedin.com/in/drc-teknik-65185aa2/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-[#0a66c2] p-2.5 shadow-lg transition-all duration-300 hover:scale-110"
        >
          <IconBrandLinkedin className="h-5 w-5 text-white" />
        </a>

        <a
          href="https://www.instagram.com/drcteknikservice/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-gradient-to-br from-pink-500 to-orange-400 p-2.5 shadow-lg transition-all duration-300 hover:scale-110"
        >
          <IconBrandInstagram className="h-5 w-5 text-white" />
        </a>

        <a
          href="https://www.facebook.com/profile.php?id=61557797723649"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-[#1877f2] p-2.5 shadow-lg transition-all duration-300 hover:scale-110"
        >
          <IconBrandFacebook className="h-5 w-5 text-white" />
        </a>
      </div>

      {/* DESKTOP */}
      <div className="hidden sm:block">
        <div className="relative flex items-center">
          <div
            className={`
              flex flex-col gap-4
              transition-all duration-500
              ${open ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8 pointer-events-none"}
            `}
          >
            <a
              href="https://wa.me/905309222322?text=Merhaba%2C%20DRC%20Teknik%20servis%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#25D366] p-3 lg:p-3.5 shadow-lg transition-all duration-300 hover:scale-110"
            >
              <IconBrandWhatsapp className="h-6 w-6 text-white" />
            </a>

            <a
              href="https://www.linkedin.com/in/drc-teknik-65185aa2/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#0a66c2] p-3 lg:p-3.5 shadow-lg transition-all duration-300 hover:scale-110"
            >
              <IconBrandLinkedin className="h-6 w-6 text-white" />
            </a>

            <a
              href="https://www.instagram.com/drcteknikservice/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gradient-to-br from-pink-500 to-orange-400 p-3 lg:p-3.5 shadow-lg transition-all duration-300 hover:scale-110"
            >
              <IconBrandInstagram className="h-6 w-6 text-white" />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61557797723649"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#1877f2] p-3 lg:p-3.5 shadow-lg transition-all duration-300 hover:scale-110"
            >
              <IconBrandFacebook className="h-6 w-6 text-white" />
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className={`
              absolute top-1/2 -translate-y-1/2
              flex h-9 w-9 items-center justify-center
              rounded-full bg-white text-gray-700 shadow-lg
              transition-all duration-500 hover:bg-gray-100
              ${open ? "-left-11" : "-left-1"}
            `}
          >
            {open ? <IconChevronRight size={18} /> : <IconChevronLeft size={18} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FloatingSocialLinks;
import {
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandInstagram,
} from "@tabler/icons-react";

const FloatingSocialLinks = () => {
  return (
    <div
      className="
        fixed z-50 flex gap-3

        /* MOBİL → altta yatay */
        bottom-4 left-1/2 -translate-x-1/2

        /* DESKTOP → sağda dikey */
        sm:top-1/2 sm:right-4 sm:left-auto sm:bottom-auto
        sm:-translate-y-1/2 sm:translate-x-0
        sm:flex-col sm:gap-4
      "
    >
      <a
        href="https://www.facebook.com/profile.php?id=61557797723649"
        target="_blank"
        rel="noopener noreferrer"
        className="
          rounded-full bg-[#1877f2]
          p-2.5 sm:p-3 lg:p-3.5
          shadow-lg transition-all duration-300
          hover:scale-110
        "
      >
        <IconBrandFacebook className="text-white w-5 h-5 sm:w-6 sm:h-6" />
      </a>

      <a
        href="https://www.linkedin.com/in/drc-teknik-chcnav-efix-turkiye-tek-yetkili-servisi-65185aa2/"
        target="_blank"
        rel="noopener noreferrer"
        className="
          rounded-full bg-[#0a66c2]
          p-2.5 sm:p-3 lg:p-3.5
          shadow-lg transition-all duration-300
          hover:scale-110
        "
      >
        <IconBrandLinkedin className="text-white w-5 h-5 sm:w-6 sm:h-6" />
      </a>

      <a
        href="https://www.instagram.com/drcteknikservice/"
        target="_blank"
        rel="noopener noreferrer"
        className="
          rounded-full bg-gradient-to-br from-pink-500 to-orange-400
          p-2.5 sm:p-3 lg:p-3.5
          shadow-lg transition-all duration-300
          hover:scale-110
        "
      >
        <IconBrandInstagram className="text-white w-5 h-5 sm:w-6 sm:h-6" />
      </a>
    </div>
  );
};

export default FloatingSocialLinks;
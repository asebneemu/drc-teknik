// src/components/SocialSidebar.jsx

import {
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandInstagram,
} from "@tabler/icons-react";

const SocialSidebar = () => {
  return (
    <div className="fixed right-4 top-1/2 z-50 flex -translate-y-1/2 flex-col gap-4">
      <a
        href="https://www.facebook.com/profile.php?id=61557797723649"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-[#1877f2] p-3 shadow-lg transition-all duration-300 hover:scale-110"
      >
        <IconBrandFacebook size={22} className="text-white" />
      </a>

      <a
        href="https://www.linkedin.com/in/drc-teknik-chcnav-efix-turkiye-tek-yetkili-servisi-65185aa2/"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-[#0a66c2] p-3 shadow-lg transition-all duration-300 hover:scale-110"
      >
        <IconBrandLinkedin size={22} className="text-white" />
      </a>

      <a
        href="https://www.instagram.com/drcteknikservice/"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-gradient-to-br from-pink-500 to-orange-400 p-3 shadow-lg transition-all duration-300 hover:scale-110"
      >
        <IconBrandInstagram size={22} className="text-white" />
      </a>
    </div>
  );
};

export default SocialSidebar;
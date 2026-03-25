// src/components/SocialSidebar.jsx

import { IconBrandFacebook, IconBrandLinkedin, IconBrandInstagram } from "@tabler/icons-react";

const SocialSidebar = () => {
  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
      
      <a
        href="https://www.facebook.com/profile.php?id=61557797723649#"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#1877f2] p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300"
      >
        <IconBrandFacebook size={22} className="text-white" />
      </a>

      <a
        href="https://www.linkedin.com/in/drc-teknik-chcnav-efix-t%C3%BCrkiye-tek-yetkili-servisi-65185aa2/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#0a66c2] p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300"
      >
        <IconBrandLinkedin size={22} className="text-white" />
      </a>

      <a
        href="https://www.instagram.com/drcteknikservice/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-br from-pink-500 to-orange-400 p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300"
      >
        <IconBrandInstagram size={22} className="text-white" />
      </a>

    </div>
  );
};

export default SocialSidebar;
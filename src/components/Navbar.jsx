import {
  IconHome,
  IconBuilding,
  IconBox,
  IconTool,
  IconArticle,
  IconPhone,
} from "@tabler/icons-react";

import { useState } from "react";

const leftLinks = [
  { label: "Anasayfa", href: "/", icon: IconHome },
  { label: "Kurumsal", href: "/kurumsal", icon: IconBuilding },
  { label: "Ürünler", href: "/urunler", icon: IconBox },
];

const rightLinks = [
  { label: "Hizmetler", href: "/hizmetler", icon: IconTool },
  { label: "Blog", href: "/blog", icon: IconArticle },
  { label: "İletişim", href: "/iletisim", icon: IconPhone },
];

function NavItem({ item, className = "" }) {
  const Icon = item.icon;

  return (
    <a
      href={item.href}
      className={`group flex items-center gap-2 py-3 text-[18px] font-normal text-black no-underline ${className}`}
    >
      <span className="text-black">{item.label}</span>
      <Icon
        size={22}
        stroke={1.5}
        className="text-black transition-transform duration-300 group-hover:translate-x-1"
      />
    </a>
  );
}

export default function Navbar() {
  const [hasBg, setHasBg] = useState(true);

  return (
    <nav
      className="w-full navbar"
      style={
        hasBg
          ? {
              backgroundImage: "url('/navbar-bg.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : {}
      }
    >
      {/* Resim yoksa fallback */}
      <img
        src="/navbar-bg.jpg"
        style={{ display: "none" }}
        onError={() => setHasBg(false)}
        alt=""
      />

      <div className="mx-auto flex w-[75%] items-center justify-between py-6">
        {/* Sol */}
        <div className="flex flex-1 items-center justify-start gap-10">
          {leftLinks.map((item, index) => (
            <NavItem
              key={item.label}
              item={item}
              className={index === 0 ? "pl-0" : ""}
            />
          ))}
        </div>

        {/* Logo */}
        <a href="/" className="mx-12 flex shrink-0 items-center justify-center">
          <img
            src="/logo.png"
            alt="DRC Teknik"
            className="h-32 w-auto object-contain"
          />
        </a>

        {/* Sağ */}
        <div className="flex flex-1 items-center justify-end gap-10">
          {rightLinks.map((item, index) => (
            <NavItem
              key={item.label}
              item={item}
              className={index === rightLinks.length - 1 ? "pr-0" : ""}
            />
          ))}
        </div>
      </div>
    </nav>
  );
}
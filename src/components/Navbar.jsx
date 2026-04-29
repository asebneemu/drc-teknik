import { useState } from "react";
import {
  IconHome,
  IconBuilding,
  IconBox,
  IconTool,
  IconArticle,
  IconPhone,
  IconMenu2,
  IconX,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";

const leftLinks = [
  { label: "Anasayfa", href: "/", icon: IconHome },
  { label: "Kurumsal", href: "/kurumsal", icon: IconBuilding },
  { label: "Ürünler", href: "/urunler", icon: IconBox },
];

const rightLinks = [
  { label: "Servis Hizmetleri", href: "/hizmetler", icon: IconTool },
  { label: "Topcon", href: "/tarim", icon: IconArticle },
  { label: "İletişim", href: "/iletisim", icon: IconPhone },
];

const mobileLinks = [...leftLinks, ...rightLinks];

function NavItem({ item, className = "" }) {
  const Icon = item.icon;

  return (
    <Link
      to={item.href}
      className={`
        group flex items-center gap-2.5 py-3
        text-[15px] font-semibold !text-[#f5f1e8] no-underline
        transition-all duration-300 hover:!text-blue-200
        ${className}
      `}
    >
      <Icon
        size={18}
        stroke={1.9}
        className="
          shrink-0 !text-[#f5f1e8] opacity-85
          transition-all duration-300
          group-hover:scale-110 group-hover:opacity-100
        "
      />

      <span className="relative leading-tight !text-[#f5f1e8] tracking-[0.02em]">
        {item.label}
        <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
      </span>
    </Link>
  );
}

function MobileNavItem({ item, onClick }) {
  const Icon = item.icon;

  return (
    <Link
      to={item.href}
      onClick={onClick}
      className="group flex items-center justify-between rounded-xl px-4 py-3 text-[15px] font-semibold !text-[#f5f1e8] no-underline transition-all duration-300 hover:bg-white/10"
    >
      <span className="!text-[#f5f1e8] tracking-[0.03em]">
        {item.label}
      </span>
      <Icon
        size={20}
        stroke={1.8}
        className="!text-[#f5f1e8] transition-all duration-300"
      />
    </Link>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="w-full"
      style={{
        backgroundImage:
          "linear-gradient(90deg, #081a34 0%, #cedae6 50%, #081a34 100%)",
      }}
    >
      <div className="mx-auto flex w-[75%] items-center justify-between py-4 sm:py-5 lg:py-6">
        
        {/* Sol */}
        <div className="hidden lg:flex flex-1 items-center justify-start gap-10">
          {leftLinks.map((item, index) => (
            <NavItem
              key={item.label}
              item={item}
              className={index === 0 ? "pl-0" : ""}
            />
          ))}
        </div>

        {/* Hamburger - mobilde solda */}
        <div className="flex w-10 justify-start lg:hidden">
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={menuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-lg !text-[#f5f1e8] transition hover:bg-white/10"
          >
            {menuOpen ? (
              <IconX size={26} stroke={2} className="!text-[#f5f1e8]" />
            ) : (
              <IconMenu2 size={26} stroke={2} className="!text-[#f5f1e8]" />
            )}
          </button>
        </div>

        {/* Logo */}
        <Link
          to="/"
          className="mx-4 sm:mx-6 lg:mx-12 flex shrink-0 items-center justify-center"
        >
          <img
            src="/logo.png"
            alt="DRC Teknik"
            className="h-16 sm:h-20 md:h-24 lg:h-32 w-auto object-contain"
          />
        </Link>

        {/* Sağ */}
        <div className="hidden lg:flex flex-1 items-center justify-end gap-10">
          {rightLinks.map((item, index) => (
            <NavItem
              key={item.label}
              item={item}
              className={index === rightLinks.length - 1 ? "pr-0" : ""}
            />
          ))}
        </div>

        {/* Mobil sağ boşluk */}
        <div className="flex w-10 justify-end lg:hidden" />
      </div>

      {/* Mobil Menü */}
      {menuOpen && (
        <div className="lg:hidden border-t border-white/10">
          <div className="mx-auto w-[75%] py-4">
            <div className="flex flex-col gap-2">
              {mobileLinks.map((item) => (
                <MobileNavItem
                  key={item.label}
                  item={item}
                  onClick={() => setMenuOpen(false)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
import {
  IconHome,
  IconBuilding,
  IconBox,
  IconTool,
  IconArticle,
  IconPhone,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";

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
    <Link
      to={item.href}
      className={`group flex items-center gap-2 py-3 text-[18px] font-semibold !text-[#f5f1e8] no-underline transition-all duration-300 hover:!text-blue-200 ${className}`}
    >
      <span className="relative !text-[#f5f1e8] tracking-wide">
        {item.label}
        <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
      </span>

      <Icon
        size={22}
        stroke={1.8}
        className="!text-[#f5f1e8] transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110"
      />
    </Link>
  );
}

export default function Navbar() {
  return (
    <nav
      className="w-full"
      style={{
        backgroundImage:
          "linear-gradient(90deg, #081a34 0%, #5394d1 50%, #081a34 100%)",
      }}
    >
      <div className="mx-auto flex w-[75%] items-center justify-between py-6">
        <div className="flex flex-1 items-center justify-start gap-10">
          {leftLinks.map((item, index) => (
            <NavItem
              key={item.label}
              item={item}
              className={index === 0 ? "pl-0" : ""}
            />
          ))}
        </div>

        <Link to="/" className="mx-12 flex shrink-0 items-center justify-center">
          <img
            src="/logo.png"
            alt="DRC Teknik"
            className="h-32 w-auto object-contain"
          />
        </Link>

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
import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";

const links = [
  { name: "Home", href: "/" },
  { name: "Company", href: "/Company" },
  { name: "Blog", href: "/Blog" },
];

const SideBar = ({ NavbarOpen }: { NavbarOpen: any }) => {
  const pathname = usePathname();
  return (
    <div
      className={`absolute sm:w-[70%] md:w-[50%] h-full bg-black pt-[8rem] z-[25] right-0 ${
        NavbarOpen ? "block" : "hidden"
      }`}
    >
      <div>
        <nav className="flex flex-col items-center">
          <div className="mb-[30px]">
            <Link
              href="https://makemyweb.ai/en"
              className="text-[16px] font-normal text-white transition duration-100 hover:font-semibold mb-[20px]"
            >
              MakeMyWeb
            </Link>
          </div>
          {links.map((link, idx) => (
            <div key={idx} className="mb-[30px]">
              {pathname === link.href ? (
                <Link
                  className="text-lg font-normal custom-text-gradient"
                  href={link.href}
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  href={link.href}
                  className="text-[16px] font-normal text-white transition duration-100 hover:font-semibold"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
          <div></div>
        </nav>
      </div>
    </div>
  );
};

export default SideBar;

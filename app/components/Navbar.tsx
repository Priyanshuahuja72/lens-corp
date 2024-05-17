"use client";
import React from "react";
import Image from "next/image";
import Logo from "../../public/icons/lensLogo.png";
import { usePathname } from "next/navigation";
import Link from "next/link";
//this is the link object
const links = [
  { name: "Home", href: "/" },
  { name: "Company", href: "/Company" },
  { name: "Blog", href: "/Blog" },
];
const Navbar = ({NavbarOpen, setNavbarOpen}: {setNavbarOpen: any, NavbarOpen: any}) => {
  const pathname = usePathname();
  const openSidebar = () => {
      setNavbarOpen(!NavbarOpen);
  };
  return (
    <>
    <header className={`xl:px-20 lg:px-20 md:px-20 sm:px-5 xl:py-0 lg:py-2 fixed z-[30] w-full`}  style={{ backdropFilter: 'blur(80px)', WebkitBackdropFilter: 'blur(80px)' }}>
      <div className="flex items-center justify-between">
        {/* it is the image logo */}
        <Image src={Logo} alt="LensLogo" width={80} height={80} />
        {/* it is for the link */}
        <nav className="sm:hidden gap-12 lg:flex md:flex-row 2xl:ml-16">
          <div>
            <Link
              href="https://makemyweb.ai/en"
              className="text-[16px] font-normal text-white transition duration-100 hover:font-semibold"
            >
              MakeMyWeb
            </Link>
          </div>
          {links.map((link, idx) => (
            <div key={idx}>
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
          <div>
          </div>
        </nav>
        {/* for the responsive work */}
        <button 
        className="lg:hidden text-gray-600 hover:text-white focus:outline-none"
        onClick={openSidebar}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
    </>
  );
};

export default Navbar;

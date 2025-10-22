import { useTranslation } from "next-i18next";
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";

import { HeaderMenuOptionsInterface } from "@/models/layouts.models";

import { headerMenuOptions } from "@/constants/layouts.constants";

import imgLogo from "@/assets/images/common/img-logo.jpg";

import Image from "../ui/Image";

function Header() {
  const { t } = useTranslation("layout");
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      const scrollTop = window.scrollY;

      clearTimeout(timeoutId);

      timeoutId = setTimeout(
        () => {
          setIsScrolled(scrollTop > 50);
        },
        scrollTop > 50 ? 0 : 150
      );
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <header className="flex justify-center fixed top-4 left-0 right-0 z-50 ">
      <div
        className={`flex items-center bg-gray-500/20 py-2 px-6 backdrop-blur-sm rounded-full transition-all duration-500 ease-out ${isScrolled ? "w-auto gap-10" : "container w-full justify-between"}`}
      >
        <Image
          src={imgLogo}
          alt="Logo"
          width={isScrolled ? 50 : 80}
          height={isScrolled ? 27.5 : 50}
          className="transition-all duration-500 ease-out"
        />

        <div
          className={`flex items-center transition-all duration-300 ${isScrolled ? "gap-3" : "gap-6"}`}
        >
          {headerMenuOptions(t)?.map((option: HeaderMenuOptionsInterface) => (
            <Link
              key={option?.key}
              to={option?.key}
              spy={true}
              smooth={true}
              offset={-100}
              duration={10}
              spyThrottle={10}
              hashSpy={false}
              className={`nav-link capitalize cursor-pointer hover:text-tertiary transition-all duration-300 relative before:content-[''] before:absolute before:w-0 before:h-0.5 before:bottom-0 before:left-1/2 before:bg-tertiary before:transition-all before:duration-300 hover:before:w-full hover:before:left-0 text-white font-bold ${isScrolled ? "text-xs opacity-80" : "text-sm"}`}
              activeClass="nav-link-active"
            >
              {option?.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;

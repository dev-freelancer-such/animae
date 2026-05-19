import { useTranslation } from "next-i18next";
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";

import { HeaderMenuOptionsInterface } from "@/models/layouts.models";

import { headerMenuOptions } from "@/constants/layouts.constants";

import imgLogo from "@/assets/images/common/img-logo.jpg";

import Image from "../ui/Image";

const SECTION_IDS = [
  "latest-release",
  "top-trending",
  "category-story",
  "newly-update",
  "for-you",
  "random-story",
];

function Header() {
  const { t } = useTranslation("layout");
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>(SECTION_IDS[0]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      clearTimeout(timeoutId);
      timeoutId = setTimeout(
        () => {
          setIsScrolled(scrollY > 50);
        },
        scrollY > 50 ? 0 : 150
      );

      // Active khi top của section đã vượt qua ngưỡng 50% chiều cao viewport
      const threshold = windowHeight * 0.5;
      let current = SECTION_IDS[0];
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= threshold) {
          current = id;
        }
      }
      setActiveSection(current);
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
              smooth={true}
              offset={-100}
              duration={10}
              className={`nav-link capitalize cursor-pointer hover:text-tertiary transition-all duration-300 relative before:content-[''] before:absolute before:w-0 before:h-0.5 before:bottom-0 before:left-1/2 before:bg-tertiary before:transition-all before:duration-300 hover:before:w-full hover:before:left-0 text-white font-bold ${isScrolled ? "text-xs opacity-80" : "text-sm"} ${activeSection === option?.key ? "nav-link-active" : ""}`}
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

import { useTranslation } from "next-i18next";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { ApiCategory } from "@/models/api.models";

import { useHomeMenu } from "@/hooks/useCategories";

import imgLogo from "@/assets/images/common/img-logo.jpg";

import Image from "../ui/Image";

function menuHref(item: ApiCategory, type: "list" | "category") {
  if (type === "list") return `/products?q=${encodeURIComponent(item.name)}`;
  return `/products?q=${encodeURIComponent(item.name)}`;
}

function Header() {
  const { t } = useTranslation("layout");
  const { lists, categories, loading } = useHomeMenu();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const triggerClass = `inline-flex items-center gap-1.5 py-2 text-white font-semibold cursor-pointer hover:opacity-90 ${isScrolled ? "text-xs" : "text-sm"}`;

  return (
    <header className="flex justify-center fixed top-4 left-0 right-0 z-50">
      <div
        className={`flex items-center bg-gray-500/20 py-2 px-6 backdrop-blur-sm rounded-full transition-all duration-500 ease-out ${isScrolled ? "w-auto gap-10" : "container w-full justify-between"}`}
      >
        <Link href="/" aria-label="Animae trang chủ">
          <Image
            src={imgLogo}
            alt="Animae"
            width={isScrolled ? 50 : 80}
            height={isScrolled ? 27.5 : 50}
            className="transition-all duration-500 ease-out"
            priority
          />
        </Link>

        <nav
          className={`flex items-center ${isScrolled ? "gap-5" : "gap-8"}`}
          aria-label="Menu chính"
        >
          <div className="menu-dropdown group relative">
            <span className={triggerClass}>
              {t("header.menu.list", "Danh sách")}
              <i className="menu-caret" />
            </span>
            <div className="menu-panel">
              {loading && (
                <p className="px-4 py-2 text-xs text-neutral-500">Đang tải...</p>
              )}
              <ul>
                {lists.map(item => (
                  <li key={item.slug}>
                    <Link href={menuHref(item, "list")} className="menu-panel-link">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="menu-dropdown group relative">
            <span className={triggerClass}>
              {t("header.menu.category-story")}
              <i className="menu-caret" />
            </span>
            <div className="menu-panel menu-panel--genre">
              {loading && (
                <p className="px-4 py-2 text-xs text-neutral-500">Đang tải...</p>
              )}
              {!loading && categories.length === 0 && (
                <p className="px-4 py-2 text-xs text-neutral-500">
                  Chưa có thể loại
                </p>
              )}
              <ul className="menu-genre-grid">
                {categories.map(category => (
                  <li key={category.slug}>
                    <Link
                      href={menuHref(category, "category")}
                      className="menu-panel-link"
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;

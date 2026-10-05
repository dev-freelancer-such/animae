import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FormEvent, useEffect, useState } from "react";

import { Search } from "lucide-react";

import { ApiCategory } from "@/models/api.models";

import { useHomeMenu } from "@/hooks/useCategories";

import { Input } from "@/components/ui/Input";

import imgLogo from "@/assets/images/common/img-logo.jpg";

import Image from "../ui/Image";

function menuHref(item: ApiCategory) {
  return `/products?q=${encodeURIComponent(item.name)}`;
}

function Header() {
  const { t } = useTranslation("layout");
  const router = useRouter();
  const { lists, categories, loading } = useHomeMenu();
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    const q = router.query.q;
    if (typeof q === "string") setKeyword(q);
  }, [router.query.q]);

  const handleSearch = (event: FormEvent) => {
    event.preventDefault();
    const q = keyword.trim();
    if (!q) {
      router.push("/products");
      return;
    }
    router.push(`/products?q=${encodeURIComponent(q)}`);
  };

  return (
    <header className="flex justify-center fixed top-4 left-0 right-0 z-50 px-4">
      <div
        className="grid grid-cols-[auto_minmax(200px,380px)_auto] items-center gap-3 bg-black/55 py-1.5 pl-3 pr-2 backdrop-blur-md rounded-full border border-white/10 shadow-lg w-[min(920px,calc(100%-2rem))]"
      >
        <Link
          href="/"
          aria-label="Animae trang chủ"
          className="justify-self-start shrink-0"
        >
          <Image
            src={imgLogo}
            alt="Animae"
            width={44}
            height={28}
            className="rounded-md"
            priority
          />
        </Link>

        <form
          onSubmit={handleSearch}
          className="w-full min-w-0 justify-self-center"
          role="search"
        >
          <Input
            type="search"
            value={keyword}
            onChange={event => setKeyword(event.target.value)}
            prefixIcon={<Search className="h-4 w-4 text-white/60" />}
            placeholder={t("header.menu.search-placeholder", "Tìm truyện...")}
            aria-label={t("header.menu.search")}
            className="h-9 text-sm rounded-full border-white/15 bg-white/10 text-white placeholder:text-white/55 focus-visible:border-tertiary focus-visible:ring-tertiary/30"
          />
        </form>

        <nav
          className="justify-self-end flex items-center justify-end gap-1 sm:gap-2"
          aria-label="Menu chính"
        >
          <Link href="/" className="menu-trigger hidden sm:inline-flex">
            {t("header.menu.home", "Trang chủ")}
          </Link>

          <div className="menu-dropdown group relative">
            <span className="menu-trigger">
              {t("header.menu.list", "Danh sách")}
              <i className="menu-caret" />
            </span>
            <div className="menu-panel">
              {loading && (
                <p className="px-4 py-2 text-xs text-neutral-500">
                  {t("header.menu.loading", "Đang tải...")}
                </p>
              )}
              <ul>
                {lists.map(item => (
                  <li key={item.slug}>
                    <Link href={menuHref(item)} className="menu-panel-link">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="menu-dropdown group relative">
            <span className="menu-trigger">
              {t("header.menu.category-story")}
              <i className="menu-caret" />
            </span>
            <div className="menu-panel menu-panel--genre menu-panel--right">
              {loading && (
                <p className="px-4 py-2 text-xs text-neutral-500">
                  {t("header.menu.loading", "Đang tải...")}
                </p>
              )}
              {!loading && categories.length === 0 && (
                <p className="px-4 py-2 text-xs text-neutral-500">
                  {t("header.menu.empty-category", "Chưa có thể loại")}
                </p>
              )}
              <ul className="menu-genre-grid">
                {categories.map(category => (
                  <li key={category.slug}>
                    <Link href={menuHref(category)} className="menu-panel-link">
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

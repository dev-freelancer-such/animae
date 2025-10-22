import { TFunction } from "next-i18next";

import {
  FooterSectionInterface,
  HeaderMenuOptionsInterface,
} from "@/models/layouts.models";

const headerMenuOptions = (t: TFunction): HeaderMenuOptionsInterface[] => {
  return [
    {
      key: "latest-release",
      label: t("header.menu.latest-release"),
    },
    {
      key: "top-trending",
      label: t("header.menu.top-trending"),
    },
    {
      key: "category-story",
      label: t("header.menu.category-story"),
    },
    {
      key: "newly-update",
      label: t("header.menu.newly-update"),
    },
    {
      key: "for-you",
      label: t("header.menu.for-you"),
    },
    {
      key: "random-story",
      label: t("header.menu.random-story"),
    },
  ];
};

const footerSections = (t: TFunction): FooterSectionInterface[] => {
  return [
    {
      key: "manga",
      title: t("footer.manga.title"),
      items: [
        {
          key: "action",
          label: t("footer.manga.action"),
          href: "/manga/action",
        },
        {
          key: "comedy",
          label: t("footer.manga.comedy"),
          href: "/manga/comedy",
        },
        {
          key: "horror",
          label: t("footer.manga.horror"),
          href: "/manga/horror",
        },
        {
          key: "animation",
          label: t("footer.manga.animation"),
          href: "/manga/animation",
        },
        {
          key: "fantasy",
          label: t("footer.manga.fantasy"),
          href: "/manga/fantasy",
        },
      ],
    },
    {
      key: "series",
      title: t("footer.series.title"),
      items: [
        {
          key: "popular-series",
          label: t("footer.series.popular-series"),
          href: "/series/popular",
        },
        {
          key: "classic-series",
          label: t("footer.series.classic-series"),
          href: "/series/classic",
        },
        {
          key: "romance",
          label: t("footer.series.romance"),
          href: "/series/romance",
        },
        {
          key: "comedy",
          label: t("footer.series.comedy"),
          href: "/series/comedy",
        },
        {
          key: "fantasy",
          label: t("footer.series.fantasy"),
          href: "/series/fantasy",
        },
      ],
    },
    {
      key: "support",
      title: t("footer.support.title"),
      items: [
        {
          key: "general-info",
          label: t("footer.support.general-info"),
          href: "/support/general-info",
        },
        {
          key: "privacy-policy",
          label: t("footer.support.privacy-policy"),
          href: "/privacy-policy",
        },
        {
          key: "terms-of-service",
          label: t("footer.support.terms-of-service"),
          href: "/terms-of-service",
        },
        {
          key: "help-center",
          label: t("footer.support.help-center"),
          href: "/help-center",
        },
      ],
    },
    {
      key: "contact",
      title: t("footer.contact.title"),
      items: [
        {
          key: "email",
          label: "support@anime-store.com",
          href: "mailto:support@anime-store.com",
        },
        {
          key: "phone",
          label: "Tel: 0198752****",
          href: "tel:0198752****",
        },
      ],
    },
  ];
};

export { headerMenuOptions, footerSections };

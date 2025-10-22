import { useTranslation } from "next-i18next";
import React from "react";

import { footerSections } from "@/constants/layouts.constants";

import BackToTop from "@/components/ui/BackToTop";

import imgFooter from "@/assets/images/common/img-footer.jpg";

import { Image, Typography } from "../ui";

function Footer() {
  const { t } = useTranslation("layout");
  const sections = footerSections(t);

  return (
    <section className="mx-auto w-full mt-10">
      <div className="relative h-fit overflow-hidden shadow-2xl">
        <Image
          src={imgFooter}
          alt="footer-banner"
          fill
          className="object-cover transition-all duration-500 ease-in-out"
          priority
        />

        <div className="z-2 absolute inset-0 bg-linear-to-r bg-black/80 via-black/20 to-black/20" />

        <div className="relative z-10 container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 py-20">
            {sections.map(section => (
              <div key={section.key} className="space-y-4">
                <Typography variant="h3" className="uppercase" color="tertiary">
                  {section.title}
                </Typography>

                <ul className="space-y-3">
                  {section.items.map(item => (
                    <li key={item.key}>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-gray-300 hover:text-tertiary transition-colors duration-300 text-sm cursor-pointer relative before:content-[''] before:absolute before:w-0 before:h-0.5 before:bottom-0 before:left-1/2 before:bg-tertiary before:transition-all before:duration-300 hover:before:w-full hover:before:left-0 block w-fit"
                        >
                          {item.label}
                        </a>
                      ) : (
                        <span className="text-secondary text-sm">
                          {item.label}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="pt-8 border-t border-secondary">
            <div className="text-center">
              <Typography className="text-secondary text-sm">
                © 2025 Anime Store. All rights reserved.
              </Typography>
            </div>
          </div>
        </div>
        <BackToTop />
      </div>
    </section>
  );
}

export default Footer;

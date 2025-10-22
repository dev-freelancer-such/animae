import { useTranslation } from "next-i18next";
import React from "react";

import { StoryInterface } from "@/models/home.models";

import { bannerHomeMockup } from "@/helpers/mockups/home";

import CardStory from "@/components/common/collections/collection-stories/card-story";
import DragToNextBtn from "@/components/common/collections/collection-stories/drag-to-next-btn";
import { Typography } from "@/components/ui";

function NewlyUpdate() {
  const { t } = useTranslation("home");

  return (
    <section className="max-container flex items-center justify-center">
      <div className="container mt-20">
        <div className="flex items-center justify-between gap-4">
          <Typography
            variant="h2"
            color="primary"
            className="w-fit grunge-overlay"
            fontWeight="medium"
          >
            {t("newly-update")}
          </Typography>

          <DragToNextBtn label={t("drag-to-next")} />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 mt-5">
          {bannerHomeMockup?.map((story: StoryInterface, index: number) => (
            <CardStory {...story} indexProp={index} key={String(index)} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewlyUpdate;

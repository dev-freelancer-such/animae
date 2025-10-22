import React from "react";

import { CategoriesInterface } from "@/models/home.models";

import { Typography } from "@/components/ui";

function CardCategory({ title, color }: CategoriesInterface) {
  return (
    <article
      className={`h-60 w-full max-w-52 relative select-none group cursor-pointer rounded-lg bg-linear-to-br ${color} hover:shadow-lg hover:scale-[1.02] transition-all duration-300 flex items-center justify-center p-4 overflow-hidden`}
    >
      <Typography
        className="uppercase line-clamp-1 text-center"
        color="white"
        fontWeight="bold"
      >
        {title || "--/--"}
      </Typography>
    </article>
  );
}

export default CardCategory;

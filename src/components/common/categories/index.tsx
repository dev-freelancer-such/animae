import React from "react";

import { CategoriesStoryInterface } from "@/models/home.models";

import CategoryStories from "./category-stories";

interface CategoriesStoryProps {
  categoriesProps: CategoriesStoryInterface;
}

function CategoriesStory({ categoriesProps }: CategoriesStoryProps) {
  return (
    <section className="max-container flex items-center justify-center overflow-x-hidden">
      <div className="container min-w-0 overflow-hidden">
        <CategoryStories {...categoriesProps} />
      </div>
    </section>
  );
}

export default CategoriesStory;

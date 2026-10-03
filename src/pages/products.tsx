import ProductsContainer from "@/containers/products";

import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { createSeoMeta } from "@/utils/seo.utils";

import { SeoHead } from "@/components/common/seo-head";

const seo = createSeoMeta({
  title: "Kho truyện",
  description: "Tìm và lọc manga, novel theo từ khóa, trạng thái và lượt xem.",
  path: "/products",
  keywords: "danh sách truyện, manga, novel",
});

export default function ProductsPage() {
  return (
    <>
      <SeoHead {...seo} />
      <ProductsContainer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "vi", [
        "common",
        "layout",
        "products",
      ])),
    },
    revalidate: 60,
  };
};

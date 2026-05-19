import ProductsContainer from "@/containers/products";

import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function ProductsPage() {
  return <ProductsContainer />;
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", [
        "common",
        "layout",
        "products",
      ])),
    },
  };
};

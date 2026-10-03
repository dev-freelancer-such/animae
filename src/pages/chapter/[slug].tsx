import { GetStaticPaths, GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";

import { ApiChapter } from "@/models/api.models";
import { ChapterInterface } from "@/models/home.models";
import { SeoMetaInterface } from "@/models/seo.models";

import { requestApi } from "@/services/api/server";
import { endpoints } from "@/services/endpoint";

import { createSeoMeta } from "@/utils/seo.utils";
import { mapChapter } from "@/utils/story.mapper";

import { JsonLd } from "@/components/common/json-ld";
import { SeoHead } from "@/components/common/seo-head";
import { Image, Typography } from "@/components/ui";

interface ChapterPageProps {
  chapter: ChapterInterface;
  seo: SeoMetaInterface;
}

export default function ChapterPage({ chapter, seo }: ChapterPageProps) {
  return (
    <article className="pt-24 pb-16">
      <SeoHead {...seo} ogType="article" />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: chapter.title,
          dateModified: chapter.updatedAt,
        }}
      />

      <nav className="mb-6 text-sm text-white/60">
        <Link href="/" className="hover:text-white">
          Trang chủ
        </Link>
        {chapter.storySlug && (
          <>
            <span className="mx-2">/</span>
            <Link href={`/${chapter.storySlug}`} className="hover:text-white">
              {chapter.storyTitle || chapter.storySlug}
            </Link>
          </>
        )}
        <span className="mx-2">/</span>
        <span className="text-white">{chapter.title}</span>
      </nav>

      <Typography as="h1" variant="h3" color="white" className="mb-6">
        Ch. {chapter.number} — {chapter.title}
      </Typography>

      {chapter.content && (
        <Typography color="default" className="whitespace-pre-line leading-7">
          {chapter.content}
        </Typography>
      )}

      {chapter.images && chapter.images.length > 0 && (
        <div className="mt-8 flex flex-col gap-3">
          {chapter.images.map((src, index) => (
            <Image
              key={`${src}-${index}`}
              src={src}
              alt={`${chapter.title} trang ${index + 1}`}
              width={900}
              height={1280}
              className="w-full h-auto rounded-lg"
            />
          ))}
        </div>
      )}

      {!chapter.content && (!chapter.images || chapter.images.length === 0) && (
        <Typography color="default">Chương chưa có nội dung.</Typography>
      )}
    </article>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [],
  fallback: "blocking",
});

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const slug = params?.slug as string;
  const data = await requestApi<ApiChapter>(endpoints.chapters.DETAIL(slug));

  if (!data) {
    return { notFound: true, revalidate: 30 };
  }

  const chapter = mapChapter(data);
  const seo = createSeoMeta({
    title: `${chapter.storyTitle ?? "Chapter"} - ${chapter.title}`,
    description: `Đọc ${chapter.title}${chapter.storyTitle ? ` - ${chapter.storyTitle}` : ""}.`,
    path: `/chapter/${chapter.key}`,
    ogType: "article",
  });

  return {
    props: {
      chapter,
      seo,
      ...(await serverSideTranslations(locale ?? "vi", ["common", "layout"])),
    },
    revalidate: 60,
  };
};

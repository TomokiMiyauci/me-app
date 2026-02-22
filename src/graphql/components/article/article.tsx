import type { ArticleFragment } from "./article.graphql.ts";
import type { JSX } from "react";
import { ArticleSummary, type ArticleSummaryProps } from "~component";
import { cloudinary } from "~lib";

export interface ArticleProps {
  lang: string;
  fragment: ArticleFragment;
}

export default function Article(props: ArticleProps): JSX.Element {
  const { fragment, lang } = props;
  const articleSummaryProps = fragmentToArticleSummaryProps(
    fragment,
    { lang },
  );

  return <ArticleSummary {...articleSummaryProps} />;
}

function fragmentToArticleSummaryProps(
  fragment: ArticleFragment,
  ctx: { lang: string },
): ArticleSummaryProps {
  const {
    title,
    description,
    createdAt: specifiedCreatedAt,
    coverImage,
  } = fragment;
  const excerpt = description ?? undefined;
  const createdAt = specifiedCreatedAt;
  const date = createdAt
    ? {
      dateTime: new Date(createdAt).toISOString(),
      label: new Date(createdAt).toLocaleDateString(ctx.lang, {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    }
    : undefined;

  const props = {
    title: title ?? "",
    excerpt,
    date,
    img: coverImage &&
      (
        <figure>
          <img
            className="w-full aspect-video object-fit"
            src={cloudinary
              .image(coverImage)
              .setDeliveryType("fetch")
              .format("auto")
              .quality("auto")
              .toURL()}
            loading="lazy"
          />
        </figure>
      ),
  } satisfies ArticleSummaryProps;

  return props;
}

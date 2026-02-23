import type { JSX } from "react";
import { Ogp } from "react-ogp";
import { JsonLd } from "react-schemaorg";
import type { TechArticle } from "schema-dts";
import type { PostMetaFragment } from "./meta.graphql.ts";
import { SeoMeta } from "react-meta";
// import OgImgage from "@/graphql/components/og_image/og_image.tsx";
// import { isNonNullable } from "isx";

export interface PostMetaProps {
  fragment: PostMetaFragment;
}

export default function PostMeta(props: PostMetaProps): JSX.Element {
  const { fragment } = props;

  // const { categories, tags } = fragment;
  const title = fragment.title ?? undefined;
  const description = fragment.description ?? undefined;
  const createdAt = fragment.createdAt;
  const updatedAt = fragment.updatedAt;
  const createdDate = createdAt ? new Date(createdAt) : undefined;
  const updatedDate = updatedAt ? new Date(updatedAt) : undefined;

  return (
    <>
      <SeoMeta
        title={title}
        description={description}
      />
      <Ogp
        title={title}
        description={description}
        type="article"
        article={{
          // section: categories?.[0]?.name ?? undefined,
          // tags: tags?.map((tag) => tag?.tag).filter(isNonNullable),
          publishedTime: createdDate?.toISOString(),
          modifiedTime: updatedDate?.toISOString(),
        }}
      />
      {/* {coverImage && <OgImgage fragment={coverImage} />} */}

      <JsonLd<TechArticle>
        item={{
          "@context": "https://schema.org",
          "@type": "TechArticle",
          headline: title,
          description: description,
          datePublished: createdDate?.toISOString(),
          dateModified: updatedDate?.toISOString(),
        }}
      >
      </JsonLd>
    </>
  );
}

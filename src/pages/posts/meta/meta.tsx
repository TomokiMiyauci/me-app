import type { JSX } from "react";
import { SeoMeta } from "react-meta";
import type { PostsMetaFragment } from "@/pages/posts/meta/meta.graphql.ts";
import OgImage from "@/graphql/components/og_image/og_image.tsx";
import { Ogp } from "react-ogp";

export interface PostsMetaProps {
  fragment: PostsMetaFragment;
}

export default function PostsMeta(props: PostsMetaProps): JSX.Element {
  const { fragment } = props;

  const title = fragment.title ?? undefined;
  const desciription = fragment.description ?? undefined;
  const { coverImage } = fragment;

  return (
    <>
      <SeoMeta
        title={title}
        description={desciription}
      />
      <Ogp title={title} description={desciription} type="website" />
      {coverImage && <OgImage fragment={coverImage} />}
    </>
  );
}

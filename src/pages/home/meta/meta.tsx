import type { JSX } from "react";
import type { HomeMetaFragment } from "./meta.graphql.ts";
import { SeoMeta } from "react-meta";
import { Ogp } from "react-ogp";
// import OgImage from "@/graphql/components/og_image/og_image.tsx";

export interface HomeMetaProps {
  fragment: HomeMetaFragment;
  lang: string;
}

export default function HomeMeta(props: HomeMetaProps): JSX.Element {
  const { fragment } = props;
  // const { coverImage } = fragment;

  const title = fragment.title ?? undefined;
  const desciription = fragment.description ?? undefined;

  return (
    <>
      <SeoMeta
        title={title}
        description={desciription}
      />
      <Ogp title={title} description={desciription} type="website" />
      {/* {coverImage && <OgImage fragment={coverImage} />} */}
    </>
  );
}

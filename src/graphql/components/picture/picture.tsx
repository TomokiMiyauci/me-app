import type { JSX } from "react";
import type { PictureFragment } from "./picture.graphql.ts";
import type { SanityImageObject } from "@biggleszx/react-sanity-image";
// import client from "@/lib/sanity_client.ts";
import type { SanityAsset } from "@sanity/image-url";

export interface PictureProps {
  fragment: Omit<PictureFragment, "__typename">;
}

interface ImgImage extends SanityAsset, SanityImageObject {}

export default function Picture(
  props: PictureProps & JSX.IntrinsicElements["img"],
): JSX.Element {
  const { fragment, ...rest } = props;

  // const image = fragment.image;
  // const result = validate(image);
  const { description, source } = fragment;

  // if (!result) throw new Error("unreachable");

  return (
    <img
      {...rest}
      alt={description ?? undefined}
      src={source ?? undefined}
    />
  );
}

// function validate(value: PictureFragment["image"]): value is ImgImage {
//   if (
//     !value?.asset ||
//     !value.asset.metadata ||
//     !value.asset.metadata.dimensions ||
//     !value.asset.metadata.dimensions.height ||
//     !value.asset.metadata.dimensions.width
//   ) {
//     return false;
//   }
//   return true;
// }

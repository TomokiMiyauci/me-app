import type { JSX } from "react";
import type { PictureFragment } from "./picture.graphql.ts";
import { Img, type SanityImageObject } from "@biggleszx/react-sanity-image";
import client from "@/lib/sanity_client.ts";
import type { SanityAsset } from "@sanity/image-url";

export interface PictureProps {
  fragment: PictureFragment;
}

interface ImgImage extends SanityAsset, SanityImageObject {}

export default function Picture(
  props: PictureProps & JSX.IntrinsicElements["img"],
): JSX.Element {
  const { fragment, ...rest } = props;

  const image = fragment.image;
  const result = validate(image);
  const description = fragment.description;

  if (!result) throw new Error("unreachable");

  return (
    <Img
      {...rest}
      alt={description ?? undefined}
      client={client}
      image={image}
    />
  );
}

function validate(value: PictureFragment["image"]): value is ImgImage {
  if (
    !value?.asset ||
    !value.asset.metadata ||
    !value.asset.metadata.dimensions ||
    !value.asset.metadata.dimensions.height ||
    !value.asset.metadata.dimensions.width
  ) {
    return false;
  }
  return true;
}

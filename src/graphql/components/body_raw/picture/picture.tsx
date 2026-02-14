import type { JSX } from "react";
import type { PortableTextTypeComponentProps } from "@portabletext/react";
import type {
  Image as ImageRaw,
  Picture as PictureRaw,
} from "@/graphql/types.ts";
import Picture from "@/graphql/components/picture/picture.tsx";
import type { PictureFragment } from "@/graphql/components/picture/picture.graphql.ts";
import { parseImageRef } from "./util.ts";

interface DocumentReference {
  _ref: string;
  _type: string;
}

interface ImageReference extends Pick<ImageRaw, "_type"> {
  asset?: DocumentReference;
}

interface PictureReference extends
  Pick<
    PictureRaw,
    "description" | "title" | "_type" | "_key"
  > {
  image?: ImageReference;
}

function toPictureFragment(
  reference: PictureReference,
): PictureFragment | undefined {
  const { description, image } = reference;
  const id = image?.asset?._ref;

  if (!id) return;

  const { width, height } = parseImageRef(id);

  return {
    image: {
      asset: {
        _id: id,
        metadata: {
          dimensions: {
            width,
            height,
          },
        },
      },
    },
    description,
  };
}

export default function PictureType(
  props: PortableTextTypeComponentProps<PictureReference>,
): JSX.Element {
  const fragment = toPictureFragment(props.value);

  if (!fragment) throw new Error("invalid referenced picture data");

  return <Picture className="mx-auto" fragment={fragment} />;
}

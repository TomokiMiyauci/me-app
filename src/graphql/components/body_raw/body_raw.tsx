import type {
  PortableTextReactComponents,
  PortableTextTypeComponentProps,
} from "@portabletext/react";
import type { JSX } from "react";
import CodeBlock, { type CodeBlockFragment } from "./code/code_block.tsx";
import { PortableText } from "@portabletext/react";
import type { TypedObject } from "@portabletext/types";
import Picture from "./picture/picture.tsx";

function Code(
  props: PortableTextTypeComponentProps<CodeBlockFragment>,
): JSX.Element {
  return <CodeBlock fragment={props.value} />;
}

const types = {
  code: Code,
  picture: Picture,
} satisfies PortableTextReactComponents["types"];

const component = {
  types,
} satisfies Partial<PortableTextReactComponents>;

export interface BodyRawProps {
  fragment: TypedObject[];
}

export default function BodyRaw(props: BodyRawProps): JSX.Element {
  return <PortableText components={component} value={props.fragment} />;
}

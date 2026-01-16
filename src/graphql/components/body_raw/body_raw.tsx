import type {
  PortableTextReactComponents,
  PortableTextTypeComponentProps,
} from "@portabletext/react";
import type { JSX } from "react";
import type { Code as CodeType } from "@/graphql/types.ts";
import { CodeBlock, ShikiHighlighter } from "~component";
import { PortableText } from "@portabletext/react";
import type { TypedObject } from "@portabletext/types";
import Picture from "./picture/picture.tsx";

function Code(
  props: PortableTextTypeComponentProps<CodeType>,
): JSX.Element {
  const { code, language, filename } = props.value;

  return (
    <CodeBlock
      fileName={filename ?? undefined}
      code={code ?? ""}
      language={language ?? undefined}
      highlighter={new ShikiHighlighter()}
      className="not-prose"
    />
  );
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

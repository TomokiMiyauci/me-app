import { type JSX, lazy } from "react";
import {
  type Components,
  TinaMarkdown,
  type TinaMarkdownContent,
} from "tinacms/dist/rich-text";
import { CodeBlock, ShikiHighlighter } from "~component";
const Mermaid = lazy(() => import("./mermaid.tsx"));

const component = {
  code_block: (props) => {
    const { lang, value } = props ?? {};

    if (lang === "mermaid") {
      return <Mermaid className="not-prose my-8">{value}</Mermaid>;
    }

    return (
      <CodeBlock
        language={lang}
        highlighter={new ShikiHighlighter()}
        code={value ?? ""}
        className="not-prose my-5"
      />
    );
  },
  // deno-lint-ignore ban-types
} satisfies Components<{}>;

export interface BodyRawProps {
  fragment: TinaMarkdownContent | TinaMarkdownContent[];
}

export default function BodyRaw(props: BodyRawProps): JSX.Element {
  return <TinaMarkdown components={component} content={props.fragment} />;
}
